import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/png-ke-jpg.
 *
 * Measured (Indonesia, per month): png ke jpg 12,100, KD 0.
 *
 * The Indonesia-specific section is `pas-foto`. /id/hapus-background returns
 * a transparent PNG; this page is where it becomes a pas foto with a red or
 * blue background, because the JPG fill colour is the background colour. The
 * route was verified in batch 1 (Red swatch → RGB 238,68,68 behind the
 * subject). Hapus Background's own page sends readers here for exactly that.
 *
 * Privacy copy matches ConvertTool's note: very large or very high-resolution
 * images are processed on the server.
 */
const content: ToolPageContent = {
  toolId: "png-to-jpg",
  locale: "id",
  name: "PNG ke JPG",
  tagline:
    "Ubah gambar PNG ke JPG yang lebih kecil secara online — sekaligus banyak, dengan pengaturan kualitas dan warna latar. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "PNG ke JPG Online Gratis — Ubah PNG Jadi JPG, Atur Warna Latar | oMyImage",
  metaDescription:
    "Ubah PNG ke JPG online gratis: file jauh lebih kecil untuk formulir dan email, dengan warna latar pilihan untuk bagian transparan — merah atau biru untuk pas foto. Sekaligus banyak, tanpa daftar.",

  intro:
    "PNG bagus untuk grafis, tetapi untuk foto ukurannya jadi sangat besar. Alat PNG ke JPG ini mengubah PNG Anda menjadi JPG yang ringkas dan berkualitas langsung di browser — satu per satu atau banyak sekaligus. Pilih kualitasnya dan warna latar pengganti bagian transparan, lalu unduh. Tanpa antre, tanpa daftar, dan gambar diproses di perangkat Anda — hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami.",

  sections: [
    {
      heading: "Kapan PNG ke JPG adalah langkah yang tepat",
      id: "why",
      body: [
        "PNG bersifat lossless, dan itulah yang Anda inginkan untuk file kerja, tetapi sering boros untuk file yang sudah jadi. Foto yang disimpan sebagai PNG membawa setiap pikselnya utuh, dan itu biasanya berarti beberapa megabyte, padahal JPG yang tampak sama hanya beberapa ratus kilobyte. Kalau gambarnya berupa foto dan akan dipasang di halaman web, dikirim lewat email, atau diunggah ke formulir yang membatasi ukuran, konversi biasanya menjadi penghematan terbesar yang tersedia.",
        "Pemicu umum lainnya adalah batas yang ketat. Portal lamaran kerja, pendaftaran CPNS dan sekolah, marketplace, dan jasa cetak sering membatasi unggahan pada beberapa ratus KB sampai beberapa MB, dan tangkapan layar ponsel atau foto kamera yang disimpan sebagai PNG langsung melewati batas itu. Mengubahnya ke JPG dengan kualitas 85% biasanya sudah lolos tanpa perubahan yang terlihat; kalau masih terlalu berat, lanjutkan dengan Kompres Foto.",
      ],
    },
    {
      heading: "Pas foto berlatar merah atau biru",
      id: "pas-foto",
      body: [
        "Hapus Background memberikan PNG dengan latar transparan. Di halaman inilah PNG itu menjadi pas foto: karena JPG tidak bisa menyimpan transparansi, bagian transparan diisi warna latar yang Anda pilih — dan warna itulah yang menjadi latar pas fotonya.",
        "Pilih Merah atau Biru di pengaturan latar, atau warna kustom kalau instansinya meminta kode warna tertentu, lalu konversi. Hasilnya JPG berlatar rata yang siap diunggah. Kalau ukurannya juga harus pas — 3x4 atau 4x6 — atur dulu dengan Ubah Ukuran Foto, yang juga bisa mengisi warna latar dalam satu langkah.",
      ],
    },
    {
      heading: "Yang Anda korbankan",
      id: "tradeoffs",
      body: [
        "Dua hal, dan keduanya penting dalam kasus tertentu. Yang pertama adalah transparansi: JPG sama sekali tidak punya kanal alfa, jadi apa pun yang tembus pandang harus ditutup warna solid. Itu tidak masalah untuk foto, tetapi fatal untuk logo yang harus berada di atas latar berwarna.",
        "Yang kedua, JPG bersifat lossy, dan itu permanen. Konversi membuang detail, dan tidak ada langkah berikutnya yang bisa memulihkannya. Mengubah PNG yang mungkin masih akan diedit adalah pintu satu arah — crop, retus, dan simpan ulang beberapa kali sebagai JPG, dan penurunannya menumpuk dengan jelas. Simpan PNG sebagai master dan perlakukan JPG sebagai hasil akhir.",
      ],
    },
    {
      heading: "Foto ya, grafis biasanya tidak",
      id: "content",
      body: [
        "Kompresi JPG dirancang untuk gambar bernada kontinu, yang warnanya berubah perlahan di seluruh bingkai. Foto adalah contoh sempurnanya, itulah sebabnya format ini bekerja sangat baik untuk foto.",
        "Konten bertepi tajam adalah kebalikannya. Logo, gambar garis, diagram, tangkapan layar, dan apa pun yang berisi tulisan punya batas yang sangat kontras, dan JPG menaburkan artefak samar di sekitar setiap batas itu — bintik-bintik khas di sekitar huruf. Lebih buruk lagi, karena encoder menganggap tepi itu detail penting, filenya sering tidak jauh lebih kecil. Untuk gambar seperti itu, mengompres PNG-nya atau mengubahnya ke WEBP memberi hasil yang lebih baik dari dua sisi.",
      ],
    },
    {
      heading: "Memilih warna latar",
      id: "background",
      body: [
        "Karena bagian transparan harus menjadi sesuatu, alat ini secara bawaan mencocokkan warna di tepi gambar itu sendiri, dan memakai putih kalau tepinya transparan. Cara itu menghindari kotak putih yang mencolok di sekitar objek yang tidak dirancang untuk berada di atas putih. Anda tetap bisa memilih putih, hitam, merah, biru, atau warna kustom apa pun — berguna untuk pas foto, tampilan gelap, atau kartu berwarna.",
        "Satu catatan: transparansi PNG sering dihaluskan, artinya piksel di tepi setengah transparan. Piksel itu berbaur dengan warna apa pun yang Anda pilih, jadi gambar yang disiapkan untuk latar putih lalu diisi hitam bisa menampakkan pinggiran pucat. Kalau itu terjadi, cara paling bersih adalah mengekspor ulang sumbernya dengan latar yang benar, bukan memperbaikinya di sini.",
      ],
    },
  ],

  howToTitle: "Cara mengubah PNG ke JPG",
  steps: [
    { title: "Unggah PNG", description: "Pilih satu atau banyak gambar PNG, atau seret ke area kerja." },
    { title: "Atur kualitas & latar", description: "Pilih kualitas JPG dan warna yang mengisi area transparan — merah atau biru untuk pas foto." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu PNG diunduh sebagai JPG, beberapa diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "PNG → JPG sekaligus banyak", description: "Ubah banyak PNG ke JPG sekaligus dan ambil semuanya dalam satu ZIP — pas untuk mengecilkan folder tangkapan layar." },
    { icon: "compress", title: "File lebih kecil", description: "Untuk foto, JPG jauh lebih kecil daripada PNG. Atur penggeser kualitas untuk mendapatkan ukuran yang Anda perlukan." },
    { icon: "lock", title: "Privat dan instan", description: "Gambar diproses di browser Anda. Hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami." },
  ],

  faqs: [
    { q: "Kenapa perlu mengubah PNG ke JPG?", a: "Untuk gambar foto, file JPG jauh lebih kecil, sehingga lebih cepat diunggah, dikirim lewat email, dan dimuat di web — dan lebih mudah lolos batas ukuran formulir online." },
    { q: "Apa yang terjadi pada area transparan di PNG?", a: "JPG tidak bisa menyimpan transparansi, jadi piksel transparan diisi warna latar. Secara bawaan kami otomatis mencocokkan warna di tepi gambar itu sendiri, atau putih kalau tepinya transparan; pilih putih, hitam, merah, biru, atau warna kustom kalau Anda ingin yang lain." },
    { q: "Bagaimana membuat pas foto latar merah atau biru dari PNG transparan?", a: "Hapus latar fotonya dulu dengan Hapus Background, lalu masukkan PNG transparan hasilnya ke sini, pilih Merah atau Biru di pengaturan latar, dan konversi. Bagian transparan menjadi latar merah atau biru yang rata." },
    { q: "Bisakah beberapa PNG diubah sekaligus?", a: "Bisa. Tambahkan sebanyak mungkin PNG — beberapa file diunduh bersama dalam satu arsip ZIP." },
    { q: "Apakah konversi menurunkan kualitas?", a: "JPG bersifat lossy, tetapi pada kualitas 90% ke atas perbedaannya biasanya tidak terlihat, sementara filenya jauh lebih kecil." },
    { q: "Seberapa kecil JPG-nya nanti?", a: "Untuk foto, biasanya 60–90% lebih kecil. Foto PNG 4 MB umumnya menjadi 300 KB sampai 1 MB sebagai JPG. Grafis polos dan tangkapan layar jauh kurang diuntungkan, dan sesekali malah membesar — di situlah PNG memang format yang tepat." },
    { q: "Apakah tangkapan layar sebaiknya diubah dari PNG ke JPG?", a: "Biasanya tidak. Kompresi JPG bekerja buruk pada tepi tajam dan tulisan kecil, menghasilkan bayangan samar di sekitar huruf, dan tangkapan layar sering jadi lebih buram sekaligus tidak lebih kecil. Kompres PNG-nya atau ubah ke WEBP saja." },
    { q: "Bisakah JPG diubah kembali ke PNG nanti?", a: "Wadahnya bisa diganti, tetapi yang sudah dibuang tidak bisa dikembalikan. Langkah JPG membuang detail secara permanen, dan mengubah kembali ke PNG hanya menyimpan gambar yang sudah menurun itu secara lossless. Simpan PNG aslinya kalau mungkin masih perlu diedit." },
    { q: "Kenapa JPG hasil konversi saya lebih besar daripada PNG-nya?", a: "Karena gambarnya jenis yang paling cocok untuk PNG — sedikit warna, bidang datar, tepi tajam. PNG mengompresnya dengan sangat efisien, sedangkan JPG harus menyimpan detail yang ia kira ada di setiap tepi. Logo dan diagram adalah penyebab yang biasa." },
  ],

  security:
    "Gambar Anda tetap privat. Konversi PNG ke JPG berlangsung di browser Anda dengan HTML canvas. Pengecualiannya hanya gambar yang sangat besar atau beresolusi sangat tinggi: gambar itu diproses di server kami melalui koneksi terenkripsi dan langsung dihapus setelahnya. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "688" },

  ui: {
    // Drop hint from app/png-to-jpg/page.tsx, translated inside ConvertTool.
    "or drop PNG images here": "atau letakkan gambar PNG di sini",
  },
};

export default content;
