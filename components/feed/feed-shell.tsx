import type { Outfit } from "@/types/outfit";
import { OutfitCard } from "@/components/feed/outfit-card";

export function FeedShell({ outfits }: { outfits: Outfit[] }) {
  if (outfits.length === 0) {
    return <p className="p-6 text-sm">No outfits in the catalog yet.</p>;
  }

  return (
    <section
      aria-label="Outfit feed"
      className="h-full snap-y snap-mandatory overflow-y-auto"
    >
      {outfits.map((outfit) => (
        <OutfitCard key={outfit.id} outfit={outfit} />
      ))}
    </section>
  );
}
