import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /jpg-to-pdf-under-500kb (variant of image-to-pdf, preset
 * maxKb 500). India "jpg to pdf under 500kb" 2.4K/mo. Angle: LONG documents —
 * multi-page applications, receipts, reports — and sending them by email.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "en",
  name: "JPG to PDF Under 500KB",
  tagline:
    "Combine many photos or scans into one PDF under 500KB — multi-page applications, receipts, reports and handwritten work — ready to upload or email. Readable pages, in your browser, nothing uploaded.",
  category: { id: "convert", label: "Convert" },

  intro:
    "500KB is the usual limit when a portal or an office wants a whole document at once: a ten-page application, a month of receipts, a handwritten assignment, a report with photographs. Put together straight from a phone, those pages make a PDF of 20 or 30MB. This page builds the PDF and, if it is over 500KB, recompresses the images just enough for the whole file to fit, keeping every page as readable as the limit allows.",

  sections: [
    {
      heading: "Long documents in one file",
      id: "long",
      body: [
        "At 500KB, five pages of typed text keep roughly 800 × 1100 pixels each and ten pages about 600 × 800 — enough for normal-sized print and handwriting to stay readable at normal zoom. The budget is shared by each image's area, so the pages come out evenly.",
        "Up to about ten pages the result is still comfortable to read; beyond that, split the document into two PDFs or ask whether the portal accepts a larger file.",
      ],
    },
    {
      heading: "Receipts and long slips",
      id: "receipts",
      body: [
        "A till receipt is long and narrow, and an A4 page would leave most of it empty. Choose Fit to image as the page size and each receipt becomes a page of exactly its own shape — easy to read on a phone and easy for an accounts team to check.",
        "Several receipts can also share an A4 page: set Images per page to 2 or 4.",
      ],
    },
    {
      heading: "Sending the PDF by email",
      id: "email",
      body: [
        "Most email services cap attachments at around 20–25MB per message, and many workplace inboxes allow far less. A PDF under 500KB goes through anywhere, opens instantly on a phone and does not fill up the recipient's mailbox — while still printing legibly on A4.",
      ],
    },
    {
      heading: "Keep the originals",
      id: "originals",
      body: [
        "The compressed PDF is a copy for sending and uploading. Keep the original photos: if someone later asks for a clearer version of one page, or a different limit, you can make it from the originals instead of from the compressed PDF.",
      ],
    },
    {
      heading: "Assignments and handwritten work",
      id: "assignments",
      body: [
        "Colleges and schools often collect handwritten assignments as one PDF with a size limit. Photograph each page in daylight, straight from above, and add the photos in page order — the preview shows every page before you create the file.",
        "Dark pen reads far better than pencil once the pages are compressed. If a page comes out faint, retake just that one; there is no need to start again with the rest.",
      ],
    },
    {
      heading: "Photos of different sizes",
      id: "mixed",
      body: [
        "Pages photographed at different distances, or with different phones, end up with very different pixel sizes. On A4 or Letter pages they are all scaled to fit the same page, and the size budget is shared by each photo's area, so a huge photo does not crowd out the others.",
      ],
    },
  ],

  howToTitle: "How to convert JPG to PDF under 500KB",
  steps: [
    { title: "Add all the pages", description: "Add photos or scans of every page — JPG, PNG, WEBP or GIF." },
    { title: "Order and lay out", description: "Arrange the pages and pick the page size; the 500KB limit is already set." },
    { title: "Create the PDF", description: "Download one PDF under 500KB, ready to upload or email." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Many pages, one small file", description: "Up to ten pages in a single PDF under 500KB." },
    { icon: "receipt_long", title: "Receipts fit", description: "Fit to image pages for long receipts, or several per A4 page." },
    { icon: "lock", title: "Private", description: "Pages are compressed and combined in your browser, never uploaded." },
  ],

  faqs: [
    { q: "How do I convert JPG to PDF under 500KB?", a: "Add all the images, put them in order and press Create PDF. The 500KB limit is already set; the images are compressed only as much as needed." },
    { q: "How many pages fit in a 500KB PDF?", a: "Five pages stay clearly readable and ten are fine for normal-sized print. Beyond that, split the document." },
    { q: "How do I make a PDF of receipts?", a: "Add the receipt photos and choose Fit to image as the page size, or 2–4 images per A4 page." },
    { q: "Can I email a 500KB PDF?", a: "Yes, to any email service — it is far below every attachment limit." },
    { q: "Will handwriting stay readable?", a: "Yes, for up to about ten pages of normal handwriting. Photograph each page in daylight for the clearest result." },
    { q: "Is 500KB the same as 0.5MB?", a: "Yes, 500KB is 500,000 bytes. The PDF also passes portals that count 1KB as 1,024 bytes." },
    { q: "Are my pages uploaded?", a: "No. The PDF is made entirely in your browser." },
    { q: "Can I combine photos from different phones?", a: "Yes. Every photo is fitted to the same page size, whatever its resolution, and the limit is shared fairly between them." },
  ],

  security:
    "Your page images are compressed and assembled into a PDF on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
