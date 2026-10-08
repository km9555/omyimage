import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /typing-text-gif. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "en",
  name: "Typing Text GIF",
  tagline:
    "Make a GIF of your text typing itself, letter by letter, with a blinking cursor. Choose the speed, font and colours. Free, in your browser — nothing to upload.",
  category: { id: "edit", label: "Edit" },

  intro:
    "Text that types itself catches the eye in a way still text never does. oMyImage's Typing Text GIF turns any message into that effect: write it, choose how fast it types, the font, size and colours, and whether a cursor blinks at the end. The preview plays the animation as you adjust it. Because the result is an ordinary GIF, it works where code can't — in chats, slides, emails, GitHub READMEs and any website — with no JavaScript and no video player.",

  sections: [
    {
      heading: "How the typing works",
      id: "how",
      body: [
        "Your text is laid out once, at its final size, so lines never jump as letters appear. Then each frame reveals the next letter at the speed you chose. Like a person typing, it pauses briefly after commas, longer after full stops and at the end of each line, which makes the rhythm feel natural instead of mechanical.",
        "At the end, the finished text holds for the time you pick — one to five seconds — while the cursor blinks every half second. Then the GIF starts again, or, if you untick Repeat forever, it stops on the finished text.",
      ],
    },
    {
      heading: "Speed and length",
      id: "speed",
      body: [
        "Choose 6, 10, 15 or 25 letters per second. Six feels like careful typing and suits short, dramatic lines; ten is a natural pace; fifteen and twenty-five get long messages done quickly. The preview and the frame count update as you change it, and the length of the whole GIF is shown under the preview.",
        "Each letter is one frame, so longer text means more frames — but every frame only adds the new letter, so even a long message stays a small file.",
      ],
    },
    {
      heading: "Font, size and colours",
      id: "look",
      body: [
        "Typewriter, a monospaced font, gives the classic terminal look; sans-serif and serif suit quotes and announcements, and Impact makes a bold headline. Size runs from 14 to 96 pixels and the width from 320 to 800 pixels; the height grows with the number of lines.",
        "Any text and background colour works. A transparent background lets the GIF sit on any page, but because GIF transparency has no soft edges, letters look smoothest on a solid colour that matches where the GIF will be shown.",
        "An outline, from a thin edge to a thick border, keeps letters readable on busy or transparent backgrounds. Five colour presets — Classic Dark, Clean Light, Midnight Neon, Ocean Blue and Sunset Pop — set the text, background and outline colours in one click, and you can change any of them afterwards.",
      ],
    },
    {
      heading: "Where to use it",
      id: "uses",
      body: [
        "Send a greeting that types itself in WhatsApp or Telegram. Open a presentation with a line that writes itself on the first slide. Put an animated tagline at the top of a GitHub README, where scripts are not allowed but GIFs are. Add a moving signature line or headline to an email, a blog post or a product page without touching any code.",
      ],
    },
    {
      heading: "Any language",
      id: "languages",
      body: [
        "Letters are counted the way you read them, so a Hindi syllable, an accented letter or an emoji appears whole rather than in pieces. The text uses the fonts on your device, so anything your device can display — Latin, Cyrillic, Devanagari and more — can be typed.",
      ],
    },
    {
      heading: "Tips for a good typing GIF",
      id: "tips",
      body: [
        "Keep the message short: one or two sentences type in a few seconds and loop before attention drifts. Leave a pause of two or three seconds at the end so people can read the whole line. Match the background to the page or chat where the GIF will appear, and pick a width close to the size it will be shown at, so the letters stay crisp.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "There is nothing to upload: the GIF is drawn from your text entirely in your browser, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to make a typing text GIF",
  steps: [
    { title: "Write the text", description: "Type the message the GIF should type, then click Start." },
    { title: "Set the style", description: "Choose the speed, font, size, colours, cursor and pause; the preview plays it live." },
    { title: "Make and download", description: "Click Make GIF and download the animation." },
  ],

  features: [
    { icon: "terminal", title: "Real typing rhythm", description: "Letter by letter, with pauses at commas, full stops and line ends." },
    { icon: "palette", title: "Your style", description: "Speed, font, size, colours, outline, cursor and the pause at the end." },
    { icon: "lock", title: "Nothing uploaded", description: "Drawn entirely in your browser." },
  ],

  faqs: [
    { q: "How do I make a typing text GIF?", a: "Type your message, click Start, choose the speed and style, then click Make GIF and download it." },
    { q: "Can I change the typing speed?", a: "Yes. Pick 6, 10, 15 or 25 letters per second." },
    { q: "Can I remove the blinking cursor?", a: "Yes. Untick Blinking cursor." },
    { q: "Can the GIF stop after typing once?", a: "Yes. Untick Repeat forever and it stops on the finished text." },
    { q: "Can I use several lines?", a: "Yes. Press Enter for a new line; long lines also wrap by themselves." },
    { q: "Can the background be transparent?", a: "Yes, though letters look smoothest on a solid background, because GIF transparency has no soft edges." },
    { q: "Can I add an outline to the text?", a: "Yes. Pick an outline colour and drag Outline thickness. A colour preset sets the text, background and outline colours together." },
    { q: "Does it work in Hindi or Russian?", a: "Yes. Any language your device can display can be typed, emoji included." },
    { q: "Can I use it in a GitHub README?", a: "Yes. A GIF shows in READMEs where scripts and CSS animations can't run." },
    { q: "How big is the file?", a: "Usually small: each frame only adds a letter. Long texts in large sizes take more." },
    { q: "Do I need to upload anything?", a: "No. The GIF is drawn from your text in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in a mobile browser." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your text is turned into a GIF entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
