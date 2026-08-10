/**
 * Lossy PNG compression for oMyImage — the browser equivalent of pngquant.
 *
 * `canvas.toBlob(…, "image/png")` is *lossless*: it re-deflates the same 24/32-bit
 * pixels and hands back a file the same size as the input, or larger. That is why
 * "Compress" appeared to do nothing to a PNG. Real PNG compression is a different
 * operation — reduce the image to a small colour palette and store one **index**
 * per pixel instead of three or four bytes. A 256-colour indexed PNG of a poster
 * or illustration typically lands at a quarter of the original size.
 *
 * The pipeline:
 *
 *   alpha histogram    → ≤ 8 alpha levels                     (once, ~10 ms)
 *   RGB histogram      → 5-bit bins, per alpha level          (~30 ms at 4 MP)
 *   median cut         → `colors` palette entries             (~40 ms)
 *   inverse LUT        → 5-bit bin → palette index, in Lab    (~35 ms)
 *   Floyd–Steinberg    → one index per pixel                  (~250 ms at 4 MP)
 *   PNG writer         → IHDR/PLTE/tRNS/IDAT/IEND             (~150 ms, off-thread)
 *
 * Everything here is deliberately dependency-free. A browser bundle counts as
 * distribution, and every off-the-shelf pngquant is libimagequant underneath,
 * which is GPL-3 — see LICENSE-AUDIT.md. Deflate comes from the platform's own
 * `CompressionStream`, which emits exactly the zlib stream IDAT wants and runs
 * off the main thread.
 *
 * The quantizer is structurally parallel to `lib/image/palette.ts` and shares its
 * Lab conversion, but the objective is the opposite one: `palette.ts` ranks
 * colours for *human-facing swatches* and deliberately discards near-duplicates,
 * while reproduction needs precisely those near-duplicates to render a gradient.
 * The two are kept separate on purpose.
 *
 * TODO: everything below `compressPngCanvas` is DOM-free and can move into a Web
 * Worker without a rewrite. Worth doing once batch sizes grow.
 */

import { rgbToLab } from "./palette";
import { canvasToBlob } from "./raster";

// ── Tuning ────────────────────────────────────────────────────────────────────

/** Histogram/LUT resolution. 5 bits/channel = 32768 bins. */
const BITS = 5;
const SHIFT = 8 - BITS;
const BIN_COUNT = 1 << (BITS * 3);

/**
 * Distinct alpha values kept. Logos and icons use 2 and never notice this cap;
 * it exists for soft shadows and feathered cut-outs, where 8 levels leave a
 * visible step across the ramp and 16 do not. Costs 16 palette slots in the
 * worst case, and the per-level inverse LUT scales with it.
 */
const MAX_ALPHA_LEVELS = 16;

/** A box whose single largest entry owns this much of it IS that colour. */
const DOMINANT = 0.6;

/**
 * Floyd–Steinberg strength, measured rather than guessed.
 *
 * Sampling one row across a poster's pastel background blob, where the source
 * has 42 distinct colour runs, quantized to 64 colours:
 *
 *   strength 0     117 KB    7 runs, up to 267 px each  ← visibly banded
 *   strength 0.25  154 KB   99 runs                     ← matches the source
 *   strength 0.85  554 KB  357 runs                     ← over-dithered, 4.7× the size
 *
 * Full-strength diffusion doesn't just cost size: it also *worsens* RMSE here,
 * because the inverse LUT resolves the dithered value at 5-bit precision and
 * large injected errors amplify that rounding. 0.25 sits at the RMSE minimum on
 * both flat-vector and noisy source images while still breaking up every contour.
 */
const DITHER = 0.25;

/** Refuse absurd inputs rather than allocating gigabytes; caller falls back. */
const MAX_PIXELS = 40_000_000;

// ── Quality mapping ───────────────────────────────────────────────────────────

/**
 * Slider value (0–1) → palette size. `null` means "stay lossless, don't quantize".
 *
 * The lossless band starts at 0.95 rather than exactly 1.0 because the slider
 * steps by 0.01 and 97% shouldn't pay for a dither that gains nothing. That
 * discontinuity can make the file jump *larger* at the boundary, which
 * `compressPngCanvas` catches and the tool's keep-original guard catches again.
 */
export function pngColorsForQuality(quality: number): number | null {
  if (quality >= 0.95) return null;
  // Piecewise-linear over tuned anchors, so it reads and re-tunes as a table.
  const anchors: [number, number][] = [
    [0.3, 32],
    [0.4, 48],
    [0.5, 64],
    [0.6, 96],
    [0.7, 128],
    [0.8, 160],
    [0.9, 224],
    [0.94, 256],
  ];
  if (quality <= anchors[0][0]) return anchors[0][1];
  for (let i = 1; i < anchors.length; i++) {
    const [q1, c1] = anchors[i];
    if (quality <= q1) {
      const [q0, c0] = anchors[i - 1];
      return Math.round(c0 + ((quality - q0) / (q1 - q0)) * (c1 - c0));
    }
  }
  return anchors[anchors.length - 1][1];
}

