# oMyImage — Hosting & Go-Live

Two pieces: **frontend → Cloudflare Pages** (static), **backend → VPS** (Express + Sharp).
Mirrors the oMyPDF setup. The backend is currently **stateless** — no database or
Redis required; processed files live in an on-disk ephemeral store and auto-delete
after 1 hour.

```
omyimage.com         → Cloudflare Pages (static Next.js export, global CDN)
api.omyimage.com     → VPS (Express + Sharp, Nginx + SSL)  [>15 MB, AI tools, HEIC]
```

> Most tools run **entirely in the browser** (≤ 15 MB). The backend is needed for
> large files and the server-only tools: remove background, upscale,
> html-to-image, and **HEIC to JPG**. You can launch the frontend alone and add
> the backend later — every server route returns a clean **501** until its binary
> is installed, and the rest of the site keeps working.

> **HEIC is server-only for licensing reasons, not performance.** Every
> JavaScript HEIC decoder bundles libheif (LGPL-3.0); shipping that to a browser
> is distribution and triggers the LGPL's source/relink obligations. Decoding on
> the server means the library is only ever run, never distributed. See
> `LICENSE-AUDIT.md` finding F1 — **do not move it back into the frontend.**

---

## 1. Frontend (`frontimg`) → Cloudflare Pages

Static export (`output: "export"` → `frontimg/out`), so Pages just serves files from the CDN.

**Build settings (Pages project):**
- Framework preset: **None** (or Next.js — Static HTML Export).
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `frontimg`
- Node version: 20+ (`NODE_VERSION=20`).

**Environment variables (Production):** set under **Pages → Settings → Variables and
secrets**.

| Var | Value |
| --- | ----- |
| `NEXT_PUBLIC_SITE_URL` | `https://omyimage.com` |
| `NEXT_PUBLIC_BACKEND_URL` | `https://api.omyimage.com` |

> ⚠ **These are read at BUILD time, and they are load-bearing.** If
> `NEXT_PUBLIC_BACKEND_URL` is unset, `frontimg/src/lib/site.ts` falls back to
> `http://localhost:5000` — which works on a dev machine and silently breaks every
> server-backed tool in production, with the browser reporting only "Couldn't reach
> the processing server."
>
> This is not a hypothetical. Until 2026-08-11 the Pages project had **no variables
> set at all**, so the live site had been calling localhost since launch. That, not
> the missing API, is why the server tools never worked.
>
> They also apply only to the **next** build — after saving, retry the latest
> deployment. Verify what actually shipped by grepping the live bundle rather than
> trusting the dashboard:
>
> ```bash
> curl -s https://omyimage.com/html-to-image \
>   | grep -oE '/_next/static/chunks/[^"]+\.js' | sort -u \
>   | while read f; do curl -s "https://omyimage.com$f"; done \
>   | grep -oh 'https://api\.omyimage\.com\|localhost:5000' | sort -u
> ```

**Domain & security:**
- Add `omyimage.com` as a custom domain (Cloudflare manages DNS + SSL).
- Enable **HTTPS-only** + **HSTS** (SSL/TLS → Edge Certificates).
- `trailingSlash: false` → routes emit `out/crop-image.html`, served at `/crop-image`.

**Frontend npm dependencies (all permissive / commercial-OK):**

| Package | Purpose | License |
| --- | --- | --- |
| `next`, `react`, `react-dom` | framework | MIT |
| `tailwindcss` v4, `@tailwindcss/postcss` | styling | MIT |
| `sonner` | toasts | MIT |
| `jszip` | batch ZIP download | MIT / GPLv3 dual — **we elect MIT** |
| `pdf-lib` | Image → PDF | MIT |
| `exifr` | EXIF/GPS metadata (incl. HEIC tags) | MIT |
| `gifenc`, `gifuct-js` | GIF encode / decode | MIT |

