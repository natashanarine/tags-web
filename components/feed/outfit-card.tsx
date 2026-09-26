import type { Outfit } from "@/types/outfit";
import { FeedItemChrome } from "@/components/feed/feed-item-chrome";
import { MediaStage } from "@/components/feed/media-stage";
import { ProductInfo } from "@/components/feed/product-info";

export function OutfitCard({ outfit }: { outfit: Outfit }) {
  return (
    <article className="relative h-full w-full min-w-0 max-w-full shrink-0 snap-start snap-always overflow-hidden bg-transparent">
      <div className="absolute inset-0 flex min-h-0 flex-col pointer-events-none">
        <FeedItemChrome />
        <MediaStage />
      </div>
      <ProductInfo outfit={outfit} />
    </article>
  );
}
