import { apiSuccess } from "@/lib/api-response";

export async function GET() {
  return apiSuccess("API is running", {
    service: "portfolio-api",
    timestamp: new Date().toISOString(),
  });
}
