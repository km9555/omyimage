import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /glitch-effect. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "en",
  name: "Glitch Effect",
  tagline:
    "Give any photo a broken-screen glitch look — red and blue colour split, shifted slices and scan lines — with a strength slider and a shuffle button. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "The glitch look borrows from failing hardware: a video signal that slips, a screen that tears, colours that drift apart. It has become a style of its own on album covers, posters, thumbnails and profile pictures. oMyImage's Glitch Effect builds it from three ingredients you can switch on and off — colour split, shifted slices and scan lines — with one slider for strength and a button that reshuffles the slices until the composition looks right. Everything previews live before you download.",

  sections: [
    {
      heading: "The three ingredients",
      id: "parts",
      body: [
        "Colour split pulls the red channel one way and the blue channel the other, leaving coloured fringes along every edge — the most recognisable part of the effect, like a misaligned projector. Shifted slices cut thin horizontal strips out of the picture and push them sideways, as if the signal skipped. Scan lines darken alternate bands, the texture of an old monitor or a VHS tape.",
        "Use all three for a full glitch, or just one: colour split alone gives a subtle 3D-glasses edge to portraits, and slices alone look like a torn digital print.",
      ],
    },
    {
      heading: "Strength and shuffle",
      id: "strength",
      body: [
        "Strength scales everything together: how far the colours split, how many slices move and how far they travel, and how dark the scan lines are. Around 20 to 40 gives a hint of damage; 70 and above is loud and chaotic.",
        "The slices are placed at random. If a strip lands across a face or hides an important detail, click Shuffle the slices for a new arrangement. The arrangement is fixed until you shuffle again, so the preview and the download always match.",
      ],
    },
    {
      heading: "Where it works",
      id: "uses",
      body: [
        "Glitched images suit music artwork, gaming and tech thumbnails, event posters, cyberpunk and vaporwave designs, and profile pictures that should stand out in a list. Strong shapes and contrast take the effect best; a busy photo can turn into noise. Bold text in an image is a good target — the split makes letters look like they are vibrating.",
        "To make the glitch move, create a few versions with different shuffles and combine them into a short animation with the GIF Maker.",
      ],
    },
    {
      heading: "Many images, one look",
      id: "batch",
      body: [
        "Add several images and the same settings and arrangement are applied to all of them, sized to each image, so a series of posts or covers shares one look. JPG, PNG and WEBP are accepted; the result keeps its format unless you choose another, and transparent areas stay transparent in PNG and WEBP. Several images download together as a ZIP.",
      ],
    },
    {
      heading: "Glitch art tips",
      id: "tips",
      body: [
        "Place a strong subject slightly off-centre, so the slices cut through the background rather than a face. Dark images with bright accents show the colour split best. A slightly over-contrasted photo — try Brightness & Contrast first — gives a sharper, more digital result, and saving as PNG keeps the crisp edges of the slices and fringes.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is glitched entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to add a glitch effect to a photo",
  steps: [
    { title: "Add images", description: "Select one or more JPG, PNG or WEBP images." },
    { title: "Tune the glitch", description: "Set the strength, pick the effects and shuffle the slices until it looks right." },
    { title: "Apply and download", description: "Click Apply glitch to download the image, or a ZIP for several." },
  ],

  features: [
    { icon: "gradient", title: "Three glitch effects", description: "Colour split, shifted slices and scan lines, each on or off." },
    { icon: "visibility", title: "Live preview", description: "See every change at once and shuffle until it fits." },
    { icon: "lock", title: "Nothing uploaded", description: "Glitched entirely in your browser." },
  ],

  faqs: [
    { q: "How do I add a glitch effect to a photo?", a: "Add the photo, set the strength, choose the effects and click Apply glitch." },
    { q: "What is the colour split?", a: "The red and blue parts of the image shifted in opposite directions, leaving coloured fringes on edges." },
    { q: "Can I change where the slices go?", a: "Yes. Click Shuffle the slices for a new random arrangement." },
    { q: "Will the download look like the preview?", a: "Yes. The arrangement stays fixed until you shuffle, and it is scaled to the full image." },
    { q: "Can I make a subtle glitch?", a: "Yes. Use a strength of 20 to 40, or switch on the colour split only." },
    { q: "Can I make an animated glitch?", a: "Make a few versions with different shuffles, then combine them with the GIF Maker." },
    { q: "Can I glitch several images at once?", a: "Yes. They share the same settings and download as a ZIP." },
    { q: "Does it keep transparency?", a: "Yes, when you save as PNG or WEBP." },
    { q: "Is my image uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "What images work best?", a: "Strong shapes, bold text and high contrast. Very busy photos can turn into noise." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
    { q: "Which format should I save in?", a: "PNG keeps the sharp slice edges and colour fringes; JPG softens them slightly." },
  ],

  security:
    "Your images are glitched entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
