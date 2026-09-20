/**
 * The framing engine behind /add-border.
 *
 * The tool used to paint one solid rectangle behind the image. A frame that
 * people actually want is layered: an outer border with a style, an optional
 * inner mat, a target aspect ratio the photo has to sit inside, and sometimes a
 * caption below. Those interact — the mat eats into the border, the caption
 * deepens the bottom, the ratio grows whichever side is short — so the geometry
 * is worked out once here and the tool only supplies numbers.
 *
 * Pure canvas drawing, no pixel loops, so the live preview keeps up with a
 * slider drag.
 */

export type BorderStyle = "solid" | "double" | "dashed" | "dotted" | "groove" | "ridge" | "none";

export const BORDER_STYLES: { value: BorderStyle; label: string }[] = [
  { value: "solid", label: "Solid" },
  { value: "double", label: "Double line" },
  { value: "dashed", label: "Dashed" },
  { value: "dotted", label: "Dotted" },
  { value: "groove", label: "Groove" },
  { value: "ridge", label: "Ridge" },
  { value: "none", label: "None" },
];

export interface MatOptions {
  /** Width as a percentage of the image's shortest side. */
  width: number;
  color: string;
}

export interface CaptionOptions {
  text: string;
  /** Height as a percentage of the image's shortest side. */
  size: number;
  color: string;
}

export interface FrameOptions {
  /** Outer border, as a percentage of the image's shortest side. */
  thickness: number;
  color: string;
  style: BorderStyle;
  /** Rounding of the image's own corners, as a percentage of its shortest side. */
  radius: number;
  mat?: MatOptions | null;
  /**
   * Extra depth below the image, as a percentage of the shortest side. What
   * makes a Polaroid a Polaroid, and where a caption is drawn when there is one.
   */
  bottomExtra?: number;
  /** Target width/height. null keeps the photo's own shape. */
  aspect?: number | null;
  caption?: CaptionOptions | null;
  /**
   * Leave everything outside the frame empty instead of filled.
   *
   * Two regions are affected, and both are the point: the corners left over
   * when the outer edge is rounded, and the padding an aspect ratio adds. With
   * this off that padding takes the frame colour, so a 1:1 crop of a landscape
   * photo reads as a thicker border top and bottom; with it on the frame keeps
   * its own size and sits centred on an empty canvas.
   *
   * The output has to be a format that stores alpha. JPG does not, and a
   * transparent area encoded as JPG comes out black.
   */
  transparentOutside?: boolean;
}

export interface AspectPreset {
  label: string;
  hint: string;
  /** null = keep the image's own ratio. */
  ratio: number | null;
}

export const ASPECT_PRESETS: AspectPreset[] = [
  { label: "Original", hint: "", ratio: null },
  { label: "1:1", hint: "Instagram", ratio: 1 },
  { label: "4:5", hint: "Portrait", ratio: 4 / 5 },
  { label: "16:9", hint: "Widescreen", ratio: 16 / 9 },
  { label: "9:16", hint: "Story", ratio: 9 / 16 },
  { label: "4:3", hint: "Classic", ratio: 4 / 3 },
  { label: "3:2", hint: "DSLR", ratio: 3 / 2 },
  { label: "2:3", hint: "Print", ratio: 2 / 3 },
];

/** Lighten (positive) or darken (negative) a hex colour, for the 3D styles. */
function shade(hex: string, amount: number): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full.slice(0, 6), 16);
  if (!Number.isFinite(n)) return hex;
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  const r = clamp(((n >> 16) & 255) + amount * 255);
  const g = clamp(((n >> 8) & 255) + amount * 255);
  const b = clamp((n & 255) + amount * 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/** Perceived lightness, 0–1, for deciding which way to shade. */
function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full.slice(0, 6), 16);
  if (!Number.isFinite(n)) return 1;
  return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
}

/**
 * A gap colour guaranteed to be visible against the frame colour.
 *
 * Dashed, dotted and double all work by letting something show BETWEEN the
 * marks. When that something is the same colour as the marks — a white border
 * with no mat is the obvious case, and the White preset hits it exactly — the
 * style silently renders as a plain block. Shading the frame colour away from
 * itself keeps the pattern readable whatever the user picked.
 */
