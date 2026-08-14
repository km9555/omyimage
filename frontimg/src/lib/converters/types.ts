/**
 * Types for the data-driven converter pages.
 *
 * A "converter pair" is one X→Y format conversion that gets its own route.
 * The page body is rendered by a single shared component (`ConverterPage`),
 * so everything that distinguishes one converter from another lives here as
 * data — including, deliberately, its prose.
 */
import type { FileKind } from "@/lib/file-actions";
import type { ExportMime } from "@/lib/image/raster";

export type FormatId =
  | "jpg" | "png" | "webp" | "gif" | "bmp"
  | "avif" | "heic" | "jfif" | "tiff" | "ico";

/**
 * How the output is actually produced. This is not cosmetic: it decides
 * whether the file leaves the device, and therefore what the page is allowed
 * to claim about privacy. See LICENSE-AUDIT.md F4 — this project has already
 * shipped copy that overstated what a tool did.
 *
 *  - `canvas`  — HTMLCanvasElement.toBlob. Browser-only, the three MIME types
 *                the platform can encode.
 *  - `encoder` — a hand-written encoder in src/lib/image/. Browser-only.
 *  - `server`  — POSTed to /api/image/*, at any size.
 */
export type ConvertTarget =
  | { kind: "canvas"; mime: ExportMime }
  | { kind: "encoder"; id: "gif" | "bmp" | "ico"; ext: string; mime: string }
  | { kind: "server"; format: "avif" | "tiff" | "jpeg" | "png" | "webp"; ext: string; mime: string };

export interface EngineSpec {
  target: ConvertTarget;
  /** Where the SOURCE is decoded. `server` for formats browsers cannot read. */
  decode: "browser" | "server";
  /**
   * Whether a file over the size threshold may fall back to the server.
   * MUST be false when the source format is one Sharp cannot decode (BMP), or
   * the oversize path throws instead of converting.
   */
  serverFallback: boolean;
}

/**
 * Per-pair prose. Every field is REQUIRED, on purpose: it must be impossible
 * to add a converter page without writing copy specific to that pair. A page
 * built only from generated boilerplate is a thin-content liability for the
 * whole domain, not just for itself.
 */
export interface PairUniqueCopy {
  /** Lead paragraph. ~60-90 words. */
  intro: string;
  /** "Why convert X to Y" section body. ~100-160 words. */
  whyConvert: string;
  /** Extra sections, each a distinct angle on this pair. At least 2. */
  notes: { heading: string; body: string }[];
  /** Pair-specific Q&A. At least 5. Generic ones are appended automatically. */
  faqs: { q: string; a: string }[];
}

export interface ConverterPair {
  /** Route folder name and tool id. */
  slug: string;
  from: FormatId;
  to: FormatId;
  /** Display name, e.g. "WEBP to PNG". */
  name: string;
  /** Material Symbols icon. */
  icon: string;
  engine: EngineSpec;
  /** What the file picker accepts, as classifier kinds (see file-actions). */
  sourceKinds: FileKind[];
  /** Show the background-flatten control (targets without alpha). */
  flatten: boolean;
  /** Show the quality slider (lossy targets). */
  quality: boolean;
  /** Extra search synonyms beyond name/keyword. */
  aliases?: string[];
  /** SoftwareApplication JSON-LD rating. Kept per-pair so they are not clones. */
  rating: { value: string; count: string };
  unique: PairUniqueCopy;
}
