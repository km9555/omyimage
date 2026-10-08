import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-cropper. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "en",
  name: "GIF Cropper",
  tagline:
    "Crop animated GIFs online — drag a box or type exact pixels, lock an aspect ratio, and every frame is cropped the same way. The animation keeps playing. Free, in your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "Most image croppers flatten a GIF to its first frame, so the animation is lost the moment you cut it. oMyImage's GIF cropper works on the whole animation: drag the box over the part you want to keep, or type its position and size in pixels, and every frame is cut to exactly that area with its timing untouched. A frame slider lets you check the box against moving content before you commit, and the result plays next to the original so you can compare them before downloading.",

  sections: [
    {
      heading: "Why crop a GIF",
      id: "why",
      body: [
        "Screen recordings and GIFs made from video usually carry more than the interesting part: a browser toolbar, black bars from a widescreen clip, a watermark in a corner, or empty space around the subject. Cropping removes all of it, so the action fills the frame and the reaction or demo reads clearly at the small sizes GIFs are usually shown at.",
        "A crop also makes the file smaller. A GIF stores every pixel of every frame, so keeping half the width and half the height leaves roughly a quarter of the data. That is often enough to get a GIF under an upload limit without lowering its quality at all.",
      ],
    },
    {
      heading: "Choosing the area",
      id: "area",
      body: [
        "Drag inside the box to move it and drag a corner or edge to resize it; arrow keys nudge it one pixel at a time. The Left, Top, Width and Height fields show the box in pixels and accept typed values, which is the quickest way to match a size you have been given.",
        "Because the subject of an animation moves, the box is drawn over one frame at a time. Use the frame slider under the image to step through the animation and make sure nothing important slips outside the box halfway through — a hand that waves out of shot or a caption that appears late.",
      ],
    },
    {
      heading: "Aspect ratios",
      id: "ratios",
      body: [
        "Free lets the box take any shape. The fixed ratios lock it while you drag: 1:1 for avatars, stickers and Instagram, 4:5 for portrait posts, 16:9 for video-style banners and slides, 9:16 for stories and phone screens, and 4:3 or 3:2 for classic photo shapes. Picking a ratio reshapes the current box around its centre, so it stays over the same part of the picture.",
        "If the GIF must be an exact pixel size as well as a shape, crop to the ratio first and then set the final size with the GIF Resizer.",
      ],
    },
    {
      heading: "What stays the same",
      id: "kept",
      body: [
        "Every frame keeps its duration, so the animation plays at the same speed and loops as before. Transparent GIFs stay transparent. And because cropping only removes pixels, the colours are written back exactly whenever the GIF's colours fit in a single palette, which is the case for most GIFs — nothing is re-quantised, so there is no new banding or speckle.",
        "GIFs made from video sometimes use a separate palette for each frame. Those are re-coloured with one shared palette of 256 colours, chosen from all the frames, which is rarely visible.",
      ],
    },
    {
      heading: "Common crops",
      id: "uses",
      body: [
        "Removing letterbox bars from a clip converted from a film or a YouTube video. Cutting a screen recording down to the one dialog or button it is about. Making a square avatar or sticker from a wide reaction GIF. Trimming the edges where a watermark or a site's logo sits, when you have the right to use the animation.",
        "For crops that change shape — a wide GIF turned into a square or a portrait one — lock the ratio first and then position the box, so the subject ends up centred.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded, cropped and encoded entirely in your browser. It is never uploaded to a server, and nothing is kept after you close the page, so private screen recordings and personal clips stay on your device.",
      ],
    },
    {
      heading: "After cropping",
      id: "next",
      body: [
        "A cropped GIF is often small enough already. If it is not, the GIF Compressor can shrink it further with fewer colours, and the GIF Cutter can drop the frames before or after the moment you want. To turn the GIF on its side, use Rotate GIF; to share it as a video, convert it with GIF to MP4.",
      ],
    },
  ],

  howToTitle: "How to crop a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Draw the box", description: "Drag the crop box or type its size; lock a ratio if you need one." },
    { title: "Crop and download", description: "Click Crop GIF, compare the result with the original and download it." },
  ],

  features: [
    { icon: "crop", title: "Whole animation", description: "Every frame is cropped to the same area and keeps its timing." },
    { icon: "aspect_ratio", title: "Exact sizes", description: "Drag the box, type pixels or lock a ratio such as 1:1 or 16:9." },
    { icon: "lock", title: "Nothing uploaded", description: "Cropped entirely in your browser." },
  ],

  faqs: [
    { q: "How do I crop an animated GIF?", a: "Add the GIF, drag the box over the area you want to keep, then click Crop GIF. Every frame is cropped the same way and the animation keeps playing." },
    { q: "Will the GIF still be animated?", a: "Yes. All frames are kept, each with its original duration, and the GIF loops as before." },
    { q: "Can I crop a GIF to a square?", a: "Yes. Choose 1:1 and the box keeps a square shape while you move and resize it." },
    { q: "Can I enter an exact size?", a: "Yes. Type the left and top position and the width and height in pixels in the settings." },
    { q: "Does cropping lower the quality?", a: "No. Pixels inside the box are kept as they were, and the original colours are reused whenever they fit in one palette." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent after cropping." },
    { q: "Will the file get smaller?", a: "Usually. Fewer pixels per frame means less data, roughly in proportion to the area you remove." },
    { q: "Why does the box show only one frame?", a: "A crop box can only be drawn over one picture at a time. Use the frame slider to check it against the rest of the animation." },
    { q: "Can I crop several GIFs at once?", a: "One at a time. Each animation usually needs its own box." },
    { q: "Is my GIF uploaded?", a: "No. The GIF is cropped entirely in your browser and never leaves your device." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser. Drag the box with your finger; large GIFs take a little longer on a phone." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit on how many GIFs you crop." },
  ],

  security:
    "Your GIF is cropped entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
