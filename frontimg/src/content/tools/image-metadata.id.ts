import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/metadata-foto.
 *
 * The companion to /id/hapus-exif: read here, strip there. Both pages point at
 * each other, and the order matters.
 *
 * Local angle: photo «bukti» — proof photos sent in online-shopping disputes,
 * insurance claims and damage reports. The `limits` section is the one to keep
 * sharp for that reader: metadata is trivially editable, so it is a lead, not
 * evidence; and empty EXIF usually means WhatsApp or a platform stripped it.
 *
 * EXIF labels use the terms Indonesian photographers use: «Bukaan»,
 * «Kecepatan rana», «Panjang fokus», «White balance» (the loanword is what
 * camera menus print). ISO, MIME, MD5 and SHA-256 are identifiers and stay.
 */
const content: ToolPageContent = {
  toolId: "image-metadata",
  locale: "id",
  name: "Lihat Metadata Foto",
  tagline:
    "Lihat metadata EXIF foto secara online — kamera, lensa, eksposur, lokasi GPS, dan tanggal pengambilan. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Lihat Metadata Foto Online Gratis — Cek EXIF, Kamera & Lokasi GPS | oMyImage",
  metaDescription:
    "Cek metadata foto online gratis: kamera dan lensa, bukaan dan kecepatan rana, tanggal pengambilan, dan lokasi GPS di peta. Dibaca di browser — foto tidak diunggah. HEIC juga bisa.",

  intro:
    "Lihat cerita tersembunyi di balik foto apa pun. Alat Lihat Metadata Foto ini membaca data EXIF yang tertanam di foto Anda langsung di browser — kamera dan lensa, bukaan, kecepatan rana, ISO, tanggal pengambilan, bahkan lokasi GPS — dan menampilkannya dengan rapi, dengan daftar tag lengkap tinggal sekali klik. Tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Apa itu metadata dan dari mana asalnya",
      id: "what",
      body: [
        "Setiap kamera menulis sekumpulan informasi ke dalam file di samping gambarnya. Sebagian besar ditentukan oleh standar EXIF, yang dirancang untuk fotografer — catatan persis bagaimana setiap frame diekspos, yang benar-benar berguna saat Anda ingin tahu kenapa satu jepretan berhasil dan yang lain tidak.",
        "Ponsel modern menambahkan jauh lebih banyak. Koordinat GPS, ketinggian, dan arah kompas kalau layanan lokasi aktif; model perangkat dan sering kali nomor serinya; versi software yang memproses gambar. Sebagian kamera mengisi kolom pemilik dan hak cipta dari pengaturan yang pernah Anda atur sekali lalu terlupakan.",
        "Aplikasi edit menambahkan catatannya sendiri, jadi sebuah file bisa mengumpulkan sebagian riwayat tentang apa yang dilakukan padanya dan kapan. Semua itu tidak terlihat saat Anda melihat fotonya, dan semuanya ikut bepergian bersama file.",
      ],
    },
    {
      heading: "Membaca sebelum membagikan",
      id: "why",
      body: [
        "Alasan paling praktis untuk melihat adalah mengetahui apa yang akan Anda berikan. Foto yang diambil di rumah membawa alamat Anda; yang diambil di kantor membawa alamat tempat Anda bekerja. Menjual barang online, memposting ke forum, mengirim file ke orang asing — dalam setiap kasus, fotonya anonim, metadatanya tidak.",
        "Ada juga pemakaian yang konstruktif. Fotografer memeriksa data eksposur untuk belajar dari hasilnya sendiri atau memahami cara orang lain mendapatkan sebuah jepretan. Siapa pun yang mengatur koleksi foto besar mengandalkan waktu pengambilan untuk mengurutkan foto yang nama filenya sudah lama berantakan. Klaim asuransi, laporan kerusakan, dan sengketa belanja online sering bergantung pada kapan dan di mana sebuah foto diambil.",
        "Dan saat Anda menerima sebuah foto, metadata adalah pemeriksaan awal atas asal-usulnya — walaupun lunak, karena isinya bisa diedit.",
      ],
    },
    {
      heading: "Apa yang tidak bisa dibuktikan metadata",
      id: "limits",
      body: [
        "Metadata adalah data, bukan bukti. Setiap field bisa diubah dengan alat yang tersedia bebas, jadi tanggal atau lokasi hanya membuktikan bahwa seseorang menuliskan nilai itu ke dalam file. Perlakukan temuan Anda sebagai petunjuk, bukan kesimpulan.",
        "Ketiadaan metadata bahkan lebih sedikit artinya. Foto tanpa metadata kemungkinan besar sudah melewati platform yang menghapusnya — foto yang dikirim lewat WhatsApp dengan cara biasa, misalnya — atau berupa tangkapan layar, atau disimpan ulang oleh aplikasi edit. Tidak satu pun berarti ada yang sengaja disembunyikan.",
        "Satu hal yang benar-benar bisa ditunjukkan metadata dengan andal adalah apa yang sedang dibuka oleh sebuah file saat ini. Itulah pertanyaan yang dijawab alat ini dengan baik, dan biasanya itulah pertanyaan yang penting sebelum Anda mengirim sesuatu.",
      ],
    },
    {
      heading: "Dibaca secara lokal, termasuk HEIC",
      id: "privacy",
      body: [
        "File dibaca di dalam browser Anda dan tidak pernah diunggah — penanganan yang tepat untuk alat yang seluruh tujuannya memeriksa informasi yang mungkin sensitif. Mengirim foto ke server hanya untuk mengetahui apakah foto itu membuka alamat Anda adalah pertukaran yang aneh.",
        "File HEIC dan HEIF bisa dibaca di sini walaupun situs ini tidak bisa menampilkannya di browser. Metadata berada di dalam wadahnya, bukan di data piksel yang terkompresi, jadi pembaca bisa membaca tag-nya tanpa menyentuh aliran HEVC — itulah sebabnya pembacaan ini bisa berjalan secara lokal, sementara konversi HEIC harus berjalan di server.",
      ],
    },
  ],

  howToTitle: "Cara melihat metadata foto",
  steps: [
    { title: "Unggah foto", description: "Pilih sebuah foto, atau seret ke area kerja." },
    { title: "Baca datanya", description: "Lihat kamera, lensa, eksposur, tanggal, dan detail GPS yang diambil dari EXIF file." },
    { title: "Jelajahi semuanya", description: "Buka daftar metadata lengkap untuk memeriksa setiap tag yang tertanam." },
  ],

  features: [
    { icon: "photo_camera", title: "Pembacaan EXIF lengkap", description: "Merek dan model kamera, lensa, bukaan, kecepatan rana, ISO, panjang fokus, tanggal, dan lainnya, dikelompokkan dengan rapi." },
    { icon: "location_on", title: "Lokasi GPS", description: "Kalau fotonya bertanda lokasi, lihat koordinatnya dan buka titik persisnya di peta." },
    { icon: "lock", title: "100% privat", description: "Metadata dibaca sepenuhnya di browser Anda — foto Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Metadata apa saja yang bisa dibaca?", a: "EXIF, termasuk kamera dan lensa, pengaturan eksposur, tanggal pengambilan, orientasi, ruang warna, dan koordinat GPS bila ada." },
    { q: "Kenapa foto saya tidak menunjukkan metadata?", a: "Mungkin sudah dihapus (misalnya oleh media sosial atau WhatsApp), atau formatnya memang tidak menyimpan EXIF — kebanyakan PNG dan tangkapan layar tidak punya." },
    { q: "Bisakah melihat lokasi GPS-nya?", a: "Bisa. Foto yang bertanda lokasi menampilkan koordinatnya, dengan tautan untuk melihat lokasinya di peta." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar, dan foto dibaca secara lokal di browser Anda — tidak ada yang diunggah." },
    { q: "Apa saja yang bisa diceritakan metadata tentang sebuah foto?", a: "Kapan foto diambil sampai ke detiknya, di mana sampai ketelitian beberapa meter kalau lokasi aktif, kamera atau ponsel apa yang dipakai termasuk modelnya dan sering nomor serinya, serta pengaturan eksposur lengkap — kecepatan rana, bukaan, ISO, panjang fokus, flash. Sebagian file juga membawa kolom pemilik dan hak cipta serta riwayat edit." },
    { q: "Bisakah mengetahui apakah sebuah foto sudah diedit?", a: "Kadang-kadang. Software edit sering menuliskan namanya sendiri ke metadata, dan tanggal perubahan sering berbeda dari tanggal pengambilan. Namun metadata sangat mudah diubah, jadi ketiadaannya tidak membuktikan apa-apa dan keberadaannya adalah petunjuk, bukan bukti." },
    { q: "Apakah metadata bisa dipakai sebagai bukti foto asli?", a: "Hanya sebagai petunjuk awal. Tanggal dan lokasi di EXIF bisa diubah dengan mudah, dan foto yang dikirim lewat WhatsApp biasanya sudah kehilangan metadatanya. Untuk klaim asuransi atau sengketa, minta file asli langsung dari perangkat yang memotretnya — atau kirimkan file asli Anda sendiri." },
    { q: "Bisakah membaca file HEIC dari iPhone?", a: "Bisa. Metadata dibaca langsung dari wadahnya tanpa mendekode piksel yang terkompresi HEVC, jadi bisa berjalan di browser Anda walaupun menampilkan HEIC tidak bisa. Pengaturan kamera, tanggal, dan GPS terbaca seperti biasa." },
    { q: "Bagaimana menghapus apa yang saya temukan di sini?", a: "Pakai Hapus EXIF. Alat itu menyimpan ulang gambar dari piksel mentahnya, sehingga tidak ada metadata yang tersisa. Baca dulu, lalu hapus — mengetahui apa yang dibawa sebuah file sering lebih berguna daripada sekadar membersihkannya tanpa melihat." },
    { q: "Seberapa akurat data GPS-nya?", a: "Biasanya dalam beberapa meter di luar ruangan dengan sinyal satelit yang baik. Di dalam ruangan, atau di area kota yang padat saat ponsel beralih ke penentuan posisi Wi-Fi dan jaringan seluler, selisihnya bisa puluhan atau ratusan meter. Bagaimanapun, ketelitiannya sudah lebih dari cukup untuk menunjuk sebuah bangunan." },
  ],

  security:
    "Foto Anda tetap privat. Metadata EXIF dibaca sepenuhnya di browser Anda — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "312" },

  ui: {
    // MetadataTool.tsx — section titles (keys, translated at the render site)
    "File": "File", // i18n-same — the word Indonesian uses (common.ts agrees)
    "Image": "Gambar",
    "Camera": "Kamera",
    "Exposure": "Eksposur",
    "Date & time": "Tanggal & waktu",
    "Author & rights": "Pembuat & hak",
    // MetadataTool.tsx — row labels
    "File name": "Nama file",
    "File size": "Ukuran file",
    "File type": "Jenis file",
    "Extension": "Ekstensi",
    "MIME type": "Tipe MIME",
    "Last modified": "Terakhir diubah",
    "MD5": "MD5", // i18n-same
    "SHA-256": "SHA-256", // i18n-same
    "Dimensions": "Dimensi",
    "Megapixels": "Megapiksel",
    "Aspect ratio": "Rasio aspek",
    "Orientation": "Orientasi",
    "Color space": "Ruang warna",
    "Camera make": "Merek kamera",
    "Camera model": "Model kamera",
    "Lens": "Lensa",
    "Software": "Software", // i18n-same — the word Indonesian camera menus use
    "Aperture": "Bukaan",
    "Shutter speed": "Kecepatan rana",
    "ISO": "ISO", // i18n-same
    "Focal length": "Panjang fokus",
    "Focal length (35mm)": "Panjang fokus (setara 35mm)",
    "Flash": "Flash", // i18n-same — the word Indonesian camera menus use
    "Exposure program": "Program eksposur",
    "Metering mode": "Mode metering",
    "White balance": "White balance", // i18n-same — the term camera menus print
    "Taken": "Diambil",
    "Digitized": "Didigitalkan",
    "Modified": "Diubah",
    "Artist": "Pembuat",
    "Copyright": "Hak cipta",
    "Description": "Deskripsi",
    // lib/image/format-info.ts — container row labels
    "JFIF version": "Versi JFIF",
    "Resolution unit": "Satuan resolusi",
    "X resolution": "Resolusi X",
    "Y resolution": "Resolusi Y",
    "Encoding process": "Proses encoding",
    "Bits per sample": "Bit per sampel",
    "Color components": "Komponen warna",
    "Chroma subsampling": "Chroma subsampling", // i18n-same — the technical term
    "Bit depth": "Kedalaman bit",
    "Color type": "Tipe warna",
    "Interlaced": "Interlaced", // i18n-same — the technical term
    "GIF version": "Versi GIF",
    "Color table size": "Ukuran tabel warna",
    // lib/image/format-info.ts — the closed set of word values. "None" is a
    // shared VALUE printed against several labels; «Tidak ada» fits them all.
    "None": "Tidak ada",
    "inches": "inci",
    "cm": "cm", // i18n-same
    "Yes (Adam7)": "Ya (Adam7)",
    "No": "Tidak",
    // MetadataTool.tsx
    "Please select an image file.": "Pilih file gambar.",
    "bytes": "byte",
    "Unknown": "Tidak diketahui",
    "unknown": "tidak diketahui",
    "image": "gambar",
    "or drop a JPG, PNG, TIFF or HEIC photo here": "atau letakkan foto JPG, PNG, TIFF, atau HEIC di sini",
    "Clear image": "Hapus gambar",
    "Metadata options": "Opsi metadata",
    "Metadata": "Metadata", // i18n-same — the Indonesian word is the same
    "Copy": "Salin",
    "Copy all": "Salin semua",
    "Copied to clipboard.": "Disalin ke clipboard.",
    "Couldn't copy to the clipboard.": "Tidak bisa menyalin ke clipboard.",
    "Downloaded metadata as TXT.": "Metadata diunduh sebagai TXT.",
    "Downloaded metadata as JSON.": "Metadata diunduh sebagai JSON.",
    "No EXIF block in this file — messaging apps and social networks usually strip it. The file and image details below are read from the image itself, so they are still accurate.":
      "Tidak ada blok EXIF di file ini — aplikasi pesan dan media sosial biasanya menghapusnya. Detail file dan gambar di bawah dibaca dari gambarnya sendiri, jadi tetap akurat.",
    "Location": "Lokasi",
    "Latitude": "Lintang",
    "Longitude": "Bujur",
    "View on map": "Lihat di peta",
    "All metadata ({n})": "Semua metadata ({n})",
    "Raw header": "Header mentah",
    "Raw header (first 128 bytes)": "Header mentah (128 byte pertama)",
    // The TXT export (a person reads it; the JSON export keeps English keys).
    // These two lines are concatenated with a space, so the split sits
    // mid-sentence in Indonesian too.
    "Metadata of {name}": "Metadata {name}",
    "Extracted automatically in your browser. It may be neither complete nor":
      "Diambil otomatis di browser Anda. Datanya mungkin tidak lengkap dan tidak",
    "accurate — metadata can be edited or removed at any point in a file's life.":
      "akurat — metadata bisa diubah atau dihapus kapan saja selama umur sebuah file.",
    "Generated by oMyImage": "Dibuat oleh oMyImage",
  },
};

export default content;
