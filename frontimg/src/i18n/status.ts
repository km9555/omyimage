/**
 * Which pages actually EXIST in each non-default locale. Ported from oMyPDF.
 *
 * This is the rollout gate. Localization ships in batches of five, so a
 * Portuguese slug existing in slugs.ts does NOT mean `/pt/<slug>` has been
 * built yet. Anything not listed here is excluded from:
 *   • hreflang alternates (never advertise a URL that 404s)
 *   • the sitemap
 *   • the language switcher's "this page in Portuguese" target
 *   • toolHref / localeHref, which keep linking to English instead
 *
 * Add an id here in the SAME commit that adds `src/app/pt/<slug>/page.tsx` and
 * `src/content/tools/<id>.pt.ts`. `npm run i18n:audit` cross-checks this list
 * against the route folders on disk and fails on a mismatch. tracker.csv is the
 * human-readable view of the same state.
 */
import { DEFAULT_LOCALE, type Locale, type TranslatedLocale } from "@/i18n/config";

/** Tool ids whose localized tool page is live. */
const SHIPPED_TOOLS: Record<TranslatedLocale, string[]> = {
  // Portuguese (Brazilian) — batches of five, ordered by Brazilian search
  // value (tracker.csv is the plan of record).
  pt: [
    // Batch 1 — the highest-value head terms in the Brazilian SERP.
    "compress-image",
    "resize-image",
    "remove-background",
    "image-to-text",
    // Batch 2 — crop, the three JPG/PNG converters, image to PDF.
    "crop-image",
    "png-to-jpg",
    "jpg-to-png",
    "convert-to-jpg",
    "image-to-pdf",
    // Batch 3 — upscale, editor, watermark, rotate, HEIC to JPG.
    "upscale-image",
    "image-editor",
    "watermark-image",
    "rotate-image",
    "heic-to-jpg",
    // Batch 4 — blur/censor, memes, merge, GIF in and out.
    "blur-face",
    "meme-generator",
    "merge-images",
    "gif-maker",
    "gif-to-images",
    // Batch 5 — black & white, blur, borders, circle crop, HTML to image.
    "grayscale-image",
    "blur-image",
    "add-border",
    "circle-crop",
    "html-to-image",
    // Batch 6 — colour picker, the Base64 pair, metadata and EXIF.
    "image-color-picker",
    "image-to-base64",
    "base64-to-image",
    "image-metadata",
    "remove-exif",
    // Batch 7 — HEIC to PNG, and the four WEBP pairs (the first converter
    // pages to ship in a second language).
    "heic-to-png",
    "webp-to-png",
    "webp-to-jpg",
    "jpg-to-webp",
    "png-to-webp",
    // Batch 8 — the JFIF, GIF, BMP and AVIF converters.
    "jfif-to-jpg",
    "gif-to-png",
    "gif-to-jpg",
    "bmp-to-jpg",
    "avif-to-jpg",
    // Batch 9 — the last converter pair.
    "avif-to-png",
  ],
};

/** English paths of the non-tool pages that are live in each locale. */
const SHIPPED_PAGES: Record<TranslatedLocale, string[]> = {
  pt: [
    // Batch 1. The home ships first: it is where swapLocale sends a visitor
    // whose page has no Portuguese twin yet, and its presence is what flips
    // "Português" from "Em breve" to a live link in the language menus.
    "/",
    // Batch 9 — the first static pages: contact, pricing and the cookie policy.
    "/contact",
    "/pricing",
    "/cookies",
    "/image-converter",
    // Batch 10 — the remaining legal twins and the auth pages.
    "/privacy",
    "/terms",
    "/refunds",
    "/login",
    "/signup",
  ],
};

const TOOL_SETS: Record<string, ReadonlySet<string>> = Object.fromEntries(
  Object.entries(SHIPPED_TOOLS).map(([locale, ids]) => [locale, new Set(ids)]),
);

const PAGE_SETS: Record<string, ReadonlySet<string>> = Object.fromEntries(
  Object.entries(SHIPPED_PAGES).map(([locale, paths]) => [locale, new Set(paths)]),
);

export function toolShippedIn(toolId: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return TOOL_SETS[locale]?.has(toolId) ?? false;
}

export function pageShippedIn(englishPath: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return PAGE_SETS[locale]?.has(englishPath) ?? false;
}

/** Locales (including English) in which this tool page exists. */
export function localesForTool(toolId: string, locales: readonly Locale[]): Locale[] {
  return locales.filter((l) => toolShippedIn(toolId, l));
}

/** Locales (including English) in which this static page exists. */
export function localesForPage(englishPath: string, locales: readonly Locale[]): Locale[] {
  return locales.filter((l) => pageShippedIn(englishPath, l));
}

export function shippedToolIds(locale: Locale): readonly string[] {
  if (locale === DEFAULT_LOCALE) return [];
  return SHIPPED_TOOLS[locale] ?? [];
}

export function shippedPagePaths(locale: Locale): readonly string[] {
  if (locale === DEFAULT_LOCALE) return [];
  return SHIPPED_PAGES[locale] ?? [];
}
