import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-tanda-tangan (new tool, 2026-10-05). */
const content: ToolPageContent = {
  toolId: "signature-resizer",
  locale: "id",
  name: "Ubah Ukuran Tanda Tangan",
  tagline:
    "Ubah foto tanda tangan Anda menjadi file siap unggah: latar putih bersih, garis tegas, tepi terpotong, ukuran tepat dalam piksel atau sentimeter, dan ukuran file dalam rentang KB yang diminta. Gratis dan privat, langsung di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ubah Ukuran Tanda Tangan Online — Background Putih & KB | oMyImage",
  metaDescription:
    "Ubah ukuran tanda tangan online gratis: background putih, tepi terpotong, ukuran piksel atau cm, dan file dalam rentang KB yang diminta formulir. Tanpa unggah.",

  intro:
    "Formulir online cukup ketat soal scan tanda tangan: tinta gelap di kertas putih, ukuran tertentu, dan ukuran file dalam batas KB. Foto dari HP biasanya gagal di semua syarat — kertas kusam, bayangan di satu sudut, piksel terlalu banyak, dan file ratusan kali lebih besar dari yang diizinkan. Alat ini membereskan semuanya sekaligus: kertas dibuat putih dan tinta dipertegas, ruang kosong dipotong, tanda tangan dipas ke ukuran pilihan Anda, lalu disimpan sebagai JPG dalam rentang KB — tanpa tanda tangan Anda meninggalkan perangkat.",

  sections: [
    {
      heading: "Apa yang diminta formulir",
      id: "requirements",
      body: [
        "Setiap formulir punya aturannya sendiri. Ada yang menyebut ukuran dalam piksel, misalnya 140 × 60; ada yang dalam sentimeter, misalnya 4 × 2 cm atau 6 × 2 cm; dan banyak yang hanya membatasi ukuran file, misalnya 10–20 KB atau maksimal 100 KB. Hampir semuanya meminta tinta gelap di kertas putih polos.",
        "Pilih ukuran yang sesuai di Ukuran hasil — ukuran sentimeter digambar pada 300 DPI dan disimpan dengan DPI itu, jadi tercetak tepat sesuai ukuran — lalu pilih rentang KB dari formulir. Untuk ukuran yang tidak ada di daftar, pilih Ukuran khusus dan ketik lebar serta tinggi dalam piksel.",
      ],
    },
    {
      heading: "Menandatangani dan memotret",
      id: "photographing",
      body: [
        "Tanda tangani tiga atau empat kali di kertas putih polos dengan pulpen hitam atau biru tua, lalu pilih yang terbaik. Pulpen biasa cukup; pulpen gel atau spidol kecil memberi garis lebih gelap dan rata yang lebih tahan dikompres.",
        "Foto kertasnya di bawah cahaya siang, tegak lurus dari atas, dengan HP sejajar kertas agar tanda tangan tidak memanjang. Biarkan tanda tangan mengisi sebagian besar foto — sisanya dipotong otomatis — dan jangan sampai bayangan Anda jatuh di kertas. Hasil scan dari pemindai juga sama baiknya.",
      ],
    },
    {
      heading: "Cara latar dibersihkan",
      id: "cleaning",
      body: [
        "Kertas di foto tidak pernah benar-benar putih, dan jarang sama terangnya dari ujung ke ujung. Alih-alih satu batas untuk seluruh gambar, alat ini memperkirakan terangnya kertas di sekitar setiap titik dan membandingkan setiap piksel dengan sekelilingnya sendiri. Kertas menjadi putih bersih, garis pulpen menjadi tegas, dan bayangan di sudut hilang alih-alih menjadi noda abu-abu.",
        "Kekuatan pembersihan menentukan seberapa banyak abu-abu muda yang dianggap kertas. Naikkan kalau masih ada bintik atau bayangan tipis; turunkan kalau ujung-ujung garis yang tipis mulai terputus. Warna tinta bisa hitam, biru tua, atau warna asli pulpen Anda.",
      ],
    },
    {
      heading: "Ukuran dan batas file",
      id: "limits",
      body: [
        "Tanda tangan dipaskan ke ukuran pilihan tanpa ditarik, lalu diletakkan di tengah latar putih. Dengan batas maksimum, kualitas JPG dibuat setinggi yang diizinkan batas. Dengan batas minimum — bagian \"minimal 10 KB\" dari sebuah rentang — tanda tangan kecil yang bersih sering terlalu sederhana untuk mencapai angka itu sendiri, jadi kualitas dinaikkan ke puncak lebih dulu.",
        "Kalau di ukuran kecil seperti 140 × 60 piksel file masih di bawah minimum pada kualitas tertinggi, file ditambah blok data kosong sampai mencapainya. Tanda tangannya sendiri tidak berubah satu piksel pun, dan halaman memberi tahu kalau ini terjadi.",
        "Kedua ujung rentang dibaca dengan aman: \"minimal 10 KB\" berarti minimal 10.240 byte dan \"maksimal 20 KB\" berarti paling banyak 20.000 byte, jadi file lolos baik formulir menghitung kilobyte sebagai 1.000 maupun 1.024 byte.",
      ],
    },
    {
      heading: "Dipakai untuk apa saja",
      id: "uses",
      body: [
        "Scan tanda tangan diminta di banyak pendaftaran online — lamaran kerja, beasiswa, pendaftaran kampus, dan berbagai formulir instansi — juga untuk surat dan dokumen yang dikirim lewat email. Simpan file tanda tangan yang sudah bersih di tempat aman; lain kali Anda cukup memilih ukuran baru tanpa memotret ulang.",
      ],
    },
  ],

  howToTitle: "Cara mengubah ukuran tanda tangan untuk formulir online",
  steps: [
    { title: "Tambahkan foto tanda tangan", description: "Foto atau scan tanda tangan Anda di kertas putih — JPG, PNG, atau WEBP." },
    { title: "Pilih ukuran dan rentang KB", description: "Pilih 140 × 60 px, ukuran sentimeter, atau ukuran sendiri, lalu rentang ukuran file dari formulir." },
    { title: "Unduh JPG-nya", description: "Periksa pratinjau, lalu unduh tanda tangan bersih yang siap diunggah." },
  ],

  features: [
    { icon: "draw", title: "Latar putih bersih", description: "Bayangan dan kertas kusam hilang, tinta menjadi tegas — hitam, biru, atau warna aslinya." },
    { icon: "crop", title: "Ukuran tepat", description: "140 × 60 px, 4 × 2 cm, 6 × 2 cm, atau ukuran apa pun, dengan ruang kosong dipotong dulu." },
    { icon: "lock", title: "Tidak pernah diunggah", description: "Tanda tangan diproses di browser dan tetap di perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana mengubah tanda tangan menjadi 10–20 KB?", a: "Tambahkan foto tanda tangan lalu pilih rentang 10 KB sampai 20 KB di Ukuran file, beserta ukuran piksel yang diminta formulir. JPG yang diunduh berada di dalam rentang itu." },
    { q: "Berapa ukuran tanda tangan untuk formulir online?", a: "Sesuai yang tertulis di formulir. Ukuran piksel seperti 140 × 60 dan ukuran sentimeter seperti 4 × 2 cm cukup umum; periksa ketentuannya dan pilih nilai yang sama di sini." },
    { q: "Bagaimana membuat background tanda tangan menjadi putih?", a: "Biarkan Bersihkan latar tetap aktif. Kertas menjadi putih bersih dan tinta tegas, meskipun foto diambil dengan cahaya tidak merata." },
    { q: "Bisakah tanda tangan tetap berwarna biru?", a: "Bisa. Pilih Biru untuk biru tua yang rata, atau Asli untuk warna pulpen Anda. Pilih Hitam kalau formulir meminta tinta hitam." },
    { q: "Kenapa tanda tangan terlihat putus-putus setelah dibersihkan?", a: "Pembersihan terlalu kuat untuk garis yang tipis atau terang. Turunkan kekuatan pembersihan, atau tanda tangani ulang dengan pulpen yang lebih gelap." },
    { q: "Kenapa file saya ditambah data?", a: "Tanda tangan kecil yang bersih bisa lebih sederhana daripada batas minimum formulir. Setelah kualitas dinaikkan ke puncak, alat ini menambahkan data kosong sampai minimum; gambarnya tidak berubah." },
    { q: "Bisakah memakai tanda tangan hasil scan?", a: "Bisa. Hasil scan justru ideal — cahaya rata dan kertas datar. Tambahkan file-nya, lalu alat ini memotong dan mengubah ukurannya dengan cara yang sama." },
    { q: "Apakah tanda tangan saya diunggah ke suatu tempat?", a: "Tidak. Pembersihan, pengubahan ukuran, dan penyimpanan terjadi di browser; tanda tangan tidak pernah meninggalkan perangkat Anda." },
    { q: "Dalam format apa tanda tangan disimpan?", a: "JPG dengan latar putih — format yang diterima hampir semua formulir. Ukuran sentimeter disimpan dengan resolusi 300 DPI." },
  ],

  security:
    "Tanda tangan Anda dibersihkan, diubah ukurannya, dan disimpan sepenuhnya di browser. Tidak pernah diunggah, disimpan, atau dilihat orang lain.",

  ui: {
    // SignatureResizerTool.tsx
    "Select a signature": "Pilih tanda tangan",
    "or drop a photo or scan of your signature here": "atau letakkan foto atau scan tanda tangan Anda di sini",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Signature settings": "Pengaturan tanda tangan",
    "Preview": "Pratinjau",
    "Output size": "Ukuran hasil",
    "Trimmed, original shape": "Dipotong, bentuk asli",
    "4 × 2 cm": "4 × 2 cm", // i18n-same
    "6 × 2 cm": "6 × 2 cm", // i18n-same
    "Custom size": "Ukuran khusus",
    "Width (px)": "Lebar (px)",
    "Height (px)": "Tinggi (px)",
    "File size": "Ukuran file",
    "No limit": "Tanpa batas",
    "Under {size}": "Di bawah {size}",
    "{min} to {max}": "{min} sampai {max}",
    "Minimum (KB)": "Minimum (KB)", // i18n-same
    "Maximum (KB)": "Maksimum (KB)",
    "KB": "KB",
    "Trim empty space": "Potong ruang kosong",
    "Clean the background": "Bersihkan latar",
    "Makes the paper pure white and the ink solid, even in uneven light.": "Membuat kertas putih bersih dan tinta tegas, meski cahayanya tidak merata.",
    "Cleaning strength": "Kekuatan pembersihan",
    "Ink colour": "Warna tinta",
    "Black": "Hitam",
    "Blue": "Biru",
    "Original": "Asli",
    "Download signature": "Unduh tanda tangan",
    "Saving…": "Menyimpan…",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Last download: {size}": "Unduhan terakhir: {size}",
    "The file was padded to reach the minimum size; the picture itself is unchanged.": "File ditambah data kosong agar mencapai ukuran minimum; gambarnya sendiri tidak berubah.",
    "No signature found — try a photo with darker ink on plain paper.": "Tanda tangan tidak ditemukan — coba foto dengan tinta lebih gelap di kertas polos.",
    "Your signature is processed in your browser and never uploaded.": "Tanda tangan Anda diproses di browser dan tidak pernah diunggah.",
    "Could not get under {size} — the smallest file is used.": "Tidak bisa di bawah {size} — file terkecil yang dipakai.",
    "The maximum must be larger than the minimum.": "Maksimum harus lebih besar dari minimum.",
  },
};

export default content;
