/**
 * Ranked, alias-aware tool search — the single source of truth for every
 * "search tools" surface (currently the header search box).
 *
 * Two problems this solves over a plain `name.includes(query)`:
 *
 *  1. Search ORDER. Typing "png" must list "PNG to JPG" (name *starts* with the
 *     query) before "Convert to JPG" (query appears mid-description). Results
 *     are scored by where/how they match, not just whether they match, then
 *     sorted by that score (priority is only the tie-breaker).
 *
 *  2. LOGICAL / synonym search. Users don't know our exact tool names. Someone
 *     wanting Compress searches "make image smaller"; someone wanting Remove
 *     Background searches "transparent background" or "cut out". `TOOL_ALIASES`
 *     maps those real-world phrases to each tool, and matching is
 *     separator-insensitive so "png to jpg", "png-to-jpg" and "png2jpg" all
 *     resolve the same.
 *
 * Ported from oMyPDF; the scoring engine is tool-agnostic and unchanged, only
 * the alias table is image-specific.
 */
import type { Tool } from "@/lib/tools";

/**
 * Extra phrases users type that don't literally appear in a tool's name —
 * synonyms, file extensions, alternate spellings and task descriptions.
 * Keyed by tool `id` (which equals `slug` throughout tools.ts).
 * Keep entries lowercase; separators are ignored at match time.
 */
export const TOOL_ALIASES: Record<string, string[]> = {
  // ── Optimize ────────────────────────────────────────────────────────────
  "compress-image": [
    "make image smaller", "reduce image size", "shrink image", "shrink photo",
    "image compressor", "optimize image", "compress photo", "reduce file size",
    "lower image size", "decrease image size", "compress jpg", "compress png",
  ],
  "resize-image": [
    "change dimensions", "scale image", "image resizer", "change image size",
    "resize photo", "px", "pixels", "make image bigger", "shrink dimensions",
    "resize jpg", "resize png", "image dimensions", "width height",
  ],
  "crop-image": [
    "crop photo", "cut image", "trim image", "crop picture", "aspect ratio",
    "square crop", "16:9", "4:3", "cut out part of image", "image cropper",
  ],
  "rotate-image": [
    "rotate photo", "turn image", "flip image", "straighten image", "90 degrees",
    "180 degrees", "sideways photo", "auto orient", "fix orientation",
  ],
  "remove-exif": [
    "remove exif", "strip metadata", "remove metadata", "clear gps",
    "remove location from photo", "privacy photo", "scrub image data",
    "delete exif", "remove camera info", "anonymize photo",
  ],

  // ── Convert ─────────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "convert to jpeg", "any image to jpg", "to jpg", "change format to jpg",
    "webp to jpg", "gif to jpg", "bmp to jpg", "make jpg",
  ],
  "png-to-jpg": [
    "png to jpeg", "png2jpg", "convert png", "png into jpg", "transparent to jpg",
  ],
  "jpg-to-png": [
    "jpeg to png", "jpg2png", "convert jpg", "jpg into png", "lossless png",
  ],
  "webp-to-png": [
    "webp2png", "convert webp", "webp into png", "open webp", "webp converter",
  ],
  "heic-to-jpg": [
    "iphone photo", "heif", "convert heic", "apple photo to jpg", "heic converter",
    "heic to jpeg", "open heic", "iphone picture to jpg",
  ],
  "image-to-pdf": [
    "jpg to pdf", "png to pdf", "photos to pdf", "picture to pdf",
    "images to pdf", "make pdf from images", "scan to pdf", "img2pdf",
  ],
  "image-to-base64": [
    "base64 encode", "encode image", "data uri", "data url", "img to base64",
    "inline image", "base64 string from image",
  ],
  "base64-to-image": [
    "base64 decode", "decode base64", "data uri to image", "base64 to png",
    "base64 to jpg", "convert base64 string",
  ],
  "gif-to-images": [
    "extract gif frames", "gif frames", "split gif", "gif to png", "gif to jpg",
    "unpack gif", "animated gif frames",
  ],
  "html-to-image": [
    "html to png", "webpage to image", "url to image", "website screenshot",
    "screenshot url", "render html", "web page to png", "html2image",
  ],

  // ── Edit & create ───────────────────────────────────────────────────────
  // Also answers everything the retired "photo-editor" used to — it was merged
  // into this tool, so those queries must still land somewhere.
  "image-editor": [
    "edit image", "image editor", "all in one editor", "photo tools",
    "draw on image", "annotate image", "markup image", "edit picture",
    "photo editor", "edit photo", "filters", "brightness", "contrast",
    "saturation", "adjust photo", "photo filters", "retouch", "exposure",
  ],
  "watermark-image": [
    "add watermark", "logo on image", "brand image", "stamp image",
    "text on image", "copyright image", "overlay logo", "protect photo",
  ],
  "meme-generator": [
    "make meme", "meme maker", "top bottom text", "impact font", "caption image",
    "add text to image", "meme template", "funny image",
  ],
  "grayscale-image": [
    "black and white", "greyscale", "bw image", "monochrome", "desaturate",
    "remove color", "make image black and white", "gray photo",
  ],
  "blur-image": [
    "blur photo", "soften image", "gaussian blur", "make image blurry",
    "blur whole image", "background blur",
  ],
  "add-border": [
    "add frame", "image border", "picture frame", "padding around image",
    "outline image", "polaroid border", "add margin to image",
  ],
  "circle-crop": [
    "round crop", "circular crop", "avatar", "profile picture", "round image",
    "make image circle", "circle avatar", "round profile photo",
  ],
  "merge-images": [
    "combine images", "join images", "stitch images", "collage",
    "images side by side", "photo grid", "concatenate images", "merge photos",
  ],
  "gif-maker": [
    "make gif", "create gif", "animated gif", "images to gif", "photos to gif",
    "gif creator", "animation from images",
  ],

  // ── Inspect ─────────────────────────────────────────────────────────────
  // Also answers everything the retired "color-extractor" used to — palette
  // extraction was merged into this tool, so those queries must still land
  // somewhere.
  "image-color-picker": [
    "pick color", "eyedropper", "hex from image", "get color from image",
    "rgb from image", "color from photo", "colour picker",
    "color palette", "colour palette", "dominant colors", "extract palette",
    "image palette", "theme colors from image", "swatches", "color extractor",
    "extract colors from image", "palette generator", "color scheme from image",
  ],
  "image-metadata": [
    "exif viewer", "view exif", "camera info", "photo details", "gps from photo",
    "image properties", "shutter speed", "iso", "lens info", "when was photo taken",
  ],

  // ── AI ──────────────────────────────────────────────────────────────────
  "remove-background": [
    "remove bg", "transparent background", "cut out subject", "background remover",
    "png cutout", "delete background", "erase background", "isolate subject",
    "no background", "product photo cutout",
  ],
  // Also answers everything the retired "image-enhancer" used to — it was the
  // same Real-ESRGAN pass at 2×, so it was merged into this tool.
  "upscale-image": [
    "enlarge image", "increase resolution", "2x", "4x", "super resolution",
    "make image bigger without losing quality", "upscaler", "hd image",
    "improve resolution", "enhance resolution",
    "image enhancer", "enhance photo", "enhance image", "sharpen image",
    "denoise", "restore photo", "fix blurry photo", "improve image quality",
    "ai enhance", "unblur", "clean up photo",
  ],
  "blur-face": [
    "hide face", "censor face", "pixelate face", "anonymize face", "blur people",
    "blur license plate", "privacy blur", "mask face", "obscure face",
  ],
};

