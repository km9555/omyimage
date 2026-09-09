/**
 * Carry EXIF and XMP from a source image into a freshly encoded JPEG or PNG.
 *
 * Every conversion in this codebase re-encodes from raw pixels — canvas in the
 * browser, Sharp on the server — and neither carries metadata across. That is
 * usually what you want (it is exactly how /remove-exif works), but the
 * converters offer "Strip metadata" as a choice, and the unchecked state has to
 * mean the camera, date and GPS tags survive the round trip.
 *
 * The read happens on the SOURCE file and the write on whichever encoded image
 * came back, so the browser and server paths behave identically and the backend
 * needs no change at all.
 *
 * Readers: PNG, WebP, JPEG and ISOBMFF (AVIF/HEIC). Writers: JPEG and PNG.
 * WebP output is the gap — the browser encodes the simple VP8/VP8L form, which
 * cannot legally hold an EXIF chunk, so writing it means repackaging the RIFF
 * into the extended VP8X container first. Callers go through
 * `applySourceMetadata` / `stripOutputMetadata`, which no-op on containers this
 * module cannot write rather than pretending.
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
    // AVIF and HEIC are both ISOBMFF; the brand sits in the `ftyp` box.
    if (bytes.length > 12 && fourCC(bytes, 4) === "ftyp") return readIsoBmff(bytes);
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

/* ── ISOBMFF (AVIF, HEIC) ──────────────────────────────────────────────────── */

/**
 * Pull EXIF out of an ISOBMFF file — AVIF from /avif-to-jpg and /avif-to-png,
 * and HEIC if a caller ever needs it.
 *
 * Unlike the other three containers, metadata is not a chunk you can stumble
 * over while walking the top level. It is an *item*: `meta` holds `iinf`, which
 * names each item and its type, and `iloc`, which says where that item's bytes
 * actually live. So the walk is find-meta, find-the-Exif-item-id, then look its
 * offset up in the location table.
 *
 * Only what AVIF and HEIC encoders actually emit is handled — `iloc`
 * construction method 0 (absolute file offsets) in versions 0 and 1, single
 * extent. Anything else returns nothing rather than guessing at an offset.
 */
function readIsoBmff(b: Uint8Array): SourceMetadata {
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const meta = findBox(view, b, 0, b.length, "meta");
  if (!meta) return {};
  // `meta` is a FullBox: four bytes of version+flags before its children.
  const metaStart = meta.start + 4;
  const iinf = findBox(view, b, metaStart, meta.end, "iinf");
  const iloc = findBox(view, b, metaStart, meta.end, "iloc");
  if (!iinf || !iloc) return {};

  const exifId = findExifItemId(view, b, iinf);
  if (exifId === null) return {};
  const extent = findItemExtent(view, iloc, exifId);
  if (!extent || extent.offset + extent.length > b.length) return {};

  /* The Exif item payload leads with a 4-byte big-endian offset to the TIFF
     header — normally 6, skipping an "Exif\0\0" that the item body repeats. */
  const payload = b.subarray(extent.offset, extent.offset + extent.length);
  if (payload.length < 4) return {};
  const skip = 4 + new DataView(payload.buffer, payload.byteOffset, payload.byteLength).getUint32(0, false);
  if (skip >= payload.length) return {};
  return { exif: payload.slice(skip) };
}

interface Box {
  /** First byte of the box's payload. */
  start: number;
  /** One past its last payload byte. */
  end: number;
}

/** Find a direct child box by type within [from, to). */
function findBox(view: DataView, b: Uint8Array, from: number, to: number, type: string): Box | null {
  let off = from;
  while (off + 8 <= to) {
    let size = view.getUint32(off, false);
    let header = 8;
    // size 1 means the real size is a 64-bit field after the type; size 0 means
    // "to the end of the file".
    if (size === 1) {
      if (off + 16 > to) return null;
      const hi = view.getUint32(off + 8, false);
      if (hi !== 0) return null; // > 4GB, not something we handle
      size = view.getUint32(off + 12, false);
      header = 16;
    } else if (size === 0) {
      size = to - off;
    }
    if (size < header || off + size > to) return null;
    if (fourCC(b, off + 4) === type) return { start: off + header, end: off + size };
    off += size;
  }
  return null;
}

