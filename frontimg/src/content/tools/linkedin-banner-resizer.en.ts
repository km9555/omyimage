import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /linkedin-banner-resizer (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "en",
  name: "LinkedIn Banner Resizer",
  tagline:
    "Resize any image to a LinkedIn background photo — exactly 1584 × 396 pixels, a 4:1 strip — cropped or padded to fit. Free, in your browser, no sign-up.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "The banner behind your LinkedIn profile photo is a long, thin strip: 1584 × 396 pixels, four times wider than it is tall. Almost no photo or design starts in that shape, so LinkedIn either crops it unpredictably or refuses it. This resizer opens set to the LinkedIn background size — add your image, decide whether to crop it to fill the strip or pad it with a colour, and download a banner that fits exactly.",

  sections: [
    {
      heading: "The LinkedIn background size",
      id: "spec",
      body: [
        "LinkedIn's personal profile background photo is 1584 × 396 pixels, a 4:1 ratio, as a JPG or PNG under 8 MB. An image of exactly that size goes in without LinkedIn's own crop tool having to guess which strip of your picture to keep.",
        "Company pages use a different, narrower cover image (1128 × 191 pixels). For a company page, choose Custom size and enter those numbers instead of the personal banner size.",
      ],
    },
    {
      heading: "Your profile photo covers part of it",
      id: "overlap",
      body: [
        "On desktop your round profile photo sits over the lower-left area of the banner, and on phones the banner is shown narrower, with the sides trimmed. Text, logos or faces in the left third or at the far edges can end up hidden.",
        "Keep the important part of the design centred or to the right, and treat the left side as background. A plain area there also makes your profile photo stand out instead of competing with the banner.",
      ],
    },
    {
      heading: "Turning a normal photo into a 4:1 strip",
      id: "fit",
      body: [
        "Crop to fill, the default, scales the image to the full width and trims the top and bottom evenly — fine for a skyline, a desk or an abstract texture. If the interesting part is near the top or bottom, crop the image yourself first with the crop button on its card, choosing the band you want to keep.",
        "Pad keeps the whole image and fills the sides with a colour, which suits a logo or a square graphic: the picture sits in the middle of a 4:1 band of solid colour. Pick a colour from your brand or from the image so the band looks deliberate.",
      ],
    },
    {
      heading: "Keeping it sharp",
      id: "sharp",
      body: [
        "Start from an image at least 1584 pixels wide. A smaller image has to be enlarged to fill the banner, and stretched pixels look soft on large screens. If you only have a small logo, pad it rather than enlarging it to the full width.",
        "Text in the banner should be large and short. On a phone the whole strip is only a few centimetres tall, so a slogan in small type becomes unreadable; a name, a role or a single line works best.",
      ],
    },
    {
      heading: "Uploading to LinkedIn",
      id: "upload",
      body: [
        "Open your profile, click the pencil icon on the banner area, choose Upload photo and select the downloaded image. Because it is already 1584 × 396, the positioning step should show the whole image; adjust it only if you want to, then apply and save.",
      ],
    },
  ],

  howToTitle: "How to resize an image for a LinkedIn banner",
  steps: [
    { title: "Add your image", description: "Select a JPG, PNG, WEBP, GIF or BMP — a photo, design or logo." },
    { title: "Crop or pad", description: "The 1584 × 396 size is already set; choose Crop to fill or Pad with a colour." },
    { title: "Download", description: "Resize and download a banner ready for your LinkedIn profile." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactly 1584 × 396", description: "The 4:1 background size, so LinkedIn has nothing to crop." },
    { icon: "palette", title: "Pad with a colour", description: "Fit a logo or square graphic into the strip on a solid background." },
    { icon: "lock", title: "In your browser", description: "Your image is resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "What size is a LinkedIn banner?", a: "1584 × 396 pixels, a 4:1 ratio, as a JPG or PNG under 8 MB, for a personal profile background photo." },
    { q: "How do I make my image 1584 × 396?", a: "Add it here — the LinkedIn size is already selected. Choose Crop to fill or Pad, then resize and download." },
    { q: "Why is part of my banner hidden?", a: "Your profile photo covers the lower-left area on desktop, and phones trim the sides. Keep key content centred or to the right." },
    { q: "What size is a LinkedIn company page cover?", a: "1128 × 191 pixels. Choose Custom size and enter those numbers." },
    { q: "My banner looks blurry — why?", a: "The original was probably narrower than 1584 pixels and had to be enlarged. Start from a wider image, or pad a small logo instead of stretching it." },
    { q: "Can I put a logo on a plain background?", a: "Yes. Choose Pad and a background colour; the logo is centred in a 4:1 strip of that colour." },
    { q: "What makes a good LinkedIn banner?", a: "Something simple that supports your profile: your city, your workspace, your product, or a brand colour with one short line of text on the right." },
    { q: "JPG or PNG for a LinkedIn banner?", a: "Either works. JPG suits photos; PNG keeps text and flat graphics crisper." },
    { q: "Is my image uploaded anywhere?", a: "No. It is resized in your browser; only you upload it to LinkedIn." },
  ],

  security:
    "Your image is resized entirely in your browser. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
