/**
 * In-browser inpainting for /remove-object and /remove-watermark: MI-GAN
 * (Picsart AI Research, ICCV 2023 — MIT for code and weights) run by ONNX
 * Runtime Web on the CPU. Nothing leaves the device.
 *
 * The model is the authors' `migan_pipeline_v2.onnx`
 * (huggingface.co/andraniksargsyan/migan). It takes the whole picture —
 * `image` uint8 [1,3,H,W] RGB and `mask` uint8 [1,1,H,W] where **0 marks the
 * pixels to fill** and 255 keeps them — crops around the hole, runs the 512 px
 * generator, and pastes the result back blended. Pixels outside the hole come
 * back unchanged. About a second on a laptop CPU at any image size.
 *
 * It is 28,079,181 bytes, over Cloudflare Pages' 25 MiB per-file limit, so it
 * is served from our origin in two parts and joined here; the SHA-256 of the
 * joined bytes is checked before use.
 *
 * Separate marks are filled one region at a time (`markRegions`): the pipeline
 * crops to the bounding box of ALL holes, so two small marks in opposite
 * corners would otherwise be filled from one image-wide crop shrunk to 512 px.
 */
import type * as Ort from "onnxruntime-web";
import { I18nError } from "@/i18n/errors";

/** Must equal the installed onnxruntime-web — scripts/copy-ort.mjs checks it. */
export const ORT_VERSION = "1.30.0";
const ORT_DIR = `/ort/${ORT_VERSION}/`;

export const MODEL = {
  parts: [
    { url: "/models/migan_pipeline_v2.6f1f3530.part1.bin", bytes: 14_000_000 },
    { url: "/models/migan_pipeline_v2.6f1f3530.part2.bin", bytes: 14_079_181 },
  ],
  bytes: 28_079_181,
  sha256: "6f1f3530a1a2324b19752018ce756088b07973cda8d7d890034ace5c8a48c40b",
} as const;

/** Bigger pictures are worked on scaled down to this many pixels (16.7 MP — iOS Safari's canvas ceiling). */
export const MAX_PIXELS = 4096 * 4096;

type OrtModule = typeof Ort;
let ortPromise: Promise<OrtModule> | null = null;

/** ONNX Runtime from our own origin, outside the bundle (see scripts/copy-ort.mjs). */
function loadOrt(): Promise<OrtModule> {
  ortPromise ??= (async () => {
    const url = `${ORT_DIR}ort.wasm.min.mjs`;
    const ort = (await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ url)) as OrtModule;
    ort.env.wasm.wasmPaths = ORT_DIR;
    // One thread: several need cross-origin isolation (COOP/COEP headers),
    // which would break the Google Drive picker and sign-in popups. MI-GAN is
    // small enough not to need them. The proxy runs inference in ORT's own
    // worker so the page keeps responding.
    ort.env.wasm.numThreads = 1;
    ort.env.wasm.proxy = true;
    return ort;
  })();
  ortPromise.catch(() => { ortPromise = null; });
  return ortPromise;
}

export type LoadProgress = { loaded: number; total: number };
const listeners = new Set<(p: LoadProgress) => void>();
let lastProgress: LoadProgress = { loaded: 0, total: MODEL.bytes };
let sessionPromise: Promise<Ort.InferenceSession> | null = null;

async function fetchModel(): Promise<Uint8Array> {
  const buf = new Uint8Array(MODEL.bytes);
  const got = MODEL.parts.map(() => 0);
  const report = () => {
    lastProgress = { loaded: got.reduce((a, b) => a + b, 0), total: MODEL.bytes };
    listeners.forEach((l) => l(lastProgress));
  };
  let offset = 0;
  await Promise.all(
    MODEL.parts.map(async (part, i) => {
      const start = offset;
      offset += part.bytes;
      const res = await fetch(part.url);
      if (!res.ok || !res.body) throw new I18nError("The AI model could not be downloaded. Check your connection and try again.");
      const reader = res.body.getReader();
      let at = start;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        if (at + value.length > start + part.bytes) throw new I18nError("The AI model could not be downloaded. Check your connection and try again.");
        buf.set(value, at);
        at += value.length;
        got[i] = at - start;
        report();
      }
      if (at - start !== part.bytes) throw new I18nError("The AI model could not be downloaded. Check your connection and try again.");
    }),
  );
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", buf));
  const hex = Array.from(digest, (b) => b.toString(16).padStart(2, "0")).join("");
  if (hex !== MODEL.sha256) throw new I18nError("The AI model could not be downloaded. Check your connection and try again.");
  return buf;
}

/**
 * Start (or join) loading the runtime and the model. Safe to call many times;
 * a failed load is forgotten so the next call retries.
 */
export function loadInpainter(onProgress?: (p: LoadProgress) => void): Promise<Ort.InferenceSession> {
  if (onProgress) {
    listeners.add(onProgress);
    onProgress(lastProgress);
  }
  if (!sessionPromise) {
    sessionPromise = (async () => {
      const [ort, model] = await Promise.all([loadOrt(), fetchModel()]);
      return ort.InferenceSession.create(model, { executionProviders: ["wasm"] });
    })();
    sessionPromise.catch(() => { sessionPromise = null; });
  }
  const p = sessionPromise;
  if (onProgress) p.finally(() => listeners.delete(onProgress)).catch(() => {});
  return p;
}

export interface Region { x: number; y: number; w: number; h: number }

/**
 * Group the marked pixels (`mask[i] !== 0`) into regions to fill one at a
 * time: connected marks on a 16 px grid, each box grown by context around it
 * (¾ of its longer side, at least 48 px), and boxes that then overlap merged.
 */