/** The item ID whose type is `Exif`, from the item-info box. */
function findExifItemId(view: DataView, b: Uint8Array, iinf: Box): number | null {
  const version = view.getUint8(iinf.start);
  let off = iinf.start + 4;
  // Entry count is 16-bit in v0, 32-bit from v1.
  if (version === 0) off += 2;
  else off += 4;

  while (off + 8 <= iinf.end) {
    const size = view.getUint32(off, false);
    if (size < 8 || off + size > iinf.end) return null;
    if (fourCC(b, off + 4) === "infe") {
      const infeVersion = view.getUint8(off + 8);
      if (infeVersion >= 2) {
        // v2: id is 16-bit, v3: 32-bit. Then protection index, then item type.
        const idAt = off + 12;
        const id = infeVersion === 2 ? view.getUint16(idAt, false) : view.getUint32(idAt, false);
        const typeAt = idAt + (infeVersion === 2 ? 2 : 4) + 2;
        if (typeAt + 4 <= off + size && fourCC(b, typeAt) === "Exif") return id;
      }
    }
    off += size;
  }
  return null;
}

/** Offset and length of an item's first extent, from the item-location box. */
function findItemExtent(view: DataView, iloc: Box, wantId: number): { offset: number; length: number } | null {
  const version = view.getUint8(iloc.start);
  let off = iloc.start + 4;
  if (off + 2 > iloc.end) return null;

  // Field widths are packed two-per-byte.
  const sizes = view.getUint8(off);
  const offsetSize = sizes >> 4;
  const lengthSize = sizes & 0x0f;
  const sizes2 = view.getUint8(off + 1);
  const baseOffsetSize = sizes2 >> 4;
  const indexSize = version === 1 ? sizes2 & 0x0f : 0;
  off += 2;

  let count: number;
  if (version < 2) {
    count = view.getUint16(off, false);
    off += 2;
  } else {
    return null; // v2 uses 32-bit ids and is not emitted by AVIF/HEIC encoders
  }

  const readN = (at: number, n: number): number => {
    if (n === 0) return 0;
    if (n === 4) return view.getUint32(at, false);
    if (n === 8) {
      // Only the low half is usable; a >4GB offset is out of scope anyway.
      return view.getUint32(at, false) !== 0 ? NaN : view.getUint32(at + 4, false);
    }
    let v = 0;
    for (let i = 0; i < n; i++) v = v * 256 + view.getUint8(at + i);
    return v;
  };

  for (let i = 0; i < count; i++) {
    if (off + 6 > iloc.end) return null;
    const id = view.getUint16(off, false);
    off += 2;
    let construction = 0;
    if (version === 1) {
      construction = view.getUint16(off, false) & 0x0f;
      off += 2;
    }
    off += 2; // data reference index
    const baseOffset = readN(off, baseOffsetSize);
    off += baseOffsetSize;
    const extentCount = view.getUint16(off, false);
    off += 2;

    for (let e = 0; e < extentCount; e++) {
      off += indexSize;
      const extentOffset = readN(off, offsetSize);
      off += offsetSize;
      const extentLength = readN(off, lengthSize);
      off += lengthSize;
      // Construction 0 is a plain file offset; 1 and 2 indirect through other
      // boxes, which no AVIF or HEIC encoder uses for the Exif item.
      if (id === wantId && e === 0 && construction === 0) {
        const offset = baseOffset + extentOffset;
        if (!Number.isFinite(offset) || !Number.isFinite(extentLength)) return null;
        return { offset, length: extentLength };
      }
    }
  }
  return null;
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

/* ── PNG writing ───────────────────────────────────────────────────────────── */

/*
  A second CRC32, duplicating the one in png-compress.ts on purpose.

  That module is the palette quantiser — colour cubes, alpha planning, the lot —
  and importing ten lines from it would pull all of that into the bundle of
  every converter page that touches metadata. It is the same split raster.ts
  made when it moved `formatBytes` out to file-naming.ts so a component wanting
  one helper no longer dragged the whole decode pipeline behind it.
*/
let crcTable: Uint32Array | null = null;
function crc32(bytes: Uint8Array, start: number, end: number): number {
  if (!crcTable) {
    crcTable = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c >>> 0;
    }
  }
  let c = 0xffffffff;
  for (let i = start; i < end; i++) c = crcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** One PNG chunk: `length | type | data | crc`. */
function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length, false);
  for (let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
  out.set(data, 8);
  // The CRC covers the type and the data, never the length.
  view.setUint32(8 + data.length, crc32(out, 4, 8 + data.length), false);
  return out;
}

