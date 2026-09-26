import type { Outfit } from "@/types/outfit";

export const outfits: Outfit[] = [
  {
    id: "linen-weekend",
    store: "Atelier North",
    title: "Linen weekend",
    priceCents: 27600,
    currency: "USD",
    media: {
      kind: "image",
      src: "/mock/outfits/linen-weekend.svg",
      alt: "Ivory linen outfit on model",
    },
  },
  {
    id: "after-dark",
    store: "Line & Form",
    title: "After dark",
    priceCents: 22000,
    currency: "USD",
    media: {
      kind: "image",
      src: "/mock/outfits/after-dark.svg",
      alt: "Black column dress on model",
    },
  },
];

export function formatPrice(priceCents: number, currency: Outfit["currency"]) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(priceCents / 100);
}

export function findOutfit(outfitId: string) {
  return outfits.find((outfit) => outfit.id === outfitId);
}
