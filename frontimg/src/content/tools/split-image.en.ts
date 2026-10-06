import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /split-image (parent of instagram-grid-maker).
 * Demand 2026-10-04: US "split image" 14.8K, India 12.1K, "image splitter"
 * in both; BR "dividir imagem" 9.9K; RU 5.4K.
 */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "en",
  name: "Split Image",
  tagline:
    "Cut any picture into equal parts — two halves, three strips, a 3 × 3 grid — or into tiles of an exact pixel size. Every piece arrives in one ZIP, named in order. Free, in your browser.",
  category: { id: "edit", label: "Edit" },
  variantsHeading: "Split an image or make an Instagram grid",

  intro:
    "Splitting an image cuts it into smaller pictures that fit back together perfectly. Split Image from oMyImage does it two ways: an equal grid, where you choose the number of columns and rows, or fixed-size tiles, where you choose the width and height of each piece in pixels. Lines on the preview show exactly where the cuts fall, every piece is numbered, and the whole set downloads as one ZIP — or you can click any single piece to save just that one. Add several images and each is split the same way.",

  sections: [
    {
      heading: "Equal grid or tile size",
      id: "modes",
      body: [
        "Equal grid divides the picture into the number of pieces you ask for: 2 columns and 1 row gives a left and a right half, 1 column and 3 rows gives three horizontal strips, 3 × 3 gives nine pieces. The pieces are as equal as the pixels allow — when the width does not divide exactly, some pieces are one pixel wider, never a thin sliver at the end.",
        "Tile size works the other way round: you set the size of each piece, say 512 × 512 pixels, and the picture is cut from the top-left corner into as many tiles as fit. The last row and column take whatever is left, so they can be smaller. This is the mode for game maps, texture sheets and anything that expects tiles of a fixed size.",
      ],
    },
    {
      heading: "Common ways to split",
      id: "layouts",
      body: [
        "Two halves side by side (2 × 1) separate a two-page scan or a before-and-after photo. Top and bottom halves (1 × 2) split a tall phone screenshot. Three vertical strips (3 × 1) make a triptych for three frames on a wall. A 3 × 3 or 4 × 4 grid turns a photo into a puzzle, a poster for printing, or a set of tiles for a mosaic.",
        "The quick buttons above the sliders set these in one tap; the sliders go up to 20 columns and 20 rows.",
      ],
    },
    {
      heading: "Print a big poster on ordinary paper",
      id: "poster",
      body: [
        "A home printer cannot print a metre-wide poster, but it can print four or nine pieces of one. Split the picture into a grid that matches your paper's shape — 2 × 2 or 3 × 3 for a poster the same shape as the photo — then print every piece at the same size with no scaling to fit, trim the white margins and tape the sheets together from the back.",
        "Start from the largest original you have. Each piece is printed much bigger than it is on screen, so a small photo turns soft; a 6000-pixel-wide photo split into 3 columns still gives 2000 pixels per sheet, which prints sharply on A4 or Letter.",
      ],
    },
    {
      heading: "Tiles for games, maps and the web",
      id: "tiles",
      body: [
        "Game engines, map viewers and some websites load big images as a grid of tiles so that only the visible part is fetched. Choose Tile size and set the size the program expects — 256 or 512 pixels are common — and the files come out named by row and column, ready to load in a loop.",
        "Tile mode is also the quickest way to slice a very long screenshot or infographic into pages: set the tile width to the full width of the image and the height to one screen.",
      ],
    },
    {
      heading: "Pieces that line up exactly",
      id: "exact",
      body: [
        "Each piece is a straight copy of its part of the original — nothing is resized, nothing overlaps and no pixel is lost between neighbours, so the pieces fit back together with no gaps. Saved as PNG, they are pixel-for-pixel identical to the original; JPG and WEBP pieces are re-compressed at the quality you choose, which is usually invisible but can show as faint seams on flat colours. Use PNG when the pieces will be joined again.",
      ],
    },
    {
      heading: "Files, names and formats",
      id: "names",
      body: [
        "Pieces are named after the image with their row and column — holiday_r1_c1.jpg, holiday_r1_c2.jpg and so on — padded with zeros when there are ten or more, so they sort in the right order in any folder. When you split several images at once, each image's pieces go into their own folder inside the ZIP.",
        "Pieces keep the original format unless you pick another. PNG and WEBP keep transparency; JPG fills transparent areas with the background colour you choose.",
      ],
    },
    {
      heading: "Splitting a photo for Instagram",
      id: "instagram",
      body: [
        "An Instagram profile grid and a swipeable panorama need more than a plain split: the photo has to be cropped to the right shape, each piece sized for Instagram, and the posts uploaded in reverse order. Instagram Grid Maker does all of that — use it instead of this page for a 3-wide grid or a carousel.",
      ],
    },
    {
      heading: "Splitting comics, menus and documents",
      id: "documents",
      body: [
        "A scanned comic page splits into its panels with a grid of the same shape, ready to post one at a time. A long restaurant menu or flyer photographed in one shot can be cut into single pages for a website. For two-page book scans, 2 × 1 gives the left and right pages as separate images you can then send to Image to PDF.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Every image is split entirely in your browser. Nothing is uploaded to a server, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to split an image",
  steps: [
    { title: "Add your image", description: "Choose one or more JPG, PNG or WEBP images." },
    { title: "Choose the cuts", description: "Pick a grid such as 2 × 1 or 3 × 3, or set an exact tile size in pixels." },
    { title: "Split and download", description: "Click Split image to get every piece in one ZIP, or click a single piece to save it." },
  ],

  features: [
    { icon: "view_column", title: "Grid or tile size", description: "Up to 20 × 20 equal pieces, or tiles of any size in pixels." },
    { icon: "folder_zip", title: "All pieces in one ZIP", description: "Named by row and column, so they stay in order." },
    { icon: "lock", title: "No uploads", description: "Split entirely in your browser." },
  ],

  faqs: [
    { q: "How do I split an image into equal parts?", a: "Add the image, choose the number of columns and rows, and click Split image. The pieces download together as a ZIP." },
    { q: "How do I cut an image in half?", a: "Pick 2 × 1 for a left and right half, or 1 × 2 for a top and bottom half." },
    { q: "Can I split an image into a 3 × 3 grid?", a: "Yes. Tap 3 × 3, or set both sliders to 3 — you get nine pieces numbered from the top left." },
    { q: "Can I cut tiles of an exact size?", a: "Yes. Choose Tile size and enter the width and height in pixels. The last row and column are smaller if the size does not divide evenly." },
    { q: "Do the pieces lose quality?", a: "No resizing happens. As PNG they are identical to the original; JPG and WEBP are re-saved at the quality you choose." },
    { q: "Can I download just one piece?", a: "Yes. After splitting, click any piece under the preview to save it on its own." },
    { q: "Can I split several images at once?", a: "Yes. Each image is split the same way and gets its own folder in the ZIP." },
    { q: "How are the files named?", a: "By row and column, like photo_r2_c3.png, so they sort in order." },
    { q: "Is transparency kept?", a: "Yes, as PNG or WEBP. JPG fills transparent areas with a colour." },
    { q: "How many pieces can I make?", a: "Up to 20 × 20 in a grid, and up to 400 pieces per image in tile mode." },
    { q: "How do I split a photo for an Instagram grid?", a: "Use Instagram Grid Maker — it crops to the right shape, sizes the posts and numbers them in posting order." },
    { q: "Are my images uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes, in any mobile browser. The pieces download as a ZIP your phone can open." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limits." },
  ],

  security:
    "Your images are split entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
