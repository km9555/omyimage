import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /gif-to-sprite-sheet. The page <title> and meta description
 * stay in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "en",
  name: "GIF to Sprite Sheet",
  tagline:
    "Lay out every frame of an animated GIF on one PNG sprite sheet — as a grid, a single row or a column — with spacing and a ready-made CSS animation. Free, in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "A sprite sheet puts all the frames of an animation side by side on one image. Games and web pages then show one frame at a time by moving a window across the sheet, which is faster to load and easier to control than a GIF. oMyImage's GIF to Sprite Sheet turns any animated GIF into a transparent PNG sheet in a few clicks: pick a grid, a single row or a single column, choose how many frames to keep and how big they are, add spacing if your engine needs it, and copy the CSS that plays it.",

  sections: [
    {
      heading: "Grid, row or column",
      id: "layout",
      body: [
        "A grid packs the frames into rows and columns, which keeps the sheet roughly square — the shape most game engines and texture tools prefer. You choose the number of columns; the rows follow from the frame count.",
        "One row or one column puts every frame in a single line. That is the easiest layout to animate with CSS, and the tool writes the stylesheet for you: the frame size, the background, and a steps() animation that moves across the strip at the GIF's pace.",
      ],
    },
    {
      heading: "Frames, size and spacing",
      id: "options",
      body: [
        "Keeping every second or third frame halves or thirds the sheet while the motion stays recognisable, which matters for long GIFs. Frame size scales every frame to 75, 50 or 25 percent for small icons and characters.",
        "Spacing adds a gap of 2, 4 or 8 pixels between frames. Engines that smooth or scale textures can pick up a line of pixels from the neighbouring frame when frames touch; a small gap prevents that bleeding. The background stays transparent unless you choose a colour.",
      ],
    },
    {
      heading: "Using the sheet in a game engine",
      id: "engines",
      body: [
        "The settings panel shows the frame size and the number of columns and rows — the numbers an engine needs to slice the sheet. In Phaser, Godot, Unity, GameMaker and similar tools, import the PNG, set the frame width and height, and add the spacing if you used any. The original GIF's frame order is kept, left to right and top to bottom.",
        "GIFs can hold a different pause on each frame; most engines play a sheet at one frame rate, so set it to match the speed you want.",
      ],
    },
    {
      heading: "Using the sheet with CSS",
      id: "css",
      body: [
        "With one row or one column, the result includes a short CSS block: an element the size of one frame, the sheet as its background, and a keyframe animation with steps() so the background jumps from frame to frame instead of sliding. Paste it into your stylesheet, give an element the sprite class, and the animation plays without any script.",
        "The CSS uses the GIF's total running time spread evenly across the frames, so a GIF with uneven pauses plays at a steady pace.",
      ],
    },
    {
      heading: "Size limits",
      id: "limits",
      body: [
        "Browsers cannot create an image wider or taller than 16,384 pixels, and Safari stops at about 16.7 million pixels in total. A long GIF in one row reaches that quickly. When a sheet would be too large, the tool says so; use a grid, keep fewer frames or pick a smaller frame size.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "The GIF is decoded and the sheet is drawn entirely in your browser. Nothing is uploaded, and nothing is kept after you close the page. To get the frames as separate files instead of one sheet, use GIF to Images.",
      ],
    },
  ],

  howToTitle: "How to make a sprite sheet from a GIF",
  steps: [
    { title: "Add the GIF", description: "Select an animated GIF from your computer or phone." },
    { title: "Choose the layout", description: "Grid, one row or one column; set frames, size, spacing and background." },
    { title: "Create and download", description: "Click Make sprite sheet, copy the CSS if you need it and download the PNG." },
  ],

  features: [
    { icon: "grid_view", title: "Any layout", description: "Grid with your column count, a single row or a single column." },
    { icon: "code", title: "CSS included", description: "A ready steps() animation for row and column sheets." },
    { icon: "lock", title: "Nothing uploaded", description: "Created entirely in your browser." },
  ],

  faqs: [
    { q: "How do I turn a GIF into a sprite sheet?", a: "Add the GIF, choose a grid, row or column, and click Make sprite sheet. Download the PNG." },
    { q: "What is a sprite sheet?", a: "One image holding every frame of an animation, laid out side by side." },
    { q: "Is the background transparent?", a: "Yes, by default. You can choose a solid colour instead." },
    { q: "Can I choose the number of columns?", a: "Yes. In grid layout, type the number of columns; the rows follow from the frame count." },
    { q: "Why add spacing between frames?", a: "Some engines blend neighbouring pixels when they scale textures; a small gap stops frames bleeding into each other." },
    { q: "How do I animate the sheet with CSS?", a: "Choose one row or one column and copy the CSS shown with the result." },
    { q: "Why is my sheet too large?", a: "Browsers can't create images over 16,384 pixels a side. Use a grid, keep fewer frames or shrink them." },
    { q: "Does it keep every frame?", a: "Yes, unless you choose to keep every 2nd or 3rd frame." },
    { q: "Does it lose quality?", a: "No. At 100% size the frames are copied pixel for pixel into a PNG." },
    { q: "Is my GIF uploaded?", a: "No. Everything happens in your browser." },
    { q: "Can I get the frames as separate images?", a: "Yes, with GIF to Images." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limit." },
  ],

  security:
    "Your GIF is turned into a sprite sheet entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
