import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-150kb (variant of compress-image,
 * preset targetKb 150). India "compress image to 150kb" 3.6K/mo. Angle:
 * HANDWRITTEN pages — assignments and answer sheets uploaded page by page —
 * plus faint pencil, page order, and photos at this size.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "en",
  name: "Compress Image to 150KB",
  tagline:
    "Compress photos and handwritten or printed pages to under 150KB — readable handwriting, clear photos, whole sets at once. For upload portals with a 150KB cap. Free and private, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "150KB is a common cap for each file on college and exam portals, application systems and learning platforms — especially where students upload handwritten assignments or answer sheets page by page. It is enough for a full handwritten page to stay easy to read and for a portrait photo to look sharp. Add all your pages at once and each comes back as a JPG under 150KB at the highest quality that fits.",

  sections: [
    {
      heading: "Handwritten pages",
      id: "handwritten",
      body: [
        "At 150KB a full A4 page keeps about 1200 × 1700 pixels at good quality: every line of handwriting readable at normal zoom, including diagrams and small numbers. The tool keeps quality as high as the limit allows and reduces dimensions only for unusually dense pages.",
        "Photograph each page flat in daylight, from directly above, with nothing else in the frame. Pages photographed at an angle look stretched, and a shadow across the paper costs bytes and readability.",
      ],
    },
    {
      heading: "Faint pencil and light ink",
      id: "faint",
      body: [
        "Pencil and light blue ink lose contrast in a photo, and compression makes thin, faint lines fade first. Write with a dark pen if you can. If the page is already written, photograph it in strong, even daylight, and consider converting it to black and white with the Grayscale Image tool before compressing — without colour, more of the budget goes to the lines themselves.",
      ],
    },
    {
      heading: "Several pages in order",
      id: "pages",
      body: [
        "Add all the pages together; each one is compressed to under 150KB and you can download them as a ZIP. Name the photos in page order before adding them — page-01, page-02 and so on — so the files come back in the order the portal expects.",
        "If the portal wants a single PDF and limits the whole file to 150KB, give each page a smaller limit here — about 50KB each for three pages — and then combine them with Image to PDF.",
      ],
    },
    {
      heading: "Photos at 150KB",
      id: "photos",
      body: [
        "For a photograph, 150KB is generous: a portrait keeps roughly 900 × 1200 pixels at high quality, fine for a profile, an ID card or a staff directory. No preparation is needed beyond cropping off anything you do not want in the picture.",
      ],
    },
    {
      heading: "Phone scanner apps and plain photos",
      id: "scanner-apps",
      body: [
        "A document scanner app — the one built into your phone's notes or files app, or a separate one — finds the edges of the page, straightens it and boosts the contrast so the paper turns white and the writing dark. For handwritten pages that is the best possible starting point: a clean scan compresses to 150KB with every line crisp.",
        "Many scanner apps save as PDF by default. Choose JPG when you export, or take a screenshot of each page, and then compress the images here. A plain photo works too; it just needs good daylight and a straight-down angle to look as clean as a scan.",
        "Whichever you use, check the first page at full size before doing the rest: if that one is easy to read at 150KB, the others will be as well.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 150KB",
  steps: [
    { title: "Add your pages or photos", description: "Select or drop them, in page order if they are pages — JPG, PNG or WEBP." },
    { title: "Compress to under 150KB", description: "The 150KB limit is already set; every file is compressed to fit." },
    { title: "Download", description: "Download each file or all of them as a ZIP." },
  ],

  features: [
    { icon: "edit_note", title: "Readable handwriting", description: "Full pages keep enough pixels for every line, number and diagram." },
    { icon: "folder_zip", title: "Whole assignments", description: "Many pages compressed at once and downloaded together." },
    { icon: "lock", title: "Private", description: "Your pages and photos never leave your browser." },
  ],

  faqs: [
    { q: "How do I compress an image to 150KB?", a: "Add it here and press Compress — the 150KB limit is already set. You get a JPG under 150KB at the best quality that fits." },
    { q: "Can handwriting still be read at 150KB?", a: "Yes. A full page keeps about 1200 × 1700 pixels, enough to read normal handwriting at regular zoom." },
    { q: "How do I upload several handwritten pages under 150KB each?", a: "Add all the pages together; each comes back under 150KB. Name the photos in page order first so they stay in order." },
    { q: "Pencil or pen — which works better?", a: "A dark pen. Pencil lines are faint in photos and fade first when a file is compressed." },
    { q: "Can I make one PDF of all the pages under 150KB?", a: "Yes: give each page a smaller limit here so the total stays under 150KB, then combine them with Image to PDF." },
    { q: "How big can a photo be at 150KB?", a: "Roughly 900 × 1200 pixels at high quality — plenty for profiles and ID cards." },
    { q: "Is 150KB the same as 0.15MB?", a: "Yes, 150KB is 150,000 bytes. The file also passes portals that count 1KB as 1,024 bytes." },
    { q: "Can I use a phone scanner app for the pages?", a: "Yes — it is the best way. Export the pages as JPG (or take screenshots) instead of a PDF, then compress them here to under 150KB each." },
  ],

  security:
    "Pages and photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
