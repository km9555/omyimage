/**
 * Indonesian site-level copy — the brand tagline and the description used for
 * the `/id` layout defaults, the Indonesian home page and its Open Graph card.
 *
 * Written for the SERP snippet, not as a translation of the English one. The
 * English tagline ("Effortless Power for Image Workflows") is a brand line with
 * no Indonesian search volume.
 *
 * Head noun chosen from data, not taste: «kompres foto» outruns «kompres
 * gambar» thirty-seven to one (673,000 vs 18,100 a month, Indonesia), so the
 * home copy says **foto**. «Gambar» stays for objects that are not photographs
 * — a rendered web page, a GIF's frames, text read off a screenshot.
 *
 * «Gratis» leads for the same reason it leads the Portuguese line: on an
 * Indonesian SERP full of freemium apps, free is the word that decides the
 * click. «Tanpa daftar» closes on the second objection.
 *
 * The description names the four biggest jobs in the order Indonesian demand
 * ranks them — hapus background (~1.5M), kompres foto (~1.07M), foto HD
 * (~975K), foto ke PDF (~335K) — not the order the English page uses.
 */

export const idSite = {
  tagline: "Alat foto online gratis",
  description:
    "Alat foto online gratis: hapus background, kompres foto, jadikan foto HD, ubah foto ke PDF, ubah ukuran, crop, dan ganti format. Semua diproses langsung di browser — tanpa instal aplikasi dan tanpa daftar.",
  /** Home page `<h1>` — carries the head term. */
  homeH1: "Alat foto online gratis",
  homeIntro:
    "Hapus background, kompres foto, jadikan foto HD, dan ubah foto ke PDF — semuanya langsung di browser, tanpa instal aplikasi dan tanpa daftar.",
} as const;
