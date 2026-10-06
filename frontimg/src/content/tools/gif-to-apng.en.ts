import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-to-apng. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "en",
  name: "GIF to APNG",
  tagline:
    "Convert animated GIFs to APNG, the animated PNG — every pixel, frame and pause kept, often in a smaller file. Free, in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "APNG is PNG with animation: the same lossless format as an ordinary PNG, with extra chunks that hold frames and timing. Every current browser plays it, and software that does not understand the animation simply shows the first frame as a normal PNG. oMyImage's GIF to APNG converter writes your GIF as an APNG without changing a single pixel, stores each frame as compactly as it can, and shows the size next to the original so you can see what you gained.",

  sections: [
    {
      heading: "Why APNG instead of GIF",
      id: "why",
      body: [
        "GIF compresses with LZW, a method from the 1980s; PNG uses DEFLATE, which squeezes the same pixels harder. Converting a GIF to APNG therefore often makes it smaller without any loss — most noticeably for cartoons, logos, icons and screen recordings with large flat areas.",
        "APNG can also hold full colour and soft, semi-transparent edges, which GIF cannot. A GIF converted to APNG keeps exactly the colours and hard edges it had, but if you later edit the frames, APNG will not force them back to 256 colours.",
      ],
    },
    {
      heading: "How the file is built",
      id: "how",
      body: [
        "When all the frames fit in 256 colours — almost always the case for a GIF — the APNG uses a palette, so each pixel takes one byte, just as in the GIF. Otherwise it stores full RGBA. Every frame after the first records only the rectangle that changed, and a frame identical to the one before is merged into its duration.",
        "Each frame keeps its exact duration, in milliseconds, and the animation loops as the GIF did — forever, once or a set number of times. Transparent areas stay transparent.",
      ],
    },
    {
      heading: "Where APNG plays",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari and Opera all play APNG, on desktop and on phones, so an APNG works anywhere an image can go on a web page. LINE uses APNG for its animated stickers, and many sticker and emoji tools accept it.",
        "Image viewers, editors and chat apps that only know ordinary PNG show the first frame instead of the animation. That is APNG's built-in fallback, but it means a GIF is still the safer choice for email and most messaging apps.",
      ],
    },
    {
      heading: "The file extension",
      id: "extension",
      body: [
        "The download ends in .png, the extension browsers and most sites expect; the animation is inside the file, not in its name. If a service asks specifically for an .apng file, rename the extension — the content is the same.",
      ],
    },
    {
      heading: "APNG or WEBP",
      id: "webp",
      body: [
        "Both are modern replacements for GIF. Lossless WEBP is usually smaller still, and lossy WEBP far smaller, but WEBP cannot be created in Safari and some tools do not accept it. APNG is lossless only, can be created in every browser including Safari, and opens as a still PNG wherever animation is not supported. For a website, try both and keep the smaller; for stickers, use whatever the platform asks for.",
      ],
    },
    {
      heading: "Edit first, then convert",
      id: "prepare",
      body: [
        "The converter keeps the GIF exactly as it is, so do any editing before converting. Use the GIF Cropper for the shape and the GIF Resizer for an exact pixel size — sticker platforms usually fix both — and the GIF Cutter to keep only the frames you need. Those tools keep the GIF's own colours, so the APNG stays pixel-exact to what you prepared.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded and the APNG is written entirely in your browser. Nothing is uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to convert GIF to APNG",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Convert", description: "Click Convert to APNG; every pixel and frame is kept." },
    { title: "Download", description: "Compare the size with the GIF and download the APNG." },
  ],

  features: [
    { icon: "image", title: "Lossless", description: "Every pixel, frame and pause carries over unchanged." },
    { icon: "compress", title: "Often smaller", description: "PNG's compression usually beats GIF's on the same frames." },
    { icon: "lock", title: "Nothing uploaded", description: "Converted entirely in your browser." },
  ],

  faqs: [
    { q: "How do I convert a GIF to APNG?", a: "Add the GIF and click Convert to APNG. The animated PNG plays exactly like the GIF." },
    { q: "What is APNG?", a: "Animated PNG: a PNG file that also holds animation frames and their timing." },
    { q: "Is APNG lossless?", a: "Yes. Every pixel of every frame is stored exactly." },
    { q: "Is APNG smaller than GIF?", a: "Often, thanks to better compression, especially for graphics and screen recordings. The tool shows the difference." },
    { q: "Does it keep transparency?", a: "Yes. Transparent areas stay transparent." },
    { q: "Why does my APNG look like a still image?", a: "The program you opened it in doesn't support APNG and shows the first frame. Open it in a browser to see the animation." },
    { q: "Why does the file end in .png?", a: "APNG files use the PNG extension. Rename it to .apng only if a service asks for that." },
    { q: "Does it work in Safari?", a: "Yes. Safari both plays APNG and can create it with this tool." },
    { q: "Is my GIF uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "Should I use APNG or WEBP?", a: "WEBP is usually smaller; APNG works in more tools and in Safari. Try both if size matters." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is converted entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
