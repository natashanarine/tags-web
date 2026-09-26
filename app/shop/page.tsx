import type { Metadata } from "next";
import { AppHeader } from "@/components/layout/app-header";
import { FeedShell } from "@/components/feed/feed-shell";
import { outfits } from "@/data/outfits";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="h-dvh bg-white text-black">
      <div className="mx-auto flex h-full w-full max-w-md flex-col border-x border-black bg-white md:max-w-lg">
        <AppHeader />
        <main className="min-h-0 flex-1">
          <FeedShell outfits={outfits} />
        </main>
      </div>
    </div>
  );
}
