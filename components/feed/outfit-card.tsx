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
    <article className="flex h-full w-full shrink-0 snap-start snap-always flex-col">
      <MediaStage outfit={outfit} priority={priorityMedia} />
      <ProductInfo outfit={outfit} />
    </article>
  );
}
