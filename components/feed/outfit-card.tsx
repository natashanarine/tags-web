import type { Outfit } from "@/types/outfit";
import { FeedItemChrome } from "@/components/feed/feed-item-chrome";
import { MediaStage } from "@/components/feed/media-stage";
import { ProductInfo } from "@/components/feed/product-info";

export function OutfitCard({ outfit }: { outfit: Outfit }) {
  return (
    <article className="relative h-[calc(100dvh-3.25rem)] w-full min-w-0 max-w-full shrink-0 snap-start snap-always overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 flex min-h-0 flex-col">
        <FeedItemChrome />
        <MediaStage />
      </div>
      <ProductInfo outfit={outfit} />
    </article>
  );
}
