export type AuthProvider = "google" | "apple" | "line";

export type TokenPair = {
  accessToken: string;
  refreshToken: string;
};
