# Phase 8 guides — ready to publish

Four English guides for the blog (expansion.md Phase 8). The blog is a CMS:
posts live in the backend database and are published from
**https://omyimage.com/admin/blog** while signed in as an admin (blog.md).
Publishing a post fires the deploy hook; it is live 1–3 minutes later.

| # | File | Slug | Links into |
|---|---|---|---|
| 1 | `01-make-photo-exactly-50kb.md` | make-photo-exactly-50kb | compress-to-size family, signature, resize, passport |
| 2 | `02-passport-photo-size-by-country.md` | passport-photo-size-by-country | passport maker, 3x4, 2x2, background colour, guide 1 |
| 3 | `03-social-media-image-sizes.md` | social-media-image-sizes | resize presets and the platform resizers, grid maker |
| 4 | `04-gif-size-limits.md` | gif-size-limits | GIF compressor, resizer, cutter, to-WebP, to-MP4, video-to-GIF |

## How to publish each one

1. Open `/admin/blog` → **New post**.
2. Copy each value from the file's **Publishing fields** table into the field
   of the same name (Title, Slug, Excerpt, Tag 1–3, Author, Read time,
   Accent, and the two SEO overrides).
3. Copy everything below the `<!-- BODY … -->` line into **Body (Markdown)**.
   The body has no top-level `#` heading on purpose — the page prints the
   title as the H1.
4. Optional: upload a cover image with **Insert image** (the first upload
   becomes the cover).
5. **Save draft**, check the preview, then **Publish**.

**Publish guide 1 before guide 2** — guide 2 links to `/blog/make-photo-exactly-50kb`.

## Facts checked (2026-10-06)

- Passport sizes and head heights match the official ranges of each country
  and the presets in `lib/image/id-photo.ts` (e.g. 35 × 45 mm at 70 % head →
  31.5 mm, inside the UK's 29–34 mm).
- Platform sizes match `lib/social-presets.ts`, plus Instagram's 3:4 grid
  (January 2025) and native 3:4 posts (May 2025).
- GIF limits: Discord free 20 MB (raised from 10 MB in August 2026),
  X 15 MB web / 5 MB mobile / 1280 × 1080, Slack emoji 128 KB, Gmail 25 MB.
  These change — re-check them when you update the post.
- Tool behaviour: compress-to-size counts 1 KB = 1,000 bytes and lowers
  resolution before crushing quality; the GIF compressor's Strong level
  keeps every other frame at 64 colours; WebP savings are from the Phase 5C
  measurements.
