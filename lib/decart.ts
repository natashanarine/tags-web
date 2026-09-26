/**
 * Server-side boundary for Decart Lucy VTON (virtual try-on).
 *
 * Keep all Decart credentials and token minting on the server. Client code should
 * only receive short-lived tokens from `app/api/decart-token/route.ts`.
 */

export type DecartClientTokenSuccess = {
  configured: true;
  token: string;
};

export type DecartClientTokenNotConfigured = {
  configured: false;
  error: "not_configured";
  message: string;
};

export type DecartClientTokenResult =
  | DecartClientTokenSuccess
  | DecartClientTokenNotConfigured;

export type DecartServerConfig =
  | { configured: true }
  | { configured: false; error: "not_configured"; message: string };

const NOT_CONFIGURED_MESSAGE =
  "Decart Lucy VTON is not configured. Install the official Decart SDK and set server environment variables before enabling try-on.";

/**
 * Validates server-side Decart configuration.
 *
 * TODO(decart): After adding the official Decart package, read credentials from
 * process.env here (for example API key / project id). Do not export secret values
 * from this module—only return whether configuration is present.
 */
export function getDecartServerConfig(): DecartServerConfig {
  return {
    configured: false,
    error: "not_configured",
    message: NOT_CONFIGURED_MESSAGE,
  };
}

/**
 * Mints a short-lived client token for browser-side Decart Lucy VTON sessions.
 *
 * TODO(decart): Replace this stub with the official Decart server SDK call once
 * the dependency is installed. Token minting must stay on the server; never send
 * long-lived API keys to the client.
 */
export function issueDecartClientToken(): DecartClientTokenResult {
  const config = getDecartServerConfig();

  if (!config.configured) {
    return {
      configured: false,
      error: "not_configured",
      message: config.message,
    };
  }

  // TODO(decart): Call the official Decart server SDK here and return
  // `{ configured: true, token }`. Do not return placeholder tokens.
  throw new Error("Decart Lucy VTON token minting is not implemented.");
}
