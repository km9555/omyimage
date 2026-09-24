import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/crop-foto.
 *
 * Measured (Indonesia, per month): crop foto 14,800 vs potong foto 8,100. The
 * loanword leads the slug, H1 and title; «potong foto» is the title's second
 * half and lives in the body and aliases.ts.
 *
 * Local ratios named in `ratios`: 3:4 for pas foto (in the list), square for
 * marketplace product photos, 9:16 for WhatsApp status. 2x3 and 4x6 pas foto
 * are 2:3, which is NOT in the ASPECTS list (it has 3:2 landscape only, and
 * no orientation flip) — so the page sends those to Bebas + typed pixels
 * instead of claiming a preset. The Russian page made exactly that claim and
 * was corrected in the same commit as this file.
 *
 * SHAPES, ASPECTS ("Free" is common.ts) and OUTPUT_TARGETS ("Original" is
 * common.ts) are module scope in CropTool.tsx, maintained here by hand (§4.2).
 */
const content: ToolPageContent = {
  toolId: "crop-image",
  locale: "id",
  name: "Crop Foto",
  tagline:
    "Crop foto JPG, PNG, WEBP, dan GIF secara online — seret untuk memilih area, kunci rasio aspek, atau masukkan ukuran piksel yang tepat. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Crop Foto Online Gratis — Potong Foto Sesuai Rasio & Ukuran | oMyImage",
  metaDescription:
    "Crop foto online gratis: potong foto ke 1:1, 3:4, 16:9, atau ukuran piksel yang tepat, crop bulat atau bersudut bulat, sekaligus banyak. Langsung di browser, tanpa daftar, tanpa watermark.",

  intro:
    "Perlu memotong foto ke bingkai yang pas atau ukuran yang tepat? Alat Crop Foto ini memungkinkan Anda menyeret area pilihan di atas foto, menguncinya ke rasio seperti 1:1 untuk foto profil, 3:4 untuk pas foto, atau 16:9 untuk thumbnail, atau mengetik ukuran pikselnya langsung. Anda juga bisa crop bulat, membulatkan sudut, memutar, membalik, dan meluruskan foto yang miring. Semua proses crop terjadi di browser Anda, jadi foto tetap privat dan hasilnya langsung jadi.",

  sections: [
    {
      heading: "Crop adalah komposisi, bukan sekadar memotong",
      id: "composition",
      body: [
        "Kebanyakan foto jadi lebih baik saat ada yang dibuang. Crop merapatkan bingkai di sekitar objek, membuang tepi yang mengganggu, meluruskan cakrawala yang miring, dan menggeser ke mana mata pertama kali tertuju. Inilah edit paling ampuh yang ada, dan satu-satunya yang sama sekali tidak mengorbankan kualitas.",
        "Panduan klasiknya adalah aturan sepertiga: bagi bingkai menjadi kisi tiga kali tiga, lalu letakkan objek di salah satu garis atau titik potongnya, bukan tepat di tengah. Ini titik awal, bukan hukum — komposisi di tengah cocok untuk simetri dan potret — tetapi cara ini andal untuk memperbaiki foto yang terasa datar.",
        "Kebiasaan lain yang layak dibangun: periksa tepinya sebelum menyimpan. Separuh badan orang lain, tempat sampah, atau langit terang di sudut menarik perhatian dari objek, dan hampir selalu hilang dengan crop yang sedikit lebih rapat. Hindari juga memotong tepat di sendi — siku, lutut, atau pergelangan; sedikit di atas atau di bawahnya selalu terlihat lebih wajar.",
      ],
    },
    {
      heading: "Rasio tetap dan kapan dibutuhkan",
      id: "ratios",
      body: [
        "Crop bebas cocok kalau fotonya untuk dipakai sendiri. Rasio tetap penting saat ada pihak lain yang menentukan bentuknya — setiap media sosial, marketplace, dan ukuran cetak mengharapkan proporsi tertentu, dan kalau salah, sistemnya yang akan meng-crop untuk Anda, biasanya dengan buruk.",
        "Persegi (1:1) untuk foto profil, postingan feed Instagram, dan foto produk — di Shopee dan Tokopedia, foto persegi paling aman. 4:5 adalah potret tertinggi yang diterima feed Instagram dan memakan layar lebih banyak daripada persegi. 9:16 adalah layar penuh tegak untuk story, reels, TikTok, dan status WhatsApp. 16:9 adalah bentuk layar lebar standar untuk thumbnail YouTube dan pratinjau tautan, dan 4:1 untuk banner LinkedIn yang sangat lebar.",
        "3:4 adalah rasio pas foto 3x4, yang masih diminta banyak formulir sekolah, lamaran kerja, dan pendaftaran. Rasio itu ada di daftar: crop wajah dan bahu dengan 3:4, lalu atur ukuran pikselnya dengan Ubah Ukuran Foto. Pas foto 2x3 dan 4x6 berproporsi 2:3, yang tidak ada di daftar — pilih Bebas dan ketik lebar dan tinggi area crop dalam piksel, misalnya 800 × 1200. Menetapkan bentuk sebelum menyeret menghindarkan Anda dari menyusun komposisi dengan cermat lalu melihatnya terpotong agar pas.",
      ],
    },
    {
      heading: "Crop tidak menurunkan kualitas",
      id: "quality",
      body: [
        "Piksel yang Anda pertahankan tidak disentuh. Crop bukan resampling, jadi foto hasil crop sama tajamnya dengan aslinya — hanya berisi bagian pemandangan yang lebih sedikit. Ini berbeda dengan memperbesar, yang menciptakan piksel baru dan membuat hasilnya lembek.",
        "Yang berubah adalah jumlah pikselnya, dan itu punya batas praktis. Crop foto 12 megapiksel sampai tinggal satu sudut kecil, dan bisa jadi hanya tersisa 600 piksel ke samping — cukup untuk layar ponsel, tetapi kurang untuk dicetak atau untuk banner selebar layar. Ukuran hasilnya selalu ditampilkan saat Anda menyeret, jadi Anda bisa mengeceknya sebelum mengunduh.",
        "Satu pengecualian kecil: meluruskan cakrawala memutar gambar dengan sudut yang tidak siku, sehingga pikselnya dihitung ulang dan gambar sedikit diperbesar agar sudutnya tidak kosong. Kalau Anda tahu akan meng-crop dengan rapat, mulailah dari foto asli beresolusi tertinggi yang Anda punya.",
      ],
    },
    {
      heading: "Crop bulat, sudut bulat, dan transparansi",
      id: "shapes",
      body: [
        "Crop bulat paling sering dipakai untuk foto profil, dan ada satu jebakan: hanya PNG dan WEBP yang bisa menyimpan sudut transparan. Kalau disimpan sebagai JPG, sudutnya tidak menjadi transparan — sudut itu diisi warna yang Anda pilih, karena JPG sama sekali tidak mendukung transparansi.",
        "Prinsip yang sama berlaku untuk persegi panjang bersudut bulat. Alat ini mengingatkan hal itu langsung di pengaturan, jadi Anda tidak perlu mengetahuinya dari sudut putih di atas situs bertema gelap.",
        "Untuk banyak foto, crop yang sama diterapkan ke semuanya. Crop disimpan secara proporsional, jadi foto dengan ukuran berbeda mendapat bingkai yang setara — berguna untuk menyeragamkan foto katalog atau deretan potret.",
      ],
    },
    {
      heading: "Urutan kerja yang masuk akal",
      id: "workflow",
      body: [
        "Crop dulu, lalu ubah ukuran, lalu kompres. Crop menentukan isi, ubah ukuran menentukan dimensi piksel, dan kompresi menentukan ukuran file — dengan urutan itu setiap langkah bekerja pada masukan sekecil mungkin, dan Anda tidak pernah mengompres piksel yang akan dibuang.",
        "Semuanya berjalan di browser Anda, jadi berpindah di antara alat-alat ini hanya perlu sekali klik, dan foto tidak pernah diunggah di tahap mana pun.",
      ],
    },
  ],

  howToTitle: "Cara crop foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Atur bentuk dan bingkainya", description: "Pilih persegi panjang, persegi, lingkaran, elips, atau sudut bulat, seret kotak untuk memindahkannya dan pegangannya untuk mengubah ukuran, dan kunci rasio seperti 1:1, 3:4, atau 16:9. Putar, balik, atau luruskan bila perlu." },
    { title: "Crop & unduh", description: "Pilih ukuran hasil dan format, lalu klik Crop & unduh — langsung di browser, dan dalam satu ZIP kalau fotonya lebih dari satu." },
  ],

  features: [
    {
      icon: "crop_free",
      title: "Crop bebas atau rasio tetap",
      description: "Crop bebas, ketik ukuran pikselnya langsung, atau kunci ke 1:1, 4:3, 3:2, 16:9, 3:4, 4:5, 9:16, dan 4:1 untuk media sosial, pas foto, atau cetak.",
    },
    {
      icon: "circle",
      title: "Bukan hanya persegi panjang",
      description: "Crop menjadi persegi, lingkaran, elips, atau persegi panjang bersudut bulat. PNG dan WEBP membiarkan area di luar bentuk tetap transparan — pas untuk foto profil bulat.",
    },
    {
      icon: "rotate_90_degrees_cw",
      title: "Putar, balik, dan luruskan",
      description: "Putar per 90°, cerminkan secara horizontal atau vertikal, dan luruskan cakrawala yang miring dengan penggeser sebelum crop.",
    },
    {
      icon: "bolt",
      title: "Sekaligus banyak, di browser",
      description: "Crop banyak foto dengan satu bingkai dan unduh dalam satu ZIP — semuanya di perangkat Anda dengan HTML canvas, tanpa unggahan dan tanpa menunggu server.",
    },
    {
      icon: "image",
      title: "Semua format umum",
      description: "Mendukung JPG, PNG, WEBP, GIF, dan BMP, dan bisa disimpan sebagai JPG, PNG, atau WEBP dengan kualitas yang bisa diatur.",
    },
  ],

  faqs: [
    { q: "Apakah alat crop foto ini gratis?", a: "Ya. Crop foto 100% gratis, tanpa watermark pada hasilnya dan tanpa perlu daftar." },
    { q: "Apakah foto saya diunggah?", a: "Tidak. Crop berjalan sepenuhnya di browser Anda dengan HTML canvas — foto Anda tidak pernah meninggalkan perangkat." },
    { q: "Bisakah saya crop ke ukuran tertentu?", a: "Bisa. Ketik lebar, tinggi, X, dan Y dalam piksel, atau kunci rasio aspek lalu seret pegangannya untuk mengatur ukurannya secara visual." },
    { q: "Bagaimana cara crop pas foto 3x4?", a: "Pilih rasio 3:4, geser kotak crop agar wajah dan bahu berada di tengah, lalu crop. Untuk ukuran piksel yang tepat — misalnya 354×472 untuk cetak 300 dpi — lanjutkan dengan Ubah Ukuran Foto." },
    { q: "Format apa saja yang bisa dipilih untuk hasilnya?", a: "JPG, PNG, atau WEBP. Pilih \"Sama seperti aslinya\" untuk mempertahankan format masukan (GIF dan BMP disimpan sebagai PNG, karena hasil canvas adalah gambar diam)." },
    { q: "Apakah crop menurunkan kualitas?", a: "Tidak. Crop hanya membuang piksel di luar area pilihan Anda. Untuk JPG dan WEBP, Anda juga bisa memilih kualitas simpannya." },
    { q: "Rasio apa yang cocok untuk media sosial?", a: "1:1 untuk postingan feed Instagram dan kebanyakan foto profil, 4:5 untuk format potret Instagram yang lebih tinggi, 9:16 untuk story, reels, TikTok, dan status WhatsApp, dan 16:9 untuk thumbnail YouTube dan pratinjau tautan di X. Banner LinkedIn sangat lebar, sekitar 4:1." },
    { q: "Apa bedanya crop dan ubah ukuran?", a: "Crop membuang sebagian foto dan mempertahankan piksel yang tersisa dalam ukuran aslinya. Ubah ukuran mempertahankan seluruh foto dan mengubah jumlah pikselnya. Crop untuk mengubah isi bingkai; ubah ukuran untuk mengubah dimensinya." },
    { q: "Bisakah foto di-crop ke ukuran piksel yang persis?", a: "Bisa. Ketik lebar dan tinggi di Area crop (px), dan hasilnya persis sebesar itu selama Ukuran hasil tetap Asli. Cara lain: tentukan bentuknya dengan rasio, lalu gunakan Ubah Ukuran Foto untuk mendapatkan dimensi yang tepat — urutan itu mencegah foto memanjang atau gepeng karena dimensinya dipaksakan." },
    { q: "Apakah crop menghapus data EXIF?", a: "Ya, sebagai efek samping — gambar disimpan ulang dari canvas, yang tidak membawa metadata. Itu termasuk koordinat GPS, yang sering justru menguntungkan saat membagikan foto secara publik. Kalau menghapus metadata memang tujuannya, alat Hapus EXIF melakukannya secara eksplisit." },
    { q: "Bisakah beberapa foto di-crop sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau dan crop yang sama diterapkan ke semuanya — pas untuk foto produk atau apa pun yang difoto dengan penataan yang sama. Crop disimpan secara proporsional, jadi foto dengan ukuran berbeda mendapat bingkai yang setara, dan semuanya diunduh bersama dalam satu ZIP." },
    { q: "Bisakah foto di-crop jadi bulat atau bentuk lain?", a: "Bisa — persegi panjang, persegi, lingkaran, elips, dan sudut bulat semuanya tersedia. Simpan sebagai PNG atau WEBP dan area di luar bentuk benar-benar transparan, yang Anda perlukan untuk foto profil bulat. JPG tidak bisa menyimpan transparansi, jadi di sana Anda memilih warna untuk sudutnya." },
    { q: "Bisakah memutar atau meluruskan foto saat crop?", a: "Bisa. Putar per 90°, balik secara horizontal atau vertikal, dan gunakan penggeser Luruskan untuk meratakan cakrawala. Saat diluruskan, gambar diperbesar secukupnya agar tidak ada sudut kosong." },
  ],

  security:
    "Foto Anda tetap privat. Crop dilakukan sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang pernah diunggah ke server. Saat Anda menutup tab, foto hilang dari memori. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "512" },

  ui: {
    "Couldn't read {name}.": "{name} tidak bisa dibaca.",
    "Cropped 1 image.": "1 gambar berhasil di-crop.",
    "Cropped {n} images.": "{n} gambar berhasil di-crop.",
    "Crop failed.": "Crop gagal.",
    "or drop JPG, PNG, WEBP, GIF or BMP images here":
      "atau letakkan gambar JPG, PNG, WEBP, GIF, atau BMP di sini",
    "Preview {name}": "Pratinjau {name}",
    "done": "selesai",
    "Drag inside the box to move it, or a handle to resize · output {w} × {h} px":
      "Seret di dalam kotak untuk memindahkannya, atau seret pegangannya untuk mengubah ukuran · hasil {w} × {h} px",
    "— the same crop is applied to all {n} images":
      "— crop yang sama diterapkan ke semua {n} gambar",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Crop settings": "Pengaturan crop",
    "Crop Settings": "Pengaturan Crop",
    "Crop|verb": "Crop", // the verb Indonesians use; matches "Crop Foto"
    "Cropping…": "Memproses…",
    "Output: {w} × {h} px — nothing is uploaded.":
      "Hasil: {w} × {h} px — tidak ada yang diunggah.",
    "Crop {n} images": "Crop {n} gambar",
    "Crop & download": "Crop & unduh",
    "Shape": "Bentuk",
    "Circle and Ellipse cut away the corners — export as PNG or WEBP to keep them transparent. JPG has no transparency, so those corners take the background colour instead.":
      "Lingkaran dan Elips membuang bagian sudut — simpan sebagai PNG atau WEBP agar sudutnya tetap transparan. JPG tidak punya transparansi, jadi sudut itu diisi warna latar.",
    "Corner radius": "Sudut membulat",
    "Aspect ratio": "Rasio aspek",
    "Rotate & flip": "Putar & balik",
    "Flip horizontally": "Balik horizontal",
    "Flip vertically": "Balik vertikal",
    "Straighten": "Luruskan",
    "Fine rotation for levelling a horizon. The image is zoomed just enough that no empty corners appear.":
      "Putaran halus untuk meluruskan cakrawala. Gambar diperbesar secukupnya agar tidak ada sudut yang kosong.",
    "Zoom": "Perbesar",
    "Selection (px)": "Area crop (px)",
    "Exact pixel position and size of the crop on the image, after any rotation.":
      "Posisi dan ukuran crop yang tepat dalam piksel pada gambar, setelah diputar.",
    "Width": "Lebar",
    "Height": "Tinggi",
    "Output size": "Ukuran hasil",
    "Corner fill (JPG has no transparency)": "Isi sudut (JPG tidak punya transparansi)",
    "Outside the shape": "Di luar bentuk",
    "Rectangle": "Persegi panjang",
    "Square": "Persegi",
    "Circle": "Lingkaran",
    "Ellipse": "Elips",
    "Rounded": "Sudut bulat",
    "Same as original": "Sama seperti aslinya",
  },
};

export default content;
