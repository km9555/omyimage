import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/image-to-base64.
 *
 * Measured: «image to base64» 1,600/mo (KD 38). The reader is a developer who
 * types the English term, so the slug stays English and the H1 is «Gambar ke
 * Base64» — the Indonesian name, as the tools dictionary has it. Code
 * identifiers (Data URI, CSS, HTML) are never translated.
 *
 * Local angle in `security`: Indonesian APIs for e-KYC and payment onboarding
 * commonly take a KTP photo or selfie as a Base64 string inside JSON, which is
 * exactly where «encoding is not encryption» stops being theory.
 */
const content: ToolPageContent = {
  toolId: "image-to-base64",
  locale: "id",
  name: "Gambar ke Base64",
  tagline:
    "Ubah gambar menjadi string Base64 atau data URI secara online — dengan keluaran mentah, CSS, dan HTML, serta salin sekali ketuk. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Image to Base64 Online Gratis — Ubah Gambar ke Base64 & Data URI | oMyImage",
  metaDescription:
    "Ubah gambar ke Base64 online gratis: data URI, Base64 mentah, aturan CSS, atau tag <img> siap tempel, dengan salin sekali klik. Diproses di browser, tanpa unggahan, tanpa daftar.",

  intro:
    "Tanamkan gambar langsung ke dalam kode. Alat Gambar ke Base64 ini mengodekan gambar apa pun menjadi data URI Base64 langsung di browser Anda, dan juga memberikan string mentahnya, aturan background CSS, serta tag <img> yang siap pakai. Cocok untuk menanamkan ikon dan logo kecil tanpa permintaan HTTP tambahan. Tidak ada yang diunggah, jadi gambar Anda tetap privat.",

  sections: [
    {
      heading: "Untuk apa encoding Base64",
      id: "what",
      body: [
        "Base64 menulis ulang data biner hanya dengan sekumpulan karakter teks yang terbatas. Base64 ada karena banyak sekali sistem dibuat untuk membawa teks dan berperilaku tak terduga saat diberi byte mentah — isi email, payload JSON, dokumen XML, atribut HTML, parameter URL, dan banyak format konfigurasi.",
        "Mengodekan gambar ke Base64 memungkinkan Anda memasukkan gambarnya sendiri ke dalam salah satu saluran khusus teks itu. Dibungkus sebagai data URI, dengan tipe MIME di bagian depannya, gambar bisa langsung masuk ke atribut src tag img atau aturan CSS background-image, dan browser menyusun kembali byte aslinya.",
        "Harganya adalah ukuran. Empat karakter membawa tiga byte, jadi bentuk teksnya kira-kira sepertiga lebih besar daripada filenya, dan tidak ada kompresi yang bisa menutupnya.",
      ],
    },
    {
      heading: "Kapan inlining membantu, kapan merugikan",
      id: "tradeoffs",
      body: [
        "Keuntungannya adalah satu permintaan jaringan lebih sedikit. Untuk aset yang sangat kecil, perjalanan bolak-baliknya bisa memakan waktu lebih lama daripada byte-nya, jadi inlining benar-benar membuat halaman tampil lebih cepat. Sekitar 5 KB adalah patokan yang biasa dipakai.",
        "Di atas itu, inlining cenderung merugikan karena alasan yang mudah terlewat. Gambar yang di-inline tidak bisa di-cache terpisah, jadi ikut diunduh ulang bersama HTML di setiap kunjungan, sedangkan file gambar biasa diambil sekali lalu dipakai ulang. Gambar itu juga tidak bisa lazy-load, dan membengkakkan dokumennya sendiri, yang memperlambat parsing dan tampilan pertama.",
        "Panduan praktisnya: inline ikon, logo mungil, dan placeholder. Sajikan foto dengan cara biasa.",
      ],
    },
    {
      heading: "Masalah di email",
      id: "email",
      body: [
        "Menanamkan gambar sebagai data URI di email HTML terlihat seperti cara elegan untuk tidak perlu menghosting apa pun, tetapi cukup sering gagal sehingga bukan pilihan bawaan yang baik. Outlook di Windows khususnya sudah lama menolak menampilkannya, dan beberapa aplikasi email lain membuang atau memblokirnya demi keamanan.",
        "Cara yang andal adalah menghosting gambar dan menautkannya, atau melampirkannya dan merujuknya dengan referensi CID — mekanisme yang memang dirancang untuk aplikasi email. Base64 di email hanya layak dipakai kalau Anda mengendalikan aplikasi email setiap penerimanya.",
      ],
    },
    {
      heading: "Encoding bukan enkripsi",
      id: "security",
      body: [
        "Base64 kadang dikira bentuk penyamaran atau perlindungan. Bukan keduanya. Console browser mana pun, editor teks dengan decoder, atau seribu situs web bisa mengubah string itu kembali menjadi gambar aslinya dalam sedetik. Tidak ada kunci dan tidak ada rahasia.",
        "Ini penting saat gambarnya sendiri sensitif. Banyak API di Indonesia — untuk verifikasi e-KYC atau pendaftaran pembayaran — menerima foto KTP atau swafoto sebagai string Base64 di dalam JSON. Menempelkan string seperti itu ke file konfigurasi, tiket, log, atau dokumen bersama sama terbukanya dengan melampirkan fotonya, dan sering kali kurang terasa — stringnya terlihat seperti acak, sehingga orang cenderung menganggapnya aman.",
        "Encoding di sini terjadi di browser Anda, jadi gambarnya tidak pernah diunggah. Apa yang Anda lakukan dengan string hasilnya — di situlah pertanyaan privasi yang sesungguhnya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar ke Base64",
  steps: [
    { title: "Unggah gambar", description: "Pilih sebuah gambar, atau seret ke area kerja." },
    { title: "Pilih format", description: "Beralih antara data URI, Base64 mentah, aturan background CSS, atau tag <img>." },
    { title: "Salin atau unduh", description: "Salin string-nya ke clipboard atau unduh sebagai file .txt." },
  ],

  features: [
    { icon: "data_object", title: "Empat format keluaran", description: "Dapatkan data URI siap pakai, Base64 mentah, aturan CSS background-image, atau tag <img> lengkap." },
    { icon: "bolt", title: "Encoding instan", description: "Encoding terjadi begitu file dimasukkan — tanpa menunggu, tanpa unggahan." },
    { icon: "lock", title: "100% privat", description: "Gambar Anda dikodekan di browser dan tidak pernah dikirim ke server." },
  ],

  faqs: [
    { q: "Apa itu data URI Base64?", a: "Representasi teks dari gambar Anda yang bisa ditanamkan langsung di HTML atau CSS, sehingga tidak perlu permintaan file terpisah." },
    { q: "Kenapa string-nya lebih besar dari file saya?", a: "Karena Base64 mewakili tiga byte biner dengan empat karakter teks, jadi bentuk terkodenya sekitar 33% lebih besar, ditambah sedikit untuk awalan data URI. Tambahan itu adalah harga untuk bisa menaruh data biner di tempat yang hanya menerima teks — karena itu paling cocok untuk gambar kecil seperti ikon dan logo." },
    { q: "Format apa saja yang bisa dikodekan?", a: "JPG, PNG, WEBP, GIF, BMP, SVG, dan AVIF. Hasilnya data URI lengkap dengan tipe MIME yang benar, jadi bisa langsung ditempel ke tag img atau stylesheet." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar, dan gambar dikodekan secara lokal di browser Anda — tidak ada yang diunggah." },
    { q: "Kapan sebaiknya memakai data URI?", a: "Untuk aset kecil — ikon, logo di tanda tangan email, placeholder, tekstur di halaman HTML satu file. Di bawah sekitar 5 KB, permintaan HTTP yang dihemat biasanya lebih berharga daripada tambahan ukurannya. Di atas itu, file gambar biasa yang disajikan terpisah lebih cepat." },
    { q: "Kenapa gambar inline saya tidak muncul di email?", a: "Karena beberapa aplikasi email besar memblokir atau mengabaikan data URI, dengan Outlook di Windows sebagai pelanggar yang paling konsisten. Untuk email, hosting gambarnya dan tautkan, atau pakai lampiran CID — Base64 inline tidak bisa diandalkan di sana." },
    { q: "Apakah Base64 mengenkripsi gambar saya?", a: "Tidak, dan ini salah paham yang umum. Base64 adalah encoding, bukan enkripsi — siapa pun bisa membaliknya dengan mudah, tanpa kunci. Base64 membuat data biner aman diangkut sebagai teks; sama sekali tidak memberi kerahasiaan." },
    { q: "Bisakah Base64 dipakai di CSS?", a: "Bisa, sebagai URL background-image, dan itu cara yang wajar untuk menanamkan ikon atau pola kecil. Perlu diingat, data URI di stylesheet diunduh oleh setiap pengunjung entah aturannya dipakai atau tidak, dan tidak bisa di-cache terpisah dari CSS-nya." },
    { q: "Bagaimana mengirim foto ke API yang meminta Base64?", a: "Pilih Base64 mentah kalau API meminta string saja, atau data URI kalau meminta lengkap dengan awalan tipe MIME — dokumentasi API biasanya menyebutkan yang mana. Perkecil fotonya dulu dengan Kompres Foto atau Ubah Ukuran Foto; string Base64 dari foto kamera ponsel bisa berukuran beberapa megabyte." },
    { q: "Bagaimana mengubah Base64 kembali menjadi gambar?", a: "Pakai alat Base64 ke Gambar: tempel string atau data URI-nya, dan gambar aslinya ditampilkan serta bisa diunduh." },
  ],

  security:
    "Gambar Anda tetap privat. Encoding Base64 terjadi sepenuhnya di browser Anda — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "298" },

  ui: {
    // ImageToBase64Tool.tsx — module-scope TABS. Code identifiers a developer
    // pastes; translating them would be wrong.
    "Data URI": "Data URI", // i18n-same
    "Raw Base64": "Base64 mentah",
    "CSS": "CSS", // i18n-same
    "HTML": "HTML", // i18n-same
    // ImageToBase64Tool.tsx
    "Please select an image file.": "Pilih file gambar.",
    "Couldn't read that image.": "Gambar itu tidak bisa dibaca.",
    "Copied to clipboard": "Disalin ke clipboard",
    "Copy failed.": "Gagal menyalin.",
    "or drop a JPG, PNG, WEBP, GIF or SVG here": "atau letakkan JPG, PNG, WEBP, GIF, atau SVG di sini",
    "Encoding options": "Opsi encoding",
    "Copy": "Salin",
    "{size} encoded": "{size} dikodekan",
    "Base64 Output": "Hasil Base64",
    "Tip:": "Tips:",
    "Base64 strings are about 33% larger than the file — best for small icons inlined in CSS or HTML. Everything runs in your browser.":
      "String Base64 sekitar 33% lebih besar daripada filenya — paling cocok untuk ikon kecil yang ditanamkan di CSS atau HTML. Semuanya berjalan di browser Anda.",
  },
};

export default content;