function contrastingPaper(color: string, paper: string): string {
  if (Math.abs(luminance(color) - luminance(paper)) >= 0.18) return paper;
  return shade(color, luminance(color) > 0.5 ? -0.3 : 0.38);
}

/** A rounded-rect path. `r` of 0 gives a plain rectangle. */
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rad = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  ctx.beginPath();
  if (rad <= 0) {
    ctx.rect(x, y, w, h);
    return;
  }
  ctx.moveTo(x + rad, y);
  ctx.arcTo(x + w, y, x + w, y + h, rad);
  ctx.arcTo(x + w, y + h, x, y + h, rad);
  ctx.arcTo(x, y + h, x, y, rad);
  ctx.arcTo(x, y, x + w, y, rad);
  ctx.closePath();
}

export interface FrameLayout {
  /** Final canvas size. */
  W: number;
  H: number;
  /**
   * The frame itself. Equal to the whole canvas unless `transparentOutside` is
   * set, where it shrinks to its natural size and centres, leaving the
   * aspect-ratio padding empty around it.
   */
  frameX: number;
  frameY: number;
  frameW: number;
  frameH: number;
  /** Rounding of the frame's outer edge, concentric with the photo's. */
  outerRadius: number;
  /** Where the photo itself lands. */
  imageX: number;
  imageY: number;
  imageW: number;
  imageH: number;
  /** Border and mat widths in pixels. */
  border: number;
  mat: number;
  /** Depth of the band below the image. */
  bottom: number;
}

/**
 * Work out the whole geometry before anything is drawn.
 *
 * Separate from the painting so the tool can show the output dimensions, and so
 * the maths is checkable without a canvas.
 */
export function layoutFrame(imageW: number, imageH: number, o: FrameOptions): FrameLayout {
  const side = Math.min(imageW, imageH);
  const pct = (v: number) => Math.round((side * Math.max(0, v)) / 100);

  const border = o.style === "none" ? 0 : pct(o.thickness);
  const mat = o.mat ? pct(o.mat.width) : 0;
  /* A caption needs room whatever the Polaroid setting says, so the bottom band
     is the larger of the two rather than their sum — otherwise turning a caption
     on inside a Polaroid preset doubles an already deep base. */
  const captionBand = o.caption?.text ? pct(o.caption.size * 2.2) : 0;
  const bottom = Math.max(pct(o.bottomExtra ?? 0), captionBand);

  const baseW = imageW + 2 * (border + mat);
  const baseH = imageH + 2 * (border + mat) + bottom;

  let W = baseW;
  let H = baseH;
  if (o.aspect && o.aspect > 0) {
    // Grow the short side only — padding never crops.
    if (baseW / baseH < o.aspect) W = Math.round(baseH * o.aspect);
    else H = Math.round(baseW / o.aspect);
  }

  /* The frame is the whole canvas normally, so aspect padding is painted in the
     frame colour and simply reads as a deeper border. When the outside is meant
     to be transparent it has to be its own rectangle instead, or the clip below
     would have nothing to cut against. */
  const frameW = o.transparentOutside ? baseW : W;
  const frameH = o.transparentOutside ? baseH : H;
  const frameX = Math.round((W - frameW) / 2);
  const frameY = Math.round((H - frameH) / 2);

  /* Concentric corners: the photo rounds at r, the mat one layer out at
     r + mat, and the outer edge one further at r + mat + border. Stepping by
     the width of each layer is what keeps the curves parallel. */
  const r = Math.round((side * Math.max(0, o.radius)) / 100);

  return {
    W,
    H,
    frameX,
    frameY,
    frameW,
    frameH,
    outerRadius: r > 0 ? r + border + mat : 0,
    imageX: frameX + Math.round((frameW - imageW) / 2),
    // The caption band belongs below the photo, so the photo centres in what is
    // left above it rather than in the frame as a whole.
    imageY: frameY + Math.round((frameH - bottom - imageH) / 2),
    imageW,
    imageH,
    border,
    mat,
    bottom,
  };
}

