import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/foto-ke-pdf.
 *
 * Measured (Indonesia, per month):
 *   jpg ke pdf     165,000  KD 10
 *   foto ke pdf    110,000  KD 1
 *   gambar ke pdf   60,500  KD 1
 * The slug is the generic `foto-ke-pdf` — accurate to a tool that takes JPG,
 * PNG, WEBP, GIF and BMP, and itself 110,000 a month — while the metaTitle
 * leads with "JPG ke PDF", the single biggest phrasing, and the body carries
 * "gambar ke pdf". One page, all three queries.
 *
 * The Indonesian use case the English page only gestures at: registration
 * files. CPNS, scholarships, school and campus admission and job applications
 * routinely ask for KTP, KK, diploma and certificate scans merged into ONE PDF
 * under a size cap. The `why` and `size` sections say so by name.
 *
 * Paper: A4 is the standard here. Indonesian offices also use F4 (folio,
 * 215×330 mm), but this tool does not offer it, so the page recommends A4 and
 * does not raise a size it cannot produce.
 */
const content: ToolPageContent = {
  toolId: "image-to-pdf",
  locale: "id",
  name: "Foto ke PDF",
  tagline:
    "Ubah foto JPG, PNG, dan WEBP menjadi satu file PDF secara online — atur urutan halaman, ukuran kertas, orientasi, tata letak, dan margin. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PDF Online Gratis — Ubah Foto ke PDF | oMyImage",
  metaDescription:
    "Ubah JPG, foto, dan gambar ke PDF online gratis: gabungkan banyak foto jadi satu PDF, atur urutan, A4 atau ukuran lain, tanpa upload ke server. Tanpa daftar, tanpa watermark.",

  intro:
    "Perlu mengirim sekumpulan foto atau hasil scan sebagai satu dokumen? Alat Foto ke PDF ini menggabungkan gambar JPG, PNG, dan WEBP Anda menjadi satu file PDF. Atur urutan halamannya, sesuaikan setiap halaman dengan fotonya atau pilih A4, Letter, Legal, A3, atau A5, taruh hingga sembilan gambar per halaman, lalu atur cara penempatan, margin, dan latarnya. Semuanya disusun di browser Anda, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Mengapa foto perlu dijadikan PDF",
      id: "why",
      body: [
        "PDF mengubah sekumpulan file terpisah menjadi satu dokumen dengan urutan yang tetap dan tampilan yang bisa diprediksi. Itu penting setiap kali sesuatu harus diserahkan, bukan sekadar dibagikan: formulir lamaran, klaim penggantian biaya, dokumen asuransi, tugas sekolah, dan berkas hukum hampir selalu diminta dalam satu PDF, dan kumpulan JPG sering langsung ditolak.",
        "Di Indonesia, kasus yang paling sering adalah berkas pendaftaran. Seleksi CPNS, beasiswa, penerimaan sekolah dan kampus, serta lamaran kerja biasanya meminta scan KTP, KK, ijazah, dan sertifikat digabung menjadi satu PDF. Foto dokumen dari ponsel bisa langsung disusun di sini tanpa aplikasi tambahan.",
        "PDF juga menyelesaikan masalah urutan. Gambar yang dikirim sebagai lampiran terpisah tiba dalam urutan sesuka aplikasi email, dan pengelola file mengurutkan 'IMG_10' sebelum 'IMG_2'. PDF mengunci urutannya, sehingga penerima membaca halaman sesuai urutan yang Anda maksud. Terakhir, PDF tercetak dengan konsisten: ukuran kertas, orientasi, dan margin ditentukan saat dokumen dibuat, bukan saat penerima membuka jendela cetak.",
      ],
    },
    {
      heading: "Ukuran kertas, orientasi, dan penempatan",
      id: "layout",
      body: [
        "A4 adalah ukuran standar di Indonesia dan hampir di seluruh dunia di luar Amerika Utara; Letter sedikit lebih lebar dan lebih pendek dan merupakan standar AS. Memilih ukuran yang sesuai dengan printer penerima menghindari pengecilan dan pemotongan yang terjadi saat dokumen Letter dicetak di kertas A4.",
        "\"Sesuai gambar\" membuat ukuran setiap halaman mengikuti fotonya, pilihan yang tepat untuk dokumen yang hanya dibaca di layar, kumpulan foto, dan apa pun dengan orientasi campuran. Pilihan ini menghilangkan pita putih yang muncul saat foto lebar ditaruh di tengah halaman tegak. Orientasi otomatis adalah jalan tengahnya: ukuran kertas tetap standar, tetapi setiap halaman diputar mengikuti gambarnya, sehingga foto lanskap tidak lagi terjepit.",
        "Mode penempatan menentukan apa yang terjadi saat gambar dan halaman tetap tidak cocok. Muat menampilkan seluruh gambar dan menerima margin kosong; Penuhi mengisi kertas dari tepi ke tepi dan memotong bagian yang berlebih, cocok untuk halaman foto tanpa bingkai; Regangkan memaksa ukurannya pas dan sebaiknya hanya dipakai untuk gambar yang proporsinya sudah mirip, karena gambar lain akan terlihat penyok.",
        "Menaruh beberapa gambar per halaman mengubah alat yang sama menjadi lembar kontak atau handout. Mode 2 per halaman membagi halaman di sisi panjangnya, sedangkan 4, 6, dan 9 menyusun grid sesuai urutan baca — dan margin menjadi jarak antarsel sekaligus tepi di sekelilingnya.",
      ],
    },
    {
      heading: "Menjaga ukuran file tetap wajar",
      id: "size",
      body: [
        "Ukuran PDF kurang lebih sama dengan total foto yang Anda masukkan — foto disematkan apa adanya, tanpa kompresi ulang — jadi dokumen dari dua puluh foto ponsel 12 megapiksel bisa mencapai puluhan megabyte, biasanya jauh di atas batas upload sistem tujuan. Banyak portal pendaftaran di Indonesia membatasi berkas di 1 atau 2 MB.",
        "Perbaikannya dilakukan sebelum PDF dibuat. Ubah ukuran foto ke sekitar 1500–2000 piksel di sisi panjangnya, yang sudah lebih dari cukup untuk dibaca di layar maupun dicetak biasa, lalu kompres fotonya. Untuk foto dokumen berisi teks, mengubahnya ke hitam putih lebih dulu sering memangkas ukurannya setengah lagi tanpa mengurangi keterbacaan.",
      ],
    },
    {
      heading: "Semuanya terjadi di browser Anda",
      id: "privacy",
      body: [
        "PDF disusun di perangkat Anda sendiri menggunakan pustaka PDF JavaScript, sehingga foto tidak pernah diunggah. Itu penting untuk diketahui mengingat apa yang biasanya diubah di sini — KTP, KK, paspor, rekening koran, formulir medis, dan kontrak adalah jenis dokumen yang tidak seharusnya lewat server milik orang lain.",
        "Konsekuensi praktisnya, alat ini tetap berfungsi tanpa internet setelah halaman termuat, dan jumlah foto yang sangat banyak hanya dibatasi oleh memori perangkat Anda, bukan oleh batas upload.",
      ],
    },
  ],

  howToTitle: "Cara mengubah foto ke PDF",
  steps: [
    { title: "Unggah", description: "Pilih foto Anda, atau seret dan lepas ke area kerja." },
    { title: "Susun & atur", description: "Atur urutan halaman dengan tombol panah, lalu pilih ukuran kertas, orientasi, jumlah gambar per halaman, penempatan, margin, dan latar." },
    { title: "Buat PDF", description: "Klik Buat PDF untuk mengunduh satu dokumen yang tersusun persis seperti pengaturan Anda." },
  ],

  features: [
    { icon: "reorder", title: "Atur urutan halaman", description: "Susun foto sesuai urutan yang Anda mau dengan tombol naik/turun sebelum membuat PDF." },
    { icon: "description", title: "Kendali halaman penuh", description: "Sesuaikan setiap halaman dengan gambarnya, atau pakai A4, Letter, Legal, A3, atau A5 dengan orientasi otomatis, tegak, atau mendatar, dan margin yang Anda atur dalam poin." },
    { icon: "grid_view", title: "Banyak gambar per halaman", description: "Taruh 1, 2, 4, 6, atau 9 gambar per halaman dan pilih apakah masing-masing dimuat utuh, dipotong agar penuh, atau diregangkan." },
    { icon: "lock", title: "100% privat", description: "PDF disusun sepenuhnya di browser Anda — foto Anda tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bisakah menggabungkan banyak foto jadi satu PDF?", a: "Bisa. Tambahkan foto sebanyak yang Anda mau dan susun urutannya. Secara bawaan setiap foto menjadi satu halaman, atau Anda bisa menaruh 2, 4, 6, atau 9 per halaman." },
    { q: "Format gambar apa saja yang didukung?", a: "JPG, PNG, WEBP, GIF, dan BMP. Transparansi PNG dipertahankan, jadi latar halaman yang Anda pilih akan terlihat di baliknya — termasuk tanpa latar sama sekali." },
    { q: "Bisakah memilih A4 atau Letter?", a: "Bisa — A4, Letter, Legal, A3, dan A5, masing-masing tegak, mendatar, atau otomatis (halaman mengikuti bentuk gambarnya). Atau pilih 'Sesuai gambar' agar setiap halaman mengikuti ukuran fotonya." },
    { q: "Apa fungsi Muat, Penuhi, dan Regangkan?", a: "Muat menaruh seluruh gambar di dalam halaman, menambahkan ruang kosong di bagian yang bentuknya tidak cocok. Penuhi mengisi halaman sepenuhnya dan memotong bagian yang berlebih. Regangkan memaksa gambar mengisi halaman persis — hanya berguna kalau rasio gambarnya memang sudah mirip." },
    { q: "Apakah membuat PDF menurunkan kualitas foto?", a: "Tidak. File JPG dan PNG disematkan apa adanya, tanpa kompresi ulang, jadi halamannya berisi piksel asli Anda. Satu-satunya pengecualian adalah foto dengan rotasi EXIF, yang harus disimpan ulang agar tampil dengan posisi yang benar." },
    { q: "Apakah foto saya diunggah?", a: "Tidak. PDF dibuat secara lokal di browser Anda, jadi foto Anda tidak pernah meninggalkan perangkat." },
    { q: "Apakah gratis?", a: "Sepenuhnya gratis, tanpa watermark dan tanpa daftar." },
    { q: "Ukuran kertas apa yang sebaiknya dipilih?", a: "A4 untuk apa pun yang akan dicetak di Indonesia, dan 'Sesuai gambar' kalau PDF-nya hanya akan dibaca di layar. 'Sesuai gambar' menghindari margin putih yang muncul saat foto lanskap ditaruh di halaman tegak." },
    { q: "Bisakah mengatur urutan halaman?", a: "Bisa — foto ditempatkan sesuai urutannya di daftar, dan Anda bisa mengubahnya sebelum PDF dibuat. Ini paling penting saat pengelola file mengurutkannya sebagai teks, yang menaruh 'hal10' sebelum 'hal2'." },
    { q: "Apakah PDF-nya jauh lebih besar dari fotonya?", a: "Hanya sedikit. Foto disematkan kurang lebih apa adanya, jadi ukuran PDF kira-kira sama dengan total file Anda ditambah sedikit overhead struktur. Kalau hasilnya terlalu besar untuk batas upload, kompres atau ubah ukuran fotonya dulu — PDF dari foto 4000 piksel sangat besar dan tidak perlu untuk dibaca di layar." },
    { q: "Bisakah membuat PDF dari foto dokumen di ponsel?", a: "Bisa, dan itu salah satu pemakaian paling umum — misalnya KTP, KK, dan ijazah untuk berkas pendaftaran. Untuk hasil terbaik, foto setiap halaman tegak lurus dengan cahaya yang rata, crop bagian sekitarnya lebih dulu, dan pertimbangkan mengubahnya ke hitam putih — dokumen yang terlihat seperti hasil scan jauh lebih kecil daripada foto berwarna dan sering lebih mudah dibaca." },
    { q: "Apakah teks di PDF bisa dicari?", a: "Tidak. Halamannya berupa gambar, jadi PDF berisi gambar teks, bukan teks itu sendiri. Kalau Anda perlu mencari atau menyalin kata-katanya, jalankan fotonya lewat alat Gambar ke Teks lebih dulu — alat itu mengambil teksnya, yang bisa Anda tempel ke dokumen." },
  ],

  security:
    "Foto Anda tetap privat. PDF disusun sepenuhnya di browser Anda — tidak ada yang diunggah ke server. Tanpa penyimpanan, tanpa pelacakan file Anda.",

  rating: { value: "4.9", count: "655" },

  ui: {
    "or drop JPG, PNG, WEBP or GIF images here": "atau lepas gambar JPG, PNG, WEBP, atau GIF di sini",
    "Created a PDF with 1 page.": "PDF dengan 1 halaman berhasil dibuat.",
    "Created a PDF with {n} pages.": "PDF dengan {n} halaman berhasil dibuat.",
    "Couldn't create the PDF.": "PDF tidak bisa dibuat.",
    // Pure template — both slots are filled with already-translated values,
    // so there is nothing here to translate.
    "{orientation} — {name}": "{orientation} — {name}", // i18n-same
    "Clear images": "Hapus gambar",
    "PDF settings": "Pengaturan PDF",
    "PDF Settings": "Pengaturan PDF",
    "Build": "Buat",
    "Building PDF…": "Membuat PDF…",
    "1 page": "1 halaman",
    "{n} pages": "{n} halaman",
    "Use the arrows to reorder.": "Gunakan tombol panah untuk mengubah urutan.",
    "Create PDF": "Buat PDF",
    "That's {size} of images. They're embedded without recompression, so the PDF will be about that big — likely too large to email.":
      "Total fotonya {size}. Foto disematkan tanpa kompresi ulang, jadi PDF-nya kurang lebih sebesar itu — kemungkinan terlalu besar untuk email atau batas upload.",
    "Compress these first": "Kompres dulu",
    "Page size": "Ukuran kertas",
    "Orientation": "Orientasi",
    "Each page already takes its image's shape.": "Setiap halaman sudah mengikuti bentuk gambarnya.",
    "Set each image's orientation on its card — the first image on a page decides that page.":
      "Atur orientasi di kartu setiap gambar — gambar pertama di sebuah halaman menentukan orientasi halaman itu.",
    "Set each image's orientation on its card.": "Atur orientasi di kartu setiap gambar.",
    "Images per page": "Gambar per halaman",
    "Multi-up pages are laid out on A4.": "Halaman berisi beberapa gambar disusun di kertas A4.",
    "Fit": "Penempatan",
    "Contain keeps the whole image (may add margins). Cover fills the area (may crop). Stretch distorts to fill exactly.":
      "Muat menampilkan seluruh gambar (bisa ada margin). Penuhi mengisi seluruh area (bisa terpotong). Regangkan memaksa ukurannya pas walau gambarnya jadi penyok.",
    "Margin": "Margin", // i18n-same — the Indonesian word is the loanword
    "Space around images (and between them on multi-up pages).":
      "Jarak di sekitar gambar (dan di antara gambar pada halaman berisi beberapa gambar).",
    "Page background": "Latar halaman",
    "Preview": "Pratinjau",
    "Previous page": "Halaman sebelumnya",
    "Next page": "Halaman berikutnya",
    "Fit to image": "Sesuai gambar",
    "Auto": "Otomatis",
    "Auto (match image)": "Otomatis (ikuti gambar)",
    "Portrait": "Tegak",
    "Landscape": "Mendatar",
    "Custom (per image)": "Kustom (per gambar)",
    "Contain": "Muat",
    "Cover": "Penuhi",
    "Stretch": "Regangkan",
  },
};

export default content;
