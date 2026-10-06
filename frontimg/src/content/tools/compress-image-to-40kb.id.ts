import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-40kb (variant of compress-image, 40 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-40kb",
  locale: "id",
  name: "Kompres Foto 40 KB",
  tagline:
    "Kompres pas foto ke bawah 40 KB untuk formulir pendaftaran — wajah tajam dan warna alami di batas yang tepat, serta pilihan aman untuk kolom foto \"20–50 KB\". Gratis, di browser, tanpa unggah.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 40 KB Online — Pas Foto Jelas untuk Formulir | oMyImage",
  metaDescription:
    "Kompres pas foto ke bawah 40 KB online gratis — untuk formulir dengan batas 40 KB atau rentang 20–50 KB. Wajah jelas, batas tepat, tanpa unggah.",

  intro:
    "40 KB adalah batas pas foto di banyak formulir pendaftaran, dan juga angka paling masuk akal ketika formulir meminta foto \"antara 20 KB dan 50 KB\": cukup jauh di atas minimum dan cukup jauh di bawah maksimum. Di ukuran ini, pas foto tetap menyimpan warna kulit yang alami dan detail yang jelas di sekitar mata. Tambahkan foto Anda dan dapatkan JPG di bawah 40 KB dengan kualitas tertinggi yang muat.",

  sections: [
    {
      heading: "Target aman di dalam rentang 20–50 KB",
      id: "inside-range",
      body: [
        "Mengincar ujung atas rentang itu berisiko: file 49,9 KB di satu komputer bisa dihitung 51 KB oleh formulir yang menghitung dengan cara lain. 40 KB menyisakan ruang di kedua sisi, sehingga foto diterima bagaimanapun formulir menghitungnya, dan detailnya tetap dua kali lipat file 20 KB.",
        "Kalau formulir memberi rentang dan ada file Anda yang sudah berada di dalamnya, tidak perlu dikompres lagi — hanya file di luar rentang yang perlu diubah.",
      ],
    },
    {
      heading: "Apa yang tersimpan di foto 40 KB",
      id: "detail",
      body: [
        "Foto kepala dan bahu berukuran sekitar 400 × 500 piksel muat di 40 KB dengan kualitas baik: bulu mata dan helai rambut masih terlihat terpisah, dan detailnya lebih dari cukup untuk dicetak tajam di kartu identitas atau kartu ujian.",
        "Potong sebatas kepala dan bahu sebelum dikompres, supaya batasnya terpakai untuk wajah, bukan untuk ruangan di belakang Anda.",
      ],
    },
    {
      heading: "Memakai pas foto cetak",
      id: "printed-photo",
      body: [
        "Kalau Anda hanya punya pas foto cetak dari studio, letakkan di dekat jendela dengan cahaya siang dan foto tegak lurus dari atas dengan HP sejajar. Miringkan sedikit fotonya menjauhi jendela kalau ada pantulan cahaya, dan biarkan foto mengisi seluruh bingkai.",
        "Potong pinggiran putih dan bagian meja sebelum dikompres. Salinan bersih dari foto studio mudah dikompres, karena foto seperti itu sudah punya cahaya rata dan latar polos.",
      ],
    },
    {
      heading: "Warna yang alami",
      id: "colours",
      body: [
        "Lampu rumah membuat kulit tampak oranye, dan sebagian kamera HP menggeser wajah ke arah biru atau hijau. Formulir yang memeriksa foto kadang menolak foto dengan warna yang terlalu condong, dan kompresi tidak bisa memperbaikinya. Ambil foto di dekat jendela dengan cahaya siang dan lampu atas dimatikan, maka warnanya akan alami.",
      ],
    },
    {
      heading: "Latar merah atau biru",
      id: "background",
      body: [
        "Pas foto dengan latar merah atau biru polos tetap mudah dikompres ke 40 KB, karena warna polos hanya memakan sedikit ruang. Kalau latar foto Anda belum sesuai, ganti dulu dengan alat Ganti Background Foto, lalu kompres hasilnya di sini.",
      ],
    },
    {
      heading: "Satu foto untuk banyak formulir",
      id: "several-forms",
      body: [
        "Kebanyakan orang membutuhkan pas foto yang sama untuk lebih dari satu pendaftaran, dan setiap formulir punya batasnya sendiri. Simpan foto aslinya — file berukuran penuh dari HP atau studio — di folder yang aman, lalu buat setiap versi unggahan dari file itu: 40 KB untuk formulir ini, 20 KB atau 100 KB untuk berikutnya.",
        "Mengompres ulang salinan yang sudah dikompres membuang sedikit detail setiap kali, jadi foto yang sudah dipadatkan ke 20 KB lalu dibutuhkan dalam 40 KB tidak akan pernah sebagus foto yang dibuat dari aslinya. Beri nama setiap versi sesuai ukurannya, misalnya foto_40kb.jpg, agar file yang benar masuk ke formulir yang benar.",
      ],
    },
  ],

  howToTitle: "Cara kompres pas foto ke 40 KB",
  steps: [
    { title: "Tambahkan foto", description: "Potong sebatas kepala dan bahu, lalu tambahkan — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 40 KB", description: "Batas 40 KB sudah diatur; ubah kalau formulir meminta angka lain." },
    { title: "Unduh", description: "Unduh JPG-nya dan lampirkan ke pendaftaran Anda." },
  ],

  features: [
    { icon: "face", title: "Wajah tajam dan alami", description: "Sekitar 400 × 500 piksel dengan kualitas baik — warna kulit dan detail halus tetap terjaga." },
    { icon: "verified_user", title: "Aman di dalam rentang", description: "40 KB lolos di kolom foto 20–50 KB dengan ruang di kedua sisi." },
    { icon: "lock", title: "Tanpa unggah", description: "Foto Anda dikompres di browser dan tetap di perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 40 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 40 KB sudah diatur. Anda mendapat JPG di bawah 40 KB dengan kualitas tertinggi yang muat." },
    { q: "Formulir meminta 20 sampai 50 KB — apakah 40 KB tepat?", a: "Tepat. 40 KB berada aman di dalam rentang itu, bagaimanapun formulir menghitung kilobyte." },
    { q: "Berapa piksel foto 40 KB?", a: "Biasanya sekitar 400 × 500 piksel untuk foto kepala dan bahu. Foto yang lebih besar diperkecil otomatis sampai muat." },
    { q: "Bagaimana mengubah pas foto cetak menjadi file?", a: "Foto pas foto itu di cahaya siang tegak lurus dari atas, hindari pantulan, potong pinggirannya, lalu kompres di sini." },
    { q: "Kenapa foto saya terlihat oranye atau kebiruan?", a: "Cahaya lampu dan sebagian pengaturan HP memberi warna pada foto. Foto ulang di cahaya siang; kompresi menyimpan warna apa adanya dan tidak memperbaikinya." },
    { q: "Apakah foto 40 KB bagus dicetak di kartu identitas?", a: "Bagus. Kartu identitas dan kartu ujian mencetak foto dalam ukuran kecil, dan 40 KB sudah lebih dari cukup detailnya." },
    { q: "Apakah 40 KB sama dengan 0,04 MB?", a: "Ya, 40 KB adalah 40.000 byte. File juga lolos di formulir yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Bisakah banyak pas foto dikompres sekaligus?", a: "Bisa. Tambahkan semuanya bersamaan; masing-masing kembali di bawah 40 KB dan bisa diunduh dalam satu ZIP." },
    { q: "Perlukah menyimpan foto asli setelah dikompres?", a: "Perlu. Buat setiap ukuran yang dibutuhkan dari foto asli, bukan dari salinan yang sudah dikompres — setiap kompresi tambahan membuang sedikit detail." },
  ],

  security:
    "Foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