// ── Deflate ───────────────────────────────────────────────────────────────────

/** True when this browser can produce the zlib stream an IDAT chunk needs. */
function canDeflate(): boolean {
  return typeof CompressionStream === "function";
}

/**
 * Deflate to an RFC-1950 zlib stream — the exact framing IDAT expects.
 *
 * `CompressionStream("deflate")` is zlib-wrapped (`"deflate-raw"` is the bare
 * one). It runs off the main thread and costs no bundle bytes.
 */
async function deflateZlib(raw: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([raw as BlobPart])
    .stream()
    .pipeThrough(new CompressionStream("deflate"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

// ── PNG container ─────────────────────────────────────────────────────────────

let crcTable: Uint32Array | null = null;

function getCrcTable(): Uint32Array {
  if (crcTable) return crcTable;
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  crcTable = t;
  return t;
}

/**
 * CRC32 over `bytes[start, end)` — the chunk *type plus data*, never the length
 * field.
 *
 * The `>>> 0` is load-bearing. JS bitwise operators yield a signed int32, and a
 * negative CRC written through `DataView.setUint32` silently stores the wrong
 * value: Chrome renders the file anyway, but `pngcheck` and Pillow reject it.
 */
function crc32(bytes: Uint8Array, start: number, end: number): number {
  const t = getCrcTable();
  let c = 0xffffffff;
  for (let i = start; i < end; i++) c = t[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** Write one PNG chunk (length + type + data + CRC); returns the new offset. */
function writeChunk(
  out: Uint8Array,
  view: DataView,
  off: number,
  type: string,
  data: Uint8Array
): number {
  view.setUint32(off, data.length, false);
  off += 4;
  const typeStart = off;
  for (let i = 0; i < 4; i++) out[off++] = type.charCodeAt(i);
  out.set(data, off);
  off += data.length;
  view.setUint32(off, crc32(out, typeStart, off), false);
  return off + 4;
}

/** Palette bit depth. A 16-colour logo packs at 4 bpp — half the IDAT input. */
function bitDepthFor(n: number): number {
  return n <= 2 ? 1 : n <= 4 ? 2 : n <= 16 ? 4 : 8;
}

/**
 * Pack indices into PNG scanlines, each prefixed with its filter byte.
 *
 * Filter 0 (None) on every row, deliberately. PNG filters do arithmetic on
 * bytes, and for colour type 3 those bytes are palette *indices* — index 200
 * next to index 3 is not a meaningful delta. pngquant and optipng settle on
 * filter 0 for palette images essentially always; adaptive filtering here costs
 * several times the encode budget and produces a *larger* IDAT.
 */
function packScanlines(
  indices: Uint8Array,
  width: number,
  height: number,
  bitDepth: number
): Uint8Array {
  const stride = Math.ceil((width * bitDepth) / 8);
  const raw = new Uint8Array(height * (1 + stride));
  let p = 0;
  for (let y = 0; y < height; y++) {
    raw[p++] = 0; // filter: None
    const row = y * width;
    if (bitDepth === 8) {
      raw.set(indices.subarray(row, row + width), p);
      p += stride;
      continue;
    }
    // Sub-byte depths pack MSB-first, each row zero-padded to a byte boundary.
    const perByte = 8 / bitDepth;
    for (let x = 0; x < width; ) {
      let byte = 0;
      for (let k = 0; k < perByte; k++, x++) {
        byte = (byte << bitDepth) | (x < width ? indices[row + x] : 0);
      }
      raw[p++] = byte;
    }
  }
  return raw;
}

/** Assemble a colour-type-3 PNG from a palette, packed scanlines and an IDAT. */
function writeIndexedPng(
  width: number,
  height: number,
  palette: Uint8Array,
  paletteCount: number,
  trns: Uint8Array | null,
  bitDepth: number,
  idat: Uint8Array
): Uint8Array {
  const plteLen = paletteCount * 3;
  const trnsLen = trns ? trns.length : 0;
  const total =
    8 + // signature
    (12 + 13) + // IHDR
    (12 + plteLen) + // PLTE
    (trns ? 12 + trnsLen : 0) + // tRNS
    (12 + idat.length) + // IDAT
    12; // IEND

  const out = new Uint8Array(total);
  const view = new DataView(out.buffer);
  out.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], 0);
  let off = 8;

  const ihdr = new Uint8Array(13);
  const ihdrView = new DataView(ihdr.buffer);
  ihdrView.setUint32(0, width, false);
  ihdrView.setUint32(4, height, false);
  ihdr[8] = bitDepth;
  ihdr[9] = 3; // colour type: indexed
  ihdr[10] = 0; // compression: deflate
  ihdr[11] = 0; // filter method: adaptive (per-row byte, always 0 here)
  ihdr[12] = 0; // interlace: none
  off = writeChunk(out, view, off, "IHDR", ihdr);

  off = writeChunk(out, view, off, "PLTE", palette.subarray(0, plteLen));
  if (trns) off = writeChunk(out, view, off, "tRNS", trns);
  off = writeChunk(out, view, off, "IDAT", idat);
  // No pHYs/gAMA/sRGB/tEXt — the canvas already normalised everything to sRGB
  // and anything else is pure bloat in a file we are shrinking on purpose.
  writeChunk(out, view, off, "IEND", new Uint8Array(0));
  return out;
}

// ── Alpha levels ──────────────────────────────────────────────────────────────

interface AlphaPlan {
  /** Representative alpha per level, ascending. */
  levels: Uint8Array;
  /** alpha value → level index. */
  levelOf: Uint8Array;
  /** Pixel count per level. */
  pixels: Uint32Array;
  opaque: boolean;
}

/**
 * Median cut over a 1-D histogram slice, returning `k` representative values.
 *
 * Boxes are chosen by **population-weighted variance**, the same squared-error
 * objective the RGB quantizer uses. Picking by `population × extent` instead —
 * the obvious alternative — fails badly on alpha: a radial shadow has far more
 * area at low opacity than high, so every level bunches at the transparent end
 * and leaves a hole across the upper mid-range.
 */
function medianCut1D(hist: Uint32Array, lo: number, hi: number, k: number): number[] {
  const measure = (a: number, b: number) => {
    let pop = 0, sum = 0, sq = 0;
    for (let v = a; v <= b; v++) {
      pop += hist[v];
      sum += v * hist[v];
      sq += v * v * hist[v];
    }
    const mean = pop > 0 ? sum / pop : 0;
    const variance = pop > 0 ? Math.max(0, sq / pop - mean * mean) : 0;
    return { pop, mean, err: pop * variance };
  };

  let boxes = [{ lo, hi, ...measure(lo, hi) }];
  while (boxes.length < k) {
    let best = -1;
    let bestErr = 0;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].hi <= boxes[i].lo || boxes[i].err <= bestErr) continue;
      bestErr = boxes[i].err;
      best = i;
    }
    if (best === -1) break;
    const b = boxes[best];
    let cum = 0;
    let cut = b.lo;
    for (let v = b.lo; v <= b.hi; v++) {
      cum += hist[v];
      if (cum >= b.pop / 2) {
        cut = v;
        break;
      }
    }
    if (cut >= b.hi) cut = b.hi - 1;
    boxes.splice(best, 1, { lo: b.lo, hi: cut, ...measure(b.lo, cut) }, { lo: cut + 1, hi: b.hi, ...measure(cut + 1, b.hi) });
  }

  boxes = boxes.filter((b) => b.pop > 0);
  return boxes.map((b) => {
    let bestA = b.lo, bestC = -1;
    for (let v = b.lo; v <= b.hi; v++) if (hist[v] > bestC) { bestC = hist[v]; bestA = v; }
    // A dominant value IS the level, so a spike sharing a box with a smear of
    // neighbours reproduces exactly rather than drifting toward the smear.
    return bestC >= DOMINANT * b.pop ? bestA : Math.round(b.mean);
  });
}

