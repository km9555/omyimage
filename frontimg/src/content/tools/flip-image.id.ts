import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/mirror-foto (variant of rotate-image, flipH). "mirror foto" 2,400/mo — the loanword wins over "balik foto". */
const content: ToolPageContent = {
  toolId: "flip-image",
  locale: "id",
  name: "Mirror Foto",
  tagline:
    "Mirror foto secara horizontal atau vertikal — perbaiki selfie yang terbalik, tulisan yang terbaca mundur, dan foto produk dalam satu klik. Sekaligus banyak, JPG, PNG, dan WEBP, semuanya di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Mirror Foto Online — Balik Foto Horizontal, Gratis | oMyImage",
  metaDescription:
    "Mirror foto secara online, horizontal atau vertikal: perbaiki selfie terbalik dan tulisan yang terbaca mundur. Sekaligus banyak, JPG, PNG, WEBP, sepenuhnya di browser.",

  intro:
    "Mirror foto berarti membalik gambar seperti di cermin: mirror horizontal menukar kiri dan kanan, seperti saat Anda bercermin, dan mirror vertikal membaliknya atas-bawah, seperti pantulan tepi danau di air. Halaman ini langsung terbuka dengan mirror horizontal aktif, karena itulah yang paling sering dibutuhkan — membalik selfie dari kamera depan, memperbaiki tulisan yang terbaca terbalik, atau membuat semua foto dalam satu seri menghadap ke arah yang sama. Tambahkan satu foto atau satu folder, lihat pratinjaunya, lalu unduh.",

  sections: [
    {
      heading: "Mirror atau putar: mana yang Anda butuhkan?",
      id: "flip-vs-rotate",
      body: [
        "Memutar memutar seluruh gambar di titik tengahnya, jadi foto yang tidur bisa dibuat tegak; tidak ada yang dicerminkan. Mirror membalik gambarnya, sehingga tulisan terbaca mundur dan tangan kiri orang menjadi tangan kanan.",
        "Cara cepat memeriksa: kalau foto sudah tegak tetapi menghadap ke arah yang salah, Anda butuh mirror. Kalau foto miring atau terbalik tetapi selebihnya benar, Anda butuh putar — kontrol keduanya ada di panel yang sama, jadi bisa salah satu atau dua-duanya sekaligus.",
      ],
    },
    {
      heading: "Kenapa selfie hasilnya terbalik",
      id: "selfies",
      body: [
        "Kamera depan ponsel menampilkan pratinjau yang dicerminkan karena begitulah kita terbiasa melihat diri di cermin, dan banyak ponsel juga menyimpan fotonya seperti itu. Hasilnya foto dengan tulisan di kaos atau papan nama di belakang Anda terbaca mundur, dan belahan rambut ada di sisi yang tidak dilihat orang lain.",
        "Mirror horizontal mengembalikan foto seperti yang dilihat orang lain. Beberapa ponsel punya pengaturan agar foto kamera depan selanjutnya disimpan tanpa dicerminkan; untuk foto yang sudah terlanjur diambil, mirror di sini adalah cara tercepat.",
      ],
    },
    {
      heading: "Alasan berguna untuk mirror foto",
      id: "uses",
      body: [
        "Desainer membalik foto produk supaya semua barang di etalase menghadap ke arah yang sama, dan membalik potret supaya orangnya menghadap ke dalam halaman, bukan ke luar. Untuk sablon dan transfer kaos, gambar dicerminkan dulu karena hasil cetaknya terbalik. Pelukis membalik gambarnya untuk melihat kesalahan proporsi yang sudah tidak lagi terlihat oleh mata.",
        "Mirror sendiri tidak mengubah piksel apa pun, hanya urutannya, jadi mirror sekali lagi mengembalikan susunan aslinya. Simpan sebagai PNG supaya file tetap benar-benar lossless; keluaran JPG disimpan ulang dengan kualitas tinggi.",
      ],
    },
    {
      heading: "Kapan sebaiknya tidak di-mirror",
      id: "text-and-logos",
      body: [
        "Mirror horizontal membalik semua yang ada di foto, termasuk tulisan. Logo, papan jalan, pelat nomor, dan label harga akan terbaca mundur, jadi foto produk dengan kemasan bertulisan biasanya lebih baik dibiarkan — atau di-mirror lalu dicek tulisannya sebelum diunggah.",
        "Tangkapan layar hampir tidak pernah perlu di-mirror: kalau terlihat miring, yang dibutuhkan adalah memutarnya. Untuk potret, ingat bahwa wajah tidak benar-benar simetris; foto orang yang Anda kenal baik bisa terasa sedikit aneh setelah di-mirror, padahal begitulah ia melihat dirinya di cermin.",
        "Kalau ragu, simpan foto asli di samping salinan yang sudah di-mirror dan bandingkan di layar ponsel, bukan hanya di laptop: dengan begitu tulisan yang terbalik dan detail yang janggal lebih mudah terlihat sebelum foto dibagikan.",
      ],
    },
    {
      heading: "Mirror satu seri foto untuk katalog",
      id: "catalog",
      body: [
        "Kalau produk di katalog difoto dari arah yang berbeda-beda, etalase toko terlihat berantakan. Tambahkan semua foto yang menghadap ke arah yang salah dalam satu kali proses — semuanya di-mirror dengan cara yang sama dan bisa diunduh dalam satu ZIP.",
        "Sebelum diunggah, periksa seluruh serinya: untuk kemasan yang bertulisan, lebih baik foto ulang produknya dari sisi yang benar daripada di-mirror.",
      ],
    },
  ],

  howToTitle: "Cara mirror foto",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau seret satu atau banyak file JPG, PNG, atau WEBP." },
    { title: "Pilih arahnya", description: "Mirror horizontal sudah aktif; ganti ke vertikal atau gabungkan dengan putar kalau perlu." },
    { title: "Unduh", description: "Unduh foto yang sudah di-mirror, atau semuanya sekaligus dalam ZIP." },
  ],

  features: [
    { icon: "flip", title: "Horizontal atau vertikal", description: "Mirror kiri-kanan atau atas-bawah, terpisah atau bersamaan, dengan pratinjau langsung." },
    { icon: "burst_mode", title: "Satu set sekaligus", description: "Mirror semua foto dalam satu kali proses dengan cara yang sama dan unduh bersamaan." },
    { icon: "lock", title: "Tidak diunggah", description: "Mirror dilakukan di browser, jadi foto Anda tetap di perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mirror foto secara horizontal?", a: "Tambahkan foto — mirror horizontal sudah aktif — periksa pratinjaunya, lalu unduh. Sesederhana itu." },
    { q: "Apa bedanya mirror dan balik foto?", a: "Dalam praktiknya sama. \"Mirror\" biasanya berarti membalik horizontal; \"balik\" bisa juga berarti vertikal, yang juga tersedia di halaman ini. Untuk foto yang miring atau terbalik posisinya, gunakan Putar Foto." },
    { q: "Bagaimana memperbaiki selfie yang terbalik?", a: "Mirror secara horizontal. Kamera depan sering menyimpan foto yang dicerminkan, dan mirror horizontal menampilkan Anda seperti yang dilihat orang lain." },
    { q: "Bisakah mirror foto secara vertikal?", a: "Bisa. Aktifkan mirror vertikal di pengaturan — sendiri atau bersama mirror horizontal." },
    { q: "Bisakah banyak foto di-mirror sekaligus?", a: "Bisa. Tambahkan satu kumpulan foto; semuanya di-mirror dengan cara yang sama dan bisa diunduh dalam ZIP." },
    { q: "Apakah PNG transparan tetap transparan?", a: "Ya, selama formatnya tetap PNG atau WEBP. JPG tidak punya transparansi, jadi bagian transparan akan diisi warna latar." },
    { q: "Apakah mirror bisa memperbaiki tulisan yang terbaca mundur?", a: "Bisa — mirror horizontal mengubah tulisan yang tercermin menjadi teks biasa, asalkan tulisannya memang tercermin, bukan difoto dari balik kaca dengan sudut miring." },
    { q: "Apakah kualitas foto turun setelah di-mirror?", a: "Tidak kalau disimpan sebagai PNG: pikselnya hanya bertukar tempat. Kalau disimpan sebagai JPG, file disimpan ulang dengan kualitas tinggi dan perbedaannya tidak terlihat." },
    { q: "Bisakah mirror foto lalu sekalian diputar?", a: "Bisa. Kontrol putar ada di panel yang sama — aktifkan mirror dan pilih putaran 90°, 180°, atau sudut sendiri, lalu keduanya diterapkan sekaligus." },
  ],

  security:
    "Foto Anda tidak pernah keluar dari perangkat. Mirror berjalan sepenuhnya di browser, tanpa ada yang diunggah atau disimpan.",
};

export default content;
