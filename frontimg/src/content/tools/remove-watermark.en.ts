import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /remove-watermark. Demand 2026-10-04: India "watermark
 * remover" 368K (KD 49); US 135K; BR 74K; ID 40.5K. Same engine as
 * /remove-object (MI-GAN in the browser), opening with the box tool.
 * The copy asks people to use it on images they own or may edit.
 */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "en",
  name: "Remove Watermark",
  tagline:
    "Remove watermarks, logos, text and date stamps from photos: mark them, and AI fills the area in to match the picture around it. Free, with no upload — it runs in your browser.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "A watermark is text or a logo laid over a picture, and removing one means rebuilding the pixels it covered. Remove Watermark does that with an AI model, MI-GAN from Picsart AI Research, that runs inside your browser: draw a box around the watermark or paint over it, click Remove watermark, and the area is filled in from the surroundings in about a second. It is meant for your own pictures — the logo on an old product shot, the date burned into a scanned print, the caption on a screenshot you made — and nothing you load is ever uploaded.",

  sections: [
    {
      heading: "Marking the watermark",
      id: "marking",
      body: [
        "The tool opens with the Box selected, because most watermarks sit in a rectangle: drag it from one corner of the watermark to the other. For text that follows a curve or is spread out, switch to the Brush and paint over every letter. Cover the outline, the drop shadow and any glow too, or a faint trace of the letters will remain.",
        "You can mark several watermarks before removing them — a logo in one corner and a web address in another — and each is filled on its own.",
      ],
    },
    {
      heading: "What removes cleanly, and what doesn't",
      id: "expectations",
      body: [
        "The AI does not uncover what was under the watermark; it paints in what the surrounding picture suggests. That works very well for small marks on sky, water, walls, grass, plain studio backgrounds and blurred backgrounds — corner logos, date stamps, signatures and short captions usually vanish without a trace.",
        "Large, semi-transparent watermarks that run diagonally across a whole photo are harder: the model has to invent big areas of detail, so the result is softer and can smear faces, text and fine patterns. Remove them in smaller sections, and check the result with \"Hold to see the original\".",
      ],
    },
    {
      heading: "Use it on pictures you may edit",
      id: "responsible",
      body: [
        "Watermarks on stock photos and photographers' previews protect someone's work and income. Removing them to use the picture without paying is a breach of copyright in most countries — license the image instead. This tool is for your own photos and pictures you have permission to change: your company's old logo, a timestamp your camera added, a watermark you placed on your own portfolio before you lost the original.",
      ],
    },
    {
      heading: "Date stamps on old photos",
      id: "date-stamps",
      body: [
        "Film cameras and early digital cameras printed the date in orange digits in a corner. Scan the print, draw a box around the date, and remove it. Old prints often have dust and scratches too; mark those with a small brush and remove them in the same pass.",
      ],
    },
    {
      heading: "Text and logos on screenshots and product photos",
      id: "text",
      body: [
        "Product photos from your own past listings often carry an old shop name or a promotional sticker; screenshots carry usernames, notifications and timestamps. Mark them with the Box and remove them. On flat colour areas, like a white product background or an app's plain panel, the fill is practically invisible.",
      ],
    },
    {
      heading: "AI that runs in your browser",
      id: "on-device",
      body: [
        "Online watermark removers usually upload your picture and limit how many you can do for free. This one downloads the AI model to your browser instead — about 27 MB from our own site, once; your browser keeps it — and does every removal on your device. That is why there is no limit and no upload, and why it keeps working without a connection once the model has loaded.",
      ],
    },
    {
      heading: "Quality, undo and formats",
      id: "quality",
      body: [
        "Only the marked areas change; every other pixel is saved exactly as it was, at the picture's full size up to 16.7 megapixels. Every removal can be undone and redone, with the buttons or Ctrl+Z and Ctrl+Shift+Z, and Start over returns to the original. Download in the original format, or as JPG, PNG or WEBP.",
        "To add your own watermark to photos instead, use Watermark Image.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Your picture is edited entirely in your browser by a model running on your device. Nothing is uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to remove a watermark from a photo",
  steps: [
    { title: "Add your photo", description: "Choose a JPG, PNG or WEBP image." },
    { title: "Mark the watermark", description: "Drag a box around it, or paint over every letter with the brush." },
    { title: "Remove and download", description: "Click Remove watermark, compare with the original, then Download image." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Box or brush", description: "Mark a logo in one drag, or paint over scattered text." },
    { icon: "smart_toy", title: "AI fill in about a second", description: "The area is rebuilt from the picture around it." },
    { icon: "lock", title: "No upload, no limit", description: "The AI runs on your device." },
  ],

  faqs: [
    { q: "How do I remove a watermark from a photo?", a: "Add the photo, drag a box around the watermark, and click Remove watermark. Then download the cleaned picture." },
    { q: "Is the watermark remover free?", a: "Yes. No account, no watermark of our own and no daily limit — the AI runs on your device." },
    { q: "Is my picture uploaded?", a: "No. The model downloads to your browser and your picture never leaves your device." },
    { q: "Can it remove a logo?", a: "Yes. Box the logo, including any shadow or outline, and remove it." },
    { q: "Can it remove a date stamp?", a: "Yes. Draw a box around the date and remove it — it works especially well on scanned prints." },
    { q: "Can it remove text from an image?", a: "Yes. Paint over the text with the brush, or box it if it sits in a line." },
    { q: "Why is a large watermark still visible?", a: "Big, see-through watermarks over detailed areas are hard to rebuild. Remove them in smaller sections, and mark the outline too." },
    { q: "Does it recover the original pixels?", a: "No. It paints in what the surroundings suggest, which is usually indistinguishable on plain backgrounds." },
    { q: "Is it legal to remove a watermark?", a: "On your own pictures, or ones you have permission to edit, yes. Removing one to use someone else's photo without a licence usually breaches copyright." },
    { q: "Can I undo a removal?", a: "Yes — Undo, Redo and Start over, or Ctrl+Z and Ctrl+Shift+Z." },
    { q: "Does it lower the image quality?", a: "No. Only the marked areas change, and the picture keeps its size up to 16.7 megapixels." },
    { q: "Does it work on a phone?", a: "Yes. Draw the box or paint with your finger; each removal takes a few seconds." },
    { q: "Can it remove watermarks from videos?", a: "No — it works on photos: JPG, PNG and WEBP." },
  ],

  security:
    "Your picture is edited entirely in your browser by a model running on your device. Nothing is uploaded, stored or tracked.",
};

export default content;
