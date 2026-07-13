import type { MetadataRoute } from "next";

// PLACEHOLDER domain — replace with the real production domain once confirmed.
const siteUrl = "https://nimipropertymanagement.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
