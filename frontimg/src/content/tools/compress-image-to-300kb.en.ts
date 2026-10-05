import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-300kb (variant of compress-image,
 * preset targetKb 300). Demand (2026-10-04): Indonesia "kompres foto 300kb"
 * 12.1K; India "compress image to 300kb" 2.4K. Angle: DOCUMENTS — ID cards,
 * full-page certificates and mark sheets kept legible, both sides of a card,
 * and the step to a PDF when a portal wants one.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "en",
  name: "Compress Image to 300KB",
  tagline:
    "Compress photos and document scans to under 300KB with the text still easy to read — ID cards, certificates, mark sheets and letters for registration and job portals. Batch at once, no upload.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "300KB is a typical limit for document uploads: the identity card, family or residence card, diploma, transcript or reference letter that registration, scholarship and recruitment portals ask you to attach. It is enough room to keep a full page legible — small print, stamps and signatures included — as long as the photo of the page is a good one. Add all your documents at once and each comes back as a JPG under 300KB.",

  sections: [
    {
      heading: "Full pages that stay readable",
      id: "pages",
      body: [
        "An A4 page photographed with a phone is usually 3–6MB. At 300KB the same page keeps around 1600 × 2260 pixels — sharp enough to read the smallest print on a mark sheet at 100% zoom. The tool spends the budget on detail first and only reduces dimensions if a page is unusually busy.",
        "Lay the page flat on a dark table, photograph it from directly above in daylight so there are no shadows, and crop off the table before compressing. A scanner app that straightens the page helps too.",
      ],
    },
    {
      heading: "ID cards: crop to the card",
      id: "id-cards",
      body: [
        "An identity card is small, so a photo of it is mostly table. Crop to the edges of the card and it fits under 300KB at very high quality, with the photo, number and hologram details all clear.",
        "If a portal asks for both sides, make two images — front and back — and compress them together; each comes back under 300KB. If it wants both sides in a single file, put them on one page with the Merge Images tool first.",
      ],
    },
    {
      heading: "Colour or black and white?",
      id: "colour",
      body: [
        "Keep certificates and ID cards in colour: coloured stamps, seals and photos are part of what makes them valid, and some portals reject documents that look photocopied. For a plain typed letter or a printed form, black and white is fine and leaves more of the budget for sharp text.",
      ],
    },
    {
      heading: "When the portal wants a PDF",
      id: "pdf",
      body: [
        "Some portals accept only PDFs for documents. Compress the page images here first, then combine them with the Image to PDF tool. The PDF ends up close to the total size of the images you put in, so a one-page document stays under 300KB.",
        "For a multi-page document with a 300KB limit on the whole file, set a lower limit per page here — for three pages, about 90KB each — so that the finished PDF still fits.",
      ],
    },
    {
      heading: "A last check before you upload",
      id: "checklist",
      body: [
        "Before pressing upload, open each file and check: every line is readable, no edge of the page is cut off, stamps and signatures are visible, and the document is the right way up. Name the files the way the portal asks — many reject spaces or punctuation in file names — and keep the originals, because another application may ask for a different limit.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 300KB",
  steps: [
    { title: "Add your documents", description: "Select or drop your photos and document scans — JPG, PNG or WEBP." },
    { title: "Compress to under 300KB", description: "The 300KB limit is already set; every file is compressed to fit." },
    { title: "Download the set", description: "Download each file or all of them together as a ZIP." },
  ],

  features: [
    { icon: "description", title: "Legible documents", description: "Full pages keep enough pixels to read small print, stamps and signatures." },
    { icon: "picture_as_pdf", title: "Ready for a PDF", description: "Compress the pages here, then combine them with Image to PDF for portals that want one file." },
    { icon: "lock", title: "Private", description: "Identity documents are compressed in your browser, not uploaded to a server." },
  ],

  faqs: [
    { q: "How do I compress a document photo to 300KB?", a: "Add it here and press Compress — the 300KB limit is already set. Crop away the table around the page first for the sharpest result." },
    { q: "Will the text still be readable at 300KB?", a: "Yes. A full A4 page keeps about 1600 × 2260 pixels at 300KB, enough to read small print at 100% zoom." },
    { q: "How do I compress both sides of my ID card?", a: "Photograph the front and back separately, crop each to the card and add both. Each comes back under 300KB." },
    { q: "Can I make a PDF under 300KB?", a: "For one page, yes: compress the image here, then turn it into a PDF with Image to PDF. For several pages, give each page a smaller limit so the total stays under 300KB." },
    { q: "Is 300KB the same as 0.3MB?", a: "Yes. 300KB is 300,000 bytes, or 0.3MB. The file is also under the limit for portals that count 1KB as 1,024 bytes." },
    { q: "Why does my scan look grey after compressing?", a: "The grey comes from the original photo — usually shadows or indoor light. Photograph the page in daylight without shadows and compress again." },
    { q: "Does 300KB work for a profile photo too?", a: "Easily. A portrait photo under 300KB looks practically the same as the original on a screen." },
    { q: "Can I compress a PDF or Word file here?", a: "No — this tool works on images (JPG, PNG and WEBP). Photograph or screenshot the page, compress the image here, and turn it into a PDF with Image to PDF if the portal needs one." },
  ],

  security:
    "ID cards, certificates and photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
