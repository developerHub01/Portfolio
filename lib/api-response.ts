import { NextResponse } from "next/server";
import type { ApiErrorResponse, ApiSuccessResponse } from "@/types/api.types";

export const apiSuccess = <T>(
  message: string,
  data: T,
  status = 200,
): NextResponse<ApiSuccessResponse<T>> => {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status },
  );
};

export const apiError = (
  message: string,
  options?: {
    status?: number;
    code?: string;
    details?: unknown;
  },
): NextResponse<ApiErrorResponse> => {
  return NextResponse.json(
    {
      success: false,
      message,
      code: options?.code ?? "INTERNAL_SERVER_ERROR",
      details: options?.details,
    },
    { status: options?.status ?? 500 },
  );
};
