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

  // ── Varian: kompres ke ukuran tertentu (expansion.md) ──
  "reduce-image-size-in-kb": {
    name: "Perkecil Ukuran Foto dalam KB",
    shortDescription: "Kecilkan foto ke ukuran KB atau MB yang Anda butuhkan.",
  },
  "compress-image-to-20kb": {
    name: "Kompres Foto 20 KB",
    shortDescription: "Foto dan tanda tangan di bawah 20 KB untuk formulir.",
  },
  "compress-image-to-50kb": {
    name: "Kompres Foto 50 KB",
    shortDescription: "Batas pas foto yang sering diminta formulir.",
  },
  "compress-image-to-100kb": {
    name: "Kompres Foto 100 KB",
    shortDescription: "Pas foto dan scan tetap jelas di bawah 100 KB.",
  },
  "compress-image-to-200kb": {
    name: "Kompres Foto 200 KB",
    shortDescription: "Pas foto dan scan dokumen di bawah 200 KB.",
  },
  "compress-image-to-1mb": {
    name: "Kompres Foto 1 MB",
    shortDescription: "Foto ponsel di bawah 1 MB, biasanya ukuran penuh.",
  },
  "compress-image-to-10kb": {
    name: "Kompres Foto 10 KB",
    shortDescription: "Tanda tangan dan foto kecil di bawah 10 KB.",
  },
  "compress-image-to-30kb": {
    name: "Kompres Foto 30 KB",
    shortDescription: "Pas foto formulir di bawah 30 KB, wajah tetap jelas.",
  },
  "compress-image-to-300kb": {
    name: "Kompres Foto 300 KB",
    shortDescription: "Foto dan scan dokumen di bawah 300 KB.",
  },
  "compress-image-to-500kb": {
    name: "Kompres Foto 500 KB",
    shortDescription: "Foto, scan, dan screenshot di bawah 500 KB.",
  },
  "compress-image-to-2mb": {
    name: "Kompres Foto 2 MB",
    shortDescription: "Foto besar dari HP di bawah 2 MB.",
  },
  "compress-image-to-15kb": {
    name: "Kompres Foto 15 KB",
    shortDescription: "Tanda tangan dan foto kecil di bawah 15 KB.",
  },
  "compress-image-to-40kb": {
    name: "Kompres Foto 40 KB",
    shortDescription: "Pas foto formulir di bawah 40 KB, tetap jelas.",
  },
  "compress-image-to-150kb": {
    name: "Kompres Foto 150 KB",
    shortDescription: "Foto dan halaman tulisan tangan di bawah 150 KB.",
  },
  "increase-image-size-in-kb": {
    name: "Perbesar Ukuran Foto (KB)",
    shortDescription: "Buat foto minimal 10, 20, atau 50 KB.",
  },
  "signature-resizer": {
    name: "Ubah Ukuran Tanda Tangan",
    shortDescription: "Bersihkan, potong, dan ubah ukuran tanda tangan.",
  },
  "jpg-to-pdf-under-100kb": {
    name: "JPG ke PDF di Bawah 100 KB",
    shortDescription: "PDF satu halaman di bawah 100 KB untuk formulir.",
  },
  "jpg-to-pdf-under-200kb": {
    name: "JPG ke PDF di Bawah 200 KB",
    shortDescription: "Sertifikat dan scan dalam satu PDF di bawah 200 KB.",
  },
  "jpg-to-pdf-under-300kb": {
    name: "JPG ke PDF di Bawah 300 KB",
    shortDescription: "Dokumen beberapa halaman dalam PDF di bawah 300 KB.",
  },
  "jpg-to-pdf-under-500kb": {
    name: "JPG ke PDF di Bawah 500 KB",
    shortDescription: "Dokumen panjang dalam satu PDF di bawah 500 KB.",
  },
  "convert-to-png": {
    name: "Ubah Foto ke PNG",
    shortDescription: "JPG, WEBP, GIF, dan BMP → PNG.",
  },
  "convert-to-webp": {
    name: "Ubah Foto ke WEBP",
    shortDescription: "JPG, PNG, GIF, dan BMP → WEBP.",
  },
  "svg-to-png": {
    name: "SVG ke PNG",
    shortDescription: "Ubah vektor SVG jadi PNG tajam di ukuran apa pun.",
  },
  "png-to-ico": {
    name: "PNG ke ICO",
    shortDescription: "Buat favicon .ico dan ikon Windows.",
  },
  "youtube-thumbnail-resizer": {
    name: "Ubah Ukuran Thumbnail YouTube",
    shortDescription: "Ubah gambar apa pun jadi thumbnail YouTube 1280 × 720.",
  },
  "whatsapp-dp-resizer": {
    name: "Foto Profil WA Full",
    shortDescription: "Foto utuh di profil WA persegi, tanpa terpotong.",
  },
  "linkedin-banner-resizer": {
    name: "Ubah Ukuran Banner LinkedIn",
    shortDescription: "Ubah gambar apa pun jadi banner LinkedIn 1584 × 396.",
  },
  "facebook-cover-resizer": {
    name: "Ubah Ukuran Sampul Facebook",
    shortDescription: "Ubah gambar apa pun jadi sampul Facebook 851 × 315.",
  },
  "discord-banner-resizer": {
    name: "Ubah Ukuran Banner Discord",
    shortDescription: "Ukuran banner profil dan server Discord.",
  },
  "dpi-converter": {
    name: "Ubah DPI Foto",
    shortDescription: "Ubah DPI ke 300, 200, atau nilai lain tanpa menurunkan kualitas.",
  },
  "dpi-checker": {
    name: "Cek DPI Foto",
    shortDescription: "Lihat DPI gambar dan ukuran cetaknya.",
  },
  "resize-image-in-cm": {
    name: "Ubah Ukuran Foto dalam cm",
    shortDescription: "Ubah ukuran foto ke cm, mm, atau inci yang tepat.",
  },
  "video-to-gif": {
    name: "Video ke GIF",
    shortDescription: "Ubah potongan video MP4, WEBM, atau MOV jadi GIF.",
  },
  "gif-compressor": {
    name: "Kompres GIF",
    shortDescription: "Perkecil GIF animasi tanpa kehilangan frame.",
  },
  "gif-resizer": {
    name: "Ubah Ukuran GIF",
    shortDescription: "Ubah ukuran GIF animasi dengan semua frame tetap ada.",
  },
  "gif-to-mp4": {
    name: "GIF ke MP4",
    shortDescription: "Ubah GIF jadi video MP4 yang ringan.",
  },
  "webp-to-gif": {
    name: "WEBP ke GIF",
    shortDescription: "Ubah WEBP animasi jadi GIF.",
  },
  "gif-cropper": {
    name: "Crop GIF",
    shortDescription: "Crop GIF animasi dengan semua frame tetap ada.",
  },
  "rotate-gif": {
    name: "Putar GIF",
    shortDescription: "Putar atau balik GIF animasi 90° atau 180°.",
  },
  "reverse-gif": {
    name: "Putar Balik GIF",
    shortDescription: "Putar GIF mundur atau jadikan boomerang.",
  },
  "gif-speed-changer": {
    name: "Ubah Kecepatan GIF",
    shortDescription: "Percepat atau perlambat GIF animasi.",
  },
  "gif-cutter": {
    name: "Potong GIF",
    shortDescription: "Potong GIF dan simpan frame yang Anda mau.",
  },
  "gif-to-webp": {
    name: "GIF ke WEBP",
    shortDescription: "Ubah GIF animasi jadi WEBP animasi.",
  },
  "gif-to-apng": {
    name: "GIF ke APNG",
    shortDescription: "Ubah GIF animasi jadi PNG animasi (APNG).",
  },
  "gif-to-sprite-sheet": {
    name: "GIF ke Sprite Sheet",
    shortDescription: "Susun semua frame GIF di satu sprite sheet PNG.",
  },
  "gif-merger": {
    name: "Gabung GIF",
    shortDescription: "Gabungkan beberapa GIF jadi satu, berurutan.",
  },
  "add-text-to-gif": {
    name: "Tambah Teks ke GIF",
    shortDescription: "Beri tulisan pada GIF animasi, di semua frame atau sebagian.",
  },
  "typing-text-gif": {
    name: "GIF Teks Mengetik",
    shortDescription: "Buat GIF berisi teks yang mengetik sendiri, huruf demi huruf.",
  },
  "invert-image": {
    name: "Invert Warna Foto",
    shortDescription: "Balik warna foto — negatif atau invert pintar.",
  },
  "pixelate-image": {
    name: "Pixelate Foto",
    shortDescription: "Ubah foto jadi blok-blok piksel.",
  },
  "image-brightness": {
    name: "Kecerahan & Kontras",
    shortDescription: "Cerahkan, gelapkan, dan atur kontras serta warna foto.",
  },
  "glitch-effect": {
    name: "Efek Glitch",
    shortDescription: "Beri foto tampilan layar rusak yang glitch.",
  },
  "round-corners": {
    name: "Sudut Melengkung",
    shortDescription: "Buat sudut gambar melengkung dengan tepi transparan.",
  },
  "remove-watermark": {
    name: "Hapus Watermark",
    shortDescription: "Hapus watermark, logo, dan tanggal dengan AI, langsung di browser.",
  },
  "remove-object": {
    name: "Hapus Objek Foto",
    shortDescription: "Hapus orang, benda, dan noda dari foto dengan AI.",
  },
  "split-image": {
    name: "Split Foto",
    shortDescription: "Potong gambar jadi beberapa bagian sama besar atau ubin.",
  },
  "image-overlay": {
    name: "Overlay Foto",
    shortDescription: "Tumpuk satu gambar di atas gambar lain, dengan opasitas dan blend.",
  },

  // ── Varian: HD, mirror, background (expansion.md) ──
  "image-to-hd": {
    name: "Ubah Foto ke HD",
    shortDescription: "Ubah foto kecil atau beresolusi rendah menjadi HD.",
  },
  "unblur-image": {
    name: "Foto Blur Jadi Jelas",
    shortDescription: "Pertajam foto yang agak blur dengan AI.",
  },
  "flip-image": {
    name: "Mirror Foto",
    shortDescription: "Balik foto secara horizontal atau vertikal.",
  },
  "change-background-color": {
    name: "Ganti Background Foto",
    shortDescription: "Background merah, biru, atau putih untuk foto apa pun.",
  },
  "blur-background": {
    name: "Blur Background Foto",
    shortDescription: "Efek potret di belakang orang atau benda.",
  },
  "passport-photo-maker": {
    name: "Pas Foto Online",
    shortDescription: "Pas foto 3x4, 4x6, paspor dan visa, siap cetak.",
  },
  "3x4-photo": {
    name: "Pas Foto 3x4",
    shortDescription: "Pas foto 3 × 4 cm dengan latar merah, biru, atau putih.",
  },
  "2x2-photo": {
    name: "Pas Foto 2x2 Inci",
    shortDescription: "Foto 2 × 2 inci untuk paspor dan visa Amerika.",
  },
  "instagram-grid-maker": {
    name: "Grid Instagram",
    shortDescription: "Ubah satu foto jadi grid atau carousel Instagram.",
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
