import type { MetadataRoute } from "next";
import { ALL_SEO_ROUTES, SITE_URL } from "@/components/unoloft/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ALL_SEO_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
