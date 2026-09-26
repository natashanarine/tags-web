import { issueDecartClientToken } from "@/lib/decart";

export async function POST() {
  return Response.json(issueDecartClientToken());
}
