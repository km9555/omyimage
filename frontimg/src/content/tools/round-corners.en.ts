import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /round-corners. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "en",
  name: "Round Corners",
  tagline:
    "Give images rounded corners — any radius, any corners — with transparent edges in PNG or a background colour of your choice. Many images at once. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Rounded corners make a picture feel finished: app icons, website cards, slides and social posts all use them. oMyImage's Round Corners trims the corners of JPG, PNG and WEBP images to the radius you choose, on all four corners or only some, and leaves the cut-away parts transparent so the image sits cleanly on any background. Watch the preview change as you drag, then download one image or a whole batch.",

  sections: [
    {
      heading: "Choosing the radius",
      id: "radius",
      body: [
        "The radius is set as a share of the image's shorter side, so the same setting gives the same look on a small icon and a large banner. Around 5 to 10 percent is the soft rounding of a website card; 15 to 25 percent looks like an app icon; 50 percent turns a rectangle into a pill and a square image into a perfect circle.",
        "Untick corners to round only some of them — the top two for a tab or a card header, or one corner for a speech-bubble or label shape.",
      ],
    },
    {
      heading: "Transparent corners or a colour",
      id: "background",
      body: [
        "Transparent corners need a format that supports transparency, so the output is PNG by default; WEBP works too and is smaller. If the image is going onto a page, slide or document with a known background, you can fill the corners with that colour instead, which also lets you save as JPG.",
        "JPG cannot store transparency at all. When JPG is chosen, the corners are filled with the background colour, white unless you pick another.",
      ],
    },
    {
      heading: "Where rounded corners help",
      id: "uses",
      body: [
        "Screenshots with rounded corners look polished in documentation, tweets and slides. Product photos and team portraits look friendlier on websites. App and game icons need rounded squares; profile pictures often look best as circles. Thumbnails in a grid look tidier when they all share the same radius — add the whole set at once and they will.",
      ],
    },
    {
      heading: "Circles and other shapes",
      id: "shapes",
      body: [
        "A radius of 50 percent on a square image gives an exact circle. For a circle from a rectangular photo, with control over which part ends up inside, use Circle Crop, which lets you move and size the circle. To add a frame or a coloured edge around the rounded image, use Add Border afterwards.",
      ],
    },
    {
      heading: "Many images at once",
      id: "batch",
      body: [
        "Add as many images as you need; the same radius and corners are applied to each one, scaled to its size. The preview shows the first image, every file gets its own download button when done, and several download together as a ZIP file.",
      ],
    },
    {
      heading: "Matching corners across a design",
      id: "consistency",
      body: [
        "Use the same radius everywhere in one design: cards, buttons and images that share a corner radius look like they belong together. Because the radius here is a share of the shorter side, setting it once makes the whole batch match in proportion. For the same radius in pixels on images of different sizes, give them one size first with Resize Image.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is rounded entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to round the corners of an image",
  steps: [
    { title: "Add images", description: "Select one or more JPG, PNG or WEBP images." },
    { title: "Set the radius", description: "Drag the radius slider, choose the corners and the background." },
    { title: "Round and download", description: "Click Round the corners to download a PNG, or a ZIP for several." },
  ],

  features: [
    { icon: "rounded_corner", title: "Any radius", description: "From a soft edge to a pill or a circle, on the corners you pick." },
    { icon: "visibility", title: "Transparent edges", description: "PNG and WEBP keep the corners see-through." },
    { icon: "lock", title: "Nothing uploaded", description: "Rounded entirely in your browser." },
  ],

  faqs: [
    { q: "How do I round the corners of an image?", a: "Add the image, set the radius and click Round the corners. A PNG with transparent corners downloads." },
    { q: "Why is the result a PNG?", a: "Transparent corners need PNG or WEBP. Choose JPG to fill the corners with a colour instead." },
    { q: "Can I round only some corners?", a: "Yes. Untick the corners you want to keep square." },
    { q: "How do I make a circle?", a: "Use a radius of 50% on a square image. For other photos, Circle Crop lets you position the circle." },
    { q: "Can the corners be a colour instead of transparent?", a: "Yes. Pick a background colour, or save as JPG." },
    { q: "Can I round several images at once?", a: "Yes. The same radius is applied to each, and they download as a ZIP." },
    { q: "What radius do app icons use?", a: "About 20 to 25 percent of the side for a modern rounded-square look." },
    { q: "Does it reduce quality?", a: "No. PNG keeps every pixel; only the corners are cut." },
    { q: "Is my image uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser." },
    { q: "Can I add a border too?", a: "Yes. Use Add Border on the rounded image afterwards." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
    { q: "Can I use it for profile pictures?", a: "Yes. A square photo at 50% becomes a circle, and transparent corners let it sit on any background." },
  ],

  security:
    "Your images are rounded entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
