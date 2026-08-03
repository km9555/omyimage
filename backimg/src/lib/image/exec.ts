import { spawn } from "node:child_process";
import { rm, mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * Shared helpers for image operations that shell out to an external binary.
 *
 * Used by both the AI tools (rembg, Real-ESRGAN) and HEIC decoding
 * (ImageMagick). Keeping these in one place means every such tool degrades the
 * same way when its binary is missing: a NotInstalledError that the route turns
 * into a clean 501 rather than a 500.
 */

export class NotInstalledError extends Error {
  code = "NOT_IMPLEMENTED";
  constructor(bin: string) {
    super(`The "${bin}" tool is not installed on this server.`);
  }
}

/** Run a binary, rejecting with NotInstalledError when it isn't on PATH. */
export function run(cmd: string, args: string[]): Promise<void> {
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

/** Run `fn` against a scratch directory that is always cleaned up. */
export async function withTempDir<T>(fn: (dir: string) => Promise<T>): Promise<T> {
  const dir = await mkdtemp(join(tmpdir(), "omyimage-"));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true }).catch(() => {});
  }
}
