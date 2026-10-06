/**
 * Animated GIF encoding for oMyImage.
 *
 * Split out of `GifMakerTool` so the parts that decide file size and colour
 * fidelity can be tested without a DOM. Everything here works on raw RGBA, so
 * the caller owns compositing (canvas) and this owns palettes and framing.
 *
 * Two things this fixes versus the previous inline encoder:
 *
 *  - **One global colour table.** The old loop called `quantize()` per frame,
 *    so every frame carried its own 768-byte local table *and* was quantised in
 *    isolation — which both inflated the file and let flat colours drift
 *    between frames. gifenc's own guidance is to quantise once for a whole
 *    animation and let later frames inherit the global table, which is what
 *    happens below.
 *  - **Real transparency.** gifenc supports 1-bit alpha; the tool never used
 *    it and always flattened onto an opaque colour.
 *
 * Encoding also yields between frames so the tab stays usable and progress can
 * be reported — the old loop was synchronous and froze everything.
 */

export type FitMode = "contain" | "cover" | "stretch";

export interface Rect { x: number; y: number; w: number; h: number }

export interface GifSource {
  /** Number of frames to write. */
  count: number;
  /** Delay for frame `i`, in milliseconds. GIF stores centiseconds. */
  delay: (i: number) => number;
  /**
   * RGBA pixels for frame `i`, already composited at the output size.
   * Called twice per frame (once to sample the palette, once to encode), so it
   * must be repeatable — and cheap enough to run twice.
   */
  pixels: (i: number) => Uint8ClampedArray | Promise<Uint8ClampedArray>;
}

export interface GifEncodeOptions {
  width: number;
  height: number;
  /** Palette size, 2–256. Fewer colours means a smaller file. */
  colors?: number;
  /** 0 = loop forever, -1 = play once, N = repeat N times. */
  repeat?: number;
  /** Encode 1-bit transparency instead of flattening onto a colour. */
  transparent?: boolean;
  /**
   * Inter-frame optimisation for opaque animations: every pixel that looks the
   * same as in the frame already on screen is written as a reserved
   * transparent index, so the frame shows through from the previous one and
   * LZW compresses the long runs this creates. Ignored when `transparent` is
   * set, because real transparency and "unchanged" would share one index.
   */
  optimize?: boolean;
  /**
   * How different (RGB distance, 0–441) a pixel may be from what is on screen
   * and still count as unchanged. 0 = only identical palette entries. Above 0
   * this is lossy: small flicker and noise are frozen, which is most of what
   * makes video GIFs large.
   */
  fuzz?: number;
  /**
   * Keep the animation's own colours when it has few enough of them for one
   * palette, instead of re-quantising. Quantising to 5-6-5 bits shifts every
   * colour slightly, which is invisible once but adds up when a GIF is edited
   * (cropped, rotated, reversed…) and saved again. Falls back to quantising
   * as soon as the frames turn out to have too many colours.
   */
  exact?: boolean;
  onProgress?: (done: number, total: number) => void;
}

/** Pixels sampled across the whole animation to build the shared palette. */
const SAMPLE_BUDGET = 1 << 16;

/**
 * Where a frame sits inside the output box.
 *
 * Same three modes, and the same maths, as the PDF layout planner in
 * `lib/pdf/images-to-pdf.ts` — deliberately, so "contain" means the same thing
 * in both tools. Under `cover` the box is larger than the output and the caller
 * is expected to clip (a canvas does this for free).
 */
export function fitBox(W: number, H: number, iw: number, ih: number, fit: FitMode): Rect {
  if (fit === "stretch" || iw <= 0 || ih <= 0) return { x: 0, y: 0, w: W, h: H };
  const ratioImg = iw / ih;
  const ratioBox = W / H;
  const useWidth = fit === "contain" ? ratioImg > ratioBox : ratioImg < ratioBox;
  const w = useWidth ? W : H * ratioImg;
  const h = useWidth ? W / ratioImg : H;
  return { x: (W - w) / 2, y: (H - h) / 2, w, h };
}

/** Let the browser paint between frames. A macrotask, so layout actually runs. */
const yieldToUi = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

