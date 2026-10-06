import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-10kb (variant of compress-image, 10 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-10kb",
  locale: "id",
  name: "Kompres Foto 10 KB",
  tagline:
    "Buat tanda tangan, cap jempol, atau foto kecil di bawah 10 KB — batas paling ketat di formulir online. Kualitas dan ukuran hanya diturunkan seperlunya, langsung di browser tanpa mengunggah file.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 10 KB Online — Tanda Tangan & Foto Kecil, Gratis | oMyImage",
  metaDescription:
    "Kompres tanda tangan, cap jempol, atau foto kecil ke bawah 10 KB online gratis — untuk formulir pendaftaran dengan batas paling ketat. Di browser, tanpa unggah.",

  intro:
    "10 KB adalah ukuran file terkecil yang diminta formulir online, dan biasanya muncul di tempat yang gambarnya memang kecil: kolom tanda tangan di formulir pendaftaran atau lamaran, cap jempol, atau pas foto di sistem pendaftaran lama. Foto dari HP tiga ratus sampai lima ratus kali lebih besar dari itu, jadi supaya muat di bawah 10 KB, kuncinya bukan kompresi yang canggih, melainkan menyisakan hanya yang dibutuhkan formulir. Tambahkan gambar dan dapatkan JPG di bawah 10 KB — versi paling jelas yang masih muat.",

  sections: [
    {
      heading: "Seberapa kecil 10 KB itu",
      id: "how-small",
      body: [
        "10 KB sama dengan 10.000 byte. Tanda tangan bersih dengan tinta hitam di kertas putih, dipotong rapat dan berukuran sekitar 300 × 120 piksel, muat dengan lega. Foto kepala dan bahu juga muat, tetapi hanya sekitar 200 × 250 piksel — kira-kira seukuran foto yang dicetak di kartu ujian, tidak lebih.",
        "Alat ini lebih dulu mencari kualitas JPG tertinggi yang masih di bawah 10 KB. Kalau kualitas terendah yang wajar pun belum cukup, ukuran piksel diperkecil sedikit demi sedikit lalu dicari lagi, sehingga Anda selalu mendapat file yang muat, bukan pesan galat.",
      ],
    },
    {
      heading: "Siapkan gambar sebelum dikompres",
      id: "prepare",
      body: [
        "Setiap piksel yang tidak perlu menghabiskan byte yang tidak Anda punya. Potong tanda tangan sampai tintanya hampir menyentuh tepi, dan potong foto sebatas kepala dan bahu. Untuk tanda tangan, ubah dulu menjadi hitam putih dengan alat Foto Hitam Putih: noda warna dari kertas dan cahaya memakan tempat tanpa menambah apa pun.",
        "Tanda tangani dengan pulpen gelap di kertas putih polos, lalu foto dari atas di bawah cahaya siang. Gambar asli yang bersih dan kontras jauh lebih mudah dikompres daripada yang kusam dan berbayang, dan hasilnya tetap terbaca.",
      ],
    },
    {
      heading: "Cap jempol",
      id: "thumb",
      body: [
        "Tekan jempol ke bantalan tinta stempel, lalu tekan sekali dengan mantap di kertas putih — sedikit digulirkan supaya polanya lebih lebar. Foto dari dekat dengan cahaya yang baik agar garis-garisnya tajam, dan potong sebatas cap jempol sebelum dikompres.",
        "Setelah dikompres, perbesar ke 100%: garis sidik jari harus masih terlihat. Kalau sudah menjadi noda gelap, pastikan kolomnya memang dibatasi 10 KB; cap jempol sering diberi batas lebih besar daripada tanda tangan, dan ruang yang lebih besar menjaga detailnya.",
      ],
    },
    {
      heading: "Kalau hasilnya terlihat kasar",
      id: "rough",
      body: [
        "Kotak-kotak di sekitar huruf berarti file harus dikompres terlalu keras. Potong lebih rapat, naikkan kontras, atau mulai lagi dari gambar asli yang lebih baik. File yang sedikit di bawah batas dengan kualitas wajar jauh lebih bagus daripada gambar besar yang dipaksa muat.",
        "Periksa juga aturan lain di formulir. Banyak kolom mencantumkan ukuran piksel selain ukuran file; ubah dulu ke ukuran itu dengan alat Ubah Ukuran Foto, baru kompres, supaya formulir menerima persis yang diminta.",
      ],
    },
    {
      heading: "Di mana batas 10 KB muncul",
      id: "where",
      body: [
        "Batas sekecil ini biasanya untuk kolom tanda tangan atau paraf, foto kecil di kartu anggota dan sistem data internal, atau formulir pendaftaran lama yang belum diperbarui. Kalau syaratnya tertulis \"maksimal 10 KB\", yang dimaksud adalah ukuran file, bukan ukuran gambar di layar.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 10 KB",
  steps: [
    { title: "Potong dan tambahkan gambar", description: "Potong tanda tangan atau foto serapat mungkin, lalu tambahkan — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 10 KB", description: "Batas 10 KB sudah diatur. Kualitas dan ukuran hanya diturunkan seperlunya." },
    { title: "Periksa dan unduh", description: "Perbesar untuk memastikan masih terbaca, lalu unduh JPG-nya." },
  ],

  features: [
    { icon: "draw", title: "Untuk tanda tangan", description: "Gambar kecil hitam putih seperti tanda tangan dan cap jempol tetap terbaca di bawah 10 KB." },
    { icon: "crop", title: "Diperkecil bila perlu saja", description: "Kualitas dicoba lebih dulu; ukuran piksel baru turun kalau file masih belum muat." },
    { icon: "lock", title: "Tetap di perangkat Anda", description: "Tanda tangan Anda dikompres di browser dan tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres tanda tangan ke 10 KB?", a: "Potong serapat mungkin, tambahkan di sini, lalu tekan Kompres — batas 10 KB sudah diatur. Mengubahnya ke hitam putih dulu memberi hasil paling bersih." },
    { q: "Apakah foto benar-benar bisa muat di 10 KB?", a: "Bisa, seukuran pas foto cetak kecil: sekitar 200 × 250 piksel. Cukup untuk kolom foto kecil di formulir dan kartu, tetapi tidak untuk yang lebih besar." },
    { q: "Bagaimana memotret cap jempol untuk formulir online?", a: "Buat cap jempol di kertas putih dengan bantalan tinta, foto dari dekat di cahaya siang, potong sebatas cap jempol, lalu kompres. Periksa di zoom 100% bahwa garisnya masih terlihat." },
    { q: "Kenapa tanda tangan 10 KB saya buram?", a: "Biasanya gambar aslinya punya terlalu banyak bagian di sekitarnya, atau kertasnya kusam dan berbayang. Potong lebih rapat, ubah ke hitam putih, dan kompres ulang dari gambar asli." },
    { q: "Untuk batas 10 KB, sebaiknya JPG atau PNG?", a: "JPG. Hampir semua formulir menerimanya, dan batas ukuran di alat ini selalu menghasilkan JPG (atau WEBP kalau Anda memilihnya)." },
    { q: "Bagaimana kalau file saya sudah di bawah 10 KB?", a: "Kalau sudah berupa JPG di bawah batas, file dikembalikan tanpa perubahan — tidak ada gunanya mengompres ulang." },
    { q: "Apakah 10 KB sama dengan 0,01 MB?", a: "Ya. 10 KB adalah 10.000 byte, atau 0,01 MB. Alat ini menghitung 1 KB sebagai 1.000 byte, jadi file juga tetap di bawah batas untuk formulir yang menghitung 1.024." },
  ],

  security:
    "Tanda tangan, cap jempol, dan foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
