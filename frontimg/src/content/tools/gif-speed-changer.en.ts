import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-speed-changer. The page <title> and meta description
 * stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "en",
  name: "GIF Speed Changer",
  tagline:
    "Speed up or slow down an animated GIF, or give every frame the same delay. Usually only the timing changes — every pixel stays as it was. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "A GIF that crawls makes a joke land late; one that races makes a tutorial impossible to follow. oMyImage's GIF Speed Changer fixes the pace without re-making the animation. Pick a speed such as 2× or 0.5×, or type your own, and see the new length before you save. When only the timing needs to change — which is most of the time — the tool rewrites the delay of each frame and leaves the pictures untouched, so the GIF keeps its exact quality and size.",

  sections: [
    {
      heading: "How GIF speed works",
      id: "how",
      body: [
        "A GIF has no frame rate. Each frame carries its own delay, stored in hundredths of a second, and a player shows the frame for that long before moving on. That is why one GIF can pause on a punchline and rush through the rest, and why changing the speed means changing every delay.",
        "Speeding up by 2× halves every delay, and slowing down to 0.5× doubles them, so the rhythm of the original — including its pauses — is kept, just faster or slower.",
      ],
    },
    {
      heading: "By speed or by frame delay",
      id: "modes",
      body: [
        "By speed scales the GIF's own timing. The buttons cover the common choices from 0.25× to 3×, and the box accepts anything from 0.1× to 10×. The new length is shown before you click, so you know exactly how long the result will play.",
        "Frame delay gives every frame the same duration instead, in milliseconds: 100 ms is 10 frames a second, 50 ms is 20 and 40 ms is 25. Use it to make an uneven GIF play smoothly, or to match a GIF to a set pace. The frames-per-second figure updates as you type.",
      ],
    },
    {
      heading: "The browser speed limit",
      id: "limit",
      body: [
        "Browsers have an old rule: a GIF frame with a delay of 0.01 seconds or less is shown for 0.1 seconds. It protects against GIFs written with a delay of zero, but it means a GIF sped up too far plays slower, not faster. The quickest delay that plays as written is 0.02 seconds — 50 frames a second.",
        "This tool knows the rule. When a speed would push frames below 0.02 seconds, neighbouring frames are merged until each one is long enough, and the tool tells you how many. The GIF then plays at the speed you chose, with fewer frames — exactly what a player would show at that pace anyway.",
      ],
    },
    {
      heading: "Lossless when it can be",
      id: "lossless",
      body: [
        "When every frame is kept and only the delays change, the GIF is not re-encoded at all. The delay values inside the file are rewritten and everything else — the pixels, the palette, the compression — stays byte for byte the same. The file size is practically unchanged, and the work takes a moment even for long GIFs.",
        "Only when frames have to be merged is the GIF re-encoded. Even then its own colours are reused whenever they fit in one palette, so the frames look the same.",
      ],
    },
    {
      heading: "Good speeds",
      id: "tips",
      body: [
        "Reaction GIFs and memes often work better a little faster, around 1.25× to 1.5×. Tutorials and screen recordings may need slowing to 0.75× or 0.5× so viewers can follow each step. Slow motion of sport, pets and splashes looks best at 0.5× or below when the original has many frames; a GIF with only a few frames will look jerky when slowed, because nothing is added between them.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is read and rewritten entirely in your browser. It is never uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to change the speed of a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Set the speed", description: "Pick a speed such as 2× or 0.5×, or give every frame the same delay." },
    { title: "Apply and download", description: "Click Change speed, compare the result with the original and download it." },
  ],

  features: [
    { icon: "speed", title: "Faster or slower", description: "0.1× to 10×, or one delay for every frame." },
    { icon: "check", title: "Pixels untouched", description: "Only the timing is rewritten whenever every frame is kept." },
    { icon: "lock", title: "Nothing uploaded", description: "Changed entirely in your browser." },
  ],

  faqs: [
    { q: "How do I speed up a GIF?", a: "Add the GIF, choose a speed above 1×, such as 1.5× or 2×, and click Change speed." },
    { q: "How do I slow down a GIF?", a: "Choose a speed below 1×, such as 0.75× or 0.5×. Every frame is shown for longer." },
    { q: "Does changing the speed lower the quality?", a: "Usually not at all: when every frame is kept, only the delays are rewritten and the pixels stay exactly as they were." },
    { q: "Why can't my GIF go any faster?", a: "Browsers show frames shorter than 0.02 seconds as 0.1 seconds. Past that point the tool merges frames so the GIF still plays at the speed you chose." },
    { q: "What does frame delay mean?", a: "How long each frame is shown. 100 ms is 10 frames per second; 50 ms is 20." },
    { q: "Can I set the same delay for every frame?", a: "Yes. Choose Frame delay and enter it in milliseconds; the minimum is 20 ms." },
    { q: "Will the file size change?", a: "Hardly at all when only the timing changes. When frames are merged, the GIF gets smaller." },
    { q: "Does it keep transparency?", a: "Yes. Transparency is untouched." },
    { q: "Why does my slowed GIF look jerky?", a: "Slowing shows the same frames for longer; it can't invent frames in between. GIFs with many frames slow down most smoothly." },
    { q: "Is my GIF uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is retimed entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
