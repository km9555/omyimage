import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/blur-wajah. The heaviest ui block in the locale.
 *
 * Measured (Indonesia, per month): blur wajah 1,300 vs buramkan wajah 110 —
 * the loanword leads, as with «blur foto».
 *
 * Local angles: NIK on a KTP, a «plat nomor», a house number — the text tab
 * finds those automatically — and children's faces in school and posyandu
 * photos shared to parents' WhatsApp groups.
 *
 * `legal` names UU No. 27 Tahun 2022 (UU PDP) only as the Indonesian law that
 * governs personal data, the way the English page names GDPR — no claim about
 * what it requires of an individual or how it is enforced.
 *
 * The weak-effect warning interpolates {effect}; Indonesian does not inflect,
 * so «Efek {effect} …» works for every effect name. The two effects it
 * recommends are quoted exactly as common.ts renders them («Gaussian»,
 * «Warna solid»).
 */
const content: ToolPageContent = {
  toolId: "blur-face",
  locale: "id",
  name: "Blur Wajah",
  tagline:
    "Blur atau sensor wajah, plat nomor, dan detail pribadi di foto secara online — tandai areanya, pilih kekuatannya, lalu ekspor. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Blur Wajah di Foto Online Gratis — Sensor Wajah & Plat Nomor | oMyImage",
  metaDescription:
    "Blur wajah di foto online gratis: deteksi wajah otomatis, sensor plat nomor dan teks, blur, piksel, atau blok warna — diproses di browser, foto tidak pernah diunggah.",

  intro:
    "Perlu menyembunyikan wajah, name tag, atau plat nomor sebelum membagikan foto? Alat Blur Wajah ini menemukan wajah secara otomatis, dan memungkinkan Anda menandai sendiri area lain yang bersifat pribadi. Blur, pikselkan, atau tutup dengan warna solid, atur setiap area dengan menyeretnya, dan proses banyak foto sekaligus. Sensornya tertanam permanen di gambar hasil ekspor, dan semuanya — termasuk deteksi wajah — berjalan di browser Anda, jadi foto Anda tidak pernah diunggah.",

  sections: [
    {
      heading: "Kenapa blur lebih baik daripada kotak hitam",
      id: "method",
      body: [
        "Kotak hitam yang digambar di atas wajah dalam file edit berlapis bukanlah sensor — itu stiker, dan siapa pun yang membuka file aslinya bisa menggesernya. Bahkan setelah diratakan, kotak solid mengumumkan bahwa ada yang disembunyikan dan memancing pertanyaan: apa?",
        "Blur bekerja berbeda. Blur menghancurkan informasinya di tempat: piksel diganti dengan rata-rata tetangganya, dan detail yang membuat wajah bisa dikenali tidak lagi ada di mana pun di dalam file. Ekspor hasilnya, dan tidak ada yang bisa dipulihkan, karena memang tidak ada yang disimpan.",
        "Itulah sifat yang sebenarnya Anda inginkan dari sensor. Bukan menutupi, yang bisa dibatalkan, melainkan menghancurkan, yang tidak bisa.",
      ],
    },
    {
      heading: "Blur atau piksel",
      id: "blur-vs-pixelate",
      body: [
        "Pikselasi mengganti area dengan blok-blok besar berwarna rata-rata. Tampilannya tegas, dan karena itulah menjadi kebiasaan di televisi dan jurnalistik, tempat penonton memang perlu tahu bahwa ada yang ditahan.",
        "Untuk benar-benar menyamarkan identitas, pikselasi adalah pilihan yang lebih lemah. Rata-rata tiap blok masih menyimpan struktur — posisi kasar mata, bentuk rahang, kontras antara rambut dan kulit — dan para peneliti sudah menunjukkan identitas bisa dipulihkan dari wajah yang dipikselkan kalau ukuran bloknya kurang besar. Blur Gaussian yang kuat menyisakan sinyal jauh lebih sedikit.",
        "Pakai pikselasi kalau Anda ingin sensornya jelas terlihat, dan blur kalau Anda ingin orangnya benar-benar tidak bisa dikenali. Kalau butuh keduanya, pikselkan dengan tebal, jangan tipis-tipis.",
      ],
    },
    {
      heading: "Menutup area dengan benar",
      id: "coverage",
      body: [
        "Kesalahan paling umum adalah memburamkan terlalu sempit. Area yang hanya menutup mata membiarkan garis rahang, garis rambut, telinga, dan warna kulit tetap terlihat, dan orang dikenali dari semua itu. Tutup seluruh kepala, dan lebihkan sedikit melewati garis rambut.",
        "Kesalahan kedua adalah blur yang terlalu lemah. Nilai hasilnya dengan zoom penuh, bukan di ukuran thumbnail, karena blur yang tampak cukup di pratinjau kecil sering kali tidak. Kalau Anda masih bisa tahu siapa orangnya, orang yang mengenalnya juga bisa.",
        "Ingat juga sisa bingkainya. Name tag, nomor rumah, plat nomor kendaraan, NIK di KTP, pantulan di kaca, dan tulisan di layar di belakang objek semuanya bisa mengidentifikasi orang — tab Teks bisa menemukan tulisan seperti itu secara otomatis. Foto dengan wajah yang terblur sempurna tetapi papan nama jalan yang terlihat belum mencapai banyak hal.",
      ],
    },
    {
      heading: "Kapan ini penting secara hukum",
      id: "legal",
      body: [
        "Menurut GDPR di Eropa dan aturan serupa di banyak negara, wajah yang bisa dikenali adalah data pribadi. Di Indonesia, pelindungan data pribadi diatur oleh Undang-Undang Nomor 27 Tahun 2022 (UU PDP). Kewajibannya jauh lebih berat bagi organisasi daripada bagi perorangan yang mengunggah foto liburan, tetapi tetap nyata.",
        "Situasi yang paling berisiko bisa ditebak: foto yang memuat anak-anak — termasuk foto sekolah dan posyandu yang dibagikan ke grup WhatsApp orang tua — foto dari klinik dan tempat perawatan, foto keramaian yang dipakai untuk keperluan komersial, foto di tempat kerja, dan apa pun yang memperlihatkan orang yang tidak tahu dirinya sedang difoto. Memburamkan wajah adalah cara termurah untuk menghapus pertanyaan itu sepenuhnya.",
        "Karena semuanya berjalan di browser Anda, foto asli yang belum disensor tidak pernah meninggalkan perangkat Anda — penanganan yang tepat untuk jenis foto seperti ini.",
      ],
    },
  ],

  howToTitle: "Cara blur wajah di foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Deteksi atau tandai", description: "Tekan deteksi wajah untuk menemukannya otomatis, lalu seret, ubah ukuran, atau hapus area mana pun — dan tandai sendiri plat nomor, nama, atau dokumen." },
    { title: "Ekspor", description: "Klik Ekspor untuk mengunduh foto dengan area yang sudah disensor secara permanen — dalam satu ZIP kalau lebih dari satu." },
  ],

  features: [
    { icon: "face_retouching_natural", title: "Deteksi wajah otomatis", description: "Menemukan setiap wajah di foto sesuai tingkat sensitivitas pilihan Anda, dan modelnya berjalan di perangkat Anda — foto tidak pernah diunggah." },
    { icon: "blur_on", title: "Blur, piksel, atau blok warna", description: "Pilih blur halus, pikselasi kotak-kotak, atau blok warna solid, dan atur kekuatannya untuk menutup detail sensitif sepenuhnya." },
    { icon: "select_all", title: "Area yang bisa diedit", description: "Setiap area bisa dipindah, diubah ukurannya dari sudut atau sisi mana pun, dan dihapus satu per satu — elips untuk wajah, persegi panjang untuk plat nomor dan dokumen." },
    { icon: "lock", title: "Benar-benar privat", description: "Semuanya diproses di browser Anda — foto asli tidak pernah meninggalkan perangkat, dan sensornya permanen di file hasil ekspor." },
  ],

  faqs: [
    { q: "Bisakah memburamkan lebih dari satu wajah?", a: "Bisa. Tandai setiap area yang ingin disembunyikan; Anda bisa menambahkan sebanyak yang Anda mau, lalu membatalkan atau menghapusnya." },
    { q: "Apa bedanya blur dan piksel?", a: "Blur melembutkan area dengan halus, sedangkan piksel menggantinya dengan blok-blok besar. Keduanya menutup detail sepenuhnya kalau kekuatannya cukup tinggi." },
    { q: "Apakah blur-nya permanen?", a: "Ya. Area yang disensor digambar langsung ke gambar hasil ekspor, jadi tidak bisa dibatalkan oleh penerimanya." },
    { q: "Apakah deteksi otomatis mengunggah foto saya?", a: "Tidak. Model deteksi wajah diunduh ke browser Anda saat pertama kali dipakai, lalu berjalan di perangkat Anda sendiri — sama seperti proses blur-nya. Tidak ada apa pun tentang foto itu yang dikirim ke mana pun, dan justru itulah intinya: foto yang disensor orang adalah foto yang tidak semestinya melewati server orang lain." },
    { q: "Ada wajah yang terlewat — lalu bagaimana?", a: "Naikkan sensitivitasnya lalu deteksi lagi, atau tandai areanya secara manual. Deteksi disetel untuk wajah yang cukup dekat dengan kamera, jadi wajah kecil di keramaian atau pemandangan jalan yang jauh adalah yang biasanya terlewat. Apa pun yang ditemukannya adalah area biasa yang bisa Anda pindah, ubah ukurannya, atau hapus." },
    { q: "Bagaimana menyensor plat nomor atau NIK?", a: "Pakai tab Teks untuk menemukan tulisan secara otomatis, atau tandai areanya sendiri dengan persegi panjang. Pilih blur yang kuat atau Warna solid, lalu periksa hasilnya dengan zoom penuh sebelum membagikan." },
    { q: "Apakah gratis?", a: "Sepenuhnya gratis, tanpa watermark dan tanpa daftar." },
    { q: "Bisakah blur-nya dibalik?", a: "Secara praktis tidak. Blur membuang informasi, bukan menyembunyikannya, jadi tidak ada lagi yang bisa dipulihkan — berbeda dengan kotak hitam di file berlapis, atau pikselasi yang cukup kasar sehingga rekonstruksi AI menjadi masuk akal. Setelah diekspor, wajahnya sudah hilang dari piksel." },
    { q: "Sebaiknya pakai blur atau piksel?", a: "Blur adalah pilihan yang lebih aman. Pikselasi dengan ukuran blok besar kadang bisa direkonstruksi sebagian, karena rata-rata tiap blok masih membawa struktur. Blur Gaussian yang kuat menyisakan jauh lebih sedikit. Pikselasi lebih jelas menunjukkan bahwa ada sensor, dan kadang justru itu yang Anda inginkan." },
    { q: "Seberapa kuat blur-nya sebaiknya?", a: "Cukup kuat sampai Anda sendiri tidak bisa mengenali orangnya pada zoom penuh. Blur tipis yang sekadar melembutkan wajah bukanlah penyamaran — wajahnya tetap bisa dikenali oleh siapa pun yang mengenal orang itu, dan sering juga oleh software. Kalau ragu, pilih yang lebih kuat." },
    { q: "Apakah data lokasi di foto ikut terhapus?", a: "Ya, sebagai efek samping: gambar digambar ulang dari canvas, yang tidak membawa metadata EXIF, jadi koordinat GPS dan detail kamera ikut hilang. Kalau metadata yang menjadi perhatian utama Anda, bukan wajah, Hapus EXIF adalah alat khususnya." },
    { q: "Apakah wajah harus diblur sebelum memposting foto?", a: "Tergantung di mana Anda berada dan foto apa itu. Banyak negara memperlakukan wajah yang bisa dikenali sebagai data pribadi, dan mempublikasikan foto anak-anak, pasien, orang yang kebetulan lewat, atau orang dalam situasi sensitif membawa kewajiban nyata. Kalau Anda tidak punya persetujuannya, memburamkan wajah adalah jawaban yang sederhana." },
    { q: "Apakah foto saya diunggah?", a: "Tidak. Seluruh prosesnya berjalan di canvas di dalam browser Anda — sangat penting di sini, karena foto yang diburamkan orang biasanya justru foto yang tidak semestinya melewati server siapa pun." },
  ],

  security:
    "Foto Anda tetap privat. Deteksi wajah maupun proses blur terjadi sepenuhnya di browser Anda — model open-source MediaPipe BlazeFace diunduh ke perangkat Anda dan dijalankan di sana, jadi tidak ada yang diunggah ke server kapan pun. Hasil sensornya permanen di file ekspor. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "389" },

  ui: {
    // BlurTool.tsx — module-scope TABS (translated at the render site)
    "Brush": "Kuas",
    "Shape": "Bentuk",
    "Text": "Teks",
    "Face": "Wajah",
    // face-detect / text-detect SENSITIVITY_LABELS
    "Low": "Rendah",
    "Recommended": "Disarankan",
    "High": "Tinggi",
    "Only very confident matches": "Hanya yang sangat yakin",
    "Balanced for most photos": "Seimbang untuk kebanyakan foto",
    "Catches more, may over-detect": "Menemukan lebih banyak, bisa berlebihan",
    "Only clearly legible text": "Hanya teks yang jelas terbaca",
    "Catches faint text, may over-detect": "Menemukan teks samar, bisa berlebihan",
    // Tesseract's own status strings (text tab)
    "Loading tesseract core": "Memuat mesin pengenal",
    "Initializing tesseract": "Menyalakan mesin",
    "Initialized tesseract": "Mesin siap",
    "Loading language traineddata": "Mengunduh model bahasa",
    "Loaded language traineddata": "Model bahasa termuat",
    "Initializing api": "Menyiapkan pengenalan",
    "Initialized api": "Pengenalan siap",
    "Recognizing text": "Mencari teks",
    // BlurTool.tsx
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "Couldn't read {name}.": "{name} tidak bisa dibaca.",
    // Joined with a space to the "in … images." half below.
    "Found 1 face": "Ditemukan 1 wajah",
    "Found {n} faces": "Ditemukan {n} wajah",
    "Found 1 piece of text": "Ditemukan 1 potongan teks",
    "Found {n} pieces of text": "Ditemukan {n} potongan teks",
    "in 1 image.": "di 1 gambar.",
    "in {n} images.": "di {n} gambar.",
    "No faces detected — try a higher sensitivity, or draw the areas by hand.":
      "Tidak ada wajah yang terdeteksi — coba sensitivitas yang lebih tinggi, atau tandai areanya secara manual.",
    "No text detected — try a higher sensitivity, or draw the areas by hand.":
      "Tidak ada teks yang terdeteksi — coba sensitivitas yang lebih tinggi, atau tandai areanya secara manual.",
    "Face detection couldn't start. You can still draw areas by hand.":
      "Deteksi wajah tidak bisa dimulai. Anda tetap bisa menandai area secara manual.",
    "Text detection couldn't start. You can still draw areas by hand.":
      "Deteksi teks tidak bisa dimulai. Anda tetap bisa menandai area secara manual.",
    "Ellipse": "Elips",
    "Rectangle": "Persegi panjang",
    // Layer names.
    "Brush {n}": "Kuas {n}",
    "Erase {n}": "Hapus {n}",
    "Add at least one area to censor.": "Tambahkan minimal satu area untuk disensor.",
    "Pick an effect — \"No blur\" leaves the image unchanged.":
      "Pilih efek — \"Tanpa blur\" membiarkan gambar tidak berubah.",
    "Exported 1 image.": "1 gambar berhasil diekspor.",
    "Exported {n} images.": "{n} gambar berhasil diekspor.",
    "Export failed.": "Ekspor gagal.",
    "Edit {name}": "Edit {name}", // i18n-same — «edit» is the Indonesian verb in every photo app
    "1 area": "1 area", // i18n-same — «area» is the Indonesian word too
    "{n} areas": "{n} area",
    "done": "selesai",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Seret untuk membuat area, klik untuk memilihnya, seret pegangannya untuk mengubah ukuran, tekan Delete untuk menghapus.",
    "1 area on this image.": "1 area di gambar ini.",
    "{n} areas on this image.": "{n} area di gambar ini.",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Blur settings": "Pengaturan blur",
    "Export": "Ekspor",
    "Exporting…": "Mengekspor…",
    "Censor Settings": "Pengaturan Sensor",
    "Censoring is baked into the exported file — all in your browser.":
      "Sensor tertanam permanen di file hasil ekspor — semuanya di browser Anda.",
    "Export {n} images": "Ekspor {n} gambar",
    "Export image": "Ekspor gambar",
    "Draw on the image to edit": "Coret di gambar untuk mengedit",
    "Add blur": "Tambah blur",
    "Brush size": "Ukuran kuas",
    "Brush fade": "Kelembutan kuas",
    "Undo stroke": "Batalkan goresan",
    "Clear all": "Hapus semua",
    "Remove erases from anything on the image, including a detected face — they share one mask.":
      "Mode Hapus menghapus blur dari apa pun di gambar, termasuk wajah yang terdeteksi — keduanya memakai satu mask yang sama.",
    "New area shape": "Bentuk area baru",
    "Ellipse follows the shape of a head more closely and looks less like a redaction box. Rectangle is better for signs, plates and documents.":
      "Elips lebih mengikuti bentuk kepala dan tidak terlalu terlihat seperti kotak sensor. Persegi panjang lebih cocok untuk papan nama, plat nomor, dan dokumen.",
    "Delete area": "Hapus area",
    "Drag on the image to draw an area, then move or resize it by its handles.":
      "Seret di gambar untuk membuat area, lalu pindahkan atau ubah ukurannya lewat pegangannya.",
    "Automatic text detection": "Deteksi teks otomatis",
    "Reads the image on your device to find writing - a licence plate, a door number, an address. Your photo is never uploaded, though the recognition engine itself downloads from a CDN the first time you use it.":
      "Membaca gambar di perangkat Anda untuk menemukan tulisan — plat nomor, nomor rumah, alamat. Foto Anda tidak pernah diunggah, walaupun mesin pengenalnya sendiri diunduh dari CDN saat pertama kali dipakai.",
    "Whole lines": "Baris utuh",
    "Single words": "Per kata",
    "Reading...": "Membaca…",
    "This image": "Gambar ini",
    "All {n}": "Semua ({n})",
    "The first run downloads the engine, so it takes a few seconds. Lines suits an address, words suits one field on a form. Pale text on a dark background is often missed — draw over that with Shape or Brush.":
      "Saat pertama dijalankan, mesinnya diunduh, jadi butuh beberapa detik. Baris cocok untuk alamat, kata cocok untuk satu kolom di formulir. Teks pucat di latar gelap sering terlewat — tutup secara manual dengan Bentuk atau Kuas.",
    "Automatic face detection": "Deteksi wajah otomatis",
    "Runs a face-detection model downloaded to your browser. Your photo is never uploaded — detection happens on your device.":
      "Menjalankan model deteksi wajah yang diunduh ke browser Anda. Foto Anda tidak pernah diunggah — deteksi terjadi di perangkat Anda.",
    "Detecting…": "Mendeteksi…",
    "Detected faces become normal areas — nudge, resize or delete any of them.":
      "Wajah yang terdeteksi menjadi area biasa — geser, ubah ukuran, atau hapus yang mana pun.",
    "Edit blur masks": "Edit mask blur",
    "Show": "Tampilkan",
    "Hide": "Sembunyikan",
    "Show {name}": "Tampilkan {name}",
    "Hide {name}": "Sembunyikan {name}",
    "Delete": "Hapus",
    "Delete {name}": "Hapus {name}",
    "Intensity": "Intensitas",
    "Block colour": "Warna blok",
    "{effect} keeps some of the original detail. For a face you want kept private, use Gaussian at a high intensity or Colour.":
      "Efek {effect} masih menyisakan sebagian detail asli. Untuk wajah yang harus tetap tersembunyi, pakai Gaussian dengan intensitas tinggi atau Warna solid.",
  },
};

export default content;
