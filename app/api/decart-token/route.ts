import { issueDecartClientToken } from "@/lib/decart";

/**
 * POST /api/decart-token
 *
 * Placeholder route for future Decart Lucy VTON client tokens.
 * Secrets stay server-side; this handler only returns minted tokens or a
 * not-configured error payload.
 */
export async function POST() {
  const result = issueDecartClientToken();

  if (!result.configured) {
    return Response.json(
      {
        configured: false,
        error: result.error,
        message: result.message,
      },
      { status: 503 },
    );
  }

  return Response.json({
    configured: true,
    token: result.token,
  });
}
