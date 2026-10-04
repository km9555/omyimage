import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-20kb (variant of compress-image, 20 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-20kb",
  locale: "id",
  name: "Kompres Foto 20 KB",
  tagline:
    "Kompres foto atau tanda tangan sampai di bawah 20 KB — batas yang sering dipakai formulir online untuk tanda tangan dan foto kecil. JPG tajam, sekaligus banyak, tanpa upload.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 20 KB Online — Foto & Tanda Tangan, Gratis | oMyImage",
  metaDescription:
    "Kompres foto atau tanda tangan sampai di bawah 20 KB secara online dan gratis. JPG tajam yang lolos batas formulir pendaftaran, banyak file sekaligus, di browser Anda.",

  intro:
    "Dua puluh kilobyte adalah batas paling ketat yang biasanya ditemui orang, dan hampir selalu datang dari formulir pendaftaran: scan tanda tangan, cap jempol, atau foto kecil untuk ujian, rekrutmen, atau bank. Foto tanda tangan dari kamera ponsel biasanya 2–4 MB — seratus kali lebih besar dari yang diizinkan. Halaman ini membawa JPG, PNG, atau WEBP apa pun ke bawah 20 KB dalam satu langkah, setajam yang dimungkinkan ruang sekecil itu, dan bisa memproses semua dokumen Anda sekaligus.",

  sections: [
    {
      heading: "Batas 20 KB terutama untuk tanda tangan",
      id: "signatures",
      body: [
        "Banyak formulir online — pendaftaran ujian, rekrutmen kerja, pembukaan rekening, sampai pendaftaran kampus — meminta scan tanda tangan, biasanya dengan batas sekitar 20 KB dan berbentuk persegi panjang yang lebar dan pendek. Batasnya kecil karena tanda tangan hanya berisi sedikit informasi: goresan gelap di atas latar polos.",
        "Karena itu pula tanda tangan paling mudah dikompres dengan baik. Tanda tangan yang bersih muat di 20 KB dengan kualitas tinggi dan ukuran yang jauh lebih besar daripada yang ditampilkan formulir. Kalau hasil Anda buram atau bernoda, masalahnya hampir selalu di foto aslinya, bukan di kompresinya — lihat bagian berikut.",
      ],
    },
    {
      heading: "Cara mendapatkan tanda tangan bersih di bawah 20 KB",
      id: "clean-signature",
      body: [
        "Tanda tangani dengan pulpen hitam atau biru tua di atas kertas putih polos, lalu foto di bawah cahaya siang tanpa bayangan ponsel dan tanpa flash. Bayangan dan kertas yang agak abu-abu adalah musuh utamanya: JPG menghabiskan sebagian besar 20 KB untuk menggambarkan bayangan latar, bukan goresan Anda.",
        "Potong rapat di sekeliling tanda tangan sebelum mengompres — alat Crop Foto bisa melakukannya dalam beberapa detik — supaya file tidak menghabiskan byte untuk kertas kosong. Tanda tangan yang dipotong rapat sekitar 400 × 150 piksel tetap tajam jauh di bawah 20 KB; tidak ada gunanya menyimpan foto selembar kertas berukuran 4000 piksel.",
      ],
    },
    {
      heading: "Apa yang muat dalam 20 kilobyte",
      id: "what-fits",
      body: [
        "Untuk tanda tangan berlatar putih, 20 KB sudah lega. Untuk foto wajah, ruangnya sempit: perkirakan sekitar 300 × 400 piksel dengan kualitas baik, tergantung seberapa ramai latarnya. Latar polos dan terang di belakang wajah memberi kompresor jauh lebih sedikit pekerjaan dibanding ruangan penuh barang atau dinding bermotif.",
        "Kalau formulir meminta foto 20 KB sekaligus menyebut dimensi pasti, ubah dulu ukurannya dengan alat Ubah Ukuran Foto, baru kompres di sini. Dengan urutan itu, alat ini cukup menurunkan kualitas tanpa harus memilihkan ukuran untuk Anda.",
      ],
    },
    {
      heading: "Kalau formulir meminta \"10 KB sampai 20 KB\"",
      id: "range",
      body: [
        "Beberapa formulir menetapkan batas minimal selain batas maksimal, supaya gambar yang hampir kosong ditolak. Halaman ini membidik tepat di bawah 20 KB, dan hasilnya biasanya di antara 15 KB dan 20 KB — masih di dalam rentang 10–20 KB.",
        "Gambar yang sangat kecil atau sangat polos bisa tetap di bawah batas minimal meski pada kualitas tertinggi, karena memang tidak ada cukup detail untuk mengisi 10 KB. Kalau itu terjadi, foto atau scan tanda tangannya lebih besar, atau beri sedikit ruang saat memotong, lalu kompres ulang dari file asli itu.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 20 KB",
  steps: [
    { title: "Tambahkan foto atau tanda tangan", description: "Pilih atau seret JPG, PNG, atau WEBP — potong rapat tanda tangannya dulu supaya hasilnya paling bersih." },
    { title: "Kompres ke bawah 20 KB", description: "Batas 20 KB sudah terpasang; ubah angkanya kalau formulir mengizinkan sedikit lebih besar atau lebih kecil." },
    { title: "Unduh lalu unggah", description: "Simpan JPG-nya dan lampirkan ke formulir — ukurannya dijamin di bawah 20 KB." },
  ],

  features: [
    { icon: "draw", title: "Dibuat untuk tanda tangan", description: "Goresan gelap di atas putih terkompres dengan sangat baik — tanda tangan yang dipotong rapat tetap tajam jauh di bawah 20 KB." },
    { icon: "verified_user", title: "Selalu di bawah 20 KB", description: "File dijaga di bawah 20.000 byte, jadi lolos di formulir yang menghitung KB sebagai 1.000 maupun 1.024 byte." },
    { icon: "lock", title: "Tanda tangan tetap pribadi", description: "Semuanya berjalan di browser Anda. Scan tanda tangan bukan sesuatu yang pantas dikirim ke server orang asing." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres tanda tangan ke 20 KB?", a: "Potong rapat tanda tangannya, tambahkan di sini, lalu klik Kompres — batas 20 KB sudah terpasang. Tanda tangan dengan pulpen gelap di kertas putih yang difoto di bawah cahaya siang memberi hasil paling tajam." },
    { q: "Berapa ukuran piksel tanda tangan 20 KB?", a: "Kalau formulir tidak menyebut ukuran, potongan sekitar 400 × 150 piksel membuat tanda tangan tetap tajam dan jauh di bawah 20 KB. Kalau formulir menyebut dimensi, sesuaikan dulu sebelum mengompres." },
    { q: "Formulir minta foto di bawah 20 KB — apakah wajah tetap jelas?", a: "Ya, pada ukuran yang ditampilkan formulir. Perkirakan sekitar 300 × 400 piksel dengan kualitas baik; latar polos dan terang menyisakan lebih banyak dari 20 KB untuk wajah." },
    { q: "Formulir meminta 10 KB sampai 20 KB. Apakah bisa?", a: "Biasanya hasilnya di antara 15 KB dan 20 KB. Kalau gambar yang sangat kecil atau polos jatuh di bawah 10 KB, foto atau scan ulang dengan ukuran lebih besar lalu kompres lagi." },
    { q: "Kenapa tanda tangan yang dikompres jadi abu-abu atau bernoda?", a: "Latar foto aslinya abu-abu atau berbayang, dan JPG menghabiskan ruangnya untuk bayangan itu. Foto ulang di kertas putih dengan cahaya merata, dan goresannya akan bersih." },
    { q: "Bisakah foto dan tanda tangan dikompres bersamaan?", a: "Bisa. Tambahkan kedua file; masing-masing dibawa ke bawah 20 KB secara terpisah dan bisa diunduh bersama dalam ZIP. Kalau foto boleh lebih besar, kompres di halaman Kompres Foto 50 KB atau 100 KB." },
    { q: "Apakah 20 KB sama dengan 0,02 MB?", a: "Ya, dalam satuan desimal yang dipakai formulir. Alat ini menjaga file di bawah 20.000 byte, sehingga juga memenuhi formulir yang menghitung 1.024 byte per kilobyte." },
  ],

  security:
    "Tanda tangan dan foto identitas tidak pernah keluar dari perangkat Anda. Kompresi berjalan sepenuhnya di browser — tanpa upload, tanpa salinan di server, tanpa ada yang perlu dihapus nanti.",
};

export default content;
