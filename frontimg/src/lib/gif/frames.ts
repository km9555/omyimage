/**
 * Animations read one composited frame at a time.
 *
 * `decodeGifFrames` (lib/image/gif-decode.ts) keeps a canvas per frame, which
 * is right for the GIF Maker's editable timeline but costs width × height × 4
 * bytes per frame — a 300-frame 480 × 270 GIF is 155 MB before anything
 * happens. The GIF tools only ever walk frames in order (sample pass, then
 * encode pass), so this reader keeps ONE canvas and composites forward;
 * asking for an earlier frame restarts from the first.
 */

export interface FrameSource {
  width: number;
  height: number;
  /** Per-frame display time in milliseconds, as browsers play it. */
  delays: number[];
  /**
   * The composited frame `i` at native size. The canvas is reused for every
   * frame: read or draw it before asking for the next one.
   */
  frame(i: number): Promise<HTMLCanvasElement>;
}

/**
 * The delay a browser actually shows. Chrome, Firefox and Safari all treat a
 * GIF or WebP frame of 10 ms or less as 100 ms, so an animation re-encoded
 * from the stored values would otherwise play ten times faster than the
 * original did on screen.
 */
export const playDelay = (ms: number | undefined) => (!ms || ms <= 10 ? 100 : ms);

/** Total running time in milliseconds. */
export const totalDuration = (src: FrameSource) => src.delays.reduce((a, b) => a + b, 0);

/** Whether any frame has transparent or semi-transparent pixels. One full pass. */
export async function hasTransparency(src: FrameSource): Promise<boolean> {
  for (let i = 0; i < src.delays.length; i++) {
    const c = await src.frame(i);
    const data = c.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, c.width, c.height).data;
    for (let p = 3; p < data.length; p += 4) if (data[p] < 255) return true;
  }
  return false;
}

type GifuctFrame = {
  image?: unknown;
  gce?: { delay?: number };
};

/**
 * The part of gifuct-js used here. Its published types only cover the
 * all-frames `decompressFrames`; the single-frame `decompressFrame` and the
 * raw `frames`/`gct` fields it is built from are exported but untyped.
 */
interface Gifuct {
  parseGIF(buffer: ArrayBuffer): { lsd: { width: number; height: number }; frames: GifuctFrame[]; gct: unknown };
  decompressFrame(frame: GifuctFrame, gct: unknown, buildPatch: boolean): {
    patch: Uint8ClampedArray;
    dims: { left: number; top: number; width: number; height: number };
    disposalType?: number;
  };
}

/** Open an animated (or still) GIF as a forward-reading frame source. */
export async function openGif(blob: Blob): Promise<FrameSource> {
  const { parseGIF, decompressFrame } = (await import("gifuct-js")) as unknown as Gifuct;
  const gif = parseGIF(await blob.arrayBuffer());
  const raw = gif.frames.filter((f) => f.image);
  if (!raw.length) throw new Error("No frames found in this GIF.");

  const width = gif.lsd.width;
  const height = gif.lsd.height;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const patch = document.createElement("canvas");
  const pctx = patch.getContext("2d");
  if (!ctx || !pctx) throw new Error("Canvas is not supported in this browser.");

  // Delay lives in the frame's graphic control extension, so it can be read
  // without decompressing anything.
  const delays = raw.map((f) => playDelay(f.gce ? (f.gce.delay ?? 0) * 10 : 0));

  let cursor = -1;
  let pending: { type: number; x: number; y: number; w: number; h: number; saved?: ImageData } | null = null;

  async function frame(i: number): Promise<HTMLCanvasElement> {
    if (i < 0 || i >= raw.length) throw new Error("Frame out of range.");
    if (i <= cursor) {
      ctx!.clearRect(0, 0, width, height);
      cursor = -1;
      pending = null;
    }
    while (cursor < i) {
      cursor++;
      // The PREVIOUS frame's disposal runs before this frame is drawn.
      if (pending) {
        if (pending.type === 2) ctx!.clearRect(pending.x, pending.y, pending.w, pending.h);
        else if (pending.type === 3 && pending.saved) ctx!.putImageData(pending.saved, pending.x, pending.y);
        pending = null;
      }
      const fr = decompressFrame(raw[cursor], gif.gct, true);
      const { left, top, width: w, height: h } = fr.dims;
      const disposal = fr.disposalType ?? 0;
      const saved = disposal === 3 && w > 0 && h > 0 ? ctx!.getImageData(left, top, w, h) : undefined;
      if (w > 0 && h > 0) {
        patch.width = w;
        patch.height = h;
        pctx!.putImageData(new ImageData(new Uint8ClampedArray(fr.patch), w, h), 0, 0);
        // Transparent patch pixels keep what is underneath, as in a player.
        ctx!.drawImage(patch, left, top);
      }
      pending = { type: disposal, x: left, y: top, w, h, saved };
    }
    return canvas;
  }

  return { width, height, delays, frame };
}
