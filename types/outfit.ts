export type OutfitMedia = {
  kind: "image" | "video";
  src: string;
  alt: string;
  posterSrc?: string;
};

export type Outfit = {
  id: string;
  store: string;
  title: string;
  priceCents: number;
  currency: "USD";
  media: OutfitMedia;
};

export type CatalogResponse = {
  outfits: Outfit[];
};
