import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /pixelate-image. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "en",
  name: "Pixelate Image",
  tagline:
    "Turn any photo into chunky pixel blocks — from a subtle mosaic to bold retro pixel art. Choose the block size, preview it live and pixelate many images at once. Free, in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "Pixelation replaces the detail of an image with square blocks of colour, each one taking the colour of the area it covers. It is the look of old video games, of mosaic tiles and of a picture deliberately made unreadable. oMyImage's Pixelate Image lets you choose exactly how big those blocks are: drag the slider and the preview updates at once, showing roughly how many blocks fit along the image. Add one picture or a batch, then download them pixelated in the same format or another.",

  sections: [
    {
      heading: "Choosing the block size",
      id: "size",
      body: [
        "Block size is measured in pixels of the original image, from 2 to 120. Small blocks of 4 to 8 pixels give a gentle mosaic that still shows what the picture is; 16 to 32 pixels turn a photo into a clear pixel-art scene; above that, the image becomes a handful of coloured squares.",
        "Because the setting is in pixels, the same value looks finer on a large photo than on a small one. The note under the slider shows how many blocks fit along the longer side, which is a more reliable guide than the number itself.",
      ],
    },
    {
      heading: "Pixel art and retro looks",
      id: "art",
      body: [
        "For an 8-bit or 16-bit game look, aim for 40 to 80 blocks along the longer side. Simple subjects with strong shapes — a logo, a pet against a plain wall, a skyline — pixelate best. Raise the contrast first with Brightness & Contrast if the result looks muddy; pixel art reads best with clear, saturated colours.",
        "Save pixel art as PNG. JPG compression smears the sharp block edges and adds blotches inside flat squares, which undoes the effect.",
      ],
    },
    {
      heading: "Pixelating to hide things",
      id: "privacy-note",
      body: [
        "Pixelation is a popular way to hide faces, number plates and text, but small blocks are not safe: a pixelated face or word can sometimes be recognised or reconstructed. If you pixelate to protect someone, use large blocks so no structure remains. To hide only part of an image — faces, a plate, a name — use Blur Face, which detects faces and lets you pixelate or blur just the areas you choose.",
      ],
    },
    {
      heading: "Other uses",
      id: "uses",
      body: [
        "Pixelated photos make good backgrounds for text, because the shapes stay but the detail no longer competes with the words. They also work as spoiler-free previews, as quiz images where players guess the picture, and as the starting point for cross-stitch, bead and mosaic patterns, where each block becomes one stitch or tile.",
      ],
    },
    {
      heading: "Many images, any format",
      id: "batch",
      body: [
        "Add as many images as you need; the same block size is applied to all of them. JPG, PNG and WEBP are accepted, and the result keeps the original format unless you choose another. Transparent areas stay transparent in PNG and WEBP. One image downloads directly; several come as a ZIP file.",
      ],
    },
    {
      heading: "Pixelation and file size",
      id: "size-note",
      body: [
        "A pixelated image holds far less detail, so it compresses well: a strongly pixelated PNG can be a fraction of the original's size, which makes it handy for lightweight backgrounds and placeholders. To shrink it further without losing the crisp blocks, keep PNG and run it through Compress Image.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is pixelated entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to pixelate an image",
  steps: [
    { title: "Add images", description: "Select one or more JPG, PNG or WEBP images." },
    { title: "Set the block size", description: "Drag the slider until the preview has the look you want." },
    { title: "Pixelate and download", description: "Click Pixelate image to download it, or a ZIP for several." },
  ],

  features: [
    { icon: "apps", title: "Any block size", description: "From a fine mosaic to a handful of squares, 2 to 120 pixels." },
    { icon: "visibility", title: "Live preview", description: "See the effect as you drag, and hold to compare." },
    { icon: "lock", title: "Nothing uploaded", description: "Pixelated entirely in your browser." },
  ],

  faqs: [
    { q: "How do I pixelate an image?", a: "Add the image, set the block size with the slider and click Pixelate image. The pixelated image downloads straight away." },
    { q: "What block size should I use?", a: "4–8 px for a subtle mosaic, 16–32 px for pixel art, larger to make the picture abstract." },
    { q: "Is pixelation safe for hiding faces or text?", a: "Only with large blocks. Small blocks can sometimes be recognised; Blur Face offers stronger options for parts of an image." },
    { q: "Can I pixelate only part of an image?", a: "Not here — this tool pixelates the whole image. Blur Face can pixelate selected areas." },
    { q: "Which format is best for pixel art?", a: "PNG. It keeps the block edges crisp; JPG blurs them." },
    { q: "Can I pixelate several images at once?", a: "Yes. They are all pixelated with the same block size and download as a ZIP." },
    { q: "Does it keep transparency?", a: "Yes, when you save as PNG or WEBP." },
    { q: "Can I undo pixelation?", a: "No — the detail is gone. Keep your original file." },
    { q: "Is my image uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "Can I use it for cross-stitch patterns?", a: "Yes. Pixelate the photo, then each block is one stitch." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your images are pixelated entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
