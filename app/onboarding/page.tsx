import type { Metadata } from "next";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

export const metadata: Metadata = {
  title: "Onboarding",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-white text-black">
      <div className="mx-auto flex min-h-dvh w-full min-w-0 max-w-[100vw] justify-center px-0 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="flex min-h-dvh w-full min-w-0 max-w-[100vw] flex-col border-x border-black bg-white sm:max-w-[390px] md:max-w-[390px] lg:max-w-[420px] xl:max-w-[440px] 2xl:max-w-[480px]">
          <OnboardingShell />
        </div>
      </div>
    </div>
  );
}
