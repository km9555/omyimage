import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-150kb (variant of compress-image, 150 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-150kb",
  locale: "id",
  name: "Kompres Foto 150 KB",
  tagline:
    "Kompres foto dan halaman tulisan tangan atau cetak ke bawah 150 KB — tulisan tetap terbaca, foto tetap jelas, banyak file sekaligus. Untuk portal dengan batas 150 KB. Gratis dan privat, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 150 KB Online — Foto dan Halaman Tulisan | oMyImage",
  metaDescription:
    "Kompres foto dan halaman tulisan tangan ke bawah 150 KB online gratis — tulisan tetap terbaca untuk portal dengan batas 150 KB. Sekaligus banyak, tanpa unggah.",

  intro:
    "150 KB adalah batas per file yang umum di sistem kampus dan sekolah, platform belajar online, dan portal pendaftaran — terutama ketika mahasiswa dan siswa mengunggah tugas atau lembar jawaban tulisan tangan halaman demi halaman. Ukuran ini cukup agar satu halaman tulisan tangan penuh tetap mudah dibaca dan foto potret tetap tajam. Tambahkan semua halaman sekaligus, dan masing-masing kembali sebagai JPG di bawah 150 KB dengan kualitas tertinggi yang muat.",

  sections: [
    {
      heading: "Halaman tulisan tangan",
      id: "handwritten",
      body: [
        "Di 150 KB, satu halaman A4 penuh menyimpan sekitar 1200 × 1700 piksel dengan kualitas baik: setiap baris tulisan terbaca di zoom biasa, termasuk gambar dan angka kecil. Alat ini menjaga kualitas setinggi yang diizinkan batas dan hanya memperkecil ukuran untuk halaman yang sangat padat.",
        "Foto setiap halaman dalam posisi datar, di bawah cahaya siang, tegak lurus dari atas, tanpa benda lain di bingkai. Halaman yang difoto miring terlihat memanjang, dan bayangan di kertas memakan byte sekaligus mengurangi keterbacaan.",
      ],
    },
    {
      heading: "Pensil tipis dan tinta muda",
      id: "faint",
      body: [
        "Pensil dan tinta biru muda kehilangan kontras di foto, dan kompresi menghapus garis yang tipis dan samar lebih dulu. Kalau bisa, menulislah dengan pulpen gelap. Kalau halamannya sudah ditulis, foto di cahaya siang yang terang dan merata, lalu pertimbangkan untuk mengubahnya menjadi hitam putih dengan alat Foto Hitam Putih sebelum dikompres — tanpa warna, lebih banyak ruang terpakai untuk garis tulisannya.",
      ],
    },
    {
      heading: "Banyak halaman secara berurutan",
      id: "pages",
      body: [
        "Tambahkan semua halaman bersamaan; masing-masing dikompres ke bawah 150 KB dan bisa diunduh sekaligus dalam ZIP. Beri nama foto sesuai urutan halaman sebelum ditambahkan — hal-01, hal-02, dan seterusnya — agar file kembali dalam urutan yang diharapkan portal.",
        "Kalau portal meminta satu PDF dengan batas 150 KB untuk seluruh file, beri batas lebih kecil per halaman di sini — sekitar 50 KB per halaman untuk tiga halaman — lalu gabungkan dengan Foto ke PDF.",
      ],
    },
    {
      heading: "Foto di 150 KB",
      id: "photos",
      body: [
        "Untuk foto, 150 KB termasuk longgar: foto potret menyimpan sekitar 900 × 1200 piksel dengan kualitas tinggi, cukup untuk profil, kartu identitas, atau data pegawai. Tidak perlu persiapan apa pun selain memotong bagian yang tidak ingin ada di foto.",
      ],
    },
    {
      heading: "Untuk tugas dan ujian online",
      id: "assignments",
      body: [
        "Saat mengunggah tugas atau lembar jawaban, periksa dulu semua halaman sebelum mengirim: tidak ada yang terlewat, tidak ada yang terbalik, dan baris terakhir di bagian bawah kertas masih terbaca. Kalau satu halaman terlalu pucat atau buram, foto ulang halaman itu saja lalu kompres lagi — halaman lain tidak perlu diulang.",
      ],
    },
    {
      heading: "Aplikasi pemindai HP dan foto biasa",
      id: "scanner-apps",
      body: [
        "Aplikasi pemindai dokumen — yang sudah ada di aplikasi catatan atau file di HP, atau aplikasi lain — menemukan tepi halaman, meluruskannya, dan menaikkan kontras sehingga kertas menjadi putih dan tulisan gelap. Untuk halaman tulisan tangan, ini titik awal terbaik: hasil pindaian yang bersih muat di 150 KB dengan setiap baris tetap tajam.",
        "Banyak aplikasi pemindai menyimpan sebagai PDF secara bawaan. Pilih JPG saat mengekspor, atau ambil screenshot setiap halaman, lalu kompres gambarnya di sini. Foto biasa juga bisa; hanya perlu cahaya siang yang baik dan sudut tegak lurus dari atas agar sebersih hasil pindaian.",
        "Cara mana pun yang Anda pakai, periksa halaman pertama di ukuran sebenarnya sebelum mengerjakan sisanya: kalau halaman itu mudah dibaca di 150 KB, halaman lain juga akan terbaca.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 150 KB",
  steps: [
    { title: "Tambahkan halaman atau foto", description: "Pilih atau letakkan, sesuai urutan kalau berupa halaman — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 150 KB", description: "Batas 150 KB sudah diatur; setiap file dikompres sampai muat." },
    { title: "Unduh", description: "Unduh file satu per satu atau semuanya dalam ZIP." },
  ],

  features: [
    { icon: "edit_note", title: "Tulisan tetap terbaca", description: "Halaman penuh menyimpan cukup piksel untuk setiap baris, angka, dan gambar." },
    { icon: "folder_zip", title: "Satu tugas utuh", description: "Banyak halaman dikompres sekaligus dan diunduh bersama." },
    { icon: "lock", title: "Privat", description: "Halaman dan foto Anda tidak pernah meninggalkan browser." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 150 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 150 KB sudah diatur. Anda mendapat JPG di bawah 150 KB dengan kualitas terbaik yang muat." },
    { q: "Apakah tulisan tangan masih terbaca di 150 KB?", a: "Ya. Satu halaman penuh menyimpan sekitar 1200 × 1700 piksel, cukup untuk membaca tulisan biasa di zoom biasa." },
    { q: "Bagaimana mengunggah beberapa halaman tulisan tangan di bawah 150 KB per file?", a: "Tambahkan semua halaman bersamaan; masing-masing kembali di bawah 150 KB. Beri nama foto sesuai urutan halaman dulu agar urutannya tetap." },
    { q: "Pensil atau pulpen — mana yang lebih baik?", a: "Pulpen gelap. Garis pensil tampak samar di foto dan hilang lebih dulu saat file dikompres." },
    { q: "Bisakah membuat satu PDF dari semua halaman di bawah 150 KB?", a: "Bisa: beri setiap halaman batas yang lebih kecil di sini supaya totalnya di bawah 150 KB, lalu gabungkan dengan Foto ke PDF." },
    { q: "Seberapa besar foto di 150 KB?", a: "Sekitar 900 × 1200 piksel dengan kualitas tinggi — lebih dari cukup untuk profil dan kartu identitas." },
    { q: "Apakah 150 KB sama dengan 0,15 MB?", a: "Ya, 150 KB adalah 150.000 byte. File juga lolos di portal yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Bagaimana kalau satu halaman terlihat pucat?", a: "Foto ulang halaman itu di cahaya siang yang terang tanpa bayangan, lalu kompres lagi; kalau perlu, ubah dulu menjadi hitam putih." },
    { q: "Bisakah memakai aplikasi pemindai HP untuk halamannya?", a: "Bisa — justru itu cara terbaik. Ekspor halaman sebagai JPG (atau ambil screenshot), bukan PDF, lalu kompres di sini masing-masing ke bawah 150 KB." },
  ],

  security:
    "Halaman dan foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
