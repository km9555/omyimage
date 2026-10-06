/**
 * Master tool registry — single source of truth for the home grid, navbar,
 * footer, sitemap and internal links. Mirrors the oMyPDF architecture, adapted
 * for image tools (Sharp / ImageMagick / browser canvas).
 *
 * Build tools ONE AT A TIME: set `status: "live"` only when a tool's page exists
 * and is verified. Everything else stays "planned" (renders as "Coming soon").
 */
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { toolShippedIn } from "@/i18n/status";

export type ToolStatus = "live" | "planned";
export type Processing = "client" | "server" | "hybrid" | "ai";

export interface CategoryDef {
  id: string;
  /** Heading shown on the home page. */
  title: string;
  /** Short label for the category nav pills. */
  navLabel: string;
}

export interface Tool {
  id: string;
  name: string;
  /** URL slug (also the route folder). Keyword-focused, lowercase, hyphenated. */
  slug: string;
  categoryId: string;
  shortDescription: string;
  /** Material Symbols icon name. */
  icon: string;
  processing: Processing;
  /** Primary library / engine used. */
  library: string;
  status: ToolStatus;
  /** Lower = build sooner. */
  priority: number;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  /** Premium-gated (server AI) tool — surfaced with a badge later. */
  premium?: boolean;
  /**
   * Show on the home page tool grid. Defaults true.
   *
   * Set false for long-tail format-pair converters: the Convert pill would
   * otherwise grow from six cards to forty-odd near-identical ones, which
   * makes a worse page AND splits the home page's internal link equity across
   * forty anchors. They stay reachable from /image-converter and from each
   * other, and `sitemap.ts` filters on `status` (not this), so they are still
   * submitted for indexing.
   */
  homeGrid?: boolean;
  /**
   * Makes this entry a VARIANT: its own page, URL and copy, running the parent
   * tool's engine with `preset` applied ("Compress Image to 50KB" is
   * compress-image with a 50 KB target). Variants are full tools everywhere
   * — sitemap, slugs, status.ts, search, the home grid, the Tools menu — but
   * only in a locale that ships them, and they stay out of `relatedTools()`;
   * the family is linked by `<VariantLinks>` instead.
   *
   * The route stub is GENERATED (`npm run gen:variants`), which copies `preset`
   * verbatim into `<ParentTool preset={…} />` — so keep it a one-line object
   * literal, and TypeScript checks it against the parent component's prop.
   */
  parentId?: string;
  preset?: ToolPreset;
  /**
   * Shows a "New" badge on the tool's card. Set on the 2026-10 expansion
   * (expansion.md §5); remove the flags once they stop being news (~2027-01).
   */
  isNew?: boolean;
}

/** A variant's settings for its parent tool. One-line literal (see `Tool.parentId`). */
export type ToolPreset = Readonly<Record<string, string | number | boolean>>;

export const CATEGORIES: CategoryDef[] = [
  { id: "optimize", title: "Optimize & Compress", navLabel: "Optimize" },
  { id: "convert", title: "Convert Images", navLabel: "Convert" },
  { id: "edit", title: "Edit & Create", navLabel: "Edit" },
  { id: "ai", title: "AI Image Tools", navLabel: "Image AI" },
];

