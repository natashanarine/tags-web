import { ModelSilhouette } from "@/components/feed/model-silhouette";

/**
 * Primary try-on presentation surface.
 * TODO(media): Swap ModelSilhouette for bundled video / 3D try-on output.
 */
export function MediaStage() {
  return (
    <div className="relative flex h-full min-h-0 w-full min-w-0 items-center justify-center overflow-hidden bg-neutral-50">
      <ModelSilhouette />
    </div>
  );
}
