import Link from "next/link";

export function OnboardingShell() {
  return (
    <div className="flex flex-1 flex-col justify-between px-6 py-10">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em]">Tags</p>
        <h1 className="max-w-xs text-3xl font-medium leading-tight">
          Scroll outfits on you. Buy the look in one tap.
        </h1>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          This demo uses a hardcoded catalog and bundled try-on media. No sign-in
          required.
        </p>
      </div>
      <Link
        href="/shop"
        className="inline-flex w-full items-center justify-center border border-black bg-black px-4 py-4 text-xs uppercase tracking-widest text-white"
      >
        Enter feed
      </Link>
    </div>
  );
}
