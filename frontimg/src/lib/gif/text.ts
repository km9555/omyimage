/**
 * Text drawn into GIF frames: font stacks, wrapping and outlined drawing,
 * shared by Add Text to GIF and Typing Text GIF.
 */

export type FontKey = "impact" | "sans" | "serif" | "mono";

/** Stacks of fonts every device has; "sans" puts the site's own Inter first. */
export function fontStack(key: FontKey): string {
  switch (key) {
    case "impact": return "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    case "serif": return "Georgia, 'Times New Roman', serif";
    case "mono": return "ui-monospace, Menlo, Consolas, 'Courier New', monospace";
    default: {
      // next/font registers Inter under a generated name, exposed as --font-inter.
      const inter = typeof document === "undefined" ? "" : getComputedStyle(document.documentElement).getPropertyValue("--font-inter").trim();
      return `${inter ? `${inter}, ` : ""}Arial, Helvetica, sans-serif`;
    }
  }
}

/**
 * A canvas draws with whatever font is loaded at that moment, so a web font
 * that hasn't arrived yet would silently fall back. Load it first.
 */
export async function ensureFont(font: string, sample: string): Promise<void> {
  try { await document.fonts.load(font, sample || "A"); } catch { /* system font, or no Font Loading API */ }
}

/** User-perceived characters, so a Devanagari syllable or an emoji types as one. */
export function graphemes(s: string): string[] {
  const Seg = (Intl as unknown as { Segmenter?: new (l?: string, o?: { granularity: string }) => { segment(s: string): Iterable<{ segment: string }> } }).Segmenter;
  if (Seg) return Array.from(new Seg(undefined, { granularity: "grapheme" }).segment(s), (x) => x.segment);
  return Array.from(s);
}

/**
 * Lines for `text` at the context's current font: explicit line breaks are
 * kept, and words wrap at `maxW`. A word longer than the line is broken
 * between characters rather than overflowing.
 */
export function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const out: string[] = [];
  for (const para of text.split(/\r?\n/)) {
    const words = para.split(/ +/);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width <= maxW) { line = test; continue; }
      if (line) out.push(line);
      if (ctx.measureText(word).width <= maxW) { line = word; continue; }
      // Break an over-long word between characters.
      line = "";
      for (const g of graphemes(word)) {
        if (line && ctx.measureText(line + g).width > maxW) { out.push(line); line = g; }
        else line += g;
      }
    }
    out.push(line);
  }
  return out;
}

export interface TextStyle {
  color: string;
  /** Outline colour, and thickness as a fraction of the font size (0 = none). */
  outline: string;
  outlineWidth: number;
  /** Box behind the text, or null. */
  box: string | null;
}

/**
 * Draw `lines` with their tops at `y`, each aligned at `x` (ctx.textAlign
 * decides how). The box, when set, covers the widest line plus padding.
 */
export function drawLines(ctx: CanvasRenderingContext2D, lines: string[], x: number, y: number, px: number, lineHeight: number, s: TextStyle) {
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  if (s.box && lines.some((l) => l)) {
    const pad = px * 0.3;
    const w = Math.max(...lines.map((l) => ctx.measureText(l).width));
    const left = ctx.textAlign === "center" ? x - w / 2 : ctx.textAlign === "right" ? x - w : x;
    ctx.fillStyle = s.box;
    ctx.fillRect(left - pad, y - pad * 0.6, w + pad * 2, lines.length * lineHeight + pad * 1.2);
  }
  ctx.lineWidth = Math.max(0, px * s.outlineWidth);
  ctx.strokeStyle = s.outline;
  ctx.fillStyle = s.color;
  lines.forEach((l, i) => {
    if (!l) return;
    if (ctx.lineWidth > 0) ctx.strokeText(l, x, y + i * lineHeight);
    ctx.fillText(l, x, y + i * lineHeight);
  });
}
