/**
 * Build a PDF from a list of images, entirely in the browser.
 *
 * Ported from the oMyPDF implementation, with three deliberate differences:
 *
 *  - `background` is nullable. oMyImage embeds PNGs with their alpha intact
 *    (see `ImageToPdfTool`'s `normalize`), so "no background" is a meaningful
 *    choice — the page is left unpainted and the transparency survives into the
 *    PDF instead of being flattened onto a colour the user never picked.
 *  - Layout is split out into `planPages`, a pure function over image
 *    dimensions. The on-screen preview runs the same planner as the exporter,
 *    so what the preview shows and what the PDF contains cannot drift apart.
 *  - Each slot is clipped. Under `cover` the drawn box is deliberately larger
 *    than its slot, which on a multi-up page used to spill into — and paint
 *    over — the neighbouring cells.
 */

import {
  PDFDocument,
  PageSizes,
  rgb,
  pushGraphicsState,
  popGraphicsState,
  rectangle,
  clip,
  endPath,
} from "pdf-lib";
import { brandPdf } from "./brand-metadata";

export type PageSizeKey = "fit" | "a4" | "letter" | "legal" | "a3" | "a5";
export type Orientation = "auto" | "portrait" | "landscape" | "custom";
/** What a single image may ask for when `orientation` is "custom". */
export type PerImageOrientation = "auto" | "portrait" | "landscape";
export type FitMode = "contain" | "cover" | "stretch";
export type ImagesPerPage = 1 | 2 | 4 | 6 | 9;

export interface ImageInput {
  name: string;
  /** mime type — decides embedPng vs embedJpg. */
  type: string;
  bytes: Uint8Array;
}

export interface ImagesToPdfOptions {
  pageSize: PageSizeKey;
  orientation: Orientation;
  /** Points. Also the gutter between cells on multi-up pages. */
  margin: number;
  fit: FitMode;
  /** Hex fill painted behind every page. null leaves the page unpainted. */
  background: string | null;
  imagesPerPage: ImagesPerPage;
  /** Per-image choice, used when `orientation` is "custom". Index-aligned with the images. */
  perImageOrientation?: PerImageOrientation[];
}

export interface Rect { x: number; y: number; w: number; h: number }

export interface PlannedItem {
  /** Index into the images array this box belongs to. */
  index: number;
  /** The cell this image owns. Drawing is clipped to it. */
  slot: Rect;
  /** Where the image is drawn. Larger than `slot` when fit is "cover". */
  box: Rect;
}

/**
 * One laid-out page. Coordinates are **PDF coordinates**: origin bottom-left,
 * y growing upwards. A DOM-based renderer has to flip y — see `topOf`.
 */
export interface PagePlan {
  width: number;
  height: number;
  items: PlannedItem[];
}

/** Convert a planned rect's y to a top-down (CSS) offset within its page. */
export function topOf(page: PagePlan, r: Rect): number {
  return page.height - (r.y + r.h);
}

