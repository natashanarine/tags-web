import type { Metadata } from "next";
import { FeedShell } from "@/components/feed/feed-shell";
import { outfits } from "@/data/outfits";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="h-dvh w-full overflow-x-hidden bg-white text-black">
      <div className="mx-auto flex h-full w-full min-w-0 max-w-[100vw] justify-center px-0 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex h-full w-full min-w-0 max-w-[100vw] flex-col border-x border-black bg-white sm:max-w-[390px] md:max-w-[390px] lg:max-w-[420px] xl:max-w-[440px] 2xl:max-w-[480px]">
          <header className="flex shrink-0 items-center justify-between border-b border-black px-4 py-3 md:px-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] sm:text-[11px]">
              Tags
            </p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
              Feed
            </p>
          </header>
          <main className="min-h-0 min-w-0 flex-1">
            <FeedShell outfits={outfits} />
          </main>
        </div>
      </div>
    </div>
  );
}
