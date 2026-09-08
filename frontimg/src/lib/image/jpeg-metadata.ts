/**
 * Carry EXIF and XMP from a source image into a freshly encoded JPEG.
 *
 * Every conversion in this codebase re-encodes from raw pixels — canvas in the
 * browser, Sharp on the server — and neither carries metadata across. That is
 * usually what you want (it is exactly how /remove-exif works), but the JPG
 * converter offers "Strip metadata" as a choice, and the unchecked state has to
 * mean the camera, date and GPS tags survive the round trip.
 *
 * The read happens on the SOURCE file and the write on whichever JPEG came
 * back, so the browser and server paths behave identically and the backend
 * needs no change at all.
 *
 * **The source's ICC profile is deliberately never carried.** A canvas decode
 * normalises pixels to sRGB, so re-attaching an Adobe RGB or Display P3 profile
 * would describe those pixels wrongly and shift colours in every viewer that
 * honours it. Chrome's JPEG encoder writes its own sRGB profile instead, which
 * correctly describes what it just encoded — that one is left alone unless the
 * user asks to strip, where `stripJpegMetadata` takes it out with everything
 * else. Removing an sRGB profile is safe: sRGB is what a viewer assumes when
 * there is none.
 *
 * Everything here is byte work over typed arrays — no dependency, in the style
 * of `exif-orientation.ts` (whose segment walker this reuses) and
 * `png-compress.ts`. Every parse is forgiving: malformed input yields "no
 * metadata" rather than an exception, so a bad file degrades to the old
 * always-strip behaviour instead of failing the conversion.
 */

import { eachJpegSegment } from "./exif-orientation";

export interface SourceMetadata {
  /** Raw TIFF block — what a PNG `eXIf` chunk, a WebP `EXIF` chunk or a JPEG APP1 holds. */
  exif?: Uint8Array;
  /** Raw XMP packet (UTF-8 XML). */
  xmp?: Uint8Array;
}

/** "Exif\0\0" — the APP1 payload prefix, and the marker some WebP encoders wrongly include. */
const EXIF_PREFIX = Uint8Array.from([0x45, 0x78, 0x69, 0x66, 0x00, 0x00]);

/** APP1 payload prefix for an XMP packet, NUL-terminated per the XMP spec. */
const XMP_PREFIX = Uint8Array.from(
  [...'http://ns.adobe.com/xap/1.0/'].map((c) => c.charCodeAt(0)).concat(0)
);

/** A JPEG segment's length field covers itself, so 0xFFFF total minus its own 2 bytes. */
const MAX_SEGMENT_BODY = 0xffff - 2;

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

const fourCC = (b: Uint8Array, at: number) =>
  String.fromCharCode(b[at], b[at + 1], b[at + 2], b[at + 3]);

const startsWith = (b: Uint8Array, at: number, probe: ArrayLike<number>) => {
  if (at + probe.length > b.length) return false;
  for (let i = 0; i < probe.length; i++) if (b[at + i] !== probe[i]) return false;
  return true;
};

/**
 * Pull the EXIF and XMP blocks out of an image's bytes.
 *
 * Dispatches on magic bytes rather than `File.type`: browsers report an empty
 * type for several formats this app accepts (see the `sourceKinds` note in
 * ConvertTool), and a wrong-but-present type would send us down the wrong
 * parser. GIF and BMP have nowhere to put EXIF, so they fall through to `{}`.
 */
export function readSourceMetadata(bytes: Uint8Array): SourceMetadata {
  try {
    if (startsWith(bytes, 0, PNG_SIGNATURE)) return readPng(bytes);
    if (bytes.length > 12 && fourCC(bytes, 0) === "RIFF" && fourCC(bytes, 8) === "WEBP") {
      return readWebp(bytes);
    }
    if (bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8) return readJpeg(bytes);
  } catch {
    /* Malformed container — fall through to "nothing to preserve". */
  }
  return {};
}

/** PNG: `length | type | data | crc` chunks. CRCs are not verified on read. */
function readPng(b: Uint8Array): SourceMetadata {
  const out: SourceMetadata = {};
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let off = PNG_SIGNATURE.length;

  while (off + 8 <= b.length) {
    const len = view.getUint32(off, false);
    const type = fourCC(b, off + 4);
    const start = off + 8;
    const end = start + len;
    if (end + 4 > b.length) break;
    // Metadata after IDAT is legal but effectively never happens, and stopping
    // here keeps us from walking megabytes of pixel chunks.
    if (type === "IDAT" || type === "IEND") break;

    if (type === "eXIf" && !out.exif) out.exif = b.slice(start, end);
    if (type === "iTXt" && !out.xmp) out.xmp = readPngXmp(b, start, end) ?? out.xmp;

    off = end + 4;
  }
  return out;
}

