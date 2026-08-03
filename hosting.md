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

**Environment variables (Production):**

| Var | Value |
| --- | ----- |
| `NEXT_PUBLIC_SITE_URL` | `https://omyimage.com` |
| `NEXT_PUBLIC_BACKEND_URL` | `https://api.omyimage.com` |

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

## 2. Backend (`backimg`) → VPS (Ubuntu 22.04+)

Recommended: **4 vCPU / 8 GB RAM** (the AI tools are CPU/RAM heavy). A GPU with
Vulkan speeds up Real-ESRGAN but is optional.

### 2.1 Base install

```bash
# Node 20 LTS + Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx

# Process manager
sudo npm i -g pm2
```

> **Sharp** ships prebuilt `libvips` binaries, so no extra system packages are
> needed on x64/arm64 Linux. (Only if you build from source: `sudo apt install -y build-essential`.)

### 2.2 Deploy

```bash
git clone <repo> && cd omyimage-project/backimg
npm ci
npm run build                 # → dist/
cp .env.example .env          # fill in values
pm2 start ecosystem.config.js # or: pm2 start dist/server.js --name omyimage-backend
pm2 save && pm2 startup
```

### 2.3 Backend `.env` (production)

```
PORT=5000
FRONTEND_ORIGIN=https://omyimage.com
MAX_UPLOAD_MB=1024
MAX_IMAGE_PIXELS=50000000
TMP_DIR=/var/tmp/omyimage

# External binaries (see 2.5). Only set these if the binary isn't on PATH.
# MAGICK_BIN=/usr/bin/magick          # ImageMagick — required for HEIC
# REMBG_BIN=rembg
# REALESRGAN_BIN=/opt/realesrgan/realesrgan-ncnn-vulkan
# REALESRGAN_MODEL=realesrgan-x4plus
```

### 2.4 Nginx reverse proxy (`/etc/nginx/sites-available/omyimage`)

```nginx
server {
    listen 80;
    server_name api.omyimage.com;
    client_max_body_size 1024M;   # match MAX_UPLOAD_MB

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 180s;   # AI jobs can take a while
    }
}
```
```bash
sudo ln -s /etc/nginx/sites-available/omyimage /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.omyimage.com
```
Point `api.omyimage.com` (A record) at the VPS IP.

### 2.5 External binaries the backend shells out to

All free / open-source / commercial-use OK. Each is **independent** — if one
isn't installed, only its route returns **HTTP 501** ("not enabled on this
server") and everything else keeps working. Nothing here is bundled by `npm ci`;
they are system packages you install on the VPS.

| Tool | Enables | Route | Licence | Needed for launch? |
| --- | --- | --- | --- | --- |
| **ImageMagick** (with libheif) | HEIC → JPG/PNG | `POST /api/heic` | ImageMagick (Apache-like) + libheif LGPL-3.0 | **Yes, if you ship the HEIC tool** |
| **rembg** + U²-Net | Remove Background | `POST /api/remove-background` | MIT + Apache-2.0 | Optional |
| **realesrgan-ncnn-vulkan** | Upscale 2×/3×/4× | `POST /api/upscale` | MIT + BSD-3 | Optional |
| **Puppeteer** + Chromium | HTML → Image | `POST /api/html-to-image` | Apache-2.0 + BSD | Optional |

---

#### ImageMagick — HEIC to JPG/PNG **(required for the HEIC tool)**

This is the one server tool with no browser fallback: HEIC decoding cannot ship
to browsers under libheif's licence (see the note at the top of this file).
Without ImageMagick the HEIC tool is permanently 501.

```bash
# Debian / Ubuntu — the distro build links libheif
sudo apt install -y imagemagick libheif1

# macOS (dev machines)
brew install imagemagick libheif
```

**Verify HEIC support is actually compiled in** — installing ImageMagick is not
enough on its own, it must be built with libheif:

```bash
magick -list format | grep -i heic
# expect a line like:   HEIC  HEIC      rw+   High Efficiency Image Format
```

If that prints nothing, your build lacks libheif. Either use a distro package
that includes it, or build ImageMagick from source with `--with-heic`.

`.env` → `MAGICK_BIN` (defaults to `magick`; falls back to `convert` on
ImageMagick 6). **On Windows, set `MAGICK_BIN` explicitly** — bare `convert`
there is the built-in filesystem utility, not ImageMagick, so the fallback is
deliberately disabled on that platform.

Smoke test once deployed:
```bash
curl -s -o out.jpg -w "%{http_code}\n" \
  -F "file=@photo.heic;type=image/heic" \
  -F 'options={"format":"jpeg","quality":90}' \
  https://api.omyimage.com/api/heic
# 200 → out.jpg is a real JPEG.  501 → ImageMagick/libheif missing.
```

---

#### rembg — Remove Background (optional)

```bash
sudo apt install -y python3 python3-pip
pip3 install "rembg[cli]"        # downloads the U²-Net model on first run
rembg --help                     # set REMBG_BIN if not on PATH
```
Pin the model explicitly if you change it from the default `u2net` — some newer
rembg models ship under different terms; verify before switching.

#### Real-ESRGAN — Upscale (optional)

```bash
sudo apt install -y libvulkan1 mesa-vulkan-drivers wget unzip
wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip
unzip realesrgan-ncnn-vulkan-*.zip -d /opt/realesrgan
chmod +x /opt/realesrgan/realesrgan-ncnn-vulkan
# .env → REALESRGAN_BIN=/opt/realesrgan/realesrgan-ncnn-vulkan
```
A Vulkan-capable GPU speeds this up considerably but is not required.

