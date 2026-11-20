import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.fr";
import webpToJpg from "./webp-to-jpg.fr";
import jpgToWebp from "./jpg-to-webp.fr";
import pngToWebp from "./png-to-webp.fr";
import jfifToJpg from "./jfif-to-jpg.fr";
import gifToPng from "./gif-to-png.fr";
import gifToJpg from "./gif-to-jpg.fr";
import bmpToJpg from "./bmp-to-jpg.fr";
import avifToJpg from "./avif-to-jpg.fr";
import avifToPng from "./avif-to-png.fr";

/**
 * French converter pairs, keyed by the ENGLISH slug (the pair id).
 *
 * A pair that is not listed here has no French page: `pairTranslated()`
 * reads this map, `status.ts` gates the route, and `pairCopy()` falls back to
 * the English data — so the two stay in step instead of a /fr route rendering
 * English prose (conversion.md §6.4).
 */
export const FR_PAIR_COPY: Record<string, LocalizedPairCopy> = {
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
