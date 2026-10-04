import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-200kb (variant of compress-image,
 * preset targetKb 200). Demand (2026-10-04): India "compress image to 200kb"
 * 33.1K + "resize image to 200kb" 14.8K; Indonesia "kompres foto 200kb"
 * 22.2K (CPNS / school / campus registration). Angle: a generous budget —
 * full application SETS (photo, ID scan, certificate) and print-worthy photos.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "en",
  name: "Compress Image to 200KB",
  tagline:
    "Compress photos and document scans to under 200KB — for registration, admission and job portals. Keeps photos sharp, works on a whole set at once, and never uploads a file.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "200KB is the limit that registration and admission portals, scholarship and recruitment systems and many job sites use for each file you attach: a photograph, a scan of your ID card, a certificate, a transcript. It is twice the budget of a 100KB form and four times a 50KB one, so the goal here is not just to fit, but to fit while still looking like the original. Add the whole set, and every file comes back as a JPG under 200KB at the highest quality that fits.",

  sections: [
    {
      heading: "A generous limit — use it",
      id: "generous",
      body: [
        "At 200KB a portrait photo keeps around 1200 × 1600 pixels at a high quality: clear enough to print at passport size and to zoom in on a screen. Because the tool searches for the highest quality under the limit rather than applying a fixed setting, a clean photo can come out at near-original quality while a noisy, detailed one is given a little more compression.",
        "If your photo is already a well-compressed JPG under 200KB, you get it back untouched — there is no reason to re-compress a file the form will already accept.",
      ],
    },
    {
      heading: "Where 200KB limits show up",
      id: "where",
      body: [
        "Government recruitment and civil-service registrations, school and university admissions, scholarship applications and many job portals cap each upload around 100–300KB, with 200KB the most common figure. The same forms usually ask for several files: a formal photo, a signature, an identity card, a diploma or mark sheet, sometimes a family card or a reference letter.",
        "Read each field's requirement separately — the photo might allow 200KB while the signature allows only 20 or 50KB. This page sets 200KB; the 20KB and 50KB pages, linked above, are set for the smaller fields.",
      ],
    },
    {
      heading: "Certificates and ID scans under 200KB",
      id: "scans",
      body: [
        "A full A4 certificate photographed by a phone is 3–6MB, most of it describing paper texture and uneven light. Photograph it flat, in daylight, filling the frame, and crop off the background before compressing; the result fits in 200KB with the text and stamps clearly readable.",
        "Coloured stamps and signatures on a certificate are a good reason to keep it in colour. For plain text pages, converting to black and white first with the Grayscale Image tool leaves even more of the budget for sharp lettering.",
      ],
    },
    {
      heading: "Check each file before you submit",
      id: "check",
      body: [
        "The result list shows every file's new size and, when it had to be resized, its new dimensions. Open one or two before uploading: text should be readable at 100% zoom, faces should not look smeared, and a coloured photo background should still be one flat colour.",
        "Then rename the files if the portal is strict about names — many reject spaces, brackets or non-English characters — and keep your originals. If a form later asks for a different limit, compress again from the original rather than from the 200KB copy, so the quality you lose is only lost once.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 200KB",
  steps: [
    { title: "Add your files", description: "Select or drop the photo and scans you need to upload — JPG, PNG or WEBP." },
    { title: "Compress to under 200KB", description: "The 200KB limit is already set; you can type a different one for a stricter field." },
    { title: "Download the set", description: "Every file is under 200KB; download each one, or all of them together as a ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Near-original quality", description: "With 200KB to spend, photos keep most of their resolution and detail — the tool uses the whole budget." },
    { icon: "folder_zip", title: "Whole application at once", description: "Photo, ID scan and certificates in one batch, each under 200KB, downloaded together as a ZIP." },
    { icon: "lock", title: "No uploads", description: "Identity documents are compressed in your browser, not sent to a server." },
  ],

  faqs: [
    { q: "How do I compress a photo to 200KB?", a: "Add it and press Compress — the 200KB limit is already set. You get a JPG under 200KB at the best quality that fits." },
    { q: "How do I make a certificate scan smaller than 200KB?", a: "Photograph the certificate flat in even light, crop away everything around it, and compress it here. The text and stamps stay readable at well under 200KB." },
    { q: "Is a 200KB photo good enough to print?", a: "For passport and ID sizes, yes — 200KB keeps more than enough pixels. For a large print, use the original photo instead." },
    { q: "Can I use 199KB or 190KB instead?", a: "Yes. Type any number in the size box; 200KB is only the starting value." },
    { q: "What if my photo is already under 200KB?", a: "If it is already a JPG under the limit, you get the original back untouched. Otherwise it is converted to JPG and kept under 200KB." },
    { q: "Should I pick JPG or WEBP for a 200KB limit?", a: "JPG. Registration and job portals almost always accept JPG, while many still reject WEBP." },
    { q: "Does compressing change the colours of the photo?", a: "No visible change at this size. JPG stores colour slightly less precisely than brightness, but at 200KB the difference cannot be seen." },
  ],

  security:
    "Photos, ID cards and certificates are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
