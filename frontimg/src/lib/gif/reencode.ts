/**
 * Re-encode an animation as a GIF: optionally smaller, with fewer frames or
 * fewer colours, cropped, turned, mirrored, or with its frames reordered and
 * retimed. Shared by every GIF tool that writes a GIF from a FrameSource.
 */
import { encodeGif, type Rect } from "@/lib/image/gif-encode";
import { hasTransparency, type FrameSource } from "@/lib/gif/frames";

/** One output frame: which source frame it shows, and for how long (ms). */
export interface PlannedFrame { index: number; delay: number }

export interface ReencodeOptions {
  /** Output size, after any crop and quarter turns. */
  width: number;
  height: number;
  /** Output frames in order. Overrides `keepEvery`. */
  plan?: PlannedFrame[];
  /** Keep one frame in `keepEvery`; the dropped frames' time is added to it. */
  keepEvery?: number;
  /** Part of each source frame to keep, in source pixels. Default: all of it. */
  crop?: Rect;
  /** Clockwise quarter turns, applied after the crop. */
  turns?: 0 | 1 | 2 | 3;
  /** Mirror the result left-right / top-bottom, after turning. */
  flipX?: boolean;
  flipY?: boolean;
  /** Palette size, 2–256. */
  colors?: number;
  /** Lossy frame-diff tolerance, see GifEncodeOptions.fuzz. */
  fuzz?: number;
  /** null = detect: keep transparency only if the animation has any. */
  transparent?: boolean | null;
  onProgress?: (fraction: number) => void;
}

export interface ReencodeResult { bytes: Uint8Array; frames: number; transparent: boolean }

/** Every frame once, or one frame in `keep` with the skipped frames' time added. */
export function keepEveryPlan(delays: number[], keep = 1): PlannedFrame[] {
  const k = Math.max(1, Math.round(keep));
  const plan: PlannedFrame[] = [];
  for (let i = 0; i < delays.length; i += k) {
    let delay = 0;
    for (let j = i; j < Math.min(i + k, delays.length); j++) delay += delays[j];
    plan.push({ index: i, delay });
  }
  return plan;
}

/**
 * RGBA pixels turned clockwise by `turns` quarter turns, then mirrored. Each
 * pixel is copied whole (as one 32-bit word), so colours stay exact.
 */
export function turnPixels(
  src: Uint8ClampedArray,
  sw: number,
  sh: number,
  turns: number,
  flipX: boolean,
  flipY: boolean,
): Uint8ClampedArray {
  const ow = turns % 2 ? sh : sw;
  const oh = turns % 2 ? sw : sh;
  const from = new Uint32Array(src.buffer, src.byteOffset, sw * sh);
  const out = new Uint8ClampedArray(ow * oh * 4);
  const to = new Uint32Array(out.buffer);
  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      let X = x;
      let Y = y;
      if (turns === 1) { X = sh - 1 - y; Y = x; }
      else if (turns === 2) { X = sw - 1 - x; Y = sh - 1 - y; }
      else if (turns === 3) { X = y; Y = sw - 1 - x; }
      if (flipX) X = ow - 1 - X;
      if (flipY) Y = oh - 1 - Y;
      to[Y * ow + X] = from[y * sw + x];
    }
  }
  return out;
}

export async function reencodeAsGif(src: FrameSource, o: ReencodeOptions): Promise<ReencodeResult> {
  const plan = o.plan ?? keepEveryPlan(src.delays, o.keepEvery);
  if (!plan.length) throw new Error("Add at least one frame.");

  const transparent = o.transparent ?? (await hasTransparency(src));
  const crop = o.crop ?? { x: 0, y: 0, w: src.width, h: src.height };
  const turns = o.turns ?? 0;
  const moved = turns !== 0 || !!o.flipX || !!o.flipY;
  // The crop is drawn upright into a (dw × dh) canvas; turns and flips are
  // then a pixel remap. Drawing through a rotated canvas transform instead
  // was twice as slow, because a read-back canvas rasterises it in software.
  const dw = turns % 2 ? o.height : o.width;
  const dh = turns % 2 ? o.width : o.height;
  const out = document.createElement("canvas");
  out.width = dw;
  out.height = dh;
  const ctx = out.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  // Without scaling every source pixel lands on exactly one output pixel, so
  // smoothing off keeps the colours exact (and the exact palette usable).
  const scaled = dw !== crop.w || dh !== crop.h;
  ctx.imageSmoothingEnabled = scaled;
  ctx.imageSmoothingQuality = "high";
  const colors = o.colors ?? 256;
  const fuzz = o.fuzz ?? 0;

  // encodeGif reads every frame twice — a palette pass, then the encode pass —
  // so the progress bar spans both.
  let reads = 0;
  const total = plan.length * 2;
  const bytes = await encodeGif(
    {
      count: plan.length,
      delay: (i) => plan[i].delay,
      pixels: async (i) => {
        const frame = await src.frame(plan[i].index);
        ctx.clearRect(0, 0, dw, dh);
        ctx.drawImage(frame, crop.x, crop.y, crop.w, crop.h, 0, 0, dw, dh);
        o.onProgress?.(Math.min(1, ++reads / total));
        const data = ctx.getImageData(0, 0, dw, dh).data;
        return moved ? turnPixels(data, dw, dh, turns, !!o.flipX, !!o.flipY) : data;
      },
    },
    {
      width: o.width,
      height: o.height,
      colors,
      repeat: src.repeat ?? 0,
      transparent,
      optimize: !transparent,
      fuzz,
      exact: colors >= 256 && fuzz === 0 && !scaled,
    },
  );
  return { bytes, frames: plan.length, transparent };
}