/**
 * Reduce the alpha channel to at most `MAX_ALPHA_LEVELS` distinct values.
 *
 * Fully transparent and fully opaque get reserved levels of their own whenever
 * they occur, rather than being folded into a box and pulled off-value: those
 * two are the only alpha values a viewer can identify absolutely, and a cut-out
 * whose background comes back at 4% opacity, or a logo at 96%, reads as a bug.
 *
 * Levels come out ascending, which is what lets the palette be laid out in
 * ascending-alpha order later — so `tRNS` only has to be as long as the count of
 * non-opaque entries instead of the whole palette.
 */
function planAlpha(hist: Uint32Array, totalPixels: number): AlphaPlan {
  const present: number[] = [];
  for (let a = 0; a < 256; a++) if (hist[a] > 0) present.push(a);

  if (present.length === 1 && present[0] === 255) {
    return {
      levels: new Uint8Array([255]),
      levelOf: new Uint8Array(256),
      pixels: new Uint32Array([totalPixels]),
      opaque: true,
    };
  }

  let levels: number[];
  if (present.length <= MAX_ALPHA_LEVELS) {
    levels = present;
  } else {
    const hasClear = hist[0] > 0;
    const hasSolid = hist[255] > 0;
    const reserved = (hasClear ? 1 : 0) + (hasSolid ? 1 : 0);
    const lo = hasClear ? 1 : present[0];
    const hi = hasSolid ? 254 : present[present.length - 1];
    let interior: number[] = [];
    if (lo <= hi && MAX_ALPHA_LEVELS > reserved) {
      let pop = 0;
      for (let a = lo; a <= hi; a++) pop += hist[a];
      if (pop > 0) interior = medianCut1D(hist, lo, hi, MAX_ALPHA_LEVELS - reserved);
    }
    levels = [...(hasClear ? [0] : []), ...interior, ...(hasSolid ? [255] : [])];
  }

  const levelArr = Uint8Array.from(levels);
  const levelOf = new Uint8Array(256);
  for (let a = 0; a < 256; a++) {
    let best = 0;
    let bestD = Infinity;
    for (let l = 0; l < levelArr.length; l++) {
      const d = Math.abs(a - levelArr[l]);
      if (d < bestD) {
        bestD = d;
        best = l;
      }
    }
    levelOf[a] = best;
  }

  const pixels = new Uint32Array(levelArr.length);
  for (let a = 0; a < 256; a++) if (hist[a] > 0) pixels[levelOf[a]] += hist[a];

  return { levels: levelArr, levelOf, pixels, opaque: false };
}

