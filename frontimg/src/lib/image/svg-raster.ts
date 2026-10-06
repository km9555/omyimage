/**
 * SVG → canvas, at any size, in the browser.
 *
 * The SVG is drawn through an <img>, which is the browser's own sandbox for
 * untrusted SVG: scripts never run and nothing outside the file is fetched
 * (linked images, web fonts and CSS @imports simply do not load — only what
 * is embedded in the file renders).
 *
 * Sharpness comes from re-sizing the DOCUMENT, not the bitmap: the root
 * element gets the target width/height before it is drawn, so the browser
 * rasterizes the vectors at the output resolution. Scaling a default-size
 * rendering up afterwards would give a blurry PNG — the very thing people
 * convert SVG to PNG at 2× or 4× to avoid.
 */
import { canBrowserHandlePixels } from "@/lib/process-router";

export interface SvgSource {
  /** Serialized root, with an explicit viewBox so it can be resized. */
  markup: string;
  /** Intrinsic size in CSS pixels. */
  width: number;
  height: number;
  /** False when the file had neither a usable width/height nor a viewBox. */
  sized: boolean;
}

/** Longest output side. Past this, canvases fail silently on many phones. */
export const SVG_MAX_SIDE = 8192;

const UNIT_PX: Record<string, number> = {
  "": 1, px: 1, pt: 96 / 72, pc: 16, in: 96, cm: 96 / 2.54, mm: 96 / 25.4, q: 96 / 101.6, em: 16, rem: 16,
};

/** A width/height attribute in CSS pixels, or null for "%", "auto" or junk. */
function lengthPx(value: string | null): number | null {
  if (!value) return null;
  const m = /^\s*([0-9]*\.?[0-9]+(?:e[-+]?\d+)?)\s*([a-z]*)\s*$/i.exec(value);
  if (!m) return null;
  const k = UNIT_PX[m[2].toLowerCase()];
  const n = parseFloat(m[1]) * (k ?? NaN);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function isSvgFile(file: File): boolean {
  return file.type === "image/svg+xml" || /\.svgz?$/i.test(file.name);
}

/** Parse an SVG file and work out its intrinsic size. Throws on non-SVG XML. */
export async function readSvg(file: File): Promise<SvgSource> {
  const text = await file.text();
  const doc = new DOMParser().parseFromString(text, "image/svg+xml");
  const root = doc.documentElement;
  if (!root || root.nodeName.toLowerCase() !== "svg" || doc.getElementsByTagName("parsererror").length) {
    throw new Error("This file is not a valid SVG.");
  }
  if (!root.getAttribute("xmlns")) root.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  const vb = (root.getAttribute("viewBox") ?? "").trim().split(/[\s,]+/).map(Number);
  const hasVb = vb.length === 4 && vb.every(Number.isFinite) && vb[2] > 0 && vb[3] > 0;
  const aw = lengthPx(root.getAttribute("width"));
  const ah = lengthPx(root.getAttribute("height"));

  let width: number;
  let height: number;
  let sized = true;
  if (aw && ah) { width = aw; height = ah; }
  else if (hasVb) {
    const ratio = vb[2] / vb[3];
    if (aw) { width = aw; height = aw / ratio; }
    else if (ah) { height = ah; width = ah * ratio; }
    else { width = vb[2]; height = vb[3]; }
  } else {
    // The CSS default for a replaced element with no size at all.
    width = 300; height = 150; sized = false;
  }

  // Without a viewBox, changing width/height would crop or pad the drawing
  // instead of scaling it; give it one that matches the original canvas.
  if (!hasVb) root.setAttribute("viewBox", `0 0 ${aw ?? width} ${ah ?? height}`);
  return { markup: new XMLSerializer().serializeToString(root), width, height, sized };
}

/** Output size for a scale factor or a target width, kept within limits. */
export function svgOutputSize(src: SvgSource, opts: { scale?: number; width?: number }): { w: number; h: number } {
  let w = opts.width ? opts.width : src.width * (opts.scale ?? 1);
  let h = (w / src.width) * src.height;
  const over = Math.max(w, h) / SVG_MAX_SIDE;
  if (over > 1) { w /= over; h /= over; }
  return { w: Math.max(1, Math.round(w)), h: Math.max(1, Math.round(h)) };
}

/**
 * Draw the SVG at exactly w × h. `background` fills behind it (omit for
 * transparency). Throws a readable error when the browser refuses to export
 * the result (an SVG with embedded HTML taints the canvas in some browsers).
 */
export async function rasterizeSvg(src: SvgSource, w: number, h: number, background?: string): Promise<HTMLCanvasElement> {
  if (!canBrowserHandlePixels(w * h)) throw new Error("This size is too large for your browser — try a smaller scale.");
  const doc = new DOMParser().parseFromString(src.markup, "image/svg+xml");
  const root = doc.documentElement;
  root.setAttribute("width", String(w));
  root.setAttribute("height", String(h));
  const blob = new Blob([new XMLSerializer().serializeToString(root)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    try {
      await img.decode();
    } catch {
      throw new Error("This SVG could not be drawn. It may use features browsers do not render as an image.");
    }
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not export the image.");
    if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, w, h); }
    ctx.drawImage(img, 0, 0, w, h);
    try {
      ctx.getImageData(0, 0, 1, 1);
    } catch {
      throw new Error("Your browser blocks exporting this SVG because it contains embedded HTML.");
    }
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}
