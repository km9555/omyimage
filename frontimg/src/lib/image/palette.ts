/**
 * Client-side color palette engine for oMyImage.
 *
 * Extracts a dominant, *visually distinct* palette from an ImageBitmap entirely
 * in the browser — no dependencies, no upload, no worker required.
 *
 * The pipeline is split so the expensive half runs once per file and the cheap
 * half runs on every slider tick:
 *
 *   buildColorStats(bmp)   → sample + histogram + Lab     (once per file, ~5-12ms)
 *   rankCandidates(stats)  → quantize to 48 + rank them   (once per file, <2ms)
 *   takePalette(s, r, n)   → first n + population shares  (per slider tick, <1ms)
 *
 * Why not the obvious approach: naive median cut on a heavily-downscaled,
 * smoothed copy of the image (what this replaced) cannot work. Smoothing invents
 * blended colors that exist nowhere in the file, and no split criterion in
 * classic median cut ever isolates a low-population, far-away cluster — so a red
 * logo on a white wall never gets its own swatch. Every design choice below
 * exists to fix one of those two failures.
 *
 * Everything here is deterministic: the same file always yields the same
 * palette, in the same order, on every engine. There is no RNG, and every
 * argmax uses a strict comparison so ties resolve to the lowest index rather
 * than to an unstable sort.
 */

export type RGB = [number, number, number];
export type Lab = [number, number, number];

/** One palette entry. `share` is the fraction of pixels closest to this color. */
export type Swatch = { color: RGB; count: number; share: number };

/**
 * Compacted color histogram. One entry per occupied bin (or per exact color on
 * flat graphics), holding the true mean of the real pixels that landed in it —
 * never a bin centre — plus its precomputed CIE Lab coordinates.
 */
export interface ColorStats {
  /** Number of entries. */
  n: number;
  r: Float32Array;
  g: Float32Array;
  b: Float32Array;
  L: Float32Array;
  A: Float32Array;
  B: Float32Array;
  count: Uint32Array;
  /** Total opaque samples taken. */
  total: number;
  /** True when entries are exact source colors (flat graphic) rather than 5-bit bins. */
  exact: boolean;
}

/** A quantized color competing for a slot in the palette. */
export interface Candidate {
  color: RGB;
  lab: Lab;
  /** Population of the box this color came out of, in samples. */
  pop: number;
  /** Lab chroma — sqrt(a² + b²). Precomputed; drives the accent bonus. */
  chroma: number;
}

// ── Tuning ────────────────────────────────────────────────────────────────────

/** Sample budget in pixels. Area-capped, not longest-side-capped, so a
 *  panorama doesn't collapse to a few thousand samples. */
const SAMPLE_CAP = 512 * 512;
const SAMPLE_CAP_LARGE = 768 * 768;
const LARGE_IMAGE = 8_000_000;

/** Histogram resolution. 5 bits/channel = 32768 bins. 6 bits is worse here: at
 *  ~262k samples most bins would hold a single pixel, so the histogram would
 *  stop compressing and slider re-runs would lose their speedup. */
const BITS = 5;
const SHIFT = 8 - BITS;
const BIN_COUNT = 1 << (BITS * 3);

/** Below this many occupied bins the image is flat (logo, screenshot, UI), so
 *  it's worth a second pass to get pixel-exact hexes instead of bin means. */
const FLAT_BIN_LIMIT = 512;
/** Give up on the exact path past this many distinct colors. */
const EXACT_MAX = 8192;

/** Candidates generated before ranking. Must exceed the slider maximum by
 *  several times so distinct-but-small clusters get their own box. */
const K = 48;
/** Fraction of splits driven by population; the rest by population × volume. */
const PHASE1 = 0.7;
/** A box whose single largest entry owns this much of it IS that color. */
const DOMINANT_BIN = 0.6;

/** ΔE76 floor between selected colors, halved when nothing passes (12 → 6 → 3).
 *  Because results come back in rank order, the genuinely distinct colors are
 *  always picked first and anything admitted by a relaxed floor lands in the
 *  tail — so a low-variety image can still fill the requested count without the
 *  near-duplicates crowding out an accent. */
const D_START = 12;
const D_FLOOR = 2;
/** Distance credit saturates here — beyond it, further separation earns nothing. */
const D_CAP = 25;
/** Below this Lab chroma a color counts as neutral (JPEG chroma noise sits at 1-3). */
const CHROMA_MIN = 8;
/** Candidates under this share of the image are noise, not accents. */
const POP_FLOOR = 0.0005;
/** ...but never let the floor strip an image down to fewer than this many candidates. */
const MIN_AFTER_FLOOR = 16;

