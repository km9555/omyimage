import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-compressor. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "en",
  name: "GIF Compressor",
  tagline:
    "Make animated GIFs smaller — fewer colours, smarter frames and optional resizing — while they keep playing. Compare before and after, then download. Free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Animated GIFs get big fast, and a big GIF is one that chats, forums and email refuse or load slowly. oMyImage's GIF Compressor rebuilds your GIF to take up less space: it stores only what changes between frames, can use fewer colours and skip tiny flickers, and can drop frames or shrink the size if you need more. Choose Light, Medium or Strong, see the original and the result side by side with their sizes, and download the one you like.",

  sections: [
    {
      heading: "Why GIFs are so large",
      id: "why",
      body: [
        "A GIF is a stack of pictures, each limited to 256 colours and compressed losslessly. The size grows with three things: how many pixels each frame has, how many frames there are, and how much changes from one frame to the next. A GIF made from a phone video can easily reach tens of megabytes for a few seconds of motion.",
        "Many GIFs are also saved inefficiently, with every frame stored in full even where nothing moved, or with a separate colour table on every frame. Re-encoding such a file cleanly often saves a large share before any quality is given up.",
      ],
    },
    {
      heading: "What each level does",
      id: "levels",
      body: [
        "Light rebuilds the GIF with one shared palette of 256 colours and stores only the pixels that change between frames. It changes the look the least and is the right first try for GIFs exported from older tools.",
        "Medium uses 128 colours and treats very small differences between frames as no change, which removes the shimmer that makes video GIFs so heavy. Strong uses 64 colours, ignores bigger flickers and keeps every second frame, adding the dropped frames' time to the ones kept so the speed stays the same.",
        "Every setting under the levels can be changed on its own: the number of colours, which frames to keep, and the size as a percentage of the original.",
      ],
    },
    {
      heading: "Getting the most out of it",
      id: "tips",
      body: [
        "The biggest saving is usually size. Halving the width and height leaves a quarter of the pixels, and the file shrinks roughly in step. If the GIF will be shown small anyway — in a chat bubble or a sidebar — choose 75% or 50%.",
        "Next come frames and colours. Simple animations, logos and screen recordings look the same with 64 or even 32 colours; photos and skin tones need 128 or more. Keeping every second frame halves the frame count and suits slower motion.",
      ],
    },
    {
      heading: "When the result isn't smaller",
      id: "already",
      body: [
        "A GIF that was already optimised by a dedicated tool may not get smaller on Light, because there is nothing left to remove without changing the picture. The tool tells you when that happens; try Strong, fewer colours or a smaller size, and compare the result before downloading.",
        "If the animation must stay sharp and small, consider converting it to MP4 instead. Video compresses motion far better than GIF and plays in every chat and on every phone.",
      ],
    },
    {
      heading: "Transparency and timing",
      id: "transparency",
      body: [
        "Transparent GIFs keep their transparency. Because GIF transparency is on or off with no soft edges, the frame-difference trick can't be used on them, so they shrink less than opaque GIFs; reducing colours and size still helps.",
        "Frame timing is kept exactly, including uneven delays, and the GIF loops as before. Delays that browsers already play as 0.1 seconds are written that way, so the speed you see doesn't change.",
      ],
    },
  ],

  howToTitle: "How to compress a GIF",
  steps: [
    { title: "Add your GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Choose a level", description: "Pick Light, Medium or Strong, or set colours, frames and size yourself." },
    { title: "Compress and compare", description: "Click Compress GIF, compare the sizes side by side and download." },
  ],

  features: [
    { icon: "compress", title: "Smaller GIFs", description: "Only changed pixels are stored, with optional fewer colours, frames or pixels." },
    { icon: "visibility", title: "Before and after", description: "Both versions play side by side with their file sizes." },
    { icon: "lock", title: "Nothing uploaded", description: "Your GIF is compressed entirely in your browser." },
  ],

  faqs: [
    { q: "How do I reduce the size of a GIF?", a: "Add the GIF, choose Medium or Strong and click Compress GIF. For bigger savings, also choose a smaller size such as 75% or 50%." },
    { q: "Will compressing remove frames?", a: "Not on Light or Medium. Strong keeps every second frame and adds the dropped frames' time to the kept ones, so the speed stays the same." },
    { q: "Why is my compressed GIF not smaller?", a: "It was probably optimised already. Try Strong, fewer colours or a smaller size." },
    { q: "Does it keep transparency?", a: "Yes. Transparent GIFs stay transparent, though they shrink less than opaque ones." },
    { q: "How many colours should I keep?", a: "64 is plenty for logos, cartoons and screen recordings; keep 128 or 256 for photos and faces." },
    { q: "What makes a GIF smaller fastest?", a: "Making it smaller in pixels. Half the width and height is about a quarter of the data." },
    { q: "Does the GIF still loop?", a: "Yes. Looping and frame timing are kept." },
    { q: "Should I use MP4 instead?", a: "For long or detailed animations, yes — MP4 is usually much smaller. Use GIF where video isn't accepted." },
    { q: "Is there a size limit?", a: "No fixed limit. Very large GIFs take longer, and progress is shown while it works." },
    { q: "Is my GIF uploaded?", a: "No. Compression happens entirely in your browser." },
  ],

  security:
    "Your GIF is decoded and re-encoded entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
