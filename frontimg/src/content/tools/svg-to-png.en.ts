import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /svg-to-png. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "en",
  name: "SVG to PNG",
  tagline:
    "Convert SVG to PNG online at 1×, 2×, 4× or any width — rendered sharp at every size, transparent or on a background. Free, in batches, and nothing leaves your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "SVG is perfect until you need to put it somewhere that only takes ordinary images: a social post, a slide, an email, an app store listing, a marketplace upload. oMyImage's SVG to PNG converter renders your vector files as PNG at exactly the size you choose — drawn fresh at that resolution, so a 24-pixel icon exported at 4× is as crisp as one designed at 96 pixels. Keep the transparent background or add white or any colour, and convert a whole folder of icons at once.",

  sections: [
    {
      heading: "Why convert SVG to PNG",
      id: "why",
      body: [
        "SVG describes shapes rather than pixels, which is why it scales to any size and why browsers love it. Plenty of other places do not. Social networks reject SVG uploads, many messaging and email apps show it as a file attachment instead of a picture, older versions of office software insert it poorly, and marketplaces, app stores and print-on-demand services ask for PNG or JPG.",
        "PNG is the natural partner for SVG because it is lossless and keeps transparency: logos, icons and illustrations come out with clean edges and a see-through background, exactly as they look in the browser.",
      ],
    },
    {
      heading: "Sharp at every size",
      id: "sharp",
      body: [
        "Many converters render the SVG at its default size and then stretch the bitmap, which gives soft, blurry edges at 2× and worse at 4×. This tool sets the target size on the SVG itself before drawing it, so the browser rasterises the vectors directly at the output resolution. Curves, thin lines and small text are as sharp as the format allows at every size.",
        "That also means there is no quality penalty for going big: a logo exported at 4000 pixels wide is a genuine 4000-pixel rendering, suitable for print and large displays. Output is capped at 8192 pixels on the longest side, where browsers on many devices stop being able to draw reliably.",
      ],
    },
    {
      heading: "Choosing a size",
      id: "sizes",
      body: [
        "The size buttons multiply the size written in the SVG. 1× gives the size the designer set; 2× is the standard choice for high-resolution phone and laptop screens, where an image needs twice the pixels to look crisp; 4× suits large displays and printing. Files are named with @2x or @4x so the sizes are easy to tell apart.",
        "Choose Width to set an exact pixel width instead, for example 512 for an app icon or 1200 for a social image. The height follows the SVG's own proportions. In a batch, every file gets that width.",
      ],
    },
    {
      heading: "Transparent, white or coloured background",
      id: "background",
      body: [
        "By default the PNG keeps the SVG's transparency, shown on a checkerboard in the preview. Choose White when the image is going somewhere that displays transparency as black — some messaging apps and older office software do — or Colour to place it on a brand colour for a social post or a slide.",
      ],
    },
    {
      heading: "What renders and what does not",
      id: "what-renders",
      body: [
        "SVG is converted using the browser's own renderer in its safe image mode. Shapes, gradients, masks, filters and embedded images all render as they do on a web page. Anything that would need the internet or code does not: scripts never run, and images, fonts or stylesheets linked from other websites are not loaded.",
        "Text is the one to watch. If the SVG uses a web font that is linked rather than embedded, the text falls back to a system font. To keep the exact typeface, convert the text to outlines (paths) in your design tool before exporting the SVG, or embed the font in the file.",
      ],
    },
    {
      heading: "SVGs without a size",
      id: "no-size",
      body: [
        "Some SVGs — often icons exported from design tools or copied from icon libraries — set only a viewBox, or no size at all. When there is a viewBox, its dimensions are used as the 1× size. When there is nothing, the browser default of 300 × 150 pixels applies, and the tool says so; pick Width to set the size you actually want.",
      ],
    },
  ],

  howToTitle: "How to convert SVG to PNG",
  steps: [
    { title: "Add SVG files", description: "Select one or many SVG files, or drag and drop them in." },
    { title: "Pick size and background", description: "Choose 1×, 2×, 4× or an exact width, and transparent, white or a colour." },
    { title: "Download", description: "One PNG downloads directly; several download together as a ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Sharp at any size", description: "Vectors are drawn at the output resolution, never stretched from a smaller image." },
    { icon: "opacity", title: "Transparency kept", description: "The PNG keeps the SVG's transparent background, or takes white or any colour." },
    { icon: "burst_mode", title: "Batch conversion", description: "Convert a folder of icons or logos at once and download one ZIP." },
  ],

  faqs: [
    { q: "How do I convert SVG to PNG?", a: "Add your SVG files, choose a size and background, and click Download PNG. Several files download together as a ZIP." },
    { q: "How do I get a high-resolution PNG from an SVG?", a: "Choose 2× or 4×, or set an exact width up to 8192 pixels. The vectors are drawn at that resolution, so the PNG is sharp rather than stretched." },
    { q: "Will the PNG have a transparent background?", a: "Yes, by default. You can also choose white or any colour as the background." },
    { q: "Why does the text look different in the PNG?", a: "The SVG probably links to a web font that is not embedded in the file, so a system font is used. Convert the text to outlines, or embed the font, before exporting the SVG." },
    { q: "Why is my PNG 300 × 150 pixels?", a: "The SVG sets no size and no viewBox, so the browser default applies. Choose Width and enter the size you need." },
    { q: "Can I convert many SVG files at once?", a: "Yes. Add as many as you like; each is converted with the same settings and all are downloaded as one ZIP." },
    { q: "Is it safe to convert an SVG from the internet?", a: "Yes. SVG is drawn in the browser's image mode, where scripts never run and nothing is fetched from other websites." },
    { q: "Are my files uploaded?", a: "No. The SVG is read and converted entirely in your browser, and the PNG is created on your device." },
    { q: "What is the largest PNG I can make?", a: "Up to 8192 pixels on the longest side. Beyond that, browsers on many devices cannot draw the image reliably." },
    { q: "Can I convert SVG to JPG instead?", a: "Convert to PNG here with a white background, then use the PNG to JPG converter if you need a JPG." },
  ],

  security:
    "Your SVG files are read and converted to PNG entirely in your browser. Nothing is uploaded, scripts inside the SVG never run, and no external resources are fetched.",
};

export default content;
