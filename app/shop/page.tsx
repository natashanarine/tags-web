import type { Metadata } from "next";
import { AppHeader } from "@/components/layout/app-header";
import { FeedShell } from "@/components/feed/feed-shell";
import { outfits } from "@/data/outfits";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <div className="mx-auto flex h-dvh w-full max-w-md flex-col border-x border-black">
        <AppHeader />
        <main className="min-h-0 flex-1">
          <FeedShell outfits={outfits} />
        </main>
      </div>
    </div>
  );
}
