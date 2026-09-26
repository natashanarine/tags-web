import Link from "next/link";

export function AppHeader() {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-black bg-white px-6 py-5">
      <Link
        href="/shop"
        className="text-[11px] font-medium uppercase tracking-[0.35em] text-black"
      >
        Tags
      </Link>
      <nav aria-label="Primary">
        <Link
          href="/shop"
          className="text-[11px] uppercase tracking-[0.35em] text-black"
        >
          Feed
        </Link>
      </nav>
    </header>
  );
}
