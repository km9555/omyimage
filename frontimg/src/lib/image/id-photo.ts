/**
 * Passport and ID photo layout: document sizes, face-guided cropping, a
 * 300-DPI render, and print sheets that tile copies onto 4×6 in or A4 paper.
 *
 * Geometry. MediaPipe BlazeFace (lib/image/face-detect.ts) returns a box
 * around the facial features — roughly brow to chin, ear to ear. ID rules are
 * written as the HEAD height, crown to chin, as a share of the photo height.
 * The crown sits well above the brow, so head height ≈ box height × CROWN.
 * The crop is then sized so the head fills the preset's share, centred on the
 * face horizontally, with a little more room above the head than at the sides.
 *
 * Every number here is a starting point the visitor can adjust with the zoom
 * and position controls; the tool says plainly that the office's own rules
 * decide, not this table.
 */
import { canvasToBlob } from "@/lib/image/raster";
import { setJpegDpi, mmToPx } from "@/lib/image/dpi";

export interface IdPhotoSpec {
  id: string;
  /** Width × height of the printed photo, millimetres. */
  wMm: number;
  hMm: number;
  /** Target head height (crown to chin) as a fraction of the photo height. */
  head: number;
}

/**
 * The sizes people actually search for, by market (expansion.md §5):
 * 35×45 mm (India, UK, EU, Russia…), 2×2 in (US, Indian visa/OCI), 3×4 cm
 * (Brazil and Indonesia documents), 4×6 and 2×3 cm (Indonesia pas foto),
 * 5×7 cm (Brazilian documents), 33×48 mm (China visa), 50×70 mm (Canada).
 */
export const ID_SPECS: IdPhotoSpec[] = [
  { id: "35x45", wMm: 35, hMm: 45, head: 0.7 },
  { id: "2x2in", wMm: 50.8, hMm: 50.8, head: 0.6 },
  { id: "3x4", wMm: 30, hMm: 40, head: 0.6 },
  { id: "4x6", wMm: 40, hMm: 60, head: 0.55 },
  { id: "2x3", wMm: 20, hMm: 30, head: 0.6 },
  { id: "5x7", wMm: 50, hMm: 70, head: 0.55 },
  { id: "33x48", wMm: 33, hMm: 48, head: 0.63 },
  { id: "50x70", wMm: 50, hMm: 70, head: 0.48 },
];

export const specById = (id: string) => ID_SPECS.find((s) => s.id === id) ?? ID_SPECS[0];

/** BlazeFace box height → crown-to-chin height. */
const CROWN = 1.45;
/** Share of the free vertical space that goes above the head (the rest is below). */
const TOP_SHARE = 0.38;

/** A face box in source pixels. */
export interface FaceBox { x: number; y: number; w: number; h: number }

/** Crop rectangle in source pixels (may extend past the image; the rest is filled). */
export interface CropRect { x: number; y: number; w: number; h: number }

/**
 * The crop for a spec around a detected face. `zoom` scales the head
 * (1 = the spec's share), `dx`/`dy` move the frame by a fraction of its size.
 */
export function cropForFace(face: FaceBox, spec: IdPhotoSpec, zoom = 1, dx = 0, dy = 0): CropRect {
  const headH = face.h * CROWN;
  const chinY = face.y + face.h * 1.02;
  const crownY = chinY - headH;
  const h = headH / Math.max(0.2, Math.min(0.95, spec.head * zoom));
  const w = h * (spec.wMm / spec.hMm);
  const free = h - headH;
  const cx = face.x + face.w / 2;
  return {
    x: cx - w / 2 - dx * w,
    y: crownY - free * TOP_SHARE - dy * h,
    w,
    h,
  };
}

/** A centred crop when no face was found, at the spec's aspect ratio. */
export function centredCrop(imgW: number, imgH: number, spec: IdPhotoSpec, zoom = 1, dx = 0, dy = 0): CropRect {
  const aspect = spec.wMm / spec.hMm;
  let h = imgH / Math.max(0.5, zoom);
  let w = h * aspect;
  if (w > imgW / Math.max(0.5, zoom)) {
    w = imgW / Math.max(0.5, zoom);
    h = w / aspect;
  }
  return { x: (imgW - w) / 2 - dx * w, y: (imgH - h) / 2 - dy * h, w, h };
}

