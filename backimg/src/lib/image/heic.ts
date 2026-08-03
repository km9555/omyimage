import { writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { NotInstalledError, run, withTempDir } from "./exec.js";

/**
 * HEIC/HEIF → JPG/PNG, decoded SERVER-SIDE on purpose.
 *
 * Why not in the browser: every JavaScript HEIC decoder (heic2any, heic-decode,
 * heic-convert) is the same emscripten build of libheif underneath, and libheif
 * is LGPL-3.0. Shipping it to a browser is distribution, which triggers the
 * LGPL's source/relink obligations. Decoding here instead means the library is
 * only ever *run* as a service, never distributed, so those obligations don't
 * attach — the same reasoning that makes our LGPL-linked libvips/sharp fine.
 * See LICENSE-AUDIT.md (finding F1).
 *
 * Note sharp cannot do this: its prebuilt libvips links libheif with aom only
 * (AVIF), with no libde265/x265, so it has the HEIF container but no HEVC
 * decoder. Hence ImageMagick, which must be built with libheif.
 */

export { NotInstalledError };

export type HeicTarget = "jpeg" | "png";

/**
 * Convert one HEIC/HEIF buffer. `quality` is 1–100 and ignored for PNG.
 * Rejects with NotInstalledError when ImageMagick isn't on PATH.
 */
export async function heicToImage(
  input: Buffer,
  target: HeicTarget = "jpeg",
  quality = 92,
): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const inp = join(dir, "in.heic");
    const outp = join(dir, `out.${target === "png" ? "png" : "jpg"}`);
    await writeFile(inp, input);

    // ImageMagick 7 is `magick`; 6 is `convert`. Allow an explicit override.
    const bin = process.env.MAGICK_BIN || "magick";
    const q = Math.min(100, Math.max(1, Math.round(quality)));

    const args = [inp];
    // Flatten onto white — HEIC can carry alpha, JPEG cannot.
    if (target === "jpeg") args.push("-background", "white", "-flatten", "-quality", String(q));
    args.push(outp);

    try {
      await run(bin, args);
    } catch (err) {
      // Only consider the ImageMagick 6 fallback when v7 genuinely isn't there
      // and the operator hasn't named a binary explicitly.
      if (!(err instanceof NotInstalledError) || process.env.MAGICK_BIN) throw err;

      // NEVER fall back to bare `convert` on Windows: convert.exe there is the
      // built-in filesystem conversion utility, not ImageMagick. Running it
      // succeeds in spawning the wrong program and fails with a confusing
      // generic error instead of a clean "not installed" 501.
      if (process.platform === "win32") throw err;

      try {
        await run("convert", args);
      } catch (fallbackErr) {
        // `convert` missing too → the real story is that ImageMagick isn't
        // installed, so surface the original error. A different failure means
        // ImageMagick 6 is present but choked, which is worth reporting as-is.
        throw fallbackErr instanceof NotInstalledError ? err : fallbackErr;
      }
    }
    return readFile(outp);
  });
}
