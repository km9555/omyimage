import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.pt";
import webpToJpg from "./webp-to-jpg.pt";
import jpgToWebp from "./jpg-to-webp.pt";
import pngToWebp from "./png-to-webp.pt";
import jfifToJpg from "./jfif-to-jpg.pt";
import gifToPng from "./gif-to-png.pt";
import gifToJpg from "./gif-to-jpg.pt";
import bmpToJpg from "./bmp-to-jpg.pt";
import avifToJpg from "./avif-to-jpg.pt";
import avifToPng from "./avif-to-png.pt";

/**
 * Portuguese converter pairs, keyed by the ENGLISH slug (the pair id).
 *
 * A pair that is not listed here has no Portuguese page: `pairTranslated()`
 * reads this map, `status.ts` gates the route, and `pairCopy()` falls back to
 * the English data — so the two stay in step instead of a /pt route rendering
 * English prose (conversion.md §6.4).
 */
export const PT_PAIR_COPY: Record<string, LocalizedPairCopy> = {
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
