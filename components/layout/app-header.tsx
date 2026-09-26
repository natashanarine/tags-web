import Link from "next/link";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b border-black px-4 py-4">
      <Link href="/shop" className="text-sm font-semibold uppercase tracking-[0.2em]">
        Tags
      </Link>
      <nav aria-label="Primary" className="flex gap-6 text-xs uppercase tracking-widest">
        <Link href="/shop">Feed</Link>
        <Link href="/checkout">Bag</Link>
      </nav>
    </header>
  );
}
