import { formatPrice } from "@/data/outfits";
import type { Outfit } from "@/types/outfit";

export function ProductInfo({ outfit }: { outfit: Outfit }) {
  return (
    <div className="flex shrink-0 flex-col gap-8 border-t border-black bg-white px-6 py-8">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          {outfit.store}
        </p>
        <h2 className="text-2xl font-medium leading-tight tracking-tight">
          {outfit.title}
        </h2>
        <p className="max-w-prose text-sm leading-relaxed text-neutral-600">
          {outfit.description}
        </p>
        <p className="pt-1 text-base tracking-wide">{formatPrice(outfit.price)}</p>
      </div>
      <button
        type="button"
        className="w-full border border-black bg-black px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-white"
      >
        Buy this look
      </button>
    </div>
  );
}
