/**
 * Image sizes the social platforms actually accept, for /resize-image's
 * "Social media" mode.
 *
 * Data only — the fitting maths lives in `lib/image/fit.ts` and the UI in
 * ResizeTool. Sizes are the platforms' published upload dimensions; where a
 * platform serves several crops of one upload (Facebook covers, X headers) the
 * canonical upload size is listed, not the rendered one.
 */

export interface SocialPreset {
  label: string;
  w: number;
  h: number;
}

export interface SocialPlatform {
  id: string;
  name: string;
  presets: SocialPreset[];
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "instagram",
    name: "Instagram",
    presets: [
      { label: "Profile", w: 110, h: 110 },
      { label: "Square post", w: 1080, h: 1080 },
      { label: "Portrait post", w: 1080, h: 1350 },
      { label: "Landscape post", w: 1080, h: 566 },
      { label: "Story / Reel", w: 1080, h: 1920 },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    presets: [
      { label: "Profile", w: 170, h: 170 },
      { label: "Cover", w: 851, h: 315 },
      { label: "Shared post", w: 1200, h: 630 },
      { label: "Story", w: 1080, h: 1920 },
      { label: "Event cover", w: 1920, h: 1005 },
    ],
  },
  {
    id: "x",
    name: "X (Twitter)",
    presets: [
      { label: "Profile", w: 400, h: 400 },
      { label: "Header", w: 1500, h: 500 },
      { label: "Post image", w: 1600, h: 900 },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    presets: [
      { label: "Profile", w: 400, h: 400 },
      { label: "Cover", w: 1584, h: 396 },
      { label: "Post image", w: 1200, h: 627 },
      { label: "Company logo", w: 300, h: 300 },
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    presets: [
      { label: "Channel icon", w: 800, h: 800 },
      { label: "Channel art", w: 2560, h: 1440 },
      { label: "Thumbnail", w: 1280, h: 720 },
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    presets: [
      { label: "Profile", w: 165, h: 165 },
      { label: "Standard pin", w: 1000, h: 1500 },
      { label: "Square pin", w: 1000, h: 1000 },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    presets: [
      { label: "Profile", w: 200, h: 200 },
      { label: "Video / Story", w: 1080, h: 1920 },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    presets: [
      { label: "Profile", w: 500, h: 500 },
      { label: "Status", w: 1080, h: 1920 },
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    presets: [
      { label: "Profile", w: 320, h: 320 },
      { label: "Story", w: 1080, h: 1920 },
    ],
  },
];

/** Dropdown text, e.g. `Portrait post (1080 × 1350)`. */
export const presetLabel = (p: SocialPreset) => `${p.label} (${p.w} × ${p.h})`;

/** Marks "the width/height no longer match any preset" in the Preset select. */
export const CUSTOM_PRESET = "__custom";
