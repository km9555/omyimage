import { indexXml, sitemapEntries } from "@/lib/sitemap/entries";

/**
 * `/sitemap.xml` — a sitemap INDEX since the tool expansion (2026-10): it
 * points at one `/sitemaps/<locale>.xml` per language. The address is the one
 * robots.txt, Search Console, Bing and Yandex already know, so nothing has to
 * be resubmitted. See lib/sitemap/entries.ts for why the split.
 */
export const dynamic = "force-static";

export async function GET() {
  const xml = indexXml(await sitemapEntries());
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
