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
  "image-to-text": "imagem-para-texto",
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
  "watermark-image": "marca-dagua-imagem",
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

const TOOL_SLUGS: Record<TranslatedLocale, Record<string, string>> = {
  pt: PT_TOOL_SLUGS,
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
