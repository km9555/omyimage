import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-50kb (variant of compress-image, 50 KB). "kompres foto 50kb" 4,400/mo. */
const content: ToolPageContent = {
  toolId: "compress-image-to-50kb",
  locale: "id",
  name: "Kompres Foto 50 KB",
  tagline:
    "Kompres foto apa pun sampai di bawah 50 KB — batas yang sering diminta untuk pas foto di formulir ujian dan pendaftaran. JPG paling tajam yang muat, sekaligus banyak, tanpa upload.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 50 KB Online — Gratis, Pasti di Bawah 50 KB | oMyImage",
  metaDescription:
    "Kompres foto apa pun sampai di bawah 50 KB secara online dan gratis — batas pas foto di banyak formulir. JPG paling tajam yang muat, banyak foto sekaligus, tanpa upload.",

  intro:
    "Kalau sebuah formulir pernah menulis \"ukuran foto maksimal 50 KB\", halaman ini untuk momen itu. Tambahkan foto langsung dari ponsel — yang 5 MB pun boleh — dan foto itu kembali sebagai JPG di bawah 50 KB, dengan kualitas tertinggi yang masih muat. Alat ini menurunkan kualitas dulu dan baru mengecilkan dimensi kalau perlu, sehingga wajah tetap jelas pada ukuran yang ditampilkan formulir. Mendukung JPG, PNG, dan WEBP, dan bisa beberapa foto sekaligus.",

  sections: [
    {
      heading: "Kenapa banyak formulir meminta 50 KB",
      id: "why-50kb",
      body: [
        "Penyelenggara ujian, portal rekrutmen, program beasiswa, dan banyak layanan pemerintah menerima foto dari ratusan ribu sampai jutaan pendaftar. Membatasi setiap foto di puluhan kilobyte membuat penyimpanan dan halaman mereka tetap ringan, dan pas foto wajah sama sekali tidak butuh resolusi kamera ponsel.",
        "Batas itu diperiksa otomatis saat Anda mengunggah, makanya file 51 KB ditolak walaupun tampak sama persis dengan file 49 KB. Alat ini selalu berada di bawah angka itu, dengan sedikit ruang aman yang dijelaskan di bawah.",
      ],
    },
    {
      heading: "50 KB itu ukuran file, bukan ukuran foto",
      id: "size-not-dimensions",
      body: [
        "Kilobyte mengukur ruang penyimpanan, bukan lebar dan tinggi. 50 KB yang sama bisa berisi foto dinding polos selebar 1200 piksel atau foto jalan ramai selebar 400 piksel, karena JPG menghabiskan byte untuk detail, bukan untuk luas. Pas foto biasa berlatar terang muat di 50 KB dengan sekitar 600 × 800 piksel dan tetap tajam.",
        "Banyak formulir juga menyebut dimensi — 3x4 cm, 4x6 cm, 300 × 400 piksel. Itu syarat terpisah: sesuaikan dulu dengan alat Ubah Ukuran Foto, lalu kompres di sini. Pada ukuran sekecil itu, foto biasanya muat di 50 KB dengan kualitas sangat tinggi.",
      ],
    },
    {
      heading: "Cara mendapatkan foto terbaik di bawah 50 KB",
      id: "best-photo",
      body: [
        "Mulailah dari foto asli, bukan foto hasil terusan WhatsApp atau tangkapan layar — setiap kompresi sebelumnya menambah kotak-kotak yang harus dipertahankan kompresi berikutnya. Potong sampai kepala dan bahu sebelum mengompres, supaya ruangnya dipakai untuk wajah, bukan untuk ruangan di belakang.",
        "Latar polos dan terang terkompres jauh lebih baik daripada latar bermotif, dan cahaya siang yang merata di wajah lebih baik daripada bayangan tajam. Kalau formulir mewajibkan latar merah, biru, atau putih, ambil foto di depan dinding polos atau gunakan alat Hapus Background terlebih dahulu.",
      ],
    },
    {
      heading: "Kenapa unggahan masih bisa ditolak",
      id: "rejections",
      body: [
        "Kalau sebuah portal menolak foto yang sudah di bawah 50 KB, penyebabnya biasanya aturan lain: dimensi yang salah, batas minimal (beberapa formulir juga meminta minimal 20 KB), format selain JPG, atau nama file berisi spasi atau karakter khusus. Periksa setiap aturan itu di petunjuk pendaftaran.",
        "Hitungan KB-nya bukan masalah. Alat ini menjaga file di bawah 50.000 byte, sehingga lolos baik formulir menghitung kilobyte sebagai 1.000 maupun 1.024 byte — karena itu komputer Anda bisa menampilkan 48 atau 49 KB.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 50 KB",
  steps: [
    { title: "Tambahkan foto", description: "Pilih atau seret JPG, PNG, atau WEBP — foto ukuran penuh dari ponsel pun boleh." },
    { title: "Kompres ke bawah 50 KB", description: "Batas 50 KB sudah terpasang. Biarkan formatnya JPG kecuali formulir meminta yang lain." },
    { title: "Unduh", description: "Simpan fotonya — sudah di bawah 50 KB dan siap diunggah. Beberapa foto diunduh dalam satu ZIP." },
  ],

  features: [
    { icon: "badge", title: "Siap untuk formulir", description: "JPG di bawah 50 KB dengan kualitas tertinggi yang muat — sesuai yang diminta portal ujian dan pemerintah." },
    { icon: "photo_size_select_large", title: "Piksel dikecilkan hanya bila perlu", description: "Kualitas diturunkan dulu; dimensi baru dikecilkan kalau kualitas saja tidak bisa mencapai 50 KB." },
    { icon: "lock", title: "Privasi terjaga", description: "Foto diproses di browser dan tidak pernah diunggah — cara yang tepat untuk pas foto identitas." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 50 KB?", a: "Tambahkan foto, biarkan batas 50 KB dan format JPG, lalu klik Kompres. File yang diunduh dijamin di bawah 50 KB." },
    { q: "Apakah foto 50 KB akan buram?", a: "Tidak pada ukuran yang ditampilkan formulir. Pas foto muat di 50 KB dengan sekitar 600 × 800 piksel dan kualitas baik; buram biasanya berasal dari foto yang sudah terkompres sebelumnya, jadi mulailah dari foto asli." },
    { q: "Berapa ukuran piksel foto 50 KB?", a: "Tidak ada jawaban pasti — tergantung seberapa detail fotonya. Kalau formulir menyebut dimensi, sesuaikan dulu; kalau tidak, biarkan alat ini memilih, dan piksel yang dipertahankan sebanyak yang muat." },
    { q: "Bisakah PNG atau tangkapan layar dijadikan JPG 50 KB?", a: "Bisa. File PNG dan WEBP diubah ke JPG sekaligus, dan bagian transparan diisi putih, atau warna latar lain yang Anda pilih." },
    { q: "Formulir juga meminta pas foto 3x4. Bagaimana caranya?", a: "Potong atau ubah ukurannya ke 3x4 dulu dengan alat Crop Foto atau Ubah Ukuran Foto, lalu kompres hasilnya di sini. Pada ukuran itu foto akan jauh di bawah 50 KB dengan kualitas tinggi." },
    { q: "Apakah 50 KB sama dengan 0,05 MB?", a: "Ya. File dijaga di bawah 50.000 byte, yaitu 0,05 MB, dan juga lolos di formulir yang menghitung 1.024 byte per kilobyte." },
    { q: "Bisakah beberapa foto dikompres ke 50 KB sekaligus?", a: "Bisa. Tambahkan semuanya — setiap foto dibawa ke bawah 50 KB secara terpisah, dan bisa diunduh bersama dalam ZIP." },
    { q: "Apakah pas foto harus tetap berwarna?", a: "Ya, kecuali formulir meminta lain. Foto berwarna hanya sedikit lebih besar daripada versi hitam putih dengan ketajaman yang sama, dan hampir semua formulir mewajibkan pas foto berwarna dengan latar merah atau biru." },
  ],

  security:
    "Foto tidak pernah keluar dari perangkat Anda. Kompresi ke 50 KB berjalan sepenuhnya di browser, jadi tidak ada yang diunggah, disimpan, atau dilihat orang lain.",
};

export default content;
