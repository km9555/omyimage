import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.id";

/** Indonesian copy for /id/gif-ke-apng. */
const content: ToolPageContent = {
  toolId: "gif-to-apng",
  locale: "id",
  name: "GIF ke APNG",
  tagline:
    "Ubah GIF animasi jadi APNG, PNG yang beranimasi — setiap piksel, frame, dan jeda tetap, sering dalam file yang lebih kecil. Gratis, di browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "GIF ke APNG Online Gratis — PNG Animasi | oMyImage",
  metaDescription:
    "Ubah GIF ke APNG (PNG animasi) online gratis. Setiap piksel dan frame tetap, sering dalam file yang lebih kecil. Di browser, tanpa upload.",

  intro:
    "APNG adalah PNG dengan animasi: format lossless yang sama seperti PNG biasa, dengan bagian tambahan yang menyimpan frame dan durasinya. Semua browser modern memutarnya, dan software yang tidak memahami animasinya cukup menampilkan frame pertama sebagai PNG biasa. Konverter GIF ke APNG dari oMyImage menulis GIF Anda sebagai APNG tanpa mengubah satu piksel pun, menyimpan setiap frame seringkas mungkin, dan menampilkan ukurannya di samping aslinya agar Anda tahu seberapa besar penghematannya.",

  sections: [
    {
      heading: "Kenapa APNG, bukan GIF",
      id: "why",
      body: [
        "GIF memakai kompresi LZW dari tahun 1980-an; PNG memakai DEFLATE, yang memadatkan piksel yang sama dengan lebih baik. Karena itu mengubah GIF ke APNG sering membuat file lebih kecil tanpa kehilangan apa pun — terutama untuk kartun, logo, ikon, dan rekaman layar dengan area datar yang luas.",
        "APNG juga bisa menyimpan warna penuh dan tepi halus semi-transparan, yang tidak bisa dilakukan GIF. GIF yang dikonversi tetap punya warna dan tepi tegas yang sama, tetapi bila nanti Anda mengedit frame-nya, APNG tidak akan memaksanya kembali ke 256 warna.",
      ],
    },
    {
      heading: "Cara file disusun",
      id: "how",
      body: [
        "Bila semua frame muat dalam 256 warna — hampir selalu begitu untuk GIF — APNG memakai palet, jadi setiap piksel hanya satu byte, sama seperti di GIF. Kalau tidak, APNG menyimpan RGBA penuh. Setiap frame setelah yang pertama hanya mencatat persegi yang berubah, dan frame yang sama dengan sebelumnya digabung ke durasinya.",
        "Setiap frame mempertahankan durasi persisnya dalam milidetik, dan animasi berulang seperti GIF — terus-menerus, sekali, atau beberapa kali. Area transparan tetap transparan.",
      ],
    },
    {
      heading: "Di mana APNG bisa diputar",
      id: "support",
      body: [
        "Chrome, Edge, Firefox, Safari, dan Opera semuanya memutar APNG, di komputer maupun HP, jadi APNG bisa dipakai di mana pun gambar bisa dipasang di halaman web. LINE memakai APNG untuk stiker animasinya, dan banyak alat stiker serta emoji menerimanya.",
        "Penampil gambar, editor, dan aplikasi chat yang hanya mengenal PNG biasa akan menampilkan frame pertama, bukan animasinya. Itulah cadangan bawaan APNG, tetapi artinya GIF masih pilihan yang lebih aman untuk email dan kebanyakan aplikasi pesan.",
      ],
    },
    {
      heading: "Ekstensi file",
      id: "extension",
      body: [
        "File unduhan berakhiran .png, ekstensi yang diharapkan browser dan kebanyakan situs; animasinya ada di dalam file, bukan di namanya. Bila ada layanan yang khusus meminta file .apng, cukup ganti ekstensinya — isinya tetap sama.",
      ],
    },
    {
      heading: "APNG atau WEBP",
      id: "webp",
      body: [
        "Keduanya pengganti GIF yang modern. WEBP lossless biasanya lebih kecil lagi, dan WEBP lossy jauh lebih kecil, tetapi WEBP tidak bisa dibuat di Safari dan sebagian alat tidak menerimanya. APNG hanya lossless, bisa dibuat di browser apa pun termasuk Safari, dan terbuka sebagai PNG diam di tempat yang tidak mendukung animasi. Untuk situs web, coba keduanya dan pakai yang lebih kecil; untuk stiker, pakai yang diminta platformnya.",
      ],
    },
    {
      heading: "Edit dulu, baru konversi",
      id: "prepare",
      body: [
        "Konverter menyimpan GIF persis seperti adanya, jadi lakukan pengeditan sebelum konversi. Pakai Crop GIF untuk bentuknya dan Ubah Ukuran GIF untuk ukuran piksel yang pasti — platform stiker biasanya menetapkan keduanya — serta Potong GIF untuk menyisakan frame yang diperlukan saja. Alat-alat itu mempertahankan warna GIF, jadi APNG tetap sama persis dengan yang Anda siapkan.",
      ],
    },
    {
      heading: "APNG di situs web",
      id: "website",
      body: [
        "Di halaman web, APNG dipasang seperti gambar biasa: tag img dengan file .png. Animasinya berjalan sendiri, dan di tempat yang tidak mendukung APNG, frame pertama yang tampil — jadi pastikan frame pertamanya bermakna. Untuk ikon, tombol, dan animasi antarmuka kecil, APNG praktis karena tepinya tetap tajam tanpa artefak kompresi.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF dibaca dan APNG ditulis sepenuhnya di browser Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara mengubah GIF ke APNG",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Konversi", description: "Klik Ubah ke APNG; setiap piksel dan frame tetap." },
    { title: "Unduh", description: "Bandingkan ukurannya dengan GIF dan unduh APNG-nya." },
  ],

  features: [
    { icon: "image", title: "Lossless", description: "Setiap piksel, frame, dan jeda terbawa tanpa berubah." },
    { icon: "compress", title: "Sering lebih kecil", description: "Kompresi PNG biasanya mengalahkan GIF pada frame yang sama." },
    { icon: "lock", title: "Tanpa upload", description: "Dikonversi sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah GIF ke APNG?", a: "Tambahkan GIF dan klik Ubah ke APNG. PNG animasinya diputar persis seperti GIF." },
    { q: "Apa itu APNG?", a: "PNG animasi: file PNG yang juga menyimpan frame animasi dan durasinya." },
    { q: "Apakah APNG lossless?", a: "Ya. Setiap piksel di setiap frame disimpan persis." },
    { q: "Apakah APNG lebih kecil dari GIF?", a: "Sering, berkat kompresi yang lebih baik, terutama untuk grafik dan rekaman layar. Alat ini menampilkan selisihnya." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. Area transparan tetap transparan." },
    { q: "Kenapa APNG saya terlihat seperti gambar diam?", a: "Program yang Anda pakai tidak mendukung APNG dan menampilkan frame pertama. Buka di browser untuk melihat animasinya." },
    { q: "Kenapa filenya berakhiran .png?", a: "File APNG memakai ekstensi PNG. Ganti ke .apng hanya bila ada layanan yang memintanya." },
    { q: "Apakah bisa di Safari?", a: "Bisa. Safari memutar APNG dan juga bisa membuatnya dengan alat ini." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun, termasuk iPhone." },
    { q: "Sebaiknya pakai APNG atau WEBP?", a: "WEBP biasanya lebih kecil; APNG bisa dipakai di lebih banyak alat dan di Safari. Coba keduanya bila ukuran penting." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Bisakah membuat stiker LINE?", a: "LINE memakai APNG untuk stiker animasi. Siapkan GIF sesuai ukuran yang diminta platform, lalu konversi di sini." },
  ],

  security:
    "GIF Anda dikonversi sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifExportTool.tsx is shared with gif-to-webp; each route only has its own
  // tool's ui in scope, so this page reuses the WEBP page's translations.
  ui: webp.ui,
};

export default content;
