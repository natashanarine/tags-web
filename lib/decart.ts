export type DecartTokenResult = {
  token: null;
  configured: false;
};

/** Placeholder for future Decart Lucy VTON client tokens. No external calls. */
export function issueDecartClientToken(): DecartTokenResult {
  return { token: null, configured: false };
}
