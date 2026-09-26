export type Outfit = {
  id: string;
  category: string;
  store: string;
  title: string;
  description: string;
  /** Numeric price for checkout calculations (placeholder catalog uses 0). */
  price: number;
  /** Display-only price string for the feed UI. */
  priceDisplay: string;
  /** Static image path (poster / fallback); empty when using silhouette placeholder. */
  image: string;
  /** Try-on video path; null when not bundled yet */
  video: string | null;
  productUrl: string;
};

export type CatalogResponse = {
  outfits: Outfit[];
};
