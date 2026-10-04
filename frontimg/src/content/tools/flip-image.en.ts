import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /flip-image (variant of rotate-image, preset flipH).
 * Demand 2026-10-04: US "flip image" 22.2K (KD 15) and "mirror image" 18.1K
 * (KD 14); India "mirror image" 22.2K, "flip image" 6.6K. One page carries
 * both words — they are the same operation.
 */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "en",
  name: "Flip Image",
  tagline:
    "Flip an image horizontally or vertically — mirror selfies, reversed text and product photos in one click. Batch support, JPG, PNG and WEBP, and everything stays in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Flipping an image mirrors it: a horizontal flip swaps left and right, as if you were looking at it in a mirror, and a vertical flip turns it upside down the same way water reflects a shoreline. This page opens with the horizontal mirror already on, because that is what most people need — un-mirroring a front-camera selfie, fixing text that reads backwards, or matching the direction a subject faces across a set of photos. Add one image or a whole folder, preview the result, and download.",

  sections: [
    {
      heading: "Flip or rotate: which do you need?",
      id: "flip-vs-rotate",
      body: [
        "Rotating turns the whole picture around its centre, so a photo lying on its side can be stood upright; nothing is mirrored. Flipping reflects it, so text reads backwards and a person's left hand becomes their right.",
        "A quick test: if the photo is the right way round but faces the wrong direction, you need a flip. If it is sideways or upside down but otherwise correct, you need a rotation — the controls for both are in the same panel, so you can do either, or both at once.",
      ],
    },
    {
      heading: "Why selfies come out mirrored",
      id: "selfies",
      body: [
        "Phone front cameras show you a mirrored preview because that is what you are used to seeing in a mirror, and many phones also save the photo that way. The result is a picture in which text on your T-shirt or a sign behind you reads backwards, and your parting is on the side other people don't see.",
        "A horizontal flip puts it back the way everyone else sees you. Some phones have a setting to save front-camera photos unmirrored from now on; for photos you have already taken, flipping them here is the quickest fix.",
      ],
    },
    {
      heading: "Useful reasons to mirror an image",
      id: "uses",
      body: [
        "Designers flip product shots so every item in a grid faces the same way, and flip portraits so the subject looks into the page rather than off its edge. Teachers and makers mirror images for iron-on transfers and screen printing, where the print is reversed. Artists flip a drawing to spot proportion mistakes their eye has stopped seeing.",
        "The flip itself changes no pixel, only their order, so flipping back gives you the original arrangement. Save as PNG to keep the file exactly lossless; JPG output is re-saved at a high quality setting.",
      ],
    },
    {
      heading: "When not to flip",
      id: "text-and-logos",
      body: [
        "A horizontal flip reverses everything in the picture, including writing. Logos, street signs, number plates and price tags all come out backwards, so a product photo with printed packaging is usually better left alone — or flipped and then checked for text before you publish it.",
        "Screenshots are almost never meant to be flipped: if one appears sideways, it needs a rotation instead. And for a portrait, remember that faces are not perfectly symmetrical; a flipped photo of someone you know well can look subtly off to you, even though it is exactly how they see themselves in a mirror.",
      ],
    },
  ],

  howToTitle: "How to flip an image",
  steps: [
    { title: "Add your images", description: "Select or drop one or many JPG, PNG or WEBP files." },
    { title: "Choose the direction", description: "The horizontal mirror is on; switch to vertical, or combine with a rotation if needed." },
    { title: "Download", description: "Download the flipped image, or all of them together as a ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal or vertical", description: "Mirror left-to-right or top-to-bottom, separately or together, with a live preview." },
    { icon: "burst_mode", title: "A whole set at once", description: "Flip every image in a batch the same way and download them together." },
    { icon: "lock", title: "Never uploaded", description: "Flipping happens in your browser, so your photos stay on your device." },
  ],

  faqs: [
    { q: "How do I flip an image horizontally?", a: "Add the image — the horizontal mirror is already switched on — check the preview and download. That's all it takes." },
    { q: "What is the difference between flip and mirror?", a: "None in practice. \"Mirror\" usually means the horizontal flip; \"flip\" can also mean the vertical one, which this page offers too." },
    { q: "How do I un-mirror a selfie?", a: "Flip it horizontally. Front cameras often save a mirrored picture, and a horizontal flip shows you the way other people see you." },
    { q: "Can I flip an image vertically?", a: "Yes. Turn on the vertical flip in the settings — on its own or together with the horizontal one." },
    { q: "Can I flip many images at once?", a: "Yes. Add a whole batch; every image is flipped the same way and you can download them as a ZIP." },
    { q: "Does a transparent PNG stay transparent?", a: "Yes, as long as you keep PNG or WEBP as the output format. JPG has no transparency, so transparent areas would be filled with a background colour." },
    { q: "Will flipping fix text that reads backwards?", a: "Yes — a horizontal flip turns mirrored writing back into normal text, provided the text was mirrored rather than photographed through glass at an angle." },
  ],

  security:
    "Your images never leave your device. Flipping runs entirely in your browser, with nothing uploaded or stored.",
};

export default content;