/** Paint the outer border in whichever style was chosen. */
function paintBorder(
  ctx: CanvasRenderingContext2D,
  L: FrameLayout,
  o: FrameOptions,
  paper: string
) {
  const { frameW: W, frameH: H, border: b } = L;
  if (b <= 0 || o.style === "none") return;

  /* Everything below is written against the frame's own origin. Without this
     the dashed stroke would be placed at the CANVAS edge, which under a
     transparent-outside clip falls outside the frame and disappears. */
  ctx.save();
  ctx.translate(L.frameX, L.frameY);

  // The band runs from the frame edge inwards to the mat (or the photo).
  const inset = b / 2;
  // Only the gap styles need it, and only they should pay for the shading.
  const gap = contrastingPaper(o.color, paper);
  switch (o.style) {
    case "solid":
      ctx.fillStyle = o.color;
      ctx.fillRect(0, 0, W, H);
      break;

    case "double": {
      /* Three bands: colour, paper, colour. Painted outside-in rather than as
         three strokes, so the corners meet cleanly at any thickness. */
      const band = b / 3;
      ctx.fillStyle = o.color;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = gap;
      ctx.fillRect(band, band, W - 2 * band, H - 2 * band);
      ctx.fillStyle = o.color;
      ctx.fillRect(2 * band, 2 * band, W - 4 * band, H - 4 * band);
      break;
    }

    case "dashed":
    case "dotted": {
      // The band is paper with a line drawn along it, not a solid frame.
      ctx.fillStyle = gap;
      ctx.fillRect(0, 0, W, H);
      const lw = Math.max(1, b * 0.34);
      ctx.save();
      ctx.strokeStyle = o.color;
      ctx.lineWidth = lw;
      if (o.style === "dotted") {
        ctx.lineCap = "round";
        // A zero-length dash with a round cap is a dot; the gap sets the pitch.
        ctx.setLineDash([0.1, lw * 2]);
      } else {
        ctx.lineCap = "butt";
        ctx.setLineDash([lw * 2.2, lw * 1.4]);
      }
      ctx.strokeRect(inset, inset, W - b, H - b);
      ctx.restore();
      break;
    }

    case "groove":
    case "ridge": {
      // Two bands shaded against each other read as bevelled in or out.
      const outer = o.style === "groove" ? shade(o.color, -0.18) : shade(o.color, 0.18);
      const inner = o.style === "groove" ? shade(o.color, 0.18) : shade(o.color, -0.18);
      ctx.fillStyle = outer;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = inner;
      ctx.fillRect(b / 2, b / 2, W - b, H - b);
      break;
    }
  }
  ctx.restore();
}

/**
 * Draw the framed image.
 *
 * The canvas is resized to fit, so callers can hand in a scratch canvas and
 * read its size back afterwards.
 */