// ── sRGB → CIE Lab ────────────────────────────────────────────────────────────
//
// CIE76 rather than CIEDE2000, chosen for threshold *semantics* rather than
// accuracy: ΔE76 has universally understood anchors (2.3 ≈ just-noticeable,
// 10 ≈ clearly a different color, 25 ≈ a different hue family), so D_START = 12
// means something concrete. CIEDE2000's advantages live at ΔE < 5, a regime this
// code never operates in. A weighted-RGB approximation would be marginally
// cheaper but its units have no anchor and behave inconsistently between the
// dark and light ends of an image.

/** sRGB → linear, precomputed so the hot path never calls Math.pow. */
const LIN = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  LIN[i] = c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

const LAB_EPS = 216 / 24389;
const LAB_KAPPA = 841 / 108;
const fLab = (t: number) => (t > LAB_EPS ? Math.cbrt(t) : LAB_KAPPA * t + 4 / 29);

/** CIE Lab (D65) of an sRGB triple. Components may be fractional. */
export function rgbToLab(r: number, g: number, b: number): Lab {
  const R = LIN[r < 0 ? 0 : r > 255 ? 255 : r | 0];
  const G = LIN[g < 0 ? 0 : g > 255 ? 255 : g | 0];
  const B = LIN[b < 0 ? 0 : b > 255 ? 255 : b | 0];
  const x = fLab((0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047);
  const y = fLab(0.2126729 * R + 0.7151522 * G + 0.072175 * B);
  const z = fLab((0.0193339 * R + 0.119192 * G + 0.9503041 * B) / 1.08883);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

const deltaE76 = (a: Lab, z: Lab) =>
  Math.sqrt((a[0] - z[0]) ** 2 + (a[1] - z[1]) ** 2 + (a[2] - z[2]) ** 2);

// ── Formatting ────────────────────────────────────────────────────────────────

export const hexOf = ([r, g, b]: RGB) =>
  "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();

export const rgbCss = ([r, g, b]: RGB) => `rgb(${r}, ${g}, ${b})`;

const clamp255 = (v: number) => (v < 0 ? 0 : v > 255 ? 255 : Math.round(v));

// ── Stage 1+2: sample → histogram ─────────────────────────────────────────────

/** Reusable histogram scratch (512 KB), allocated on first use. */
let hCount: Uint32Array | null = null;
let hR: Uint32Array, hG: Uint32Array, hB: Uint32Array;

function histogramScratch() {
  if (!hCount) {
    hCount = new Uint32Array(BIN_COUNT);
    hR = new Uint32Array(BIN_COUNT);
    hG = new Uint32Array(BIN_COUNT);
    hB = new Uint32Array(BIN_COUNT);
  } else {
    hCount.fill(0);
    hR.fill(0);
    hG.fill(0);
    hB.fill(0);
  }
  return hCount;
}

function allocStats(n: number, total: number, exact: boolean): ColorStats {
  return {
    n,
    r: new Float32Array(n),
    g: new Float32Array(n),
    b: new Float32Array(n),
    L: new Float32Array(n),
    A: new Float32Array(n),
    B: new Float32Array(n),
    count: new Uint32Array(n),
    total,
    exact,
  };
}

function writeEntry(s: ColorStats, j: number, r: number, g: number, b: number, c: number) {
  s.r[j] = r;
  s.g[j] = g;
  s.b[j] = b;
  s.count[j] = c;
  const lab = rgbToLab(r, g, b);
  s.L[j] = lab[0];
  s.A[j] = lab[1];
  s.B[j] = lab[2];
}

/**
 * Second pass for flat graphics: bucket by exact 24-bit color so a logo's hexes
 * come out pixel-perfect instead of averaged within a 5-bit bin. Returns null if
 * the image turns out to have too many distinct colors after all.
 */
function exactStats(data: Uint8ClampedArray, total: number): ColorStats | null {
  const map = new Map<number, number>();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    const key = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
    const prev = map.get(key);
    if (prev === undefined) {
      if (map.size >= EXACT_MAX) return null;
      map.set(key, 1);
    } else {
      map.set(key, prev + 1);
    }
  }
  const s = allocStats(map.size, total, true);
  let j = 0;
  // Map iteration is insertion order — deterministic for a given raster.
  for (const [key, c] of map) {
    writeEntry(s, j++, (key >> 16) & 255, (key >> 8) & 255, key & 255, c);
  }
  return s;
}

function statsFromPixels(data: Uint8ClampedArray): ColorStats | null {
  const count = histogramScratch();
  let total = 0;
  let occupied = 0;

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue; // skip transparent
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const k = ((r >> SHIFT) << (BITS * 2)) | ((g >> SHIFT) << BITS) | (b >> SHIFT);
    if (count[k] === 0) occupied++;
    count[k]++;
    hR[k] += r;
    hG[k] += g;
    hB[k] += b;
    total++;
  }
  if (total === 0) return null; // fully transparent

  if (occupied <= FLAT_BIN_LIMIT) {
    const exact = exactStats(data, total);
    if (exact) return exact;
  }

  const s = allocStats(occupied, total, false);
  let j = 0;
  // Ascending bin index = ascending R, then G, then B. Deterministic.
  for (let k = 0; k < BIN_COUNT; k++) {
    const c = count[k];
    if (c === 0) continue;
    // The true mean of the real 8-bit pixels in this bin, never the bin centre —
    // so a flat region reproduces its own color exactly.
    writeEntry(s, j++, hR[k] / c, hG[k] / c, hB[k] / c, c);
  }
  return s;
}

