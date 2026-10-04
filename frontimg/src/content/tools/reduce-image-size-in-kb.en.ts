import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /reduce-image-size-in-kb — the hub of the KB family
 * (variant of compress-image with the target-size mode open and no limit
 * pre-filled). Head terms (India, 2026-10-04): "photo resizer in kb" 450K,
 * "reduce image size in kb" 135K (KD 9), "image size reducer in kb" 135K.
 * This page owns the GENERAL question — any limit, what a KB limit means —
 * and leaves each common limit to its own page.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "en",
  name: "Reduce Image Size in KB",
  tagline:
    "A photo resizer in KB: type any limit — 20KB, 50KB, 100KB or 1MB — and get the sharpest JPG that fits under it. Batch support, free, and processed in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Upload forms don't ask for a quality setting, they ask for a number: \"photo under 50KB\", \"signature 10–20KB\", \"maximum file size 1MB\". This tool works the same way. Add your images, type the limit in KB or MB, and each one comes back under it — at the highest quality that fits, and only made smaller in pixels if quality alone cannot get it there. It works on JPG, PNG and WEBP, handles a whole batch at once, and never uploads your photos anywhere.",

  sections: [
    {
      heading: "Set the size, not the quality",
      id: "size-first",
      body: [
        "The usual way to shrink a photo for a form is trial and error: lower a quality slider, save, check the file size in your file manager, and try again. Every round costs a re-compression, and every re-compression of an already-compressed JPG throws away a little more detail.",
        "Here you state the result you need instead. The tool encodes the image several times in the background, homing in on the highest quality whose file is still under your limit, and hands you that one. A noisy 12-megapixel phone photo and a clean screenshot need completely different settings to reach 100KB — you don't have to know which, because the search finds it for each image separately.",
      ],
    },
    {
      heading: "What \"KB\" means on a form",
      id: "kb-meaning",
      body: [
        "A kilobyte is either 1,000 bytes or 1,024 bytes, depending on who is counting. Windows Explorer reports sizes in units of 1,024; most phones and Macs, and many web forms, use 1,000. The difference is only 2.4%, but it is enough to get a 50.5KB file rejected by a form that allows \"50KB\".",
        "This tool sidesteps the argument by aiming under the stricter reading: a limit of 50KB means under 50,000 bytes. That file passes a form that counts 1,000 bytes to the kilobyte and also one that counts 1,024. Your file manager may show the result as 48 or 49KB — that small margin is deliberate.",
      ],
    },
    {
      heading: "Reducing KB versus reducing pixels",
      id: "kb-vs-pixels",
      body: [
        "File size and image dimensions are different things, and forms sometimes ask for both: \"200 × 230 pixels, under 50KB\". Pixels decide how big the picture is; kilobytes decide how much storage it takes. A 4000-pixel photo can be squeezed into 100KB, and a 400-pixel one can weigh 300KB if it is saved as an uncompressed PNG.",
        "When a form gives exact pixel dimensions, resize to those first with the Resize Image tool, then bring the file under the KB limit here. When it gives only a KB limit, leave the dimensions alone — this tool reduces them by itself, and only as far as it has to.",
      ],
    },
    {
      heading: "Common limits and where they come from",
      id: "common-limits",
      body: [
        "Signatures and thumb impressions on exam and recruitment forms are usually capped at 10–20KB. Passport-style photos on the same forms are typically 20–50KB, sometimes 100KB. Admission portals, job sites and visa or ID applications often allow 100–300KB for a photo or a scanned document, while general uploads — assignments, support tickets, listings — tend to cap images at 1–2MB.",
        "Each of those limits has its own page with advice for that size, linked above. This page is for everything else: any number you type, in KB or MB.",
      ],
    },
  ],

  howToTitle: "How to reduce image size in KB",
  steps: [
    { title: "Add your images", description: "Select or drop one or many JPG, PNG or WEBP files." },
    { title: "Type the limit", description: "Enter the maximum size in KB or MB, or tap a common one such as 50KB or 100KB." },
    { title: "Compress & download", description: "Every image is saved under the limit; download one file or all of them as a ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Any size you need", description: "Type any limit in KB or MB — not just a list of presets — and every image is brought under it." },
    { icon: "high_quality", title: "Best quality that fits", description: "The tool searches for the highest quality under your limit and only reduces pixels when it must." },
    { icon: "lock", title: "Nothing is uploaded", description: "Compression runs on your device, so ID photos, signatures and documents never leave it." },
  ],

  faqs: [
    { q: "How do I reduce the size of a photo in KB?", a: "Add the photo, type the size you need in KB (or tap one of the common sizes), and press Compress. The download is guaranteed to be under that number, at the best quality that fits." },
    { q: "Is a photo resizer in KB the same as an image compressor?", a: "For most purposes, yes. Resizing \"in KB\" means reducing the file size, which is what compression does; this tool also reduces the pixel dimensions when compression alone cannot reach the limit." },
    { q: "Why does my file show 49KB when I asked for 50KB?", a: "Because the tool keeps under 50,000 bytes, which your computer may count as about 48.8 kilobytes of 1,024 bytes each. The margin guarantees the file passes both ways a form might count a kilobyte." },
    { q: "Can I type an exact size like 37KB?", a: "Yes. Any whole or decimal number works, in KB or MB. The common sizes are only shortcuts." },
    { q: "Will reducing the size in KB change the dimensions?", a: "Only when it has to. The tool lowers quality first, and reduces the width and height only if even a low quality would still be over your limit." },
    { q: "Which format should I choose?", a: "JPG, unless you know the site accepts WEBP. Almost every upload form accepts JPG; WEBP reaches the same size with slightly better quality but is still rejected by some older portals." },
    { q: "What happens to a transparent PNG?", a: "JPG cannot store transparency, so transparent areas are filled with the background colour you choose — white by default, which is what most forms expect." },
    { q: "Can I reduce many photos to the same size at once?", a: "Yes. Add as many as you like; each is compressed separately to the same limit, and you can download them together as a ZIP." },
  ],

  security:
    "Your images stay on your device. Reducing the size in KB happens entirely in your browser — nothing is uploaded, stored or seen by anyone else, which matters when the photo is an ID picture or a signature.",
};

export default content;
