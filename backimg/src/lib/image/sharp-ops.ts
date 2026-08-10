import sharp from "sharp";

/**
 * Server-side image operations (Sharp). Used for large files (> 15 MB) and
 * heavy/batch jobs the browser offloads to the backend. Mirrors the in-browser
 * canvas engine so results are consistent across the size threshold.
 */

export type TargetFormat = "jpeg" | "png" | "webp" | "avif";

export const FORMAT_MIME: Record<TargetFormat, string> = {
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
};
export const FORMAT_EXT: Record<TargetFormat, string> = {
  jpeg: "jpg",
  png: "png",
  webp: "webp",
  avif: "avif",
};

const MAX_PIXELS = Number(process.env.MAX_IMAGE_PIXELS ?? 50_000_000);

/**
 * Encode quality used when a caller supplies none. Routes should pass their own
 * documented default rather than relying on this — it exists so the fallback has
 * a name instead of silently disagreeing with whatever the route intended.
 */
export const DEFAULT_QUALITY = 0.85;

export interface Output {
  buffer: Buffer;
  contentType: string;
  ext: string;
  width: number;
  height: number;
  /** True when the input was returned unchanged because re-encoding grew it. */
  keptOriginal?: boolean;
}

export interface EncodeOpts {
  format: TargetFormat;
  /** 0–1; applies to JPEG/WEBP/AVIF, and to PNG when `pngPalette` is set. */
  quality?: number;
  /** Hex color to flatten transparency onto (required for JPEG). */
  background?: string | null;
  /**
   * PNG only: quantize to an indexed palette (lossy, via libimagequant, which
   * the prebuilt sharp binary already bundles). Without this, PNG is re-deflated
   * losslessly and barely changes size. Mirrors the browser's
   * `lib/image/png-compress.ts` so results are consistent across the 15 MB
   * threshold.
   */
  pngPalette?: boolean;
  /** PNG only: maximum palette entries, 2–256. */
  pngColors?: number;
  /** PNG only: Floyd–Steinberg strength, 0–1. */
  pngDither?: number;
}

/** A base pipeline that EXIF-auto-orients and guards against huge inputs. */
function pipeline(buf: Buffer): sharp.Sharp {
  return sharp(buf, { failOn: "none", limitInputPixels: MAX_PIXELS }).rotate();
}

function encode(p: sharp.Sharp, o: EncodeOpts): sharp.Sharp {
  const q = Math.round((o.quality ?? DEFAULT_QUALITY) * 100);
  if (o.format === "jpeg") {
    return p.flatten({ background: o.background ?? "#ffffff" }).jpeg({ quality: q, mozjpeg: true });
  }
  if (o.background) p = p.flatten({ background: o.background });
  switch (o.format) {
    case "png":
      return o.pngPalette
        ? p.png({
            compressionLevel: 9,
            effort: 10,
            palette: true,
            quality: q,
            colours: Math.max(2, Math.min(256, Math.round(o.pngColors ?? 256))),
            dither: o.pngDither ?? 1,
          })
        : p.png({ compressionLevel: 9 });
    case "webp":
      return p.webp({ quality: q });
    case "avif":
      return p.avif({ quality: q });
  }
}

async function finalize(p: sharp.Sharp, fmt: TargetFormat): Promise<Output> {
  const { data, info } = await p.toBuffer({ resolveWithObject: true });
  return { buffer: data, contentType: FORMAT_MIME[fmt], ext: FORMAT_EXT[fmt], width: info.width, height: info.height };
}

/** Convert / re-encode an image to a target format. */
export async function convert(buf: Buffer, o: EncodeOpts): Promise<Output> {
  return finalize(encode(pipeline(buf), o), o.format);
}

export interface CompressOpts extends EncodeOpts {
  /** If set, downscale so the longest side ≤ maxDimension. */
  maxDimension?: number;
  /** Return the input bytes untouched when re-encoding made them bigger. */
  keepOriginalIfLarger?: boolean;
}

/** Compress (re-encode at a quality), optionally shrinking very large images. */
export async function compress(buf: Buffer, o: CompressOpts): Promise<Output> {
  const meta = await sharp(buf).metadata();
  let p = pipeline(buf);
  // Math.max of the two is rotation-invariant, so pre-EXIF metadata is fine here.
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
  const willResize = !!(o.maxDimension && o.maxDimension > 0 && longest > o.maxDimension);
  if (o.maxDimension && o.maxDimension > 0) {
    p = p.resize({ width: o.maxDimension, height: o.maxDimension, fit: "inside", withoutEnlargement: true });
  }
  const out = await finalize(encode(p, o), o.format);

  // Same policy as the browser path: handing back the input is only honest when
  // the container was meant to be unchanged and no resize actually happened.
  const sameFormat = meta.format === o.format || (o.format === "jpeg" && meta.format === "jpg");
  if (o.keepOriginalIfLarger && sameFormat && !willResize && out.buffer.length >= buf.length) {
    return { ...out, buffer: buf, keptOriginal: true };
  }
  return out;
}

export interface ResizeOpts extends EncodeOpts {
  width?: number;
  height?: number;
  /** "inside" keeps aspect ratio (fit); "fill" stretches to exact W×H. */
  fit?: "inside" | "fill" | "cover" | "contain" | "outside";
}

/** Resize to pixel dimensions. */
export async function resize(buf: Buffer, o: ResizeOpts): Promise<Output> {
  const p = pipeline(buf).resize({
    width: o.width,
    height: o.height,
    fit: o.fit ?? "inside",
    background: o.background ?? "#ffffff",
    withoutEnlargement: false,
  });
  return finalize(encode(p, o), o.format);
}

export interface RotateOpts extends EncodeOpts {
  angle?: number;
  flipH?: boolean;
  flipV?: boolean;
}

/** Rotate (any angle) and/or flip an image. */
export async function rotate(buf: Buffer, o: RotateOpts): Promise<Output> {
  let p = pipeline(buf);
  if (o.angle) p = p.rotate(o.angle, { background: o.background ?? "#00000000" });
  if (o.flipH) p = p.flop();
  if (o.flipV) p = p.flip();
  return finalize(encode(p, o), o.format);
}
