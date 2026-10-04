import { LOCALES, type Locale } from "@/i18n/config";
import { sitemapEntries, sitemapFile, urlsetXml } from "@/lib/sitemap/entries";

/** `/sitemaps/<locale>.xml` — one language's URLs, each with its full hreflang cluster. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ file: sitemapFile(locale) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const locale = LOCALES.find((l) => sitemapFile(l) === file) as Locale | undefined;
  if (!locale) return new Response("Not found", { status: 404 });
  const xml = urlsetXml((await sitemapEntries())[locale]);
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
