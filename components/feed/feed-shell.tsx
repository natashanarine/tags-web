import type { Outfit } from "@/types/outfit";
import { OutfitCard } from "@/components/feed/outfit-card";

export function FeedShell({ outfits }: { outfits: Outfit[] }) {
  if (outfits.length === 0) {
    return (
      <p className="px-6 py-10 text-sm text-neutral-600">
        No outfits in the catalog yet.
      </p>
    );
  }

  return (
    <section
      aria-label="Outfit feed"
      className="h-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto overscroll-y-contain"
    >
      {outfits.map((outfit, index) => (
        <OutfitCard
          key={outfit.id}
          outfit={outfit}
          priorityMedia={index === 0}
        />
      ))}
    </section>
  );
}
