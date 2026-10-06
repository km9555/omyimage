# Publishing fields — paste into /admin/blog

| Field | Value |
|---|---|
| Title | GIF Size Limits on Discord, X, Slack and Email — and How to Make a GIF Smaller |
| Slug | gif-size-limits |
| Excerpt | Why GIFs get so big, the upload limits on Discord, X, Slack and email, and five ways to shrink a GIF under them without ruining it. |
| Tag 1 | GIF |
| Tag 2 | Compression |
| Tag 3 | Guides |
| Author | oMyImage Team |
| Read time | 7 min |
| Accent | #9C6A9E |
| SEO title | GIF Size Limits (Discord, X, Slack) and How to Make a GIF Smaller |
| SEO description | GIF upload limits on Discord, X, Slack and email, why GIFs are so large, and five ways to shrink one — fewer pixels, fewer frames, fewer colours, or a modern format. |

---

<!-- BODY: paste everything below this line into "Body (Markdown)" -->

A five-second clip saved as a GIF can easily weigh 10 or 20 MB — more than the video it came from. Then Discord, X or Slack refuses it. This guide explains why GIFs get so big, lists the limits you are most likely to hit, and goes through the five ways to make a GIF smaller, from the gentlest to the most drastic.

The quickest fix is [GIF Compressor](/gif-compressor): it reduces colours, skips tiny changes between frames and, at its strongest level, keeps every other frame — and shows the new size before you download.

## Why GIFs are so large

GIF is a format from 1987. It stores every frame as a separate picture with at most 256 colours, and compresses each one with a method designed for flat graphics, not photos or video. So:

- **Every frame costs bytes.** A 5-second clip at 20 frames per second is 100 pictures.
- **Photo-like content compresses badly.** Gradients, skin, sky and camera noise defeat GIF's compression, and the dithering used to fake extra colours adds even more noise.
- **Pixels multiply everything.** A 1000-pixel-wide GIF has four times the pixels of a 500-pixel one, in every frame.

That is also why the fixes below work: each one cuts pixels, frames or colours.

## Limits you are likely to hit

| Where | Limit (as of October 2026) |
|---|---|
| Discord, free account | 20 MB per file (Nitro Basic 50 MB, Nitro 500 MB) |
| X (Twitter), web | 15 MB per GIF |
| X (Twitter), mobile app | 5 MB per GIF |
| X (Twitter), dimensions | Up to 1280 × 1080 pixels |
| Slack custom emoji | 128 KB (about 128 × 128 pixels) |
| Gmail attachment | 25 MB per email |

Platforms change these numbers — Discord lowered its free limit to 10 MB in 2024 and raised it to 20 MB in 2026 — so treat them as a guide and check the platform's own help page when a file is close to the line.

Many apps don't keep your GIF as a GIF at all: they convert it to a short, silent looping video, which is far smaller. If an app accepts video, sending an MP4 in the first place is often the better choice (see the last section).

## Five ways to make a GIF smaller

### 1. Use fewer pixels

Halving the width and height cuts the pixel count — and usually the file size — to roughly a quarter. Most GIFs are viewed at a few hundred pixels wide in a chat window, so a 1200-pixel GIF is wasted bytes. [GIF Resizer](/gif-resizer) scales every frame at once, and [GIF Cropper](/gif-cropper) cuts away borders and empty space around the action.

### 2. Make it shorter

Every second you cut is a straight saving. Trim the lead-in and the ending, or loop a shorter section. [GIF Cutter](/gif-cutter) keeps just the frames you choose.

### 3. Use fewer frames

A GIF at 25 frames per second rarely looks better than the same GIF at 12–15 in a chat window. Dropping every other frame roughly halves the size while the motion stays the same speed — the remaining frames are shown for longer. [GIF Compressor](/gif-compressor) does this at its Strong level, lengthening each kept frame so the speed stays the same.

### 4. Use fewer colours

Most GIFs use the full 256 colours whether they need them or not. Cutting to 128 or 64 colours — the Medium and Strong levels of the compressor — often saves a third or more on cartoons, screen recordings and text. On photo-like clips, go gently: too few colours shows up as banding in skies and skin. You can also set the number of colours yourself and compare the result before downloading.

### 5. Switch format

When a platform accepts something other than GIF, a modern format is dramatically smaller:

- **Animated WebP.** In our own tests, a lossy WebP of a 40-frame, video-like GIF was 40–68 % smaller, and a lossless one matched the GIF pixel for pixel. Browsers and many apps play animated WebP. Convert with [GIF to WebP](/gif-to-webp).
- **MP4.** For clips that came from video, MP4 is usually a small fraction of the GIF's size. Use it anywhere that accepts video. Convert with [GIF to MP4](/gif-to-mp4).

## Making a GIF from a video? Start small

If you are creating the GIF yourself, the cheapest bytes are the ones you never add. In [Video to GIF](/video-to-gif), pick only the seconds you need, choose a width around 480 pixels and a frame rate of 10–15. A GIF made like that usually lands under the limits above without any compression afterwards.

## Slack emoji: a special case

128 KB is tiny for an animated image. Make the GIF 128 × 128 pixels, keep it to a second or two, use a flat background and as few colours as the design allows. Text and simple shapes fit easily; a cropped video clip usually needs the frame count cut hard.

## Quick recipe

1. Crop to the action and resize to 480 pixels wide.
2. Cut it to the seconds that matter.
3. Run it through [GIF Compressor](/gif-compressor).
4. Still too big and the platform takes video? Send it as [MP4](/gif-to-mp4) instead.

All the GIF tools linked here work in your browser — your GIF is never uploaded.
