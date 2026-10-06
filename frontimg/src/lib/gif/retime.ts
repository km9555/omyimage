/**
 * Changing how fast a GIF plays.
 *
 * Speed lives only in each frame's Graphic Control Extension (a delay in
 * hundredths of a second), so when every new delay is one a browser will
 * honour, the file is rewritten in place: same pixels, same size, done in
 * milliseconds. Browsers play delays of 0.01 s or less at 0.1 s, so speeding
 * up past 0.02 s per frame would make the GIF SLOWER — those frames are
 * merged instead (`speedPlan`), which needs a re-encode.
 */
import type { PlannedFrame } from "@/lib/gif/reencode";

/** Shortest delay browsers play as written, in milliseconds. */
export const MIN_DELAY = 20;

/**
 * Frames and delays for playing `delays` (ms, as shown) `speed` times as
 * fast. Frame boundaries are rounded to whole hundredths on the scaled
 * timeline, so rounding never drifts the total. Frames that would be shorter
 * than MIN_DELAY are grouped until the group is long enough, and the group
 * shows its first frame — the same rule as keepEveryPlan.
 */
export function speedPlan(delays: number[], speed: number): PlannedFrame[] {
  const plan: PlannedFrame[] = [];
  let t = 0;
  let prevEdge = 0;
  let start = -1;
  for (let i = 0; i < delays.length; i++) {
    if (start < 0) start = i;
    t += delays[i];
    const edge = Math.round(t / speed / 10) * 10;
    if (edge - prevEdge >= MIN_DELAY) {
      plan.push({ index: start, delay: edge - prevEdge });
      prevEdge = edge;
      start = -1;
    }
  }
  if (start >= 0) {
    // A tail too short to stand alone joins the last frame.
    const rest = Math.round(t / speed / 10) * 10 - prevEdge;
    if (plan.length) plan[plan.length - 1].delay += rest;
    else plan.push({ index: start, delay: Math.max(MIN_DELAY, rest) });
  }
  return plan;
}

/** The same delay for every frame, rounded to what GIF can store. */
export function fixedPlan(count: number, ms: number): PlannedFrame[] {
  const d = Math.max(MIN_DELAY, Math.round(ms / 10) * 10);
  return Array.from({ length: count }, (_, index) => ({ index, delay: d }));
}

/** Whether a plan keeps every frame in order, so only delays change. */
export const isRetimeOnly = (plan: PlannedFrame[], count: number) =>
  plan.length === count && plan.every((p, i) => p.index === i);

/**
 * Rewrite a GIF's frame delays without touching its image data. `delays` is
 * in milliseconds, one per image in the file. A frame without a Graphic
 * Control Extension gets one, and a GIF87a header becomes GIF89a, the version
 * that has them.
 */
export function setGifDelays(bytes: Uint8Array, delays: number[]): Uint8Array {
  const sig = String.fromCharCode(...bytes.subarray(0, 6));
  if (sig !== "GIF87a" && sig !== "GIF89a") throw new Error("This file is not a valid GIF.");
  const parts: Uint8Array[] = [];
  const out = bytes.slice();
  out.set([0x38, 0x39, 0x61], 3); // "89a"
  let from = 0;
  let pos = 13;
  if (bytes[10] & 0x80) pos += 3 << ((bytes[10] & 7) + 1);
  let gce = -1;
  let frame = 0;

  const skipSubBlocks = (p: number) => {
    while (p < bytes.length && bytes[p] !== 0) p += bytes[p] + 1;
    return p + 1;
  };
  const cs = (ms: number) => Math.max(0, Math.min(0xffff, Math.round(ms / 10)));

  while (pos < bytes.length) {
    const b = bytes[pos];
    if (b === 0x3b) break; // trailer
    if (b === 0x21) {
      if (bytes[pos + 1] === 0xf9) gce = pos;
      pos = skipSubBlocks(pos + 2);
    } else if (b === 0x2c) {
      if (frame < delays.length) {
        const d = cs(delays[frame]);
        if (gce >= 0) {
          out[gce + 4] = d & 0xff;
          out[gce + 5] = d >> 8;
        } else {
          parts.push(out.subarray(from, pos), new Uint8Array([0x21, 0xf9, 0x04, 0x00, d & 0xff, d >> 8, 0x00, 0x00]));
          from = pos;
        }
      }
      frame++;
      gce = -1;
      const packed = bytes[pos + 9];
      pos += 10;
      if (packed & 0x80) pos += 3 << ((packed & 7) + 1);
      pos = skipSubBlocks(pos + 1); // LZW minimum code size, then the data
    } else {
      throw new Error("This file is not a valid GIF.");
    }
  }
  if (!parts.length) return out;
  parts.push(out.subarray(from));
  const joined = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let w = 0;
  for (const p of parts) { joined.set(p, w); w += p.length; }
  return joined;
}
