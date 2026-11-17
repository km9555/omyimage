/**
 * Spanish site-level copy — the brand tagline and the description used for the
 * `/es` layout defaults, the Spanish home page and its Open Graph card.
 *
 * Written for the Spanish and Mexican SERP snippet, not as a translation of
 * the English one. The English tagline ("Effortless Power for Image
 * Workflows") is a brand line with no Spanish search volume; the Spanish line
 * leads with the jobs people actually type — "quitar fondo" (201K ES / 450K MX,
 * the biggest Spanish image query by far), "comprimir imagen" (14.8K / 27.1K)
 * and the "convertir … a …" family — then "gratis" and "online", the two
 * modifiers nearly every Spanish image query carries (i18n-es-brief.md).
 *
 * The description adds "redimensionar", names the formats people convert
 * between, and closes on the objections that decide the click: runs in the
 * browser, no sign-up, no watermark. Neutral Spanish, tú implied — the snippet
 * uses imperatives/infinitives as Spanish tool SERPs do.
 */

export const esSite = {
  tagline: "Quitar fondo, comprimir y convertir imágenes gratis online",
  description:
    "Quita el fondo, comprime, redimensiona y convierte imágenes gratis y online: JPG, PNG, WebP y HEIC en tu navegador, sin registro y sin marca de agua.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Quitar fondo, comprimir y convertir imágenes gratis online",
  homeIntro:
    "Comprime, redimensiona, convierte y edita imágenes directamente en tu navegador — sin instalar nada, sin registro y sin marca de agua.",
} as const;