// ── Median cut over a 5-bit RGB histogram ─────────────────────────────────────

interface RgbStats {
  n: number;
  r: Float32Array;
  g: Float32Array;
  b: Float32Array;
  count: Uint32Array;
}

interface Box {
  lo: number;
  hi: number;
  pop: number;
  vr: number;
  vg: number;
  vb: number;
  /** Selection key: population-weighted squared error contributed by this box. */
  err: number;
}

function makeBox(s: RgbStats, order: Int32Array, lo: number, hi: number): Box {
  let pop = 0;
  let sr = 0, sg = 0, sb = 0;
  let qr = 0, qg = 0, qb = 0;
  for (let i = lo; i < hi; i++) {
    const j = order[i];
    const c = s.count[j];
    const r = s.r[j], g = s.g[j], b = s.b[j];
    pop += c;
    sr += r * c; sg += g * c; sb += b * c;
    qr += r * r * c; qg += g * g * c; qb += b * b * c;
  }
  const mr = sr / pop, mg = sg / pop, mb = sb / pop;
  const vr = Math.max(0, qr / pop - mr * mr);
  const vg = Math.max(0, qg / pop - mg * mg);
  const vb = Math.max(0, qb / pop - mb * mb);
  return { lo, hi, pop, vr, vg, vb, err: pop * (vr + vg + vb) };
}

/**
 * Split a box across its highest-variance axis at the population-weighted median.
 *
 * Variance rather than raw extent: extent is decided by a single outlying bin, so
 * on photographic input it repeatedly picks an axis that holds almost no pixels.
 * The population-weighted median (not the index median) matters for the same
 * reason it does in `palette.ts` — on a histogram, hundreds of near-empty bins
 * would otherwise outvote the one bin holding 40% of the image.
 */
function splitBox(
  s: RgbStats,
  order: Int32Array,
  tmp: Int32Array,
  scratch: { pop: Uint32Array; cnt: Uint32Array; at: Int32Array },
  box: Box
): [Box, Box] | null {
  const { lo, hi } = box;
  const axes: [number, number][] = [
    [0, box.vr],
    [1, box.vg],
    [2, box.vb],
  ];
  axes.sort((a, z) => z[1] - a[1]);

  for (const [axis] of axes) {
    const ch = axis === 0 ? s.r : axis === 1 ? s.g : s.b;
    let vmin = 255, vmax = 0;
    for (let i = lo; i < hi; i++) {
      const v = ch[order[i]] | 0;
      if (v < vmin) vmin = v;
      if (v > vmax) vmax = v;
    }
    if (vmax === vmin) continue; // every member shares this coordinate

    const { pop: bucketPop, cnt: bucketCnt, at: bucketAt } = scratch;
    bucketPop.fill(0, vmin, vmax + 1);
    bucketCnt.fill(0, vmin, vmax + 1);
    for (let i = lo; i < hi; i++) {
      const j = order[i];
      const v = ch[j] | 0;
      bucketPop[v] += s.count[j];
      bucketCnt[v]++;
    }

    const half = box.pop / 2;
    let cum = 0;
    let cut = vmin;
    for (let v = vmin; v <= vmax; v++) {
      cum += bucketPop[v];
      if (cum >= half) {
        cut = v;
        break;
      }
    }
    if (cut >= vmax) cut = vmax - 1;

    // Stable counting-sort partition of order[lo, hi) — no per-split allocation.
    let acc = lo;
    for (let v = vmin; v <= vmax; v++) {
      bucketAt[v] = acc;
      acc += bucketCnt[v];
    }
    for (let i = lo; i < hi; i++) {
      const j = order[i];
      tmp[bucketAt[ch[j] | 0]++] = j;
    }
    for (let i = lo; i < hi; i++) order[i] = tmp[i];

    let mid = lo;
    for (let v = vmin; v <= cut; v++) mid += bucketCnt[v];
    if (mid <= lo || mid >= hi) continue;

    return [makeBox(s, order, lo, mid), makeBox(s, order, mid, hi)];
  }
  return null;
}

