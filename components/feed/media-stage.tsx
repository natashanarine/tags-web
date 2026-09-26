import type { Outfit } from "@/types/outfit";
import { FeedMedia } from "@/components/feed/feed-media";

export function MediaStage({
  outfit,
  priority = false,
}: {
  outfit: Outfit;
  priority?: boolean;
}) {
  return (
    <div className="relative min-h-0 flex-1 bg-neutral-100">
      <FeedMedia outfit={outfit} priority={priority} />
    </div>
  );
}
