/** Read `exp` (seconds) from a JWT payload without verifying the signature. */
export function getJwtExpiryMs(token: string): number | undefined {
  try {
    const payload = token.split(".")[1];
    if (!payload) return undefined;
    const decoded = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    ) as { exp?: number };
    if (typeof decoded.exp !== "number") return undefined;
    return decoded.exp * 1000;
  } catch {
    return undefined;
  }
}

/** Refresh access token this many ms before it expires. */
export const ACCESS_TOKEN_REFRESH_BUFFER_MS = 60_000;
