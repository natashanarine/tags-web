import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-black">
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-10 border-x border-black px-6 py-16">
        <div className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em]">Tags</p>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-600">
            Virtual try-on outfit feed — demo entry point.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/shop"
            className="inline-flex w-full items-center justify-center border border-black bg-black px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-white"
          >
            Open feed
          </Link>
          <Link
            href="/onboarding"
            className="text-center text-[11px] uppercase tracking-[0.35em] text-black underline"
          >
            Onboarding
          </Link>
        </div>
      </main>
    </div>
  );
}
