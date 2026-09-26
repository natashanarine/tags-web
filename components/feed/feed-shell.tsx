import type { Outfit } from "@/types/outfit";
import { FeedEmptyState } from "@/components/feed/feed-empty-state";
import { FeedLoadingState } from "@/components/feed/feed-loading-state";
import { OutfitCard } from "@/components/feed/outfit-card";

type FeedShellProps = {
  outfits: Outfit[];
  isLoading?: boolean;
};

export function FeedShell({ outfits, isLoading = false }: FeedShellProps) {
  if (isLoading) {
    return (
      <div className="h-full w-full min-w-0" aria-busy="true" aria-label="Loading outfit feed">
        <FeedLoadingState />
      </div>
    );
  }

  if (outfits.length === 0) {
    return (
      <div className="h-full w-full min-w-0" aria-label="Empty outfit feed">
        <FeedEmptyState />
      </div>
    );
  }

  return (
    <section
      aria-label="Outfit feed"
      className="pointer-events-none relative z-20 w-full min-w-0 max-w-full"
    >
      {outfits.map((outfit) => (
        <OutfitCard key={outfit.id} outfit={outfit} />
      ))}
    </section>
  );
}
