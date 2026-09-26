import type { Metadata } from "next";
import { AppHeader } from "@/components/layout/app-header";
import { CheckoutShell } from "@/components/checkout/checkout-shell";
import { findOutfit } from "@/data/outfits";

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
    <div className="min-h-dvh w-full overflow-x-hidden bg-white text-black">
      <div className="mx-auto flex min-h-dvh w-full min-w-0 max-w-[100vw] justify-center px-0 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex min-h-dvh w-full min-w-0 max-w-[100vw] flex-col border-x border-black bg-white sm:max-w-[390px] md:max-w-[390px] lg:max-w-[420px] xl:max-w-[440px] 2xl:max-w-[480px]">
          <AppHeader />
          <main className="flex min-h-0 flex-1 flex-col">
            <CheckoutShell outfit={outfit} />
          </main>
        </div>
      </div>
    </div>
  );
}
