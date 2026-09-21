import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.hi";
import webpToJpg from "./webp-to-jpg.hi";
import jpgToWebp from "./jpg-to-webp.hi";
import pngToWebp from "./png-to-webp.hi";
import jfifToJpg from "./jfif-to-jpg.hi";

/**
 * Every Hindi converter pair, keyed by the ENGLISH slug (the pair id), which
 * is also the Hindi slug — /hi keeps English slugs (i18n/slugs.ts).
 *
 * `Record<string, …>` rather than a closed union, so the map can list a subset
 * of pairs while a batch is in flight; a pair shows on /hi only once it is
 * also in status.ts SHIPPED_TOOLS.
 */
export const HI_PAIR_COPY: Record<string, LocalizedPairCopy> = {
  "webp-to-png": webpToPng,
  "webp-to-jpg": webpToJpg,
  "jpg-to-webp": jpgToWebp,
  "png-to-webp": pngToWebp,
  "jfif-to-jpg": jfifToJpg,
};
