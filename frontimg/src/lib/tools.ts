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
    shortDescription: "Shrink JPG, PNG, WEBP & GIF without losing quality.",
    icon: "compress",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    priority: 1,
    seoTitle: "Compress Image Online - Free | oMyImage",
    seoDescription:
      "Compress JPG, PNG, WEBP and GIF images online for free. Smart lossless and lossy compression with before/after preview. No sign-up required. Fast and secure.",
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
    shortDescription: "Free crop or fixed aspect ratios, batch crop.",
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
    shortDescription: "PNG, WEBP, GIF, HEIC, TIFF & RAW → JPG.",
    icon: "image",
    processing: "hybrid",
    library: "Sharp",
    status: "live",
    priority: 5,
    seoTitle: "Convert Image to JPG Online - Free | oMyImage",
    seoDescription:
      "Convert PNG, WEBP, GIF, HEIC, TIFF, PSD and RAW to JPG online for free. High-quality conversion, batch supported. No installation or sign-up required.",
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
  {
    id: "heic-to-jpg",
    name: "HEIC to JPG",
    slug: "heic-to-jpg",
    categoryId: "convert",
    shortDescription: "Convert iPhone HEIC photos to JPG.",
    icon: "photo_camera",
    processing: "server",
    library: "Sharp / ImageMagick",
    status: "live",
    priority: 9,
    seoTitle: "HEIC to JPG Converter Online - Free | oMyImage",
    seoDescription:
      "Convert HEIC (iPhone photos) to JPG online for free. Preserve quality, batch convert. No installation or sign-up required.",
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
  {
    id: "photo-editor",
    name: "Photo Editor",
    slug: "photo-editor",
    categoryId: "edit",
    shortDescription: "Filters, text, stickers, brightness & contrast.",
    icon: "tune",
    processing: "client",
    library: "Fabric.js",
    status: "live",
    priority: 12,
    seoTitle: "Free Online Photo Editor | oMyImage",
    seoDescription:
      "Edit photos online for free. Add text, stickers, shapes and frames, adjust brightness, contrast and saturation, apply filters. Right in your browser.",
    primaryKeyword: "photo editor online free",
  },
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
    shortDescription: "Render a URL or raw HTML to JPG/PNG/WEBP.",
    icon: "code",
    processing: "server",
    library: "Puppeteer",
    status: "live",
    priority: 14,
    seoTitle: "HTML to Image Converter Online - Free | oMyImage",
    seoDescription:
      "Convert HTML or a web page URL to an image online for free. Export to JPG, PNG, SVG or WEBP. Fast, accurate rendering. No sign-up required.",
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
    library: "rembg / @imgly",
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
    shortDescription: "AI upscaling 2x, 4x, 8x with detail recovery.",
    icon: "hd",
    processing: "ai",
    library: "Real-ESRGAN",
    status: "live",
    priority: 16,
    premium: true,
    seoTitle: "Upscale Image Online - Free | oMyImage",
    seoDescription:
      "Upscale images online with AI. 2x, 4x and 8x enlargement with detail recovery, face enhancement and noise reduction. No sign-up required.",
    primaryKeyword: "upscale image online free",
  },
  {
    id: "blur-face",
    name: "Blur Face",
    slug: "blur-face",
    categoryId: "edit",
    shortDescription: "Blur or pixelate faces & plates for privacy.",
    icon: "blur_on",
    processing: "client",
    library: "Canvas",
    status: "live",
    priority: 17,
    seoTitle: "Blur Face in Photo Online - Free | oMyImage",
    seoDescription:
      "Blur or pixelate faces, license plates and private details in photos online for free. Draw the areas, pick the strength, export. 100% in-browser, no sign-up.",
    primaryKeyword: "blur face online",
  },
  {
    id: "image-enhancer",
    name: "Image Enhancer",
    slug: "image-enhancer",
    categoryId: "ai",
    shortDescription: "AI enhance: sharpen, denoise & restore.",
    icon: "auto_awesome",
    processing: "ai",
    library: "Real-ESRGAN",
    status: "live",
    priority: 18,
    premium: true,
    seoTitle: "AI Image Enhancer Online - Free | oMyImage",
    seoDescription:
      "Enhance images online with AI. Sharpen, reduce noise, restore detail and improve low-quality photos automatically. No sign-up required.",
    primaryKeyword: "ai image enhancer online",
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
const TOOL_COLORS: Record<string, string> = {
  "compress-image": "#27AE60",
  "resize-image": "#0EA5E9",
  "crop-image": "#14B8A6",
  "rotate-image": "#9B51E0",

  "convert-to-jpg": "#E2A700",
  "png-to-jpg": "#2D9CDB",
  "jpg-to-png": "#2D9CDB",
  "webp-to-png": "#0EA5A4",
  "heic-to-jpg": "#F2994A",
  "image-to-pdf": "#E5533D",

  "watermark-image": "#8B5CF6",
  "photo-editor": "#D4537E",
  "meme-generator": "#E5820D",
  "html-to-image": "#E44D26",

  "remove-background": "#7F77DD",
  "upscale-image": "#2F80ED",
  "blur-face": "#56688A",
  "image-enhancer": "#9B51E0",
};

const CATEGORY_COLORS: Record<string, string> = {
  optimize: "#27AE60",
  convert: "#2D9CDB",
  edit: "#8B5CF6",
  ai: "#7F77DD",
};

/** Brand/category color for a tool's icon. */
export function toolColor(tool: Tool): string {
  return TOOL_COLORS[tool.id] ?? CATEGORY_COLORS[tool.categoryId] ?? "#4a4640";
}

/** Same color as a low-opacity badge background (8-digit hex, ~10% alpha). */
export function toolColorTint(tool: Tool, alphaHex = "1A"): string {
  return `${toolColor(tool)}${alphaHex}`;
}
