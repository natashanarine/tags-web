import type { Outfit } from "@/types/outfit";
import { MediaStage } from "@/components/feed/media-stage";
import { ProductInfo } from "@/components/feed/product-info";

export function OutfitCard({
  outfit,
  priorityMedia = false,
}: {
  outfit: Outfit;
  priorityMedia?: boolean;
}) {
  return (
    <article className="grid h-full w-full min-w-0 max-w-full shrink-0 snap-start snap-always grid-rows-[minmax(0,1fr)_auto] overflow-hidden">
      <MediaStage outfit={outfit} priority={priorityMedia} />
      <ProductInfo outfit={outfit} />
    </article>
  );
}
