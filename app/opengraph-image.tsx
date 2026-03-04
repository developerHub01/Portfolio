import OgBanner from "@/components/og/og-banner";
import { ImageResponse } from "next/og";

export const alt = `Abdus Shohid Shakil | I build polished software products with clean UI, strong performance, and product-first thinking.`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgBanner />, {
    ...size,
  });
}
