/**
 * Animated WebP from a FrameSource.
 *
 * The browser's own encoder (canvas.toBlob) compresses every frame — lossless
 * VP8L at quality 1 in Chrome and Edge, lossy VP8 below — and this module only
 * muxes the results into an animation (RIFF · VP8X · ANIM · ANMF…), so no
 * codec ships with the site. Safari has no WebP encoder and gets an error.
 *
 * Like the GIF encoder's optimise path, each frame after the first stores only
 * the rectangle that changed, and a frame identical to the one before is
 * folded into its duration.
 */
import { I18nError } from "@/i18n/errors";
import type { FrameSource } from "@/lib/gif/frames";

export interface WebpOptions {
  /** 1 = lossless where the browser supports it; below 1 = lossy quality. */
  quality: number;
  onProgress?: (fraction: number) => void;
}

export interface WebpResult { blob: Blob; frames: number; lossless: boolean }

const enc = new TextEncoder();
const u24 = (v: number) => [v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff];

function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(8 + data.length + (data.length & 1));
  out.set(enc.encode(type), 0);
  new DataView(out.buffer).setUint32(4, data.length, true);
  out.set(data, 8);
  return out;
}

/** The image chunks of a still WebP (ALPH + VP8, or VP8L), without VP8X/ICCP/EXIF/XMP. */
function imageChunks(b: Uint8Array): Uint8Array[] {
  const out: Uint8Array[] = [];
  let p = 12;
  while (p + 8 <= b.length) {
    const type = String.fromCharCode(b[p], b[p + 1], b[p + 2], b[p + 3]);
    const n = b[p + 4] | (b[p + 5] << 8) | (b[p + 6] << 16) | (b[p + 7] << 24);
    if (type === "ALPH" || type === "VP8 " || type === "VP8L") out.push(b.subarray(p, p + 8 + n + (n & 1)));
    p += 8 + n + (n & 1);
  }
  return out;
}

/** Smallest rectangle (even x/y, as ANMF requires) holding every changed pixel, or null. */
export function changedRect(prev: Uint32Array, cur: Uint32Array, w: number, h: number) {
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) {
    const row = y * w;
    for (let x = 0; x < w; x++) {
      if (prev[row + x] !== cur[row + x]) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        y1 = y;
      }
    }
  }
  if (x1 < 0) return null;
  x0 &= ~1;
  y0 &= ~1;
  return { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

export async function framesToWebp(src: FrameSource, o: WebpOptions): Promise<WebpResult> {
  const { width: W, height: H } = src;
  const n = src.delays.length;
  const part = document.createElement("canvas");
  const pctx = part.getContext("2d");
  if (!pctx) throw new Error("Canvas is not supported in this browser.");

  const frames: { x: number; y: number; w: number; h: number; delay: number; data: Uint8Array[] }[] = [];
  let prev: Uint32Array | null = null;
  let alpha = false;
  let lossless = true;

  for (let i = 0; i < n; i++) {
    const c = await src.frame(i);
    const img = c.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, W, H);
    const cur = new Uint32Array(img.data.buffer);
    const r = prev ? changedRect(prev, cur, W, H) : { x: 0, y: 0, w: W, h: H };
    if (!r) {
      frames[frames.length - 1].delay += src.delays[i];
      o.onProgress?.((i + 1) / n);
      continue;
    }
    if (!alpha) for (let p = 3; p < img.data.length; p += 4) if (img.data[p] < 255) { alpha = true; break; }
    part.width = r.w;
    part.height = r.h;
    pctx.putImageData(img, -r.x, -r.y, r.x, r.y, r.w, r.h);
    const blob = await new Promise<Blob | null>((res) => part.toBlob(res, "image/webp", o.quality));
    if (!blob || blob.type !== "image/webp") {
      throw new I18nError("Your browser cannot save {format} images. Try Chrome, Edge or Firefox.", { format: "WEBP" });
    }
    const data = imageChunks(new Uint8Array(await blob.arrayBuffer()));
    if (!data.length) throw new Error("This WebP frame has no image data.");
    if (!data.some((d) => d[3] === 0x4c)) lossless = false; // "VP8L"
    frames.push({ ...r, delay: src.delays[i], data });
    prev = cur;
    o.onProgress?.((i + 1) / n);
  }

  // GIF counts loops after the first play; WebP counts plays. 0 = forever in both.
  const repeat = src.repeat ?? 0;
  const loops = repeat === 0 ? 0 : repeat < 0 ? 1 : Math.min(0xffff, repeat + 1);

  const vp8x = new Uint8Array(10);
  vp8x[0] = 0x02 | (alpha ? 0x10 : 0); // animation, alpha
  vp8x.set(u24(W - 1), 4);
  vp8x.set(u24(H - 1), 7);
  const anim = new Uint8Array([0, 0, 0, 0, loops & 0xff, loops >> 8]);
  const parts: Uint8Array[] = [chunk("VP8X", vp8x), chunk("ANIM", anim)];
  for (const f of frames) {
    const body = f.data.reduce((s, d) => s + d.length, 0);
    const anmf = new Uint8Array(16 + body);
    anmf.set([...u24(f.x / 2), ...u24(f.y / 2), ...u24(f.w - 1), ...u24(f.h - 1), ...u24(Math.min(0xffffff, Math.round(f.delay)))], 0);
    anmf[15] = 0x02; // do not blend: the rectangle replaces what was there; no dispose
    let w = 16;
    for (const d of f.data) { anmf.set(d, w); w += d.length; }
    parts.push(chunk("ANMF", anmf));
  }
  const size = 4 + parts.reduce((s, p) => s + p.length, 0);
  const head = new Uint8Array(12);
  head.set(enc.encode("RIFF"), 0);
  new DataView(head.buffer).setUint32(4, size, true);
  head.set(enc.encode("WEBP"), 8);
  return { blob: new Blob([head, ...parts].map((p) => p as BlobPart), { type: "image/webp" }), frames: frames.length, lossless };
}
