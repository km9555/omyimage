import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-resizer. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "en",
  name: "GIF Resizer",
  tagline:
    "Resize animated GIFs by percent or to exact pixels — every frame is resized and the animation plays exactly as before. Free, no watermark, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Resizing an animated GIF in an ordinary image editor usually keeps only the first frame. oMyImage's GIF Resizer resizes every frame of the animation and keeps its timing and looping, so the result moves exactly like the original, just at the size you need. Scale by a percentage or type the width and height in pixels, compare the original with the result, and download it.",

  sections: [
    {
      heading: "Percent or exact pixels",
      id: "modes",
      body: [
        "By percent is the quick way: 50% halves the width and height, 25% quarters them, and any value up to 400% works. By pixels lets you type an exact width or height; with Keep aspect ratio on, the other side follows the GIF's own shape so nothing is squashed.",
        "Turn Keep aspect ratio off only when the destination demands an exact box, such as a square avatar, and the GIF is already close to that shape — otherwise the animation will look stretched.",
      ],
    },
    {
      heading: "Common sizes",
      id: "sizes",
      body: [
        "Custom emoji and reactions are small squares: Discord, for example, shows emoji at 128 × 128 and limits the file to 256 KB, so a reaction GIF usually needs to shrink in both size and file weight. Profile pictures and stickers are typically 256–512 pixels square; GIFs embedded in articles and documentation are usually 480–800 pixels wide.",
        "If the target also has a file-size limit, resize first and then run the result through the GIF Compressor; smaller pixels are the biggest single saving.",
      ],
    },
    {
      heading: "What happens to quality",
      id: "quality",
      body: [
        "Shrinking a GIF keeps it sharp, because each new pixel is averaged from several old ones. That averaging creates in-between colours, and since GIF allows 256 colours, the result is given a fresh palette chosen across the whole animation, which keeps colours stable from frame to frame.",
        "Enlarging is possible but adds no detail: edges get soft and small pixel art gets blurry. For pixel art, enlarge by whole multiples like 200% and expect smoothing; for real detail, go back to the original source.",
      ],
    },
    {
      heading: "File size after resizing",
      id: "filesize",
      body: [
        "File size falls roughly with the number of pixels, so 50% of the width and height usually means around a quarter of the size. Because the GIF is rebuilt so that each frame stores only what changed, a resized GIF can also end up smaller than you would expect from the pixels alone.",
        "Enlarging does the opposite: twice the size is roughly four times the file. Check the result's size under the preview before you download.",
      ],
    },
    {
      heading: "Frames, timing and transparency",
      id: "frames",
      body: [
        "Every frame is kept with its own delay, including GIFs where some frames pause longer than others, and the animation loops as the original did. Transparent GIFs stay transparent; GIF transparency has no soft edges, so a transparent edge shrunk a lot can look slightly jagged against a dark background.",
      ],
    },
    {
      heading: "GIFs in slides and documents",
      id: "slides",
      body: [
        "A GIF dropped into PowerPoint, Keynote, Google Slides or a Word document keeps its full pixel size inside the file, even when it is shown small. A 1200-pixel GIF shown as a thumbnail makes the whole presentation heavy and slow to open or email.",
        "Resize the GIF to roughly the width it will actually appear at — about 800 pixels for a full-width slide, 400–600 for a GIF next to text — before inserting it. The slide looks the same and the file stays light.",
      ],
    },
  ],

  howToTitle: "How to resize a GIF",
  steps: [
    { title: "Add your GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Choose the size", description: "Pick a percentage or type the width and height in pixels." },
    { title: "Resize and download", description: "Click Resize GIF, compare the result and download it." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Every frame resized", description: "The whole animation is resized, not just the first frame." },
    { icon: "aspect_ratio", title: "Percent or pixels", description: "Scale by a percentage or set an exact width and height." },
    { icon: "lock", title: "Nothing uploaded", description: "Your GIF is resized entirely in your browser." },
  ],

  faqs: [
    { q: "How do I resize an animated GIF?", a: "Add the GIF, choose a percentage or exact pixels, and click Resize GIF. Every frame is resized and the animation keeps playing." },
    { q: "Will the GIF still be animated?", a: "Yes. All frames are kept with their original timing and looping." },
    { q: "How do I make a GIF 128 × 128?", a: "Choose By pixels, type 128 for the width and, if the GIF isn't square, turn off Keep aspect ratio or crop it square first." },
    { q: "Does resizing reduce the file size?", a: "Making it smaller does — half the width and height is usually about a quarter of the size." },
    { q: "Can I make a GIF bigger?", a: "Yes, up to 400%, but enlarging adds no detail and edges become soft." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent after resizing." },
    { q: "Is there a watermark?", a: "No. The resized GIF has no watermark." },
    { q: "Can I resize and compress at once?", a: "Resize here, then run the result through the GIF Compressor for fewer colours or frames." },
    { q: "Is my GIF uploaded?", a: "No. Resizing happens entirely in your browser." },
    { q: "Can I resize a GIF on my phone?", a: "Yes, in a mobile browser. Large GIFs take a little longer on a phone, and progress is shown while it works." },
    { q: "Can I resize several GIFs at once?", a: "One at a time, so each GIF gets its own preview and size. The settings stay set for the next one." },
  ],

  security:
    "Your GIF is resized frame by frame in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
