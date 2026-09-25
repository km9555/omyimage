import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/gif-maker.
 *
 * Measured (Indonesia, per month): gif maker 12,100 (KD 83) vs buat gif 390.
 * The loanword owns the query, so it is the name, slug and H1; «buat gif»,
 * «membuat gif» and «animasi gif» ride in the title and aliases.ts. KD 83 is
 * one of the three contested terms in the locale — the page competes on
 * honesty (use video when the destination takes video) and depth rather than
 * on the head term alone.
 *
 * Local uses named: animated greetings (Lebaran, birthdays) shared in chats,
 * product angles for online shops, step-by-step tutorials.
 *
 * The other half of the gif-ke-gambar round trip: pull frames apart there,
 * fix them, reassemble here.
 */
const content: ToolPageContent = {
  toolId: "gif-maker",
  locale: "id",
  // The loanword leads (12,100/mo); the native phrase makes the H1 Indonesian
  // rather than a copy of the English one. Breadcrumb and schema keep the
  // short product name.
  name: "GIF Maker: Buat GIF Animasi",
  seoName: "GIF Maker",
  crumbLabel: "GIF Maker",
  tagline:
    "Buat GIF animasi dari foto-foto Anda secara online — atur kecepatan, urutan, ukuran, dan pengulangan dengan pratinjau langsung. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "GIF Maker Online Gratis — Buat GIF Animasi dari Foto | oMyImage",
  metaDescription:
    "Buat GIF animasi dari foto online gratis: atur kecepatan per frame, urutan, ukuran, warna, dan pengulangan dengan pratinjau langsung. Bisa juga mengedit GIF yang sudah ada — di browser, tanpa daftar.",

  intro:
    "Ubah serangkaian gambar menjadi animasi yang berulang. GIF Maker ini menyusun GIF animasi dari foto-foto Anda langsung di browser, dengan pratinjau langsung, kecepatan yang bisa diatur, ukuran hasil, pengulangan, dan urutan frame yang bisa diubah. Buat slideshow, GIF reaksi, ucapan selamat bergerak, atau animasi sederhana dan langsung unduh — tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Kenapa GIF masih bertahan",
      id: "why",
      body: [
        "Secara teknis, GIF seharusnya sudah lama menghilang. Format ini lahir pada 1987, dibatasi 256 warna per frame, kompresinya lemah, dan file video bisa melakukan hal yang sama dengan ukuran jauh lebih kecil dan kualitas jauh lebih baik.",
        "GIF bertahan karena apa yang tidak ia butuhkan. GIF diputar otomatis, berulang selamanya, tidak perlu pemutar, tombol, atau ketukan, dan bekerja di tempat-tempat yang tidak bisa memutar video — aplikasi chat, file README di layanan kode, email di sebagian aplikasi, forum, dan sistem apa pun yang memperlakukannya sebagai gambar biasa.",
        "Itulah seluruh perhitungannya. Kalau tujuannya menerima video, pakai video. Kalau hanya menerima gambar, GIF adalah satu-satunya pilihan yang bergerak.",
      ],
    },
    {
      heading: "Untuk apa orang membuat GIF",
      id: "uses",
      body: [
        "Ucapan selamat yang bergerak — Lebaran, ulang tahun, tahun baru — untuk dibagikan di chat atau media sosial. Beberapa foto dengan tulisan, diputar bergantian, sudah cukup menjadi kartu ucapan yang hidup.",
        "Foto produk dari beberapa sudut untuk toko online: depan, samping, belakang, dan detail, diputar otomatis dalam satu gambar yang bisa dipasang di mana pun gambar biasa diterima.",
        "Tutorial langkah demi langkah dan perbandingan before-after, diputar dengan tempo lambat agar setiap langkah sempat dibaca.",
      ],
    },
    {
      heading: "Batas 256 warna",
      id: "colours",
      body: [
        "GIF menyimpan palet paling banyak 256 warna per frame, dan setiap piksel harus salah satunya. Untuk ilustrasi datar, gambar garis, rekaman layar aplikasi, dan animasi logo, itu lebih dari cukup — gambar seperti itu jarang punya lebih banyak warna.",
        "Foto adalah kasus yang sulit. Satu frame pemandangan nyata berisi ribuan warna yang berbeda, jadi encoder harus memilih 256 dan memperkirakan sisanya. Dithering menaburkan piksel dari warna palet yang berdekatan untuk memalsukan nuansa di antaranya, itulah sebabnya GIF dari foto tampak berbintik dan sedikit kasar, paling terlihat di langit dan kulit.",
        "Tidak ada yang bisa dilakukan tentang hal ini di dalam format GIF. Kalau pita warna tidak bisa diterima, jawabannya adalah video, bukan GIF yang lebih baik.",
      ],
    },
    {
      heading: "Mengendalikan ukuran file",
      id: "size",
      body: [
        "Ada tiga faktor, dan dimensi yang paling menentukan. Setiap frame menyimpan gambar utuh, jadi membagi dua lebar dan tinggi berarti memangkas data setiap frame menjadi seperempat — inilah pengungkit yang paling ampuh, dan GIF selebar 480 piksel sudah tampak bagus di jendela chat atau README.",
        "Berikutnya jumlah frame. Lebih sedikit frame berarti animasi yang sedikit patah-patah, tetapi file yang proporsional lebih kecil, dan banyak animasi tetap enak dilihat pada 8–12 frame per detik, bukan 24. Memangkas urutan hanya pada frame yang membawa gerakan biasanya tidak terasa kehilangannya.",
        "Yang ketiga adalah panjang putaran. Putaran dua detik yang berulang selamanya lebih enak ditonton daripada putaran sepuluh detik, dan lima kali lebih kecil. Menahan diri untuk tidak memasukkan semuanya adalah kebiasaan terbaik di sini.",
      ],
    },
    {
      heading: "Waktu dan irama",
      id: "timing",
      body: [
        "Jeda antar-frame menentukan tempo. Sekitar 100 ms per frame memberi kira-kira sepuluh frame per detik — cukup halus untuk kebanyakan animasi pendek tanpa biaya file dari tempo yang lebih cepat. Lebih cepat dari sekitar 60 ms, Anda membayar banyak byte untuk kehalusan yang jarang disadari orang.",
        "Jeda yang lebih lambat mengubah animasi menjadi slideshow, dan itu sering justru yang Anda inginkan. Tutorial langkah demi langkah, beberapa sudut produk, atau perbandingan before-after lebih enak dibaca pada 500–800 ms per frame, memberi waktu untuk mencerna setiap frame sebelum berganti.",
        "Satu sentuhan praktis: kalau animasinya berulang selamanya, tahan frame terakhir sedikit lebih lama — setiap frame bisa punya jedanya sendiri. Jeda itu memberi mata waktu untuk bersiap lagi dan membuat animasinya tidak terasa terburu-buru.",
      ],
    },
  ],

  howToTitle: "Cara membuat GIF animasi",
  steps: [
    { title: "Unggah frame", description: "Pilih dua gambar atau lebih, atau seret ke area kerja. Bisa juga memasukkan GIF yang sudah ada untuk diedit ulang." },
    { title: "Atur waktunya", description: "Ubah urutan frame, atur kecepatan untuk semua atau per frame, dan pilih ukuran, cara menyesuaikan, jumlah warna, dan pengulangan — semuanya dengan pratinjau langsung." },
    { title: "Buat & unduh", description: "Klik Buat GIF — GIF disusun di browser, animasi jadi dan ukurannya ditampilkan, lalu diunduh saat Anda sudah puas." },
  ],

  features: [
    { icon: "gif_box", title: "Pratinjau animasi langsung", description: "Tonton animasi Anda diputar pada kecepatan yang sebenarnya sebelum diekspor — tanpa menebak-nebak." },
    { icon: "speed", title: "Kendali penuh", description: "Atur jeda untuk semua atau per frame, putar terbalik atau bolak-balik, dan pilih ukuran hasil, cara menyesuaikan, jumlah warna, pengulangan, dan latar." },
    { icon: "lock", title: "100% privat", description: "GIF disusun sepenuhnya di browser Anda — foto Anda tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Berapa banyak gambar yang bisa dipakai?", a: "Minimal dua, dan sebanyak yang Anda mau — setiap gambar menjadi satu frame animasi." },
    { q: "Bisakah kecepatannya diatur?", a: "Bisa, di dua tingkat. Penggeser jeda frame menentukan waktu bawaan setiap frame, ditampilkan dalam milidetik dan frame per detik, dan setiap frame bisa punya jeda sendiri — berguna untuk menahan kartu judul atau frame terakhir." },
    { q: "Bagaimana kalau ukuran gambar saya berbeda-beda?", a: "Semuanya disesuaikan ke satu kanvas yang cukup untuk menampung semuanya. \"Pas\" menampilkan setiap frame utuh dan mengisi selisihnya dengan warna latar, \"Penuhi\" mengisi kanvas dan memotong kelebihannya, dan \"Regangkan\" memaksa ukurannya pas." },
    { q: "Bisakah GIF yang sudah ada diedit?", a: "Bisa. Masukkan sebuah GIF dan animasinya dipecah kembali menjadi frame-frame, dengan jeda asli setiap frame. Dari situ Anda bisa mengubah urutan, menghapus, mengatur ulang waktu, memutar terbalik atau bolak-balik, lalu mengekspornya lagi." },
    { q: "Bisakah GIF berlatar transparan?", a: "Bisa — pilih Transparan sebagai ganti warna, dan area transparan di gambar sumber tetap transparan. Transparansi GIF hanya penuh atau tidak sama sekali per piksel, jadi tepi yang halus menjadi tepi yang keras; kalau itu mengganggu, pakai warna solid di belakangnya." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan GIF disusun secara lokal di browser Anda." },
    { q: "Kenapa GIF saya begitu besar?", a: "Karena GIF format lama dengan kompresi lemah dan tidak bisa membuang detail seperti codec modern. Setiap frame menambah ukuran file, dan konten foto adalah kasus terburuk. Memperkecil dimensi, mengurangi jumlah frame, dan memperpendek putaran adalah tiga pengungkit yang berarti." },
    { q: "Bagaimana cara membuat filenya lebih kecil?", a: "Kecilkan dimensinya dulu — membagi dua lebar dan tinggi memangkas setiap frame menjadi seperempat. Lalu pakai lebih sedikit frame, dan buat putarannya pendek. GIF selebar 480 piksel dengan 15 frame adalah target yang masuk akal; 800 piksel dengan 60 frame jarang begitu." },
    { q: "Kenapa warnanya tampak bergaris-garis?", a: "GIF hanya mengizinkan paling banyak 256 warna, jadi apa pun yang bergradasi — langit, warna kulit, bayangan — harus diperkirakan, dan loncatan di antara warna yang tersisa tampak sebagai pita. Alat ini membuat satu palet bersama untuk seluruh animasi, sehingga warna tetap stabil dari frame ke frame. Grafis datar dan ilustrasi jauh lebih tahan terhadap batas ini daripada foto." },
    { q: "Jeda frame berapa yang sebaiknya dipakai?", a: "Sekitar 100 ms per frame memberi kira-kira 10 frame per detik, yang terasa halus untuk kebanyakan animasi pendek. Jeda lebih pendek tampak lebih halus tetapi melipatgandakan ukuran file; jeda lebih panjang terasa seperti slideshow, yang sering tepat untuk urutan langkah demi langkah." },
    { q: "Bisakah membuat GIF dari video?", a: "Tidak dengan alat ini — alat ini menyusun GIF dari gambar diam yang Anda berikan. Frame-nya perlu diambil dari video lebih dulu. Untuk rangkaian tangkapan layar, sudut produk, atau stop-motion, inilah alat yang tepat." },
    { q: "Sebaiknya pakai GIF atau video?", a: "Hampir selalu video, kalau platformnya mendukung — MP4 pendek hanya sebagian kecil ukurannya dengan kualitas jauh lebih baik. GIF hanya unggul di tempat yang butuh putar-otomatis tanpa pemutar: aplikasi chat, file README, email di sebagian aplikasi, dan forum lama." },
  ],

  security:
    "Foto Anda tetap privat. GIF disusun sepenuhnya di browser Anda dengan pustaka open-source gifenc — dan GIF yang diimpor juga dibuka di sana, dengan gifuct-js. Tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "335" },

  ui: {
    // GifMakerTool.tsx — module-scope FIT_LABELS
    "Contain": "Pas",
    "Cover": "Penuhi",
    "Stretch": "Regangkan",
    // "Custom" here is the max SIZE.
    "Custom": "Kustom",
    // GifMakerTool.tsx
    "Couldn't read 1 image. It's marked and will be skipped.":
      "1 gambar tidak bisa dibaca. Gambar itu ditandai dan akan dilewati.",
    "Couldn't read {n} images. They're marked and will be skipped.":
      "{n} gambar tidak bisa dibaca. Gambar-gambar itu ditandai dan akan dilewati.",
    "Imported 1 frame from {name}.": "1 frame diimpor dari {name}.",
    "Imported {n} frames from {name}.": "{n} frame diimpor dari {name}.",
    "Couldn't read {name}.": "{name} tidak bisa dibaca.",
    "Add at least two images to make an animation.": "Tambahkan minimal dua gambar untuk membuat animasi.",
    "Canvas is not supported in this browser.": "Browser ini tidak mendukung canvas.",
    "Created a GIF from {n} frames ({size}).": "GIF dibuat dari {n} frame ({size}).",
    "Couldn't create the GIF.": "GIF tidak bisa dibuat.",
    "or drop two or more JPG, PNG or WEBP images here — or a GIF to re-edit":
      "atau letakkan dua gambar JPG, PNG, atau WEBP atau lebih di sini — atau sebuah GIF untuk diedit ulang",
    "Unreadable — skipped": "Tidak terbaca — dilewati",
    "Delay": "Jeda",
    "Frame delay for {name}, in milliseconds": "Jeda frame untuk {name}, dalam milidetik",
    "Clear frames": "Hapus frame",
    "GIF settings": "Pengaturan GIF",
    "Create": "Buat",
    "Building GIF…": "Menyusun GIF…",
    "Live preview": "Pratinjau langsung",
    "1 frame": "1 frame", // i18n-same — «frame» is the Indonesian word in video and GIF apps
    "{n} frames": "{n} frame",
    "{s}s per loop": "{s} dtk per putaran",
    "Your GIF": "GIF Anda",
    "Finished GIF": "GIF jadi",
    "Download GIF": "Unduh GIF",
    "Animation Settings": "Pengaturan Animasi",
    "Encoding frame {done} of {total}…": "Menyusun frame {done} dari {total}…",
    "Set the order with the arrows. The preview plays at your chosen speed.":
      "Atur urutannya dengan tanda panah. Pratinjau diputar pada kecepatan yang Anda pilih.",
    "Create GIF": "Buat GIF",
    "Frame delay": "Jeda frame",
    "Applies to frames without their own delay.": "Berlaku untuk frame yang tidak punya jeda sendiri.",
    "Playback": "Pemutaran",
    "Reverse": "Terbalik",
    "Boomerang": "Bolak-balik",
    "Looping": "Pengulangan",
    "Loop forever": "Ulangi terus",
    "Play once": "Putar sekali",
    "Repeat a set number of times": "Ulangi beberapa kali",
    "Number of repeats": "Jumlah pengulangan",
    "Max size (longest side)": "Ukuran maksimum (sisi terpanjang)",
    "Custom max size in pixels": "Ukuran maksimum kustom dalam piksel",
    "Fit": "Penyesuaian",
    "Contain keeps the whole frame (may add margins). Cover fills the canvas (may crop). Stretch distorts to fill exactly.":
      "Pas mempertahankan frame utuh (mungkin menambah pinggiran). Penuhi mengisi kanvas (mungkin memotong). Regangkan mengubah bentuk agar pas persis.",
    "Colours": "Warna",
    "GIF stores at most 256 colours. Lowering this shrinks the file; flat graphics survive it far better than photos.":
      "GIF menyimpan paling banyak 256 warna. Menurunkannya memperkecil file; grafis datar jauh lebih tahan terhadapnya daripada foto.",
    "Background (behind transparent areas)": "Latar (di belakang area transparan)",
  },
};

export default content;