export const TOOLS: Tool[] = [
  // ── Optimize & Compress ────────────────────────────────────────────────
  {
    id: "compress-image",
    name: "Compress Image",
    slug: "compress-image",
    categoryId: "optimize",
    shortDescription: "Shrink JPG, PNG & WEBP with quality you control.",
    icon: "compress",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    priority: 1,
    seoTitle: "Compress Image Online — Free JPG, PNG & WEBP Compressor | oMyImage",
    seoDescription:
      "Compress JPG, PNG and WEBP images online for free — by quality, or to an exact size like 50KB or 100KB. Batch support, before/after sizes, no sign-up.",
    primaryKeyword: "compress image online free",
  },
  {
    id: "resize-image",
    name: "Resize Image",
    slug: "resize-image",
    categoryId: "optimize",
    shortDescription: "Resize by pixels or percentage, keep aspect ratio.",
    icon: "photo_size_select_large",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    priority: 2,
    seoTitle: "Resize Image Online - Free | oMyImage",
    seoDescription:
      "Resize images online for free without losing quality. Resize by pixel or percentage, lock aspect ratio, bulk resize JPG, PNG, WEBP and GIF. No sign-up required.",
    primaryKeyword: "resize image without losing quality",
  },
  {
    id: "resize-image-in-cm",
    name: "Resize Image in cm",
    slug: "resize-image-in-cm",
    parentId: "resize-image",
    preset: { mode: "print", unit: "cm", dpi: 300 },
    categoryId: "optimize",
    shortDescription: "Resize images to an exact size in cm, mm or inches.",
    icon: "straighten",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 173,
    seoTitle: "Resize Image in cm Online — Exact Print Size, Free | oMyImage",
    seoDescription:
      "Resize an image to an exact size in centimetres, millimetres or inches at 300 DPI or any DPI, with the DPI saved in the file. Free, in your browser, no upload.",
    primaryKeyword: "resize image in cm",
  },
  {
    id: "youtube-thumbnail-resizer",
    name: "YouTube Thumbnail Resizer",
    slug: "youtube-thumbnail-resizer",
    parentId: "resize-image",
    preset: { platform: "youtube", preset: "Thumbnail", format: "image/jpeg" },
    categoryId: "optimize",
    shortDescription: "Resize any image to a 1280 × 720 YouTube thumbnail.",
    icon: "aspect_ratio",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 161,
    seoTitle: "YouTube Thumbnail Resizer — 1280×720, Free Online | oMyImage",
    seoDescription:
      "Resize any image to a YouTube thumbnail: exactly 1280 × 720 px (16:9), saved as a JPG well under YouTube's 2 MB limit. Crop or pad to fit, free, in your browser.",
    primaryKeyword: "youtube thumbnail size",
  },
  {
    id: "whatsapp-dp-resizer",
    name: "WhatsApp DP Resizer",
    slug: "whatsapp-dp-resizer",
    parentId: "resize-image",
    preset: { platform: "whatsapp", preset: "Profile", fit: "contain" },
    categoryId: "optimize",
    shortDescription: "Fit a full photo into a square WhatsApp DP, no crop.",
    icon: "aspect_ratio",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 162,
    seoTitle: "WhatsApp DP Resizer — Full Photo, No Crop, Free | oMyImage",
    seoDescription:
      "Make a WhatsApp DP from any photo: fit the whole picture into a square without cropping, or crop to fill. 500 × 500 px, free, in your browser, no upload.",
    primaryKeyword: "whatsapp dp size",
  },
  {
    id: "linkedin-banner-resizer",
    name: "LinkedIn Banner Resizer",
    slug: "linkedin-banner-resizer",
    parentId: "resize-image",
    preset: { platform: "linkedin", preset: "Cover" },
    categoryId: "optimize",
    shortDescription: "Resize an image to a 1584 × 396 LinkedIn banner.",
    icon: "aspect_ratio",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 163,
    seoTitle: "LinkedIn Banner Resizer — 1584×396 Background Photo | oMyImage",
    seoDescription:
      "Resize any image to a LinkedIn background photo: exactly 1584 × 396 px (4:1), cropped or padded to fit, with the profile-photo overlap in mind. Free, no sign-up.",
    primaryKeyword: "linkedin banner size",
  },
  {
    id: "facebook-cover-resizer",
    name: "Facebook Cover Resizer",
    slug: "facebook-cover-resizer",
    parentId: "resize-image",
    preset: { platform: "facebook", preset: "Cover", format: "image/jpeg" },
    categoryId: "optimize",
    shortDescription: "Resize an image to an 851 × 315 Facebook cover.",
    icon: "aspect_ratio",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 164,
    seoTitle: "Facebook Cover Photo Resizer — 851×315, Free | oMyImage",
    seoDescription:
      "Resize any image to a Facebook cover photo: 851 × 315 px as a light sRGB JPG, cropped or padded to fit, with the phone crop in mind. Free, in your browser.",
    primaryKeyword: "facebook cover photo size",
  },
  {
    id: "discord-banner-resizer",
    name: "Discord Banner Resizer",
    slug: "discord-banner-resizer",
    parentId: "resize-image",
    preset: { platform: "discord", preset: "Profile banner" },
    categoryId: "optimize",
    shortDescription: "Resize images for Discord profile and server banners.",
    icon: "aspect_ratio",
    processing: "client",
    library: "Pica / Sharp",
    status: "live",
    isNew: true,
    priority: 165,
    seoTitle: "Discord Banner Resizer — Profile & Server Banner Sizes | oMyImage",
    seoDescription:
      "Resize any image for Discord: a 600 × 240 profile banner, a 960 × 540 server banner or a 512 × 512 server icon. Crop or pad to fit, free, in your browser.",
    primaryKeyword: "discord banner size",
  },
  {
    id: "crop-image",
    name: "Crop Image",
    slug: "crop-image",
    categoryId: "optimize",
    shortDescription: "Crop to any shape or ratio, rotate, batch.",
    icon: "crop",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 3,
    seoTitle: "Crop Image Online - Free | oMyImage",
    seoDescription:
      "Crop images online for free. Manual crop, fixed aspect ratios or free crop, with batch support. Works in your browser — no upload, no sign-up.",
    primaryKeyword: "crop image online",
  },
  {
    id: "rotate-image",
    name: "Rotate Image",
    slug: "rotate-image",
    categoryId: "optimize",
    shortDescription: "Rotate 90°, 180°, 270° or any angle, and flip, in bulk.",
    icon: "rotate_90_degrees_cw",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 4,
    seoTitle: "Rotate Image Online - Free | oMyImage",
    seoDescription:
      "Rotate images online for free. Turn photos 90°, 180°, 270° or any angle, flip them, and rotate multiple files at once. Fast and private.",
    primaryKeyword: "rotate image online",
  },

  // ── Convert Images ──────────────────────────────────────────────────────
  {
    id: "convert-to-jpg",
    name: "Convert to JPG",
    slug: "convert-to-jpg",
    categoryId: "convert",
    // Keep these in step with the `accept` in convert-to-jpg/page.tsx — the
    // copy previously advertised HEIC, TIFF and RAW, none of which it accepts.
    shortDescription: "PNG, WEBP, GIF & BMP → JPG.",
    icon: "image",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    priority: 5,
    seoTitle: "Convert Image to JPG Online - Free | oMyImage",
    seoDescription:
      "Convert PNG, WEBP, GIF and BMP images to JPG online for free. High-quality conversion, batch supported. No installation or sign-up required.",
    primaryKeyword: "convert to jpg",
  },
  {
    id: "convert-to-png",
    name: "Convert to PNG",
    slug: "convert-to-png",
    categoryId: "convert",
    shortDescription: "JPG, WEBP, GIF & BMP → PNG.",
    icon: "image",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    isNew: true,
    priority: 151,
    seoTitle: "Convert Image to PNG Online - Free | oMyImage",
    seoDescription:
      "Convert JPG, WEBP, GIF and BMP images to PNG online for free. Lossless output that keeps transparency, batch supported. No installation or sign-up required.",
    primaryKeyword: "convert to png",
  },
  {
    id: "convert-to-webp",
    name: "Convert to WEBP",
    slug: "convert-to-webp",
    categoryId: "convert",
    shortDescription: "JPG, PNG, GIF & BMP → WEBP.",
    icon: "image",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    isNew: true,
    priority: 152,
    seoTitle: "Convert Image to WEBP Online - Free | oMyImage",
    seoDescription:
      "Convert JPG, PNG, GIF and BMP images to WEBP online for free — smaller files for faster websites, with a quality slider and batch conversion. No sign-up.",
    primaryKeyword: "convert to webp",
  },
  {
    id: "png-to-jpg",
    name: "PNG to JPG",
    slug: "png-to-jpg",
    categoryId: "convert",
    shortDescription: "Convert PNG images to compressed JPG.",
    icon: "swap_horiz",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 6,
    seoTitle: "PNG to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert PNG to JPG online for free. Flatten transparency, control quality, and convert in bulk. Fast in-browser conversion, no sign-up required.",
    primaryKeyword: "convert png to jpg",
  },
  {
    id: "jpg-to-png",
    name: "JPG to PNG",
    slug: "jpg-to-png",
    categoryId: "convert",
    shortDescription: "Convert JPG to lossless PNG with transparency.",
    icon: "swap_horiz",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 7,
    seoTitle: "JPG to PNG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert JPG to PNG online for free. Lossless output, batch supported. Fast in-browser conversion, no sign-up required.",
    primaryKeyword: "convert jpg to png",
  },
  {
    id: "webp-to-png",
    name: "WEBP to PNG",
    slug: "webp-to-png",
    categoryId: "convert",
    shortDescription: "Convert modern WEBP images to PNG.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 8,
    seoTitle: "WEBP to PNG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert WEBP to PNG online for free. Keep transparency, batch convert, fast in-browser processing. No sign-up required.",
    primaryKeyword: "convert webp to png",
  },
  // Shares HeicTool with heic-to-jpg (PNG preselected). Server-side for the
  // same F1 licence reason — see the comment above heic-to-jpg.
  {
    id: "heic-to-png",
    name: "HEIC to PNG",
    slug: "heic-to-png",
    categoryId: "convert",
    shortDescription: "Convert iPhone HEIC photos to lossless PNG.",
    icon: "photo_camera",
    processing: "server",
    library: "ImageMagick (libheif)",
    status: "live",
    priority: 209,
    homeGrid: false,
    seoTitle: "HEIC to PNG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert HEIC to PNG online for free. Lossless output from iPhone photos, batch supported, no sign-up. Files are converted securely and deleted right after.",
    primaryKeyword: "convert heic to png",
  },
  // OCR in the browser. tesseract.js + tesseract.js-core are Apache-2.0 and
  // the WASM bundles only permissive C libraries (Leptonica BSD-2, zlib,
  // libtiff, libjpeg, libpng) — both dists grepped clean of GPL/LGPL per
  // LICENSE-AUDIT rule 1. That permissiveness is exactly why this one CAN ship
  // to the browser where the HEIC decoders (F1) could not.
  {
    id: "image-to-text",
    name: "Image to Text",
    slug: "image-to-text",
    categoryId: "convert",
    shortDescription: "Extract editable text from photos and scans with OCR.",
    icon: "document_scanner",
    processing: "client",
    library: "tesseract.js",
    status: "live",
    // 12 is a free slot (11 is watermark-image). Note there is a pre-existing
    // tie at 10 between image-to-pdf and image-editor — left alone deliberately,
    // since breaking it would reshuffle the home grid for no functional gain.
    priority: 12,
    seoTitle: "Image to Text Converter - Free Online OCR | oMyImage",
    seoDescription:
      "Extract text from images online for free. OCR for photos, screenshots and scans in 13 languages, running entirely in your browser so nothing is uploaded.",
    primaryKeyword: "image to text",
  },
  {
    id: "svg-to-png",
    name: "SVG to PNG",
    slug: "svg-to-png",
    categoryId: "convert",
    shortDescription: "Turn SVG vectors into sharp PNGs at any size.",
    icon: "layers",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 153,
    seoTitle: "SVG to PNG Converter Online - Free, Any Size | oMyImage",
    seoDescription:
      "Convert SVG to PNG online for free at 1×, 2×, 4× or any width — sharp at every size, transparent or on a background. Batch convert in your browser, no upload.",
    primaryKeyword: "svg to png",
  },
  {
    id: "png-to-ico",
    name: "PNG to ICO",
    slug: "png-to-ico",
    categoryId: "convert",
    shortDescription: "Make .ico favicons and Windows icons.",
    icon: "apps",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 154,
    seoTitle: "PNG to ICO Converter Online - Free Favicon Maker | oMyImage",
    seoDescription:
      "Convert PNG, JPG or SVG to ICO online for free — a favicon.ico with 16, 32 and 48 px, or a Windows icon up to 256 px. Made in your browser, no upload.",
    primaryKeyword: "png to ico",
  },
  // ── Format-pair converters (data-driven) ───────────────────────────────
  // These render from src/lib/converters/pairs.ts through <ConverterPage>;
  // their route files are 5-line stubs. The registry stays the source of
  // truth for anything sitemap.ts / the home grid also reads, so the entry
  // still lives here. `homeGrid: false` keeps the long tail out of the home
  // page (see ToolDirectory) without hiding it from the sitemap.
  {
    id: "webp-to-jpg",
    name: "WEBP to JPG",
    slug: "webp-to-jpg",
    categoryId: "convert",
    shortDescription: "Convert WEBP images to widely-supported JPG.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 200,
    homeGrid: false,
    seoTitle: "WEBP to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert WEBP to JPG online for free. Batch convert with quality control and pick the background colour for transparent areas. No sign-up, runs in your browser.",
    primaryKeyword: "convert webp to jpg",
  },
  {
    id: "jpg-to-webp",
    name: "JPG to WEBP",
    slug: "jpg-to-webp",
    categoryId: "convert",
    shortDescription: "Shrink JPG photos by converting them to WEBP.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 201,
    homeGrid: false,
    seoTitle: "JPG to WEBP Converter Online - Free | oMyImage",
    seoDescription:
      "Convert JPG to WEBP online for free and cut image weight by around 25-35%. Batch convert with a quality slider. Runs in your browser, no sign-up.",
    primaryKeyword: "convert jpg to webp",
  },
  {
    id: "png-to-webp",
    name: "PNG to WEBP",
    slug: "png-to-webp",
    categoryId: "convert",
    shortDescription: "Convert PNG to WEBP and keep transparency.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 202,
    homeGrid: false,
    seoTitle: "PNG to WEBP Converter Online - Free | oMyImage",
    seoDescription:
      "Convert PNG to WEBP online for free. Much smaller files with transparency preserved, batch supported. Fast in-browser conversion, no sign-up required.",
    primaryKeyword: "convert png to webp",
  },
  {
    id: "jfif-to-jpg",
    name: "JFIF to JPG",
    slug: "jfif-to-jpg",
    categoryId: "convert",
    shortDescription: "Rename and repackage .jfif downloads as .jpg.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 203,
    homeGrid: false,
    seoTitle: "JFIF to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert JFIF to JPG online for free. Fixes the .jfif files Chrome and Windows save so any app will open them. Batch convert in your browser, no sign-up.",
    primaryKeyword: "convert jfif to jpg",
  },
  {
    id: "gif-to-png",
    name: "GIF to PNG",
    slug: "gif-to-png",
    categoryId: "convert",
    shortDescription: "Convert a GIF to a lossless PNG still.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 204,
    homeGrid: false,
    seoTitle: "GIF to PNG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert GIF to PNG online for free. Get a lossless still with full-colour output instead of GIF's 256-colour palette. Batch convert in your browser.",
    primaryKeyword: "convert gif to png",
  },
  {
    id: "gif-to-jpg",
    name: "GIF to JPG",
    slug: "gif-to-jpg",
    categoryId: "convert",
    shortDescription: "Convert GIF frames to compact JPG images.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 205,
    homeGrid: false,
    seoTitle: "GIF to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert GIF to JPG online for free. Turn a GIF into a small, universally-readable photo file with quality control. Batch convert, no sign-up needed.",
    primaryKeyword: "convert gif to jpg",
  },
  {
    id: "bmp-to-jpg",
    name: "BMP to JPG",
    slug: "bmp-to-jpg",
    categoryId: "convert",
    shortDescription: "Turn huge uncompressed BMP files into small JPGs.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 206,
    homeGrid: false,
    seoTitle: "BMP to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert BMP to JPG online for free and cut file size by 90% or more. Quality slider and batch support, running entirely in your browser. No sign-up.",
    primaryKeyword: "convert bmp to jpg",
  },
  {
    id: "avif-to-jpg",
    name: "AVIF to JPG",
    slug: "avif-to-jpg",
    categoryId: "convert",
    shortDescription: "Open AVIF images anywhere by converting to JPG.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 207,
    homeGrid: false,
    seoTitle: "AVIF to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert AVIF to JPG online for free. Opens next-gen AVIF images in software that cannot read them yet. Batch convert in your browser, no sign-up.",
    primaryKeyword: "convert avif to jpg",
  },
  {
    id: "avif-to-png",
    name: "AVIF to PNG",
    slug: "avif-to-png",
    categoryId: "convert",
    shortDescription: "Convert AVIF to lossless PNG with transparency.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 208,
    homeGrid: false,
    seoTitle: "AVIF to PNG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert AVIF to PNG online for free. Lossless output with transparency preserved, batch supported. Runs in your browser with no sign-up required.",
    primaryKeyword: "convert avif to png",
  },
  // Server-side on purpose, not for performance: every JS HEIC decoder bundles
  // libheif (LGPL-3.0), and shipping that to a browser is distribution, which
  // triggers the LGPL's source/relink obligations. Decoding on the server means
  // the library is only ever run, never distributed. See ../../LICENSE-AUDIT.md
  // (F1). Do NOT move this back into the browser.
  {
    id: "heic-to-jpg",
    name: "HEIC to JPG",
    slug: "heic-to-jpg",
    categoryId: "convert",
    shortDescription: "Convert iPhone HEIC photos to JPG or PNG.",
    icon: "photo_camera",
    processing: "server",
    library: "ImageMagick (libheif)",
    status: "live",
    priority: 9,
    seoTitle: "HEIC to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert HEIC (iPhone photos) to JPG or PNG online for free. Preserve quality, batch convert. No installation or sign-up required.",
    primaryKeyword: "convert heic to jpg",
  },
  {
    id: "image-to-pdf",
    name: "Image to PDF",
    slug: "image-to-pdf",
    categoryId: "convert",
    shortDescription: "Combine JPG & PNG images into one PDF.",
    icon: "picture_as_pdf",
    processing: "hybrid",
    library: "pdf-lib",
    status: "live",
    priority: 10,
    seoTitle: "Image to PDF Converter Online - Free | oMyImage",
    seoDescription:
      "Convert images to PDF online for free. Combine JPG, PNG, WEBP and GIF into a single PDF, reorder pages, choose page size. No sign-up required.",
    primaryKeyword: "convert image to pdf",
  },
  {
    id: "jpg-to-pdf-under-100kb",
    name: "JPG to PDF Under 100KB",
    slug: "jpg-to-pdf-under-100kb",
    parentId: "image-to-pdf",
    preset: { maxKb: 100 },
    categoryId: "convert",
    shortDescription: "One-page PDFs under 100KB for strict forms.",
    icon: "picture_as_pdf",
    processing: "client",
    library: "pdf-lib",
    status: "live",
    isNew: true,
    priority: 141,
    seoTitle: "JPG to PDF Under 100KB — Free Online Converter | oMyImage",
    seoDescription:
      "Convert JPG photos and document scans to a PDF under 100KB online for free — for application forms with strict limits. Compressed only as needed, no upload.",
    primaryKeyword: "jpg to pdf under 100kb",
  },
  {
    id: "jpg-to-pdf-under-200kb",
    name: "JPG to PDF Under 200KB",
    slug: "jpg-to-pdf-under-200kb",
    parentId: "image-to-pdf",
    preset: { maxKb: 200 },
    categoryId: "convert",
    shortDescription: "Certificates and scans as one PDF under 200KB.",
    icon: "picture_as_pdf",
    processing: "client",
    library: "pdf-lib",
    status: "live",
    isNew: true,
    priority: 142,
    seoTitle: "JPG to PDF Under 200KB Online — Free, Readable Pages | oMyImage",
    seoDescription:
      "Convert JPG images to one PDF under 200KB online for free — certificates, mark sheets and ID scans for admission and job portals. Readable pages, no upload.",
    primaryKeyword: "jpg to pdf under 200kb",
  },
  {
    id: "jpg-to-pdf-under-300kb",
    name: "JPG to PDF Under 300KB",
    slug: "jpg-to-pdf-under-300kb",
    parentId: "image-to-pdf",
    preset: { maxKb: 300 },
    categoryId: "convert",
    shortDescription: "Multi-page document PDFs under 300KB.",
    icon: "picture_as_pdf",
    processing: "client",
    library: "pdf-lib",
    status: "live",
    isNew: true,
    priority: 143,
    seoTitle: "JPG to PDF Under 300KB — Free, Multi-Page Documents | oMyImage",
    seoDescription:
      "Convert several JPG pages into one PDF under 300KB online for free — colour documents, stamps and photos kept clear. In your browser, nothing uploaded.",
    primaryKeyword: "jpg to pdf under 300kb",
  },
  {
    id: "jpg-to-pdf-under-500kb",
    name: "JPG to PDF Under 500KB",
    slug: "jpg-to-pdf-under-500kb",
    parentId: "image-to-pdf",
    preset: { maxKb: 500 },
    categoryId: "convert",
    shortDescription: "Longer documents as one PDF under 500KB.",
    icon: "picture_as_pdf",
    processing: "client",
    library: "pdf-lib",
    status: "live",
    isNew: true,
    priority: 144,
    seoTitle: "JPG to PDF Under 500KB Online — Long Documents, Free | oMyImage",
    seoDescription:
      "Combine many JPG pages into one PDF under 500KB online for free — applications, receipts and reports, ready to upload or email. Private, in your browser.",
    primaryKeyword: "jpg to pdf under 500kb",
  },

  // ── Edit & Create ─────────────────────────────────────────────────────
  {
    id: "image-editor",
    name: "All-in-One Image Editor",
    slug: "image-editor",
    categoryId: "edit",
    shortDescription: "Crop, adjust, filter, draw, watermark — all in one editor.",
    icon: "dashboard_customize",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 10,
    seoTitle: "All-in-One Image Editor Online - Free | oMyImage",
    seoDescription:
      "Edit images online for free in one place — crop, resize, rotate, adjust, filter, blur, add borders, round, watermark and draw, with undo/redo. No sign-up, 100% private in your browser.",
    primaryKeyword: "image editor online free",
  },
  {
    id: "watermark-image",
    name: "Watermark Image",
    slug: "watermark-image",
    categoryId: "edit",
    shortDescription: "Add text or logo watermarks, in bulk.",
    icon: "branding_watermark",
    processing: "hybrid",
    library: "Canvas / Sharp",
    status: "live",
    priority: 11,
    seoTitle: "Watermark Image Online - Free | oMyImage",
    seoDescription:
      "Add a watermark to images online for free. Text or logo watermark with position, opacity and rotation control, batch supported. No sign-up required.",
    primaryKeyword: "watermark image free",
  },
  // NOTE: "photo-editor" was retired — the All-in-One Image Editor above is a
  // strict superset of it (same filter presets and adjust sliders, plus wider
  // grayscale/blur ranges, a fine rotation angle, crop/border/round/draw and a
  // JPG background picker). Its search aliases were folded into "image-editor".
  {
    id: "meme-generator",
    name: "Meme Generator",
    slug: "meme-generator",
    categoryId: "edit",
    shortDescription: "Top/bottom text, templates, export PNG/JPG.",
    icon: "sentiment_very_satisfied",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 13,
    seoTitle: "Meme Generator Online - Free | oMyImage",
    seoDescription:
      "Make memes online for free. Add top and bottom text, use templates or upload your own image, export as PNG or JPG. No sign-up required.",
    primaryKeyword: "meme generator online",
  },
  {
    id: "html-to-image",
    name: "HTML to Image",
    slug: "html-to-image",
    categoryId: "edit",
    shortDescription: "Render a URL or raw HTML to PNG or JPG.",
    icon: "code",
    processing: "server",
    library: "Puppeteer",
    status: "live",
    priority: 14,
    seoTitle: "HTML to Image Converter Online - Free | oMyImage",
    seoDescription:
      // Was "JPG, PNG, SVG or WEBP" — the route only ever emits png or jpeg.
      // Same class as LICENSE-AUDIT F4; claim only what is delivered.
      "Convert HTML or a web page URL to an image online for free. Export to PNG or JPG with fast, accurate rendering. No sign-up required.",
    primaryKeyword: "html to image converter",
  },

  // ── AI Image Tools (premium server processing) ────────────────────────
  {
    id: "remove-background",
    name: "Remove Background",
    slug: "remove-background",
    categoryId: "ai",
    shortDescription: "AI background removal to transparent PNG.",
    icon: "background_replace",
    processing: "ai",
    // `@imgly` was listed here but has never been a dependency — the tool
    // posts to the backend, which spawns rembg. Display metadata only, but it
    // should still say what actually runs.
    library: "rembg",
    status: "live",
    priority: 15,
    premium: true,
    seoTitle: "Remove Image Background Online - Free | oMyImage",
    seoDescription:
      "Remove image backgrounds online for free with AI. High-accuracy object detection, transparent PNG output, batch mode. No sign-up required.",
    primaryKeyword: "remove background free online",
  },
  {
    id: "upscale-image",
    name: "Upscale Image",
    slug: "upscale-image",
    categoryId: "ai",
    shortDescription: "AI upscale & enhance — 2×, 3×, 4× with detail recovery.",
    icon: "hd",
    processing: "ai",
    library: "Real-ESRGAN",
    status: "live",
    priority: 16,
    premium: true,
    seoTitle: "Upscale & Enhance Image Online - Free | oMyImage",
    seoDescription:
      "Upscale and enhance images online with AI. 2×, 3× and 4× enlargement that reconstructs edges and texture instead of blurring, sharpening soft or low-quality photos. No sign-up required.",
    primaryKeyword: "upscale image online free",
  },
  // In-browser inpainting (expansion.md Phase 7): MI-GAN on ONNX Runtime Web,
  // so `processing: "client"` — free, no server, nothing uploaded.
  {
    id: "remove-watermark",
    name: "Remove Watermark",
    slug: "remove-watermark",
    categoryId: "ai",
    shortDescription: "Erase watermarks, logos and date stamps with AI, in your browser.",
    icon: "auto_fix_high",
    processing: "client",
    library: "MI-GAN (ONNX Runtime Web)",
    status: "live",
    isNew: true,
    priority: 208,
    seoTitle: "Remove Watermark from Photo — Free AI Watermark Remover | oMyImage",
    seoDescription:
      "Remove watermarks, logos, text and date stamps from photos for free: mark them and AI fills the area in. Runs in your browser — no upload, no sign-up.",
    primaryKeyword: "watermark remover",
  },
  {
    id: "remove-object",
    name: "Remove Object",
    slug: "remove-object",
    categoryId: "ai",
    shortDescription: "Erase people, objects and blemishes from photos with AI.",
    icon: "ink_eraser",
    processing: "client",
    library: "MI-GAN (ONNX Runtime Web)",
    status: "live",
    isNew: true,
    priority: 209,
    seoTitle: "Remove Objects from Photos — Free AI Object Remover | oMyImage",
    seoDescription:
      "Remove unwanted objects, people, text and blemishes from photos for free: paint over them and AI fills in the background. Runs in your browser — no upload.",
    primaryKeyword: "remove object from photo",
  },
  {
    id: "blur-face",
    name: "Blur Face",
    slug: "blur-face",
    categoryId: "edit",
    shortDescription: "Auto-detect and blur faces & plates for privacy.",
    icon: "blur_on",
    processing: "client",
    library: "MediaPipe BlazeFace + Canvas",
    status: "live",
    priority: 17,
    seoTitle: "Blur Face in Photo Online - Free Automatic Face Blur | oMyImage",
    seoDescription:
      "Automatically detect and blur faces, license plates and private details in photos online for free. Blur, pixelate or black out, in batches. 100% in-browser, no sign-up.",
    primaryKeyword: "blur face online",
  },
  // NOTE: "image-enhancer" was retired — it was the same tool as "upscale-image".
  // The backend's enhance() was literally upscale() with the scale hard-coded to
  // 2 (same realesrgan-ncnn-vulkan binary, same model), and Upscale already
  // exposes 2× as a user option — it is now the default, so the folded-in
  // enhancer traffic lands on exactly what it used to ask for. Its search aliases
  // moved to "upscale-image". See the oMyPDF backend, src/lib/image/ai.ts.
  // (The model is whatever REALESRGAN_MODEL is set to on the box — production
  // runs realesr-animevideov3, NOT realesrgan-x4plus. See backend/ai/README.md.)

  // ── Batch 2: new client-side tools ────────────────────────────────────────
  {
    id: "grayscale-image",
    name: "Grayscale Image",
    slug: "grayscale-image",
    categoryId: "edit",
    shortDescription: "Turn photos black & white, in bulk.",
    icon: "filter_b_and_w",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 19,
    seoTitle: "Grayscale Image Online - Free Black & White Converter | oMyImage",
    seoDescription:
      "Convert images to grayscale (black and white) online for free. Adjust the intensity, batch convert JPG, PNG and WEBP, and download instantly. 100% in your browser.",
    primaryKeyword: "grayscale image online",
  },
  {
    id: "blur-image",
    name: "Blur Image",
    slug: "blur-image",
    categoryId: "edit",
    shortDescription: "Apply a smooth blur to the whole image.",
    icon: "lens_blur",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 20,
    seoTitle: "Blur Image Online - Free | oMyImage",
    seoDescription:
      "Blur an image online for free. Adjust the blur strength with a live preview and export to JPG, PNG or WEBP. Fast, private and 100% in your browser.",
    primaryKeyword: "blur image online",
  },
  {
    id: "add-border",
    name: "Add Border to Image",
    slug: "add-border",
    categoryId: "edit",
    shortDescription: "Add a colored or padded frame to photos.",
    icon: "crop_din",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 21,
    seoTitle: "Add Border to Image Online - Free | oMyImage",
    seoDescription:
      "Add a border or frame to images online for free. Choose the thickness, color and style, with a live preview and batch support. 100% in your browser.",
    primaryKeyword: "add border to image",
  },
  {
    id: "circle-crop",
    name: "Circle Crop Image",
    slug: "circle-crop",
    categoryId: "edit",
    shortDescription: "Crop images into a circle for avatars.",
    icon: "panorama_fish_eye",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 22,
    seoTitle: "Circle Crop Image Online - Free Round Avatar Maker | oMyImage",
    seoDescription:
      "Crop an image into a circle online for free. Perfect round avatars and profile pictures with a transparent PNG background. Fast and private in your browser.",
    primaryKeyword: "circle crop image online",
  },
  {
    id: "merge-images",
    name: "Merge Images",
    slug: "merge-images",
    categoryId: "edit",
    shortDescription: "Combine images horizontally, vertically or in a grid.",
    icon: "grid_view",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 23,
    seoTitle: "Merge Images Online - Free Photo Combiner | oMyImage",
    seoDescription:
      "Merge multiple images into one online for free. Combine photos side by side, stacked or in a grid, set spacing and background, then download. 100% in your browser.",
    primaryKeyword: "merge images online",
  },
  {
    id: "image-color-picker",
    name: "Image Color Picker & Palette",
    slug: "image-color-picker",
    categoryId: "edit",
    shortDescription: "Pick any color or extract a full palette from an image.",
    icon: "colorize",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 24,
    seoTitle: "Image Color Picker & Color Extractor Online | oMyImage",
    seoDescription:
      "Pick any color from an image or extract its full color palette online for free. Get HEX, RGB and HSL, copy or download the palette. Private, in your browser.",
    primaryKeyword: "image color picker online",
  },
  // NOTE: "color-extractor" was retired — the Image Color Picker above now does
  // both on a single upload: click-to-sample any pixel with a magnifier loupe,
  // AND automatic dominant-palette extraction (2–16 colors with per-color image
  // share, copy-all and PNG swatch sheet). Its search aliases were folded into
  // "image-color-picker". See src/lib/image/palette.ts for the extraction engine.
  {
    id: "image-to-base64",
    name: "Image to Base64",
    slug: "image-to-base64",
    categoryId: "convert",
    shortDescription: "Encode an image to a Base64 data URI.",
    icon: "data_object",
    processing: "client",
    library: "FileReader",
    status: "live",
    priority: 26,
    seoTitle: "Image to Base64 Converter Online - Free | oMyImage",
    seoDescription:
      "Convert an image to a Base64 string or data URI online for free. Copy the raw Base64, data URI, CSS or <img> tag. Fast and 100% private in your browser.",
    primaryKeyword: "image to base64",
  },
  {
    id: "base64-to-image",
    name: "Base64 to Image",
    slug: "base64-to-image",
    categoryId: "convert",
    shortDescription: "Decode a Base64 string back to an image.",
    icon: "image",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 27,
    seoTitle: "Base64 to Image Converter Online - Free | oMyImage",
    seoDescription:
      "Convert a Base64 string or data URI back to an image online for free. Preview and download as PNG, JPG or WEBP. Fast and 100% private in your browser.",
    primaryKeyword: "base64 to image",
  },
  {
    id: "image-metadata",
    name: "Image Metadata Viewer",
    slug: "image-metadata",
    categoryId: "edit",
    shortDescription: "View EXIF, GPS & camera data in a photo.",
    icon: "info",
    processing: "client",
    library: "exifr",
    status: "live",
    priority: 28,
    seoTitle: "Image Metadata Viewer Online - Free EXIF Reader | oMyImage",
    seoDescription:
      "View an image's EXIF metadata online for free — camera, lens, exposure, GPS location, date and more. Fast and 100% private in your browser.",
    primaryKeyword: "view image metadata online",
  },
  {
    id: "remove-exif",
    name: "EXIF Data Remover",
    slug: "remove-exif",
    categoryId: "edit",
    shortDescription: "Strip EXIF, GPS & metadata for privacy.",
    icon: "privacy_tip",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 29,
    seoTitle: "Remove EXIF Data from Image Online - Free | oMyImage",
    seoDescription:
      "Remove EXIF and metadata (including GPS location) from images online for free. Protect your privacy before sharing, batch supported. 100% in your browser.",
    primaryKeyword: "remove exif data from image",
  },
  {
    id: "gif-maker",
    name: "GIF Maker",
    slug: "gif-maker",
    categoryId: "edit",
    shortDescription: "Build an animated GIF from your images.",
    icon: "gif_box",
    processing: "client",
    library: "gifenc + gifuct-js",
    status: "live",
    priority: 30,
    seoTitle: "GIF Maker Online - Free Animated GIF Creator | oMyImage",
    seoDescription:
      "Make an animated GIF from images online for free. Set the frame delay, order, size and looping, with a live preview. Fast and 100% private in your browser.",
    primaryKeyword: "gif maker online",
  },
  {
    id: "gif-to-images",
    name: "GIF to Images",
    slug: "gif-to-images",
    categoryId: "convert",
    shortDescription: "Extract every frame of a GIF as PNG/JPG.",
    icon: "burst_mode",
    processing: "client",
    library: "gifuct-js",
    status: "live",
    priority: 31,
    seoTitle: "GIF to Images Online - Free Frame Extractor | oMyImage",
    seoDescription:
      "Extract the frames of an animated GIF online for free. Download every frame as PNG or JPG, bundled in a ZIP. Fast and 100% private in your browser.",
    primaryKeyword: "gif to images",
  },
  {
    id: "video-to-gif",
    name: "Video to GIF",
    slug: "video-to-gif",
    categoryId: "convert",
    shortDescription: "Turn a clip from an MP4, WEBM or MOV video into a GIF.",
    icon: "gif_box",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 181,
    seoTitle: "Video to GIF Converter — MP4 to GIF Online, Free | oMyImage",
    seoDescription:
      "Convert video to GIF online for free: trim a clip from an MP4, WEBM or MOV, choose the frame rate and size, and get a looping GIF. In your browser, no upload.",
    primaryKeyword: "video to gif",
  },
  {
    id: "gif-compressor",
    name: "GIF Compressor",
    slug: "gif-compressor",
    categoryId: "optimize",
    shortDescription: "Make animated GIFs smaller without losing frames.",
    icon: "gif_box",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 182,
    seoTitle: "GIF Compressor — Reduce GIF File Size Online, Free | oMyImage",
    seoDescription:
      "Compress animated GIFs online for free: fewer colours, smarter frames and optional resizing make GIFs much smaller while they keep playing. In your browser, no upload.",
    primaryKeyword: "gif compressor",
  },
  {
    id: "gif-resizer",
    name: "GIF Resizer",
    slug: "gif-resizer",
    categoryId: "optimize",
    shortDescription: "Resize animated GIFs and keep every frame.",
    icon: "gif_box",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 183,
    seoTitle: "GIF Resizer — Resize Animated GIFs Online, Free | oMyImage",
    seoDescription:
      "Resize animated GIFs online for free by percent or exact pixels. Every frame and its timing are kept. In your browser, no upload, no watermark.",
    primaryKeyword: "gif resizer",
  },
  {
    id: "gif-to-mp4",
    name: "GIF to MP4",
    slug: "gif-to-mp4",
    categoryId: "convert",
    shortDescription: "Turn GIFs into small MP4 videos.",
    icon: "gif_box",
    processing: "client",
    library: "WebCodecs / mp4-muxer",
    status: "live",
    isNew: true,
    priority: 184,
    seoTitle: "GIF to MP4 Converter Online — Free, Small Video Files | oMyImage",
    seoDescription:
      "Convert GIF to MP4 online for free. The MP4 is usually far smaller and plays everywhere; repeat short GIFs and pick a background. In your browser, no upload.",
    primaryKeyword: "gif to mp4",
  },
  {
    id: "webp-to-gif",
    name: "WEBP to GIF",
    slug: "webp-to-gif",
    categoryId: "convert",
    shortDescription: "Convert animated WEBP images to GIF.",
    icon: "gif_box",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 185,
    seoTitle: "WEBP to GIF Converter Online — Animated, Free | oMyImage",
    seoDescription:
      "Convert animated WEBP to GIF online for free, keeping every frame and its timing. Still WEBP images work too. In your browser, no upload.",
    primaryKeyword: "webp to gif",
  },
  {
    id: "gif-cropper",
    name: "GIF Cropper",
    slug: "gif-cropper",
    categoryId: "optimize",
    shortDescription: "Crop animated GIFs and keep every frame.",
    icon: "crop",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 186,
    seoTitle: "GIF Cropper — Crop Animated GIFs Online, Free | oMyImage",
    seoDescription:
      "Crop animated GIFs online for free: drag a box or type exact pixels, lock an aspect ratio, and every frame is cropped the same way. In your browser, no upload.",
    primaryKeyword: "crop gif",
  },
  {
    id: "rotate-gif",
    name: "Rotate GIF",
    slug: "rotate-gif",
    categoryId: "optimize",
    shortDescription: "Rotate or flip animated GIFs by 90° or 180°.",
    icon: "rotate_90_degrees_cw",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 187,
    seoTitle: "Rotate GIF Online — Rotate or Flip Animated GIFs | oMyImage",
    seoDescription:
      "Rotate animated GIFs 90° left or right or 180°, or flip them, online for free. Every frame and its timing are kept. In your browser, no upload.",
    primaryKeyword: "rotate gif",
  },
  {
    id: "reverse-gif",
    name: "Reverse GIF",
    slug: "reverse-gif",
    categoryId: "edit",
    shortDescription: "Play a GIF backwards or as a boomerang loop.",
    icon: "history",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 188,
    seoTitle: "Reverse GIF Online — Play GIFs Backwards, Free | oMyImage",
    seoDescription:
      "Reverse an animated GIF online for free, or make a boomerang that plays forwards and then backwards. Frame timing is kept. In your browser, no upload.",
    primaryKeyword: "reverse gif",
  },
  {
    id: "gif-speed-changer",
    name: "GIF Speed Changer",
    slug: "gif-speed-changer",
    categoryId: "edit",
    shortDescription: "Speed up or slow down animated GIFs.",
    icon: "speed",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 189,
    seoTitle: "GIF Speed Changer — Speed Up or Slow Down GIFs | oMyImage",
    seoDescription:
      "Change GIF speed online for free: make an animated GIF faster or slower, or give every frame the same delay. Usually without touching a pixel. In your browser, no upload.",
    primaryKeyword: "gif speed changer",
  },
  {
    id: "gif-cutter",
    name: "GIF Cutter",
    slug: "gif-cutter",
    categoryId: "edit",
    shortDescription: "Trim GIFs to the frames you want.",
    icon: "burst_mode",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 190,
    seoTitle: "GIF Cutter — Trim Animated GIFs Online, Free | oMyImage",
    seoDescription:
      "Cut animated GIFs online for free: pick a start and end frame to keep part of a GIF, or remove a section from it. In your browser, no upload.",
    primaryKeyword: "gif cutter",
  },
  {
    id: "gif-to-webp",
    name: "GIF to WEBP",
    slug: "gif-to-webp",
    categoryId: "convert",
    shortDescription: "Convert animated GIFs to animated WEBP.",
    icon: "sync_alt",
    processing: "client",
    library: "Canvas WebP encoder",
    status: "live",
    isNew: true,
    priority: 191,
    seoTitle: "GIF to WEBP Converter — Animated, Lossless or Lossy | oMyImage",
    seoDescription:
      "Convert animated GIFs to animated WEBP online for free. Lossless keeps every pixel, lossy makes files far smaller, and every frame keeps its timing. In your browser.",
    primaryKeyword: "gif to webp",
  },
  {
    id: "gif-to-apng",
    name: "GIF to APNG",
    slug: "gif-to-apng",
    categoryId: "convert",
    shortDescription: "Convert animated GIFs to animated PNG (APNG).",
    icon: "image",
    processing: "client",
    library: "Canvas / CompressionStream",
    status: "live",
    isNew: true,
    priority: 192,
    seoTitle: "GIF to APNG Converter — Animated PNG Online, Free | oMyImage",
    seoDescription:
      "Convert animated GIFs to APNG (animated PNG) online for free. Every pixel and frame is kept, often in a smaller file. In your browser, no upload.",
    primaryKeyword: "gif to apng",
  },
  {
    id: "gif-to-sprite-sheet",
    name: "GIF to Sprite Sheet",
    slug: "gif-to-sprite-sheet",
    categoryId: "convert",
    shortDescription: "Lay out every GIF frame on one PNG sprite sheet.",
    icon: "grid_view",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 193,
    seoTitle: "GIF to Sprite Sheet — Turn GIF Frames into a PNG Sheet | oMyImage",
    seoDescription:
      "Turn an animated GIF into a PNG sprite sheet online for free: grid, row or column, with spacing and a ready CSS animation. In your browser, no upload.",
    primaryKeyword: "gif to sprite sheet",
  },
  {
    id: "gif-merger",
    name: "GIF Merger",
    slug: "gif-merger",
    categoryId: "edit",
    shortDescription: "Join several GIFs into one, one after another.",
    icon: "layers",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 194,
    seoTitle: "GIF Merger — Combine GIFs into One Online, Free | oMyImage",
    seoDescription:
      "Merge animated GIFs online for free: put several GIFs in order and join them into one GIF that plays them one after another. In your browser, no upload.",
    primaryKeyword: "gif merger",
  },
  {
    id: "add-text-to-gif",
    name: "Add Text to GIF",
    slug: "add-text-to-gif",
    categoryId: "edit",
    shortDescription: "Put captions on animated GIFs, on every frame or some.",
    icon: "text_fields",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 195,
    seoTitle: "Add Text to GIF — Caption Animated GIFs Online, Free | oMyImage",
    seoDescription:
      "Add text to animated GIFs online for free: captions, meme text or subtitles on every frame or only some, with outline, box and a live preview. In your browser, no upload.",
    primaryKeyword: "add text to gif",
  },
  {
    id: "typing-text-gif",
    name: "Typing Text GIF",
    slug: "typing-text-gif",
    categoryId: "edit",
    shortDescription: "Make a GIF of text typing itself, letter by letter.",
    icon: "terminal",
    processing: "client",
    library: "Canvas / gifenc",
    status: "live",
    isNew: true,
    priority: 196,
    seoTitle: "Typing Text GIF Maker — Animated Typing Effect, Free | oMyImage",
    seoDescription:
      "Make a typing text GIF online for free: your words appear letter by letter with a blinking cursor. Choose the speed, font and colours. In your browser, nothing to upload.",
    primaryKeyword: "typing text gif",
  },
  {
    id: "invert-image",
    name: "Invert Image",
    slug: "invert-image",
    categoryId: "edit",
    shortDescription: "Invert the colours of photos — negative or smart invert.",
    icon: "dark_mode",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 201,
    seoTitle: "Invert Image Colors Online — Negative & Smart Invert | oMyImage",
    seoDescription:
      "Invert image colors online for free: turn a photo into a negative, or swap light and dark while keeping the hues. JPG, PNG and WEBP, many at once. In your browser, no upload.",
    primaryKeyword: "invert image",
  },
  {
    id: "pixelate-image",
    name: "Pixelate Image",
    slug: "pixelate-image",
    categoryId: "edit",
    shortDescription: "Turn photos into chunky pixel blocks.",
    icon: "apps",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 202,
    seoTitle: "Pixelate Image Online — Pixel Art Effect, Free | oMyImage",
    seoDescription:
      "Pixelate images online for free: choose the block size and turn any photo into chunky pixels or a retro pixel-art look. Many images at once. In your browser, no upload.",
    primaryKeyword: "pixelate image",
  },
  {
    id: "image-brightness",
    name: "Brightness & Contrast",
    slug: "image-brightness",
    categoryId: "edit",
    shortDescription: "Brighten, darken and add contrast or colour to photos.",
    icon: "light_mode",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 203,
    seoTitle: "Adjust Image Brightness & Contrast Online, Free | oMyImage",
    seoDescription:
      "Adjust image brightness, contrast and saturation online for free with a live preview. Fix dark or washed-out photos, many at once. In your browser, no upload.",
    primaryKeyword: "image brightness",
  },
  {
    id: "glitch-effect",
    name: "Glitch Effect",
    slug: "glitch-effect",
    categoryId: "edit",
    shortDescription: "Give photos a broken-screen glitch look.",
    icon: "gradient",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 204,
    seoTitle: "Glitch Effect Online — Glitch Photo Editor, Free | oMyImage",
    seoDescription:
      "Add a glitch effect to photos online for free: RGB colour split, shifted slices and scan lines, with a strength slider and shuffle. In your browser, no upload.",
    primaryKeyword: "glitch effect",
  },
  {
    id: "round-corners",
    name: "Round Corners",
    slug: "round-corners",
    categoryId: "edit",
    shortDescription: "Give images rounded corners with transparent edges.",
    icon: "rounded_corner",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 205,
    seoTitle: "Round Image Corners Online — Rounded Corners PNG | oMyImage",
    seoDescription:
      "Round the corners of images online for free: pick the radius and which corners, keep the edges transparent as PNG or fill them with a colour. In your browser, no upload.",
    primaryKeyword: "round corners image",
  },
  {
    id: "split-image",
    name: "Split Image",
    slug: "split-image",
    categoryId: "edit",
    shortDescription: "Cut a picture into a grid of equal parts or tiles.",
    icon: "view_column",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 206,
    seoTitle: "Split Image Online — Cut a Picture into Equal Parts, Free | oMyImage",
    seoDescription:
      "Split an image into equal parts online for free: two halves, a 3×3 grid, or tiles of any pixel size. Every piece in one ZIP. In your browser, no upload.",
    primaryKeyword: "split image",
  },
  {
    id: "image-overlay",
    name: "Image Overlay",
    slug: "image-overlay",
    categoryId: "edit",
    shortDescription: "Put one picture on top of another, with opacity and blend modes.",
    icon: "layers",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 207,
    seoTitle: "Overlay Images Online — Put One Picture on Another, Free | oMyImage",
    seoDescription:
      "Overlay one image on another online for free: drag, resize and rotate it, set the opacity and pick a blend mode like multiply or screen. In your browser, no upload.",
    primaryKeyword: "image overlay",
  },

  // ── Variants (expansion.md §2) ─────────────────────────────────────────
  // Each runs its parent's engine with `preset` applied, on its own URL with
  // its own copy. Route stubs are generated: `npm run gen:variants`.
  // compress-image family — target-size compression (lib/image/compress-to-size.ts).
  {
    id: "reduce-image-size-in-kb",
    name: "Reduce Image Size in KB",
    slug: "reduce-image-size-in-kb",
    parentId: "compress-image",
    preset: { mode: "target" },
    categoryId: "optimize",
    shortDescription: "Shrink a photo to any size you need in KB or MB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 101,
    seoTitle: "Reduce Image Size in KB — Photo Resizer in KB, Free | oMyImage",
    seoDescription:
      "Reduce image size in KB online for free. Type any limit — 20KB, 50KB, 100KB or 1MB — and get the sharpest JPG that fits. Batch, in your browser, no upload.",
    primaryKeyword: "reduce image size in kb",
  },
  {
    id: "increase-image-size-in-kb",
    name: "Increase Image Size in KB",
    slug: "increase-image-size-in-kb",
    parentId: "compress-image",
    preset: { mode: "increase" },
    categoryId: "optimize",
    shortDescription: "Make a photo at least 10, 20 or 50KB for forms.",
    icon: "photo_size_select_large",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 102,
    seoTitle: "Increase Image Size in KB Online — Free, No Upload | oMyImage",
    seoDescription:
      "Increase a photo's file size in KB online for free — for forms that need at least 10, 20 or 50KB. Quality goes up, not down. In your browser, nothing uploaded.",
    primaryKeyword: "increase image size in kb",
  },
  {
    id: "compress-image-to-10kb",
    name: "Compress Image to 10KB",
    slug: "compress-image-to-10kb",
    parentId: "compress-image",
    preset: { targetKb: 10 },
    categoryId: "optimize",
    shortDescription: "Signatures and thumb impressions under 10KB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 103,
    seoTitle: "Compress Image to 10KB Online — Signature & Small Photo | oMyImage",
    seoDescription:
      "Compress a signature, thumb impression or small photo to under 10KB online for free — for exam and job forms with the tightest limits. In your browser, no upload.",
    primaryKeyword: "compress image to 10kb",
  },
  {
    id: "compress-image-to-15kb",
    name: "Compress Image to 15KB",
    slug: "compress-image-to-15kb",
    parentId: "compress-image",
    preset: { targetKb: 15 },
    categoryId: "optimize",
    shortDescription: "Signatures and small photos under 15KB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 104,
    seoTitle: "Compress Image to 15KB Online — Signature & Photo, Free | oMyImage",
    seoDescription:
      "Compress a signature or a small photo to under 15KB online for free — for exam and job forms with a 15KB limit. Clearest result that fits, no upload.",
    primaryKeyword: "compress image to 15kb",
  },
  {
    id: "compress-image-to-20kb",
    name: "Compress Image to 20KB",
    slug: "compress-image-to-20kb",
    parentId: "compress-image",
    preset: { targetKb: 20 },
    categoryId: "optimize",
    shortDescription: "Photos and signatures under 20KB for forms.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 105,
    seoTitle: "Compress Image to 20KB — Photo & Signature, Free | oMyImage",
    seoDescription:
      "Compress a photo or signature to under 20KB online for free. A sharp JPG that passes exam and job-form limits, many files at once. Runs in your browser.",
    primaryKeyword: "compress image to 20kb",
  },
  {
    id: "compress-image-to-30kb",
    name: "Compress Image to 30KB",
    slug: "compress-image-to-30kb",
    parentId: "compress-image",
    preset: { targetKb: 30 },
    categoryId: "optimize",
    shortDescription: "Form photos under 30KB with the face still clear.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 106,
    seoTitle: "Compress Image to 30KB Online — Photo for Forms, Free | oMyImage",
    seoDescription:
      "Compress a photo to under 30KB online for free — for exam, admission and job forms that cap the photo at 30KB. Clear faces, exact limit, no upload.",
    primaryKeyword: "compress image to 30kb",
  },
  {
    id: "compress-image-to-40kb",
    name: "Compress Image to 40KB",
    slug: "compress-image-to-40kb",
    parentId: "compress-image",
    preset: { targetKb: 40 },
    categoryId: "optimize",
    shortDescription: "Form photos under 40KB, safely inside 20–50KB ranges.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 107,
    seoTitle: "Compress Image to 40KB Online — Clear Form Photos | oMyImage",
    seoDescription:
      "Compress a photo to under 40KB online for free — for application forms with a 40KB or 20–50KB photo limit. Sharp face, exact limit, nothing uploaded.",
    primaryKeyword: "compress image to 40kb",
  },
  {
    id: "compress-image-to-50kb",
    name: "Compress Image to 50KB",
    slug: "compress-image-to-50kb",
    parentId: "compress-image",
    preset: { targetKb: 50 },
    categoryId: "optimize",
    shortDescription: "The photo limit most exam forms set.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 108,
    seoTitle: "Compress Image to 50KB Online — Free JPG Under 50KB | oMyImage",
    seoDescription:
      "Compress any photo to under 50KB online for free — the limit most exam and government forms set. The sharpest JPG that fits, batch support, no upload.",
    primaryKeyword: "compress image to 50kb",
  },
  {
    id: "compress-image-to-100kb",
    name: "Compress Image to 100KB",
    slug: "compress-image-to-100kb",
    parentId: "compress-image",
    preset: { targetKb: 100 },
    categoryId: "optimize",
    shortDescription: "Clear photos and scans under 100KB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 109,
    seoTitle: "Compress Image to 100KB Online — Free, Batch, Private | oMyImage",
    seoDescription:
      "Compress JPG, PNG or WEBP photos to under 100KB online for free. The highest quality that fits the limit, many images at once, processed in your browser.",
    primaryKeyword: "compress image to 100kb",
  },
  {
    id: "compress-image-to-150kb",
    name: "Compress Image to 150KB",
    slug: "compress-image-to-150kb",
    parentId: "compress-image",
    preset: { targetKb: 150 },
    categoryId: "optimize",
    shortDescription: "Photos and handwritten pages under 150KB, readable.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 110,
    seoTitle: "Compress Image to 150KB Online — Photos and Pages | oMyImage",
    seoDescription:
      "Compress photos and handwritten or printed pages to under 150KB online for free — for portals with a 150KB cap. Highest quality that fits, batch, no upload.",
    primaryKeyword: "compress image to 150kb",
  },
  {
    id: "compress-image-to-200kb",
    name: "Compress Image to 200KB",
    slug: "compress-image-to-200kb",
    parentId: "compress-image",
    preset: { targetKb: 200 },
    categoryId: "optimize",
    shortDescription: "Sharp portraits and document scans under 200KB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 111,
    seoTitle: "Compress Image to 200KB Online — Keep Photos Sharp | oMyImage",
    seoDescription:
      "Compress photos and document scans to under 200KB online for free — for job portals, admissions and application forms. Highest quality that fits, no upload.",
    primaryKeyword: "compress image to 200kb",
  },
  {
    id: "compress-image-to-300kb",
    name: "Compress Image to 300KB",
    slug: "compress-image-to-300kb",
    parentId: "compress-image",
    preset: { targetKb: 300 },
    categoryId: "optimize",
    shortDescription: "Photos and document scans under 300KB, still sharp.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 112,
    seoTitle: "Compress Image to 300KB Online — Photos & Scans, Free | oMyImage",
    seoDescription:
      "Compress photos and document scans to under 300KB online for free — for registration, scholarship and job portals. Sharp text, whole batches, no upload.",
    primaryKeyword: "compress image to 300kb",
  },
  {
    id: "compress-image-to-500kb",
    name: "Compress Image to 500KB",
    slug: "compress-image-to-500kb",
    parentId: "compress-image",
    preset: { targetKb: 500 },
    categoryId: "optimize",
    shortDescription: "Near-original photos, scans and screenshots under 500KB.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 113,
    seoTitle: "Compress Image to 500KB Online — Keep Full Detail, Free | oMyImage",
    seoDescription:
      "Compress photos, A4 scans and screenshots to under 500KB online for free — near-original quality for portals, email and websites. Private, no upload.",
    primaryKeyword: "compress image to 500kb",
  },
  {
    id: "compress-image-to-1mb",
    name: "Compress Image to 1MB",
    slug: "compress-image-to-1mb",
    parentId: "compress-image",
    preset: { targetKb: 1000 },
    categoryId: "optimize",
    shortDescription: "Phone photos under 1MB, usually at full size.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 114,
    seoTitle: "Compress Image to 1MB Online — Free Photo Compressor | oMyImage",
    seoDescription:
      "Compress phone photos to under 1MB online for free, usually at full resolution. Fits upload limits on portals, email and chat apps. Private, in your browser.",
    primaryKeyword: "compress image to 1mb",
  },
  {
    id: "compress-image-to-2mb",
    name: "Compress Image to 2MB",
    slug: "compress-image-to-2mb",
    parentId: "compress-image",
    preset: { targetKb: 2000 },
    categoryId: "optimize",
    shortDescription: "Large phone photos under 2MB, usually at full size.",
    icon: "compress",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 115,
    seoTitle: "Compress Image to 2MB Online — Full-Resolution Photos | oMyImage",
    seoDescription:
      "Compress large phone and camera photos to under 2MB online for free, usually at full resolution — for upload limits on websites, forms and email. Private.",
    primaryKeyword: "compress image to 2mb",
  },
  // upscale-image family — the Real-ESRGAN endpoint, metered like its parent.
  {
    id: "image-to-hd",
    name: "Image to HD",
    slug: "image-to-hd",
    parentId: "upscale-image",
    preset: { scale: 2 },
    categoryId: "ai",
    shortDescription: "Turn a small or low-res photo into HD.",
    icon: "hd",
    processing: "ai",
    library: "Real-ESRGAN",
    status: "live",
    isNew: true,
    priority: 121,
    seoTitle: "Convert Image to HD Online — Free HD Image Converter | oMyImage",
    seoDescription:
      "Convert a low-resolution image to HD online with AI — 2×, 3× or 4× the pixels, with sharper edges and cleaner detail. Free, no watermark, nothing to install.",
    primaryKeyword: "hd image converter",
  },
  {
    id: "unblur-image",
    name: "Unblur Image",
    slug: "unblur-image",
    parentId: "upscale-image",
    preset: { scale: 2 },
    categoryId: "ai",
    shortDescription: "Sharpen soft, slightly blurry photos with AI.",
    icon: "auto_fix_high",
    processing: "ai",
    library: "Real-ESRGAN",
    status: "live",
    isNew: true,
    priority: 122,
    seoTitle: "Unblur Image Online — Sharpen Blurry Photos with AI | oMyImage",
    seoDescription:
      "Unblur an image online with AI: sharpen soft or slightly blurry photos while enlarging them 2–4×. Works best on mild blur and compression mush. Free, no watermark.",
    primaryKeyword: "unblur image",
  },
  // rotate-image family.
  {
    id: "flip-image",
    name: "Flip Image",
    slug: "flip-image",
    parentId: "rotate-image",
    preset: { flipH: true },
    categoryId: "optimize",
    shortDescription: "Mirror photos horizontally or vertically.",
    icon: "flip",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 123,
    seoTitle: "Flip Image Online — Mirror a Photo Horizontally, Free | oMyImage",
    seoDescription:
      "Flip an image horizontally or vertically online — mirror selfies, reversed text and product shots in one click. Batch, JPG/PNG/WEBP, 100% in your browser.",
    primaryKeyword: "flip image",
  },
  // remove-background family — the rembg endpoint plus a browser composite.
  {
    id: "change-background-color",
    name: "Change Background Color",
    slug: "change-background-color",
    parentId: "remove-background",
    preset: { background: "color", color: "#FFFFFF" },
    categoryId: "ai",
    shortDescription: "White, blue or red backgrounds for any photo.",
    icon: "format_color_fill",
    processing: "ai",
    library: "rembg",
    status: "live",
    isNew: true,
    priority: 124,
    seoTitle: "Change Photo Background Color Online — White, Blue, Red | oMyImage",
    seoDescription:
      "Change a photo's background to white, blue, red or any colour online with AI — made for passport and ID photos. One upload, then try every colour free.",
    primaryKeyword: "change background color of photo",
  },
  {
    id: "blur-background",
    name: "Blur Background",
    slug: "blur-background",
    parentId: "remove-background",
    preset: { background: "blur" },
    categoryId: "ai",
    shortDescription: "Portrait-mode blur behind any person or object.",
    icon: "lens_blur",
    processing: "ai",
    library: "rembg",
    status: "live",
    isNew: true,
    priority: 125,
    seoTitle: "Blur Photo Background Online — Portrait Mode Effect | oMyImage",
    seoDescription:
      "Blur the background of any photo online with AI — keep the person or product sharp and soften everything behind it. Adjustable strength, free, no watermark.",
    primaryKeyword: "blur background",
  },

  // ── New tools (expansion.md §5) ────────────────────────────────────────
  {
    id: "passport-photo-maker",
    name: "Passport Size Photo Maker",
    slug: "passport-photo-maker",
    categoryId: "edit",
    shortDescription: "Passport, visa & ID photos with print sheets.",
    icon: "badge",
    processing: "client",
    library: "MediaPipe + Canvas",
    status: "live",
    isNew: true,
    priority: 32,
    seoTitle: "Passport Size Photo Maker Online — Free, Print-Ready | oMyImage",
    seoDescription:
      "Make passport size photos online free: auto face framing, 35×45 mm, 2×2 in, 3×4 cm and more, white or coloured background, 300-DPI print sheets. Private.",
    primaryKeyword: "passport size photo maker",
  },
  {
    id: "signature-resizer",
    name: "Signature Resizer",
    slug: "signature-resizer",
    categoryId: "optimize",
    shortDescription: "Clean, trim and resize a signature to 10–20KB.",
    icon: "draw",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 33,
    seoTitle: "Signature Resize Online — 10 to 20 KB, Clean and Free | oMyImage",
    seoDescription:
      "Resize your signature online free: white background, trimmed edges, 140×60 px or cm sizes and 10–20 KB for exam and job forms. In your browser, no upload.",
    primaryKeyword: "signature resize",
  },
  {
    id: "dpi-converter",
    name: "DPI Converter",
    slug: "dpi-converter",
    categoryId: "optimize",
    shortDescription: "Change image DPI to 300, 200 or any value, no quality loss.",
    icon: "high_quality",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 171,
    seoTitle: "Change DPI of Image to 300 Online — Free DPI Converter | oMyImage",
    seoDescription:
      "Change the DPI of JPG and PNG images to 300, 200, 72 or any value online for free. Only the DPI label changes, so quality stays identical. Batch, no upload.",
    primaryKeyword: "change dpi of image",
  },
  {
    id: "dpi-checker",
    name: "DPI Checker",
    slug: "dpi-checker",
    categoryId: "optimize",
    shortDescription: "Check an image's DPI and the size it prints at.",
    icon: "info",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 172,
    seoTitle: "Check Image DPI Online — Free DPI Checker | oMyImage",
    seoDescription:
      "Check the DPI of JPG, PNG, BMP and WEBP images online for free, and see the size they print at and the largest sharp print size. In your browser, no upload.",
    primaryKeyword: "check image dpi",
  },
  // passport-photo-maker family.
  {
    id: "3x4-photo",
    name: "3x4 Photo Maker",
    slug: "3x4-photo",
    parentId: "passport-photo-maker",
    preset: { size: "3x4" },
    categoryId: "edit",
    shortDescription: "3 × 4 cm document photos, framed and print-ready.",
    icon: "badge",
    processing: "client",
    library: "MediaPipe + Canvas",
    status: "live",
    isNew: true,
    priority: 131,
    seoTitle: "3x4 Photo Maker Online — 3 × 4 cm Document Photo, Free | oMyImage",
    seoDescription:
      "Make a 3x4 photo online free: the face is framed automatically at 3 × 4 cm, on a white or coloured background, with a print sheet of copies. In your browser.",
    primaryKeyword: "3x4 photo",
  },
  {
    id: "2x2-photo",
    name: "2x2 Photo Maker",
    slug: "2x2-photo",
    parentId: "passport-photo-maker",
    preset: { size: "2x2in" },
    categoryId: "edit",
    shortDescription: "2 × 2 inch photos for US passports and visas.",
    icon: "badge",
    processing: "client",
    library: "MediaPipe + Canvas",
    status: "live",
    isNew: true,
    priority: 132,
    seoTitle: "2x2 Photo Maker Online — US Passport & Visa Size, Free | oMyImage",
    seoDescription:
      "Make a 2x2 inch photo online free for a US passport or visa: automatic face framing, white background, 300 DPI, and a 4×6 print sheet. Private, in your browser.",
    primaryKeyword: "2x2 photo",
  },
  // split-image family.
  {
    id: "instagram-grid-maker",
    name: "Instagram Grid Maker",
    slug: "instagram-grid-maker",
    parentId: "split-image",
    preset: { mode: "instagram" },
    categoryId: "edit",
    shortDescription: "Turn one photo into a seamless Instagram grid or carousel.",
    icon: "photo_library",
    processing: "client",
    library: "Canvas",
    status: "live",
    isNew: true,
    priority: 133,
    seoTitle: "Instagram Grid Maker — Split a Photo into Grid Posts, Free | oMyImage",
    seoDescription:
      "Split one photo into Instagram profile-grid posts (3:4, 4:5 or square) or a seamless panorama carousel, sized for Instagram and numbered in posting order. Free, in your browser.",
    primaryKeyword: "instagram grid maker",
  },
];

