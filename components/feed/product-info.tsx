import Link from "next/link";
import { formatPrice } from "@/data/outfits";
import type { Outfit } from "@/types/outfit";

export function ProductInfo({ outfit }: { outfit: Outfit }) {
  return (
    <div className="flex shrink-0 flex-col gap-4 border-t border-black px-4 py-5">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-widest">{outfit.store}</p>
        <h2 className="text-xl font-medium">{outfit.title}</h2>
        <p className="text-sm text-neutral-600">{outfit.description}</p>
        <p className="text-sm">{formatPrice(outfit.price)}</p>
      </div>
      <Link
        href={`/checkout?outfit=${outfit.id}`}
        className="inline-flex w-full items-center justify-center border border-black bg-black px-4 py-3 text-xs uppercase tracking-widest text-white"
      >
        Buy this look
      </Link>
    </div>
  );
}
