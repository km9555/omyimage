import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-1mb (variant of compress-image,
 * preset targetKb 1000). Demand (2026-10-04): Indonesia "kompres foto 1 mb"
 * 40.5K (KD 0) — the biggest single KB query there; India "compress image to
 * 1mb" 6.6K. Angle: at 1MB a phone photo usually keeps its FULL resolution,
 * so this is the "make it fit without making it smaller" page.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "en",
  name: "Compress Image to 1MB",
  tagline:
    "Compress phone photos to under 1MB, usually without losing a single pixel of resolution. For portal uploads, email and chat apps — free, in batches, and private in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "A photo from a modern phone weighs 3–8MB, and plenty of places refuse anything over 1MB: online portals and learning platforms, forums and classifieds, support tickets, older email systems. Unlike the strict 20KB or 50KB limits, 1MB is big enough to keep a full-resolution photo — the file just has to be stored more efficiently. Add your photos, and each comes back as a JPG under 1MB, at full size whenever that fits and only slightly smaller when it doesn't.",

  sections: [
    {
      heading: "Why phone photos are 3–8MB",
      id: "why-big",
      body: [
        "Phone cameras save JPGs at a very high quality setting, often 90–95%, so that nothing is lost before you edit. At 12 megapixels and above, that quality costs several megabytes per photo, much of it spent on sensor noise and fine texture you cannot see at normal viewing size.",
        "Re-saving at a slightly lower quality removes most of that waste. For a typical 12-megapixel photo, getting under 1MB needs a quality around 75–85% — a difference you would struggle to spot side by side — and the full 4000 × 3000 pixels survive.",
      ],
    },
    {
      heading: "When 1MB is not enough for full size",
      id: "when-shrinks",
      body: [
        "Very detailed scenes — foliage, gravel, crowds, night photos full of noise — and 48- or 50-megapixel photos can stay over 1MB even at moderate quality. Then the tool reduces the dimensions a little as well, choosing the largest size that fits rather than a fixed preset, so a photo might come out at 3200 pixels wide instead of 4000.",
        "That is still far more resolution than any screen or upload preview shows. The result list tells you whenever an image was resized, so nothing changes without you knowing.",
      ],
    },
    {
      heading: "Where a 1MB limit shows up",
      id: "where",
      body: [
        "Online applications that accept full photos rather than ID shots, school and university learning platforms, government service portals, community forums, marketplace listings and helpdesk systems commonly cap attachments at 1MB or 2MB. Many email systems also struggle once a message passes 10–20MB, which is only three or four uncompressed phone photos.",
        "Compressing a batch to 1MB each before you attach them keeps everything inside those limits without visibly changing the pictures.",
      ],
    },
    {
      heading: "1MB, 1000KB or 1024KB?",
      id: "units",
      body: [
        "Some sites write the limit as 1MB, others as 1000KB or 1024KB. This tool keeps the file under 1,000,000 bytes, the strictest of those readings, so it passes all of them. Your computer may display the result as about 0.95MB — the small gap is the safety margin.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 1MB",
  steps: [
    { title: "Add your photos", description: "Select or drop JPG, PNG or WEBP photos straight from your phone or camera." },
    { title: "Compress to under 1MB", description: "The 1MB limit is already set — change it to 2MB or 500KB if your site needs something else." },
    { title: "Download", description: "Each photo comes back under 1MB, at full resolution whenever that fits." },
  ],

  features: [
    { icon: "photo_camera", title: "Keeps full resolution", description: "Most phone photos fit under 1MB without losing a pixel — only the wasted quality is removed." },
    { icon: "speed", title: "Fast batches", description: "Compress a whole album at once; each photo is handled separately and the set downloads as a ZIP." },
    { icon: "lock", title: "Private photos stay private", description: "Your pictures are processed in your browser and never uploaded to a server." },
  ],

  faqs: [
    { q: "How do I compress a photo to 1MB?", a: "Add the photo and press Compress — the 1MB limit is already set. The download is a JPG under 1MB at the best quality that fits." },
    { q: "Will a 1MB photo still print well?", a: "Yes, for normal print sizes. When a photo keeps its full resolution under 1MB, it prints like the original at postcard and A4 sizes." },
    { q: "How many pixels can a 1MB photo have?", a: "Usually the full 12 megapixels of a phone photo, about 4000 × 3000. Very detailed or very high-resolution photos may be reduced to around 3000 pixels wide to fit." },
    { q: "Can I compress a 10MB photo to 1MB?", a: "Yes. Large files are fine — the tool decodes them in your browser and finds the best quality and size under 1MB." },
    { q: "Does compressing to 1MB remove the location data?", a: "For every photo it re-saves, yes — a new JPG carries no EXIF metadata, GPS location included. A JPG that was already under 1MB is handed back untouched, metadata and all; to strip location from those, use the EXIF Remover." },
    { q: "Can I compress screenshots to 1MB?", a: "Yes. Screenshots are often PNG and can be surprisingly large; they are converted to JPG under 1MB, with any transparency filled in white." },
    { q: "Is 1MB the same as 1000KB?", a: "In the units most sites use, yes. The tool keeps files under 1,000,000 bytes, so they also pass a limit written as 1024KB." },
  ],

  security:
    "Your photos never leave your device. Compression to 1MB runs entirely in your browser — nothing is uploaded, stored or shared.",
};

export default content;
