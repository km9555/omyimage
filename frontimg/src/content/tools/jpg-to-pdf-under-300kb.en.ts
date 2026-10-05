import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /jpg-to-pdf-under-300kb (variant of image-to-pdf, preset
 * maxKb 300). India "jpg to pdf under 300kb" 2.4K/mo. Angle: COLOUR documents
 * of three to five pages — stamps, seals and photos that must stay legible.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "en",
  name: "JPG to PDF Under 300KB",
  tagline:
    "Turn several pages of photos or scans into one PDF under 300KB, with coloured stamps, seals and photographs still clear. For application and verification portals. In your browser, nothing uploaded.",
  category: { id: "convert", label: "Convert" },

  intro:
    "A 300KB PDF limit usually means a fuller document: three to five pages, often in colour — a certificate with a seal, an application form with a photo pasted on it, a set of receipts. This page assembles your images into one PDF and, if the result is over 300KB, recompresses them just enough for the whole file to fit. With 300KB to share, colour stays faithful and stamps stay readable.",

  sections: [
    {
      heading: "Colour that stays readable",
      id: "colour",
      body: [
        "Coloured stamps and seals are what make many documents valid, and they are often the first thing to blur when a file is compressed hard. At 300KB a three-page colour document keeps roughly 800 × 1100 pixels per page, so blue stamps, red seals and a pasted photograph remain clearly visible.",
        "If part of your document is plain typed text and part is in colour, keep everything in colour — mixing a black-and-white page into the PDF saves less than it seems, because the limit is shared across pages anyway.",
      ],
    },
    {
      heading: "How many pages fit",
      id: "pages",
      body: [
        "Three A4 pages stay comfortably readable at 300KB, and four or five work for documents with large print or plenty of white space. The size is shared out by each image's area, so a large scan gets more of the budget than a small receipt, and every page ends up at a similar sharpness.",
        "For six pages or more, consider the 500KB page if the portal allows it, or split the document into two PDFs.",
      ],
    },
    {
      heading: "Several small items on one page",
      id: "multi-up",
      body: [
        "Receipts, ID cards and small certificates waste space when each takes a whole A4 page. Set Images per page to 2 or 4 and they are laid out together. That makes the PDF shorter and easier to check, and each item is still stored at its own resolution.",
      ],
    },
    {
      heading: "A last look before uploading",
      id: "check",
      body: [
        "Open the PDF and zoom in on each page. Check that the pages are in the right order, nothing is cut off, and every stamp and signature can be read. If one page is noticeably worse than the others, retake that photo in daylight and build the PDF again.",
      ],
    },
    {
      heading: "Forms with a pasted photo",
      id: "pasted-photo",
      body: [
        "A filled-in application form often carries a passport photo pasted in a box, and the portal checks that the face is recognisable. At 300KB a three-page form keeps the pasted photo clear enough for that, as long as the page itself was photographed well.",
        "Photograph the form flat, in daylight and without flash, so the glossy photo does not reflect the light. If the photo box comes out with a glare, tilt the page slightly away from the window and take it again.",
      ],
    },
    {
      heading: "Naming and uploading",
      id: "upload",
      body: [
        "Portals often reject file names with spaces or special characters. Give the PDF a short name such as application_form.pdf before uploading, and keep the original photos in case you need to make the PDF again with a different limit.",
      ],
    },
  ],

  howToTitle: "How to convert JPG to PDF under 300KB",
  steps: [
    { title: "Add the pages", description: "Add photos or scans of each page — JPG, PNG, WEBP or GIF." },
    { title: "Arrange them", description: "Set the order, page size and images per page; the 300KB limit is already set." },
    { title: "Create the PDF", description: "Download one PDF under 300KB, with colour and stamps kept clear." },
  ],

  features: [
    { icon: "palette", title: "Colour kept", description: "Stamps, seals and photos stay clear in colour at 300KB." },
    { icon: "grid_view", title: "Several items per page", description: "Two or four receipts or cards on one page, each at its own resolution." },
    { icon: "lock", title: "Nothing uploaded", description: "Your documents are compressed and combined in your browser." },
  ],

  faqs: [
    { q: "How do I make a PDF under 300KB from JPG images?", a: "Add the images, arrange them and press Create PDF. The 300KB limit is already set; images are compressed only as needed." },
    { q: "How many pages can a 300KB PDF have?", a: "Three A4 pages stay readable in colour; four or five work when the print is large. Longer documents fit too, with less detail per page." },
    { q: "Will coloured stamps stay visible?", a: "Yes. At 300KB a colour document keeps enough detail for stamps, seals and pasted photos." },
    { q: "Can I put two receipts on one page?", a: "Yes. Choose 2 or 4 under Images per page." },
    { q: "Why does one page look blurrier than the others?", a: "Usually that photo was taken in poorer light. Retake it in daylight and build the PDF again." },
    { q: "Is 300KB the same as 0.3MB?", a: "Yes, 300KB is 300,000 bytes. The PDF also passes portals that count 1KB as 1,024 bytes." },
    { q: "Are my files uploaded?", a: "No. Everything happens in your browser." },
    { q: "Will the photo pasted on my form still be recognisable?", a: "Yes, at 300KB for a form of up to three or four pages — provided the form was photographed without glare on the photo." },
  ],

  security:
    "Your document images are compressed and assembled into a PDF on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
