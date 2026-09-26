import type { Outfit } from "@/types/outfit";
import { MediaStage } from "@/components/feed/media-stage";
import { ProductInfo } from "@/components/feed/product-info";

export function OutfitCard({ outfit }: { outfit: Outfit }) {
  return (
    <article className="flex h-dvh shrink-0 snap-start snap-always flex-col">
      <MediaStage outfit={outfit} />
      <ProductInfo outfit={outfit} />
    </article>
  );
}