/**
 * An `iTXt` chunk carrying XMP:
 * `keyword \0 compressed compressionMethod languageTag \0 translatedKeyword \0 text`
 */
function readPngXmp(b: Uint8Array, start: number, end: number): Uint8Array | null {
  const kwEnd = b.indexOf(0, start);
  if (kwEnd < 0 || kwEnd >= end) return null;
  if (latin1(b, start, kwEnd) !== "XML:com.adobe.xmp") return null;
  // Compressed XMP would need inflate; it is vanishingly rare, so skip it
  // rather than pull a decompressor in for it.
  if (b[kwEnd + 1] !== 0) return null;
  const langEnd = b.indexOf(0, kwEnd + 3);
  if (langEnd < 0 || langEnd >= end) return null;
  const transEnd = b.indexOf(0, langEnd + 1);
  if (transEnd < 0 || transEnd >= end) return null;
  return b.slice(transEnd + 1, end);
}

/** WebP: a RIFF container of `fourCC | size (LE) | data`, each padded to even. */
function readWebp(b: Uint8Array): SourceMetadata {
  const out: SourceMetadata = {};
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let off = 12; // "RIFF" + size + "WEBP"

  while (off + 8 <= b.length) {
    const cc = fourCC(b, off);
    const size = view.getUint32(off + 4, true);
    const start = off + 8;
    const end = start + size;
    if (end > b.length) break;

    if (cc === "EXIF" && !out.exif) {
      // The spec says the payload is bare TIFF, but some encoders prepend the
      // JPEG-style "Exif\0\0" marker anyway. Trim it if it is there.
      const s = startsWith(b, start, EXIF_PREFIX) ? start + EXIF_PREFIX.length : start;
      out.exif = b.slice(s, end);
    }
    if (cc === "XMP " && !out.xmp) out.xmp = b.slice(start, end);

    off = end + (size & 1);
  }
  return out;
}

/**
 * JPEG sources. Not reachable from /convert-to-jpg (its `accept` is PNG, WEBP,
 * GIF and BMP), but it makes this module correct for the other converters if
 * the option is ever switched on for them.
 */
function readJpeg(b: Uint8Array): SourceMetadata {
  const out: SourceMetadata = {};
  eachJpegSegment(b, (marker, segStart, segEnd) => {
    if (marker !== 0xe1) return;
    if (!out.exif && startsWith(b, segStart, EXIF_PREFIX)) {
      out.exif = b.slice(segStart + EXIF_PREFIX.length, segEnd);
    } else if (!out.xmp && startsWith(b, segStart, XMP_PREFIX)) {
      out.xmp = b.slice(segStart + XMP_PREFIX.length, segEnd);
    }
  });
  return out;
}

/**
 * Fix up an EXIF block so it still describes the image after conversion.
 *
 * Two edits, both of which are wrong to skip:
 *
 * 1. **Orientation.** When the pipeline auto-rotated the pixels upright, a
 *    surviving `Orientation: 6` would make every viewer rotate a second time —
 *    the photo comes out sideways. Reset it to 1. Pass `orientationApplied:
 *    false` when the pixels were left alone (the browser path with auto-rotate
 *    switched off), where the original value is still the truth.
 * 2. **Thumbnail.** IFD1 holds a preview of the *source*, which after a rotate
 *    no longer matches the image. Unlink it.
 *
 * Both are in-place patches — Orientation is a SHORT stored inline in its entry
 * and the next-IFD pointer is a fixed four bytes past the entry list — so no
 * offset in the block moves and nothing has to be re-serialised. Unlinking
 * rather than truncating leaves the thumbnail bytes present but unreachable;
 * cutting them out would mean proving nothing else points past them.
 */
export function normaliseExif(
  exif: Uint8Array,
  { orientationApplied }: { orientationApplied: boolean }
): Uint8Array {
  const out = exif.slice(); // never mutate the caller's buffer
  if (out.length < 8) return out;
  const view = new DataView(out.buffer, out.byteOffset, out.byteLength);

  // "II" = little-endian, "MM" = big-endian. Anything else is not TIFF.
  const byteOrder = view.getUint16(0, false);
  const little = byteOrder === 0x4949;
  if (!little && byteOrder !== 0x4d4d) return out;
  if (view.getUint16(2, little) !== 0x002a) return out;

  const ifd0 = view.getUint32(4, little);
  if (ifd0 + 2 > out.length) return out;
  const count = view.getUint16(ifd0, little);
  const entriesEnd = ifd0 + 2 + count * 12;
  if (entriesEnd + 4 > out.length) return out;

  if (orientationApplied) {
    for (let i = 0; i < count; i++) {
      const entry = ifd0 + 2 + i * 12;
      if (view.getUint16(entry, little) !== 0x0112) continue;
      view.setUint16(entry + 8, 1, little);
      break;
    }
  }

  view.setUint32(entriesEnd, 0, little); // no IFD1 → no stale thumbnail
  return out;
}

