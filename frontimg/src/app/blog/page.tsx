import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { getPublishedPosts, formatPostDate, type BlogPost } from "@/lib/blog";
import { TagChips } from "@/components/BlogTags";

const canonical = absoluteUrl("/blog");

export const metadata: Metadata = {
  title: { absolute: `Blog — Image Guides, Tips & Product Updates | ${SITE.name}` },
  description:
    `The ${SITE.name} blog — practical guides, tips and product updates for working with images: compressing, converting, resizing, editing and more.`,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title: `${SITE.name} Blog — Image Guides, Tips & Product Updates`,
    description:
      "Practical guides, tips and product updates for working with images.",
  },
  robots: { index: true, follow: true },
};

function tint(hex: string): string {
  return `${hex}2E`; // 18% opacity tint, matching the how-to-use hub cards
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-outline-variant/40 bg-surface-container-lowest overflow-hidden hover-lift"
    >
      {post.coverImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.coverImageUrl}
          alt=""
          className="w-full aspect-[16/9] object-cover block"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full aspect-[16/9] flex items-center justify-center"
          style={{ backgroundColor: tint(post.accent) }}
        >
          <Icon name="article" fill className="text-5xl" style={{ color: post.accent }} />
        </div>
      )}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <TagChips tags={post.tags} />
        <h2 className="text-body-lg font-semibold text-primary group-hover:text-secondary transition-colors">
          {post.title}
        </h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
          <span>{formatPostDate(post.publishedAt)}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime} read</span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="max-w-content mx-auto px-margin-mobile md:px-gutter pt-stack-md pb-16 flex flex-col gap-stack-lg">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <header className="flex flex-col gap-stack-sm mt-2 max-w-3xl">
        <p className="text-label-sm font-label-sm uppercase tracking-widest text-secondary">
          {SITE.name} Blog
        </p>
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary">
          Guides, tips &amp; product updates
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Practical, no-fluff articles on getting the most out of your images — compressing,
          converting, resizing, editing and more.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant/60 bg-surface-container-lowest/40 p-12 text-center">
          <Icon name="article" className="text-4xl text-on-surface-variant" />
          <p className="text-body-md font-medium text-on-surface-variant">
            No posts yet — check back soon.
          </p>
        </div>
      ) : (
        <section aria-label="Blog posts">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
