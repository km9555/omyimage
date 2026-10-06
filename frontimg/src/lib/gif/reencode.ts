/**
 * Re-encode an animation as a GIF: optionally smaller, with fewer frames or
 * fewer colours. Shared by the GIF compressor, the GIF resizer and WebP → GIF.
 */
import { encodeGif } from "@/lib/image/gif-encode";
import { hasTransparency, type FrameSource } from "@/lib/gif/frames";

export interface ReencodeOptions {
  width: number;
  height: number;
  /** Keep one frame in `keepEvery`; the dropped frames' time is added to it. */
  keepEvery?: number;
  /** Palette size, 2–256. */
  colors?: number;
  /** Lossy frame-diff tolerance, see GifEncodeOptions.fuzz. */
  fuzz?: number;
  /** null = detect: keep transparency only if the animation has any. */
  transparent?: boolean | null;
  onProgress?: (fraction: number) => void;
}

export interface ReencodeResult { bytes: Uint8Array; frames: number; transparent: boolean }

export async function reencodeAsGif(src: FrameSource, o: ReencodeOptions): Promise<ReencodeResult> {
  const keep = Math.max(1, Math.round(o.keepEvery ?? 1));
  const kept: { index: number; delay: number }[] = [];
  for (let i = 0; i < src.delays.length; i += keep) {
    let delay = 0;
    for (let k = i; k < Math.min(i + keep, src.delays.length); k++) delay += src.delays[k];
    kept.push({ index: i, delay });
  }

  const transparent = o.transparent ?? (await hasTransparency(src));
  const out = document.createElement("canvas");
  out.width = o.width;
  out.height = o.height;
  const ctx = out.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const same = o.width === src.width && o.height === src.height;

  // encodeGif reads every frame twice — a palette pass, then the encode pass —
  // so the progress bar spans both.
  let reads = 0;
  const total = kept.length * 2;
  const bytes = await encodeGif(
    {
      count: kept.length,
      delay: (i) => kept[i].delay,
      pixels: async (i) => {
        const frame = await src.frame(kept[i].index);
        ctx.clearRect(0, 0, o.width, o.height);
        if (same) ctx.drawImage(frame, 0, 0);
        else ctx.drawImage(frame, 0, 0, o.width, o.height);
        o.onProgress?.(Math.min(1, ++reads / total));
        return ctx.getImageData(0, 0, o.width, o.height).data;
      },
    },
    {
      width: o.width,
      height: o.height,
      colors: o.colors ?? 256,
      transparent,
      optimize: !transparent,
      fuzz: o.fuzz ?? 0,
    },
  );
  return { bytes, frames: kept.length, transparent };
}
