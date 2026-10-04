/**
 * Last-commit dates for source files, read once from git at build time.
 *
 * A sitemap `<lastmod>` is only worth emitting if it is true. The old single
 * sitemap stamped every URL with the build time, so every deploy told Google
 * that all 240 pages had just changed — exactly the pattern that teaches a
 * crawler to ignore the field. Here each URL gets the date of the last commit
 * that touched the file its copy lives in.
 *
 * One `git log` call builds the whole map (~0.2 s on this repo). If git is
 * missing, or the checkout is shallow (a depth-1 CI clone dates every file to
 * the tip commit, which is the build-time lie again), the map is empty and
 * callers simply omit `<lastmod>`.
 */
import { execFileSync } from "node:child_process";

let cache: Map<string, string> | null = null;

function load(): Map<string, string> {
  if (cache) return cache;
  cache = new Map();
  try {
    const run = (args: string[]) =>
      execFileSync("git", args, { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64 * 1024 * 1024 });
    if (run(["rev-parse", "--is-shallow-repository"]).trim() !== "false") return cache;
    // NUL before each date splits commits; --relative makes paths relative to
    // frontimg/, which is what callers pass. Newest commit first, so the first
    // date seen for a path is its latest.
    const log = run(["log", "--format=%x00%cI", "--name-only", "--relative", "--no-renames", "--", "."]);
    for (const block of log.split("\0")) {
      const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      const date = lines.shift();
      if (!date) continue;
      for (const path of lines) if (!cache.has(path)) cache.set(path, date);
    }
  } catch {
    cache.clear();
  }
  return cache;
}

/** Latest commit date (ISO 8601) across `paths`, or undefined if none is known. */
export function lastCommitDate(paths: string[]): string | undefined {
  const map = load();
  let best: string | undefined;
  for (const p of paths) {
    const d = map.get(p.replace(/\\/g, "/"));
    if (d && (!best || Date.parse(d) > Date.parse(best))) best = d;
  }
  return best ? new Date(best).toISOString() : undefined;
}
