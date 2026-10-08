import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /video-to-gif. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "en",
  name: "Video to GIF",
  tagline:
    "Turn a clip from an MP4, WEBM or MOV video into a looping GIF — trim it, choose the frame rate and size, and see the result before you download. Free, and the video never leaves your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "A GIF plays everywhere a picture can go: chats, forums, emails, slides and comment boxes that will never autoplay a video. oMyImage's Video to GIF converter cuts the moment you want out of a video file and turns it into a looping GIF. Add an MP4, WEBM or MOV, set the start and end while you watch, pick how smooth and how large it should be, and download the GIF. The video is decoded by your own browser, so it is never uploaded anywhere.",

  sections: [
    {
      heading: "Picking the moment",
      id: "trim",
      body: [
        "GIFs work best as short loops: a reaction, a product turning, a step in a tutorial, the punchline of a clip. Play the video and press Start here and End here at the right moments, or type the times in seconds. The tool starts with the first five seconds selected, because most good GIFs are shorter than that.",
        "Every second matters for the file size. A GIF stores each frame as a picture, so a 10-second clip has twice the frames of a 5-second one — and roughly twice the size. Trimming to just the part people need to see is the single biggest saving.",
      ],
    },
    {
      heading: "Frame rate and width",
      id: "settings",
      body: [
        "Frames per second decides how smooth the motion looks. 10 fps is the classic GIF feel and keeps files small; 15 fps is noticeably smoother for fast movement; 20–25 fps approaches video but doubles or more the number of frames. For screen recordings and slow scenes, 5–10 fps is often plenty.",
        "Width is the other big lever. 480 pixels wide suits most chats and pages; 320 is good for reactions and small embeds; 640 or the original width is for tutorials where small text has to stay readable. Height follows the video's own shape, so nothing is stretched.",
      ],
    },
    {
      heading: "Quality and file size",
      id: "quality",
      body: [
        "GIF can show only 256 colours, chosen here once for the whole clip so colours stay steady from frame to frame. High keeps the full 256 and only ignores the faintest flicker; Medium uses 128 colours and freezes small changes between frames; Small file goes further, which suits simple scenes and screen recordings.",
        "Behind the scenes, every frame after the first stores only the pixels that changed, and the rest show through from the frame before. Video noise defeats that — so the lower settings treat tiny changes as no change, which is why they cut the size so much on real-world footage.",
      ],
    },
    {
      heading: "Which videos work",
      id: "formats",
      body: [
        "Any video your browser can play works: MP4 (H.264), WEBM (VP8, VP9 or AV1) and most MOV files. iPhone videos recorded in HEVC play only where the system supports HEVC, such as Safari on a Mac or iPhone; elsewhere you may see an error. Setting the iPhone camera to Most Compatible (Settings, Camera, Formats) records H.264, which works everywhere.",
        "Sound is dropped, because GIF has no audio. The aspect ratio, colours and timing of the clip are kept, and the GIF loops forever unless you untick Loop forever.",
      ],
    },
    {
      heading: "Long clips and memory",
      id: "limits",
      body: [
        "Frames are held in memory until the GIF is written, so very long or very large clips are limited. If the tool says the clip is too long for the size, shorten it, lower the frame rate or choose a smaller width; the panel shows how many frames you are about to make. For anything longer than half a minute, a GIF is rarely the right format — a short MP4 will be smaller and look better.",
      ],
    },
  ],

  howToTitle: "How to convert a video to GIF",
  steps: [
    { title: "Add a video", description: "Select an MP4, WEBM or MOV file from your computer or phone." },
    { title: "Trim and set up", description: "Mark the start and end, then choose the frame rate, width and quality." },
    { title: "Make the GIF", description: "Click Make GIF, check the preview, and download it." },
  ],

  features: [
    { icon: "gif_box", title: "Trim to the moment", description: "Set the start and end while the video plays, down to a tenth of a second." },
    { icon: "tune", title: "Size under control", description: "Frame rate, width and quality presets keep the GIF as small as it can be." },
    { icon: "lock", title: "Nothing uploaded", description: "Your video is decoded and converted by your own browser." },
  ],

  faqs: [
    { q: "How do I convert a video to GIF?", a: "Add the video, mark the start and end, choose the frame rate and width, and click Make GIF. Preview it and download." },
    { q: "Can I convert MP4 to GIF?", a: "Yes. MP4 with H.264 works in every browser; WEBM and MOV work too." },
    { q: "Why can't my iPhone video be opened?", a: "It is probably HEVC, which some browsers can't play. Use Safari, or set the iPhone camera to Most Compatible so it records H.264." },
    { q: "How long can the GIF be?", a: "Short is best — a few seconds. Longer clips are possible at lower frame rates and widths; the tool tells you when a clip is too long for the size." },
    { q: "How do I make the GIF smaller?", a: "Trim it, lower the frame rate to 10 fps, choose a smaller width such as 320 or 480, and pick Medium or Small file." },
    { q: "Does the GIF keep the sound?", a: "No. GIF has no audio, so sound is dropped." },
    { q: "Will the GIF loop?", a: "Yes, forever by default. Untick Loop forever to make it play once." },
    { q: "What frame rate should I use?", a: "10 fps for most clips, 15 fps for fast motion, 5–10 fps for screen recordings." },
    { q: "Is my video uploaded?", a: "No. It is decoded and turned into a GIF entirely in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser, for videos the phone's browser can play. Shorter clips are faster on phones." },
  ],

  security:
    "Your video is decoded by your own browser and the GIF is built on your device. Nothing is uploaded, stored or tracked.",
};

export default content;
