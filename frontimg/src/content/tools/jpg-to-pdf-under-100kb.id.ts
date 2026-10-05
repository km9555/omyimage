import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/jpg-ke-pdf-100kb (variant of image-to-pdf, 100 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-100kb",
  locale: "id",
  name: "JPG ke PDF di Bawah 100 KB",
  tagline:
    "Ubah foto atau scan dokumen menjadi PDF di bawah 100 KB — untuk formulir pendaftaran dengan batas PDF paling ketat. Gambar dikompres hanya sebanyak yang dibutuhkan seluruh file, langsung di browser Anda, tanpa upload.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PDF di Bawah 100 KB Online Gratis — Tanpa Upload | oMyImage",
  metaDescription:
    "Ubah foto dan scan dokumen jadi PDF di bawah 100 KB secara online dan gratis — untuk formulir pendaftaran dengan batas ketat. Kompresi secukupnya, tanpa upload.",

  intro:
    "Formulir yang meminta dokumen \"dalam PDF, maksimal 100 KB\" — KTP, KK, surat keterangan, ijazah, sertifikat — hampir selalu mengharapkan satu halaman. Foto halaman itu dari ponsel saja sudah 3–5 MB, jadi PDF yang dibuat langsung dari foto tersebut tiga puluh sampai lima puluh kali lebih besar dari batasnya. Halaman ini membuat PDF dan, kalau hasilnya lebih dari 100 KB, mengompres ulang gambar di dalamnya hanya sampai seluruh file muat, sambil menjaga teks setajam yang dimungkinkan batas tersebut.",

  sections: [
    {
      heading: "Apa yang muat di PDF 100 KB",
      id: "what-fits",
      body: [
        "Satu halaman A4 muat dengan nyaman: di 100 KB, halaman penuh teks ketik tetap sekitar 800 × 1100 piksel dengan kualitas baik, dan surat keterangan yang banyak ruang kosongnya bisa lebih besar lagi — cukup agar teks cetak, stempel, dan tanda tangan terbaca pada zoom normal. Struktur PDF sendiri hanya memakan beberapa kilobyte, jadi hampir seluruh batas dipakai untuk gambar halamannya.",
        "Dua halaman juga muat, masing-masing dengan resolusi lebih kecil; di tiga halaman atau lebih, huruf kecil mulai kabur. Kalau formulir meminta dokumen panjang dalam 100 KB, periksa apakah formulir itu menerima setiap halaman sebagai file terpisah.",
      ],
    },
    {
      heading: "Menyiapkan halaman",
      id: "prepare",
      body: [
        "Letakkan dokumen rata di atas permukaan gelap, foto dari tepat di atas di bawah cahaya siang, lalu potong semua yang bukan bagian halaman. Halaman yang bersih dan terang merata terkompres jauh lebih baik daripada halaman yang ada bayangannya, dan sisa meja di sekitar kertas hanya membuang byte.",
        "Dokumen ketik atau cetak biasa sebaiknya diubah dulu menjadi hitam putih dengan alat Foto Hitam Putih: di 100 KB teksnya jadi terlihat lebih tajam. Surat dengan stempel atau cap berwarna biarkan tetap berwarna.",
      ],
    },
    {
      heading: "Ukuran kertas dan tata letak",
      id: "layout",
      body: [
        "A4 adalah pilihan awal dan cocok untuk sebagian besar dokumen. Pilihan Sesuai gambar membuat setiap halaman persis seukuran fotonya, tanpa margin — pas untuk KTP dan struk. Ukuran kertas hampir tidak mengubah ukuran file — PDF seperti ini hampir seluruhnya berisi gambar — jadi pilih saja yang tampilannya paling rapi.",
        "Batasnya bisa diubah: ketik 99 untuk formulir yang tetap rewel pada file yang mendekati 100 KB, atau angka lain sesuai kebutuhan.",
      ],
    },
    {
      heading: "Kalau tidak muat",
      id: "too-big",
      body: [
        "Kalau dokumennya terdiri dari banyak halaman, 100 KB bisa saja terlalu kecil untuk membuat semuanya terbaca. Alat ini tetap membuat PDF sekecil mungkin dan memberi tahu bahwa batasnya tidak tercapai. Dalam hal itu, kalau formulirnya mengizinkan, gunakan halaman 200 KB atau 300 KB, atau buat PDF terpisah untuk setiap halaman.",
      ],
    },
    {
      heading: "Scan atau foto?",
      id: "scan-or-photo",
      body: [
        "Scan dari scanner flatbed adalah titik awal paling bersih: cahaya merata, halaman benar-benar rata, dan latar putih — semuanya mudah dikompres. Untuk PDF 100 KB, scan 150–200 DPI sudah cukup; resolusi lebih tinggi hanya menambah piksel yang nanti harus dibuang lagi agar muat dalam batas.",
        "Ponsel bekerja hampir sama baiknya kalau halaman difoto di bawah cahaya siang, dari tepat di atas, dan tanpa flash. Aplikasi pemindai membantu lagi dengan meluruskan halaman dan memutihkan kertas; ekspor hasilnya sebagai JPG lalu tambahkan di sini.",
      ],
    },
    {
      heading: "KTP dan KK dalam satu PDF kecil",
      id: "ktp-kk",
      body: [
        "Banyak pendaftaran meminta KTP dan KK digabung dalam satu PDF. KTP kecil, tetapi KK adalah lembar besar dengan banyak tulisan kecil, jadi KK-lah yang paling butuh piksel. Tambahkan foto KK dan KTP, pilih A4, dan batas 100 KB dibagi sesuai luas masing-masing gambar — KK otomatis mendapat bagian lebih besar.",
        "Pastikan KK difoto penuh dan lurus, termasuk nomor KK di bagian atas. Kalau tulisan kecil di tabel anggota keluarga masih sulit dibaca, minta izin untuk batas yang lebih besar atau kirim KK sebagai file tersendiri.",
      ],
    },
  ],

  howToTitle: "Cara mengubah JPG ke PDF di bawah 100 KB",
  steps: [
    { title: "Tambahkan gambar halaman", description: "Tambahkan foto atau scan dokumen — JPG, PNG, WEBP, atau GIF." },
    { title: "Periksa tata letak", description: "Pilih ukuran kertas dan urutan; batas 100 KB sudah terpasang." },
    { title: "Buat PDF", description: "Gambar dikompres hanya secukupnya, dan PDF di bawah 100 KB langsung terunduh." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Batas untuk seluruh file", description: "PDF jadi di bawah 100 KB secara keseluruhan — bukan hanya tiap gambar di dalamnya." },
    { icon: "description", title: "Halaman tetap terbaca", description: "Gambar dikompres hanya sebanyak yang diminta batas, jadi teks tetap tajam." },
    { icon: "lock", title: "Tanpa upload", description: "Dokumen Anda diubah menjadi PDF langsung di browser." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah JPG ke PDF di bawah 100 KB?", a: "Tambahkan gambar, periksa ukuran kertas, lalu klik Buat PDF. Batas 100 KB sudah terpasang; gambar hanya dikompres secukupnya." },
    { q: "Apakah dokumen saya tetap terbaca?", a: "Untuk satu atau dua halaman, ya — di 100 KB, halaman A4 menyimpan cukup detail untuk teks cetak, stempel, dan tanda tangan." },
    { q: "Bisakah beberapa halaman muat dalam 100 KB?", a: "Dua halaman muat dengan baik; lebih dari itu, setiap halaman mendapat lebih sedikit piksel. Untuk dokumen panjang, pilih batas lebih besar kalau formulir mengizinkan." },
    { q: "Apakah ukuran kertas memengaruhi ukuran file?", a: "Hampir tidak. PDF hampir seluruhnya berisi gambar; ukuran kertas hanya mengubah cara gambar ditempatkan." },
    { q: "Bagaimana kalau PDF sudah di bawah 100 KB?", a: "Kalau gambar Anda sudah menghasilkan PDF di bawah 100 KB, tidak ada yang dikompres ulang — PDF dibuat langsung dari gambar itu." },
    { q: "Apakah 100 KB sama dengan 0,1 MB?", a: "Ya, 100 KB adalah 100.000 byte. PDF juga lolos di formulir yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Apakah dokumen saya di-upload?", a: "Tidak. PDF dibuat sepenuhnya di browser Anda." },
    { q: "Lebih baik scan atau foto dokumen?", a: "Keduanya bisa. Scan sedikit lebih bersih; foto ponsel di bawah cahaya siang, dari tepat di atas dan tanpa flash, hasilnya sangat mendekati." },
    { q: "Bagaimana menggabungkan KTP dan KK dalam PDF 100 KB?", a: "Tambahkan foto KK dan KTP, pilih A4, lalu buat PDF. Batas dibagi sesuai luas gambar, jadi KK yang lebih besar mendapat bagian lebih banyak." },
  ],

  security:
    "Gambar dokumen Anda dikompres dan disusun menjadi PDF di perangkat Anda, di browser. Tidak ada yang di-upload atau disimpan di mana pun.",
};

export default content;
