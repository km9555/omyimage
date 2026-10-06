# Publishing fields — paste into /admin/blog

| Field | Value |
|---|---|
| Title | How to Make a Photo Exactly 50 KB (or 20 KB, 100 KB…) for an Online Form |
| Slug | make-photo-exactly-50kb |
| Excerpt | Online forms reject photos over a size limit. Here is why a photo's KB size changes, the right order to fix it, and how to hit 20, 50 or 100 KB without a blurry result. |
| Tag 1 | Compression |
| Tag 2 | Online forms |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 7 min |
| Accent | #4F9D69 |
| SEO title | Make a Photo Exactly 50 KB (or 20 KB, 100 KB) — Free Guide |
| SEO description | Why online forms reject your photo, and how to bring it to 20, 50 or 100 KB without losing quality: resize first, then compress to size. Free tools, no upload. |

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

Exam portals, job applications, visa forms and government sites all say the same thing in small print: *photo between 20 KB and 50 KB, JPG only*. A phone photo is usually 2–5 MB, so it is rejected straight away. This guide explains what actually decides a photo's size in KB, the order of steps that gets you under the limit without a blurry result, and the mistakes that make forms reject a photo that "should" be fine.

If you just want the result, use [Compress Image to 50KB](/compress-image-to-50kb) — or [Reduce Image Size in KB](/reduce-image-size-in-kb) for any other number. The rest of this page explains what those tools do, so you can fix the cases where a form is stricter.

## What decides a photo's size in KB

A JPG's file size comes from two things:

1. **How many pixels it has.** A 12-megapixel phone photo (4000 × 3000) has about 120 times as many pixels as a 400 × 300 image. Every pixel costs bytes.
2. **How hard it is compressed.** JPG quality runs from high (larger file, more detail) to low (smaller file, visible blocks and smearing).

Its physical size in centimetres and its DPI value do **not** change the file size. DPI is a label stored in the file that says how large to print it; changing it rewrites a few bytes. If a form asks for both a file size and a DPI, those are two separate requirements — see [Change DPI](/dpi-converter) for the second one.

## The right order: resize first, then compress

The common mistake is to take the full 12 MP photo and push the JPG quality down until it fits under 50 KB. That works, but the quality has to drop so far that the face turns into blocks.

The better order:

1. **Resize to the pixel size the form needs.** Most passport-style photos for forms are a few hundred pixels wide — for example 300 × 400 or 350 × 450. If the form gives pixel dimensions, use exactly those. If it only gives centimetres, a photo around 400 pixels tall is plenty for a screen. Use [Resize Image](/resize-image), or [Resize Image in CM](/resize-image-in-cm) when the form states the size in centimetres.
2. **Then compress to the limit.** At 300 × 400 pixels, a clear face photo fits in 30–50 KB at good JPG quality. The [compress-to-size tools](/reduce-image-size-in-kb) search for the highest quality that still fits under your number, so you don't have to guess — and if even low quality won't fit, they lower the resolution instead of crushing the picture into blocks.

Done in that order, the photo stays sharp, because nothing is wasted on pixels the form will throw away.

## "Exactly 50 KB" — aim just under

No tool can make a file *exactly* 51,200 bytes, and you don't want it to: forms check that the file is **at most** the limit. Two details are worth knowing:

- **Some sites count 1 KB as 1,000 bytes, others as 1,024.** A file of 50.5 "KB" passes one check and fails the other. Aim a little under and it passes both. The oMyImage compress-to-size tools do this for you: they count 1 KB as 1,000 bytes, so a "50 KB" result is under 50,000 bytes and passes either reading.
- **Many forms also have a minimum.** "Between 20 KB and 50 KB" rejects a 12 KB file. If your photo comes out too small, [Increase Image Size in KB](/increase-image-size-in-kb) raises it into the range by saving at a higher quality and, if needed, with more pixels — never more than the original had.

## Common limits

Every form sets its own numbers, and they change, so always read the notice for the one you are filling in. As a rough guide, these are the sizes people most often need:

| Limit | Typical use | Tool |
|---|---|---|
| 10–20 KB | Signatures on exam and job forms | [Signature Resizer](/signature-resizer) |
| 20 KB | Small photo uploads, some exam forms | [Compress to 20KB](/compress-image-to-20kb) |
| 50 KB | Photos on exam, job and admission forms | [Compress to 50KB](/compress-image-to-50kb) |
| 100 KB | Larger photos, ID scans, some visa forms | [Compress to 100KB](/compress-image-to-100kb) |
| 10 KB | Very strict signature or thumbnail fields | [Compress to 10KB](/compress-image-to-10kb) |

## Signatures need a different approach

A signature is black ink on white paper, so it compresses extremely well — once it is cropped and on a clean background. Photograph it in good light, crop away everything except the signature, and make the paper pure white; a grey, shadowed background costs far more bytes than the ink. [Signature Resizer](/signature-resizer) does the crop, the clean-up and the size in one step.

## Why a form still rejects your photo

If the file is under the limit and still rejected, check these:

- **Wrong format.** Most forms want JPG. A PNG renamed to `.jpg` is still a PNG inside. Convert it properly with [Convert to JPG](/convert-to-jpg).
- **Wrong pixel dimensions.** Some forms check width and height, not just KB. Resize to their exact numbers.
- **Wrong orientation.** Phone photos sometimes carry a "rotate" flag that a form ignores, so the photo appears sideways. Re-saving it through any of the tools above fixes the pixels the right way up.
- **Background or face size.** For passport-style photos the form may check a plain light background and a centred face. The [Passport Size Photo Maker](/passport-photo-maker) frames the face and sets the background.

## Quick checklist

1. Crop to just the face (or just the signature).
2. Resize to the form's pixel size.
3. Compress to a little under the limit.
4. Check the format is JPG.
5. Upload.

The compress, resize, signature and passport tools linked here run in your browser, so your photo is not uploaded.
