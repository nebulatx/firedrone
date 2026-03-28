# firedrone

## Requirements

- On macOS, install image conversion tooling with Homebrew before processing photos:

```bash
brew install ffmpeg webp
```

- The conversion script expects WebP encoding support to be available through `ffmpeg` or `cwebp`.

## Photo Conversion

- Source images belong in `photo_inbox/` and should not be committed.
- Run `./scripts/convert_photo_inbox.sh` to convert inbox images into WebP assets in `assets/`.
