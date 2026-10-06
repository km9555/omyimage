import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-500kb (variant of compress-image,
 * preset targetKb 500). Demand (2026-10-04): Indonesia "kompres foto 500kb"
 * 9.9K + 5.4K; India "compress image to 500kb" 6.6K. Angle: half a megabyte
 * is generous — near-original photos, screenshots whose text must stay crisp,
 * and images for websites, where 500KB is a ceiling rather than a target.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "en",
  name: "Compress Image to 500KB",
  tagline:
    "Compress photos, screenshots and scans to under 500KB with no visible loss — for upload portals, email, marketplaces and websites. Whole batches at once, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "500KB — half a megabyte — is the upload limit on many job and education portals, online stores, forums and school systems, and a sensible ceiling for images on a website. It is a generous budget: most photos come back looking exactly like the original, just a fraction of the size. Add one image or a hundred, and each is saved as a JPG under 500KB at the highest quality that fits.",

  sections: [
    {
      heading: "Half a megabyte is plenty",
      id: "plenty",
      body: [
        "A 12-megapixel phone photo is typically 3–5MB. Under 500KB it usually keeps about 2000 × 1500 pixels or more, at a quality where you cannot see the difference on a phone or laptop screen. Fine textures such as grass, gravel or a patterned shirt are the hardest to compress; the tool reduces dimensions for those only when it has to.",
        "Because the limit is generous, there is no need to crop or prepare the photo first. Add it as it is.",
      ],
    },
    {
      heading: "Screenshots and text stay crisp",
      id: "screenshots",
      body: [
        "Screenshots are often saved as PNG, which can run to several megabytes for a full screen. Converted to JPG under 500KB, the text stays sharp at full size, so a screenshot of a receipt, a chat or an error message is still easy to read.",
        "For screenshots that are mostly flat colour with text — a document or a settings page — WEBP keeps text even cleaner at the same size. Choose WEBP in the format setting if the place you are uploading accepts it.",
      ],
    },
    {
      heading: "Images for websites and online stores",
      id: "websites",
      body: [
        "Every image on a web page has to be downloaded before it appears, so large photos slow pages down, especially on mobile data. 500KB is a reasonable maximum for a large banner or product photo; smaller images, such as thumbnails, should be much less.",
        "Product photos for online marketplaces are a good fit for this limit too: they keep enough detail for customers to zoom in on texture and labels, while uploading quickly.",
      ],
    },
    {
      heading: "Many files at once",
      id: "batch",
      body: [
        "Add a whole folder — a set of product photos, the pictures for a listing, an album to send by email — and every image is compressed to under 500KB in one go. Download them one by one or together as a ZIP. Images that are already JPGs under 500KB are left untouched.",
      ],
    },
    {
      heading: "Sending photos by email",
      id: "email",
      body: [
        "Most email services cap attachments at around 20–25MB per message, and attachments grow by about a third when they are sent, because email encodes them as text. Ten phone photos at 4MB each will not go through; the same ten at 500KB each make a message of roughly 7MB that any service accepts.",
        "The recipient still gets photos big enough to view full-screen and to print at postcard size, without waiting for a huge download.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 500KB",
  steps: [
    { title: "Add your images", description: "Select or drop one or many photos, screenshots or scans — JPG, PNG or WEBP." },
    { title: "Compress to under 500KB", description: "The 500KB limit is already set; choose JPG or WEBP." },
    { title: "Download", description: "Download each image, or all of them as a ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "No visible loss", description: "With half a megabyte to spend, photos keep their full look and most of their resolution." },
    { icon: "screenshot_monitor", title: "Sharp screenshots", description: "Large PNG screenshots become small JPG or WEBP files with readable text." },
    { icon: "lock", title: "Private", description: "Everything happens in your browser; your images are never uploaded." },
  ],

  faqs: [
    { q: "How do I compress an image to 500KB?", a: "Add it here and press Compress — the 500KB limit is already set. The result is a JPG under 500KB at the best quality that fits." },
    { q: "Will I see any difference at 500KB?", a: "Usually not. For most photos, 500KB is enough to look identical to the original on a phone or computer screen." },
    { q: "Is 500KB a good size for website images?", a: "As a maximum for large banners and product photos, yes. Smaller images such as thumbnails should be well under 100KB." },
    { q: "Should I choose JPG or WEBP?", a: "JPG works everywhere. WEBP gives slightly better quality at the same size and suits websites, but some forms and older apps do not accept it." },
    { q: "Is 500KB the same as 0.5MB?", a: "Yes. 500KB is 500,000 bytes, or half a megabyte. The file is also under the limit for sites that count 1KB as 1,024 bytes." },
    { q: "Will small text in a screenshot stay readable?", a: "Yes. At 500KB a full-screen screenshot keeps its full resolution in almost every case, so text is as sharp as the original." },
    { q: "Can I compress 50 photos to 500KB each at once?", a: "Yes. Add them all together; each comes back under 500KB and you can download them as one ZIP file." },
    { q: "How many 500KB photos can I send in one email?", a: "With a typical 25MB attachment limit, about 35–40 — attachments grow by roughly a third in transit. For more, send several emails or share a link instead." },
  ],

  security:
    "Photos, screenshots and scans are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