export function paintFrame(canvas: HTMLCanvasElement, bmp: CanvasImageSource, imageW: number, imageH: number, o: FrameOptions): FrameLayout {
  const L = layoutFrame(imageW, imageH, o);
  canvas.width = L.W;
  canvas.height = L.H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return L;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, L.W, L.H);

  /* What shows through a dashed gap or between a double line. The mat colour
     when there is one, so the two layers read as parts of the same frame. */
  const paper = o.mat?.color ?? "#ffffff";

  /* Clip to the frame before anything is painted, so every layer below stops at
     the same edge. Done whenever the option is on rather than only when the
     radius is above zero — with square corners and an aspect ratio, the clip is
     the only thing keeping the padding empty. */
  ctx.save();
  if (o.transparentOutside) {
    roundRect(ctx, L.frameX, L.frameY, L.frameW, L.frameH, L.outerRadius);
    ctx.clip();
  }

  // Everything starts as the mat colour (or paper), then the border paints over
  // the outside. That way the aspect-ratio padding matches the innermost layer
  // rather than leaving a third colour nobody chose.
  ctx.fillStyle = o.mat ? o.mat.color : o.style === "none" ? paper : o.color;
  ctx.fillRect(L.frameX, L.frameY, L.frameW, L.frameH);

  paintBorder(ctx, L, o, paper);

  // The mat sits between the border and the photo.
  if (L.mat > 0 && o.mat) {
    const r = Math.round((Math.min(imageW, imageH) * o.radius) / 100);
    ctx.fillStyle = o.mat.color;
    roundRect(ctx, L.imageX - L.mat, L.imageY - L.mat, imageW + 2 * L.mat, imageH + 2 * L.mat, r > 0 ? r + L.mat : 0);
    ctx.fill();
  }

  // The photo, clipped when its corners are rounded.
  const r = Math.round((Math.min(imageW, imageH) * o.radius) / 100);
  ctx.save();
  if (r > 0) {
    roundRect(ctx, L.imageX, L.imageY, imageW, imageH, r);
    ctx.clip();
  }
  ctx.drawImage(bmp, L.imageX, L.imageY, imageW, imageH);
  ctx.restore();

  if (o.caption?.text) {
    const side = Math.min(imageW, imageH);
    const px = Math.max(8, Math.round((side * o.caption.size) / 100));
    /* The caption sits on the border, so it has to contrast with the border —
       not with whatever colour the caller happened to pass. A white frame with
       a white caption (the White and Polaroid presets both hit this) would
       otherwise reserve the band and then draw nothing into it. */
    const band = o.style === "none" ? paper : o.color;
    const capColor =
      Math.abs(luminance(o.caption.color) - luminance(band)) >= 0.3
        ? o.caption.color
        : luminance(band) > 0.5
          ? "#2b2b2b"
          : "#f4f4f4";
    ctx.save();
    ctx.fillStyle = capColor;
    ctx.font = `${px}px "Segoe UI", system-ui, -apple-system, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Centred in the band between the photo and the frame's bottom edge.
    const bandTop = L.imageY + imageH + L.mat;
    const bandBottom = L.frameY + L.frameH - L.border;
    ctx.fillText(o.caption.text, L.frameX + L.frameW / 2, (bandTop + bandBottom) / 2, L.frameW * 0.86);
    ctx.restore();
  }

  ctx.restore(); // the transparent-outside clip
  return L;
}

export interface FramePreset {
  id: string;
  label: string;
  /** Everything except aspect ratio and caption, which stay the user's choice. */
  options: Omit<FrameOptions, "aspect" | "caption">;
}

/**
 * The one-click starting points.
 *
 * Deliberately opinionated: someone opening this tool wants a photo that looks
 * framed, not a blank set of sliders. Every one is still just values, so any of
 * them can be nudged afterwards.
 */
export const FRAME_PRESETS: FramePreset[] = [
  {
    id: "classic",
    /* "Classic" is also the 4:3 hint in ASPECT_PRESETS below, and the two need
       different genders in Portuguese (a moldura clássica, o formato clássico).
       t() strips the context for the English fallback (conversion.md §4.12). */
    label: "Classic|preset",
    options: { thickness: 5, color: "#3a3a3a", style: "solid", radius: 0, mat: { width: 2.5, color: "#f4efe6" } },
  },
  {
    id: "golden",
    label: "Golden",
    options: { thickness: 5, color: "#c9a227", style: "ridge", radius: 0, mat: { width: 2, color: "#fbf5e4" } },
  },
  {
    id: "double",
    label: "Double",
    options: { thickness: 6, color: "#2b2b2b", style: "double", radius: 0, mat: { width: 1.5, color: "#ffffff" } },
  },
  {
    id: "vintage",
    label: "Vintage",
    options: { thickness: 7, color: "#b99a63", style: "groove", radius: 0, mat: { width: 3, color: "#efe3cb" } },
  },
  {
    id: "polaroid",
    label: "Polaroid",
    options: { thickness: 4, color: "#ffffff", style: "solid", radius: 0, mat: null, bottomExtra: 16 },
  },
  {
    id: "white",
    label: "White",
    options: { thickness: 6, color: "#ffffff", style: "solid", radius: 0, mat: null },
  },
  {
    id: "film",
    label: "Film",
    options: { thickness: 6, color: "#121212", style: "solid", radius: 0, mat: { width: 0.7, color: "#f2f2f2" } },
  },
  {
    id: "minimal",
    label: "Minimal",
    options: { thickness: 1.5, color: "#d8d4cd", style: "solid", radius: 0, mat: null },
  },
  {
    id: "bold",
    label: "Bold",
    options: { thickness: 11, color: "#000000", style: "solid", radius: 0, mat: null },
  },
];
