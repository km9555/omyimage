/**
 * Every indexable URL, grouped by locale — the data behind the sitemap index
 * (`/sitemap.xml`) and its per-locale children (`/sitemaps/<locale>.xml`).
 *
 * Why per-locale files: hreflang works the same in one file or ten, so this is
 * not a ranking change. It is a monitoring one. Search Console, Bing and Yandex
 * report "submitted vs indexed" PER SITEMAP, so one file per language turns
 * "is /hi being indexed?" from a guess into a number. The index keeps the old
 * `/sitemap.xml` address, so every engine that already has it keeps working.
 *
 * The URL logic is unchanged from the old `app/sitemap.ts`: a locale's page is
 * listed only once i18n/status.ts ships it, and every URL in a cluster carries
 * the same reciprocal hreflang map plus x-default (a one-way annotation is one
 * Google ignores).
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { getPublishedPosts } from "@/lib/blog";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { toolAlternates, pageAlternates } from "@/lib/i18n/tool-meta";
import { toolPath } from "@/i18n/slugs";
import { staticPath } from "@/i18n/static-paths";
import { pageShippedIn, toolShippedIn } from "@/i18n/status";
import { lastCommitDate } from "@/lib/sitemap/git-dates";

export interface SitemapEntry {
  url: string;
  /** hreflang tag → absolute URL, including x-default. */
  alternates?: Record<string, string>;
  /** ISO 8601. Omitted when no trustworthy date is known. */
  lastmod?: string;
}

/**
 * Indexable non-tool pages, by English path. `/image-converter` is the hub for
 * the format-pair converters (hidden from the home grid), so it stays listed
 * near the top. Auth and dashboard pages are noindex and never appear.
 */
const STATIC_PATHS = ["/", "/image-converter", "/pricing", "/contact", "/privacy", "/terms", "/refunds", "/cookies"];

const exists = (rel: string) => existsSync(join(process.cwd(), rel));

/** Where a page's words live, for its lastmod. First existing file wins. */
function toolSources(toolId: string, locale: Locale): string[] {
  const candidates = [
    `src/content/tools/${toolId}.${locale}.ts`,
    `src/content/converters/${toolId}.${locale}.ts`,
    ...(locale === DEFAULT_LOCALE ? ["src/lib/converters/pairs.ts"] : []),
  ];
  const found = candidates.find(exists);
  return found ? [found] : [];
}

function staticSources(englishPath: string, locale: Locale): string[] {
  const path = staticPath(englishPath, locale);
  const route = `src/app${path === "/" ? "" : path}/page.tsx`;
  return exists(route) ? [route] : [];
}

/** All entries, keyed by locale. */
export async function sitemapEntries(): Promise<Record<Locale, SitemapEntry[]>> {
  const byLocale = Object.fromEntries(LOCALES.map((l) => [l, [] as SitemapEntry[]])) as Record<Locale, SitemapEntry[]>;

  for (const englishPath of STATIC_PATHS) {
    const alternates = pageAlternates(englishPath);
    for (const locale of LOCALES) {
      if (!pageShippedIn(englishPath, locale)) continue;
      const path = locale === DEFAULT_LOCALE ? englishPath : staticPath(englishPath, locale);
      byLocale[locale].push({
        url: `${SITE.url}${path}`,
        alternates,
        lastmod: lastCommitDate(staticSources(englishPath, locale)),
      });
    }
  }

  for (const tool of TOOLS) {
    if (tool.status !== "live") continue;
    const alternates = toolAlternates(tool.id);
    for (const locale of LOCALES) {
      if (!toolShippedIn(tool.id, locale)) continue;
      byLocale[locale].push({
        url: `${SITE.url}${toolPath(tool.id, locale)}`,
        alternates,
        lastmod: lastCommitDate(toolSources(tool.id, locale)),
      });
    }
  }

  // Blog hub + posts (English only), and only once a post exists: with an
  // empty backend the hub is a little chrome and nothing else, which reads to
  // a crawler as a soft 404. Fetched at build time (lib/blog.ts).
  const posts = await getPublishedPosts();
  if (posts.length > 0) {
    const newest = posts
      .map((p) => p.updatedAt)
      .filter(Boolean)
      .sort((a, b) => Date.parse(b) - Date.parse(a))[0];
    byLocale[DEFAULT_LOCALE].push({ url: `${SITE.url}/blog`, lastmod: newest ? new Date(newest).toISOString() : undefined });
    for (const p of posts) {
      byLocale[DEFAULT_LOCALE].push({
        url: `${SITE.url}/blog/${p.slug}`,
        lastmod: p.updatedAt ? new Date(p.updatedAt).toISOString() : undefined,
      });
    }
  }

  return byLocale;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** One locale's `<urlset>`. */
export function urlsetXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((e) => {
      const links = Object.entries(e.alternates ?? {})
        .map(([tag, href]) => `<xhtml:link rel="alternate" hreflang="${esc(tag)}" href="${esc(href)}" />`)
        .join("\n");
      return [`<url>`, `<loc>${esc(e.url)}</loc>`, links, e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : "", `</url>`]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
}

/** Child sitemap filename for a locale: `en.xml`, `pt.xml`, … */
export const sitemapFile = (locale: Locale) => `${locale}.xml`;

/** The `<sitemapindex>` pointing at every non-empty locale file. */
export function indexXml(byLocale: Record<Locale, SitemapEntry[]>): string {
  const body = LOCALES.filter((l) => byLocale[l].length > 0)
    .map((l) => {
      const newest = byLocale[l]
        .map((e) => e.lastmod)
        .filter((d): d is string => !!d)
        .sort((a, b) => Date.parse(b) - Date.parse(a))[0];
      return [
        `<sitemap>`,
        `<loc>${esc(`${SITE.url}/sitemaps/${sitemapFile(l)}`)}</loc>`,
        newest ? `<lastmod>${newest}</lastmod>` : "",
        `</sitemap>`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}
