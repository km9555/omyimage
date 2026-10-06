/**
 * Read and write the DPI ("pixel density") stored in a JPEG or PNG — without
 * re-encoding a single pixel.
 *
 * DPI is a label, not image data: it tells a printer or a layout program how
 * many pixels to put in an inch. A 413 × 531 photo labelled 300 DPI prints at
 * 35 × 45 mm; the same pixels labelled 72 DPI print at 146 × 187 mm. Many
 * forms and print shops check the label, so ID photos and print sheets are
 * saved with it set, and changing it is a byte-level edit of one header field:
 *
 *   • JPEG — the JFIF APP0 segment's units/Xdensity/Ydensity. Inserted after
 *     SOI if the file has none (canvas output always has one).
 *   • PNG  — the pHYs chunk (pixels per METRE), replaced or inserted before
 *     the first IDAT, with its CRC.
 *
 * An EXIF XResolution, if a JPEG has one, can disagree with JFIF; readers
 * differ on which wins, so `setJpegDpi` also patches EXIF resolution tags
 * when it finds them.
 */

const INCH_PER_METRE = 39.3700787;

// ── CRC32 (PNG chunks) ─────────────────────────────────────────────────────
let crcTable: Uint32Array | null = null;
function crc32(bytes: Uint8Array): number {
  if (!crcTable) {
    crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

const isJpeg = (b: Uint8Array) => b[0] === 0xff && b[1] === 0xd8;
const isPng = (b: Uint8Array) =>
  b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47 && b[4] === 0x0d && b[5] === 0x0a;
const isBmp = (b: Uint8Array) => b[0] === 0x42 && b[1] === 0x4d;
const isWebp = (b: Uint8Array) =>
  b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50;
const isGif = (b: Uint8Array) => b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46;

export interface DpiInfo {
  /** Horizontal / vertical density in dots per inch, or null when unset. */
  x: number | null;
  y: number | null;
  /**
   * Where it was read from. "aspect" = a density field that only gives a pixel
   * aspect ratio (JFIF units 0, PNG unit 0) — no real DPI. "none" = the file
   * has no density field at all (always the case for GIF).
   */
  source: "jfif" | "exif" | "png" | "bmp" | "aspect" | "none";
}

/** Whether `setDpi` can write this file's own format (JPEG or PNG). */
export async function canStoreDpi(blob: Blob): Promise<boolean> {
  const head = new Uint8Array(await blob.slice(0, 8).arrayBuffer());
  return isJpeg(head) || isPng(head);
}

// ── EXIF resolution (inside APP1 "Exif\0\0" TIFF) ──────────────────────────
type Exif = { tiffStart: number; little: boolean };
function findExif(b: Uint8Array): Exif | null {
  let i = 2;
  while (i + 4 < b.length && b[i] === 0xff) {
    const marker = b[i + 1];
    const len = (b[i + 2] << 8) | b[i + 3];
    if (marker === 0xe1 && b[i + 4] === 0x45 && b[i + 5] === 0x78 && b[i + 6] === 0x69 && b[i + 7] === 0x66) {
      const tiffStart = i + 10;
      return { tiffStart, little: b[tiffStart] === 0x49 };
    }
    if (marker === 0xda) break; // start of scan
    i += 2 + len;
  }
  return null;
}
function exifResolutionEntries(b: Uint8Array, ex: Exif): { tag: number; valueOffset: number }[] {
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const u16 = (o: number) => dv.getUint16(o, ex.little);
  const u32 = (o: number) => dv.getUint32(o, ex.little);
  const ifd0 = ex.tiffStart + u32(ex.tiffStart + 4);
  if (ifd0 + 2 > b.length) return [];
  const count = u16(ifd0);
  const out: { tag: number; valueOffset: number }[] = [];
  for (let e = 0; e < count; e++) {
    const entry = ifd0 + 2 + e * 12;
    if (entry + 12 > b.length) break;
    const tag = u16(entry);
    // 0x011a XResolution, 0x011b YResolution (RATIONAL), 0x0128 ResolutionUnit (SHORT)
    if (tag === 0x011a || tag === 0x011b) out.push({ tag, valueOffset: ex.tiffStart + u32(entry + 8) });
    if (tag === 0x0128) out.push({ tag, valueOffset: entry + 8 });
  }
  return out;
}

/** EXIF XResolution/YResolution as DPI, or null when absent or unit-less. */
function exifDpi(b: Uint8Array, ex: Exif): { x: number; y: number } | null {
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let x: number | null = null;
  let y: number | null = null;
  let unit = 2;
  for (const e of exifResolutionEntries(b, ex)) {
    if (e.tag === 0x0128) unit = dv.getUint16(e.valueOffset, ex.little);
    else if (e.valueOffset + 8 <= b.length) {
      const num = dv.getUint32(e.valueOffset, ex.little);
      const den = dv.getUint32(e.valueOffset + 4, ex.little) || 1;
      if (e.tag === 0x011a) x = num / den;
      else y = num / den;
    }
  }
  if (x && y && unit === 2) return { x: Math.round(x), y: Math.round(y) };
  if (x && y && unit === 3) return { x: Math.round(x * 2.54), y: Math.round(y * 2.54) };
  return null;
}

/** The EXIF block of a WebP (RIFF "EXIF" chunk), located like findExif's. */
function findWebpExif(b: Uint8Array): Exif | null {
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let i = 12;
  while (i + 8 <= b.length) {
    const type = String.fromCharCode(b[i], b[i + 1], b[i + 2], b[i + 3]);
    const len = dv.getUint32(i + 4, true);
    if (type === "EXIF") {
      let start = i + 8;
      // Some writers keep JPEG's "Exif\0\0" prefix inside the chunk.
      if (b[start] === 0x45 && b[start + 1] === 0x78 && b[start + 2] === 0x69 && b[start + 3] === 0x66) start += 6;
      if (start + 8 > b.length) return null;
      return { tiffStart: start, little: b[start] === 0x49 };
    }
    i += 8 + len + (len & 1);
  }
  return null;
}

/**
 * Read the DPI an image declares: JPEG (EXIF, then JFIF), PNG (pHYs), BMP
 * (the header's pixels-per-metre), WebP (its EXIF chunk, if any). GIF has no
 * density field at all and always reads as "none".
 */
export async function readDpi(blob: Blob): Promise<DpiInfo> {
  const b = new Uint8Array(await blob.arrayBuffer());
  if (isBmp(b) && b.length >= 46) {
    const dv = new DataView(b.buffer);
    // BITMAPCOREHEADER (12 bytes) predates the resolution fields.
    if (dv.getUint32(14, true) < 40) return { x: null, y: null, source: "none" };
    const ppmX = dv.getInt32(38, true);
    const ppmY = dv.getInt32(42, true);
    if (ppmX <= 0 || ppmY <= 0) return { x: null, y: null, source: "none" };
    return { x: Math.round(ppmX / INCH_PER_METRE), y: Math.round(ppmY / INCH_PER_METRE), source: "bmp" };
  }
  if (isWebp(b)) {
    const ex = findWebpExif(b);
    const d = ex ? exifDpi(b, ex) : null;
    return d ? { ...d, source: "exif" } : { x: null, y: null, source: "none" };
  }
  if (isGif(b)) return { x: null, y: null, source: "none" };
  if (isPng(b)) {
    let i = 8;
    const dv = new DataView(b.buffer);
    while (i + 12 <= b.length) {
      const len = dv.getUint32(i);
      const type = String.fromCharCode(b[i + 4], b[i + 5], b[i + 6], b[i + 7]);
      if (type === "pHYs" && len === 9) {
        const ppuX = dv.getUint32(i + 8);
        const ppuY = dv.getUint32(i + 12);
        const unit = b[i + 16];
        if (unit !== 1) return { x: null, y: null, source: "aspect" };
        return { x: Math.round(ppuX / INCH_PER_METRE), y: Math.round(ppuY / INCH_PER_METRE), source: "png" };
      }
      if (type === "IDAT" || type === "IEND") break;
      i += 12 + len;
    }
    return { x: null, y: null, source: "none" };
  }
  if (isJpeg(b)) {
    const ex = findExif(b);
    const d = ex ? exifDpi(b, ex) : null;
    if (d) return { ...d, source: "exif" };
    if (b[2] === 0xff && b[3] === 0xe0 && b[6] === 0x4a && b[7] === 0x46 && b[8] === 0x49 && b[9] === 0x46) {
      const units = b[13];
      const xd = (b[14] << 8) | b[15];
      const yd = (b[16] << 8) | b[17];
      if (units === 1) return { x: xd, y: yd, source: "jfif" };
      if (units === 2) return { x: Math.round(xd * 2.54), y: Math.round(yd * 2.54), source: "jfif" };
      return { x: null, y: null, source: "aspect" };
    }
    return { x: null, y: null, source: "none" };
  }
  throw new Error("Only JPG and PNG files store a DPI value.");
}

/** A copy of the JPEG with its DPI set; pixels untouched. */
export async function setJpegDpi(blob: Blob, dpi: number): Promise<Blob> {
  const src = new Uint8Array(await blob.arrayBuffer());
  if (!isJpeg(src)) throw new Error("Not a JPEG file.");
  const d = Math.max(1, Math.min(65535, Math.round(dpi)));
  let b: Uint8Array;
  if (src[2] === 0xff && src[3] === 0xe0 && src[6] === 0x4a && src[7] === 0x46 && src[8] === 0x49 && src[9] === 0x46) {
    b = src.slice();
  } else {
    // No JFIF header: insert a minimal one after SOI.
    const app0 = new Uint8Array([0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0, 0, 0, 0, 0, 0x00, 0x00]);
    b = new Uint8Array(src.length + app0.length);
    b.set(src.subarray(0, 2), 0);
    b.set(app0, 2);
    b.set(src.subarray(2), 2 + app0.length);
  }
  b[13] = 1; // units: dots per inch
  b[14] = d >> 8;
  b[15] = d & 0xff;
  b[16] = d >> 8;
  b[17] = d & 0xff;
  const ex = findExif(b);
  if (ex) {
    const dv = new DataView(b.buffer);
    for (const e of exifResolutionEntries(b, ex)) {
      if (e.tag === 0x0128) dv.setUint16(e.valueOffset, 2, ex.little);
      else if (e.valueOffset + 8 <= b.length) {
        dv.setUint32(e.valueOffset, d, ex.little);
        dv.setUint32(e.valueOffset + 4, 1, ex.little);
      }
    }
  }
  return new Blob([b.buffer as ArrayBuffer], { type: "image/jpeg" }); // b owns its whole buffer (slice or fresh)
}

/** A copy of the PNG with its DPI set (pHYs chunk); pixels untouched. */
export async function setPngDpi(blob: Blob, dpi: number): Promise<Blob> {
  const src = new Uint8Array(await blob.arrayBuffer());
  if (!isPng(src)) throw new Error("Not a PNG file.");
  const ppm = Math.round(Math.max(1, dpi) * INCH_PER_METRE);
  const chunk = new Uint8Array(21);
  const cdv = new DataView(chunk.buffer);
  cdv.setUint32(0, 9);
  chunk.set([0x70, 0x48, 0x59, 0x73], 4); // "pHYs"
  cdv.setUint32(8, ppm);
  cdv.setUint32(12, ppm);
  chunk[16] = 1; // unit: metre
  cdv.setUint32(17, crc32(chunk.subarray(4, 17)));

  const parts: Uint8Array[] = [src.subarray(0, 8)];
  const dv = new DataView(src.buffer);
  let i = 8;
  let inserted = false;
  while (i + 12 <= src.length) {
    const len = dv.getUint32(i);
    const type = String.fromCharCode(src[i + 4], src[i + 5], src[i + 6], src[i + 7]);
    const end = i + 12 + len;
    if (type === "pHYs") { i = end; continue; } // dropped; replaced below
    if (!inserted && (type === "IDAT" || type === "IEND")) { parts.push(chunk); inserted = true; }
    parts.push(src.subarray(i, end));
    i = end;
  }
  return new Blob(parts as BlobPart[], { type: "image/png" });
}

/** Set the DPI of a JPEG or PNG, whichever it is. */
export async function setDpi(blob: Blob, dpi: number): Promise<Blob> {
  const head = new Uint8Array(await blob.slice(0, 8).arrayBuffer());
  if (isJpeg(head)) return setJpegDpi(blob, dpi);
  if (isPng(head)) return setPngDpi(blob, dpi);
  throw new Error("Only JPG and PNG files store a DPI value.");
}

/** Pixels needed for a length in millimetres at a DPI. */
export const mmToPx = (mm: number, dpi: number) => Math.round((mm / 25.4) * dpi);
