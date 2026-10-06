import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/split-foto. ID "split foto" is the phrasing used. */
const content: ToolPageContent = {
  toolId: "split-image",
  locale: "id",
  name: "Split Foto",
  tagline:
    "Potong gambar apa pun menjadi bagian yang sama besar — dua bagian, tiga potongan, grid 3 × 3 — atau menjadi ubin dengan ukuran piksel yang pas. Semua potongan dalam satu ZIP, dinamai berurutan. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },
  variantsHeading: "Split foto atau buat grid Instagram",

  metaTitle: "Split Foto Online Gratis — Potong Gambar Jadi Beberapa Bagian | oMyImage",
  metaDescription:
    "Split foto online gratis: potong gambar jadi dua bagian, grid 3×3, atau ubin dengan ukuran piksel apa pun. Semua potongan dalam satu ZIP. Di browser, tanpa upload.",

  intro:
    "Split foto berarti memotong gambar menjadi gambar-gambar kecil yang bisa disusun kembali dengan sempurna. Split Foto dari oMyImage melakukannya dengan dua cara: grid sama rata, di mana Anda memilih jumlah kolom dan baris, atau ubin berukuran tetap, di mana Anda menentukan lebar dan tinggi setiap potongan dalam piksel. Garis di pratinjau menunjukkan tepat di mana potongan jatuh, setiap potongan diberi nomor, dan seluruh set terunduh dalam satu ZIP — atau klik satu potongan untuk menyimpan potongan itu saja. Tambahkan beberapa gambar dan semuanya dipotong dengan cara yang sama.",

  sections: [
    {
      heading: "Grid sama rata atau ukuran ubin",
      id: "modes",
      body: [
        "Grid sama rata membagi gambar menjadi sebanyak potongan yang Anda minta: 2 kolom dan 1 baris memberi bagian kiri dan kanan, 1 kolom dan 3 baris memberi tiga potongan mendatar, 3 × 3 memberi sembilan potongan. Potongannya sama besar sejauh piksel memungkinkan — bila lebar tidak habis dibagi, sebagian potongan lebih lebar satu piksel, bukan menyisakan potongan tipis di ujung.",
        "Ukuran ubin bekerja sebaliknya: Anda menentukan ukuran setiap potongan, misalnya 512 × 512 piksel, lalu gambar dipotong dari sudut kiri atas menjadi sebanyak ubin yang muat. Baris dan kolom terakhir mendapat sisanya, jadi bisa lebih kecil. Inilah mode untuk peta game, lembar tekstur, dan apa pun yang butuh ubin berukuran tetap.",
      ],
    },
    {
      heading: "Cara split yang umum",
      id: "layouts",
      body: [
        "Dua bagian berdampingan (2 × 1) memisahkan scan dua halaman atau foto sebelum-sesudah. Bagian atas dan bawah (1 × 2) membagi screenshot HP yang panjang. Tiga potongan tegak (3 × 1) menjadi triptych untuk tiga bingkai di dinding. Grid 3 × 3 atau 4 × 4 mengubah foto menjadi puzzle, poster untuk dicetak, atau keping mozaik.",
        "Tombol cepat di atas penggeser mengatur pembagian ini dengan sekali ketuk; penggesernya sampai 20 kolom dan 20 baris.",
      ],
    },
    {
      heading: "Cetak poster besar di kertas biasa",
      id: "poster",
      body: [
        "Printer rumah tidak bisa mencetak poster selebar satu meter, tetapi bisa mencetak empat atau sembilan bagiannya. Potong gambar dengan grid yang sesuai bentuk kertas — 2 × 2 atau 3 × 3 untuk poster dengan bentuk yang sama seperti fotonya — cetak semua potongan dengan skala yang sama tanpa \"sesuaikan dengan halaman\", gunting margin putihnya, lalu sambung lembarannya dengan selotip dari belakang.",
        "Mulailah dari file asli terbesar yang Anda punya. Setiap potongan dicetak jauh lebih besar daripada tampilannya di layar, jadi foto kecil akan buram; foto selebar 6000 piksel yang dipotong 3 kolom masih memberi 2000 piksel per lembar, yang tercetak tajam di kertas A4.",
      ],
    },
    {
      heading: "Ubin untuk game, peta, dan web",
      id: "tiles",
      body: [
        "Game engine, penampil peta, dan sebagian situs memuat gambar besar sebagai grid ubin, agar hanya bagian yang terlihat yang diambil. Pilih Ukuran ubin dan isi ukuran yang diminta program — 256 atau 512 piksel cukup umum — dan file keluar dengan nama baris dan kolom, siap dimuat berurutan.",
        "Mode ubin juga cara tercepat memotong screenshot atau infografis yang sangat panjang menjadi beberapa halaman: isi lebar ubin dengan lebar penuh gambar, dan tingginya setinggi satu layar.",
      ],
    },
    {
      heading: "Potongan yang pas satu sama lain",
      id: "exact",
      body: [
        "Setiap potongan adalah salinan langsung bagiannya dari gambar asli — tidak ada yang diubah ukurannya, tidak ada yang tumpang tindih, dan tidak ada piksel yang hilang di antara potongan bersebelahan, jadi potongan bisa disusun kembali tanpa celah. Disimpan sebagai PNG, potongan sama persis dengan aslinya piksel demi piksel; potongan JPG dan WEBP dikompres ulang dengan kualitas pilihan Anda, yang biasanya tidak terlihat tetapi bisa memunculkan sambungan samar di warna polos. Pakai PNG bila potongan akan disatukan lagi.",
      ],
    },
    {
      heading: "File, nama, dan format",
      id: "names",
      body: [
        "Potongan diberi nama sesuai gambar dengan baris dan kolomnya — liburan_r1_c1.jpg, liburan_r1_c2.jpg, dan seterusnya — dengan angka nol di depan bila lebih dari sembilan, agar urut di folder mana pun. Saat Anda memotong beberapa gambar sekaligus, potongan setiap gambar masuk ke folder sendiri di dalam ZIP.",
        "Potongan tetap dalam format asli kecuali Anda memilih yang lain. PNG dan WEBP mempertahankan transparansi; JPG mengisi area transparan dengan warna latar pilihan Anda.",
      ],
    },
    {
      heading: "Split foto untuk Instagram",
      id: "instagram",
      body: [
        "Grid profil Instagram dan carousel panorama butuh lebih dari sekadar potongan biasa: fotonya harus di-crop ke bentuk yang tepat, setiap potongan disesuaikan dengan ukuran Instagram, dan postingan diunggah dengan urutan terbalik. Grid Instagram melakukan semuanya — pakai alat itu, bukan halaman ini, untuk grid 3 kolom atau carousel.",
      ],
    },
    {
      heading: "Komik, menu, dan dokumen",
      id: "documents",
      body: [
        "Halaman komik hasil scan bisa dibagi menjadi panel-panelnya dengan grid berbentuk sama, siap diposting satu per satu. Menu atau brosur panjang yang difoto sekali jepret bisa dipotong menjadi halaman-halaman untuk situs web. Untuk scan buku dua halaman, 2 × 1 memberi halaman kiri dan kanan sebagai gambar terpisah, yang lalu bisa dijadikan PDF dengan Gambar ke PDF.",
      ],
    },
    {
      heading: "Untuk status WhatsApp dan story",
      id: "status",
      body: [
        "Foto panorama yang lebar terlihat sangat kecil di status WhatsApp atau story. Potong menjadi 3 × 1 atau 4 × 1 lalu unggah potongannya berurutan — yang menonton akan melihat seluruh pemandangan dari kiri ke kanan sambil mengetuk layar.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Setiap gambar dipotong sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara split foto",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Pilih potongannya", description: "Pilih grid seperti 2 × 1 atau 3 × 3, atau isi ukuran ubin yang pas dalam piksel." },
    { title: "Split dan unduh", description: "Klik Split foto untuk mendapatkan semua potongan dalam satu ZIP, atau klik satu potongan untuk menyimpannya." },
  ],

  features: [
    { icon: "view_column", title: "Grid atau ukuran ubin", description: "Sampai 20 × 20 potongan sama besar, atau ubin ukuran berapa pun dalam piksel." },
    { icon: "folder_zip", title: "Semua potongan dalam satu ZIP", description: "Dinamai menurut baris dan kolom, agar tetap urut." },
    { icon: "lock", title: "Tanpa upload", description: "Dipotong sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara membagi gambar menjadi bagian yang sama besar?", a: "Tambahkan gambar, pilih jumlah kolom dan baris, lalu klik Split foto. Semua potongan terunduh bersama dalam satu ZIP." },
    { q: "Bagaimana cara memotong gambar jadi dua?", a: "Pilih 2 × 1 untuk bagian kiri dan kanan, atau 1 × 2 untuk bagian atas dan bawah." },
    { q: "Bisakah membagi gambar menjadi grid 3 × 3?", a: "Bisa. Ketuk 3 × 3 atau atur kedua penggeser ke 3 — Anda mendapat sembilan potongan bernomor dari kiri atas." },
    { q: "Bisakah memotong ubin dengan ukuran tertentu?", a: "Bisa. Pilih Ukuran ubin lalu isi lebar dan tinggi dalam piksel. Baris dan kolom terakhir lebih kecil bila ukurannya tidak habis dibagi." },
    { q: "Apakah kualitas potongan turun?", a: "Tidak ada yang diubah ukurannya. Dalam PNG potongannya sama persis dengan aslinya; JPG dan WEBP disimpan ulang dengan kualitas pilihan Anda." },
    { q: "Bisakah mengunduh satu potongan saja?", a: "Bisa. Setelah split, klik potongan mana pun di bawah pratinjau untuk menyimpannya sendiri." },
    { q: "Bisakah split banyak gambar sekaligus?", a: "Bisa. Setiap gambar dipotong dengan cara yang sama dan mendapat folder sendiri di dalam ZIP." },
    { q: "Bagaimana nama file-nya?", a: "Menurut baris dan kolom, seperti foto_r2_c3.png, agar tetap urut." },
    { q: "Apakah transparansi tetap ada?", a: "Ya, dalam PNG atau WEBP. JPG mengisi area transparan dengan warna." },
    { q: "Berapa banyak potongan yang bisa dibuat?", a: "Sampai 20 × 20 dalam grid, dan sampai 400 potongan per gambar dalam mode ubin." },
    { q: "Bagaimana cara split foto untuk grid Instagram?", a: "Pakai Grid Instagram — alat itu meng-crop ke bentuk yang tepat, menyesuaikan ukuran postingan, dan memberi nomor sesuai urutan unggah." },
    { q: "Apakah gambar saya dikirim ke server?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun. Potongannya datang dalam ZIP yang bisa dibuka HP Anda." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
  ],

  security:
    "Gambar Anda dipotong sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // SplitTool.tsx — also rendered by instagram-grid-maker, whose page gets
    // this block merged under its own (expansion.md §2).
    "or drop JPG, PNG or WEBP images here": "atau lepaskan gambar JPG, PNG, atau WEBP di sini",
    "or drop a JPG, PNG or WEBP image here": "atau lepaskan satu gambar JPG, PNG, atau WEBP di sini",
    "Preview": "Pratinjau",
    "The lines show where the image will be cut.": "Garis menunjukkan di mana gambar akan dipotong.",
    "Pieces": "Potongan",
    "Click a piece to download just that one.": "Klik satu potongan untuk mengunduh potongan itu saja.",
    "1 piece": "1 potongan",
    "{n} pieces": "{n} potongan",
    "Done — 1 image saved.": "Selesai — 1 gambar disimpan.",
    "Done — {n} pieces saved.": "Selesai — {n} potongan disimpan.",
    "Split image": "Split foto",
    "Split by": "Potong menurut",
    "Equal grid": "Grid sama rata",
    "Tile size": "Ukuran ubin",
    "Columns": "Kolom",
    "Rows": "Baris",
    "Tile width (px)": "Lebar ubin (px)",
    "Tile height (px)": "Tinggi ubin (px)",
    "Each piece:": "Tiap potongan:",
    "The size does not divide evenly, so some pieces are 1 px wider or taller.": "Ukurannya tidak habis dibagi, jadi sebagian potongan 1 px lebih lebar atau lebih tinggi.",
    "The last row and column are smaller — they take what is left.": "Baris dan kolom terakhir lebih kecil — isinya sisa gambar.",
    "Too many pieces — use bigger tiles (up to 400 pieces per image).": "Potongan terlalu banyak — pakai ubin yang lebih besar (maksimal 400 potongan per gambar).",
    "For the first image — every image is split the same way.": "Untuk gambar pertama — semua gambar dipotong dengan cara yang sama.",
    "Output format": "Format hasil",
    "Same as original": "Sama dengan asli",
    "JPG background": "Latar JPG",
    "Your images are processed in your browser and never uploaded.": "Gambar Anda diproses di browser dan tidak pernah di-upload.",
    // Instagram mode
    "Make the grid": "Buat grid",
    "Make the carousel": "Buat carousel",
    "Layout": "Tata letak",
    "Profile grid": "Grid profil",
    "Carousel": "Carousel", // i18n-same — Instagram's own word in Indonesian
    "Three posts per row, like your profile.": "Tiga postingan per baris, seperti profil Anda.",
    "Slides": "Slide",
    "Post shape": "Bentuk postingan",
    "Matches the profile grid exactly.": "Pas persis dengan grid profil.",
    "The classic tall post. The grid trims a sliver off each side.": "Postingan tegak klasik. Grid memotong sedikit di tiap sisi.",
    "Square posts. The grid trims their sides.": "Postingan persegi. Grid memotong sisi-sisinya.",
    "Tall slides that fill the most screen.": "Slide tegak yang paling memenuhi layar.",
    "Square slides.": "Slide persegi.",
    "Horizontal position": "Posisi horizontal",
    "Vertical position": "Posisi vertikal",
    "{n} posts": "{n} postingan",
    "{n} slides": "{n} slide",
    "Each one:": "Masing-masing:",
    "Your picture is narrower than Instagram's 1080 px per post, so the pieces keep its own resolution.": "Foto Anda lebih kecil dari 1080 px per postingan Instagram, jadi potongan mempertahankan resolusi aslinya.",
    "Post them in number order: 1 first, the top-left piece last.": "Unggah sesuai urutan nomor: 1 dulu, potongan kiri atas paling akhir.",
    "Add the slides to one post in number order, 1 first.": "Masukkan slide ke satu postingan sesuai urutan nomor, mulai dari 1.",
    "Drag the picture to choose what goes into the posts.": "Geser foto untuk memilih bagian yang masuk ke postingan.",
  },
};

export default content;
