import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/ubah-ukuran-foto.
 *
 * Measured (Indonesia, per month): ubah ukuran foto 40,500 · resize foto
 * 22,200 · perkecil ukuran foto 49,500. The slug and H1 take «ubah ukuran
 * foto»; the code-mixed «resize foto» rides in the title and aliases.
 *
 * NOTE the ambiguity Indonesian shares with Russian: «ukuran foto» means both
 * pixel dimensions and file weight, so «perkecil ukuran foto» is typed at
 * least as often by people who need a smaller file in KB. That query is
 * assigned to /id/kompres-foto (see its header); the intro here names both
 * meanings and sends the KB visitor to compression rather than resizing a
 * photo they wanted made lighter.
 *
 * The Indonesia-specific section is `pas-foto`: 2x3 / 3x4 / 4x6 cm at 300 dpi
 * is 236×354 / 354×472 / 472×709 px. The exact-size route it describes is
 * real — Media sosial mode, typed size (the preset flips to "Ukuran kustom"),
 * "Isi penuh" — and so is the red/blue background route: a transparent PNG
 * exported as JPG is filled with the "Latar untuk JPG" colour, which offers
 * Red, Blue and a custom colour.
 *
 * The social-media presets are module scope in lib/social-presets.ts (§4.2).
 * Platform names stay Latin; "Story", "Thumbnail" and "Status" are the words
 * Indonesian users of those apps use.
 */
