/**
 * Best-effort: give the build full git history on Cloudflare Pages.
 *
 * Pages builds from a shallow clone, and lib/sitemap/git-dates.ts refuses to
 * date anything in a shallow checkout (a depth-1 clone would date every file
 * to the tip commit). So production shipped with NO <lastmod> in any locale
 * sitemap and no dateModified in tool JSON-LD (found by the 2026-11-14 SEO
 * audit). This runs once, first in `prebuild`, before Next starts its
 * parallel workers, so they never race on the fetch.
 *
 * Only on Cloudflare (CF_PAGES is set there). Any failure — no network, no
 * credentials, timeout — is logged and ignored: the build then behaves
 * exactly as before, just without dates.
 */
import { execFileSync } from "node:child_process";

if (!process.env.CF_PAGES) process.exit(0);
const git = (args, opts = {}) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...opts }).trim();
try {
  if (git(["rev-parse", "--is-shallow-repository"]) !== "true") {
    console.log("[unshallow] full history already present");
    process.exit(0);
  }
  git(["fetch", "--unshallow", "--quiet", "origin"], { timeout: 120_000 });
  console.log(`[unshallow] fetched full history (shallow now: ${git(["rev-parse", "--is-shallow-repository"])})`);
} catch (e) {
  console.warn(`[unshallow] skipped: ${String(e.message ?? e).split("\n")[0]}`);
}
