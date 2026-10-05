import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /facebook-cover-resizer (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "en",
  name: "Facebook Cover Resizer",
  tagline:
    "Resize any image to a Facebook cover photo — 851 × 315 pixels as a light sRGB JPG — cropped or padded to fit, with the phone crop in mind. Free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "A Facebook cover is wide and short, and it is shown in two different shapes: a wide strip on computers and a taller, narrower crop on phones. Uploading a random photo leaves Facebook to decide what gets cut. This resizer opens set to the Facebook cover size, 851 × 315 pixels, and saves a JPG — add your image, choose crop or pad, and download a cover that loads quickly and shows what you meant it to.",

  sections: [
    {
      heading: "The size Facebook recommends",
      id: "spec",
      body: [
        "Facebook's guidance is to upload covers as sRGB JPG files 851 pixels wide and 315 pixels tall, ideally under 100 KB so they load fast. The minimum it accepts is 400 × 150 pixels. A cover that starts at exactly 851 × 315 needs no repositioning on desktop.",
        "The resizer saves a JPG in sRGB by default. For a busy photo the file can still be over 100 KB at high quality; lower the quality slider a little, or run the result through the compressor's 100 KB mode afterwards, if speed matters more than the last bit of detail.",
      ],
    },
    {
      heading: "Desktop and phone show different parts",
      id: "crop",
      body: [
        "On a computer the cover is displayed at about 820 × 312 pixels — almost the full image. On a phone it is shown at roughly 640 × 360, a taller shape, so the left and right edges are cut off. Anything near the sides, such as a name or a logo in a corner, can vanish for phone visitors.",
        "Keep text and faces in the centre of the image, and use the outer edges for background that can be lost. On personal profiles your profile picture also overlaps the lower-left part of the cover, so leave that area quiet too.",
      ],
    },
    {
      heading: "Crop to fill or pad",
      id: "fit",
      body: [
        "Crop to fill, the default, scales the image to cover the whole 851 × 315 frame and trims the overflow evenly. That suits landscapes, group photos taken from a distance and wide product shots. If the subject sits high or low in the picture, crop it yourself first with the crop button on the image card.",
        "Pad fits the whole image inside the frame and fills the sides with a colour. It works for a square logo, a poster or an event flyer that must not lose any edges — pick a background colour that matches the design.",
      ],
    },
    {
      heading: "Text, logos and PNG",
      id: "text",
      body: [
        "Facebook re-compresses covers, and JPG compression is hardest on sharp text and logos. If your cover is mostly lettering or flat graphics, choose PNG as the output format: Facebook notes that PNG often gives a better result for images with text or a logo.",
      ],
    },
    {
      heading: "Changing your cover",
      id: "upload",
      body: [
        "On your profile or page, click Edit cover photo or the camera icon on the cover, choose Upload photo and select the downloaded image. Since it is already the right size, the drag-to-reposition step should show the whole picture; save when it looks right. Facebook Pages use the same wide cover, so the same image works for a business page too.",
      ],
    },
  ],

  howToTitle: "How to resize an image for a Facebook cover",
  steps: [
    { title: "Add your image", description: "Select a JPG, PNG, WEBP, GIF or BMP — a photo, poster or design." },
    { title: "Crop or pad", description: "The 851 × 315 cover size is already set; choose Crop to fill or Pad with a colour." },
    { title: "Download", description: "Resize and download a JPG ready to set as your cover." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactly 851 × 315", description: "The cover size Facebook recommends, so no repositioning on desktop." },
    { icon: "speed", title: "Light sRGB JPG", description: "Saved as a JPG in sRGB, the format Facebook suggests for fast loading." },
    { icon: "lock", title: "In your browser", description: "Your image is resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "What size is a Facebook cover photo?", a: "Upload it at 851 × 315 pixels. Facebook shows it at about 820 × 312 on computers and 640 × 360 on phones; the minimum is 400 × 150." },
    { q: "Why is my cover cut off on mobile?", a: "Phones show a taller crop of the cover and trim the left and right edges. Keep text and faces in the centre." },
    { q: "How do I make my image 851 × 315?", a: "Add it here — the cover size is already selected. Choose Crop to fill or Pad, then resize and download." },
    { q: "JPG or PNG for a Facebook cover?", a: "JPG for photos — Facebook recommends an sRGB JPG under 100 KB. PNG for covers that are mostly text or a logo." },
    { q: "How do I get the cover under 100 KB?", a: "Lower the quality slider before resizing, or compress the result to 100 KB with the compressor afterwards." },
    { q: "Can I use the same image for a Facebook Page?", a: "Yes. Pages use the same wide cover; 851 × 315 works, with the same advice about keeping the centre clear." },
    { q: "My cover looks blurry — why?", a: "The original may be smaller than 851 × 315 and was enlarged, or Facebook compressed busy detail. Start from a larger image and keep text large." },
    { q: "Is my image uploaded anywhere?", a: "No. It is resized in your browser; only you upload it to Facebook." },
  ],

  security:
    "Your image is resized entirely in your browser. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
