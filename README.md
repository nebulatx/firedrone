# firedrone

## Requirements

- On macOS, install image conversion tooling with Homebrew before processing photos:

```bash
brew install ffmpeg webp
```

- The conversion script expects WebP encoding support to be available through `ffmpeg` or `cwebp`.
- Converted images target a maximum width of `1024` pixels at WebP quality `90`.

## Photo Conversion

- Source images belong in `photo_inbox/` and should not be committed.
- Run `./scripts/convert_photo_inbox.sh` to convert inbox images into WebP assets in `assets/`.

## Local Preview

- Run `./scripts/serve_local.sh` to serve the site locally at `http://localhost:8000`.
- Optionally pass a port, for example `./scripts/serve_local.sh 4173`.
