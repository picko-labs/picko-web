import { getApiBaseUrl } from "@/lib/api/common/config";
import { ApiError } from "@/lib/api/common/errors";
import type { ApiResponse } from "@/lib/types/api";

export async function parseApiResponse<T>(res: Response): Promise<T> {
  const body = (await res.json().catch(() => null)) as ApiResponse<T> | null;

  if (!body || typeof body.success !== "boolean") {
    throw new ApiError(
      res.status,
      "INVALID_RESPONSE",
      body ? "Unexpected API response shape" : "Empty API response",
    );
  }

  if (!res.ok || !body.success || body.data === null) {
    throw new ApiError(
      res.status,
      body.error?.code ?? "REQUEST_FAILED",
      body.error?.message ?? `API request failed (${res.status})`,
    );
  }

  return body.data;
}

type ApiFetchOptions = {
  accessToken?: string;
  method?: string;
  body?: unknown;
};

/** Authenticated or public fetch against the Picko backend. */
export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: "application/json",
  };

  if (options.body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (options.accessToken) {
    headers.Authorization = `Bearer ${options.accessToken}`;
  }

  const res = await fetch(`${getApiBaseUrl()}${path}`, {
    method: options.method ?? (options.body !== undefined ? "POST" : "GET"),
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });

  return parseApiResponse<T>(res);
}
