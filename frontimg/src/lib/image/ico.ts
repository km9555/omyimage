/**
 * ICO encoder — several square sizes in one Windows icon / favicon file.
 *
 * Layout (all little-endian): a 6-byte ICONDIR, one 16-byte ICONDIRENTRY per
 * image, then the images. Sizes below 256 are stored as classic 32-bit DIBs
 * (BGRA rows bottom-up, the height field doubled, then a 1-bit AND mask) —
 * the form every ICO reader back to Windows XP understands. 256 × 256 is
 * stored as PNG, as Windows itself does: a raw 256 DIB is 256 KB on its own,
 * and PNG entries are supported everywhere 256-pixel icons are.
 *
 * Resizing is done here too, because a favicon lives or dies at 16 × 16: one
 * big drawImage from 1024 px straight to 16 px aliases badly, so the image is
 * halved step by step with high-quality smoothing and only the last step
 * lands on the exact size.
 */

export const ICO_SIZES = [16, 24, 32, 48, 64, 128, 256] as const;
export type IcoSize = (typeof ICO_SIZES)[number];

export type IcoFit = "contain" | "cover";

/** A source image cropped or padded to a square, at exactly size × size. */
export function squareAt(
  source: CanvasImageSource & { width: number; height: number },
  size: number,
  fit: IcoFit,
  background?: string,
): HTMLCanvasElement {
  const sw = source.width;
  const sh = source.height;
  // The part of the source that is used, and where it lands in the square.
  let sx = 0, sy = 0, sWidth = sw, sHeight = sh;
  let dw = size, dh = size;
  if (fit === "cover") {
    const side = Math.min(sw, sh);
    sx = (sw - side) / 2; sy = (sh - side) / 2; sWidth = side; sHeight = side;
  } else if (sw >= sh) {
    dh = Math.max(1, Math.round((size * sh) / sw));
  } else {
    dw = Math.max(1, Math.round((size * sw) / sh));
  }

  // Halve towards the target; each step is a good-quality 2:1 reduction.
  let cur: CanvasImageSource = source;
  let cx = sx, cy = sy, cw = sWidth, ch = sHeight;
  while (cw / 2 >= dw && ch / 2 >= dh) {
    const nw = Math.max(1, Math.round(cw / 2));
    const nh = Math.max(1, Math.round(ch / 2));
    const step = document.createElement("canvas");
    step.width = nw; step.height = nh;
    const sctx = step.getContext("2d")!;
    sctx.imageSmoothingEnabled = true;
    sctx.imageSmoothingQuality = "high";
    sctx.drawImage(cur, cx, cy, cw, ch, 0, 0, nw, nh);
    cur = step; cx = 0; cy = 0; cw = nw; ch = nh;
  }

  const out = document.createElement("canvas");
  out.width = size; out.height = size;
  const ctx = out.getContext("2d")!;
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, size, size); }
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(cur, cx, cy, cw, ch, Math.round((size - dw) / 2), Math.round((size - dh) / 2), dw, dh);
  return out;
}

/** 32-bit DIB with AND mask, as stored inside an ICO entry. */
function dib(canvas: HTMLCanvasElement): Uint8Array {
  const w = canvas.width;
  const h = canvas.height;
  // getImageData is straight (un-premultiplied) RGBA — exactly what ICO wants.
  const px = canvas.getContext("2d")!.getImageData(0, 0, w, h).data;
  const maskRow = Math.ceil(w / 32) * 4;
  const xorBytes = w * h * 4;
  const buf = new Uint8Array(40 + xorBytes + maskRow * h);
  const v = new DataView(buf.buffer);
  v.setUint32(0, 40, true);           // biSize
  v.setInt32(4, w, true);             // biWidth
  v.setInt32(8, h * 2, true);         // biHeight: XOR + AND
  v.setUint16(12, 1, true);           // biPlanes
  v.setUint16(14, 32, true);          // biBitCount
  v.setUint32(20, xorBytes + maskRow * h, true); // biSizeImage
  let o = 40;
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      buf[o++] = px[i + 2]; buf[o++] = px[i + 1]; buf[o++] = px[i]; buf[o++] = px[i + 3];
    }
  }
  // AND mask: 1 = transparent. Readers that ignore alpha still get the shape.
  for (let y = h - 1; y >= 0; y--) {
    for (let x = 0; x < w; x++) {
      if (px[(y * w + x) * 4 + 3] === 0) buf[o + (x >> 3)] |= 0x80 >> (x & 7);
    }
    o += maskRow;
  }
  return buf;
}

async function pngBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/png"));
  if (!blob) throw new Error("Could not export the image.");
  return new Uint8Array(await blob.arrayBuffer());
}

/** Pack square canvases (one per size, any order) into an .ico file. */
export async function encodeIco(images: HTMLCanvasElement[]): Promise<Blob> {
  const sorted = [...images].sort((a, b) => a.width - b.width);
  const datas: Uint8Array[] = [];
  for (const c of sorted) datas.push(c.width >= 256 ? await pngBytes(c) : dib(c));

  const head = new Uint8Array(6 + 16 * sorted.length);
  const v = new DataView(head.buffer);
  v.setUint16(2, 1, true);              // type: icon
  v.setUint16(4, sorted.length, true);  // count
  let offset = head.length;
  sorted.forEach((c, k) => {
    const e = 6 + 16 * k;
    head[e] = c.width >= 256 ? 0 : c.width;   // 0 means 256
    head[e + 1] = c.height >= 256 ? 0 : c.height;
    v.setUint16(e + 4, 1, true);              // planes
    v.setUint16(e + 6, 32, true);             // bit count
    v.setUint32(e + 8, datas[k].length, true);
    v.setUint32(e + 12, offset, true);
    offset += datas[k].length;
  });
  return new Blob([head as BlobPart, ...datas.map((d) => d as BlobPart)], { type: "image/x-icon" });
}
