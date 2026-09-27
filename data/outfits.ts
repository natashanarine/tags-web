import type { Outfit } from "@/types/outfit";

export const outfits: Outfit[] = [
  {
    id: "outfit-01",
    category: "New Item",
    store: "Brand",
    title: "Product Name",
    description: "Description text goes here.",
    price: 0,
    priceDisplay: "$000",
    image: "",
    video: null,
    productUrl: "/mock/products/outfit-01",
  },
  {
    id: "outfit-02",
    category: "Category",
    store: "Brand",
    title: "Product Name",
    description: "Short filler description text.",
    price: 0,
    priceDisplay: "$000",
    image: "",
    video: null,
    productUrl: "/mock/products/outfit-02",
  },
  {
    id: "outfit-03",
    category: "Label",
    store: "Brand",
    title: "Item Name",
    description: "Description text goes here.",
    price: 0,
    priceDisplay: "$000",
    image: "",
    video: null,
    productUrl: "/mock/products/outfit-03",
  },
  {
    id: "outfit-04",
    category: "New Item",
    store: "Brand",
    title: "Product Title",
    description: "Placeholder description copy.",
    price: 0,
    priceDisplay: "$000",
    image: "",
    video: null,
    productUrl: "/mock/products/outfit-04",
  },
  {
    id: "outfit-05",
    category: "Category",
    store: "Brand",
    title: "Product Name",
    description: "Description text goes here.",
    price: 0,
    priceDisplay: "$000",
    image: "",
    video: null,
    productUrl: "/mock/products/outfit-05",
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
