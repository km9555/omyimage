/**
 * Animated PNG (APNG) from a FrameSource, written from scratch: PNG chunks,
 * CRC-32 and scanline filters here, zlib from the browser's CompressionStream
 * ("deflate" is the zlib format PNG needs). No dependency.
 *
 * When every frame's colours fit in 256 palette entries — almost always, for
 * a GIF — the APNG is indexed (colour type 3) with transparency in tRNS, so
 * each pixel is one byte, as in the GIF, and DEFLATE usually beats GIF's LZW.
 * Otherwise it is 8-bit RGBA. Frames after the first store only the
 * rectangle that changed; a frame identical to the one before is folded into
 * its delay.
 */
import { changedRect } from "@/lib/gif/to-webp";
import type { FrameSource } from "@/lib/gif/frames";

export interface ApngResult { blob: Blob; frames: number; indexed: boolean }

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes: Uint8Array, start: number, end: number): number {
  let c = 0xffffffff;
  for (let i = start; i < end; i++) c = CRC[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type: string, data: Uint8Array): Uint8Array {
  const out = new Uint8Array(12 + data.length);
  const view = new DataView(out.buffer);
  view.setUint32(0, data.length);
  for (let i = 0; i < 4; i++) out[4 + i] = type.charCodeAt(i);
  out.set(data, 8);
  view.setUint32(8 + data.length, crc32(out, 4, 8 + data.length));
  return out;
}

const be32 = (v: number) => [(v >>> 24) & 0xff, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff];
const be16 = (v: number) => [(v >>> 8) & 0xff, v & 0xff];

async function zlib(data: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([data as BlobPart]).stream().pipeThrough(new CompressionStream("deflate"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/**
 * Filtered scanlines of a w × h region. Palette images are left unfiltered,
 * as the PNG spec recommends; RGBA rows each take the filter with the
 * smallest sum of absolute values, the usual heuristic.
 */
function scanlines(px: Uint8Array, w: number, h: number, bpp: number): Uint8Array {
  const stride = w * bpp;
  const out = new Uint8Array(h * (stride + 1));
  const trial = bpp === 1 ? null : Array.from({ length: 5 }, () => new Uint8Array(stride));
  for (let y = 0; y < h; y++) {
    const row = px.subarray(y * stride, (y + 1) * stride);
    const o = y * (stride + 1);
    if (!trial) { out[o] = 0; out.set(row, o + 1); continue; }
    const up = y > 0 ? px.subarray((y - 1) * stride, y * stride) : null;
    let best = 0;
    let bestSum = Infinity;
    for (let f = 0; f < 5; f++) {
      const t = trial[f];
      let sum = 0;
      for (let i = 0; i < stride; i++) {
        const a = i >= bpp ? row[i - bpp] : 0;
        const b = up ? up[i] : 0;
        const c = up && i >= bpp ? up[i - bpp] : 0;
        let pred = 0;
        if (f === 1) pred = a;
        else if (f === 2) pred = b;
        else if (f === 3) pred = (a + b) >> 1;
        else if (f === 4) {
          const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
          pred = pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
        }
        const v = (row[i] - pred) & 0xff;
        t[i] = v;
        sum += v < 128 ? v : 256 - v;
      }
      if (sum < bestSum) { bestSum = sum; best = f; }
    }
    out[o] = best;
    out.set(trial[best], o + 1);
  }
  return out;
}

export async function framesToApng(src: FrameSource, onProgress?: (fraction: number) => void): Promise<ApngResult> {
  const { width: W, height: H } = src;
  const n = src.delays.length;
  const read = async (i: number) => {
    const c = await src.frame(i);
    return c.getContext("2d", { willReadFrequently: true })!.getImageData(0, 0, W, H).data;
  };

  // Pass 1: the palette, if one fits. Index 0 is transparent when any pixel is.
  const index = new Map<number, number>();
  let transparent = false;
  let fits = true;
  for (let i = 0; i < n && fits; i++) {
    const d = await read(i);
    for (let p = 0; p < d.length; p += 4) {
      if (d[p + 3] < 128) { transparent = true; continue; }
      const c = (d[p] << 16) | (d[p + 1] << 8) | d[p + 2];
      if (!index.has(c)) {
        index.set(c, index.size);
        if (index.size > 256) { fits = false; break; }
      }
    }
    onProgress?.(((i + 1) / n) * 0.3);
  }
  const indexed = fits && index.size + (transparent ? 1 : 0) <= 256;
  const shift = transparent ? 1 : 0;
  const bpp = indexed ? 1 : 4;

  const toPixels = (d: Uint8ClampedArray, r: { x: number; y: number; w: number; h: number }) => {
    const out = new Uint8Array(r.w * r.h * bpp);
    let o = 0;
    for (let y = r.y; y < r.y + r.h; y++) {
      for (let x = r.x; x < r.x + r.w; x++) {
        const s = (y * W + x) * 4;
        if (indexed) {
          out[o++] = d[s + 3] < 128 ? 0 : index.get((d[s] << 16) | (d[s + 1] << 8) | d[s + 2])! + shift;
        } else {
          out[o++] = d[s]; out[o++] = d[s + 1]; out[o++] = d[s + 2]; out[o++] = d[s + 3];
        }
      }
    }
    return out;
  };

  // Pass 2: frames, as changed rectangles.
  const frames: { x: number; y: number; w: number; h: number; delay: number; data: Uint8Array }[] = [];
  let prev: Uint32Array | null = null;
  for (let i = 0; i < n; i++) {
    const d = await read(i);
    const cur = new Uint32Array(d.buffer);
    const r = prev ? changedRect(prev, cur, W, H) : { x: 0, y: 0, w: W, h: H };
    if (!r) { frames[frames.length - 1].delay += src.delays[i]; }
    else {
      frames.push({ ...r, delay: src.delays[i], data: await zlib(scanlines(toPixels(d, r), r.w, r.h, bpp)) });
      prev = cur;
    }
    onProgress?.(0.3 + ((i + 1) / n) * 0.7);
  }

  // GIF counts loops after the first play; APNG counts plays. 0 = forever in both.
  const repeat = src.repeat ?? 0;
  const plays = repeat === 0 ? 0 : repeat < 0 ? 1 : repeat + 1;

  const parts: Uint8Array[] = [new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])];
  parts.push(chunk("IHDR", new Uint8Array([...be32(W), ...be32(H), 8, indexed ? 3 : 6, 0, 0, 0])));
  if (indexed) {
    const plte = new Uint8Array((index.size + shift) * 3);
    for (const [c, k] of index) plte.set([(c >> 16) & 0xff, (c >> 8) & 0xff, c & 0xff], (k + shift) * 3);
    parts.push(chunk("PLTE", plte));
    if (transparent) parts.push(chunk("tRNS", new Uint8Array([0])));
  }
  parts.push(chunk("acTL", new Uint8Array([...be32(frames.length), ...be32(plays)])));
  let seq = 0;
  frames.forEach((f, k) => {
    // Delays over 65.535 s fall back to hundredths, which GIF uses anyway.
    const [num, den] = f.delay <= 0xffff ? [Math.round(f.delay), 1000] : [Math.round(f.delay / 10), 100];
    parts.push(chunk("fcTL", new Uint8Array([
      ...be32(seq++), ...be32(f.w), ...be32(f.h), ...be32(f.x), ...be32(f.y),
      ...be16(num), ...be16(den), 0 /* dispose: none */, 0 /* blend: source */,
    ])));
    if (k === 0) parts.push(chunk("IDAT", f.data));
    else {
      const fd = new Uint8Array(4 + f.data.length);
      fd.set(be32(seq++), 0);
      fd.set(f.data, 4);
      parts.push(chunk("fdAT", fd));
    }
  });
  parts.push(chunk("IEND", new Uint8Array(0)));
  return { blob: new Blob(parts.map((p) => p as BlobPart), { type: "image/png" }), frames: frames.length, indexed };
}
