import type { LocalizedPairCopy } from "@/lib/converters/types";
import webpToPng from "./webp-to-png.ru";
import webpToJpg from "./webp-to-jpg.ru";
import jpgToWebp from "./jpg-to-webp.ru";
import pngToWebp from "./png-to-webp.ru";
import jfifToJpg from "./jfif-to-jpg.ru";

/**
 * Every Russian converter pair, keyed by the ENGLISH slug (the pair id), which
 * is also the Russian slug — /ru keeps English slugs (i18n/slugs.ts).
 *
 * `Record<string, …>` rather than a closed union, so the map can list a subset
 * of pairs while a batch is in flight; a pair shows on /ru only once it is
 * also in status.ts SHIPPED_TOOLS.
 */
export const RU_PAIR_COPY: Record<string, LocalizedPairCopy> = {
  "webp-to-png": webpToPng,
  "webp-to-jpg": webpToJpg,
  "jpg-to-webp": jpgToWebp,
  "png-to-webp": pngToWebp,
  "jfif-to-jpg": jfifToJpg,
};
