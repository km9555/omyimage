/**
 * French site-level copy — the brand tagline and the description used for the
 * `/fr` layout defaults, the French home page and its Open Graph card.
 *
 * Written for the French SERP snippet, not as a translation of the English
 * one. The English tagline ("Effortless Power for Image Workflows") is a brand
 * line with no French search volume; the French line leads with the jobs
 * people actually type — « compresser une image » (33.1K), « convertir … en …
 * » (PNG en JPG 22.2K, HEIC en JPG 14.8K) and « supprimer l'arrière-plan »
 * (12.1K) — then « gratuit » and « en ligne », the modifiers nearly every
 * French image query carries (i18n-fr-brief.md).
 *
 * The description adds « image en PDF » (49.5K, the biggest single French
 * image query), « redimensionner », names the formats people convert between,
 * and closes on the objections that decide the click: runs in the browser,
 * no sign-up, no watermark. Infinitives in the tagline and H1 as French tool
 * SERPs use them; the intro addresses the reader as vous.
 */

export const frSite = {
  tagline: "Compresser, convertir, supprimer l'arrière-plan — gratuit et en ligne",
  description:
    "Compressez, convertissez et redimensionnez vos images, supprimez l'arrière-plan, image en PDF : JPG, PNG, WebP, HEIC. Gratuit, en ligne, sans inscription.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Compresser, convertir, supprimer l'arrière-plan — gratuit et en ligne",
  homeIntro:
    "Compressez, redimensionnez, convertissez et retouchez vos images directement dans votre navigateur — rien à installer, sans inscription et sans filigrane.",
} as const;
