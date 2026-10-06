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
import { EFFECTS_SUITE, GIF_SUITE, TOOLS_BY_ID, type Tool } from "@/lib/tools";
import type { Locale } from "@/i18n/config";
import { toolShippedIn } from "@/i18n/status";

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
    ids: ["compress-image", "resize-image", "crop-image", "rotate-image", "dpi-converter"],
  },
  {
    // The two things forms ask for besides a compressed photo. Variants
    // (3x4-photo, 2x2-photo, compress-image-to-50kb …) are not menu rows: they
    // are listed under "Sizes and presets" on the home page and in each
    // family's strip (expansion.md Phase 8).
    id: "photo-id",
    label: "Passport & Signature",
    icon: "badge",
    color: "#4F7FB8",
    ids: ["passport-photo-maker", "signature-resizer"],
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
      "round-corners",
      "merge-images",
      "split-image",
      "image-overlay",
    ],
  },
  {
    id: "effects",
    label: "Filters & Effects",
    icon: "auto_fix_high",
    color: "#7A6FB0",
    ids: EFFECTS_SUITE,
  },
  {
    id: "create",
    label: "Create",
    icon: "auto_awesome",
    color: "#C98B3E",
    ids: ["meme-generator", "html-to-image", "image-color-picker"],
  },
  {
    id: "ai",
    label: "Image AI",
    icon: "smart_toy",
    color: "#7B79C9",
    ids: [
      "remove-background",
      "remove-watermark",
      "remove-object",
      "upscale-image",
    ],
  },
  {
    id: "privacy",
    label: "Privacy & Info",
    icon: "lock",
    color: "#C55A52",
    ids: ["blur-face", "remove-exif", "image-metadata", "dpi-checker"],
  },
  {
    id: "gif",
    label: "GIF Tools",
    icon: "gif_box",
    color: "#C56A9A",
    ids: GIF_SUITE,
  },
  {
    id: "convert-format",
    label: "Convert Format",
    icon: "swap_horiz",
    color: "#4B8FC7",
    ids: [
      "convert-to-jpg",
      "convert-to-png",
      "convert-to-webp",
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
    ids: ["image-to-pdf", "image-to-text", "svg-to-png", "png-to-ico", "image-to-base64", "base64-to-image"],
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
 * Balanced by row count (section headings included), not section count,
 * keeping the three Convert sections together: 19–26 rows per column
 * (headings included). Variants are not menu rows since the Phase 8 cleanup
 * (expansion.md); their families are listed under "Sizes and presets" on the
 * home page.
 */
export const NAV_COLUMNS: string[][] = [
  ["optimize", "photo-id", "ai", "privacy"],
  ["edit", "effects", "create"],
  ["gif"],
  ["convert-format", "convert-other", "convert-camera"],
];

/**
 * Resolve a section's ids to live Tool objects, dropping anything unknown.
 * With a locale, a variant not shipped there is dropped too — image-to-hd is
 * deliberately not built for /id (`/id/hd-foto` already is that page), and
 * the menu must not link out to the English one. Regular tools keep their
 * English fallback, as everywhere else.
 */
export function navSectionTools(section: NavSection, locale?: Locale): Tool[] {
  return section.ids
    .map((id) => TOOLS_BY_ID[id])
    .filter((t): t is Tool => !!t && (!locale || !t.parentId || toolShippedIn(t.id, locale)));
}
