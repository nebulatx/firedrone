#!/usr/bin/env bash

set -euo pipefail

SOURCE_DIR="${1:-photo_inbox}"
OUTPUT_DIR="${2:-assets}"
MAX_WIDTH=1024
WEBP_QUALITY=90

has_ffmpeg_encoder=0

if command -v ffmpeg >/dev/null 2>&1 && ffmpeg -hide_banner -encoders 2>/dev/null | grep -q 'webp'; then
  has_ffmpeg_encoder=1
fi

if [ "$has_ffmpeg_encoder" -eq 0 ] && ! command -v cwebp >/dev/null 2>&1; then
  echo "WebP encoding requires ffmpeg with a WebP encoder or cwebp in PATH." >&2
  exit 1
fi

mkdir -p "$SOURCE_DIR" "$OUTPUT_DIR"

converted=0

while IFS= read -r -d '' file; do
  relative_path="${file#"$SOURCE_DIR"/}"
  output_path="$OUTPUT_DIR/${relative_path%.*}.webp"

  mkdir -p "$(dirname "$output_path")"

  if [ "$has_ffmpeg_encoder" -eq 1 ]; then
    ffmpeg -y -i "$file" \
      -vf "scale='min($MAX_WIDTH,iw)':-2" \
      -c:v webp \
      -quality "$WEBP_QUALITY" \
      "$output_path" \
      >/dev/null 2>&1
  else
    cwebp -quiet -resize "$MAX_WIDTH" 0 -q "$WEBP_QUALITY" "$file" -o "$output_path"
  fi

  echo "Converted $file -> $output_path"
  converted=$((converted + 1))
done < <(
  find "$SOURCE_DIR" -type f \
    \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.heic' -o -iname '*.heif' -o -iname '*.avif' -o -iname '*.tif' -o -iname '*.tiff' \) \
    -print0
)

if [ "$converted" -eq 0 ]; then
  echo "No supported images found in $SOURCE_DIR"
fi