#### Puppeteer — HTML to Image (optional)

```bash
# Chromium runtime libs
sudo apt install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 \
  libcairo2 libasound2 fonts-liberation
cd backimg && npm i puppeteer     # downloads a pinned Chromium
```

---

#### One-shot install (Ubuntu 22.04+, everything)

```bash
sudo apt update && sudo apt install -y \
  imagemagick libheif1 \
  python3 python3-pip \
  libvulkan1 mesa-vulkan-drivers wget unzip \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 \
  libxcomposite1 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 libcairo2 \
  libasound2 fonts-liberation

pip3 install "rembg[cli]"
wget -q https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip
sudo unzip -q realesrgan-ncnn-vulkan-*.zip -d /opt/realesrgan
sudo chmod +x /opt/realesrgan/realesrgan-ncnn-vulkan
cd backimg && npm i puppeteer
```

**Verify every binary resolves before going live:**
```bash
magick -list format | grep -qi heic && echo "OK  imagemagick+heic" || echo "MISSING imagemagick+heic"
command -v rembg >/dev/null && echo "OK  rembg" || echo "MISSING rembg"
command -v realesrgan-ncnn-vulkan >/dev/null || [ -x /opt/realesrgan/realesrgan-ncnn-vulkan ] \
  && echo "OK  realesrgan" || echo "MISSING realesrgan"
```

See `backimg/ai/README.md` for env overrides and per-tool detail.

---

## 3. Stack in use (as of now)

| Layer | Tech | License | Notes |
| --- | --- | --- | --- |
| Frontend | Next.js 16 (static export), React 19, Tailwind v4 | MIT | Cloudflare Pages |
| Browser image engine | HTML Canvas + `createImageBitmap` | — | crop, resize, rotate, compress, convert, watermark, meme, photo editor, blur |
| Browser libs | pdf-lib, jszip, exifr, gifenc, gifuct-js, sonner | MIT | Image→PDF, ZIP, EXIF, GIF, toasts |
| Backend | Node 20, Express 4, multer, cors, express-rate-limit | MIT | stateless API |
| Server image engine | **Sharp** (libvips) | Apache-2.0 / LGPL | convert/compress/resize/rotate for >15 MB |
| HEIC decode | **ImageMagick** + libheif | Apache-like / LGPL-3.0 | **required for the HEIC tool** — server-only by licence |
| AI: background removal | **rembg** + U²-Net | MIT / Apache-2.0 | optional |
| AI: upscale | **Real-ESRGAN** (ncnn-vulkan) | BSD-3 / MIT | optional |
| HTML → image | **Puppeteer** + Chromium | Apache-2.0 / BSD | optional |
| Process mgmt / web | PM2, Nginx, certbot | MIT / BSD / — | production |

**Not yet wired (future / Phase 2–3):** BullMQ + Redis queue, PostgreSQL, auth/plans/billing.
The current backend has no DB or Redis dependency.

### Processing router (15 MB rule)

- **≤ 15 MB** → processed **in the browser** (instant, private).
- **> 15 MB** → offloaded to `backimg` (Sharp) automatically. See `frontimg/src/lib/process-router.ts`.
- **AI / html-to-image** → always on `backimg` (heavy models / headless Chromium).
- **HEIC** → always on `backimg`, at any size. Licensing, not size — see the note
  at the top. This is the only tool that uploads regardless of file size, and the
  page says so plainly rather than claiming in-browser privacy.

---

## 4. Pre-launch checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the real domain (canonical/sitemap correctness).
- [ ] `NEXT_PUBLIC_BACKEND_URL` points at `https://api.omyimage.com`.
- [ ] CORS `FRONTEND_ORIGIN` on the backend matches the Pages domain.
- [ ] HTTPS + HSTS active on both `omyimage.com` and `api.omyimage.com`.
- [ ] `GET https://api.omyimage.com/health` returns `{ status: "ok" }`.
- [ ] Browser tools work offline-of-backend (crop, resize, rotate, compress, convert, watermark, meme, editor, blur, image→PDF).
- [ ] Large file (>15 MB) convert/compress/resize/rotate succeeds via the server.
- [ ] Ephemeral store works: server result returns `X-File-Id`; `GET /api/files/:id` downloads; files swept after ~1 h.
- [ ] **`magick -list format | grep -i heic` shows HEIC rw+ → HEIC to JPG returns 200, not 501.**
- [ ] (If enabled) `rembg` installed → Remove Background returns a transparent PNG (not 501).
- [ ] (If enabled) `realesrgan-ncnn-vulkan` installed → Upscale returns a larger image (not 501).
- [ ] (If enabled) `puppeteer` installed → HTML to Image renders (not 501).
- [ ] `client_max_body_size` in Nginx matches `MAX_UPLOAD_MB`.
- [ ] Privacy Policy states files are processed transiently and deleted within an hour.
- [ ] Privacy Policy / HEIC page reflect that HEIC uploads to the server (it is the one tool that does).
- [ ] `THIRD-PARTY-NOTICES.txt` regenerated and reachable at `/THIRD-PARTY-NOTICES.txt`.
- [ ] No copyleft in the browser bundle: `grep -ril "libheif\|_emscripten" frontimg/out/_next/` is empty.
