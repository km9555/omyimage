import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/heic-ke-png.
 *
 * Sibling of /id/heic-ke-jpg and deliberately a different page: that one is
 * for sharing and upload forms, this one for a lossless copy to edit, print
 * or archive. The crossLink sends size-conscious readers to JPG.
 *
 * HeicTool renders both routes, and each route only has its own tool's `ui`
 * in scope — so the `ui` block below DUPLICATES heic-to-jpg.id.ts. Change one,
 * change both; i18n:keys cannot see the shared component from this bucket.
 *
 * iOS paths as the Indonesian iOS menus word them, like heic-ke-jpg.
 */
const content: ToolPageContent = {
  toolId: "heic-to-png",
  locale: "id",
  name: "HEIC ke PNG",
  crossLink: { lead: "Ingin file yang lebih kecil?", label: "Ubah HEIC ke JPG", toolId: "heic-to-jpg" },
  tagline:
    "Ubah foto HEIC dari iPhone ke PNG yang lossless secara online — tanpa kompresi kedua, sekaligus banyak. Gratis, tanpa daftar, tanpa watermark.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "HEIC ke PNG Online Gratis — Foto iPhone Jadi PNG Lossless | oMyImage",
  metaDescription:
    "Ubah HEIC ke PNG online gratis: foto iPhone jadi PNG lossless yang bisa dibuka di mana saja, tanpa kompresi kedua — untuk diedit, dicetak, atau diarsipkan. Sekaligus banyak, tanpa daftar.",

  intro:
    "Ubah foto .heic dari iPhone menjadi file PNG yang bisa dibuka di perangkat apa pun. PNG bersifat lossless, jadi gambar hasil konversi persis seperti yang keluar dari dekoder — tanpa kompresi kedua di atas yang sudah dilakukan kamera. Masukkan satu foto atau seisi galeri.",

  sections: [
    {
      heading: "Kenapa mengubah HEIC ke PNG?",
      id: "why",
      body: [
        "HEIC adalah format yang dipakai iPhone secara bawaan sejak iOS 11, dan menyimpan kira-kira dua kali lebih banyak gambar di ruang yang sama dibanding JPG. Masalahnya, format ini dibangun di atas codec video HEVC/H.265 yang dilindungi kumpulan paten — jadi kebanyakan browser, banyak perangkat lunak Windows, dan banyak aplikasi Android menolak membuka file .heic tanpa memasang codec tambahan.",
        "PNG adalah kebalikannya: biasa saja, sudah tua untuk ukuran perangkat lunak, dan dipahami oleh semua hal. Memilihnya dibanding JPG bergantung pada satu hal — PNG bersifat lossless. HEIC sudah dikompresi secara lossy saat ponsel menyimpannya, dan mengubahnya ke JPG mengompresnya untuk kedua kalinya. Mengubahnya ke PNG tidak, jadi yang Anda dapatkan persis seperti hasil dekodernya. Untuk foto yang akan diedit, diretus, dicetak, atau diarsipkan, hal itu penting.",
        "Gantinya adalah ukuran file. HEIC yang memakan 2 MB di ponsel bisa dengan mudah menjadi PNG 10–15 MB, karena PNG tidak pernah membuang apa pun. Kalau Anda hanya perlu mengirim foto lewat email, mengunggahnya ke formulir, atau mempostingnya, JPG adalah tujuan yang lebih baik, dan perbedaan ukurannya sangat besar.",
      ],
    },
    {
      heading: "Kenapa yang satu ini berjalan di server kami",
      id: "server",
      body: [
        "Hampir semua alat di oMyImage bekerja di dalam tab browser Anda. HEIC adalah pengecualian, dan alasannya hukum, bukan teknis. Setiap dekoder HEIC berbasis JavaScript yang ada — heic2any, heic-decode, heic-convert, libheif-js — di dalamnya adalah pustaka libheif yang sama, dan libheif berlisensi LGPL-3.0. Menaruhnya di dalam kode browser terhitung sebagai distribusi, yang membawa kewajiban yang tidak bisa dipenuhi potongan kode yang sudah diperkecil.",
        "Karena itu proses membukanya terjadi di server kami, tempat menjalankan pustaka itu bukanlah distribusi. File Anda dikirim melalui koneksi HTTPS terenkripsi, dikonversi, lalu langsung dihapus. Kami tidak menyimpannya, tidak mengindeksnya, dan tidak memakainya untuk hal lain. Halaman alat yang bekerja seperti ini menyatakannya terus terang, alih-alih mengklaim sifat privasi yang tidak dimilikinya.",
      ],
    },
    {
      heading: "Agar iPhone berhenti membuat HEIC",
      id: "iphone",
      body: [
        "Kalau Anda tidak ingin mengonversi setiap kali, ponselnya bisa diatur. Di Pengaturan, bagian Kamera, layar Format menawarkan \"Paling Kompatibel\" — pilih itu, dan kamera menyimpan JPG sejak saat itu. Sebagian efisiensi penyimpanan hilang dan foto yang sudah ada tidak ikut berubah, tetapi foto baru tidak lagi bermasalah.",
        "Ada pengaturan kedua yang perlu diketahui. Di Foto, pilihan transfer ke Mac atau PC bisa diatur ke \"Otomatis\", yang mengubah HEIC menjadi JPG saat disalin. Kalau diatur ke \"Simpan Asli\", yang Anda dapatkan file .heic apa adanya — sering kali dari situlah asal satu folder foto yang tidak bisa dibuka. Nama menunya bisa sedikit berbeda antara versi iOS.",
      ],
    },
    {
      heading: "PNG atau JPG untuk foto iPhone?",
      id: "png-or-jpg",
      body: [
        "Pilih PNG saat foto akan masuk ke aplikasi edit, saat akan disimpan ulang lebih dari sekali, saat berisi tulisan atau bidang datar seperti tangkapan layar yang akan dikaburkan JPG, atau saat Anda ingin salinan arsip yang tidak akan menurun lagi.",
        "Pilih JPG saat fotonya jepretan kamera biasa untuk email, pesan, situs web, formulir online, atau jasa cetak. Ukurannya hanya sebagian kecil dan perbedaan kualitasnya tidak terlihat pada pengaturan yang wajar. Tombol di atas beralih di antara keduanya tanpa mengunggah ulang, jadi Anda bisa mencoba keduanya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah HEIC ke PNG",
  steps: [
    { title: "Tambahkan foto HEIC", description: "Masukkan file .heic atau .heif langsung dari iPhone atau unduhan iCloud. Banyak file sekaligus juga bisa." },
    { title: "PNG sudah terpilih", description: "Hasilnya lossless, jadi tidak ada penggeser kualitas yang perlu diatur. Beralihlah ke JPG kalau Anda lebih suka file yang lebih kecil." },
    { title: "Konversi dan unduh", description: "Satu foto langsung terunduh; beberapa foto datang bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Hasil lossless", description: "PNG menyimpan setiap piksel persis seperti hasil dekode HEIC, tanpa kerusakan dari kompresi kedua." },
    { icon: "burst_mode", title: "Seisi galeri sekaligus", description: "Konversi banyak foto dalam sekali jalan dan terima satu ZIP, bukan mengunduh foto satu per satu." },
    { icon: "devices", title: "Bisa dibuka di mana saja", description: "PNG didukung di mana-mana sejak 1990-an — Windows, Android, Office, semua aplikasi edit, dan semua browser." },
  ],

  faqs: [
    { q: "Apakah mengubah HEIC ke PNG menurunkan kualitas?", a: "Langkah PNG-nya lossless, jadi tidak ada yang hilang di sana. Ingat bahwa HEIC-nya sendiri sudah dikompresi secara lossy oleh ponsel, jadi konversi mempertahankan foto seperti kondisinya sekarang, bukan memulihkan detail yang sudah dibuang kamera." },
    { q: "Kenapa PNG-nya jauh lebih besar daripada HEIC?", a: "Karena PNG menyimpan segalanya, sedangkan HEIC sangat efisien membuang apa yang tidak akan dirindukan mata. Kenaikan lima sampai delapan kali lipat itu wajar. Ubah ke JPG kalau ukuran lebih penting daripada lossless." },
    { q: "Apakah foto saya diunggah?", a: "Ya, khusus untuk alat ini. Browser tidak bisa membuka HEIC, dan satu-satunya dekoder JavaScript adalah libheif berlisensi LGPL, yang tidak bisa kami kirim ke browser Anda. File Anda dikirim melalui HTTPS ke server kami, dikonversi, lalu langsung dihapus." },
    { q: "Bisakah seisi galeri dikonversi sekaligus?", a: "Bisa. Tambahkan sebanyak mungkin file .heic atau .heif dan semuanya dikonversi berurutan, lalu dikirim dalam satu ZIP." },
    { q: "Apakah file .heif juga bisa?", a: "Bisa. HEIF adalah wadahnya dan HEIC adalah varian berkode HEVC yang dipakai Apple. Kedua ekstensi diterima." },
    { q: "Apakah tanggal dan lokasi foto ikut tersimpan?", a: "Konverter menyalin metadata ke mana pun format tujuan bisa menampungnya, dan opsi \"Hapus metadata\" membuang semuanya sebelum diunduh. Foto dari ponsel hampir selalu mencatat lokasi pengambilannya, jadi pertimbangkan opsi itu sebelum membagikan." },
    { q: "Bagaimana agar iPhone tidak lagi menyimpan HEIC?", a: "Di Pengaturan, buka Kamera lalu Format, dan pilih \"Paling Kompatibel\". Foto baru akan disimpan sebagai JPG. File HEIC yang sudah ada tidak terpengaruh, jadi tetap perlu dikonversi." },
    { q: "Apakah gratis?", a: "Ya — tanpa akun, tanpa watermark, dan tanpa batas jumlah foto." },
  ],

  security:
    "Membuka HEIC tidak bisa dilakukan di browser — setiap dekoder JavaScript adalah libheif berlisensi LGPL, yang tidak bisa kami kirim ke perangkat Anda. Karena itu foto Anda dikirim ke server kami melalui koneksi HTTPS terenkripsi, dikonversi, lalu langsung dihapus. Foto tidak pernah disimpan, diindeks, atau dipakai untuk hal lain.",

  rating: { value: "4.8", count: "563" },

  ui: {
    // HeicTool.tsx — the same keys as heic-to-jpg.id.ts (one shared component,
    // and each route only has its own tool's ui in scope).
    "Please select HEIC or HEIF images.": "Pilih gambar HEIC atau HEIF.",
    "Converted 1 HEIC image.": "1 gambar HEIC berhasil dikonversi.",
    "Converted {n} HEIC images.": "{n} gambar HEIC berhasil dikonversi.",
    "or drop .heic / .heif photos here": "atau letakkan foto .heic / .heif di sini",
    "Converted on our server over an encrypted connection — files are deleted right after.":
      "Dikonversi di server kami melalui koneksi terenkripsi — file langsung dihapus setelahnya.",
    "1 HEIC image": "1 gambar HEIC",
    "{n} HEIC images": "{n} gambar HEIC",
    "Conversion runs on our server; results are auto-deleted within an hour.":
      "Konversi berjalan di server kami; hasilnya dihapus otomatis dalam satu jam.",
    "Convert {n} images": "Konversi {n} gambar",
    "Convert & download": "Konversi & unduh",
    "Remove EXIF, colour profile, camera and location data. Photos from a phone usually carry GPS coordinates.":
      "Hapus EXIF, profil warna, data kamera, dan lokasi. Foto dari ponsel biasanya menyimpan koordinat GPS.",
    "Upload a HEIC or HEIF image.": "Unggah gambar HEIC atau HEIF.",
    "HEIC conversion isn't enabled on this server (ImageMagick with libheif not installed).":
      "Konversi HEIC belum aktif di server ini (ImageMagick dengan libheif belum terpasang).",
  },
};

export default content;
