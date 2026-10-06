import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/gif-ke-webp. */
const content: ToolPageContent = {
  toolId: "gif-to-webp",
  locale: "id",
  name: "GIF ke WEBP",
  tagline:
    "Ubah GIF animasi jadi WEBP animasi — lossless untuk menyimpan setiap piksel, atau lossy untuk file yang jauh lebih kecil. Setiap frame mempertahankan durasinya. Gratis, di browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "GIF ke WEBP Online Gratis — WEBP Animasi | oMyImage",
  metaDescription:
    "Ubah GIF animasi ke WEBP animasi online gratis. Lossless menyimpan setiap piksel, lossy membuat file jauh lebih kecil. Semua frame dan durasinya tetap. Di browser.",

  intro:
    "GIF adalah format animasi tertua di web dan salah satu yang paling boros. WEBP animasi memutar animasi yang sama di semua browser modern, biasanya dengan ukuran yang jauh lebih kecil. Konverter GIF ke WEBP dari oMyImage menulis ulang GIF Anda frame demi frame: pilih Lossless untuk menyimpan setiap piksel persis sama, atau Tinggi dan Kecil untuk kompresi lossy yang mengecilkan file jauh lebih banyak. Hasilnya diputar di samping aslinya lengkap dengan ukuran dan penghematannya, jadi Anda bisa memilih sebelum mengunduh.",

  sections: [
    {
      heading: "Lossless atau lossy",
      id: "quality",
      body: [
        "Lossless menyimpan setiap piksel persis seperti di GIF. Karena kompresi lossless WEBP jauh lebih baik daripada GIF, filenya biasanya sudah lebih kecil — sering sepertiga atau lebih untuk rekaman layar, logo, dan kartun, yang punya area luas berwarna sama.",
        "Tinggi dan Kecil memakai kompresi lossy, seperti JPG untuk setiap frame. Keduanya biasanya memangkas GIF dari video jadi setengahnya atau lebih, dengan sedikit pelembutan di tepi tajam dan teks. Coba Tinggi dulu; pilih Kecil bila ukuran lebih penting daripada ketajaman. Untuk grafik kecil yang sederhana, Lossless bahkan bisa lebih kecil daripada pilihan lossy — panel hasil menampilkan setiap ukuran, jadi mudah dibandingkan.",
      ],
    },
    {
      heading: "Cara animasi disimpan",
      id: "how",
      body: [
        "Setiap frame dienkode oleh encoder WEBP bawaan browser, lalu dirakit menjadi WEBP animasi. Seperti GIF yang dibuat dengan baik, setiap frame setelah yang pertama hanya menyimpan persegi yang berubah, dan frame yang sama persis dengan sebelumnya digabung ke durasinya, jadi momen diam tidak memakan tempat.",
        "Setiap frame mempertahankan durasinya, dan animasi berulang persis seperti GIF — terus-menerus, sekali, atau beberapa kali. Area transparan tetap transparan; tepinya tetap tegas, karena GIF memang tidak pernah punya transparansi halus.",
      ],
    },
    {
      heading: "Di mana WEBP bisa dipakai",
      id: "support",
      body: [
        "WEBP animasi diputar di Chrome, Edge, Firefox, Safari, dan Opera, di komputer maupun HP, jadi aman untuk situs web. Mengganti GIF dengan WEBP adalah salah satu cara termudah mempercepat halaman, sekaligus menjawab saran tes kecepatan untuk memakai format gambar modern.",
        "Di luar browser dukungannya belum merata. Banyak program email, aplikasi chat, editor lama, dan formulir upload masih mengharapkan GIF dan mungkin hanya menampilkan satu frame diam. Simpan GIF untuk tempat-tempat itu dan pakai WEBP di web.",
      ],
    },
    {
      heading: "Browser yang bisa membuat WEBP",
      id: "browsers",
      body: [
        "Konversi memakai encoder WEBP bawaan browser, jadi tidak ada yang perlu diunduh. Chrome dan Edge menyimpan Lossless benar-benar tanpa kehilangan, dan Firefox juga bisa membuat file WEBP. Safari bisa menampilkan WEBP tetapi tidak bisa membuatnya — dan di iPhone serta iPad semua browser memakai mesin Safari — jadi gunakan komputer atau HP Android untuk alat ini. Alat ini akan memberi tahu bila browser Anda tidak bisa.",
      ],
    },
    {
      heading: "Stiker dan aplikasi chat",
      id: "stickers",
      body: [
        "Stiker animasi WhatsApp adalah file WEBP berukuran 512 × 512 piksel, jadi konversi ini salah satu langkah membuat stiker dari GIF. Crop GIF jadi persegi dengan Crop GIF dan ubah ke 512 piksel dengan Ubah Ukuran GIF terlebih dulu, lalu konversi di sini. Aplikasi stiker punya batas ukuran yang kecil, jadi Tinggi atau Kecil biasanya lebih pas daripada Lossless.",
      ],
    },
    {
      heading: "WEBP di situs Anda",
      id: "website",
      body: [
        "Untuk memasang WEBP di halaman, cukup ganti file di tag gambar, seperti yang Anda lakukan dengan GIF. Bila masih perlu melayani program yang sangat lama, tag picture memungkinkan Anda memberikan WEBP dan menyisakan GIF sebagai cadangan. Halaman dengan banyak animasi paling diuntungkan: setiap GIF yang diganti berarti lebih sedikit data yang diunduh di HP.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF dibaca dan WEBP ditulis sepenuhnya di browser Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara mengubah GIF ke WEBP",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih kualitas", description: "Lossless menyimpan setiap piksel; Tinggi dan Kecil membuat file lebih kecil." },
    { title: "Konversi dan unduh", description: "Klik Ubah ke WEBP, bandingkan ukurannya dengan GIF, lalu unduh." },
  ],

  features: [
    { icon: "sync_alt", title: "Tetap beranimasi", description: "Setiap frame, durasi, dan pengaturan pengulangan ikut terbawa." },
    { icon: "compress", title: "File lebih kecil", description: "Lossless biasanya lebih kecil dari GIF; lossy lebih kecil lagi." },
    { icon: "lock", title: "Tanpa upload", description: "Dikonversi sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah GIF animasi ke WEBP?", a: "Tambahkan GIF, pilih Lossless, Tinggi, atau Kecil, lalu klik Ubah ke WEBP. WEBP diputar persis seperti GIF." },
    { q: "Apakah WEBP tetap beranimasi?", a: "Ya. Setiap frame dan durasinya tetap, dan berulang seperti GIF." },
    { q: "Apakah WEBP lebih kecil dari GIF?", a: "Hampir selalu. Lossless sering sepertiga lebih kecil untuk grafik; pilihan lossy biasanya memangkas GIF dari video jadi setengahnya." },
    { q: "Apakah Lossless mengubah piksel?", a: "Tidak. Di Chrome dan Edge, Lossless menyimpan setiap piksel persis seperti di GIF." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. Area transparan tetap transparan." },
    { q: "Kenapa tidak bisa di Safari?", a: "Safari bisa menampilkan WEBP tetapi tidak punya encoder WEBP. Pakai Chrome, Edge, atau Firefox untuk mengonversi." },
    { q: "Di mana WEBP animasi bisa dipakai?", a: "Di situs web dan semua browser modern. Sebagian aplikasi email dan chat masih butuh GIF." },
    { q: "Bisakah membuat stiker WhatsApp?", a: "Crop GIF jadi persegi, ubah ke 512 × 512, konversi di sini, lalu tambahkan dengan aplikasi stiker." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Di Android bisa, dengan Chrome atau Firefox. Di iPhone dan iPad belum ada browser yang bisa membuat WEBP." },
    { q: "Bagaimana mengubah WEBP kembali ke GIF?", a: "Pakai WEBP ke GIF, yang menyimpan setiap frame dan durasinya." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Kualitas mana yang sebaiknya dipilih?", a: "Lossless untuk gambar dan rekaman layar; Tinggi untuk GIF dari video; Kecil bila batas ukurannya ketat." },
  ],

  security:
    "GIF Anda dikonversi sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifExportTool.tsx — shared with gif-to-apng and gif-to-sprite-sheet, whose modules reuse this block.
    "Select a GIF": "Pilih GIF",
    "or drop a GIF here": "atau lepaskan GIF di sini",
    "Please select a GIF.": "Silakan pilih GIF.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "Your file is processed in your browser and never uploaded.": "File Anda diproses di browser dan tidak pernah di-upload.",
    "Your animation will appear here.": "Animasi Anda akan muncul di sini.",
    "Your sprite sheet will appear here.": "Sprite sheet Anda akan muncul di sini.",
    "{p}% smaller than the GIF": "{p}% lebih kecil dari GIF",
    "{p}% larger than the GIF": "{p}% lebih besar dari GIF",
    "Same size as the GIF": "Sama besar dengan GIF",
    // webp
    "Convert to WEBP": "Ubah ke WEBP",
    "Quality": "Kualitas",
    "Lossless": "Lossless", // i18n-same — the term Indonesian users search for
    "High": "Tinggi",
    "Small": "Kecil",
    "Every pixel is kept. Usually smaller than the GIF already.": "Setiap piksel tetap. Biasanya sudah lebih kecil dari GIF.",
    "Lossy: much smaller files, with slight softening around sharp edges.": "Lossy: file jauh lebih kecil, dengan sedikit pelembutan di tepi yang tajam.",
    "This browser saves WEBP at very high quality instead of lossless.": "Browser ini menyimpan WEBP dengan kualitas sangat tinggi, bukan lossless.",
    // apng
    "Convert to APNG": "Ubah ke APNG",
    "APNG keeps every pixel and frame. Only the part of each frame that changes is stored, so it is often smaller than the GIF.":
      "APNG menyimpan setiap piksel dan frame. Hanya bagian frame yang berubah yang disimpan, jadi sering lebih kecil dari GIF.",
    // sprite
    "Make sprite sheet": "Buat sprite sheet",
    "Layout": "Tata letak",
    "Grid": "Grid", // i18n-same
    "One row": "Satu baris",
    "One column": "Satu kolom",
    "Columns": "Kolom",
    "Frames": "Frame",
    "Keep all frames": "Simpan semua frame",
    "Keep every 2nd frame": "Simpan setiap frame ke-2",
    "Keep every 3rd frame": "Simpan setiap frame ke-3",
    "Frame size": "Ukuran frame",
    "Space between frames": "Jarak antar-frame",
    "Transparent background": "Latar transparan",
    "Background colour": "Warna latar",
    "{n} frames of {w} × {h} px, {cols} × {rows}": "{n} frame berukuran {w} × {h} px, {cols} × {rows}",
    "This sheet is too large for a browser to create. Keep fewer frames, choose a smaller frame size or use a grid.":
      "Sheet ini terlalu besar untuk dibuat browser. Simpan lebih sedikit frame, pilih ukuran frame yang lebih kecil, atau pakai grid.",
    "CSS animation": "Animasi CSS",
    "Copy": "Salin",
    "Could not copy.": "Gagal menyalin.",
    "Uses the average frame time, so frames with longer pauses play at the same pace as the rest.":
      "Memakai waktu frame rata-rata, jadi frame dengan jeda lebih lama diputar dengan tempo yang sama seperti yang lain.",
  },
};

export default content;
