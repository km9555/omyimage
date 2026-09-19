# Blog — Operations Guide (oMyImage)

oMyImage runs the same CMS blog as oMyPDF (see `omypdf-project/blog.md`), with
**its own posts, admins, deploy hook and image prefix**. Posts are written at
`/admin/blog`, stored in Postgres, and baked into static pages at Cloudflare
Pages build time. The frontend is `output: "export"`, so publishing a post
triggers a fresh build.

## Where the code lives

**Backend.** This is the shared oMyPDF/oMyImage API in `E:\omypdf-files\omypdf-project\backend\src`:
- `db/migrations/img_003_blog.sql` creates `omyimage.blog_posts`. The oMyPDF posts are a separate table, `public.blog_posts`.
- `lib/blog-core.ts` holds the CMS router factory. Both brands use it.
- `routes/image/blog.ts` is mounted at `/api/image/blog` in `server.ts`. It uses the `img` JWT claim and `middleware/image-admin.ts`.
- `lib/blog-storage.ts` handles R2 uploads. oMyImage keys go under `omyimage/blog/`.

**Frontend.** This is `frontimg/src`:
- `lib/blog.ts` does the build-time fetch from `/api/image/blog/posts`.
- `lib/blog-render.ts` turns Markdown into sanitized HTML, using `marked` and `isomorphic-dompurify`.
- `app/blog/page.tsx` is the index.
- `app/blog/[slug]/page.tsx` is the article page. It emits `BlogPosting` and `BreadcrumbList` JSON-LD and shows related posts.
- `components/BlogTags.tsx` renders the tag chips (amber, teal and sky). The `.blog-body` styles live in `app/globals.css`.
- `app/admin/blog/` is the editor, with a live preview and image upload.
- `lib/auth/useRequireAdmin.ts` provides the client-side admin gate.
- The blog is linked from `sitemap.ts` (only once at least one post exists), the Navbar quick links (at `xl` widths), the MobileMenu and the Footer.

## Going live (one-time)

1. **Migration**, on the API box:
   ```bash
   sudo -u postgres psql omypdf -f backend/src/db/migrations/img_003_blog.sql
   ```
   To check it worked, run `\dt omyimage.*` and confirm `blog_posts` is listed.
2. **Deploy hook.** In Cloudflare, go to **Pages → the oMyImage project → Settings → Builds & deployments → Deploy hooks** and add one for the production branch.
3. **Backend `.env`**, then restart the backend:
   ```
   IMAGE_PAGES_DEPLOY_HOOK_URL=<the oMyImage hook — NOT the oMyPDF one>
   IMAGE_R2_PUBLIC_URL_BASE=            # optional; blank = R2_PUBLIC_URL_BASE
   ```
   The `R2_*` credentials and `ADMIN_EMAILS` are shared with oMyPDF and already set.
4. **Admin account.** Any oMyImage account whose email is in `ADMIN_EMAILS` can author posts, as can any account with `omyimage.profiles.role = 'admin'`.

## Posting

1. Sign in on omyimage.com and open **`/admin/blog`**. It isn't linked anywhere, so type the URL.
2. Click **New post** and fill in:
   - title
   - slug (lowercase words joined by hyphens, which becomes `/blog/<slug>`)
   - excerpt (also used as the meta description)
   - **exactly 3 tags**
   - author and read time
   - cover image and accent colour
   - the Markdown body
   - optional SEO overrides
3. **Insert image** uploads to R2 and inserts `![name](url)` at the cursor. The first image you upload also becomes the cover if the cover is empty.
4. Click **Save draft**. In the list, the **Publish** icon marks the post live and fires the deploy hook. It appears on the site about 1–3 minutes later.
5. Editing a published post, unpublishing it, or deleting a published post also triggers a rebuild.

## Gotchas

- **A new post won't show locally just by refreshing.** `getPublishedPosts()` uses `force-cache`, which persists to `.next/cache`. Stop the dev server, delete `.next`, and restart it. If you skip this, `/blog/<slug>` returns a 500 "missing param in generateStaticParams()" error. Production builds always start fresh, so this only affects local dev.
- **If the backend is down during a build, the build still succeeds but has no posts.** The `[slug]` route then emits only the `no-posts-yet` placeholder, which 404s and is noindexed. Redeploy once the backend is back.
- Uploaded images are public on R2 as soon as they are uploaded, even while the post is still a draft.
