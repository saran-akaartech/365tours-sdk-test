# Image cache warming — AVIF/WebP rollout

## Background

`next.config.js` configures the Next.js image optimizer to serve AVIF/WebP:

```js
formats: ["image/avif", "image/webp"],
```

This conversion is done by `sharp` at request time via the `/_next/image` route.
Two independent caches sit in front of that conversion:

1. **Origin cache** — Next's own `.next/cache/images`, persisted via a Docker
   volume (`./tours365-imgcache:/app/.next/cache/images` in
   `Server_Infra_Git/Axilrate-intel/docker-compose.yml`). Survives container
   rebuilds. Cache key includes the negotiated output format (mimeType), so
   AVIF and JPEG entries for the same source/width/quality never collide.
2. **Cloudflare edge cache / Cache Reserve** — sits in front of the origin.
   On the free tier, Cloudflare does **not** vary its cache by the `Accept`
   header, so it stores one representation per URL. If a URL was cached
   before this fix (or before `sharp` was reliably producing AVIF), it will
   keep serving that stale format to everyone — regardless of what any given
   visitor's browser actually supports — until purged or its TTL (currently
   overridden to 1 year at the edge) expires.

`sharp` is a native module. It must be a declared dependency (`package.json`
+ `package-lock.json`, installed via `npm ci` in the Dockerfile's `deps`
stage) rather than an ad-hoc `RUN npm install sharp` — an untracked install
risks drifting versions between builds and (based on investigation) may not
reliably survive Next's `output: "standalone"` file tracing.

AVIF encoding is CPU-heavy. Under concurrency on a constrained container
(`cpus: "1"` in compose), conversions queue and get slow (single request
~1.5-2s, 8 concurrent requests took 5-11s each) — but do not actually fail
or fall back to JPEG. The historical JPEG-heavy origin cache (from before
this fix) is legacy residue that simply never gets evicted, not an active
ongoing failure.

## When you need to do this

Any time source images or the optimizer pipeline change in a way that
invalidates previously-cached `/_next/image` responses — e.g. this AVIF/WebP
fix, or a future change to `sharp` version, quality settings, or `formats`.
**Not** needed on routine deploys that don't touch image handling — the
origin cache persists across rebuilds, and Cloudflare's cache is unaffected
by redeploys entirely.

## Workflow

### Phase 0 — deploy the fix, verify manually

1. Deploy the rebuilt `tours365` image (sharp now installed via lockfile).
2. Spot-check one URL directly, bypassing any cached response with a
   cache-busting param:
   ```bash
   curl -sI -H "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" \
     "https://365tours.in/_next/image?url=%2Fhero%2Findonesia.jpg&w=1200&q=75&_cb=$RANDOM" \
     | grep -iE "cf-cache-status|content-type"
   ```
   Confirm `content-type: image/avif`.

### Phase 1 — force-regenerate every real image variant at origin

Run `phase1-regenerate.sh` (this folder) on the server. It:

1. Pulls every page URL from `/sitemap.xml`, plus a hardcoded list of the 25
   `/india/<state>` pages (see caveat below — these are missing from the
   sitemap itself).
2. Fetches each page's real HTML and extracts every `/_next/image?...` URL
   actually referenced — this captures every width Next generated in
   `srcset` for that image (no guessing at sizes).
3. Dedupes the list.
4. For each unique URL, appends a random `_cb=` param and requests it with a
   modern `Accept` header. The cache-buster forces Cloudflare to forward to
   origin every time (bypassing whatever — possibly stale — response it has
   cached for the real URL), while Next's own cache key ignores the unknown
   param and resolves to the correct entry, writing the real AVIF/WebP into
   the persisted origin cache.
5. Logs progress to `~/phase1-regenerate.log` and flags anything that came
   back non-AVIF/WebP or failed to `~/phase1-failures.log`.

Because this only touches the origin's own persistent cache — not
Cloudflare — **it's safe to run at any pace, for however long it takes**,
without affecting what real visitors currently see.

```bash
scp docs/image-cache-warming/phase1-regenerate.sh opc@axilrate-intel:~/
ssh opc@axilrate-intel "chmod +x phase1-regenerate.sh && nohup ./phase1-regenerate.sh > ~/phase1.out 2>&1 &"
```

Optional — lift the CPU/memory limits on `tours365` for this window to speed
it up (see "Resource limits" below), then put them back afterward.

When it finishes, check `~/phase1-failures.log`. Ideally near-empty; re-run
the script (or just the failed subset) if not.

