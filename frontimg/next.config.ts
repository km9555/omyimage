import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployable to Cloudflare Pages (CDN, no server runtime).
  // All dynamic work is either in-browser (≤15 MB) or on the shared oMyPDF
  // Express/Sharp backend. Mirrors the oMyPDF frontend setup.
  output: "export",
  // Clean URLs WITHOUT a trailing slash (e.g. /compress-image). Emits
  // out/compress-image.html, which Cloudflare Pages serves at /compress-image.
  trailingSlash: false,
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  // Every NEXT_PUBLIC_* var the client reads is resolved HERE, so the bundler
  // always sees a string literal at the point of use.
  //
  // Turbopack only inlines NEXT_PUBLIC_* vars that actually have a value at
  // build time. For any that don't, it keeps a real `process.env` lookup in the
  // client bundle and satisfies it with Browserify's `process` shim. On the
  // deployed build NEXT_PUBLIC_GA_ID was the last var still doing this.
  //
  // Note this does not delete the shim chunk — Next's own router code pulls
  // `process` in as well, so it ships either way. What it does buy is that no
  // app code depends on a `process.env` that is empty in the browser: an unset
  // var used to silently become `undefined` at runtime and fall through to the
  // hardcoded default, which is a real footgun for anything without one.
  //
  // `env` is evaluated in Node during the build and inlined as a literal.
  // Anything set in .env.local or in the Cloudflare Pages build environment
  // still wins — this only decides what a *missing* value becomes.
  //
  // Keep this list in sync with `process.env.NEXT_PUBLIC_*` reads in src/.
  // Fallbacks are non-secret defaults only; real credentials stay in the
  // environment and are merely passed through.
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omyimage.com",
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000",
    // Falsy → GoogleAnalytics.tsx falls back to the production measurement ID.
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? "",
    // Falsy → google-drive.ts hides the Drive entry point entirely.
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
    NEXT_PUBLIC_GOOGLE_PICKER_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY ?? "",
  },
};

export default nextConfig;