/** Representative colour of a box, written into `out` at `at * 3`. */
function boxColor(s: RgbStats, order: Int32Array, box: Box, out: Uint8Array, at: number) {
  let pop = 0, wr = 0, wg = 0, wb = 0;
  let bestC = -1, bestJ = -1;
  for (let i = box.lo; i < box.hi; i++) {
    const j = order[i];
    const c = s.count[j];
    pop += c;
    wr += s.r[j] * c;
    wg += s.g[j] * c;
    wb += s.b[j] * c;
    if (c > bestC) {
      bestC = c;
      bestJ = j;
    }
  }
  // A box that is one flat colour plus a smear of neighbours reproduces that
  // flat colour exactly. Illustration and UI art live or die on this.
  const exact = bestJ >= 0 && bestC >= DOMINANT * pop;
  const r = exact ? s.r[bestJ] : wr / pop;
  const g = exact ? s.g[bestJ] : wg / pop;
  const b = exact ? s.b[bestJ] : wb / pop;
  out[at * 3] = Math.max(0, Math.min(255, Math.round(r)));
  out[at * 3 + 1] = Math.max(0, Math.min(255, Math.round(g)));
  out[at * 3 + 2] = Math.max(0, Math.min(255, Math.round(b)));
}

/** Quantize one alpha level's colours into `out` at `at`; returns entries written. */
function medianCut(
  s: RgbStats,
  k: number,
  out: Uint8Array,
  at: number,
  scratch: { pop: Uint32Array; cnt: Uint32Array; at: Int32Array }
): number {
  const order = new Int32Array(s.n);
  for (let i = 0; i < s.n; i++) order[i] = i;
  const tmp = new Int32Array(s.n);
  const boxes: Box[] = [makeBox(s, order, 0, s.n)];

  while (boxes.length < k) {
    let best = -1;
    let bestKey = 0;
    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i];
      if (b.hi - b.lo < 2 || b.err <= 0) continue;
      // Strict >: ties go to the lowest index. Do not turn this into a sort.
      if (b.err > bestKey) {
        bestKey = b.err;
        best = i;
      }
    }
    if (best === -1) break; // fewer distinct colours than k
    const pair = splitBox(s, order, tmp, scratch, boxes[best]);
    if (!pair) {
      // Unsplittable: retire it so the loop can't spin on the same box.
      boxes[best].err = 0;
      continue;
    }
    boxes.splice(best, 1, pair[0], pair[1]);
  }

  for (let i = 0; i < boxes.length; i++) boxColor(s, order, boxes[i], out, at + i);
  return boxes.length;
}

// ── Inverse colormap ──────────────────────────────────────────────────────────

let binLab: Float32Array | null = null;

/**
 * CIE Lab of every 5-bit bin centre, built once per session.
 *
 * The centres never change, so this is pure shared state — 384 KB that turns the
 * per-image LUT fill into three subtractions per candidate.
 */
function getBinLab(): Float32Array {
  if (binLab) return binLab;
  const out = new Float32Array(BIN_COUNT * 3);
  for (let bin = 0; bin < BIN_COUNT; bin++) {
    const r = (((bin >> (BITS * 2)) & 31) << SHIFT) | 4;
    const g = (((bin >> BITS) & 31) << SHIFT) | 4;
    const b = ((bin & 31) << SHIFT) | 4;
    const lab = rgbToLab(r, g, b);
    out[bin * 3] = lab[0];
    out[bin * 3 + 1] = lab[1];
    out[bin * 3 + 2] = lab[2];
  }
  binLab = out;
  return out;
}

/**
 * Map every 5-bit RGB bin to its nearest palette entry, per alpha level.
 *
 * A naive per-pixel nearest-colour search is 4.2 M pixels × 256 entries ≈ 1.1
 * billion distance evaluations — several seconds, unshippable. Precomputing over
 * the 32768 bin *centres* instead costs 32768 × 256 ≈ 8.4 M and turns the
 * per-pixel cost into a single array index.
 *
 * The 5-bit key means colours inside one 8×8×8 cube share an index. That is safe
 * here precisely *because* the mapping is dithered: Floyd–Steinberg measures its
 * error against the palette entry's real RGB, not the bin centre, so error
 * accumulation stays exact and an occasional second-best pick is corrected by the
 * next pixel. Undithered it would be visible; dithered it is not.
 */
function buildInverseLut(
  palette: Uint8Array,
  ranges: { start: number; count: number }[]
): Int16Array {
  const lut = new Int16Array(BIN_COUNT * ranges.length);
  const centres = getBinLab();

  for (let l = 0; l < ranges.length; l++) {
    const { start, count } = ranges[l];
    const base = l * BIN_COUNT;
    if (count <= 1) {
      lut.fill(start, base, base + BIN_COUNT);
      continue;
    }
    const pl = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const lab = rgbToLab(palette[(start + i) * 3], palette[(start + i) * 3 + 1], palette[(start + i) * 3 + 2]);
      pl[i * 3] = lab[0];
      pl[i * 3 + 1] = lab[1];
      pl[i * 3 + 2] = lab[2];
    }
    for (let bin = 0; bin < BIN_COUNT; bin++) {
      const cl = centres[bin * 3], ca = centres[bin * 3 + 1], cb = centres[bin * 3 + 2];
      let best = 0;
      let bestD = Infinity;
      for (let i = 0; i < count; i++) {
        const dl = cl - pl[i * 3];
        const da = ca - pl[i * 3 + 1];
        const db = cb - pl[i * 3 + 2];
        const d = dl * dl + da * da + db * db; // squared — no sqrt to compare
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      }
      lut[base + bin] = start + best;
    }
  }
  return lut;
}