/**
 * Collect a strided sample of pixels spanning every frame, so the shared
 * palette represents the whole animation rather than whichever frame happens
 * to be first.
 *
 * With `exactLimit` > 0 the same pass also lists every distinct colour (as
 * 0xRRGGBB), giving up once there are more than `exactLimit`. With `alpha`,
 * pixels under half opacity are transparent and are not colours.
 */
async function sampleAllFrames(
  src: GifSource,
  pxPerFrame: number,
  exactLimit = 0,
  alpha = false,
): Promise<{ sample: Uint8ClampedArray; exact: number[] | null }> {
  const perFrame = Math.max(1, Math.floor(SAMPLE_BUDGET / Math.max(1, src.count)));
  const step = Math.max(1, Math.floor(pxPerFrame / perFrame));
  const take = Math.ceil(pxPerFrame / step);
  const out = new Uint8ClampedArray(take * src.count * 4);
  let w = 0;
  // One bit per 24-bit colour: 2 MB, and no hashing in the hot loop.
  let seen = exactLimit > 0 ? new Uint32Array(1 << 19) : null;
  const colours: number[] = [];

  for (let i = 0; i < src.count; i++) {
    const data = await src.pixels(i);
    for (let p = 0; p < pxPerFrame; p += step) {
      const s = p * 4;
      out[w++] = data[s];
      out[w++] = data[s + 1];
      out[w++] = data[s + 2];
      out[w++] = data[s + 3];
    }
    if (seen) {
      let last = -1;
      for (let s = 0; s < data.length; s += 4) {
        if (alpha && data[s + 3] < 128) continue;
        const c = (data[s] << 16) | (data[s + 1] << 8) | data[s + 2];
        if (c === last) continue;
        last = c;
        const bit = 1 << (c & 31);
        if (seen[c >>> 5] & bit) continue;
        seen[c >>> 5] |= bit;
        colours.push(c);
        if (colours.length > exactLimit) { seen = null; break; }
      }
    }
  }
  return { sample: w === out.length ? out : out.subarray(0, w), exact: seen ? colours : null };
}

const rgbOf = (c: number) => [(c >> 16) & 255, (c >> 8) & 255, c & 255];

/**
 * Palette indices for an exact palette. Each pixel's colour is looked up
 * directly — gifenc's applyPalette works on 5-6-5 keys, under which two
 * nearby exact colours would land on the same entry.
 */
function exactIndexer(colours: number[], transparentIndex: number) {
  const map = new Map<number, number>();
  colours.forEach((c, i) => map.set(c, i));
  return (data: Uint8ClampedArray): Uint8Array => {
    const out = new Uint8Array(data.length >> 2);
    let last = -1;
    let lastIndex = 0;
    for (let p = 0, s = 0; s < data.length; p++, s += 4) {
      if (transparentIndex >= 0 && data[s + 3] < 128) { out[p] = transparentIndex; continue; }
      const c = (data[s] << 16) | (data[s + 1] << 8) | data[s + 2];
      if (c !== last) { last = c; lastIndex = map.get(c) ?? 0; }
      out[p] = lastIndex;
    }
    return out;
  };
}

