import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/unoloft/blogs";

function BlogCard({
  cardTitle,
  title,
  excerpt,
  audience,
  readTime,
  thumbnail,
  thumbnailAlt,
  href,
}: {
  cardTitle: string;
  title: string;
  excerpt: string;
  audience: string;
  readTime: string;
  thumbnail: string;
  thumbnailAlt: string;
  href: string;
}) {
  return (
    <Link className="blog-card" href={href}>
      <div className="blog-thumb-wrap">
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          width={1200}
          height={760}
          sizes="(max-width: 580px) 86vw, (max-width: 1180px) 34vw, 320px"
          className="blog-thumb"
        />
      </div>
      <div className="blog-top">
        <span className="blog-chip">Unoloft Blog</span>
        <span className="blog-source">{readTime}</span>
      </div>
      <p className="blog-card-title">{cardTitle}</p>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-meta">
        <span>{audience}</span>
        <span>Ahmedabad</span>
      </div>
      <div className="blog-focus">Read more</div>
      <span className="blog-title-hidden" aria-hidden="true">
        {title}
      </span>
    </Link>
  );
}

export default function BlogsSection() {
  const marqueePosts = BLOG_POSTS;

  return (
    <section id="blogs">
      <div className="sh sh-c rv">
        <div className="s-ey">Blogs</div>
        <h2 className="s-t">
          Smart PG Reads for <em>Ahmedabad Living</em>
        </h2>
        <p className="s-sub">
          Quick, practical guides for students, working professionals, and families
          choosing PG accommodation in Ahmedabad.
        </p>
      </div>

      <div className="blog-marquee rv" aria-label="Featured blogs">
        <div className="blog-track blog-track-static">
          {marqueePosts.map((post, index) => (
            <BlogCard
              key={`${post.slug}-${index}`}
              cardTitle={post.cardTitle}
              title={post.title}
              excerpt={post.excerpt}
              audience={post.audience}
              readTime={post.readTime}
              thumbnail={post.thumbnail}
              thumbnailAlt={post.thumbnailAlt}
              href={post.href}
            />
          ))}
        </div>
      </div>

      <div className="blog-actions rv">
        <Link href="/blogs" className="btn-ora">
          <i className="fa-solid fa-book-open" /> See More Blogs
        </Link>
      </div>
    </section>
  );
}