// ── Floyd–Steinberg ───────────────────────────────────────────────────────────

const clamp255 = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : v);

/**
 * Map every pixel to a palette index, diffusing the error as it goes.
 *
 * Serpentine scan (alternating direction per row) rather than raster: it breaks
 * up the diagonal worming artifact that plain left-to-right Floyd–Steinberg
 * leaves across smooth gradients, which is exactly the content this exists for.
 *
 * The error rows are `width + 2` wide with a one-cell margin at each end, so
 * diffusion into a neighbour that is off the edge writes into padding instead of
 * needing a bounds check in the innermost loop.
 */
function ditherToIndices(
  rgba: Uint8ClampedArray,
  width: number,
  height: number,
  lut: Int16Array,
  palette: Uint8Array,
  levels: Uint8Array,
  levelOf: Uint8Array,
  hasAlpha: boolean,
  strength: number
): Uint8Array {
  const indices = new Uint8Array(width * height);
  const pad = width + 2;
  let cr = new Float32Array(pad), cg = new Float32Array(pad), cb = new Float32Array(pad);
  let ca = new Float32Array(pad);
  let nr = new Float32Array(pad), ng = new Float32Array(pad), nb = new Float32Array(pad);
  let na = new Float32Array(pad);

  for (let y = 0; y < height; y++) {
    const ltr = (y & 1) === 0;
    const dir = ltr ? 1 : -1;
    const xStart = ltr ? 0 : width - 1;
    const xEnd = ltr ? width : -1;
    const rowBase = y * width;

    for (let x = xStart; x !== xEnd; x += dir) {
      const i = (rowBase + x) * 4;
      const e = x + 1; // error-array index

      const r = clamp255(rgba[i] + cr[e]);
      const g = clamp255(rgba[i + 1] + cg[e]);
      const b = clamp255(rgba[i + 2] + cb[e]);
      const a = hasAlpha ? clamp255(rgba[i + 3] + ca[e]) : 255;

      const level = hasAlpha ? levelOf[a | 0] : 0;
      const bin =
        (((r | 0) >> SHIFT) << (BITS * 2)) | (((g | 0) >> SHIFT) << BITS) | ((b | 0) >> SHIFT);
      const idx = lut[level * BIN_COUNT + bin];
      indices[rowBase + x] = idx;

      if (strength > 0) {
        const er = (r - palette[idx * 3]) * strength;
        const eg = (g - palette[idx * 3 + 1]) * strength;
        const eb = (b - palette[idx * 3 + 2]) * strength;
        const ea = hasAlpha ? (a - levels[level]) * strength : 0;

        const eNext = e + dir; // (x+dir, y)
        const nPrev = e - dir; // (x-dir, y+1)
        cr[eNext] += er * 0.4375; cg[eNext] += eg * 0.4375; cb[eNext] += eb * 0.4375;
        nr[nPrev] += er * 0.1875; ng[nPrev] += eg * 0.1875; nb[nPrev] += eb * 0.1875;
        nr[e] += er * 0.3125; ng[e] += eg * 0.3125; nb[e] += eb * 0.3125;
        nr[eNext] += er * 0.0625; ng[eNext] += eg * 0.0625; nb[eNext] += eb * 0.0625;
        if (hasAlpha) {
          ca[eNext] += ea * 0.4375;
          na[nPrev] += ea * 0.1875;
          na[e] += ea * 0.3125;
          na[eNext] += ea * 0.0625;
        }
      }
    }

    // Swap rows and clear the one we just finished, which becomes the next
    // "next row" — no allocation per row.
    const tr = cr, tg = cg, tb = cb, ta = ca;
    cr = nr; cg = ng; cb = nb; ca = na;
    nr = tr; ng = tg; nb = tb; na = ta;
    nr.fill(0); ng.fill(0); nb.fill(0);
    if (hasAlpha) na.fill(0);
  }
  return indices;
}

// ── Exact-palette fast path ───────────────────────────────────────────────────

/**
 * Distinct RGBA colours, or null once the count exceeds `limit`.
 *
 * Bails on the first pixel that pushes it over budget, so on a photograph this
 * costs a few hundred iterations rather than a full pass. When it *does* return
 * a map, the palette reproduces the image exactly — screenshots, logos, flat
 * vector art and most UI exports land here, and get the best possible result for
 * free with no dithering at all.
 */
