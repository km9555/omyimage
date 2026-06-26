import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployable to Cloudflare Pages (CDN, no server runtime).
  // All dynamic work is either in-browser (≤15 MB) or on the separate backimg
  // Express/Sharp backend. Mirrors the oMyPDF frontend setup.
  output: "export",
  // Clean URLs WITHOUT a trailing slash (e.g. /compress-image). Emits
  // out/compress-image.html, which Cloudflare Pages serves at /compress-image.
  trailingSlash: false,
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
};

export default nextConfig;