#### Caveat — sitemap.xml doesn't list the India state pages (fixed 2026-08-12)

Found live 2026-08-12: `/sitemap.xml` only contained the parent `/india`
page — none of the 25 `/india/<state>` pages (`/india/kerala`, `/india/goa`,
etc., full list in `docs/URLs to purge.txt`) were listed, even though all
are live, real pages (`200 OK`). All 91 `/destination/*` pages, by contrast,
were correctly present — the gap was isolated to India's state pages.

**Root cause, fixed at the source**: `app/sitemap.ts` builds destination
routes from the `destinations` data source via `.map()`, but only ever added
one hardcoded `/india` entry — it never looped over the individual states.
Fixed by mapping over `indiaStateDetails` from `lib/india-states.ts` (the
same data source the `/india/[state]` pages themselves render from) the same
way destinations are handled. Once that fix is deployed, `/sitemap.xml` will
list all 26 India URLs automatically.

Until it's deployed, or as a standing safety net afterward,
`phase1-regenerate.sh` and the Phase 2 command below still carry a hardcoded
supplement of those 25 URLs — harmless to leave in place even after the
sitemap fix ships, since a duplicate URL in the list is a no-op.

**`phase1-regenerate-india.sh`** is a standalone companion covering only the
`/india` parent page + 25 state pages, for cases where a full sitemap-wide
re-run (thousands of entries, potentially hours) isn't warranted — e.g. this
gap was discovered after an already-completed full run, so only the India
subset needed covering, not everything again. Same mechanism, own log files
(`~/phase1-india-regenerate.log` / `~/phase1-india-failures.log`).

### Phase 2 — purge Cloudflare, then run the real warming crawl

Only after Phase 1 completes:

