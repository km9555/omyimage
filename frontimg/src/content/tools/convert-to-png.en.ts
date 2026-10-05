import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /convert-to-png. The page <title> and meta description
 * stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "en",
  name: "Convert to PNG",
  tagline:
    "Convert JPG, WEBP, GIF and BMP images to PNG online — lossless, with transparency kept, in batches. Free and private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "PNG is the format you convert to when the image has to stay exactly as it is: no further compression, no new artefacts, transparency intact. oMyImage's Convert to PNG tool turns JPG, WEBP, GIF and BMP files into PNGs in your browser — one image or a whole folder at once, downloaded together as a ZIP. Because PNG is lossless, what comes out is pixel for pixel what went in, and every later edit and re-save leaves it that way.",

  sections: [
    {
      heading: "When PNG is the right destination",
      id: "why",
      body: [
        "Most conversions to PNG fall into four groups. The first is editing: a lossy JPG or WEBP loses a little more detail every time it is saved, so people convert once to PNG and do all their cropping, retouching and annotating on a file that cannot degrade. The second is sharp content — screenshots, diagrams, charts, scanned forms and anything with small text — where PNG keeps every edge crisp and JPG would add a grey halo around each letter.",
        "The third is transparency. Logos, stickers, icons and product cut-outs need to sit on any background, and PNG is the universally supported format that can carry a see-through layer. The fourth is plain compatibility: design tools, document templates, game engines and plenty of upload forms ask for PNG specifically, and a WEBP saved from a website is the file they refuse.",
      ],
    },
    {
      heading: "Why the PNG is bigger than the JPG",
      id: "bigger",
      body: [
        "A 300 KB phone photo commonly becomes a 2–4 MB PNG, and that is expected rather than a fault. JPG and lossy WEBP get their small sizes by throwing away detail the eye is unlikely to miss; PNG is not allowed to throw anything away, so it has to store every pixel, including all the fine noise of a photograph.",
        "The rule of thumb is simple. For photographs, PNG is the safe working copy and JPG or WEBP is the format to share. For screenshots, graphics and anything with flat colour, PNG is often the smallest of the three as well as the sharpest, because large areas of identical colour compress extremely well without any loss.",
      ],
    },
    {
      heading: "Converting does not undo compression",
      id: "not-restore",
      body: [
        "Converting a JPG to PNG preserves the image as it is now; it does not bring back what the JPG already discarded. Blocky skies, smudged fine detail and the faint ringing around text are all copied faithfully into the PNG. What you gain is that none of it gets worse from here on.",
        "If you have the original — a camera RAW, a design file, the screenshot as captured — export the PNG from that instead. If the JPG is all you have and it is visibly damaged, the upscale and unblur tools can soften the worst of it, but no format conversion will.",
      ],
    },
    {
      heading: "Transparency in and out",
      id: "transparency",
      body: [
        "WEBP, GIF and some BMP files can contain transparent areas, and those are carried into the PNG exactly, including the soft, partly transparent pixels along anti-aliased edges. Nothing is flattened and there is no background colour to choose.",
        "A JPG, on the other hand, has no transparency to carry: its white background is real white pixels. Converting it to PNG keeps that white. To make the background see-through, run the image through the background remover first — it outputs a transparent PNG directly.",
      ],
    },
    {
      heading: "GIF and BMP sources",
      id: "gif-bmp",
      body: [
        "An animated GIF converts to its first frame, because a PNG holds a single still image. If you need a particular frame, split the GIF into images first and keep the one you want. A still GIF converts without any change in appearance, and the PNG is free of GIF's 256-colour limit for any edits you make afterwards.",
        "BMP is the opposite case: it stores pixels with no compression at all, so the same picture as a PNG is usually several times smaller with exactly the same pixels. Converting old BMP scans and screenshots to PNG is one of the few conversions that saves space for free.",
      ],
    },
    {
      heading: "Camera data and colour",
      id: "metadata",
      body: [
        "By default, EXIF and XMP data in the source — capture date, camera model and, if present, GPS location — is copied into the PNG. Tick Strip metadata to leave all of it out, which is worth doing before sharing a photo publicly. The image is converted in sRGB, the colour space every screen and browser assumes, so colours look the same in the PNG as in the original on a normal display.",
      ],
    },
  ],

  howToTitle: "How to convert an image to PNG",
  steps: [
    { title: "Upload", description: "Select one or many JPG, WEBP, GIF or BMP images, or drag and drop them in." },
    { title: "Choose options", description: "Keep or strip the camera metadata, and keep auto-rotation on for phone photos." },
    { title: "Convert & download", description: "Click Convert — one PNG downloads directly, several download together as a ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Lossless output", description: "Every pixel is kept exactly, so further edits and saves never degrade the image." },
    { icon: "burst_mode", title: "Batch conversion", description: "Convert a whole folder of JPG, WEBP, GIF or BMP files at once and get one ZIP back." },
    { icon: "lock", title: "Private by default", description: "Images are converted in your browser; only very large files are processed on our server." },
  ],

  faqs: [
    { q: "Which formats can I convert to PNG?", a: "JPG, WEBP, GIF and BMP. GIFs are converted using their first frame. HEIC and AVIF have their own converters because they need different handling." },
    { q: "Does converting to PNG improve the quality?", a: "No. It keeps the image exactly as it is now. PNG prevents further loss, but it cannot restore detail a JPG has already discarded." },
    { q: "Why is my PNG so much larger than the JPG?", a: "PNG is lossless, so it stores every pixel of a photograph, noise included. A size increase of five to ten times for a photo is normal. Screenshots and graphics stay small." },
    { q: "Is transparency kept?", a: "Yes. Transparent and semi-transparent areas from WEBP, GIF or BMP files carry into the PNG unchanged. A JPG has no transparency, so its background stays as it is." },
    { q: "How do I make the background transparent?", a: "Converting a JPG to PNG keeps its background. Use the background remover first; it outputs a PNG with a transparent background." },
    { q: "Can I convert many images at once?", a: "Yes. Add as many as you like. A single image downloads as a PNG; several download together in one ZIP file." },
    { q: "Is my EXIF data kept?", a: "Yes by default — capture date, camera and GPS location carry over if the source has them. Tick Strip metadata to remove all of it." },
    { q: "Should I use PNG or JPG for photos?", a: "Use PNG as a working copy while you edit, and JPG or WEBP to share or upload. PNG is the better choice for screenshots, text and graphics." },
    { q: "Are my images uploaded?", a: "Normally not — conversion runs in your browser. Only an image too large for your browser to handle is sent to our server, converted there and deleted straight away." },
    { q: "Does it work on a phone?", a: "Yes. The tool runs in mobile browsers on Android and iPhone; pick images from your gallery and the PNGs save to your downloads." },
  ],

  security:
    "Your images are converted to PNG in your browser with HTML canvas. Only an image too large for the browser — over 100 MB or beyond its canvas limit — is processed on our server, and it is deleted right after conversion. Nothing is kept and no files are tracked.",
};

export default content;
