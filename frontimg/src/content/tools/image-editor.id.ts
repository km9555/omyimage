import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/editor-foto.
 *
 * Measured (Indonesia, per month): editor foto 135,000 (KD 48 — one of the few
 * contested terms in the locale) · edit foto online 27,100. The name and slug
 * are «Editor Foto»; the title carries both phrasings.
 *
 * «tanpa aplikasi» (without an app) is how Indonesians qualify this search —
 * most editing here happens on a phone, and the alternative being avoided is
 * installing one more app. The intro says it.
 *
 * Two toolbar-label traps, both handled in `ui`:
 *   • "Draw" is NOT «Gambar», because «gambar» is also the word for image —
 *     a strip reading "Gambar" next to image controls is ambiguous. «Coret»
 *     (doodle) is what Indonesian photo apps put there.
 *   • The "Gray" TOOL and the "B&W" filter PRESET sit in the same panel. The
 *     Russian locale shipped both as «Ч/Б» once — identical labels on two  i18n-charset-ok
 *     controls, invisible in a key list. Here they are «Abu-abu» and
 *     «Hitam Putih».
 */
const content: ToolPageContent = {
  toolId: "image-editor",
  locale: "id",
  name: "Editor Foto",
  tagline:
    "Edit foto online di satu tempat — crop, ubah ukuran, putar, atur warna, filter, blur, bingkai, bulatkan, watermark, dan coret, dengan undo/redo. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Editor Foto Online Gratis — Edit Foto Tanpa Aplikasi | oMyImage",
  metaDescription:
    "Editor foto online gratis: crop, putar, atur kecerahan, filter, blur, bingkai, watermark, dan coret di satu kanvas, dengan undo/redo. Langsung di browser, tanpa aplikasi dan tanpa daftar.",

  intro:
    "Satu editor untuk semuanya, tanpa perlu instal aplikasi. Editor Foto ini menyatukan crop, ubah ukuran, putar dan balik, pengaturan warna dan filter, hitam putih, blur, bingkai, crop bulat, watermark teks dan logo, serta coretan tangan dalam satu kanvas. Terapkan editan dalam urutan apa pun, batalkan dan ulangi sesuka hati, lalu simpan sekali saat selesai. Semuanya berjalan di browser Anda, jadi foto Anda tetap sepenuhnya privat.",

  sections: [
    {
      heading: "Editan yang benar-benar dibutuhkan",
      id: "scope",
      body: [
        "Kebanyakan edit foto bukanlah retouching. Isinya meluruskan foto yang miring, meng-crop tepi yang mengganggu, mengubah ukuran agar lolos batas upload, menggambar panah di tangkapan layar, atau mencerahkan foto yang diambil di ruangan redup. Pekerjaan seperti itu punya dua kesamaan: selesai dalam kurang dari satu menit, dan tidak sebanding dengan membuka aplikasi profesional.",
        "Celah itulah yang diisi editor ini. Semuanya ada di satu kanvas, jadi Anda bisa crop, memutar, mengatur warna, dan memberi catatan tanpa berpindah alat atau menyimpan di tengah jalan. Setelah selesai, satu kali simpan memberi Anda file jadinya.",
        "Editor ini memang sengaja bukan pengganti Photoshop. Tidak ada layer, mask, atau blend mode, karena menambahkannya justru akan memperlambat sembilan puluh persen editan yang tidak pernah membutuhkannya.",
      ],
    },
    {
      heading: "Urutan kerja yang masuk akal",
      id: "order",
      body: [
        "Komposisi lebih dulu: crop dan luruskan sebelum yang lain, supaya langkah berikutnya hanya bekerja pada piksel yang akan Anda pertahankan. Mengatur kecerahan bagian yang akan dibuang adalah kerja sia-sia, dan crop setelah mengubah ukuran membuang resolusi yang sengaja Anda simpan.",
        "Pengaturan warna berikutnya — kecerahan, kontras, saturasi — selagi Anda masih bisa menilai seluruh foto. Lalu catatan dan coretan, karena panah dan kotak harus berada di posisi akhirnya terhadap bingkai yang tidak akan berubah lagi.",
        "Ubah ukuran paling akhir, tepat sebelum menyimpan. Dengan begitu coretan hanya diskalakan sekali, di akhir, bukan digambar di satu ukuran lalu dijejalkan ke ukuran lain. Keluhan yang sering muncul adalah teks yang terlihat pas di kanvas tetapi tidak terbaca di file hasil, dan hampir selalu penyebabnya adalah mengubah ukuran setelah memberi catatan.",
      ],
    },
    {
      heading: "Memberi catatan di tangkapan layar",
      id: "annotation",
      body: [
        "Menggambar di tangkapan layar adalah salah satu alasan paling umum orang membuka editor — menandai bug untuk developer, menunjuk sebuah pengaturan saat membalas pertanyaan, atau menyorot satu klausul di dokumen.",
        "Dua hal membuat catatan berhasil. Pertama, kontras: panah merah hilang di atas banner error yang merah, jadi pilih warna yang berlawanan dengan tampilannya, bukan yang sewarna. Kedua, secukupnya: tiga panah dan satu kotak sudah menyampaikan maksud; lima belas coretan tidak.",
        "Simpan tangkapan layar sebagai PNG, bukan JPG. Tangkapan layar hampir seluruhnya berupa tepi tajam dan teks kecil — jenis konten yang paling buruk ditangani JPG. Hasilnya ada bayangan samar di sekitar setiap huruf, dan filenya sering tidak lebih kecil.",
      ],
    },
    {
      heading: "Tidak ada yang keluar dari perangkat Anda",
      id: "privacy",
      body: [
        "Seluruh editor berjalan di kanvas HTML di dalam tab browser Anda. Foto dibaca dari penyimpanan ke memori, diedit di sana, lalu ditulis kembali saat Anda menyimpan — tidak pernah diunggah, dan tidak ada salinan di server yang bisa tersimpan atau bocor.",
        "Hal itu lebih penting dari kedengarannya, mengingat apa yang biasanya diedit orang. Tangkapan layar berisi alamat email, nomor rekening, dasbor internal, dan tab yang sedang terbuka. Foto dokumen untuk diunggah berisi semua yang ada di dokumen itu. Mengerjakannya secara lokal berarti pertanyaan siapa lagi yang punya salinannya tidak pernah muncul.",
        "Efek sampingnya yang praktis: setelah halaman termuat, editor tetap berfungsi tanpa koneksi internet.",
      ],
    },
  ],

  howToTitle: "Cara edit foto online",
  steps: [
    { title: "Buka foto", description: "Pilih foto, atau seret dan lepas ke editor." },
    { title: "Pilih alat", description: "Klik ikon mana pun di bilah alat — crop, putar, warna, blur, bingkai, bulat, watermark, atau coret — dan atur opsinya dengan pratinjau langsung." },
    { title: "Terapkan & ulangi", description: "Terapkan setiap editan untuk menumpuk perubahan, lengkap dengan undo/redo, lalu sambung dengan alat sebanyak yang Anda mau." },
    { title: "Simpan", description: "Unduh foto akhirnya sebagai PNG, JPG, atau WEBP." },
  ],

  features: [
    { icon: "dashboard_customize", title: "Semua alat di satu tempat", description: "Crop, ubah ukuran, putar, balik, atur warna, filter, hitam putih, blur, bingkai, bulatkan, watermark, dan coret — tanpa meninggalkan halaman." },
    { icon: "history", title: "Undo & redo", description: "Terapkan editan satu per satu dan mundur atau maju dengan bebas, atau kembali ke foto asli kapan saja." },
    { icon: "lock", title: "100% privat", description: "Seluruh editor berjalan di browser Anda dengan kanvas HTML — foto Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Apa saja yang bisa dilakukan di editor ini?", a: "Crop dan ubah ukuran, putar dan balik, atur kecerahan/kontras/saturasi/rona dengan preset filter, hitam putih, blur, tambah bingkai, bulatkan jadi lingkaran, tambah watermark teks atau logo, dan coret atau beri catatan — semuanya pada satu foto." },
    { q: "Bisakah membatalkan perubahan?", a: "Bisa. Setiap editan yang diterapkan masuk ke riwayat yang bisa di-undo dan di-redo, dan Anda bisa kembali ke foto asli kapan saja." },
    { q: "Apakah kualitasnya akan turun?", a: "Editan disusun di kanvas beresolusi penuh. Simpan sebagai PNG untuk hasil tanpa kehilangan kualitas, atau JPG/WEBP dengan slider kualitas." },
    { q: "Apakah perlu instal atau daftar?", a: "Tidak. Ini editor online gratis yang berjalan sepenuhnya di browser Anda — tanpa daftar, tanpa instalasi, dan foto Anda tidak pernah meninggalkan perangkat." },
    { q: "Apakah benar-benar privat?", a: "Ya. Semua pengeditan terjadi secara lokal di browser Anda; tidak ada yang diunggah atau disimpan." },
    { q: "Apakah perlu aplikasi tambahan di ponsel?", a: "Tidak. Editor ini berjalan di browser yang sudah Anda punya, di Windows, macOS, Linux, Android, dan iOS. Tidak ada yang perlu diunduh, tidak perlu akun, dan tidak ada langganan — itulah intinya, karena kebanyakan editan yang dibutuhkan orang selesai dalam kurang dari satu menit dan tidak sebanding dengan memasang aplikasi foto lagi." },
    { q: "Bagaimana dibandingkan dengan Photoshop?", a: "Tidak sebanding, dan memang tidak berusaha menyaingi. Di sini tidak ada layer, mask, curves, atau blend mode. Yang dicakup adalah kumpulan operasi yang mewakili sebagian besar editan sehari-hari — crop, putar, ubah ukuran, atur warna, beri catatan, simpan — tanpa waktu tunggu membuka aplikasi dan tanpa lisensi." },
    { q: "Apakah mengedit mengubah file asli saya?", a: "Tidak. Foto dimuat ke memori dan semuanya dikerjakan pada salinan — tidak ada yang tersimpan sampai Anda menyimpannya, dan file di penyimpanan Anda tidak pernah disentuh. Coretan juga bisa dihapus tanpa mengganggu editan lainnya." },
    { q: "Format apa saja yang bisa dibuka dan disimpan?", a: "Buka JPG, PNG, WEBP, GIF, dan BMP; simpan sebagai JPG, PNG, atau WEBP. GIF animasi terbuka sebagai frame pertamanya, karena editor ini bekerja pada satu gambar diam." },
    { q: "Apakah mengedit menurunkan kualitas foto?", a: "Crop, memutar dengan sudut siku-siku, dan membalik semuanya tanpa kehilangan kualitas. Memperkecil ukuran pada dasarnya juga tanpa kehilangan kualitas. Satu-satunya tempat kualitas dipertaruhkan adalah saat menyimpan, jadi pilih PNG atau WEBP kalau ingin semuanya persis, atau JPG dengan kualitas tinggi kalau ingin file yang lebih kecil." },
    { q: "Apakah bisa dipakai di ponsel?", a: "Bisa. Tampilannya menyesuaikan layar kecil dan kanvasnya merespons sentuhan, jadi crop dan mencoret bisa dilakukan dengan jari. Foto yang sangat besar dibatasi oleh memori yang diberikan ponsel Anda kepada browser, bukan oleh alatnya." },
  ],

  security:
    "Foto Anda tetap privat. Seluruh editor berjalan di browser Anda dengan kanvas HTML — tidak ada yang diunggah ke server. Tanpa penyimpanan, tanpa pelacakan file Anda.",

  rating: { value: "4.9", count: "612" },

  ui: {
    "Please select an image file.": "Pilih file gambar.",
    "Couldn't read that image.": "Gambar itu tidak bisa dibaca.",
    "Applied.": "Diterapkan.",
    "Couldn't apply that edit.": "Editan itu tidak bisa diterapkan.",
    "Exported your edited image.": "Foto hasil edit berhasil disimpan.",
    "Export failed.": "Gagal menyimpan.",
    "Couldn't read that logo.": "Logo itu tidak bisa dibaca.",
    "Open an image": "Buka foto",
    "or drop a JPG, PNG, WEBP or GIF to start editing":
      "atau lepas JPG, PNG, WEBP, atau GIF untuk mulai mengedit",
    "Drag the box or its corners to set the crop, then Apply.":
      "Seret kotak atau sudutnya untuk menentukan crop, lalu klik Terapkan.",
    "Draw on the image, then Apply to bake it in.":
      "Coret di atas foto, lalu klik Terapkan untuk menyatukannya.",
    "Live preview — adjust on the right, then Apply.":
      "Pratinjau langsung — atur di sebelah kanan, lalu klik Terapkan.",
    "Watermark": "Watermark", // i18n-same — the loanword is the Indonesian word
    "Editor": "Editor", // i18n-same
    "Export image": "Simpan foto",
    "Export": "Simpan",
    "Left": "Kiri",
    "Right": "Kanan",
    // 11px labels under a flip icon; the full phrase is on the aria-label.
    "Flip H": "Balik H",
    "Flip V": "Balik V",
    "Fine angle": "Sudut halus",
    "Width": "Lebar",
    "Height": "Tinggi",
    "Lock aspect ratio": "Kunci rasio",
    "Intensity": "Intensitas",
    "Blur strength": "Kekuatan blur",
    "Thickness": "Ketebalan",
    "Corner rounding": "Sudut membulat",
    "Border color": "Warna bingkai",
    "Ring thickness": "Ketebalan cincin",
    "Ring color": "Warna cincin",
    "Text": "Teks",
    "Logo": "Logo", // i18n-same
    "Size": "Ukuran",
    "Text color": "Warna teks",
    "Change logo": "Ganti logo",
    "Upload logo": "Unggah logo",
    "Logo size": "Ukuran logo",
    "Opacity": "Opasitas",
    "Position": "Posisi",
    "Text to stamp": "Teks yang ditempel",
    "Label": "Label", // i18n-same
    "Color": "Warna",
    "Stroke / size": "Garis / ukuran",
    "Clear drawing": "Hapus coretan",
    "Undo": "Batalkan",
    "Redo": "Ulangi",
    "Revert to original": "Kembali ke asli",
    "Change": "Ganti",
    "JPG background": "Latar JPG",
    // Tool-strip labels: single short words in a narrow strip.
    "Crop": "Crop", // i18n-same — "crop foto" is what Indonesians type
    "Rotate": "Putar",
    "Resize": "Ukuran",
    "Adjust": "Warna",
    // «Abu-abu», NOT «Hitam Putih» — the B&W filter preset below takes that
    // label, and the two sit in the same panel (see the header comment).
    "Gray": "Abu-abu",
    "Blur": "Blur", // i18n-same — the loanword wins: "blur foto" 14,800/mo
    "Border": "Bingkai",
    "Round": "Bulat",
    "Mark": "Tanda",
    // «Coret», NOT «Gambar», which also means "image" (header comment).
    "Draw": "Coret",
    "Vivid": "Cerah",
    "B&W": "Hitam Putih",
    "Sepia": "Sepia", // i18n-same
    "Cool": "Dingin",
    "Warm": "Hangat",
    "Brightness": "Kecerahan",
    "Contrast": "Kontras",
    "Saturation": "Saturasi",
    "Hue": "Rona",
    "Sans": "Sans", // i18n-same — typeface class names designers use as-is
    "Serif": "Serif", // i18n-same
    "Impact": "Impact", // i18n-same — the font's own name
    "Mono": "Mono", // i18n-same
    "Pen": "Pena",
    "Line": "Garis",
    "Arrow": "Panah",
    "Rectangle": "Kotak",
    "Ellipse": "Elips",
    "Top left": "Kiri atas",
    "Top center": "Tengah atas",
    "Top right": "Kanan atas",
    "Middle left": "Kiri tengah",
    "Center": "Tengah",
    "Middle right": "Kanan tengah",
    "Bottom left": "Kiri bawah",
    "Bottom center": "Tengah bawah",
    "Bottom right": "Kanan bawah",
  },
};

export default content;
