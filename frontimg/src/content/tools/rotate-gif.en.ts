import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /rotate-gif. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "en",
  name: "Rotate GIF",
  tagline:
    "Rotate animated GIFs 90° left or right or 180°, or flip them like a mirror — every frame turns the same way and the animation keeps playing. Free, in your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "A GIF recorded on a phone held the wrong way, or a clip that has to be mirrored to face the other direction, can't be fixed in most image editors without losing the animation. oMyImage's Rotate GIF turns the whole animation at once: pick 90° left, 90° right or 180°, add a horizontal or vertical flip if you need one, and watch the preview move as you choose. Every frame is rotated the same way, keeps its timing, and keeps its exact colours, so the result looks just like the original — only the right way up.",

  sections: [
    {
      heading: "When a GIF needs turning",
      id: "when",
      body: [
        "Phones record in whatever direction they are held, and GIF converters do not always read the orientation tag that tells a player to turn the video, so a clip filmed in portrait can come out lying on its side. Screen recordings of a rotated monitor, scans of animated drawings and GIFs saved from apps that crop strangely have the same problem.",
        "Rotating fixes the file itself, not just how one app shows it, so the GIF is the right way up everywhere you post or send it.",
      ],
    },
    {
      heading: "Rotate or flip",
      id: "modes",
      body: [
        "Rotation turns the picture around its centre: 90° right (clockwise), 90° left (anticlockwise) or 180° (upside down). A quarter turn swaps the width and height, so a 480 × 270 GIF becomes 270 × 480; a half turn keeps the size.",
        "Flipping mirrors the picture instead. Horizontal flip swaps left and right — useful when a subject should face into a page or towards a caption — and vertical flip swaps top and bottom. Text in a flipped GIF reads backwards, so flip only when that does not matter.",
        "Rotation and flips can be combined: a 90° turn plus a horizontal flip, for example, gives a mirrored portrait version. The preview shows the combination before anything is processed.",
      ],
    },
    {
      heading: "What stays the same",
      id: "kept",
      body: [
        "Every frame keeps its duration, so the animation plays at the same speed and loops exactly as before. Transparent areas stay transparent.",
        "A turn by a multiple of 90° moves pixels without blending them, so nothing is resampled or blurred. When the GIF's colours fit in one palette — true for most GIFs — those colours are written back exactly. GIFs made from video sometimes use a palette per frame; those are given one shared 256-colour palette chosen from all frames, which is rarely visible.",
      ],
    },
    {
      heading: "Portrait and landscape",
      id: "orientation",
      body: [
        "A sideways phone clip turned into a portrait GIF suits stories, phone screens and chat, where tall animations fill more of the view. Going the other way, a portrait clip turned to landscape fits slides, websites and video-style banners better.",
        "If the result needs a particular shape as well — square for an avatar, for instance — crop it afterwards with the GIF Cropper; if it needs an exact pixel size, use the GIF Resizer.",
      ],
    },
    {
      heading: "File size",
      id: "size",
      body: [
        "Rotating does not add or remove pixels, so the file usually stays close to its original size. It can come out a little larger or smaller, because GIF compression works row by row and a turned picture has different rows. To make it smaller on purpose, run it through the GIF Compressor afterwards.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded, turned and encoded entirely in your browser. It is never uploaded, and nothing is kept once you close the page — personal clips and screen recordings stay on your device.",
      ],
    },
    {
      heading: "Rotating still images",
      id: "stills",
      body: [
        "For JPG, PNG and WEBP photos, use Rotate Image instead: it handles many files at once and can also turn a picture by any angle, not just in 90° steps. Rotate GIF exists because ordinary rotators keep only the first frame of an animation.",
      ],
    },
  ],

  howToTitle: "How to rotate a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Choose the turn", description: "Pick 90° left, 90° right or 180°, and add a flip if you need one; the preview updates as you go." },
    { title: "Rotate and download", description: "Click Rotate GIF, compare the result with the original and download it." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Turn or mirror", description: "90° left or right, 180°, and horizontal or vertical flips." },
    { icon: "visibility", title: "Live preview", description: "See the animation turned before anything is processed." },
    { icon: "lock", title: "Nothing uploaded", description: "Rotated entirely in your browser." },
  ],

  faqs: [
    { q: "How do I rotate an animated GIF?", a: "Add the GIF, choose 90° left, 90° right or 180°, then click Rotate GIF. Every frame is turned and the animation keeps playing." },
    { q: "Can I flip a GIF horizontally?", a: "Yes. Choose Horizontal under Flip to mirror it left to right, with or without a rotation." },
    { q: "Will the GIF still be animated?", a: "Yes. All frames are kept with their original timing, and the GIF loops as before." },
    { q: "Does rotating lower the quality?", a: "No. Quarter turns move pixels without blending them, and the original colours are reused when they fit in one palette." },
    { q: "Why are the width and height swapped?", a: "A 90° turn puts the picture on its side, so a 480 × 270 GIF becomes 270 × 480. A 180° turn keeps the size." },
    { q: "Can I rotate by a custom angle?", a: "Not here. Rotate GIF turns in 90° steps, which keeps every pixel sharp; other angles would blur the frames and add corners." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent." },
    { q: "Will the file size change?", a: "Only a little. No pixels are added or removed, but compression can vary slightly with the new orientation." },
    { q: "Is my GIF uploaded?", a: "No. The GIF is rotated entirely in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser. Large GIFs take a little longer on a phone." },
    { q: "Can I rotate a GIF that came from a video?", a: "Yes. It is rotated like any other GIF; to rotate the video itself, turn it into a GIF first with Video to GIF." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit on how many GIFs you rotate." },
  ],

  security:
    "Your GIF is rotated entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
