import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/grid-instagram (variant of split-image). */
const content: ToolPageContent = {
  toolId: "instagram-grid-maker",
  locale: "id",
  name: "Grid Instagram",
  tagline:
    "Ubah satu foto menjadi grid profil Instagram yang menyambung — 3, 6, 9, sampai 15 postingan — atau carousel panorama yang terus berlanjut saat digeser. Di-crop ke bentuk Instagram, berukuran 1080 px, dan bernomor sesuai urutan unggah.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Grid Instagram Online Gratis — Potong Foto Jadi Grid & Carousel | oMyImage",
  metaDescription:
    "Potong satu foto menjadi postingan grid profil Instagram (3:4, 4:5, atau persegi) atau carousel panorama, berukuran Instagram dan bernomor sesuai urutan unggah. Gratis, di browser.",

  intro:
    "Postingan grid adalah satu gambar besar yang tersebar di beberapa postingan Instagram — profil menampilkannya utuh, sementara tiap postingan tetap enak dilihat sendiri di feed. Membuatnya secara manual berarti meng-crop ke bentuk yang tidak biasa, memotong foto tepat menjadi tiga bagian, mengubah ukuran setiap potongan, dan ingat mengunggahnya dari belakang. Grid Instagram mengerjakan semuanya: pilih jumlah baris, pilih bentuk postingan, geser foto untuk membingkainya, lalu unduh postingan yang sudah bernomor sesuai urutan unggah. Alat ini juga membuat carousel tanpa sambungan — satu panorama lebar yang dipotong menjadi slide yang menyatu saat digeser.",

  sections: [
    {
      heading: "Cara kerja grid profil",
      id: "profile-grid",
      body: [
        "Profil Anda menampilkan tiga postingan per baris, dari yang terbaru, mulai dari kiri atas. Sejak Januari 2025 thumbnail-nya berbentuk persegi panjang tegak 3:4, bukan lagi persegi. Potong gambar menjadi tiga kolom, unggah potongannya dengan urutan yang benar, dan profil akan menampilkannya sebagai satu gambar.",
        "Satu baris butuh 3 postingan, dua baris 6, tiga baris 9. Alat ini sampai lima baris — 15 postingan — kira-kira sebanyak yang terlihat di layar HP tanpa menggulir.",
      ],
    },
    {
      heading: "Bentuk postingan yang dipilih",
      id: "shapes",
      body: [
        "3:4 (1080 × 1440 piksel) adalah bentuk thumbnail grid, jadi yang terlihat di pratinjau persis sama dengan yang tampil di profil, tanpa ada yang hilang di sambungan. 4:5 (1080 × 1350) adalah postingan tegak klasik; grid memotong sekitar 3 % dari tiap sisinya, sehingga sambungannya sedikit meloncat. Postingan persegi 1:1 kehilangan seperdelapan lebarnya di tiap sisi dalam grid, yang terlihat jelas pada garis yang melintas dari satu postingan ke postingan lain.",
        "Pilih 3:4, kecuali aplikasi Instagram Anda memotong foto 3:4 menjadi 4:5 saat diunggah — dalam hal itu pilih 4:5, yang diterima utuh oleh semua versi aplikasi.",
      ],
    },
    {
      heading: "Mengunggah dengan urutan yang benar",
      id: "order",
      body: [
        "Karena postingan terbaru muncul di kiri atas, puzzle diunggah dari belakang: potongan 1 adalah sudut kanan bawah dan diunggah pertama, sedangkan potongan kiri atas diunggah terakhir. File-nya diberi nomor seperti itu — foto_post-01.jpg, foto_post-02.jpg, dan seterusnya — dan pratinjau menampilkan nomor yang sama di tiap potongan.",
        "Unggah semuanya sekaligus, dan setelah itu unggah postingan dalam kelompok tiga: satu postingan tambahan menggeser semua potongan satu tempat dan merusak gambarnya. Postingan yang disematkan selalu berada di tempat pertama grid, jadi lepaskan sematannya selama mengunggah, atau sematkan satu baris penuh berisi tiga.",
      ],
    },
    {
      heading: "Carousel tanpa sambungan",
      id: "carousel",
      body: [
        "Pilih Carousel untuk memotong gambar lebar menjadi 2 sampai 10 slide dalam satu baris. Masukkan ke satu postingan sesuai urutan nomor; saat digeser, setiap slide berlanjut tepat dari akhir slide sebelumnya, sehingga pemandangan, foto bersama, atau banner panjang terbaca sebagai satu gambar utuh. Slide 4:5 paling memenuhi layar HP; slide persegi cocok untuk panorama sangat lebar yang kalau tidak akan butuh banyak slide.",
      ],
    },
    {
      heading: "Membingkai foto",
      id: "framing",
      body: [
        "Seluruh grid punya satu bentuk — tiga postingan 3:4 ke samping dan tiga baris ke bawah membentuk potret 3:4, sedangkan satu baris berisi tiga membentuk pita lebar 9:4 — jadi kebanyakan foto punya gambar lebih banyak daripada yang muat. Bagian di luar grid tampak gelap di pratinjau. Geser foto, atau pakai penggeser posisi, untuk memilih bagian yang masuk ke postingan, dan jauhkan wajah serta tulisan dari garis potong, tempat keduanya akan terbelah di dua postingan.",
      ],
    },
    {
      heading: "Ukuran dan kualitas",
      id: "quality",
      body: [
        "Setiap postingan keluar selebar 1080 piksel, lebar yang dipakai Instagram untuk menyimpan foto feed, sehingga aplikasi tidak mengecilkannya lagi. Foto dengan piksel lebih sedikit dari itu tetap memakai resolusinya sendiri, tidak diperbesar. Postingan disimpan sebagai JPG dengan kualitas 92 % secara bawaan; Instagram mengompres ulang setiap unggahan, jadi pengaturan lebih tinggi jarang terlihat bedanya, tetapi PNG tersedia bila Anda ingin menyerahkan piksel yang tidak diubah.",
      ],
    },
    {
      heading: "Ide postingan grid",
      id: "ideas",
      body: [
        "Brand memakai grid untuk mengumumkan peluncuran atau promo dengan satu gambar mencolok yang menguasai profil. Fotografer mengunggah satu pemandangan di satu baris berisi tiga. Seniman memperlihatkan gambar besar sedikit demi sedikit sepanjang hari. Penyelenggara acara mengubah poster menjadi grid 3 × 3 yang sulit dilewatkan, dan para pelancong mengunggah panorama utuh sebagai carousel alih-alih memotongnya agar muat.",
      ],
    },
    {
      heading: "Grid untuk olshop dan kreator",
      id: "business",
      body: [
        "Bagi olshop, grid berfungsi seperti etalase: satu baris berisi tiga postingan dengan koleksi baru langsung menarik perhatian pengunjung profil, dan keterangan tiap potongan bisa membahas produk yang berbeda. Kreator memakai satu baris sebagai sampul seri konten, diselingi postingan biasa dalam kelompok tiga agar grid tidak bergeser.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Foto Anda dipotong dan diubah ukurannya sepenuhnya di browser. Tidak ada yang di-upload ke server kami, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara membuat grid Instagram",
  steps: [
    { title: "Tambahkan foto", description: "Pilih satu gambar JPG, PNG, atau WEBP." },
    { title: "Atur grid-nya", description: "Pilih jumlah baris dan bentuk postingan, lalu geser foto untuk membingkainya." },
    { title: "Unduh dan unggah", description: "Klik Buat grid lalu unggah potongan sesuai urutan nomor, mulai dari 1." },
  ],

  features: [
    { icon: "photo_library", title: "Grid atau carousel", description: "Grid profil 3 kolom sampai 15 postingan, atau carousel sampai 10 slide." },
    { icon: "check", title: "Bernomor untuk diunggah", description: "File dan pratinjau menunjukkan urutan unggahnya." },
    { icon: "lock", title: "Tanpa upload", description: "Dibuat sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara membuat postingan grid di Instagram?", a: "Tambahkan foto, pilih baris dan bentuknya, klik Buat grid, lalu unggah potongan sesuai urutan nomor mulai dari 1." },
    { q: "Potongan mana yang diunggah pertama?", a: "Nomor 1 — potongan kanan bawah. Potongan kiri atas diunggah terakhir, karena Instagram menampilkan postingan terbaru lebih dulu." },
    { q: "Berapa ukuran setiap postingan?", a: "1080 × 1440 px untuk 3:4, 1080 × 1350 px untuk 4:5, dan 1080 × 1080 px untuk persegi — atau lebih kecil bila foto Anda punya piksel lebih sedikit." },
    { q: "Pakai 3:4 atau 4:5?", a: "3:4 pas persis dengan grid profil. Pakai 4:5 bila aplikasi Anda memotong foto 3:4 saat diunggah." },
    { q: "Berapa banyak postingan dalam satu grid?", a: "Tiga per baris, dari satu baris (3 postingan) sampai lima baris (15 postingan)." },
    { q: "Kenapa grid saya terlihat berantakan?", a: "Biasanya karena postingan yang disematkan atau satu postingan tambahan menggesernya. Lepaskan sematan saat mengunggah dan unggah postingan baru per tiga." },
    { q: "Apa itu carousel tanpa sambungan?", a: "Satu gambar lebar yang dipotong menjadi slide-slide dalam satu postingan, sehingga gambarnya berlanjut saat digeser." },
    { q: "Berapa slide carousel yang bisa dibuat?", a: "Dari 2 sampai 10, dalam 4:5 atau persegi." },
    { q: "Bisakah memilih bagian foto yang dipakai?", a: "Bisa. Geser foto di pratinjau atau pakai penggeser posisi; bagian yang gelap tidak ikut." },
    { q: "Apakah Instagram akan menurunkan kualitasnya?", a: "Instagram mengompres ulang setiap unggahan, tetapi postingan selebar 1080 piksel tidak diubah ukurannya lagi, sehingga tetap setajam mungkin." },
    { q: "Apakah foto saya di-upload ke suatu tempat?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa. Unduh ZIP-nya, buka di aplikasi file HP, lalu bagikan postingan ke Instagram dari sana." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
  ],

  security:
    "Foto Anda dipotong dan diubah ukurannya sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",
};

export default content;
