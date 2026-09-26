import type { Outfit } from "@/types/outfit";
import { OutfitCard } from "@/components/feed/outfit-card";

export function FeedShell({ outfits }: { outfits: Outfit[] }) {
  if (outfits.length === 0) {
    return (
      <p className="px-4 py-10 text-sm text-neutral-600 md:px-6 xl:px-8">
        No outfits in the catalog yet.
      </p>
    );
  }

  return (
    <section
      aria-label="Outfit feed"
      className="h-full w-full min-w-0 max-w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