export async function encodeGif(src: GifSource, opts: GifEncodeOptions): Promise<Uint8Array> {
  if (src.count < 1) throw new Error("Add at least one frame.");
  const { width, height } = opts;
  const colors = Math.max(2, Math.min(256, Math.round(opts.colors ?? 256)));
  const repeat = opts.repeat ?? 0;
  const wantAlpha = !!opts.transparent;

  const { GIFEncoder, quantize, applyPalette } = await import("gifenc");
  const pxPerFrame = width * height;

  if (opts.optimize && !wantAlpha && src.count > 1) {
    return encodeOptimized(src, opts, colors, repeat, { GIFEncoder, quantize, applyPalette });
  }

  // rgba4444 keeps an alpha channel through quantization; oneBitAlpha snaps it
  // to fully on/off, which is all GIF can represent.
  const format = wantAlpha ? "rgba4444" : "rgb565";
  const { sample, exact } = await sampleAllFrames(src, pxPerFrame, opts.exact ? colors - (wantAlpha ? 1 : 0) : 0, wantAlpha);

  let palette: number[][];
  let transparentIndex: number;
  let toIndex: (data: Uint8ClampedArray) => Uint8Array;
  if (exact) {
    // The transparent slot goes last, and GIF needs at least two entries.
    palette = exact.map(rgbOf);
    transparentIndex = wantAlpha ? palette.length : -1;
    if (wantAlpha) palette.push([0, 0, 0]);
    while (palette.length < 2) palette.push([0, 0, 0]);
    toIndex = exactIndexer(exact, transparentIndex);
  } else {
    palette = quantize(sample, colors, { format, oneBitAlpha: wantAlpha });
    // Transparency only works if quantize actually kept a zero-alpha entry; if
    // the frames turned out fully opaque it will not have, and asking gifenc to
    // treat index 0 as transparent would punch a hole in a real colour.
    transparentIndex = wantAlpha ? palette.findIndex((c) => (c[3] ?? 255) === 0) : -1;
    toIndex = (data) => applyPalette(data, palette, format);
  }
  const useAlpha = wantAlpha && transparentIndex >= 0;

  const gif = GIFEncoder();
  for (let i = 0; i < src.count; i++) {
    const data = await src.pixels(i);
    const index = toIndex(data);
    gif.writeFrame(index, width, height, {
      // Only the first frame carries the palette; the rest inherit it as the
      // global colour table. That is the whole point — a local table per frame
      // costs 768 bytes each and lets colours drift.
      ...(i === 0 ? { palette, repeat } : {}),
      delay: src.delay(i),
      // dispose 2 = restore to background. Without it a transparent frame keeps
      // whatever the previous frame drew, so the animation smears.
      ...(useAlpha ? { transparent: true, transparentIndex, dispose: 2 } : {}),
    });
    opts.onProgress?.(i + 1, src.count);
    if (i < src.count - 1) await yieldToUi();
  }
  gif.finish();
  return gif.bytes();
}

type Gifenc = typeof import("gifenc");

/**
 * The `optimize` path of encodeGif: one global palette with the last slot
 * reserved for "unchanged", and every frame after the first written as a diff
 * against what is on screen (dispose 1 = leave it there).
 */
async function encodeOptimized(
  src: GifSource,
  opts: GifEncodeOptions,
  colors: number,
  repeat: number,
  lib: Pick<Gifenc, "GIFEncoder" | "quantize" | "applyPalette">,
): Promise<Uint8Array> {
  const { width, height } = opts;
  const px = width * height;
  const format = "rgb565";
  // One slot fewer than asked for: the extra entry is the "unchanged" marker.
  const { sample, exact } = await sampleAllFrames(src, px, opts.exact ? colors - 1 : 0);
  const real = exact ? exact.map(rgbOf) : lib.quantize(sample, Math.max(2, colors - 1), { format });
  const toIndex = exact ? exactIndexer(exact, -1) : (data: Uint8ClampedArray) => lib.applyPalette(data, real, format);
  const T = real.length;
  const palette = [...real, [0, 0, 0]];

  // Which palette pairs are close enough to count as the same pixel.
  const fuzz = Math.max(0, opts.fuzz ?? 0);
  let near: Uint8Array | null = null;
  if (fuzz > 0) {
    const f2 = fuzz * fuzz;
    near = new Uint8Array(T * T);
    for (let a = 0; a < T; a++) {
      for (let b = 0; b < T; b++) {
        const dr = real[a][0] - real[b][0];
        const dg = real[a][1] - real[b][1];
        const db = real[a][2] - real[b][2];
        near[a * T + b] = dr * dr + dg * dg + db * db <= f2 ? 1 : 0;
      }
    }
  }

  const gif = lib.GIFEncoder();
  const shown = new Uint8Array(px);
  for (let i = 0; i < src.count; i++) {
    const index = toIndex(await src.pixels(i));
    if (i === 0) {
      shown.set(index);
      gif.writeFrame(index, width, height, { palette, repeat, delay: src.delay(i) });
    } else {
      const out = new Uint8Array(px);
      for (let p = 0; p < px; p++) {
        const a = index[p];
        const s = shown[p];
        if (a === s || (near && near[a * T + s])) out[p] = T;
        else { out[p] = a; shown[p] = a; }
      }
      gif.writeFrame(out, width, height, { delay: src.delay(i), transparent: true, transparentIndex: T, dispose: 1 });
    }
    opts.onProgress?.(i + 1, src.count);
    if (i < src.count - 1) await yieldToUi();
  }
  gif.finish();
  return gif.bytes();
}
