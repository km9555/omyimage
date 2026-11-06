import { SITEMAP_GROUPS, sitemapEntries, sitemapFile, urlsetXml } from "@/lib/sitemap/entries";

/**
 * `/sitemaps/<locale>.xml` — one language's URLs, each with its full hreflang
 * cluster — plus `/sitemaps/blog.xml` for the blog hub and posts.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SITEMAP_GROUPS.map((group) => ({ file: sitemapFile(group) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const group = SITEMAP_GROUPS.find((g) => sitemapFile(g) === file);
  if (!group) return new Response("Not found", { status: 404 });
  const xml = urlsetXml((await sitemapEntries())[group]);
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
