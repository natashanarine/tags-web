export type Outfit = {
  id: string;
  store: string;
  title: string;
  description: string;
  /** Price in USD cents */
  price: number;
  /** Static image path (poster / fallback) */
  image: string;
  /** Try-on video path; null when not bundled yet */
  video: string | null;
  /** Placeholder product link for demo */
  productUrl: string;
};

export type CatalogResponse = {
  outfits: Outfit[];
};
