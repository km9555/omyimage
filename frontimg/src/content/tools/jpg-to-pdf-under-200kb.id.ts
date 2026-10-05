import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/jpg-ke-pdf-200kb (variant of image-to-pdf, 200 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-200kb",
  locale: "id",
  name: "JPG ke PDF di Bawah 200 KB",
  tagline:
    "Gabungkan foto atau scan dokumen menjadi satu PDF di bawah 200 KB — ijazah dengan transkrip, sertifikat, KTP depan-belakang — untuk pendaftaran sekolah, beasiswa, dan lowongan kerja. Halaman tetap terbaca, di browser Anda, tanpa upload.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PDF di Bawah 200 KB Online Gratis — Halaman Terbaca | oMyImage",
  metaDescription:
    "Gabungkan JPG menjadi satu PDF di bawah 200 KB secara online dan gratis — scan ijazah, transkrip, dan kartu identitas untuk pendaftaran dan lamaran kerja. Tanpa upload.",

  intro:
    "200 KB adalah batas PDF yang paling umum di portal pendaftaran sekolah dan kampus, beasiswa, dan rekrutmen, biasanya untuk dokumen dua atau tiga halaman: ijazah dengan bagian belakangnya, sertifikat dengan lampirannya, kartu identitas depan dan belakang. Halaman ini menyusun gambar Anda menjadi satu PDF sesuai urutan yang Anda pilih dan, kalau hasilnya lebih dari 200 KB, mengompres ulang gambar hanya sampai seluruh file muat — dengan membagi batas tersebut agar setiap halaman sama-sama terbaca.",

  sections: [
    {
      heading: "Dua atau tiga halaman yang terbaca",
      id: "pages",
      body: [
        "Di 200 KB, dua halaman teks ketik tetap sekitar 800 × 1100 piksel masing-masing, dan tiga halaman sekitar 600 × 800 — dua halaman terbaca jelas, dan tiga halaman huruf ukuran biasa, seperti kebanyakan surat dan formulir, juga masih nyaman. Batas dibagi sesuai luas setiap gambar, jadi scan satu halaman penuh mendapat bagian lebih besar daripada KTP kecil dalam dokumen yang sama, dan tidak ada halaman yang jauh lebih buram dari yang lain.",
        "Gambar yang sudah muat tidak diubah: kalau halaman Anda apa adanya sudah menghasilkan PDF di bawah 200 KB, PDF dibuat dari gambar itu tanpa perubahan.",
      ],
    },
    {
      heading: "Mengurutkan halaman",
      id: "order",
      body: [
        "Tambahkan semua gambar, lalu gunakan panah di setiap gambar untuk menyusunnya sesuai urutan baca dokumen — depan sebelum belakang, halaman pertama sebelum kedua. Pratinjau di sebelah kiri menampilkan halaman persis seperti nanti di PDF.",
        "Beri nama foto yang jelas sebelum ditambahkan, misalnya ijazah-depan dan ijazah-belakang, supaya urutan yang salah langsung terlihat.",
      ],
    },
    {
      heading: "Dua sisi kartu dalam satu halaman",
      id: "both-sides",
      body: [
        "Portal sering meminta sisi depan dan belakang kartu identitas dalam satu halaman PDF. Tambahkan kedua foto, pilih 2 di Gambar per halaman, dan kedua sisi akan tersusun atas-bawah di satu halaman A4. Potong dulu setiap foto tepat di tepi kartu supaya kedua sisi tampil dengan ukuran yang sama.",
      ],
    },
    {
      heading: "Periksa sebelum upload",
      id: "check",
      body: [
        "Buka PDF yang terunduh dan lihat setiap halaman pada zoom 100%: nama, nomor, dan tanggal harus terbaca jelas, dan tidak ada yang terpotong di tepi. Kalau ada halaman yang sulit dibaca, foto ulang halaman itu dengan cahaya lebih baik daripada menaikkan batas — foto yang tajam terkompres jauh lebih baik daripada foto yang buram.",
      ],
    },
    {
      heading: "Bagaimana batas 200 KB dicapai",
      id: "how",
      body: [
        "Pertama, PDF dibuat dari gambar Anda apa adanya. Kalau sudah di bawah 200 KB, Anda langsung mendapatkannya dan tidak ada yang dikompres ulang. Kalau belum, alat ini mengukur berapa bagian file yang berupa gambar dan berapa yang merupakan struktur PDF, lalu membagi sisa 200 KB ke setiap gambar sesuai ukurannya.",
        "Setiap gambar kemudian disimpan ulang dengan kualitas JPG tertinggi yang muat dalam bagiannya, dan PDF dibuat lagi. Kalau hasilnya masih lebih beberapa byte, bagian-bagiannya dipersempit sedikit dan dicoba sekali lagi — jadi file yang terunduh selalu di bawah batas, bukan sekadar mendekatinya.",
      ],
    },
    {
      heading: "Ijazah dan transkrip nilai",
      id: "ijazah",
      body: [
        "Ijazah dan transkrip nilai sering diminta sebagai satu PDF. Ijazah biasanya punya foto, tanda tangan, dan stempel, sementara transkrip berisi tabel nilai dengan huruf kecil. Tambahkan ijazah dulu, lalu transkrip, dan biarkan ukuran kertas A4 — 200 KB cukup agar nilai di tabel tetap terbaca.",
        "Kalau transkripnya dua halaman atau ijazahnya bolak-balik, PDF menjadi tiga atau empat halaman dan setiap halaman mendapat lebih sedikit piksel. Periksa tabel nilai pada zoom 100%; kalau angkanya mulai kabur, foto ulang transkrip dengan cahaya lebih terang.",
      ],
    },
  ],

  howToTitle: "Cara mengubah JPG ke PDF di bawah 200 KB",
  steps: [
    { title: "Tambahkan gambar", description: "Tambahkan foto atau scan setiap halaman — JPG, PNG, WEBP, atau GIF." },
    { title: "Atur urutan dan tata letak", description: "Susun urutan dengan panah; pilih ukuran kertas dan gambar per halaman." },
    { title: "Buat PDF", description: "PDF di bawah 200 KB langsung terunduh, gambar dikompres hanya secukupnya." },
  ],

  features: [
    { icon: "picture_as_pdf", title: "Satu PDF di bawah 200 KB", description: "Seluruh file tetap di bawah batas, berapa pun jumlah halamannya." },
    { icon: "reorder", title: "Halaman sesuai urutan Anda", description: "Ubah urutan halaman dan lihat hasilnya di pratinjau sebelum membuat PDF." },
    { icon: "lock", title: "Privat", description: "Ijazah, sertifikat, dan kartu identitas tidak pernah keluar dari browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah JPG ke PDF di bawah 200 KB?", a: "Tambahkan gambar, susun urutannya, lalu klik Buat PDF. Batas 200 KB sudah terpasang, dan gambar hanya dikompres secukupnya." },
    { q: "Berapa halaman yang muat di PDF 200 KB?", a: "Dua halaman terbaca jelas; tiga halaman surat dan formulir berhuruf biasa juga masih baik. Lebih banyak halaman juga muat, masing-masing dengan detail lebih sedikit." },
    { q: "Bagaimana menaruh dua sisi KTP dalam satu halaman?", a: "Tambahkan kedua foto dan pilih 2 di Gambar per halaman. Kedua sisi akan berada di satu halaman." },
    { q: "Apakah semua halaman kualitasnya sama?", a: "Ya. Batas dibagi sesuai luas setiap gambar, jadi setiap halaman dikompres secara merata." },
    { q: "Gambar saya sudah kecil — apakah tetap dikompres?", a: "Tidak. Kalau gambar sudah menghasilkan PDF di bawah 200 KB, gambar dipakai apa adanya." },
    { q: "Apakah 200 KB sama dengan 0,2 MB?", a: "Ya, 200 KB adalah 200.000 byte. PDF juga lolos di portal yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Apakah dokumen saya di-upload?", a: "Tidak. Gambar dikompres di browser dan PDF disusun di sana juga." },
    { q: "Kenapa prosesnya beberapa detik?", a: "Setiap gambar dikompres ke bagian batasnya dan PDF dibuat ulang, semuanya di browser Anda. Foto ponsel yang besar butuh waktu sedikit lebih lama." },
    { q: "Bagaimana menggabungkan ijazah dan transkrip di bawah 200 KB?", a: "Tambahkan ijazah lalu transkrip, biarkan ukuran kertas A4, dan buat PDF. Periksa tabel nilai pada zoom 100% sebelum upload." },
  ],

  security:
    "Gambar dokumen Anda dikompres dan disusun menjadi PDF di perangkat Anda, di browser. Tidak ada yang di-upload atau disimpan di mana pun.",
};

export default content;
