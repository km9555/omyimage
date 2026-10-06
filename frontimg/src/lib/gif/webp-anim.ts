/**
 * Animated WebP → frames, in any browser that can show a still WebP.
 *
 * Browsers decode animated WebP for <img> but expose no frames, and the
 * WebCodecs ImageDecoder that would is missing from Safari. So the container
 * is parsed here: every ANMF chunk holds one frame's bitstream (VP8L, or VP8
 * with an optional ALPH chunk), which is re-wrapped as a standalone WebP and
 * decoded with createImageBitmap — the same decoder the browser already has.
 * Compositing follows the spec's per-frame blend and dispose flags.
 *
 * Layout reference: https://developers.google.com/speed/webp/docs/riff_container
 */
import { playDelay, snapshotStore, type FrameSource } from "@/lib/gif/frames";

const fourcc = (b: Uint8Array, o: number) => String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]);
const u24 = (b: Uint8Array, o: number) => b[o] | (b[o + 1] << 8) | (b[o + 2] << 16);
const u32 = (b: Uint8Array, o: number) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0;

interface Chunk { type: string; data: Uint8Array }

function chunks(b: Uint8Array, start: number, end: number): Chunk[] {
  const out: Chunk[] = [];
  let i = start;
  while (i + 8 <= end) {
    const type = fourcc(b, i);
    const len = u32(b, i + 4);
    const dataStart = i + 8;
    if (dataStart + len > end) break;
    out.push({ type, data: b.subarray(dataStart, dataStart + len) });
    i = dataStart + len + (len & 1);
  }
  return out;
}

/** A chunk as bytes: fourcc, little-endian size, payload, pad to even. */
function chunkBytes(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(8 + data.length + (data.length & 1));
  for (let k = 0; k < 4; k++) out[k] = type.charCodeAt(k);
  new DataView(out.buffer).setUint32(4, data.length, true);
  out.set(data, 8);
  return out;
}

/** One frame's bitstream as a complete, standalone .webp file. */
function standaloneWebp(frameChunks: Chunk[], w: number, h: number): Blob {
  const alph = frameChunks.find((c) => c.type === "ALPH");
  const image = frameChunks.find((c) => c.type === "VP8 " || c.type === "VP8L");
  if (!image) throw new Error("This WebP frame has no image data.");
  const parts: Uint8Array[] = [];
  if (alph && image.type === "VP8 ") {
    // Lossy with a separate alpha plane needs the extended header to say so.
    const vp8x = new Uint8Array(10);
    vp8x[0] = 0x10; // alpha flag
    vp8x[4] = (w - 1) & 0xff; vp8x[5] = ((w - 1) >> 8) & 0xff; vp8x[6] = ((w - 1) >> 16) & 0xff;
    vp8x[7] = (h - 1) & 0xff; vp8x[8] = ((h - 1) >> 8) & 0xff; vp8x[9] = ((h - 1) >> 16) & 0xff;
    parts.push(chunkBytes("VP8X", vp8x), chunkBytes("ALPH", alph.data));
  }
  parts.push(chunkBytes(image.type, image.data));
  const body = parts.reduce((n, p) => n + p.length, 0);
  const head = new Uint8Array(12);
  head.set([0x52, 0x49, 0x46, 0x46], 0); // RIFF
  new DataView(head.buffer).setUint32(4, 4 + body, true);
  head.set([0x57, 0x45, 0x42, 0x50], 8); // WEBP
  return new Blob([head as BlobPart, ...parts.map((p) => p as BlobPart)], { type: "image/webp" });
}

interface AnimFrame { x: number; y: number; w: number; h: number; delay: number; blend: boolean; dispose: boolean; file: Blob }

/** Open a WebP — animated or still — as a forward-reading frame source. */
export async function openWebp(blob: Blob): Promise<FrameSource> {
  const b = new Uint8Array(await blob.arrayBuffer());
  if (fourcc(b, 0) !== "RIFF" || fourcc(b, 8) !== "WEBP") throw new Error("This file is not a valid WebP image.");
  const top = chunks(b, 12, Math.min(b.length, 8 + u32(b, 4)));
  const vp8x = top.find((c) => c.type === "VP8X");
  const anmf = top.filter((c) => c.type === "ANMF");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");

  if (!vp8x || !anmf.length) {
    // A still WebP: one frame, decoded as a whole.
    const bmp = await createImageBitmap(blob);
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    ctx.drawImage(bmp, 0, 0);
    bmp.close();
    return { width: canvas.width, height: canvas.height, delays: [100], frame: async () => canvas };
  }

  const width = u24(vp8x.data, 4) + 1;
  const height = u24(vp8x.data, 7) + 1;
  canvas.width = width;
  canvas.height = height;

  const frames: AnimFrame[] = anmf.map((c) => {
    const d = c.data;
    const w = u24(d, 6) + 1;
    const h = u24(d, 9) + 1;
    const flags = d[15];
    return {
      x: u24(d, 0) * 2,
      y: u24(d, 3) * 2,
      w,
      h,
      delay: playDelay(u24(d, 12)),
      blend: (flags & 0x02) === 0, // bit 1 set = do NOT blend
      dispose: (flags & 0x01) === 1, // bit 0 set = dispose to background
      file: standaloneWebp(chunks(d, 16, d.length), w, h),
    };
  });

  let cursor = -1;
  // The next frame's disposal reads only `frames`, so the canvas is the whole state.
  const store = snapshotStore<null>(frames.length, width, height);
  async function frame(i: number): Promise<HTMLCanvasElement> {
    if (i < 0 || i >= frames.length) throw new Error("Frame out of range.");
    if (i < cursor) {
      const at = store.rewind(i);
      if (at) { ctx!.putImageData(at.image, 0, 0); cursor = at.cursor; }
      else { ctx!.clearRect(0, 0, width, height); cursor = -1; }
    }
    while (cursor < i) {
      if (cursor >= 0 && frames[cursor].dispose) {
        const p = frames[cursor];
        ctx!.clearRect(p.x, p.y, p.w, p.h);
      }
      cursor++;
      const f = frames[cursor];
      const bmp = await createImageBitmap(f.file);
      if (!f.blend) ctx!.clearRect(f.x, f.y, f.w, f.h);
      ctx!.drawImage(bmp, f.x, f.y);
      bmp.close();
      store.save(ctx!, cursor, null);
    }
    store.settle();
    return canvas;
  }

  return { width, height, delays: frames.map((f) => f.delay), frame };
}