No native build tools needed for the frontend — it's pure JS and static-exports
anywhere (Cloudflare Pages, Netlify, Vercel static, S3 + CloudFront, Nginx).

**No copyleft code ships to browsers.** `heic2any` was removed for this reason;
`npm run build` regenerates `public/THIRD-PARTY-NOTICES.txt` via the `prebuild`
hook, linked from the footer. Verify after any dependency change:

```bash
cd frontimg && npm run build
grep -ril "libheif\|HeifDecoder\|_emscripten" out/_next/   # expect no matches
find out -name "*.wasm" | wc -l                            # expect 0
```

---

## 2. Backend → the oMyPDF backend (`api.omyimage.com`)

**There is no `backimg` any more.** On 2026-08-11 the oMyImage backend was merged
into the oMyPDF backend: one codebase, one VPS, one PM2 process, one deploy script.
`backimg/` was deleted from this repo (last standalone version: git tag
`backimg-final`).

| | |
|---|---|
| Code | `omypdf-project/backend/` — routes in `src/routes/image/`, engines in `src/lib/image/` |
| API base | `https://api.omyimage.com` |
| Routes | namespaced **`/api/image/*`** (`/api/image/compress`, `/api/image/heic`, …) |
| Host | a second nginx `server_name` proxying to the *same* `127.0.0.1:4000` as `api.omypdf.com` |
| Deploy / provisioning | **`omypdf-project/hosting.md` §5** |
| External binaries | **`omypdf-project/backend/ai/README.md`** |

Why the routes are namespaced: oMyPDF already has `POST /api/compress` and
`POST /api/resize`, so mounting the image routes bare would have silently shadowed
one product with the other.

### 2.1 What this repo still owns

Only `frontimg`. The one backend-facing thing to get right here is
`NEXT_PUBLIC_BACKEND_URL` — see §1, and read the warning there, because getting it
wrong is invisible until a user tries a server tool.

### 2.2 Where the old §2 content went

The VPS provisioning that used to live here — installing ImageMagick + libheif,
rembg and Real-ESRGAN, the nginx block, the PM2 entry — moved to
`omypdf-project/hosting.md` §5 and `omypdf-project/backend/ai/README.md`, corrected
against what actually happened when it was run on the production box. Three of the
old commands did not work as written:

- `pip install "rembg[cli]"` — refused by PEP 668 on Ubuntu 24.04, and missing the
  `cpu` extra, so the CLI installs but has no inference backend.
- `apt install imagemagick libheif1` — reports HEIC support and then fails at decode
  with `Unsupported codec`. Needs `libheif-plugin-libde265`.
- `REALESRGAN_MODEL=realesrgan-x4plus` — 3m29s for one small image on a CPU-only
  box, versus 8s for `realesr-animevideov3`.

---

## 3. Stack in use (as of now)

| Layer | Tech | License | Notes |
| --- | --- | --- | --- |
| Frontend | Next.js 16 (static export), React 19, Tailwind v4 | MIT | Cloudflare Pages |
| Browser image engine | HTML Canvas + `createImageBitmap` | — | crop, resize, rotate, compress, convert, watermark, meme, photo editor, blur |
| Browser libs | pdf-lib, jszip, exifr, gifenc, gifuct-js, sonner | MIT | Image→PDF, ZIP, EXIF, GIF, toasts |
| Backend | Node 22, Express 4 — **the shared oMyPDF backend** | MIT | one process serves both products |
| Server image engine | **Sharp** (libvips) | Apache-2.0 / LGPL | convert/compress/resize/rotate for >15 MB |
| HEIC decode | **ImageMagick 6** + libheif + `libheif-plugin-libde265` | Apache-like / LGPL-3.0 | **required for the HEIC tool** — server-only by licence |
| AI: background removal | **rembg** + U²-Net (venv at `/opt/rembg`) | MIT / Apache-2.0 | live, ~7 s/request |
| AI: upscale | **Real-ESRGAN** (ncnn-vulkan, Mesa llvmpipe) | BSD-3 / MIT | live, model `realesr-animevideov3`, 2 MP input cap |
| HTML → image | **Puppeteer** + Chromium | Apache-2.0 / BSD | live, shares one Chromium with oMyPDF |
| Process mgmt / web | PM2, Nginx, certbot | MIT / BSD / — | production |

