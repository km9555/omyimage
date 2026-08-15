/**
 * Tool groupings for the navbar mega-menu — ported from oMyPDF's
 * `lib/nav-sections.ts` and re-cut for the image registry.
 *
 * These are PRESENTATION groups and are deliberately separate from
 * `CATEGORY_PILLS` in tool-categories.ts (predicates used to filter the home
 * grid). The registry's four categories are too coarse for a menu: `convert`
 * alone holds 20 tools, which would be one unreadable column, while `ai` holds
 * two. So the menu re-cuts the same tools into groups that read as a list.
 *
 * Every id here must exist in TOOLS — `navSectionTools()` drops unknown ones
 * rather than rendering a hole, but a typo would silently lose a link, so the
 * unit of truth is still tools.ts.
 *
 * Colours are the registry's own category hues (see CATEGORY_COLORS in
 * tools.ts) so a section header never disagrees with the tool icons under it.
 */
import { TOOLS_BY_ID, type Tool } from "@/lib/tools";

export interface NavSection {
  id: string;
  label: string;
  /** Material Symbols icon name. */
  icon: string;
  color: string;
  /** Tool ids, in display order. Resolved against TOOLS_BY_ID. */
  ids: string[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "optimize",
    label: "Optimize Image",
    icon: "compress",
    color: "#4F9D69",
    ids: ["compress-image", "resize-image", "crop-image", "rotate-image"],
  },
  {
    id: "edit",
    label: "Edit Image",
    icon: "edit",
    color: "#8A6FC4",
    ids: [
      "image-editor",
      "watermark-image",
      "add-border",
      "circle-crop",
      "blur-image",
      "grayscale-image",
      "merge-images",
    ],
  },
  {
    id: "create",
    label: "Create",
    icon: "auto_awesome",
    color: "#C98B3E",
    ids: ["meme-generator", "gif-maker", "html-to-image", "image-color-picker"],
  },
  {
    id: "ai",
    label: "Image AI",
    icon: "smart_toy",
    color: "#7B79C9",
    ids: ["remove-background", "upscale-image"],
  },
  {
    id: "privacy",
    label: "Privacy & Info",
    icon: "lock",
    color: "#C55A52",
    ids: ["blur-face", "remove-exif", "image-metadata"],
  },
  {
    id: "convert-format",
    label: "Convert Format",
    icon: "swap_horiz",
    color: "#4B8FC7",
    ids: [
      "convert-to-jpg",
      "jpg-to-png",
      "png-to-jpg",
      "jpg-to-webp",
      "png-to-webp",
      "webp-to-jpg",
      "webp-to-png",
      "bmp-to-jpg",
    ],
  },
  {
    id: "convert-other",
    label: "Convert To & From",
    icon: "import_export",
    color: "#4B8FC7",
    ids: ["image-to-pdf", "image-to-text", "image-to-base64", "base64-to-image", "gif-to-images"],
  },
  {
    id: "convert-camera",
    label: "Camera & Modern Formats",
    icon: "photo_camera",
    color: "#D4855A",
    ids: [
      "heic-to-jpg",
      "heic-to-png",
      "avif-to-jpg",
      "avif-to-png",
      "gif-to-jpg",
      "gif-to-png",
      "jfif-to-jpg",
    ],
  },
];

export const NAV_SECTIONS_BY_ID: Record<string, NavSection> = Object.fromEntries(
  NAV_SECTIONS.map((s) => [s.id, s]),
);

/**
 * Column layout for the 4-column desktop mega-menu, by section id.
 * Balanced by row count, not section count: column 3 carries two short
 * sections so it lands near column 1's eleven rows.
 */
export const NAV_COLUMNS: string[][] = [
  ["optimize", "edit"],
  ["create", "ai", "privacy"],
  ["convert-format", "convert-other"],
  ["convert-camera"],
];

/** Resolve a section's ids to live Tool objects, dropping anything unknown. */
export function navSectionTools(section: NavSection): Tool[] {
  return section.ids.map((id) => TOOLS_BY_ID[id]).filter((t): t is Tool => !!t);
}
