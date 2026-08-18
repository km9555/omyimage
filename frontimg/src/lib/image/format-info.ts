/**
 * Structural facts read straight out of the container, independent of EXIF.
 *
 * This is what makes the metadata viewer useful on a stripped file. Messaging
 * apps and social platforms remove the EXIF block wholesale, so an EXIF-only
 * reader shows "nothing found" — yet the JPEG still states its own encoding
 * process, precision, component count and chroma subsampling, because a decoder
 * cannot work without them. PNG is the same story: it never carries EXIF in
 * practice, but IHDR always describes the image exactly.
 */

export interface FormatInfo {
  /** Rows to display, already formatted, in the order they should appear. */
  rows: { label: string; value: string }[];
  /** Pixel dimensions when the container states them. */
  width?: number;
  height?: number;
}

const SOF_PROCESS: Record<number, string> = {
  0xc0: "Baseline DCT, Huffman coding",
  0xc1: "Extended sequential DCT, Huffman coding",
  0xc2: "Progressive DCT, Huffman coding",
  0xc3: "Lossless, Huffman coding",
  0xc5: "Sequential DCT, differential Huffman coding",
  0xc6: "Progressive DCT, differential Huffman coding",
  0xc7: "Lossless, differential Huffman coding",
  0xc9: "Extended sequential DCT, arithmetic coding",
  0xca: "Progressive DCT, arithmetic coding",
  0xcb: "Lossless, arithmetic coding",
  0xcd: "Sequential DCT, differential arithmetic coding",
  0xce: "Progressive DCT, differential arithmetic coding",
  0xcf: "Lossless, differential arithmetic coding",
};

/** Chroma subsampling name from the luma component's sampling factors. */
function subsamplingName(h: number, v: number): string | null {
  const key = `${h}${v}`;
  const map: Record<string, string> = {
    "11": "YCbCr4:4:4",
    "21": "YCbCr4:2:2",
    "22": "YCbCr4:2:0",
    "12": "YCbCr4:4:0",
    "41": "YCbCr4:1:1",
    "42": "YCbCr4:1:0",
  };
  return map[key] ?? null;
}

const JFIF_UNITS: Record<number, string> = { 0: "None", 1: "inches", 2: "cm" };

function readJpeg(bytes: Uint8Array): FormatInfo | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const rows: { label: string; value: string }[] = [];
  let width: number | undefined;
  let height: number | undefined;
  let jfif: { version: string; units: number; x: number; y: number } | null = null;
  let sof: { process: string; precision: number; comps: number; sub: string | null } | null = null;

  let offset = 2;
  while (offset + 4 <= bytes.length) {
    if (view.getUint8(offset) !== 0xff) break;
    const marker = view.getUint8(offset + 1);
    if (marker === 0xd9) break;
    if (marker === 0xda) break; // start of scan — headers are all behind us
    const size = view.getUint16(offset + 2, false);
    if (size < 2) break;
    const seg = offset + 4;
    const segEnd = seg + size - 2;
    if (segEnd > bytes.length) break;

    // APP0 / JFIF
    if (marker === 0xe0 && segEnd - seg >= 12) {
      const tag = String.fromCharCode(bytes[seg], bytes[seg + 1], bytes[seg + 2], bytes[seg + 3]);
      if (tag === "JFIF" && bytes[seg + 4] === 0) {
        jfif = {
          version: `${view.getUint8(seg + 5)}.${String(view.getUint8(seg + 6)).padStart(2, "0")}`,
          units: view.getUint8(seg + 7),
          x: view.getUint16(seg + 8, false),
          y: view.getUint16(seg + 10, false),
        };
      }
    }

    // SOFn — the frame header. Not DHT/DAC/RSTn, which share the 0xC. range.
    if (SOF_PROCESS[marker] && segEnd - seg >= 6) {
      const precision = view.getUint8(seg);
      height = view.getUint16(seg + 1, false);
      width = view.getUint16(seg + 3, false);
      const comps = view.getUint8(seg + 5);
      let sub: string | null = null;
      if (comps === 3 && segEnd - seg >= 6 + 3) {
        // Component spec: id(1) sampling(1: high nibble H, low nibble V) qtable(1)
        const s = view.getUint8(seg + 7);
        sub = subsamplingName(s >> 4, s & 15);
        if (sub) sub += ` (${s >> 4} ${s & 15})`;
      }
      sof = { process: SOF_PROCESS[marker], precision, comps, sub };
      break; // everything we want sits before the scan
    }

    offset = segEnd;
  }

  if (jfif) {
    rows.push({ label: "JFIF version", value: jfif.version });
    rows.push({ label: "Resolution unit", value: JFIF_UNITS[jfif.units] ?? String(jfif.units) });
    rows.push({ label: "X resolution", value: String(jfif.x) });
    rows.push({ label: "Y resolution", value: String(jfif.y) });
  }
  if (sof) {
    rows.push({ label: "Encoding process", value: sof.process });
    rows.push({ label: "Bits per sample", value: String(sof.precision) });
    rows.push({ label: "Color components", value: String(sof.comps) });
    if (sof.sub) rows.push({ label: "Chroma subsampling", value: sof.sub });
  }

  return { rows, width, height };
}

const PNG_COLOR: Record<number, string> = {
  0: "Grayscale",
  2: "RGB",
  3: "Palette",
  4: "Grayscale + Alpha",
  6: "RGB + Alpha",
};

function readPng(bytes: Uint8Array): FormatInfo | null {
  const sig = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (bytes.length < 33 || sig.some((b, i) => bytes[i] !== b)) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  // IHDR is always the first chunk: length(4) "IHDR"(4) then 13 bytes of data.
  if (String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15]) !== "IHDR") return null;
  const d = 16;
  const width = view.getUint32(d, false);
  const height = view.getUint32(d + 4, false);
  const depth = view.getUint8(d + 8);
  const colorType = view.getUint8(d + 9);
  const interlace = view.getUint8(d + 12);

  const rows = [
    { label: "Bit depth", value: String(depth) },
    { label: "Color type", value: PNG_COLOR[colorType] ?? String(colorType) },
    { label: "Interlaced", value: interlace ? "Yes (Adam7)" : "No" },
  ];
  return { rows, width, height };
}

function readGif(bytes: Uint8Array): FormatInfo | null {
  if (bytes.length < 13) return null;
  const tag = String.fromCharCode(...bytes.subarray(0, 6));
  if (tag !== "GIF87a" && tag !== "GIF89a") return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const flags = view.getUint8(10);
  return {
    rows: [
      { label: "GIF version", value: tag.slice(3) },
      { label: "Color table size", value: String(2 << (flags & 7)) },
    ],
    width: view.getUint16(6, true),
    height: view.getUint16(8, true),
  };
}

/** Parse whatever the container itself declares. Returns null for unknown formats. */
export function readFormatInfo(bytes: Uint8Array): FormatInfo | null {
  return readJpeg(bytes) ?? readPng(bytes) ?? readGif(bytes);
}
