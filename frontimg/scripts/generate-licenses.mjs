/**
 * Generates third-party license attributions for oMyImage.
 *
 * Walks the *production* dependency tree (package.json `dependencies` and their
 * transitive `dependencies`, skipping devDependencies), reads each package's
 * SPDX license id and full license text from node_modules, then emits:
 *
 *   src/data/third-party-licenses.json  — structured data
 *   public/THIRD-PARTY-NOTICES.txt      — plain-text notices for download
 *
 * Run:  npm run licenses   (also runs automatically via `prebuild`)
 *
 * This satisfies the notice condition of the MIT / BSD / Apache-2.0 / ISC / MPL
 * licenses our dependencies ship under. Re-run whenever dependencies change.
 *
 * An npm walk cannot see everything we ship or run, so MANUAL_COMPONENTS below
 * covers the webfonts served to browsers and the external binaries the backend
 * shells out to. Keep that list in step with reality — see LICENSE-AUDIT.md.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const NODE_MODULES = join(ROOT, "node_modules");

// Match any license/copying/notice file regardless of extension or case
// (LICENSE, licence.md, LICENSE.markdown, COPYING, license-MIT, …).
const LICENSE_FILE_RE = /^(licen[sc]e|copying|notice|unlicense)([-._].*)?$/i;

/**
 * Components we ship or run that are not npm production dependencies, so the
 * tree walk below can never find them.
 */
const MANUAL_COMPONENTS = [
  {
    name: "Inter",
    license: "SIL Open Font License 1.1",
    repository: "https://github.com/rsms/inter",
    note: "Webfont served to browsers, self-hosted at build time by next/font.",
  },
  {
    name: "JetBrains Mono",
    license: "SIL Open Font License 1.1",
    repository: "https://github.com/JetBrains/JetBrainsMono",
    note: "Webfont served to browsers, self-hosted at build time by next/font.",
  },
  // The tesseract.js-core WASM is a single emscripten artefact that statically
  // links these C libraries. npm sees one Apache-2.0 package; the browser
  // receives all of them, and shipping a browser bundle is distribution, so
  // each one's attribution clause applies to us. This is the same reasoning
  // that made heic2any a problem (LICENSE-AUDIT F1) — the difference is that
  // every library here is permissive, so attribution is the whole obligation
  // rather than a source/relink requirement.
  {
    name: "Leptonica (bundled in tesseract.js-core WASM)",
    license: "BSD-2-Clause",
    repository: "https://github.com/DanBloomberg/leptonica",
    note: "Image-processing library statically linked into the OCR WebAssembly build.",
  },
  {
    name: "Tesseract OCR engine (bundled in tesseract.js-core WASM)",
    license: "Apache-2.0",
    repository: "https://github.com/tesseract-ocr/tesseract",
    note: "Compiled to WebAssembly and served to browsers on /image-to-text.",
  },
  {
    name: "libpng, libjpeg, libtiff, zlib (bundled in tesseract.js-core WASM)",
    license: "libpng-2.0 / IJG / libtiff (BSD-like) / Zlib",
    repository: "https://github.com/naptha/tesseract.js-core",
    note: "Codec libraries statically linked into the OCR WebAssembly build. All permissive; attribution only.",
  },
  {
    name: "Tesseract trained language data",
    license: "Apache-2.0",
    repository: "https://github.com/naptha/tessdata",
    note: "Recognition models fetched from the jsDelivr CDN on first use of /image-to-text.",
  },
  {
    name: "Material Symbols",
    license: "Apache-2.0",
    repository: "https://github.com/google/material-design-icons",
    note: "Icon font loaded from the Google Fonts CDN.",
  },
  // The npm walk sees @mediapipe/tasks-vision, but not the two artefacts that
  // actually reach the browser: the WebAssembly runtime (staged out of
  // node_modules by scripts/copy-mediapipe.mjs) and the model weights, which
  // are a separate download from Google and are committed under public/.
  {
    name: "MediaPipe Vision WebAssembly runtime",
    license: "Apache-2.0",
    repository: "https://github.com/google-ai-edge/mediapipe",
    note:
      "Compiled to WebAssembly and served from our own origin on /blur-face. " +
      "Staged into public/mediapipe/wasm/ at build time from @mediapipe/tasks-vision.",
  },
  {
    name: "MediaPipe BlazeFace (short-range) face detection model",
    license: "Apache-2.0",
    repository: "https://ai.google.dev/edge/mediapipe/solutions/vision/face_detector",
    note:
      "Model weights (blaze_face_short_range.tflite) served from our own origin on /blur-face. " +
      "Runs entirely in the browser; no image data leaves the device.",
  },
  {
    name: "sharp / libvips",
    license: "Apache-2.0 (sharp) AND LGPL-3.0-or-later (libvips and linked libraries)",
    repository: "https://github.com/lovell/sharp",
    note:
      "Server-side only (oMyPDF backend). Run to provide a network service, never distributed, " +
      "so the LGPL's distribution conditions do not attach.",
  },
  {
    name: "ImageMagick (built with libheif)",
    license: "ImageMagick License (Apache-2.0-like) AND LGPL-3.0-or-later (libheif)",
    repository: "https://github.com/ImageMagick/ImageMagick",
    note:
      "Server-side only (oMyPDF backend), invoked as a separate process for HEIC decoding. " +
      "Deliberately not shipped to browsers — see LICENSE-AUDIT.md finding F1.",
  },
  {
    name: "Puppeteer",
    license: "Apache-2.0",
    repository: "https://github.com/puppeteer/puppeteer",
    note: "Server-side only (oMyPDF backend), used for HTML-to-image rendering.",
  },
  {
    name: "rembg + U^2-Net model",
    license: "MIT (rembg) AND Apache-2.0 (U^2-Net model)",
    repository: "https://github.com/danielgatis/rembg",
    note: "Server-side only, invoked as a separate process for background removal.",
  },
  {
    name: "Real-ESRGAN (realesrgan-ncnn-vulkan)",
    license: "BSD-3-Clause (Real-ESRGAN) AND MIT (realesrgan-ncnn-vulkan)",
    repository: "https://github.com/xinntao/Real-ESRGAN",
    note: "Server-side only, invoked as a separate process for upscaling.",
  },
];

