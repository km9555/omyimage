import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";
import { getPublishedPosts } from "@/lib/blog";
import { LOCALES, DEFAULT_LOCALE } from "@/i18n/config";
import { toolAlternates, pageAlternates } from "@/lib/i18n/tool-meta";
import { toolPath } from "@/i18n/slugs";
import { staticPath } from "@/i18n/static-paths";
import { pageShippedIn, toolShippedIn } from "@/i18n/status";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE.url;
  const currentDate = new Date().toISOString();

  // Core pages (English). Each localized twin is appended below, gated on
  // i18n/status.ts, and every URL in a cluster carries the same reciprocal
  // `alternates.languages` map — a one-way annotation is one Google ignores.
  const englishStatic: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      // Hub for the format-pair converters. Those are hidden from the home
      // grid (Tool.homeGrid), so this is their main internal entry point and
      // ranks above an ordinary tool page.
      url: `${baseUrl}/image-converter`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refunds`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const staticPages: MetadataRoute.Sitemap = englishStatic.flatMap((entry) => {
    const englishPath = entry.url.slice(baseUrl.length).replace(/^$/, "/");
    const languages = pageAlternates(englishPath);
    const alt = languages ? { alternates: { languages } } : {};
    return LOCALES.filter((l) => pageShippedIn(englishPath, l)).map((locale) => ({
      ...entry,
      url: locale === DEFAULT_LOCALE ? entry.url : `${baseUrl}${staticPath(englishPath, locale)}`,
      ...alt,
    }));
  });

  // All live image tool pages from master registry, plus their shipped twins.
  const toolPages: MetadataRoute.Sitemap = TOOLS.filter(
    (tool) => tool.status === "live"
  ).flatMap((tool) => {
    const languages = toolAlternates(tool.id);
    const alt = languages ? { alternates: { languages } } : {};
    return LOCALES.filter((l) => toolShippedIn(tool.id, l)).map((locale) => ({
      url: `${baseUrl}${toolPath(tool.id, locale)}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      ...alt,
    }));
  });

  // Blog hub + individual posts, only once a post actually exists. With an
  // empty backend the hub renders a little chrome and nothing else, which reads
  // to a crawler as a soft 404. Fetched at build time (lib/blog.ts).
  const posts = await getPublishedPosts();
  const blogPages: MetadataRoute.Sitemap =
    posts.length > 0
      ? [
          {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 0.6,
          },
          ...posts.map((p) => ({
            url: `${baseUrl}/blog/${p.slug}`,
            lastModified: new Date(p.updatedAt).toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
          })),
        ]
      : [];

  return [...staticPages, ...toolPages, ...blogPages];
}
