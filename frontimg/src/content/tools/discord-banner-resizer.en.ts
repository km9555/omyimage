import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /discord-banner-resizer (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "en",
  name: "Discord Banner Resizer",
  tagline:
    "Resize any image for Discord — a 600 × 240 profile banner, a 960 × 540 server banner or a 512 × 512 server icon — cropped or padded to fit. Free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "Discord uses a different shape for every image slot: a wide 5:2 strip for your profile banner, a 16:9 banner at the top of a server's channel list, and squares shown as circles for icons and avatars. This resizer opens on the profile banner size and lists the other Discord sizes in the same menu. Add your image, pick the slot, crop or pad it to fit, and upload something that Discord does not have to crop for you.",

  sections: [
    {
      heading: "Every Discord image size",
      id: "sizes",
      body: [
        "Profile banner: 600 × 240 pixels, a 5:2 ratio, shown at the top of your profile card. Discord states this as the minimum, and banners are a Nitro feature. Server banner: 960 × 540 pixels, 16:9, shown above the channel list; servers unlock it at Boost level 2. Server icon: a square, shown as a circle — 512 × 512 is a good size. Avatar: a square shown as a circle, at least 128 × 128.",
        "All of them accept PNG, JPG and GIF under 10 MB. Pick the slot under Preset type, and the width and height change to match.",
      ],
    },
    {
      heading: "Sharper banners at double size",
      id: "double",
      body: [
        "Discord's sizes are minimums, and high-resolution screens show a 600 × 240 banner a little soft. For a crisper result, choose Custom size and enter double the numbers — 1200 × 480 for a profile banner, 1920 × 1080 for a server banner. Discord scales them down to fit, keeping the same shape.",
        "Only do this when the original image is at least that large. Enlarging a small picture to 1200 pixels wide adds no detail, it just makes a bigger blurry file.",
      ],
    },
    {
      heading: "What your avatar covers",
      id: "overlap",
      body: [
        "On a profile card your round avatar sits over the lower-left part of the banner, and the banner is shown fairly small. Text or a face in that corner gets hidden, and fine detail is lost. Keep the subject in the centre or right half, and use bold, simple shapes.",
        "Icons and avatars are cut into circles, so their corners never show. Keep the logo or face well inside the square, or choose Pad so the whole image sits in the middle with a background colour around it.",
      ],
    },
    {
      heading: "Animated banners",
      id: "animated",
      body: [
        "Discord shows animated GIF banners and avatars to Nitro members and for boosted servers. This resizer works on still images: a GIF is resized using its first frame, and the result is a still PNG, JPG or WEBP. To keep an animation, resize it in a dedicated GIF tool instead.",
      ],
    },
    {
      heading: "Uploading to Discord",
      id: "upload",
      body: [
        "For a profile banner, open User Settings, then Profiles, and choose Change Banner. For a server banner or icon, open Server Settings, then Overview, and upload it there. Because the image already has the right shape, Discord's crop step keeps the whole picture.",
      ],
    },
  ],

  howToTitle: "How to resize an image for a Discord banner",
  steps: [
    { title: "Add your image", description: "Select a JPG, PNG, WEBP, GIF or BMP." },
    { title: "Pick the Discord slot", description: "Profile banner is preselected; switch to Server banner, Server icon or Profile, then crop or pad." },
    { title: "Download", description: "Resize and download an image that fits the slot exactly." },
  ],

  features: [
    { icon: "aspect_ratio", title: "All Discord sizes", description: "Profile banner, server banner, server icon and avatar in one menu." },
    { icon: "crop", title: "Crop or pad", description: "Fill the frame, or keep the whole image on a background colour." },
    { icon: "lock", title: "In your browser", description: "Your image is resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "What size is a Discord profile banner?", a: "600 × 240 pixels, a 5:2 ratio — Discord's minimum. For a sharper banner, use 1200 × 480. Profile banners need Nitro." },
    { q: "What size is a Discord server banner?", a: "960 × 540 pixels, 16:9. A 1920 × 1080 image is accepted and scaled down. Server banners need Boost level 2." },
    { q: "What size should a Discord server icon be?", a: "A square, shown as a circle; 512 × 512 pixels works well. Keep the logo away from the corners." },
    { q: "What is the file size limit for Discord banners?", a: "Under 10 MB, as PNG, JPG or GIF." },
    { q: "Can I make an animated banner here?", a: "No. GIFs are resized using their first frame and saved as a still image. Use a GIF tool to resize an animation." },
    { q: "Why is part of my banner hidden?", a: "Your avatar covers the lower-left area of the profile banner. Keep text and faces in the centre or right half." },
    { q: "Why is my server icon cut off at the corners?", a: "Discord shows icons as circles. Keep the logo in the middle of the square, or choose Pad so it sits on a background colour with room around it." },
    { q: "Can I resize several images at once?", a: "Yes. Add them all; each is resized to the selected Discord size and they download together as a ZIP." },
    { q: "Is my image uploaded anywhere?", a: "No. It is resized in your browser; only you upload it to Discord." },
  ],

  security:
    "Your image is resized entirely in your browser. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
