/**
 * German site-level copy — the brand tagline and the description used for the
 * `/de` layout defaults, the German home page and its Open Graph card.
 *
 * Written for the German SERP snippet, not as a translation of the English
 * one. The English tagline ("Effortless Power for Image Workflows") is a brand
 * line with no German search volume; the German line leads with the generic
 * jobs people actually type — "Bilder bearbeiten" (12.1K), "Bilder
 * komprimieren" (9.9K), "Bild in … umwandeln" (the conversion family) — then
 * "kostenlos" and "online", the two modifiers nearly every German image query
 * carries (i18n-de-brief.md).
 *
 * The description adds the single biggest German query, "Hintergrund
 * entfernen" (60.5K), and "Bildgröße ändern", names the formats people
 * convert between, and closes on the objections that decide the click: runs
 * in the browser, no sign-up, no watermark. Addressed as Sie implicitly — the
 * snippet uses infinitives, as German tool SERPs do.
 */

export const deSite = {
  tagline: "Bilder bearbeiten, komprimieren und umwandeln – kostenlos online",
  description:
    "Bilder kostenlos online bearbeiten, komprimieren und umwandeln: Hintergrund entfernen, Bildgröße ändern, JPG, PNG, WebP und HEIC – im Browser, ohne Anmeldung.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Bilder bearbeiten, komprimieren und umwandeln – kostenlos online",
  homeIntro:
    "Bilder komprimieren, skalieren, umwandeln und bearbeiten — direkt in Ihrem Browser, ohne Installation, ohne Anmeldung und ohne Wasserzeichen.",
} as const;
