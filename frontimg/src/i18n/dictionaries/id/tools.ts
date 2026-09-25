/**
 * Indonesian tool names + short descriptions, keyed by tool **id**, plus the
 * four category labels.
 *
 * Used everywhere a tool is LISTED: nav mega-menu, mobile drawer, apps menu,
 * footer, home grid, related-tools strip, dashboard cards and search results.
 * Falls back to English when an id is missing, so adding a tool never breaks
 * the Indonesian build — it just shows English until translated.
 *
 * ── Register and terminology (pinned — see conversion.md §11) ──────────────
 * Formal **Anda**, as iLoveIMG and imagetotext.info both use. Imperatives are
 * the bare verb (Kompres, Ubah, Hapus, Gabungkan) — Indonesian has no separate
 * polite imperative to reach for. A description that is a full sentence ends
 * in a full stop; a fragment does not.
 *
 * **The NAME carries the phrase Indonesians type**, measured (Indonesia, per
 * month): «kompres foto» 673,000 over «kompres gambar» 18,100; «hapus
 * background» 1,220,000 over «hapus latar belakang» 201,000; «hd foto»
 * 823,000 for upscale. So:
 *   • **foto** is the head noun, and **gambar** only for objects that are not
 *     photographs (OCR, a rendered web page, a GIF's frames, Base64).
 *   • **English loanwords stay** where they have taken over the query:
 *     background, crop, blur, HD, watermark, color picker, GIF maker, meme
 *     generator. Translating them would name the tool with the word nobody
 *     searches — which is what iLoveIMG's /id did on nearly every page.
 *   • **ke** is the converter word ("PNG ke JPG"), as every Indonesian
 *     competitor writes it.
 *
 * Format and product names stay Latin: JPG, PNG, WEBP, HEIC, AVIF, GIF, BMP,
 * JFIF, PDF, HTML, Base64, EXIF, GPS, OCR.
 */

export interface LocalizedTool {
  name: string;
  shortDescription: string;
}

