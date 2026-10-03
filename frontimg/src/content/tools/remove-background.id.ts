import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/hapus-background.
 *
 * The biggest page in the locale. Head term measured (Indonesia, per month):
 *   hapus background        1,220,000  KD 7
 *   hapus latar belakang      201,000  KD 3   ← iLoveIMG's /id slug and H1
 *   hapus background foto      90,500
 *   remove background       5,000,000  KD 81 (English query, global SERP)
 * The loanword outruns the formal Indonesian six to one, so the name and slug
 * are «Hapus Background»; «latar belakang» is written into the body so the
 * page still answers it, and aliases.ts carries it for the search box.
 *
 * Two Indonesian uses the English page does not name, both real:
 *   • Marketplace product photos — here that means Shopee, Tokopedia, Lazada
 *     and TikTok Shop, not Amazon and eBay.
 *   • Pas foto: ID and registration photos that need a plain red or blue
 *     background.
 * For both the page gives the ROUTE THAT EXISTS: this tool returns a
 * transparent PNG and has no colour option of its own, so a solid background
 * comes from the PNG → JPG converter, whose "Background (replaces
 * transparency)" picker fills the cut-out with any colour — red and blue
 * included. The Russian page once promised an in-tool colour picker that does
 * not exist; this one does not.
 */
