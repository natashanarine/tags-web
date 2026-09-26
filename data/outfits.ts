import type { Outfit } from "@/types/outfit";
import { outfitImagePath, outfitVideoPath } from "@/lib/outfit-media";

export const outfits: Outfit[] = [
  {
    id: "black-oversized-tee",
    store: "Generic Supply Co.",
    title: "Black Oversized Tee",
    description: "Heavyweight cotton tee with a dropped shoulder and relaxed fit.",
    price: 4800,
    image: outfitImagePath("black-oversized-tee"),
    video: outfitVideoPath("black-oversized-tee"),
    productUrl: "/mock/products/black-oversized-tee",
  },
  {
    id: "straight-leg-trousers",
    store: "North Market",
    title: "Straight Leg Trousers",
    description: "Structured trouser with a clean straight leg and mid rise.",
    price: 9800,
    image: outfitImagePath("straight-leg-trousers"),
    video: outfitVideoPath("straight-leg-trousers"),
    productUrl: "/mock/products/straight-leg-trousers",
  },
  {
    id: "cropped-jacket",
    store: "Line Works",
    title: "Cropped Jacket",
    description: "Boxy cropped jacket in matte black with minimal hardware.",
    price: 14800,
    image: outfitImagePath("cropped-jacket"),
    video: outfitVideoPath("cropped-jacket"),
    productUrl: "/mock/products/cropped-jacket",
  },
  {
    id: "knit-sweater",
    store: "Studio A",
    title: "Knit Sweater",
    description: "Soft rib knit with a classic crew neck for layering.",
    price: 8800,
    image: outfitImagePath("knit-sweater"),
    video: outfitVideoPath("knit-sweater"),
    productUrl: "/mock/products/knit-sweater",
  },
  {
    id: "relaxed-denim",
    store: "Generic Supply Co.",
    title: "Relaxed Denim",
    description: "Light-wash denim with a relaxed leg and vintage-inspired wash.",
    price: 11800,
    image: outfitImagePath("relaxed-denim"),
    video: outfitVideoPath("relaxed-denim"),
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
