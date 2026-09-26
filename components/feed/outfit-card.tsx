import type { Outfit } from "@/types/outfit";
import { FeedItemChrome } from "@/components/feed/feed-item-chrome";
import { MediaStage } from "@/components/feed/media-stage";
import { ProductInfo } from "@/components/feed/product-info";

export function OutfitCard({ outfit }: { outfit: Outfit }) {
  return (
    <article className="grid h-full w-full min-w-0 max-w-full shrink-0 snap-start snap-always grid-rows-[minmax(0,1fr)_auto] overflow-hidden bg-white">
      <div className="relative min-h-0">
        <FeedItemChrome />
        <MediaStage />
      </div>
      <ProductInfo outfit={outfit} />
    </article>
  );
}
