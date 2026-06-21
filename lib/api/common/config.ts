/** Backend API base URL (no trailing slash). */
export function getApiBaseUrl(): string {
  const url =
    process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  if (!url) {
    throw new Error(
      "API_BASE_URL (or NEXT_PUBLIC_API_BASE_URL) is not configured",
    );
  }
  return url.replace(/\/$/, "");
}
