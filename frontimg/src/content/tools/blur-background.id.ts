import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/blur-background-foto (variant of remove-background + browser blur). "blur background foto" 720/mo. */
const content: ToolPageContent = {
  toolId: "blur-background",
  locale: "id",
  name: "Blur Background Foto",
  tagline:
    "Blur background foto apa pun dan biarkan orang atau produknya tetap tajam — efek mode potret, ditambahkan setelah foto diambil. AI menemukan objeknya; kekuatan blur Anda yang atur. Gratis, tanpa watermark.",
  category: { id: "ai", label: "AI Foto" },

  metaTitle: "Blur Background Foto Online — Efek Mode Potret, Gratis | oMyImage",
  metaDescription:
    "Blur background foto apa pun secara online dengan AI — orang atau produk tetap tajam, semua di belakangnya jadi lembut. Kekuatan blur bisa diatur, gratis, tanpa watermark.",

  intro:
    "Background yang blur adalah hal yang membuat mode potret ponsel terlihat seperti foto kamera besar: objeknya menonjol, sementara kamar berantakan, keramaian, atau jalan yang sibuk berubah menjadi warna lembut. Alat ini menambahkan efek itu ke foto yang sudah Anda ambil. Model AI menemukan orang, hewan peliharaan, atau produknya, mempertahankannya persis seperti aslinya, lalu mem-blur semua di belakangnya sebanyak yang Anda pilih. Mengatur kekuatannya setelah itu langsung terlihat, jadi takaran yang pas bisa dicari dengan mata.",

  sections: [
    {
      heading: "Cara kerjanya",
      id: "how",
      body: [
        "Pertama, model segmentasi di server kami menandai objek utama dan mengembalikannya sebagai potongan. Kemudian browser Anda mengambil foto asli, mem-blur-nya, dan meletakkan potongan yang tajam di atasnya tepat di posisi yang sama.",
        "Karena blur diterapkan di perangkat Anda, menggeser pengatur kekuatan tidak mengirim apa pun lagi ke server — objek dicari sekali, dan Anda bisa mencoba blur ringan, sedang, dan kuat tanpa memakai proses AI lagi.",
      ],
    },
    {
      heading: "Seberapa banyak blur yang terlihat alami",
      id: "strength",
      body: [
        "Kamera sungguhan mem-blur lebih kuat benda yang lebih jauh dari objek. Blur ringan cocok untuk potret di depan dinding yang dekat; blur kuat cocok untuk orang di depan pemandangan jauh atau jalan kota. Kalau blur-nya jauh lebih kuat daripada kedalaman pemandangannya, foto mulai terlihat seperti potongan yang ditempel di atas lukisan.",
        "Mulailah dari tengah pengatur dan bandingkan dengan tampilan sebelum-sesudah. Untuk foto produk toko online, blur yang lebih kuat sering cocok, karena tujuannya menghilangkan gangguan, bukan meniru lensa.",
      ],
    },
    {
      heading: "Blur background atau blur sebagian foto?",
      id: "vs-blur-image",
      body: [
        "Halaman ini otomatis mempertahankan objek utama tetap tajam dan melembutkan sisanya. Kalau Anda justru perlu menyembunyikan sesuatu yang spesifik — pelat nomor, wajah di keramaian, layar berisi data pribadi — gunakan Blur Foto atau Blur Wajah, yang hanya mem-blur area yang Anda tandai.",
      ],
    },
    {
      heading: "Foto yang paling cocok",
      id: "best",
      body: [
        "Objek utama yang jelas dengan sedikit ruang di sekitarnya: orang setengah badan, hewan peliharaan, mobil, produk di atas meja. Foto ramai-ramai yang objek utamanya tidak jelas, serta detail halus seperti jari-jari sepeda atau rambut terurai di depan latar yang warnanya mirip, lebih sulit bagi model, dan tepinya bisa terlihat.",
      ],
    },
    {
      heading: "Background blur untuk foto produk dan jualan",
      id: "products",
      body: [
        "Marketplace dan situs jual-beli penuh dengan foto yang diambil di meja dapur atau lantai kamar. Mem-blur background mempertahankan suasana aslinya — yang sering lebih dipercaya pembeli daripada background putih tempelan — sambil menarik perhatian ke barangnya.",
        "Foto produk sedikit dari atas, beri jarak antara barang dan dinding di belakangnya, dan pakai blur yang lebih kuat daripada untuk potret. Kalau platformnya mewajibkan background putih polos, gunakan Ganti Background Foto.",
        "Untuk beberapa foto dari produk yang sama, pakai kekuatan blur yang sama di semua foto supaya etalase toko terlihat rapi dan pembeli membandingkan sudut pandang barangnya, bukan latarnya.",
      ],
    },
    {
      heading: "Foto untuk CV dan profil kerja",
      id: "profile",
      body: [
        "Untuk CV dan profil kerja, potret dengan latar yang tenang paling cocok. Kalau foto terbaik Anda diambil di depan keramaian atau ruangan yang berantakan, blur ringan menghilangkan gangguan tanpa membuatnya terlihat seperti foto studio.",
      ],
    },
  ],

  howToTitle: "Cara blur background foto",
  steps: [
    { title: "Unggah foto", description: "Pilih JPG, PNG, atau WEBP dengan orang, hewan, atau benda yang jelas." },
    { title: "Blur background", description: "Klik Blur background — AI menemukan objeknya dalam beberapa detik." },
    { title: "Atur & unduh", description: "Geser pengatur kekuatan sampai pas, bandingkan dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "lens_blur", title: "Efek mode potret", description: "Objek tetap persis seperti aslinya, sementara semua di belakangnya melembut." },
    { icon: "tune", title: "Kekuatan bisa diatur", description: "Dari pelembutan tipis sampai blur kuat, berubah seketika di browser Anda." },
    { icon: "verified_user", title: "Tanpa watermark", description: "Gratis, tanpa ada yang tercetak di foto Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara blur background foto?", a: "Unggah foto dan klik Blur background. Setelah AI menemukan objeknya, geser pengatur kekuatan ke takaran yang Anda suka lalu unduh hasilnya." },
    { q: "Apakah orangnya tetap tajam sepenuhnya?", a: "Ya — objek diambil dari foto asli Anda tanpa diubah. Hanya background-nya yang di-blur." },
    { q: "Apakah mengubah kekuatan blur memakai proses AI lagi?", a: "Tidak. Objek dicari sekali di server kami; blur-nya sendiri diterapkan di browser Anda, jadi bisa diatur sesering yang Anda mau." },
    { q: "Bisakah mem-blur background foto produk?", a: "Bisa. Produk di atas meja atau rak hasilnya bagus, dan blur yang kuat adalah cara cepat menghilangkan latar yang berantakan dari foto jualan." },
    { q: "Apa bedanya dengan Blur Foto?", a: "Blur Foto mem-blur area yang Anda pilih. Alat ini memilihkan untuk Anda: objek utama tetap tajam dan semua sisanya di-blur." },
    { q: "Hasilnya dalam format apa?", a: "JPG, dengan ukuran yang sama seperti potongan dari AI. Hasilnya untuk dibagikan, diunggah, atau dicetak, jadi tidak ada transparansi." },
    { q: "Bisakah dipakai untuk foto profil?", a: "Bisa. Potret dengan background blur terlihat rapi di bingkai bulat foto profil: wajah menonjol dan latarnya tidak mengganggu. Setelah itu potong jadi persegi atau bulat." },
    { q: "Apakah foto saya disimpan?", a: "Hanya sebentar. Objek dicari di server kami, hasilnya disimpan di balik tautan pribadi dan dihapus otomatis dalam satu jam, dan blur diterapkan di perangkat Anda." },
    { q: "Apakah bisa untuk foto hewan peliharaan?", a: "Bisa. Kucing atau anjing di sofa adalah contoh yang baik: model memisahkan hewannya dengan mantap, dan bulu di bagian tepi biasanya tetap terlihat alami dengan blur sedang." },
  ],

  security:
    "Pendeteksian objek berjalan di server kami dengan mesin open-source rembg; hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan dihapus otomatis dalam satu jam. Blur diterapkan di browser Anda, dan tidak ada yang dibagikan atau dipakai ulang.",
};

export default content;
