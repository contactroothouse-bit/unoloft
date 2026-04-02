import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import { BLOG_POSTS } from "@/components/unoloft/blogs";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft Blogs - Ahmedabad PG Guides for Students and Professionals",
  description:
    "Explore practical Unoloft blog guides on Ahmedabad PG living, commute-first location decisions, student budgeting, and professional stay planning.",
  path: "/blogs",
  keywords: [
    "Ahmedabad PG blog",
    "PG guide Ahmedabad",
    "student PG budget Ahmedabad",
    "working professional PG Ahmedabad",
    "PG near Nirma University",
    "PG near SG Highway",
  ],
});

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/blogs", "Blogs")} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <div className="s-ey">Unoloft Blogs</div>
            <h1 className="s-t">
              Practical PG Insights for <em>Ahmedabad</em>
            </h1>
            <p className="s-sub">
              Curated and original reads to help students, working professionals,
              and families choose better PG accommodation with confidence.
            </p>
          </div>
        </section>

        <section className="blogs-page-grid subpage-section">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} className="blog-card blog-card-page rv in" href={post.href}>
              <div className="blog-thumb-wrap">
                <Image
                  src={post.thumbnail}
                  alt={post.thumbnailAlt}
                  width={1200}
                  height={760}
                  sizes="(max-width: 580px) 94vw, (max-width: 1100px) 48vw, 34vw"
                  className="blog-thumb"
                />
              </div>
              <div className="blog-top">
                <span className="blog-chip">Unoloft Insight</span>
                <span className="blog-source">{post.readTime}</span>
              </div>
              <h3>{post.cardTitle}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.audience}</span>
                <span>Ahmedabad</span>
              </div>
              <div className="blog-focus">Read more</div>
              <span className="blog-title-hidden" aria-hidden="true">
                {post.title}
              </span>
            </Link>
          ))}
        </section>
      </PageShell>
    </>
  );
}
