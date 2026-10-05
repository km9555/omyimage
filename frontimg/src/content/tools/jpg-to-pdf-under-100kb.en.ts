import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /jpg-to-pdf-under-100kb (variant of image-to-pdf, preset
 * maxKb 100). India "jpg to pdf under 100kb" 2.4K/mo. Angle: the strict,
 * usually ONE-page document PDF — what fits, preparing the page, and what to
 * do when a form wants several pages in 100KB.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "en",
  name: "JPG to PDF Under 100KB",
  tagline:
    "Turn a photo or scan of a document into a PDF under 100KB — for application forms with the strictest PDF limits. The images are compressed only as much as the whole file needs, in your browser, with nothing uploaded.",
  category: { id: "convert", label: "Convert" },

  intro:
    "Forms that ask for a document \"in PDF format, maximum 100KB\" — a certificate, an identity card, a caste or income certificate, a mark sheet — are usually asking for one page. A phone photo of that page is 3–5MB on its own, so simply putting it into a PDF produces a file thirty to fifty times too big. This page builds the PDF and, if it is over 100KB, recompresses the image inside it just enough for the whole file to fit, keeping the text as sharp as the limit allows.",

  sections: [
    {
      heading: "What fits in a 100KB PDF",
      id: "what-fits",
      body: [
        "One A4 page fits comfortably: at 100KB a full page of typed text keeps roughly 800 × 1100 pixels at good quality, and a certificate with more white space keeps more — enough to read printed text, stamps and signatures at normal zoom. The PDF structure itself takes only a few kilobytes, so nearly the whole limit goes to the picture of the page.",
        "Two pages fit as well, at a lower resolution each; three or more start to blur small print. If a form wants a long document in 100KB, it is worth checking whether it accepts separate files per page.",
      ],
    },
    {
      heading: "Preparing the page",
      id: "prepare",
      body: [
        "Lay the document flat on a dark surface, photograph it from directly above in daylight, and crop off everything that is not the page. A clean, evenly lit page compresses far better than one with a shadow across it, and the leftover table around a page is wasted bytes.",
        "For a plain typed or printed document, converting it to black and white first with the Grayscale Image tool gives noticeably sharper text at 100KB. Keep certificates with coloured stamps and seals in colour.",
      ],
    },
    {
      heading: "Page size and layout",
      id: "layout",
      body: [
        "A4 is the default and suits most documents. Fit to image makes each page the shape of the photo, with no margins, which suits ID cards and receipts. The page size barely changes the file size — almost all of a PDF like this is the image itself — so choose whichever looks right.",
        "The limit box can be changed: type 99 for forms that warn about anything close to 100KB, or a different number altogether.",
      ],
    },
    {
      heading: "When it will not fit",
      id: "too-big",
      body: [
        "If a document has many pages, 100KB may simply be too little to keep them readable. The tool still produces the smallest PDF it can and tells you if it could not get under the limit. In that case use the 200KB or 300KB page if the form allows it, or make one PDF per page.",
      ],
    },
    {
      heading: "Scan or photograph?",
      id: "scan-or-photo",
      body: [
        "A flatbed scan is the cleanest start: even light, a perfectly flat page and a white background, all of which compress well. Scanning at 150–200 DPI is plenty for a 100KB PDF — higher settings only add pixels that will be removed again to fit.",
        "A phone works almost as well if you photograph the page in daylight, straight from above, without the flash. Phone scanner apps help further by straightening the page and whitening the paper; export the result as JPG and add it here.",
      ],
    },
  ],

  howToTitle: "How to convert JPG to PDF under 100KB",
  steps: [
    { title: "Add the page images", description: "Add the photo or scan of your document — JPG, PNG, WEBP or GIF." },
    { title: "Check the layout", description: "Pick the page size and order; the 100KB limit is already set." },
    { title: "Create the PDF", description: "The images are compressed only as needed, and the PDF downloads under 100KB." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Whole-file limit", description: "The finished PDF is under 100KB — not just each image inside it." },
    { icon: "description", title: "Readable pages", description: "Images are compressed only as much as the limit requires, so text stays sharp." },
    { icon: "lock", title: "Nothing uploaded", description: "Your documents are turned into a PDF in your browser." },
  ],

  faqs: [
    { q: "How do I convert a JPG to a PDF under 100KB?", a: "Add the image, check the page size and press Create PDF. The 100KB limit is already set; the image is compressed only as much as needed." },
    { q: "Will my document still be readable?", a: "For one or two pages, yes — at 100KB an A4 page keeps enough detail for printed text, stamps and signatures." },
    { q: "Can I put several pages in a 100KB PDF?", a: "Two pages work well; more pages each get fewer pixels. For long documents use a higher limit if the form allows it." },
    { q: "Does the page size change the file size?", a: "Hardly. Almost all of the PDF is the image; the page size only changes how it is laid out." },
    { q: "What if my PDF is already under 100KB?", a: "If the images already make a PDF under 100KB, nothing is recompressed and the PDF is built from them as they are." },
    { q: "Is 100KB the same as 0.1MB?", a: "Yes, 100KB is 100,000 bytes. The PDF also passes forms that count 1KB as 1,024 bytes." },
    { q: "Are my documents uploaded?", a: "No. The PDF is made entirely in your browser." },
    { q: "Should I scan or photograph the document?", a: "Either works. A scan is slightly cleaner; a phone photo in daylight, taken straight from above without flash, comes very close." },
  ],

  security:
    "Your document images are compressed and assembled into a PDF on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
