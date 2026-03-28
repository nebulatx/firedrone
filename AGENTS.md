# Repository Guidelines

## Asset Workflow

- `photo_inbox/` is a local-only intake folder for source images and must stay gitignored.
- Any image placed in `photo_inbox/` must be converted to WebP before it is used by the site.
- Converted images must have a maximum width of 768 pixels while preserving aspect ratio.
- Use `ffmpeg` for image conversion.
- Store converted outputs in `assets/`. The `assets/` directory is source controlled and is part of the deployed GitHub Pages site.
- Do not commit raw source images from `photo_inbox/`.

## Automation

- Run `scripts/convert_photo_inbox.sh` to convert supported images from `photo_inbox/` into WebP files in `assets/`.
- The script preserves relative subdirectories from `photo_inbox/` inside `assets/`.
