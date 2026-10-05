import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /png-to-ico. The page <title> and meta description stay in
 * lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "en",
  name: "PNG to ICO",
  tagline:
    "Convert PNG, JPG or SVG to an ICO file online — a favicon.ico with 16, 32 and 48 px, or a Windows icon with every size up to 256 px. Free, private, in your browser.",
  category: { id: "convert", label: "Convert" },

  intro:
    "An ICO file is not one image but a small set of them: the same icon at several sizes, so a browser tab, a taskbar and a desktop can each pick the one that fits. oMyImage's PNG to ICO converter builds that set from a single picture. Start from a PNG, JPG, WEBP or SVG, choose the sizes — favicon or full Windows icon — and preview every size at its real pixel dimensions before you download one .ico file.",

  sections: [
    {
      heading: "What is inside an ICO file",
      id: "what-ico",
      body: [
        "ICO is the Windows icon format, and it is a container: one file holds several square images, typically from 16 × 16 up to 256 × 256 pixels. Windows picks the closest size for each place an icon appears — a file list, the taskbar, the desktop — and browsers do the same for the tab and bookmarks. That is why a single resized PNG renamed to .ico is not a real icon.",
        "Files made here store the sizes below 256 as 32-bit bitmaps with full transparency, the form every Windows version in use and every browser reads, and the 256-pixel size as compressed PNG, the way Windows' own icons do. The result opens in any icon-aware program.",
      ],
    },
    {
      heading: "Making a favicon.ico",
      id: "favicon",
      body: [
        "For a website, choose the Favicon preset: 16, 32 and 48 pixels. 16 is the classic browser-tab size, 32 is used on high-resolution screens and in the taskbar when a site is pinned, and 48 covers Windows shortcuts and larger bookmark and site-tile views. Together they give every common place a size that does not need stretching.",
        "Name the file favicon.ico and put it in the root folder of your site, so it is reachable at /favicon.ico. Browsers request that address automatically, even on pages that do not declare an icon. Modern sites often add PNG and SVG icons with link tags as well, but the .ico at the root remains the one every browser and many tools look for first.",
      ],
    },
    {
      heading: "Icons for Windows folders and shortcuts",
      id: "windows",
      body: [
        "For a desktop shortcut, a folder or an app, choose the Windows icon preset, which includes every size from 16 to 256 pixels. Windows uses the large sizes for desktop icons and big Explorer views, and the small ones for lists and the taskbar; if a size is missing it scales the nearest one and the icon looks blurry.",
        "To use the icon, right-click a shortcut, open Properties and choose Change Icon; for a folder, open Properties, then Customize, then Change Icon, and browse to your .ico file. Keep the .ico somewhere it will not be moved or deleted, because Windows reads it from that location.",
      ],
    },
    {
      heading: "Designing for 16 pixels",
      id: "small",
      body: [
        "At 16 × 16 pixels there is room for a shape and maybe a letter, not for a detailed logo. Bold shapes, strong contrast and a simple silhouette survive; thin lines, small text and subtle gradients turn into grey mush. The preview shows each size at its actual pixel size, so you can judge the 16-pixel version honestly before downloading.",
        "To get the cleanest small sizes, the image is reduced in steps, halving its size each time with high-quality smoothing, rather than shrunk in one jump, which tends to drop thin details unpredictably. If the 16-pixel icon still looks busy, try a simplified version of the logo — just the initial or the symbol — as the source.",
      ],
    },
    {
      heading: "Square icons from any image",
      id: "square",
      body: [
        "Icons are square. If your image is not, choose Fit whole image to keep everything and fill the sides with transparency, or Crop to square to trim the longer side from the centre. A transparent background is kept by default; tick the white background option if the icon will be shown somewhere that turns transparency black.",
        "The best source is a square PNG with a transparent background at 256 pixels or larger. A JPG works too, but it has no transparency, so its background becomes part of the icon. An SVG is ideal: it is drawn at high resolution first, so every size is sharp.",
      ],
    },
  ],

  howToTitle: "How to convert PNG to ICO",
  steps: [
    { title: "Add an image", description: "Select a PNG, JPG, WEBP or SVG image — square with a transparent background is best." },
    { title: "Choose the sizes", description: "Pick Favicon (16, 32, 48) or Windows icon (16 to 256), or tick the exact sizes." },
    { title: "Download the ICO", description: "Check every size in the preview, then download one .ico file." },
  ],

  features: [
    { icon: "apps", title: "Every size in one file", description: "16, 24, 32, 48, 64, 128 and 256 pixels, packed into a single .ico." },
    { icon: "opacity", title: "Transparency kept", description: "Icons keep a full transparent background, with smooth anti-aliased edges." },
    { icon: "lock", title: "No upload", description: "The icon is built in your browser; your image never leaves your device." },
  ],

  faqs: [
    { q: "How do I convert PNG to ICO?", a: "Add your image, pick the Favicon or Windows icon preset, check the preview and click Download ICO." },
    { q: "What sizes should a favicon.ico have?", a: "16, 32 and 48 pixels — the Favicon preset. They cover browser tabs, high-resolution screens and Windows shortcuts." },
    { q: "What sizes does a Windows icon need?", a: "Up to 256 pixels. The Windows icon preset includes 16, 24, 32, 48, 64, 128 and 256, so Windows never has to stretch a size." },
    { q: "Can I convert JPG or SVG to ICO?", a: "Yes. PNG, JPG, WEBP, GIF, BMP and SVG all work. JPG has no transparency, so its background stays; SVG gives the sharpest results." },
    { q: "Is the transparent background kept?", a: "Yes. Transparency is kept at every size, unless you choose a white background." },
    { q: "My image is not square — what happens?", a: "Choose Fit whole image to keep all of it with transparent sides, or Crop to square to trim the longer side." },
    { q: "Where do I put favicon.ico?", a: "In the root folder of your website, so it loads at yoursite.com/favicon.ico. Browsers look there automatically." },
    { q: "How do I change a folder icon in Windows?", a: "Right-click the folder, open Properties, then Customize, then Change Icon, and choose your .ico file." },
    { q: "Why does my 16-pixel icon look blurry?", a: "There are only 256 pixels to work with. Use a simpler source — just the symbol or the initial — with bold shapes and strong contrast." },
    { q: "Is my image uploaded?", a: "No. The ICO file is created entirely in your browser." },
  ],

  security:
    "Your image is resized and packed into an ICO file entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
