import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { TagChips } from "@/components/BlogTags";
import {
  getPublishedPosts,
  getPost,
  relatedPosts,
  formatPostDate,
  type BlogPost,
} from "@/lib/blog";
import { renderPostBody } from "@/lib/blog-render";

// Static export: pre-render exactly the published slugs, 404 anything else.
export const dynamicParams = false;

/**
 * Placeholder slug emitted when there are no published posts (or the backend is
 * unreachable at build time). `output: "export"` hard-fails a dynamic route that
 * yields zero paths — with the misleading message that this file is "missing
 * generateStaticParams()" — so we always hand it at least one path. The page
 * itself 404s on this slug, so nothing bogus is published.
 */
const PLACEHOLDER_SLUG = "no-posts-yet";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPublishedPosts();
  if (posts.length === 0) return [{ slug: PLACEHOLDER_SLUG }];
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = slug === PLACEHOLDER_SLUG ? null : await getPost(slug);
  if (!post) {
    return {
      title: { absolute: `Post not found | ${SITE.name}` },
      robots: { index: false, follow: false },
    };
  }

  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const title = post.seoTitle || `${post.title} | ${SITE.name} Blog`;
  const description = post.seoDescription || post.excerpt;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      ...(post.coverImageUrl ? { images: [post.coverImageUrl] } : {}),
    },
    twitter: {
      card: post.coverImageUrl ? "summary_large_image" : "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-4 hover-lift"
    >
      <h3 className="text-body-md font-semibold text-primary group-hover:text-secondary transition-colors">
        {post.title}
      </h3>
      <p className="text-body-sm text-on-surface-variant line-clamp-2">{post.excerpt}</p>
      <span className="text-label-sm font-label-sm text-on-surface-variant mt-auto">
        {post.readTime} read
      </span>
    </Link>
  );
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (slug === PLACEHOLDER_SLUG) notFound();
  const post = await getPost(slug);
  if (!post) notFound();

  const all = await getPublishedPosts();
  const related = relatedPosts(post, all);
  const { html } = renderPostBody(post.bodyMarkdown);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(post.coverImageUrl ? { image: post.coverImageUrl } : {}),
    datePublished: post.publishedAt ?? post.createdAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <article className="max-w-3xl mx-auto flex flex-col gap-stack-lg mt-2">
          <header className="flex flex-col gap-stack-sm">
            <TagChips tags={post.tags} />
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary">
              {post.title}
            </h1>
            <p className="text-body-lg text-on-surface-variant">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
              <span>By {post.author}</span>
              <span aria-hidden>·</span>
              <span>{formatPostDate(post.publishedAt)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} read</span>
            </div>
          </header>

          {post.coverImageUrl && (
            <figure className="overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full h-auto block"
              />
            </figure>
          )}

          {/* Sanitized, build-time-rendered article body. */}
          <div className="blog-body" dangerouslySetInnerHTML={{ __html: html }} />

          {/* CTA */}
          <section className="rounded-xl border border-outline-variant/40 bg-surface-container px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-body-lg font-semibold text-primary">
                Edit your images — free &amp; private
              </p>
              <p className="text-body-md text-on-surface-variant">
                Compress, convert, resize, crop and more. No sign-up required.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-on-primary px-5 py-2.5 text-label-sm font-label-sm font-semibold hover-lift whitespace-nowrap"
            >
              Explore all tools
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </section>

          {related.length > 0 && (
            <section className="flex flex-col gap-stack-sm">
              <h2 className="text-headline-md font-bold text-primary">Related posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-md">
                {related.map((p) => (
                  <RelatedCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}

          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline w-fit"
          >
            <Icon name="arrow_back" className="text-[18px]" />
            All posts
          </Link>
        </article>
      </div>

      <JsonLd data={schema} />
    </>
  );
}
