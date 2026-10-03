import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/putar-foto.
 *
 * Measured (Indonesia, per month): putar foto 320, KD 0 — small, but the job
 * behind it is common: a photo of a KTP, ijazah or form that looks upright on
 * the phone and arrives SIDEWAYS on an upload portal. That is the EXIF
 * orientation problem, and the first section explains it in those terms.
 *
 * "Flip H" / "Flip V" follow image-editor.id.ts («Balik H», «Balik V»).
 *
 * No "auto-orient" option: RotateTool has no such control — it rasterizes
 * with autoOrient:false and applies one rotation to the whole batch — so this
 * page says to group photos by direction instead. The English page and the
 * pt/hi/ru twins once promised one; they were corrected to match this page.
 */
const content: ToolPageContent = {
  toolId: "rotate-image",
  locale: "id",
  name: "Putar Foto",
  tagline:
    "Putar dan balik gambar JPG, PNG, WEBP, dan GIF secara online — per 90° atau sudut berapa pun, dengan pratinjau langsung dan banyak foto sekaligus. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Putar Foto Online Gratis — Rotate & Balik Gambar | oMyImage",
  metaDescription:
    "Putar foto online gratis: per 90°, sudut berapa pun, atau balik horizontal dan vertikal — dan perbaiki foto yang miring saat diunggah. Sekaligus banyak, di browser, tanpa daftar.",

  intro:
    "Tegakkan foto yang miring ke samping, atau putar grafis ke sudut yang tepat. Alat Putar Foto ini memungkinkan Anda memutar gambar per 90°, membaliknya, atau mengatur sudut berapa pun dengan pratinjau langsung — satu foto atau banyak sekaligus. Pilih format hasil dan warna latarnya, lalu unduh. Semuanya terjadi di browser Anda, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Foto yang miring saat diunggah: masalah orientasi EXIF",
      id: "exif",
      body: [
        "Alasan paling umum sebuah foto tampil miring bukan karena salah memotret — melainkan karena kamera memang menyimpannya menyamping. Sensor ponsel punya orientasi tetap, jadi saat ponsel diputar, sensornya tidak ikut berputar. Alih-alih menulis ulang pikselnya, kamera mencatat tag orientasi EXIF yang memberi tahu penampil cara memutar gambar sebelum ditampilkan.",
        "Cara itu bekerja sempurna sampai gambarnya bertemu perangkat lunak yang mengabaikan tag tersebut. Sebagian portal unggah, sistem manajemen konten lama, beberapa aplikasi email, dan banyak perangkat lunak buatan sendiri membaca piksel mentahnya dan menampilkan foto yang rebah ke samping. Foto KTP atau ijazah yang tegak di galeri ponsel pun bisa tiba dalam posisi miring di formulir pendaftaran. Yang menjengkelkan, foto itu terlihat benar di ponsel dan di laptop, jadi masalahnya baru ketahuan setelah terunggah.",
        "Memutar dengan alat ini menuliskan orientasinya ke dalam piksel itu sendiri dan menghapus tag-nya, sehingga tidak ada lagi yang ambigu. Setiap penampil menunjukkan hal yang sama, karena tidak ada lagi yang perlu ditafsirkan.",
      ],
    },
    {
      heading: "Putaran siku-siku tidak mengurangi kualitas",
      id: "lossless",
      body: [
        "Memutar gambar 90, 180, atau 270 derajat memindahkan setiap piksel ke posisi baru tanpa mengubah nilainya. Tidak ada interpolasi, jadi tidak ada pelunakan dan tidak ada biaya kualitas sama sekali — gambar yang diputar sama tajamnya dengan aslinya. Hal yang sama berlaku untuk membalik horizontal dan vertikal.",
        "Sudut bebas berbeda. Memutar 3 derajat berarti sebagian besar piksel hasil jatuh di antara piksel asli, jadi nilainya harus diinterpolasi dari tetangganya. Efeknya sangat kecil untuk koreksi kecil, tetapi nyata, dan menumpuk kalau file yang sama diputar berulang kali. Luruskan sekali, dari foto aslinya, bukan menggesernya satu derajat demi satu derajat di beberapa kesempatan.",
      ],
    },
    {
      heading: "Meluruskan cakrawala yang miring",
      id: "straighten",
      body: [
        "Cakrawala yang miring adalah cacat yang langsung dirasakan mata tanpa bisa disebutkan, dan biasanya hanya meleset satu atau dua derajat. Koreksi kecil membuat perbedaan besar pada kesan foto yang digarap dengan cermat.",
        "Karena memutar dengan sudut bebas membuat persegi panjang berputar di dalam bingkainya, sudut-sudutnya tidak lagi mencapai tepi dan tersisa celah berbentuk segitiga. Celah itu diisi warna latar yang Anda pilih. Dalam praktiknya kebanyakan orang meng-crop sedikit ke dalam sesudahnya untuk membuangnya, yang mengorbankan sedikit bingkai — jadi kalau Anda tahu fotonya miring, sisakan sedikit ruang di sekitar objek saat memotret.",
      ],
    },
    {
      heading: "Memutar banyak foto sekaligus",
      id: "batch",
      body: [
        "Dokumen yang di-scan dengan posisi terbalik, serangkaian foto yang diambil dengan ponsel dimiringkan, sekumpulan foto produk yang semuanya perlu diputar seperempat putaran — itulah kasus biasa untuk menerapkan satu putaran ke banyak file sekaligus.",
        "Putaran dan pembalikan berlaku sama untuk setiap foto dalam satu kumpulan. Kalau fotonya perlu koreksi yang berbeda-beda, kelompokkan dulu menurut arahnya — yang miring ke kiri dalam satu kumpulan, yang ke kanan di kumpulan lain — lalu proses tiap kelompok sekali jalan. Semuanya berjalan di browser Anda dan kembali sebagai satu ZIP.",
      ],
    },
  ],

  howToTitle: "Cara memutar foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Putar atau balik", description: "Pakai tombol 90°, balik horizontal atau vertikal, atau atur sudut berapa pun dengan penggeser." },
    { title: "Putar & unduh", description: "Pilih format hasil lalu klik Putar — satu foto langsung terunduh, beberapa foto dalam satu ZIP." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Putar & balik", description: "Putar gambar ke kiri atau kanan per 90°, balik horizontal atau vertikal, atau atur sudut berapa pun dari 0–359°." },
    { icon: "burst_mode", title: "Banyak foto sekaligus", description: "Terapkan putaran yang sama ke banyak gambar sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "palette", title: "Format & latar", description: "Ekspor sebagai JPG, PNG, atau WEBP, dan pilih latar transparan, putih, hitam, atau warna kustom untuk sudut yang miring." },
  ],

  faqs: [
    { q: "Bisakah memutar dengan sudut tertentu?", a: "Bisa. Pakai tombol 90° untuk putaran cepat, atau penggeser sudut untuk nilai berapa pun dari 0 sampai 359 derajat." },
    { q: "Untuk apa pilihan latar?", a: "Saat Anda memutar dengan sudut yang bukan kelipatan 90°, sudut-sudut gambar menjadi kosong. Latar mengisinya — transparan (PNG/WEBP), putih, hitam, atau warna kustom." },
    { q: "Bisakah banyak gambar diputar sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau; putaran dan pembalikan yang sama berlaku untuk semuanya, dan beberapa file diunduh bersama dalam satu ZIP." },
    { q: "Apakah memutar menurunkan kualitas?", a: "Putaran 90° dan 180° tidak menurunkan kualitas. Untuk sudut lain, atau saat mengekspor ke JPG, Anda bisa mengatur kualitasnya. PNG/WEBP tetap tajam." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap gambar diputar secara lokal di browser Anda." },
    { q: "Kenapa foto KTP saya jadi miring saat diunggah ke formulir?", a: "Karena kamera menyimpan foto sesuai orientasi sensornya dan menambahkan tag EXIF yang memberi tahu cara menampilkannya. Galeri ponsel membaca tag itu; sebagian formulir online tidak, lalu menampilkan gambar mentahnya yang miring. Putar fotonya di sini sampai tegak, lalu unggah ulang — orientasinya kini tertanam di piksel." },
    { q: "Kenapa foto saya tampil miring di sebagian perangkat tetapi tidak di yang lain?", a: "Karena kamera menyimpan gambar dalam orientasi sensornya dan menambahkan tag EXIF yang menyatakan sisi mana yang di atas. Perangkat lunak yang membaca tag menampilkannya dengan benar; yang mengabaikannya menampilkan gambar mentah yang menyamping. Memutar di sini menanamkan orientasi yang benar ke piksel, sehingga semua penampil sepakat." },
    { q: "Bagaimana kalau setiap foto perlu putaran yang berbeda?", a: "Satu putaran berlaku untuk semua foto dalam satu kumpulan. Kelompokkan foto menurut arah miringnya — misalnya semua yang perlu diputar ke kanan — dan proses tiap kelompok secara terpisah." },
    { q: "Apakah membalik foto mengubah kualitasnya?", a: "Tidak. Membalik horizontal dan vertikal, seperti putaran 90° dan 180°, hanya menyusun ulang piksel yang ada — tidak ada yang dihitung ulang, jadi hasilnya identik piksel demi piksel dengan aslinya dalam hal kualitas." },
    { q: "Bisakah satu folder diputar sekaligus?", a: "Bisa. Terapkan putaran yang sama ke banyak file sekaligus; semuanya kembali sebagai satu ZIP." },
  ],

  security:
    "Foto Anda tetap privat. Pemutaran terjadi sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "596" },

  ui: {
    // RotateTool.tsx
    "Rotated 1 image.": "1 gambar berhasil diputar.",
    "Rotated {n} images.": "{n} gambar berhasil diputar.",
    "Rotation failed.": "Gagal memutar.",
    "or drop JPG, PNG, WEBP or GIF images here": "atau letakkan gambar JPG, PNG, WEBP, atau GIF di sini",
    "Rotated in your browser — your images never leave your device.":
      "Diputar di browser Anda — gambar Anda tidak pernah meninggalkan perangkat.",
    "Rotate & flip": "Putar & balik",
    "Rotate": "Putar",
    "Rotating…": "Memutar…",
    "Rotation preview": "Pratinjau putaran",
    // `{t("Preview of")} <b>{filename}</b>` — label form, like "Live preview of".
    "Preview of": "Pratinjau",
    "— the same transform applies to all {n} images.": "— putaran yang sama diterapkan ke semua {n} gambar.",
    "Transform Settings": "Pengaturan Putaran",
    "90° steps straighten; the angle slider gives a custom tilt.":
      "Langkah 90° menegakkan foto; penggeser sudut memberi kemiringan bebas.",
    "Rotate {n} images": "Putar {n} gambar",
    "Rotate & download": "Putar & unduh",
    "Transform": "Putaran",
    "Flip horizontal": "Balik horizontal",
    "Flip vertical": "Balik vertikal",
    "Flip H": "Balik H",
    "Flip V": "Balik V",
    "Angle": "Sudut",
    "Format": "Format", // i18n-same — the Indonesian word is the same
    "Background (for angled corners)": "Latar (untuk sudut yang miring)",
    // FORMATS (module scope, §4.2)
    "Same as original": "Sama seperti aslinya",
  },
};

export default content;
