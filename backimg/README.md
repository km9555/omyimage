# backimg — oMyImage backend

Queue-backed image-processing API. Mirrors oMyPDF's `backend/` but swaps the PDF
engines for image engines.

> **Status: Phase 1 live.** A runnable Express + Sharp API is in place with working
> routes for `convert`, `compress`, `resize`, `rotate`, a `files` re-download
> endpoint, a `heic` route (ImageMagick), an optional `html-to-image` route
> (Puppeteer), and 501 stubs for the AI tools (`remove-background`, `upscale`,
> `blur-face-auto`).
> `tsc --noEmit` passes. BullMQ/Redis/Postgres/AI workers are Phase 2–3.

## Run

```bash
cd backimg
cp .env.example .env
npm install        # installs express, sharp, multer, …
npm run dev        # tsx watch → http://localhost:5000  (GET /health)
npm run build && npm start
```

The frontend (`frontimg`) calls these routes automatically for files **> 15 MB**
(see `frontimg/src/lib/process-router.ts`); smaller files are processed in-browser.

## Endpoints

`POST /api/convert` · `POST /api/compress` · `POST /api/resize` · `POST /api/rotate`
— multipart `file` + JSON `options`; respond with the processed image and a
shareable `X-File-Id` (re-download via `GET /api/files/:id` within 1 hour).
`POST /api/html-to-image` (JSON). AI routes return 501 until the worker is wired.

## Stack

- Node.js 20 + Express.js
- BullMQ + Redis (priority queues: `queue:pro` → 1, `queue:plus` → 5, `queue:free` → 10)
- PostgreSQL (users, profiles, plans, usage, jobs, payments, api_keys, webhooks)
- **Sharp** (primary engine: resize, convert, crop, watermark, compress)
- **ImageMagick** (GIF, effects, composites), **libvips** (via Sharp), **FFmpeg** (animated WEBP/GIF)
- AI: `rembg` / `@imgly/background-removal-node` (bg removal), Real-ESRGAN (upscale)
- PM2 + Nginx in production

## Layout

```text
src/
├── routes/      # one module per tool endpoint (compress, resize, convert, …)
├── workers/     # BullMQ job processors
├── queues/      # pro / plus / free queue definitions
├── services/    # Sharp / ImageMagick / FFmpeg wrappers
├── middleware/  # auth, plan limits, uploads (multer)
├── db/          # PostgreSQL client + migrations
└── utils/
uploads/  outputs/  temp/   # runtime dirs (gitignored)
```

## File lifecycle

`Upload → /temp/uploads → queue job → worker → save output → return download URL → delete after 1 hour`

## Local prerequisites

```bash
sudo apt install imagemagick ffmpeg
npm install        # installs sharp, express, bullmq, etc. (added with first route)
```