1. **Purge Cloudflare.** Free tier only supports "Purge Everything" or an
   exact URL list (no prefix/hostname purge) — given the volume of image
   URLs involved, "Purge Everything" during a low-traffic window is the
   practical choice. This also purges HTML, which is harmless collateral
   (HTML itself didn't change).
2. Run the real warming crawl — now fast, since every request is a cache hit
   on the origin's already-populated `.next/cache/images`, not a fresh
   `sharp` encode:
   ```bash
   curl -s https://365tours.in/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' > ~/sitemap-urls.txt
   # sitemap.xml is missing the 25 /india/<state> pages — see Phase 1 caveat above
   for state in andaman andhra-pradesh bihar chhattisgarh goa gujarat \
     himachal-pradesh jammu-and-kashmir jharkhand karnataka kerala ladakh \
     madhya-pradesh maharashtra new-delhi northeast odisha punjab rajasthan \
     sikkim tamil-nadu telangana uttar-pradesh uttarakhand west-bengal; do
     echo "https://365tours.in/india/$state"
   done >> ~/sitemap-urls.txt

   nohup wget --input-file=~/sitemap-urls.txt --page-requisites --domains=365tours.in \
     --delete-after -e robots=off --no-verbose --timeout=30 --tries=2 \
     --wait=0.5 --random-wait \
     --header="Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" \
     > ~/prewarm.log 2>&1 &
   ```
   The explicit `Accept` header matters — `wget`'s default (`*/*`) doesn't
   advertise AVIF/WebP support, and Next's format negotiation requires the
   literal `image/avif`/`image/webp` substring in the request, so without
   this header the crawl would just re-cache JPEG at Cloudflare. `--wait`/
   `--random-wait` add a small randomized pause between requests — `wget`
   is already sequential (no concurrency), but this keeps the crawl polite
   and avoids tripping any rate-limiting/bot-detection on Cloudflare's side.

   **Use `--input-file` from the sitemap, not `--recursive`.** An earlier
   version of this crawl used `--recursive --level=3` starting from the
   homepage, discovering pages by following links up to 3 hops deep. That
   can miss real pages that happen to sit deeper than 3 clicks in the nav
   structure — and since Phase 1 discovers pages via the sitemap (which
   lists every real page regardless of link depth), a link-depth-based
   crawl in Phase 2 could warm a smaller page set than Phase 1 already
   covered at origin, leaving some images un-warmed at the edge. Feeding
   `wget` the same sitemap-derived URL list Phase 1 used guarantees
   identical page coverage between the two phases.

Each response from this pass gets freshly cached into Cloudflare's edge and
Cache Reserve under the real production URLs.

**Run this once, not once-per-format.** Because Cloudflare (free tier)
caches a single representation per URL, a second pass with a different
`Accept` header (e.g. WebP-only, no AVIF) would not add a second cached
variant alongside the AVIF one — it would simply overwrite it, since it's
the same URL. Whichever pass runs last is what every visitor gets. There is
no dual-storage without Cloudflare's Vary-based image caching actually
enabled (see caveat below).

#### Caveat — single cached format means one size fits all browsers

Since our `Accept` header prefers AVIF first, this crawl locks in **AVIF**
as the one cached representation for every image URL (WebP is essentially
never chosen when AVIF is also accepted). Because Cloudflare's free tier
doesn't vary its cache by `Accept`, **every visitor gets that same cached
AVIF response, regardless of their own browser's actual support** — there's
no per-request format negotiation once a URL is cached, and no client-side
`<picture>`/fallback in the markup (Next renders a plain `<img src>`), so a
browser that can't decode AVIF gets a broken image, not a graceful JPEG
fallback.

AVIF has been supported in Safari since version 16 (Sept 2022) and in all
current major browsers, so the practical exposure at this point is limited
to outdated/unmaintained browsers or embedded webviews with old engines —
likely small, but not measured here. If per-browser correctness matters
more than the compression savings, look into Cloudflare's **"Vary for
images"** feature, which caches AVIF/WebP/JPEG as separate keyed entries per
URL and serves the right one per visitor's actual `Accept` header — check
availability on your plan before relying on it.

### Verify

```bash
curl -sI -H "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8" \
  "https://365tours.in/_next/image?url=%2Fhero%2Findonesia.jpg&w=1200&q=75" \
  | grep -iE "cf-cache-status|content-type|age"
```
Expect `cf-cache-status: HIT` and `content-type: image/avif`.

### Checking origin storage used

```bash
du -sh ./tours365-imgcache                              # total size
find ./tours365-imgcache -type f | wc -l                 # total cached files
du -sh ./tours365-imgcache/*/ | sort -rh | head -20      # largest individual entries
```

## Resource limits

`tours365` normally runs with `mem_limit: 1536m` / `cpus: "1"` in
`docker-compose.yml`, specifically to stop a crawl/bot spike on the public
site from starving the other Axilrate-intel services on the same host. It's
fine to temporarily lift this for the Phase 1 regeneration run to speed it
up — **remember to put the limits back afterward**, since the constraint
exists for a real reason (not just for this exercise).

## Optional — clean up stale JPEG/PNG entries in the origin cache

The origin cache accumulates legacy entries (JPEG/PNG cached before this fix,
or before `sharp` was reliably producing AVIF). These are harmless dead
weight, not a correctness problem — Next's cache key includes the negotiated
output format, so old JPEG entries and new AVIF entries for the same
source/width/quality never collide or overwrite each other. Clearing them is
pure disk hygiene, **not required** for Phase 1/Phase 2 to work correctly,
and can be done any time — before, after, or independent of this workflow.

To check the current breakdown of what's cached:

```bash
find ./tours365-imgcache -type f -exec file {} \; | awk -F': ' '{print $2}' | sed 's/,.*//' | sort | uniq -c
```

To delete just the stale JPEG/PNG entries, leaving AVIF/WebP ones intact
(cache filenames carry their real extension, e.g. `....jpeg`):

```bash
find ./tours365-imgcache -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -delete
find ./tours365-imgcache -mindepth 1 -type d -empty -delete   # clean up now-empty hash dirs
```

Safe to run — these are regenerable derivative cache files, not your source
images in `public/`. Worst case, the next request for that exact format
falls back to a fresh `sharp` encode, same as any normal cache miss. This
has no effect on Cloudflare's cache — separate layer entirely.

## Why not purge first / warm without Phase 1?

Purging Cloudflare and then warming directly (no Phase 1) works too, but
every first-time request then pays the full `sharp` encode cost live, with
real visitor traffic (or the warming crawl) potentially stacking up
concurrent conversions on a CPU-constrained container — the exact scenario
that produced 5-11s response times in testing. Phase 1 front-loads that cost
onto the origin cache before Cloudflare is ever purged, so Phase 2 is quick
and nothing user-facing is slow.

## Note on Google Analytics

None of this crawling (`wget`, `curl`) shows up in GA. GA4/gtag.js fires via
client-side JavaScript execution in a real browser; these tools are plain
HTTP clients that never execute the page's `<script>` tags, so no hit is
ever sent. It does show up in raw server/Cloudflare traffic logs, since
those count actual HTTP requests regardless of JS execution.