const content: ToolPageContent = {
  toolId: "resize-image",
  locale: "id",
  name: "Ubah Ukuran Foto",
  tagline:
    "Ubah ukuran foto JPG, PNG, WEBP, dan GIF secara online — dalam piksel, persen, atau ukuran siap pakai untuk media sosial, dengan rasio aspek yang terjaga dan banyak foto sekaligus. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ubah Ukuran Foto Online Gratis — Resize Foto dalam Piksel atau % | oMyImage",
  metaDescription:
    "Ubah ukuran foto online gratis: dalam piksel, persen, atau ukuran siap pakai untuk media sosial dan pas foto 3x4. Rasio tetap terjaga, bisa sekaligus banyak — tanpa daftar, tanpa watermark.",

  intro:
    "Dalam bahasa Indonesia, \"ukuran foto\" bisa berarti dua hal, dan yang Anda perlukan bergantung pada yang mana. Kalau dimensi fotonya terlalu besar — terlalu lebar untuk formulir, tidak pas untuk pas foto 3x4, atau kebesaran untuk foto profil — Anda berada di tempat yang tepat: alat ini mengubah lebar dan tinggi dalam piksel. Kalau fotonya terlalu berat dalam KB atau MB dan ditolak saat diunggah, yang Anda perlukan adalah Kompres Foto. Sering kali keduanya dibutuhkan: kecilkan dimensinya dulu, lalu kompres. Di sini Anda bisa menentukan lebar dan tinggi dengan tepat, mengubah skala dalam persen, atau memilih ukuran siap pakai untuk media sosial — rasio aspek tetap terjaga kecuali Anda sendiri mematikannya. Semuanya diproses di browser.",

  sections: [
    {
      heading: "Piksel, dimensi, dan ukuran file",
      id: "basics",
      body: [
        "Dimensi foto adalah jumlah piksel ke samping dan ke bawah, misalnya 4000×3000. Ukuran file adalah berapa KB atau MB yang dibutuhkan untuk menyimpan piksel-piksel itu. Keduanya berkaitan, tetapi tidak sama — dan mencampuradukkan keduanya adalah alasan paling umum foto masih terlalu berat setelah \"dikecilkan\".",
        "Mengubah ukuran mengurangi angka yang pertama. Membagi dua lebar dan tinggi menyisakan seperempat piksel, dan ukuran file biasanya ikut turun dengan proporsi yang mirip — efek yang jauh lebih besar daripada yang bisa dicapai pengaturan kompresi mana pun. Itulah sebabnya mengubah ukuran dulu, lalu mengompres, memberi hasil yang jauh lebih baik daripada hanya mengompres.",
        "Patokannya adalah ruang yang benar-benar ditempati foto di layar. Foto selebar 4000 piksel yang ditampilkan di kolom 800 piksel membawa dua puluh lima kali lebih banyak piksel daripada yang bisa ditampilkan, dan kompresi secanggih apa pun tidak bisa menutup pemborosan itu.",
      ],
    },
    {
      heading: "Mengecilkan aman, memperbesar tidak",
      id: "direction",
      body: [
        "Mengecilkan foto adalah operasi yang aman. Beberapa piksel dirata-ratakan menjadi satu, dan hasilnya umumnya tetap tajam — sering malah terlihat lebih bersih daripada aslinya pada ukuran barunya. Anda bisa mengecilkan sebanyak apa pun tanpa kerusakan yang terlihat.",
        "Memperbesar adalah masalah yang sama sekali berbeda, karena detail yang Anda minta tidak pernah terekam. Interpolasi hanya bisa menebak nilai di antara piksel yang ada, sehingga tepi jadi lembek dan tekstur halus jadi kabur. Pembesaran 20–25% biasanya masih bisa diterima. Mode Persen di alat ini bisa memperbesar sampai 200%, tetapi pada dua kali lipat penurunannya sudah jelas terlihat.",
        "Kalau Anda benar-benar butuh foto yang lebih besar, gunakan Jadikan Foto HD: di sana AI menyusun detail yang masuk akal dari model yang sudah dilatih, bukan sekadar meregangkan yang ada. Tetap ingat bahwa detail itu diciptakan — penting kalau fotonya dipakai sebagai bukti atau dokumen teknis.",
      ],
    },
    {
      heading: "Rasio aspek, crop, dan pinggiran",
      id: "aspect",
      body: [
        "Rasio aspek adalah perbandingan lebar dan tinggi. Selama \"Pertahankan rasio aspek\" aktif, foto diperkecil secara proporsional agar muat di kotak lebar × tinggi yang Anda tentukan — foto 3:2 tetap 3:2, hanya lebih kecil. Kalau dimatikan, Anda bisa memaksakan ukuran apa pun, dengan konsekuensi seluruh isi foto memanjang atau gepeng. Pada wajah, hal ini langsung terlihat.",
        "Saat foto harus pas di ukuran tertentu yang proporsinya berbeda, jawabannya bukan meregangkan. Mode Media sosial menawarkan tiga cara. \"Isi penuh\" memberi ukuran yang persis dengan memotong kelebihan di tepi — biasanya pilihan yang tepat untuk media sosial. \"Beri pinggiran\" juga memberi ukuran yang persis, tetapi mempertahankan seluruh foto dan mengisi sisi yang kosong dengan warna. \"Pas di dalam\" mempertahankan rasio, sehingga hasilnya sedikit lebih kecil dari ukuran yang ditentukan.",
        "Untuk foto profil dan sampul, pilih \"Isi penuh\": pinggiran kosong di sana terlihat asal-asalan. Untuk dokumen dan cetakan, pinggiran sering lebih tepat karena isinya tidak boleh terpotong. Setiap foto juga bisa di-crop atau diputar satu per satu lewat tombol di kartunya sebelum ukurannya diubah.",
      ],
    },
    {
      heading: "Ukuran pas foto 2x3, 3x4, dan 4x6",
      id: "pas-foto",
      body: [
        "Pas foto di Indonesia umumnya berukuran 2x3, 3x4, atau 4x6 cm. Untuk dicetak pada 300 dpi, ukuran itu kira-kira 236×354, 354×472, dan 472×709 piksel. Kalau persyaratannya dalam sentimeter, bagi dengan 2,54 lalu kalikan dengan dpi; kalau sudah dalam piksel, masukkan angkanya langsung.",
        "Foto dari ponsel jarang punya proporsi pas foto. Cara paling tepat: buka mode Media sosial, ketik lebar dan tinggi sendiri — pilihan preset otomatis berubah menjadi \"Ukuran kustom\" — lalu pilih \"Isi penuh\". Hasilnya berukuran persis, dipotong dari bagian tengah. Kalau wajah tidak berada di tengah, crop dulu lewat tombol crop di kartu fotonya.",
        "Latar merah atau biru juga bisa diselesaikan di sini. Hapus latar belakangnya dulu dengan Hapus Background, unggah PNG transparan hasilnya ke alat ini, pilih JPG sebagai format hasil, lalu pilih warna \"Latar untuk JPG\" — merah, biru, atau warna kustom kalau instansinya meminta warna tertentu. Ukuran dan warna latar selesai dalam satu langkah. Formulir online seperti pendaftaran CPNS atau sekolah biasanya juga membatasi ukuran file dalam KB; kalau hasilnya masih terlalu berat, lanjutkan dengan Kompres Foto.",
      ],
    },
    {
      heading: "Ukuran untuk media sosial",
      id: "social",
      body: [
        "Setiap platform punya ukurannya sendiri, dan ukuran itu berubah lebih sering daripada yang kita harapkan. Preset siap pakai mencakup yang utama untuk Instagram, Facebook, X, LinkedIn, YouTube, Pinterest, TikTok, WhatsApp, dan Snapchat: foto profil, postingan persegi dan potret, story, sampul, dan thumbnail.",
        "Yang lebih penting: unggah foto dalam ukuran yang diharapkan platform, bukan lebih besar. Setiap media sosial mengompres ulang apa yang Anda unggah, dan makin besar filenya, makin agresif kompresinya. Foto yang ukurannya sudah disesuaikan lebih dulu bertahan jauh lebih baik.",
        "Status WhatsApp, story, dan reels memakai 1080×1920 — format tegak 9:16. Foto lanskap yang dipaksa ke ukuran itu dengan \"Isi penuh\" kehilangan banyak bagian kiri dan kanannya; \"Beri pinggiran\" mempertahankan seluruh foto dan mengisi bagian atas dan bawahnya dengan warna.",
      ],
    },
    {
      heading: "Mengubah ukuran banyak foto sekaligus",
      id: "batch",
      body: [
        "Tentukan ukurannya sekali dan terapkan ke semua foto — kebutuhan sehari-hari untuk katalog produk di marketplace, unggahan galeri, dan situs dengan slot gambar tetap. Semua hasil diunduh sekaligus dalam satu ZIP, jadi seratus foto berarti satu unduhan, bukan seratus.",
        "Untuk kumpulan foto yang ukurannya beragam, mode Persen sering jadi pilihan yang lebih baik, karena setiap foto diskalakan relatif terhadap ukurannya sendiri, bukan dipaksa ke dimensi yang sama. Di mode Piksel dengan rasio aspek aktif, setiap foto dimuat ke kotak yang sama tetapi tetap dengan rasionya masing-masing.",
        "Kalau kumpulannya berisi foto tegak dan mendatar, \"Pas di dalam\" lebih aman daripada \"Isi penuh\": memotong ke format yang tetap bisa membuang bagian foto tegak yang kemungkinan ingin Anda pertahankan. Dimensi hasil foto pertama ditampilkan di panel pengaturan, sebagai gambaran untuk foto-foto lainnya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah ukuran foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto JPG, PNG, WEBP, GIF, atau BMP, atau seret ke area kerja." },
    { title: "Atur ukurannya", description: "Dalam piksel, dalam persen, atau pilih ukuran siap pakai untuk media sosial — rasio aspek tetap terjaga." },
    { title: "Ubah ukuran & unduh", description: "Klik Ubah ukuran — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    {
      icon: "straighten",
      title: "Piksel, persen, atau preset",
      description:
        "Lebar dan tinggi yang tepat, skala dalam persen dari ukuran asli, atau ukuran siap pakai untuk media sosial — dalam satu alat.",
    },
    {
      icon: "link",
      title: "Rasio aspek terjaga",
      description:
        "Foto tidak akan memanjang atau gepeng, dan setiap file dalam satu kumpulan tetap dengan rasionya sendiri. Kalau ukuran tujuannya berbeda proporsi, Anda yang memilih: potong kelebihannya, beri pinggiran, atau terima hasil yang sedikit lebih kecil.",
    },
    {
      icon: "lock",
      title: "Privat dan instan",
      description:
        "Ukuran diubah langsung di perangkat Anda. Foto tidak diunggah ke mana pun, kecuali yang resolusinya terlalu besar untuk diproses tab browser.",
    },
  ],

  faqs: [
    {
      q: "Bagaimana cara mengubah ukuran foto online secara gratis?",
      a: "Unggah fotonya, masukkan lebar dan tinggi dalam piksel atau skala dalam persen, lalu klik Ubah ukuran. Gratis, tanpa daftar, dan tanpa watermark.",
    },
    {
      q: "Apa bedanya ubah ukuran foto dan kompres foto?",
      a: "Mengubah ukuran mengubah jumlah piksel — foto jadi lebih sempit dan lebih pendek. Kompres memperkecil ukuran file dalam KB tanpa mengubah dimensinya. Kalau foto ditolak karena terlalu berat, biasanya keduanya diperlukan, dengan urutan itu: ubah ukuran dulu, lalu kompres.",
    },
    {
      q: "Bagaimana cara membuat pas foto 3x4 atau 4x6?",
      a: "Untuk cetak 300 dpi, 3x4 cm kira-kira 354×472 piksel dan 4x6 cm kira-kira 472×709 piksel. Buka mode Media sosial, ketik ukuran itu sebagai ukuran kustom, lalu pilih \"Isi penuh\" agar hasilnya persis tanpa foto memanjang.",
    },
    {
      q: "Bisakah latar pas foto diganti jadi merah atau biru?",
      a: "Bisa, dalam dua langkah. Hapus latarnya dengan Hapus Background, lalu unggah PNG transparan hasilnya ke sini, pilih JPG sebagai format hasil, dan pilih warna merah, biru, atau kustom di \"Latar untuk JPG\". Ukuran dan latarnya selesai sekaligus.",
    },
    {
      q: "Apakah mengecilkan foto menurunkan kualitas?",
      a: "Tidak secara kasatmata. Mengecilkan membuang piksel yang berlebih dan foto tetap tajam. Yang merusak foto adalah memperbesar, bukan mengecilkan.",
    },
    {
      q: "Bisakah foto diperbesar?",
      a: "Bisa — mode Persen sampai 200%, mode Piksel ke angka berapa pun — tetapi tidak ada detail baru yang bisa ditambahkan, jadi hasilnya lembek. Untuk pembesaran yang sungguhan, gunakan Jadikan Foto HD, yang menyusun ulang detail dengan AI.",
    },
    {
      q: "Apa maksud \"Pertahankan rasio aspek\"?",
      a: "Saat Anda mengubah lebar, tingginya dihitung ulang secara otomatis, dan sebaliknya. Tanpa itu, foto akan memanjang atau gepeng — pada wajah hal ini langsung terlihat.",
    },
    {
      q: "Pilih yang mana: Isi penuh, Beri pinggiran, atau Pas di dalam?",
      a: "\"Isi penuh\" memberi ukuran persis dengan memotong tepi — untuk foto profil dan sampul. \"Beri pinggiran\" juga memberi ukuran persis, tetapi seluruh foto dipertahankan dan sisi kosongnya diberi warna — untuk dokumen dan cetakan. \"Pas di dalam\" mempertahankan rasio dan memberi hasil yang lebih kecil dari ukuran yang ditentukan.",
    },
    {
      q: "Bisakah banyak foto diubah ukurannya sekaligus?",
      a: "Bisa. Pengaturannya berlaku untuk semua foto dan hasilnya diunduh dalam satu ZIP. Untuk foto dengan ukuran berbeda-beda, mode Persen biasanya lebih praktis daripada piksel yang tepat.",
    },
    {
      q: "Berapa ukuran foto yang pas untuk website?",
      a: "Sesuaikan dengan ruang yang benar-benar ditempatinya. Gambar hero selebar layar di desktop jarang butuh lebih dari 1920 piksel; gambar di dalam artikel biasanya 800–1200 piksel; thumbnail 300–400 piksel. Gandakan hanya kalau Anda menyediakan versi 2× khusus untuk layar beresolusi tinggi.",
    },
    {
      q: "Format apa saja yang didukung?",
      a: "JPG, PNG, WEBP, GIF, dan BMP sebagai masukan. Hasilnya bisa JPG, PNG, atau WEBP, atau tetap dalam format aslinya.",
    },
    {
      q: "Apakah foto saya diunggah ke server?",
      a: "Tidak. Ukuran diubah di browser Anda. Pengecualiannya hanya foto dengan resolusi yang terlalu besar untuk digambar oleh tab browser — yang menentukan adalah jumlah pikselnya, bukan ukuran filenya.",
    },
  ],

  security:
    "Foto Anda tetap milik Anda. Ukuran diubah sepenuhnya di browser — file tidak diunggah ke server. Pengecualiannya hanya foto dengan resolusi yang terlalu besar untuk tab browser: foto itu diproses di server kami melalui koneksi terenkripsi dan langsung dihapus setelahnya.",

  rating: { value: "4.9", count: "803" },

  ui: {
    "Resize": "Ubah ukuran",
    "Resizing…": "Mengubah ukuran…",
    "Resize & download": "Ubah ukuran & unduh",
    "Resize {n} images": "Ubah ukuran {n} gambar",
    "Resize settings": "Pengaturan ukuran",
    "Resize Settings": "Pengaturan Ukuran",
    "Resized 1 image.": "Ukuran 1 gambar berhasil diubah.",
    "Resized {n} images.": "Ukuran {n} gambar berhasil diubah.",
    "Resize failed.": "Gagal mengubah ukuran.",
    "Couldn't apply that edit.": "Perubahan itu tidak bisa diterapkan.",
    "or drop JPG, PNG, WEBP or GIF images here":
      "atau letakkan gambar JPG, PNG, WEBP, atau GIF di sini",
    "This image is too large to edit in the browser":
      "Gambar ini terlalu besar untuk diedit di browser",
    "edited": "diedit",
    "Crop|verb": "Crop", // the verb Indonesians use; matches "Crop Foto"
    "Details": "Detail",
    "Type": "Jenis",
    "unknown": "tidak diketahui",
    "Current": "Saat ini",
    "Size": "Ukuran file", // this row is bytes, so say so — «ukuran» alone is ambiguous
    "Target": "Hasil",
    "set a size": "atur ukuran",
    "First image → {w} × {h} px": "Gambar pertama → {w} × {h} px",
    "— each keeps its own ratio": "— masing-masing tetap dengan rasionya",
    "Pick a platform and a preset size.": "Pilih platform dan ukuran preset.",
    "Keep aspect ratio on to avoid stretching.":
      "Biarkan rasio aspek aktif agar foto tidak memanjang atau gepeng.",
    "Width (px)": "Lebar (px)",
    "Height (px)": "Tinggi (px)",
    "Keep aspect ratio (fit)": "Pertahankan rasio aspek",
    "Scale": "Skala",
    "Choose the social media platform": "Pilih platform media sosial",
    "Preset type": "Jenis preset",
    "Custom size": "Ukuran kustom",
    "How to fit the image": "Cara menyesuaikan gambar",
    "Output format": "Format hasil",
    "Padding colour": "Warna pinggiran",
    "JPG background": "Latar untuk JPG",
    "Same as original": "Sama seperti aslinya",
    "By pixels": "Piksel",
    "By percent": "Persen",
    "Social media": "Media sosial",
    "Crop to fill": "Isi penuh",
    "Pad": "Beri pinggiran",
    "Fit inside": "Pas di dalam",
    "Exactly the preset size, overflow trimmed off the edges.":
      "Tepat ukuran preset; bagian yang berlebih dipotong dari tepi.",
    "Exactly the preset size, the whole image kept, bars filled in.":
      "Tepat ukuran preset; seluruh foto tetap utuh, sisi yang kosong diisi warna.",
    "Keeps the ratio, so the output is smaller than the preset.":
      "Rasio tetap, jadi hasilnya lebih kecil dari ukuran preset.",
    "cropped to fill": "dipotong agar penuh",
    "padded to fit": "diberi pinggiran",
    "fitted inside": "dipaskan ke dalam",
    "Profile": "Foto profil",
    "Square post": "Postingan persegi",
    "Portrait post": "Postingan potret",
    "Landscape post": "Postingan lanskap",
    "Story / Reel": "Story / Reels",
    "Cover": "Sampul",
    "Shared post": "Postingan tautan",
    "Story": "Story", // i18n-same — the word Indonesian users of these apps use
    "Event cover": "Sampul acara",
    "Header": "Gambar header",
    "Post image": "Gambar postingan",
    "Company logo": "Logo perusahaan",
    "Channel icon": "Ikon channel",
    "Channel art": "Banner channel",
    "Thumbnail": "Thumbnail", // i18n-same — YouTube's own Indonesian UI says thumbnail
    "Standard pin": "Pin standar",
    "Square pin": "Pin persegi",
    "Video / Story": "Video / Story", // i18n-same — both words are the ones Indonesian users use
    "Status": "Status", // i18n-same — WhatsApp's Indonesian UI says Status
  },
};

export default content;