// Lowercase, replace every run of non-alphanumerics with a single space.
// "HEIC to JPG" → "heic to jpg". Used for word-boundary aware matching.
const spaced = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
// Lowercase, drop every non-alphanumeric. "PNG to JPG" → "pngtojpg".
// Lets "png2jpg" match "png to jpg".
const collapsed = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

/**
 * How well `text` matches the query, ignoring separators.
 * 4 = exact · 3 = prefix · 2 = word-boundary prefix · 1 = contains · 0 = none.
 */
function matchTier(qSpaced: string, qCollapsed: string, text: string): number {
  const tSpaced = spaced(text);
  if (!tSpaced) return 0;
  const tCollapsed = collapsed(text);
  if (tSpaced === qSpaced || tCollapsed === qCollapsed) return 4;
  if (tSpaced.startsWith(qSpaced)) return 3;
  if (tSpaced.includes(" " + qSpaced)) return 2;
  if (tSpaced.includes(qSpaced) || tCollapsed.includes(qCollapsed)) return 1;
  return 0;
}

// Field importance. Name dominates so a name match always beats an alias-only
// match of the same tier (e.g. "png" → name-prefix "PNG to JPG" > alias hit).
const FIELD_WEIGHT = { name: 5, keyword: 3, alias: 3, desc: 1 } as const;

/** Relevance score for a tool against an already-normalized query (0 = no match). */
export function scoreTool(tool: Tool, qSpaced: string, qCollapsed: string): number {
  let best = 0;
  const consider = (text: string, weight: number) => {
    const tier = matchTier(qSpaced, qCollapsed, text);
    if (tier > 0) best = Math.max(best, tier * weight);
  };
  consider(tool.name, FIELD_WEIGHT.name);
  consider(tool.primaryKeyword, FIELD_WEIGHT.keyword);
  for (const alias of TOOL_ALIASES[tool.id] ?? []) consider(alias, FIELD_WEIGHT.alias);
  consider(tool.shortDescription, FIELD_WEIGHT.desc);
  return best;
}

/**
 * Filter `pool` to tools matching `query`, ranked most-relevant first
 * (priority breaks ties). An empty query returns the whole pool by priority,
 * so callers can use this for the default "browse" ordering too.
 */
export function searchTools(query: string, pool: readonly Tool[]): Tool[] {
  const qSpaced = spaced(query);
  if (!qSpaced) return [...pool].sort((a, b) => a.priority - b.priority);
  const qCollapsed = collapsed(query);
  return pool
    .map((tool) => ({ tool, score: scoreTool(tool, qSpaced, qCollapsed) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.priority - b.tool.priority)
    .map((x) => x.tool);
}
