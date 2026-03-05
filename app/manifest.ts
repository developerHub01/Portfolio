import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdus Shohid Shakil Portfolio",
    short_name: "Shakil",
    description:
      "Portfolio of Abdus Shohid Shakil, frontend-focused software developer.",
    start_url: "/",
    display: "standalone",
    scope: "/",
    background_color: "#151b25",
    theme_color: "#3799fb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
