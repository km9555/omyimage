/**
 * Read a JPEG's EXIF orientation tag (0x0112) straight from its bytes.
 *
 * Why this exists: `image-to-pdf` embeds JPEG bytes into the PDF untouched, so
 * nothing ever decodes them and no EXIF rotation gets applied. PDF viewers do
 * not honour EXIF either, so a phone photo whose sensor was sideways would come
 * out rotated in the document. Knowing the tag lets the caller re-encode only
 * the files that actually need correcting and keep the pass-through (lossless)
 * path for everything else.
 *
 * Returns 1 ("no transform") for a missing tag, a non-JPEG, or anything
 * malformed — every caller treats 1 as "nothing to do", so a parse failure
 * degrades to the current behaviour rather than throwing.
 */

/** EXIF orientations 5–8 swap the image's width and height. */
export function orientationSwapsAxes(orientation: number): boolean {
  return orientation >= 5 && orientation <= 8;
}

/**
 * Walk a JPEG's marker segments, calling `visit` for each one.
 *
 * `segStart`/`segEnd` bound the segment's PAYLOAD — the marker and its two
 * size bytes are already skipped. Return `true` from `visit` to stop early.
 *
 * Shared with `jpeg-metadata.ts`, which needs the same walk to find APP1. The
 * walk is deliberately forgiving: anything desynced or truncated ends the loop
 * rather than throwing, so a malformed file degrades to "found nothing".
 */
export function eachJpegSegment(
  bytes: Uint8Array,
  visit: (marker: number, segStart: number, segEnd: number, view: DataView) => boolean | void
): void {
  // SOI
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return;

  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 2;

  while (offset + 4 <= bytes.length) {
    if (view.getUint8(offset) !== 0xff) return; // desynced — give up
    const marker = view.getUint8(offset + 1);
    // SOS / EOI: pixel data starts here, no metadata segment beyond it.
    if (marker === 0xda || marker === 0xd9) return;
    const size = view.getUint16(offset + 2, false);
    if (size < 2) return;
    const segStart = offset + 4;
    const segEnd = segStart + size - 2;
    if (segEnd > bytes.length) return;

    if (visit(marker, segStart, segEnd, view) === true) return;
    offset = segEnd;
  }
}

export function readJpegOrientation(bytes: Uint8Array): number {
  let orientation = 1;
  eachJpegSegment(bytes, (marker, segStart, segEnd, view) => {
    if (marker !== 0xe1 || segEnd - segStart < 6) return;
    // "Exif\0\0"
    const isExif =
      view.getUint32(segStart, false) === 0x45786966 && view.getUint16(segStart + 4, false) === 0;
    if (!isExif) return;
    orientation = readIfd0Orientation(view, segStart + 6, segEnd);
    return true;
  });
  return orientation;
}

/** Parse the TIFF header + IFD0 sitting inside an APP1 segment. */
function readIfd0Orientation(view: DataView, tiff: number, end: number): number {
  if (tiff + 8 > end) return 1;
  const byteOrder = view.getUint16(tiff, false);
  // "II" = little-endian, "MM" = big-endian. Anything else is not TIFF.
  const little = byteOrder === 0x4949;
  if (!little && byteOrder !== 0x4d4d) return 1;
  if (view.getUint16(tiff + 2, little) !== 0x002a) return 1;

  const ifd = tiff + view.getUint32(tiff + 4, little);
  if (ifd + 2 > end) return 1;
  const count = view.getUint16(ifd, little);

  for (let i = 0; i < count; i++) {
    const entry = ifd + 2 + i * 12;
    if (entry + 12 > end) return 1;
    if (view.getUint16(entry, little) !== 0x0112) continue;
    // Orientation is a SHORT, so it lives in the first 2 bytes of the value field.
    const value = view.getUint16(entry + 8, little);
    return value >= 1 && value <= 8 ? value : 1;
  }
  return 1;
}
