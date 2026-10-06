import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/kompres-foto-300kb (variant of compress-image,
 * 300 KB). "kompres foto 300kb" 12.1K/mo in Indonesia — the biggest market
 * for this size; written around document uploads (KTP, KK, ijazah, transkrip).
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-300kb",
  locale: "id",
  name: "Kompres Foto 300 KB",
  tagline:
    "Kompres foto dan scan dokumen ke bawah 300 KB dengan tulisan tetap mudah dibaca — KTP, KK, ijazah, transkrip, dan surat untuk pendaftaran CPNS, kampus, beasiswa, dan lamaran kerja. Sekaligus banyak, tanpa unggah.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 300 KB Online — KTP, Ijazah & Dokumen, Gratis | oMyImage",
  metaDescription:
    "Kompres foto dan scan dokumen ke bawah 300 KB online gratis — KTP, KK, ijazah, dan transkrip tetap terbaca untuk pendaftaran. Sekaligus banyak, tanpa unggah.",

  intro:
    "300 KB adalah batas yang umum untuk unggahan dokumen: KTP, Kartu Keluarga, ijazah, transkrip nilai, SKCK, atau surat keterangan yang diminta portal pendaftaran CPNS dan PPPK, kampus, beasiswa, dan lowongan kerja. Ruang sebesar ini cukup untuk menjaga satu halaman penuh tetap terbaca — tulisan kecil, stempel, dan tanda tangan termasuk — asalkan foto halamannya bagus. Tambahkan semua dokumen sekaligus, dan masing-masing kembali sebagai JPG di bawah 300 KB.",

  sections: [
    {
      heading: "Satu halaman penuh tetap terbaca",
      id: "pages",
      body: [
        "Halaman A4 yang difoto dengan HP biasanya berukuran 3–6 MB. Di 300 KB, halaman yang sama masih menyimpan sekitar 1600 × 2260 piksel — cukup tajam untuk membaca tulisan terkecil di transkrip nilai pada zoom 100%. Alat ini memakai batasnya untuk detail lebih dulu, dan baru memperkecil ukuran kalau halamannya sangat padat.",
        "Letakkan kertas rata di meja berwarna gelap, foto tegak lurus dari atas di bawah cahaya siang supaya tidak ada bayangan, lalu potong bagian meja sebelum dikompres. Aplikasi pemindai yang meluruskan halaman juga membantu.",
      ],
    },
    {
      heading: "KTP: potong sebatas kartunya",
      id: "id-cards",
      body: [
        "KTP itu kecil, jadi fotonya sebagian besar berisi meja. Potong tepat di tepi kartu, maka KTP muat di bawah 300 KB dengan kualitas sangat tinggi — foto, NIK, dan detail lainnya terlihat jelas.",
        "Kalau portal meminta sisi depan dan belakang, buat dua gambar dan kompres bersama; masing-masing kembali di bawah 300 KB. Kalau kedua sisi harus dalam satu file, satukan dulu di satu halaman dengan alat Gabungkan Foto.",
      ],
    },
    {
      heading: "Berwarna atau hitam putih?",
      id: "colour",
      body: [
        "Biarkan ijazah, KTP, dan KK tetap berwarna: stempel, legalisir, dan foto berwarna adalah bagian dari keabsahannya, dan sebagian portal menolak dokumen yang terlihat seperti fotokopi. Untuk surat ketikan biasa atau formulir cetak, hitam putih tidak masalah dan menyisakan lebih banyak ruang untuk tulisan yang tajam.",
      ],
    },
    {
      heading: "Kalau portal meminta PDF",
      id: "pdf",
      body: [
        "Sebagian portal hanya menerima dokumen dalam PDF. Kompres dulu gambar halamannya di sini, lalu gabungkan dengan alat Foto ke PDF. Ukuran PDF kira-kira sama dengan jumlah ukuran gambarnya, jadi dokumen satu halaman tetap di bawah 300 KB.",
        "Untuk dokumen beberapa halaman dengan batas 300 KB untuk seluruh file, pasang batas yang lebih kecil per halaman di sini — untuk tiga halaman, sekitar 90 KB masing-masing — supaya PDF akhirnya tetap muat.",
      ],
    },
    {
      heading: "Daftar periksa sebelum mengunggah",
      id: "checklist",
      body: [
        "Sebelum menekan tombol unggah, buka setiap file dan periksa: semua tulisan terbaca, tidak ada bagian halaman yang terpotong, stempel dan tanda tangan terlihat, dan dokumennya tidak terbalik. Beri nama file sesuai permintaan portal — banyak sistem menolak spasi atau tanda baca — dan simpan file aslinya, karena pendaftaran lain mungkin meminta batas yang berbeda.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 300 KB",
  steps: [
    { title: "Tambahkan dokumen", description: "Pilih atau letakkan foto dan scan dokumen Anda — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 300 KB", description: "Batas 300 KB sudah diatur; setiap file dikompres sampai muat." },
    { title: "Unduh semuanya", description: "Unduh file satu per satu atau sekaligus dalam ZIP." },
  ],

  features: [
    { icon: "description", title: "Dokumen tetap terbaca", description: "Halaman penuh tetap punya cukup piksel untuk tulisan kecil, stempel, dan tanda tangan." },
    { icon: "picture_as_pdf", title: "Siap dijadikan PDF", description: "Kompres halamannya di sini, lalu gabungkan dengan Foto ke PDF untuk portal yang meminta satu file." },
    { icon: "lock", title: "Privat", description: "Dokumen identitas dikompres di browser, tidak diunggah ke server." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto dokumen ke 300 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 300 KB sudah diatur. Potong dulu bagian meja di sekitar kertas untuk hasil paling tajam." },
    { q: "Apakah tulisan masih terbaca di 300 KB?", a: "Ya. Satu halaman A4 penuh di 300 KB masih menyimpan sekitar 1600 × 2260 piksel, cukup untuk membaca tulisan kecil di zoom 100%." },
    { q: "Bagaimana kompres KTP depan dan belakang?", a: "Foto sisi depan dan belakang secara terpisah, potong masing-masing sebatas kartu, lalu tambahkan keduanya. Masing-masing kembali di bawah 300 KB." },
    { q: "Bisakah membuat PDF di bawah 300 KB?", a: "Untuk satu halaman, bisa: kompres gambarnya di sini lalu jadikan PDF dengan Foto ke PDF. Untuk beberapa halaman, beri batas lebih kecil per halaman agar totalnya di bawah 300 KB." },
    { q: "Apakah 300 KB sama dengan 0,3 MB?", a: "Ya. 300 KB adalah 300.000 byte, atau 0,3 MB. File juga tetap di bawah batas di portal yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Kenapa scan saya jadi abu-abu setelah dikompres?", a: "Warna abu-abu itu berasal dari foto aslinya — biasanya bayangan atau cahaya lampu. Foto ulang halamannya di cahaya siang tanpa bayangan, lalu kompres lagi." },
    { q: "Apakah 300 KB juga cukup untuk pas foto?", a: "Lebih dari cukup. Pas foto di bawah 300 KB terlihat praktis sama dengan aslinya di layar." },
    { q: "Bisakah file PDF atau Word dikompres di sini?", a: "Tidak — alat ini untuk gambar (JPG, PNG, dan WEBP). Foto atau screenshot halamannya, kompres gambarnya di sini, lalu jadikan PDF dengan Foto ke PDF kalau portal memintanya." },
    { q: "Bagaimana memberi nama file sebelum diunggah?", a: "Ikuti format yang diminta portal. Kalau tidak ada ketentuan, pakai huruf dan angka tanpa spasi atau tanda baca, misalnya ktp_depan.jpg — nama seperti ini diterima hampir semua sistem." },
    { q: "Apakah stempel legalisir tetap terlihat?", a: "Ya, selama foto aslinya jelas. Stempel dan tanda tangan legalisir berwarna, jadi biarkan dokumen tetap berwarna dan foto di cahaya siang agar tintanya tetap tajam setelah dikompres." },
  ],

  security:
    "KTP, ijazah, dan foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
