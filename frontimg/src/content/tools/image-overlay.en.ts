import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-overlay.
 * Demand 2026-10-04: US "image overlay" 4.4K and "overlay images" 4.4K.
 */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "en",
  name: "Image Overlay",
  tagline:
    "Put one picture on top of another — drag it into place, resize and rotate it, fade it with opacity and mix it in with blend modes like multiply and screen. Free, in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "Overlaying images layers one picture over another to make something neither could be alone: a logo on a product shot, a texture over a portrait, a light leak over a landscape, a second photo faded into the first for a double exposure. Image Overlay from oMyImage gives you the two layers and the controls that matter — position, size, rotation, opacity and eight blend modes — with a live preview you can drag the top picture around on. The result is saved at the full size of the background image.",

  sections: [
    {
      heading: "Place it, or cover everything",
      id: "fit",
      body: [
        "Place freely puts the top picture wherever you drag it, at the size and angle you set. Size is measured as a share of the background's width, so 50 % is half as wide as the background whatever the resolution; the nine position buttons snap it to an edge or corner, and the arrow keys nudge it.",
        "Cover everything stretches the top picture over the whole background, keeping its proportions and trimming what sticks out. That is the setting for textures, light effects and double exposures, which should reach every edge.",
      ],
    },
    {
      heading: "Blend modes, explained",
      id: "blend",
      body: [
        "Normal simply draws the top picture, faded by the opacity. Multiply only ever darkens: white disappears and black stays black, which makes it perfect for signatures, stamps and line drawings scanned on white paper. Screen is the opposite — it only lightens, so black disappears, which is how light leaks, lens flares, fire and starry skies on black backgrounds are added.",
        "Overlay and soft light push contrast through the top picture, lightening the light parts of the background and darkening the dark ones; soft light is the gentler of the two and suits paper, grain and colour tints. Darken and lighten keep whichever pixel is darker or lighter. Difference subtracts one picture from the other for a strange, inverted look — and shows exactly where two near-identical photos differ.",
      ],
    },
    {
      heading: "Making a double exposure",
      id: "double-exposure",
      body: [
        "Use a portrait as the background and a landscape, a forest or a city skyline on top. Choose Cover everything, set the blend mode to Screen or Lighten and bring the opacity down to between 50 and 80 % until the face shows through the scene. Portraits against a plain, light background work best, because the scene fills the empty space around the silhouette. Swap the images to see which way round looks better.",
      ],
    },
    {
      heading: "Logos, stickers and signatures",
      id: "logos",
      body: [
        "A logo or sticker saved as PNG with a transparent background sits on the photo with no box around it — drag it into a corner, size it, and lower the opacity if it should be subtle. A signature photographed on white paper has no transparency, but Multiply makes the white vanish and leaves only the ink.",
        "To stamp the same logo on many photos at once, Watermark Image is quicker: it applies one logo or text to a whole batch.",
      ],
    },
    {
      heading: "Textures and light effects",
      id: "textures",
      body: [
        "Paper, canvas, film grain and dust textures give a flat digital picture an analogue feel: put the texture on top with Cover everything, choose Soft light or Overlay and keep the opacity low. Rain, snow, bokeh and light-leak images are usually supplied on black; with Screen the black drops away and only the light remains.",
      ],
    },
    {
      heading: "Picture in picture",
      id: "inset",
      body: [
        "A small second picture inside a big one shows detail and context together: a close-up of a product's label in the corner of the full shot, a map inset on a travel photo, a before photo inside the after. Keep Normal and full opacity, set the size to around 25–35 %, and snap it to a corner. A few degrees of rotation turns it into a casual, pinned-on snapshot.",
      ],
    },
    {
      heading: "Size, format and transparency",
      id: "output",
      body: [
        "The result is always the size of the background image, so a top picture larger than the background is simply cropped at its edges. It is saved in the background's format unless you choose another. PNG and WEBP keep any transparency in the background; JPG has none, so transparent areas are filled with the colour you pick.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Both images are combined entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to overlay images",
  steps: [
    { title: "Add the background", description: "Choose the bottom image — or drop both images at once." },
    { title: "Add the top image", description: "Drag it into place, then set the size, rotation, opacity and blend mode." },
    { title: "Save", description: "Click Save image to download the result at full size." },
  ],

  features: [
    { icon: "layers", title: "Eight blend modes", description: "Normal, multiply, screen, overlay, soft light, darken, lighten and difference." },
    { icon: "opacity", title: "Opacity and placement", description: "Drag, resize, rotate and fade the top picture with a live preview." },
    { icon: "lock", title: "No uploads", description: "Combined entirely in your browser." },
  ],

  faqs: [
    { q: "How do I put one image on top of another?", a: "Add the background, add the top image, drag it into place and click Save image." },
    { q: "How do I make the top image transparent?", a: "Lower the Opacity slider. At 50 % both pictures show equally." },
    { q: "How do I remove a white background from a signature or logo?", a: "Set the blend mode to Multiply — white disappears and the dark lines stay." },
    { q: "How do I remove a black background from a light effect?", a: "Set the blend mode to Screen — black disappears and the light stays." },
    { q: "How do I make a double exposure?", a: "Use a portrait as the background, a landscape on top, Cover everything, Screen or Lighten, and 50–80 % opacity." },
    { q: "Can I rotate the top image?", a: "Yes, by up to 180 degrees either way." },
    { q: "What size is the result?", a: "Always the size of the background image." },
    { q: "Can I swap the two images?", a: "Yes. Swap images puts the top picture underneath and the background on top." },
    { q: "Does a transparent PNG stay transparent?", a: "Yes. Transparent parts of the top image show the background through them." },
    { q: "Can I overlay a logo on many photos at once?", a: "Use Watermark Image for that — it applies the same logo to a whole batch." },
    { q: "Are my images uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes. Drag with your finger to move the top picture." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limits." },
  ],

  security:
    "Your images are combined entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
