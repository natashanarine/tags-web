export function BuildingFeedStage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Building your feed
        </p>
        <h2 className="text-3xl font-medium leading-tight tracking-tight">
          Almost ready
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Your vertical outfit feed is being prepared from the demo catalog.
        </p>
      </div>
      <div className="space-y-3 border border-black p-6">
        <div className="h-1 w-full bg-neutral-200">
          <div className="h-1 w-2/3 bg-black" aria-hidden="true" />
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
          Curating looks
        </p>
      </div>
    </div>
  );
}
