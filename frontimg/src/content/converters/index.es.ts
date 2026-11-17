import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.es";
import webpToJpg from "./webp-to-jpg.es";
import jpgToWebp from "./jpg-to-webp.es";
import pngToWebp from "./png-to-webp.es";
import jfifToJpg from "./jfif-to-jpg.es";
import gifToPng from "./gif-to-png.es";
import gifToJpg from "./gif-to-jpg.es";
import bmpToJpg from "./bmp-to-jpg.es";
import avifToJpg from "./avif-to-jpg.es";
import avifToPng from "./avif-to-png.es";

/**
 * Spanish converter pairs, keyed by the ENGLISH slug (the pair id).
 *
 * A pair that is not listed here has no Spanish page: `pairTranslated()`
 * reads this map, `status.ts` gates the route, and `pairCopy()` falls back to
 * the English data — so the two stay in step instead of a /es route rendering
 * English prose (conversion.md §6.4).
 */
export const ES_PAIR_COPY: Record<string, LocalizedPairCopy> = {
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