/** Byte offset of the first `IDAT`, where metadata chunks have to go before. */
function firstIdat(b: Uint8Array): number {
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  let off = PNG_SIGNATURE.length;
  while (off + 8 <= b.length) {
    const len = view.getUint32(off, false);
    const type = fourCC(b, off + 4);
    if (type === "IDAT" || type === "IEND") return off;
    const next = off + 12 + len;
    if (next <= off || next > b.length) return -1;
    off = next;
  }
  return -1;
}

/**
 * Write EXIF and XMP into an encoded PNG.
 *
 * EXIF goes in an `eXIf` chunk (PNG 1.5), which holds the bare TIFF block — the
 * same bytes the JPEG path wraps in "Exif\0\0". XMP goes in an `iTXt` keyed
 * `XML:com.adobe.xmp`, uncompressed, with empty language and translated-keyword
 * fields. Both must precede `IDAT`.
 */
export function injectPngMetadata(png: Uint8Array, meta: SourceMetadata): Uint8Array {
  if (!startsWith(png, 0, PNG_SIGNATURE)) return png;

  const chunks: Uint8Array[] = [];
  if (meta.exif?.length) chunks.push(pngChunk("eXIf", meta.exif));
  if (meta.xmp?.length) {
    const keyword = "XML:com.adobe.xmp";
    // keyword \0 compressionFlag compressionMethod language \0 translated \0 text
    const head = new Uint8Array(keyword.length + 5);
    for (let i = 0; i < keyword.length; i++) head[i] = keyword.charCodeAt(i);
    // The four bytes after the keyword's NUL are already zero: flag 0 (not
    // compressed), method 0, then two empty NUL-terminated strings.
    const data = new Uint8Array(head.length + meta.xmp.length);
    data.set(head);
    data.set(meta.xmp, head.length);
    chunks.push(pngChunk("iTXt", data));
  }
  if (chunks.length === 0) return png;

  /* Replace rather than append, so re-running never leaves two eXIf chunks —
     but only the chunks we are about to rewrite. The colour chunks stay, which
     matches the JPEG path, where injecting drops APP1 and leaves the encoder's
     sRGB APP2 alone. Stripping those is the ticked box's job, not this one's. */
  const base = removePngChunks(png, PNG_REPLACED_CHUNKS);
  const at = firstIdat(base);
  if (at < 0) return png;

  const added = chunks.reduce((n, c) => n + c.length, 0);
  const out = new Uint8Array(base.length + added);
  out.set(base.subarray(0, at));
  let off = at;
  for (const c of chunks) {
    out.set(c, off);
    off += c.length;
  }
  out.set(base.subarray(at), off);
  return out;
}

