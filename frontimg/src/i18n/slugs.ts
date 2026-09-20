/**
 * Translated tool slugs, keyed by tool **id**. Ported from oMyPDF.
 *
 * Keyed by id and NOT by slug: every oMyImage id happens to equal its English
 * slug today, but oMyPDF has five that differ and the id is the only key
 * guaranteed to stay stable. English slugs are NOT repeated here — they are
 * read straight from the tool registry so the two can't drift.
 *
 * ── Slug conventions (Portuguese — Brazilian) ──────────────────────────────
 * Hyphen-separated, all lowercase, ASCII only (ã→a, ç→c, é→e, "d'água"→dagua)
 * so URLs never percent-encode in sitemaps, analytics or shared links.
 *
 * The slug carries the phrase Brazilians actually search, checked against the
 * market rather than translated word by word (conversion.md §5):
 *   • "x para y" is the converter pattern — iLoveIMG /pt/png-para-jpg, Adobe
 *     BR, Smallpdf /pt all use it.
 *   • Brazilian vocabulary over European: girar (not rodar), rosto (not cara).
 *     iLoveIMG /pt uses rodar-imagem and desfocar-cara, and mixes "ficheiro"
 *     into Brazilian copy; that inconsistency is a thing to beat, not copy.
 *
 * ── Slug conventions (Hindi) ───────────────────────────────────────────────
 * Hindi keeps the **English** slug: `/hi/compress-image`, not
 * `/hi/image-compress-karen`.
 *
 * Both localized competitors do this — iLoveIMG ships `/hi/compress-image`,
 * `/hi/resize-image` and `/hi/remove-background` (verified live 2026-09-20),
 * and Smallpdf `/hi/compress-pdf`. Indian searches for these tools are
 * overwhelmingly typed in English or Hinglish, so a transliterated slug would
 * carry a phrase nobody searches while permanently owning the URL. The Hindi
 * page still competes for Hindi-script queries — through its COPY, which is
 * where "फोटो का साइज कम करें" belongs.
 *
 * It is also the only form the codebase allows: the audit requires ASCII-only
 * slugs so URLs never percent-encode, and Devanagari cannot be expressed in
 * `[a-z0-9-]`.
 *
 * The map below is therefore 40 identical pairs. That is deliberate and it is
 * NOT to be replaced with `Object.fromEntries(TOOLS.map(…))`: a derived map has
 * no literal `"key": "value"` pairs and no closing `};` of its own, which broke
 * two of oMyPDF's regex parsers (its conversion.md §4.28) — ours read this file
 * the same way (i18n-verify, i18n-audit, gen-converters, verify-build).
 *
 * A slug is FOREVER once shipped (listed in status.ts) — changing one orphans
 * its rankings. Until then it can still be corrected at the start of its batch.
 */
import { TOOLS, TOOLS_BY_ID } from "@/lib/tools";
import {
  DEFAULT_LOCALE,
  LOCALE_PREFIX,
  type Locale,
  type TranslatedLocale,
} from "@/i18n/config";

const PT_TOOL_SLUGS: Record<string, string> = {
  // ── Otimizar ─────────────────────────────────────────────────────────
  "compress-image": "comprimir-imagem",
  "resize-image": "redimensionar-imagem",
  "crop-image": "recortar-imagem",
  "rotate-image": "girar-imagem",

  // ── Converter ────────────────────────────────────────────────────────
  "convert-to-jpg": "converter-para-jpg",
  "png-to-jpg": "png-para-jpg",
  "jpg-to-png": "jpg-para-png",
  "webp-to-png": "webp-para-png",
  "heic-to-png": "heic-para-png",
  "image-to-text": "imagem-em-texto",
  "webp-to-jpg": "webp-para-jpg",
  "jpg-to-webp": "jpg-para-webp",
  "png-to-webp": "png-para-webp",
  "jfif-to-jpg": "jfif-para-jpg",
  "gif-to-png": "gif-para-png",
  "gif-to-jpg": "gif-para-jpg",
  "bmp-to-jpg": "bmp-para-jpg",
  "avif-to-jpg": "avif-para-jpg",
  "avif-to-png": "avif-para-png",
  "heic-to-jpg": "heic-para-jpg",
  "image-to-pdf": "imagem-para-pdf",
  "image-to-base64": "imagem-para-base64",
  "base64-to-image": "base64-para-imagem",
  "gif-to-images": "gif-para-imagens",

  // ── Editar e criar ───────────────────────────────────────────────────
  "image-editor": "editor-de-fotos",
  "watermark-image": "colocar-marca-dagua",
  "meme-generator": "gerador-de-memes",
  "html-to-image": "html-para-imagem",
  "blur-face": "desfocar-rosto",
  "grayscale-image": "imagem-preto-e-branco",
  "blur-image": "desfocar-imagem",
  "add-border": "adicionar-borda",
  "circle-crop": "recortar-imagem-em-circulo",
  "merge-images": "juntar-imagens",
  "image-color-picker": "seletor-de-cores",
  "image-metadata": "ver-metadados-imagem",
  "remove-exif": "remover-exif",
  "gif-maker": "criar-gif",

  // ── IA ───────────────────────────────────────────────────────────────
  "remove-background": "remover-fundo",
  "upscale-image": "melhorar-qualidade-imagem",
};

