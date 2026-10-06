# oMyImage — Open-Source Licence Audit

**Date:** 2026-08-03
**Scope:** `frontimg` (Next.js static export, shipped to browsers) and the server-side
image API. That API used to live here as `backimg`; since 2026-08-11 it is part of the
shared oMyPDF backend (`omypdf-project/backend/`, routes under `src/routes/image/`).
The distribution analysis is unchanged by the move — server-side is server-side — but
the paths below point at the merged location.
**Standing rule:** only free / open-source libraries that are safe for **commercial** use.

> This reflects the dependency tree installed at the time of writing. Re-run the
> commands in [Re-running this audit](#re-running-this-audit) whenever
> dependencies change.

---

## Verdict

**No dependency forbids commercial use, and nothing is copyleft-infectious.**

Two compliance gaps were found. One has been **fixed** by removing the offending
dependency; the other by adding third-party notices. Both are recorded below.

| ID | Finding | Severity | Status |
|----|---------|----------|--------|
| F1 | `heic2any` shipped LGPL-3.0 `libheif` to the browser | **High** | **Fixed** — decoding moved server-side, dependency removed |
| F2 | No third-party notices anywhere (~180 permissive packages require them) | Medium | **Fixed** — notices generated on build |
| F3 | Low-risk items (sharp/LGPL server-side, jszip dual, MPL build tools) | Low | Documented, no action |
| F4 | Capability/privacy copy that did not match the engine (formats, "never uploaded") | Low | **Fixed** — copy corrected (recurrences 2026-08-14, 2026-09-19) |

---

## Inventory

| App | Packages | Licence breakdown |
|-----|---------:|-------------------|
| `frontimg` | 68 | 51 MIT · 5 Apache-2.0 · 4 ISC · 2 MPL-2.0 · 1 BSD-3-Clause · 1 0BSD · 1 (MIT AND Zlib) · 1 CC-BY-4.0 · 1 (MIT OR GPL-3.0) · 1 (Apache-2.0 AND LGPL-3.0) |
| server-side image API (was `backimg`) | 134 | 115 MIT · 8 Apache-2.0 · 7 ISC · 2 BSD-3-Clause · 1 BSD-2-Clause · 1 (Apache-2.0 AND LGPL-3.0) |

### Direct production dependencies

**`frontimg`** — everything here is served to end users, so distribution terms apply.

| Package | Version | Licence | Commercial |
|---|---|---|---|
| exifr | 7.1.3 | MIT | Yes |
| gifenc | 1.0.3 | MIT | Yes |
| gifuct-js | 2.1.2 | MIT | Yes |
| jszip | 3.10.1 | (MIT OR GPL-3.0-or-later) | Yes — **we elect MIT** |
| mp4-muxer | 5.2.2 | MIT | Yes — see F7 |
| onnxruntime-web | 1.30.0 | MIT (wasm statically links Eigen, MPL-2.0) | Yes — see F8 |
| next | 16.2.7 | MIT | Yes |
| pdf-lib | 1.17.1 | MIT | Yes |
| react | 19.2.4 | MIT | Yes |
| react-dom | 19.2.4 | MIT | Yes |
| sonner | 2.0.7 | MIT | Yes |
| ~~heic2any~~ | ~~0.0.4~~ | ~~MIT (wrapper) / **LGPL-3.0** (bundled libheif)~~ | **Removed — see F1** |

> **There is no JS HEIC decoder without this problem.** Verified against the
> registry: `libheif-js` is **LGPL-3.0** and declares it; `heic-decode` (ISC) and
> `heic-convert` (ISC) are thin wrappers that depend on it; `heic2any` (MIT)
> bundles the same emscripten build. The permissive wrapper licence is cosmetic —
> the engine is libheif in all four. Swapping packages achieves nothing.

**Server-side image API** (was `backimg`, now `omypdf-project/backend/`) — server-side
only; never distributed to users.

| Package | Version | Licence | Commercial |
|---|---|---|---|
| cors | 2.8.6 | MIT | Yes |
| dotenv | 16.6.1 | BSD-2-Clause | Yes |
| express | 4.22.2 | MIT | Yes |
| express-rate-limit | 7.5.1 | MIT | Yes |
| multer | 2.2.0 | MIT | Yes |
| puppeteer | 25.2.1 | Apache-2.0 | Yes |
| sharp | 0.33.5 | Apache-2.0 | Yes (see F3) |

### Non-npm components

| Component | Licence | Distributed? | Commercial |
|---|---|---|---|
| Inter (via `next/font`) | SIL OFL-1.1 | Yes — woff2 served to browsers | Yes |
| JetBrains Mono (via `next/font`) | SIL OFL-1.1 | Yes | Yes |
| Material Symbols (Google Fonts CDN) | Apache-2.0 | Loaded from CDN | Yes |
| Twemoji Country Flags (`country-flag-emoji-polyfill`, self-hosted woff2) | MIT (package) + CC-BY-4.0 (Twemoji artwork) | Yes — woff2 served to browsers | Yes, with attribution. The package is a production dependency so the generator reproduces its LICENSE.md, Twemoji credit included. Added 2026-10-04. |
| rembg | MIT | No — server binary | Yes |
| U²-Net model (rembg default) | Apache-2.0 | No | Yes |
| Real-ESRGAN | BSD-3-Clause | No | Yes |
| realesrgan-ncnn-vulkan | MIT | No | Yes |

The AI tools are invoked as **separate processes** (`spawn`) in
`backend/src/lib/image/ai.ts` in the oMyPDF repo, not linked into our binary, so no licence
propagates to our code regardless of what they are under.

---

## F1 — `heic2any` shipped LGPL-3.0 code to the browser · **High** · Fixed

**What the manifest said:** `heic2any@0.0.4` declares `"license": "MIT"`, and ships
an MIT `LICENSE.md`.

**What it actually shipped:** that MIT licence covers only Alex Corvi's wrapper.
`dist/heic2any.js` is a **1.4 MB** bundle with an emscripten build of
**libheif** embedded in it — confirmed directly:

```
$ grep -o -E '.{60}libheif.{60}' dist/heic2any.js
  …exports.libheif=zr):this.libheif=zr,"function"==typeof define&&define.amd
  …const decoder = new libheif.HeifDecoder(); let imagesArr = decoder.decode(…
```

libheif is **LGPL-3.0-or-later**.

**Why it mattered here specifically.** LGPL permits commercial use, so this was
never "not allowed". The problem is that a browser bundle is **distribution**,
which triggers LGPL §4: ship the licence text, attribute the library, and let
the recipient replace or relink it. A minified blob inside a webpack chunk
satisfies none of that, and the app carried no attribution at all.

**A separate, non-copyright issue: patents.** Decoding HEIC means decoding
**HEVC / H.265**, which is covered by active patent pools (Access Advance,
Via LA) that assert claims against commercial decoders. No open-source licence
grants those patent rights, so an OSS-clean codebase can still carry patent
exposure. Note this attaches to *any* implementation — it is not something a
different library can avoid. Corroborating evidence: sharp's prebuilt binary
links `libheif` but pairs it with **aom only** (no `libde265`/`x265`), giving it
AVIF support and deliberately **no HEIC** — its maintainers made exactly this
call.

**Resolution: decoding moved to the server.** `heic2any` was removed from
`frontimg` and the tool now POSTs to `POST /api/image/heic` on the shared backend, which shells
out to ImageMagick (built with libheif).

Why this resolves it: LGPL obligations attach to **distribution**. Running a
library to provide a network service is not distribution, so nothing has to be
shipped, offered or relinked — the identical reasoning that makes our
LGPL-linked libvips/sharp fine today (F3). Zero copyleft code now reaches a
browser. The HEVC patent question is unchanged and remains a business decision,
but it is now the same exposure any server-side image service carries rather
than something embedded in code we hand to every visitor.

**Consequences accepted:**
- The tool needs the backend running and ImageMagick installed; without it the
  route returns a clean 501, consistent with the other server tools.
- Photos are now uploaded. The page's privacy copy previously claimed
  "100% private in your browser… never uploaded", which became false — all six
  occurrences were rewritten to state plainly that this one tool is server-side
  and why.

**What deliberately stayed client-side.** The **Image Metadata Viewer** still
accepts `.heic`/`.heif` and reads it with **exifr** (MIT), which parses EXIF tags
out of the container **without decoding the HEVC-compressed pixels**. No libheif,
no decoder, no exposure.

---

## F2 — No third-party notices existed · Medium · Fixed

MIT, BSD-2, BSD-3, Apache-2.0 and ISC **all** require reproducing the copyright
and permission notice in distributions. `frontimg` had no `scripts/` directory,
no notices file and no attribution page, so the app was out of compliance with
roughly 180 permissive packages — not only the LGPL one in F1.

**Resolution:** ported oMyPDF's generator to `frontimg/scripts/generate-licenses.mjs`.
It walks the **production** dependency tree only (skipping devDependencies),
reads each package's SPDX id and full licence text from `node_modules`, and emits
`public/THIRD-PARTY-NOTICES.txt` plus `src/data/third-party-licenses.json`. A
`prebuild` hook regenerates it on every build so it cannot go stale, and the
footer links to the file.

Hand-written sections cover what an npm walk cannot see: the OFL fonts, the
server-side and AI binaries, and our **MIT election** for jszip's dual licence.

---

## F3 — Low-risk items · Documented, no action

**`@img/sharp-win32-x64` — `Apache-2.0 AND LGPL-3.0-or-later`.** sharp's own code
is Apache-2.0; the platform binary bundles libvips' LGPL dependency chain. Two
distinct situations:

- **On the server** sharp runs **server-side only**. Users receive processed
  images, never the binary. Under LGPL, obligations attach to *distribution* —
  running software to provide a network service is not distribution, so the terms
  do not trigger. (Note this reasoning is specific to LGPL/GPL-2/GPL-3; **AGPL**
  closes exactly this gap, which is why AGPL dependencies must be rejected
  outright for server use.)
- **In `frontimg`** it is an unused transitive optional dependency of Next.js.
  With `output: "export"` and `images.unoptimized: true` there is no image
  optimisation at runtime and no server, so nothing is used or shipped.

**`jszip` — `(MIT OR GPL-3.0-or-later)`.** Dual-licensed; the licensee chooses.
**We elect MIT**, and that election is recorded in the notices file so it is
documented rather than assumed.

**`lightningcss` + `lightningcss-win32-x64-msvc` — MPL-2.0.** Tailwind v4's CSS
engine. MPL is *file-level* weak copyleft: obligations attach only to modified
MPL-covered files. We consume it unmodified as a build tool. No obligation.

**`caniuse-lite` — CC-BY-4.0.** Browserslist support data, consumed at build
time. Not included in the static export.

---

## F4 — Inaccurate capability copy · Low · Fixed

Not a licensing issue, but found during the audit and in the same family as the
`"2x, 4x, 8x"` and `"face enhancement"` claims corrected earlier.

`convert-to-jpg` advertised `"PNG, WEBP, GIF, HEIC, TIFF & RAW → JPG"`, while its
`ConvertTool` accept string is `image/png,image/webp,image/gif,image/bmp`. HEIC,
TIFF and RAW were **never** supported. Corrected to the formats actually accepted.

**Recurrence (2026-08-14).** The same class of claim was found in three more
places and fixed:

- `ConvertTool` printed *"your images never leave your device"* under the drop
  zone, while `shouldUseServer()` POSTs anything over 15 MB to `/api/image/convert`.
  The line is now a `privacyNote` prop derived from the engine.
- `Dropzone` hardcoded the same wording, so **`heic-to-jpg` displayed it directly
  above its own intro paragraph explaining that it converts server-side**. Now a
  `privacyNote` prop; `heic-to-jpg`, `remove-background` and `upscale-image` pass
  the server wording.
- `bmp-to-jpg` would have routed >15 MB files to Sharp, which has **no BMP
  loader** — `looksLikeImage()` accepts BMP magic bytes so the upload passes
  validation and the conversion then throws. BMP pairs are flagged
  `serverFallback: false` and always convert locally.

**Recurrence (2026-09-19).** `/image-to-text` became server-first — `runOcrImage()`
in `lib/process-router.ts` uploads the image to `/api/image/ocr` (PaddleOCR),
the file is deleted after reading, and Tesseract.js in the browser is only the
fallback when the server is unreachable. The tool's `privacyNote` was updated at
the time, but the English content module `src/content/tools/image-to-text.en.ts`
still said the image "never leaves your device" in the intro, the `model`
section, the first feature, two FAQs and the security paragraph. All six were
rewritten to describe the real behaviour: encrypted upload, deletion after
reading, and on-device reading only in the fallback case (which the UI labels
"read on your device"). The pt-BR module already described it correctly.

---

## F5 — `tesseract.js` for browser OCR · **Approved** · 2026-08-14

Assessed under rule 1 before adoption, because the shape is superficially
identical to F1: a permissively-licensed npm wrapper around a large native
library compiled to WebAssembly and shipped to browsers.

The conclusion is the opposite of F1, and the reason matters:

| | heic2any (F1) | tesseract.js (F5) |
|---|---|---|
| npm manifest | MIT | Apache-2.0 |
| Bundled engine | libheif — **LGPL-3.0-or-later** | Tesseract — Apache-2.0 |
| Bundled deps | — | Leptonica BSD-2, libpng, libjpeg, libtiff, zlib |
| Grep of dist for `GPL`/`LGPL` | hits | **clean** |
| Obligation on distribution | source + relink rights (LGPL §4) | attribution only |
| Patent exposure | HEVC/H.265 pools | none |
| Verdict | removed, moved server-side | **shipped to the browser** |

`node_modules/tesseract.js/dist/` and `node_modules/tesseract.js-core/` were both
grepped for `LGPL`, `GNU General Public`, `GPL-2` and `GPL-3`: zero matches. The
core's own `LICENSE` is Apache-only.

Because the WASM is one statically-linked artefact, npm sees a single package
while the browser receives all of the above. Each carries an attribution clause,
so the bundled C libraries were added to `MANUAL_COMPONENTS` in
`frontimg/scripts/generate-licenses.mjs` rather than left to the npm tree walk —
this is the F2 obligation applied to statically-linked code.

**Runtime note.** The engine core and the language models are fetched from the
jsDelivr CDN on first use of the browser fallback on `/image-to-text`, not
bundled. On that path the *image* is never transmitted; only a generic model file
is downloaded. (Since 2026-09-19 the primary path is server-side PaddleOCR and
does upload the image — see the F4 recurrence note; the page copy says so.)
Self-hosting them under `public/` is a one-line `corePath`/`langPath` change if
the third-party request is later judged unacceptable.

---

## F6 — `@mediapipe/tasks-vision` for browser face detection · **Approved** · 2026-08-18

Added to power automatic face detection on `/blur-face`, replacing a tool that
had no detection at all.

**Checks performed**

| Check | Result |
|---|---|
| Declared licence | `Apache-2.0` (`@mediapipe/tasks-vision@1.0.1`) |
| Copyleft strings in `vision_bundle.{js,mjs,cjs}`, `vision.d.ts` | none |
| Copyleft strings in all six `wasm/*.wasm` and their loader JS (`grep -aiE "\b(A?GPL\|LGPL)\b\|GNU General Public\|GNU Lesser"`) | none |
| Model weights `blaze_face_short_range.tflite` | Apache-2.0, verified `TFL3` flatbuffer, 229,746 bytes |

**Verdict: approved.** Apache-2.0 throughout, permissive, commercially safe.
Rule 1 was applied properly here — the wasm binaries were grepped directly
rather than trusting the manifest, which is exactly the check F1 exists to force.

**Obligations discharged**

- Apache-2.0 requires reproducing the licence text; the package ships no
  `LICENSE` file of its own, but `THIRD-PARTY-NOTICES.txt` already carries the
  full Apache-2.0 text for other components, so the requirement is met.
- The two artefacts that actually reach the browser — the wasm runtime and the
  model weights — are invisible to the npm walk, so both are listed in
  `MANUAL_COMPONENTS` in `scripts/generate-licenses.mjs` (same reasoning as the
  tesseract.js-core entries).

**Note on shipping.** The wasm runtime is ~22 MB across the two variants
`FilesetResolver` can request. It is **not committed**: `scripts/copy-mediapipe.mjs`
stages it from `node_modules` into `public/mediapipe/wasm/` on `predev`/`prebuild`,
and that directory is gitignored. Only the 224 KB model is committed. Everything
is served from our own origin — no CDN request and no upload — which is what
keeps the "processed entirely in your browser" claim on `/blur-face` true.

---

## F7 — `mp4-muxer` for browser GIF → MP4 · **Approved** · 2026-10-06

Added for `/gif-to-mp4`. It only writes the MP4 container; the H.264 frames
come from the browser's own WebCodecs `VideoEncoder`.

**Checks performed**

| Check | Result |
|---|---|
| Declared licence | `MIT` (`mp4-muxer@5.2.2`, © 2023 Vanilagy), `LICENSE` file shipped |
| Copyleft strings in `build/mp4-muxer.{js,mjs,d.ts}` | none |
| Runtime dependencies | `@types/dom-webcodecs`, `@types/wicg-file-system-access`, both type-only |
| Copyleft strings in the built `out/` bundle after adding it | none |

**Verdict: approved.** Pure TypeScript, no wasm, no native code. The package
is marked deprecated in favour of its successor Mediabunny. Mediabunny is
**MPL-2.0**, so we stay on mp4-muxer, which is stable and complete for this use.

**Rule 4 (codecs and patents).** No codec ships with the site. H.264 encoding
is done by the visitor's browser or OS, which carries any codec licence.
Browsers without an H.264 encoder get an error message instead of a fallback
encoder.

**Obligations discharged:** the generator reproduces its MIT licence in
`THIRD-PARTY-NOTICES.txt`.

---

## F8 — `onnxruntime-web` + MI-GAN for browser inpainting · **Approved** · 2026-10-06

Added for `/remove-object` and `/remove-watermark` (expansion.md Phase 7).
ONNX Runtime Web runs the MI-GAN inpainting model on the visitor's CPU; no
image leaves the device.

**Checks performed**

| Check | Result |
|---|---|
| Declared licence | `MIT` (`onnxruntime-web@1.30.0`, Microsoft). Runtime deps `onnxruntime-common`, `flatbuffers`, `long`, `guid-typescript` — all permissive |
| Copyleft strings in the shipped `ort.wasm.min.mjs`, `ort-wasm-simd-threaded.{mjs,wasm}` (`grep -aiE "\b(A?GPL\|LGPL)\b\|GNU General Public\|GNU Lesser"`) | none |
| Native code inside the wasm | ONNX Runtime's CPU kernels, MLAS and **Eigen** (symbols such as `EigenNonBlockingThreadPool` present) |
| Eigen's licence | **MPL-2.0**; ONNX Runtime builds it with `EIGEN_MPL2_ONLY`, so no LGPL-era Eigen files are included |
| Model weights `migan_pipeline_v2.onnx` | **MIT**, © 2024 Picsart AI Research — the `LICENSE` beside the file at huggingface.co/andraniksargsyan/migan (the paper's first author); upstream code MIT. 28,079,181 bytes, SHA-256 `6f1f3530…8c40b`, equal to the Hub's LFS oid |

**Verdict: approved.** MIT runtime and MIT weights. MPL-2.0 is file-level
weak copyleft: shipping **unmodified** MPL files inside a larger work is
allowed for any purpose, commercial included. The only duty is to tell
recipients where the Source Code Form is (MPL §3.2). This is the same licence
as `lightningcss` (F3); the difference is that Eigen reaches the browser, so the
duty applies. No MPL-free alternative exists for running an ONNX model in a
browser, which is why the Mediabunny reasoning in F7 does not apply here.

**Obligations discharged**

- `MANUAL_COMPONENTS` in `scripts/generate-licenses.mjs` lists the ORT wasm
  runtime (MIT) and Eigen (MPL-2.0, with its source repository), and gives
  MI-GAN's weights their copyright line, so `THIRD-PARTY-NOTICES.txt`
  carries all three.

**Note on shipping**

- **Runtime:** ~14 MB, not committed. `scripts/copy-ort.mjs` stages
  `ort.wasm.min.mjs`, `ort-wasm-simd-threaded.mjs` and `.wasm` into
  `public/ort/<version>/` on `predev`/`prebuild` (gitignored), and fails the
  build if `ORT_VERSION` in `lib/image/inpaint.ts` drifts from the installed
  package. The WebGPU builds (27 MB each) are over Cloudflare Pages' 25 MiB
  per-file limit, so only the CPU build ships.
- **Model:** 28 MB, also over the limit. It is **committed** under
  `public/models/` in two byte-exact parts (`.gitattributes` marks them
  binary) and joined, then SHA-256-checked, in the browser. Committing rather
  than fetching at build time follows F6: builds must not depend on a third
  party being reachable.
- **Caching:** both are served immutable (`public/_headers`); the version
  folder and the hash in the model filenames change the URL on any update.

---

## Rules for adding a dependency

1. **Read the bundled code, not just the manifest.** F1 is the whole argument:
   `heic2any` truthfully declared MIT for its own source while shipping LGPL
   libheif inside `dist/`. Grep the built artefact for `GPL`, `LGPL`, and known
   native library names.
2. **Ask whether it reaches the browser.** Browser-shipped code is distributed;
   server-side code generally is not. This single question decides most
   copyleft outcomes.
3. **Reject AGPL outright** for anything server-side — it removes the
   network-service exemption that makes F3's sharp reasoning work.
4. **Licences are not patents.** A permissive licence says nothing about patent
   pools. Treat codecs (HEVC/H.265, AAC, and to a lesser degree AV1/VP9) as a
   separate question.
5. **Prefer dual licences you can elect** (jszip) and record the election.
6. **Re-run `npm run licenses`** after any dependency change.

---

## Re-running this audit

```bash
# 1. Regenerate the notices file (also runs automatically on prebuild)
cd frontimg && npm run licenses

# 2. Aggregate licences across the whole installed tree
node -e "const fs=require('fs'),p=require('path'),m={};(function w(d){for(const n of fs.readdirSync(d)){if(n[0]==='.')continue;const f=p.join(d,n);if(n[0]==='@'&&fs.statSync(f).isDirectory()){w(f);continue}const j=p.join(f,'package.json');if(fs.existsSync(j)){try{const k=JSON.parse(fs.readFileSync(j,'utf8'));const l=String(k.license||'?');(m[l]=m[l]||[]).push(k.name)}catch{}}}})('node_modules');for(const k of Object.keys(m).sort((a,b)=>m[b].length-m[a].length))console.log(String(m[k].length).padStart(5),k)"

# 3. Flag anything copyleft or non-commercial, then inspect those packages' dist/
#    for bundled native code before accepting the manifest at face value.

# 4. Prove no copyleft code reaches the browser bundle:
cd frontimg && npm run build && grep -ril "libheif\|LGPL" out/ || echo "clean"
```
