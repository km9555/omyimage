import type { ToolPageContent } from "@/content/tools/types";

/**
 * English copy for /instagram-grid-maker (variant of split-image, preset
 * mode "instagram"). Demand 2026-10-04: US "instagram grid maker" 6.6K.
 * Facts written to: the profile grid shows 3:4 thumbnails, three per row,
 * newest top-left (since January 2025); feed photos are stored 1080 px wide.
 */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "en",
  name: "Instagram Grid Maker",
  tagline:
    "Turn one photo into a seamless Instagram profile grid — 3, 6, 9 or up to 15 posts — or a panorama carousel that flows as people swipe. Cropped to Instagram's shapes, sized at 1080 px and numbered in posting order.",
  category: { id: "edit", label: "Edit" },

  intro:
    "A grid post is one big picture spread across several Instagram posts, so that your profile shows it whole while each post stands on its own in the feed. Getting it right by hand means cropping to an odd shape, cutting the photo into exact thirds, resizing every piece and remembering to upload them backwards. Instagram Grid Maker does all of it: choose how many rows, pick the post shape, drag the photo to frame it, and download the posts already numbered in the order to share them. It also makes seamless carousels — one wide panorama cut into slides that join up as you swipe.",

  sections: [
    {
      heading: "How the profile grid works",
      id: "profile-grid",
      body: [
        "Your profile shows posts three to a row, newest first, starting at the top left. Since January 2025 the thumbnails are tall 3:4 rectangles rather than squares. Cut a picture into three columns, post the pieces in the right order, and the profile shows it as one image.",
        "One row needs 3 posts, two rows 6, three rows 9. This tool goes up to five rows — 15 posts — which is about as much as a profile shows on a phone screen without scrolling.",
      ],
    },
    {
      heading: "Which post shape to choose",
      id: "shapes",
      body: [
        "3:4 (1080 × 1440 pixels) is the shape of the grid thumbnails, so what you see in the preview is exactly what your profile shows, with no seams lost between posts. 4:5 (1080 × 1350) is the classic tall feed post; the grid trims about 3 % from each side of it, so the joins jump very slightly. Square 1:1 posts lose an eighth of their width on each side in the grid, which is noticeable on lines that cross from post to post.",
        "Choose 3:4 unless your Instagram app crops 3:4 photos to 4:5 when you upload them — in that case pick 4:5, which every version of the app accepts uncropped.",
      ],
    },
    {
      heading: "Posting in the right order",
      id: "order",
      body: [
        "Because the newest post appears top left, the puzzle is posted backwards: piece 1 is the bottom-right corner and goes up first, and the top-left piece goes up last. The files are numbered that way — photo_post-01.jpg, photo_post-02.jpg and so on — and the preview shows the same numbers on each piece.",
        "Post them all in one go, and keep later posts in groups of three: a single extra post shifts every piece one place and breaks the picture. Pinned posts always sit in the first places of the grid, so unpin them while you post, or pin a whole row of three.",
      ],
    },
    {
      heading: "Seamless carousels",
      id: "carousel",
      body: [
        "Choose Carousel to cut a wide picture into 2 to 10 slides in a single row. Add them to one post in number order; as people swipe, each slide continues exactly where the last one ended, so a landscape, a group photo or a long banner reads as one continuous image. 4:5 slides fill the most screen on a phone; square slides suit wide panoramas that would otherwise need many slides.",
      ],
    },
    {
      heading: "Framing the photo",
      id: "framing",
      body: [
        "The whole grid has one shape — three 3:4 posts across and three rows down make a 3:4 portrait, while a single row of three makes a wide 9:4 strip — so most photos have more picture than fits. The part outside the grid is shaded in the preview. Drag the photo, or use the position sliders, to choose what goes into the posts, and keep faces and words away from the cut lines, where they would be split between two posts.",
      ],
    },
    {
      heading: "Size and quality",
      id: "quality",
      body: [
        "Each post comes out 1080 pixels wide, the width Instagram stores feed photos at, so the app does not shrink them again. A photo with fewer pixels than that keeps its own resolution rather than being enlarged. Posts are saved as JPG at 92 % quality by default; Instagram re-compresses every upload, so a higher setting rarely shows, but PNG is there if you prefer to hand over untouched pixels.",
      ],
    },
    {
      heading: "Ideas for grid posts",
      id: "ideas",
      body: [
        "Brands use a grid to announce a launch or a sale with one bold image that takes over the profile. Photographers post a single landscape across a row of three. Artists reveal a large drawing in pieces over a day. Event organisers turn a poster into a 3 × 3 that is impossible to miss, and travellers make a carousel of a whole panorama instead of cropping it to fit.",
      ],
    },
    {
      heading: "Privacy",
      id: "privacy",
      body: [
        "Your photo is cut and resized entirely in your browser. Nothing is uploaded to our servers, and nothing is kept after you close the page.",
      ],
    },
  ],

  howToTitle: "How to make an Instagram grid",
  steps: [
    { title: "Add your photo", description: "Choose one JPG, PNG or WEBP image." },
    { title: "Set up the grid", description: "Pick the number of rows and the post shape, then drag the photo to frame it." },
    { title: "Download and post", description: "Click Make the grid and post the pieces in number order, 1 first." },
  ],

  features: [
    { icon: "photo_library", title: "Grid or carousel", description: "A 3-wide profile grid of up to 15 posts, or a carousel of up to 10 slides." },
    { icon: "check", title: "Numbered for posting", description: "Files and preview show the order to post them in." },
    { icon: "lock", title: "No uploads", description: "Made entirely in your browser." },
  ],

  faqs: [
    { q: "How do I make a grid post on Instagram?", a: "Add your photo, choose the rows and shape, click Make the grid, then post the pieces in number order starting with 1." },
    { q: "Which piece do I post first?", a: "Number 1 — the bottom-right piece. The top-left piece goes last, because Instagram shows the newest post first." },
    { q: "What size is each post?", a: "1080 × 1440 px for 3:4, 1080 × 1350 px for 4:5 and 1080 × 1080 px for square — or smaller if your photo has fewer pixels." },
    { q: "Should I use 3:4 or 4:5?", a: "3:4 matches the profile grid exactly. Use 4:5 if your app crops 3:4 photos when you upload them." },
    { q: "How many posts can a grid have?", a: "Three per row, from one row (3 posts) to five rows (15 posts)." },
    { q: "Why does my grid look broken?", a: "Usually a pinned post or a later single post shifted it. Unpin posts while posting and add new posts in threes." },
    { q: "What is a seamless carousel?", a: "One wide picture cut into slides of a single post, so it continues across the slides as people swipe." },
    { q: "How many carousel slides can I make?", a: "From 2 to 10, in 4:5 or square." },
    { q: "Can I choose which part of the photo is used?", a: "Yes. Drag the photo in the preview or use the position sliders; the shaded part is left out." },
    { q: "Will Instagram lower the quality?", a: "It re-compresses every upload, but 1080-pixel-wide posts are not resized again, which keeps them as sharp as possible." },
    { q: "Is my photo uploaded?", a: "No. Everything happens in your browser." },
    { q: "Does it work on a phone?", a: "Yes. Download the ZIP, open it in your phone's files app and share the posts to Instagram from there." },
    { q: "Is it free?", a: "Yes. No account, no watermark and no limits." },
  ],

  security:
    "Your photo is cut and resized entirely in your browser. Nothing is uploaded, stored or tracked.",
};

export default content;
