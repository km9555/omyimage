import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-50kb (variant of compress-image,
 * preset targetKb 50). Demand (India, 2026-10-04): "compress image to 50kb"
 * 90.5K (KD 0), "resize image to 50kb" 49.5K, "photo 50kb" 5.4K. 50KB is the
 * typical PHOTOGRAPH limit on exam and government forms — this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "en",
  name: "Compress Image to 50KB",
  tagline:
    "Compress any photo to under 50KB — the photograph limit most exam, recruitment and government forms set. The sharpest JPG that fits, batch support, nothing uploaded.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "If an application form has ever told you \"photo size should be less than 50KB\", this page is for that moment. Add the photo straight from your phone — even a 5MB one — and it comes back as a JPG under 50KB, at the highest quality that fits. The tool lowers the quality first and reduces the pixel dimensions only if it has to, so faces stay clear at the size forms display them. It handles JPG, PNG and WEBP, and works on several photos at once.",

  sections: [
    {
      heading: "Why so many forms ask for 50KB",
      id: "why-50kb",
      body: [
        "Exam boards, public-sector recruitment portals, scholarship schemes and many government services collect photographs from millions of applicants. Capping each one at 20–50KB keeps their storage and page loads manageable, and a passport-style face photo needs nothing like a phone camera's resolution. 50KB is the most common ceiling for the photograph, with the signature usually capped lower at 10–20KB.",
        "The limit is checked automatically when you upload, which is why a 51KB file fails even though it looks identical to a 49KB one. This tool always stays under the number, with a small safety margin explained below.",
      ],
    },
    {
      heading: "50KB is a file size, not a picture size",
      id: "size-not-dimensions",
      body: [
        "Kilobytes measure storage, not width and height. The same 50KB can hold a 1200-pixel photo of a plain wall or a 400-pixel photo of a crowded street, because JPG spends bytes on detail, not on area. A typical passport-style portrait on a light background fits in 50KB at around 600 × 800 pixels and still looks sharp.",
        "Many forms state dimensions too — 200 × 230 pixels, 3.5 × 4.5cm, 413 × 531 pixels. Those are a separate requirement: resize to them first with the Resize Image tool, then compress here. At those small dimensions the photo will usually fit under 50KB at a very high quality.",
      ],
    },
    {
      heading: "Getting the best photo under 50KB",
      id: "best-photo",
      body: [
        "Start from the original photo, not a WhatsApp forward or a screenshot — every earlier compression adds blockiness that the next one has to preserve. Crop to head and shoulders before compressing, so the budget goes on the face rather than the room behind it.",
        "A plain, light background compresses far better than a patterned one, and even daylight on the face compresses better than harsh shadows. If the form requires a white background, take the photo against a white wall or use the Remove Background tool first.",
      ],
    },
    {
      heading: "Why an upload can still be rejected",
      id: "rejections",
      body: [
        "If a portal rejects a photo that is under 50KB, the reason is usually a different rule: the wrong dimensions, a minimum size (some forms also require at least 20KB), a file type other than JPG, or a file name with spaces or special characters. Check the instructions for each of these.",
        "The KB count itself is not the problem here. The tool keeps the file under 50,000 bytes, which passes whether the form counts a kilobyte as 1,000 or 1,024 bytes — so your computer may show it as 48 or 49KB.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 50KB",
  steps: [
    { title: "Add your photo", description: "Select or drop a JPG, PNG or WEBP — a full-size phone photo is fine." },
    { title: "Compress to under 50KB", description: "The 50KB limit is already set. Keep JPG as the format unless the form says otherwise." },
    { title: "Download", description: "Save the photo — it is under 50KB and ready to upload. Several photos download as a ZIP." },
  ],

  features: [
    { icon: "badge", title: "Ready for application forms", description: "A JPG under 50KB at the highest quality that fits — what exam and government portals expect." },
    { icon: "photo_size_select_large", title: "Shrinks pixels only if needed", description: "Quality is lowered first; the dimensions are reduced only when quality alone cannot reach 50KB." },
    { icon: "lock", title: "Private by design", description: "Your photo is processed in your browser and never uploaded — sensible for an ID photograph." },
  ],

  faqs: [
    { q: "How do I compress a photo to 50KB?", a: "Add the photo, keep the 50KB limit and JPG format, and press Compress. The file you download is guaranteed to be under 50KB." },
    { q: "Will a 50KB photo look blurry?", a: "Not at the size forms display it. A portrait fits in 50KB at around 600 × 800 pixels with good quality; blur usually comes from an already-compressed source, so start from the original." },
    { q: "What pixel size should a 50KB photo be?", a: "There is no fixed answer — it depends on how much detail the photo has. If the form specifies dimensions, resize to them first; if not, let the tool choose, and it keeps as many pixels as fit." },
    { q: "Can I turn a PNG or a screenshot into a 50KB JPG?", a: "Yes. PNG and WEBP files are converted to JPG on the way, and any transparent areas are filled with white, or another background colour you pick." },
    { q: "The form also needs 200 × 230 pixels. What do I do?", a: "Resize to 200 × 230 first with the Resize Image tool, then compress the result here. At that size the photo will be well under 50KB at a high quality." },
    { q: "Is 50KB the same as 0.05MB?", a: "Yes. The file is kept under 50,000 bytes, which is 0.05MB and also passes forms that count 1,024 bytes per kilobyte." },
    { q: "Can I compress several photos to 50KB in one go?", a: "Yes. Add them all — each one is brought under 50KB separately, and you can download them together as a ZIP." },
  ],

  security:
    "The photo never leaves your device. Compression to 50KB runs entirely in your browser, so there is nothing uploaded, nothing stored and nothing for anyone else to see.",
};

export default content;
