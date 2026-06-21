export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class AuthApiError extends ApiError {
  constructor(status: number, message: string, code = "AUTH_ERROR") {
    super(status, code, message);
    this.name = "AuthApiError";
  }
}
