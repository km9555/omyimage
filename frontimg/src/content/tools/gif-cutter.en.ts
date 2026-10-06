import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-cutter. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "en",
  name: "GIF Cutter",
  tagline:
    "Trim an animated GIF to the part you want: pick the first and last frame to keep, or cut a section out of the middle. Free, in your browser.",
  category: { id: "edit", label: "Edit" },

  intro:
    "GIFs saved from videos and screen recordings rarely start and end in the right place. There is a second of nothing before the action, a fade at the end, or a long middle you would rather skip. oMyImage's GIF Cutter lets you trim it frame by frame: move the start and end sliders, check the first and last frame of your selection in the thumbnails, and choose whether to keep that part or remove it. The result plays next to the original, with its new length and size, before you download it.",

  sections: [
    {
      heading: "Keep a part or remove a part",
      id: "modes",
      body: [
        "Keep it saves only the frames from the start slider to the end slider — the usual trim, for cutting the dead time off both ends or pulling one moment out of a long GIF.",
        "Remove it does the opposite: the frames between the sliders are deleted and the rest is joined together. Use it to cut a pause, a mistake or an unwanted scene out of the middle while keeping the beginning and the end.",
      ],
    },
    {
      heading: "Finding the right frames",
      id: "frames",
      body: [
        "Each slider shows its frame number and the moment in the animation where that frame starts, in seconds. The two thumbnails show the first and last frame of the selection, so you can stop exactly where an action starts or a caption finishes, without guessing from a timeline.",
        "Frames are the smallest step a GIF has. A GIF from a 10 frames-per-second video has one frame every tenth of a second; one with uneven timing may hold a frame for longer, which the times beside the sliders reveal.",
      ],
    },
    {
      heading: "What stays the same",
      id: "kept",
      body: [
        "The frames you keep are not changed, and each keeps its own duration, so the remaining animation plays exactly as it did. The GIF still loops. When its colours fit in one palette — as they do for most GIFs — those colours are written back exactly; GIFs that use a palette per frame get one shared palette of 256 colours chosen from all frames, which is rarely visible.",
      ],
    },
    {
      heading: "Shorter means smaller",
      id: "size",
      body: [
        "Every frame removed is data removed, so trimming is one of the most effective ways to shrink a GIF without touching its quality. Cutting a six-second GIF to its best two seconds typically takes away about two thirds of the file.",
        "If it is still too large for the place you are sending it, crop away the edges with the GIF Cropper or reduce colours with the GIF Compressor.",
      ],
    },
    {
      heading: "Typical trims",
      id: "uses",
      body: [
        "Cut the empty seconds a screen recorder adds before you start and after you stop. Keep only the punchline of a reaction GIF. Remove the moment someone walks through the shot. Split a long GIF into short pieces by saving several trims of the same file one after another.",
        "To trim a video before it becomes a GIF, Video to GIF has its own start and end controls, which keeps the file small from the beginning.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded, trimmed and encoded entirely in your browser. It is never uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to cut a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Set the start and end", description: "Move the sliders to the first and last frame, then choose to keep or remove that part." },
    { title: "Cut and download", description: "Click Cut GIF, compare the result with the original and download it." },
  ],

  features: [
    { icon: "burst_mode", title: "Frame-accurate", description: "Start and end on exact frames, with times and thumbnails." },
    { icon: "delete", title: "Keep or remove", description: "Trim the ends, or cut a section out of the middle." },
    { icon: "lock", title: "Nothing uploaded", description: "Cut entirely in your browser." },
  ],

  faqs: [
    { q: "How do I trim a GIF?", a: "Add the GIF, move the Start and End sliders to the frames you want, keep Keep it selected and click Cut GIF." },
    { q: "Can I remove frames from the middle of a GIF?", a: "Yes. Select the part to delete and choose Remove it; the frames before and after are joined." },
    { q: "Does cutting change the speed?", a: "No. Every frame you keep has its original duration." },
    { q: "Does it lower the quality?", a: "No. The kept frames are not changed, and the original colours are reused whenever they fit in one palette." },
    { q: "How much smaller will my GIF be?", a: "Roughly in proportion to the frames you remove — cutting half the frames saves about half the file." },
    { q: "Can I cut a GIF by time instead of frames?", a: "Each slider shows the time where its frame starts, so you can aim for a second; the cut itself always falls between frames." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent." },
    { q: "Will the trimmed GIF still loop?", a: "Yes. It loops just like the original." },
    { q: "Can I split a GIF into several parts?", a: "Yes — cut and download one part, then move the sliders and cut the next from the same GIF." },
    { q: "Is my GIF uploaded?", a: "No. The GIF is cut entirely in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is cut entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
