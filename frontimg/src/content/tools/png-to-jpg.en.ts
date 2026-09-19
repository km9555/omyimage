import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /png-to-jpg. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "en",
  name: "PNG to JPG",
  tagline:
    "Convert PNG images to compressed JPG online — in batches, with quality and background control. Free, fast and private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "PNG is great for graphics, but for photos it produces huge files. oMyImage's PNG to JPG converter turns your PNGs into compact, high-quality JPGs right in your browser — one at a time or in bulk. Pick the quality and the background color that replaces transparency, then download. No uploads, no waiting, no sign-up.",

  sections: [
    {
      heading: "When PNG to JPG is the right move",
      id: "why",
      body: [
        "PNG is lossless, which is exactly what you want for a working file and often wasteful for a finished one. A photograph stored as PNG carries every pixel in full, and that routinely means several megabytes where a visually identical JPG would be a few hundred kilobytes. If the image is a photograph and it is going onto a web page, into an email, or through an upload form with a size cap, converting is usually the single biggest saving available.",
        "The other common trigger is a hard limit. Job portals, government forms, marketplace listings and print services frequently cap uploads at 1, 2 or 5 MB, and a phone screenshot or a camera photo saved as PNG blows past that immediately. Converting to JPG at 85% quality typically clears the limit without any visible change.",
      ],
    },
    {
      heading: "What you give up",
      id: "tradeoffs",
      body: [
        "Two things, and both matter in specific cases. The first is transparency: JPG has no alpha channel at all, so anything see-through must be painted over with a solid colour. That is fine for a photograph and fatal for a logo intended to sit on a coloured background.",
        "The second is that JPG is lossy and permanently so. The conversion discards detail, and no later step recovers it. Converting a PNG you may need to edit again is a one-way door — crop it, retouch it and re-save it a few times as JPG and the degradation compounds visibly. Keep the PNG as your master and treat the JPG as an output.",
      ],
    },
    {
      heading: "Photographs yes, graphics usually no",
      id: "content",
      body: [
        "JPG's compression was designed for continuous-tone imagery, where colour changes gradually across the frame. Photographs are exactly that, which is why the format performs so well on them.",
        "Sharp-edged content is the opposite case. Logos, line art, diagrams, screenshots and anything containing text have high-contrast boundaries, and JPG scatters faint artefacts around each one — the characteristic mosquito noise you see around lettering. Worse, because the encoder treats those edges as important detail, the file often is not much smaller. For that kind of image, compressing the PNG or converting to WEBP gives a better result on both counts.",
      ],
    },
    {
      heading: "Choosing a background colour",
      id: "background",
      body: [
        "Because transparency has to become something, this tool automatically matches the colour found at the image's own edges by default, which avoids the obvious white rectangle around a subject that was never meant to sit on white. You can still pick white, black or any custom colour instead — useful when the image will sit on a dark interface or a coloured card.",
        "One caveat: PNG transparency is often anti-aliased, meaning edge pixels are partially transparent. Those blend with whatever colour you choose, so an image prepared for a white background and then filled with black can show a pale fringe. If that happens, the cleanest fix is to re-export the source against the correct background rather than to fight it here.",
      ],
    },
  ],

  howToTitle: "How to convert PNG to JPG",
  steps: [
    { title: "Upload PNGs", description: "Select one or many PNG images, or drag and drop them into the workspace." },
    { title: "Set quality & background", description: "Choose the JPG quality and the color that fills transparent areas." },
    { title: "Convert & download", description: "Click Convert — one PNG downloads as a JPG, several download together as a ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Bulk PNG → JPG", description: "Convert many PNGs to JPG at once and grab them all in a single ZIP — ideal for shrinking screenshot folders." },
    { icon: "compress", title: "Smaller files", description: "JPG is far smaller than PNG for photos. Tune the quality slider to hit the size you need." },
    { icon: "lock", title: "Private & instant", description: "Everything is processed locally in your browser — your PNGs never leave your device." },
  ],

  faqs: [
    { q: "Why convert PNG to JPG?", a: "JPG files are much smaller for photographic images, making them faster to upload, email and load on the web." },
    { q: "What happens to transparent PNG areas?", a: "JPG can't store transparency, so transparent pixels are filled with a background color. By default we automatically match the color at the image's own edges; pick white, black or any custom color instead if you want something different." },
    { q: "Can I convert several PNGs at once?", a: "Yes. Add as many PNGs as you like — multiple files download together as a ZIP archive." },
    { q: "Does converting reduce quality?", a: "JPG is lossy, but at 90%+ quality the difference is usually invisible while the file is dramatically smaller." },
    { q: "How much smaller will the JPG be?", a: "For photographs, usually 60–90% smaller. A 4 MB PNG photo commonly lands between 300 KB and 1 MB as a JPG. Flat graphics and screenshots benefit far less, and can occasionally get larger — those are the cases where PNG was already the right format." },
    { q: "Should I convert screenshots from PNG to JPG?", a: "Usually not. JPG compression works badly on sharp edges and small text, producing a faint halo around lettering, and screenshots often end up both blurrier and no smaller. Compress the PNG or convert to WEBP instead." },
    { q: "Can I convert back from JPG to PNG later?", a: "You can change the container, but you cannot recover what was discarded. The JPG step permanently removes detail, and converting back to PNG simply stores the degraded image losslessly. Keep the original PNG if you may need to edit it again." },
    { q: "Why is my converted JPG bigger than the PNG?", a: "Because the image is the kind PNG handles best — few distinct colours, flat areas, hard edges. PNG compresses that extremely efficiently, while JPG has to store detail it thinks it sees at every edge. Logos and diagrams are the usual culprits." },
  ],

  security:
    "Your images stay private. PNG to JPG conversion happens entirely in your browser with HTML canvas — nothing is uploaded. No storage, no tracking of your files.",

  rating: { value: "4.9", count: "688" },
};

export default content;
