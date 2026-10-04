import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-100kb (variant of compress-image,
 * preset targetKb 100). Demand (2026-10-04): India "compress image to 100kb"
 * 74K and "resize image to 100kb" 49.5K (KD 0); Indonesia "kompres foto
 * 100kb" 18.1K. Angle: 100KB is where photos stop suffering — and where
 * scanned DOCUMENTS start, so this page covers both.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "en",
  name: "Compress Image to 100KB",
  tagline:
    "Compress photos and scanned documents to under 100KB — for application forms, ID uploads and email. The highest quality that fits, many images at once, processed in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "100KB is the limit you meet on job applications, college and visa forms, KYC and ID uploads, and anywhere a site wants a photo or a scanned document but not a full-size camera file. It is a comfortable budget: a portrait or a page of text fits in it without visible damage, as long as the file isn't wasting bytes on pixels nobody will see. Add your images, and each comes back as a JPG under 100KB at the best quality the limit allows.",

  sections: [
    {
      heading: "100KB is where quality stops being the problem",
      id: "comfortable",
      body: [
        "Below about 50KB, compression is a compromise you can see. At 100KB it mostly isn't: a portrait photo fits at around 900 × 1200 pixels at a good quality, which is far more than an application form displays and enough to print at passport size.",
        "That is why the tool's first move is always to lower the quality a little and keep your pixels. On most phone photos it only needs to reduce the dimensions as well — to roughly 1000–1500 pixels on the long side — because a 12-megapixel photo carries more detail than 100KB can hold at any sensible quality.",
      ],
    },
    {
      heading: "Scanned documents under 100KB",
      id: "documents",
      body: [
        "Forms that ask for a 100KB limit often want a document rather than a face: a mark sheet, an ID card, a certificate, a utility bill. A phone photo of a page is mostly white paper, and paper with uneven light is surprisingly expensive to store, because every slight shadow is detail the JPG has to describe.",
        "Photograph the page flat, in even daylight, filling the frame, and crop away the table around it. For text-only pages, converting to black and white with the Grayscale Image tool before compressing lets more of the 100KB go on keeping the text sharp. If the form wants a PDF rather than an image, compress the scan here first and then turn it into a PDF with Image to PDF.",
      ],
    },
    {
      heading: "Several photos for one email",
      id: "email",
      body: [
        "Phone photos at 3–5MB each make an email attachment of ten pictures fail, or land in the recipient's inbox as a 40MB download. At 100KB each, the same ten photos come to about 1MB — small enough for any mail provider and still perfectly clear on a screen.",
        "Add the whole set at once: each image is compressed to the same limit separately, and the ZIP download keeps them together.",
      ],
    },
    {
      heading: "ID cards and KYC photos under 100KB",
      id: "kyc",
      body: [
        "Banks, wallets and telecom providers that verify identity online usually want a clear photo of an ID card under a limit like 100KB, and they reject anything a person or a machine cannot read. The things that get a card rejected are almost never the file size: glare across a laminated card, a corner cut off, the card filling only a small part of the frame, or a blurred number.",
        "Lay the card on a dark, plain surface, photograph it from directly above without flash, and crop to its edges before compressing. A card cropped tight fits easily in 100KB with every digit sharp, because the budget is spent on the card instead of the table around it.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 100KB",
  steps: [
    { title: "Add images or scans", description: "Select or drop JPG, PNG or WEBP files — photos, scanned pages or screenshots." },
    { title: "Compress to under 100KB", description: "The 100KB limit is already set; change the number if your form allows a different size." },
    { title: "Download", description: "Every file comes back under 100KB; download them one by one or together as a ZIP." },
  ],

  features: [
    { icon: "description", title: "Photos and documents", description: "Works as well on a scanned certificate or ID card as on a portrait — both fit cleanly in 100KB." },
    { icon: "burst_mode", title: "A whole set at once", description: "Compress every photo and scan for an application in one go and download them as a ZIP." },
    { icon: "lock", title: "Documents stay on your device", description: "ID cards and certificates are compressed in your browser and never uploaded anywhere." },
  ],

  faqs: [
    { q: "How do I reduce a photo to 100KB?", a: "Add the photo and press Compress — the 100KB limit is already set. You get a JPG under 100KB at the highest quality that fits." },
    { q: "Is 100KB enough for a passport-size photo?", a: "Easily. A passport-size photo needs only a few hundred pixels across, which fits in 100KB at a very high quality." },
    { q: "How do I get a scanned document under 100KB?", a: "Photograph or scan the page flat and evenly lit, crop to the page edges, and compress it here. For text-only pages, converting to black and white first leaves more room for sharp text." },
    { q: "What is 100KB in MB?", a: "0.1MB. The file is kept under 100,000 bytes, so it also passes forms that count 1,024 bytes per kilobyte." },
    { q: "Can I compress an iPhone HEIC photo to 100KB?", a: "Convert it to JPG first with HEIC to JPG, then compress the JPG here. This tool reads JPG, PNG and WEBP." },
    { q: "Can the result stay a PNG?", a: "No — PNG cannot trade quality for size, so it can't be steered to an exact limit. You get a JPG, or a WEBP if you choose it and the site accepts it." },
    { q: "Why did the tool make my photo narrower?", a: "Because even at a low quality the full-size photo was over 100KB. The tool reduced the dimensions just enough to fit, which looks much better than crushing the quality." },
  ],

  security:
    "Your photos and documents stay on your device. Everything is compressed in your browser — no upload, no server copy, nothing kept.",
};

export default content;
