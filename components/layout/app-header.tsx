import Link from "next/link";

export function AppHeader() {
  return (
    <header className="relative shrink-0 border-b border-black bg-white px-4 py-3 md:px-6 md:py-4 xl:px-8">
      <div className="flex min-h-8 items-center md:min-h-9">
        <Link
          href="/shop"
          className="relative z-10 text-[11px] font-medium uppercase tracking-[0.35em] text-black"
        >
          Tags
        </Link>

        <div className="pointer-events-none absolute inset-x-4 inset-y-0 hidden items-center justify-center md:flex md:inset-x-6 xl:inset-x-8">
          <label className="pointer-events-auto w-full max-w-[220px] lg:max-w-[260px]">
            <span className="sr-only">Search outfits</span>
            <input
              type="search"
              name="search"
              placeholder="Search"
              readOnly
              aria-readonly="true"
              tabIndex={-1}
              className="w-full border border-black bg-white px-3 py-2 text-xs uppercase tracking-widest text-black placeholder:text-neutral-500 focus:outline-none"
            />
          </label>
        </div>
      </div>
    </header>
  );
}
