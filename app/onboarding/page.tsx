import type { Metadata } from "next";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

export const metadata: Metadata = {
  title: "Welcome",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col border-x border-black">
        <OnboardingShell />
      </div>
    </div>
  );
}
