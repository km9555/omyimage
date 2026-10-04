import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /blur-background (variant of remove-background: rembg
 * cut-out composited over a blurred copy of the original, in the browser).
 * Demand 2026-10-04: India "blur background" 74K (KD 24), US 9.9K; Brazil
 * "desfocar fundo da foto" 2.9K. Distinct from /blur-image (blurs regions you
 * choose) — this one keeps the SUBJECT sharp automatically.
 */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "en",
  name: "Blur Background",
  tagline:
    "Blur the background of any photo and keep the person or product sharp — the portrait-mode look, added after the fact. AI finds the subject; you set the blur strength. Free, no watermark.",
  category: { id: "ai", label: "Image AI" },

  intro:
    "A blurred background is what makes a phone's portrait mode look like a photo from a big camera: the subject stands out, and a messy room, a crowd or a busy street turns into soft colour. This tool adds that look to a photo you have already taken. An AI model finds the person, pet or product, keeps them exactly as they were, and blurs everything behind them by as much as you choose. Adjusting the strength afterwards is instant, so you can find the right amount by eye.",

  sections: [
    {
      heading: "How it works",
      id: "how",
      body: [
        "First, a segmentation model on our server outlines the subject and returns it as a cut-out. Then your browser takes the original photo, blurs it, and lays the sharp cut-out back on top in exactly the same position.",
        "Because the blur is applied on your device, moving the strength slider does not send anything to the server again — the subject is found once, and you can try light, medium and heavy blur without using another AI run.",
      ],
    },
    {
      heading: "How much blur looks natural",
      id: "strength",
      body: [
        "A real camera blurs the background more the further it is from the subject. A light blur suits a portrait taken against a nearby wall; a strong blur suits a person standing in front of a distant landscape or a city street. If the blur is much stronger than the scene's depth suggests, the photo starts to look like a cut-out pasted on a painting.",
        "Start around the middle of the slider and compare with the before-and-after view. For product photos meant for a shop, a stronger blur often works because the goal is to remove distraction, not to look like a lens.",
      ],
    },
    {
      heading: "Blur background or blur part of an image?",
      id: "vs-blur-image",
      body: [
        "This page keeps the main subject sharp and softens everything else automatically. If you instead need to hide something specific — a licence plate, a face in the crowd, a screen with private information — use Blur Image or Blur Face, which blur only the areas you mark.",
      ],
    },
    {
      heading: "Photos that work best",
      id: "best",
      body: [
        "A clear main subject with some space around it: a person from the waist up, a pet, a car, a product on a table. Busy group photos, where it is unclear who the subject is, and fine details like a bicycle's spokes or loose hair against a similar-coloured background are harder for the model, and its edges may show.",
      ],
    },
    {
      heading: "Blurred backgrounds for product and listing photos",
      id: "products",
      body: [
        "Marketplaces and classifieds are full of photos taken on a kitchen table or a bedroom floor. Blurring the background keeps the real setting — which buyers often trust more than a pasted white background — while pulling attention to the item itself.",
        "Shoot the product from slightly above, with some distance between it and the wall behind, and use a stronger blur than you would for a portrait. If the platform requires a plain white background instead, use Change Background Color.",
      ],
    },
  ],

  howToTitle: "How to blur the background of a photo",
  steps: [
    { title: "Upload the photo", description: "Select a JPG, PNG or WEBP with a clear person, pet or object." },
    { title: "Blur the background", description: "Press Blur background — the AI finds the subject in a few seconds." },
    { title: "Adjust & download", description: "Drag the strength slider until it looks right, compare with the original, and download." },
  ],

  features: [
    { icon: "lens_blur", title: "Portrait-mode look", description: "The subject stays exactly as it was while everything behind it softens." },
    { icon: "tune", title: "Adjustable strength", description: "From a gentle softening to a heavy blur, changed instantly in your browser." },
    { icon: "verified_user", title: "No watermark", description: "Free to use with nothing stamped on your photo." },
  ],

  faqs: [
    { q: "How do I blur the background of a photo?", a: "Upload the photo and press Blur background. Once the AI has found the subject, drag the strength slider to the amount you like and download the result." },
    { q: "Will the person stay completely sharp?", a: "Yes — the subject is taken from your original photo untouched. Only the background is blurred." },
    { q: "Does changing the blur strength cost another AI run?", a: "No. The subject is found once on our server; the blur itself is applied in your browser, so you can adjust it as often as you like." },
    { q: "Can I blur the background of a product photo?", a: "Yes. A product on a table or a shelf works well, and a stronger blur is a quick way to remove a cluttered setting from a listing photo." },
    { q: "How is this different from Blur Image?", a: "Blur Image blurs the areas you choose. This tool chooses for you: it keeps the main subject sharp and blurs everything else." },
    { q: "What format is the result?", a: "A JPG, the same size as the cut-out the AI returns. It is meant to be shared, posted or printed, so it has no transparency." },
    { q: "Is my photo kept?", a: "Only briefly. The subject is found on our server, the result is kept behind a private link and auto-deleted within an hour, and the blur is applied on your device." },
  ],

  security:
    "Subject detection runs on our server with the open-source rembg engine; results are kept only briefly behind a private download link and auto-deleted within an hour. The blur is applied in your browser, and nothing is shared or reused.",
};

export default content;
