import type { MetadataRoute } from "next";

// PLACEHOLDER domain — replace with the real production domain once confirmed.
const siteUrl = "https://nimipropertymanagement.co.uk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
