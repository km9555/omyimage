import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /youtube-thumbnail-resizer (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "en",
  name: "YouTube Thumbnail Resizer",
  tagline:
    "Resize any image to a YouTube thumbnail — exactly 1280 × 720 pixels, 16:9, saved as a JPG well under the 2 MB limit. Crop or pad to fit, free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "YouTube wants custom thumbnails at 1280 × 720 pixels, in a 16:9 frame, under 2 MB. A screenshot from your edit, a photo from your phone or a design exported at the wrong size rarely matches all three. This resizer opens already set to the YouTube thumbnail size: add your image, choose whether to crop it to fill the frame or pad it with a colour, and download a JPG that YouTube Studio accepts first time.",

  sections: [
    {
      heading: "The size YouTube asks for",
      id: "spec",
      body: [
        "YouTube's own guidance for custom thumbnails is a resolution of 1280 × 720 pixels, with a minimum width of 640, in JPG, GIF or PNG, and a file under 2 MB. The 16:9 shape matches the player and nearly every place a thumbnail appears, from search results to the suggested-videos column, so an image in any other shape gets bars or a crop applied by YouTube instead of by you.",
        "The resizer saves a JPG by default, because a 1280 × 720 PNG of a busy, photographic thumbnail can pass 2 MB on its own. At the default 92% quality a typical thumbnail lands in the low hundreds of kilobytes, comfortably under the limit while keeping text and faces sharp.",
      ],
    },
    {
      heading: "Crop to fill or pad",
      id: "fit",
      body: [
        "Crop to fill is the default: the image is scaled to cover the whole 16:9 frame and whatever spills over is trimmed evenly from the edges. That is right for most photos and screenshots. If your subject sits near an edge, crop the image yourself first with the crop button on its card, so the part you care about ends up in the frame.",
        "Pad keeps the entire picture and fills the remaining space with a colour you choose. Use it for a portrait phone photo, a square logo or a 4:3 slide that would lose too much if it were cropped. A solid brand colour behind the image usually looks more intentional than black bars.",
      ],
    },
    {
      heading: "Designing for a small screen",
      id: "small",
      body: [
        "Most people see your thumbnail at a fraction of its real size — a few centimetres wide in a phone feed or the sidebar. Big shapes, a clear face and three or four words of large text survive that; small print, thin fonts and busy backgrounds disappear. Look at the preview at small size before you commit.",
        "Keep the bottom-right corner clear. YouTube overlays the video's running time there, and anything important in that corner, such as the last word of a title, gets covered on every thumbnail.",
      ],
    },
    {
      heading: "Uploading in YouTube Studio",
      id: "upload",
      body: [
        "Open the video in YouTube Studio, go to Details and choose Upload file under Thumbnail. Custom thumbnails need a verified channel; if the option is greyed out, verify your account with a phone number first. Changes can take a little while to appear everywhere because thumbnails are cached.",
        "Keep your original artwork. If you later test a different title or crop, resize again from the original rather than from the downloaded JPG, so the thumbnail never loses quality through repeated saving.",
      ],
    },
    {
      heading: "From a video frame",
      id: "frame",
      body: [
        "A strong frame from the video itself is a good starting point. Pause on it in your player or editor and take a screenshot at full screen; on a 1080p screen that is already 1920 × 1080, the same 16:9 shape, so resizing to 1280 × 720 changes nothing but the pixel count. Screenshots from a phone held upright are tall rather than wide — pad them, or crop to the part that matters.",
      ],
    },
  ],

  howToTitle: "How to resize an image for a YouTube thumbnail",
  steps: [
    { title: "Add your image", description: "Select a JPG, PNG, WEBP, GIF or BMP — a screenshot, photo or design." },
    { title: "Crop or pad", description: "The YouTube thumbnail size is already set; choose Crop to fill or Pad with a colour." },
    { title: "Download", description: "Resize and download a 1280 × 720 JPG ready for YouTube Studio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Exactly 1280 × 720", description: "The 16:9 size YouTube recommends, so nothing is cropped or barred after upload." },
    { icon: "compress", title: "Under 2 MB", description: "Saved as a JPG by default, well below YouTube's thumbnail size limit." },
    { icon: "lock", title: "In your browser", description: "Your artwork is resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "What size is a YouTube thumbnail?", a: "1280 × 720 pixels, a 16:9 ratio, with a minimum width of 640 pixels. The file must be JPG, GIF or PNG and under 2 MB." },
    { q: "How do I make my image 1280 × 720?", a: "Add it here — the YouTube thumbnail size is already selected. Choose Crop to fill or Pad, then resize and download." },
    { q: "Why does YouTube say my thumbnail is too big?", a: "The file is probably over 2 MB, which happens easily with PNG. This tool saves a JPG by default, which is usually a few hundred kilobytes." },
    { q: "Should I crop or pad my image?", a: "Crop to fill for photos and screenshots, so the frame is full. Pad for portrait photos, logos or slides that would lose too much if cropped." },
    { q: "Why can't I upload a custom thumbnail?", a: "Custom thumbnails need a verified YouTube account. Verify with a phone number in YouTube's settings, then the upload option appears in Studio." },
    { q: "Can I use a PNG thumbnail?", a: "Yes, YouTube accepts PNG. Choose PNG as the output format, but check the file stays under 2 MB; JPG is the safer default." },
    { q: "What should I avoid putting in the corner?", a: "The bottom-right corner, where YouTube shows the video length. Keep text and faces away from it." },
    { q: "Can I resize several thumbnails at once?", a: "Yes. Add them all; each is resized to 1280 × 720 and they download together as a ZIP." },
    { q: "Is my image uploaded anywhere?", a: "No. It is resized in your browser; only you upload it to YouTube." },
  ],

  security:
    "Your thumbnail is resized entirely in your browser. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
