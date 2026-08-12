#!/bin/bash
# Phase 1: force sharp to regenerate every real /_next/image variant at origin,
# bypassing Cloudflare's existing cache via a random cache-busting query param.
#
# Run this BEFORE purging Cloudflare — it only writes to the origin's own
# persistent .next/cache/images volume (mounted via docker-compose as
# ./tours365-imgcache:/app/.next/cache/images), so it's safe to run at any
# pace without affecting what's currently served to real visitors.
#
# See README.md in this folder for the full purge/warm workflow this fits into.

#command to run chmod +x regenerate-image.sh
# command to run  nohup ./regenerate-image.sh > ~/phase1.out 2>&1 &

set -u
DOMAIN="https://365tours.in"
ACCEPT="image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
SLEEP=0.3                      # throttle between requests; raise if origin looks strained
LOG=~/phase1-regenerate.log
FAILLOG=~/phase1-failures.log
> "$LOG"
> "$FAILLOG"

# sitemap.xml only lists the parent /india page, not the individual state
# pages — confirmed 2026-08-12. Supplement manually until the sitemap itself
# is fixed, otherwise these pages' images never get regenerated/warmed.
INDIA_STATE_PAGES="
$DOMAIN/india/andaman
$DOMAIN/india/andhra-pradesh
$DOMAIN/india/bihar
$DOMAIN/india/chhattisgarh
$DOMAIN/india/goa
$DOMAIN/india/gujarat
$DOMAIN/india/himachal-pradesh
$DOMAIN/india/jammu-and-kashmir
$DOMAIN/india/jharkhand
$DOMAIN/india/karnataka
$DOMAIN/india/kerala
$DOMAIN/india/ladakh
$DOMAIN/india/madhya-pradesh
$DOMAIN/india/maharashtra
$DOMAIN/india/new-delhi
$DOMAIN/india/northeast
$DOMAIN/india/odisha
$DOMAIN/india/punjab
$DOMAIN/india/rajasthan
$DOMAIN/india/sikkim
$DOMAIN/india/tamil-nadu
$DOMAIN/india/telangana
$DOMAIN/india/uttar-pradesh
$DOMAIN/india/uttarakhand
$DOMAIN/india/west-bengal
"

echo "Fetching sitemap..."
PAGES=$(curl -s -A "$UA" "$DOMAIN/sitemap.xml" | grep -oP '(?<=<loc>)[^<]+')
PAGES=$(printf '%s\n%s\n' "$PAGES" "$INDIA_STATE_PAGES" | grep -v '^$' | sort -u)
PAGE_COUNT=$(echo "$PAGES" | wc -l)
echo "Found $PAGE_COUNT pages (sitemap + $(echo "$INDIA_STATE_PAGES" | grep -c .) manually-added India state pages)."

echo "Extracting all /_next/image URLs referenced across those pages..."
ALL_IMG_URLS=$(mktemp)
for page in $PAGES; do
  curl -s -A "$UA" "$page" | grep -oP '/_next/image\?[^"'"'"' ]+' >> "$ALL_IMG_URLS"
done
# HTML source escapes "&" as "&amp;" inside attribute values — decode before use,
# otherwise the query string parses as a single bogus "amp;w"/"amp;q" key and
# Next's route 400s on every request.
sed -i 's/&amp;/\&/g' "$ALL_IMG_URLS"
sort -u "$ALL_IMG_URLS" -o "$ALL_IMG_URLS"
TOTAL=$(wc -l < "$ALL_IMG_URLS")
echo "Found $TOTAL unique image variants (all real widths/qualities as actually rendered)."

echo "Regenerating each at origin (cache-busted, bypasses Cloudflare)..."
i=0
while IFS= read -r img; do
  i=$((i+1))
  # img already contains "&" separators for w=, q= etc — append cache-buster
  sep="&"
  [[ "$img" == *"?"* ]] || sep="?"
  busted="${DOMAIN}${img}${sep}_cb=${RANDOM}${RANDOM}"

  result=$(curl -s -o /dev/null --max-time 60 -w '%{http_code} %{content_type} %{time_total}' \
    -H "Accept: $ACCEPT" -A "$UA" "$busted")
  [[ -z "$result" ]] && result="000 timeout 60.000000"
  echo "[$i/$TOTAL] $img -> $result" >> "$LOG"

  code=$(echo "$result" | awk '{print $1}')
  ctype=$(echo "$result" | awk '{print $2}')
  if [[ "$code" != "200" || "$ctype" == *"jpeg"* || "$ctype" == *"png"* ]]; then
    echo "$img -> $result" >> "$FAILLOG"
  fi

  if (( i % 50 == 0 )); then
    echo "  progress: $i / $TOTAL"
  fi
  sleep "$SLEEP"
done < "$ALL_IMG_URLS"

rm -f "$ALL_IMG_URLS"
echo "Done. $(wc -l < "$FAILLOG") entries still non-AVIF/WebP or failed — see $FAILLOG"
echo "Full log: $LOG"
