import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /dpi-checker. The page <title> and meta description stay
 * in lib/tools.ts (seoTitle/seoDescription).
 */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "en",
  name: "DPI Checker",
  tagline:
    "Check the DPI of JPG, PNG, BMP and WEBP images — and see the size each one prints at and the largest size it prints sharply. Free, many images at once, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Before you send an image to a print shop or upload it to a form that asks for a certain DPI, it helps to know what the file actually says. oMyImage's DPI Checker reads the resolution stored in each image, tells you where it is stored, and turns it into the numbers that matter: how large the image prints at that DPI, and how large it can print at photo quality. Add one image or a whole folder; nothing leaves your browser.",

  sections: [
    {
      heading: "What the checker shows",
      id: "what",
      body: [
        "For every image you get its pixel size, the DPI stored in the file and where it was found — the JFIF header or the EXIF data of a JPG, the pHYs chunk of a PNG, the header of a BMP, or the EXIF block of a WEBP. If the horizontal and vertical values differ, both are shown.",
        "From those numbers the checker works out two print sizes in centimetres and inches: the size the file asks for at its stored DPI, and the largest size it prints sharply at 300 DPI, the usual standard for photos and documents.",
      ],
    },
    {
      heading: "Reading the result",
      id: "reading",
      body: [
        "Suppose a photo is 2400 × 3000 pixels and stored at 72 DPI. The checker reports a print size of about 84.7 × 105.8 cm — what a program that trusts the label would make of it — and a sharp print size of 20.3 × 25.4 cm at 300 DPI. The second number is the honest one: that is how big it can go before the pixels start to show.",
        "If a form or print shop asks for 300 DPI and the checker shows something else, change the value with the DPI Converter. If the sharp print size is smaller than the size you need, the image needs more pixels, not a different label.",
      ],
    },
    {
      heading: "When an image has no DPI",
      id: "none",
      body: [
        "Many images carry no DPI at all: GIFs never do, many PNGs and screenshots don't, and some JPGs store only a pixel aspect ratio. The checker says so plainly. Programs then fall back to a default — usually 72 or 96 DPI — which is why the same file can show different values in different apps.",
        "A missing value is not a problem for screens and websites. It only matters when the image is printed or placed in a document, and setting a DPI fixes it in a second.",
      ],
    },
    {
      heading: "Checking DPI on Windows and Mac",
      id: "os",
      body: [
        "On Windows, right-click the image, choose Properties and open the Details tab: Horizontal resolution and Vertical resolution show the DPI. On a Mac, open the image in Preview and choose Tools, then Show Inspector; the first tab lists Image DPI. Both read the same stored value as this checker, so the numbers should agree.",
      ],
    },
    {
      heading: "DPI and pixel size together",
      id: "both",
      body: [
        "Some requirements combine both, such as a photo of 3.5 × 4.5 cm at 300 DPI, which means 413 × 531 pixels. Check the pixel size and DPI here first; if either is wrong, Resize Image in cm produces the exact pixel size for the centimetres and DPI you need and saves the DPI in the file.",
      ],
    },
  ],

  howToTitle: "How to check the DPI of an image",
  steps: [
    { title: "Add your images", description: "Select one or many JPG, PNG, BMP, WEBP or GIF images." },
    { title: "Read the results", description: "Each image shows its pixels, stored DPI, where it is stored and its print sizes." },
    { title: "Change it if needed", description: "Click Change DPI to send the images straight to the DPI Converter." },
  ],

  features: [
    { icon: "info", title: "DPI and where it is stored", description: "JFIF, EXIF, PNG pHYs or BMP header — and a clear note when there is none." },
    { icon: "straighten", title: "Print sizes", description: "The size each image prints at, and the largest sharp size at 300 DPI." },
    { icon: "lock", title: "Nothing uploaded", description: "Files are read in your browser and never leave your device." },
  ],

  faqs: [
    { q: "How do I check the DPI of an image?", a: "Add it here. The checker shows the DPI stored in the file, where it is stored and the sizes it prints at." },
    { q: "Why does my image have no DPI?", a: "GIFs never store one, and many PNGs, screenshots and web images don't either. Programs then assume 72 or 96 DPI." },
    { q: "Why do different apps show different DPI?", a: "When a file stores no DPI, or two conflicting values, each app falls back on its own default or picks a different field." },
    { q: "Is 72 DPI bad?", a: "Not for screens, which ignore DPI. For printing, what matters is whether there are enough pixels for the size you need." },
    { q: "How large can my image print sharply?", a: "Divide the pixels by 300 to get inches. The checker does this for you and shows the result in centimetres too." },
    { q: "Can I check many images at once?", a: "Yes. Add them all; each one gets its own result." },
    { q: "How do I change the DPI after checking?", a: "Click Change DPI. Your images open in the DPI Converter, where you pick the new value." },
    { q: "Can it read DPI from a WEBP or BMP?", a: "Yes, when the file stores one: BMP keeps it in its header, WEBP in its EXIF block." },
    { q: "Are my images uploaded?", a: "No. The files are read entirely in your browser." },
  ],

  security:
    "Your images are read entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
