import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /unblur-image (variant of upscale-image, Real-ESRGAN at 2×,
 * returned at the photo's own size by default — preset mode "unblur").
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
    "Sharpen soft, slightly blurry or pixelated photos with AI and get them back at the same size, only crisper. The model rebuilds edges and texture — best on mild blur and compression mush. Free, no watermark.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "Most photos people call \"blurry\" are actually soft: a little out of focus, shot in low light, shrunk and re-saved by a chat app, or enlarged from a small original. Those are exactly the faults an AI image-restoration model is trained on. Upload the photo and the model redraws it at twice the resolution — edges, texture and fine lines — then returns it at its original size, so it drops straight back into the place the old one was, with most of the softness and blockiness gone. It cannot rescue every image — the sections below explain which kinds of blur it fixes and which it can't.",

  sections: [
    {
      heading: "The kinds of blur this fixes",
      id: "fixable",
      body: [
        "Softness from slight focus misses, from cheap lenses and small sensors, and from noise reduction in low light. Pixelation from photos that were saved small and later enlarged. Blockiness and smearing from heavy JPG compression, which is what happens to a photo every time it is forwarded through a messaging app.",
        "In all of these the shapes are still there, just not crisply drawn. The model recognises the shapes — an eye, a letter, a leaf, a seam — and renders them sharply, which to the eye reads as an unblurred photo.",
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
        "Keep the original size for photos you will use as they are. Turn it off for a small or pixelated picture you want larger: you then get the sharpened result at twice the size. Compare the result with the slider before downloading; on faces, look at the eyes and hairline first.",
      ],
    },
    {
      heading: "Old and scanned photos",
      id: "old-photos",
      body: [
        "Scans of old prints and photos copied from a printed album are usually soft and grainy rather than truly blurred, which suits the model well: it removes much of the grain and redraws contours.",
        "It does not repair scratches, folds, stains or faded colour — those are damage to the print, not missing resolution, and need retouching. Scan at the highest resolution your scanner offers, then sharpen it here.",
      ],
    },
  ],

  howToTitle: "How to unblur an image",
  steps: [
    { title: "Upload the blurry photo", description: "Select a JPG, PNG or WEBP — the original file, not a screenshot, if you have it." },
    { title: "Keep the size, or enlarge", description: "The result keeps your photo's size; switch that off to get it twice as large." },
    { title: "Sharpen & download", description: "Compare before and after with the slider, then download the sharpened image." },
  ],

  features: [
    { icon: "auto_fix_high", title: "AI restoration", description: "Rebuilds edges, texture and lettering instead of blending pixels — at your photo's own size." },
    { icon: "visibility", title: "Honest before/after", description: "A comparison slider shows exactly what changed, so you can judge the result yourself." },
    { icon: "verified_user", title: "Free, no watermark", description: "No account and nothing stamped on the result." },
  ],

  faqs: [
    { q: "How do I unblur an image online?", a: "Upload the photo and press Unblur. Compare the result with the slider and download it if it looks right — it comes back at the same size as your photo." },
    { q: "Can it fix a photo where the camera moved?", a: "Only partly. Motion blur smears detail into streaks that no model can truly reverse; you will get a cleaner image, but not the sharp one the camera missed." },
    { q: "Can it make a blurry face recognisable?", a: "No, and it shouldn't. On a face that is already recognisable it sharpens well; on an unrecognisable one it would only be guessing, so the result must not be used to identify anyone." },
    { q: "Does it unpixelate images?", a: "Yes — a small, blocky image is one of its best cases. Turn off Keep the original size so the extra detail has room: the blocks are replaced with smooth edges and texture at twice the size." },
    { q: "Is the unblurred photo the same size as my original?", a: "Yes, by default. The model predicts detail at twice the resolution and the result is scaled back to your photo's size. Turn off Keep the original size to download it at 2× instead." },
    { q: "Will it fix blurry text in a photo of a document?", a: "Mildly soft text becomes clearly sharper. Text too blurred to read in the original usually stays unreadable." },
    { q: "Is my photo uploaded?", a: "Yes, to our server, because the model needs more memory than a browser has. The result is kept only briefly behind a private link and auto-deleted within an hour." },
  ],

  security:
    "Unblurring runs on our server with the open-source Real-ESRGAN engine. Your photo travels over an encrypted connection, the result is stored only briefly behind a private download link and auto-deleted within an hour, and nothing is shared or reused.",
};

export default content;