/**
 * Sample an image and build its color histogram.
 *
 * Does **not** close `bmp` — the caller owns the bitmap's lifecycle. Returns
 * null when the image is fully transparent (no opaque pixels to describe).
 */
export function buildColorStats(bmp: ImageBitmap): ColorStats | null {
  const area = bmp.width * bmp.height;
  const cap = area > LARGE_IMAGE ? SAMPLE_CAP_LARGE : SAMPLE_CAP;
  const scale = Math.min(1, Math.sqrt(cap / area));
  const w = Math.max(1, Math.round(bmp.width * scale));
  const h = Math.max(1, Math.round(bmp.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  // willReadFrequently keeps the canvas CPU-backed, so getImageData is a memcpy
  // rather than a GPU readback stall.
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");

  // The single most important line in this file. With smoothing on, every
  // sample is an invented blend of its neighbours and small accent regions are
  // averaged out of existence before quantization even starts. With it off,
  // every sample is a byte-exact color that is actually present in the file.
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(bmp, 0, 0, w, h);

  return statsFromPixels(ctx.getImageData(0, 0, w, h).data);
}

// ── Stage 3: modified median cut over weighted bins ───────────────────────────

interface Box {
  /** Range [lo, hi) into the shared `order` array. */
  lo: number;
  hi: number;
  /** Sum of member counts. */
  pop: number;
  min: [number, number, number];
  max: [number, number, number];
}

/** Counting-sort scratch, indexed by an 8-bit channel value. */
const bucketPop = new Uint32Array(256);
const bucketCnt = new Uint32Array(256);
const bucketAt = new Int32Array(256);

function makeBox(s: ColorStats, order: Int32Array, lo: number, hi: number): Box {
  let pop = 0;
  let r0 = 255, g0 = 255, b0 = 255, r1 = 0, g1 = 0, b1 = 0;
  for (let i = lo; i < hi; i++) {
    const j = order[i];
    pop += s.count[j];
    const r = s.r[j] | 0, g = s.g[j] | 0, b = s.b[j] | 0;
    if (r < r0) r0 = r;
    if (r > r1) r1 = r;
    if (g < g0) g0 = g;
    if (g > g1) g1 = g;
    if (b < b0) b0 = b;
    if (b > b1) b1 = b;
  }
  return { lo, hi, pop, min: [r0, g0, b0], max: [r1, g1, b1] };
}

/**
 * Split a box across its widest axis at the **population-weighted** median.
 *
 * Cutting at the index median (what the old code did) is only equivalent when
 * operating on a raw pixel array. On a histogram it lets hundreds of near-empty
 * bins outvote the one bin holding 40% of the image.
 */
function splitBox(
  s: ColorStats,
  order: Int32Array,
  tmp: Int32Array,
  box: Box
): [Box, Box] | null {
  const dr = box.max[0] - box.min[0];
  const dg = box.max[1] - box.min[1];
  const db = box.max[2] - box.min[2];
  // Strict >= chain: ties resolve R > G > B, never by an unstable sort.
  const axis = dr >= dg && dr >= db ? 0 : dg >= db ? 1 : 2;
  const vmin = box.min[axis];
  const vmax = box.max[axis];
  if (vmax === vmin) return null; // every member shares this coordinate

  const ch = axis === 0 ? s.r : axis === 1 ? s.g : s.b;
  const { lo, hi } = box;

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
  // Both children must be non-empty. vmax > vmin is guaranteed above, and the
  // vmin bucket is always occupied, so this keeps lo < mid < hi.
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

  return [makeBox(s, order, lo, mid), makeBox(s, order, mid, hi)];
}

/**
 * Leptonica-style modified median cut.
 *
 * Chosen over k-means (RNG seeding makes the slider non-deterministic, and the
 * k=9 solution isn't the k=8 solution plus one, so every chip reshuffles) and
 * over Wu (optimizes total squared error — precisely the objective that says
 * "a 0.5% red accent is 0.5% of the error budget, ignore it").
 *
 * Median cut is a greedy split sequence, so the K-box partition refines the
 * (K−1)-box partition. That nesting is what keeps the palette stable as the
 * user drags the slider.
 */
function quantize(s: ColorStats, k: number): { boxes: Box[]; order: Int32Array } {
  const order = new Int32Array(s.n);
  for (let i = 0; i < s.n; i++) order[i] = i;
  const tmp = new Int32Array(s.n);
  const boxes: Box[] = [makeBox(s, order, 0, s.n)];
  const phase1 = Math.floor(k * PHASE1);

  while (boxes.length < k) {
    // Phase 1 drives boxes toward equal mass. Phase 2 switches to
    // population × volume, which is what finally isolates an accent: a box
    // straddling white wall and red logo has little mass but enormous volume,
    // so it rises to the top and gets cut cleanly between the two.
    const usePop = boxes.length < phase1;
    let best = -1;
    let bestKey = -1;
    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i];
      if (b.hi - b.lo < 2) continue;
      const er = b.max[0] - b.min[0];
      const eg = b.max[1] - b.min[1];
      const eb = b.max[2] - b.min[2];
      if (er === 0 && eg === 0 && eb === 0) continue;
      const key = usePop ? b.pop : b.pop * (er + 1) * (eg + 1) * (eb + 1);
      // Strict >: ties go to the lowest index. Do not turn this into a sort.
      if (key > bestKey) {
        bestKey = key;
        best = i;
      }
    }
    if (best === -1) break; // fewer distinct colors than k
    const pair = splitBox(s, order, tmp, boxes[best]);
    if (!pair) break;
    boxes.splice(best, 1, pair[0], pair[1]);
  }
  return { boxes, order };
}

