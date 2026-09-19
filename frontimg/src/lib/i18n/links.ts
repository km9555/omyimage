/**
 * Locale-aware internal links. Ported from oMyPDF (minus the how-to guides,
 * which oMyImage does not have).
 *
 * Every `href={`/${tool.slug}`}` and `router.push("/pricing")` in the app goes
 * through here instead, so a Brazilian visitor stays inside `/pt/…` — including
 * the tool-chaining links on the result screen, which are the easiest place to
 * dump someone back into English mid-workflow.
 *
 * Anchors and query strings survive the rewrite: `/#cat-optimize` in
 * Portuguese is `/pt#cat-optimize`.
 */
import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  localeFromPath,
  stripLocalePrefix,
  type Locale,
} from "@/i18n/config";
import { toolIdFromSlug, toolPath } from "@/i18n/slugs";
import { englishPathFrom, hasStaticPath, staticPath } from "@/i18n/static-paths";
import { pageShippedIn, toolShippedIn } from "@/i18n/status";
import { TOOLS_BY_ID, type Tool } from "@/lib/tools";

/** Home page of a locale: "" → "/", "/pt" → "/pt". */
export function localeHome(locale: Locale): string {
  if (locale !== DEFAULT_LOCALE && !pageShippedIn("/", locale)) return "/";
  return LOCALE_PREFIX[locale] || "/";
}

/**
 * Href for a tool, by object or id.
 *
 * Falls back to the English path for a tool whose localized page hasn't shipped
 * yet. Localization rolls out five tools at a time, and every nav menu, footer
 * column and related-tools strip lists all of them — so without this, a
 * Portuguese page would be full of links to /pt pages that don't exist. Each
 * link fixes itself the moment that tool is added to i18n/status.ts.
 */
export function toolHref(tool: Tool | string, locale: Locale): string {
  const id = typeof tool === "string" ? tool : tool.id;
  return toolPath(id, toolShippedIn(id, locale) ? locale : DEFAULT_LOCALE);
}

/** Splits "/pricing?x=1#top" into its path and its "?x=1#top" suffix. */
function splitSuffix(href: string): [string, string] {
  const i = href.search(/[?#]/);
  return i === -1 ? [href, ""] : [href.slice(0, i), href.slice(i)];
}

/**
 * Rewrites an ENGLISH internal path into `locale`.
 *
 * Unmapped paths (`/blog/…`, `/admin`, `/auth/callback`) come back unchanged —
 * those routes are English-only by design and a `/pt` version was never built,
 * so prefixing would 404.
 */
export function localeHref(englishHref: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return englishHref;
  // External links, mailto:, anchors and asset downloads pass straight through.
  if (!englishHref.startsWith("/") || englishHref.startsWith("//")) return englishHref;

  const [path, suffix] = splitSuffix(englishHref);

  if (hasStaticPath(path, locale) && pageShippedIn(path, locale)) {
    return `${staticPath(path, locale)}${suffix}`;
  }

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 1) {
    const toolId = toolIdFromSlug(segments[0], DEFAULT_LOCALE);
    if (toolId) return `${toolHref(toolId, locale)}${suffix}`;
  }

  return englishHref;
}

/**
 * The English path a localized path corresponds to, or undefined when the page
 * has no counterpart.
 */
export function englishHrefFor(localizedPath: string, locale: Locale): string | undefined {
  if (locale === DEFAULT_LOCALE) return localizedPath;

  const [path] = splitSuffix(localizedPath);
  const bare = stripLocalePrefix(path);

  const mapped = englishPathFrom(bare, locale);
  if (mapped) return mapped;

  const segments = bare.split("/").filter(Boolean);
  if (segments.length === 1) {
    const toolId = toolIdFromSlug(segments[0], locale);
    if (toolId) return `/${TOOLS_BY_ID[toolId]?.slug ?? segments[0]}`;
  }

  return undefined;
}

/**
 * The equivalent of the page you're on in another locale — what the language
 * switcher navigates to.
 *
 * Falls back to the target locale's HOME whenever this page has no counterpart
 * there: either it never will (`/blog/…`, `/admin`) or it hasn't shipped yet.
 * That is the honest answer — better than a dead link, and better than the
 * English page the visitor is already looking at, which would make the
 * switcher appear broken.
 */
export function swapLocale(currentPath: string, target: Locale): string {
  const current = localeFromPath(currentPath);
  if (current === target) return currentPath;

  const [path, suffix] = splitSuffix(currentPath);
  const englishPath = current === DEFAULT_LOCALE ? path : englishHrefFor(path, current);
  if (!englishPath) return localeHome(target);
  if (target === DEFAULT_LOCALE) return `${englishPath}${suffix}`;

  const segments = englishPath.split("/").filter(Boolean);
  const toolId = segments.length === 1 ? toolIdFromSlug(segments[0], DEFAULT_LOCALE) : undefined;

  const exists = toolId
    ? toolShippedIn(toolId, target)
    : hasStaticPath(englishPath, target) && pageShippedIn(englishPath, target);
  if (!exists) return localeHome(target);

  return `${localeHref(englishPath, target)}${suffix}`;
}

/**
 * The canonical ENGLISH tool slug for any path, in any locale, or null when the
 * path is not a tool page. `/compress-image` and `/pt/comprimir-imagem` both
 * yield "compress-image".
 *
 * Analytics, favourites and "recently used" key on this — a locale-blind
 * "one path segment = a tool" guard sees `/pt/comprimir-imagem` as two segments
 * and silently records nothing (oMyPDF conversion.md §4.31).
 */
export function canonicalToolSlug(pathname: string | null | undefined): string | null {
  const locale = localeFromPath(pathname);
  const bare = stripLocalePrefix((pathname ?? "").replace(/\/+$/, "") || "/");
  const segments = bare.split("/").filter(Boolean);
  if (segments.length !== 1) return null;
  const id = toolIdFromSlug(segments[0], locale);
  return id ? (TOOLS_BY_ID[id]?.slug ?? null) : null;
}
