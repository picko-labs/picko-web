/** Picko backend REST paths. */
export const endpoints = {
  auth: {
    provider: (provider: string) => `/auth/${provider}`,
    refresh: "/auth/refresh",
    logout: "/auth/logout",
    withdraw: "/auth/me",
  },
  users: {
    me: "/users/me",
  },
  spots: {
    list: "/spots",
    detail: (id: number) => `/spots/${id}`,
  },
} as const;
