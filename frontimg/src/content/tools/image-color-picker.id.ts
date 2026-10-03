import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/color-picker.
 *
 * Measured (Indonesia, per month): color picker 27,100 vs pemilih warna 260.
 * The English loanword has taken over completely, so it is the name, slug and
 * H1; «pemilih warna», «ambil warna» and «kode warna» ride in aliases.ts.
 * Much «color picker» demand is for a generic picker, not one that reads an
 * image, so the title and intro say «dari gambar» straight away.
 *
 * Local use named in `uses`: small businesses building banners and posts in
 * Canva, which takes a HEX code in its colour field — so the page tells them
 * where to paste it. Batik is named as a palette source for the same reason
 * English names «a painting or textile».
 *
 * WORD ORDER. The hint composes as `A <span>{file.name}</span> B` with literal
 * spaces around the filename. Indonesian keeps the English order —
 * «Klik di mana saja pada  foto.png  untuk memilih warna.» — so neither
 * fragment needs to move.
 */
const content: ToolPageContent = {
  toolId: "image-color-picker",
  locale: "id",
  name: "Color Picker & Palet Warna",
  tagline:
    "Ambil warna apa pun dari gambar secara online dan ekstrak seluruh palet warnanya di satu tempat — dapatkan kode HEX, RGB, dan HSL dengan kaca pembesar, lalu salin atau unduh paletnya sebagai lembar contoh warna. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Color Picker dari Gambar Online — Ambil Kode Warna HEX & RGB | oMyImage",
  metaDescription:
    "Color picker online gratis: ambil kode warna HEX, RGB, dan HSL dari titik mana pun di gambar, dan ekstrak palet 2–16 warna dominan. Salin sekali klik, langsung di browser, tanpa daftar.",

  intro:
    "Ambil warna yang persis dari gambar apa pun dalam hitungan detik — lalu ubah seluruh foto menjadi palet siap pakai. Color picker oMyImage bekerja seperti pipet: arahkan kursor dengan kaca pembesar dan klik untuk mengambil warna piksel mana pun, lalu salin kode HEX, RGB, atau HSL-nya. Sekaligus, warna dominan gambar diekstrak beserta porsinya masing-masing, sehingga Anda bisa menyalin seluruh palet atau mengunduh lembar contoh warna berlabel. Cocok untuk menyamakan warna brand, membuat moodboard, dan desain web atau produk. Semuanya berjalan di browser, jadi gambar Anda tetap privat.",

  sections: [
    {
      heading: "Mengambil warna dan membaca kodenya",
      id: "sampling",
      body: [
        "Mengambil warna berarti membaca nilai satu piksel dan menampilkannya dalam format yang dibutuhkan berbagai alat. HEX untuk CSS, Canva, dan software desain; RGB untuk kode; HSL saat Anda ingin membuat beberapa nuansa yang masih sekeluarga dengan mengubah satu komponen saja.",
        "HSL layak lebih sering dipakai. Karena rona dipisahkan dari saturasi dan kecerahan, membuat versi yang lebih terang dari warna brand cukup dengan mengubah satu angka, sedangkan di HEX Anda harus menebak tiga angka sekaligus. Untuk membuat warna hover, varian nonaktif, dan gradasi dari satu warna dasar, HSL jauh lebih mudah.",
        "Satu hal praktis: foto mengandung noise, jadi area yang tampak rata sebenarnya tidak rata. Dua piksel yang bersebelahan di langit yang sama bisa memberi dua nilai yang sedikit berbeda, dan keduanya tidak salah. Kaca pembesar membantu di sini — ambil titik di dalam sebuah area, bukan di tepinya, karena piksel tepat di perbatasan adalah campuran dua warna.",
      ],
    },
    {
      heading: "Mengekstrak palet warna",
      id: "palette",
      body: [
        "Analisis warna dominan melihat seluruh gambar, bukan satu piksel: warna yang mirip dikelompokkan, dan yang menutupi area paling luas ditampilkan beserta porsinya. Hasilnya adalah palet yang benar-benar ditangkap mata orang, yang tidak selalu sama dengan pilihan Anda sendiri — sebuah warna bisa terasa menonjol padahal hanya menempati sedikit bagian.",
        "Jumlah warnanya bisa diatur dari 2 sampai 16. Warna aksen yang kecil tetapi mencolok tetap mendapat tempat, tidak dirata-ratakan ke dalam latar. Kalau gambarnya memang hanya punya sedikit warna yang berbeda, alat ini akan mengatakannya, bukan mengisi daftar dengan nuansa yang hampir sama.",
        "Foto adalah sumber palet yang baik karena cahaya dalam satu adegan sudah menyelaraskan warnanya. Cara yang biasa: ambil warna dominan sebagai dasar, satu warna netral yang terang dari gambar untuk latar, dan satu warna yang pekat untuk aksen. Tiga atau empat warna sudah cukup; palet delapan warna cenderung kehilangan karakternya.",
      ],
    },
    {
      heading: "Warna yang serasi belum tentu mudah dibaca",
      id: "contrast",
      body: [
        "Inilah kesalahan yang perlu dihindari. Palet yang diambil dari foto dipilih karena warnanya serasi satu sama lain, dan itu tidak menjamin teks berwarna yang satu mudah dibaca di atas warna yang lain.",
        "Warna nada tengah adalah jebakannya: terlihat elegan, tetapi sering gagal memenuhi syarat kontras ke dua arah — tidak cukup terang untuk teks gelap, dan tidak cukup gelap untuk teks terang. WCAG meminta rasio 4,5:1 untuk teks biasa dan 3:1 untuk teks besar, dan biru keabu-abuan yang cantik di atas krem yang cantik bisa jatuh di sekitar 2:1.",
        "Pola yang aman: pakai palet hasil ekstraksi untuk aksen, garis, ilustrasi, dan latar, dan pakai warna teks yang kontrasnya sudah Anda periksa. Keserasian dan kontras adalah dua masalah yang berbeda dan perlu diselesaikan sendiri-sendiri.",
      ],
    },
    {
      heading: "Kegunaan sehari-hari",
      id: "uses",
      body: [
        "Yang paling sering: menyamakan desain dengan sebuah foto atau logo. Pemilik usaha yang membuat banner, poster, atau konten Instagram di Canva bisa mengambil kode HEX dari logonya di sini, lalu menempelkannya di kolom kode warna Canva — hasilnya warna yang persis sama, bukan kira-kira.",
        "Selain itu: menemukan kembali warna logo saat panduan brand-nya tidak ada, menyamakan warna grafik dengan foto produk, melihat palet pesaing dari tangkapan layar, dan mengambil warna dari lukisan atau kain batik yang sudah serasi.",
        "Semua warna diambil dari canvas di dalam browser Anda, jadi gambarnya tidak pernah diunggah — penting kalau sumbernya desain yang belum dirilis atau materi milik klien.",
      ],
    },
  ],

  howToTitle: "Cara mengambil warna dan mengekstrak palet dari gambar",
  steps: [
    { title: "Unggah gambar", description: "Pilih sebuah gambar, atau seret ke area kerja." },
    { title: "Arahkan & klik", description: "Gerakkan kursor di atas gambar untuk melihat warna lewat kaca pembesar, lalu klik piksel mana pun untuk mengunci warnanya." },
    { title: "Lihat paletnya", description: "Warna dominan gambar diambil otomatis — atur penggesernya untuk mendapatkan 2 sampai 16 warna." },
    { title: "Salin atau unduh", description: "Salin nilai HEX, RGB, atau HSL dengan sekali ketuk, salin seluruh palet sekaligus, atau unduh sebagai lembar contoh warna PNG." },
  ],

  features: [
    { icon: "colorize", title: "Akurat sampai ke piksel", description: "Ambil warna persis dari piksel mana pun dan baca langsung sebagai HEX, RGB, dan HSL." },
    { icon: "search", title: "Kaca pembesar", description: "Kaca pembesar mengikuti kursor sehingga Anda bisa membidik piksel yang tepat." },
    { icon: "palette", title: "Palet warna lengkap", description: "Mengekstrak 2–16 warna dominan beserta porsinya di gambar, dan tetap mempertahankan warna aksen yang kecil alih-alih meratakannya." },
    { icon: "lock", title: "100% privat", description: "Color picker dan palet berjalan sepenuhnya di browser Anda dengan HTML canvas — gambar Anda tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bagaimana cara mengetahui kode warna dari gambar?", a: "Unggah gambarnya, arahkan kursor dengan kaca pembesar, lalu klik titik yang Anda mau. Kode HEX, RGB, dan HSL-nya langsung muncul dan bisa disalin dengan sekali klik." },
    { q: "Format warna apa saja yang bisa disalin?", a: "HEX, RGB, dan HSL. Klik nilai mana pun untuk menyalinnya ke clipboard." },
    { q: "Bagaimana warna palet dipilih?", a: "Gambar dibaca dengan warna aslinya — tanpa diburamkan atau dihaluskan — lalu dikelompokkan menjadi area-area warna. Alat ini membuat lebih banyak kandidat warna dari yang dibutuhkan, lalu menyimpan yang umum sekaligus berbeda secara visual, sehingga aksen yang kecil tetapi mencolok tetap mendapat contoh warnanya sendiri dan tidak dirata-ratakan ke dalam latar." },
    { q: "Berapa banyak warna yang bisa diekstrak?", a: "Antara 2 dan 16, diatur dengan penggeser. Setiap contoh warna juga menunjukkan porsi gambar yang paling mendekati warna itu." },
    { q: "Bisakah paletnya diekspor?", a: "Bisa. Salin nilai HEX atau RGB satu per satu, salin seluruh daftar sekaligus, atau unduh lembar contoh warna PNG yang berlabel." },
    { q: "Apakah ada riwayat warna?", a: "Ada. Warna yang baru saja Anda pilih muncul sebagai contoh warna yang bisa diklik untuk disalin lagi." },
    { q: "Format gambar apa saja yang didukung?", a: "JPG, PNG, WEBP, GIF, dan BMP. Untuk gambar animasi, warnanya diambil dari frame pertama." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar, dan gambar diproses secara lokal di browser Anda — tidak ada yang diunggah." },
    { q: "Apa bedanya HEX, RGB, dan HSL?", a: "Ketiganya menggambarkan warna yang sama dengan tiga cara. HEX adalah bentuk ringkas enam digit yang dipakai di CSS dan alat desain. RGB memberi nilai tiga kanal secara langsung, yang dibutuhkan kode dan API canvas. HSL memecah warna menjadi rona, saturasi, dan kecerahan, yang jauh lebih mudah dipahami saat membuat variasi sebuah warna." },
    { q: "Bagaimana memakai kode warnanya di Canva?", a: "Salin kode HEX-nya di sini, lalu di Canva pilih elemennya, buka pilihan warna, dan tempelkan kodenya di kolom kode warna yang diawali tanda #. Warnanya akan sama persis dengan yang Anda ambil." },
    { q: "Kenapa warna yang diambil terlihat berbeda di aplikasi desain saya?", a: "Biasanya karena perbedaan profil warna. Gambar dengan profil gamut lebar seperti Display P3 dikonversi untuk ditampilkan, sehingga nilai yang Anda ambil bisa berbeda dari yang dilaporkan aplikasi lain. Foto juga mengandung noise, jadi dua piksel bersebelahan di area yang tampak rata jarang benar-benar sama." },
    { q: "Bagaimana cara membuat palet dari foto?", a: "Ambil warna dominan sebagai dasar, lalu pilih dua atau tiga warna pendukung dari bagian gambar yang berbeda — satu yang terang untuk latar dan satu yang pekat untuk aksen. Foto adalah sumber yang andal karena cahaya alami sudah menyelaraskan warna dalam satu adegan." },
    { q: "Apakah warna-warna ini aman untuk teks?", a: "Tidak otomatis. Palet yang diambil dari foto dipilih karena serasi, bukan karena kontrasnya, dan warna nada tengah dari sebuah gambar sering gagal memenuhi syarat kontras sebagai teks. Periksa setiap pasangan teks dan latar dengan WCAG sebelum dipakai — 4,5:1 untuk teks biasa, 3:1 untuk teks besar." },
    { q: "Bisakah saya mengambil warna brand dari tangkapan layar?", a: "Bisa, dan ini kegunaan yang umum. Ambil tangkapan layar situs atau logonya, lalu ambil warnanya dari situ. Perlu diingat, tangkapan layar sudah melewati proses tampilan layar dan kompresi gambar, jadi hasilnya sangat mendekati tetapi tidak persis — cukup untuk menyamakan warna, bukan untuk spesifikasi brand resmi." },
  ],

  security:
    "Gambar Anda tetap privat. Pengambilan warna dan ekstraksi palet berjalan sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "401" },

  ui: {
    "Please select an image file.": "Pilih file gambar.",
    "This image is fully transparent — there are no colors to extract.":
      "Gambar ini sepenuhnya transparan — tidak ada warna yang bisa diambil.",
    "Couldn't read that image.": "Gambar itu tidak bisa dibaca.",
    "Copied {value}": "Disalin: {value}",
    "Copy failed.": "Gagal menyalin.",
    "or drop a JPG, PNG, WEBP or GIF here": "atau letakkan JPG, PNG, WEBP, atau GIF di sini",
    "Copy {value}": "Salin {value}",
    "Clear image": "Hapus gambar",
    "Palette options": "Opsi palet",
    "Copy all": "Salin semua",
    "Pick {value}": "Pilih {value}",
    // `A <span>{name}</span> B` with literal spaces; the English order holds.
    "Click anywhere on": "Klik di mana saja pada",
    "to pick a color.": "untuk memilih warna.",
    "Colors": "Warna",
    "Picked color": "Warna terpilih",
    "Click the image — or any palette swatch below — to sample a color.":
      "Klik gambar — atau contoh warna mana pun di palet di bawah — untuk mengambil warna.",
    "Recent": "Terbaru",
    "Palette": "Palet",
    "Number of palette colors": "Jumlah warna palet",
    "This image only has 1 visually distinct color — showing it rather than repeating near-identical shades.":
      "Gambar ini hanya punya 1 warna yang berbeda secara visual — warna itu yang ditampilkan, bukan nuansa yang hampir sama berulang-ulang.",
    "This image only has {n} visually distinct colors — showing all of them rather than repeating near-identical shades.":
      "Gambar ini hanya punya {n} warna yang berbeda secara visual — semuanya ditampilkan, bukan nuansa yang hampir sama berulang-ulang.",
    "{share} of pixels are closest to this color": "{share} piksel paling mendekati warna ini",
    "Download palette (PNG)": "Unduh palet (PNG)",
    "Tip:": "Tips:",
    "hover to preview with the magnifier and click to lock a color, or tap a palette swatch to load it. Copy buttons put the value straight on your clipboard, and everything runs in your browser.":
      "arahkan kursor untuk melihat warna lewat kaca pembesar dan klik untuk menguncinya, atau ketuk contoh warna di palet untuk memuatnya. Tombol salin langsung menaruh nilainya di clipboard, dan semuanya berjalan di browser Anda.",
  },
};

export default content;
