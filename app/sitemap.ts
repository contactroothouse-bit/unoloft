import type { MetadataRoute } from "next";
import { ALL_SEO_ROUTES, SITE_URL } from "@/components/unoloft/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep one shared timestamp so all URLs update together in each sitemap generation.
  const sharedLastModified = new Date();

  try {
    return ALL_SEO_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: sharedLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  } catch {
    return ALL_SEO_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  }
}
