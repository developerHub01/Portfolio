import { ApiError } from "@/lib/api-error";

export const getRequiredEnv = (key: string): string => {
  const value = process.env[key];

  if (!value || !value.trim().length) {
    throw new ApiError(`Missing required env variable: ${key}`, {
      status: 500,
      code: "MISSING_ENV",
    });
  }

  return value;
};
