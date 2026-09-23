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
  // Hindi — a PILOT: the home page, the 14 highest-value tools and the four
  // legal twins. The remaining 26 tools wait on Search Console data, because
  // the Hindi-script query for an image tool is informational and is currently
  // won by Hindi tutorial blogs rather than by tool pages (conversion.md §9).
  hi: [
    // Batch 1 — the four tools an Indian visitor is most likely to arrive on.
    "compress-image",
    "resize-image",
    "crop-image",
    "convert-to-jpg",
    // Batch 2 — the format pair everyone searches, the two server tools and
    // the document workflow (image → PDF is how Indian forms get submitted).
    "png-to-jpg",
    "jpg-to-png",
    "remove-background",
    "image-to-text",
    "image-to-pdf",
    // Batch 3 — the rest of the pilot: the second AI tool, the full editor,
    // and the three that answer an everyday complaint (watermark, rotate,
    // and the iPhone photo Windows will not open).
    "upscale-image",
    "image-editor",
    "watermark-image",
    "rotate-image",
    "heic-to-jpg",
    // Batch 5 — the converter layer comes alive for Hindi. These routes are
    // GENERATED (npm run gen:converters), never hand-written.
    "webp-to-png",
    "webp-to-jpg",
    "jpg-to-webp",
    "png-to-webp",
    "jfif-to-jpg",
    // Batch 6 — the other five pairs; the converter layer is now complete.
    "gif-to-png",
    "gif-to-jpg",
    "bmp-to-jpg",
    "avif-to-jpg",
    "avif-to-png",
    // Batch 7 — the light tools (13–18 ui keys each). heic-to-png shares
    // HeicTool with heic-to-jpg, so its ui block is a verified duplicate.
    "heic-to-png",
    "image-to-base64",
    "grayscale-image",
    "remove-exif",
    "base64-to-image",
    // Batch 8 — the mid-weight tools (25–41 ui keys each).
    "image-color-picker",
    "circle-crop",
    "gif-to-images",
    "meme-generator",
    "blur-image",
    // Batch 9 — the heavy ui blocks (50–62 keys each), three pages not five.
    "gif-maker",
    "merge-images",
    "add-border",
    // Batch 10 — the heaviest ui blocks (80/83/89 keys), three pages not five.
    "html-to-image",
    "image-metadata",
    "blur-face",
  ],
  // Russian ships in batches ordered by Russian demand, which is NOT the pt/hi
  // order: "улучшить качество фото" outweighs "сжать фото" roughly ten to one,
  // so upscale-image leads rather than compress-image. conversion.md §10.
  ru: [
    // Batch 1 — the four highest-volume Russian queries, in that order.
    "upscale-image",
    "remove-background",
    "compress-image",
    "crop-image",
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
    // Batch 11 — the password flow and the signed-in surfaces.
    "/forgot-password",
    "/reset-password",
    "/account",
    "/dashboard",
  ],
  hi: [
    // Batch 1. The home ships first: it is where swapLocale sends a visitor
    // whose page has no Hindi twin yet, and its presence is what flips
    // "हिन्दी" from "जल्द" to a live link in the language menus.
    "/",
    // Batch 4 — the four legal twins, which close the pilot. They ship
    // together because they cross-link each other: a Hindi page linking to an
    // English policy is exactly the seam a reader notices.
    "/privacy",
    "/terms",
    "/refunds",
    "/cookies",
    // Batch 11 — the first static block. All five are shared components: the
    // two server ones take a dict prop, the three client ones an <I18nScope>.
    // /image-converter has to come after the converter layer (batches 5–6),
    // because its cards and format essays are read from it.
    "/contact",
    "/image-converter",
    "/pricing",
    "/login",
    "/signup",
    // Batch 12 — the password flow and the two signed-in surfaces. This closes
    // the locale at 54 pages, full parity with Portuguese. /account and
    // /dashboard prerender a spinner because they are auth-gated, and all four
    // are index: false.
    "/forgot-password",
    "/reset-password",
    "/account",
    "/dashboard",
  ],
  // Batch 1 — the home ships first: it is where swapLocale sends a visitor
  // whose page has no Russian twin yet, and its presence is what flips
  // "Русский" from "Скоро" to a live link in the language menus.
  ru: [
    "/",
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
