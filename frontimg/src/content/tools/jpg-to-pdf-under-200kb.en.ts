import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /jpg-to-pdf-under-200kb (variant of image-to-pdf, preset
 * maxKb 200). India "jpg to pdf under 200kb" 6.6K/mo — the biggest of the
 * family. Angle: small document SETS (front and back, two or three pages) for
 * admission, scholarship and recruitment portals.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "en",
  name: "JPG to PDF Under 200KB",
  tagline:
    "Combine photos or scans of your documents into one PDF under 200KB — certificates, mark sheets, ID cards front and back — for admission, scholarship and job portals. Readable pages, in your browser, nothing uploaded.",
  category: { id: "convert", label: "Convert" },

  intro:
    "200KB is the most common PDF limit on admission, scholarship and recruitment portals, usually for a document of two or three pages: a mark sheet with its back, a certificate and its annexure, both sides of an identity card. This page puts your images into one PDF in the order you choose and, if the result is over 200KB, recompresses the images just enough for the whole file to fit — sharing the budget so every page stays equally readable.",

  sections: [
    {
      heading: "Two or three readable pages",
      id: "pages",
      body: [
        "At 200KB, two pages of typed text keep roughly 800 × 1100 pixels each and three pages about 600 × 800 — clearly readable for two, and fine for three when the print is normal-sized, as on most certificates and forms. The budget is shared by pixel area, so a full-page scan gets more of it than a small ID card on the same document, and no single page ends up much blurrier than the rest.",
        "Images that already fit are not touched: if your pages are small enough to make a PDF under 200KB as they are, the PDF is built from them unchanged.",
      ],
    },
    {
      heading: "Putting pages in order",
      id: "order",
      body: [
        "Add all the images, then use the arrows on each one to put them in the order the document should be read — front before back, page one before page two. The preview on the left shows exactly how the pages will come out.",
        "Name your photos sensibly before adding them, such as marksheet-front and marksheet-back, and you will spot a wrong order at a glance.",
      ],
    },
    {
      heading: "Both sides of a card on one page",
      id: "both-sides",
      body: [
        "Portals often want the front and back of an identity card in a single PDF page. Add both photos, set Images per page to 2, and both sides are placed on one A4 page, one above the other. Crop each photo to the card first so the sides come out the same size.",
      ],
    },
    {
      heading: "Check before you upload",
      id: "check",
      body: [
        "Open the downloaded PDF and zoom to 100% on each page: names, numbers and dates should be clearly readable, and nothing should be cut off at the edges. If a page is hard to read, retake that photo in better light rather than raising the limit — a clean photo compresses much better than a dim one.",
      ],
    },
    {
      heading: "How the 200KB limit is met",
      id: "how",
      body: [
        "The PDF is built first from your images as they are. If that is already under 200KB, you get it straight away and nothing is recompressed. If not, the tool measures how much of the file is images and how much is the PDF's own structure, and shares what remains of 200KB between the images by their size.",
        "Each image is then saved again at the highest JPG quality that fits its share, and the PDF is rebuilt. If the result is still a few bytes over, the shares are tightened and it tries once more — so the file you download is always under the limit, not just close to it.",
      ],
    },
  ],

  howToTitle: "How to convert JPG to PDF under 200KB",
  steps: [
    { title: "Add your images", description: "Add the photos or scans of every page — JPG, PNG, WEBP or GIF." },
    { title: "Order and lay out the pages", description: "Use the arrows to set the order; choose the page size and images per page." },
    { title: "Create the PDF", description: "The PDF downloads under 200KB, with the images compressed only as needed." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "One PDF under 200KB", description: "The whole file stays under the limit, however many pages it has." },
    { icon: "reorder", title: "Pages in your order", description: "Reorder pages and see the result in the preview before you create the PDF." },
    { icon: "lock", title: "Private", description: "Certificates and ID cards never leave your browser." },
  ],

  faqs: [
    { q: "How do I convert JPG to PDF under 200KB?", a: "Add the images, put them in order and press Create PDF. The 200KB limit is already set, and the images are compressed only as much as needed." },
    { q: "How many pages fit in a 200KB PDF?", a: "Two pages stay clearly readable; three work for certificates and forms with normal-sized print. More pages fit too, each with less detail." },
    { q: "How do I put both sides of my ID card on one page?", a: "Add both photos and choose 2 under Images per page. Both sides go on one page." },
    { q: "Will the pages all look the same quality?", a: "Yes. The size budget is shared by each image's area, so every page is compressed evenly." },
    { q: "My images are already small — will they be compressed anyway?", a: "No. If they already make a PDF under 200KB, they are used exactly as they are." },
    { q: "Is 200KB the same as 0.2MB?", a: "Yes, 200KB is 200,000 bytes. The PDF also passes portals that count 1KB as 1,024 bytes." },
    { q: "Are my documents uploaded?", a: "No. The images are compressed and the PDF is built in your browser." },
    { q: "Why does it take a few seconds?", a: "Each image is compressed to its share of the limit and the PDF is rebuilt, all in your browser. Large phone photos take a moment longer." },
  ],

  security:
    "Your document images are compressed and assembled into a PDF on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
