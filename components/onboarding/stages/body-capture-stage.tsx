const CAPTURE_VIEWS = [
  { id: "face", label: "Face" },
  { id: "front", label: "Front" },
  { id: "side", label: "Side" },
  { id: "back", label: "Back" },
] as const;

export function BodyCaptureStage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Body capture
        </p>
        <h2 className="text-3xl font-medium leading-tight tracking-tight">
          Reference views
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Placeholder slots for face and body angles. Capture and upload will
          plug in here later.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {CAPTURE_VIEWS.map((view) => (
          <li key={view.id}>
            <div
              aria-label={`${view.label} capture placeholder`}
              className="flex aspect-[3/4] flex-col justify-between border border-black bg-neutral-100 p-4"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500">
                {view.label}
              </span>
              <span className="text-xs text-neutral-600">Not captured</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
