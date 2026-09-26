import Link from "next/link";
import type { Outfit } from "@/types/outfit";

export function ProductInfo({ outfit }: { outfit: Outfit }) {
  return (
    <div className="feed-product pointer-events-auto absolute inset-x-0 bottom-0 z-20 flex w-full min-w-0 flex-col gap-5 bg-white/55 px-4 py-5 backdrop-blur-[6px] sm:px-5 md:px-6 md:py-6">
      <p className="inline-flex w-fit border border-neutral-300 bg-white/80 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-neutral-600">
        {outfit.category}
      </p>

      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-medium leading-tight tracking-tight text-black md:text-2xl">
          {outfit.title}
        </h2>
        <p className="shrink-0 text-base font-medium tracking-wide text-black md:text-lg">
          {outfit.priceDisplay}
        </p>
      </div>

      <p className="line-clamp-2 text-sm leading-relaxed text-neutral-700 md:line-clamp-3">
        {outfit.description}
      </p>

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          className="flex-1 border border-black bg-white/90 px-3 py-3.5 text-[10px] uppercase tracking-[0.3em] text-black sm:text-[11px]"
        >
          Button
        </button>
        <Link
          href={`/checkout?outfit=${outfit.id}`}
          className="inline-flex flex-[1.2] items-center justify-center border border-black bg-black px-3 py-3.5 text-[10px] uppercase tracking-[0.3em] text-white sm:text-[11px]"
        >
          View Item
        </Link>
      </div>
    </div>
  );
}
