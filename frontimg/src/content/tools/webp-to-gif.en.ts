import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /webp-to-gif. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "en",
  name: "WEBP to GIF",
  tagline:
    "Convert animated WEBP images to GIF, keeping every frame and its timing — so the animation plays in apps and editors that don't understand WEBP. Free, in your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "Animated WEBP is efficient, but much software still can't open it: older image editors, some chat apps, presentation tools and many upload forms show only a still frame or refuse the file. GIF is understood everywhere. oMyImage's WEBP to GIF converter reads every frame of an animated WEBP — including its timing, blending and transparency — and writes them as a looping GIF. Add the file, preview the result next to the original, and download it.",

  sections: [
    {
      heading: "Where animated WEBPs come from",
      id: "sources",
      body: [
        "Websites serve animations as WEBP because they are smaller than GIFs, so an animation saved from a page is often a .webp. WhatsApp's animated stickers are WEBP files as well. Both look fine in a browser and turn into a frozen picture or an error almost everywhere else.",
        "Converting to GIF makes the animation portable: it can be pasted into a document, uploaded to a forum, edited frame by frame or sent through apps that never learned WEBP.",
      ],
    },
    {
      heading: "What changes in the GIF",
      id: "tradeoffs",
      body: [
        "GIF is older and more limited. It can show 256 colours per frame, so smooth gradients and photos may show banding; this tool picks one palette for the whole animation so colours at least stay steady between frames. Transparency in GIF is on or off, so soft, semi-transparent edges become hard.",
        "Expect the GIF to be larger than the WEBP, often by several times. If that matters, the GIF Compressor can shrink it afterwards, and if the destination accepts video, an MP4 will be smaller still.",
      ],
    },
    {
      heading: "Frames and timing",
      id: "timing",
      body: [
        "Each frame of the WEBP is decoded on its own and assembled the way a browser plays it, honouring the per-frame blending and disposal settings, so animations that update only part of the image come out correctly. Every frame keeps its duration, and the GIF loops forever.",
        "The conversion works in any modern browser, including Safari, because each frame is decoded with the browser's own WEBP support rather than an extra decoder.",
      ],
    },
    {
      heading: "Still WEBP images",
      id: "still",
      body: [
        "A WEBP that is not animated converts to a single-frame GIF, and the tool tells you so. For a still image, PNG or JPG is usually a better choice than GIF: use WEBP to PNG to keep transparency and full colour, or WEBP to JPG for photos.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The WEBP is read and the GIF is written entirely in your browser. Stickers, screenshots and saved animations never leave your device, and nothing is stored after you close the page.",
      ],
    },
    {
      heading: "Lossy and lossless WEBP",
      id: "kinds",
      body: [
        "WEBP frames come in two kinds: lossy, which may carry a separate transparency layer, and lossless. Both are read exactly as the browser shows them. Any blur or blockiness a lossy WEBP already had is carried into the GIF — converting can't restore detail the WEBP discarded.",
      ],
    },
    {
      heading: "Making the GIF smaller afterwards",
      id: "smaller",
      body: [
        "If the GIF is larger than the place you are sending it allows, resize it to the size it will be shown at — stickers are usually 512 pixels or less — and run it through the GIF Compressor on Medium. Together those usually bring a converted sticker or banner down to a comfortable size.",
      ],
    },
  ],

  howToTitle: "How to convert WEBP to GIF",
  steps: [
    { title: "Add the WEBP", description: "Select an animated (or still) WEBP image." },
    { title: "Convert", description: "Click Convert to GIF; every frame and its timing are kept." },
    { title: "Download", description: "Compare the GIF with the original and download it." },
  ],

  features: [
    { icon: "gif_box", title: "Animation kept", description: "Every frame, its timing, blending and transparency carry over." },
    { icon: "devices", title: "Plays everywhere", description: "GIF opens in apps, editors and forms that reject WEBP." },
    { icon: "lock", title: "Nothing uploaded", description: "Converted entirely in your browser." },
  ],

  faqs: [
    { q: "How do I convert an animated WEBP to GIF?", a: "Add the WEBP and click Convert to GIF. Every frame and its timing are kept, and the GIF loops." },
    { q: "Why is the GIF bigger than the WEBP?", a: "GIF compresses far less efficiently. Use the GIF Compressor afterwards if the size matters." },
    { q: "Will the colours change?", a: "Slightly in photos and gradients: GIF allows 256 colours, chosen once for the whole animation." },
    { q: "Does it keep transparency?", a: "Yes, but GIF transparency has no soft edges, so semi-transparent edges become solid." },
    { q: "Can I convert WhatsApp stickers?", a: "Yes. Animated WhatsApp stickers are WEBP files and convert like any other." },
    { q: "What if my WEBP isn't animated?", a: "You get a single-frame GIF. For still images, WEBP to PNG or WEBP to JPG is usually better." },
    { q: "Does it work in Safari?", a: "Yes. Frames are decoded with the browser's own WEBP support, which Safari has." },
    { q: "Is my file uploaded?", a: "No. Conversion happens entirely in your browser." },
    { q: "How long does the conversion take?", a: "A few seconds for stickers and short animations. Long or large WEBPs take longer, and progress is shown." },
    { q: "Does the GIF loop the same way?", a: "The GIF loops forever, as nearly all animated WEBPs do." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser. Large animations take a little longer on a phone." },
    { q: "Can I use the GIF in a presentation?", a: "Yes. PowerPoint, Keynote and Google Slides play GIFs right on the slide." },
  ],

  security:
    "Your WEBP is read and converted to GIF entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
