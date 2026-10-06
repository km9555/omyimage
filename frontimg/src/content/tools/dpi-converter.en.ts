import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /dpi-converter. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "en",
  name: "DPI Converter",
  tagline:
    "Change the DPI of JPG and PNG images to 300, 200, 72 or any value — only the DPI label changes, so the picture stays exactly the same. Batch, free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Print shops, publishers and some application forms ask for images \"at 300 DPI\", and a photo straight from a phone or a screenshot usually says 72 or 96 — or nothing at all. oMyImage's DPI Converter rewrites that one value in the file. Add your JPG or PNG images, pick the DPI, and download copies whose pixels, quality and colours are byte-for-byte the originals, now labelled with the resolution you need.",

  sections: [
    {
      heading: "What DPI actually changes",
      id: "what",
      body: [
        "DPI — dots per inch, strictly PPI for a digital image — is a number stored in the file's header. It does not describe the picture; it tells a printer or a layout program how many of the image's pixels to fit into each inch of paper. Screens ignore it completely, which is why the same photo looks identical on a website whether it says 72 or 300.",
        "Because DPI is only a label, changing it is a tiny edit to the header: the JFIF density in a JPG (and the EXIF resolution, if the file has one), or the pHYs chunk in a PNG. Nothing is re-compressed, so there is no loss of quality and the file size stays the same to within a few bytes.",
      ],
    },
    {
      heading: "How print size follows from DPI",
      id: "print-size",
      body: [
        "Print size is simply pixels divided by DPI. A photo 1200 × 1800 pixels labelled 300 DPI prints at 4 × 6 inches (10.2 × 15.2 cm). Labelled 72 DPI, the same pixels ask for a 16.7 × 25 inch print. The converter shows the size the first image will print at as you choose a value, so you can see the effect before downloading.",
        "This is why changing DPI is useful in layout programs and word processors: an image labelled 300 DPI drops into a document at its intended physical size instead of appearing huge.",
      ],
    },
    {
      heading: "When you need 300 DPI",
      id: "when",
      body: [
        "300 DPI is the standard for photo prints, books, magazines and anything people hold close. 150–200 DPI is fine for posters and large prints viewed from a distance, and some application forms ask for exactly 200 or 300 because their systems check the value. 72 and 96 DPI are old screen conventions and matter only when a template expects them.",
        "If a print service rejects a file for low DPI, check its pixel size as well: the service usually means the image will print too large or too soft at the size you ordered, which a new label alone cannot fix.",
      ],
    },
    {
      heading: "Changing DPI is not adding pixels",
      id: "resample",
      body: [
        "Setting 300 DPI on a small image does not make it sharper; it makes it print smaller. A 600 × 400 photo at 300 DPI prints at just 2 × 1.3 inches. To print larger at the same quality you need more pixels from the source — a higher-resolution original or export — not a bigger number in the header.",
        "When you need an exact physical size, use Resize Image in cm: it works out the pixels for a size in centimetres, millimetres or inches at your DPI and saves the DPI in the file at the same time.",
      ],
    },
    {
      heading: "Which files can store DPI",
      id: "formats",
      body: [
        "JPG and PNG both have a standard place for DPI, and those files are changed in place. WEBP, GIF and BMP files are converted to PNG first — losslessly, so every pixel is kept — because the PNG can carry the value and is accepted wherever a DPI matters. The downloaded file name ends in the new value, for example photo_300dpi.jpg.",
      ],
    },
  ],

  howToTitle: "How to change the DPI of an image",
  steps: [
    { title: "Add your images", description: "Select one or many JPG or PNG images; WEBP, GIF and BMP are accepted too." },
    { title: "Choose the DPI", description: "Pick 300, 200, 150, 96 or 72, or type any value, and check the print size." },
    { title: "Download", description: "One image downloads directly; several come together in a ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "No quality loss", description: "Only the DPI value in the header changes; the pixels are untouched." },
    { icon: "burst_mode", title: "Batch conversion", description: "Set the DPI of a whole folder of images at once." },
    { icon: "lock", title: "In your browser", description: "Your images are changed on your device and never uploaded." },
  ],

  faqs: [
    { q: "How do I change an image to 300 DPI?", a: "Add the image, choose 300 and click Change DPI. The downloaded copy is labelled 300 DPI with exactly the same pixels." },
    { q: "Does changing DPI reduce quality?", a: "No. Only a number in the file header changes. Nothing is re-compressed, so quality and file size stay the same." },
    { q: "Will 300 DPI make my photo sharper?", a: "No. DPI decides how large the image prints, not how much detail it has. A higher DPI on the same pixels gives a smaller, not sharper, print." },
    { q: "What DPI should I use for printing?", a: "300 DPI for photos and documents viewed up close; 150–200 for posters and large prints seen from a distance." },
    { q: "Why does my image show 72 or 96 DPI?", a: "Phones, screenshots and many apps save 72 or 96, or no value at all, and programs then assume one of those. It only matters for printing." },
    { q: "Does DPI matter for websites or social media?", a: "No. Screens display pixels and ignore the DPI value entirely." },
    { q: "Can I change the DPI of a WEBP or GIF?", a: "Yes. They are converted to PNG without losing any pixels, and the PNG gets the DPI you choose." },
    { q: "How do I check the DPI after converting?", a: "Use the DPI Checker, or open the file's properties: on Windows, Details shows the horizontal and vertical resolution." },
    { q: "Can I change the DPI of many images at once?", a: "Yes. Add them all; each gets the same DPI and they download together as a ZIP." },
    { q: "Are my images uploaded?", a: "No. The DPI is changed entirely in your browser." },
  ],

  security:
    "Your images are changed entirely in your browser — only the DPI field in each file is rewritten. Nothing is uploaded, stored or tracked.",
};

export default content;
