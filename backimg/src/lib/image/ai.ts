import { writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import { NotInstalledError, run, withTempDir } from "./exec.js";

/**
 * AI image operations backed by free, open-source, commercially-licensed tools:
 *   - Background removal → rembg (MIT) + U²-Net model (Apache-2.0)
 *   - Upscale            → Real-ESRGAN (BSD-3) via realesrgan-ncnn-vulkan (MIT)
 *
 * These shell out to external binaries. If a binary isn't installed the call
 * rejects with NotInstalledError so the route can return a clean 501.
 */

// Re-exported so existing route imports (`from "../lib/image/ai.js"`) keep working.
export { NotInstalledError };

/** Remove the background → transparent PNG (rembg). */
export async function removeBackground(input: Buffer): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const inp = join(dir, "in.png");
    const outp = join(dir, "out.png");
    await writeFile(inp, input);
    const bin = process.env.REMBG_BIN || "rembg";
    await run(bin, ["i", inp, outp]);
    return readFile(outp);
  });
}

/** Upscale 2×/4× with Real-ESRGAN (general photo model). */
export async function upscale(input: Buffer, scale = 4): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const inp = join(dir, "in.png");
    const outp = join(dir, "out.png");
    await writeFile(inp, input);
    const bin = process.env.REALESRGAN_BIN || "realesrgan-ncnn-vulkan";
    const model = process.env.REALESRGAN_MODEL || "realesrgan-x4plus";
    const s = scale === 2 || scale === 3 || scale === 4 ? scale : 4;
    await run(bin, ["-i", inp, "-o", outp, "-s", String(s), "-n", model]);
    return readFile(outp);
  });
}

// NOTE: enhance() was removed with the Image Enhancer tool. It called the same
// binary and the same default model as upscale() with the scale fixed at 2, so
// it was upscale(input, 2) under a different name. REALESRGAN_ENHANCE_MODEL is
// no longer read anywhere.
