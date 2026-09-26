/** Local mock paths under `public/mock/outfits/`. No remote URLs. */

export function outfitImagePath(outfitId: string) {
  return `/mock/outfits/${outfitId}.svg`;
}

/** Bundled try-on videos keyed by outfit id (empty until MP4s are added). */
const BUNDLED_OUTFIT_VIDEOS: Record<string, string> = {};

/** Returns a bundled video path when the file exists; otherwise null. */
export function outfitVideoPath(outfitId: string): string | null {
  return BUNDLED_OUTFIT_VIDEOS[outfitId] ?? null;
}

export function hasMediaPath(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
