import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /reverse-gif. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "en",
  name: "Reverse GIF",
  tagline:
    "Play an animated GIF backwards, or turn it into a boomerang that plays forwards and then backwards in one seamless loop. Every frame keeps its timing. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Running an animation backwards is one of the oldest tricks there is: water jumps back into a glass, a dropped object flies up into a hand, a crowd walks in reverse. oMyImage's Reverse GIF flips the order of every frame in your GIF so it plays from the end to the start, and its Boomerang option plays the clip forwards and then backwards, so the loop has no visible jump. Add the GIF, pick a direction, compare the result with the original and download it.",

  sections: [
    {
      heading: "Reverse or boomerang",
      id: "modes",
      body: [
        "Reverse plays the frames from the last to the first. The GIF lasts exactly as long as before and has the same number of frames; only the order changes. It is the right choice for gags that depend on time running backwards and for GIFs that simply look better the other way round.",
        "Boomerang plays the frames forwards and then backwards. The first and last frames are not repeated at the turning points, so the motion bounces smoothly instead of pausing. This is the effect phone camera apps call boomerang, and it is the easiest way to make any short clip loop without a jump.",
      ],
    },
    {
      heading: "Timing",
      id: "timing",
      body: [
        "Every frame keeps its own duration. If the original holds on its final frame for two seconds and then restarts, the reversed GIF holds on that same frame for two seconds — now at the start. That is usually what you want, but if the pause feels odd at the beginning, the GIF Speed Changer can give every frame the same delay.",
        "A boomerang is almost twice as long as the original, because most frames play twice. Short clips of one to three seconds make the best boomerangs; longer ones can feel slow on the way back.",
      ],
    },
    {
      heading: "Why some GIFs loop with a jump",
      id: "loops",
      body: [
        "Most GIFs are cut from video, so the last frame rarely matches the first. When the GIF restarts, everything snaps back to where it began, and the eye catches the jump every few seconds. A boomerang never jumps: it reverses at each end, so the motion is continuous however many times it plays.",
        "That makes it a quick fix for product shots, waving hands, pouring drinks, hair in the wind and other short movements that would otherwise stutter on every loop.",
      ],
    },
    {
      heading: "Quality and file size",
      id: "quality",
      body: [
        "The frames themselves are not changed. When the GIF's colours fit in one palette — as they do for most GIFs — the same colours are written back exactly. GIFs made from video sometimes use a palette per frame, and those are given one shared 256-colour palette chosen from all frames, which is rarely visible.",
        "A reversed GIF is usually close to its original size. A boomerang is larger, since nearly every frame is stored twice; if that matters, the GIF Compressor can make it lighter afterwards.",
      ],
    },
    {
      heading: "Ideas",
      id: "ideas",
      body: [
        "Rewind a dive, a jump or a splash so it happens backwards. Run a building, a drawing or a recipe in reverse so it un-makes itself. Turn a product spin or a portrait clip into a boomerang that loops cleanly on a website or in a story. Reverse a reaction GIF to change its meaning completely.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded, reordered and encoded entirely in your browser. It is never uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to reverse a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Pick a direction", description: "Choose Reverse to play it backwards or Boomerang to play forwards and then backwards." },
    { title: "Reverse and download", description: "Click Reverse GIF, compare the result with the original and download it." },
  ],

  features: [
    { icon: "history", title: "Backwards or boomerang", description: "Play from the end, or bounce forwards and back in a seamless loop." },
    { icon: "visibility", title: "Side by side", description: "The original and the result play next to each other." },
    { icon: "lock", title: "Nothing uploaded", description: "Reversed entirely in your browser." },
  ],

  faqs: [
    { q: "How do I reverse a GIF?", a: "Add the GIF, keep Reverse selected and click Reverse GIF. The frames play from last to first." },
    { q: "What is a boomerang GIF?", a: "A GIF that plays forwards and then backwards, over and over, so the loop never jumps back to the start." },
    { q: "Does the reversed GIF keep its speed?", a: "Yes. Every frame keeps its own duration; only the order changes." },
    { q: "Why is my boomerang longer?", a: "Most frames play twice — once forwards and once backwards — so a boomerang lasts almost twice as long." },
    { q: "Does reversing lower the quality?", a: "No. The frames are not changed, and the original colours are reused whenever they fit in one palette." },
    { q: "Will the file get bigger?", a: "A reversed GIF stays about the same size. A boomerang is larger, because nearly every frame is stored twice." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent." },
    { q: "Can I reverse a video?", a: "Convert the clip with Video to GIF first, then reverse the GIF here." },
    { q: "Can I make a boomerang from a still image?", a: "No — a boomerang needs motion. A GIF with a single frame has nothing to reverse." },
    { q: "Is my GIF uploaded?", a: "No. The GIF is reversed entirely in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser. Long GIFs take a little longer on a phone." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is reversed entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
