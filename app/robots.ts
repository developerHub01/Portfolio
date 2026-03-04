import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_ENV === "development"
      ? process.env.NEXT_PUBLIC_SITE_DEV_URL
      : process.env.NEXT_PUBLIC_SITE_PROD_URL
  )!;

  if (!baseUrl) {
    console.warn("SITE URL not set for robots.txt!");
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
