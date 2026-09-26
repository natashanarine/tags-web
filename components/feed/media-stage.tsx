import { ModelSilhouette } from "@/components/feed/model-silhouette";

/**
 * Primary try-on presentation surface.
 * TODO(media): Swap ModelSilhouette for bundled video / 3D try-on output.
 */
export function MediaStage() {
  return (
    <div className="relative flex h-full min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden pb-[min(22vh,11rem)] pt-6 md:pb-[min(20vh,10rem)] md:pt-8">
      <ModelSilhouette />
    </div>
  );
}
