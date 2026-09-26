"use client";

import Link from "next/link";
import { useState } from "react";
import { ONBOARDING_STEPS } from "@/components/onboarding/onboarding-steps";
import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import { WelcomeStage } from "@/components/onboarding/stages/welcome-stage";
import { BodyCaptureStage } from "@/components/onboarding/stages/body-capture-stage";
import { StoreSelectionStage } from "@/components/onboarding/stages/store-selection-stage";
import { BuildingFeedStage } from "@/components/onboarding/stages/building-feed-stage";

export function OnboardingShell() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedStoreIds, setSelectedStoreIds] = useState<string[]>([]);

  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === ONBOARDING_STEPS.length - 1;

  function goNext() {
    setStepIndex((current) => Math.min(current + 1, ONBOARDING_STEPS.length - 1));
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function toggleStore(storeId: string) {
    setSelectedStoreIds((current) =>
      current.includes(storeId)
        ? current.filter((id) => id !== storeId)
        : [...current, storeId],
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white text-black">
      <OnboardingProgress activeIndex={stepIndex} />

      <div className="flex flex-1 flex-col justify-between px-6 py-10 md:px-8 md:py-12">
        <div className="min-h-0 flex-1">
          {stepIndex === 0 && <WelcomeStage />}
          {stepIndex === 1 && <BodyCaptureStage />}
          {stepIndex === 2 && (
            <StoreSelectionStage
              selectedStoreIds={selectedStoreIds}
              onToggleStore={toggleStore}
            />
          )}
          {stepIndex === 3 && <BuildingFeedStage />}
        </div>

        <div className="mt-12 flex flex-col gap-3 pt-6">
          {isLastStep ? (
            <Link
              href="/shop"
              className="inline-flex w-full items-center justify-center border border-black bg-black px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-white"
            >
              Enter feed
            </Link>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="w-full border border-black bg-black px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-white"
            >
              Continue
            </button>
          )}

          {!isFirstStep && !isLastStep && (
            <button
              type="button"
              onClick={goBack}
              className="w-full border border-black bg-white px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-black"
            >
              Back
            </button>
          )}

          {isLastStep && (
            <button
              type="button"
              onClick={goBack}
              className="w-full border border-black bg-white px-4 py-4 text-[11px] uppercase tracking-[0.35em] text-black"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
