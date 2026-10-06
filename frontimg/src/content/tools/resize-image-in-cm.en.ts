import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /resize-image-in-cm (variant of resize-image, Print size mode). */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "en",
  name: "Resize Image in cm",
  tagline:
    "Resize an image to an exact size in centimetres, millimetres or inches at 300 DPI or any DPI — with the DPI saved in the file, so it prints at that size. Free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Forms, print shops and document templates describe images in centimetres or inches — a 3.5 × 4.5 cm photo, a 10 × 15 cm print, a picture 8 cm wide in a report. Pixels are what an image is made of, so the size has to be translated. This tool does the translation: enter the size in cm, mm or inches, choose the DPI, and it resizes your image to exactly the right number of pixels and writes the DPI into the file, so any printer or word processor places it at the size you asked for.",

  sections: [
    {
      heading: "From centimetres to pixels",
      id: "formula",
      body: [
        "Pixels = size in inches × DPI, and one inch is 2.54 cm. At 300 DPI, every centimetre needs about 118 pixels. A 3.5 × 4.5 cm photo therefore becomes 413 × 531 pixels, and a full A4 page of 21 × 29.7 cm becomes 2480 × 3508 pixels.",
        "You never have to do the sum yourself. Type the size, and the panel shows the pixel size the first image will be resized to at the chosen DPI. Switch between cm, mm and inches at any time; the size is converted so the physical size stays the same.",
      ],
    },
    {
      heading: "Common print sizes at 300 DPI",
      id: "common",
      body: [
        "A 3.5 × 4.5 cm ID photo: 413 × 531 px. A 10 × 15 cm photo print: 1181 × 1772 px, or 1200 × 1800 px for a true 4 × 6 inch print. A 2 × 2 inch photo: 600 × 600 px. An A4 page: 2480 × 3508 px. An A5 page (14.8 × 21 cm): 1748 × 2480 px.",
        "For passport and ID photos with face-size rules, the Passport Size Photo Maker does the cropping and background for you; this tool is for any other size you need on paper.",
      ],
    },
    {
      heading: "Keeping the proportions",
      id: "aspect",
      body: [
        "With Keep aspect ratio on, you type one side and the other follows the image's own shape, so nothing is squashed. To hit both sides exactly — say 3.5 × 4.5 cm from a landscape photo — first crop the image to that shape with the crop button on its card, then enter the size. Turning the lock off and typing both sides stretches the picture to fit, which is rarely what you want.",
        "When the size is filled in from the first image, it shows that image's current print size at the chosen DPI, which is a quick way to see how large a photo would print as it is.",
      ],
    },
    {
      heading: "Which DPI to choose",
      id: "dpi",
      body: [
        "300 DPI is the standard for photos and printed documents, and the default here. 200 DPI is common for application forms and still prints well; 150 DPI suits large posters seen from a distance; 600 DPI is for line art and fine detail. A higher DPI means more pixels for the same centimetres, so a bigger file.",
        "If your image has fewer pixels than the size needs, it is enlarged and the print will look soft. The panel shows the target pixels, so compare it with the image's own size before resizing; for a sharp result, print smaller or start from a larger original.",
      ],
    },
    {
      heading: "The DPI is saved in the file",
      id: "saved",
      body: [
        "Resized JPG and PNG files are labelled with the DPI you chose, so Word, Google Docs, layout programs and print dialogs show them at the intended physical size straight away. WEBP has no field for DPI that a browser can write, so choose JPG or PNG as the output format when the print size matters.",
        "File names say what you made, for example photo_3.5x4.5cm.jpg, so a batch of different sizes stays easy to tell apart.",
      ],
    },
  ],

  howToTitle: "How to resize an image in cm",
  steps: [
    { title: "Add your image", description: "Select one or many JPG, PNG, WEBP, GIF or BMP images." },
    { title: "Enter the size and DPI", description: "Type the width or height in cm, mm or inches and choose the DPI — 300 is preselected." },
    { title: "Resize and download", description: "Download images with the exact pixel size and the DPI saved in the file." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm or inches", description: "Enter the size in the unit your form or printer uses; pixels are worked out for you." },
    { icon: "high_quality", title: "DPI saved in the file", description: "JPG and PNG output carries the DPI, so it prints at the size you entered." },
    { icon: "lock", title: "In your browser", description: "Your images are resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "How do I resize an image in cm?", a: "Add the image, type the width or height in centimetres, choose the DPI and click Resize. The image gets the exact pixel size and the DPI is saved in the file." },
    { q: "How many pixels is 1 cm?", a: "It depends on the DPI: about 118 pixels at 300 DPI, 79 at 200 DPI and 28 at 72 DPI." },
    { q: "What is 3.5 × 4.5 cm in pixels?", a: "413 × 531 pixels at 300 DPI, or 276 × 354 pixels at 200 DPI." },
    { q: "Can I resize in inches or millimetres?", a: "Yes. Switch the unit to inches or mm; the values convert so the physical size stays the same." },
    { q: "What DPI should I use?", a: "300 DPI for photos and documents, 200 DPI for most forms, 150 DPI for large posters." },
    { q: "Will the image print at the size I entered?", a: "Yes, as JPG or PNG: the DPI is saved in the file, so printers and word processors use the right size." },
    { q: "Why is my image blurry after resizing to cm?", a: "It had fewer pixels than the size needs and was enlarged. Print it smaller, use a lower DPI, or start from a bigger original." },
    { q: "How do I get an exact width and height without stretching?", a: "Crop the image to the right shape first with the crop button on its card, then enter both sides." },
    { q: "Can I resize many images to the same size?", a: "Yes. Add them all; each is resized for the same physical size and they download together as a ZIP." },
    { q: "Are my images uploaded?", a: "No. Resizing happens in your browser; only very large images may be processed on our server and deleted immediately." },
  ],

  security:
    "Your images are resized in your browser and the DPI is written into each file there. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
