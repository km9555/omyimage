/**
 * Serve the static export (out/) the way Cloudflare Pages does — clean URLs
 * (/remove-object → remove-object.html) and real content types for .mjs and
 * .wasm — so a production build can be checked locally before a deploy.
 *
 *   npm run build && node scripts/serve-out.mjs [port]   (default 3003)
 *
 * A local check only: it ignores public/_headers and is not a production server.
 */
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const port = Number(process.argv[2] ?? 3003);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".wasm": "application/wasm",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".tflite": "application/octet-stream",
  ".bin": "application/octet-stream",
};

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
  const safe = normalize(path).replace(/^([/\\])+/, "");
  const candidates = [safe, `${safe}.html`, join(safe, "index.html")];
  const file = candidates.map((c) => join(root, c)).find((f) => f.startsWith(root) && existsSync(f) && statSync(f).isFile());
  if (!file) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404");
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream", "content-length": statSync(file).size });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`serving out/ on http://localhost:${port}`));
