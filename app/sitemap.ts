import type { MetadataRoute } from "next";
import { getInternalBlogArticles } from "@/components/unoloft/blogs";
import { ALL_SEO_ROUTES, SITE_URL } from "@/components/unoloft/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Keep one shared timestamp so all URLs update together in each sitemap generation.
  const sharedLastModified = new Date();
  const blogRoutes = getInternalBlogArticles().map((article) => ({
    path: `/blogs/${article.slug}`,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));
  const nonBlogArticleRoutes = ALL_SEO_ROUTES.filter(
    (route) => !route.path.startsWith("/blogs/"),
  );
  const routes = [...nonBlogArticleRoutes, ...blogRoutes];

  try {
    return routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: sharedLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  } catch {
    return routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  }
}
