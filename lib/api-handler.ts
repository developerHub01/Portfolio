import { ZodError } from "zod";
import { ApiError } from "@/lib/api-error";
import { apiError } from "@/lib/api-response";

type RouteHandler = (request: Request) => Promise<Response>;

export const withApiHandler =
  (handler: RouteHandler) =>
  async (request: Request): Promise<Response> => {
    try {
      return await handler(request);
    } catch (error) {
      if (error instanceof ZodError) {
        return apiError("Validation failed", {
          status: 400,
          code: "VALIDATION_ERROR",
          details: error.flatten(),
        });
      }

      if (error instanceof ApiError) {
        return apiError(error.message, {
          status: error.status,
          code: error.code,
          details: error.details,
        });
      }

      if (error instanceof Error) {
        return apiError(error.message, {
          status: 500,
          code: "INTERNAL_SERVER_ERROR",
        });
      }

      return apiError("Unknown error", {
        status: 500,
        code: "UNKNOWN_ERROR",
      });
    }
  };
