/**
 * Geometry for split-image and instagram-grid-maker: which part of the picture
 * each piece is cut from and how big it comes out. Pure functions — the tool
 * does the drawing with `drawPiece`.
 */

export interface Piece {
  /** Source rectangle in the original image's pixels (may be fractional). */
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  /** Output size. Equals sw × sh unless the piece is resized (Instagram). */
  w: number;
  h: number;
  row: number;
  col: number;
}

/** More than this per image is a tiling job for a desktop app, not a ZIP. */
export const MAX_PIECES = 400;

/**
 * Cut `len` pixels into `n` parts. Edges are rounded, so when `len` does not
 * divide evenly the parts differ by at most 1 px instead of the last one
 * taking the whole remainder.
 */
export function edges(len: number, n: number): number[] {
  return Array.from({ length: n + 1 }, (_, i) => Math.round((i * len) / n));
}

function fromEdges(xs: number[], ys: number[]): Piece[] {
  const out: Piece[] = [];
  for (let row = 0; row < ys.length - 1; row++) {
    for (let col = 0; col < xs.length - 1; col++) {
      const sw = xs[col + 1] - xs[col];
      const sh = ys[row + 1] - ys[row];
      out.push({ sx: xs[col], sy: ys[row], sw, sh, w: sw, h: sh, row, col });
    }
  }
  return out;
}

/** `rows` × `cols` equal pieces of a W × H image, in reading order. */
export function gridPieces(W: number, H: number, rows: number, cols: number): Piece[] {
  return fromEdges(edges(W, Math.min(cols, W)), edges(H, Math.min(rows, H)));
}

/** Edges for fixed-size tiles from 0; the last tile takes what is left. */
function tileEdges(len: number, size: number): number[] {
  const out: number[] = [];
  for (let x = 0; x < len; x += size) out.push(x);
  out.push(len);
  return out;
}

/** How many tiles of tw × th a W × H image makes — before cutting anything. */
export function tileCount(W: number, H: number, tw: number, th: number): { cols: number; rows: number } {
  return { cols: Math.ceil(W / Math.max(1, tw)), rows: Math.ceil(H / Math.max(1, th)) };
}

/** Fixed-size tiles from the top-left corner; the last row and column are smaller when the size does not divide evenly. */
export function tilePieces(W: number, H: number, tw: number, th: number): Piece[] {
  return fromEdges(tileEdges(W, Math.max(1, tw)), tileEdges(H, Math.max(1, th)));
}

// ── Instagram ──────────────────────────────────────────────────────────────

export type IgKind = "grid" | "carousel";
export type IgShape = "3:4" | "4:5" | "1:1";
export const IG_RATIO: Record<IgShape, readonly [number, number]> = { "3:4": [3, 4], "4:5": [4, 5], "1:1": [1, 1] };
/** Instagram stores feed photos 1080 px wide; anything wider is scaled down on upload. */
export const IG_WIDTH = 1080;

/**
 * The part of the picture that becomes the posts: the largest window with the
 * whole layout's shape (cols × rw : rows × rh) that fits, slid by `fx` / `fy`
 * (0 = against the left / top edge, 1 = against the right / bottom edge).
 */
export function igWindow(W: number, H: number, cols: number, rows: number, shape: IgShape, fx: number, fy: number) {
  const [rw, rh] = IG_RATIO[shape];
  const aspect = (cols * rw) / (rows * rh);
  let w = W;
  let h = W / aspect;
  if (h > H) {
    h = H;
    w = H * aspect;
  }
  return { x: (W - w) * fx, y: (H - h) * fy, w, h };
}

/**
 * The posts, in reading order. Each comes out IG_WIDTH wide — or narrower when
 * the picture has fewer pixels than that, rather than being blown up.
 */
export function igPieces(W: number, H: number, cols: number, rows: number, shape: IgShape, fx: number, fy: number): Piece[] {
  const win = igWindow(W, H, cols, rows, shape, fx, fy);
  const [rw, rh] = IG_RATIO[shape];
  const w = Math.max(1, Math.min(IG_WIDTH, Math.floor(win.w / cols)));
  const h = Math.max(1, Math.round((w * rh) / rw));
  const sw = win.w / cols;
  const sh = win.h / rows;
  const out: Piece[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      out.push({ sx: win.x + col * sw, sy: win.y + row * sh, sw, sh, w, h, row, col });
    }
  }
  return out;
}

/**
 * Instagram shows the newest post top-left, so a profile grid is posted from
 * the bottom-right piece back to the top-left one. 1-based posting number of
 * the piece at `index` (reading order) out of `count`.
 */
export function postNumber(index: number, count: number): number {
  return count - index;
}

/** Paint one piece onto `canvas`, resized to the canvas. `bg` fills behind it (JPG). */
export function drawPiece(canvas: HTMLCanvasElement, src: CanvasImageSource, p: Piece, bg: string | null): void {
  canvas.width = p.w;
  canvas.height = p.h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  if (bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, p.w, p.h);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, p.sx, p.sy, p.sw, p.sh, 0, 0, p.w, p.h);
}

/** `n` padded to as many digits as `max` has, so files sort in order. */
export function pad(n: number, max: number): string {
  return String(n).padStart(String(max).length, "0");
}
