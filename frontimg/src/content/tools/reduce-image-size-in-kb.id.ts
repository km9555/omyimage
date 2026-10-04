import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/perkecil-ukuran-foto-kb (variant of compress-image,
 * target-size mode, no limit pre-filled). "perkecil ukuran foto" 49,500/mo
 * (id-head-terms, 2026-09-24) carries the H1; the per-size pages own
 * "kompres foto 200kb" (22.2K), "kompres foto 1 mb" (40.5K) and friends.
 */
const content: ToolPageContent = {
  toolId: "reduce-image-size-in-kb",
  locale: "id",
  name: "Perkecil Ukuran Foto dalam KB",
  tagline:
    "Ketik batas berapa pun — 100 KB, 200 KB, 300 KB, atau 1 MB — dan dapatkan JPG paling tajam yang muat di bawahnya. Sekaligus banyak, gratis, dan diproses di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Perkecil Ukuran Foto dalam KB Online — Sesuai Batas | oMyImage",
  metaDescription:
    "Perkecil ukuran foto dalam KB secara online dan gratis: ketik batas apa saja, seperti 100 KB, 200 KB, atau 1 MB, lalu unduh JPG paling tajam yang muat. Tanpa upload.",

  intro:
    "Formulir tidak menanyakan kualitas, formulir menyebut angka: \"pas foto maksimal 200 KB\", \"scan KTP di bawah 300 KB\", \"ukuran file tidak boleh lebih dari 1 MB\". Alat ini bekerja dengan cara yang sama. Tambahkan foto, ketik batasnya dalam KB atau MB, dan setiap foto dikembalikan di bawah batas itu — dengan kualitas tertinggi yang masih muat, dan dimensinya baru dikecilkan kalau kualitas saja tidak cukup. Mendukung JPG, PNG, dan WEBP, bisa banyak file sekaligus, dan foto Anda tidak pernah diunggah ke mana pun.",

  sections: [
    {
      heading: "Tentukan ukurannya, bukan kualitasnya",
      id: "size-first",
      body: [
        "Cara biasa memperkecil foto untuk formulir adalah coba-coba: turunkan penggeser kualitas, simpan, cek ukurannya di folder, lalu ulangi. Setiap percobaan berarti satu kali kompresi lagi, dan setiap kompresi ulang pada JPG yang sudah terkompres membuang sedikit detail lagi.",
        "Di sini Anda langsung menyebut hasil yang dibutuhkan. Alat ini mengodekan foto beberapa kali di belakang layar, mencari kualitas tertinggi yang file-nya masih di bawah batas, lalu memberikan versi itu. Foto ponsel 12 megapiksel yang penuh noise dan tangkapan layar yang bersih butuh pengaturan yang sama sekali berbeda untuk mencapai 200 KB — Anda tidak perlu tahu, karena pencarian dilakukan untuk setiap foto.",
      ],
    },
    {
      heading: "Arti \"KB\" di formulir",
      id: "kb-meaning",
      body: [
        "Satu kilobyte bisa berarti 1.000 atau 1.024 byte, tergantung siapa yang menghitung. Windows menampilkan ukuran dalam satuan 1.024; ponsel, Mac, dan banyak situs memakai 1.000. Selisihnya cuma 2,4%, tetapi cukup untuk membuat file 200,5 KB ditolak oleh formulir yang membatasi \"200 KB\".",
        "Alat ini menghindari perdebatan itu dengan memakai hitungan yang lebih ketat: batas 200 KB berarti di bawah 200.000 byte. File seperti itu lolos di formulir yang menghitung 1.000 byte per kilobyte maupun yang menghitung 1.024. File Explorer mungkin menampilkan hasilnya sebagai 195 KB — selisih kecil itu memang disengaja.",
      ],
    },
    {
      heading: "Memperkecil KB berbeda dengan memperkecil piksel",
      id: "kb-vs-pixels",
      body: [
        "Ukuran file dan dimensi foto adalah dua hal berbeda, dan kadang formulir meminta keduanya: \"pas foto 3x4, maksimal 200 KB\". Piksel menentukan seberapa besar gambarnya; kilobyte menentukan seberapa banyak ruang yang dipakai. Foto 4000 piksel bisa masuk ke 100 KB, dan foto 400 piksel bisa berukuran 300 KB kalau disimpan sebagai PNG.",
        "Kalau formulir menyebut dimensi pasti, ubah dulu ukurannya dengan alat Ubah Ukuran Foto, lalu masukkan file-nya ke bawah batas KB di sini. Kalau hanya batas KB yang disebut, biarkan dimensinya — alat ini mengecilkannya sendiri, dan hanya sejauh yang diperlukan.",
      ],
    },
    {
      heading: "Batas yang sering dipakai dan asalnya",
      id: "common-limits",
      body: [
        "Pendaftaran CPNS, PPDB, pendaftaran kuliah, beasiswa, dan lamaran kerja online biasanya membatasi pas foto dan scan KTP atau KK di kisaran 100–300 KB per file, sementara tanda tangan sering dibatasi lebih kecil lagi. Ijazah dan transkrip kadang boleh sampai 500 KB atau 1 MB, dan unggahan umum — tugas sekolah, laporan, iklan jual-beli — biasanya dibatasi 1–2 MB.",
        "Batas yang paling umum punya halaman sendiri dengan saran khusus untuk ukuran itu — tautannya ada di atas. Halaman ini untuk angka lain yang Anda butuhkan, dalam KB atau MB.",
      ],
    },
  ],

  howToTitle: "Cara memperkecil ukuran foto dalam KB",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau seret satu atau banyak file JPG, PNG, atau WEBP." },
    { title: "Ketik batasnya", description: "Masukkan ukuran maksimal dalam KB atau MB, atau ketuk ukuran umum seperti 100 KB atau 200 KB." },
    { title: "Kompres & unduh", description: "Setiap foto disimpan di bawah batas; unduh satu file atau semuanya sekaligus dalam ZIP." },
  ],

  features: [
    { icon: "straighten", title: "Ukuran sesuai kebutuhan", description: "Ketik batas apa saja dalam KB atau MB — bukan hanya daftar pilihan — dan semua foto masuk ke bawahnya." },
    { icon: "high_quality", title: "Kualitas terbaik yang muat", description: "Alat ini mencari kualitas tertinggi di bawah batas Anda dan hanya mengurangi piksel kalau terpaksa." },
    { icon: "lock", title: "Tidak ada yang diunggah", description: "Kompresi berjalan di perangkat Anda, jadi pas foto, KTP, dan tanda tangan tidak pernah keluar darinya." },
  ],

  faqs: [
    { q: "Bagaimana cara memperkecil ukuran foto dalam KB?", a: "Tambahkan foto, ketik ukurannya dalam KB (atau ketuk salah satu ukuran umum), lalu klik Kompres. File yang diunduh dijamin di bawah angka itu, dengan kualitas terbaik yang masih muat." },
    { q: "Apakah memperkecil KB sama dengan mengompres foto?", a: "Pada dasarnya ya. Memperkecil \"dalam KB\" berarti mengurangi ukuran file, dan itulah yang dilakukan kompresi; alat ini juga mengecilkan dimensi kalau kompresi saja tidak sampai ke batas." },
    { q: "Kenapa file saya 195 KB padahal saya minta 200 KB?", a: "Karena alat ini menjaga file di bawah 200.000 byte, yang bisa ditampilkan komputer Anda sebagai sekitar 195 kilobyte berukuran 1.024 byte. Selisih itu menjamin file lolos dengan cara hitung mana pun." },
    { q: "Bisakah saya mengetik ukuran tertentu, misalnya 300 KB?", a: "Bisa. Angka bulat atau desimal apa pun berfungsi, dalam KB atau MB. Ukuran yang tersedia hanyalah jalan pintas." },
    { q: "Apakah memperkecil KB mengubah dimensi foto?", a: "Hanya kalau perlu. Alat ini menurunkan kualitas dulu, dan baru mengecilkan lebar dan tinggi kalau dengan kualitas rendah pun foto masih melebihi batas." },
    { q: "Format mana yang sebaiknya dipilih?", a: "JPG, kecuali Anda yakin situsnya menerima WEBP. Hampir semua formulir menerima JPG; WEBP mencapai ukuran yang sama dengan kualitas sedikit lebih baik, tetapi masih ditolak beberapa portal lama." },
    { q: "Bagaimana dengan PNG transparan?", a: "JPG tidak mendukung transparansi, jadi bagian transparan diisi warna latar yang Anda pilih — putih secara bawaan, sesuai yang diminta kebanyakan formulir." },
    { q: "Bisakah banyak foto diperkecil ke ukuran yang sama sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau; setiap foto dikompres terpisah ke batas yang sama, dan Anda bisa mengunduh semuanya dalam satu ZIP." },
  ],

  security:
    "Foto Anda tetap di perangkat Anda. Memperkecil ukuran dalam KB dilakukan sepenuhnya di browser — tidak ada yang diunggah, disimpan, atau dilihat orang lain, dan itu penting untuk pas foto, KTP, atau tanda tangan.",
};

export default content;
