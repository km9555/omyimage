/**
 * Stage ONNX Runtime Web's WebAssembly runtime into public/ort/<version>/ so
 * the inpainting tools (/remove-object, /remove-watermark) run entirely from
 * our own origin. Same reasoning as copy-mediapipe.mjs: the files already
 * exist in node_modules, committing a second copy would add ~14 MB to the
 * repository, and copying at build time keeps the runtime in step with the
 * installed package.
 *
 * Only the CPU build is copied. The WebGPU builds (jsep, asyncify) are
 * 27 MB each — over Cloudflare Pages' 25 MiB per-file limit — and MI-GAN runs
 * in about a second on the CPU anyway.
 *
 * The runtime is loaded with a native dynamic import of ort.wasm.min.mjs
 * (lib/image/inpaint.ts), never bundled: Turbopack (build) and webpack (dev)
 * would each handle its `new URL(…, import.meta.url)` asset references
 * differently, and in proxy mode ORT starts its worker from its own script
 * URL, which only works when that script is a plain file.
 *
 * The version folder makes the URLs safe to cache forever (public/_headers).
 */

import { existsSync, mkdirSync, copyFileSync, statSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const pkgDir = join(root, "node_modules", "onnxruntime-web");

if (!existsSync(pkgDir)) {
  console.error("[copy-ort] onnxruntime-web is not installed — run `npm install` first.");
  process.exit(1);
}

const { version } = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));

// The page loads /ort/<ORT_VERSION>/…; an upgrade that forgets the constant
// would stage files at a URL nothing requests.
const engine = readFileSync(join(root, "src", "lib", "image", "inpaint.ts"), "utf8");
const wanted = /export const ORT_VERSION = "([^"]+)"/.exec(engine)?.[1];
if (wanted !== version) {
  console.error(`[copy-ort] src/lib/image/inpaint.ts has ORT_VERSION "${wanted}" but onnxruntime-web ${version} is installed — update the constant.`);
  process.exit(1);
}
const base = join(root, "public", "ort");
const dest = join(base, version);

const FILES = ["ort.wasm.min.mjs", "ort-wasm-simd-threaded.mjs", "ort-wasm-simd-threaded.wasm"];

// Drop other versions' folders so an upgrade does not ship both.
if (existsSync(base)) {
  for (const name of readdirSync(base)) if (name !== version) rmSync(join(base, name), { recursive: true, force: true });
}
mkdirSync(dest, { recursive: true });

let copied = 0;
let bytes = 0;
for (const name of FILES) {
  const from = join(pkgDir, "dist", name);
  const to = join(dest, name);
  if (!existsSync(from)) {
    console.error(`[copy-ort] missing dist/${name} in onnxruntime-web ${version}.`);
    process.exit(1);
  }
  if (existsSync(to) && statSync(to).size === statSync(from).size) continue;
  copyFileSync(from, to);
  copied++;
  bytes += statSync(to).size;
}

console.log(
  copied
    ? `[copy-ort] staged ${copied} file(s), ${(bytes / 1048576).toFixed(1)} MB → public/ort/${version}/`
    : `[copy-ort] up to date (public/ort/${version}/).`
);
