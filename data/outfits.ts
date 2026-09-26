import type { Outfit } from "@/types/outfit";

export const outfits: Outfit[] = [
  {
    id: "black-oversized-tee",
    store: "Generic Supply Co.",
    title: "Black Oversized Tee",
    description: "Heavyweight cotton tee with a dropped shoulder and relaxed fit.",
    price: 4800,
    image: "/mock/outfits/black-oversized-tee.svg",
    video: null,
    productUrl: "/mock/products/black-oversized-tee",
  },
  {
    id: "straight-leg-trousers",
    store: "North Market",
    title: "Straight Leg Trousers",
    description: "Structured trouser with a clean straight leg and mid rise.",
    price: 9800,
    image: "/mock/outfits/straight-leg-trousers.svg",
    video: null,
    productUrl: "/mock/products/straight-leg-trousers",
  },
  {
    id: "cropped-jacket",
    store: "Line Works",
    title: "Cropped Jacket",
    description: "Boxy cropped jacket in matte black with minimal hardware.",
    price: 14800,
    image: "/mock/outfits/cropped-jacket.svg",
    video: null,
    productUrl: "/mock/products/cropped-jacket",
  },
  {
    id: "knit-sweater",
    store: "Studio A",
    title: "Knit Sweater",
    description: "Soft rib knit with a classic crew neck for layering.",
    price: 8800,
    image: "/mock/outfits/knit-sweater.svg",
    video: null,
    productUrl: "/mock/products/knit-sweater",
  },
  {
    id: "relaxed-denim",
    store: "Generic Supply Co.",
    title: "Relaxed Denim",
    description: "Light-wash denim with a relaxed leg and vintage-inspired wash.",
    price: 11800,
    image: "/mock/outfits/relaxed-denim.svg",
    video: null,
    productUrl: "/mock/products/relaxed-denim",
  },
];

export function formatPrice(priceCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceCents / 100);
}

export function findOutfit(outfitId: string) {
  return outfits.find((outfit) => outfit.id === outfitId);
}
