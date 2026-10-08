import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/gabung-gif. */
const content: ToolPageContent = {
  toolId: "gif-merger",
  locale: "id",
  name: "Gabung GIF",
  tagline:
    "Gabungkan beberapa GIF animasi jadi satu: susun urutannya, dan GIF diputar satu per satu, setiap frame dengan durasinya sendiri. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Gabung GIF Online Gratis — Satukan Beberapa GIF | oMyImage",
  metaDescription:
    "Gabungkan GIF animasi online gratis: susun beberapa GIF dan satukan jadi satu GIF yang memutarnya satu per satu. Di browser, tanpa upload.",

  intro:
    "Kadang satu GIF saja tidak cukup: sebuah reaksi butuh lanjutannya, tutorial terdiri dari tiga potongan pendek, atau sebelum-dan-sesudah lebih pas sebagai satu animasi. Gabung GIF dari oMyImage menyatukannya. Tambahkan dua GIF atau lebih, susun sesuai keinginan, pilih cara GIF dengan ukuran berbeda disesuaikan, lalu gabungkan. Hasilnya memutar setiap GIF bergiliran, mempertahankan durasi setiap frame, dan berulang sebagai satu animasi.",

  sections: [
    {
      heading: "Urutan dan durasi",
      id: "order",
      body: [
        "GIF diputar dari atas ke bawah daftar. Pakai tanda panah di samping setiap GIF untuk menaikkan atau menurunkannya, tanda silang untuk menghapus, dan Tambah GIF untuk memasukkan lebih banyak. Daftar menampilkan ukuran, jumlah frame, dan durasi setiap GIF, jadi Anda bisa merencanakan urutannya.",
        "Setiap frame mempertahankan durasinya, jadi setiap bagian diputar dengan kecepatan aslinya, termasuk jedanya. GIF hasil gabungan berulang sebagai satu kesatuan: setelah GIF terakhir selesai, GIF pertama mulai lagi.",
      ],
    },
    {
      heading: "GIF dengan ukuran berbeda",
      id: "sizes",
      body: [
        "Satu GIF punya satu ukuran untuk semua frame-nya, jadi GIF gabungan juga butuh satu ukuran. Pilih ukuran GIF pertama, yang terbesar, atau yang terkecil. GIF yang sudah berukuran sama disalin piksel demi piksel; yang lain diskalakan agar pas.",
        "Muat di dalam menjaga setiap frame tetap utuh dan menambahkan tepi di tempat bentuknya berbeda — transparan atau dengan warna pilihan Anda. Isi dan potong menskalakan frame agar menutupi seluruh hasil dan memotong bagian yang menonjol, jadi tidak ada tepi, tetapi ujung GIF yang bentuknya berbeda ikut terpotong.",
      ],
    },
    {
      heading: "Warna dan ukuran file",
      id: "colours",
      body: [
        "Satu GIF hanya bisa memakai 256 warna sekaligus. Bila GIF yang digabung memakai sedikit warna yang sama dan berukuran sama, warnanya dipertahankan persis. Kalau tidak, satu palet 256 warna dipilih dari semuanya; GIF dengan warna yang sangat berbeda, seperti kartun dan potongan video, bisa sedikit kehilangan detail warna.",
        "File gabungan kira-kira sebesar jumlah semua GIF-nya. Bila terlalu besar untuk tujuannya, proses setelahnya dengan Kompres GIF atau Ubah Ukuran GIF.",
      ],
    },
    {
      heading: "Ide",
      id: "ideas",
      body: [
        "Jadikan tiga rekaman layar pendek satu tutorial langkah demi langkah. Rangkai GIF pertanyaan dengan jawabannya yang lucu. Taruh potongan sebelum dan sesudah dalam satu animasi. Satukan kembali, dengan urutan baru, bagian-bagian GIF panjang yang Anda bagi dengan Potong GIF. Buat rangkuman momen terbaik dari beberapa GIF reaksi.",
        "Alat ini menggabungkan GIF berdasarkan waktu, satu setelah yang lain. Untuk memangkas setiap bagian dulu, pakai Potong GIF; untuk mengubah tempo satu bagian, pakai Ubah Kecepatan GIF sebelum menggabungkan.",
      ],
    },
    {
      heading: "Loop dan boomerang",
      id: "loops",
      body: [
        "GIF gabungan berulang terus sebagai satu animasi, meskipun salah satu bagiannya diatur untuk diputar sekali saja. Itu memungkinkan trik sederhana: gabungkan sebuah GIF dengan salinan terbaliknya, yang dibuat dengan Putar Balik GIF, dan GIF diputar maju lalu mundur. Menggabungkan GIF yang sama dua kali menggandakan durasinya tanpa mengubah kecepatan — berguna bila sebuah situs meminta durasi minimal.",
      ],
    },
    {
      heading: "Sebelum menggabungkan",
      id: "prepare",
      body: [
        "Hasil gabungan paling rapi bila bagian-bagiannya disiapkan. Pangkas awal dan akhir yang lambat agar potongan saling menyambung tanpa jeda, dan samakan ukuran GIF-nya bila Anda ingin warna persis tanpa tepi. GIF berukuran sama disalin apa adanya, dan file hasilnya pun lebih kecil.",
      ],
    },
    {
      heading: "Menggabungkan di HP",
      id: "phone",
      body: [
        "Di HP, GIF mudah digabung langsung dari galeri: ketuk Pilih GIF, tandai beberapa file sekaligus, lalu atur urutannya dengan tanda panah. GIF hasilnya bisa langsung dikirim lewat aplikasi chat. Gabungan yang panjang butuh memori, jadi di HP lama sebaiknya gabungkan potongan pendek atau perkecil dulu dengan Ubah Ukuran GIF.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Setiap GIF dibaca dan GIF gabungan ditulis sepenuhnya di browser Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara menggabungkan GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih dua GIF animasi atau lebih dari komputer atau HP." },
    { title: "Atur urutan", description: "Naikkan atau turunkan GIF, lalu pilih ukuran dan cara ukuran lain disesuaikan." },
    { title: "Gabungkan dan unduh", description: "Klik Gabungkan GIF, lihat hasilnya, lalu unduh." },
  ],

  features: [
    { icon: "layers", title: "Satu per satu", description: "Setiap GIF diputar bergiliran, setiap frame dengan durasinya sendiri." },
    { icon: "swap_vert", title: "Urutan bebas", description: "Ubah urutan, tambah, atau hapus GIF sebelum digabung." },
    { icon: "lock", title: "Tanpa upload", description: "Digabung sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menggabungkan beberapa GIF jadi satu?", a: "Tambahkan dua GIF atau lebih, susun urutannya, lalu klik Gabungkan GIF. Di hasilnya, GIF diputar satu per satu." },
    { q: "Bisakah mengubah urutannya?", a: "Bisa. Pakai panah atas dan bawah di samping setiap GIF." },
    { q: "Apakah kecepatan GIF tetap?", a: "Ya. Setiap frame mempertahankan durasi aslinya." },
    { q: "Bagaimana kalau ukuran GIF-nya berbeda?", a: "Pilih ukuran hasil, lalu Muat di dalam agar frame tetap utuh dengan tepi, atau Isi dan potong agar tanpa tepi." },
    { q: "Apakah tepinya bisa transparan?", a: "Bisa, secara bawaan. Anda juga bisa memilih warna." },
    { q: "Apakah warnanya berubah?", a: "Tidak bila GIF-nya memakai sedikit warna yang sama. GIF yang sangat berbeda berbagi satu palet 256 warna, sehingga warna bisa sedikit melembut." },
    { q: "Seberapa besar GIF hasil gabungan?", a: "Kira-kira sebesar jumlah ukuran semua GIF. Kompres GIF bisa mengecilkannya setelahnya." },
    { q: "Bisakah menaruh GIF berdampingan?", a: "Tidak — alat ini menggabungkan GIF berdasarkan waktu, satu setelah yang lain." },
    { q: "Berapa banyak GIF yang bisa digabung?", a: "Sebanyak yang sanggup ditangani memori perangkat Anda; beberapa lusin GIF pendek tidak masalah." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah GIF gabungan berulang?", a: "Ya. GIF berulang terus sebagai satu animasi." },
  ],

  security:
    "GIF Anda digabung sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifMergerTool.tsx
    "Select GIFs": "Pilih GIF",
    "or drop two or more GIFs here": "atau lepaskan dua GIF atau lebih di sini",
    "Please select GIF files.": "Silakan pilih file GIF.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Add GIFs": "Tambah GIF",
    "Clear all": "Hapus semua",
    "Move up": "Naikkan",
    "Move down": "Turunkan",
    "Add at least two GIFs to merge them.": "Tambahkan setidaknya dua GIF untuk menggabungkannya.",
    "Merge settings": "Pengaturan gabung",
    "Merge GIFs": "Gabungkan GIF",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Size": "Ukuran",
    "First GIF": "GIF pertama",
    "Largest": "Terbesar",
    "Smallest": "Terkecil",
    "GIFs of another size": "GIF dengan ukuran lain",
    "Fit inside": "Muat di dalam",
    "Fill and crop": "Isi dan potong",
    "The whole frame stays visible, with borders where the shapes differ.": "Seluruh frame tetap terlihat, dengan tepi di tempat bentuknya berbeda.",
    "The frame fills the output; edges that stick out are cropped.": "Frame mengisi seluruh hasil; tepi yang menonjol dipotong.",
    "Transparent background": "Latar transparan",
    "Background colour": "Warna latar",
    "The GIFs play in the order of the list, each frame with its own timing.": "GIF diputar sesuai urutan daftar, setiap frame dengan durasinya sendiri.",
    "Your files are processed in your browser and never uploaded.": "File Anda diproses di browser dan tidak pernah di-upload.",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
  },
};

export default content;