/**
 * Slide a crop back inside the image on each axis where it fits, so no blank
 * fill shows — used while the original background is kept (a new background
 * colour fills any gap seamlessly instead). An axis the crop is larger than
 * stays as it was.
 */
export function clampCrop(crop: CropRect, imgW: number, imgH: number): CropRect {
  const fit = (pos: number, size: number, max: number) => (size > max ? pos : Math.min(Math.max(pos, 0), max - size));
  return { ...crop, x: fit(crop.x, crop.w, imgW), y: fit(crop.y, crop.h, imgH) };
}

/** Draw `crop` of `src` into a new canvas at the spec's size and `dpi`. */
export function renderIdPhoto(
  src: CanvasImageSource & { width: number; height: number },
  crop: CropRect,
  spec: IdPhotoSpec,
  dpi: number,
  background: string,
): HTMLCanvasElement {
  const W = mmToPx(spec.wMm, dpi);
  const H = mmToPx(spec.hMm, dpi);
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("Could not create a canvas.");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, W, H);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const s = W / crop.w;
  ctx.drawImage(src, -crop.x * s, -crop.y * s, src.width * s, src.height * s);
  return c;
}

/** Paper sizes for print sheets, millimetres (portrait). */
export const PAPERS = {
  "4x6": { wMm: 101.6, hMm: 152.4 },
  a4: { wMm: 210, hMm: 297 },
} as const;
export type PaperId = keyof typeof PAPERS;

/**
 * Tile copies of `photo` onto a sheet with 2 mm gaps and thin grey cut marks
 * between them. Chooses the orientation that fits more copies.
 */
export function renderSheet(photo: HTMLCanvasElement, spec: IdPhotoSpec, paper: PaperId, dpi: number): { canvas: HTMLCanvasElement; copies: number } {
  const gap = 2;
  const margin = 4;
  const fit = (pw: number, ph: number) => ({
    cols: Math.max(0, Math.floor((pw - 2 * margin + gap) / (spec.wMm + gap))),
    rows: Math.max(0, Math.floor((ph - 2 * margin + gap) / (spec.hMm + gap))),
  });
  const p = PAPERS[paper];
  const portrait = fit(p.wMm, p.hMm);
  const landscape = fit(p.hMm, p.wMm);
  const useLandscape = landscape.cols * landscape.rows > portrait.cols * portrait.rows;
  const { cols, rows } = useLandscape ? landscape : portrait;
  const pw = useLandscape ? p.hMm : p.wMm;
  const ph = useLandscape ? p.wMm : p.hMm;

  const c = document.createElement("canvas");
  c.width = mmToPx(pw, dpi);
  c.height = mmToPx(ph, dpi);
  const ctx = c.getContext("2d");
  if (!ctx) throw new Error("Could not create a canvas.");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, c.width, c.height);
  const gridW = cols * spec.wMm + (cols - 1) * gap;
  const gridH = rows * spec.hMm + (rows - 1) * gap;
  const ox = (pw - gridW) / 2;
  const oy = (ph - gridH) / 2;
  ctx.strokeStyle = "#c8c8c8";
  ctx.lineWidth = Math.max(1, Math.round(dpi / 300));
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const x = mmToPx(ox + col * (spec.wMm + gap), dpi);
      const y = mmToPx(oy + r * (spec.hMm + gap), dpi);
      ctx.drawImage(photo, x, y, mmToPx(spec.wMm, dpi), mmToPx(spec.hMm, dpi));
      ctx.strokeRect(x - 0.5, y - 0.5, mmToPx(spec.wMm, dpi) + 1, mmToPx(spec.hMm, dpi) + 1);
    }
  }
  return { canvas: c, copies: cols * rows };
}

/** Canvas → JPEG labelled with `dpi`, so it prints at the document's real size. */
export async function jpegAtDpi(canvas: HTMLCanvasElement, dpi: number, quality = 0.95): Promise<Blob> {
  return setJpegDpi(await canvasToBlob(canvas, "image/jpeg", quality), dpi);
}
