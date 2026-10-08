import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /add-text-to-gif. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "en",
  name: "Add Text to GIF",
  tagline:
    "Put a caption on an animated GIF — meme text, a subtitle or a label — on every frame or only some, and watch it play live before you save. Free, in your browser.",
  category: { id: "gif", label: "GIF" },

  intro:
    "A GIF says more with the right words on it: the punchline under a reaction, a subtitle on a silent clip, a label on each step of a tutorial. oMyImage's Add Text to GIF writes your text onto the animation itself. Type it, pick one of nine positions, a font, size and colours, and the preview plays the GIF with your caption in real time. When it looks right, add it to the GIF; the text becomes part of every frame you chose, so it shows wherever the GIF goes.",

  sections: [
    {
      heading: "Placing the text",
      id: "position",
      body: [
        "Choose any of nine spots — the corners, the middle of each edge or the centre. Long captions wrap onto new lines by themselves, and Enter starts a new line wherever you want one. The text keeps a small margin from the edge, so the outline never gets cut off.",
        "Size is set as a share of the GIF's shorter side, so the same setting looks right on a tall phone clip and on a wide banner. The preview shows the result at once, on the moving animation rather than a single frame.",
      ],
    },
    {
      heading: "Meme style or subtitle style",
      id: "style",
      body: [
        "The classic meme look is white Impact capitals with a thick black outline — readable on any background, light or dark. Pick Impact, tick Capital letters and leave the outline at its default. For subtitles, a plain sans-serif font with a box behind the text reads better and looks calmer.",
        "Text and outline colours can be anything you like. Set the outline thickness to zero for clean text without a border, or raise it for busy, bright backgrounds. The box uses the outline colour, partly transparent, so the frame still shows through.",
      ],
    },
    {
      heading: "Text on some frames only",
      id: "timing",
      body: [
        "Choose Some frames to show the text for part of the animation only. Two sliders set the first and last frame, with the time each one starts, so a punchline can appear exactly when the reaction lands, or a label can follow each step of a screen recording.",
        "To show several different captions, add one, download the GIF, open it again and add the next on another range of frames. Each pass keeps the earlier text.",
      ],
    },
    {
      heading: "Fonts",
      id: "fonts",
      body: [
        "The four fonts — Impact, sans-serif, serif and typewriter — come from your device, so nothing extra is downloaded. Impact is built into Windows and macOS; on phones that lack it, a bold sans-serif takes its place. Any language your device can display works, including Hindi, Russian and emoji.",
      ],
    },
    {
      heading: "Quality and file size",
      id: "quality",
      body: [
        "Every frame keeps its timing, and the GIF loops as it did. Text edges are smoothed against the picture behind them, and the GIF's 256 colours are chosen again for the whole animation, so the text's colours fit in without banding. Adding text changes the file size only a little; if the GIF must be smaller, run it through the GIF Compressor afterwards.",
      ],
    },
    {
      heading: "Captions people can read",
      id: "tips",
      body: [
        "Short captions read best: a GIF loops in a few seconds, so keep the text to a line or two. Put it where the action isn't — at the bottom for most clips, at the top when faces or hands are low in the frame. Light text with a dark outline works on almost anything; on a busy background, switch on the box.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded, captioned and encoded entirely in your browser. It is never uploaded, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to add text to a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Write and style", description: "Type the text, pick a position, font, size and colours; the preview plays it live." },
    { title: "Add and download", description: "Click Add text to GIF, check the result and download it." },
  ],

  features: [
    { icon: "text_fields", title: "Live preview", description: "See the caption on the playing GIF while you type." },
    { icon: "palette", title: "Meme or subtitle", description: "Outline, box, colours, capitals and nine positions." },
    { icon: "lock", title: "Nothing uploaded", description: "Captioned entirely in your browser." },
  ],

  faqs: [
    { q: "How do I add text to an animated GIF?", a: "Add the GIF, type your text, choose where it goes and how it looks, then click Add text to GIF and download it." },
    { q: "Will the GIF still be animated?", a: "Yes. Every frame keeps its timing; the text is drawn onto each one." },
    { q: "Can I make classic meme text?", a: "Yes. Choose Impact, tick Capital letters and keep the black outline." },
    { q: "Can the text appear on only part of the GIF?", a: "Yes. Choose Some frames and set the first and last frame with the sliders." },
    { q: "Can I add more than one caption?", a: "Add one, download the GIF, then open it again and add the next caption." },
    { q: "Can I put the text in a corner?", a: "Yes. Pick any of the nine positions, corners included." },
    { q: "Can I write on several lines?", a: "Yes. Press Enter for a new line; long lines also wrap by themselves." },
    { q: "Does it work with Hindi, Russian or emoji?", a: "Yes, with any script your device can display." },
    { q: "Will the file get much bigger?", a: "Usually only a little. The GIF Compressor can shrink it afterwards." },
    { q: "Is my GIF uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is captioned entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
