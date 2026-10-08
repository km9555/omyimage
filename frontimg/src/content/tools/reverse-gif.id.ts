import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.id";

/** Indonesian copy for /id/reverse-gif. */
const content: ToolPageContent = {
  toolId: "reverse-gif",
  locale: "id",
  name: "Putar Balik GIF",
  tagline:
    "Putar GIF animasi mundur, atau jadikan boomerang yang bergerak maju lalu mundur dalam satu loop yang mulus. Setiap frame mempertahankan durasinya. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Reverse GIF Online Gratis — Putar Balik GIF dan Boomerang | oMyImage",
  metaDescription:
    "Reverse GIF animasi online gratis: putar mundur atau buat boomerang yang bergerak maju lalu mundur. Durasi frame tetap. Di browser, tanpa upload.",

  intro:
    "Memutar animasi secara mundur adalah salah satu trik tertua: air melompat kembali ke gelas, benda yang jatuh terbang lagi ke tangan, kerumunan berjalan mundur. Putar Balik GIF dari oMyImage membalik urutan semua frame di GIF Anda sehingga diputar dari akhir ke awal, dan pilihan Boomerang memutar potongan itu maju lalu mundur, jadi loop-nya tidak punya lompatan yang terlihat. Tambahkan GIF, pilih arahnya, bandingkan hasilnya dengan aslinya, lalu unduh.",

  sections: [
    {
      heading: "Mundur atau boomerang",
      id: "modes",
      body: [
        "Mundur memutar frame dari yang terakhir ke yang pertama. Durasi GIF tetap sama persis dan jumlah framenya juga sama; hanya urutannya yang berubah. Pilihan ini pas untuk lelucon yang mengandalkan waktu berjalan mundur dan untuk GIF yang memang lebih bagus dari arah sebaliknya.",
        "Boomerang memutar frame maju lalu mundur. Frame pertama dan terakhir tidak diulang di titik balik, jadi gerakannya memantul halus alih-alih berhenti. Inilah efek yang disebut boomerang oleh aplikasi kamera HP, dan cara paling mudah membuat potongan pendek apa pun berulang tanpa lompatan.",
      ],
    },
    {
      heading: "Durasi",
      id: "timing",
      body: [
        "Setiap frame mempertahankan durasinya sendiri. Bila GIF asli berhenti dua detik di frame terakhir sebelum mengulang, GIF yang dibalik juga berhenti dua detik di frame itu — hanya saja sekarang di awal. Biasanya memang itu yang diinginkan, tetapi bila jeda di awal terasa aneh, Ubah Kecepatan GIF bisa memberi semua frame durasi yang sama.",
        "Boomerang hampir dua kali lebih panjang dari aslinya, karena sebagian besar frame diputar dua kali. Boomerang terbaik dibuat dari potongan pendek satu sampai tiga detik; yang lebih panjang bisa terasa lambat saat kembali.",
      ],
    },
    {
      heading: "Kenapa sebagian GIF melompat saat mengulang",
      id: "loops",
      body: [
        "Kebanyakan GIF dipotong dari video, jadi frame terakhirnya jarang cocok dengan frame pertama. Saat GIF mulai lagi, semuanya meloncat kembali ke posisi awal, dan mata menangkap lompatan itu setiap beberapa detik. Boomerang tidak pernah melompat: ia berbalik di setiap ujung, sehingga gerakannya terus menyambung berapa kali pun diputar.",
        "Karena itu boomerang jadi solusi cepat untuk foto produk, tangan yang melambai, minuman yang dituang, rambut tertiup angin, dan gerakan pendek lain yang biasanya tersendat di setiap pengulangan.",
      ],
    },
    {
      heading: "Kualitas dan ukuran",
      id: "quality",
      body: [
        "Frame-nya sendiri tidak diubah. Selama warna GIF muat dalam satu palet — seperti kebanyakan GIF — warna yang sama ditulis kembali. GIF dari video kadang memakai palet per frame, dan GIF seperti itu mendapat satu palet bersama berisi 256 warna yang dipilih dari semua frame, yang hampir tidak pernah terlihat.",
        "GIF yang dibalik biasanya berukuran mirip aslinya. Boomerang lebih besar, karena hampir setiap frame disimpan dua kali; bila itu penting, Kompres GIF bisa meringankannya setelahnya.",
      ],
    },
    {
      heading: "Ide",
      id: "ideas",
      body: [
        "Putar mundur lompatan ke kolam, loncatan, atau cipratan air. Buat bangunan, gambar, atau resep seolah terurai kembali. Ubah video produk yang berputar atau klip potret menjadi boomerang yang berulang mulus di situs atau story. Balik GIF reaksi untuk mengubah maknanya sama sekali.",
      ],
    },
    {
      heading: "Boomerang untuk story dan status WhatsApp",
      id: "social",
      body: [
        "Boomerang laris di story, status WhatsApp, dan postingan karena menahan pandangan: gerakannya maju-mundur tanpa henti. Mulailah dari potongan satu atau dua detik — misalnya yang dibuat dengan Video ke GIF — pilih Boomerang di sini, dan bila filenya berat, perkecil dengan Ubah Ukuran GIF sebelum diunggah.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF didekode, diurutkan ulang, dan dienkode sepenuhnya di browser Anda. File tidak pernah di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara memutar balik GIF (reverse GIF)",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih arah", description: "Pilih Mundur untuk memutar dari akhir, atau Boomerang untuk maju lalu mundur." },
    { title: "Putar balik dan unduh", description: "Klik Putar Balik GIF, bandingkan hasilnya dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "history", title: "Mundur atau boomerang", description: "Putar dari akhir, atau maju-mundur dalam loop yang mulus." },
    { icon: "visibility", title: "Berdampingan", description: "GIF asli dan hasilnya diputar bersebelahan." },
    { icon: "lock", title: "Tanpa upload", description: "Dibalik sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara reverse GIF?", a: "Tambahkan GIF, biarkan Mundur terpilih, lalu klik Putar Balik GIF. Frame diputar dari yang terakhir ke yang pertama." },
    { q: "Apa itu GIF boomerang?", a: "GIF yang diputar maju lalu mundur, terus-menerus, sehingga loop-nya tidak pernah melompat kembali ke awal." },
    { q: "Apakah GIF yang dibalik tetap sama cepatnya?", a: "Ya. Setiap frame mempertahankan durasinya; hanya urutannya yang berubah." },
    { q: "Kenapa boomerang saya lebih panjang?", a: "Sebagian besar frame diputar dua kali — maju dan mundur — sehingga boomerang hampir dua kali lebih lama." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Frame tidak diubah, dan warna asli dipakai lagi selama muat dalam satu palet." },
    { q: "Apakah file jadi lebih besar?", a: "GIF yang dibalik ukurannya kurang lebih sama. Boomerang lebih besar karena hampir setiap frame disimpan dua kali." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan." },
    { q: "Bisakah membalik video?", a: "Ubah dulu potongannya dengan Video ke GIF, lalu balik GIF-nya di sini." },
    { q: "Bisakah membuat boomerang dari foto diam?", a: "Tidak — boomerang butuh gerakan. GIF dengan satu frame tidak punya apa pun untuk dibalik." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. GIF dibalik sepenuhnya di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP. GIF yang panjang butuh waktu sedikit lebih lama di HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Berapa durasi yang pas untuk boomerang?", a: "Satu sampai tiga detik. Potongan yang lebih panjang terasa lambat saat kembali dan filenya berat." },
  ],

  security:
    "GIF Anda dibalik sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