/**
 * How many tools are actually shipped. Marketing copy that claims a number
 * ("All {n} tools are free") interpolates this instead of hard-coding one:
 * the count was wrong on /contact and /pricing for ten tools' worth of
 * releases, because nothing links a prose string to the registry.
 *
 * Counts `live` only — a "planned" entry renders as "Coming soon" and is not
 * a tool a visitor can use. Variants (compress-image-to-50kb …) count where
 * they are shipped, because the home grid and the Tools menu show them as
 * tools there: the number has to match the cards on the same site. That makes
 * it per locale — /id has no image-to-hd, /hi no 3x4-photo.
 */
export function liveToolCount(locale: Locale = DEFAULT_LOCALE): number {
  return TOOLS.filter((t) => t.status === "live" && (!t.parentId || toolShippedIn(t.id, locale))).length;
}

// ── Lookups ──────────────────────────────────────────────────────────────
export const TOOLS_BY_ID: Record<string, Tool> = Object.fromEntries(
  TOOLS.map((t) => [t.id, t])
);

const TOOLS_BY_SLUG: Record<string, Tool> = Object.fromEntries(
  TOOLS.map((t) => [t.slug, t])
);

/** Resolve a tool by slug (used by tool-prefs / favorites). */
/**
 * Premium = the server-side AI tools, the only ones we meter.
 *
 * Reads the explicit `premium` flag, falling back to `processing === "ai"` so a
 * new AI tool is metered the day it is added rather than the day someone
 * remembers to set the flag. These are exactly what the pricing page calls
 * "AI runs" — Remove Background and Upscale Image today.
 */