function exactColors(rgba: Uint8ClampedArray, limit: number): Map<number, number> | null {
  const map = new Map<number, number>();
  for (let i = 0; i < rgba.length; i += 4) {
    const key = ((rgba[i] << 24) | (rgba[i + 1] << 16) | (rgba[i + 2] << 8) | rgba[i + 3]) >>> 0;
    if (!map.has(key)) {
      if (map.size >= limit) return null;
      map.set(key, map.size);
    }
  }
  return map;
}

// ── Public encoder ────────────────────────────────────────────────────────────

export interface IndexedPngOptions {
  /** Maximum palette entries, 2–256. */
  colors: number;
  /** Floyd–Steinberg strength, 0 disables. Defaults to 0.85. */
  dither?: number;
}

export interface IndexedPngResult {
  bytes: Uint8Array;
  /** Palette entries actually written. */
  colors: number;
  /** 1, 2, 4 or 8. */
  bitDepth: number;
  /** True when the source had ≤ `colors` distinct RGBA values — nothing was lost. */
  lossless: boolean;
}

/**
 * Encode RGBA pixels as an indexed (colour type 3) PNG.
 *
 * Returns `null` rather than throwing when the input is unusable or the platform
 * lacks `CompressionStream` — callers fall back to the browser's lossless PNG.
 */
export async function encodeIndexedPng(
  rgba: Uint8ClampedArray,
  width: number,
  height: number,
  opts: IndexedPngOptions
): Promise<IndexedPngResult | null> {
  const pixels = width * height;
  if (pixels <= 0 || pixels > MAX_PIXELS || rgba.length < pixels * 4) return null;
  if (!canDeflate()) return null;

  const maxColors = Math.max(2, Math.min(256, Math.round(opts.colors)));

  const palette = new Uint8Array(256 * 3);
  const paletteAlpha = new Uint8Array(256);
  let paletteCount = 0;
  let indices: Uint8Array;
  let lossless = false;

  const exact = exactColors(rgba, maxColors);
  if (exact) {
    // The palette reproduces the image byte for byte; dithering would only add
    // noise and inflate the IDAT.
    for (const [key, idx] of exact) {
      palette[idx * 3] = (key >>> 24) & 255;
      palette[idx * 3 + 1] = (key >>> 16) & 255;
      palette[idx * 3 + 2] = (key >>> 8) & 255;
      paletteAlpha[idx] = key & 255;
    }
    paletteCount = exact.size;
    indices = new Uint8Array(pixels);
    for (let p = 0, i = 0; p < pixels; p++, i += 4) {
      const key = ((rgba[i] << 24) | (rgba[i + 1] << 16) | (rgba[i + 2] << 8) | rgba[i + 3]) >>> 0;
      indices[p] = exact.get(key)!;
    }
    lossless = true;

    // Ascending alpha keeps tRNS short (see writeIndexedPng's caller below).
    const orderIdx = Array.from({ length: paletteCount }, (_, i) => i)
      .sort((a, b) => paletteAlpha[a] - paletteAlpha[b]);
    const remap = new Uint8Array(paletteCount);
    const np = new Uint8Array(256 * 3);
    const na = new Uint8Array(256);
    for (let newI = 0; newI < paletteCount; newI++) {
      const oldI = orderIdx[newI];
      remap[oldI] = newI;
      np[newI * 3] = palette[oldI * 3];
      np[newI * 3 + 1] = palette[oldI * 3 + 1];
      np[newI * 3 + 2] = palette[oldI * 3 + 2];
      na[newI] = paletteAlpha[oldI];
    }
    palette.set(np);
    paletteAlpha.set(na);
    for (let p = 0; p < pixels; p++) indices[p] = remap[indices[p]];
  } else {
    // ── Alpha plan ──
    const alphaHist = new Uint32Array(256);
    for (let i = 3; i < pixels * 4; i += 4) alphaHist[rgba[i]]++;
    const plan = planAlpha(alphaHist, pixels);
    const nLevels = plan.levels.length;

    // ── RGB histogram, full resolution, one flat pass over every pixel ──
    const bins = nLevels * BIN_COUNT;
    const hCount = new Uint32Array(bins);
    const hR = new Uint32Array(bins);
    const hG = new Uint32Array(bins);
    const hB = new Uint32Array(bins);
    for (let p = 0, i = 0; p < pixels; p++, i += 4) {
      const level = plan.opaque ? 0 : plan.levelOf[rgba[i + 3]];
      // Fully transparent pixels have no visible colour — they all collapse onto
      // one palette entry, so their RGB never enters the histogram.
      if (plan.levels[level] === 0) continue;
      const r = rgba[i], g = rgba[i + 1], b = rgba[i + 2];
      const k =
        level * BIN_COUNT + ((r >> SHIFT) << (BITS * 2)) + ((g >> SHIFT) << BITS) + (b >> SHIFT);
      hCount[k]++;
      hR[k] += r;
      hG[k] += g;
      hB[k] += b;
    }

    // ── Split the colour budget across alpha levels by population ──
    const budget = new Int32Array(nLevels);
    let occupied = 0;
    const occupiedPer = new Int32Array(nLevels);
    for (let l = 0; l < nLevels; l++) {
      let n = 0;
      const base = l * BIN_COUNT;
      for (let bin = 0; bin < BIN_COUNT; bin++) if (hCount[base + bin] > 0) n++;
      occupiedPer[l] = n;
      occupied += n;
    }
    let assigned = 0;
    for (let l = 0; l < nLevels; l++) {
      const want =
        plan.levels[l] === 0 || occupiedPer[l] === 0
          ? 1 // one entry is all a fully-transparent (or empty) level can use
          : Math.max(1, Math.round((maxColors * plan.pixels[l]) / pixels));
      budget[l] = Math.min(want, Math.max(1, occupiedPer[l]));
      assigned += budget[l];
    }
    // Trim from the largest until we fit; every level keeps at least one entry.
    while (assigned > maxColors) {
      let big = 0;
      for (let l = 1; l < nLevels; l++) if (budget[l] > budget[big]) big = l;
      if (budget[big] <= 1) break;
      budget[big]--;
      assigned--;
    }

    // ── Median cut, per level ──
    const scratch = {
      pop: new Uint32Array(256),
      cnt: new Uint32Array(256),
      at: new Int32Array(256),
    };
    const ranges: { start: number; count: number }[] = [];
    for (let l = 0; l < nLevels; l++) {
      const start = paletteCount;
      const base = l * BIN_COUNT;
      const n = occupiedPer[l];
      let written: number;
      if (n === 0) {
        // Level with no colour of its own (fully transparent, or empty).
        palette[start * 3] = palette[start * 3 + 1] = palette[start * 3 + 2] = 0;
        written = 1;
      } else {
        const s: RgbStats = {
          n,
          r: new Float32Array(n),
          g: new Float32Array(n),
          b: new Float32Array(n),
          count: new Uint32Array(n),
        };
        let j = 0;
        for (let bin = 0; bin < BIN_COUNT; bin++) {
          const c = hCount[base + bin];
          if (c === 0) continue;
          // The true mean of the real 8-bit pixels in this bin, never the bin
          // centre — so a flat region reproduces its own colour exactly.
          s.r[j] = hR[base + bin] / c;
          s.g[j] = hG[base + bin] / c;
          s.b[j] = hB[base + bin] / c;
          s.count[j] = c;
          j++;
        }
        written = medianCut(s, budget[l], palette, start, scratch);
      }
      for (let i = 0; i < written; i++) paletteAlpha[start + i] = plan.levels[l];
      ranges.push({ start, count: written });
      paletteCount += written;
    }

    const lut = buildInverseLut(palette, ranges);
    indices = ditherToIndices(
      rgba,
      width,
      height,
      lut,
      palette,
      plan.levels,
      plan.levelOf,
      !plan.opaque,
      opts.dither ?? DITHER
    );
  }

  // tRNS covers the leading run of non-opaque entries; the palette is laid out
  // in ascending-alpha order precisely so this stays short (or absent).
  let trnsLen = 0;
  while (trnsLen < paletteCount && paletteAlpha[trnsLen] < 255) trnsLen++;
  const trns = trnsLen > 0 ? paletteAlpha.subarray(0, trnsLen) : null;

  const bitDepth = bitDepthFor(paletteCount);
  const raw = packScanlines(indices, width, height, bitDepth);
  const idat = await deflateZlib(raw);
  const bytes = writeIndexedPng(width, height, palette, paletteCount, trns, bitDepth, idat);
  return { bytes, colors: paletteCount, bitDepth, lossless };
}

