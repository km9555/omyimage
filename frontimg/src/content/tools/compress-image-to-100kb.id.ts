import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-100kb (variant of compress-image, 100 KB). "kompres foto 100kb" 18,100/mo, "kompres jpg 100kb" 8,100. */
const content: ToolPageContent = {
  toolId: "compress-image-to-100kb",
  locale: "id",
  name: "Kompres Foto 100 KB",
  tagline:
    "Kompres foto dan scan dokumen sampai di bawah 100 KB — untuk formulir pendaftaran, unggah KTP dan dokumen, serta email. Kualitas tertinggi yang muat, banyak file sekaligus, di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 100 KB Online — Gratis, Sekaligus Banyak | oMyImage",
  metaDescription:
    "Kompres foto JPG, PNG, atau WEBP sampai di bawah 100 KB secara online dan gratis. Kualitas tertinggi yang muat di batas itu, banyak foto sekaligus, diproses di browser.",

  intro:
    "Batas 100 KB muncul di lamaran kerja online, pendaftaran sekolah dan kampus, pengajuan visa, unggah KTP untuk verifikasi, dan di mana pun sebuah situs meminta foto atau scan dokumen tetapi bukan file kamera berukuran penuh. Ruang ini cukup lega: pas foto atau satu halaman teks muat tanpa kerusakan yang terlihat, asalkan file tidak membuang byte untuk piksel yang tidak akan dilihat siapa pun. Tambahkan foto Anda, dan masing-masing kembali sebagai JPG di bawah 100 KB dengan kualitas terbaik yang diizinkan batas itu.",

  sections: [
    {
      heading: "Di 100 KB kualitas tidak lagi jadi masalah",
      id: "comfortable",
      body: [
        "Di bawah sekitar 50 KB, kompresi adalah kompromi yang terlihat. Di 100 KB hampir tidak: pas foto muat di sekitar 900 × 1200 piksel dengan kualitas baik, jauh lebih besar daripada yang ditampilkan formulir dan cukup untuk dicetak ukuran 3x4 atau 4x6.",
        "Karena itu langkah pertama alat ini selalu menurunkan kualitas sedikit dan mempertahankan piksel Anda. Pada kebanyakan foto ponsel, dimensinya juga perlu dikecilkan — ke sekitar 1000–1500 piksel di sisi terpanjang — karena foto 12 megapiksel menyimpan lebih banyak detail daripada yang bisa ditampung 100 KB pada kualitas wajar mana pun.",
      ],
    },
    {
      heading: "Scan dokumen di bawah 100 KB",
      id: "documents",
      body: [
        "Formulir dengan batas 100 KB sering meminta dokumen, bukan wajah: KTP, Kartu Keluarga, ijazah, SKCK, surat keterangan. Foto halaman dari ponsel sebagian besar berisi kertas putih, dan kertas dengan cahaya tidak merata ternyata boros ruang, karena setiap bayangan tipis adalah detail yang harus dijelaskan JPG.",
        "Foto halamannya lurus, dengan cahaya siang yang merata, memenuhi layar, lalu potong meja di sekelilingnya. Untuk halaman berisi teks saja, ubah dulu menjadi hitam putih dengan alat Foto Hitam Putih sebelum mengompres, supaya lebih banyak dari 100 KB dipakai untuk menjaga teks tetap tajam. Kalau formulir meminta PDF, kompres fotonya di sini dulu lalu jadikan PDF dengan alat Foto ke PDF.",
      ],
    },
    {
      heading: "Banyak foto dalam satu email",
      id: "email",
      body: [
        "Foto ponsel berukuran 3–5 MB membuat email berisi sepuluh foto gagal terkirim, atau sampai ke penerima sebagai unduhan 40 MB. Dengan 100 KB per foto, sepuluh foto yang sama hanya sekitar 1 MB — cukup ringan untuk layanan email mana pun dan tetap jelas di layar.",
        "Tambahkan semuanya sekaligus: setiap foto dikompres terpisah ke batas yang sama, dan unduhan ZIP menyatukannya.",
      ],
    },
    {
      heading: "Foto KTP dan verifikasi KYC di bawah 100 KB",
      id: "kyc",
      body: [
        "Bank digital, dompet digital, operator seluler, dan marketplace yang memverifikasi identitas secara online biasanya meminta foto KTP yang jelas dengan batas seperti 100 KB, dan menolak gambar apa pun yang tidak bisa dibaca orang atau sistem. Penyebab penolakan hampir tidak pernah ukuran file: pantulan cahaya di KTP, sudut yang terpotong, KTP hanya mengisi sebagian kecil foto, atau NIK yang buram.",
        "Letakkan KTP di atas permukaan gelap yang polos, foto tepat dari atas tanpa flash, lalu potong sampai tepinya sebelum dikompres. KTP yang dipotong rapat muat dengan lega di 100 KB dan setiap angkanya tetap tajam, karena ruangnya dipakai untuk kartu, bukan untuk meja di sekitarnya.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 100 KB",
  steps: [
    { title: "Tambahkan foto atau scan", description: "Pilih atau seret file JPG, PNG, atau WEBP — foto, halaman hasil scan, atau tangkapan layar." },
    { title: "Kompres ke bawah 100 KB", description: "Batas 100 KB sudah terpasang; ubah angkanya kalau formulir mengizinkan ukuran lain." },
    { title: "Unduh", description: "Setiap file kembali di bawah 100 KB; unduh satu per satu atau semuanya dalam ZIP." },
  ],

  features: [
    { icon: "description", title: "Foto dan dokumen", description: "Sama bagusnya untuk scan KTP atau ijazah seperti untuk pas foto — keduanya muat dengan lega di 100 KB." },
    { icon: "burst_mode", title: "Satu set sekaligus", description: "Kompres semua foto dan scan untuk satu pendaftaran sekaligus dan unduh dalam satu ZIP." },
    { icon: "lock", title: "Dokumen tetap di perangkat", description: "KTP, KK, dan ijazah dikompres di browser dan tidak pernah diunggah ke mana pun." },
  ],

  faqs: [
    { q: "Bagaimana cara memperkecil foto ke 100 KB?", a: "Tambahkan foto dan klik Kompres — batas 100 KB sudah terpasang. Anda mendapatkan JPG di bawah 100 KB dengan kualitas tertinggi yang muat." },
    { q: "Apakah 100 KB cukup untuk pas foto?", a: "Lebih dari cukup. Pas foto hanya butuh beberapa ratus piksel, yang muat di 100 KB dengan kualitas sangat tinggi." },
    { q: "Bagaimana membuat scan KTP di bawah 100 KB?", a: "Foto atau scan KTP dengan lurus dan cahaya cukup, potong sampai tepi kartunya, lalu kompres di sini. Teks dan foto di KTP tetap terbaca jauh di bawah 100 KB." },
    { q: "100 KB itu berapa MB?", a: "0,1 MB. File dijaga di bawah 100.000 byte, sehingga juga lolos di formulir yang menghitung 1.024 byte per kilobyte." },
    { q: "Bisakah foto HEIC dari iPhone dikompres ke 100 KB?", a: "Ubah dulu ke JPG dengan alat HEIC ke JPG, lalu kompres JPG-nya di sini. Alat ini membaca JPG, PNG, dan WEBP." },
    { q: "Bisakah hasilnya tetap PNG?", a: "Tidak — PNG tidak bisa menukar kualitas dengan ukuran, jadi tidak bisa diarahkan ke batas yang pasti. Anda mendapatkan JPG, atau WEBP kalau Anda memilihnya dan situsnya menerima." },
    { q: "Kenapa lebar foto saya jadi lebih kecil?", a: "Karena dengan kualitas rendah pun foto ukuran penuh masih di atas 100 KB. Alat ini mengecilkan dimensinya secukupnya agar muat, yang hasilnya jauh lebih baik daripada menghancurkan kualitas." },
  ],

  security:
    "Foto dan dokumen Anda tetap di perangkat Anda. Semuanya dikompres di browser — tanpa upload, tanpa salinan di server, tanpa ada yang disimpan.",
};

export default content;
