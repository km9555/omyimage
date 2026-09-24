import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.id";
import webpToJpg from "./webp-to-jpg.id";
import jpgToWebp from "./jpg-to-webp.id";
import pngToWebp from "./png-to-webp.id";
import jfifToJpg from "./jfif-to-jpg.id";

/**
 * Indonesian converter pairs, keyed by the ENGLISH slug (the pair id). /id uses
 * translated slugs (`webp-ke-png`), which come from ID_TOOL_SLUGS in
 * i18n/slugs.ts — this map is keyed by pair id, never by the Indonesian slug.
 *
 * A pair that is not listed here has no Indonesian page: `pairTranslated()`
 * reads this map, `status.ts` gates the route, and `pairCopy()` falls back to
 * the English data — so the two stay in step instead of an /id route rendering
 * English prose (conversion.md §6.4). Batch 6 adds the other five.
 */
export const ID_PAIR_COPY: Record<string, LocalizedPairCopy> = {
  "webp-to-png": webpToPng,
  "webp-to-jpg": webpToJpg,
  "jpg-to-webp": jpgToWebp,
  "png-to-webp": pngToWebp,
  "jfif-to-jpg": jfifToJpg,
};
