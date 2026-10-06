import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-30kb (variant of compress-image, 30 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-30kb",
  locale: "id",
  name: "Kompres Foto 30 KB",
  tagline:
    "Kompres pas foto ke bawah 30 KB untuk formulir ujian, pendaftaran sekolah dan kampus, atau lamaran kerja — dengan wajah tetap jelas di kartu ujian atau kartu identitas. Batas tepat, tanpa unggah, gratis.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 30 KB Online — Pas Foto untuk Formulir, Gratis | oMyImage",
  metaDescription:
    "Kompres pas foto ke bawah 30 KB online gratis — untuk formulir ujian, pendaftaran, dan lamaran yang membatasi foto 30 KB. Wajah jelas, batas tepat, tanpa unggah.",

  intro:
    "30 KB adalah batas yang cukup umum untuk pas foto di formulir ujian, pendaftaran sekolah dan kampus, atau lamaran kerja, kadang juga untuk tanda tangan. Batas ini cukup untuk pas foto yang jelas — asalkan fotonya disiapkan dengan benar. Tambahkan foto Anda dan dapatkan JPG di bawah 30 KB dengan kualitas tertinggi yang masih muat; tips di bawah menentukan apakah wajah terlihat tajam atau malah blur.",

  sections: [
    {
      heading: "Simpan wajahnya, buang sisanya",
      id: "face-first",
      body: [
        "Formulir meminta foto kepala dan bahu, jadi semua yang lain — ruangan, pangkuan, langit-langit — hanya membuang tempat. Potong sebatas kepala dan bahu sebelum dikompres, maka seluruh 30 KB dipakai untuk wajah. Di ukuran ini, foto sekitar 350 × 450 piksel masih menyimpan detail mata dan rambut dengan baik.",
        "Tatap kamera lurus, pastikan cahaya di wajah merata, dan hindari bayangan tajam di satu sisi. Bayangan dan noise adalah detail halus yang harus disimpan kompresor; dengan cahaya merata, detail itu berkurang dan hasilnya lebih bersih.",
      ],
    },
    {
      heading: "Kenapa latar polos membantu",
      id: "background",
      body: [
        "Kompresi JPG menyimpan bagian yang polos dengan sangat murah dan bagian yang ramai dengan mahal. Dinding putih, merah, atau biru polos hampir tidak memakan tempat, sehingga sebagian besar 30 KB terpakai untuk wajah. Rak buku, gorden bermotif, atau halaman yang terkena sinar matahari di belakang Anda bisa menghabiskan setengah batas sendirian.",
        "Kalau foto diambil di latar yang ramai, ganti dulu latarnya menjadi merah, biru, atau putih polos dengan alat Ganti Background Foto. Setelah itu kompres hasilnya di sini.",
      ],
    },
    {
      heading: "Kalau formulir juga meminta ukuran piksel",
      id: "dimensions",
      body: [
        "Sebagian formulir meminta keduanya: di bawah 30 KB dan, misalnya, 200 × 230 piksel. Lakukan dengan urutan ini — ubah dulu ke ukuran persisnya dengan alat Ubah Ukuran Foto, lalu kompres ke 30 KB di sini. Kalau dikompres dulu baru diubah ukurannya, JPG tersimpan dua kali dan kualitasnya hilang percuma.",
        "Kalau ukurannya tertulis dalam sentimeter, misalnya 3 × 4 cm, yang dimaksud adalah bentuk fotonya. Potong dengan perbandingan itu, lalu kompres.",
      ],
    },
    {
      heading: "\"File saya 29 KB tapi katanya terlalu besar\"",
      id: "kb-kib",
      body: [
        "Komputer menghitung kilobyte dengan dua cara. Windows menampilkan ukuran dalam satuan 1.024 byte, sedangkan banyak situs memeriksa batas dalam satuan 1.000. Alat ini menjaga file di bawah 30.000 byte, jadi tetap di bawah batas dengan cara hitung mana pun.",
        "Kalau formulir masih menolak foto, penyebabnya biasanya lain: format yang salah (PNG, bukan JPG), ukuran minimum yang juga diwajibkan, atau ukuran piksel di luar rentang. Baca pesan galatnya dengan teliti — biasanya di situ tertulis apa masalahnya.",
      ],
    },
    {
      heading: "Satu pas foto untuk banyak pendaftaran",
      id: "reuse",
      body: [
        "Simpan file asli pas foto Anda di tempat yang aman. Setiap kali ada pendaftaran baru — beasiswa, magang, kartu anggota — kompres ulang dari file asli itu dengan batas yang diminta, bukan dari hasil 30 KB sebelumnya. Dengan begitu kualitas hanya berkurang satu kali, dan foto untuk batas yang lebih besar tetap tajam.",
      ],
    },
    {
      heading: "Memotret dengan HP",
      id: "phone",
      body: [
        "Gunakan kamera utama (belakang), bukan kamera selfie, dan minta orang lain memotret Anda dari jarak sekitar 1,5 meter setinggi mata. Berdirilah di depan dinding polos menghadap jendela, supaya cahaya siang jatuh merata di wajah, dengan bahu lurus ke arah kamera.",
        "Matikan filter kecantikan dan mode potret — keduanya memperhalus tepi dan menambah efek yang tidak diterima formulir — lalu ambil beberapa foto. Pilih yang paling tajam: kompresi bisa memperkecil foto, tetapi tidak bisa membuat foto yang goyang menjadi tajam.",
      ],
    },
  ],

  howToTitle: "Cara kompres pas foto ke 30 KB",
  steps: [
    { title: "Tambahkan foto", description: "Potong sebatas kepala dan bahu, lalu tambahkan — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 30 KB", description: "Batas 30 KB sudah diatur; ubah kalau formulir Anda meminta angka lain." },
    { title: "Unduh dan unggah", description: "Unduh JPG-nya dan lampirkan di formulir." },
  ],

  features: [
    { icon: "face", title: "Wajah tetap jelas", description: "Kualitas tertinggi yang muat di 30 KB, sehingga mata dan raut wajah tetap tajam." },
    { icon: "aspect_ratio", title: "Cocok dipadukan dengan ubah ukuran", description: "Ubah dulu ke ukuran piksel formulir, lalu kompres — urutan yang tepat untuk kualitas terbaik." },
    { icon: "lock", title: "Tanpa unggah", description: "Foto Anda dikompres di browser dan tidak pernah meninggalkan perangkat." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 30 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 30 KB sudah diatur. Anda mendapat JPG di bawah 30 KB dengan kualitas tertinggi yang muat." },
    { q: "Foto berukuran berapa piksel yang muat di 30 KB?", a: "Foto kepala dan bahu sekitar 350 × 450 piksel dengan detail yang baik. Foto yang lebih besar diperkecil otomatis sampai muat." },
    { q: "Apakah foto cukup jelas untuk kartu ujian?", a: "Ya. Foto di kartu ujian dicetak kecil, dan 30 KB lebih dari cukup asalkan foto dipotong sebatas wajah dan cahayanya merata." },
    { q: "Ubah ukuran dulu atau kompres dulu?", a: "Ubah ukuran dulu, lalu kompres. Kalau dikompres dulu baru diubah ukurannya, JPG tersimpan dua kali dan kualitasnya turun tanpa perlu." },
    { q: "Apakah latar polos benar-benar berpengaruh?", a: "Ya. Bagian polos hanya memakan sedikit tempat di JPG, sehingga lebih banyak dari 30 KB dipakai untuk wajah. Latar yang ramai bisa menghabiskan setengah batas." },
    { q: "Windows dan situs menampilkan ukuran berbeda — mana yang benar?", a: "Keduanya, dalam satuan berbeda. Alat ini menjaga file di bawah 30.000 byte, jadi lolos di formulir yang menghitung 1 KB sebagai 1.000 maupun 1.024 byte." },
    { q: "Bisakah tanda tangan juga dikompres ke 30 KB?", a: "Bisa. Tambahkan pas foto dan tanda tangan bersamaan; masing-masing kembali di bawah 30 KB. Kalau kolom tanda tangan meminta lebih kecil, jalankan lagi dengan angka itu." },
    { q: "Bisakah pas fotonya diambil dengan HP?", a: "Bisa. Pakai kamera belakang, berdiri sekitar 1,5 meter di depan dinding polos dengan cahaya siang, lalu potong sebatas kepala dan bahu sebelum dikompres ke 30 KB." },
  ],

  security:
    "Foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