export const idTools: Record<string, LocalizedTool> = {
  // ── Optimasi ───────────────────────────────────────────────────────────
  "compress-image": {
    name: "Kompres Foto",
    shortDescription: "Perkecil ukuran JPG, PNG, dan WEBP dengan kualitas yang Anda atur.",
  },
  "resize-image": {
    name: "Ubah Ukuran Foto",
    shortDescription: "Ubah ukuran dalam piksel atau persen, rasio tetap terjaga.",
  },
  "crop-image": {
    name: "Crop Foto",
    shortDescription: "Crop ke bentuk atau rasio apa pun, putar, sekaligus banyak.",
  },
  "rotate-image": {
    name: "Putar Foto",
    shortDescription: "Putar 90°, 180°, 270° atau sudut berapa pun, dan balik, sekaligus banyak.",
  },

  // ── Konversi ───────────────────────────────────────────────────────────
  "convert-to-jpg": {
    name: "Ubah Foto ke JPG",
    shortDescription: "PNG, WEBP, GIF, dan BMP → JPG.",
  },
  "png-to-jpg": {
    name: "PNG ke JPG",
    shortDescription: "Ubah gambar PNG menjadi JPG yang lebih ringan.",
  },
  "jpg-to-png": {
    name: "JPG ke PNG",
    shortDescription: "Ubah JPG menjadi PNG tanpa kehilangan kualitas, dengan transparansi.",
  },
  "webp-to-png": {
    name: "WEBP ke PNG",
    shortDescription: "Ubah gambar WEBP modern menjadi PNG.",
  },
  "heic-to-png": {
    name: "HEIC ke PNG",
    shortDescription: "Ubah foto HEIC dari iPhone menjadi PNG tanpa kehilangan kualitas.",
  },
  "image-to-text": {
    name: "Gambar ke Teks",
    shortDescription: "Ambil teks yang bisa diedit dari foto dan hasil pindaian dengan OCR.",
  },
  "webp-to-jpg": {
    name: "WEBP ke JPG",
    shortDescription: "Ubah gambar WEBP ke JPG yang bisa dibuka di mana saja.",
  },
  "jpg-to-webp": {
    name: "JPG ke WEBP",
    shortDescription: "Perkecil foto JPG dengan mengubahnya ke WEBP.",
  },
  "png-to-webp": {
    name: "PNG ke WEBP",
    shortDescription: "Ubah PNG ke WEBP dengan transparansi tetap terjaga.",
  },
  "jfif-to-jpg": {
    name: "JFIF ke JPG",
    shortDescription: "Ubah unduhan .jfif menjadi .jpg biasa.",
  },
  "gif-to-png": {
    name: "GIF ke PNG",
    shortDescription: "Ubah GIF menjadi gambar diam PNG tanpa kehilangan kualitas.",
  },
  "gif-to-jpg": {
    name: "GIF ke JPG",
    shortDescription: "Ubah frame GIF menjadi gambar JPG yang ringkas.",
  },
  "bmp-to-jpg": {
    name: "BMP ke JPG",
    shortDescription: "Ubah file BMP besar tanpa kompresi menjadi JPG yang kecil.",
  },
  "avif-to-jpg": {
    name: "AVIF ke JPG",
    shortDescription: "Buka gambar AVIF di mana saja dengan mengubahnya ke JPG.",
  },
  "avif-to-png": {
    name: "AVIF ke PNG",
    shortDescription: "Ubah AVIF menjadi PNG tanpa kehilangan kualitas, dengan transparansi.",
  },
  "heic-to-jpg": {
    name: "HEIC ke JPG",
    shortDescription: "Ubah foto HEIC dari iPhone menjadi JPG atau PNG.",
  },
  "image-to-pdf": {
    name: "Foto ke PDF",
    shortDescription: "Gabungkan foto JPG dan PNG menjadi satu PDF.",
  },
  "image-to-base64": {
    name: "Gambar ke Base64",
    shortDescription: "Ubah gambar menjadi data URI Base64.",
  },
  "base64-to-image": {
    name: "Base64 ke Gambar",
    shortDescription: "Ubah kembali teks Base64 menjadi gambar.",
  },
  "gif-to-images": {
    name: "GIF ke Gambar",
    shortDescription: "Ambil setiap frame GIF sebagai PNG atau JPG.",
  },

  // ── Edit & buat ────────────────────────────────────────────────────────
  "image-editor": {
    name: "Editor Foto",
    shortDescription: "Crop, atur warna, filter, gambar, watermark — semua dalam satu editor.",
  },
  "watermark-image": {
    name: "Watermark Foto",
    shortDescription: "Tambahkan watermark teks atau logo, sekaligus banyak.",
  },
  "meme-generator": {
    name: "Meme Generator",
    shortDescription: "Teks atas dan bawah, template, simpan sebagai PNG atau JPG.",
  },
  "html-to-image": {
    name: "HTML ke Gambar",
    shortDescription: "Ubah URL atau HTML mentah menjadi PNG atau JPG.",
  },
  "blur-face": {
    name: "Blur Wajah",
    shortDescription: "Deteksi dan blur wajah serta pelat nomor otomatis demi privasi.",
  },
  "grayscale-image": {
    name: "Foto Hitam Putih",
    shortDescription: "Ubah foto menjadi hitam putih, sekaligus banyak.",
  },
  "blur-image": {
    name: "Blur Foto",
    shortDescription: "Beri efek blur yang halus pada seluruh foto.",
  },
  "add-border": {
    name: "Bingkai Foto",
    shortDescription: "Tambahkan bingkai berwarna atau ruang tepi pada foto.",
  },
  "circle-crop": {
    name: "Crop Foto Bulat",
    shortDescription: "Potong foto menjadi lingkaran untuk foto profil.",
  },
  "merge-images": {
    name: "Gabungkan Foto",
    shortDescription: "Gabungkan foto secara horizontal, vertikal, atau dalam grid.",
  },
  "image-color-picker": {
    name: "Color Picker & Palet Warna",
    shortDescription: "Ambil warna apa pun atau ekstrak seluruh palet dari gambar.",
  },
  "image-metadata": {
    name: "Lihat Metadata Foto",
    shortDescription: "Lihat data EXIF, GPS, dan kamera pada foto.",
  },
  "remove-exif": {
    name: "Hapus EXIF",
    shortDescription: "Hapus EXIF, GPS, dan metadata demi privasi.",
  },
  "gif-maker": {
    name: "GIF Maker",
    shortDescription: "Buat GIF animasi dari foto-foto Anda.",
  },

  // ── AI ─────────────────────────────────────────────────────────────────
  "remove-background": {
    name: "Hapus Background",
    shortDescription: "Hapus background dengan AI menjadi PNG transparan.",
  },
  "upscale-image": {
    name: "Jadikan Foto HD",
    shortDescription: "Perbesar dan pertajam foto dengan AI — 2×, 3×, atau 4×, detail dipulihkan.",
  },
};

/**
 * Category labels. `title` is the full heading, `navLabel` the short pill /
 * breadcrumb label — same split as CATEGORIES in lib/tools.ts.
 */
export const idCategories: Record<string, { title: string; navLabel: string }> = {
  optimize: { title: "Optimasi & Kompres", navLabel: "Optimasi" },
  convert: { title: "Konversi Gambar", navLabel: "Konversi" },
  edit: { title: "Edit & Buat", navLabel: "Edit" },
  ai: { title: "Alat Foto AI", navLabel: "AI Foto" },
};
