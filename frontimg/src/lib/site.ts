/** Site-wide constants used for SEO (canonical URLs, sitemap, JSON-LD). */
export const SITE = {
  name: "oMyImage",
  brand: "oMyImage",
  tagline: "Effortless Power for Image Workflows",
  // Override at build time with NEXT_PUBLIC_SITE_URL (no trailing slash).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://omyimage.com").replace(/\/$/, ""),
  // Backend API base for large-file / heavy processing. Since the backend merge this
  // is the oMyPDF backend on Contabo, serving image tools under /api/image/*.
  backendUrl: (process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000").replace(/\/$/, ""),
  description:
    "Free online image tools: compress, resize, crop, convert and edit photos. Most run in your browser, so your files stay on your device. No sign-up needed.",
} as const;

/**
 * The site-wide social card, rendered by scripts/build-og-image.mjs. Every
 * `openGraph` and `twitter` block names it explicitly, because Next replaces a
 * parent segment's `openGraph` wholesale when a page sets its own — a root
 * layout image alone would reach almost no page. Relative on purpose:
 * `metadataBase` makes it absolute, so Pages previews point at themselves.
 * The card is language-neutral, so the brand name is its alt in every locale.
 */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: SITE.name,
  type: "image/png",
};

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Stable JSON-LD ids for the publisher entity. Pages reference the
 * Organization by `@id` instead of repeating it, so Google merges every
 * mention into one entity (logo, name, url) for the knowledge panel and the
 * article publisher. Added by the 2026-11-14 SEO audit: before it, no page
 * declared an Organization or WebSite at all.
 */
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const LOGO_URL = `${SITE.url}/logo.png`;

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  email: "support@omyimage.com",
} as const;

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": ORG_ID },
} as const;
