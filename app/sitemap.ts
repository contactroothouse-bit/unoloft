import type { MetadataRoute } from "next";
import { getInternalBlogArticles } from "@/components/unoloft/blogs";
import { ALL_SEO_ROUTES, SITE_URL } from "@/components/unoloft/seo";

function lastModifiedForPath(path: string): Date {
  if (path === "/blogs") {
    const articles = getInternalBlogArticles();
    const latest = articles.reduce(
      (max, article) =>
        Math.max(max, new Date(article.publishedOn).getTime()),
      0,
    );
    return new Date(latest);
  }

  if (path.startsWith("/blogs/")) {
    const slug = path.slice("/blogs/".length);
    const article = getInternalBlogArticles().find((a) => a.slug === slug);
    if (article) {
      return new Date(article.publishedOn);
    }
  }

  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_SEO_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: lastModifiedForPath(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
