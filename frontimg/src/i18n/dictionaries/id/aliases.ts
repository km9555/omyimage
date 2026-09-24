/**
 * Indonesian search synonyms, keyed by tool id — what an Indonesian types into
 * the header search when they don't know our tool's exact name.
 *
 * This file carries the vocabulary the INTERFACE deliberately does not use
 * (conversion.md §11). The tool names carry the measured majority phrasing —
 * foto, background, crop, HD — so everything else lives here:
 *
 *  1. **The minority phrasings.** «kompres gambar», «hapus latar belakang»,
 *     «potong foto», «tanda air», «buramkan wajah», «pembuat meme» — several
 *     of them are exactly what iLoveIMG's /id put in its URLs. They are real
 *     queries, just smaller ones, and a searcher who types them must land.
 *  2. **Code-mixed and English queries.** Indonesians type «compress foto»
 *     (90,500/mo) and «resize foto» (22,200) as readily as the Indonesian;
 *     both halves of the mix have to find the tool.
 *  3. **Problem statements and the local use cases** — above all the upload
 *     cap on government, CPNS, school and job-portal forms: «kompres foto
 *     200kb» is 22,200 a month on its own. «foto 3x4», «pas foto» and
 *     «foto cpns» are how that need is phrased.
 *
 * Lowercase. Indonesian has no diacritics, so nothing needs folding beyond
 * case, which tool-search.ts already does.
 */
export const idAliases: Record<string, string[]> = {
  // ── Optimasi ───────────────────────────────────────────────────────────
  "compress-image": [
    "kompres gambar", "compress foto", "kecilkan ukuran foto", "perkecil ukuran foto",
    "kompres jpg", "kompres png", "kompres foto 200kb", "kompres foto 100kb",
    "kompres foto 500kb", "foto terlalu besar", "ukuran file foto", "kurangi mb",
    "kecilkan kb", "foto cpns", "upload foto ditolak", "optimasi foto",
    "kompresi gambar", "kompres tanpa mengurangi kualitas",
  ],
  "resize-image": [
    "resize foto", "ubah ukuran gambar", "ganti ukuran foto", "ubah resolusi",
    "ukuran piksel", "foto 3x4", "foto 4x6", "pas foto", "perbesar foto",
    "perkecil foto", "lebar tinggi", "skala foto",
  ],
  "crop-image": [
    "potong foto", "potong gambar", "crop gambar", "rasio 1:1", "foto persegi",
    "16:9", "4:3", "potong sebagian foto",
  ],
  "rotate-image": [
    "putar gambar", "rotasi foto", "balik foto", "foto miring", "foto terbalik",
    "cermin foto", "flip foto", "90 derajat", "180 derajat", "luruskan foto",
  ],
  "remove-exif": [
    "hapus metadata foto", "hapus metadata", "hapus lokasi foto", "hapus gps",
    "hapus data kamera", "privasi foto", "bersihkan foto",
  ],

  // ── Konversi ───────────────────────────────────────────────────────────
  "convert-to-jpg": [
    "konversi ke jpg", "ubah ke jpg", "jadikan jpg", "ubah format foto",
    "ganti format foto", "convert jpg",
  ],
  "png-to-jpg": ["png to jpg", "ubah png ke jpg", "konversi png ke jpg"],
  "jpg-to-png": ["jpg to png", "ubah jpg ke png", "png transparan"],
  "webp-to-png": ["webp to png", "ubah webp ke png"],
  "heic-to-png": ["heic to png", "foto iphone ke png"],
  "image-to-text": [
    "foto ke teks", "ambil teks dari gambar", "salin teks dari gambar",
    "ocr", "ocr online", "scan teks", "baca teks dari foto", "image to text",
  ],
  "webp-to-jpg": ["webp to jpg", "ubah webp ke jpg", "buka file webp"],
  "jpg-to-webp": ["jpg to webp", "ubah jpg ke webp"],
  "png-to-webp": ["png to webp", "ubah png ke webp"],
  "jfif-to-jpg": ["jfif to jpg", "ubah jfif ke jpg", "buka file jfif"],
  "gif-to-png": ["gif to png", "ubah gif ke png"],
  "gif-to-jpg": ["gif to jpg", "ubah gif ke jpg"],
  "bmp-to-jpg": ["bmp to jpg", "ubah bmp ke jpg"],
  "avif-to-jpg": ["avif to jpg", "ubah avif ke jpg", "buka file avif"],
  "avif-to-png": ["avif to png", "ubah avif ke png"],
  "heic-to-jpg": ["heic to jpg", "foto iphone ke jpg", "buka file heic", "ubah heic"],
  "image-to-pdf": [
    "jpg ke pdf", "gambar ke pdf", "jpg to pdf", "ubah foto ke pdf",
    "gabung foto jadi pdf", "scan ke pdf", "png ke pdf",
  ],
  "image-to-base64": ["image to base64", "gambar ke base64", "foto ke base64", "data uri"],
  "base64-to-image": ["base64 to image", "base64 ke foto", "decode base64"],
  "gif-to-images": ["pisahkan frame gif", "ambil frame gif", "gif ke jpg", "gif ke png"],

  // ── Edit & buat ────────────────────────────────────────────────────────
  "image-editor": ["edit foto online", "edit foto", "aplikasi edit foto", "photo editor"],
  "watermark-image": [
    "tanda air", "tanda air foto", "tambah watermark", "logo di foto",
    "kasih nama di foto", "lindungi foto",
  ],
  "meme-generator": ["pembuat meme", "buat meme", "meme maker", "teks di gambar"],
  "html-to-image": ["html to image", "screenshot website", "html ke jpg", "html ke png"],
  "blur-face": [
    "buramkan wajah", "sensor wajah", "samarkan wajah", "blur plat nomor",
    "sembunyikan wajah",
  ],
  "grayscale-image": [
    "hitam putih", "foto jadul", "grayscale", "foto monokrom", "abu abu",
  ],
  "blur-image": ["buramkan foto", "foto buram", "efek blur", "blur background"],
  "add-border": ["border foto", "tambah border", "frame foto", "bingkai polaroid"],
  "circle-crop": ["foto bulat", "potong foto bulat", "foto profil bulat", "lingkaran"],
  "merge-images": ["gabung foto", "gabung gambar", "satukan foto", "kolase foto"],
  "image-color-picker": ["pemilih warna", "kode warna", "ambil warna", "palet warna", "hex"],
  "image-metadata": ["cek metadata foto", "exif", "lihat exif", "info foto", "lokasi foto"],
  "gif-maker": ["buat gif", "membuat gif", "animasi gif"],

  // ── AI ─────────────────────────────────────────────────────────────────
  "remove-background": [
    "hapus latar belakang", "hapus background foto", "remove background",
    "hapus bg", "background transparan", "ganti background", "foto tanpa background",
  ],
  "upscale-image": [
    "hd foto", "foto hd", "memperjelas foto", "perjelas foto",
    "tingkatkan kualitas foto", "foto pecah", "foto blur jadi jelas", "upscale",
  ],
};
