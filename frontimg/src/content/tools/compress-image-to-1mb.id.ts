import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/kompres-foto-1mb (variant of compress-image, 1 MB).
 * "kompres foto 1 mb" 40,500/mo, KD 0 — the biggest single KB query in
 * Indonesia (2026-10-04); bulkpictools ranks #13 for it with an English page.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-1mb",
  locale: "id",
  name: "Kompres Foto 1 MB",
  tagline:
    "Kompres foto ponsel sampai di bawah 1 MB, biasanya tanpa kehilangan satu piksel pun. Untuk unggahan portal, email, dan aplikasi chat — gratis, sekaligus banyak, dan privat di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 1 MB Online — Gratis, Resolusi Tetap Penuh | oMyImage",
  metaDescription:
    "Kompres foto ponsel sampai di bawah 1 MB secara online dan gratis, biasanya dengan resolusi penuh. Pas untuk batas portal, email, dan aplikasi chat. Privat, di browser.",

  intro:
    "Foto dari ponsel sekarang berukuran 3–8 MB, sementara banyak tempat menolak file di atas 1 MB: portal dan platform belajar online, forum dan situs jual-beli, tiket bantuan, sistem email lama. Berbeda dengan batas ketat 20 KB atau 50 KB, 1 MB cukup besar untuk menyimpan foto beresolusi penuh — file-nya hanya perlu disimpan dengan lebih efisien. Tambahkan foto Anda, dan setiap foto kembali sebagai JPG di bawah 1 MB, dengan ukuran asli kalau muat dan hanya sedikit lebih kecil kalau tidak.",

  sections: [
    {
      heading: "Kenapa foto ponsel berukuran 3–8 MB",
      id: "why-big",
      body: [
        "Kamera ponsel menyimpan JPG dengan kualitas sangat tinggi, sering 90–95%, supaya tidak ada yang hilang sebelum diedit. Pada 12 megapiksel ke atas, kualitas setinggi itu memakan beberapa megabyte per foto, sebagian besar untuk noise sensor dan tekstur halus yang tidak terlihat pada ukuran tampilan biasa.",
        "Menyimpan ulang dengan kualitas sedikit lebih rendah menghapus sebagian besar pemborosan itu. Untuk foto 12 megapiksel biasa, mencapai di bawah 1 MB cukup dengan kualitas sekitar 75–85% — selisih yang sulit terlihat bahkan saat dibandingkan berdampingan — dan semua 4000 × 3000 pikselnya tetap utuh.",
      ],
    },
    {
      heading: "Kalau 1 MB tidak cukup untuk ukuran penuh",
      id: "when-shrinks",
      body: [
        "Pemandangan yang sangat detail — dedaunan, kerikil, keramaian, foto malam yang penuh noise — dan foto 48 atau 50 megapiksel bisa tetap di atas 1 MB meski kualitasnya sedang. Saat itu alat ini juga mengecilkan dimensinya sedikit, memilih ukuran terbesar yang masih muat, bukan ukuran tetap, sehingga foto bisa keluar selebar 3200 piksel, bukan 4000.",
        "Resolusi itu tetap jauh lebih besar daripada layar atau pratinjau unggahan mana pun. Daftar hasil selalu memberi tahu kalau sebuah foto diubah ukurannya, jadi tidak ada yang berubah tanpa sepengetahuan Anda.",
      ],
    },
    {
      heading: "Di mana batas 1 MB ditemui",
      id: "where",
      body: [
        "Pendaftaran yang meminta foto utuh, bukan pas foto, platform belajar sekolah dan kampus, portal layanan publik, forum, iklan jual-beli, dan sistem layanan pelanggan sering membatasi lampiran di 1 MB atau 2 MB. Banyak sistem email juga kesulitan begitu pesan melewati 10–20 MB, yang setara hanya tiga atau empat foto ponsel tanpa kompresi.",
        "Mengompres satu kumpulan foto menjadi masing-masing 1 MB sebelum dilampirkan membuat semuanya masuk ke batas itu tanpa perubahan yang terlihat pada fotonya.",
      ],
    },
    {
      heading: "1 MB, 1000 KB, atau 1024 KB?",
      id: "units",
      body: [
        "Sebagian situs menulis batasnya sebagai 1 MB, sebagian lagi 1000 KB atau 1024 KB. Alat ini menjaga file di bawah 1.000.000 byte, hitungan paling ketat dari ketiganya, jadi file lolos di semuanya. Komputer Anda mungkin menampilkan hasilnya sekitar 0,95 MB — selisih itu adalah ruang aman.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 1 MB",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau seret foto JPG, PNG, atau WEBP langsung dari ponsel atau kamera." },
    { title: "Kompres ke bawah 1 MB", description: "Batas 1 MB sudah terpasang — ganti ke 2 MB atau 500 KB kalau situs Anda meminta angka lain." },
    { title: "Unduh", description: "Setiap foto kembali di bawah 1 MB, dengan resolusi penuh bila muat." },
  ],

  features: [
    { icon: "photo_camera", title: "Resolusi penuh tetap terjaga", description: "Kebanyakan foto ponsel muat di bawah 1 MB tanpa kehilangan satu piksel — hanya kualitas berlebih yang dibuang." },
    { icon: "speed", title: "Cepat dan sekaligus banyak", description: "Kompres satu album sekaligus; setiap foto diproses terpisah dan semuanya diunduh dalam satu ZIP." },
    { icon: "lock", title: "Foto pribadi tetap pribadi", description: "Foto Anda diproses di browser dan tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 1 MB?", a: "Tambahkan foto dan klik Kompres — batas 1 MB sudah terpasang. Yang diunduh adalah JPG di bawah 1 MB dengan kualitas terbaik yang muat." },
    { q: "Apakah foto 1 MB masih bagus untuk dicetak?", a: "Ya, untuk ukuran cetak biasa. Kalau foto tetap beresolusi penuh di bawah 1 MB, hasil cetaknya sama dengan aslinya untuk ukuran 4R sampai A4." },
    { q: "Berapa piksel foto 1 MB?", a: "Biasanya tetap 12 megapiksel penuh dari foto ponsel, sekitar 4000 × 3000. Foto yang sangat detail atau beresolusi sangat tinggi bisa turun ke sekitar 3000 piksel lebarnya agar muat." },
    { q: "Bisakah foto 10 MB dikompres jadi 1 MB?", a: "Bisa. File besar tidak masalah — alat ini membacanya di browser Anda lalu mencari kualitas dan ukuran terbaik di bawah 1 MB." },
    { q: "Apakah kompres ke 1 MB menghapus lokasi foto?", a: "Untuk setiap foto yang disimpan ulang, ya — JPG baru tidak membawa metadata EXIF, termasuk lokasi GPS. JPG yang sudah di bawah 1 MB dikembalikan utuh beserta metadatanya; untuk menghapus lokasi dari foto seperti itu, gunakan alat Hapus EXIF." },
    { q: "Bisakah tangkapan layar dikompres ke 1 MB?", a: "Bisa. Tangkapan layar sering berupa PNG dan bisa cukup besar; file itu diubah menjadi JPG di bawah 1 MB, dan bagian transparan diisi putih." },
    { q: "Apakah 1 MB sama dengan 1000 KB?", a: "Dalam satuan yang dipakai kebanyakan situs, ya. Alat ini menjaga file di bawah 1.000.000 byte, jadi juga lolos di batas yang ditulis 1024 KB." },
    { q: "Apakah foto 1 MB cocok dikirim lewat WhatsApp?", a: "Cocok. WhatsApp tetap mengompres ulang foto yang dikirim, tetapi file di bawah 1 MB terkirim lebih cepat dan lebih hemat kuota. Untuk mengirim tanpa kompresi ulang, kirim sebagai dokumen." },
    { q: "Bisakah saya memakai 2 MB atau 500 KB di halaman ini?", a: "Bisa. Ketik angka lain di kolom ukuran atau ketuk tombol yang tersedia; 1 MB hanya nilai awalnya dan bisa diganti untuk setiap kumpulan foto." },
  ],

  security:
    "Foto Anda tidak pernah keluar dari perangkat. Kompresi ke 1 MB berjalan sepenuhnya di browser — tidak ada yang diunggah, disimpan, atau dibagikan.",
};

export default content;
