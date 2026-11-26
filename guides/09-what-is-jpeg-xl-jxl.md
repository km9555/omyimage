# Publishing fields

| Field | Value |
|---|---|
| Title | What Is JPEG XL (JXL)? Does It Work in Chrome, Safari and Firefox in 2026? |
| Slug | what-is-jpeg-xl-jxl |
| Excerpt | JPEG XL finally works in Chrome and Firefox, and Safari has read it since 2023. Here's what a JXL file is, where it opens today, how it compares with AVIF, and whether you should use it yet. |
| Tag 1 | JPEG XL |
| Tag 2 | Image formats |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 7 min |
| Accent | #5B4B8A |
| SEO title | What Is JPEG XL (JXL)? Browser Support in 2026 |
| SEO description | JPEG XL now opens in Chrome 155, Firefox 158 and Safari 17, but not Edge. What a JXL file is, how it compares with AVIF, and how to open one. |
| Scheduled publish | Thursday 2026-12-03 |

## Images

| # | File | Insert | Alt text | Prompt |
|---|---|---|---|---|
| Cover | `images/jpeg-xl-cover.webp` (1600 × 900) | First upload, becomes the cover | A JXL image file shown opening in several browser windows, with one window still showing a broken image icon | ChatGPT prompt below |

**ChatGPT cover prompt:** Clean modern editorial illustration, 16:9 landscape, 1600 × 900, full-bleed, warm cream (#F7F1E8) background. Center the subject and use the whole frame, keeping key elements away from the outer edges: four overlapping generic browser windows (no real browser logos or brand colors), three of them showing the same colorful hot air balloon photo clearly, the fourth showing a grey broken image icon. In front, a large rounded file card tagged ".jxl" in a muted violet (#5B4B8A) outline, with dotted violet lines connecting it to each window. Soft studio light, gentle shadows, flat minimal style, muted palette, no other text, no logos, no people.

Sources checked 2026-11-26 (inline links, max 4): Chrome for Developers blog "Shipping JPEG XL in Chrome" (6 Oct 2026, decoding from Chrome 155), MDN Firefox 158 release notes (enabled by default, released 13 Oct 2026; Safari lacks progressive decoding), caniuse JPEG XL (69.25% incl. partial; Edge 110 to 157 not supported; Safari 17+ partial), Google Search Central image guidelines (JXL not in the supported list). Also read, not linked: jpeg.org (ISO/IEC 18181, lossless JPEG transcoding), Library of Congress format page (Part 1 published March 2022), Chromium commit removing JXL for M110 (Dec 2022), WebKit Safari 17 notes, libjxl README, GIMP 3.0 release notes. Keywords (OpenSEO, US): jpeg xl 1,600/mo KD 74; jxl 1,000 KD 27; jxl file 320 KD 20; jxl to jpg 210 KD 0; jpeg xl vs avif 50 KD 0.

Note: oMyImage has no JXL tool, so the post doesn't pretend otherwise. Internal links (must be live on publish day): /blog/avif-to-jpg, /blog/jpg-vs-png-vs-webp, /image-converter, /compress-image, /jpg-to-webp.

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

JPEG XL (file extension .jxl) is a newer image format from the JPEG committee that makes photos smaller than JPEG at the same quality and can shrink existing JPEGs without losing a single pixel. As of late 2026 it opens in Chrome 155 and later, Firefox 158 and later, and Safari 17 and later. Microsoft Edge doesn't display it yet, and Google Search doesn't list it as an indexable format, so a website still needs a fallback.

That's a big change from two years ago, when only Safari could show a JXL file. Here's what happened, what the format is good at, and whether it's worth using now.

## What JPEG XL is

JPEG XL is an international standard, ISO/IEC 18181, written by the same committee that gave us the original JPEG in the early 1990s. The core of the standard was published in 2022.

It was designed to replace JPEG rather than sit next to it, and three features make the case for it.

Smaller files. JXL compresses photos more tightly than JPEG at similar visual quality. Chrome's team, in its shipping announcement, puts the gain at 30 to 50%, though results depend on the image and the settings.

Lossless recompression of old JPEGs. This is the feature nobody else has. An existing JPEG can be repacked as JXL without decoding it to pixels first, so the picture stays exactly the same and the file gets smaller. The original JPEG can even be rebuilt byte for byte from that JXL. For a photo library or an archive full of JPEGs, that's free storage with zero quality risk.

Progressive loading. A JXL can show a rough version of the whole image early and sharpen as more data arrives, which helps on slow connections.

It also handles transparency, animation and HDR, so one format can cover jobs that used to need JPEG, PNG or GIF.

## Why Chrome dropped it, then brought it back

The format had a rocky few years in browsers, and that history explains the confusion you'll see in older articles.

Chrome added experimental JXL support behind a flag in 2021, then removed it entirely in Chrome 110 at the start of 2023, saying there wasn't enough interest. That removal stalled the format on the web for a while, since Chrome has most of the browser market. Safari went the other way and started displaying JXL in Safari 17 in September 2023.

Developers kept asking for it. In 2026 Chrome reversed course: the Chrome team announced it was [shipping JPEG XL decoding by default from Chrome 155](https://developer.chrome.com/blog/jpeg-xl-in-chrome), in a post dated 6 October 2026.

A week later Firefox followed, and the [Firefox 158 release notes say JPEG XL support is now enabled by default](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/158). Firefox had kept it behind a setting in Nightly builds for years.

## Which browsers open JXL files in 2026

| Browser | JPEG XL support | Since |
|---|---|---|
| Chrome (desktop) | Yes, on by default | Version 155, October 2026 |
| Chrome on Android | Check your version; we couldn't confirm it separately | |
| Firefox | Yes, on by default | Version 158, October 2026 |
| Safari (Mac, iPhone, iPad) | Yes, but partial | Version 17, September 2023 |
| Microsoft Edge | No | Not yet, even though it's built on Chromium |
| Older versions of any of these | No | |

[caniuse puts JPEG XL support at about 69% of users](https://caniuse.com/jpegxl) once Safari's partial support is counted, and lists Edge as unsupported through version 157. That number will climb as people's browsers update, but it's well below AVIF and WebP for now.

Apple's version is called partial because it doesn't do progressive decoding: it shows the image only after the whole file has downloaded. The picture looks the same, it just doesn't appear early.

## JPEG XL vs AVIF vs JPG

| | JPG | AVIF | JPEG XL |
|---|---|---|---|
| Opens everywhere | Yes | Nearly all browsers, fewer apps | Chrome, Firefox and Safari only; not Edge |
| File size for photos | Baseline | Much smaller | Much smaller |
| Recompress existing JPEGs without loss | No | No | Yes |
| Progressive loading | Yes | Limited | Yes |
| Google Search indexes it | Yes | Yes | Not listed |
| Best use today | Sharing, uploads, print | Website images | Archives, photo libraries, Safari-heavy audiences |

AVIF and JXL are close on file size for typical web photos, and which one wins depends on the picture and the settings. The real differences are elsewhere. AVIF works in nearly every browser now. JXL is the only one that can shrink your existing JPEG files with no quality loss.

If you run a website, AVIF remains the safer modern choice this year. Our [JPG vs PNG vs WebP guide](/blog/jpg-vs-png-vs-webp) covers where the older formats still fit.

## Should you use JPEG XL yet?

On a website, only with a fallback. [Google's list of image formats it can index](https://developers.google.com/search/docs/appearance/google-images) names BMP, GIF, JPEG, PNG, WebP, SVG and AVIF, with no mention of JXL. Put the JXL in a `<source type="image/jxl">` inside a `<picture>` element and the JPG or WebP in the `<img src>`, which is what Edge and Google's crawler read. If that sounds like extra work for little gain, [convert your images to WebP](/jpg-to-webp) instead and skip JXL for now.

For storage, it's already attractive. If you keep a large library of JPEG photos, lossless JXL recompression saves space without touching a pixel, and you can turn any file back into the original JPEG later.

For sharing, don't. Email clients, social networks, print services and upload forms mostly don't accept JXL, and there's no sign that will change soon. Send JPG.

## How to open or convert a JXL file

If someone sends you a .jxl, you have a few options.

Open it in a browser. Drag the file into a Chrome 155+, Firefox 158+ or Safari 17+ window and it displays. That's the quickest way to see what's inside.

Use an image editor that reads JXL. GIMP 3.0 imports and exports JPEG XL, and it's free on Windows, Mac and Linux. Open the file, then use File > Export As and pick JPG to convert it.

Use the official command line tools. The libjxl project, the reference implementation, includes `djxl` for decoding. If the JXL was made from a JPEG by lossless recompression, `djxl` can hand you back that original JPEG exactly.

On Windows, the Microsoft Store lists a JPEG XL Image Extension, but we couldn't confirm what it supports, so GIMP or a browser is the more predictable route.

oMyImage doesn't convert JXL yet. Once you have a JPG or PNG, though, you can [compress it](/compress-image) or switch it to another format with the [image converter](/image-converter). And if your problem is AVIF rather than JXL, our [AVIF to JPG guide](/blog/avif-to-jpg) walks through it.

## Quick answers

### Did Chrome ever support JPEG XL before?

Chrome 91 to 109 had it only behind a flag, Chrome 110 to 154 had no default support, and Chrome 155 turned it on for everyone.

### Why won't my JXL file open in Edge?

Edge hasn't turned on JPEG XL support yet, even though it shares Chrome's engine. Open the file in Chrome, Firefox or Safari, or convert it to JPG in GIMP.

### What is a JXL file?

A JXL file is an image saved in the JPEG XL format. The .jxl extension works like .jpg or .png: it tells your computer which decoder to use.

## Where this goes next

Watch two things over the next year: whether Edge switches the format on, and whether Google adds JXL to its list of indexable image formats. Either one would make JXL a practical choice for websites. Until then, keep using it for archives if you like, keep AVIF or WebP on your site, and send JPG to everyone else.
