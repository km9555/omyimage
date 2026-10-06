import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-foto-ke-webp. */
const content: ToolPageContent = {
  toolId: "convert-to-webp",
  locale: "id",
  name: "Ubah Foto ke WEBP",
  tagline:
    "Ubah gambar JPG, PNG, GIF, dan BMP ke WEBP secara online — file lebih kecil untuk website yang lebih cepat, dengan pengaturan kualitas dan konversi banyak sekaligus. Gratis dan privat di browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Ubah Foto ke WEBP Online Gratis — Website Lebih Ringan | oMyImage",
  metaDescription:
    "Ubah JPG, PNG, GIF, dan BMP ke WEBP online gratis — file lebih kecil untuk website lebih cepat, dengan slider kualitas dan konversi banyak file. Tanpa daftar.",

  intro:
    "WEBP adalah format gambar yang dibuat untuk web: gambar yang sama dalam byte lebih sedikit, dengan transparansi bila diperlukan. Alat Ubah Foto ke WEBP dari oMyImage mengubah file JPG, PNG, GIF, dan BMP menjadi WEBP langsung di browser Anda — satu gambar atau satu folder foto produk, gambar blog, atau screenshot sekaligus — dengan slider kualitas untuk menentukan keseimbangan antara ukuran dan detail. Halaman yang memakai hasilnya terbuka lebih cepat di koneksi apa pun.",

  sections: [
    {
      heading: "Kenapa website beralih ke WEBP",
      id: "why",
      body: [
        "Gambar biasanya bagian paling berat dari sebuah halaman, dan gambar utama sering menentukan seberapa cepat halaman terasa terbuka. Menyajikan WEBP sebagai pengganti JPG atau PNG memangkas byte itu tanpa kotak-kotak yang terlihat seperti saat kualitas JPG sekadar diturunkan, karena encoder WEBP satu generasi lebih baru dan memperkirakan setiap blok dari blok di sekitarnya.",
        "Semua browser saat ini menampilkan WEBP — Chrome, Edge, Firefox, Opera, dan Safari sejak 2020 — jadi sebuah situs bisa memakainya untuk hampir semua pengunjung. Banyak platform, CDN, dan pengecekan kecepatan halaman menyarankannya karena alasan itu, dan halaman yang lebih kecil juga menghemat kuota internet pengunjung.",
      ],
    },
    {
      heading: "Seberapa kecil hasilnya",
      id: "smaller",
      body: [
        "Untuk foto, WEBP dengan kualitas tampak yang sama biasanya 25–35% lebih kecil daripada JPG asalnya. Dari PNG penghematannya jauh lebih besar: foto atau screenshot yang disimpan sebagai PNG sering menyusut 70–90%, karena PNG lossless sedangkan WEBP pada kualitas tinggi tetap lossy.",
        "Hasilnya tergantung gambar. Foto yang penuh detail menyusut paling sedikit; grafik polos, screenshot, dan gambar dengan area warna rata yang luas menyusut paling banyak. Alat ini menampilkan ukuran setiap file hasil di samping aslinya, jadi Anda bisa melihat persis penghematannya sebelum meng-upload.",
      ],
    },
    {
      heading: "Memilih kualitas",
      id: "quality",
      body: [
        "Slider berkisar dari 50% sampai 100% dan dimulai di 92%, yang membuat foto tampak sama dengan aslinya. Untuk gambar website, 75–85% adalah pilihan umum: perbedaannya sangat sulit terlihat di ukuran normal, sementara filenya jelas lebih kecil. Naikkan lagi untuk banner utama, foto produk yang bisa di-zoom, dan apa pun yang akan dilihat dari dekat.",
        "Di bawah sekitar 70%, area halus seperti langit dan kulit mulai tampak seperti lilin, bukan kotak-kotak — WEBP menurun lebih halus daripada JPG, tetapi tetap menurun. Konversi satu gambar contoh dulu, bandingkan dengan aslinya di ukuran penuh, lalu jalankan semua gambar dengan pengaturan yang Anda pilih.",
      ],
    },
    {
      heading: "Transparansi dan animasi",
      id: "transparency",
      body: [
        "WEBP mendukung kanal alfa penuh, jadi logo, ikon, dan potongan foto produk PNG yang transparan tetap transparan setelah dikonversi, termasuk tepinya — tidak ada warna latar yang ditambahkan. Karena itu WEBP bisa langsung menggantikan PNG transparan di website, biasanya dengan ukuran jauh lebih kecil.",
        "GIF animasi hanya diubah menjadi frame pertamanya. WEBP bisa menyimpan animasi, tetapi alat ini membuat gambar diam; simpan GIF-nya, atau gunakan alat animasi khusus, bila gerakannya penting.",
      ],
    },
    {
      heading: "Kapan WEBP bukan pilihan yang tepat",
      id: "where-not",
      body: [
        "WEBP adalah format untuk menampilkan gambar di web, bukan untuk arsip atau bertukar file. Percetakan, aplikasi komputer lama, sebagian aplikasi email, dan banyak formulir resmi masih meminta JPG atau PNG, dan WEBP yang dikirim ke sana kemungkinan besar ditolak. Simpan file asli, dan konversi salinannya untuk web.",
        "Konversi juga satu arah dalam hal kualitas: WEBP yang dibuat di 80% sudah membuang detail yang tidak kembali saat diubah lagi ke PNG atau JPG. Kalau nanti perlu format lain, mulai lagi dari file aslinya.",
      ],
    },
    {
      heading: "Metadata dan dukungan browser",
      id: "metadata",
      body: [
        "Data kamera — EXIF, tanggal foto, dan lokasi GPS — tidak ikut ke file WEBP yang dibuat di sini. Itu cocok untuk gambar yang dipublikasikan di web, karena lokasi di sana memang berisiko bagi privasi. Kalau Anda butuh metadatanya, simpan di file asli.",
        "Konversi memakai encoder WEBP bawaan browser Anda. Chrome, Edge, Firefox, dan Opera memilikinya; Safari bisa menampilkan WEBP tetapi tidak bisa menyimpannya dari halaman web, jadi di Safari alat ini meminta Anda berganti browser alih-alih memberikan file dengan nama yang salah.",
      ],
    },
    {
      heading: "WEBP untuk toko online dan blog",
      id: "shop",
      body: [
        "Katalog toko online berisi ratusan foto produk, dan setiap ratusan kilobyte tambahan memperlambat pengunjung yang menggulir di HP. Ubah satu folder sekaligus di kualitas 80–85%: pembeli tidak melihat perbedaannya, sementara halaman kategori jadi jauh lebih ringan.",
        "Begitu juga untuk blog: gambar sampul artikel dan ilustrasi dalam WEBP terbuka lebih cepat, sementara diagram dan logo transparan tetap transparan. Sebagian besar CMS dan pembuat website modern menerima WEBP sama seperti JPG dan PNG.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar ke WEBP",
  steps: [
    { title: "Upload", description: "Pilih satu atau banyak gambar JPG, PNG, GIF, atau BMP, atau seret dan lepaskan." },
    { title: "Atur kualitas", description: "Biarkan 92% untuk gambar yang nyaris identik, atau pilih 75–85% untuk gambar website yang lebih kecil." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu WEBP langsung terunduh, beberapa file terunduh bersama dalam ZIP." },
  ],

  features: [
    { icon: "speed", title: "Halaman lebih ringan", description: "File WEBP lebih kecil daripada JPG dan PNG yang digantikannya, jadi halaman terbuka lebih cepat." },
    { icon: "tune", title: "Pengaturan kualitas", description: "Pilih kualitas dari 50% sampai 100% dan lihat ukuran baru setiap file." },
    { icon: "opacity", title: "Transparansi terjaga", description: "Logo dan ikon PNG transparan tetap transparan di WEBP, dengan tepi yang halus." },
  ],

  faqs: [
    { q: "Format apa saja yang bisa diubah ke WEBP?", a: "JPG, PNG, GIF, dan BMP. GIF dikonversi dari frame pertamanya." },
    { q: "Seberapa kecil WEBP dibanding JPG?", a: "Biasanya 25–35% lebih kecil dengan kualitas tampak yang sama untuk foto. Dari PNG penghematannya jauh lebih besar, sering 70–90%." },
    { q: "Kualitas berapa untuk website?", a: "75–85% cocok untuk sebagian besar gambar website. Pakai 92% bawaan atau lebih untuk banner utama dan foto produk yang bisa di-zoom." },
    { q: "Apakah WEBP menjaga transparansi?", a: "Ya. Area transparan dan semi-transparan dari gambar PNG, GIF, atau BMP tetap transparan di WEBP." },
    { q: "Apakah semua browser menampilkan WEBP?", a: "Ya — semua browser saat ini, termasuk Safari sejak 2020. Aplikasi lama dan sebagian formulir upload mungkin belum bisa membukanya." },
    { q: "Kenapa tidak bisa di Safari?", a: "Safari bisa menampilkan WEBP tetapi tidak bisa membuatnya dari halaman web. Konversi di Chrome, Edge, Firefox, atau Opera; setelah itu filenya terbuka normal di Safari." },
    { q: "Apakah data EXIF saya ikut?", a: "Tidak. File WEBP yang dibuat di sini tidak membawa data kamera atau lokasi GPS, yang biasanya memang diinginkan untuk gambar yang dipublikasikan." },
    { q: "Bisakah mengubah satu folder sekaligus?", a: "Bisa. Tambahkan gambar sebanyak yang Anda mau; semuanya dikonversi satu per satu dan diunduh bersama dalam ZIP." },
    { q: "Bisakah WEBP diubah kembali ke JPG atau PNG?", a: "Bisa, dengan alat WEBP ke JPG dan WEBP ke PNG. Detail yang dibuang kompresi tidak kembali, jadi konversi dari file asli bila ada." },
    { q: "Apakah gambar saya di-upload?", a: "Biasanya tidak — konversi berjalan di browser. Hanya gambar yang terlalu besar untuk browser dikirim ke server kami, dikonversi di sana, lalu langsung dihapus." },
  ],

  security:
    "Gambar Anda diubah ke WEBP di browser. Hanya gambar yang terlalu besar untuk browser — lebih dari 100 MB atau melewati batas canvas-nya — diproses di server kami, dan langsung dihapus setelah dikonversi. Tidak ada yang disimpan dan tidak ada file yang dilacak.",

  ui: {
    // Drop hint from app/convert-to-webp/page.tsx, translated inside ConvertTool.
    "or drop JPG, PNG, GIF or BMP images here": "atau lepaskan gambar JPG, PNG, GIF, atau BMP di sini",
  },
};

export default content;
