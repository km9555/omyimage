/**
 * Animations read one composited frame at a time.
 *
 * `decodeGifFrames` (lib/image/gif-decode.ts) keeps a canvas per frame, which
 * is right for the GIF Maker's editable timeline but costs width × height × 4
 * bytes per frame — a 300-frame 480 × 270 GIF is 155 MB before anything
 * happens. The GIF tools mostly walk frames in order (sample pass, then
 * encode pass), so this reader keeps ONE canvas and composites forward.
 * Reverse playback and the cutter's previews read backwards, so a snapshot
 * of the composite is kept every few frames and a backwards read restarts
 * from the nearest one instead of from frame 0.
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
  /**
   * How the source loops, in gifenc's terms: 0 = forever, -1 = plays once,
   * N = the stored loop count. Absent means forever.
   */
  repeat?: number;
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

/** Memory allowed for snapshots, and again for frames kept after a backwards read. */
const SNAPSHOT_BUDGET = 64 * 1024 * 1024;

/**
 * Random access for a forward-only compositor.
 *
 * - Snapshots of the canvas plus whatever decoder state the next frame
 *   depends on (`S`), every `every` frames — about √n of them — so a
 *   backwards read restarts from the nearest one instead of from frame 0.
 * - Catching up from that snapshot composites the frames in between anyway,
 *   so they are kept: reading backwards one frame at a time, as reverse
 *   playback does, then costs about one composite per frame, like playing
 *   forwards.
 */
export function snapshotStore<S>(count: number, width: number, height: number) {
  const bytes = width * height * 4;
  const every = Math.max(8, Math.ceil(Math.sqrt(count)), Math.ceil((count * bytes) / SNAPSHOT_BUDGET));
  const keepMax = Math.max(1, Math.min(every, Math.floor(SNAPSHOT_BUDGET / bytes)));
  type Snap = { image: ImageData; state: S };
  const snaps = new Map<number, Snap>();
  let kept = new Map<number, Snap>();
  let keeping = false;
  return {
    /** Call after frame `cursor` is drawn. */
    save(ctx: CanvasRenderingContext2D, cursor: number, state: S) {
      const snap = cursor % every === 0 && !snaps.has(cursor);
      if (!snap && !keeping) return;
      const s = { image: ctx.getImageData(0, 0, width, height), state };
      if (snap) snaps.set(cursor, s);
      if (keeping) {
        kept.set(cursor, s);
        // Keep the frames nearest the one asked for: they are read next.
        if (kept.size > keepMax) kept.delete(kept.keys().next().value as number);
      }
    },
    /**
     * Where to resume for a backwards read of frame `i`: the frame itself if
     * it was kept, else the latest snapshot before it (keeping the frames
     * composited from there), else null — restart from frame 0.
     */
    rewind(i: number): { cursor: number; image: ImageData; state: S } | null {
      const hit = kept.get(i);
      if (hit) return { cursor: i, ...hit };
      kept = new Map();
      keeping = true;
      for (let k = Math.floor(i / every) * every; k >= 0; k -= every) {
        const s = snaps.get(k);
        if (s) return { cursor: k, ...s };
      }
      return null;
    },
    /** Call once the frame asked for is drawn. */
    settle() { keeping = false; },
  };
}

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
  application?: { id?: string; blocks?: ArrayLike<number> };
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

  type Pending = { type: number; x: number; y: number; w: number; h: number; saved?: ImageData } | null;
  let cursor = -1;
  let pending: Pending = null;
  const store = snapshotStore<Pending>(raw.length, width, height);

  async function frame(i: number): Promise<HTMLCanvasElement> {
    if (i < 0 || i >= raw.length) throw new Error("Frame out of range.");
    if (i < cursor) {
      const at = store.rewind(i);
      if (at) {
        ctx!.putImageData(at.image, 0, 0);
        cursor = at.cursor;
        pending = at.state;
      } else {
        ctx!.clearRect(0, 0, width, height);
        cursor = -1;
        pending = null;
      }
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
      store.save(ctx!, cursor, pending);
    }
    store.settle();
    return canvas;
  }

  // The NETSCAPE2.0 block holds the loop count; a GIF without one plays once.
  const loop = gif.frames.find((f) => f.application?.id === "NETSCAPE2.0")?.application?.blocks;
  const repeat = loop && loop.length >= 3 ? loop[1] | (loop[2] << 8) : -1;

  return { width, height, delays, frame, repeat };
}
