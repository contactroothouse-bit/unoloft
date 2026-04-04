import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import {
  getInternalBlogArticle,
  getInternalBlogArticles,
} from "@/components/unoloft/blogs";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
} from "@/components/unoloft/seo";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getInternalBlogArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInternalBlogArticle(slug);

  if (!article) {
    return buildPageMetadata({
      title: "Blog Not Found",
      description: "The requested blog article does not exist.",
      path: "/blogs",
    });
  }

  return buildPageMetadata({
    title: article.metaTitle ?? `${article.title} | Unoloft Blogs`,
    description: article.metaDescription,
    path: `/blogs/${article.slug}`,
    keywords: article.targetKeywords,
  });
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getInternalBlogArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema(`/blogs/${article.slug}`, article.title)}
      />
      <PageShell>
        <article className="blog-article-wrap subpage-section">
          <div className="blog-article-media">
            <Image
              src={article.thumbnail}
              alt={article.thumbnailAlt}
              width={1400}
              height={860}
              className="blog-article-image"
              sizes="(max-width: 860px) 94vw, 920px"
              priority
            />
          </div>

          <header className="blog-article-head">
            <div className="s-ey">Unoloft Blog</div>
            <h1 className="s-t">{article.title}</h1>
            <p className="s-sub">{article.intro}</p>
            {article.introExtra?.map((paragraph) => (
              <p key={paragraph} className="s-sub">
                {paragraph}
              </p>
            ))}
          </header>

          <div className="blog-article-body">
            {article.sections.map((section) => (
              <section key={section.heading} className="blog-article-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="blog-article-paragraph">
                    {paragraph}
                  </p>
                ))}
                {section.table ? (
                  <div className="blog-table-wrap" role="region" aria-label={`${section.heading} table`}>
                    <table className="blog-table">
                      <thead>
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")}>
                            {row.map((cell, index) =>
                              index === 0 ? (
                                <th key={`${row.join("|")}-${cell}`} scope="row">
                                  {cell}
                                </th>
                              ) : (
                                <td key={`${row.join("|")}-${cell}`}>{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.points?.length ? (
                  <ul>
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <footer className="blog-article-foot">
            <p>{article.conclusion}</p>
          </footer>
        </article>
      </PageShell>
    </>
  );
}
