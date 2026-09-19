/**
 * Per-page metadata for tool and static pages: title, description, canonical,
 * hreflang cluster and social cards — built once so every locale emits the
 * same shape. Ported from oMyPDF.
 *
 * hreflang rules applied here:
 *  • A locale only appears if its page is actually BUILT (see i18n/status.ts).
 *    Advertising an alternate that 404s is worse than having no alternate.
 *  • The cluster is self-referential and reciprocal: the English page lists
 *    the Portuguese one and vice versa, or Google ignores both.
 *  • `x-default` points at English, the unprefixed default.
 *
 * English output is kept byte-identical to what the pages emitted before
 * localization: no og:locale on English (it never had one), and no alternates
 * until a second locale ships.
 */
import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, LOCALE_TAG, OG_LOCALE, type Locale } from "@/i18n/config";
import { toolPath } from "@/i18n/slugs";
import { staticPath } from "@/i18n/static-paths";
import { localesForTool, pageShippedIn } from "@/i18n/status";
import { absoluteUrl } from "@/lib/site";
import { TOOLS_BY_ID } from "@/lib/tools";
import type { ToolPageContent } from "@/content/tools/types";

/**
 * hreflang map for a tool, keyed by BCP-47 tag, plus x-default. Undefined
 * while the page exists in English only.
 */
export function toolAlternates(toolId: string): Record<string, string> | undefined {
  const locales = localesForTool(toolId, LOCALES);
  if (locales.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[LOCALE_TAG[locale]] = absoluteUrl(toolPath(toolId, locale));
  }
  languages["x-default"] = absoluteUrl(toolPath(toolId, DEFAULT_LOCALE));
  return languages;
}

/** hreflang map for a static (non-tool) page. Same one-locale rule. */
export function pageAlternates(englishPath: string): Record<string, string> | undefined {
  const locales = LOCALES.filter((locale) => pageShippedIn(englishPath, locale));
  if (locales.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[LOCALE_TAG[locale]] = absoluteUrl(staticPath(englishPath, locale));
  }
  languages["x-default"] = absoluteUrl(englishPath);
  return languages;
}

/** The og:locale field — only on translated pages (see header). */
function ogLocale(locale: Locale): { locale?: string } {
  return locale === DEFAULT_LOCALE ? {} : { locale: OG_LOCALE[locale] };
}

/**
 * Full `Metadata` for a tool page.
 *
 * English content modules omit `metaTitle`/`metaDescription` and inherit the
 * registry's `seoTitle`/`seoDescription`, so English SEO keeps a single source
 * of truth in `lib/tools.ts`.
 */
export function toolMetadata(content: ToolPageContent): Metadata {
  const tool = TOOLS_BY_ID[content.toolId];
  const title = content.metaTitle ?? tool?.seoTitle ?? content.name;
  const description = content.metaDescription ?? tool?.seoDescription ?? content.tagline ?? "";
  const canonical = absoluteUrl(toolPath(content.toolId, content.locale));
  const languages = toolAlternates(content.toolId);

  return {
    // seoTitle already carries "| oMyImage" — absolute skips the layout template.
    title: { absolute: title },
    description,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      ...ogLocale(content.locale),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Same for a static page, where the copy isn't in a tool content module. */
export function pageMetadata(opts: {
  englishPath: string;
  locale: Locale;
  title: string;
  description: string;
  /** Set false for pages that shouldn't be indexed (auth, dashboard). */
  index?: boolean;
  /** `title.absolute` (default) or run through the layout's "%s | oMyImage" template. */
  absoluteTitle?: boolean;
}): Metadata {
  const canonical = absoluteUrl(staticPath(opts.englishPath, opts.locale));
  const languages = pageAlternates(opts.englishPath);
  return {
    title: opts.absoluteTitle === false ? opts.title : { absolute: opts.title },
    description: opts.description,
    alternates: languages ? { canonical, languages } : { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: opts.title,
      description: opts.description,
      ...ogLocale(opts.locale),
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
    ...(opts.index === false ? { robots: { index: false, follow: true } } : {}),
  };
}
