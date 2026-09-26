import { ONBOARDING_STEPS } from "@/components/onboarding/onboarding-steps";

export function OnboardingProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <ol
      aria-label="Onboarding progress"
      className="flex gap-2 border-b border-black px-6 py-4"
    >
      {ONBOARDING_STEPS.map((step, index) => {
        const isActive = index === activeIndex;
        const isComplete = index < activeIndex;

        return (
          <li
            key={step.id}
            className={`h-1 flex-1 ${isActive || isComplete ? "bg-black" : "bg-neutral-200"}`}
            aria-current={isActive ? "step" : undefined}
          >
            <span className="sr-only">
              {step.label}
              {isActive ? " (current)" : isComplete ? " (complete)" : ""}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