/**
 * Write EXIF and XMP into an encoded JPEG as APP1 segments.
 *
 * The segments go immediately after SOI, ahead of the encoder's own JFIF APP0.
 * That is where the EXIF spec puts them and where readers look first.
 *
 * A block that will not fit one segment is skipped rather than truncated — a
 * short segment is a corrupt file, and an image that opens without its metadata
 * beats one that does not open. (Oversized XMP would need the Extended XMP
 * multi-segment chain, which nothing here produces.)
 */
export function injectJpegMetadata(jpeg: Uint8Array, meta: SourceMetadata): Uint8Array {
  if (jpeg.length < 2 || jpeg[0] !== 0xff || jpeg[1] !== 0xd8) return jpeg;

  const segments: Uint8Array[] = [];
  if (meta.exif?.length) {
    const s = app1(EXIF_PREFIX, meta.exif);
    if (s) segments.push(s);
  }
  if (meta.xmp?.length) {
    const s = app1(XMP_PREFIX, meta.xmp);
    if (s) segments.push(s);
  }
  if (segments.length === 0) return jpeg;

  // Canvas and Sharp both emit EXIF-free JPEGs, so there is normally nothing
  // to drop — this only stops a second APP1 appearing if that changes.
  const body = withoutSegments(jpeg, APP1).subarray(2);

  const added = segments.reduce((n, s) => n + s.length, 0);
  const out = new Uint8Array(2 + added + body.length);
  out[0] = 0xff;
  out[1] = 0xd8;
  let off = 2;
  for (const s of segments) {
    out.set(s, off);
    off += s.length;
  }
  out.set(body, off);
  return out;
}

/** One APP1 segment: `FFE1 | length | prefix | payload`. Null if it will not fit. */
function app1(prefix: Uint8Array, payload: Uint8Array): Uint8Array | null {
  const body = prefix.length + payload.length;
  if (body > MAX_SEGMENT_BODY) return null;
  const length = body + 2; // the length field counts itself
  const seg = new Uint8Array(2 + length);
  seg[0] = 0xff;
  seg[1] = 0xe1;
  seg[2] = (length >> 8) & 0xff;
  seg[3] = length & 0xff;
  seg.set(prefix, 4);
  seg.set(payload, 4 + prefix.length);
  return seg;
}

const APP1 = new Set([0xe1]);

/**
 * Everything a "Strip metadata" tick should take out.
 *
 * APP1 is EXIF and XMP, APP2 the ICC profile, APP13 Photoshop/IPTC, and COM a
 * free-text comment. Two markers are deliberately NOT here: APP0 is the JFIF
 * header that some older decoders expect structurally, and APP14 is Adobe's
 * colour-transform flag, without which a YCCK/CMYK JPEG decodes with inverted
 * colours. Neither carries anything about the photographer.
 */
const METADATA_MARKERS = new Set([0xe1, 0xe2, 0xed, 0xfe]);

/**
 * Strip every metadata segment from an encoded JPEG.
 *
 * Needed because the encoders do not hand back a bare file: Chrome's
 * `toBlob("image/jpeg")` embeds an sRGB ICC profile, so "strip" has to mean
 * more than "do not add EXIF". Dropping an sRGB profile does not change how the
 * image renders — sRGB is the fallback when a JPEG has no profile at all.
 */
export function stripJpegMetadata(jpeg: Uint8Array): Uint8Array {
  if (jpeg.length < 2 || jpeg[0] !== 0xff || jpeg[1] !== 0xd8) return jpeg;
  return withoutSegments(jpeg, METADATA_MARKERS);
}

/** The same JPEG with the given marker segments removed. Returns the input when there are none. */
function withoutSegments(jpeg: Uint8Array, markers: ReadonlySet<number>): Uint8Array {
  const cuts: { start: number; end: number }[] = [];
  eachJpegSegment(jpeg, (marker, segStart, segEnd) => {
    if (markers.has(marker)) cuts.push({ start: segStart - 4, end: segEnd });
  });
  if (cuts.length === 0) return jpeg;

  const removed = cuts.reduce((n, c) => n + (c.end - c.start), 0);
  const out = new Uint8Array(jpeg.length - removed);
  let read = 0;
  let write = 0;
  for (const c of cuts) {
    out.set(jpeg.subarray(read, c.start), write);
    write += c.start - read;
    read = c.end;
  }
  out.set(jpeg.subarray(read), write);
  return out;
}

function latin1(b: Uint8Array, start: number, end: number): string {
  let s = "";
  for (let i = start; i < end; i++) s += String.fromCharCode(b[i]);
  return s;
}
