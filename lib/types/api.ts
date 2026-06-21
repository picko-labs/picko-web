export type ApiErrorBody = {
  code: string;
  message: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: ApiErrorBody | null;
};