const SIZE_MAP: Record<Exclude<PageSizeKey, "fit">, [number, number]> = {
  a4: PageSizes.A4,
  letter: PageSizes.Letter,
  legal: PageSizes.Legal,
  a3: PageSizes.A3,
  a5: PageSizes.A5,
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = hex.replace("#", "");
  const v = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const n = parseInt(v || "ffffff", 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}

async function embedImage(pdf: PDFDocument, img: ImageInput) {
  const lower = img.type.toLowerCase();
  if (lower.includes("png")) return pdf.embedPng(img.bytes);
  if (lower.includes("jpeg") || lower.includes("jpg")) return pdf.embedJpg(img.bytes);
  // Mime was empty or wrong (browsers report "" for some sources) — sniff it.
  const b = img.bytes;
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return pdf.embedPng(b);
  if (b[0] === 0xff && b[1] === 0xd8) return pdf.embedJpg(b);
  throw new Error(`Unsupported image format: ${img.name}`);
}

/**
 * Where the image sits inside one slot.
 *
 * contain → whole image visible, letterboxed. cover → slot filled, overflow
 * cropped by the caller's clip. stretch → exact fill, aspect ratio abandoned.
 */
function computeBox(
  slotW: number,
  slotH: number,
  imgW: number,
  imgH: number,
  margin: number,
  fit: FitMode
): Rect {
  const availW = Math.max(1, slotW - margin * 2);
  const availH = Math.max(1, slotH - margin * 2);
  if (fit === "stretch") return { x: margin, y: margin, w: availW, h: availH };
  const ratioImg = imgW / imgH;
  const ratioBox = availW / availH;
  let w: number;
  let h: number;
  const useWidth = fit === "contain" ? ratioImg > ratioBox : ratioImg < ratioBox;
  if (useWidth) {
    w = availW;
    h = w / ratioImg;
  } else {
    h = availH;
    w = h * ratioImg;
  }
  return { x: margin + (availW - w) / 2, y: margin + (availH - h) / 2, w, h };
}

/**
 * Columns × rows for an N-up grid page. 6-up flips to 3×2 on landscape pages
 * (2×3 on portrait) so cells keep a sensible aspect; others are fixed squares.
 */
function gridDims(n: number, landscape: boolean): { cols: number; rows: number } {
  switch (n) {
    case 4: return { cols: 2, rows: 2 };
    case 6: return landscape ? { cols: 3, rows: 2 } : { cols: 2, rows: 3 };
    case 9: return { cols: 3, rows: 3 };
    default: {
      const cols = Math.ceil(Math.sqrt(n));
      return { cols, rows: Math.ceil(n / cols) };
    }
  }
}

/**
 * Lay images out into pages without touching pdf-lib.
 *
 * Pure and synchronous, so the preview can call it on every option change.
 */
export function planPages(
  sizes: { width: number; height: number }[],
  opts: ImagesToPdfOptions
): PagePlan[] {
  const perPage = opts.imagesPerPage;
  const plans: PagePlan[] = [];

  for (let i = 0; i < sizes.length; i += perPage) {
    const slice = sizes.slice(i, i + perPage);
    let pageW: number;
    let pageH: number;

    if (opts.pageSize === "fit") {
      if (perPage === 1) {
        // The page IS the image, plus its margin — no letterboxing possible.
        pageW = slice[0].width + opts.margin * 2;
        pageH = slice[0].height + opts.margin * 2;
      } else {
        // "Fit" is meaningless once several images share a page; A4 is the
        // least surprising sheet to lay them out on.
        [pageW, pageH] = PageSizes.A4;
      }
    } else {
      [pageW, pageH] = SIZE_MAP[opts.pageSize];
    }

    // Resolve this page's orientation. On a multi-up page the first image wins,
    // since one sheet cannot face two ways.
    let effective: PerImageOrientation = "auto";
    if (opts.orientation === "portrait" || opts.orientation === "landscape") {
      effective = opts.orientation;
    } else if (opts.orientation === "custom") {
      effective = opts.perImageOrientation?.[i] ?? "auto";
    }
    if (effective === "landscape" && pageW < pageH) [pageW, pageH] = [pageH, pageW];
    if (effective === "portrait" && pageW > pageH) [pageW, pageH] = [pageH, pageW];
    // Auto only has an image to match against when one image owns the page.
    if (effective === "auto" && perPage === 1 && opts.pageSize !== "fit") {
      const img = slice[0];
      if (img.width > img.height !== pageW > pageH) [pageW, pageH] = [pageH, pageW];
    }

    let slots: Rect[];
    if (perPage === 1) {
      slots = [{ x: 0, y: 0, w: pageW, h: pageH }];
    } else if (perPage === 2) {
      // Split along the page's long axis so each half stays as square as possible.
      if (pageW >= pageH) {
        const half = pageW / 2;
        slots = [
          { x: 0, y: 0, w: half, h: pageH },
          { x: half, y: 0, w: half, h: pageH },
        ];
      } else {
        const half = pageH / 2;
        slots = [
          { x: 0, y: half, w: pageW, h: half },
          { x: 0, y: 0, w: pageW, h: half },
        ];
      }
    } else {
      // Grid layout for 4/6/9-up, filled in reading order (top-left → bottom-right).
      const { cols, rows } = gridDims(perPage, pageW >= pageH);
      const cw = pageW / cols;
      const ch = pageH / rows;
      slots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          slots.push({ x: c * cw, y: pageH - (r + 1) * ch, w: cw, h: ch });
        }
      }
    }

    const items: PlannedItem[] = slice.map((img, s) => {
      const slot = slots[s];
      const box = computeBox(slot.w, slot.h, img.width, img.height, opts.margin, opts.fit);
      return {
        index: i + s,
        slot,
        box: { x: slot.x + box.x, y: slot.y + box.y, w: box.w, h: box.h },
      };
    });

    plans.push({ width: pageW, height: pageH, items });
  }

  return plans;
}

export async function imagesToPdf(
  images: ImageInput[],
  opts: ImagesToPdfOptions
): Promise<Uint8Array> {
  if (images.length === 0) throw new Error("Add at least one image.");
  const pdf = await PDFDocument.create();
  const bg = opts.background ? hexToRgb(opts.background) : null;
  const embedded = await Promise.all(images.map((img) => embedImage(pdf, img)));
  const plans = planPages(embedded.map((e) => ({ width: e.width, height: e.height })), opts);

  for (const plan of plans) {
    const page = pdf.addPage([plan.width, plan.height]);
    if (bg) {
      page.drawRectangle({ x: 0, y: 0, width: plan.width, height: plan.height, color: rgb(bg.r, bg.g, bg.b) });
    }

    for (const item of plan.items) {
      // Clip to the slot: under "cover" the box is intentionally bigger than its
      // cell, and without this it would paint over the neighbouring images.
      page.pushOperators(
        pushGraphicsState(),
        rectangle(item.slot.x, item.slot.y, item.slot.w, item.slot.h),
        clip(),
        endPath()
      );
      page.drawImage(embedded[item.index], {
        x: item.box.x,
        y: item.box.y,
        width: item.box.w,
        height: item.box.h,
      });
      page.pushOperators(popGraphicsState());
    }
  }

  brandPdf(pdf);
  return pdf.save();
}