/** Hindi keeps the English slug — see the header. Authored, never derived. */
const HI_TOOL_SLUGS: Record<string, string> = {
  // ── ऑप्टिमाइज़ ─────────────────────────────────────────────────────────
  "compress-image": "compress-image",
  "resize-image": "resize-image",
  "crop-image": "crop-image",
  "rotate-image": "rotate-image",

  // ── कन्वर्ट ──────────────────────────────────────────────────────────
  "convert-to-jpg": "convert-to-jpg",
  "png-to-jpg": "png-to-jpg",
  "jpg-to-png": "jpg-to-png",
  "webp-to-png": "webp-to-png",
  "heic-to-png": "heic-to-png",
  "image-to-text": "image-to-text",
  "webp-to-jpg": "webp-to-jpg",
  "jpg-to-webp": "jpg-to-webp",
  "png-to-webp": "png-to-webp",
  "jfif-to-jpg": "jfif-to-jpg",
  "gif-to-png": "gif-to-png",
  "gif-to-jpg": "gif-to-jpg",
  "bmp-to-jpg": "bmp-to-jpg",
  "avif-to-jpg": "avif-to-jpg",
  "avif-to-png": "avif-to-png",
  "heic-to-jpg": "heic-to-jpg",
  "image-to-pdf": "image-to-pdf",
  "image-to-base64": "image-to-base64",
  "base64-to-image": "base64-to-image",
  "gif-to-images": "gif-to-images",

  // ── एडिट और क्रिएट ───────────────────────────────────────────────────
  "image-editor": "image-editor",
  "watermark-image": "watermark-image",
  "meme-generator": "meme-generator",
  "html-to-image": "html-to-image",
  "blur-face": "blur-face",
  "grayscale-image": "grayscale-image",
  "blur-image": "blur-image",
  "add-border": "add-border",
  "circle-crop": "circle-crop",
  "merge-images": "merge-images",
  "image-color-picker": "image-color-picker",
  "image-metadata": "image-metadata",
  "remove-exif": "remove-exif",
  "gif-maker": "gif-maker",

  // ── AI ───────────────────────────────────────────────────────────────
  "remove-background": "remove-background",
  "upscale-image": "upscale-image",
};

const TOOL_SLUGS: Record<TranslatedLocale, Record<string, string>> = {
  pt: PT_TOOL_SLUGS,
  hi: HI_TOOL_SLUGS,
};

/** The slug a tool uses in `locale` (no prefix). English → the registry slug. */
export function toolSlug(toolId: string, locale: Locale): string {
  const english = TOOLS_BY_ID[toolId]?.slug ?? toolId;
  if (locale === DEFAULT_LOCALE) return english;
  return TOOL_SLUGS[locale][toolId] ?? english;
}

/** True when `locale` has its own slug for this tool (rather than falling back). */
export function hasTranslatedSlug(toolId: string, locale: Locale): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  return toolId in TOOL_SLUGS[locale];
}

/** Full path for a tool in a locale: `/compress-image`, `/pt/comprimir-imagem`. */
export function toolPath(toolId: string, locale: Locale): string {
  return `${LOCALE_PREFIX[locale]}/${toolSlug(toolId, locale)}`;
}

/** slug → id, per locale. */
const REVERSE: Record<string, Record<string, string>> = (() => {
  const out: Record<string, Record<string, string>> = {
    [DEFAULT_LOCALE]: Object.fromEntries(TOOLS.map((t) => [t.slug, t.id])),
  };
  for (const [locale, map] of Object.entries(TOOL_SLUGS)) {
    out[locale] = Object.fromEntries(Object.entries(map).map(([id, slug]) => [slug, id]));
  }
  return out;
})();

/** The tool id a slug names in `locale`, or undefined. */
export function toolIdFromSlug(slug: string, locale: Locale): string | undefined {
  return REVERSE[locale]?.[slug];
}

/** Every translated slug map — for the audit script and the slug tests. */
export function translatedSlugMaps(): Record<TranslatedLocale, Record<string, string>> {
  return TOOL_SLUGS;
}
