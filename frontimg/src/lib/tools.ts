/**
 * Master tool registry — single source of truth for the home grid, navbar,
 * footer, sitemap and internal links. Mirrors the oMyPDF architecture, adapted
 * for image tools (Sharp / ImageMagick / browser canvas).
 *
 * Build tools ONE AT A TIME: set `status: "live"` only when a tool's page exists
 * and is verified. Everything else stays "planned" (renders as "Coming soon").
 */

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
}

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
    seoTitle: "Compress Image Online - Free | oMyImage",
    seoDescription:
      "Compress JPG, PNG and WEBP images online for free. Smart lossless and lossy compression with before/after sizes. No sign-up required. Fast and secure.",
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
    shortDescription: "Rotate 90°, 180°, 270° or auto-orient, in bulk.",
    icon: "rotate_90_degrees_cw",
    processing: "client",
    library: "Canvas / Sharp",
    status: "live",
    priority: 4,
    seoTitle: "Rotate Image Online - Free | oMyImage",
    seoDescription:
      "Rotate images online for free. Turn photos 90°, 180° or 270°, auto-orient by EXIF, and rotate multiple files at once. Fast and private.",
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
  // The backend's enhance() is literally upscale() with the scale hard-coded to
  // 2 (same realesrgan-ncnn-vulkan binary, same realesrgan-x4plus model), and
  // Upscale already exposes 2× as a user option. Its search aliases were folded
  // into "upscale-image". See the oMyPDF backend, src/lib/image/ai.ts.

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
];

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
export function relatedTools(tool: Tool, n = 3): Tool[] {
  const live = TOOLS.filter((t) => t.status === "live" && t.id !== tool.id);
  const sameCat = live.filter((t) => t.categoryId === tool.categoryId);
  const others = live.filter((t) => t.categoryId !== tool.categoryId);
  return [...sameCat, ...others].slice(0, n);
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
