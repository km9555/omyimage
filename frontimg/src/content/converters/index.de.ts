import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.de";
import webpToJpg from "./webp-to-jpg.de";
import jpgToWebp from "./jpg-to-webp.de";
import pngToWebp from "./png-to-webp.de";
import jfifToJpg from "./jfif-to-jpg.de";
import gifToPng from "./gif-to-png.de";
import gifToJpg from "./gif-to-jpg.de";
import bmpToJpg from "./bmp-to-jpg.de";
import avifToJpg from "./avif-to-jpg.de";
import avifToPng from "./avif-to-png.de";

/**
 * German converter pairs, keyed by the ENGLISH slug (the pair id).
 *
 * A pair that is not listed here has no German page: `pairTranslated()`
 * reads this map, `status.ts` gates the route, and `pairCopy()` falls back to
 * the English data — so the two stay in step instead of a /de route rendering
 * English prose (conversion.md §6.4).
 */
export const DE_PAIR_COPY: Record<string, LocalizedPairCopy> = {
  "webp-to-png": webpToPng,
  "webp-to-jpg": webpToJpg,
  "jpg-to-webp": jpgToWebp,
  "png-to-webp": pngToWebp,
  "jfif-to-jpg": jfifToJpg,
  "gif-to-png": gifToPng,
  "gif-to-jpg": gifToJpg,
  "bmp-to-jpg": bmpToJpg,
  "avif-to-jpg": avifToJpg,
  "avif-to-png": avifToPng,
};
