import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import {
  exchangeSocialToken,
  refreshTokenPair,
  revokeSession,
} from "@/lib/api/auth";
import {
  ACCESS_TOKEN_REFRESH_BUFFER_MS,
  getJwtExpiryMs,
} from "@/lib/api/jwt";
import { buildAuthProviders } from "@/lib/auth/build-providers";
import { routes } from "@/lib/routes";
import type { AuthProvider } from "@/lib/types/auth";

const BACKEND_AUTH_PROVIDERS: AuthProvider[] = ["google", "apple", "line"];

function isBackendAuthProvider(id: string): id is AuthProvider {
  return BACKEND_AUTH_PROVIDERS.includes(id as AuthProvider);
}

function applyBackendTokens(
  token: JWT,
  pair: { accessToken: string; refreshToken: string },
): JWT {
  token.accessToken = pair.accessToken;
  token.refreshToken = pair.refreshToken;
  token.accessTokenExpires =
    getJwtExpiryMs(pair.accessToken) ?? Date.now() + 30 * 60 * 1000;
  delete token.error;
  return token;
}

async function refreshBackendTokens(token: JWT): Promise<JWT> {
  if (!token.refreshToken) return token;

  try {
    const pair = await refreshTokenPair(token.refreshToken);
    return applyBackendTokens(token, pair);
  } catch {
    delete token.accessToken;
    delete token.refreshToken;
    delete token.accessTokenExpires;
    token.error = "RefreshTokenError";
    return token;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: buildAuthProviders(),
  pages: {
    signIn: routes.login,
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, trigger, session }) {
      if (
        trigger === "update" &&
        session?.backendRefresh &&
        token.refreshToken
      ) {
        return refreshBackendTokens(token);
      }

      if (account?.id_token && isBackendAuthProvider(account.provider)) {
        const pair = await exchangeSocialToken(account.provider, account.id_token);
        return applyBackendTokens(token, pair);
      }

      if (
        token.accessToken &&
        typeof token.accessTokenExpires === "number" &&
        Date.now() >= token.accessTokenExpires - ACCESS_TOKEN_REFRESH_BUFFER_MS
      ) {
        return refreshBackendTokens(token);
      }

      return token;
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      session.accessToken = token.accessToken;
      if (token.error === "RefreshTokenError") {
        session.error = "RefreshTokenError";
      }
      return session;
    },
  },
  events: {
    async signOut(message) {
      if ("token" in message && message.token?.accessToken) {
        try {
          await revokeSession(message.token.accessToken as string);
        } catch {
          // Best-effort; local session is cleared regardless
        }
      }
    },
  },
  trustHost: true,
});
