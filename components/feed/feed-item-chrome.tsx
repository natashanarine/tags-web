export function FeedItemChrome() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4 md:px-5">
      <button
        type="button"
        aria-label="Placeholder control"
        className="pointer-events-auto flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] uppercase tracking-widest text-black"
      >
        ·
      </button>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Placeholder action"
          className="pointer-events-auto flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] text-black"
        >
          ·
        </button>
        <button
          type="button"
          aria-label="Placeholder action"
          className="pointer-events-auto flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] text-black"
        >
          ·
        </button>
      </div>
    </div>
  );
}
