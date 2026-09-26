import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/outfits";
import type { Outfit } from "@/types/outfit";

const PLACEHOLDER_IMAGE = "/mock/outfits/black-oversized-tee.svg";

type CheckoutShellProps = {
  outfit?: Outfit;
};

export function CheckoutShell({ outfit }: CheckoutShellProps) {
  const subtotal = outfit?.price ?? 0;
  const total = subtotal;

  return (
    <div className="flex flex-1 flex-col gap-10 px-4 py-8 sm:px-5 md:px-6 md:py-10 xl:px-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">Checkout</h1>
        <p className="text-sm text-neutral-600">
          Payment is not connected. This screen is a layout preview only.
        </p>
      </div>

      <article className="space-y-6 border border-black p-4 md:p-5">
        <div className="relative aspect-[3/4] w-full max-w-[200px] bg-neutral-100">
          <Image
            src={outfit?.image ?? PLACEHOLDER_IMAGE}
            alt={outfit?.title ?? "Selected item placeholder"}
            fill
            unoptimized
            className="object-cover"
            sizes="200px"
          />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
            {outfit?.store ?? "Store"}
          </p>
          <p className="text-lg font-medium md:text-xl">
            {outfit?.title ?? "Select an item from the feed"}
          </p>
          <p className="text-sm tracking-wide">
            {outfit ? formatPrice(outfit.price) : "—"}
          </p>
        </div>
      </article>

      <dl className="space-y-4 border-t border-black pt-6 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-neutral-600">Subtotal</dt>
          <dd>{outfit ? formatPrice(subtotal) : "—"}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-neutral-200 pt-4 text-base">
          <dt className="font-medium">Total</dt>
          <dd className="font-medium">{outfit ? formatPrice(total) : "—"}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-col gap-3 pt-4">
        <button
          type="button"
          disabled={!outfit}
          className="w-full border border-black bg-black px-4 py-4 text-[10px] uppercase tracking-[0.35em] text-white disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:border-neutral-400 sm:text-[11px]"
        >
          Checkout
        </button>
        <Link
          href="/shop"
          className="text-center text-[10px] uppercase tracking-[0.35em] text-black underline sm:text-[11px]"
        >
          Back to feed
        </Link>
      </div>
    </div>
  );
}
