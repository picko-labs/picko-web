import { getApiBaseUrl } from "@/lib/api/common/config";
import { endpoints } from "@/lib/api/endpoints";
import { AuthApiError } from "@/lib/api/common/errors";
import type { AuthProvider, TokenPair } from "@/lib/types/auth";

async function parseTokenPair(res: Response): Promise<TokenPair> {
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new AuthApiError(
      res.status,
      body || `Auth API request failed (${res.status})`,
    );
  }
  return res.json() as Promise<TokenPair>;
}

/** POST /auth/{provider} — exchange social ID token for backend JWT pair. */
export async function exchangeSocialToken(
  provider: AuthProvider,
  idToken: string,
): Promise<TokenPair> {
  const res = await fetch(
    `${getApiBaseUrl()}${endpoints.auth.provider(provider)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: idToken }),
    },
  );
  return parseTokenPair(res);
}

/** POST /auth/refresh — rotate access + refresh tokens. */
export async function refreshTokenPair(
  refreshToken: string,
): Promise<TokenPair> {
  const res = await fetch(`${getApiBaseUrl()}${endpoints.auth.refresh}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
  return parseTokenPair(res);
}

/** POST /auth/logout — invalidate refresh token on the server. */
export async function revokeSession(accessToken: string): Promise<void> {
  const res = await fetch(`${getApiBaseUrl()}${endpoints.auth.logout}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok && res.status !== 204) {
    const body = await res.text().catch(() => "");
    throw new AuthApiError(res.status, body || `Logout failed (${res.status})`);
  }
}
