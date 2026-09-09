# oMyImage

Free online **image tools** — compress, resize, crop, convert, rotate, watermark, and AI-powered background removal / upscaling. Sibling project to **oMyPDF**: a static Next.js frontend on Cloudflare Pages, with heavy jobs handled by the shared oMyPDF backend.

## Structure

```text
omyimage-project/
└── frontimg/     # Frontend — Next.js 16 (static export) + Tailwind v4
    └── src/
        ├── app/          # one route per tool
        ├── components/   # Navbar, Footer, ToolDirectory, ToolCard, …
        └── lib/          # tools registry, theme, prefs, site config
```

> **This repo is frontend-only.** The backend used to live here as `backimg/`; on
> 2026-08-11 it was merged into the oMyPDF backend, which now serves both products
> from one process. `backimg/` was deleted — its code is in `omypdf-project/backend/`
> (`src/routes/image/`, `src/lib/image/`), and the last standalone version is
> retrievable at the `backimg-final` git tag.
>
> The image API is reached at **`https://api.omyimage.com/api/image/*`** — its own
> hostname, but the same VPS and the same Node process as `api.omypdf.com`. See
> `omypdf-project/hosting.md` §5 for deployment, and `hosting.md` here for the
> frontend.

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

- **≤ 15 MB** → in-browser (raw Canvas) — instant, private, nothing uploaded.
- **> 15 MB**, or a server-only tool → `POST https://api.omyimage.com/api/image/…`
  (Sharp), via `frontimg/src/lib/process-router.ts`.

Four tools are server-only regardless of size: **HEIC to JPG** (ImageMagick +
libheif — server-side for *licensing* reasons, see `LICENSE-AUDIT.md` F1),
**HTML to Image** (Puppeteer), **Remove Background** (rembg) and **Upscale**
(Real-ESRGAN).

## Configuration

`frontimg` reads these env vars, all at **build** time. The first two are
required; the rest each switch on one optional feature, and a blank value simply
means that feature does not render.

| Var | Value | Required |
|---|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | `https://api.omyimage.com` | yes |
| `NEXT_PUBLIC_SITE_URL` | `https://omyimage.com` | yes |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID | no — falls back to the production property |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | OAuth web client ID | no — blank hides "import from Google Drive" |
| `NEXT_PUBLIC_GOOGLE_PICKER_API_KEY` | Picker API key | no — same |
| `NEXT_PUBLIC_DROPBOX_APP_KEY` | Dropbox app key | no — blank hides "import from Dropbox" |

Every one of them is public: they ship inside the browser bundle by design. No
secret belongs in this list. See `frontimg/.env.local.example` for how the cloud
import credentials are obtained, and `frontimg/next.config.ts` for why each var
also has to be declared in its `env` block.

These must be set in **Cloudflare Pages → Settings → Variables and secrets**, and
they only take effect on the next build. If `NEXT_PUBLIC_BACKEND_URL` is missing,
`src/lib/site.ts` falls back to `http://localhost:5000` — which works locally and
silently breaks every server tool in production. That is not hypothetical; it is
exactly what happened before 2026-08-11. The optional keys fail more quietly: a
missing cloud-import key gives you a working site where the import button is
simply absent in production while it works on your machine.

## Status

All 30 tools in `frontimg/src/lib/tools.ts` are live. Server-backed tools started
working on 2026-08-11, when the backend merge landed and the Pages env vars were
set for the first time. See `../image-files/img-develop.md` for the original plan
and roadmap.
