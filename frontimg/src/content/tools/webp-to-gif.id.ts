import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.id";

/** Indonesian copy for /id/webp-ke-gif. */
const content: ToolPageContent = {
  toolId: "webp-to-gif",
  locale: "id",
  name: "WEBP ke GIF",
  tagline:
    "Ubah gambar WEBP animasi menjadi GIF dengan semua frame dan durasinya — agar animasinya bisa diputar di aplikasi dan editor yang tidak mengenal WEBP. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "WEBP ke GIF Online Gratis — WEBP Animasi | oMyImage",
  metaDescription:
    "Ubah WEBP animasi ke GIF online gratis dengan semua frame dan durasinya. WEBP diam juga bisa. Di browser, tanpa upload.",

  intro:
    "WEBP animasi memang hemat, tetapi banyak aplikasi masih belum bisa membukanya: editor gambar lama, sebagian aplikasi chat, aplikasi presentasi, dan banyak formulir upload hanya menampilkan satu frame diam atau menolak filenya. GIF dikenali di mana-mana. Konverter WEBP ke GIF dari oMyImage membaca setiap frame WEBP animasi — beserta durasi, cara penumpukan, dan transparansinya — lalu menuliskannya sebagai GIF yang berulang. Tambahkan file, lihat hasilnya di samping aslinya, lalu unduh.",

  sections: [
    {
      heading: "Dari mana WEBP animasi berasal",
      id: "sources",
      body: [
        "Situs web menyajikan animasi dalam WEBP karena lebih kecil daripada GIF, jadi animasi yang disimpan dari sebuah halaman sering berupa file .webp. Stiker animasi WhatsApp juga berupa file WEBP. Keduanya tampil baik di browser, tetapi di hampir semua tempat lain berubah jadi gambar beku atau error.",
        "Mengubahnya ke GIF membuat animasinya mudah dibawa ke mana saja: bisa ditempel di dokumen, di-upload ke forum, diedit per frame, atau dikirim lewat aplikasi yang tidak mengenal WEBP.",
      ],
    },
    {
      heading: "Apa yang berubah di GIF",
      id: "tradeoffs",
      body: [
        "GIF lebih tua dan lebih terbatas. GIF hanya menampilkan 256 warna per frame, jadi gradasi halus dan foto bisa tampak bergaris; alat ini memilih satu palet untuk seluruh animasi agar setidaknya warnanya stabil antar-frame. Transparansi GIF hanya hidup atau mati, jadi tepi halus yang semi-transparan menjadi tegas.",
        "Perkirakan GIF akan lebih besar daripada WEBP-nya, sering beberapa kali lipat. Bila ukuran penting, Kompres GIF bisa mengecilkannya setelahnya, dan bila tujuan Anda menerima video, MP4 akan lebih kecil lagi.",
      ],
    },
    {
      heading: "Frame dan durasi",
      id: "timing",
      body: [
        "Setiap frame WEBP didekode sendiri-sendiri lalu disusun seperti cara browser memutarnya, mengikuti pengaturan penumpukan dan pembuangan tiap frame, sehingga animasi yang hanya memperbarui sebagian gambar tetap tampil benar. Setiap frame mempertahankan durasinya, dan GIF berulang terus.",
        "Konversi ini berjalan di semua browser modern, termasuk Safari, karena setiap frame didekode dengan dukungan WEBP bawaan browser, bukan decoder tambahan.",
      ],
    },
    {
      heading: "WEBP diam",
      id: "still",
      body: [
        "WEBP yang tidak beranimasi diubah menjadi GIF satu frame, dan alat ini memberi tahu Anda. Untuk gambar diam, PNG atau JPG biasanya lebih baik daripada GIF: pakai WEBP ke PNG untuk mempertahankan transparansi dan semua warna, atau WEBP ke JPG untuk foto.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "WEBP dibaca dan GIF ditulis sepenuhnya di browser Anda. Stiker, screenshot, dan animasi yang disimpan tidak pernah keluar dari perangkat, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
    {
      heading: "Stiker WhatsApp jadi GIF",
      id: "stickers",
      body: [
        "Stiker animasi WhatsApp yang sudah berupa GIF bisa dikirim ke aplikasi yang tidak membuka stiker WEBP, dimasukkan ke presentasi, atau diunggah ke forum. Stiker biasanya berukuran 512 × 512 piksel; bila butuh yang lebih kecil, perkecil hasilnya dengan Ubah Ukuran GIF.",
      ],
    },
    {
      heading: "WEBP lossy dan lossless",
      id: "kinds",
      body: [
        "Frame WEBP ada dua jenis: lossy, yang bisa membawa lapisan transparansi terpisah, dan lossless. Keduanya dibaca persis seperti yang ditampilkan browser. Buram atau kotak-kotak yang sudah ada di WEBP lossy ikut terbawa ke GIF — konversi tidak bisa mengembalikan detail yang sudah dibuang WEBP.",
      ],
    },
    {
      heading: "Mengecilkan GIF setelahnya",
      id: "smaller",
      body: [
        "Bila GIF-nya lebih besar dari batas tempat tujuan, ubah ukurannya ke ukuran tampilannya — stiker biasanya 512 piksel atau kurang — lalu proses dengan Kompres GIF di level Sedang. Kedua langkah itu biasanya membuat stiker atau banner hasil konversi kembali ke ukuran yang nyaman.",
      ],
    },
  ],

  howToTitle: "Cara mengubah WEBP ke GIF",
  steps: [
    { title: "Tambahkan WEBP", description: "Pilih gambar WEBP animasi (atau diam)." },
    { title: "Ubah", description: "Klik Ubah ke GIF; setiap frame dan durasinya dipertahankan." },
    { title: "Unduh", description: "Bandingkan GIF dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "gif_box", title: "Animasi tetap ada", description: "Setiap frame, durasi, penumpukan, dan transparansi ikut ke GIF." },
    { icon: "devices", title: "Bisa diputar di mana saja", description: "GIF terbuka di aplikasi, editor, dan formulir yang menolak WEBP." },
    { icon: "lock", title: "Tanpa upload", description: "Dikonversi sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah WEBP animasi ke GIF?", a: "Tambahkan WEBP dan klik Ubah ke GIF. Setiap frame dan durasinya dipertahankan, dan GIF berulang." },
    { q: "Kenapa GIF lebih besar daripada WEBP?", a: "GIF mengompres jauh kurang efisien. Pakai Kompres GIF setelahnya bila ukuran penting." },
    { q: "Apakah warnanya berubah?", a: "Sedikit pada foto dan gradasi: GIF hanya punya 256 warna, dipilih sekali untuk seluruh animasi." },
    { q: "Apakah transparansi tetap ada?", a: "Ya, tetapi transparansi GIF tidak punya tepi halus, jadi tepi semi-transparan menjadi padat." },
    { q: "Bisakah mengubah stiker WhatsApp?", a: "Bisa. Stiker animasi WhatsApp adalah file WEBP dan bisa diubah seperti file lainnya." },
    { q: "Bagaimana kalau WEBP saya tidak beranimasi?", a: "Anda mendapat GIF satu frame. Untuk gambar diam, WEBP ke PNG atau WEBP ke JPG biasanya lebih baik." },
    { q: "Apakah bisa di Safari?", a: "Bisa. Frame didekode dengan dukungan WEBP bawaan browser, yang juga dimiliki Safari." },
    { q: "Apakah file saya di-upload?", a: "Tidak. Konversi berlangsung sepenuhnya di browser Anda." },
    { q: "Bisakah stikernya diperkecil setelah diubah?", a: "Bisa. Proses GIF-nya dengan Ubah Ukuran GIF atau Kompres GIF." },
    { q: "Berapa lama konversinya?", a: "Beberapa detik untuk stiker dan animasi pendek. WEBP yang panjang atau besar butuh lebih lama, dan progresnya ditampilkan." },
    { q: "Apakah GIF berulang dengan cara yang sama?", a: "GIF berulang terus, seperti hampir semua WEBP animasi." },
    { q: "Apakah perlu daftar akun?", a: "Tidak. Alat ini gratis, tanpa akun dan tanpa watermark." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP. Animasi yang besar butuh waktu sedikit lebih lama di HP." },
    { q: "Apakah GIF-nya bisa dipakai di presentasi?", a: "Bisa. PowerPoint, Keynote, dan Google Slides memutar GIF langsung di slide." },
  ],

  security:
    "WEBP Anda dibaca dan diubah ke GIF sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
