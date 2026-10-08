import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.id";

/** Indonesian copy for /id/ubah-kecepatan-gif. */
const content: ToolPageContent = {
  toolId: "gif-speed-changer",
  locale: "id",
  name: "Ubah Kecepatan GIF",
  tagline:
    "Percepat atau perlambat GIF animasi, atau beri semua frame jeda yang sama. Biasanya hanya waktunya yang berubah — setiap piksel tetap seperti semula. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Ubah Kecepatan GIF Online — Percepat atau Perlambat GIF | oMyImage",
  metaDescription:
    "Ubah kecepatan GIF online gratis: buat GIF animasi lebih cepat atau lebih lambat, atau beri setiap frame jeda yang sama. Biasanya tanpa menyentuh piksel. Di browser, tanpa upload.",

  intro:
    "GIF yang terlalu lambat membuat leluconnya telat sampai; yang terlalu cepat membuat tutorial mustahil diikuti. Ubah Kecepatan GIF dari oMyImage memperbaiki temponya tanpa membuat ulang animasinya. Pilih kecepatan seperti 2× atau 0,5×, atau ketik sendiri, dan lihat durasi barunya sebelum menyimpan. Bila hanya waktunya yang perlu diubah — yang paling sering terjadi — alat ini menulis ulang jeda setiap frame dan tidak menyentuh gambarnya, jadi kualitas dan ukuran GIF tetap persis sama.",

  sections: [
    {
      heading: "Cara kerja kecepatan GIF",
      id: "how",
      body: [
        "GIF tidak punya frame rate. Setiap frame membawa jedanya sendiri, disimpan dalam seperseratus detik, dan pemutar menampilkan frame selama itu sebelum lanjut ke frame berikutnya. Itulah sebabnya satu GIF bisa berhenti lama di bagian lucunya lalu ngebut di sisanya — dan itulah sebabnya mengubah kecepatan berarti mengubah setiap jeda.",
        "Mempercepat 2× memotong setiap jeda jadi setengah, dan memperlambat ke 0,5× menggandakannya, jadi ritme aslinya — termasuk jedanya — tetap terjaga, hanya lebih cepat atau lebih lambat.",
      ],
    },
    {
      heading: "Lewat kecepatan atau jeda frame",
      id: "modes",
      body: [
        "Kecepatan mengubah skala waktu GIF itu sendiri. Tombolnya mencakup pilihan umum dari 0,25× sampai 3×, dan kolomnya menerima nilai apa pun dari 0,1× sampai 10×. Durasi barunya tampil sebelum Anda mengeklik, jadi Anda tahu persis berapa lama hasilnya diputar.",
        "Jeda frame memberi semua frame durasi yang sama, dalam milidetik: 100 ms berarti 10 frame per detik, 50 ms berarti 20, dan 40 ms berarti 25. Pakai ini agar GIF yang tidak rata diputar mulus, atau untuk menyamakan GIF dengan tempo tertentu. Angka frame per detik ikut berubah saat Anda mengetik.",
      ],
    },
    {
      heading: "Batas kecepatan browser",
      id: "limit",
      body: [
        "Browser mengikuti aturan lama: frame GIF dengan jeda 0,01 detik atau kurang ditampilkan selama 0,1 detik. Aturan ini melindungi dari GIF yang ditulis dengan jeda nol, tetapi akibatnya GIF yang dipercepat terlalu jauh justru diputar lebih lambat. Jeda tercepat yang diputar sesuai tulisannya adalah 0,02 detik — 50 frame per detik.",
        "Alat ini paham aturan tersebut. Bila sebuah kecepatan akan membuat frame lebih pendek dari 0,02 detik, frame yang bersebelahan digabung sampai masing-masing cukup panjang, dan alat ini memberi tahu berapa banyak. GIF lalu diputar dengan kecepatan pilihan Anda dengan frame lebih sedikit — persis seperti yang akan ditampilkan pemutar pada tempo itu.",
      ],
    },
    {
      heading: "Tanpa kehilangan kualitas bila bisa",
      id: "lossless",
      body: [
        "Bila semua frame tetap ada dan hanya jedanya yang berubah, GIF tidak dienkode ulang. Nilai jeda di dalam file ditulis ulang dan semua yang lain — piksel, palet, kompresi — tetap sama byte demi byte. Ukuran file praktis tidak berubah, dan prosesnya hanya sekejap bahkan untuk GIF yang panjang.",
        "GIF baru dienkode ulang bila frame harus digabung. Itu pun warnanya sendiri dipakai lagi selama muat dalam satu palet, jadi frame-nya tetap terlihat sama.",
      ],
    },
    {
      heading: "Kecepatan yang pas",
      id: "tips",
      body: [
        "GIF reaksi dan meme sering lebih kena bila sedikit dipercepat, sekitar 1,25× sampai 1,5×. Tutorial dan rekaman layar mungkin perlu diperlambat ke 0,75× atau 0,5× agar penonton bisa mengikuti setiap langkah. Gerak lambat untuk olahraga, hewan peliharaan, dan cipratan air paling bagus di 0,5× atau kurang bila aslinya punya banyak frame; GIF dengan sedikit frame akan tersendat saat diperlambat, karena tidak ada frame baru yang ditambahkan di antaranya.",
      ],
    },
    {
      heading: "GIF untuk WhatsApp dan media sosial",
      id: "social",
      body: [
        "GIF yang terlalu lambat di WhatsApp atau Telegram membosankan sebelum selesai, sedangkan yang terlalu cepat lewat begitu saja tanpa dipahami. Atur kecepatannya di sini sebelum mengirim: ukuran filenya tetap sama, jadi terkirim secepat aslinya dan diterima di tempat yang sama.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF dibaca dan ditulis ulang sepenuhnya di browser Anda. File tidak pernah di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara mengubah kecepatan GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Atur kecepatan", description: "Pilih kecepatan seperti 2× atau 0,5×, atau beri semua frame jeda yang sama." },
    { title: "Terapkan dan unduh", description: "Klik Ubah kecepatan, bandingkan hasilnya dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "speed", title: "Lebih cepat atau lambat", description: "Dari 0,1× sampai 10×, atau satu jeda untuk semua frame." },
    { icon: "check", title: "Piksel tidak disentuh", description: "Hanya waktunya yang ditulis ulang bila semua frame tetap ada." },
    { icon: "lock", title: "Tanpa upload", description: "Diubah sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mempercepat GIF?", a: "Tambahkan GIF, pilih kecepatan di atas 1×, misalnya 1,5× atau 2×, lalu klik Ubah kecepatan." },
    { q: "Bagaimana cara memperlambat GIF?", a: "Pilih kecepatan di bawah 1×, misalnya 0,75× atau 0,5×. Setiap frame tampil lebih lama." },
    { q: "Apakah mengubah kecepatan menurunkan kualitas?", a: "Biasanya sama sekali tidak: bila semua frame tetap ada, hanya jedanya yang ditulis ulang dan pikselnya tetap sama." },
    { q: "Kenapa GIF saya tidak bisa lebih cepat lagi?", a: "Browser menampilkan frame yang lebih pendek dari 0,02 detik selama 0,1 detik. Lewat dari itu, alat ini menggabungkan frame agar GIF tetap diputar dengan kecepatan pilihan Anda." },
    { q: "Apa itu jeda frame?", a: "Berapa lama setiap frame ditampilkan. 100 ms berarti 10 frame per detik; 50 ms berarti 20." },
    { q: "Bisakah semua frame diberi jeda yang sama?", a: "Bisa. Pilih Jeda frame dan ketik dalam milidetik; minimal 20 ms." },
    { q: "Apakah ukuran file berubah?", a: "Hampir tidak bila hanya waktunya yang berubah. Bila frame digabung, GIF jadi lebih kecil." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. Transparansi tidak disentuh." },
    { q: "Kenapa GIF yang diperlambat terlihat patah-patah?", a: "Memperlambat menampilkan frame yang sama lebih lama; tidak ada frame baru yang dibuat di antaranya. GIF dengan banyak frame melambat paling mulus." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Berapa lama prosesnya?", a: "Sekejap bila hanya waktunya yang berubah. Bila frame digabung, beberapa detik, dan progresnya terlihat di layar." },
  ],

  security:
    "Kecepatan GIF Anda diubah sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
