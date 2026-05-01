import type { MetadataRoute } from "next";
import { getInternalBlogArticles } from "@/components/unoloft/blogs";
import { ALL_SEO_ROUTES, SITE_URL } from "@/components/unoloft/seo";

function lastModifiedForPath(path: string): Date {
  if (path === "/blogs") {
    const articles = getInternalBlogArticles();
    const timestamps = articles
      .map((article) => Date.parse(article.publishedOn))
      .filter((time) => Number.isFinite(time));
    const latest = timestamps.length ? Math.max(...timestamps) : Date.now();
    return new Date(latest);
  }

  if (path.startsWith("/blogs/")) {
    const slug = path.slice("/blogs/".length);
    const article = getInternalBlogArticles().find((a) => a.slug === slug);
    if (article) {
      const parsed = Date.parse(article.publishedOn);
      return Number.isFinite(parsed) ? new Date(parsed) : new Date();
    }
  }

  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  try {
    return ALL_SEO_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: lastModifiedForPath(route.path),
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
