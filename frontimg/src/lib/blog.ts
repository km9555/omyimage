/**
 * Blog data layer.
 *
 * Posts are authored in /admin/blog and stored in omyimage.blog_posts on the
 * shared oMyPDF/oMyImage backend (served at /api/image/blog). Because the
 * frontend is a static export (`output: "export"`), these helpers run at BUILD
 * TIME on the server: the /blog index and each /blog/[slug] page fetch published
 * posts from the backend and are pre-rendered to static HTML. A publish action
 * fires the oMyImage Cloudflare Pages deploy hook to rebuild.
 *
 * Fetches are resilient: if the backend is unreachable at build time we log and
 * return an empty set rather than failing the whole site build.
 */
import { SITE } from "@/lib/site";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  bodyMarkdown: string;
  coverImageUrl: string | null;
  accent: string;
  tags: string[];
  author: string;
  readTime: string;
  seoTitle: string | null;
  seoDescription: string | null;
  status: "draft" | "published";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

async function api<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${SITE.backendUrl}${path}`, {
      // Build-time only (static export). `force-cache` dedupes the repeated
      // reads within a single build and is compatible with `force-static`
      // routes (e.g. the sitemap); each deploy runs in a fresh build with no
      // prior cache, so published changes are always picked up.
      cache: "force-cache",
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[blog] backend fetch failed for ${path}:`, (err as Error).message);
    return null;
  }
}

/** All published posts, newest first. Used by the index and sitemap. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const data = await api<{ posts: BlogPost[] }>("/api/image/blog/posts");
  return data?.posts ?? [];
}

/** A single published post by slug, or null. */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const data = await api<{ post: BlogPost }>(`/api/image/blog/posts/${encodeURIComponent(slug)}`);
  return data?.post ?? null;
}

/** Up to `limit` other published posts sharing a tag with `post` (newest first). */
export function relatedPosts(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  const tags = new Set(post.tags);
  return all
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => tags.has(t)))
    .slice(0, limit);
}

/** Human date for bylines, e.g. "July 22, 2026". */
export function formatPostDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