export function isPremiumTool(tool: Tool | string): boolean {
  const t = typeof tool === "string" ? TOOLS_BY_ID[tool] ?? TOOLS.find((x) => x.slug === tool) : tool;
  if (!t) return false;
  return t.premium ?? t.processing === "ai";
}

export function getTool(slug: string): Tool | undefined {
  return TOOLS_BY_SLUG[slug];
}

/**
 * Related tools for internal linking on a tool page. Only `live` tools are
 * returned so related cards never link to a not-yet-built tool. Same-category
 * tools are preferred.
 */
/**
 * The GIF tools, in menu order. They span three categories (Optimize, Edit,
 * Convert), so they are grouped here rather than by `categoryId`: the Tools
 * menu's GIF section lists them, and their related tools come from this list.
 */
export const GIF_SUITE = [
  "gif-maker", "typing-text-gif", "video-to-gif", "gif-compressor", "gif-resizer", "gif-cropper",
  "gif-cutter", "add-text-to-gif", "gif-merger", "rotate-gif", "reverse-gif", "gif-speed-changer",
  "gif-to-mp4", "gif-to-webp", "gif-to-apng", "webp-to-gif", "gif-to-images", "gif-to-sprite-sheet",
];

/**
 * Whole-image filters and effects, in menu order. Same idea as GIF_SUITE: the
 * Tools menu's Filters & Effects section and these pages' related tools come
 * from this list.
 */
