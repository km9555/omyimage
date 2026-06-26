import { spawn } from "node:child_process";
import { writeFile, readFile, rm, mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * AI image operations backed by free, open-source, commercially-licensed tools:
 *   - Background removal → rembg (MIT) + U²-Net model (Apache-2.0)
 *   - Upscale / enhance  → Real-ESRGAN (BSD-3) via realesrgan-ncnn-vulkan (MIT)
 *
 * These shell out to external binaries. If a binary isn't installed the call
 * rejects with NotInstalledError so the route can return a clean 501.
 */

export class NotInstalledError extends Error {
  code = "NOT_IMPLEMENTED";
  constructor(bin: string) {
    super(`The "${bin}" tool is not installed on this server.`);
  }
}

function run(cmd: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
    let err = "";
    p.stderr.on("data", (d: Buffer) => { err += d.toString(); });
    p.on("error", (e: NodeJS.ErrnoException) => {
      reject(e.code === "ENOENT" ? new NotInstalledError(cmd) : e);
    });
    p.on("close", (code) => (code === 0 ? resolve() : reject(new Error(err.trim() || `${cmd} exited with code ${code}`))));
  });
}

async function withTempDir<T>(fn: (dir: string) => Promise<T>): Promise<T> {
  const dir = await mkdtemp(join(tmpdir(), "omyimage-ai-"));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}

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

/** Enhance (sharpen/denoise + light upscale) using Real-ESRGAN. */
export async function enhance(input: Buffer): Promise<Buffer> {
  return withTempDir(async (dir) => {
    const inp = join(dir, "in.png");
    const outp = join(dir, "out.png");
    await writeFile(inp, input);
    const bin = process.env.REALESRGAN_BIN || "realesrgan-ncnn-vulkan";
    const model = process.env.REALESRGAN_ENHANCE_MODEL || "realesrgan-x4plus";
    await run(bin, ["-i", inp, "-o", outp, "-s", "2", "-n", model]);
    return readFile(outp);
  });
}
