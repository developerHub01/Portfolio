export class ApiError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details?: unknown;

  constructor(
    message: string,
    options?: {
      status?: number;
      code?: string;
      details?: unknown;
    },
  ) {
    super(message);
    this.name = "ApiError";
    this.status = options?.status ?? 500;
    this.code = options?.code ?? "INTERNAL_SERVER_ERROR";
    this.details = options?.details;
  }
}
