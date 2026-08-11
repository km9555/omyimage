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

export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
