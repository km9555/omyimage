import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /image-to-pdf. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "en",
  name: "Image to PDF",
  tagline:
    "Convert JPG, PNG and WEBP images into a single PDF online — reorder pages, choose page size, orientation, layout and margins. Free, fast and 100% private in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "Need to send a set of photos or scans as one document? oMyImage's Image to PDF tool combines your JPG, PNG and WEBP images into a single PDF. Reorder the pages, fit each page to its image or pick A4, Letter, Legal, A3 or A5, place up to nine images per page, and set the fit, margin and background. Everything is assembled in your browser, so your images stay private.",

  sections: [
    {
      heading: "Why put images into a PDF at all",
      id: "why",
      body: [
        "A PDF turns a folder of loose files into one document with a fixed order and a predictable appearance. That matters whenever something is being submitted rather than simply shared: application forms, expense claims, insurance documentation, school assignments and legal paperwork are almost always expected as a single PDF, and a ZIP of JPGs is frequently rejected outright.",
        "It also solves an ordering problem. Images sent as separate attachments arrive in whatever sequence the mail client feels like, and file managers sort 'IMG_10' before 'IMG_2'. A PDF fixes the sequence permanently, so the person at the other end reads the pages in the order you intended.",
        "Finally, a PDF prints predictably. Page size, orientation and margins are decided when the document is built rather than negotiated by whatever printer dialog the recipient happens to open.",
      ],
    },
    {
      heading: "Page size, orientation and fit",
      id: "layout",
      body: [
        "A4 is the standard almost everywhere outside North America; Letter is slightly wider and shorter and is the US default. Choosing the one your recipient's printer expects avoids the scaling and clipping that happens when a Letter document meets an A4 tray.",
        "'Fit to image' sizes each page to the picture instead, which is the right choice for screen-only documents, photo collections and anything with mixed orientations. It eliminates the bands of white space you get when a wide photo is centred on a tall page. Auto orientation is the middle ground: it keeps a standard sheet size but turns each page to match its image, so landscape photos stop being letterboxed.",
        "The fit mode decides what happens when the image and the page still disagree. Contain shows everything and accepts the empty margins; Cover fills the sheet edge to edge and crops the overflow, which suits full-bleed photo pages; Stretch forces an exact fit and should be reserved for images whose proportions are already close, since it visibly distorts anything else.",
        "Placing several images per page turns the same tool into a contact sheet or a handout. 2-up splits along the page's long edge, while 4, 6 and 9 lay out a reading-order grid — and the margin becomes the gutter between cells as well as the border around them.",
      ],
    },
    {
      heading: "Keeping the file size sensible",
      id: "size",
      body: [
        "The PDF is roughly as large as the images you put into it — they are embedded as they are, without recompression — so a document built from twenty 12-megapixel phone photos will run to tens of megabytes, usually well past the attachment limit of the system you are submitting to.",
        "The fix is upstream. Resize the images to around 1500–2000 pixels on the long edge, which is more than enough for both screen reading and ordinary printing, and compress them before building. For photographed text documents, converting to grayscale first often halves the size again with no loss of legibility.",
      ],
    },
    {
      heading: "Everything happens in your browser",
      id: "privacy",
      body: [
        "The PDF is assembled on your own device using a JavaScript PDF library, so the images are never uploaded. That is worth knowing given what people typically convert here — passports, bank statements, medical forms, contracts and ID documents are exactly the kind of thing that should not be passing through someone else's server.",
        "A practical consequence is that the tool works offline once the page has loaded, and that very large batches are limited by your device's memory rather than by an upload cap.",
      ],
    },
  ],

  howToTitle: "How to convert images to a PDF",
  steps: [
    { title: "Upload", description: "Select your images, or drag and drop them into the workspace." },
    { title: "Arrange & set up", description: "Reorder pages with the arrows, then choose page size, orientation, how many images per page, fit, margin and background." },
    { title: "Create PDF", description: "Click Create PDF to download a single document, laid out exactly as you set it." },
  ],

  features: [
    { icon: "reorder", title: "Reorder pages", description: "Drag your images into the order you want with simple up/down controls before exporting." },
    { icon: "description", title: "Full page control", description: "Fit each page to its image, or use A4, Letter, Legal, A3 or A5 with auto, portrait or landscape orientation and a margin you set in points." },
    { icon: "grid_view", title: "Multi-up layouts", description: "Place 1, 2, 4, 6 or 9 images per page and choose whether each one is contained, cropped to fill, or stretched." },
    { icon: "lock", title: "100% private", description: "The PDF is assembled entirely in your browser — your images are never uploaded." },
  ],

  faqs: [
    { q: "Can I combine many images into one PDF?", a: "Yes. Add as many images as you like and arrange them in the order you want. By default each image becomes its own page, or you can place 2, 4, 6 or 9 per page." },
    { q: "Which image formats are supported?", a: "JPG, PNG, WEBP, GIF and BMP. PNG transparency is preserved, so whatever you set as the page background shows through — including no background at all." },
    { q: "Can I choose A4 or Letter?", a: "Yes — A4, Letter, Legal, A3 and A5, each in portrait, landscape or auto (which matches the page to the image's own shape). Or pick ‘Fit to image’ to size every page to its picture." },
    { q: "What do Contain, Cover and Stretch do?", a: "Contain fits the whole image inside the page, adding empty space where the shapes don't match. Cover fills the page completely and crops whatever overflows. Stretch distorts the image to fill the page exactly — useful only when the aspect ratios are already close." },
    { q: "Does building the PDF reduce my image quality?", a: "No. JPG and PNG files are embedded exactly as they are, with no recompression, so the pages hold your original pixels. The only exception is a photo carrying EXIF rotation, which has to be re-saved so it appears the right way up." },
    { q: "Are my images uploaded?", a: "No. The PDF is built locally in your browser, so your images never leave your device." },
    { q: "Is it free?", a: "Completely free, with no watermark and no sign-up." },
    { q: "What page size should I choose?", a: "A4 for anything going to a printer outside the United States, Letter for US printing, and 'Fit to image' when the PDF is only ever going to be read on screen. Fit-to-image avoids the white margins you get when a landscape photo is placed on a portrait page." },
    { q: "Can I control the order of the pages?", a: "Yes — the images are placed in the order they appear in the list, and you can rearrange them before building. This matters most when your file manager sorted them as text, which puts 'page10' before 'page2'." },
    { q: "Will the PDF be much larger than my images?", a: "Only slightly. The images are embedded largely as they are, so the PDF is roughly the sum of your files plus a small structural overhead. If the result is too big, compress or resize the images first — a PDF built from 4000-pixel photos is enormous and unnecessary for on-screen reading." },
    { q: "Can I make a PDF from phone photos of documents?", a: "Yes, and it is one of the most common uses. For the best result, photograph each page square-on with even lighting, crop out the surroundings first, and consider running them through the Grayscale tool — a scanned-looking document is far smaller than a full-colour photo and often more legible." },
    { q: "Is the text in the PDF searchable?", a: "No. The pages are images, so the PDF contains pictures of text rather than text itself. If you need to search or copy the words, run the images through the Image to Text tool first — that extracts the text, which you can then paste into a document." },
  ],

  security:
    "Your images stay private. The PDF is assembled entirely in your browser — nothing is uploaded to a server. No storage, no tracking of your files.",

  rating: { value: "4.9", count: "655" },
};

export default content;
