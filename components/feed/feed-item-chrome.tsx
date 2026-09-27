export function FeedItemChrome() {
  return (
    <div className="feed-chrome pointer-events-auto absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] md:px-5 md:pt-5">
      <button
        type="button"
        aria-label="Placeholder control"
        className="flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] uppercase tracking-widest text-black"
      >
        ·
      </button>
      <div className="flex gap-2">
        <button
          type="button"
          aria-label="Placeholder action"
          className="flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] text-black"
        >
          ·
        </button>
        <button
          type="button"
          aria-label="Placeholder action"
          className="flex h-9 w-9 items-center justify-center border border-black bg-white text-[10px] text-black"
        >
          ·
        </button>
      </div>
    </div>
  );
}
