# Mock outfit media

Static and pre-rendered try-on assets for the hardcoded catalog in `data/outfits.ts`.

## Naming

Each outfit uses its catalog `id` as the filename stem:

| Asset | Path | Status |
| ----- | ---- | ------ |
| Preview image | `/mock/outfits/{id}.svg` | Placeholder SVGs checked in for all five items |
| Try-on video | `/mock/outfits/{id}.mp4` | Not bundled yet — set `video` in catalog when added |

## Catalog ids

- `black-oversized-tee`
- `straight-leg-trousers`
- `cropped-jacket`
- `knit-sweater`
- `relaxed-denim`

Do not hotlink retailer or external image URLs. Replace SVGs with final bundled PNG/JPG or MP4 when assets are ready.
