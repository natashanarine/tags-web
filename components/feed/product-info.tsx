import Link from "next/link";
import { formatPrice } from "@/data/outfits";
import type { Outfit } from "@/types/outfit";

export function ProductInfo({ outfit }: { outfit: Outfit }) {
  return (
    <div className="flex w-full min-w-0 shrink-0 flex-col gap-4 border-t border-black bg-white px-4 py-4 sm:px-5 md:gap-5 md:px-6 md:py-5 xl:gap-6 xl:px-8 xl:py-6">
      <div className="min-w-0 space-y-2 md:space-y-2.5 xl:space-y-3">
        <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
          {outfit.store}
        </p>
        <h2 className="text-xl font-medium leading-tight tracking-tight md:text-2xl xl:text-[1.75rem] xl:leading-none">
          {outfit.title}
        </h2>
        <p className="line-clamp-2 max-w-prose text-[13px] leading-relaxed text-neutral-600 md:line-clamp-3 md:text-sm xl:line-clamp-none">
          {outfit.description}
        </p>
        <p className="pt-0.5 text-sm tracking-wide md:text-base">
          {formatPrice(outfit.price)}
        </p>
      </div>
      <Link
        href={`/checkout?outfit=${outfit.id}`}
        className="inline-flex w-full shrink-0 items-center justify-center border border-black bg-black px-4 py-3.5 text-[10px] uppercase tracking-[0.35em] text-white sm:text-[11px] md:py-4"
      >
        Buy this look
      </Link>
    </div>
  );
}
