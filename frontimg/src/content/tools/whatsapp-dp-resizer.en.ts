import type { ToolPageContent } from "@/content/tools/types";

/** English copy for /whatsapp-dp-resizer (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "en",
  name: "WhatsApp DP Resizer",
  tagline:
    "Put a whole photo in your WhatsApp DP without cropping it — fitted into a square with a background colour — or crop to fill. 500 × 500 px, free, in your browser.",
  category: { id: "optimize", label: "Optimize" },

  intro:
    "WhatsApp only takes square profile pictures, so when you set a wide group photo or a tall full-length shot as your DP it makes you crop most of it away. This resizer solves that the other way round: it fits the entire photo inside a square and fills the empty space with a colour, so WhatsApp has nothing left to cut. Add a photo, pick the padding colour, and download a 500 × 500 image that goes in whole.",

  sections: [
    {
      heading: "A full DP without cropping",
      id: "no-crop",
      body: [
        "The resizer opens with Pad selected. Your photo is scaled down until all of it fits inside the square, and the bars above and below — or at the sides — are filled with the padding colour, white by default. When WhatsApp's crop box appears, it already covers the whole image, so you can tap Done without losing anyone at the edge of the picture.",
        "Pick a padding colour that suits the photo: white or black is neutral, and a colour taken from the photo itself often looks more natural than either. Switch to Crop to fill when you would rather have a close-up that fills the whole circle.",
      ],
    },
    {
      heading: "The circle hides the corners",
      id: "circle",
      body: [
        "WhatsApp shows profile pictures as circles, both in chat lists and on your profile, so the corners of the square are never visible. Faces and text near the corners get clipped; keep the important part in the middle.",
        "With a padded photo the circle mostly trims the padding, which is why padding works so well. A very wide group photo will, however, appear small inside the circle — if faces become too tiny, crop the photo a little first so the people take up more of the frame.",
      ],
    },
    {
      heading: "What size to use",
      id: "size",
      body: [
        "WhatsApp does not publish an official profile-picture size; it re-compresses whatever you upload. 500 × 500 pixels is a widely used size that stays sharp on phones without being needlessly large; 192 × 192 is usually given as the smallest that still looks acceptable. To send a larger square, change the width and height under the preset, for example to 1080 × 1080; both numbers must stay equal for a square.",
        "The same size works for WhatsApp Business profile pictures, where a logo usually looks best padded with white space around it so the circle does not cut into the lettering.",
      ],
    },
    {
      heading: "Setting it as your DP",
      id: "set",
      body: [
        "Save the downloaded image to your phone, open WhatsApp, go to Settings and tap your profile photo, then choose Edit or the camera icon and pick the image from your gallery. Because it is already square, the crop step changes nothing. On a computer, download it there and choose it from WhatsApp Web or the desktop app in the same way.",
      ],
    },
    {
      heading: "Photos for groups and status",
      id: "groups",
      body: [
        "Group icons are square circles too, so the same padding trick keeps a whole team photo or a logo intact as a group picture. For a status update, which is a full-screen tall image, use the WhatsApp Status preset (1080 × 1920) from the preset list instead.",
      ],
    },
  ],

  howToTitle: "How to set a full photo as your WhatsApp DP",
  steps: [
    { title: "Add your photo", description: "Select a JPG, PNG, WEBP, GIF or BMP — any shape." },
    { title: "Pick the padding colour", description: "Pad is already on; choose white, black or any colour for the empty space." },
    { title: "Download and set", description: "Download the square image and set it as your DP — no crop needed." },
  ],

  features: [
    { icon: "crop_square", title: "No cropping", description: "The whole photo fits inside the square, so WhatsApp has nothing to cut." },
    { icon: "palette", title: "Any padding colour", description: "Fill the empty space with white, black or a colour that suits the photo." },
    { icon: "lock", title: "Private", description: "Your photo is resized on your device and never uploaded." },
  ],

  faqs: [
    { q: "How do I set a full photo as my WhatsApp DP without cropping?", a: "Add it here with Pad selected. The whole photo is fitted into a square with a background colour, so WhatsApp's crop step keeps all of it." },
    { q: "What is the right size for a WhatsApp DP?", a: "WhatsApp has no official size. 500 × 500 pixels is a common choice that looks sharp; 192 × 192 is usually given as the minimum." },
    { q: "Why does WhatsApp cut my photo?", a: "It only accepts square pictures and shows them as circles. A wide or tall photo has to be cropped unless you pad it to a square first." },
    { q: "Can I choose the background colour?", a: "Yes. White is the default; pick black or any colour under the padding colour option." },
    { q: "Does it work for WhatsApp Business?", a: "Yes. Business profile pictures are square circles too; logos look best padded with white space around them." },
    { q: "Can I make a group icon with it?", a: "Yes. Group icons are square circles, so padding keeps a whole group photo or logo visible." },
    { q: "Will WhatsApp reduce the quality?", a: "WhatsApp compresses profile pictures itself. Starting from a sharp 500 × 500 or larger square gives the best result after that." },
    { q: "Is my photo uploaded?", a: "No. It is resized in your browser; only you set it in WhatsApp." },
  ],

  security:
    "Your photo is resized entirely in your browser. Very large images may be processed on our server and deleted immediately; nothing is kept.",
};

export default content;
