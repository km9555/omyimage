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
    "Free online image tools — compress, resize, crop, convert, rotate and watermark images. Fast in-browser processing for small files, secure server processing for large ones. No sign-up required.",
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