/**
 * Representative color of a box: the population-weighted mean of its members'
 * true means, which are themselves means of real pixels.
 *
 * The old muddiness came from *heterogeneous boxes*, not from averaging as
 * such — so it's fixed structurally by over-generating to K=48 (boxes are far
 * smaller) plus the override below for the one case that survives: a box that
 * is one flat color plus a smear of neighbours.
 */
function boxColor(s: ColorStats, order: Int32Array, box: Box): Candidate {
  let pop = 0, wr = 0, wg = 0, wb = 0;
  let bestC = -1, bestJ = -1;
  for (let i = box.lo; i < box.hi; i++) {
    const j = order[i];
    const c = s.count[j];
    pop += c;
    wr += s.r[j] * c;
    wg += s.g[j] * c;
    wb += s.b[j] * c;
    // Strict >: ties go to the first member in scan order.
    if (c > bestC) {
      bestC = c;
      bestJ = j;
    }
  }
  const color: RGB =
    bestJ >= 0 && bestC >= DOMINANT_BIN * pop
      ? [clamp255(s.r[bestJ]), clamp255(s.g[bestJ]), clamp255(s.b[bestJ])]
      : [clamp255(wr / pop), clamp255(wg / pop), clamp255(wb / pop)];
  const lab = rgbToLab(color[0], color[1], color[2]);
  return { color, lab, pop, chroma: Math.sqrt(lab[1] * lab[1] + lab[2] * lab[2]) };
}

// ── Stage 4: rank candidates into a stable total ordering ─────────────────────

/**
 * Quantize to K candidates, then order *all* of them by "deserves a slot",
 * balancing three things: how much of the image the color covers, how visually
 * distinct it is from what's already chosen, and how chromatic it is.
 *
 * The result is a total ordering, so `palette(n)` is just the first n — which
 * makes the slider free and keeps chips stable as it moves.
 */
