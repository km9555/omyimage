import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-foto-ke-png. */
const content: ToolPageContent = {
  toolId: "convert-to-png",
  locale: "id",
  name: "Ubah Foto ke PNG",
  tagline:
    "Ubah gambar JPG, WEBP, GIF, dan BMP ke PNG secara online — tanpa kehilangan kualitas, transparansi tetap terjaga, bisa banyak sekaligus. Gratis dan privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Ubah Foto ke PNG Online Gratis — Tanpa Kehilangan Kualitas | oMyImage",
  metaDescription:
    "Ubah JPG, WEBP, GIF, dan BMP ke PNG online gratis. Hasil lossless yang menjaga transparansi, bisa banyak file sekaligus, tanpa daftar dan tanpa instal aplikasi.",

  intro:
    "PNG adalah format tujuan ketika gambar harus tetap persis seperti adanya: tanpa kompresi tambahan, tanpa artefak baru, dan transparansinya utuh. Alat Ubah Foto ke PNG dari oMyImage mengubah file JPG, WEBP, GIF, dan BMP menjadi PNG langsung di browser Anda — satu gambar atau satu folder sekaligus, diunduh bersama dalam ZIP. Karena PNG bersifat lossless, hasilnya sama persis piksel demi piksel dengan aslinya, dan setiap edit serta simpan berikutnya tidak akan menurunkannya.",

  sections: [
    {
      heading: "Kapan PNG adalah pilihan yang tepat",
      id: "why",
      body: [
        "Hampir semua konversi ke PNG masuk ke empat kelompok. Pertama, untuk diedit: JPG atau WEBP yang lossy kehilangan sedikit detail setiap kali disimpan, jadi orang mengubahnya sekali ke PNG lalu melakukan semua pemotongan, retouch, dan anotasi pada file yang tidak bisa menurun kualitasnya. Kedua, gambar tajam — screenshot, diagram, grafik, formulir hasil scan, dan apa pun yang berisi tulisan kecil — di mana PNG menjaga setiap tepi tetap bersih, sementara JPG akan menambahkan bayangan abu-abu di sekitar setiap huruf.",
        "Ketiga, transparansi. Logo, stiker, ikon, dan potongan foto produk harus bisa ditaruh di atas latar apa pun, dan PNG adalah format yang didukung di mana-mana yang bisa menyimpan lapisan transparan. Keempat, sekadar kompatibilitas: aplikasi desain, template dokumen, game engine, dan banyak formulir upload meminta PNG, dan WEBP yang disimpan dari sebuah situs justru file yang mereka tolak.",
      ],
    },
    {
      heading: "Kenapa PNG lebih besar daripada JPG",
      id: "bigger",
      body: [
        "Foto ponsel 300 KB biasa saja menjadi PNG 2–4 MB, dan itu wajar, bukan kesalahan. JPG dan WEBP lossy berukuran kecil karena membuang detail yang hampir tidak terlihat mata; PNG tidak boleh membuang apa pun, jadi harus menyimpan setiap piksel, termasuk semua noise halus pada foto.",
        "Aturan praktisnya sederhana. Untuk foto, PNG adalah salinan kerja yang aman, sedangkan JPG atau WEBP adalah format untuk dibagikan. Untuk screenshot, grafik, dan apa pun dengan warna polos, PNG sering kali justru yang paling kecil sekaligus paling tajam, karena area besar berwarna sama dikompres dengan sangat baik tanpa kehilangan apa pun.",
      ],
    },
    {
      heading: "Mengubah format tidak membatalkan kompresi",
      id: "not-restore",
      body: [
        "Mengubah JPG ke PNG menjaga gambar seperti kondisinya sekarang; detail yang sudah dibuang JPG tidak kembali. Langit yang kotak-kotak, detail halus yang kabur, dan bayangan tipis di sekitar teks semuanya ikut tersalin ke PNG. Keuntungannya, tidak ada yang bertambah buruk mulai sekarang.",
        "Kalau Anda punya file aslinya — RAW dari kamera, file desain, atau screenshot seperti saat diambil — buat PNG dari file itu. Kalau yang ada hanya JPG yang sudah terlihat rusak, alat perbesar resolusi dan foto blur jadi jelas bisa memperhalus bagian terburuknya, tetapi konversi format tidak bisa.",
      ],
    },
    {
      heading: "Transparansi masuk dan keluar",
      id: "transparency",
      body: [
        "File WEBP, GIF, dan sebagian BMP bisa memiliki area transparan, dan area itu terbawa persis ke PNG, termasuk piksel semi-transparan di tepi yang dihaluskan. Tidak ada yang diratakan dan tidak ada warna latar yang perlu dipilih.",
        "Sebaliknya, JPG tidak punya transparansi untuk dibawa: latar putihnya adalah piksel putih sungguhan. Setelah diubah ke PNG, latarnya tetap putih. Untuk membuat latar transparan, proses gambar lebih dulu dengan alat hapus background — hasilnya langsung PNG transparan.",
      ],
    },
    {
      heading: "File GIF dan BMP",
      id: "gif-bmp",
      body: [
        "GIF animasi diubah menjadi frame pertamanya, karena PNG hanya menyimpan satu gambar diam. Kalau Anda butuh frame tertentu, pecah GIF menjadi gambar terlebih dulu lalu ambil yang diperlukan. GIF diam diubah tanpa perubahan tampilan, dan PNG bebas dari batas 256 warna GIF untuk edit selanjutnya.",
        "BMP adalah kebalikannya: ia menyimpan piksel tanpa kompresi sama sekali, jadi gambar yang sama dalam PNG biasanya beberapa kali lebih kecil dengan piksel yang persis sama. Mengubah scan dan screenshot BMP lama ke PNG adalah salah satu dari sedikit konversi yang menghemat ruang secara gratis.",
      ],
    },
    {
      heading: "Data kamera dan warna",
      id: "metadata",
      body: [
        "Secara bawaan, data EXIF dan XMP dari file asli — tanggal foto, model kamera, dan lokasi GPS jika ada — disalin ke PNG. Centang Hapus metadata untuk tidak menyertakan semua itu, yang sebaiknya dilakukan sebelum membagikan foto secara publik. Gambar dikonversi dalam sRGB, ruang warna yang diasumsikan semua layar dan browser, jadi warnanya tampak sama dengan aslinya di layar biasa.",
      ],
    },
    {
      heading: "Untuk desain, toko online, dan dokumen",
      id: "uses",
      body: [
        "Banyak aplikasi desain seperti editor template, pembuat presentasi, dan aplikasi undangan menerima PNG dengan hasil paling rapi, terutama untuk logo dan elemen bertransparansi. Ubah logo usaha Anda ke PNG sekali, lalu pakai di mana saja tanpa kotak putih di sekelilingnya.",
        "Untuk lampiran dokumen yang berisi tabel atau tulisan kecil, PNG menjaga angka dan huruf tetap tajam. Untuk foto biasa yang hanya perlu diunggah, JPG tetap lebih hemat ukuran.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar ke PNG",
  steps: [
    { title: "Upload", description: "Pilih satu atau banyak gambar JPG, WEBP, GIF, atau BMP, atau seret dan lepaskan." },
    { title: "Pilih opsi", description: "Simpan atau hapus metadata kamera, dan biarkan putar otomatis aktif untuk foto ponsel." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu PNG langsung terunduh, beberapa file terunduh bersama dalam ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Hasil lossless", description: "Setiap piksel tersimpan persis, jadi edit dan simpan berikutnya tidak menurunkan kualitas." },
    { icon: "burst_mode", title: "Konversi banyak sekaligus", description: "Ubah satu folder JPG, WEBP, GIF, atau BMP sekaligus dan dapatkan satu ZIP." },
    { icon: "lock", title: "Privat secara bawaan", description: "Gambar dikonversi di browser; hanya file yang sangat besar diproses di server kami." },
  ],

  faqs: [
    { q: "Format apa saja yang bisa diubah ke PNG?", a: "JPG, WEBP, GIF, dan BMP. GIF dikonversi dari frame pertamanya. HEIC dan AVIF punya alat sendiri karena butuh penanganan berbeda." },
    { q: "Apakah mengubah ke PNG meningkatkan kualitas?", a: "Tidak. Gambar tetap persis seperti sekarang. PNG mencegah penurunan berikutnya, tetapi tidak mengembalikan detail yang sudah dibuang JPG." },
    { q: "Kenapa PNG saya jauh lebih besar daripada JPG?", a: "PNG bersifat lossless, jadi menyimpan setiap piksel foto termasuk noise-nya. Ukuran naik lima sampai sepuluh kali untuk foto itu normal. Screenshot dan grafik tetap kecil." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. Area transparan dan semi-transparan dari WEBP, GIF, atau BMP terbawa ke PNG tanpa perubahan. JPG tidak punya transparansi, jadi latarnya tetap seperti semula." },
    { q: "Bagaimana membuat latar transparan?", a: "Mengubah JPG ke PNG tetap mempertahankan latarnya. Gunakan alat hapus background lebih dulu; hasilnya PNG dengan latar transparan." },
    { q: "Bisakah mengubah banyak gambar sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau. Satu gambar terunduh sebagai PNG; beberapa gambar terunduh bersama dalam satu file ZIP." },
    { q: "Apakah data EXIF saya tetap ada?", a: "Ya, secara bawaan — tanggal, kamera, dan lokasi GPS ikut jika ada di file asli. Centang Hapus metadata untuk menghapus semuanya." },
    { q: "Untuk foto, lebih baik PNG atau JPG?", a: "Pakai PNG sebagai salinan kerja selama mengedit, dan JPG atau WEBP untuk dibagikan atau di-upload. PNG lebih baik untuk screenshot, teks, dan grafik." },
    { q: "Apakah gambar saya di-upload?", a: "Biasanya tidak — konversi berjalan di browser. Hanya gambar yang terlalu besar untuk browser dikirim ke server kami, dikonversi di sana, lalu langsung dihapus." },
    { q: "Apakah bisa dipakai di HP?", a: "Bisa. Alat ini berjalan di browser Android dan iPhone; pilih gambar dari galeri dan PNG tersimpan di folder unduhan." },
  ],

  security:
    "Gambar Anda diubah ke PNG di browser dengan HTML canvas. Hanya gambar yang terlalu besar untuk browser — lebih dari 100 MB atau melewati batas canvas-nya — diproses di server kami, dan langsung dihapus setelah dikonversi. Tidak ada yang disimpan dan tidak ada file yang dilacak.",

  ui: {
    // Drop hint from app/convert-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG, WEBP, GIF or BMP images here": "atau lepaskan gambar JPG, WEBP, GIF, atau BMP di sini",
  },
};

export default content;
