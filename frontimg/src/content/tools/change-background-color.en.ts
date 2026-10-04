import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /change-background-color (variant of remove-background:
 * rembg cut-out, then a colour composited in the browser). Demand 2026-10-04:
 * India "photo background change" 450K (KD 36), "change background color of
 * photo" 5.4K, "photo background change white" 5.4K; Indonesia "ganti
 * background foto" 135K (KD 0); Brazil "fundo branco foto" 8.1K. The ID-photo
 * use (white / blue / red) drives most of it.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "en",
  name: "Change Photo Background Color",
  tagline:
    "Change a photo's background to white, blue, red or any colour you like. AI cuts out the person or object, and you try colours instantly — made for passport, ID and profile photos.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "Application forms and ID offices are strict about one thing more than any other: the background. Some want plain white, some light blue, some red, and a photo taken against a kitchen wall gets rejected. This tool cuts the person (or a product) out with an AI model and puts them on a solid colour of your choice, so a photo taken at home becomes a usable ID or profile picture. The cut-out happens once; switching between white, blue, red or any custom colour after that is instant and free.",

  sections: [
    {
      heading: "Which colour do forms ask for?",
      id: "colours",
      body: [
        "White or very light grey is the most common requirement for passport and visa photos worldwide, including most of India's, the US and the UK. Light blue is common for some national ID cards and student or employee cards. Red or blue backgrounds are standard on Indonesian pas foto, where the institution sets the colour.",
        "Always follow the exact instruction for your document — this tool gives you the colour; it cannot know which one your office wants. The four ID colours at the top of the settings are a starting point, and any colour can be picked below them.",
      ],
    },
    {
      heading: "How the background is replaced",
      id: "how",
      body: [
        "First, an AI segmentation model on our server finds the subject — the person, with their hair and shoulders, or the product — and returns it as a cut-out with transparent surroundings. Then your browser places that cut-out on the colour you chose and saves a JPG.",
        "Because the second step happens on your device, changing the colour does not run the AI again: you can compare white, blue and red in a few seconds, and only the first step counts as an AI run.",
      ],
    },
    {
      heading: "Getting a clean edge around hair",
      id: "edges",
      body: [
        "Hair is the hardest part of any cut-out. Photograph the person against a background that contrasts with their hair — a light wall behind dark hair, or the reverse — and avoid backlighting from a window, which makes the hair's edge glow.",
        "Make sure the shoulders and the top of the head are fully inside the photo, with some space around them. A cut-out cannot rebuild part of a head that the original crop cut off, and passport rules usually require a gap above the head anyway.",
      ],
    },
    {
      heading: "After the background",
      id: "next",
      body: [
        "ID photos usually have size rules too. Once the background is right, crop to the required proportions with Crop Image, and if the form limits the file size, bring it under the limit on one of the Compress to KB pages — exam and government forms often ask for under 50KB or 100KB.",
      ],
    },
  ],

  howToTitle: "How to change a photo's background colour",
  steps: [
    { title: "Upload the photo", description: "Select a JPG, PNG or WEBP with the person or object clearly visible." },
    { title: "Remove the background", description: "Press Change background — the AI cuts out the subject in a few seconds." },
    { title: "Pick a colour & download", description: "Try white, blue, red or any colour instantly, then download the JPG." },
  ],

  features: [
    { icon: "format_color_fill", title: "Any colour, instantly", description: "White, blue and red ID colours one tap away, plus a picker for any other — no extra AI run per colour." },
    { icon: "badge", title: "Made for ID photos", description: "A clean cut-out around hair and shoulders on the solid colour forms ask for." },
    { icon: "verified_user", title: "No watermark", description: "Free to use, with nothing stamped on the result." },
  ],

  faqs: [
    { q: "How do I change the background of a photo to white?", a: "Upload the photo and press Change background. White is selected to start with, so once the cut-out appears you can download the white-background JPG straight away." },
    { q: "Can I make the background blue or red for an ID photo?", a: "Yes. After the cut-out, tap the blue or red swatch, or pick any shade with the colour picker. The change is instant." },
    { q: "Does changing the colour use another AI run?", a: "No. Only the first step — finding the subject — runs on our server. Trying different colours afterwards happens in your browser." },
    { q: "Will the photo meet passport rules?", a: "The background will be solid and even, which is the part this tool controls. Size, head position, lighting and expression are separate rules you should check for your document." },
    { q: "Can I use it for product photos?", a: "Yes. Marketplaces often require a pure white background; the tool cuts out the product and puts it on white just as it does a person." },
    { q: "Why is the result a JPG and not a PNG?", a: "A solid-colour background has no transparency to preserve, and almost every form wants JPG. For a transparent cut-out, use Remove Background instead." },
    { q: "Is my photo stored?", a: "Only briefly. The cut-out is made on our server, kept behind a private link and auto-deleted within an hour; the colour is applied on your device." },
  ],

  security:
    "Background removal runs on our server with the open-source rembg engine; the result is kept only briefly behind a private download link and auto-deleted within an hour. The new colour is applied in your browser, and nothing is shared or reused.",
};

export default content;
