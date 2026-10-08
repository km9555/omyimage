import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-to-mp4. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "en",
  name: "GIF to MP4",
  tagline:
    "Convert GIFs to MP4 video — usually far smaller, with smoother colours, and accepted on every platform that takes video. Repeat short GIFs, pick a background, download. Free, in your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "GIF is an old format: 256 colours per frame and compression that was never designed for motion. MP4 video does the same job in a fraction of the space and is what Instagram, TikTok and most apps actually want. oMyImage's GIF to MP4 converter turns your GIF into an H.264 MP4 using your browser's own video encoder, keeps the timing of every frame, and lets you repeat a short loop so the video lasts long enough to post.",

  sections: [
    {
      heading: "Why convert a GIF to MP4",
      id: "why",
      body: [
        "The main reason is size. Video compression predicts motion between frames and stores colours far more efficiently, so the same animation as MP4 is typically several times smaller than the GIF — sometimes ten times or more for detailed or photographic GIFs. The tool shows both sizes so you can see the difference for your file.",
        "The second reason is where it can go. Instagram and TikTok accept video uploads, not GIFs; many messaging apps and presentation tools handle MP4 better too. Even sites that show you a \"GIF\" often convert it to video behind the scenes.",
      ],
    },
    {
      heading: "Making it loop",
      id: "loop",
      body: [
        "A GIF loops by itself; an MP4 loops only if the player is told to. Most platforms play a short video once or loop it on their own terms, and very short clips can be rejected or feel abrupt. Choose 2×, 3× or 5× to repeat the animation inside the video, so a one-second GIF becomes a few seconds of smooth loop.",
        "The panel shows how long the video will be with your choice, so you can aim for the length your platform likes.",
      ],
    },
    {
      heading: "Transparency and background",
      id: "background",
      body: [
        "Standard MP4 video has no transparency, so transparent areas of the GIF are filled with a background colour — white by default. Pick the colour of the page or chat where the video will appear, and a transparent sticker or logo will blend in as if the background were not there.",
      ],
    },
    {
      heading: "Quality and timing",
      id: "quality",
      body: [
        "Every frame is encoded with its own duration, so GIFs with uneven timing — a pause on the last frame, for example — play exactly as before. The video is encoded at a generous bitrate for its size, which keeps flat colours and text clean.",
        "The MP4 has the GIF's dimensions; if the width or height is an odd number, one row or column of background is added, because H.264 video needs even sizes.",
      ],
    },
    {
      heading: "Browser support",
      id: "browsers",
      body: [
        "The conversion uses the WebCodecs video encoder built into modern browsers. Chrome, Edge and Safari can create MP4 (H.264); if your browser can't, the tool says so rather than producing a broken file. The resulting MP4 itself plays on practically every phone, computer and app.",
        "Nothing is uploaded: the GIF is decoded and the video is encoded on your device, which also means larger GIFs take a little longer on slower phones.",
      ],
    },
    {
      heading: "MP4 in slides and chats",
      id: "uses",
      body: [
        "PowerPoint, Keynote and Google Slides all insert MP4 video, and a short MP4 keeps a presentation far lighter than the same animation as a GIF. Set the video to play automatically and loop in the slide software, and it behaves just like the GIF did.",
        "In chats, an MP4 sends faster, uses less mobile data and survives being forwarded better, because apps re-compress large GIFs far more aggressively than short videos.",
      ],
    },
  ],

  howToTitle: "How to convert a GIF to MP4",
  steps: [
    { title: "Add your GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Choose repeat and background", description: "Repeat short GIFs so the video lasts a few seconds, and pick a background for transparency." },
    { title: "Convert and download", description: "Click Convert to MP4, watch the preview and download the video." },
  ],

  features: [
    { icon: "compress", title: "Much smaller files", description: "MP4 stores the same animation in a fraction of the GIF's size." },
    { icon: "speed", title: "Every frame's timing kept", description: "Uneven delays and pauses play exactly as in the GIF." },
    { icon: "lock", title: "Nothing uploaded", description: "Encoded by your own browser; the GIF never leaves your device." },
  ],

  faqs: [
    { q: "How do I convert a GIF to MP4?", a: "Add the GIF, choose how many times it should play and a background colour, then click Convert to MP4." },
    { q: "Is the MP4 smaller than the GIF?", a: "Usually much smaller — several times, often more for detailed GIFs. Both sizes are shown after converting." },
    { q: "Can I post the MP4 on Instagram or TikTok?", a: "Yes. Those apps take video rather than GIFs. Repeat short GIFs so the video lasts a few seconds." },
    { q: "Will the MP4 loop?", a: "Only if the player loops it. Use the repeat option to loop the animation inside the video." },
    { q: "What happens to transparency?", a: "MP4 has no transparency, so transparent areas get the background colour you choose." },
    { q: "Why doesn't it work in my browser?", a: "Your browser has no MP4 video encoder. Use Chrome, Edge or Safari." },
    { q: "Does the MP4 have sound?", a: "No. GIFs have no sound, so the video is silent." },
    { q: "Is the timing kept?", a: "Yes. Every frame keeps its own duration, including pauses." },
    { q: "Is my GIF uploaded?", a: "No. Conversion happens entirely in your browser." },
    { q: "Can I convert several GIFs at once?", a: "One at a time, so each GIF gets its own preview, repeat count and background." },
  ],

  security:
    "Your GIF is decoded and encoded as video by your own browser. Nothing is uploaded, stored or tracked.",
};

export default content;