/** Dual-licensed packages where we elect one of the options. */
const LICENSE_ELECTIONS = {
  jszip: {
    offered: "(MIT OR GPL-3.0-or-later)",
    elected: "MIT",
  },
};

/** Resolve a package's install directory under a hoisted node_modules. */
function pkgDir(name) {
  const dir = join(NODE_MODULES, ...name.split("/"));
  return existsSync(join(dir, "package.json")) ? dir : null;
}

function readJSON(path) {
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return null; }
}

/** Best-effort SPDX id from a package.json `license`/`licenses` field. */
function spdxOf(pkg) {
  if (typeof pkg.license === "string") return pkg.license;
  if (pkg.license && typeof pkg.license === "object" && pkg.license.type) return pkg.license.type;
  if (Array.isArray(pkg.licenses)) return pkg.licenses.map((l) => l.type || l).filter(Boolean).join(" OR ");
  return "UNKNOWN";
}

/** Infer an SPDX id from license text when package.json omits the field. */
function spdxFromText(text) {
  if (!text) return "UNKNOWN";
  const t = text.slice(0, 600);
  if (/MIT License|Permission is hereby granted, free of charge/i.test(t)) return "MIT";
  if (/Apache License,?\s+Version 2\.0/i.test(t)) return "Apache-2.0";
  if (/ISC License|ISC\b/i.test(t) && /Permission to use, copy, modify/i.test(t)) return "ISC";
  if (/Redistribution and use in source and binary forms/i.test(t)) {
    return /neither the name/i.test(text.slice(0, 1500)) ? "BSD-3-Clause" : "BSD-2-Clause";
  }
  if (/This is free and unencumbered software released into the public domain/i.test(t)) return "Unlicense";
  return "UNKNOWN";
}

/** Read the full text of the license file shipped with a package, if any. */
function licenseText(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return null; }
  const matches = entries.filter((f) => LICENSE_FILE_RE.test(f));
  // Prefer a plain LICENSE over LICENSE-APACHE/LICENSE-MIT variants.
  matches.sort((a, b) => a.length - b.length);
  for (const name of matches) {
    try {
      const txt = readFileSync(join(dir, name), "utf8").trim();
      if (txt) return txt;
    } catch { /* keep looking */ }
  }
  // Some packages only embed the notice inside a README.
  for (const name of ["README.md", "readme.md"]) {
    const p = join(dir, name);
    if (existsSync(p)) {
      const txt = readFileSync(p, "utf8");
      const idx = txt.search(/\n#+\s*Licen[sc]e/i);
      if (idx !== -1) return txt.slice(idx).trim().split(/\n#+\s/)[0].trim();
    }
  }
  return null;
}

function personString(p) {
  if (!p) return "";
  if (typeof p === "string") return p.replace(/\s*<[^>]*>/, "").replace(/\s*\([^)]*\)/, "").trim();
  return (p.name || "").trim();
}

