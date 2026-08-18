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
 */
async function sampleAllFrames(src: GifSource, pxPerFrame: number): Promise<Uint8ClampedArray> {
  const perFrame = Math.max(1, Math.floor(SAMPLE_BUDGET / Math.max(1, src.count)));
  const step = Math.max(1, Math.floor(pxPerFrame / perFrame));
  const take = Math.ceil(pxPerFrame / step);
  const out = new Uint8ClampedArray(take * src.count * 4);
  let w = 0;

  for (let i = 0; i < src.count; i++) {
    const data = await src.pixels(i);
    for (let p = 0; p < pxPerFrame; p += step) {
      const s = p * 4;
      out[w++] = data[s];
      out[w++] = data[s + 1];
      out[w++] = data[s + 2];
      out[w++] = data[s + 3];
    }
  }
  return w === out.length ? out : out.subarray(0, w);
}

export async function encodeGif(src: GifSource, opts: GifEncodeOptions): Promise<Uint8Array> {
  if (src.count < 1) throw new Error("Add at least one frame.");
  const { width, height } = opts;
  const colors = Math.max(2, Math.min(256, Math.round(opts.colors ?? 256)));
  const repeat = opts.repeat ?? 0;
  const wantAlpha = !!opts.transparent;

  const { GIFEncoder, quantize, applyPalette } = await import("gifenc");
  const pxPerFrame = width * height;

  // rgba4444 keeps an alpha channel through quantization; oneBitAlpha snaps it
  // to fully on/off, which is all GIF can represent.
  const format = wantAlpha ? "rgba4444" : "rgb565";
  const sample = await sampleAllFrames(src, pxPerFrame);
  const palette = quantize(sample, colors, { format, oneBitAlpha: wantAlpha });

  // Transparency only works if quantize actually kept a zero-alpha entry; if
  // the frames turned out fully opaque it will not have, and asking gifenc to
  // treat index 0 as transparent would punch a hole in a real colour.
  const transparentIndex = wantAlpha ? palette.findIndex((c) => (c[3] ?? 255) === 0) : -1;
  const useAlpha = wantAlpha && transparentIndex >= 0;

  const gif = GIFEncoder();
  for (let i = 0; i < src.count; i++) {
    const data = await src.pixels(i);
    const index = applyPalette(data, palette, format);
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
