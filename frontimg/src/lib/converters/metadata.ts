/**
 * Metadata for a converter route.
 *
 * Each `src/app/<slug>/page.tsx` does `export const metadata = buildConverterMetadata(SLUG)`.
 * Next evaluates the module during the build rather than parsing the literal,
 * so a derived object is fine under `output: "export"` — but only in that exact
 * shape. Do NOT destructure-and-re-export (`const { metadata } = …; export { metadata }`);
 * that is where the static analysis actually breaks.
 *
 * Titles and descriptions still come from the TOOLS registry, which stays the
 * single source of truth for anything the sitemap or home grid also reads.
 */
import type { Metadata } from "next";
import { DEFAULT_LOCALE, OG_LOCALE, type Locale } from "@/i18n/config";
import { toolPath } from "@/i18n/slugs";
import { toolAlternates } from "@/lib/i18n/tool-meta";
import { absoluteUrl } from "@/lib/site";
import { getTool } from "@/lib/tools";
import { getPair } from "./pairs";
import { pairCopy } from "./i18n";

export function buildConverterMetadata(slug: string, locale: Locale = DEFAULT_LOCALE): Metadata {
  const tool = getTool(slug);
  if (!tool) {
    throw new Error(`No TOOLS entry for converter "${slug}" — add it to src/lib/tools.ts.`);
  }
  const copy = pairCopy(getPair(slug), locale, {
    seoTitle: tool.seoTitle,
    seoDescription: tool.seoDescription,
  });
  const canonical = absoluteUrl(toolPath(slug, locale));
  const languages = toolAlternates(slug);

  return {
    title: { absolute: copy.seoTitle },
    description: copy.seoDescription,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: copy.seoTitle,
      description: copy.seoDescription,
      // English pages never carried og:locale; adding one would change their
      // output (tool-meta.ts header).
      ...(locale === DEFAULT_LOCALE ? {} : { locale: OG_LOCALE[locale] }),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.seoTitle,
      description: copy.seoDescription,
    },
  };
}