export function rankCandidates(s: ColorStats): Candidate[] {
  const { boxes, order } = quantize(s, K);

  // Merge candidates that rounded to the same RGB (possible via the
  // dominant-bin override) so the palette can never show a duplicate hex.
  const merged = new Map<number, Candidate>();
  for (const box of boxes) {
    if (box.hi <= box.lo) continue;
    const c = boxColor(s, order, box);
    if (c.pop <= 0) continue;
    const key = (c.color[0] << 16) | (c.color[1] << 8) | c.color[2];
    const prev = merged.get(key);
    if (prev) prev.pop += c.pop;
    else merged.set(key, c);
  }

  let cands = [...merged.values()];
  if (cands.length === 0) return [];

  // Drop specks — without this the chroma bonus below will happily "rescue" a
  // single JPEG ringing artifact. Never let it strip the image bare, though.
  const floor = Math.max(4, POP_FLOOR * s.total);
  const kept = cands.filter((c) => c.pop >= floor);
  if (kept.length >= MIN_AFTER_FLOOR) cands = kept;

  const out: Candidate[] = [];
  const used = new Uint8Array(cands.length);
  const minD = new Float64Array(cands.length).fill(Infinity);
  let dMin = D_START;
  let hasChromatic = false;

  while (out.length < cands.length) {
    let best = -1;
    let bestScore = -1;
    for (let i = 0; i < cands.length; i++) {
      if (used[i]) continue;
      if (out.length > 0 && minD[i] < dMin) continue; // hard distinctness floor
      const c = cands[i];
      const d = out.length === 0 ? D_CAP : Math.min(minD[i], D_CAP);
      // The bonus is capped at 1.5× (2.5× for the first chromatic pick) and
      // multiplies the *score*, never the population — a 0.3% neon accent would
      // need a 66× boost to outrank a 20% sky, so the palette stays honest. But
      // among the 1-3% long tail the saturated color wins, which is the whole
      // point. On a grayscale image every chroma is ~0, so this is exactly 1.0
      // for every candidate and changes nothing.
      const boost =
        c.chroma < CHROMA_MIN
          ? 1
          : 1 + (hasChromatic ? 0.5 : 1.5) * Math.min(c.chroma / 60, 1);
      const score = (c.pop / s.total) * (d / D_CAP) * boost;
      // Strict >: ties go to the lowest index. Do not turn this into a sort.
      if (score > bestScore) {
        bestScore = score;
        best = i;
      }
    }

    if (best === -1) {
      // Nothing clears the floor. Relax it *in place* and keep going — restarting
      // the greedy would reshuffle everything already chosen and break nesting.
      // Stop rather than relax past D_FLOOR: 12 → 6 → stop.
      const next = dMin / 2;
      if (next < D_FLOOR) break;
      dMin = next;
      continue;
    }

    const pick = cands[best];
    used[best] = 1;
    out.push(pick);
    if (pick.chroma >= CHROMA_MIN) hasChromatic = true;
    for (let i = 0; i < cands.length; i++) {
      if (used[i]) continue;
      const d = deltaE76(cands[i].lab, pick.lab);
      if (d < minD[i]) minD[i] = d;
    }
  }
  return out;
}

// ── Stage 5: take n, re-attribute population ─────────────────────────────────

/**
 * The first `n` ranked colors, with each one's share of the image.
 *
 * Shares are computed by assigning every histogram entry to its nearest
 * selected color, so they sum to 100% for any n. Note the semantics: a share is
 * "the fraction of pixels *closest to* this color", not "the fraction that are
 * exactly it".
 *
 * Order is **rank**, not raw share. The first entry is still the image's
 * dominant color (the first pick is a pure population argmax), but re-sorting
 * the rest by share would undo the ranking and bury the accent colors at the
 * bottom of the list — which is precisely the outcome this module exists to
 * prevent. The share is displayed per swatch instead.
 *
 * The representatives are deliberately *not* recomputed from the reassigned
 * entries (no Lloyd step) — that would drag each accent back toward the image's
 * centre of mass and reintroduce the muddiness this module exists to remove.
 */
export function takePalette(s: ColorStats, ranked: Candidate[], n: number): Swatch[] {
  const sel = ranked.slice(0, Math.max(1, Math.min(n, ranked.length)));
  if (sel.length === 0) return [];

  const selL = new Float64Array(sel.length);
  const selA = new Float64Array(sel.length);
  const selB = new Float64Array(sel.length);
  for (let q = 0; q < sel.length; q++) {
    selL[q] = sel[q].lab[0];
    selA[q] = sel[q].lab[1];
    selB[q] = sel[q].lab[2];
  }

  const pop = new Float64Array(sel.length);
  for (let j = 0; j < s.n; j++) {
    const jl = s.L[j], ja = s.A[j], jb = s.B[j];
    let best = 0;
    let bestD = Infinity;
    for (let q = 0; q < sel.length; q++) {
      const dl = jl - selL[q], da = ja - selA[q], db = jb - selB[q];
      const d = dl * dl + da * da + db * db; // squared — no sqrt needed to compare
      // Strict <: ties go to the higher-ranked color.
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    pop[best] += s.count[j];
  }

  return sel.map((c, q) => ({ color: c.color, count: pop[q], share: pop[q] / s.total }));
}
