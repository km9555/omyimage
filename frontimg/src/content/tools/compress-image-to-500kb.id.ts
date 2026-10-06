import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/kompres-foto-500kb (variant of compress-image,
 * 500 KB). "kompres foto 500kb" 9.9K + 5.4K/mo in Indonesia.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-500kb",
  locale: "id",
  name: "Kompres Foto 500 KB",
  tagline:
    "Kompres foto, screenshot, dan scan ke bawah 500 KB tanpa penurunan kualitas yang terlihat — untuk portal pendaftaran, email, toko online, dan situs web. Banyak file sekaligus, langsung di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 500 KB Online — Kualitas Tetap Bagus, Gratis | oMyImage",
  metaDescription:
    "Kompres foto, screenshot, dan scan ke bawah 500 KB online gratis — kualitas nyaris asli untuk portal, email, toko online, dan situs web. Tanpa unggah.",

  intro:
    "500 KB — setengah megabyte — adalah batas unggah di banyak portal pendaftaran, lowongan kerja, sistem sekolah dan kampus, marketplace, serta forum, dan batas yang wajar untuk gambar di situs web. Ini batas yang longgar: sebagian besar foto kembali terlihat sama persis dengan aslinya, hanya ukurannya jauh lebih kecil. Tambahkan satu gambar atau seratus, dan masing-masing disimpan sebagai JPG di bawah 500 KB dengan kualitas tertinggi yang muat.",

  sections: [
    {
      heading: "Setengah megabyte itu lega",
      id: "plenty",
      body: [
        "Foto dari kamera HP 12 megapiksel biasanya berukuran 3–5 MB. Di bawah 500 KB, foto itu umumnya masih menyimpan sekitar 2000 × 1500 piksel atau lebih, dengan kualitas yang tidak bisa dibedakan di layar HP atau laptop. Tekstur halus seperti rumput, kerikil, atau kemeja bermotif paling sulit dikompres; hanya untuk foto seperti itu alat ini memperkecil ukuran, dan hanya kalau perlu.",
        "Karena batasnya longgar, foto tidak perlu dipotong atau disiapkan dulu. Tambahkan saja apa adanya.",
      ],
    },
    {
      heading: "Screenshot dan tulisan tetap tajam",
      id: "screenshots",
      body: [
        "Screenshot sering tersimpan sebagai PNG, yang untuk satu layar penuh bisa mencapai beberapa megabyte. Setelah diubah menjadi JPG di bawah 500 KB, tulisannya tetap tajam di ukuran penuh, jadi screenshot bukti transfer, percakapan, atau pesan galat tetap mudah dibaca.",
        "Untuk screenshot yang sebagian besar berisi warna polos dan tulisan — dokumen atau halaman pengaturan — WEBP menjaga tulisan lebih bersih lagi di ukuran yang sama. Pilih WEBP di pengaturan format kalau tempat tujuan unggah menerimanya.",
      ],
    },
    {
      heading: "Gambar untuk situs web dan toko online",
      id: "websites",
      body: [
        "Setiap gambar di halaman web harus diunduh sebelum tampil, jadi foto yang besar membuat halaman lambat, terutama dengan kuota data HP. 500 KB adalah batas atas yang wajar untuk banner besar atau foto produk; gambar kecil seperti thumbnail seharusnya jauh lebih kecil.",
        "Foto produk untuk marketplace juga pas dengan batas ini: detailnya cukup untuk pembeli memperbesar tekstur dan label, tetapi tetap cepat diunggah.",
      ],
    },
    {
      heading: "Banyak file sekaligus",
      id: "batch",
      body: [
        "Tambahkan satu folder penuh — foto produk, gambar untuk iklan, album untuk dikirim lewat email — dan semua gambar dikompres ke bawah 500 KB dalam sekali proses. Unduh satu per satu atau sekaligus dalam ZIP. Gambar yang sudah berupa JPG di bawah 500 KB dibiarkan apa adanya.",
      ],
    },
    {
      heading: "Dokumen pendaftaran dengan batas 500 KB",
      id: "registration",
      body: [
        "Banyak portal pendaftaran sekolah, kampus, beasiswa, dan lowongan kerja membatasi setiap file — scan ijazah, transkrip, sertifikat, atau surat rekomendasi — sampai 500 KB. Dengan batas ini, halaman A4 bisa dikompres dengan detail yang sangat tinggi, termasuk legalisir dan stempel. Kompres semua dokumen bersamaan, periksa satu per satu, lalu unggah.",
      ],
    },
    {
      heading: "Mengirim foto lewat email",
      id: "email",
      body: [
        "Kebanyakan layanan email membatasi lampiran sekitar 20–25 MB per pesan, dan lampiran membesar kira-kira sepertiga saat dikirim karena email mengodekannya sebagai teks. Sepuluh foto HP masing-masing 4 MB tidak akan terkirim; sepuluh foto yang sama berukuran 500 KB menjadi pesan sekitar 7 MB yang diterima layanan mana pun.",
        "Penerima tetap mendapat foto yang cukup besar untuk dilihat layar penuh dan dicetak seukuran kartu pos, tanpa menunggu unduhan yang lama.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 500 KB",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih atau letakkan satu atau banyak foto, screenshot, atau scan — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 500 KB", description: "Batas 500 KB sudah diatur; pilih JPG atau WEBP." },
    { title: "Unduh", description: "Unduh setiap gambar, atau semuanya dalam ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Tanpa penurunan terlihat", description: "Dengan setengah megabyte, foto tetap terlihat sama dan menyimpan hampir semua resolusinya." },
    { icon: "screenshot_monitor", title: "Screenshot tetap tajam", description: "Screenshot PNG yang besar menjadi file JPG atau WEBP kecil dengan tulisan terbaca." },
    { icon: "lock", title: "Privat", description: "Semua proses terjadi di browser; gambar Anda tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 500 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 500 KB sudah diatur. Hasilnya JPG di bawah 500 KB dengan kualitas terbaik yang muat." },
    { q: "Apakah akan terlihat bedanya di 500 KB?", a: "Biasanya tidak. Untuk sebagian besar foto, 500 KB cukup agar tampak sama dengan aslinya di layar HP atau komputer." },
    { q: "Apakah 500 KB cocok untuk gambar situs web?", a: "Sebagai batas atas untuk banner besar dan foto produk, ya. Gambar kecil seperti thumbnail sebaiknya jauh di bawah 100 KB." },
    { q: "Pilih JPG atau WEBP?", a: "JPG bisa dipakai di mana saja. WEBP memberi kualitas sedikit lebih baik di ukuran yang sama dan cocok untuk situs web, tetapi sebagian formulir dan aplikasi lama tidak menerimanya." },
    { q: "Apakah 500 KB sama dengan 0,5 MB?", a: "Ya. 500 KB adalah 500.000 byte, atau setengah megabyte. File juga tetap di bawah batas di situs yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Apakah tulisan kecil di screenshot tetap terbaca?", a: "Ya. Di 500 KB, screenshot satu layar penuh hampir selalu menyimpan resolusi aslinya, jadi tulisannya sama tajam dengan aslinya." },
    { q: "Bisakah 50 foto dikompres ke 500 KB sekaligus?", a: "Bisa. Tambahkan semuanya bersamaan; masing-masing kembali di bawah 500 KB dan bisa diunduh dalam satu file ZIP." },
    { q: "Berapa foto 500 KB yang bisa dikirim dalam satu email?", a: "Dengan batas lampiran umum 25 MB, sekitar 35–40 foto — lampiran membesar kira-kira sepertiga saat dikirim. Untuk lebih banyak, kirim beberapa email atau bagikan tautan." },
    { q: "Apakah 500 KB cukup untuk foto produk marketplace?", a: "Cukup. Foto produk di bawah 500 KB tetap tajam saat diperbesar pembeli, dan unggahnya jauh lebih cepat daripada foto asli dari HP." },
  ],

  security:
    "Foto, screenshot, dan scan dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
