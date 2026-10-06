import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.id";

/** Indonesian copy for /id/potong-gif. */
const content: ToolPageContent = {
  toolId: "gif-cutter",
  locale: "id",
  name: "Potong GIF",
  tagline:
    "Potong GIF animasi sampai tinggal bagian yang Anda mau: pilih frame pertama dan terakhir yang disimpan, atau buang satu bagian dari tengahnya. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Potong GIF Online Gratis — Trim Durasi GIF Animasi | oMyImage",
  metaDescription:
    "Potong GIF animasi online gratis: pilih frame awal dan akhir untuk menyimpan sebagian GIF, atau hapus satu bagian darinya. Di browser, tanpa upload.",

  intro:
    "GIF yang disimpan dari video dan rekaman layar jarang mulai dan berakhir di tempat yang tepat. Ada satu detik kosong sebelum aksinya, efek memudar di akhir, atau bagian tengah panjang yang ingin dilewati. Potong GIF dari oMyImage memungkinkan Anda memangkasnya frame demi frame: geser penggeser awal dan akhir, periksa frame pertama dan terakhir pilihan Anda di thumbnail, lalu tentukan apakah bagian itu disimpan atau dihapus. Sebelum diunduh, hasilnya diputar di samping aslinya, lengkap dengan durasi dan ukuran barunya.",

  sections: [
    {
      heading: "Simpan satu bagian atau hapus satu bagian",
      id: "modes",
      body: [
        "Simpan hanya menyimpan frame dari penggeser awal sampai penggeser akhir — pemangkasan biasa, untuk membuang waktu kosong di kedua ujung atau mengambil satu momen dari GIF yang panjang.",
        "Hapus melakukan kebalikannya: frame di antara kedua penggeser dihapus dan sisanya disambung. Pakai ini untuk membuang jeda, kesalahan, atau adegan yang tidak diinginkan dari tengah, sambil tetap menyimpan awal dan akhirnya.",
      ],
    },
    {
      heading: "Menemukan frame yang tepat",
      id: "frames",
      body: [
        "Setiap penggeser menunjukkan nomor frame dan saat frame itu dimulai dalam animasi, dalam detik. Kedua thumbnail menampilkan frame pertama dan terakhir dari pilihan Anda, jadi Anda bisa berhenti tepat di tempat aksi dimulai atau teks menghilang, tanpa menebak-nebak dari garis waktu.",
        "Frame adalah langkah terkecil dalam GIF. GIF dari video 10 frame per detik punya satu frame setiap sepersepuluh detik; GIF dengan waktu tidak rata bisa menahan satu frame lebih lama, dan itu terlihat dari waktu di samping penggeser.",
      ],
    },
    {
      heading: "Apa yang tetap sama",
      id: "kept",
      body: [
        "Frame yang disimpan tidak diubah, dan masing-masing mempertahankan durasinya, jadi sisa animasinya diputar persis seperti sebelumnya. GIF tetap berulang. Selama warnanya muat dalam satu palet — seperti kebanyakan GIF — warna itu ditulis kembali persis sama; GIF dengan palet per frame mendapat satu palet bersama berisi 256 warna yang dipilih dari semua frame, dan bedanya hampir tidak pernah terlihat.",
      ],
    },
    {
      heading: "Lebih pendek berarti lebih ringan",
      id: "size",
      body: [
        "Setiap frame yang dibuang berarti data yang dibuang, jadi memangkas adalah salah satu cara paling efektif untuk mengecilkan GIF tanpa menyentuh kualitasnya. Memotong GIF enam detik menjadi dua detik terbaiknya biasanya mengurangi sekitar dua pertiga ukuran file.",
        "Bila masih terlalu besar untuk tempat tujuannya, crop tepinya dengan Crop GIF atau kurangi warnanya dengan Kompres GIF.",
      ],
    },
    {
      heading: "Contoh pemangkasan",
      id: "uses",
      body: [
        "Membuang detik-detik kosong yang ditambahkan perekam layar sebelum Anda mulai dan setelah berhenti. Menyimpan bagian paling lucu dari GIF reaksi saja. Menghapus momen ketika seseorang lewat di depan kamera. Membagi GIF panjang menjadi potongan pendek dengan menyimpan beberapa hasil potong dari file yang sama satu per satu.",
        "Untuk memotong video sebelum jadi GIF, Video ke GIF punya kontrol awal dan akhirnya sendiri, jadi filenya kecil sejak awal.",
      ],
    },
    {
      heading: "GIF pendek untuk WhatsApp",
      id: "messengers",
      body: [
        "Aplikasi pesan dan media sosial sering punya batas ukuran, dan GIF yang terlalu panjang bisa ditolak atau dikompres ulang sampai kualitasnya turun. Memotong GIF sampai tinggal detik-detik yang penting adalah cara paling mudah agar muat dalam batas itu tanpa memperburuk gambarnya — dan GIF pendek juga lebih menahan perhatian yang melihatnya.",
      ],
    },
    {
      heading: "Membuang beberapa bagian",
      id: "several",
      body: [
        "Alat ini menghapus satu bagian setiap kali. Untuk membuang dua atau tiga bagian dari GIF yang sama, unduh hasil penghapusan pertama, tambahkan lagi, lalu ulangi — setiap putaran hanya butuh beberapa detik. Nomor frame bergeser setelah tiap penghapusan, jadi berpeganglah pada thumbnail frame pertama dan terakhir, bukan pada nomor yang lama. File aslinya sendiri tidak berubah dan tetap ada di perangkat Anda.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF didekode, dipotong, dan dienkode sepenuhnya di browser Anda. File tidak pernah di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara memotong GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Atur awal dan akhir", description: "Geser penggeser ke frame pertama dan terakhir, lalu pilih simpan atau hapus bagian itu." },
    { title: "Potong dan unduh", description: "Klik Potong GIF, bandingkan hasilnya dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "burst_mode", title: "Tepat per frame", description: "Mulai dan berhenti di frame yang pas, lengkap dengan waktu dan thumbnail." },
    { icon: "delete", title: "Simpan atau hapus", description: "Pangkas kedua ujung, atau buang satu bagian dari tengah." },
    { icon: "lock", title: "Tanpa upload", description: "Dipotong sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara memangkas GIF?", a: "Tambahkan GIF, geser penggeser Awal dan Akhir ke frame yang Anda mau, biarkan Simpan terpilih, lalu klik Potong GIF." },
    { q: "Bisakah menghapus frame dari tengah GIF?", a: "Bisa. Pilih bagian yang ingin dihapus lalu pilih Hapus; frame sebelum dan sesudahnya disambung." },
    { q: "Apakah memotong mengubah kecepatan?", a: "Tidak. Setiap frame yang disimpan mempertahankan durasi aslinya." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Frame yang disimpan tidak diubah, dan warna aslinya dipakai lagi selama muat dalam satu palet." },
    { q: "Seberapa kecil GIF saya nanti?", a: "Kira-kira sebanding dengan frame yang dibuang — membuang separuh frame menghemat sekitar separuh file." },
    { q: "Bisakah memotong berdasarkan waktu, bukan frame?", a: "Setiap penggeser menunjukkan waktu mulai frame-nya, jadi Anda bisa membidik detik tertentu; potongannya sendiri selalu jatuh di antara frame." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan." },
    { q: "Apakah GIF hasil potongan tetap berulang?", a: "Ya. GIF berulang seperti aslinya." },
    { q: "Bisakah membagi GIF jadi beberapa bagian?", a: "Bisa — potong dan unduh satu bagian, lalu geser penggesernya dan potong bagian berikutnya dari GIF yang sama." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. GIF dipotong sepenuhnya di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apa bedanya Potong GIF dan Crop GIF?", a: "Potong GIF membuang frame, artinya membuang waktu. Crop GIF membuang tepi gambar." },
  ],

  security:
    "GIF Anda dipotong sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
