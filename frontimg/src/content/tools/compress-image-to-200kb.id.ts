import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/kompres-foto-200kb (variant of compress-image,
 * 200 KB). "kompres foto 200kb" 22,200/mo and "kompres jpg 200kb" 9,900, KD 0
 * — the registration-portal limit (CPNS, PPDB, kampus), id-head-terms.
 */
const content: ToolPageContent = {
  toolId: "compress-image-to-200kb",
  locale: "id",
  name: "Kompres Foto 200 KB",
  tagline:
    "Kompres pas foto dan scan dokumen sampai di bawah 200 KB — untuk pendaftaran CPNS, sekolah, kampus, dan lamaran kerja. Foto tetap tajam, satu set dikompres sekaligus, tanpa ada yang diunggah.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 200 KB Online — Pas Foto & Scan Tetap Tajam | oMyImage",
  metaDescription:
    "Kompres foto dan scan dokumen sampai di bawah 200 KB secara online dan gratis — untuk CPNS, PPDB, kampus, dan lamaran kerja. Kualitas tertinggi yang muat, tanpa upload.",

  intro:
    "200 KB adalah batas yang dipakai banyak portal pendaftaran — CPNS, PPDB, pendaftaran kampus, beasiswa, dan lowongan kerja — untuk setiap file yang dilampirkan: pas foto, scan KTP, Kartu Keluarga, ijazah, transkrip. Ruangnya dua kali formulir 100 KB dan empat kali formulir 50 KB, jadi tujuannya bukan sekadar muat, tetapi muat sambil tetap terlihat seperti aslinya. Tambahkan satu set lengkap, dan setiap file kembali sebagai JPG di bawah 200 KB dengan kualitas tertinggi yang masih muat.",

  sections: [
    {
      heading: "Batas yang lega — manfaatkan",
      id: "generous",
      body: [
        "Dengan 200 KB, pas foto bisa mempertahankan sekitar 1200 × 1600 piksel dengan kualitas tinggi: cukup tajam untuk dicetak 3x4 atau 4x6 dan diperbesar di layar. Karena alat ini mencari kualitas tertinggi di bawah batas, bukan memakai satu pengaturan tetap, foto yang bersih bisa keluar hampir sama dengan aslinya, sementara foto yang sangat detail mendapat kompresi sedikit lebih kuat.",
        "Kalau foto Anda sudah berupa JPG yang terkompres baik dan di bawah 200 KB, foto itu dikembalikan apa adanya — tidak ada alasan mengompres ulang file yang sudah pasti diterima formulir.",
      ],
    },
    {
      heading: "Di mana batas 200 KB biasa ditemui",
      id: "where",
      body: [
        "Pendaftaran CPNS dan PPPK, PPDB, pendaftaran perguruan tinggi, beasiswa, dan banyak portal lowongan kerja biasanya membatasi setiap unggahan di kisaran 100–300 KB, dan 200 KB adalah angka yang paling sering. Formulir yang sama biasanya meminta beberapa file: pas foto berlatar merah atau biru, tanda tangan, KTP, Kartu Keluarga, ijazah atau transkrip, kadang SKCK atau surat keterangan sehat.",
        "Baca syarat setiap kolom satu per satu — pas foto mungkin boleh 200 KB sementara tanda tangan hanya 20 atau 50 KB. Halaman ini diatur untuk 200 KB; halaman 20 KB dan 50 KB, tautannya di atas, sudah diatur untuk kolom yang lebih kecil.",
      ],
    },
    {
      heading: "Ijazah dan scan KTP di bawah 200 KB",
      id: "scans",
      body: [
        "Ijazah ukuran A4 yang difoto dengan ponsel berukuran 3–6 MB, sebagian besar untuk menggambarkan tekstur kertas dan cahaya yang tidak merata. Foto lurus di bawah cahaya siang, memenuhi layar, dan potong latarnya sebelum mengompres; hasilnya muat di 200 KB dengan teks dan stempel yang tetap jelas terbaca.",
        "Stempel dan tanda tangan berwarna pada ijazah adalah alasan bagus untuk tetap berwarna. Untuk halaman yang hanya berisi teks, mengubahnya dulu menjadi hitam putih dengan alat Foto Hitam Putih menyisakan lebih banyak ruang untuk huruf yang tajam.",
      ],
    },
    {
      heading: "Periksa setiap file sebelum dikirim",
      id: "check",
      body: [
        "Daftar hasil menampilkan ukuran baru setiap file dan, kalau perlu diubah ukurannya, dimensi barunya. Buka satu atau dua file sebelum mengunggah: teks harus terbaca pada zoom 100%, wajah tidak boleh tampak luntur, dan latar merah atau biru pas foto harus tetap satu warna yang rata.",
        "Setelah itu ganti nama file kalau portalnya ketat soal nama — banyak yang menolak spasi, tanda kurung, atau karakter khusus — dan simpan file aslinya. Kalau nanti formulir lain meminta batas berbeda, kompres ulang dari file asli, bukan dari salinan 200 KB, supaya kualitas hanya berkurang sekali.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 200 KB",
  steps: [
    { title: "Tambahkan file", description: "Pilih atau seret pas foto dan scan dokumen yang perlu diunggah — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 200 KB", description: "Batas 200 KB sudah terpasang; ketik angka lain untuk kolom yang lebih ketat." },
    { title: "Unduh satu set", description: "Semua file di bawah 200 KB; unduh satu per satu atau semuanya dalam ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Kualitas hampir seperti asli", description: "Dengan ruang 200 KB, foto mempertahankan hampir seluruh resolusi dan detailnya — alat ini memakai ruangnya sampai penuh." },
    { icon: "folder_zip", title: "Satu pendaftaran sekaligus", description: "Pas foto, KTP, KK, dan ijazah dalam satu kali proses, masing-masing di bawah 200 KB, diunduh bersama dalam ZIP." },
    { icon: "lock", title: "Tanpa upload", description: "Dokumen identitas dikompres di browser Anda, bukan di server." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 200 KB?", a: "Tambahkan foto dan klik Kompres — batas 200 KB sudah terpasang. Anda mendapatkan JPG di bawah 200 KB dengan kualitas terbaik yang muat." },
    { q: "Bagaimana membuat scan ijazah di bawah 200 KB?", a: "Foto ijazah dengan lurus di bawah cahaya merata, potong semua yang ada di sekitarnya, lalu kompres di sini. Teks dan stempel tetap terbaca jauh di bawah 200 KB." },
    { q: "Apakah foto 200 KB bagus untuk dicetak?", a: "Untuk ukuran pas foto seperti 3x4 dan 4x6, ya — 200 KB menyimpan lebih dari cukup piksel. Untuk cetak besar, gunakan foto aslinya." },
    { q: "Bisakah saya pakai 199 KB atau 190 KB?", a: "Bisa. Ketik angka berapa pun di kolom ukuran; 200 KB hanya nilai awalnya." },
    { q: "Bagaimana kalau foto saya sudah di bawah 200 KB?", a: "Kalau foto itu sudah JPG di bawah batas, Anda mendapat file aslinya tanpa diubah. Kalau tidak, foto diubah ke JPG dan dijaga di bawah 200 KB." },
    { q: "Pilih JPG atau WEBP untuk batas 200 KB?", a: "JPG. Portal pendaftaran dan lowongan kerja hampir selalu menerima JPG, sementara banyak yang masih menolak WEBP." },
    { q: "Apakah kompresi mengubah warna foto, termasuk latar merah pas foto?", a: "Tidak terlihat pada ukuran ini. JPG menyimpan warna sedikit kurang presisi dibanding kecerahan, tetapi di 200 KB perbedaannya tidak tampak — latar merah atau biru tetap sama." },
    { q: "Bagaimana mengompres pas foto, KTP, dan ijazah sekaligus?", a: "Tambahkan semua file dalam satu kali proses — masing-masing dibawa ke bawah 200 KB secara terpisah dan bisa diunduh bersama dalam ZIP. Kalau tanda tangan punya batas lebih kecil, kompres terpisah di halaman 20 KB atau 50 KB." },
  ],

  security:
    "Pas foto, KTP, KK, dan ijazah dikompres di perangkat Anda, di dalam browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
