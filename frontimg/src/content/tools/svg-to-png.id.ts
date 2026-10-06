import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/svg-ke-png. */
const content: ToolPageContent = {
  toolId: "svg-to-png",
  locale: "id",
  name: "SVG ke PNG",
  tagline:
    "Ubah SVG ke PNG secara online dalam 1×, 2×, 4×, atau lebar berapa pun — tajam di setiap ukuran, transparan atau dengan latar. Gratis, banyak file sekaligus, dan tidak keluar dari browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "SVG ke PNG Online Gratis — Tajam di Ukuran Apa Pun | oMyImage",
  metaDescription:
    "Ubah SVG ke PNG online gratis dalam 1×, 2×, 4×, atau lebar berapa pun — tajam di setiap ukuran, latar transparan atau berwarna. Banyak file sekaligus, tanpa upload.",

  intro:
    "SVG sempurna sampai Anda perlu menaruhnya di tempat yang hanya menerima gambar biasa: postingan media sosial, slide presentasi, email, halaman aplikasi, atau unggahan marketplace. Konverter SVG ke PNG dari oMyImage menggambar file vektor Anda sebagai PNG persis di ukuran yang Anda pilih — digambar ulang di resolusi itu, jadi ikon 24 piksel yang diekspor di 4× sama tajamnya dengan ikon yang dirancang di 96 piksel. Pertahankan latar transparan atau beri latar putih atau warna apa pun, dan ubah satu folder ikon sekaligus.",

  sections: [
    {
      heading: "Kenapa mengubah SVG ke PNG",
      id: "why",
      body: [
        "SVG menggambarkan bentuk, bukan piksel, karena itu ia bisa diperbesar ke ukuran apa pun dan disukai browser. Banyak tempat lain tidak. Media sosial menolak unggahan SVG, banyak aplikasi chat dan email menampilkannya sebagai lampiran, bukan gambar, aplikasi perkantoran versi lama menyisipkannya dengan buruk, dan marketplace, toko aplikasi, serta layanan cetak meminta PNG atau JPG.",
        "PNG adalah pasangan alami SVG karena bersifat lossless dan menyimpan transparansi: logo, ikon, dan ilustrasi keluar dengan tepi bersih dan latar transparan, persis seperti tampilannya di browser.",
      ],
    },
    {
      heading: "Tajam di setiap ukuran",
      id: "sharp",
      body: [
        "Banyak konverter menggambar SVG di ukuran bawaannya lalu menarik bitmap-nya, sehingga tepinya lembek dan buram di 2× dan lebih buruk lagi di 4×. Alat ini menetapkan ukuran akhir pada SVG itu sendiri sebelum menggambarnya, jadi browser merasterisasi vektor langsung di resolusi keluaran. Kurva, garis tipis, dan teks kecil tetap setajam yang dimungkinkan format di setiap ukuran.",
        "Artinya, memperbesar juga tidak menurunkan kualitas: logo yang diekspor selebar 4000 piksel benar-benar digambar dalam 4000 piksel, cocok untuk cetak dan layar besar. Keluaran dibatasi 8192 piksel di sisi terpanjang, batas di mana browser di banyak perangkat tidak lagi bisa menggambar dengan andal.",
      ],
    },
    {
      heading: "Memilih ukuran",
      id: "sizes",
      body: [
        "Tombol ukuran mengalikan ukuran yang tertulis di SVG. 1× memberi ukuran yang ditetapkan desainer; 2× adalah pilihan standar untuk layar resolusi tinggi di HP dan laptop, di mana gambar butuh dua kali lipat piksel agar tampak tajam; 4× untuk layar besar dan cetak. Nama file diberi @2x atau @4x agar ukurannya mudah dibedakan.",
        "Pilih Lebar untuk menetapkan lebar piksel yang tepat, misalnya 512 untuk ikon aplikasi atau 1200 untuk gambar media sosial. Tingginya mengikuti proporsi SVG itu sendiri. Saat mengubah banyak file, setiap file mendapat lebar tersebut.",
      ],
    },
    {
      heading: "Latar transparan, putih, atau berwarna",
      id: "background",
      body: [
        "Secara bawaan PNG mempertahankan transparansi SVG, yang ditampilkan di atas pola kotak-kotak pada pratinjau. Pilih Putih bila gambar akan dipakai di tempat yang menampilkan transparansi sebagai hitam — beberapa aplikasi chat dan aplikasi perkantoran lama melakukannya — atau Warna solid untuk menaruhnya di atas warna brand Anda untuk postingan atau slide.",
      ],
    },
    {
      heading: "Apa yang tampil dan apa yang tidak",
      id: "what-renders",
      body: [
        "SVG dikonversi dengan mesin render browser sendiri dalam mode gambar yang aman. Bentuk, gradien, mask, filter, dan gambar yang tertanam tampil seperti di halaman web. Yang membutuhkan internet atau kode tidak tampil: script tidak pernah dijalankan, dan gambar, font, atau stylesheet yang ditautkan dari situs lain tidak dimuat.",
        "Yang perlu diperhatikan adalah teks. Kalau SVG memakai web font yang hanya ditautkan, bukan ditanam, teksnya beralih ke font sistem. Untuk mempertahankan jenis huruf yang tepat, ubah teks menjadi outline (path) di aplikasi desain sebelum mengekspor SVG, atau tanamkan font di file.",
      ],
    },
    {
      heading: "SVG tanpa ukuran",
      id: "no-size",
      body: [
        "Sebagian SVG — sering kali ikon yang diekspor dari aplikasi desain atau disalin dari pustaka ikon — hanya menetapkan viewBox, atau tidak punya ukuran sama sekali. Bila ada viewBox, ukurannya dipakai sebagai ukuran 1×. Bila tidak ada apa pun, berlaku ukuran bawaan browser 300 × 150 piksel, dan alat ini akan memberi tahu; pilih Lebar untuk menetapkan ukuran yang benar-benar Anda inginkan.",
      ],
    },
    {
      heading: "Logo usaha untuk media sosial dan marketplace",
      id: "logo",
      body: [
        "Logo dari desainer sering dikirim dalam SVG, padahal foto profil toko di marketplace dan media sosial meminta PNG atau JPG dengan ukuran tertentu. Pilih Lebar, isi misalnya 800, dan pilih latar Putih bila platformnya tidak menampilkan transparansi dengan baik.",
        "Simpan file SVG aslinya. Kapan pun Anda butuh ukuran lain — untuk banner, stempel digital, atau kemasan — PNG baru yang tajam bisa dibuat lagi dari SVG yang sama dalam hitungan detik.",
      ],
    },
  ],

  howToTitle: "Cara mengubah SVG ke PNG",
  steps: [
    { title: "Tambahkan file SVG", description: "Pilih satu atau banyak file SVG, atau seret dan lepaskan." },
    { title: "Pilih ukuran dan latar", description: "Pilih 1×, 2×, 4×, atau lebar yang tepat, serta latar transparan, putih, atau berwarna." },
    { title: "Unduh", description: "Satu PNG langsung terunduh; beberapa file terunduh bersama dalam ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Tajam di ukuran apa pun", description: "Vektor digambar di resolusi keluaran, tidak pernah ditarik dari gambar yang lebih kecil." },
    { icon: "opacity", title: "Transparansi terjaga", description: "PNG mempertahankan latar transparan SVG, atau memakai putih atau warna apa pun." },
    { icon: "burst_mode", title: "Banyak file sekaligus", description: "Ubah satu folder ikon atau logo sekaligus dan unduh satu ZIP." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah SVG ke PNG?", a: "Tambahkan file SVG, pilih ukuran dan latar, lalu klik Unduh PNG. Beberapa file terunduh bersama dalam ZIP." },
    { q: "Bagaimana mendapatkan PNG resolusi tinggi dari SVG?", a: "Pilih 2× atau 4×, atau isi lebar yang tepat hingga 8192 piksel. Vektor digambar di resolusi itu, jadi PNG-nya tajam, bukan hasil tarikan." },
    { q: "Apakah PNG-nya berlatar transparan?", a: "Ya, secara bawaan. Anda juga bisa memilih putih atau warna apa pun sebagai latar." },
    { q: "Kenapa teks di PNG terlihat berbeda?", a: "SVG kemungkinan memakai web font yang tidak ditanam di file, jadi font sistem yang dipakai. Ubah teks menjadi outline, atau tanamkan font, sebelum mengekspor SVG." },
    { q: "Kenapa PNG saya berukuran 300 × 150 piksel?", a: "SVG tidak menetapkan ukuran maupun viewBox, jadi berlaku ukuran bawaan browser. Pilih Lebar dan isi ukuran yang Anda butuhkan." },
    { q: "Bisakah mengubah banyak SVG sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau; setiap file dikonversi dengan pengaturan yang sama dan semuanya terunduh dalam satu ZIP." },
    { q: "Amankah mengubah SVG dari internet?", a: "Aman. SVG digambar dalam mode gambar browser, di mana script tidak pernah berjalan dan tidak ada yang diambil dari situs lain." },
    { q: "Apakah file saya di-upload?", a: "Tidak. SVG dibaca dan dikonversi sepenuhnya di browser Anda, dan PNG dibuat di perangkat Anda." },
    { q: "Berapa ukuran PNG terbesar yang bisa dibuat?", a: "Hingga 8192 piksel di sisi terpanjang. Di atas itu, browser di banyak perangkat tidak bisa menggambar dengan andal." },
    { q: "Bisakah SVG diubah ke JPG?", a: "Ubah di sini ke PNG dengan latar putih, lalu pakai konverter PNG ke JPG bila Anda butuh JPG." },
  ],

  security:
    "File SVG Anda dibaca dan diubah ke PNG sepenuhnya di browser. Tidak ada yang di-upload, script di dalam SVG tidak pernah dijalankan, dan tidak ada sumber eksternal yang diambil.",

  ui: {
    // SvgToPngTool.tsx
    "Select SVG files": "Pilih file SVG",
    "or drop SVG files here": "atau lepaskan file SVG di sini",
    "Please select SVG files.": "Silakan pilih file SVG.",
    "{name} is not a valid SVG.": "{name} bukan SVG yang valid.",
    "Download PNG": "Unduh PNG",
    "Download PNGs (ZIP)": "Unduh PNG (ZIP)",
    "Clear images": "Hapus gambar",
    "PNG settings": "Pengaturan PNG",
    "Preview": "Pratinjau",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Preview shows the first of {n} files": "Pratinjau menampilkan file pertama dari {n}",
    "Last download: {size}": "Unduhan terakhir: {size}",
    "Change files": "Ganti file",
    "This SVG sets no size, so it is treated as 300 × 150 px — the browser default. Use a width to choose the output size.":
      "SVG ini tidak menetapkan ukuran, jadi dianggap 300 × 150 px — ukuran bawaan browser. Gunakan lebar untuk memilih ukuran hasil.",
    "Your SVG files are converted in your browser and never uploaded.": "File SVG Anda dikonversi di browser dan tidak pernah di-upload.",
    "Size": "Ukuran",
    "Width": "Lebar",
    "Width (px)": "Lebar (px)",
    "Multiplies the size set in the SVG. 2× is sharp on high-resolution screens.":
      "Mengalikan ukuran yang ditetapkan di SVG. 2× tampak tajam di layar resolusi tinggi.",
    "Background colour": "Warna latar",
  },
};

export default content;
