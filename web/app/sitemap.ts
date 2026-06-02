import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://biodimensional.com";
  const routes = [
    "",
    "/publications",
    "/software",
    "/projects",
    "/videos",
    "/presentations",
    "/services",
    "/about",
    "/contact",
    "/work",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