const content: ToolPageContent = {
  toolId: "remove-background",
  locale: "id",
  name: "Hapus Background",
  tagline:
    "Hapus background foto secara otomatis dengan AI dan unduh PNG transparan yang rapi. Gratis, tanpa daftar, tanpa watermark.",
  category: { id: "ai", label: "AI Foto" },

  metaTitle: "Hapus Background Foto Online Gratis — Otomatis dengan AI | oMyImage",
  metaDescription:
    "Hapus background foto online gratis dengan AI: objek dipisahkan otomatis dan hasilnya PNG transparan. Cocok untuk foto produk dan pas foto — tanpa daftar, tanpa watermark.",

  intro:
    "Hapus background foto hanya dengan satu klik. Alat ini memakai model AI sumber terbuka untuk mengenali objek utama — orang, produk, atau benda — lalu membuat semua latar belakangnya transparan. Hasilnya PNG bersih yang siap dipakai untuk toko online, presentasi, atau desain. Pemrosesan AI yang berat berjalan di server kami, dan hasilnya diunduh sebagai PNG transparan.",

  sections: [
    {
      heading: "Apa yang sebenarnya dikerjakan model ini",
      id: "how",
      body: [
        "Ini bukan chroma key. Penghapus background model lama mencari rentang piksel yang warnanya mirip — cara layar hijau — dan langsung gagal begitu latarnya ramai atau objeknya berwarna sama dengan latar. Yang berjalan di sini adalah model segmentasi yang dilatih dengan sangat banyak gambar, yang menebak untuk setiap piksel seberapa besar kemungkinan piksel itu bagian dari objek utama.",
        "Itulah sebabnya model ini bisa memisahkan orang yang berdiri di ruangan biasa, bukan hanya di depan latar studio. Model sudah belajar seperti apa bentuk orang, produk, dan hewan, sehingga bisa memisahkannya dari latar yang belum pernah ia lihat.",
        "Hal yang sama juga menjelaskan kapan hasilnya meleset. Saat model ragu — karena objek dan latar punya warna atau terang yang mirip, karena tepinya memang samar, atau karena objeknya tidak biasa — tepi masker jadi lembek atau bergerigi tepat di bagian itu. Model sedang menebak dengan cerdas, bukan mengukur.",
      ],
    },
    {
      heading: "Cara mendapatkan potongan yang rapi",
      id: "tips",
      body: [
        "Yang paling menentukan adalah kontras. Objek yang berbeda terang atau warnanya dari latar akan terpisah dengan bersih; objek yang menyatu dengan latar tidak. Kalau Anda yang memotret, pilihan itu saja sudah lebih berpengaruh daripada pengaturan apa pun.",
        "Cahaya yang rata dan lembut juga membantu. Bayangan tajam yang jatuh di batas antara objek dan latar membingungkan tepinya, dan objek yang disinari dari belakang sering kehilangan garis luarnya sama sekali. Resolusi berpengaruh di bagian tepi — gambar kecil yang terkompres berat memberi model lebih sedikit informasi, dan artefak JPG di sekitar tepi adalah tempat potongan paling sering rusak.",
        "Terakhir, usahakan objek masuk utuh ke dalam bingkai. Bagian yang terpotong tepi foto tidak memberi model batas untuk ditemukan di sisi itu, dan hasilnya biasanya berupa potongan lurus mengikuti tepi bingkai.",
      ],
    },
    {
      heading: "Untuk apa PNG transparan",
      id: "uses",
      body: [
        "Pemakaian paling umum adalah foto produk untuk marketplace. Di Shopee, Tokopedia, Lazada, dan TikTok Shop, foto utama dengan latar putih polos membuat produk terlihat rapi dan seragam di hasil pencarian — dan jauh lebih mudah didapat dengan menghapus background daripada memotret ulang di studio.",
        "Pemakaian kedua yang sangat umum di Indonesia adalah pas foto dengan latar merah atau biru untuk berkas pendaftaran. Hapus background-nya di sini, lalu buka PNG hasilnya di alat PNG ke JPG dan pilih latar Merah atau Biru: bagian yang transparan akan diisi warna itu. Hasilnya JPG dengan latar polos yang siap diunggah.",
        "Selain itu: foto profil dan foto tim yang harus tampil di atas warna brand, slide presentasi yang terlihat jauh lebih rapi dengan objek \"mengambang\" daripada foto berlatar kotak yang tidak serasi, logo dan stiker, dan desain apa pun yang objeknya perlu bertumpuk dengan elemen lain. Karena hasilnya PNG biasa dengan kanal alfa, semua aplikasi desain bisa membacanya.",
      ],
    },
    {
      heading: "Mengapa alat ini butuh server",
      id: "server",
      body: [
        "Hampir semua alat di situs ini berjalan di dalam browser Anda. Hapus background tidak, dan alasannya ukuran: model segmentasinya jauh lebih besar dari yang masuk akal untuk diunduh ke tab browser, dan butuh daya komputasi lebih dari yang sanggup diberikan sebuah tab.",
        "Jadi model ini berjalan sebagai proses terpisah di mesin kami. Gambar Anda dikirim melalui koneksi HTTPS terenkripsi, diproses, lalu file unggahan dan hasilnya dihapus dalam waktu satu jam. Tidak ada yang disimpan, diindeks, atau dipakai untuk melatih model. Halaman yang mengunggah file Anda mengatakannya dengan jelas, bukan menyiratkan sebaliknya.",
      ],
    },
  ],

  howToTitle: "Cara menghapus background foto",
  steps: [
    { title: "Unggah", description: "Pilih foto, atau seret dan lepas ke area kerja." },
    { title: "Hapus background", description: "Klik Hapus background — AI kami mengenali objeknya dan membuang sisanya." },
    { title: "Unduh", description: "Unduh objek Anda sebagai PNG transparan, siap ditempel di latar apa pun." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Deteksi objek dengan AI", description: "Jaringan saraf sumber terbuka mengenali orang, produk, dan benda, lalu menghapus background-nya secara otomatis." },
    { icon: "opacity", title: "PNG transparan", description: "Hasilnya PNG transparan yang rapi, bisa Anda tempel di atas warna, foto, atau desain apa pun. Butuh latar putih, merah, atau biru? Ubah PNG itu ke JPG dan pilih warna latarnya." },
    { icon: "verified_user", title: "Mesin sumber terbuka", description: "Ditenagai rembg — gratis, sumber terbuka, dan boleh dipakai untuk keperluan komersial." },
  ],

  faqs: [
    { q: "Bagaimana cara kerja hapus background ini?", a: "Model AI (U²-Net dari proyek sumber terbuka rembg) mengenali objek utama dan membuat semua yang lain transparan." },
    { q: "Hasilnya dalam format apa?", a: "PNG transparan, jadi objek Anda bisa ditempel di latar belakang baru apa pun." },
    { q: "Apakah bisa untuk produk dan orang?", a: "Bisa — model ini menangani orang, produk, hewan, dan kebanyakan objek yang jelas dengan baik. Detail yang sangat halus, seperti helai rambut yang tipis, hasilnya bisa bervariasi." },
    { q: "Apakah benar-benar gratis dan sumber terbuka?", a: "Ya. Mesinnya (rembg + U²-Net) sumber terbuka dan boleh dipakai untuk keperluan komersial." },
    { q: "Apakah gambar saya disimpan?", a: "Tidak. File hasil pemrosesan hanya disimpan sebentar untuk tautan unduhan Anda dan terhapus otomatis dalam satu jam." },
    { q: "Foto seperti apa yang hasilnya paling bagus?", a: "Objek yang jelas di atas latar yang kontras dengannya. Foto wajah, produk di atas permukaan polos, dan hewan peliharaan hasilnya bagus. Model kesulitan kalau objek dan latar punya warna dan terang yang sama — kucing abu-abu di sofa abu-abu memang sulit." },
    { q: "Apakah rambut dan bulu bisa terpotong rapi?", a: "Cukup baik, dan justru di sinilah penghapus background dulu paling sering gagal. Helai halus adalah kasus tersulit untuk potongan apa pun, jadi bentuk keseluruhannya akan tepat, tetapi beberapa helai yang mencuat di tepi bisa hilang. Pemisahan yang jelas antara objek dan latar sangat membantu." },
    { q: "Bagaimana membuat pas foto latar merah atau biru?", a: "Hapus background-nya di sini untuk mendapatkan PNG transparan, lalu buka PNG itu di alat PNG ke JPG dan pilih latar Merah atau Biru. Bagian yang transparan akan diisi warna itu, dan hasilnya JPG dengan latar polos yang siap diunggah. Cara yang sama berlaku untuk latar putih foto produk." },
    { q: "Mengapa hasilnya harus PNG?", a: "Karena transparansi butuh kanal alfa, dan JPG tidak punya. Kalau hasil potongan disimpan sebagai JPG, bagian yang dihapus akan kembali menjadi putih solid, dan tujuannya hilang. WEBP juga mendukung transparansi kalau Anda butuh file yang lebih kecil untuk web." },
    { q: "Mengapa alat ini berjalan di server padahal alat lain tidak?", a: "Karena alat ini memakai jaringan saraf yang terlalu besar untuk diunduh ke tab browser. Modelnya berjalan sebagai proses terpisah di mesin kami, gambar Anda dikirim lewat HTTPS, dan file unggahan maupun hasilnya dihapus dalam satu jam." },
    { q: "Bisakah menghapus background banyak foto sekaligus?", a: "Alat ini memproses satu gambar setiap kali, karena setiap proses adalah inferensi model yang berat, bukan operasi piksel yang cepat. Untuk banyak foto, proses satu per satu — masing-masing hanya butuh beberapa detik." },
  ],

  security:
    "Pemrosesan berjalan di server kami menggunakan mesin sumber terbuka rembg. Hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan terhapus otomatis dalam satu jam. Kami tidak pernah membagikan atau memakai ulang gambar Anda.",

  rating: { value: "4.8", count: "974" },

  ui: {
    "Remove background": "Hapus background",
    "Removing background…": "Menghapus background…",
    "or drop a JPG, PNG or WEBP here": "atau lepas JPG, PNG, atau WEBP di sini",
    "a transparent PNG. Powered by the open-source rembg engine on the server.":
      "PNG transparan. Ditenagai mesin sumber terbuka rembg di server kami.",
    "Background removal isn't enabled on this server (rembg not installed).":
      "Fitur hapus background belum aktif di server ini (rembg belum terpasang).",
  },
};

export default content;
