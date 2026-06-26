# oMyImage

Free online **image tools** — compress, resize, crop, convert, rotate, watermark, and AI-powered background removal / upscaling. Sibling project to **oMyPDF**, sharing the same proven architecture: a static Next.js frontend on Cloudflare Pages plus a queue-backed Node/Sharp backend for heavy jobs.

## Structure

```text
omyimage-project/
├── frontimg/     # Frontend — Next.js 16 (static export) + Tailwind v4
│   └── src/
│       ├── app/          # routes (home page live; tool pages added one at a time)
│       ├── components/   # Navbar, Footer, ToolDirectory, ToolCard, …
│       └── lib/          # tools registry, theme, prefs, site config
└── backimg/      # Backend — Node 20 + Express + BullMQ + Sharp/ImageMagick/FFmpeg
    └── src/
        ├── routes/       # one route module per tool
        ├── workers/      # BullMQ job processors
        ├── queues/       # pro / plus / free priority queues
        ├── services/     # Sharp/ImageMagick/FFmpeg wrappers
        ├── middleware/    # auth, plan limits, uploads
        ├── db/           # PostgreSQL migrations
        └── utils/
```

> The folder names `frontimg` / `backimg` follow `img-develop.md`. They map 1:1
> to oMyPDF's `frontend` / `backend` so logic stays easy to keep in sync.

## Brand

The whole UI re-skins from a single accent token (`--color-secondary`) in
`frontimg/src/app/globals.css`. oMyImage uses **Honey Gold (`#F5A623`)** — a warm,
premium amber with near-black text on buttons for crisp contrast — over warm
cream neutrals. (oMyPDF used Premium Red.)

## Frontend — getting started

```bash
cd frontimg
npm install
npm run dev      # http://localhost:3000
or npm run dev -- -p 3002
npm run build    # static export → frontimg/out/
```

## Processing router

- **≤ 15 MB** → in-browser (Canvas / Pica / Cropper.js) — instant, private.
- **> 15 MB** or AI tools → `backimg` (Sharp / ImageMagick / FFmpeg) via BullMQ.

## Status

Phase 0 (current): project scaffold + **home page**. Tool pages are built one at
a time and flipped from `planned` → `live` in `frontimg/src/lib/tools.ts` as they
ship. See `../image-files/img-develop.md` for the full plan & roadmap.
