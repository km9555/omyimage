/**
 * Stage MediaPipe's WebAssembly runtime into public/ so face detection runs
 * entirely from our own origin.
 *
 * Two reasons this is a build step rather than committed files:
 *
 *  - **Size.** Each wasm variant is ~11 MB. They already exist in
 *    node_modules as part of the dependency, so committing a second copy would
 *    add ~23 MB to the repository for no benefit.
 *  - **Drift.** Copying at build time means the runtime always matches the
 *    installed package version; a committed copy silently goes stale on upgrade.
 *
 * Only the two variants `FilesetResolver.forVisionTasks()` can actually request
 * are copied. It builds the path as
 *   `${base}/vision_wasm${_module?}${_nosimd?}_internal.{js,wasm}`
 * and we never pass the module flag, so the `_module_` pair is dead weight.
 *
 * The model file itself (`blaze_face_short_range.tflite`, ~224 KB) IS committed
 * — it is small, and fetching it at build time would make builds depend on
 * Google's CDN being reachable.
 */

import { existsSync, mkdirSync, copyFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const src = join(root, "node_modules", "@mediapipe", "tasks-vision", "wasm");
const dest = join(root, "public", "mediapipe", "wasm");

const FILES = [
  "vision_wasm_internal.js",
  "vision_wasm_internal.wasm",
  "vision_wasm_nosimd_internal.js",
  "vision_wasm_nosimd_internal.wasm",
];

if (!existsSync(src)) {
  console.error(
    "[copy-mediapipe] @mediapipe/tasks-vision is not installed — run `npm install` first."
  );
  process.exit(1);
}

mkdirSync(dest, { recursive: true });

let copied = 0;
let bytes = 0;
for (const name of FILES) {
  const from = join(src, name);
  const to = join(dest, name);
  if (!existsSync(from)) {
    console.error(`[copy-mediapipe] missing ${name} in the installed package.`);
    process.exit(1);
  }
  // Skip when already staged at the same size — keeps repeat dev starts instant.
  if (existsSync(to) && statSync(to).size === statSync(from).size) continue;
  copyFileSync(from, to);
  copied++;
  bytes += statSync(to).size;
}

console.log(
  copied === 0
    ? "[copy-mediapipe] wasm runtime already staged."
    : `[copy-mediapipe] staged ${copied} file(s), ${(bytes / 1024 / 1024).toFixed(1)} MB → public/mediapipe/wasm/`
);