export function markRegions(mask: Uint8Array, W: number, H: number): Region[] {
  const CELL = 16;
  const gw = Math.ceil(W / CELL);
  const gh = Math.ceil(H / CELL);
  const grid = new Uint8Array(gw * gh);
  for (let y = 0; y < H; y++) {
    const row = y * W;
    const g = ((y / CELL) | 0) * gw;
    for (let x = 0; x < W; x++) if (mask[row + x]) grid[g + ((x / CELL) | 0)] = 1;
  }
  // Connected cells (8-neighbour) → pixel boxes.
  const seen = new Uint8Array(gw * gh);
  const stack: number[] = [];
  let boxes: Region[] = [];
  for (let s = 0; s < grid.length; s++) {
    if (!grid[s] || seen[s]) continue;
    let x0 = gw, y0 = gh, x1 = 0, y1 = 0;
    seen[s] = 1;
    stack.push(s);
    while (stack.length) {
      const c = stack.pop()!;
      const cx = c % gw;
      const cy = (c / gw) | 0;
      if (cx < x0) x0 = cx;
      if (cx > x1) x1 = cx;
      if (cy < y0) y0 = cy;
      if (cy > y1) y1 = cy;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
          const n = ny * gw + nx;
          if (grid[n] && !seen[n]) { seen[n] = 1; stack.push(n); }
        }
      }
    }
    const bx = x0 * CELL, by = y0 * CELL;
    const bw = Math.min(W, (x1 + 1) * CELL) - bx;
    const bh = Math.min(H, (y1 + 1) * CELL) - by;
    const m = Math.max(48, Math.round(Math.max(bw, bh) * 0.75));
    const x = Math.max(0, bx - m), y = Math.max(0, by - m);
    boxes.push({ x, y, w: Math.min(W, bx + bw + m) - x, h: Math.min(H, by + bh + m) - y });
  }
  // Merge overlapping boxes until none overlap.
  for (let merged = true; merged; ) {
    merged = false;
    const out: Region[] = [];
    for (const b of boxes) {
      const o = out.find((a) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h);
      if (!o) { out.push({ ...b }); continue; }
      const x = Math.min(o.x, b.x), y = Math.min(o.y, b.y);
      o.w = Math.max(o.x + o.w, b.x + b.w) - x;
      o.h = Math.max(o.y + o.h, b.y + b.h) - y;
      o.x = x;
      o.y = y;
      merged = true;
    }
    boxes = out;
  }
  return boxes;
}

/** Grow the marks by `r` px (a separable running-window max) so object edges and halos are covered. */
function dilate(m: Uint8Array, w: number, h: number, r: number): Uint8Array {
  if (r <= 0) return m;
  const tmp = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    const row = y * w;
    let count = 0;
    for (let x = 0; x < Math.min(r, w); x++) count += m[row + x] ? 1 : 0;
    for (let x = 0; x < w; x++) {
      if (x + r < w && m[row + x + r]) count++;
      if (x - r - 1 >= 0 && m[row + x - r - 1]) count--;
      tmp[row + x] = count > 0 ? 1 : 0;
    }
  }
  const out = new Uint8Array(w * h);
  for (let x = 0; x < w; x++) {
    let count = 0;
    for (let y = 0; y < Math.min(r, h); y++) count += tmp[y * w + x];
    for (let y = 0; y < h; y++) {
      if (y + r < h && tmp[(y + r) * w + x]) count++;
      if (y - r - 1 >= 0 && tmp[(y - r - 1) * w + x]) count--;
      out[y * w + x] = count > 0 ? 1 : 0;
    }
  }
  return out;
}

/** A changed rectangle, kept for undo and redo. */
export interface Patch { x: number; y: number; before: ImageData; after: ImageData }

/**
 * Fill every marked pixel of the picture on `ctx` (W × H) and return the
 * changed rectangles. `mask[i] !== 0` marks pixel i for removal.
 */
export async function fillMarked(ctx: CanvasRenderingContext2D, mask: Uint8Array, W: number, H: number): Promise<Patch[]> {
  const session = await loadInpainter();
  const ort = await loadOrt();
  // Grow marks a little — about 0.4 % of the shorter side, 2 to 15 px.
  const r = Math.min(15, Math.max(2, Math.round(Math.min(W, H) * 0.004)));
  const patches: Patch[] = [];
  for (const reg of markRegions(mask, W, H)) {
    const { x, y, w, h } = reg;
    const crop = new Uint8Array(w * h);
    for (let j = 0; j < h; j++) crop.set(mask.subarray((y + j) * W + x, (y + j) * W + x + w), j * w);
    const hole = dilate(crop, w, h, r);
    const before = ctx.getImageData(x, y, w, h);
    const n = w * h;
    const planar = new Uint8Array(3 * n);
    const keep = new Uint8Array(n);
    const px = before.data;
    for (let i = 0; i < n; i++) {
      planar[i] = px[i * 4];
      planar[n + i] = px[i * 4 + 1];
      planar[2 * n + i] = px[i * 4 + 2];
      keep[i] = hole[i] ? 0 : 255;
    }
    const out = await session.run({
      image: new ort.Tensor("uint8", planar, [1, 3, h, w]),
      mask: new ort.Tensor("uint8", keep, [1, 1, h, w]),
    });
    const res = out[session.outputNames[0]].data as Uint8Array;
    const after = new ImageData(new Uint8ClampedArray(px), w, h);
    const a = after.data;
    for (let i = 0; i < n; i++) {
      if (!hole[i]) continue;
      a[i * 4] = res[i];
      a[i * 4 + 1] = res[n + i];
      a[i * 4 + 2] = res[2 * n + i];
      // Alpha stays as it was: a hole in a transparent area stays transparent.
    }
    ctx.putImageData(after, x, y);
    patches.push({ x, y, before, after });
  }
  return patches;
}
