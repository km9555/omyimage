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

export interface Output {
  buffer: Buffer;
  contentType: string;
  ext: string;
  width: number;
  height: number;
}

export interface EncodeOpts {
  format: TargetFormat;
  /** 0–1; applies to JPEG/WEBP/AVIF. */
  quality?: number;
  /** Hex color to flatten transparency onto (required for JPEG). */
  background?: string | null;
}

/** A base pipeline that EXIF-auto-orients and guards against huge inputs. */
function pipeline(buf: Buffer): sharp.Sharp {
  return sharp(buf, { failOn: "none", limitInputPixels: MAX_PIXELS }).rotate();
}

function encode(p: sharp.Sharp, o: EncodeOpts): sharp.Sharp {
  const q = Math.round((o.quality ?? 0.85) * 100);
  if (o.format === "jpeg") {
    return p.flatten({ background: o.background ?? "#ffffff" }).jpeg({ quality: q, mozjpeg: true });
  }
  if (o.background) p = p.flatten({ background: o.background });
  switch (o.format) {
    case "png":
      return p.png({ compressionLevel: 9 });
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
}

/** Compress (re-encode at a quality), optionally shrinking very large images. */
export async function compress(buf: Buffer, o: CompressOpts): Promise<Output> {
  let p = pipeline(buf);
  if (o.maxDimension && o.maxDimension > 0) {
    p = p.resize({ width: o.maxDimension, height: o.maxDimension, fit: "inside", withoutEnlargement: true });
  }
  return finalize(encode(p, o), o.format);
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
