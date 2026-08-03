# oMyImage — Open-Source Licence Audit

**Date:** 2026-08-03
**Scope:** `frontimg` (Next.js static export, shipped to browsers) and `backimg` (Express API, server-side only)
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
| F4 | Capability copy claimed formats the tool never accepted | Low | **Fixed** — copy corrected |

---

## Inventory

| App | Packages | Licence breakdown |
|-----|---------:|-------------------|
| `frontimg` | 68 | 51 MIT · 5 Apache-2.0 · 4 ISC · 2 MPL-2.0 · 1 BSD-3-Clause · 1 0BSD · 1 (MIT AND Zlib) · 1 CC-BY-4.0 · 1 (MIT OR GPL-3.0) · 1 (Apache-2.0 AND LGPL-3.0) |
| `backimg` | 134 | 115 MIT · 8 Apache-2.0 · 7 ISC · 2 BSD-3-Clause · 1 BSD-2-Clause · 1 (Apache-2.0 AND LGPL-3.0) |

### Direct production dependencies

**`frontimg`** — everything here is served to end users, so distribution terms apply.

| Package | Version | Licence | Commercial |
|---|---|---|---|
| exifr | 7.1.3 | MIT | Yes |
| gifenc | 1.0.3 | MIT | Yes |
| gifuct-js | 2.1.2 | MIT | Yes |
| jszip | 3.10.1 | (MIT OR GPL-3.0-or-later) | Yes — **we elect MIT** |
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

**`backimg`** — server-side only; never distributed to users.

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
| rembg | MIT | No — server binary | Yes |
| U²-Net model (rembg default) | Apache-2.0 | No | Yes |
| Real-ESRGAN | BSD-3-Clause | No | Yes |
| realesrgan-ncnn-vulkan | MIT | No | Yes |

The AI tools are invoked as **separate processes** (`spawn`) in
`backimg/src/lib/image/ai.ts`, not linked into our binary, so no licence
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
`frontimg` and the tool now POSTs to `backimg`'s `POST /api/heic`, which shells
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

- **In `backimg`** sharp runs **server-side only**. Users receive processed
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
