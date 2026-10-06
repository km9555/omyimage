import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/perbesar-ukuran-foto-kb (variant of compress-image, mode "increase"). */
const content: ToolPageContent = {
  toolId: "increase-image-size-in-kb",
  locale: "id",
  name: "Perbesar Ukuran Foto (KB)",
  tagline:
    "Buat foto atau tanda tangan minimal 10, 20, 50 KB, atau berapa pun yang diminta formulir — dengan menaikkan kualitas dan, kalau perlu saja, ukuran pikselnya. Atur juga maksimum untuk rentang seperti 20–50 KB. Gratis, di browser, tanpa unggah.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Perbesar Ukuran Foto KB Online — Gratis, Tanpa Unggah | oMyImage",
  metaDescription:
    "Perbesar ukuran file foto dalam KB online gratis — untuk formulir yang meminta minimal 10, 20, atau 50 KB. Kualitas naik, bukan turun. Di browser, tanpa unggah.",

  intro:
    "Kebanyakan alat gambar memperkecil file. Sebagian formulir justru meminta kebalikannya: \"ukuran foto 20 KB sampai 50 KB\", dan foto 12 KB yang Anda punya ditolak karena terlalu kecil. Halaman ini memperbesar ukuran file dalam KB sampai minimum yang Anda atur, dan menjaganya di bawah maksimum kalau ada. Caranya jujur — gambar disimpan dengan kualitas lebih tinggi, lalu dengan piksel lebih banyak — sehingga hasilnya minimal sama bagusnya dengan aslinya.",

  sections: [
    {
      heading: "Kenapa formulir punya ukuran minimum",
      id: "why-minimum",
      body: [
        "Ukuran minimum adalah pemeriksaan kualitas yang sederhana. Foto berukuran 5 KB biasanya sudah dikompres atau diperkecil begitu jauh sampai wajah tidak bisa dikenali, dan pembuat formulir memilih jumlah byte sebagai cara termudah menolaknya. Karena itu aturannya sering berupa rentang: minimal 20 KB supaya foto jelas, maksimal 50 KB supaya server tidak kewalahan.",
        "Jadi tujuannya bukan sekadar angka yang lebih besar, melainkan file yang melewati minimum karena membawa lebih banyak detail — persis yang ingin dipastikan oleh aturan formulir itu.",
      ],
    },
    {
      heading: "Bagaimana ukurannya bertambah",
      id: "how",
      body: [
        "Pertama, foto disimpan ulang sebagai JPG dengan kualitas tertinggi. File yang sebelumnya dikompres keras sering menjadi dua atau tiga kali lipat dengan cara ini, tanpa kehilangan apa pun. Kalau masih kurang dari minimum, gambar diperbesar bertahap — sebesar akar kuadrat dari kekurangannya, karena ukuran file tumbuh mengikuti jumlah piksel — sampai empat kali lebar dan tingginya.",
        "Kalau ada maksimum dan file yang diperbesar melewatinya, kualitas diturunkan seperlunya saja agar masuk ke rentang. Rinciannya tampil di samping setiap file: berapa besar kenaikannya dan, kalau diperbesar, ukuran pikselnya yang baru.",
      ],
    },
    {
      heading: "Kapan file ditambah data kosong",
      id: "padding",
      body: [
        "Gambar yang sangat sederhana, seperti tanda tangan kecil di latar putih, bisa tetap di bawah minimum walaupun kualitasnya maksimal dan ukurannya empat kali lipat. Hanya saat itu alat ini menambahkan blok data kosong ke JPG sampai mencapai minimum. Semua penampil gambar mengabaikan blok itu: gambarnya persis sama, filenya hanya lebih berat.",
        "Daftar hasil memberi tahu file mana yang ditambah data. Untuk tanda tangan dengan ukuran piksel tetap, alat Ubah Ukuran Tanda Tangan melakukan hal yang sama setelah membersihkan dan memotong tanda tangannya.",
      ],
    },
    {
      heading: "Rentang seperti 20–50 KB",
      id: "ranges",
      body: [
        "Masukkan angka yang lebih kecil sebagai minimum dan yang lebih besar sebagai maksimum. File yang sudah berupa JPG di dalam rentang dikembalikan tanpa diubah, dan sisanya dibawa masuk ke rentang. Untuk masalah sebaliknya — file terlalu besar — gunakan Kompres Foto atau salah satu halaman kompres ke ukuran tertentu.",
        "Formulir berbeda pendapat apakah satu kilobyte itu 1.000 atau 1.024 byte, jadi alat ini memakai tafsiran yang aman di setiap ujung: minimum 20 KB berarti minimal 20.480 byte, dan maksimum 50 KB berarti paling banyak 50.000 byte. File lolos dengan cara hitung mana pun.",
      ],
    },
    {
      heading: "Untuk pendaftaran CPNS, kampus, dan lamaran",
      id: "registration",
      body: [
        "Portal pendaftaran sering memberi batas bawah dan atas untuk pas foto, scan KTP, atau ijazah. Kalau file Anda ditolak karena terlalu kecil, perbesar di sini dengan minimum yang tertulis, lalu unggah ulang. Periksa juga syarat lainnya — format, ukuran piksel, dan warna latar — karena ukuran file hanya salah satunya.",
      ],
    },
  ],

  howToTitle: "Cara memperbesar ukuran foto dalam KB",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau letakkan gambar yang terlalu kecil — JPG, PNG, atau WEBP." },
    { title: "Atur minimum (dan maksimum)", description: "Ketik ukuran minimum dalam KB, dan maksimum juga kalau formulir memberi rentang." },
    { title: "Unduh", description: "Setiap file kembali sebagai JPG yang minimal sebesar batas minimum." },
  ],

  features: [
    { icon: "high_quality", title: "Kualitas naik, bukan turun", description: "File membesar dengan menyimpan gambar berkualitas lebih tinggi lebih dulu — tidak ada yang dirusak demi menambah byte." },
    { icon: "photo_size_select_large", title: "Rentang beres", description: "Atur minimum dan maksimum, misalnya 20–50 KB, dan setiap file masuk ke dalamnya." },
    { icon: "lock", title: "Tidak ada yang diunggah", description: "Foto diproses di browser dan tidak meninggalkan perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara memperbesar ukuran foto dalam KB?", a: "Tambahkan foto, ketik minimum yang diminta formulir — misalnya 20 KB — lalu tekan Perbesar. Anda mendapat JPG yang minimal sebesar itu." },
    { q: "Apakah memperbesar KB membuat foto lebih bagus?", a: "Tidak melebihi aslinya — detail yang hilang tidak bisa kembali. Gambar disimpan dengan kualitas lebih tinggi, jadi hasilnya sama bagus dengan aslinya, tidak pernah lebih buruk." },
    { q: "Formulir meminta 20 KB sampai 50 KB. Apa yang harus saya isi?", a: "20 sebagai minimum dan 50 sebagai maksimum. File dibawa masuk ke rentang itu, dan JPG yang sudah di dalamnya dibiarkan apa adanya." },
    { q: "Apakah ukuran pikselnya berubah?", a: "Hanya kalau kualitas saja tidak cukup. Saat itu gambar diperbesar, paling banyak empat kali, dan ukuran barunya tampil di samping file." },
    { q: "Apa arti \"ditambah data kosong agar mencapai minimum\"?", a: "Gambar terlalu sederhana untuk mencapai minimum walaupun kualitasnya maksimal dan diperbesar empat kali, jadi file ditambah data kosong. Gambarnya tidak berubah." },
    { q: "Bisakah ukuran file PNG diperbesar?", a: "Bisa, tetapi hasilnya JPG, yang memang diharapkan formulir dengan batas KB. Bagian transparan diisi dengan warna latar yang Anda pilih." },
    { q: "Apakah foto saya diunggah?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Bagaimana dengan tanda tangan?", a: "Untuk tanda tangan, Ubah Ukuran Tanda Tangan lebih praktis: latarnya dibersihkan, tepinya dipotong, ukurannya dibuat tepat, lalu ukuran filenya dibawa ke rentang yang diminta." },
  ],

  security:
    "Foto dan tanda tangan diproses di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
