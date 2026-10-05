import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-2mb (variant of compress-image,
 * preset targetKb 2000). Demand (2026-10-04): India "compress image to 2mb"
 * 3.6K, Indonesia "kompres foto 2mb" 3.6K. Angle: WHY 2MB is everywhere (the
 * default PHP upload cap many sites inherit), full-resolution results, and
 * what to do when a site still refuses the file.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "en",
  name: "Compress Image to 2MB",
  tagline:
    "Compress large phone and camera photos to under 2MB — usually at full resolution — for website uploads, forms, forums and email. Fast, free and private in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Modern phones take photos of 3 to 12MB, and a lot of websites still stop at 2MB per file. This page compresses your photos to just under that line while keeping them as close to the original as possible: in most cases the full resolution survives and only the hidden excess is removed. Add one photo or a whole batch and each comes back as a JPG under 2MB.",

  sections: [
    {
      heading: "Why so many sites stop at 2MB",
      id: "why-2mb",
      body: [
        "PHP, the language behind a large share of websites, has a default upload limit of 2MB, and many sites never change it. That is why the same number turns up on contact forms, job portals, school systems, forums and small business sites — the limit often comes from the server's settings, not from anyone's decision about what a photo needs.",
        "The practical effect is the same: a file of 2.1MB is rejected, often with an unclear error. Compressing to just under 2MB fixes it without making the photo smaller to look at.",
      ],
    },
    {
      heading: "Full resolution, in most cases",
      id: "full-res",
      body: [
        "A 12-megapixel JPG at good quality takes roughly 2–4MB. To get under 2MB the tool first lowers the JPG quality a little — a change you will not notice at normal viewing sizes — and keeps every pixel. Only very large or very detailed photos, such as 48- or 200-megapixel shots, are also scaled down.",
        "If a photo is already a JPG under 2MB, it is returned untouched.",
      ],
    },
    {
      heading: "Large camera photos",
      id: "camera",
      body: [
        "Photos straight from a camera or a phone's high-resolution mode can be 15–30MB. If one has more pixels than your browser can hold at once — phone browsers have the lowest limits — it is opened at a reduced size first, then compressed to under 2MB. Either way the result is still several thousand pixels wide, far more than any website shows.",
        "PNG exports from editing apps behave the same way: a 20MB PNG photo becomes a JPG under 2MB with no visible change.",
      ],
    },
    {
      heading: "If a site still rejects the file",
      id: "rejected",
      body: [
        "Some sites count 2MB as 2,000,000 bytes and others as 2,097,152; the tool stays under 2,000,000, so both accept it. If the upload still fails, check the other rules: the allowed formats (some accept only JPG), a maximum width or height, or a limit on the total size of all files together rather than each one.",
      ],
    },
    {
      heading: "Is a 2MB photo still good for printing?",
      id: "print",
      body: [
        "Yes, for everyday prints. A 12-megapixel photo kept at full resolution under 2MB has about 4000 × 3000 pixels — enough for a sharp 10 × 15 cm print and for A4 at photo-lab quality. The slight drop in JPG quality is not visible on paper at normal viewing distance.",
        "For large prints or professional printing, keep and send the original file instead; compression is for uploading and sharing, not for archiving your photos.",
      ],
    },
  ],

  howToTitle: "How to compress a photo to 2MB",
  steps: [
    { title: "Add your photos", description: "Select or drop large photos — JPG, PNG or WEBP, one or many." },
    { title: "Compress to under 2MB", description: "The 2MB limit is already set; quality is lowered only as much as needed." },
    { title: "Download and upload", description: "Download the photos one by one or as a ZIP, ready to upload." },
  ],

  features: [
    { icon: "photo_camera", title: "Keeps the resolution", description: "Most photos keep every pixel; only very large ones are scaled down." },
    { icon: "upload_file", title: "Passes upload limits", description: "Every file ends up under 2,000,000 bytes — accepted however a site counts megabytes." },
    { icon: "lock", title: "Private", description: "Photos are compressed in your browser and never sent to a server." },
  ],

  faqs: [
    { q: "How do I compress a photo to 2MB?", a: "Add it here and press Compress — the 2MB limit is already set. You get a JPG under 2MB, usually at the original resolution." },
    { q: "Why do websites limit uploads to 2MB?", a: "Often because 2MB is PHP's default upload limit and many sites keep the default. It is a server setting, not a judgement about your photo." },
    { q: "Will my photo lose resolution?", a: "Usually not. The tool lowers JPG quality slightly before touching the pixel dimensions, and only very large photos are scaled down." },
    { q: "Can I compress a 20MB photo to 2MB?", a: "Yes. Large photos are handled in your browser and come back under 2MB, still several thousand pixels wide." },
    { q: "Is 2MB the same as 2000KB or 2048KB?", a: "Both are used. The tool keeps the file under 2,000,000 bytes, which is under the limit either way." },
    { q: "What happens if my photo is already under 2MB?", a: "If it is a JPG under 2MB, you get the original back unchanged." },
    { q: "Can I compress several photos for one upload form?", a: "Yes. Add them all; each comes back under 2MB. If the form limits the total of all files, choose a lower limit per photo instead." },
    { q: "Can I print a photo after compressing it to 2MB?", a: "Yes. Most photos keep their full resolution, which is plenty for 10 × 15 cm and A4 prints. For posters or professional work, print from the original." },
  ],

  security:
    "Photos are compressed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
