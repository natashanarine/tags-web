import Link from "next/link";

export function AppHeader() {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-black bg-white px-4 py-4 sm:px-5 md:px-6 md:py-5 xl:px-8">
      <Link
        href="/shop"
        className="text-[10px] font-medium uppercase tracking-[0.35em] text-black sm:text-[11px]"
      >
        Tags
      </Link>
      <nav aria-label="Primary">
        <Link
          href="/shop"
          className="text-[10px] uppercase tracking-[0.35em] text-black sm:text-[11px]"
        >
          Feed
        </Link>
      </nav>
    </header>
  );
}
