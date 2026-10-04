import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /unblur-image (variant of upscale-image, Real-ESRGAN, 2×).
 * Demand 2026-10-04: "unblur image" India 74K (KD 43), US 33.1K (KD 40);
 * "unpixelate image" 2.4K US, "depixelate image" 1K. The page must be honest:
 * the model sharpens soft, compressed and slightly blurred photos well, and
 * cannot recover motion blur or a badly missed focus. Not shipped in /id,
 * where /id/hd-foto already carries "memperjelas foto".
 */
const content: ToolPageContent = {
  toolId: "unblur-image",
  locale: "en",
  name: "Unblur Image",
  tagline:
    "Sharpen soft, slightly blurry or pixelated photos with AI. The model enlarges the image and rebuilds crisp edges and texture — best on mild blur and compression mush. Free, no watermark.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "Most photos people call \"blurry\" are actually soft: a little out of focus, shot in low light, shrunk and re-saved by a chat app, or enlarged from a small original. Those are exactly the faults an AI image-restoration model is trained on. Upload the photo and the model enlarges it while redrawing edges, texture and fine lines, which removes most of the softness and blockiness at the same time. It cannot rescue every image — the sections below explain which kinds of blur it fixes and which it can't.",

  sections: [
    {
      heading: "The kinds of blur this fixes",
      id: "fixable",
      body: [
        "Softness from slight focus misses, from cheap lenses and small sensors, and from noise reduction in low light. Pixelation from photos that were saved small and later enlarged. Blockiness and smearing from heavy JPG compression, which is what happens to a photo every time it is forwarded through a messaging app.",
        "In all of these the shapes are still there, just not crisply drawn. The model recognises the shapes — an eye, a letter, a leaf, a seam — and renders them sharply at a larger size, which to the eye reads as an unblurred photo.",
      ],
    },
    {
      heading: "The kinds it cannot fix",
      id: "limits",
      body: [
        "Strong motion blur, where the camera or the subject moved and every edge is smeared into a streak, and photos that are badly out of focus, where details have melted into blobs. In those the information is genuinely gone, and any tool claiming to restore it is inventing something.",
        "This model will still make such photos cleaner, but it will not turn an unreadable face or number plate into a readable one, and it is not designed to. If a result looks plausible but wrong — a face slightly different from the person's — treat it as illustration, not evidence.",
      ],
    },
    {
      heading: "Getting the best result",
      id: "tips",
      body: [
        "Always start from the best copy you have: the original from the camera roll beats a screenshot, which beats a forwarded copy. Crop away what you don't need before uploading so the model's attention goes on the part that matters.",
        "Use 2× for most photos. Larger factors help small images, but on an image that is already big they mostly add pixels, not clarity. Compare the result with the slider before downloading; on faces, look at the eyes and hairline first.",
      ],
    },
    {
      heading: "Old and scanned photos",
      id: "old-photos",
      body: [
        "Scans of old prints and photos copied from a printed album are usually soft and grainy rather than truly blurred, which suits the model well: it removes much of the grain and redraws contours at a larger size.",
        "It does not repair scratches, folds, stains or faded colour — those are damage to the print, not missing resolution, and need retouching. Scan at the highest resolution your scanner offers, then sharpen here at 2×.",
      ],
    },
  ],

  howToTitle: "How to unblur an image",
  steps: [
    { title: "Upload the blurry photo", description: "Select a JPG, PNG or WEBP — the original file, not a screenshot, if you have it." },
    { title: "Choose the scale", description: "2× suits most photos; use 3× or 4× when the image is very small." },
    { title: "Sharpen & download", description: "Compare before and after with the slider, then download the sharpened image." },
  ],

  features: [
    { icon: "auto_fix_high", title: "AI restoration", description: "Rebuilds edges, texture and lettering while enlarging, instead of blending pixels." },
    { icon: "visibility", title: "Honest before/after", description: "A comparison slider shows exactly what changed, so you can judge the result yourself." },
    { icon: "verified_user", title: "Free, no watermark", description: "No account and nothing stamped on the result." },
  ],

  faqs: [
    { q: "How do I unblur an image online?", a: "Upload the photo, keep the 2× scale (or raise it for a very small image) and press the button. Compare the result with the slider and download it if it looks right." },
    { q: "Can it fix a photo where the camera moved?", a: "Only partly. Motion blur smears detail into streaks that no model can truly reverse; you will get a cleaner image, but not the sharp one the camera missed." },
    { q: "Can it make a blurry face recognisable?", a: "No, and it shouldn't. On a face that is already recognisable it sharpens well; on an unrecognisable one it would only be guessing, so the result must not be used to identify anyone." },
    { q: "Does it unpixelate images?", a: "Yes — a small, blocky image is one of its best cases. It enlarges the picture and replaces the visible pixel blocks with smooth edges and texture." },
    { q: "Why is the unblurred image bigger than my original?", a: "The model works by enlarging: it predicts detail at a higher resolution. If you need the original size back, resize the result down — it stays sharper than the original." },
    { q: "Will it fix blurry text in a photo of a document?", a: "Mildly soft text becomes clearly sharper. Text too blurred to read in the original usually stays unreadable." },
    { q: "Is my photo uploaded?", a: "Yes, to our server, because the model needs more memory than a browser has. The result is kept only briefly behind a private link and auto-deleted within an hour." },
  ],

  security:
    "Unblurring runs on our server with the open-source Real-ESRGAN engine. Your photo travels over an encrypted connection, the result is stored only briefly behind a private download link and auto-deleted within an hour, and nothing is shared or reused.",
};

export default content;
