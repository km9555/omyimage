# Publishing fields

| Field | Value |
|---|---|
| Title | How to Remove an Image Background Free: Clean Cutouts for Product Photos |
| Slug | remove-image-background-product-photos |
| Excerpt | Remove the background from a product photo for free, get clean edges, and know when to keep it transparent and when a marketplace wants pure white instead. |
| Tag 1 | Background removal |
| Tag 2 | Product photos |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 7 min |
| Accent | #B5651D |
| SEO title | Remove Image Background Free: Product Photo Cutouts |
| SEO description | Remove a photo background free and make it transparent, then get the edges clean. Plus the background and size rules for Amazon, Shopify and Google Shopping. |
| Scheduled publish | Thursday 2026-12-24 |

## Images

| # | File | Insert | Alt text | Prompt |
|---|---|---|---|---|
| Cover | `images/remove-background-cover.webp` (1600 × 900) | First upload, becomes the cover | A product photo of a sneaker on a cluttered table, and the same sneaker cut out cleanly on a transparent checkerboard and on pure white | ChatGPT prompt below |

**ChatGPT cover prompt:** Clean modern editorial illustration, 16:9 landscape, 1600 × 900, full-bleed, warm cream (#F7F1E8) background. Center the subject and use the whole frame, keeping key elements away from the outer edges: three cards in a row, slightly overlapping: first, a casual phone photo of a plain unbranded white sneaker on a cluttered wooden table; second, the same sneaker cut out on a grey and white transparency checkerboard; third, the same sneaker on pure white with a soft natural shadow underneath. A dotted burnt orange (#B5651D) arrow runs across the three cards. Soft studio light, gentle shadows, flat minimal style, muted palette, no text, no logos, no people.

Sources checked 2026-11-26 (inline links, max 4): Shopify Help Center product media page (2048 × 2048 for square images; up to 5000 × 5000 or 25 MP; under 20 MB; PNG then JPEG), Google Merchant Center image requirements (no promotional overlays, watermarks or borders; 500 × 500 minimum from 31 Jan 2027; 1500 × 1500 recommended), MDN image format guide (JPEG has no alpha channel). Amazon: the main image rules (pure white RGB 255,255,255, product fills 85% of frame, 1000 px longest side for zoom) were verified only through an Amazon Seller Forums post, because Seller Central help page G1881 needs a login. They're stated without a link and attributed to Amazon's seller rules; please confirm in Seller Central before this goes live. Keywords (OpenSEO, US): remove background from image 74,000/mo KD 72; transparent background 40,500 KD 25; make background transparent 12,100 KD 25; product photo background 210 KD 11; amazon product image requirements 110 KD 32.

Internal links (must be live on publish day): /remove-background, /change-background-color, /blur-background, /resize-image, /crop-image, /compress-image, /blog/images-slowing-down-website, /blog/webp-to-jpg-without-losing-quality.

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

To remove an image background for free, upload the photo to an AI background remover, let it find the subject, and download the result as a PNG with a transparent background. That takes a few seconds. Getting a cutout clean enough for a shop listing takes a little more care, and so does knowing when to keep the background transparent and when a marketplace wants pure white instead.

This guide covers both, with product photos in mind.

## Remove the background in three steps

1. Open the [background remover](/remove-background) and upload a JPG, PNG or WebP.
2. Wait a few seconds while the AI model separates the subject from everything behind it.
3. Download the cutout as a PNG with a transparent background.

Our remover runs rembg, an open-source background removal tool, on our server, so it works at the same speed on any device. The output is an ordinary PNG with an alpha channel, which Canva, Photoshop, PowerPoint and most store builders read.

If you already know the final background, skip a step. [Change background color](/change-background-color) cuts the subject out and places it on white, or any color you pick, in one go. [Blur background](/blur-background) keeps the original scene but softens it, which suits lifestyle shots.

## Why some cutouts come out messy

AI removers guess where the subject ends. Most of the time the guess is excellent; a few kinds of photo make it hard.

Low contrast is the big one. A white mug on a white tablecloth, or a black phone on a dark desk, gives the model very little edge to find. Hair, fur and fluffy fabric are tricky because each strand is partly see-through. Glass, plastic packaging and jewelry let the background show through, so the model has to decide whether that part belongs to the product. And hard shadows can get treated as part of the object, leaving a gray smear under it.

You can avoid most of this when you take the photo:

- Shoot against a plain background that contrasts with the product: a light wall for dark items, a dark sheet for light ones.
- Use soft, even light from the side or front, such as a window on a cloudy day, so shadows stay faint.
- Leave space around the product rather than cropping tight. The model needs to see where the edges are.
- Keep the camera still and in focus. Blur on the edges turns into a fuzzy halo after the cut.

### Check the edges before you use it

Open the PNG and look at it on a dark background and then a light one, zoomed to 200%. A thin white fringe is invisible on white and glaring on navy. If you see one, retake the photo against a background closer in color to where the product will finally sit, or trim the edge in an editor. It's far quicker to fix now than after you've uploaded 30 listings.

## Transparent or white? It depends where the photo goes

A transparent PNG is the most flexible thing to keep as your master copy. What you upload is a different question, because each platform has its own rules.

| Where the image goes | Background | Format and size |
|---|---|---|
| Amazon main image | Pure white, RGB 255, 255, 255 | Product fills at least 85% of the frame; 1000 px or more on the longest side enables zoom |
| Shopify store | Your choice; keep it the same across products | Square 2048 × 2048 px displays best; PNG or JPEG |
| Google Shopping | No required color, but no borders, watermarks or text overlays | 1500 × 1500 px or larger recommended |
| Website, slides, designs | Transparent PNG or WebP | Size to the space it fills |
| Email, print shop, upload forms that only take JPG | White or another solid color | JPG at high quality |

Amazon's seller image rules ask for that pure white background on the main product image, with the product filling at least 85% of the frame. A transparent PNG doesn't meet that, so place the cutout on white with [change background color](/change-background-color), then check the product isn't floating in a sea of empty space. [Crop the image](/crop-image) closer if it is.

Shopify is relaxed about color but specific about size: its help center says [square product images display best at 2048 × 2048 pixels](https://help.shopify.com/en/manual/products/product-media/product-media-types), and it accepts files up to 5000 × 5000 pixels. Whatever background you choose, use the same one on every product so your collection pages look tidy.

Google is strict about extras rather than color. Its Merchant Center rules say [don't add watermarks, promotional overlays or borders to product images](https://support.google.com/merchants/answer/6324350), and recommend images of 1500 × 1500 pixels or more. A clean cutout on a plain background passes easily. A cutout with "SALE" stamped on it doesn't.

## Keep the transparent master as PNG

Save a cutout as JPG too early and you'll find a white or black box around the product, because [the JPEG format can't store transparency](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types). Keep transparent images as PNG, or WebP if they're going on a website, and convert to JPG only once the final background is in place. Our [WebP to JPG guide](/blog/webp-to-jpg-without-losing-quality) explains what that conversion does to quality, and if your product pages feel sluggish afterwards, the [guide to images slowing down your website](/blog/images-slowing-down-website) shows where the weight usually hides.

## Quick answers

### How can I tell the background is really transparent?

Open the PNG in an editor. Transparent areas show as a gray and white checkerboard rather than white. If you see solid white, the file was flattened somewhere along the way.

### What size should product photos be?

Large enough for zoom: 1000 pixels or more on the longest side for Amazon, and 2048 × 2048 pixels for square Shopify images. Shrink a copy for your own site with the [image resizer](/resize-image) and [compressor](/compress-image) so pages stay fast.

## Set up once, reuse every time

Make a simple routine for every new product: shoot it on the same plain background in the same light, remove the background, keep the transparent PNG as the master, and export one white JPG for marketplaces and one WebP for your own site. Your listings end up looking like they came from the same studio.
