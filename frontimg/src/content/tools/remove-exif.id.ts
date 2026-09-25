import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/hapus-exif.
 *
 * The local route by which location leaks: WhatsApp compresses and strips
 * photos sent the normal way, but a photo sent «sebagai dokumen» arrives as
 * the original file, EXIF and GPS included — and that is exactly how people
 * send photos when they want full quality. Marketplace listings shot at home
 * are the other classic case.
 *
 * ORIENTATION, stated as the tool behaves: RemoveExifTool rasterizes with
 * autoOrient:true, so the EXIF orientation is applied to the pixels BEFORE the
 * metadata is dropped and the output stays upright. The English page (and
 * its twins) once described the opposite — a sideways result and a detour
 * through an "auto-orient" option in the Rotate tool, which does not exist.
 * They were corrected to match this page.
 */
const content: ToolPageContent = {
  toolId: "remove-exif",
  locale: "id",
  name: "Hapus EXIF",
  tagline:
    "Hapus EXIF dan metadata — termasuk lokasi GPS — dari foto secara online sebelum Anda membagikannya. Bisa sekaligus banyak, gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Hapus EXIF Online Gratis — Hapus Lokasi GPS & Metadata Foto | oMyImage",
  metaDescription:
    "Hapus EXIF foto online gratis: buang lokasi GPS, model kamera, dan tanggal pengambilan sebelum membagikan foto. Sekaligus banyak, diproses di browser — foto tidak diunggah.",

  intro:
    "Lindungi privasi Anda sebelum membagikan foto. Alat Hapus EXIF ini membuang metadata tersembunyi dari foto Anda — lokasi GPS, model kamera dan lensa, software, dan waktu pengambilan — dengan menyimpan ulang gambarnya langsung di browser Anda. Bersihkan satu foto atau banyak sekaligus dan langsung unduh. Tidak ada yang diunggah, jadi foto dan datanya tetap privat.",

  sections: [
    {
      heading: "Apa yang dibawa foto Anda",
      id: "what",
      body: [
        "Setiap foto dari ponsel atau kamera datang dengan sekumpulan metadata. Standar EXIF mencakup data teknis — kecepatan rana, bukaan, ISO, panjang fokus, model kamera — yang berguna dan tidak berbahaya. Yang ada di sampingnya itulah yang perlu dipikirkan.",
        "Koordinat GPS adalah yang terpenting. Kalau layanan lokasi aktif, file mencatat tempat foto diambil sampai ketelitian beberapa meter, lengkap dengan tanggal dan jam persisnya. Foto yang diambil di ruang tamu membawa alamat rumah Anda dalam bentuk yang bisa langsung dibaca perangkat lunak apa pun.",
        "Masih ada lagi: nomor seri perangkat yang menghubungkan foto-foto terpisah ke kamera yang sama, kolom pemilik dan hak cipta yang diisi otomatis oleh sebagian kamera, riwayat edit dari aplikasi tertentu, dan di sebagian perangkat thumbnail foto asli — yang kadang tetap ada setelah di-crop dan memperlihatkan bagian yang sudah Anda potong.",
      ],
    },
    {
      heading: "Di mana risikonya sebenarnya",
      id: "risk",
      body: [
        "Media sosial besar menghapus metadata saat foto diunggah, jadi foto yang diposting ke feed publik biasanya sudah bersih. Hal itu menciptakan rasa aman yang palsu, karena tempat foto paling sering membocorkan lokasi justru tempat yang tidak pernah dipikirkan orang.",
        "WhatsApp adalah contoh yang paling dekat: foto yang dikirim biasa dikompres dan dibersihkan, tetapi foto yang dikirim \"sebagai dokumen\" — cara yang dipilih orang agar kualitasnya tidak turun — tiba sebagai file asli, lengkap dengan EXIF dan GPS-nya. Hal yang sama berlaku untuk lampiran email, tautan penyimpanan cloud, unggahan ke forum dan marketplace, foto yang dikirim ke jasa cetak, dan apa pun yang Anda pasang di situs sendiri. Menjual barang bekas dengan foto yang diambil di rumah adalah kasus klasiknya: iklannya anonim, filenya tidak.",
        "Jalur lain yang sering terlupa bersifat profesional. Foto yang diserahkan ke klien, wartawan, perusahaan asuransi, atau proses hukum membawa apa pun yang ada di dalamnya, dan penerimanya bisa membacanya, disengaja atau tidak.",
      ],
    },
    {
      heading: "Orientasi tetap benar",
      id: "orientation",
      body: [
        "Satu field EXIF benar-benar bekerja: tag orientasi. Sensor ponsel posisinya tetap, jadi saat ponsel diputar, gambar disimpan menyamping dan sebuah tag mencatat sisi mana yang seharusnya di atas.",
        "Banyak alat penghapus metadata ikut membuang petunjuk itu begitu saja, sehingga foto yang tadinya tampil tegak mendadak rebah ke samping — pikselnya memang selalu menyamping, dan catatan yang menjelaskannya ikut terhapus.",
        "Alat ini menghindarinya: orientasi dari tag diterapkan ke pikselnya lebih dulu, baru metadatanya dibuang. Hasilnya tersimpan dalam posisi yang benar dan tidak butuh petunjuk apa pun lagi, jadi tampil tegak di mana saja.",
      ],
    },
    {
      heading: "Cara penghapusan bekerja di sini",
      id: "how",
      body: [
        "Gambar didekode ke canvas lalu disimpan ulang dari piksel mentahnya. Canvas tidak mengenal metadata, jadi tidak ada yang terbawa — hasilnya hanya berisi gambar dan tidak ada yang lain. Cara ini menyeluruh dari rancangannya, bukan dengan memelihara daftar field yang harus dihapus.",
        "Semuanya terjadi di dalam browser Anda, dan itu penting mengingat tujuannya. Mengunggah foto ke server demi menghapus data lokasinya justru menggagalkan tujuan itu; di sini file tidak pernah meninggalkan perangkat Anda, dan tidak ada salinan di mana pun yang masih menyimpan koordinat yang ingin Anda hapus.",
        "Banyak foto sekaligus ditangani dengan cara yang sama dan dikembalikan dalam satu ZIP — kebutuhan biasa saat menyiapkan sekumpulan foto untuk iklan jualan atau membersihkan satu folder sebelum dibagikan.",
      ],
    },
  ],

  howToTitle: "Cara menghapus data EXIF dari foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Pilih format hasil", description: "Pertahankan format aslinya atau ubah, dan atur kualitas untuk JPG/WEBP." },
    { title: "Bersihkan & unduh", description: "Klik Hapus metadata — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "shield", title: "Menghapus GPS & data kamera", description: "Membuang EXIF, lokasi GPS, data kamera, lensa, dan waktu pengambilan dengan menyimpan ulang pikselnya secara utuh." },
    { icon: "burst_mode", title: "Sekaligus banyak", description: "Bersihkan banyak foto JPG, PNG, atau WEBP sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "lock", title: "100% privat", description: "Semuanya berjalan di browser Anda — foto Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Metadata apa saja yang dihapus?", a: "Semua data EXIF/IPTC/XMP yang tertanam, termasuk lokasi GPS, model kamera dan lensa, serta tanggal pengambilan — hasilnya hanya menyimpan pikselnya." },
    { q: "Apakah kualitas foto turun?", a: "Gambar disimpan ulang, jadi atur kualitas ke 100% untuk hasil yang nyaris identik. Nilai bawaan 95% adalah keseimbangan yang aman." },
    { q: "Bisakah banyak foto dibersihkan sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — satu foto langsung terunduh dan beberapa foto diunduh bersama dalam satu ZIP." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Apa saja yang tersimpan di data EXIF?", a: "Jauh lebih banyak dari dugaan kebanyakan orang: koordinat GPS dengan ketelitian beberapa meter, tanggal dan jam persis, model dan nomor seri kamera atau ponsel, pengaturan lensa dan eksposur, dan di sebagian perangkat nama pemilik, kolom hak cipta, serta thumbnail foto asli." },
    { q: "Apakah foto yang dikirim lewat WhatsApp membawa lokasi?", a: "Foto yang dikirim dengan cara biasa dikompres dan metadatanya dibuang. Tetapi foto yang dikirim sebagai dokumen tiba sebagai file asli, lengkap dengan EXIF dan GPS. Kalau Anda mengirim sebagai dokumen demi kualitas, hapus metadatanya dulu di sini." },
    { q: "Apakah media sosial menghapus EXIF otomatis?", a: "Yang besar umumnya menghapusnya saat diunggah, tetapi jangan mengandalkannya. Pesan langsung, tautan cloud, lampiran email, forum, marketplace, dan situs pribadi sering meneruskan file apa adanya — dan justru di sanalah orang membagikan foto barang di alamat rumahnya." },
    { q: "Apakah menghapus EXIF mengubah tampilan foto?", a: "Tidak di alat ini. Orientasi dari tag EXIF diterapkan ke piksel lebih dulu, lalu metadatanya dibuang, jadi foto yang tampil tegak tetap tegak." },
    { q: "Apakah ini menghapus watermark tersembunyi atau kode pelacak?", a: "Tidak. Alat ini membersihkan field metadata standar. Tanda steganografi yang tertanam di dalam piksel itu sendiri adalah hal yang sama sekali berbeda dan tetap ada setelah metadata dihapus — bahkan bertahan dari kebanyakan editan." },
    { q: "Bisakah metadatanya dikembalikan?", a: "Tidak dari file yang sudah dibersihkan. Simpan foto aslinya kalau tanggal atau lokasi pengambilan penting bagi Anda — untuk mengatur koleksi foto, dokumentasi asuransi, atau sekadar mengingat di mana foto itu diambil." },
    { q: "Bagaimana memeriksa isi foto saya lebih dulu?", a: "Pakai Lihat Metadata Foto. Alat itu membaca setiap tag yang dibawa file Anda, termasuk koordinat GPS, sepenuhnya di browser Anda. Melihat dulu sebelum menghapus biasanya layak dilakukan." },
  ],

  security:
    "Foto Anda tetap privat. Penghapusan metadata terjadi sepenuhnya di browser Anda — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "377" },

  ui: {
    // RemoveExifTool.tsx — module-scope FORMATS
    "Same as original": "Sama seperti aslinya",
    // RemoveExifTool.tsx
    "Please select image files.": "Pilih file gambar.",
    "Removed metadata from 1 image.": "Metadata 1 gambar berhasil dihapus.",
    "Removed metadata from {n} images.": "Metadata {n} gambar berhasil dihapus.",
    "Couldn't process the images.": "Gambar tidak bisa diproses.",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "metadata removed": "metadata dihapus",
    "Metadata settings": "Pengaturan metadata",
    // «Bersihkan» is already the tray's "Clear" button and «Hapus» its per-file
    // "Remove" (common.ts), so the action says what it removes.
    "Clean": "Hapus EXIF",
    "Cleaning…": "Menghapus EXIF…",
    "Output Settings": "Pengaturan Hasil",
    "Strips EXIF, GPS location and camera data by re-encoding the pixels — all in your browser.":
      "Menghapus EXIF, lokasi GPS, dan data kamera dengan menyimpan ulang pikselnya — semuanya di browser Anda.",
    "Remove metadata from {n}": "Hapus metadata {n} gambar",
    "Remove metadata & download": "Hapus metadata & unduh",
    "Format": "Format", // i18n-same — the Indonesian word is the same
    "JPG background": "Latar untuk JPG",
  },
};

export default content;
