import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/api/"] },
    sitemap: "https://dilenazozdemir.com.tr/sitemap.xml",
    host: "https://dilenazozdemir.com.tr",
  };
}
