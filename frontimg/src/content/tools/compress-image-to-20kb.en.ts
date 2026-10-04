import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /compress-image-to-20kb (variant of compress-image,
 * preset targetKb 20). Demand (India, 2026-10-04): "resize image to 20kb"
 * 90.5K and "compress image to 20kb" 49.5K, both KD 0; "signature resize"
 * 74K. 20KB is above all the SIGNATURE limit, so that is this page's angle.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "en",
  name: "Compress Image to 20KB",
  tagline:
    "Compress a photo or a signature to under 20KB — the limit exam, recruitment and banking forms set for signatures and small photos. Sharp JPGs, many files at once, nothing uploaded.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Twenty kilobytes is the strictest limit most people ever meet, and it nearly always comes from an application form: a scanned signature, a left-thumb impression or a small photograph for an exam, a government recruitment drive or a bank. A phone photo of a signature is typically 2–4MB — two hundred times too big. This page brings any JPG, PNG or WEBP under 20KB in one step, keeping the image as sharp as that budget allows, and it works on your whole set of documents at once.",

  sections: [
    {
      heading: "Signatures are what 20KB is for",
      id: "signatures",
      body: [
        "Online application forms for competitive exams, railway and bank recruitment, university admissions and many government services ask for a scanned signature, usually between 10KB and 20KB and around 140 × 60 pixels, sometimes \"6cm × 2cm\". The limit is tiny because a signature needs very little information: dark strokes on a plain background.",
        "That also makes signatures the easiest images to compress well. A clean signature fits in 20KB at a high quality and at a size far larger than the form will display it. If yours comes out blurry or blotchy, the problem is almost always the source photo, not the compression — see the next section.",
      ],
    },
    {
      heading: "Getting a clean signature under 20KB",
      id: "clean-signature",
      body: [
        "Sign in black or dark blue ink on plain white paper, and photograph it in daylight without your shadow or the phone's flash on the page. Shadows and grey paper are the enemy here: a JPG spends most of its 20KB describing smooth background shading, not your strokes.",
        "Crop tightly around the signature before compressing — the Crop Image tool does this in a few seconds — so the file doesn't spend bytes on empty paper. A tightly cropped signature at roughly 400 × 150 pixels stays crisp well under 20KB; there is no benefit in keeping a 4000-pixel photo of a sheet of paper.",
      ],
    },
    {
      heading: "What fits in 20 kilobytes",
      id: "what-fits",
      body: [
        "For a signature on a white background, 20KB is generous. For a face photograph it is tight: expect something in the region of 300 × 400 pixels at a good quality, depending on how detailed the background is. A plain, light background behind the face gives the encoder far less to store than a busy room or a patterned wall.",
        "If a form asks for a 20KB photo and also states exact dimensions, resize to those dimensions first with the Resize Image tool and then compress here. Doing it in that order means the tool only has to lower the quality, not choose a size for you.",
      ],
    },
    {
      heading: "When a form says \"between 10KB and 20KB\"",
      id: "range",
      body: [
        "Some forms set a minimum as well as a maximum, so that a near-empty image is rejected. This page aims just under 20KB, and the result usually lands between 15KB and 20KB — inside a 10–20KB range.",
        "Very small or very simple images can come out below the minimum even at the highest quality, because there is simply not enough detail to fill 10KB. If that happens, scan or photograph the signature larger, or use a slightly larger crop, and compress again from that original.",
      ],
    },
  ],

  howToTitle: "How to compress an image to 20KB",
  steps: [
    { title: "Add the photo or signature", description: "Select or drop your JPG, PNG or WEBP — crop a signature tightly first for the cleanest result." },
    { title: "Compress to under 20KB", description: "The 20KB limit is already set; change it if your form allows a little more or a little less." },
    { title: "Download and upload", description: "Save the JPG and attach it to your form — it is guaranteed to be under 20KB." },
  ],

  features: [
    { icon: "draw", title: "Made for signatures", description: "Clean dark strokes on white compress beautifully — a tight crop stays crisp far under 20KB." },
    { icon: "verified_user", title: "Under 20KB, every time", description: "The file is kept under 20,000 bytes, so it passes forms that count a KB as 1,000 or as 1,024 bytes." },
    { icon: "lock", title: "Your signature stays private", description: "Everything runs in your browser. A scanned signature is the last thing you should upload to a stranger's server." },
  ],

  faqs: [
    { q: "How do I compress a signature to 20KB?", a: "Crop the signature tightly, add it here and press Compress — the 20KB limit is already set. Signing in dark ink on white paper and photographing it in daylight gives the sharpest result." },
    { q: "What pixel size should a 20KB signature be?", a: "Most forms ask for about 140 × 60 pixels, and a signature of that size is only a few kilobytes. If no size is given, a crop of around 400 × 150 pixels keeps it crisp and still lands well under 20KB." },
    { q: "My form needs a photo under 20KB — will the face still look clear?", a: "Yes, at the size the form displays it. Expect roughly 300 × 400 pixels at a good quality; a plain, light background behind the face leaves more of the 20KB for the face itself." },
    { q: "The form says 10KB to 20KB. Will this work?", a: "Usually the result lands between 15KB and 20KB. If a very small or very plain image comes out under 10KB, photograph or scan it larger and compress again." },
    { q: "Why does my compressed signature look grey or blotchy?", a: "The background of the original was grey or shadowed, and the JPG is spending its budget on that shading. Re-photograph on white paper in even light, or raise the contrast, and the strokes come out clean." },
    { q: "Can I compress my photo and signature together?", a: "Yes. Add both files; each one is brought under 20KB separately and you can download them as a ZIP. If the photo is allowed more (often 50KB), compress it on the 50KB page instead." },
    { q: "Is 20KB the same as 0.02MB?", a: "Yes, 20KB is 0.02MB in the decimal units forms use. The tool keeps the file under 20,000 bytes, which also satisfies forms that count 1,024 bytes per kilobyte." },
  ],

  security:
    "Signatures and identity photos never leave your device. The compression runs entirely in your browser — there is no upload, no copy on a server and nothing to delete afterwards.",
};

export default content;
