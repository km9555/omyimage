import type { ToolPageContent } from "@/content/tools/types";
import converter from "@/content/tools/dpi-converter.id";

/** Indonesian copy for /id/cek-dpi-foto. */
const content: ToolPageContent = {
  toolId: "dpi-checker",
  locale: "id",
  name: "Cek DPI Foto",
  tagline:
    "Cek DPI gambar JPG, PNG, BMP, dan WEBP — lihat ukuran cetak setiap gambar dan ukuran terbesar yang masih tercetak tajam. Gratis, banyak gambar sekaligus, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Cek DPI Foto Online Gratis — DPI Checker | oMyImage",
  metaDescription:
    "Cek DPI gambar JPG, PNG, BMP, dan WEBP secara online dan gratis, lengkap dengan ukuran cetak dan ukuran tajam terbesar. Di browser, tanpa upload.",

  intro:
    "Sebelum mengirim gambar ke percetakan atau meng-upload-nya ke formulir yang meminta DPI tertentu, ada baiknya tahu apa yang sebenarnya tertulis di file. Cek DPI Foto dari oMyImage membaca resolusi yang tersimpan di setiap gambar, memberi tahu di mana resolusi itu disimpan, lalu mengubahnya menjadi angka yang penting: ukuran cetak gambar pada DPI tersebut, dan ukuran terbesar yang masih berkualitas foto. Tambahkan satu gambar atau satu folder; tidak ada yang keluar dari browser Anda.",

  sections: [
    {
      heading: "Apa yang ditampilkan",
      id: "what",
      body: [
        "Untuk setiap gambar Anda melihat ukuran piksel, DPI yang tersimpan di file, dan tempat DPI itu ditemukan — header JFIF atau data EXIF pada JPG, chunk pHYs pada PNG, header pada BMP, atau blok EXIF pada WEBP. Bila nilai horizontal dan vertikal berbeda, keduanya ditampilkan.",
        "Dari angka-angka itu, alat ini menghitung dua ukuran cetak dalam sentimeter dan inci: ukuran yang diminta file pada DPI tersimpannya, dan ukuran terbesar yang tercetak tajam pada 300 DPI, standar umum untuk foto dan dokumen.",
      ],
    },
    {
      heading: "Membaca hasilnya",
      id: "reading",
      body: [
        "Misalnya sebuah foto berukuran 2400 × 3000 piksel dan tersimpan pada 72 DPI. Hasilnya menunjukkan ukuran cetak sekitar 84,7 × 105,8 cm — yang akan dipakai program yang memercayai labelnya — dan ukuran tajam 20,3 × 25,4 cm pada 300 DPI. Angka kedua yang jujur: sebesar itulah batasnya sebelum pikselnya mulai terlihat.",
        "Kalau formulir atau percetakan meminta 300 DPI dan hasilnya menunjukkan nilai lain, ubah nilainya dengan Ubah DPI Foto. Kalau ukuran tajamnya lebih kecil dari ukuran yang Anda butuhkan, gambar itu butuh lebih banyak piksel, bukan label yang berbeda.",
      ],
    },
    {
      heading: "Saat gambar tidak punya DPI",
      id: "none",
      body: [
        "Banyak gambar tidak punya DPI sama sekali: GIF tidak pernah punya, banyak PNG dan screenshot juga tidak, dan sebagian JPG hanya menyimpan rasio piksel. Alat ini menyebutkannya dengan jelas. Program lalu memakai nilai bawaan — biasanya 72 atau 96 DPI — itulah sebabnya file yang sama bisa menunjukkan nilai berbeda di aplikasi berbeda.",
        "Tanpa nilai DPI bukan masalah untuk layar dan website. Itu hanya penting saat gambar dicetak atau dimasukkan ke dokumen, dan mengatur DPI cuma butuh sedetik.",
      ],
    },
    {
      heading: "Cek DPI di Windows dan Mac",
      id: "os",
      body: [
        "Di Windows, klik kanan gambar, pilih Properties (Properti), lalu buka tab Details (Detail): Horizontal resolution dan Vertical resolution menunjukkan DPI-nya. Di Mac, buka gambar di Preview, pilih Tools, lalu Show Inspector; tab pertama mencantumkan Image DPI. Keduanya membaca nilai tersimpan yang sama dengan alat ini, jadi angkanya seharusnya cocok.",
      ],
    },
    {
      heading: "DPI dan ukuran piksel sekaligus",
      id: "both",
      body: [
        "Sebagian persyaratan menggabungkan keduanya, misalnya pas foto 4 × 6 cm pada 300 DPI, artinya 472 × 709 piksel. Cek dulu ukuran piksel dan DPI di sini; bila salah satunya keliru, Ubah Ukuran Foto dalam cm membuat ukuran piksel yang tepat untuk sentimeter dan DPI yang Anda butuhkan sekaligus menyimpan DPI di file.",
      ],
    },
    {
      heading: "DPI foto dari HP",
      id: "phone",
      body: [
        "Foto dari HP hampir selalu tersimpan dengan 72 DPI, sehingga sering dianggap \"jelek untuk dicetak\". Padahal yang menentukan adalah jumlah piksel: foto kamera 12 MP berukuran 4000 × 3000 piksel tercetak tajam 33,9 × 25,4 cm pada 300 DPI — lebih besar dari kertas A4. Alat ini menunjukkan angka itu, dan label 72 DPI bisa diganti dalam sedetik bila diperlukan.",
      ],
    },
    {
      heading: "Sebelum cetak di studio foto",
      id: "before-print",
      body: [
        "Sebelum membawa file ke studio foto atau memesan cetak online, cek satu folder sekaligus: setiap file akan menunjukkan sampai ukuran berapa ia masih berkualitas foto. Jadi langsung ketahuan mana yang layak dicetak 4R (10,2 × 15,2 cm) dan mana yang sebaiknya dicetak lebih kecil.",
      ],
    },
  ],

  howToTitle: "Cara cek DPI foto",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau banyak gambar JPG, PNG, BMP, WEBP, atau GIF." },
    { title: "Baca hasilnya", description: "Setiap gambar menampilkan piksel, DPI tersimpan, lokasi penyimpanannya, dan ukuran cetaknya." },
    { title: "Ubah bila perlu", description: "Klik Ubah DPI untuk membawa gambar langsung ke alat Ubah DPI Foto." },
  ],

  features: [
    { icon: "info", title: "DPI dan lokasinya", description: "JFIF, EXIF, pHYs PNG, atau header BMP — dan keterangan jelas bila tidak ada." },
    { icon: "straighten", title: "Ukuran cetak", description: "Ukuran cetak setiap gambar dan ukuran tajam terbesar pada 300 DPI." },
    { icon: "lock", title: "Tidak ada upload", description: "File dibaca di browser Anda dan tidak pernah keluar dari perangkat." },
  ],

  faqs: [
    { q: "Bagaimana cara cek DPI foto?", a: "Tambahkan di sini. Alat ini menampilkan DPI yang tersimpan di file, lokasinya, dan ukuran cetaknya." },
    { q: "Kenapa gambar saya tidak punya DPI?", a: "GIF tidak pernah menyimpan DPI, begitu juga banyak PNG, screenshot, dan gambar web. Program lalu menganggapnya 72 atau 96 DPI." },
    { q: "Kenapa aplikasi berbeda menunjukkan DPI berbeda?", a: "Bila file tidak menyimpan DPI, atau menyimpan dua nilai yang tidak cocok, tiap aplikasi memakai nilai bawaannya sendiri atau membaca bagian lain." },
    { q: "Apakah 72 DPI jelek?", a: "Tidak untuk layar, yang mengabaikan DPI. Untuk cetak, yang penting adalah cukup tidaknya piksel untuk ukuran yang Anda butuhkan." },
    { q: "Seberapa besar gambar saya bisa dicetak tajam?", a: "Bagi jumlah piksel dengan 300 untuk mendapatkan inci. Alat ini menghitungnya dan menampilkan hasilnya juga dalam sentimeter." },
    { q: "Bisakah cek banyak gambar sekaligus?", a: "Bisa. Tambahkan semuanya; masing-masing mendapat hasilnya sendiri." },
    { q: "Bagaimana mengubah DPI setelah dicek?", a: "Klik Ubah DPI. Gambar Anda terbuka di alat Ubah DPI Foto, tempat Anda memilih nilai baru." },
    { q: "Apakah bisa membaca DPI WEBP atau BMP?", a: "Bisa, bila filenya menyimpan DPI: BMP di header-nya, WEBP di blok EXIF-nya." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. File dibaca sepenuhnya di browser Anda." },
  ],

  security:
    "Gambar Anda dibaca sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // DpiTool.tsx is shared with dpi-converter, and each route only has its own
  // tool's ui in scope — the checker reuses the converter's translations.
  ui: converter.ui,
};

export default content;
