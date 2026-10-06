import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /increase-image-size-in-kb (variant of compress-image,
 * preset mode "increase"). India: "increase image size in kb" 33.1K/mo (KD 3).
 * The honest version of a tool most sites fake: quality first, then pixels,
 * and padding only as a last resort — and the page says which happened.
 */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "en",
  name: "Increase Image Size in KB",
  tagline:
    "Make a photo or signature at least 10, 20, 50 KB or any size a form demands — by raising its quality and, only if needed, its pixel size. Set a maximum too for ranges like 20–50 KB. Free, in your browser, nothing uploaded.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Most image tools make files smaller. Some forms want the opposite: \"the photo must be between 20 KB and 50 KB\", and the 12 KB picture you already have is rejected for being too small. This page increases the file size in KB up to the minimum you set, and keeps it under a maximum if there is one. It does it the honest way — by storing the picture at higher quality, then with more pixels — so the result looks at least as good as what you started with.",

  sections: [
    {
      heading: "Why forms set a minimum file size",
      id: "why-minimum",
      body: [
        "A minimum is a rough quality check. A photo saved at 5 KB has usually been compressed so hard, or shrunk so small, that a face is no longer recognisable, and the form's designers chose a byte count as the simplest way to reject those. That is why the rule is often written as a range: at least 20 KB so the photo is clear, at most 50 KB so the server is not flooded.",
        "So the aim is not just a bigger number. It is a file that clears the minimum because it carries more detail, which is exactly what the form's rule was trying to ensure.",
      ],
    },
    {
      heading: "How the size goes up",
      id: "how",
      body: [
        "First the photo is saved again as a JPG at the highest quality setting. A file that had been compressed hard often doubles or triples this way, with nothing lost. If that is still short of the minimum, the image is enlarged step by step — by the square root of the shortfall, because file size grows with the number of pixels — up to four times its width and height.",
        "If a maximum is set and the enlarged file overshoots it, the quality is brought down just enough to land inside the range. The details are shown next to each file: how much bigger it became and, if it was enlarged, its new dimensions.",
      ],
    },
    {
      heading: "When padding is used",
      id: "padding",
      body: [
        "A very simple image, such as a small signature on white, can stay under a minimum even at full quality and four times its width and height. Only then does the tool add an empty block of data to the JPG until it reaches the minimum. Every image viewer ignores that block: the picture is exactly the same, and the file is simply heavier.",
        "The result list says when a file was padded. For signatures with a fixed pixel size, the Signature Resizer does the same thing after cleaning and trimming the signature first.",
      ],
    },
    {
      heading: "Ranges like 20–50 KB",
      id: "ranges",
      body: [
        "Enter the lower number as the minimum and the higher one as the maximum. Files that are already JPGs inside the range are handed back untouched, and everything else is brought into it. For the opposite problem — a file that is too big — use Compress Image or one of the compress-to-a-size pages instead.",
        "Forms disagree on whether a kilobyte is 1,000 or 1,024 bytes, so the tool takes the safe reading on each side: a minimum of 20 KB means at least 20,480 bytes, and a maximum of 50 KB means at most 50,000. The file passes either way.",
      ],
    },
  ],

  howToTitle: "How to increase the size of an image in KB",
  steps: [
    { title: "Add your photos", description: "Select or drop the images that are too small — JPG, PNG or WEBP." },
    { title: "Set the minimum (and a maximum)", description: "Type the minimum in KB, and the maximum too if the form gives a range." },
    { title: "Download", description: "Every file comes back as a JPG at least as big as the minimum." },
  ],

  features: [
    { icon: "high_quality", title: "Quality goes up, not down", description: "The file grows by storing the picture at higher quality first — nothing is degraded to add bytes." },
    { icon: "photo_size_select_large", title: "Ranges handled", description: "Set a minimum and a maximum, like 20–50 KB, and every file lands inside it." },
    { icon: "lock", title: "Nothing uploaded", description: "Your photos are processed in your browser and never leave your device." },
  ],

  faqs: [
    { q: "How do I increase the size of a photo in KB?", a: "Add the photo, type the minimum the form asks for — for example 20 KB — and press Increase. You get a JPG of at least that size." },
    { q: "Does increasing the KB improve the photo?", a: "Not beyond the original — detail that was lost cannot come back. It stores what is there at higher quality, so the result looks at least as good as the original, never worse." },
    { q: "My form says 20 KB to 50 KB. What do I enter?", a: "20 as the minimum and 50 as the maximum. The file is brought inside that range, and a JPG already inside it is kept as it is." },
    { q: "Will the dimensions change?", a: "Only if higher quality alone is not enough. Then the image is enlarged, up to four times, and the new dimensions are shown next to the file." },
    { q: "What does \"padded to reach the minimum\" mean?", a: "The image was too simple to reach the minimum even at top quality and four times the size, so empty data was added to the file. The picture is unchanged." },
    { q: "Can I increase the size of a PNG?", a: "Yes, but the result is a JPG, which is what forms with KB limits expect. Transparent areas are filled with the background colour you choose." },
    { q: "Is my photo uploaded?", a: "No. Everything happens in your browser." },
  ],

  security:
    "Photos and signatures are processed on your device, in your browser. Nothing is uploaded or stored anywhere.",
};

export default content;
