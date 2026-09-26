import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader } from "@/components/layout/app-header";
import { findOutfit, formatPrice } from "@/data/outfits";

export const metadata: Metadata = {
  title: "Checkout",
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const outfitId = firstParam(query.outfit);
  const outfit = outfitId ? findOutfit(outfitId) : undefined;

  return (
    <div className="min-h-dvh bg-white text-black">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col border-x border-black">
        <AppHeader />
        <main className="flex flex-1 flex-col gap-6 px-6 py-8">
          <h1 className="text-2xl font-medium">Checkout</h1>
          {outfit ? (
            <div className="space-y-2 border border-black p-4">
              <p className="text-xs uppercase tracking-widest">{outfit.store}</p>
              <p className="text-lg">{outfit.title}</p>
              <p className="text-sm">
                {formatPrice(outfit.priceCents, outfit.currency)}
              </p>
            </div>
          ) : (
            <p className="text-sm text-neutral-600">
              Select an outfit from the feed to continue.
            </p>
          )}
          <p className="text-sm text-neutral-600">
            Visa checkout is not connected in this build.
          </p>
          <Link href="/shop" className="text-xs uppercase tracking-widest underline">
            Back to feed
          </Link>
        </main>
      </div>
    </div>
  );
}