export const EFFECTS_SUITE = [
  "image-brightness", "grayscale-image", "invert-image", "blur-image", "pixelate-image", "glitch-effect",
];

const SUITES = [GIF_SUITE, EFFECTS_SUITE];

export function relatedTools(tool: Tool, n = 3): Tool[] {
  // Variants never appear here (their family has its own link strip), and a
  // variant page shows its parent's list, so adding a variant can't reshuffle
  // the related tools on any existing page.
  const base = tool.parentId ? (TOOLS_BY_ID[tool.parentId] ?? tool) : tool;
  // A suite member links to the next tools in its suite, wrapping round, so
  // the suite's pages form a ring instead of all pointing at its first three.
  const suite = SUITES.find((s) => s.includes(base.id));
  if (suite) {
    const at = suite.indexOf(base.id);
    const ring = [...suite.slice(at + 1), ...suite.slice(0, at)]
      .map((id) => TOOLS_BY_ID[id])
      .filter((t) => t?.status === "live");
    if (ring.length >= n) return ring.slice(0, n);
  }
  const live = TOOLS.filter((t) => t.status === "live" && t.id !== base.id && !t.parentId);
  const sameCat = live.filter((t) => t.categoryId === base.categoryId);
  const others = live.filter((t) => t.categoryId !== base.categoryId);
  return [...sameCat, ...others].slice(0, n);
}

