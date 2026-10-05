import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/jpg-ke-pdf-500kb (variant of image-to-pdf, 500 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-500kb",
  locale: "id",
  name: "JPG ke PDF di Bawah 500 KB",
  tagline:
    "Gabungkan banyak foto atau scan menjadi satu PDF di bawah 500 KB — berkas pendaftaran beberapa halaman, struk, laporan, dan tugas tulisan tangan — siap di-upload atau dikirim lewat email. Halaman terbaca, di browser, tanpa upload.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PDF di Bawah 500 KB Online Gratis — Dokumen Panjang | oMyImage",
  metaDescription:
    "Gabungkan beberapa halaman JPG menjadi satu PDF di bawah 500 KB secara online dan gratis — berkas pendaftaran, struk, dan laporan siap di-upload atau dikirim email. Privat.",

  intro:
    "500 KB adalah batas yang umum ketika portal atau kantor ingin menerima seluruh dokumen sekaligus: berkas pendaftaran sepuluh halaman, struk sebulan, tugas tulisan tangan, laporan dengan foto. Kalau disusun langsung dari ponsel, halaman-halaman itu menghasilkan PDF 20 atau 30 MB. Halaman ini membuat PDF dan, kalau lebih dari 500 KB, mengompres ulang gambar hanya sampai seluruh file muat, sambil menjaga setiap halaman sejelas yang dimungkinkan batas tersebut.",

  sections: [
    {
      heading: "Dokumen panjang dalam satu file",
      id: "long",
      body: [
        "Di 500 KB, lima halaman teks ketik tetap sekitar 800 × 1100 piksel masing-masing, dan sepuluh halaman sekitar 600 × 800 — cukup agar huruf ukuran biasa dan tulisan tangan terbaca pada zoom normal. Batas dibagi sesuai luas setiap gambar, jadi kualitas halaman merata.",
        "Sampai sekitar sepuluh halaman hasilnya masih nyaman dibaca; kalau lebih, bagi dokumen menjadi dua PDF atau tanyakan apakah portal menerima file yang lebih besar.",
      ],
    },
    {
      heading: "Struk dan nota panjang",
      id: "receipts",
      body: [
        "Struk belanja itu panjang dan sempit, dan halaman A4 akan sebagian besar kosong. Pilih Sesuai gambar di Ukuran kertas dan setiap struk menjadi halaman yang persis seukuran bentuknya — mudah dibaca di ponsel dan mudah diperiksa bagian keuangan.",
        "Beberapa struk juga bisa berbagi satu halaman A4: pilih 2 atau 4 di Gambar per halaman.",
      ],
    },
    {
      heading: "Mengirim PDF lewat email",
      id: "email",
      body: [
        "Sebagian besar layanan email membatasi lampiran sekitar 20–25 MB per pesan, dan banyak kotak masuk kantor menerima jauh lebih kecil. PDF di bawah 500 KB lolos ke mana saja, langsung terbuka di ponsel, dan tidak memenuhi kotak masuk penerima — dan tetap terbaca saat dicetak di A4.",
      ],
    },
    {
      heading: "Simpan file aslinya",
      id: "originals",
      body: [
        "PDF yang dikompres adalah salinan untuk dikirim. Simpan foto aslinya: kalau nanti ada yang meminta versi halaman yang lebih tajam, atau batas yang berbeda, Anda bisa membuatnya dari file asli, bukan dari PDF yang sudah dikompres.",
      ],
    },
    {
      heading: "Tugas dan halaman tulisan tangan",
      id: "assignments",
      body: [
        "Kampus dan sekolah sering menerima tugas tulisan tangan dalam satu PDF dengan batas ukuran. Foto setiap halaman di bawah cahaya siang, dari tepat di atas, lalu tambahkan fotonya sesuai urutan halaman — pratinjau menampilkan semuanya sebelum Anda membuat file.",
        "Pulpen berwarna gelap jauh lebih terbaca daripada pensil setelah dikompres. Kalau satu halaman hasilnya pucat, foto ulang halaman itu saja; halaman lain tidak perlu diulang.",
      ],
    },
    {
      heading: "Foto dengan ukuran berbeda",
      id: "mixed",
      body: [
        "Halaman yang difoto dari jarak berbeda, atau dengan ponsel berbeda, ukurannya dalam piksel bisa sangat berbeda. Di kertas A4 atau Letter, semuanya disesuaikan ke halaman yang sama, dan batas dibagi sesuai luas setiap foto, jadi satu foto yang sangat besar tidak menghabiskan jatah foto lain.",
      ],
    },
    {
      heading: "Berkas lamaran dalam satu PDF",
      id: "berkas",
      body: [
        "Lamaran kerja dan pendaftaran sering meminta seluruh berkas dalam satu PDF: surat lamaran, CV, KTP, ijazah, transkrip, dan sertifikat. Susun sesuai urutan yang diminta di pengumuman — biasanya surat lamaran di depan — supaya petugas tidak perlu mencari-cari.",
        "Untuk delapan sampai sepuluh halaman seperti ini, 500 KB menjaga semuanya terbaca. Halaman yang hanya berisi teks ketik, seperti surat lamaran dan CV, sebaiknya diekspor langsung dari aplikasinya sebagai gambar yang bersih, bukan difoto dari layar.",
      ],
    },
  ],

  howToTitle: "Cara mengubah JPG ke PDF di bawah 500 KB",
  steps: [
    { title: "Tambahkan semua halaman", description: "Tambahkan foto atau scan setiap halaman — JPG, PNG, WEBP, atau GIF." },
    { title: "Atur urutan dan tata letak", description: "Susun halaman dan pilih ukuran kertas; batas 500 KB sudah terpasang." },
    { title: "Buat PDF", description: "Unduh satu PDF di bawah 500 KB, siap di-upload atau dikirim lewat email." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Banyak halaman, file kecil", description: "Sampai sepuluh halaman dalam satu PDF di bawah 500 KB." },
    { icon: "receipt_long", title: "Struk juga muat", description: "Halaman Sesuai gambar untuk struk panjang, atau beberapa struk per halaman A4." },
    { icon: "lock", title: "Privat", description: "Halaman dikompres dan digabung di browser, tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah JPG ke PDF di bawah 500 KB?", a: "Tambahkan semua gambar, susun urutannya, lalu klik Buat PDF. Batas 500 KB sudah terpasang; gambar hanya dikompres secukupnya." },
    { q: "Berapa halaman yang muat di PDF 500 KB?", a: "Lima halaman terbaca jelas, dan sepuluh halaman berhuruf biasa juga masih baik. Kalau lebih, bagi dokumennya." },
    { q: "Bagaimana membuat PDF dari struk?", a: "Tambahkan foto struk dan pilih Sesuai gambar di Ukuran kertas, atau 2–4 gambar per halaman A4." },
    { q: "Bisakah PDF 500 KB dikirim lewat email?", a: "Bisa, lewat layanan email apa pun — ukurannya jauh di bawah semua batas lampiran." },
    { q: "Apakah tulisan tangan tetap terbaca?", a: "Ya, sampai sekitar sepuluh halaman tulisan tangan biasa. Untuk hasil paling tajam, foto setiap halaman di bawah cahaya siang." },
    { q: "Apakah 500 KB sama dengan 0,5 MB?", a: "Ya, 500 KB adalah 500.000 byte. PDF juga lolos di portal yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Apakah halaman saya di-upload?", a: "Tidak. PDF dibuat sepenuhnya di browser Anda." },
    { q: "Bisakah menggabungkan foto dari ponsel yang berbeda?", a: "Bisa. Setiap foto disesuaikan ke ukuran halaman yang sama, berapa pun resolusinya, dan batas dibagi secara adil di antara semuanya." },
    { q: "Bagaimana menggabungkan berkas lamaran kerja dalam satu PDF?", a: "Tambahkan surat lamaran, CV, KTP, ijazah, dan sertifikat sesuai urutan yang diminta, lalu buat PDF — semuanya muat di bawah 500 KB." },
  ],

  security:
    "Gambar halaman Anda dikompres dan disusun menjadi PDF di perangkat Anda, di browser. Tidak ada yang di-upload atau disimpan di mana pun.",
};

export default content;
