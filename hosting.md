# oMyImage — Hosting & Go-Live

Two pieces: **frontend → Cloudflare Pages** (static), **backend → VPS** (Express + Sharp).
Mirrors the oMyPDF setup. The backend is currently **stateless** — no database or
Redis required; processed files live in an on-disk ephemeral store and auto-delete
after 1 hour.

```
omyimage.com         → Cloudflare Pages (static Next.js export, global CDN)
api.omyimage.com     → VPS (Express + Sharp, Nginx + SSL)  [only needed for >15 MB & AI tools]
```

> Most tools run **entirely in the browser** (≤ 15 MB). The backend is only needed
> for large files and the server/AI tools (remove background, upscale, enhance,
> html-to-image). You can launch the frontend alone and add the backend later.

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
| `jszip` | batch ZIP download | MIT / GPLv3 (dual) |
| `pdf-lib` | Image → PDF | MIT |
| `heic2any` | HEIC → JPG/PNG (WASM, libheif) | MIT (libheif LGPL-3) |

No native build tools needed for the frontend — it's pure JS/WASM and static-exports anywhere (Cloudflare Pages, Netlify, Vercel static, S3 + CloudFront, Nginx).

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

# Optional AI binaries (only if installed — see 2.5)
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

### 2.5 Optional AI engines (all free / open-source / commercial-OK)

Each is independent. If a tool isn't installed, its route returns **HTTP 501** and
everything else keeps working.

**Remove Background — rembg (MIT) + U²-Net (Apache-2.0)**
```bash
sudo apt install -y python3 python3-pip
pip3 install "rembg[cli]"        # downloads the model on first run
rembg --help                     # set REMBG_BIN if not on PATH
```

**Upscale / Enhance — Real-ESRGAN (BSD-3) via realesrgan-ncnn-vulkan (MIT)**
```bash
sudo apt install -y libvulkan1 mesa-vulkan-drivers wget unzip
wget https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-ubuntu.zip
unzip realesrgan-ncnn-vulkan-*.zip -d /opt/realesrgan
chmod +x /opt/realesrgan/realesrgan-ncnn-vulkan
# .env → REALESRGAN_BIN=/opt/realesrgan/realesrgan-ncnn-vulkan
```

**HTML to Image — Puppeteer (Apache-2.0) + Chromium (BSD)**
```bash
# Chromium runtime libs
sudo apt install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 \
  libcairo2 libasound2 fonts-liberation
cd backimg && npm i puppeteer     # downloads a pinned Chromium
```

See `backimg/ai/README.md` for details and env overrides.

---

## 3. Stack in use (as of now)

| Layer | Tech | License | Notes |
| --- | --- | --- | --- |
| Frontend | Next.js 16 (static export), React 19, Tailwind v4 | MIT | Cloudflare Pages |
| Browser image engine | HTML Canvas + `createImageBitmap` | — | crop, resize, rotate, compress, convert, watermark, meme, photo editor, blur |
| Browser libs | pdf-lib, jszip, heic2any, sonner | MIT/LGPL | Image→PDF, ZIP, HEIC, toasts |
| Backend | Node 20, Express 4, multer, cors, express-rate-limit | MIT | stateless API |
| Server image engine | **Sharp** (libvips) | Apache-2.0 / LGPL | convert/compress/resize/rotate for >15 MB |
| AI: background removal | **rembg** + U²-Net | MIT / Apache-2.0 | optional |
| AI: upscale / enhance | **Real-ESRGAN** (ncnn-vulkan) | BSD-3 / MIT | optional |
| HTML → image | **Puppeteer** + Chromium | Apache-2.0 / BSD | optional |
| Process mgmt / web | PM2, Nginx, certbot | MIT / BSD / — | production |

**Not yet wired (future / Phase 2–3):** BullMQ + Redis queue, PostgreSQL, auth/plans/billing.
The current backend has no DB or Redis dependency.

### Processing router (15 MB rule)

- **≤ 15 MB** → processed **in the browser** (instant, private).
- **> 15 MB** → offloaded to `backimg` (Sharp) automatically. See `frontimg/src/lib/process-router.ts`.
- **AI / html-to-image** → always on `backimg` (heavy models / headless Chromium).

---

## 4. Pre-launch checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set to the real domain (canonical/sitemap correctness).
- [ ] `NEXT_PUBLIC_BACKEND_URL` points at `https://api.omyimage.com`.
- [ ] CORS `FRONTEND_ORIGIN` on the backend matches the Pages domain.
- [ ] HTTPS + HSTS active on both `omyimage.com` and `api.omyimage.com`.
- [ ] `GET https://api.omyimage.com/health` returns `{ status: "ok" }`.
- [ ] Browser tools work offline-of-backend (crop, resize, rotate, compress, convert, watermark, meme, editor, blur, HEIC, image→PDF).
- [ ] Large file (>15 MB) convert/compress/resize/rotate succeeds via the server.
- [ ] Ephemeral store works: server result returns `X-File-Id`; `GET /api/files/:id` downloads; files swept after ~1 h.
- [ ] (If enabled) `rembg` installed → Remove Background returns a transparent PNG (not 501).
- [ ] (If enabled) `realesrgan-ncnn-vulkan` installed → Upscale/Enhance return a larger image (not 501).
- [ ] (If enabled) `puppeteer` installed → HTML to Image renders (not 501).
- [ ] `client_max_body_size` in Nginx matches `MAX_UPLOAD_MB`.
- [ ] Privacy Policy states files are processed transiently and deleted within an hour.
