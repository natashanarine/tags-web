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
    <div className="relative h-full min-h-0 min-w-0 overflow-hidden bg-neutral-100">
      <FeedMedia outfit={outfit} priority={priority} />
    </div>
  );
}
