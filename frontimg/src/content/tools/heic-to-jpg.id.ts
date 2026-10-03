import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/heic-ke-jpg.
 *
 * Measured (Indonesia, per month): heic ke jpg 2,900, KD 0. The query behind
 * it is never the format name: an iPhone photo will not open on a Windows
 * laptop, or an upload form that asks for "JPG/JPEG" rejects it. The intro
 * says that first.
 *
 * iOS paths are given as the Indonesian iOS menus word them (Pengaturan >
 * Kamera > Format > Paling Kompatibel; Pengaturan > Foto > Transfer ke Mac
 * atau PC), with a note that labels can shift between iOS versions.
 *
 * EXIF: ImageMagick copies metadata across unless "Hapus metadata" is ticked
 * (stripMeta defaults to false) — this page follows the code, like the pt, hi
 * and ru twins.
 *
 * HeicTool also renders /id/heic-ke-png (batch 8), whose module must carry a
 * DUPLICATE of this `ui` block — i18n:keys cannot see the shared component
 * from that bucket.
 */
const content: ToolPageContent = {
  toolId: "heic-to-jpg",
  locale: "id",
  name: "HEIC ke JPG",
  tagline:
    "Ubah foto HEIC dan HEIF dari iPhone ke JPG atau PNG secara online — sekaligus banyak, dengan kualitas yang bisa diatur. Gratis dan cepat, dengan ImageMagick yang open-source.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "HEIC ke JPG Online Gratis — Ubah Foto iPhone Jadi JPG | oMyImage",
  metaDescription:
    "Ubah HEIC ke JPG online gratis: foto iPhone yang tidak bisa dibuka di Windows atau ditolak formulir online jadi JPG biasa. Sekaligus banyak, tanpa daftar, tanpa watermark.",

  intro:
    "Foto dari iPhone tidak mau terbuka di laptop Windows, atau formulir online menolaknya karena meminta JPG? Itu karena iPhone menyimpan foto sebagai HEIC agar ukurannya kecil, dan banyak aplikasi serta perangkat tidak bisa membukanya. Alat HEIC ke JPG ini mengubah foto .heic dan .heif Anda menjadi JPG yang didukung di mana saja (atau PNG yang lossless) — satu per satu atau banyak sekaligus. Alat ini termasuk sedikit alat di sini yang berjalan di server kami, bukan di browser: membuka HEIC memerlukan pustaka yang tidak boleh kami kirim ke browser berdasarkan lisensinya, jadi file Anda dikonversi di server lalu langsung dihapus.",

  sections: [
    {
      heading: "Apa itu HEIC, dan kenapa sering bermasalah",
      id: "what",
      body: [
        "HEIC adalah format yang dipakai iPhone secara bawaan sejak iOS 11. Format ini menyimpan foto dengan ukuran kira-kira setengah JPG yang setara — pencapaian teknis yang nyata dan alasan Apple memakainya, karena ponsel yang menyimpan puluhan ribu foto jadi jauh lebih hemat ruang.",
        "Masalahnya ada pada dasarnya. HEIC membungkus codec video HEVC/H.265, dan HEVC dilindungi beberapa kumpulan paten yang memungut biaya lisensi dekoder. Satu fakta itu menjelaskan hampir semua masalah orang dengan format ini: Windows tidak menyertakan dekodernya, kebanyakan browser tidak mau menampilkannya, banyak ponsel Android tidak bisa membukanya, dan banyak aplikasi desktop sama sekali tidak mengenali filenya. Formulir online — pendaftaran sekolah, lamaran kerja, portal pemerintah — umumnya meminta JPG, jadi file .heic langsung ditolak.",
        "JPG tidak punya beban seperti itu. Umurnya tiga puluh tahun, bebas paten, dan dipahami oleh semua perangkat yang pernah menampilkan gambar. Konversi menukar sedikit efisiensi penyimpanan dengan kepastian bahwa fotonya bisa dibuka ke mana pun Anda mengirimnya.",
      ],
    },
    {
      heading: "Kenapa alat ini memakai server kami",
      id: "server",
      body: [
        "Semua konverter lain di situs ini bekerja di dalam browser Anda. HEIC adalah pengecualian, dan alasannya lisensi, bukan performa. Setiap dekoder HEIC berbasis JavaScript yang ada — heic2any, heic-decode, heic-convert, libheif-js — membungkus pustaka yang sama, libheif, dan libheif berlisensi LGPL-3.0. Menyertakannya di dalam kode web terhitung sebagai distribusi, yang membawa kewajiban yang tidak bisa dipenuhi potongan JavaScript yang sudah diperkecil.",
        "Menjalankan pustaka itu di server bukanlah distribusi, jadi di sanalah prosesnya berlangsung. Foto Anda dikirim melalui koneksi HTTPS terenkripsi, dikonversi, lalu langsung dihapus. Foto tidak disimpan, tidak diindeks, dan tidak dipakai untuk hal lain. Kami lebih memilih mengatakannya terus terang daripada mengklaim sifat privasi yang tidak dimiliki alat yang satu ini.",
      ],
    },
    {
      heading: "Menghentikan masalah dari sumbernya",
      id: "settings",
      body: [
        "Kalau Anda sering mengonversi file HEIC, lebih baik mengubah pengaturannya daripada filenya. Di Pengaturan > Kamera > Format, pilihan \"Paling Kompatibel\" membuat kamera langsung menyimpan JPG. Efisiensi penyimpanannya hilang, tetapi di ponsel modern, ruang penyimpanan jarang menjadi batasan yang sebenarnya.",
        "Ada pengaturan kedua yang sering tidak disadari. Di Pengaturan > Foto, bagian \"Transfer ke Mac atau PC\" bisa diatur ke \"Otomatis\", yang mengubah HEIC menjadi JPG saat disalin, atau \"Simpan Asli\", yang tidak mengubahnya. Satu folder file .heic yang tidak bisa dibuka di komputer Windows sangat sering adalah hasil pengaturan kedua ini, yang bekerja persis seperti yang diperintahkan. Nama menunya bisa sedikit berbeda antara versi iOS.",
      ],
    },
    {
      heading: "Kualitas dan ukuran file setelah dikonversi",
      id: "quality",
      body: [
        "HEIC sudah dikompresi secara lossy oleh ponsel Anda, dan penyimpanan ke JPG mengompresnya untuk kedua kalinya. Pada kualitas bawaan hal ini tidak terlihat pada ukuran tampilan normal, tetapi penurunannya nyata, jadi konversikan dari HEIC aslinya, bukan dari salinan yang sudah pernah diproses.",
        "Harapkan JPG-nya lebih besar daripada HEIC — biasanya sekitar 1,5 sampai 2,5 kali — karena Anda berpindah ke format yang kurang efisien. Itulah harga untuk kecocokan di mana saja. Kalau formulir membatasi ukurannya, lanjutkan dengan Kompres Foto. Kalau Anda butuh salinan lossless untuk diedit, ubah ke PNG, tetapi bersiaplah untuk file yang beberapa kali lebih besar lagi.",
      ],
    },
  ],

  howToTitle: "Cara mengubah HEIC ke JPG",
  steps: [
    { title: "Unggah HEIC", description: "Pilih satu atau banyak foto .heic / .heif, atau seret ke sini." },
    { title: "Pilih format", description: "Pilih JPG (dengan kualitas) atau PNG sebagai hasilnya." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "photo_camera", title: "Dibuat untuk foto iPhone", description: "Ubah foto HEIC/HEIF dari Apple menjadi JPG atau PNG yang bisa dibuka di mana saja — Windows, Android, dan web." },
    { icon: "burst_mode", title: "Banyak file sekaligus", description: "Konversi seisi galeri sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "lock", title: "Privat sejak awal", description: "Konversi berjalan di server kami dengan ImageMagick yang open-source; hasilnya dihapus otomatis dalam satu jam dan tidak pernah dibagikan atau dipakai ulang." },
  ],

  faqs: [
    { q: "Apa itu HEIC?", a: "HEIC (HEIF) adalah format foto berefisiensi tinggi yang dipakai iPhone secara bawaan. Hemat ruang, tetapi tidak didukung di semua tempat, jadi mengubahnya ke JPG membuatnya lebih mudah dibagikan." },
    { q: "Bisakah banyak file HEIC dikonversi sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — beberapa file diunduh bersama dalam satu ZIP." },
    { q: "Apakah kualitasnya terjaga?", a: "Ya. Pilih PNG untuk hasil lossless, atau JPG dengan penggeser kualitas untuk menyeimbangkan ukuran dan ketajaman." },
    { q: "Apakah foto saya diunggah?", a: "Ya — HEIC termasuk sedikit alat di sini yang memerlukan server. Membuka HEIC memerlukan pustaka yang tidak boleh kami kirim ke browser karena alasan lisensi, jadi file dikonversi di server kami dan dihapus otomatis dalam satu jam. Tidak ada yang dibagikan atau dipakai ulang." },
    { q: "Kenapa formulir online menolak foto dari iPhone?", a: "Karena fotonya berformat .heic, sedangkan kebanyakan formulir — pendaftaran sekolah, lamaran kerja, portal pemerintah — hanya menerima JPG, JPEG, atau PNG. Ubah ke JPG di sini, lalu unggah ulang. Kalau masih terlalu besar, kompres dulu." },
    { q: "Apakah gratis?", a: "Sepenuhnya gratis, tanpa watermark dan tanpa daftar." },
    { q: "Kenapa iPhone saya menyimpan foto sebagai HEIC?", a: "Karena muat kira-kira dua kali lebih banyak gambar di ruang yang sama dibanding JPG, yang penting saat ponsel menyimpan ribuan foto. Apple mengganti bawaannya di iOS 11. Penghematannya nyata; biaya kecocokannyalah yang membawa orang ke sini." },
    { q: "Bagaimana agar iPhone tidak lagi memakai HEIC?", a: "Buka Pengaturan, masuk ke Kamera, lalu Format, dan pilih \"Paling Kompatibel\". Foto baru akan disimpan sebagai JPG sejak itu. Foto yang sudah ada tidak ikut diubah, jadi foto-foto itu tetap perlu dikonversi." },
    { q: "Kenapa Windows tidak bisa membuka file HEIC saya?", a: "HEIC dibangun di atas codec video HEVC/H.265 yang dilindungi kumpulan paten, jadi Windows tidak menyertakan dekodernya secara bawaan. Microsoft menyediakan ekstensi HEVC di Store, kadang berbayar. Konversi menghindari masalah itu sepenuhnya." },
    { q: "Sebaiknya diubah ke JPG atau PNG?", a: "JPG untuk hampir semua keperluan — jauh lebih kecil dan diterima di mana saja. Pilih PNG kalau Anda ingin salinan lossless untuk diedit atau diarsipkan, dan terima bahwa filenya beberapa kali lebih besar. Ada halaman HEIC ke PNG tersendiri untuk itu." },
    { q: "Apakah tanggal dan lokasi foto ikut tersimpan?", a: "Secara bawaan, ya: konverter menyalin metadata EXIF — termasuk tanggal pengambilan dan koordinat GPS, kalau fotonya punya — ke file baru. Centang \"Hapus metadata\" untuk membuang semuanya sebelum membagikan foto; foto dari ponsel hampir selalu mencatat lokasi pengambilannya." },
    { q: "Bisakah seisi galeri dikonversi?", a: "Bisa. Tambahkan sebanyak mungkin file .heic atau .heif; semuanya dikonversi berurutan dan dikembalikan dalam satu ZIP." },
  ],

  security:
    "Konversi HEIC berjalan di server kami dengan ImageMagick yang open-source. Hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan dihapus otomatis dalam satu jam. Kami tidak pernah membagikan atau memakai ulang foto Anda.",

  rating: { value: "4.9", count: "742" },

  ui: {
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
