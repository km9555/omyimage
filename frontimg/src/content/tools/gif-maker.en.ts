import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-maker. Structure lives in ToolPageShell; the page
 * <title> and meta description stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "en",
  name: "GIF Maker",
  tagline:
    "Make an animated GIF from your images online — set the speed, order, size and looping with a live preview. Free, fast and 100% private in your browser.",
  category: { id: "edit", label: "Edit & Create" },

  intro:
    "Turn a series of images into a looping animation. oMyImage's GIF Maker builds an animated GIF from your photos right in your browser, with a live preview, adjustable speed, output size, looping and frame reordering. Create slideshows, reaction GIFs or simple animations and download instantly — nothing is uploaded, so your images stay private.",

  sections: [
    {
      heading: "Why GIF survives",
      id: "why",
      body: [
        "By any technical measure GIF should have disappeared decades ago. It dates from 1987, tops out at 256 colours per frame, compresses poorly, and a video file will do the same job at a fraction of the size with far better quality.",
        "It survives because of what it does not need. A GIF plays automatically, loops forever, needs no player, no controls and no user gesture, and works in places where video does not — chat applications, README files on code hosts, email in some clients, forums, and any system that treats it simply as an image.",
        "That is the whole calculation. If your destination will accept a video, use one. If it accepts images and nothing else, GIF is the only animated option you have.",
      ],
    },
    {
      heading: "The 256-colour limit",
      id: "colours",
      body: [
        "GIF stores a palette of at most 256 colours per frame, and every pixel must be one of them. For flat illustration, line art, screen recordings of interfaces and logo animations that is plenty — such images rarely contain more distinct colours than that anyway.",
        "Photographs are the hard case. A single frame of a real scene contains many thousands of distinct colours, so the encoder must choose 256 and approximate the rest. Dithering scatters pixels of neighbouring palette colours to fake the intermediate shades, which is why photographic GIFs have that speckled, slightly grainy look, most visible in skies and skin.",
        "Nothing can be done about this within the format. If banding is unacceptable, the answer is a video rather than a better GIF.",
      ],
    },
    {
      heading: "Controlling the file size",
      id: "size",
      body: [
        "Three things drive it, and dimensions dominate. Every frame stores the full picture, so halving the width and height quarters the data in each one — this is by far the most effective lever, and a 480-pixel-wide GIF looks perfectly good in a chat window or a README.",
        "Frame count is next. Fewer frames means a choppier animation but a proportionally smaller file, and many loops read fine at 8–12 frames per second rather than 24. Trimming the sequence to only the frames that carry the action is usually painless.",
        "Loop length is the third. A two-second loop that repeats forever is more watchable than a ten-second one, and it is five times smaller. Resisting the urge to include everything is the single best habit here.",
      ],
    },
    {
      heading: "Timing and rhythm",
      id: "timing",
      body: [
        "Frame delay decides the pace. Around 100 ms per frame gives roughly ten frames a second — smooth enough for most short loops without the file cost of a higher rate. Faster than about 60 ms and you are paying a lot of bytes for smoothness few people will notice.",
        "Slower delays turn the animation into a slideshow, which is often exactly what you want. A step-by-step tutorial, a set of product angles or a before-and-after comparison reads better at 500–800 ms per frame, giving the viewer time to take each one in before it changes.",
        "One practical touch: if the loop repeats forever, holding the final frame slightly longer gives the eye a moment to reset and stops the animation feeling frantic.",
      ],
    },
  ],

  howToTitle: "How to make an animated GIF",
  steps: [
    { title: "Upload frames", description: "Select two or more images, or drag and drop them into the workspace." },
    { title: "Set the timing", description: "Reorder the frames, set the speed globally or per frame, and choose size, fit, colours and looping — all with a live preview." },
    { title: "Create & download", description: "Click Create GIF — it builds in the browser, shows you the finished animation and its size, then downloads when you are happy with it." },
  ],

  features: [
    { icon: "gif_box", title: "Live animated preview", description: "Watch your animation play at the exact speed before you export — no guesswork." },
    { icon: "speed", title: "Full control", description: "Set the delay globally or per frame, reverse or boomerang the sequence, and choose output size, fit, colour count, looping and background." },
    { icon: "lock", title: "100% private", description: "The GIF is encoded entirely in your browser — your images are never uploaded." },
  ],

  faqs: [
    { q: "How many images can I use?", a: "At least two, and as many as you like — each image becomes one frame of the animation." },
    { q: "Can I control the speed?", a: "Yes, at two levels. The frame-delay slider sets the default time per frame, shown in both milliseconds and frames per second, and any individual frame can override it with its own delay — useful for holding on a title card or a final frame." },
    { q: "What if my images are different sizes?", a: "They are fitted into one common canvas sized to hold them all. Contain shows every frame whole and pads the difference with your background colour, Cover fills the canvas and crops the overflow, and Stretch forces an exact fit." },
    { q: "Can I edit an existing GIF?", a: "Yes. Drop a GIF in and it is split back into its frames, keeping each frame's original delay. From there you can reorder, delete, retime, reverse or boomerang it and export again." },
    { q: "Can the GIF have a transparent background?", a: "Yes — choose Transparent instead of a colour and the transparent areas of your source images stay transparent. GIF transparency is all-or-nothing per pixel, so soft anti-aliased edges become hard ones; if that matters, put a solid colour behind them instead." },
    { q: "Is it free and private?", a: "Yes. No sign-up and no watermark, and the GIF is built locally in your browser." },
    { q: "Why is my GIF so large?", a: "Because GIF is an old format with weak compression and no way to discard detail the way modern codecs do. Every frame adds to the file, and photographic content is the worst case. Cutting the dimensions, reducing the frame count and shortening the loop are the three levers that matter." },
    { q: "How do I make the file smaller?", a: "Reduce the pixel dimensions first — halving width and height cuts each frame to a quarter. Then use fewer frames, and keep the loop short. A 480-pixel-wide GIF of 15 frames is a sensible target; 800 pixels and 60 frames rarely is." },
    { q: "Why do the colours look banded?", a: "GIF allows at most 256 colours, so anything with gradients — skies, skin tones, shadows — has to be approximated, and the steps between the surviving colours show up as bands. This tool builds one shared palette for the whole animation, which keeps colours stable from frame to frame instead of letting them shift. Flat graphics and illustration handle the limit far better than photographs." },
    { q: "What frame delay should I use?", a: "Around 100 ms per frame gives roughly 10 frames per second, which reads as smooth for most short loops. Shorter delays look smoother but multiply the file size; longer ones read as a slideshow, which is often the right choice for a step-by-step sequence." },
    { q: "Can I make a GIF from a video?", a: "Not with this tool — it builds a GIF from still images you supply. You would need to extract frames from the video first. For a sequence of screenshots, product angles or a stop-motion set, this is exactly the right tool." },
    { q: "Should I use a GIF or a video?", a: "A video, almost always, if the platform supports one — a short MP4 is a fraction the size at far better quality. GIF wins only where autoplay-anywhere with no player matters: chat apps, README files, email in some clients, and old forums." },
  ],

  security:
    "Your images stay private. The GIF is encoded entirely in your browser with the open-source gifenc library — and an imported GIF is decoded there too, with gifuct-js. Nothing is uploaded to a server. No storage, no tracking of your files.",

  rating: { value: "4.8", count: "335" },
};

export default content;