function repoUrl(pkg) {
  const r = pkg.repository;
  let url = typeof r === "string" ? r : r?.url;
  if (!url) return pkg.homepage || "";
  return url.replace(/^git\+/, "").replace(/^git:\/\//, "https://").replace(/\.git$/, "").replace(/^ssh:\/\/git@/, "https://");
}

// ── Walk production dependency tree (BFS, deduped) ───────────────────────────
const rootPkg = readJSON(join(ROOT, "package.json"));
const queue = Object.keys(rootPkg.dependencies || {});
const seen = new Set();
const collected = new Map(); // name -> record

while (queue.length) {
  const name = queue.shift();
  if (seen.has(name)) continue;
  seen.add(name);

  const dir = pkgDir(name);
  if (!dir) continue; // dependency not installed (e.g. optional) — skip
  const pkg = readJSON(join(dir, "package.json"));
  if (!pkg) continue;

  const text = licenseText(dir);
  let license = spdxOf(pkg);
  if (license === "UNKNOWN") license = spdxFromText(text);

  const election = LICENSE_ELECTIONS[name];

  collected.set(name, {
    name,
    version: pkg.version || "",
    license: election ? election.elected : license,
    offeredLicense: election ? election.offered : undefined,
    author: personString(pkg.author) || personString((pkg.contributors || [])[0]) || "",
    repository: repoUrl(pkg),
    text,
  });

  for (const dep of Object.keys(pkg.dependencies || {})) {
    if (!seen.has(dep)) queue.push(dep);
  }
}

const records = [...collected.values()].sort((a, b) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" })
);

// License-type summary counts.
const summary = {};
for (const r of records) {
  const key = r.license || "UNKNOWN";
  summary[key] = (summary[key] || 0) + 1;
}

// ── Emit JSON ────────────────────────────────────────────────────────────────
const dataDir = join(ROOT, "src", "data");
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
const generatedAt = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(dataDir, "third-party-licenses.json"),
  JSON.stringify(
    { generatedAt, count: records.length, summary, packages: records, additionalComponents: MANUAL_COMPONENTS },
    null,
    2
  ) + "\n",
  "utf8"
);

// ── Emit plain-text notices for download ─────────────────────────────────────
const lines = [];
lines.push("oMyImage — Third-Party Software Notices and Information");
lines.push("=".repeat(64));
lines.push("");
lines.push(`Generated: ${generatedAt}`);
lines.push(`Packages:  ${records.length} npm production dependencies`);
lines.push(`           + ${MANUAL_COMPONENTS.length} additional components (fonts and external binaries)`);
lines.push("");
lines.push("This product incorporates the open-source components listed below.");
lines.push("Each is provided under its own license, reproduced in full where the");
lines.push("package ships a license file.");
lines.push("");
lines.push("=".repeat(64));
lines.push("");

for (const r of records) {
  lines.push(`${r.name}@${r.version}`);
  if (r.author) lines.push(`Author:     ${r.author}`);
  lines.push(`License:    ${r.license}`);
  if (r.offeredLicense) {
    lines.push(`            (offered as ${r.offeredLicense}; oMyImage elects ${r.license})`);
  }
  if (r.repository) lines.push(`Repository: ${r.repository}`);
  lines.push("");
  lines.push(r.text || `(No bundled license file. Distributed under the ${r.license} license.)`);
  lines.push("");
  lines.push("-".repeat(64));
  lines.push("");
}

lines.push("");
lines.push("=".repeat(64));
lines.push("ADDITIONAL COMPONENTS");
lines.push("=".repeat(64));
lines.push("");
lines.push("Webfonts served to browsers and external programs the backend runs.");
lines.push("These are not npm packages, so they are recorded here by hand.");
lines.push("");
for (const c of MANUAL_COMPONENTS) {
  lines.push(c.name);
  lines.push(`License:    ${c.license}`);
  if (c.repository) lines.push(`Repository: ${c.repository}`);
  if (c.note) lines.push(`Note:       ${c.note}`);
  lines.push("");
  lines.push("-".repeat(64));
  lines.push("");
}

const publicDir = join(ROOT, "public");
if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "THIRD-PARTY-NOTICES.txt"), lines.join("\n"), "utf8");

console.log(`Generated notices for ${records.length} production packages + ${MANUAL_COMPONENTS.length} additional components.`);
console.log("License breakdown:");
for (const [lic, n] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(4)}  ${lic}`);
}
