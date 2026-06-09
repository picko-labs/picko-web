/** Picko backend REST paths. */
export const endpoints = {
  auth: {
    provider: (provider: string) => `/auth/${provider}`,
    refresh: "/auth/refresh",
    logout: "/auth/logout",
  },
} as const;