export interface PngCompressResult {
  blob: Blob;
  strategy: "indexed" | "lossless";
  /** Palette size, when the indexed path won. */
  colors?: number;
}

/**
 * Encode a canvas as PNG the smallest way available.
 *
 * This is the whole safety net in one place: the browser's own lossless PNG is
 * always computed and acts as the floor, so a quantized result is only used when
 * it actually wins, and any failure in the new encoder degrades to today's
 * behaviour instead of surfacing an error. The other half of the net — never
 * returning something bigger than the user's *original file* — belongs to the
 * caller, which is the only place that still has the `File`.
 */
export async function compressPngCanvas(
  canvas: HTMLCanvasElement,
  quality: number
): Promise<PngCompressResult> {
  const lossless = await canvasToBlob(canvas, "image/png");
  const colors = pngColorsForQuality(quality);
  if (colors === null) return { blob: lossless, strategy: "lossless" };

  let indexed: IndexedPngResult | null = null;
  try {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (ctx) {
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      indexed = await encodeIndexedPng(data.data, canvas.width, canvas.height, { colors });
    }
  } catch {
    indexed = null; // a novel encoder must never be able to break the tool
  }
  if (!indexed) return { blob: lossless, strategy: "lossless" };

  const blob = new Blob([indexed.bytes as BlobPart], { type: "image/png" });
  return blob.size < lossless.size
    ? { blob, strategy: "indexed", colors: indexed.colors }
    : { blob: lossless, strategy: "lossless" };
}
