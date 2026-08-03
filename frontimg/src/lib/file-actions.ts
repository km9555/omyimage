/**
 * Map uploaded files → the tools that can process them, for the homepage
 * upload-first launcher (`HomeLauncher`).
 *
 * `tools.ts` has no accepted-input-type field, so the table below is curated by
 * hand and MUST track each tool's own `ACCEPT` constant / `accept` prop.
 *
 * TO ADD A TOOL HERE, both must be true, or the launcher opens it empty and the
 * user silently loses their files:
 *   1. it is `status: "live"` in tools.ts, and
 *   2. its component calls `useHandoff(<its file loader>)`.
 *
 * Intentionally omitted: `base64-to-image` and `html-to-image` — they take
 * pasted text / a URL, not a file upload.
 *
 * Unlike the oMyPDF original this matches on the INTERSECTION of the staged
 * set: a tool qualifies only if it accepts *every* staged file's kind. Union
 * semantics would offer "HEIC to JPG" for a staged PNG + HEIC pair, which then
 * chokes on the PNG.
 */
import { getTool, type Tool } from "@/lib/tools";

export type FileKind =
  | "jpeg" | "png" | "webp" | "gif" | "bmp"
  | "heic" | "tiff" | "svg" | "avif"
  | "other";

interface ToolInput {
  kinds: FileKind[];
  /** Tool's drop zone is `multiple={false}` — hide it when >1 file is staged. */
  single?: boolean;
}

// The `ACCEPT` constants cluster tightly; these keep the table readable.
const COMMON: FileKind[] = ["jpeg", "png", "webp"];
const COMMON_GIF: FileKind[] = [...COMMON, "gif"];
const COMMON_GIF_BMP: FileKind[] = [...COMMON_GIF, "bmp"];

/** slug → what that tool's file picker actually accepts. */
const TOOL_INPUTS: Record<string, ToolInput> = {
  // ── Optimize ────────────────────────────────────────────────────────────
  "compress-image": { kinds: COMMON },
  "resize-image": { kinds: COMMON_GIF_BMP },
  "crop-image": { kinds: COMMON_GIF_BMP, single: true },
  "rotate-image": { kinds: COMMON_GIF_BMP },
  "remove-exif": { kinds: COMMON },

  // ── Convert ─────────────────────────────────────────────────────────────
  "convert-to-jpg": { kinds: ["png", "webp", "gif", "bmp"] },
  "jpg-to-png": { kinds: ["jpeg"] },
  "png-to-jpg": { kinds: ["png"] },
  "webp-to-png": { kinds: ["webp"] },
  "heic-to-jpg": { kinds: ["heic"] },
  "gif-to-images": { kinds: ["gif"], single: true },
  "image-to-pdf": { kinds: COMMON_GIF_BMP },
  "image-to-base64": { kinds: [...COMMON_GIF_BMP, "svg", "avif"], single: true },

  // ── Edit & create ───────────────────────────────────────────────────────
  "add-border": { kinds: COMMON },
  "blur-image": { kinds: COMMON },
  "circle-crop": { kinds: COMMON },
  "grayscale-image": { kinds: COMMON },
  "merge-images": { kinds: COMMON },
  "watermark-image": { kinds: COMMON },
  "gif-maker": { kinds: COMMON_GIF_BMP },
  "image-editor": { kinds: COMMON_GIF_BMP, single: true },
  "meme-generator": { kinds: COMMON_GIF, single: true },

  // ── Inspect ─────────────────────────────────────────────────────────────
  "color-extractor": { kinds: COMMON_GIF_BMP, single: true },
  "image-color-picker": { kinds: COMMON_GIF_BMP, single: true },
  "image-metadata": { kinds: [...COMMON, "tiff", "heic"], single: true },

  // ── AI (server) ─────────────────────────────────────────────────────────
  "remove-background": { kinds: COMMON, single: true },
  "upscale-image": { kinds: COMMON, single: true },
  "blur-face": { kinds: COMMON, single: true },
};

const EXT_KINDS: [RegExp, FileKind][] = [
  [/\.(jpe?g|jfif)$/i, "jpeg"],
  [/\.png$/i, "png"],
  [/\.webp$/i, "webp"],
  [/\.gif$/i, "gif"],
  [/\.bmp$/i, "bmp"],
  [/\.(heic|heif)$/i, "heic"],
  [/\.tiff?$/i, "tiff"],
  [/\.svg$/i, "svg"],
  [/\.avif$/i, "avif"],
];

const MIME_KINDS: Record<string, FileKind> = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpeg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/bmp": "bmp",
  "image/heic": "heic",
  "image/heif": "heic",
  "image/tiff": "tiff",
  "image/svg+xml": "svg",
  "image/avif": "avif",
};

/**
 * Classify one file. MIME first, extension as fallback — browsers frequently
 * report an empty `type` for .heic/.heif and .avif, so the extension pass is
 * load-bearing, not a nicety.
 */
export function kindOf(file: File): FileKind {
  const byMime = MIME_KINDS[file.type.toLowerCase()];
  if (byMime) return byMime;
  for (const [re, kind] of EXT_KINDS) if (re.test(file.name)) return kind;
  return "other";
}

/** Distinct kinds present in the staged set. */
export function kindsOf(files: File[]): Set<FileKind> {
  return new Set(files.map(kindOf));
}

/**
 * Live tools that can process the whole uploaded set, sorted by priority.
 * Empty when nothing supports it.
 */
export function applicableTools(files: File[]): Tool[] {
  if (files.length === 0) return [];
  const kinds = kindsOf(files);
  if (kinds.has("other")) return [];

  const out: Tool[] = [];
  for (const [slug, input] of Object.entries(TOOL_INPUTS)) {
    if (input.single && files.length > 1) continue;
    let ok = true;
    for (const k of kinds) {
      if (!input.kinds.includes(k)) { ok = false; break; }
    }
    if (!ok) continue;
    const tool = getTool(slug);
    if (tool && tool.status === "live") out.push(tool);
  }
  return out.sort((a, b) => a.priority - b.priority);
}

/** The full set of slugs the launcher may route to (for wiring/verification). */
export const LAUNCHER_TOOL_SLUGS: string[] = Object.keys(TOOL_INPUTS);
