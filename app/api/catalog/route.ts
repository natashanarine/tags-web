import { outfits } from "@/data/outfits";
import type { CatalogResponse } from "@/types/outfit";

export async function GET() {
  const body: CatalogResponse = { outfits };
  return Response.json(body);
}
