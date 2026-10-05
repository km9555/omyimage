import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-2mb (variant of compress-image, 2 MB). "kompres foto 2mb" 3.6K/mo. */
const content: ToolPageContent = {
  toolId: "compress-image-to-2mb",
  locale: "id",
  name: "Kompres Foto 2 MB",
  tagline:
    "Kompres foto besar dari HP dan kamera ke bawah 2 MB — biasanya dengan resolusi penuh — untuk unggahan di situs web, formulir, forum, dan email. Cepat, gratis, dan privat di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 2 MB Online — Resolusi Tetap Penuh, Gratis | oMyImage",
  metaDescription:
    "Kompres foto besar dari HP ke bawah 2 MB online gratis, biasanya dengan resolusi penuh — supaya lolos batas unggah di situs web dan formulir. Privat, tanpa unggah.",

  intro:
    "HP sekarang menghasilkan foto berukuran 3 sampai 12 MB, sementara banyak situs masih membatasi 2 MB per file. Halaman ini mengompres foto Anda sedikit di bawah batas itu dan menjaganya sedekat mungkin dengan aslinya: dalam kebanyakan kasus resolusi penuh tetap utuh, dan yang hilang hanya kelebihan yang tidak terlihat. Tambahkan satu foto atau sekumpulan foto, dan masing-masing kembali sebagai JPG di bawah 2 MB.",

  sections: [
    {
      heading: "Kenapa banyak situs berhenti di 2 MB",
      id: "why-2mb",
      body: [
        "PHP, bahasa pemrograman di balik sebagian besar situs web, punya batas unggah bawaan 2 MB, dan banyak situs tidak pernah mengubahnya. Itulah sebabnya angka yang sama muncul di formulir kontak, portal lowongan kerja, sistem sekolah, forum, dan situs usaha kecil — batasnya sering berasal dari pengaturan server, bukan dari keputusan seseorang tentang seberapa besar sebuah foto seharusnya.",
        "Akibatnya sama saja: file 2,1 MB ditolak, sering dengan pesan galat yang tidak jelas. Mengompres sedikit di bawah 2 MB menyelesaikannya tanpa membuat foto tampak lebih kecil.",
      ],
    },
    {
      heading: "Resolusi penuh, di kebanyakan kasus",
      id: "full-res",
      body: [
        "JPG 12 megapiksel dengan kualitas baik berukuran sekitar 2–4 MB. Supaya di bawah 2 MB, alat ini lebih dulu sedikit menurunkan kualitas JPG — perubahan yang tidak terlihat pada ukuran tampilan biasa — dan mempertahankan semua pikselnya. Hanya foto yang sangat besar atau sangat detail, seperti foto 48 atau 200 megapiksel, yang juga diperkecil.",
        "Kalau foto sudah berupa JPG di bawah 2 MB, foto dikembalikan tanpa diubah.",
      ],
    },
    {
      heading: "Foto kamera berukuran besar",
      id: "camera",
      body: [
        "Foto langsung dari kamera atau mode resolusi tinggi HP bisa mencapai 15–30 MB. Kalau sebuah foto punya lebih banyak piksel daripada yang bisa ditangani browser sekaligus — browser di HP punya batas paling rendah — foto dibuka dalam ukuran lebih kecil lebih dulu, lalu dikompres ke bawah 2 MB. Bagaimanapun, hasilnya tetap selebar beberapa ribu piksel, jauh lebih besar daripada yang ditampilkan situs mana pun.",
        "File PNG hasil ekspor aplikasi edit juga begitu: foto PNG 20 MB menjadi JPG di bawah 2 MB tanpa perubahan yang terlihat.",
      ],
    },
    {
      heading: "Kalau situs masih menolak file",
      id: "rejected",
      body: [
        "Sebagian situs menghitung 2 MB sebagai 2.000.000 byte dan sebagian lagi 2.097.152; alat ini menjaga file di bawah 2.000.000, jadi keduanya menerima. Kalau unggahan masih gagal, periksa aturan lainnya: format yang diizinkan (ada yang hanya menerima JPG), lebar atau tinggi maksimum, atau batas untuk total semua file, bukan per file.",
      ],
    },
    {
      heading: "Foto produk dan dokumentasi kegiatan",
      id: "products",
      body: [
        "Untuk mengunggah foto produk ke toko online, dokumentasi kegiatan ke laporan sekolah atau kantor, atau foto klaim ke formulir asuransi, batas 2 MB per foto sangat umum. Kompres semua foto sekaligus di sini: resolusinya tetap cukup untuk dicetak dan diperbesar, dan unggahan jauh lebih cepat walaupun memakai kuota data.",
      ],
    },
    {
      heading: "Apakah foto 2 MB masih bagus untuk dicetak?",
      id: "print",
      body: [
        "Untuk cetak sehari-hari, ya. Foto 12 megapiksel yang tetap beresolusi penuh di bawah 2 MB punya sekitar 4000 × 3000 piksel — cukup untuk cetak 4R yang tajam dan A4 dengan kualitas studio foto. Penurunan kecil kualitas JPG tidak terlihat di kertas pada jarak pandang biasa.",
        "Untuk cetak ukuran besar atau percetakan profesional, simpan dan kirim file aslinya; kompresi itu untuk mengunggah dan berbagi, bukan untuk menyimpan arsip foto Anda.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 2 MB",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau letakkan foto berukuran besar — JPG, PNG, atau WEBP, satu atau banyak." },
    { title: "Kompres ke bawah 2 MB", description: "Batas 2 MB sudah diatur; kualitas hanya diturunkan seperlunya." },
    { title: "Unduh dan unggah", description: "Unduh foto satu per satu atau dalam ZIP, siap diunggah." },
  ],

  features: [
    { icon: "photo_camera", title: "Resolusi tetap terjaga", description: "Sebagian besar foto mempertahankan semua pikselnya; hanya yang sangat besar yang diperkecil." },
    { icon: "upload_file", title: "Lolos batas unggah", description: "Setiap file di bawah 2.000.000 byte — diterima bagaimanapun situs menghitung megabyte." },
    { icon: "lock", title: "Privat", description: "Foto dikompres di browser dan tidak pernah dikirim ke server." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 2 MB?", a: "Tambahkan di sini lalu tekan Kompres — batas 2 MB sudah diatur. Anda mendapat JPG di bawah 2 MB, biasanya dengan resolusi asli." },
    { q: "Kenapa situs web membatasi unggahan 2 MB?", a: "Sering karena 2 MB adalah batas unggah bawaan PHP dan banyak situs tetap memakai pengaturan bawaan itu. Ini pengaturan server, bukan penilaian atas foto Anda." },
    { q: "Apakah resolusi foto akan berkurang?", a: "Biasanya tidak. Alat ini sedikit menurunkan kualitas JPG sebelum menyentuh ukuran piksel, dan hanya foto yang sangat besar yang diperkecil." },
    { q: "Bisakah foto 20 MB dikompres ke 2 MB?", a: "Bisa. Foto besar diproses di browser Anda dan kembali di bawah 2 MB, tetap selebar beberapa ribu piksel." },
    { q: "Apakah 2 MB itu 2000 KB atau 2048 KB?", a: "Keduanya dipakai. Alat ini menjaga file di bawah 2.000.000 byte, jadi tetap di bawah batas dengan cara hitung mana pun." },
    { q: "Bagaimana kalau foto saya sudah di bawah 2 MB?", a: "Kalau berupa JPG di bawah 2 MB, foto dikembalikan persis seperti aslinya." },
    { q: "Bisakah beberapa foto dikompres untuk satu formulir?", a: "Bisa. Tambahkan semuanya; masing-masing kembali di bawah 2 MB. Kalau formulir membatasi total semua file, pilih batas yang lebih kecil per foto." },
    { q: "Bisakah foto dicetak setelah dikompres ke 2 MB?", a: "Bisa. Sebagian besar foto tetap beresolusi penuh, lebih dari cukup untuk cetak 4R dan A4. Untuk poster atau pekerjaan profesional, cetak dari file aslinya." },
  ],

  security:
    "Foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
