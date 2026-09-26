import { onboardingStores } from "@/data/onboarding-stores";

type StoreSelectionStageProps = {
  selectedStoreIds: string[];
  onToggleStore: (storeId: string) => void;
};

export function StoreSelectionStage({
  selectedStoreIds,
  onToggleStore,
}: StoreSelectionStageProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          Store selection
        </p>
        <h2 className="text-3xl font-medium leading-tight tracking-tight">
          Choose stores
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Pick a few placeholders to shape your feed. No retailer APIs are
          connected yet.
        </p>
      </div>
      <ul className="space-y-2">
        {onboardingStores.map((store) => {
          const selected = selectedStoreIds.includes(store.id);

          return (
            <li key={store.id}>
              <button
                type="button"
                onClick={() => onToggleStore(store.id)}
                aria-pressed={selected}
                className={`flex w-full items-center justify-between border border-black px-4 py-4 text-left text-sm ${
                  selected ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <span>{store.name}</span>
                <span className="text-[10px] uppercase tracking-[0.35em]">
                  {selected ? "Selected" : "Select"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
