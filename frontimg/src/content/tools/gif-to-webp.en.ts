import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-to-webp. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "en",
  name: "GIF to WEBP",
  tagline:
    "Convert animated GIFs to animated WEBP — lossless to keep every pixel, or lossy for much smaller files. Every frame keeps its timing. Free, in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "GIF is the oldest animation format on the web and one of the least efficient. Animated WEBP plays the same animation in every current browser, usually in a fraction of the bytes. oMyImage's GIF to WEBP converter rewrites your GIF frame by frame: choose Lossless to keep every pixel exactly, or High or Small for lossy compression that shrinks the file much further. The result plays next to the original with its size and the saving, so you can pick the trade-off before you download.",

  sections: [
    {
      heading: "Lossless or lossy",
      id: "quality",
      body: [
        "Lossless stores every pixel exactly as it is in the GIF. Because WEBP's lossless compression is far better than GIF's, the file is usually smaller already — often by a third or more for screen recordings, logos and cartoons, where large areas share one colour.",
        "High and Small use lossy compression instead, like a JPG for every frame. They usually halve the size of GIFs cut from video, or better, at the cost of slight softening around sharp edges and text. Try High first; choose Small when size matters more than crispness. For small, simple graphics Lossless can even come out smaller than the lossy settings — the result panel shows each size, so it is quick to compare.",
      ],
    },
    {
      heading: "How the animation is stored",
      id: "how",
      body: [
        "Each frame is encoded by your browser's own WEBP encoder and then packed into an animated WEBP. Like a well-made GIF, every frame after the first stores only the rectangle that changed, and a frame identical to the one before is merged into its duration, so still moments cost nothing.",
        "Every frame keeps its timing, and the animation loops exactly as the GIF did — forever, once or a set number of times. Transparent areas stay transparent; their edges stay hard, because GIF had no soft transparency to begin with.",
      ],
    },
    {
      heading: "Where WEBP works",
      id: "support",
      body: [
        "Animated WEBP plays in Chrome, Edge, Firefox, Safari and Opera, on desktop and phone, so it is safe for websites. Swapping GIFs for WEBP is one of the simplest ways to make a page load faster, and it answers the speed-test advice to serve images in modern formats.",
        "Outside the browser support is patchier. Many email programs, chat apps, older image editors and upload forms still expect GIF and may show only a still frame. Keep the GIF for those places and use the WEBP on the web.",
      ],
    },
    {
      heading: "Browsers that can create WEBP",
      id: "browsers",
      body: [
        "The conversion uses the WEBP encoder built into the browser, so nothing extra is downloaded. Chrome and Edge encode Lossless as true lossless, and Firefox creates WEBP files too. Safari can show WEBP but cannot create it — and on iPhone and iPad every browser runs on Safari's engine — so use a computer or an Android phone for this tool. The tool tells you if your browser can't do it.",
      ],
    },
    {
      heading: "Stickers and messaging",
      id: "stickers",
      body: [
        "WhatsApp's animated stickers are WEBP files of 512 × 512 pixels, so converting is one step towards making a sticker from a GIF. Crop the GIF to a square with the GIF Cropper and resize it to 512 pixels with the GIF Resizer first, then convert it here. Sticker apps set a small size limit, so High or Small usually fit better than Lossless.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded and the WEBP is written entirely in your browser. Nothing is uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to convert GIF to WEBP",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Pick the quality", description: "Lossless keeps every pixel; High and Small make the file smaller." },
    { title: "Convert and download", description: "Click Convert to WEBP, compare the size with the GIF and download it." },
  ],

  features: [
    { icon: "sync_alt", title: "Still animated", description: "Every frame, its timing and the loop setting carry over." },
    { icon: "compress", title: "Smaller files", description: "Lossless is usually smaller than the GIF; lossy smaller still." },
    { icon: "lock", title: "Nothing uploaded", description: "Converted entirely in your browser." },
  ],

  faqs: [
    { q: "How do I convert an animated GIF to WEBP?", a: "Add the GIF, choose Lossless, High or Small, and click Convert to WEBP. The WEBP plays exactly like the GIF." },
    { q: "Will the WEBP still be animated?", a: "Yes. Every frame and its timing are kept, and it loops the way the GIF did." },
    { q: "Is WEBP smaller than GIF?", a: "Almost always. Lossless is often a third smaller for graphics; the lossy settings usually halve GIFs made from video." },
    { q: "Does lossless change any pixels?", a: "No. In Chrome and Edge, Lossless stores every pixel exactly as it is in the GIF." },
    { q: "Does it keep transparency?", a: "Yes. Transparent areas stay transparent." },
    { q: "Why doesn't it work in Safari?", a: "Safari can display WEBP but has no WEBP encoder. Use Chrome, Edge or Firefox to convert." },
    { q: "Where can I use animated WEBP?", a: "On websites and in every current browser. Some email and chat apps still need GIF." },
    { q: "Can I make a WhatsApp sticker?", a: "Crop the GIF to a square, resize it to 512 × 512 and convert it here; then add it with a sticker app." },
    { q: "Is my GIF uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "On Android, yes, in Chrome or Firefox. On iPhone and iPad no browser can create WEBP files yet." },
    { q: "How do I turn a WEBP back into a GIF?", a: "Use WEBP to GIF, which keeps every frame and its timing." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is converted entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