**Not wired, and no longer planned here:** BullMQ + Redis. The bounded concurrency
gate in the merged backend (`IMAGE_HEAVY_CONCURRENCY`, default 2, with a capped
queue) covers the same failure mode without adding Redis.

**Auth, plans and billing** are Phase 2 of the backend merge. The decision taken is
**two databases on one Postgres server** (`omypdf` and `omyimage`), which means an
omypdf.com account will *not* be an omyimage.com account. Image routes are anonymous
and unmetered until that lands.

### Processing router (15 MB rule)

- **≤ 15 MB** → processed **in the browser** (instant, private).
- **> 15 MB** → offloaded to `https://api.omyimage.com/api/image/*` (Sharp)
  automatically. See `frontimg/src/lib/process-router.ts`.
- **AI / html-to-image** → always on the server (heavy models / headless Chromium).
- **HEIC** → always on the server, at any size. Licensing, not size — see
  `LICENSE-AUDIT.md` F1. This is the only tool that uploads regardless of file size,
  and the page says so plainly rather than claiming in-browser privacy.

---

## 4. Pre-launch checklist

- [x] `NEXT_PUBLIC_SITE_URL` set **in the Pages project** (canonical/sitemap correctness).
- [x] `NEXT_PUBLIC_BACKEND_URL` set **in the Pages project** to `https://api.omyimage.com`,
      and the deployment retried afterwards so the value is actually baked in.
      **Verify by grepping the live bundle** — the dashboard cannot tell you what shipped.
- [x] `omyimage.com` origins appended to `FRONTEND_ORIGIN` on the backend
      (appended, never prepended — the first entry builds oMyPDF's email links).
- [x] `api.omyimage.com` DNS is **grey cloud (DNS only)**; apex + www stay proxied.
- [x] HTTPS + HSTS active on both `omyimage.com` and `api.omyimage.com`;
      `certbot renew --dry-run` lists **both** certs.
- [x] `GET https://api.omyimage.com/api/image/health` → `service: "omyimage-backend"`.
      (Bare `/health` answers `omypdf-backend` — same process, not a bug.)
- [x] Browser tools work with the backend unreachable (crop, resize, rotate, compress, convert, watermark, meme, editor, blur, image→PDF).
- [x] Large file (>15 MB) convert/compress/resize/rotate succeeds via the server.
- [x] **`convert -list format | grep -i heic` shows HEIC → HEIC to JPG returns 200, not 501.**
      `r--` is expected and fine. Needs `libheif-plugin-libde265`, not just `libheif1`.
- [x] `rembg` installed → Remove Background returns a transparent PNG (not 501).
- [x] `realesrgan-ncnn-vulkan` installed → Upscale returns a larger image (not 501),
      and an oversized input returns a fast 413 rather than hanging.
- [x] `POST /api/images-to-pdf` on the oMyPDF side still reaches the PDF tool —
      proves the `/api/image` mount does not shadow it.
- [ ] (If enabled) `puppeteer` installed → HTML to Image renders (not 501).
- [ ] `client_max_body_size` in Nginx matches `MAX_UPLOAD_MB`.
- [ ] Privacy Policy states files are processed transiently and deleted within an hour.
- [ ] Privacy Policy / HEIC page reflect that HEIC uploads to the server (it is the one tool that does).
- [ ] `THIRD-PARTY-NOTICES.txt` regenerated and reachable at `/THIRD-PARTY-NOTICES.txt`.
- [ ] No copyleft in the browser bundle: `grep -ril "libheif\|_emscripten" frontimg/out/_next/` is empty.
