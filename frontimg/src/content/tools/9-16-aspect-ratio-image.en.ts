import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /9-16-aspect-ratio-image (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "en",
  name: "9:16 Aspect Ratio Image Converter",
  tagline:
    "Turn any photo, screenshot or AI image into a 9:16 image of exactly 1080 × 1920 pixels — cropped, padded or blur-filled, never stretched. Free, in your browser.",
  category: { id: "optimize", label: "Optimize" },
  crossLink: { lead: "Picture narrower than 1080 pixels?", label: "Upscale it first", toolId: "upscale-image" },

  intro:
    "Stories, Reels, Shorts, TikToks and Google Web Stories all fill a phone held upright, and they all want the same shape: 9:16, ideally 1080 × 1920 pixels. Most pictures are not that shape. A landscape photo, a square AI render or a 4:3 phone shot gets cropped by the app wherever it likes, or squeezed into a letterbox. This converter opens already set to 1080 × 1920. Add your images, decide how each one should become 9:16 — crop it, pad it with a colour, or fill the gaps with a blurred copy of itself — and download files that fit the screen edge to edge.",

  sections: [
    {
      heading: "What a 9:16 aspect ratio is",
      id: "ratio",
      body: [
        "An aspect ratio is the shape of an image, written width : height. 9:16 means nine units across for every sixteen down — a tall rectangle, the exact shape of a modern phone screen held upright. It is 16:9, the widescreen TV and YouTube shape, turned on its side. Divide 9 by 16 and you get 0.5625; any image whose width divided by its height gives 0.5625 is 9:16, whatever its size.",
        "The ratio says nothing about sharpness on its own. 720 × 1280, 1080 × 1920 and 2160 × 3840 are all 9:16; they differ only in how many pixels carry the picture. That is why a 9:16 image can still look soft: the shape is right, but there are too few pixels for a large phone screen.",
      ],
    },
    {
      heading: "Why 1080 × 1920 pixels is the standard",
      id: "pixels",
      body: [
        "1080 × 1920 (often written 1080x1920) is Full HD turned upright: 1080 pixels wide, 1920 pixels tall, about 2.1 megapixels. It is the size the big vertical-video apps recommend for full-screen posts, and the size a phone records upright Full HD video at. Upload anything larger and the app scales it down; upload less and it scales it up, which is where the blur creeps in.",
        "Saved as a JPG at the default 92% quality, a 1080 × 1920 photo usually weighs a few hundred kilobytes — small enough for any upload form, with plenty of detail for the screen.",
      ],
    },
    {
      heading: "Where 9:16 images are used",
      id: "uses",
      body: [
        "Instagram Stories and Reels: Stories fill the screen at 1080 × 1920. Reels play at the same size, but your profile grid shows a cropped preview, so keep the subject near the middle. Meta suggests leaving about 14% at the top and bottom — roughly 250 pixels — free of text, because the profile name and reply bar sit there.",
        "TikTok and YouTube Shorts: both are vertical-first, and both overlay buttons down the right edge and the caption along the bottom. Keep everything you want seen in the upper-middle part of a 1080 × 1920 slide or cover image. WhatsApp Status, Snapchat and Facebook Stories fill the screen the same way.",
        "Google Web Stories: every page of a Web Story is a full-bleed portrait screen, and 9:16 at 1080 × 1920 is the shape that fills it without letterboxing. Making each page the same size also stops the story jumping as readers tap through. The story's poster image is a different shape — 3:4, at least 640 × 853 pixels — so make that separately.",
      ],
      link: {
        label: "Read the guide: Google Web Stories with AI images (sizes, speed and Google's rules)",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "Converting to 9:16 without stretching",
      id: "convert",
      body: [
        "Stretching a picture to 1080 × 1920 makes faces long and circles oval, so this tool never does it. A picture of any other shape becomes 9:16 in one of three honest ways, and you pick the one that suits the picture.",
        "Crop to fill (the default) scales the picture until it covers the whole 9:16 frame and trims the overflow. It suits portrait photos: a 3:4 phone shot loses only a quarter of its width. It is hard on landscape ones — a 4:3 photo keeps just 42% of its width — so press the crop button on the image's card first. The crop window opens locked to 9:16, and you drag the frame over the part that matters instead of getting the centre.",
        "Pad keeps the whole picture and fills the bands above and below with a colour you choose — black, white, or a brand colour. Blur fill keeps the whole picture too, but fills those bands with a softened, enlarged copy of the same image, the look Reels and TikTok use for landscape clips. It is usually the best choice for wide photos, screenshots and slides, because nothing is lost and the screen still looks full.",
      ],
    },
    {
      heading: "Keeping it sharp",
      id: "sharp",
      body: [
        "Cropping a landscape picture to 9:16 leaves a narrow slice that often has fewer than 1080 pixels across. A 1920 × 1080 screenshot, cropped to 9:16, is only 608 × 1080, so it has to be enlarged almost two times to reach 1080 × 1920. Blur fill avoids that: the picture is shown across the full 1080-pixel width, which the 1920-pixel screenshot covers without any enlarging. For pictures that are small to begin with, run them through an AI upscaler before converting.",
        "AI image generators rarely produce 9:16 at full size. Many default to a square, ChatGPT's tall option is 1024 × 1536, which is 2:3, and Midjourney's 9:16 output is about 816 × 1456. Crop or blur-fill them here; for a crisper result, upscale the 816 × 1456 kind first.",
      ],
    },
  ],

  howToTitle: "How to convert an image to 9:16 (1080 × 1920)",
  steps: [
    { title: "Add your images", description: "Select one or more JPG, PNG, WEBP, GIF or BMP files — photos, screenshots or AI images." },
    { title: "Choose how to fit", description: "1080 × 1920 is already set. Pick Crop to fill, Pad or Blur fill; to crop by hand, use the crop button on the card." },
    { title: "Download", description: "Press Resize & download for a 9:16 image, or a ZIP when you added several." },
  ],

  features: [
    { icon: "crop_portrait", title: "Exactly 1080 × 1920", description: "Every image comes out in the 9:16 Full HD size Stories, Reels, Shorts and Web Stories expect." },
    { icon: "blur_on", title: "Crop, pad or blur", description: "Three ways to change the shape without stretching, including a blurred background made from your own photo." },
    { icon: "lock", title: "Runs in your browser", description: "Your pictures are converted on your device and are not uploaded." },
  ],

  faqs: [
    { q: "What is a 9:16 aspect ratio?", a: "A tall rectangle nine units wide for every sixteen high — the shape of a phone screen held upright. It is the widescreen 16:9 shape rotated 90 degrees." },
    { q: "What size is a 9:16 image in pixels?", a: "1080 × 1920 is the standard. 720 × 1280 and 2160 × 3840 are also 9:16, with fewer or more pixels; 1080 × 1920 is what most apps recommend." },
    { q: "Is 1080x1920 the same as 9:16?", a: "Yes. 1080 divided by 1920 is 0.5625, exactly 9 divided by 16. Every 1080 × 1920 image is 9:16." },
    { q: "How do I convert an image to 9:16 without stretching it?", a: "Add it here and choose Crop to fill, Pad or Blur fill. Each one gives exactly 1080 × 1920 while keeping the picture's proportions; none of them stretches it." },
    { q: "Can I choose which part of my photo is kept?", a: "Yes. With Crop to fill selected, press the crop button on the image's card. The crop window opens locked to 9:16; drag the frame over your subject and apply." },
    { q: "What is the difference between 9:16 and 16:9?", a: "Orientation. 16:9 is wide (TV, YouTube videos, laptop screens); 9:16 is the same shape standing up (Stories, Reels, Shorts, phone screens)." },
    { q: "Why does my 9:16 image look blurry?", a: "Usually the source had too few pixels: a narrow crop from a landscape picture is enlarged to reach 1080 × 1920. Use Blur fill, or upscale the image first." },
    { q: "Will Instagram crop my 9:16 picture?", a: "Not in Stories, which show 9:16 in full. A Reel plays full screen too, but its preview on your profile grid is cropped, so keep the subject near the centre." },
    { q: "Can I convert several images to 9:16 at once?", a: "Yes. Add them together; each becomes 1080 × 1920 with the fit you chose, and they download as one ZIP." },
    { q: "Are my photos uploaded to convert them?", a: "No. The conversion runs in your browser. Only a picture too large for your browser to open is shrunk on our server first, and it is deleted straight away." },
  ],

  security:
    "Your images are converted in your browser and are not uploaded. Only a picture too large for your browser to handle — a very high-megapixel photo — is sent to our server to be shrunk, and it is deleted as soon as it is returned; nothing is stored.",
};

export default content;
