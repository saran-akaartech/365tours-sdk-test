#!/bin/bash
# Companion to phase1-regenerate.sh — covers ONLY the 25 /india/<state> pages,
# which are missing from /sitemap.xml (see README.md caveat) and so were
# never covered by the main sitemap-driven run.
#
# Same mechanism as phase1-regenerate.sh: force sharp to regenerate every
# real /_next/image variant referenced on these pages, bypassing Cloudflare's
# cache via a random cache-busting query param, writing into the origin's
# persistent .next/cache/images volume. Safe to run at any pace.

#command to run chmod +x regenerate-india-images.sh
#command to run  nohup ./regenerate-india-image.sh > ~/phase1.out 2>&1 &  
#command to run tail -f ~/phase1-india-regenerate.log

set -u
DOMAIN="https://365tours.in"
ACCEPT="image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
SLEEP=0.3
LOG=~/phase1-india-regenerate.log
FAILLOG=~/phase1-india-failures.log
> "$LOG"
> "$FAILLOG"

STATES="andaman andhra-pradesh bihar chhattisgarh goa gujarat \
himachal-pradesh jammu-and-kashmir jharkhand karnataka kerala ladakh \
madhya-pradesh maharashtra new-delhi northeast odisha punjab rajasthan \
sikkim tamil-nadu telangana uttar-pradesh uttarakhand west-bengal"

PAGES="$DOMAIN/india"
for s in $STATES; do
  PAGES="$PAGES
$DOMAIN/india/$s"
done
PAGE_COUNT=$(echo "$PAGES" | grep -c .)
echo "Using $PAGE_COUNT India pages (parent + 25 states)."

echo "Extracting all /_next/image URLs referenced across those pages..."
ALL_IMG_URLS=$(mktemp)
for page in $PAGES; do
  curl -s -A "$UA" "$page" | grep -oP '/_next/image\?[^"'"'"' ]+' >> "$ALL_IMG_URLS"
done
sed -i 's/&amp;/\&/g' "$ALL_IMG_URLS"
sort -u "$ALL_IMG_URLS" -o "$ALL_IMG_URLS"
TOTAL=$(wc -l < "$ALL_IMG_URLS")
echo "Found $TOTAL unique image variants."

echo "Regenerating each at origin (cache-busted, bypasses Cloudflare)..."
i=0
while IFS= read -r img; do
  i=$((i+1))
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
