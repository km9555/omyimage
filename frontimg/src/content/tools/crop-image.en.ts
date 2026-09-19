import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /crop-image. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "en",
  name: "Crop Image",
  tagline:
    "Crop JPG, PNG, WEBP and GIF images online — drag to select, lock an aspect ratio, or enter exact pixels. Free, fast and 100% private in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Need to cut an image down to the perfect frame or a precise size? oMyImage's Crop Image tool lets you drag a selection over your photo, lock it to a ratio like 1:1 for profile pictures or 16:9 for thumbnails, or type exact pixel dimensions. Cropping happens entirely in your browser, so your images stay private and the result is instant.",

  sections: [
    {
      heading: "Cropping is composition, not just trimming",
      id: "composition",
      body: [
        "Most photographs improve when something is removed. Cropping tightens the frame around your subject, cuts out distracting edges, straightens a lopsided horizon and shifts where the eye lands. It is the single most effective edit available and the only one that costs nothing in quality.",
        "The classic guide is the rule of thirds: divide the frame into a three-by-three grid and place your subject on one of the lines or intersections rather than dead centre. It is a starting point rather than a law — centred compositions work well for symmetry and portraits — but it is a reliable fix for a shot that feels flat.",
        "The other habit worth building is checking the edges before you commit. Half a stranger, a bin, a bright patch of sky in the corner: these pull attention away from the subject and almost always disappear with a slightly tighter crop.",
      ],
    },
    {
      heading: "Fixed ratios and where they are required",
      id: "ratios",
      body: [
        "A free crop is right when the image is for your own use. Fixed ratios matter when something else decides the shape — every social platform, marketplace and print size expects specific proportions, and getting it wrong means the system crops for you, usually badly.",
        "Square (1:1) covers profile pictures and Instagram feed posts. 4:5 is Instagram's tallest allowed portrait and takes up more screen than a square. 9:16 is full-screen vertical for Stories, Reels and TikTok. 16:9 is the standard widescreen shape for YouTube thumbnails and link previews. Print sizes follow their own logic — 4×6 inches is 3:2, while 5×7 and 8×10 are not, which is why photos printed at different sizes lose different amounts from the edges.",
        "Setting the ratio before you drag saves the frustration of composing a shot carefully and then having it trimmed to fit.",
      ],
    },
    {
      heading: "Cropping does not cost quality",
      id: "quality",
      body: [
        "The pixels you keep are untouched. Cropping is not a resample, so a cropped photograph is exactly as sharp as the original — it simply contains less of the scene. This is different from zooming or enlarging, which invent pixels and soften the result.",
        "What does change is the total pixel count, and that has a practical limit. Crop a 12-megapixel photo down to a small corner and you may be left with 600 pixels across, which is fine on a phone screen and inadequate for a print or a full-width banner. Start from the highest-resolution original you have when you know a tight crop is coming.",
      ],
    },
    {
      heading: "A sensible order of operations",
      id: "workflow",
      body: [
        "Crop first, then resize, then compress. Cropping decides the content, resizing decides the pixel dimensions, and compression decides the file size — doing them in that order means each step operates on the smallest sensible input and you never compress pixels you are about to throw away.",
        "Everything runs in your browser here, so moving between these tools costs nothing but a click, and your images are never uploaded at any stage.",
      ],
    },
  ],

  howToTitle: "How to crop an image",
  steps: [
    { title: "Upload", description: "Select one or many images, or drag and drop them into the workspace." },
    { title: "Shape and frame it", description: "Pick a rectangle, square, circle, ellipse or rounded shape, drag the box to move it and the handles to resize, and lock a ratio like 1:1, 4:5 or 16:9. Rotate, flip or straighten if the shot needs it." },
    { title: "Crop & download", description: "Choose the output size and format, then click Crop & download — instantly, in your browser, as a ZIP if you cropped several." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Free crop or fixed ratios",
      description: "Crop freely, type exact pixel dimensions, or lock to 1:1, 4:3, 3:2, 16:9, 4:5 and more for perfect social or print sizes.",
    },
    {
      icon: "circle",
      title: "Shapes, not just rectangles",
      description: "Crop to a square, circle, ellipse or rounded rectangle. PNG and WEBP keep the area outside the shape transparent — ideal for round avatars.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Rotate, flip & straighten",
      description: "Turn in 90° steps, mirror horizontally or vertically, and level a crooked horizon with the straighten slider before you crop.",
    },
    {
      icon: "bolt",
      title: "Batch & in-browser",
      description: "Crop a whole batch with one framing and download a ZIP — all on your device with HTML canvas, no upload and no round trip.",
    },
    {
      icon: "image",
      title: "Any common format",
      description: "Works with JPG, PNG, WEBP, GIF and BMP, and lets you export as JPG, PNG or WEBP with adjustable quality.",
    },
  ],

  faqs: [
    { q: "Is the oMyImage crop tool free?", a: "Yes. Cropping images is 100% free, with no watermark on the output and no sign-up required." },
    { q: "Do my images get uploaded?", a: "No. Crop runs entirely in your browser using HTML canvas — your image never leaves your device." },
    { q: "Can I crop to a specific size?", a: "Yes. Type exact width, height, X and Y values in pixels, or lock an aspect ratio and drag the handles to size it visually." },
    { q: "Which formats can I export to?", a: "JPG, PNG or WEBP. Choose 'Same as original' to keep the input format (GIF and BMP export as PNG since canvas output is a still image)." },
    { q: "Will cropping reduce quality?", a: "No. Cropping only removes pixels outside your selection. For JPG and WEBP you can also pick the export quality." },
    { q: "What aspect ratio should I use for social media?", a: "1:1 for an Instagram feed post or most profile pictures, 4:5 for the taller Instagram portrait format, 9:16 for Stories, Reels and TikTok, and 16:9 for YouTube thumbnails and Twitter/X link previews. LinkedIn banners are unusually wide at roughly 4:1." },
    { q: "How is cropping different from resizing?", a: "Cropping removes parts of the image and keeps the remaining pixels at their original size. Resizing keeps the whole image and changes how many pixels it has. Crop to change what is in the frame; resize to change how big the file is." },
    { q: "Can I crop a photo to an exact pixel size?", a: "Yes. Set a fixed ratio to control the shape, then use the Resize tool afterwards to land on exact pixel dimensions. Doing it in that order avoids the stretching you get from forcing dimensions directly." },
    { q: "Does cropping remove EXIF data?", a: "Yes, as a side effect — the image is re-encoded from the canvas, which does not carry metadata across. That includes GPS coordinates, which is often a welcome bonus when posting photos publicly. If stripping metadata is the actual goal, the EXIF Remover is explicit about it." },
    { q: "Can I crop several images at once?", a: "Yes. Add as many as you like and the same crop is applied to all of them, which is what you want for product shots or anything photographed in a consistent setup. The crop is stored proportionally, so images of different sizes each get the equivalent framing, and everything downloads together as a ZIP." },
    { q: "Can I crop to a circle or other shapes?", a: "Yes — rectangle, square, circle, ellipse and rounded-corner crops are all available. Export as PNG or WEBP and the area outside the shape stays genuinely transparent, which is what you want for a round avatar. JPG cannot store transparency, so there you pick a colour for the corners instead." },
    { q: "Can I rotate or straighten while cropping?", a: "Yes. Rotate in 90° steps, flip horizontally or vertically, and use the straighten slider to level a horizon. Straightening zooms in just enough that no empty wedges appear at the corners." },
  ],

  security:
    "Your images stay private. Cropping is performed entirely in your browser with HTML canvas — nothing is ever uploaded to a server. When you close the tab, the image is gone from memory. No storage, no tracking of your files.",

  rating: { value: "4.9", count: "512" },
};

export default content;