/**
 * Chunks a "Strip metadata" tick should remove from a PNG.
 *
 * The text and EXIF chunks are the point. The colour chunks go too, matching
 * what png-compress.ts already does deliberately: the canvas normalised
 * everything to sRGB, so an sRGB tag is bytes describing the default, and any
 * other profile would be describing pixels that no longer exist.
 */
const PNG_METADATA_CHUNKS = new Set([
  "eXIf", "iTXt", "tEXt", "zTXt", "iCCP", "sRGB", "gAMA", "cHRM", "tIME",
]);

/** Just the chunks `injectPngMetadata` is about to write, so it replaces cleanly. */
const PNG_REPLACED_CHUNKS = new Set(["eXIf", "iTXt"]);

/** Remove every metadata chunk from an encoded PNG. */
export function stripPngMetadata(png: Uint8Array): Uint8Array {
  return removePngChunks(png, PNG_METADATA_CHUNKS);
}

function removePngChunks(png: Uint8Array, drop: ReadonlySet<string>): Uint8Array {
  if (!startsWith(png, 0, PNG_SIGNATURE)) return png;
  const view = new DataView(png.buffer, png.byteOffset, png.byteLength);
  const keep: { start: number; end: number }[] = [];
  let off = PNG_SIGNATURE.length;
  let cut = false;

  while (off + 8 <= png.length) {
    const len = view.getUint32(off, false);
    const type = fourCC(png, off + 4);
    const end = off + 12 + len;
    if (end <= off || end > png.length) return png; // truncated — leave it alone
    if (drop.has(type)) cut = true;
    else keep.push({ start: off, end });
    if (type === "IEND") break;
    off = end;
  }
  if (!cut) return png;

  const total = PNG_SIGNATURE.length + keep.reduce((n, k) => n + (k.end - k.start), 0);
  const out = new Uint8Array(total);
  out.set(png.subarray(0, PNG_SIGNATURE.length));
  let write = PNG_SIGNATURE.length;
  for (const k of keep) {
    out.set(png.subarray(k.start, k.end), write);
    write += k.end - k.start;
  }
  return out;
}

/* ── Container-agnostic entry points ───────────────────────────────────────── */

/**
 * Write the source's metadata into an encoded image, normalising it first.
 *
 * `orientationApplied` says whether the pixels were already rotated upright. It
 * has to be right: leaving `Orientation: 6` on rotated pixels makes viewers turn
 * the photo a second time, and clearing it on unrotated pixels loses the turn
 * entirely. Callers on a server path should pass true — Sharp's pipeline always
 * rotates — and on the browser path pass whatever the auto-orient control says.
 *
 * Returns the input untouched for a container this module cannot write.
 */
export function applySourceMetadata(
  bytes: Uint8Array,
  mime: string,
  meta: SourceMetadata,
  { orientationApplied }: { orientationApplied: boolean }
): Uint8Array {
  if (!meta.exif && !meta.xmp) return bytes;
  const normalised: SourceMetadata = {
    xmp: meta.xmp,
    exif: meta.exif && normaliseExif(meta.exif, { orientationApplied }),
  };
  if (mime === "image/jpeg") return injectJpegMetadata(bytes, normalised);
  if (mime === "image/png") return injectPngMetadata(bytes, normalised);
  return bytes;
}

/**
 * Remove every metadata block from an encoded image.
 *
 * Not a no-op even when nothing was added: the encoders write their own colour
 * profile — Chrome's toBlob embeds sRGB in both JPEG and PNG — and a user
 * ticking "Strip metadata" expects that gone too.
 */
export function stripOutputMetadata(bytes: Uint8Array, mime: string): Uint8Array {
  if (mime === "image/jpeg") return stripJpegMetadata(bytes);
  if (mime === "image/png") return stripPngMetadata(bytes);
  return bytes;
}

/** Whether this module can write metadata into the given output container. */
export function canCarryMetadata(mime: string): boolean {
  return mime === "image/jpeg" || mime === "image/png";
}
