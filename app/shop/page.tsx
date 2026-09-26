import type { Metadata } from "next";
import { AvatarStage } from "@/components/avatar/avatar-stage";
import { FeedShell } from "@/components/feed/feed-shell";
import { outfits } from "@/data/outfits";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="h-dvh w-full overflow-x-hidden bg-white text-black">
      <div className="mx-auto flex h-full w-full min-w-0 max-w-[100vw] justify-center px-0 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex h-full w-full min-w-0 max-w-[100vw] flex-col border-x border-black bg-neutral-50 sm:max-w-[390px] md:max-w-[390px] lg:max-w-[420px] xl:max-w-[440px] 2xl:max-w-[480px]">
          <header className="relative z-30 flex shrink-0 items-center justify-between border-b border-black bg-white px-4 py-3 md:px-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] sm:text-[11px]">
              Tags
            </p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]">
              Feed
            </p>
          </header>
          <main className="relative min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain snap-y snap-mandatory">
            <div className="pointer-events-auto absolute inset-x-0 bottom-[min(24vh,12rem)] top-0 z-[15] md:bottom-[min(22vh,11rem)]">
              <AvatarStage className="h-full w-full" />
            </div>
            <FeedShell outfits={outfits} />
          </main>
        </div>
      </div>
    </div>
  );
}
