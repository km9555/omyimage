import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/watermark-foto.
 *
 * Measured (Indonesia, per month): watermark foto 2,900, KD 0. «Watermark» is
 * the word Indonesians use; «tanda air» is the dictionary term and lives in
 * aliases.ts with «logo di foto» and «kasih nama di foto».
 *
 * INTENT WARNING: «hapus watermark» (removing SOMEONE ELSE'S mark) is a large
 * query in this market and the opposite of what this tool does. Nothing here
 * targets it, and aliases.ts must not carry it.
 *
 * The local reader is the online seller: product photos lifted by other shops
 * are a daily complaint on Indonesian marketplaces, and a shop name or
 * @handle across the product is the standard answer. The page is honest that
 * a watermark is friction and attribution, not protection.
 */
const content: ToolPageContent = {
  toolId: "watermark-image",
  locale: "id",
  name: "Watermark Foto",
  tagline:
    "Tambahkan watermark teks atau logo ke foto secara online — dengan posisi, opasitas, dan rotasi yang bisa diatur, pratinjau langsung, dan banyak foto sekaligus. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Watermark Foto Online Gratis — Tambah Logo atau Nama di Foto | oMyImage",
  metaDescription:
    "Tambahkan watermark foto online gratis: teks, nama toko, atau logo PNG, dengan posisi, opasitas, dan rotasi yang bisa diatur — sekaligus banyak. Di browser, tanpa daftar.",

  intro:
    "Lindungi foto Anda dan beri identitas pada setiap gambar dengan watermark sendiri. Alat Watermark Foto ini memungkinkan Anda menambahkan teks — dengan font, warna, dan garis tepi pilihan Anda — atau menempelkan logo sendiri, lalu mengatur posisinya dengan tepat lewat pratinjau langsung, opasitas, dan rotasi. Beri watermark satu foto atau banyak sekaligus. Semuanya berjalan di browser Anda, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Apa yang sebenarnya dicapai sebuah watermark",
      id: "purpose",
      body: [
        "Watermark punya tiga tugas, dan perlu jelas mana yang Anda butuhkan. Watermark mencegah pemakaian ulang yang iseng, karena kebanyakan orang yang dengan senang hati menyimpan foto tanpa tanda tidak akan repot dengan foto yang bertanda. Watermark mencantumkan pembuatnya, jadi saat foto menyebar, nama Anda ikut menyebar. Dan watermark menandai foto contoh, sehingga klien bisa melihat hasilnya sementara versi yang belum dibayar tidak menarik untuk dipakai.",
        "Yang tidak bisa dilakukannya adalah mencegah pencurian. Siapa pun dengan aplikasi edit dan sedikit kesabaran bisa menghapus watermark, dan inpainting berbasis AI sudah membuatnya jauh lebih mudah. Menganggap watermark sebagai perlindungan hak cipta berujung pada tanda yang begitu tebal hingga merusak foto, tetapi tetap tidak menghentikan orang yang bertekad.",
        "Tujuan yang realistis adalah menambah repot dan mencantumkan nama. Begitu Anda memandangnya seperti itu, pilihan desainnya jadi jauh lebih mudah.",
      ],
    },
    {
      heading: "Foto produk toko online",
      id: "olshop",
      body: [
        "Bagi penjual online, foto produk yang diambil begitu saja oleh toko lain adalah keluhan sehari-hari. Nama toko atau akun media sosial di foto — misalnya @namatoko — adalah jawaban yang paling umum: pembeli tahu dari mana foto itu berasal, dan toko lain yang memakainya ikut mengiklankan Anda.",
        "Untuk foto produk, letakkan watermark di atas produknya, bukan di sudut kosong — sudut mudah dipotong, produk tidak. Pakai opasitas sekitar 30–40% agar produknya tetap jelas terlihat. Satu watermark yang sama bisa diterapkan ke seluruh katalog sekaligus dan diunduh dalam satu ZIP.",
        "Periksa aturan marketplace tempat Anda berjualan: sebagian marketplace membatasi teks atau logo yang boleh ada di foto utama produk. Watermark yang halus biasanya lebih aman daripada yang mencolok.",
      ],
    },
    {
      heading: "Penempatan dan masalah crop",
      id: "placement",
      body: [
        "Tanda di satu sudut terlihat rapi dan profesional, itulah sebabnya posisi ini jadi bawaan untuk karya yang sudah jadi. Kelemahannya jelas: sudut sangat mudah di-crop, dan fotonya tetap terlihat baik setelahnya.",
        "Tanda di tengah, atau diputar miring melintasi bagian tengah, menyelesaikan hal itu dengan harga tertentu. Menghapusnya berarti meretus di atas objek, bukan sekadar memotong di sekelilingnya — itu pekerjaan nyata. Namun fotonya jadi kurang enak dilihat, jadi cara ini cocok untuk foto contoh, pratinjau, dan portofolio, bukan untuk hasil akhir yang diserahkan.",
        "Jalan tengah yang dipakai banyak fotografer: letakkan satu tanda sehingga menumpuk sebagian objek, bukan di latar yang kosong. Jauh lebih halus daripada tanda yang memenuhi foto, dan jauh lebih sulit dihapus bersih daripada tanda di sudut.",
      ],
    },
    {
      heading: "Opasitas, ukuran, dan kontras",
      id: "design",
      body: [
        "Opasitas — seberapa pekat tanda itu terlihat; makin kecil angkanya, makin samar — sekitar 30–50% adalah rentang saat watermark terbaca tanpa mendominasi. Jebakannya adalah mengujinya di satu foto lalu menerapkannya ke seratus foto: tanda putih 35% jelas terlihat di foto gelap dan praktis tak terlihat di langit yang terang. Kalau kumpulan foto Anda beragam, periksa foto yang paling terang dan paling gelap sebelum menerapkannya.",
        "Ukuran tidak sepenting yang orang kira. Tanda selebar kira-kira 10–20% lebar foto sudah terbaca di ponsel tanpa berteriak. Tanda yang sangat kecil mudah dipotong dan mudah terlewat; yang sangat besar berhenti menjadi watermark dan berubah menjadi poster.",
        "Untuk logo, pakai PNG transparan. Logo yang disimpan sebagai JPG membawa kotak putih bersamanya, yang terlihat seperti kesalahan di foto mana pun yang latarnya tidak putih. Kalau logo Anda masih berlatar putih, hapus latarnya dulu dengan Hapus Background.",
      ],
    },
    {
      heading: "Simpan master tanpa watermark",
      id: "workflow",
      body: [
        "Watermark bersifat permanen — tandanya menjadi bagian dari piksel dan tidak bisa diangkat kemudian. Selalu bekerja dari salinan dan simpan foto aslinya yang bersih, karena begitu Anda perlu melisensikan foto itu dengan benar, mencetaknya, atau menyerahkannya ke klien, versi bertanda tidak berguna.",
        "Urutan yang masuk akal: edit, lalu ubah ukuran sesuai tujuan, lalu beri watermark paling akhir. Memberi watermark sebelum mengubah ukuran berarti tandanya ikut diperkecil bersama semuanya, dan sering jadi tidak terbaca di hasil yang lebih kecil.",
        "Semuanya berjalan di browser Anda, jadi foto asli tanpa tanda tidak pernah meninggalkan perangkat — penting, karena Anda biasanya memberi watermark justru karena tidak ingin foto itu beredar bebas.",
      ],
    },
  ],

  howToTitle: "Cara memberi watermark pada foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Rancang watermark-nya", description: "Ketik teks atau unggah logo, lalu atur posisi, ukuran, opasitas, dan rotasi dengan pratinjau langsung." },
    { title: "Terapkan & unduh", description: "Klik Watermark — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "title", title: "Teks atau logo", description: "Cantumkan teks sendiri — dengan font, warna, dan garis tepi — atau tempelkan logo PNG transparan milik Anda." },
    { icon: "grid_view", title: "Kendali posisi penuh", description: "Pilih salah satu dari sembilan posisi, atur ukuran, opasitas, dan rotasi, dan lihat perubahannya langsung sebelum mengekspor." },
    { icon: "lock", title: "Privat dan sekaligus banyak", description: "Terapkan watermark yang sama ke banyak foto sekaligus, sepenuhnya di browser Anda — foto tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bisakah memberi watermark dengan logo sendiri?", a: "Bisa. Pilih Logo, unggah PNG (yang transparan paling bagus), lalu atur ukuran, posisi, dan opasitasnya." },
    { q: "Bisakah banyak foto diberi watermark sekaligus?", a: "Bisa. Watermark yang sama diterapkan ke setiap foto yang Anda tambahkan, dan semuanya diunduh bersama dalam satu ZIP." },
    { q: "Bagaimana memberi nama toko di foto produk?", a: "Pilih Teks, ketik nama toko atau @akun Anda, lalu letakkan di atas produknya dengan opasitas sekitar 30–40%. Terapkan ke semua foto produk sekaligus agar seluruh katalog seragam." },
    { q: "Apakah watermark-nya terbaca di foto apa pun?", a: "Aktifkan garis tepi teks agar terbaca di latar yang ramai, lalu sesuaikan opasitas dan warnanya." },
    { q: "Apakah foto asli saya berubah?", a: "Tidak. Foto asli tidak disentuh; alat ini membuat salinan baru yang sudah diberi watermark di browser Anda." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark dari kami, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Di mana sebaiknya watermark diletakkan?", a: "Satu tanda di sudut paling tidak mengganggu, tetapi paling mudah di-crop. Tanda di tengah jauh lebih sulit dihapus tetapi bersaing dengan fotonya. Sesuaikan dengan risikonya: pratinjau portofolio dan foto contoh pantas memakai versi yang mencolok, hasil akhir untuk klien biasanya tidak." },
    { q: "Opasitas berapa yang paling pas?", a: "Antara 30% dan 50% untuk kebanyakan foto. Cukup rendah agar fotonya tetap terbaca, cukup tinggi agar tetap terlihat di tangkapan layar. Di bawah sekitar 20%, watermark bisa lenyap sama sekali di area yang ramai atau terang, dan itu menggagalkan tujuannya." },
    { q: "Bisakah watermark dihapus orang lain?", a: "Orang yang bertekad dengan aplikasi edit bisa menghapus atau menyamarkan hampir semua watermark, dan inpainting AI sudah membuatnya lebih mudah. Watermark mencegah penyalinan iseng dan menegaskan pembuatnya; bukan perlindungan hak cipta. Tanda yang menumpuk di atas objek jauh lebih sulit dihapus daripada tanda di latar yang kosong." },
    { q: "Sebaiknya pakai teks atau logo?", a: "Teks lebih cepat dan tetap tajam di ukuran apa pun — nama, @akun, atau nama domain sering sudah cukup. Logo membawa pengenalan merek dan terlihat lebih rapi. Kalau memakai logo, PNG transparan itu wajib; logo JPG membawa kotak putihnya sendiri." },
    { q: "Apakah watermark menurunkan kualitas foto?", a: "Watermark-nya sendiri digambar ke foto, jadi tidak ada yang rusak selain itu. Kalau diekspor sebagai JPG, penyimpanan ulang menurunkan sedikit kualitas seperti biasa; ekspor sebagai PNG untuk menghindarinya. Apa pun pilihannya, simpan master tanpa watermark — tandanya tidak bisa dihapus dari salinan Anda sendiri." },
    { q: "Apakah posisi watermark tetap benar di foto tegak dan mendatar?", a: "Ya. Posisinya relatif, jadi di kumpulan foto yang campuran, foto tegak dan mendatar masing-masing mendapat tanda di sudut yang benar." },
  ],

  security:
    "Foto Anda tetap privat. Watermark diterapkan sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "564" },

  ui: {
    // WatermarkTool.tsx
    "Couldn't read that logo image.": "Gambar logo itu tidak bisa dibaca.",
    "Upload a logo image first.": "Unggah gambar logo dulu.",
    "Watermarked 1 image.": "Watermark diterapkan ke 1 gambar.",
    "Watermarked {n} images.": "Watermark diterapkan ke {n} gambar.",
    "Watermarking failed.": "Gagal menerapkan watermark.",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "done": "selesai",
    "Live preview of": "Pratinjau langsung",
    "— the same watermark applies to all {n} images.": "— watermark yang sama diterapkan ke semua {n} gambar.",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Watermark settings": "Pengaturan watermark",
    "Watermark Settings": "Pengaturan Watermark",
    "Applying…": "Menerapkan…",
    "Watermark {n} images": "Watermark {n} gambar",
    "Watermark & download": "Watermark & unduh",
    "Text": "Teks",
    "Logo": "Logo", // i18n-same — the Indonesian word is the same
    "Watermark text": "Teks watermark",
    "Font": "Font", // i18n-same — the word Indonesian apps use
    "Size": "Ukuran",
    "Bold": "Tebal",
    "Text color": "Warna teks",
    "Outline (for legibility)": "Garis tepi (agar terbaca)",
    "Outline color": "Warna garis tepi",
    "Change logo": "Ganti logo",
    "Upload logo (PNG)": "Unggah logo (PNG)",
    "Logo size": "Ukuran logo",
    "Opacity": "Opasitas",
    "Rotation": "Rotasi",
    "Position": "Posisi",
    "JPG background": "Latar untuk JPG",
    // POSITION_LABELS / FONTS / FORMATS (module scope, §4.2)
    "Top left": "Kiri atas",
    "Top center": "Tengah atas",
    "Top right": "Kanan atas",
    "Middle left": "Kiri tengah",
    "Center": "Tengah",
    "Middle right": "Kanan tengah",
    "Bottom left": "Kiri bawah",
    "Bottom center": "Tengah bawah",
    "Bottom right": "Kanan bawah",
    "Sans (Inter)": "Sans (Inter)", // i18n-same — font family names
    "Serif (Georgia)": "Serif (Georgia)", // i18n-same — font family names
    "Impact": "Impact", // i18n-same
    "Monospace": "Monospace", // i18n-same — the design term Indonesian uses
    "Same as original": "Sama seperti aslinya",
  },
};

export default content;
