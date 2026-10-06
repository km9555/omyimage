/**
 * Several animations played one after another, as one FrameSource, so the
 * GIF merger can hand the result straight to reencodeAsGif.
 */
import { fitBox } from "@/lib/image/gif-encode";
import type { FrameSource } from "@/lib/gif/frames";

export type MergeFit = "contain" | "cover";

export interface MergeOptions {
  width: number;
  height: number;
  /** contain = whole frame visible, with borders; cover = fill and crop. */
  fit: MergeFit;
  /** Fill behind each frame, or null to leave borders transparent. */
  background: string | null;
}

export function concatSources(sources: FrameSource[], o: MergeOptions): FrameSource {
  const map: [number, number][] = [];
  const delays: number[] = [];
  sources.forEach((s, si) => s.delays.forEach((d, k) => { map.push([si, k]); delays.push(d); }));

  const canvas = document.createElement("canvas");
  canvas.width = o.width;
  canvas.height = o.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");

  async function frame(i: number): Promise<HTMLCanvasElement> {
    const [si, k] = map[i];
    const s = sources[si];
    const f = await s.frame(k);
    ctx!.clearRect(0, 0, o.width, o.height);
    if (o.background) { ctx!.fillStyle = o.background; ctx!.fillRect(0, 0, o.width, o.height); }
    const b = fitBox(o.width, o.height, s.width, s.height, o.fit);
    const x = Math.round(b.x), y = Math.round(b.y), w = Math.round(b.w), h = Math.round(b.h);
    // A GIF already at the output size is copied pixel for pixel.
    ctx!.imageSmoothingEnabled = w !== s.width || h !== s.height;
    ctx!.imageSmoothingQuality = "high";
    ctx!.drawImage(f, x, y, w, h);
    return canvas;
  }

  return { width: o.width, height: o.height, delays, frame, repeat: 0 };
}
