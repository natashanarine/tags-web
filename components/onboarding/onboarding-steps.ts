export const ONBOARDING_STEPS = [
  { id: "welcome", label: "Welcome" },
  { id: "body-capture", label: "Body capture" },
  { id: "store-selection", label: "Store selection" },
  { id: "building-feed", label: "Building feed" },
] as const;

export type OnboardingStepId = (typeof ONBOARDING_STEPS)[number]["id"];
