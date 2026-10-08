import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-gif. */
const content: ToolPageContent = {
  toolId: "gif-compressor",
  locale: "id",
  name: "Kompres GIF",
  tagline:
    "Perkecil GIF animasi — lebih sedikit warna, frame yang lebih cerdas, dan ukuran yang bisa diperkecil — tanpa animasinya berhenti. Bandingkan sebelum dan sesudah, lalu unduh. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Kompres GIF Online Gratis — Perkecil Ukuran File GIF | oMyImage",
  metaDescription:
    "Kompres GIF animasi online gratis: lebih sedikit warna, frame yang lebih cerdas, dan ukuran yang bisa diperkecil membuat GIF jauh lebih ringan tanpa berhenti bergerak. Tanpa upload.",

  intro:
    "GIF animasi cepat sekali membengkak, dan GIF yang berat adalah GIF yang ditolak WhatsApp, forum, dan email, atau lambat dimuat. Kompres GIF dari oMyImage membangun ulang GIF Anda agar memakan lebih sedikit ruang: hanya menyimpan bagian yang berubah antar-frame, bisa memakai lebih sedikit warna dan mengabaikan kedipan kecil, serta bisa membuang frame atau memperkecil ukuran bila perlu. Pilih Ringan, Sedang, atau Kuat, lihat aslinya dan hasilnya berdampingan beserta ukurannya, lalu unduh yang Anda suka.",

  sections: [
    {
      heading: "Kenapa GIF begitu berat",
      id: "why",
      body: [
        "GIF adalah tumpukan gambar, masing-masing dibatasi 256 warna dan dikompres tanpa kehilangan kualitas. Ukurannya bertambah karena tiga hal: berapa piksel di setiap frame, berapa banyak frame, dan seberapa banyak yang berubah dari satu frame ke frame berikutnya. GIF dari video HP dengan mudah mencapai puluhan megabyte untuk beberapa detik gerakan.",
        "Banyak GIF juga disimpan dengan boros: setiap frame disimpan utuh bahkan di bagian yang tidak bergerak, atau setiap frame punya tabel warnanya sendiri. Membangun ulang file seperti itu dengan rapi sering sudah menghemat banyak sebelum kualitas perlu dikorbankan.",
      ],
    },
    {
      heading: "Apa yang dilakukan setiap level",
      id: "levels",
      body: [
        "Ringan membangun ulang GIF dengan satu palet bersama berisi 256 warna dan hanya menyimpan piksel yang berubah antar-frame. Level ini paling sedikit mengubah tampilan dan cocok sebagai percobaan pertama untuk GIF yang diekspor dari aplikasi lama.",
        "Sedang memakai 128 warna dan menganggap perbedaan sangat kecil antar-frame sebagai tidak berubah, sehingga kedipan yang membuat GIF dari video sangat berat hilang. Kuat memakai 64 warna, mengabaikan kedipan yang lebih besar, dan menyimpan satu dari setiap dua frame — durasi frame yang dibuang ditambahkan ke frame yang tersisa, jadi kecepatannya tetap sama.",
        "Setiap pengaturan di bawah level bisa diubah sendiri: jumlah warna, frame mana yang disimpan, dan ukuran dalam persen dari aslinya.",
      ],
    },
    {
      heading: "Cara mendapat hasil terbaik",
      id: "tips",
      body: [
        "Penghematan terbesar biasanya dari ukuran. Memperkecil lebar dan tinggi menjadi setengah menyisakan seperempat piksel, dan ukuran file mengecil kurang lebih sebanding. Kalau GIF nantinya memang tampil kecil — di gelembung chat atau kolom samping — pilih 75% atau 50%.",
        "Berikutnya frame dan warna. Animasi sederhana, logo, dan rekaman layar tetap terlihat sama dengan 64 atau bahkan 32 warna; foto dan warna kulit butuh 128 atau lebih. Menyimpan satu dari dua frame memangkas jumlah frame menjadi setengah dan cocok untuk gerakan yang lebih lambat.",
      ],
    },
    {
      heading: "Saat hasilnya tidak lebih kecil",
      id: "already",
      body: [
        "GIF yang sudah dioptimalkan oleh aplikasi khusus mungkin tidak mengecil dengan level Ringan, karena tidak ada lagi yang bisa dibuang tanpa mengubah gambarnya. Alat ini memberi tahu bila itu terjadi; coba Kuat, lebih sedikit warna, atau ukuran lebih kecil, lalu bandingkan hasilnya sebelum mengunduh.",
        "Kalau animasinya harus tetap tajam dan kecil, pertimbangkan mengubahnya ke MP4. Video mengompres gerakan jauh lebih baik daripada GIF dan bisa diputar di semua aplikasi chat dan HP.",
      ],
    },
    {
      heading: "Transparansi dan durasi",
      id: "transparency",
      body: [
        "GIF transparan tetap transparan. Karena transparansi GIF hanya hidup atau mati tanpa tepi halus, trik menyimpan perubahan saja tidak bisa dipakai, sehingga GIF transparan mengecil lebih sedikit daripada GIF biasa; mengurangi warna dan ukuran tetap membantu.",
        "Durasi setiap frame dipertahankan persis, termasuk jeda yang tidak rata, dan GIF berulang seperti sebelumnya. Jeda yang oleh browser memang ditampilkan 0,1 detik ditulis seperti itu, jadi kecepatan yang Anda lihat tidak berubah.",
      ],
    },
    {
      heading: "GIF untuk WhatsApp dan media sosial",
      id: "whatsapp",
      body: [
        "Aplikasi chat dan media sosial sering mengompres ulang atau menolak GIF yang terlalu besar, dan hasilnya jadi buram. Dengan mengecilkan GIF lebih dulu di sini — misalnya level Sedang dengan ukuran 75% — file terkirim lebih cepat, hemat kuota, dan tampil seperti yang Anda inginkan.",
      ],
    },
  ],

  howToTitle: "Cara kompres GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih level", description: "Pilih Ringan, Sedang, atau Kuat, atau atur warna, frame, dan ukuran sendiri." },
    { title: "Kompres dan bandingkan", description: "Klik Kompres GIF, bandingkan ukurannya berdampingan, lalu unduh." },
  ],

  features: [
    { icon: "compress", title: "GIF lebih kecil", description: "Hanya piksel yang berubah yang disimpan, dengan pilihan lebih sedikit warna, frame, atau piksel." },
    { icon: "visibility", title: "Sebelum dan sesudah", description: "Kedua versi diputar berdampingan beserta ukuran filenya." },
    { icon: "lock", title: "Tanpa upload", description: "GIF Anda dikompres sepenuhnya di browser." },
  ],

  faqs: [
    { q: "Bagaimana cara memperkecil ukuran GIF?", a: "Tambahkan GIF, pilih Sedang atau Kuat, lalu klik Kompres GIF. Untuk penghematan lebih besar, pilih juga ukuran lebih kecil seperti 75% atau 50%." },
    { q: "Apakah kompresi akan membuang frame?", a: "Tidak pada Ringan atau Sedang. Kuat menyimpan satu dari dua frame dan menambahkan durasi frame yang dibuang ke frame yang tersisa, jadi kecepatannya tetap." },
    { q: "Kenapa GIF hasil kompres tidak lebih kecil?", a: "Kemungkinan GIF itu sudah dioptimalkan. Coba Kuat, lebih sedikit warna, atau ukuran lebih kecil." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan, meski mengecil lebih sedikit daripada GIF biasa." },
    { q: "Berapa warna yang sebaiknya disimpan?", a: "64 cukup untuk logo, kartun, dan rekaman layar; simpan 128 atau 256 untuk foto dan wajah." },
    { q: "Apa yang paling cepat memperkecil GIF?", a: "Memperkecil ukuran pikselnya. Setengah lebar dan tinggi berarti sekitar seperempat data." },
    { q: "Apakah GIF tetap berulang?", a: "Ya. Pengulangan dan durasi setiap frame dipertahankan." },
    { q: "Apakah lebih baik pakai MP4?", a: "Untuk animasi panjang atau detail, ya — MP4 biasanya jauh lebih kecil. Pakai GIF di tempat yang tidak menerima video." },
    { q: "Apakah ada batas ukuran?", a: "Tidak ada batas tetap. GIF yang sangat besar butuh waktu lebih lama, dan progresnya ditampilkan selama proses." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Kompresi berlangsung sepenuhnya di browser Anda." },
  ],

  security:
    "GIF Anda didekode dan dikodekan ulang sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifTool.tsx — shared with gif-resizer and webp-to-gif, whose modules reuse this block.
    "Select a GIF": "Pilih GIF",
    "Select a WEBP": "Pilih WEBP",
    "or drop a GIF here": "atau lepaskan GIF di sini",
    "or drop an animated WEBP here": "atau lepaskan WEBP animasi di sini",
    "Please select a GIF.": "Silakan pilih GIF.",
    "Please select a WEBP image.": "Silakan pilih gambar WEBP.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "GIF settings": "Pengaturan GIF",
    "Compress GIF": "Kompres GIF",
    "Resize GIF": "Ubah Ukuran GIF",
    "Convert to GIF": "Ubah ke GIF",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Your GIF will appear here.": "GIF Anda akan muncul di sini.",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Set a size": "Atur ukuran",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "{p}% smaller": "{p}% lebih kecil",
    "This GIF is already well optimised — try Strong, fewer colours or a smaller size.":
      "GIF ini sudah cukup optimal — coba Kuat, lebih sedikit warna, atau ukuran lebih kecil.",
    "This WEBP isn't animated, so the GIF will be a single still image.": "WEBP ini tidak beranimasi, jadi GIF-nya berupa satu gambar diam.",
    "Compression": "Kompresi",
    "Stronger levels use fewer colours and skip tiny changes between frames.":
      "Level yang lebih kuat memakai lebih sedikit warna dan melewati perubahan kecil antar-frame.",
    "Colours": "Warna",
    "Frames": "Frame",
    "Size": "Ukuran",
    "By percent": "Dengan persen",
    "By pixels": "Dengan piksel",
    "Percent": "Persen",
    "Width (px)": "Lebar (px)",
    "Height (px)": "Tinggi (px)",
    "Keep aspect ratio": "Pertahankan rasio aspek",
    "Every frame is resized and the timing stays the same.": "Setiap frame diubah ukurannya dan durasinya tetap sama.",
    "Every frame and its timing are kept. GIF has only 256 colours and no soft transparency, so gradients may band and semi-transparent edges become solid.":
      "Setiap frame dan durasinya dipertahankan. GIF hanya punya 256 warna dan tanpa transparansi halus, jadi gradasi bisa bergaris dan tepi semi-transparan menjadi padat.",
    "Your file is processed in your browser and never uploaded.": "File Anda diproses di browser dan tidak pernah di-upload.",
    // LEVEL_LABEL / KEEP_LABEL (module scope)
    "Light": "Ringan",
    "Medium": "Sedang",
    "Strong": "Kuat",
    "Keep all frames": "Simpan semua frame",
    "Keep every 2nd frame": "Simpan 1 dari 2 frame",
    "Keep every 3rd frame": "Simpan 1 dari 3 frame",
  },
};

export default content;