/** Live variants of a tool, in registry order. */
export function variantsOf(parentId: string): Tool[] {
  return TOOLS.filter((t) => t.parentId === parentId && t.status === "live");
}

/**
 * The family a tool belongs to — parent first, then its live variants — or an
 * empty list when it has none (a tool with no variants has no family strip).
 */
export function toolFamily(tool: Tool): Tool[] {
  const parent = tool.parentId ? TOOLS_BY_ID[tool.parentId] : tool;
  if (!parent) return [];
  const variants = variantsOf(parent.id);
  return variants.length ? [parent, ...variants] : [];
}

// ── Brand colors ───────────────────────────────────────────────────────────
/*
  Per-tool icon colors. These are deliberately MUTED (roughly 40–55%
  saturation) rather than the stock Tailwind-bright hues they started as:
  twenty-four neon icons on a page fight both each other and the Terracotta
  Clay accent, and the grid stops reading as one system. Every value here is
  mid-tone on purpose so it clears ~4.5:1 on the white card in light mode and
  still ~3.5:1+ on the near-black card in dark mode.

  Each tool page also declares a local `const ACCENT` for its dropzone; keep
  the two in sync when changing a color.
*/
const TOOL_COLORS: Record<string, string> = {
  "compress-image": "#4F9D69",
  "resize-image": "#4B8FC7",
  "crop-image": "#3E9A90",
  "rotate-image": "#8A6FC4",

  "convert-to-jpg": "#C08A3A",
  "convert-to-png": "#3E8FB0",
  "convert-to-webp": "#4F9D7A",
  "svg-to-png": "#B5703A",
  "png-to-ico": "#6A6FC0",
  "png-to-jpg": "#4B8FC7",
  "jpg-to-png": "#4B8FC7",
  "webp-to-png": "#3E9A96",
  "heic-to-jpg": "#D4855A",
  "image-to-pdf": "#C55F4E",

  "image-editor": "#7B5CC4",
  "watermark-image": "#8A6FC4",
  "meme-generator": "#C98B3E",
  "html-to-image": "#C96A48",

  "remove-background": "#7B79C9",
  "upscale-image": "#4C86CC",
  "blur-face": "#5D7091",

  "grayscale-image": "#6E7A8A",
  "blur-image": "#3E8CA6",
  "add-border": "#D08048",
  "circle-crop": "#3E96AE",
  "merge-images": "#C99B47",
  "image-color-picker": "#3F9E7C",
  "image-to-base64": "#6E71C4",
  "image-to-text": "#4B8FC7",
  "base64-to-image": "#8064C6",
  "image-metadata": "#5388C9",
  "remove-exif": "#C55A52",
  "gif-maker": "#C56A9A",
  "gif-to-images": "#B85C8C",
  "video-to-gif": "#C5527F",
  "gif-compressor": "#B0607E",
  "gif-resizer": "#A86A9A",
  "gif-to-mp4": "#C56A6A",
  "webp-to-gif": "#9A6AC5",
  "gif-cropper": "#B86A8A",
  "rotate-gif": "#9E6AA8",
  "reverse-gif": "#B05A80",
  "gif-speed-changer": "#C0706A",
  "gif-cutter": "#A85E92",
  "gif-to-webp": "#8E6AB8",
  "gif-to-apng": "#A0709E",
  "gif-to-sprite-sheet": "#B8668C",
  "gif-merger": "#C4607E",
  "add-text-to-gif": "#B4628A",
  "typing-text-gif": "#9C6A9E",
  "invert-image": "#5E6A9E",
  "pixelate-image": "#7A6FB0",
  "image-brightness": "#C2A04A",
  "glitch-effect": "#9A5FB0",
  "round-corners": "#6F8FB0",
  "remove-watermark": "#7B79C9",
  "remove-object": "#6C8FC9",
  "split-image": "#4F8FA8",
  "image-overlay": "#8C6FB0",
  "instagram-grid-maker": "#C1567E",
  "passport-photo-maker": "#4F7FB8",
  "signature-resizer": "#5A6FB0",
  "dpi-converter": "#5B7FA6",
  "dpi-checker": "#4C7DA8",
};

const CATEGORY_COLORS: Record<string, string> = {
  optimize: "#4F9D69",
  convert: "#4B8FC7",
  edit: "#8A6FC4",
  ai: "#7B79C9",
};

/** Brand/category color for a tool's icon. */
export function toolColor(tool: Tool): string {
  return TOOL_COLORS[tool.id] ?? CATEGORY_COLORS[tool.categoryId] ?? "#5B5347";
}

/** Same color as a low-opacity badge background (8-digit hex, ~10% alpha). */
export function toolColorTint(tool: Tool, alphaHex = "1A"): string {
  return `${toolColor(tool)}${alphaHex}`;
}
