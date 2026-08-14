/**
 * Every data-driven converter page, one entry per route.
 *
 * The `unique` block is required by the type system. That is the point: a new
 * converter cannot be added by copying a neighbour and changing three words,
 * because TypeScript will not compile without pair-specific prose, and the
 * duplicate-content test fails the build if two pages read too much alike.
 *
 * Adding a pair:
 *   1. entry here
 *   2. `src/app/<slug>/page.tsx` — the 5-line stub (see ConverterPage)
 *   3. registry entry in `src/lib/tools.ts`
 *   4. `TOOL_INPUTS` entry in `src/lib/file-actions.ts`
 */
import type { ConverterPair } from "./types";

export const CONVERTER_PAIRS: ConverterPair[] = [
  {
    slug: "webp-to-png",
    from: "webp",
    to: "png",
    name: "WEBP to PNG",
    icon: "sync_alt",
    engine: {
      target: { kind: "canvas", mime: "image/png" },
      decode: "browser",
      serverFallback: true,
    },
    sourceKinds: ["webp"],
    flatten: false,
    quality: false,
    aliases: ["webp2png", "open webp", "webp converter", "save webp as png"],
    rating: { value: "4.8", count: "471" },
    unique: {
      intro:
        "WebP keeps pages fast, but it is still the format that will not open when you double-click it. Converting to PNG gives you a file every application understands, with the transparency intact and no quality lost along the way — because PNG is lossless, the pixels that come out are exactly the pixels that went in. Drop in one WebP or a hundred; everything is converted inside your browser.",
      whyConvert:
        "The usual reason is simple incompatibility. You saved an image from a website, and now Photoshop, PowerPoint, your printer's upload form or an older Android phone refuses to touch it. PNG is the safest possible answer to that problem: it has been universally supported since the late 1990s and, unlike JPG, it preserves transparency, so a logo with a see-through background survives the trip. The other common reason is editing. WebP is lossy by default, and every save cycle degrades it a little further. Converting once to PNG gives you a lossless working file you can crop, retouch and re-save as many times as you need without the image quietly deteriorating underneath you.",
      notes: [
        {
          heading: "Expect the PNG to be larger — that is normal",
          body:
            "A WebP that was 180 KB can easily land at 900 KB as a PNG, and nothing has gone wrong when it does. WebP achieves its size by discarding image data; PNG is forbidden from discarding anything. You are trading bytes for compatibility and for a file that will not degrade further. If the resulting size is a problem and you do not need transparency, converting to JPG instead will be far smaller, and if you only wanted to shrink the file rather than change its format, the compressor is the better tool.",
        },
        {
          heading: "Animated WebP converts to a single frame",
          body:
            "WebP can hold an animation, much like a GIF. A still format such as PNG cannot represent that, so an animated WebP converts to its first frame only. If you need the movement preserved, convert to GIF rather than PNG. If you specifically want every frame as a separate image, that is a different job than this tool does.",
        },
        {
          heading: "Transparency is kept exactly",
          body:
            "Both WebP and PNG store a full 8-bit alpha channel, so soft edges, drop shadows and anti-aliased text all convert cleanly. There is no flattening step and no background colour to choose, because nothing needs filling in. This is the main practical advantage of converting WebP to PNG rather than to JPG, which would have to paint something solid behind every transparent pixel.",
        },
      ],
      faqs: [
        {
          q: "Will converting WEBP to PNG reduce the quality?",
          a: "No. PNG is a lossless format, so the conversion copies every pixel across exactly. Be aware of what it cannot do, though: if the original WebP was saved lossily, detail was already discarded at that point, and converting to PNG preserves the image as it currently is rather than restoring anything.",
        },
        {
          q: "Why is my PNG so much bigger than the WEBP was?",
          a: "Because PNG never throws data away. WebP's small size comes from lossy compression, and PNG cannot use that trick. A 3–6× size increase is completely normal for a photographic image and is the expected cost of a lossless, universally-readable file.",
        },
        {
          q: "Does transparency survive the conversion?",
          a: "Yes, fully. Both formats support an alpha channel, so transparent and semi-transparent areas transfer across unchanged. No white rectangle appears behind your image.",
        },
        {
          q: "What happens to an animated WEBP?",
          a: "You get the first frame as a still PNG. PNG has no animation support, so the remaining frames cannot be represented. Convert to GIF instead if you need the animation to survive.",
        },
        {
          q: "Can I convert a folder of WEBP files in one go?",
          a: "Yes. Select or drag in as many as you want and they are all converted in sequence, then packaged into a single ZIP so you get one download instead of dozens.",
        },
        {
          q: "Why won't Windows Photos or Photoshop open my WEBP file?",
          a: "WebP arrived in 2010 but desktop software adopted it slowly. Photoshop needed a plugin until version 23.2, and older Windows builds need a codec from the Microsoft Store. Converting to PNG sidesteps the whole issue rather than fixing it version by version.",
        },
      ],
    },
  },
  {
    slug: "webp-to-jpg",
    from: "webp",
    to: "jpg",
    name: "WEBP to JPG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/jpeg" }, decode: "browser", serverFallback: true },
    sourceKinds: ["webp"],
    flatten: true,
    quality: true,
    aliases: ["webp2jpg", "webp to jpeg", "save webp as jpg"],
    rating: { value: "4.8", count: "612" },
    unique: {
      intro:
        "WebP is excellent on a web page and awkward everywhere else. Converting to JPG gives you the one image format that nothing refuses — email clients, print shops, photo frames, older phones, government upload forms. You choose the quality, and if the WebP has transparent areas you choose what colour fills them, because JPG cannot keep them.",
      whyConvert:
        "Almost everyone arriving here has hit a wall rather than made a choice. You right-clicked an image, saved it, and the thing you need to put it into will not accept a .webp. That list is long and stubborn: plenty of print services, older versions of Office, e-commerce product uploaders, digital photo frames, and a great deal of embedded and industrial software. JPG is the lowest common denominator of digital imaging and has been for three decades, so converting is usually faster than fighting whatever is rejecting the file. The second reason is size. If your WebP happens to be lossless — screenshots often are — it can actually be larger than a JPG of the same picture, and converting shrinks it substantially.",
      notes: [
        {
          heading: "Transparency has to become something",
          body:
            "JPG has no alpha channel at all, so a transparent background cannot simply carry over. Something has to be painted underneath, and the default everywhere is white. That is fine on a white page and obvious on a dark one, which is why this tool lets you pick the fill colour instead of assuming. If the transparency actually matters to you, JPG is the wrong target — convert to PNG instead and keep it.",
        },
        {
          heading: "Two lossy steps in a row",
          body:
            "A lossy WebP has already discarded detail, and encoding to JPG discards a little more. In practice this is rarely visible at sensible quality settings, but it is a real effect and it compounds if you keep converting back and forth. Convert once, from the best source you have, and keep that result. If the image is going to be edited further, a lossless PNG makes a better intermediate.",
        },
        {
          heading: "Animated WebP gives you one frame",
          body:
            "JPG is a single-image format, so an animated WebP converts to its first frame. There is no way around that within JPG itself. If the animation is the point, convert to GIF instead.",
        },
      ],
      faqs: [
        { q: "Why won't my computer open a WEBP file?", a: "Because WebP arrived in 2010 and desktop software has been slow to follow. Older Windows builds need a codec from the Microsoft Store, Photoshop only added native support in version 23.2, and many smaller apps still have none. Converting to JPG avoids chasing each one individually." },
        { q: "Will the JPG be bigger or smaller than the WEBP?", a: "Usually slightly bigger if the WebP was lossy, because WebP compresses more efficiently at the same visual quality. If the WebP was lossless — common with screenshots and graphics — the JPG will be dramatically smaller." },
        { q: "What happens to transparent areas?", a: "They are filled with a solid colour, since JPG cannot store transparency. White is the default and you can change it before converting. To keep transparency, convert to PNG instead." },
        { q: "Does converting reduce image quality?", a: "Slightly, because JPG is lossy. At the default quality the difference is not visible at normal viewing sizes. Raise the slider if you are converting detailed photographs you intend to print." },
        { q: "Can I convert a lot of WEBP files at once?", a: "Yes. Drop in the whole batch and they are converted one after another, then delivered as a single ZIP so you are not clicking through downloads individually." },
      ],
    },
  },
  {
    slug: "jpg-to-webp",
    from: "jpg",
    to: "webp",
    name: "JPG to WEBP",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/webp" }, decode: "browser", serverFallback: true },
    sourceKinds: ["jpeg"],
    flatten: false,
    quality: true,
    aliases: ["jpg2webp", "jpeg to webp", "compress jpg to webp", "webp for website"],
    rating: { value: "4.9", count: "588" },
    unique: {
      intro:
        "Converting JPG to WebP is the single cheapest page-speed win most sites have left. The same photograph at the same apparent quality typically lands 25–35% smaller, and every current browser has supported the format since Safari joined in 2020. Set the quality, convert the whole folder at once, and get a ZIP back.",
      whyConvert:
        "This one is almost always about performance. Images are the heaviest thing on a typical web page by a wide margin, and Core Web Vitals — Largest Contentful Paint in particular — are dominated by how fast the main image arrives. WebP gets you a meaningful size reduction without the visible artefacts you would get by simply cranking JPG compression harder, because its encoder is a generation newer and works in larger, smarter blocks. The compatibility objection that used to hold people back has essentially evaporated: Chrome, Firefox, Edge, Opera and Safari all decode WebP, which covers effectively every visitor you have. The remaining caution is about where the file will end up. WebP is for serving on the web; it is still a poor choice for archiving or for handing to a print shop.",
      notes: [
        {
          heading: "Do not convert your originals",
          body:
            "Convert copies destined for the web and keep your camera files as they are. A JPG has already been compressed lossily once, and re-encoding it to WebP compresses it again — the result looks fine on a web page but it is a generational step down, and it is not something you can undo later. Treat WebP as an output format, the same way you would treat a resized thumbnail, rather than a replacement for your library.",
        },
        {
          heading: "What quality setting to use",
          body:
            "Around 0.80 to 0.85 is the sweet spot for photographs on a website, and it is where the size saving is most dramatic relative to the visual cost. Push toward 0.92 and above for hero images, product photography or anything a customer will zoom into. Below about 0.70 the encoder starts smoothing away fine texture — skin, foliage and fabric are where you notice it first. Convert one representative image, look at it properly, and then run the batch at that setting.",
        },
        {
          heading: "Serve it with a fallback if you need to",
          body:
            "If you support genuinely ancient clients, the standard approach is an HTML picture element listing the WebP first and the original JPG as a fallback source, letting each browser take what it understands. Most modern site builders, CDNs and CMS platforms now handle this negotiation for you automatically, so check whether yours already does before adding markup by hand.",
        },
      ],
      faqs: [
        { q: "How much smaller will my images actually get?", a: "For typical photographs, expect 25–35% at matched visual quality. Flat graphics and screenshots often do considerably better. The saving depends heavily on the image, so convert a few representative files before committing to a setting for a whole library." },
        { q: "Is WEBP safe to use on my website now?", a: "Yes. Every current browser decodes it — Chrome and Firefox for over a decade, Safari since 2020. It is a mainstream format, not an experimental one." },
        { q: "Will converting JPG to WEBP lose quality?", a: "There is a small generational loss, because the JPG was already lossily compressed and WebP compresses it again. At quality 0.80 and above this is not visible at normal viewing sizes. Always convert from the best original you have rather than from an already-shrunken copy." },
        { q: "Is WEBP good for printing?", a: "No. Print workflows expect TIFF, PNG or high-quality JPG, and many prepress tools will not open WebP at all. Use it for the web and keep something else for print." },
        { q: "Does WEBP support transparency?", a: "Yes, WebP has a full alpha channel. A JPG source has no transparency to carry over, but if you convert a PNG to WebP the transparency is preserved." },
        { q: "Can I convert an entire folder in one go?", a: "Yes. Add as many JPGs as you like and they are converted in sequence and returned as one ZIP, which is the usual way to migrate an existing image library." },
      ],
    },
  },
  {
    slug: "png-to-webp",
    from: "png",
    to: "webp",
    name: "PNG to WEBP",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/webp" }, decode: "browser", serverFallback: true },
    sourceKinds: ["png"],
    flatten: false,
    quality: true,
    aliases: ["png2webp", "shrink png", "webp with transparency"],
    rating: { value: "4.8", count: "534" },
    unique: {
      intro:
        "PNG is honest but heavy. Converting to WebP keeps the transparency — the reason you were using PNG in the first place — while cutting the file to a fraction of its size. For logos, icons, UI screenshots and anything with an alpha channel that has to load quickly, this is usually the biggest single saving available.",
      whyConvert:
        "PNG's problem is that it refuses to discard anything, which is exactly right for a working file and wasteful for a web asset. A screenshot or a product cut-out saved as PNG routinely runs into the megabytes, and on a page with a dozen of them the cost is severe. WebP solves this without forcing you to give up the alpha channel, which is what makes it strictly better than the old workaround of converting to JPG and painting a fake background behind the transparency. You get soft edges, drop shadows and anti-aliased text intact, at roughly a quarter to a half of PNG's size. The trade-off to understand is that WebP's lossy mode is genuinely lossy, so a screenshot of small text can pick up faint smearing if you push the quality slider too low.",
      notes: [
        {
          heading: "Screenshots and text need a higher setting",
          body:
            "Photographic content tolerates aggressive compression because the eye does not track individual pixels in a texture. Sharp-edged content — UI screenshots, text, diagrams, line art — is the opposite: compression artefacts cluster around high-contrast edges and show up as a faint halo or blur. If your PNG contains readable text, stay at 0.90 or above and check the result at 100% zoom before running a batch.",
        },
        {
          heading: "Transparency carries over exactly",
          body:
            "Both formats store a full 8-bit alpha channel, so this conversion does not flatten anything or ask you for a background colour. Semi-transparent pixels stay semi-transparent, which means soft shadows and feathered edges survive intact. This is the main reason to choose WebP over JPG when your source is a PNG.",
        },
        {
          heading: "When to keep the PNG instead",
          body:
            "Keep PNG when the file is a master copy you will edit again, when it is going into a context that does not decode WebP — email templates are the notorious one, since several desktop mail clients still cannot render it — or when it is a tiny icon where the saving is a few hundred bytes and not worth the extra format in your pipeline. PNG also remains the right answer for anything needing pixel-exact fidelity, such as a QR code or a technical diagram.",
        },
      ],
      faqs: [
        { q: "Does PNG to WEBP keep transparency?", a: "Yes, completely. WebP has a full alpha channel, so transparent and semi-transparent areas transfer across unchanged. Nothing is flattened and there is no background colour to choose." },
        { q: "How much smaller is WEBP than PNG?", a: "Typically 50–75% smaller for photographic or complex images. Simple flat graphics vary more widely — sometimes the saving is enormous, occasionally a very small PNG is already near-optimal." },
        { q: "Is the conversion lossless?", a: "Not by default. This tool uses WebP's lossy mode with a quality slider, which is where the large size savings come from. Set the quality high if you need near-original fidelity, or keep the PNG if you need it to be exact." },
        { q: "Will text in my screenshot stay sharp?", a: "At quality 0.90 and above, generally yes. Lower settings can soften small text, because compression artefacts gather around high-contrast edges. Check one file at full zoom before converting a whole batch." },
        { q: "Can I use WEBP in emails?", a: "Not reliably. Several desktop email clients still do not render WebP, so PNG or JPG remains the safer choice for email. WebP is aimed at web pages, where support is universal." },
      ],
    },
  },
  {
    slug: "jfif-to-jpg",
    from: "jfif",
    to: "jpg",
    name: "JFIF to JPG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/jpeg" }, decode: "browser", serverFallback: true },
    sourceKinds: ["jpeg"],
    flatten: true,
    quality: true,
    aliases: ["jfif2jpg", "jfif file", "change jfif to jpg", "open jfif", "jfif to jpeg"],
    rating: { value: "4.9", count: "914" },
    unique: {
      intro:
        "You saved an image and Windows handed you a .jfif file that half your software refuses to open. Nothing is wrong with it — a JFIF is a perfectly ordinary JPEG with an unusual extension — but that is little comfort when the upload form rejects it. This converter reads the file and writes a clean .jpg that behaves the way you expected in the first place.",
      whyConvert:
        "This is a naming problem masquerading as a format problem. JFIF stands for JPEG File Interchange Format, and it is the container that essentially every file you already call a JPG uses internally. The reason you suddenly have files ending in .jfif is a Windows registry quirk: certain combinations of Windows and Chrome register .jfif as the preferred extension for the image/jpeg MIME type, and from then on saved images get that extension instead of .jpg. The bytes are identical to what you would have got before. Unfortunately a lot of software checks the extension rather than the file contents — job application portals, older photo managers, e-commerce uploaders, school submission systems — and simply refuses. Renaming the file by hand often works, but it fails when the extension is hidden, when there are dozens of files, or when the receiving system also validates the contents.",
      notes: [
        {
          heading: "Why not just rename the file?",
          body:
            "You often can, and if you have one file and visible extensions it is the quickest fix. It breaks down at scale and in the cases where Windows hides extensions from you, so you end up with something called photo.jpg.jfif that is no better off. Converting also normalises the file: it is decoded and re-encoded as a standard baseline JPEG, which resolves the occasional case where the receiving software was objecting to something inside the file rather than to its name.",
        },
        {
          heading: "Stopping Windows from doing it again",
          body:
            "The underlying cause is a file-type association in the Windows registry, under the entry for the image/jpeg content type, where .jfif is listed as the default extension. Editing the registry fixes it permanently for future downloads but does nothing for the files you already have, and it is not something to attempt casually. Converting handles what is already on your disk, which is usually the immediate problem.",
        },
        {
          heading: "One re-encode, minimal loss",
          body:
            "Because JFIF and JPG are the same underlying format, this conversion is close to a pass-through. The image is decoded and re-encoded once, so at a high quality setting the difference is imperceptible. Leave the quality slider high — there is no size problem to solve here, and this is not the moment to compress.",
        },
      ],
      faqs: [
        { q: "What actually is a JFIF file?", a: "It is a JPEG. JFIF stands for JPEG File Interchange Format and it is the standard container that nearly all JPG files already use. The only difference is the letters after the dot." },
        { q: "Why does Chrome save images as .jfif instead of .jpg?", a: "A Windows registry association lists .jfif as the default extension for the image/jpeg content type. Chrome asks Windows what extension to use and gets told .jfif. It is a Windows configuration quirk, not a Chrome bug." },
        { q: "Can I just rename .jfif to .jpg?", a: "Frequently yes, since the contents are already a valid JPEG. It is awkward when Windows hides file extensions, useless for a large batch, and does not help if the receiving software is objecting to something other than the name." },
        { q: "Will converting lose any quality?", a: "Essentially none at a high quality setting. The image is decoded and re-encoded once, which is a very small generational step. Keep the slider high and you will not see a difference." },
        { q: "Can I convert many JFIF files at once?", a: "Yes, and this is the main reason to use a converter over renaming. Drop in the whole folder and you get one ZIP of .jpg files back." },
        { q: "Is a JFIF file dangerous or corrupted?", a: "No. It is a normal image file with an unfamiliar extension. Nothing about it is broken, which is exactly why the situation is so confusing." },
      ],
    },
  },
  {
    slug: "gif-to-png",
    from: "gif",
    to: "png",
    name: "GIF to PNG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/png" }, decode: "browser", serverFallback: true },
    sourceKinds: ["gif"],
    flatten: false,
    quality: false,
    aliases: ["gif2png", "gif frame to png", "static gif"],
    rating: { value: "4.7", count: "398" },
    unique: {
      intro:
        "Converting a GIF to PNG lifts it out of a 256-colour palette into full colour, and gives you soft-edged transparency instead of GIF's hard on-or-off version. The output is lossless, so it becomes a proper working file you can edit and re-save without degrading. Animated GIFs convert to their first frame, since PNG holds a single image.",
      whyConvert:
        "The usual motive is editing. GIF's palette limit means every image is quantised down to at most 256 distinct colours, and its transparency is one-bit — a pixel is either fully opaque or fully invisible, with nothing in between. That produces the characteristic jagged fringe you see when a GIF logo is placed on a background it was not prepared for. PNG has neither restriction: full 24-bit colour plus an 8-bit alpha channel, so edges can be genuinely smooth. Converting will not invent the colours the GIF already discarded, but it stops any further loss and gives you a file you can composite properly. The other common motive is simple modernisation — replacing legacy GIF assets in a codebase or design system with something that behaves predictably.",
      notes: [
        {
          heading: "Converting will not restore lost colour",
          body:
            "This is the one expectation worth setting clearly. If a photograph was saved as a GIF, it was reduced to 256 colours at that moment and the banding and dithering became part of the image. Converting to PNG preserves that appearance faithfully in a better container; it cannot reconstruct the gradients that were thrown away. If you have access to the original before it became a GIF, convert that instead.",
        },
        {
          heading: "Transparency gets better, not just preserved",
          body:
            "GIF transparency is binary, so anti-aliased edges were pre-blended against whatever background the designer assumed. Those pixels transfer to PNG as-is — the halo does not vanish by itself. What you gain is headroom: PNG can store partial transparency, so once you are in PNG you can actually clean up the edge in an editor, which was never possible while the file remained a GIF.",
        },
        {
          heading: "Animation does not survive",
          body:
            "PNG is a single-image format, so an animated GIF converts to its first frame only. If you want every frame as a separate image file, use the GIF to Images tool instead — it extracts the full sequence. If you want to keep the animation, keep the GIF.",
        },
      ],
      faqs: [
        { q: "What happens to an animated GIF?", a: "You get the first frame as a still PNG. PNG cannot store animation. To pull out every frame as its own file, use the GIF to Images tool; to keep the animation, keep the GIF." },
        { q: "Will the PNG look better than the GIF?", a: "It will look the same. PNG removes the restrictions that damaged the image, but it cannot undo damage already done — the 256-colour reduction happened when the GIF was created and is baked in." },
        { q: "Is GIF to PNG lossless?", a: "Yes. PNG stores every pixel exactly as it was in the GIF, so nothing further is lost in this step." },
        { q: "Does transparency carry over?", a: "Yes. GIF's single transparent colour maps to fully transparent pixels in the PNG. You also gain the ability to edit soft transparency afterwards, which GIF never supported." },
        { q: "Will the PNG file be larger?", a: "Often yes, sometimes considerably. GIF's palette is a form of compression, and PNG stores full colour information. For simple flat graphics the two can be close; for dithered photographic content PNG is usually bigger." },
      ],
    },
  },
  {
    slug: "gif-to-jpg",
    from: "gif",
    to: "jpg",
    name: "GIF to JPG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/jpeg" }, decode: "browser", serverFallback: true },
    sourceKinds: ["gif"],
    flatten: true,
    quality: true,
    aliases: ["gif2jpg", "gif to jpeg", "gif frame to jpg"],
    rating: { value: "4.7", count: "356" },
    unique: {
      intro:
        "Turning a GIF into a JPG gives you a small, universally-accepted photo file. It is the right move when you need to attach, upload or print a still image and the GIF is either too large or simply not accepted. Transparent areas get filled with a colour you pick, and animated GIFs convert to their first frame.",
      whyConvert:
        "Two situations bring people here. The first is an upload that will not take a GIF — a lot of forms accept JPG and PNG only, particularly anything expecting a photograph such as an ID upload, a marketplace listing or a printing service. The second is size: a long animated GIF can run to many megabytes, and if all you actually need is one representative frame, a JPG of that frame is a fraction of the weight. JPG is also the right target when the content is photographic, because its compression is designed for continuous-tone imagery in a way GIF's palette never was. What JPG cannot do is transparency or animation, so it is the wrong choice if either matters to you.",
      notes: [
        {
          heading: "Transparent pixels need a background",
          body:
            "JPG has no alpha channel, so any transparent area in the GIF has to be filled with something solid. White is the default and usually the right answer, but if the image will sit on a coloured page you can choose that colour here and avoid an obvious white box. Because GIF transparency is hard-edged, the boundary can look slightly jagged after filling — that edge came from the GIF, not from the conversion.",
        },
        {
          heading: "Palette artefacts stay visible",
          body:
            "A GIF has already been reduced to 256 colours, often with dithering — the stippled noise pattern used to fake intermediate shades. JPG compression does not remove that pattern, and can in fact make it slightly more noticeable, because the encoder treats the dither dots as real detail worth preserving. Keeping the quality slider reasonably high avoids compounding the problem.",
        },
        {
          heading: "Only the first frame",
          body:
            "JPG holds exactly one image, so an animated GIF converts to its opening frame. There is no setting that changes this. If you need a specific frame rather than the first one, extract the frames first with the GIF to Images tool and then convert the one you want.",
        },
      ],
      faqs: [
        { q: "Which frame of an animated GIF do I get?", a: "The first one. JPG cannot store animation, so only the opening frame is converted. Use GIF to Images if you need a different frame or all of them." },
        { q: "What happens to transparency?", a: "It is filled with a solid colour, because JPG has no transparency support. White is the default and you can pick a different colour before converting." },
        { q: "Will the JPG be smaller than the GIF?", a: "Almost always, and dramatically so for animated GIFs, since you are keeping one frame instead of hundreds. For a simple single-frame GIF with few colours the difference is smaller and occasionally reverses." },
        { q: "Should I convert to JPG or PNG?", a: "JPG if you want a small file and the content is photographic. PNG if you need transparency preserved or lossless quality for further editing." },
        { q: "Will the image look worse?", a: "Slightly, since JPG is lossy — but at default quality the change is hard to see. The dithering pattern from the original GIF is the more noticeable artefact, and it was there before the conversion." },
      ],
    },
  },
  {
    slug: "bmp-to-jpg",
    from: "bmp",
    to: "jpg",
    name: "BMP to JPG",
    icon: "sync_alt",
    engine: {
      target: { kind: "canvas", mime: "image/jpeg" },
      decode: "browser",
      // Sharp/libvips has no BMP loader, so an oversize BMP must NOT be
      // offloaded — the upload validator accepts it and the conversion throws.
      serverFallback: false,
    },
    sourceKinds: ["bmp"],
    flatten: true,
    quality: true,
    aliases: ["bmp2jpg", "bitmap to jpg", "bmp to jpeg", "shrink bmp"],
    rating: { value: "4.8", count: "489" },
    unique: {
      intro:
        "BMP files are enormous because they are barely compressed at all — a 12-megapixel bitmap occupies around 36 MB where the same photograph as JPG is closer to 3 MB. Converting is the fastest way to make those files usable: attachable, uploadable, and openable on something other than Windows. You control the quality, and batches come back as a ZIP.",
      whyConvert:
        "BMP stores every pixel in full, with no compression worth the name, which is why the files are so startlingly large. That is a deliberate design from an era when decoding speed mattered more than disk space, and it survives today mainly in Windows utilities, older scanner and camera drivers, screen-capture tools, and industrial or medical equipment that was specified decades ago. The moment you need to email one, put it on a website, or hand it to almost any modern application, the size becomes the problem. Converting to JPG typically cuts it by 90% or more with no visible difference at a sensible quality setting. It also solves a compatibility issue that catches people out: while BMP is trivially readable on Windows, support on macOS, iOS and Android is patchier than you would expect for such an old format.",
      notes: [
        {
          heading: "Expect a very large size reduction",
          body:
            "A 90–97% reduction is normal, and it is not a sign that something has gone wrong. You are moving from a format that stores each pixel literally to one that models what human vision actually notices. If you need the reduction without any loss at all, convert to PNG instead — still a large saving over BMP, typically 40–70%, and lossless.",
        },
        {
          heading: "This conversion always runs locally",
          body:
            "Most tools here hand very large files to a server for processing, but BMP is deliberately excluded from that: the server-side image library has no BMP decoder, so an offloaded bitmap would fail rather than convert. Your browser handles BMP perfectly well, so BMP conversions stay on your machine no matter how big the file is. Given how large bitmaps get, this is also the faster path — there is no upload to wait through.",
        },
        {
          heading: "Transparency and colour depth",
          body:
            "Most BMP files in circulation are 24-bit with no transparency, so there is usually nothing to flatten. Some 32-bit BMPs do carry an alpha channel; because JPG cannot store one, any transparent area is filled with the background colour you choose. Very old 8-bit or 1-bit bitmaps convert fine, though a 1-bit black-and-white scan is often better served by PNG, which handles hard-edged monochrome more efficiently than JPG.",
        },
      ],
      faqs: [
        { q: "Why are BMP files so large?", a: "Because they are stored essentially uncompressed — every pixel written out in full. A 12-megapixel 24-bit BMP is around 36 MB. JPG compresses the same image to roughly a tenth of that or less." },
        { q: "How much smaller will the JPG be?", a: "Usually 90–97% smaller. A 36 MB bitmap commonly lands between 1 and 4 MB depending on the quality setting and how detailed the image is." },
        { q: "Will I lose quality converting BMP to JPG?", a: "Some, because JPG is lossy. At the default setting it is not visible at normal viewing sizes. If you need no loss at all, convert to PNG instead — still much smaller than BMP." },
        { q: "Can I convert very large BMP files?", a: "Yes. BMP conversion always runs in your browser rather than on a server, because the server-side library cannot read BMP. Very large files just take a little longer to process." },
        { q: "Do BMP files support transparency?", a: "24-bit BMPs, which are the common case, do not. Some 32-bit BMPs carry an alpha channel; since JPG cannot store transparency, those areas are filled with the background colour you select." },
        { q: "Should I convert BMP to JPG or PNG?", a: "JPG for photographs and for the smallest possible file. PNG when you need lossless quality, when the image is a screenshot or line art, or when you want to keep an alpha channel." },
      ],
    },
  },
  {
    slug: "avif-to-jpg",
    from: "avif",
    to: "jpg",
    name: "AVIF to JPG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/jpeg" }, decode: "browser", serverFallback: true },
    sourceKinds: ["avif"],
    flatten: true,
    quality: true,
    aliases: ["avif2jpg", "open avif", "avif to jpeg", "convert avif"],
    rating: { value: "4.8", count: "441" },
    unique: {
      intro:
        "AVIF is the most efficient image format in mainstream use and also the one your software is least likely to open. Converting to JPG trades that efficiency for the ability to actually use the file — in editors, on older phones, at a print shop, in anything built before about 2021. Your browser does the decoding, so nothing is uploaded.",
      whyConvert:
        "AVIF spread through websites much faster than it spread through desktop software, and that gap is why most people end up here. You saved an image from a modern site and now Photoshop, Windows Photo Viewer, your phone's gallery app or a submission form will not touch it. Browsers are the exception rather than the rule: Chrome has decoded AVIF since version 85, Firefox since 93 and Safari since 16.4, which is precisely why this conversion can happen locally in your browser at all. JPG goes the other way — it is understood by essentially everything, at the cost of larger files for the same visual quality. If the file is just for your own use and your software cannot read AVIF, converting is far simpler than hunting for a codec.",
      notes: [
        {
          heading: "The file will get bigger",
          body:
            "This is the expected trade and worth being clear about. AVIF frequently achieves half the size of a JPG at matched quality, so going the other way roughly doubles it. You are buying compatibility with bytes. If size genuinely matters for the destination, keep the quality slider around 0.85 rather than pushing it to maximum — the difference is hard to see and the saving is significant.",
        },
        {
          heading: "Transparency and HDR do not survive",
          body:
            "AVIF supports an alpha channel and high dynamic range; JPG supports neither. Transparent areas are filled with a background colour you choose. HDR images are tone-mapped down to standard range by the browser during decoding, which for a bright, high-contrast photograph can visibly flatten the highlights. If either matters, convert to PNG instead — it keeps the transparency, though it cannot keep HDR either.",
        },
        {
          heading: "Why your browser can open it but your apps cannot",
          body:
            "AVIF wraps the AV1 video codec, which browser vendors adopted early and aggressively because it is royalty-free and good for video streaming. Desktop image software has taken longer, since it means integrating a whole video codec to display a still picture. That is the whole explanation for the odd situation where a web page shows the image fine and double-clicking the saved file does nothing.",
        },
      ],
      faqs: [
        { q: "Why won't my computer open AVIF files?", a: "AVIF support arrived in browsers years before it reached desktop software. Windows needs the AV1 Video Extension from the Microsoft Store, and many image editors still have no support at all. Converting sidesteps the issue." },
        { q: "Will the JPG be larger than the AVIF?", a: "Yes, typically around twice the size at comparable quality. AVIF is substantially more efficient; JPG is substantially more compatible. That is the trade you are making." },
        { q: "Does converting lose quality?", a: "A little, since both formats are lossy and the image is being re-encoded. At quality 0.85 and above it is very hard to see. Convert from the original AVIF rather than from a copy that has already been through another conversion." },
        { q: "What happens to transparency in an AVIF?", a: "It is filled with a solid colour, because JPG has no alpha channel. Pick the fill colour before converting, or convert to PNG instead to keep the transparency." },
        { q: "Is my image uploaded to convert it?", a: "No. Your browser already knows how to decode AVIF, which is what makes local conversion possible. The image is processed in your tab and never sent anywhere." },
      ],
    },
  },
  {
    slug: "avif-to-png",
    from: "avif",
    to: "png",
    name: "AVIF to PNG",
    icon: "sync_alt",
    engine: { target: { kind: "canvas", mime: "image/png" }, decode: "browser", serverFallback: true },
    sourceKinds: ["avif"],
    flatten: false,
    quality: false,
    aliases: ["avif2png", "avif transparent", "avif to png lossless"],
    rating: { value: "4.8", count: "377" },
    unique: {
      intro:
        "When an AVIF has a transparent background, PNG is the right destination rather than JPG. It keeps the alpha channel intact and stores the result losslessly, so what you get is exactly what the browser decoded — a clean working file you can drop into a design tool or edit repeatedly without further degradation.",
      whyConvert:
        "The deciding factor between this and converting to JPG is almost always transparency. AVIF carries a full alpha channel, and if you convert to JPG that transparency has to be destroyed and replaced with a solid fill. PNG keeps it, which matters for logos, product cut-outs, icons and anything intended to sit on a background you do not control. The second factor is editing. PNG is lossless, so once converted you can crop, retouch and re-save as many times as you like without accumulating compression damage — something neither AVIF nor JPG can offer. The cost is size: PNG stores everything, and an AVIF that was a few hundred kilobytes can easily become several megabytes as a PNG. That is a fair price for a master file and a poor one for a web asset.",
      notes: [
        {
          heading: "Expect a dramatic size increase",
          body:
            "AVIF is one of the most efficient formats in existence and PNG is one of the least; converting between them can multiply the file size by five or ten times. Nothing has malfunctioned when this happens. Think of the PNG as a working copy rather than something to publish — if you need it on a web page afterwards, convert it onward to WebP, which will keep the transparency at a fraction of PNG's weight.",
        },
        {
          heading: "Transparency transfers exactly",
          body:
            "Both formats store 8-bit alpha, so semi-transparent pixels stay semi-transparent. Soft shadows, feathered edges and anti-aliased text all survive without a halo or a matte line. There is no background colour to choose here, because nothing needs filling in — which is precisely the advantage over converting to JPG.",
        },
        {
          heading: "HDR is flattened during decoding",
          body:
            "AVIF can store high dynamic range and a wide colour gamut. PNG in common use cannot, and the browser tone-maps the image down to standard range as it decodes. For most images this is invisible; for a deliberately HDR photograph with very bright highlights it can look flatter than the original. This happens at the decode step, so it applies whatever you convert to.",
        },
      ],
      faqs: [
        { q: "Does AVIF to PNG keep transparency?", a: "Yes, fully. Both formats support an 8-bit alpha channel, so transparent and semi-transparent areas transfer unchanged with no background fill." },
        { q: "Is the conversion lossless?", a: "The PNG encoding is lossless, so nothing is lost in that step. The AVIF itself was probably saved lossily, and converting preserves the image as it currently is rather than restoring detail already discarded." },
        { q: "Why is the PNG so much bigger?", a: "Because PNG never discards data while AVIF is extremely efficient at doing so. A five- to ten-fold increase is normal. Convert on to WebP if you need a small file that still has transparency." },
        { q: "Should I choose PNG or JPG for my AVIF?", a: "PNG if the image has transparency or you plan to edit it. JPG if it is an opaque photograph and you want the smallest, most universally-accepted file." },
        { q: "Can I convert several AVIF files at once?", a: "Yes. Add as many as you like — they are converted in sequence in your browser and returned together as a single ZIP." },
      ],
    },
  },
];

const BY_SLUG: Record<string, ConverterPair> = Object.fromEntries(
  CONVERTER_PAIRS.map((p) => [p.slug, p]),
);

/** Throws rather than returning undefined — a stub with a bad slug must fail the build. */
export function getPair(slug: string): ConverterPair {
  const pair = BY_SLUG[slug];
  if (!pair) {
    throw new Error(
      `No converter pair registered for "${slug}". Add it to src/lib/converters/pairs.ts.`,
    );
  }
  return pair;
}

export function hasPair(slug: string): boolean {
  return slug in BY_SLUG;
}
