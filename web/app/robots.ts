import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://melikow.dev/sitemap.xml",
    host: "https://melikow.dev",
  };
}
