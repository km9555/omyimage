import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/jpg-ke-png.
 *
 * Measured (Indonesia, per month): jpg ke png 12,100 (KD 0) vs the English
 * «jpg to png» 2,400. The «x ke y» pattern is the slug, H1 and title, as on
 * every Indonesian converter page.
 *
 * The local misunderstanding this page answers head-on: a large share of
 * people converting JPG to PNG want a TRANSPARENT signature or logo — «tanda
 * tangan transparan» for a document, a logo for a banner — and a format change
 * alone cannot do that. The page says so plainly and sends them to
 * /id/hapus-background, which produces the transparent PNG they are after.
 *
 * Privacy copy matches ConvertTool's own note: very large or very
 * high-resolution images are processed on the server.
 */
const content: ToolPageContent = {
  toolId: "jpg-to-png",
  locale: "id",
  name: "JPG ke PNG",
  tagline:
    "Ubah gambar JPG ke PNG lossless secara online — sekaligus banyak, tanpa penurunan kualitas lebih lanjut. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PNG Online Gratis — Ubah JPG Jadi PNG, Sekaligus Banyak | oMyImage",
  metaDescription:
    "Ubah JPG ke PNG online gratis: PNG lossless yang aman diedit dan disimpan berulang kali, sekaligus banyak dalam satu ZIP. Langsung di browser, tanpa daftar, tanpa watermark.",

  intro:
    "Perlu salinan JPG yang lossless untuk diedit atau untuk keperluan desain? Alat JPG ke PNG ini mengubah JPG Anda menjadi file PNG yang bersih langsung di browser — satu per satu atau banyak sekaligus. PNG bersifat lossless dan mendukung transparansi, jadi pas saat Anda tidak ingin ada kompresi lagi. Tanpa daftar, hasilnya instan, dan gambar diproses di perangkat Anda — hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami.",

  sections: [
    {
      heading: "Apa yang dilakukan konversi ini, dan apa yang tidak",
      id: "expectations",
      body: [
        "Mengubah JPG ke PNG mengganti wadahnya, bukan isinya. Mulai saat itu PNG menyimpan gambar tanpa kehilangan data, dan itu benar-benar berguna — tetapi PNG tidak bisa membatalkan kompresi yang sudah dilakukan JPG. Kalau sumbernya punya kotak-kotak yang terlihat di langit atau bayangan di sekitar teks, PNG akan menyalinnya dengan setia.",
        "Anggap saja seperti membekukan gambar pada kondisinya sekarang. Setiap penyimpanan berikutnya lossless, jadi penurunan kualitasnya berhenti menumpuk. Itulah manfaat sebenarnya, dan karena itulah konversi ini tempatnya di awal alur kerja edit, bukan di akhir.",
      ],
    },
    {
      heading: "PNG tidak otomatis transparan",
      id: "transparency",
      body: [
        "Banyak orang mengubah JPG ke PNG karena butuh gambar transparan — tanda tangan untuk ditempel di dokumen, atau logo untuk banner. Konversi format saja tidak bisa melakukannya. JPG tidak punya transparansi untuk dibawa, jadi PNG hasilnya tetap berlatar penuh: kertas putih di belakang tanda tangan tetap putih.",
        "Yang dibutuhkan adalah menghapus latarnya. Hapus Background memisahkan objek dari latarnya dengan AI dan langsung memberikan PNG transparan, jadi untuk logo atau tanda tangan, mulailah dari sana — tidak perlu mengubah ke PNG lebih dulu. Hasil terbaik didapat dari tanda tangan bertinta tebal di atas kertas putih polos; periksa goresan yang tipis sebelum dipakai.",
        "Konversi ini tetap berguna sebagai langkah pertama kalau Anda akan menghapus latar secara manual di aplikasi edit: selama filenya masih JPG, tidak ada tempat untuk menyimpan bagian yang dihapus, sedangkan PNG punya kanal alfa untuk itu.",
      ],
    },
    {
      heading: "Kenapa desainer mengubahnya sebelum mengedit",
      id: "editing",
      body: [
        "JPG menghukum pengulangan. Buka JPG, crop, simpan, buka lagi, atur kecerahan, simpan lagi — setiap kali disimpan, seluruh gambar dikodekan ulang dan sedikit detail terbuang lagi. Setelah beberapa putaran, kerusakannya jelas terlihat, terutama pada gradasi halus dan di sekitar tepi.",
        "PNG tidak punya hukuman seperti itu. Setelah diubah, Anda bisa menyimpan berkali-kali tanpa kehilangan yang menumpuk, sehingga PNG adalah format kerja yang masuk akal untuk apa pun yang sedang Anda ubah.",
      ],
    },
    {
      heading: "PNG atau WEBP?",
      id: "webp",
      body: [
        "Kalau alasan Anda mengubah adalah untuk diedit atau karena diminta sistem, PNG adalah pilihan yang benar dan ukuran filenya adalah harga yang harus dibayar. Kalau alasannya ingin transparansi di halaman web, WEBP biasanya tujuan yang lebih baik — mendukung kanal alfa penuh seperti PNG, tetapi dengan ukuran yang jauh lebih kecil, dan semua browser saat ini bisa membukanya.",
        "Pembagian praktisnya tergantung tujuan. PNG untuk file master, aplikasi edit, dan apa pun yang akan dicetak atau diarsipkan. WEBP untuk apa pun yang akan ditampilkan di browser. Mengubah JPG menjadi PNG berukuran beberapa megabyte lalu memasangnya di situs web adalah kesalahan yang umum dan mahal.",
      ],
    },
    {
      heading: "Tangkapan layar dan teks",
      id: "screenshots",
      body: [
        "Kalau Anda punya tangkapan layar yang tersimpan sebagai JPG, mengubahnya ke PNG membuatnya tidak makin buruk, tetapi tidak akan menajamkan teks yang sudah telanjur kabur. JPG tidak pandai menangani tepi yang kontras, dan huruf pada dasarnya hanyalah tepi yang kontras, jadi bayangan khas di sekitar huruf sudah melekat.",
        "Pelajaran untuk lain kali: simpan sebagai PNG sejak awal. Alat tangkapan layar di setiap sistem operasi bisa diatur untuk itu, dan untuk tangkapan layar aplikasi, PNG biasanya lebih tajam sekaligus lebih kecil daripada JPG-nya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah JPG ke PNG",
  steps: [
    { title: "Unggah JPG", description: "Pilih satu atau banyak gambar JPG, atau seret ke area kerja." },
    { title: "Periksa", description: "PNG bersifat lossless, jadi tidak ada pengaturan kualitas yang perlu dipilih — cukup pastikan filenya." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu JPG diunduh sebagai PNG, beberapa diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "JPG → PNG sekaligus banyak", description: "Ubah banyak JPG ke PNG sekaligus dan unduh semuanya dalam satu arsip ZIP." },
    { icon: "high_quality", title: "Hasil lossless", description: "PNG adalah format lossless, jadi gambar hasil konversi mempertahankan setiap piksel detailnya." },
    { icon: "lock", title: "Privat dan instan", description: "Konversi berjalan di browser Anda. Hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami." },
  ],

  faqs: [
    { q: "Kenapa perlu mengubah JPG ke PNG?", a: "PNG bersifat lossless dan mendukung transparansi, berguna untuk edit, logo, dan grafis ketika Anda tidak ingin ada artefak kompresi JPG." },
    { q: "Apakah PNG-nya akan lebih besar dari JPG?", a: "Biasanya ya — PNG lossless, jadi gambar foto menjadi lebih besar. Gantinya, tidak ada lagi penurunan kualitas." },
    { q: "Bisakah beberapa JPG diubah sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — beberapa file diunduh bersama dalam satu ZIP." },
    { q: "Apakah gratis dan privat?", a: "Sepenuhnya gratis: tanpa daftar dan tanpa watermark. Gambar diproses di browser Anda — kecuali yang sangat besar atau beresolusi sangat tinggi, yang diproses di server kami melalui koneksi terenkripsi lalu langsung dihapus." },
    { q: "Apakah mengubah JPG ke PNG meningkatkan kualitas?", a: "Tidak, dan inilah salah paham yang paling umum tentang konversi ini. PNG menyimpan gambar dengan sempurna — tetapi JPG sudah membuang detail saat dibuat, dan detail itu sudah hilang. Anda mendapat salinan lossless yang setia dari gambar lossy, bukan gambar asli yang dipulihkan." },
    { q: "Apakah hasilnya jadi transparan?", a: "Tidak dengan sendirinya. PNG mendukung kanal alfa, tetapi JPG tidak punya transparansi untuk dibawa, jadi hasilnya sepenuhnya berlatar. Yang Anda dapatkan adalah file yang bisa menyimpan transparansi setelah diedit — itulah sebabnya desainer mengubahnya dulu sebelum menghapus latar secara manual." },
    { q: "Bagaimana cara membuat tanda tangan atau logo jadi PNG transparan?", a: "Gunakan Hapus Background, bukan konversi format. Alat itu memisahkan objek dari latarnya dengan AI dan memberikan PNG transparan yang siap ditempel di dokumen atau desain. Untuk tanda tangan, foto goresan bertinta tebal di atas kertas putih polos, lalu periksa hasilnya — goresan yang sangat tipis bisa ikut terhapus." },
    { q: "Kenapa PNG-nya jauh lebih besar?", a: "Karena PNG tidak pernah membuang data. Foto JPG 500 KB biasa menjadi PNG 3–5 MB. Itu harga wajar dari format lossless, bukan tanda ada yang salah." },
    { q: "Kapan sebaiknya mengubah JPG ke PNG?", a: "Sebelum mengedit, saat Anda akan menyimpan berkali-kali dan tidak ingin kualitasnya turun lagi; saat Anda akan menambahkan transparansi; saat sistem secara khusus meminta PNG; dan untuk tangkapan layar atau gambar penuh teks yang artefak JPG-nya terlihat." },
    { q: "Apakah konversi menghilangkan artefak kompresi JPG?", a: "Tidak. Kotak-kotak, gradasi yang bergaris, dan bayangan di sekitar tepi sekarang sudah menjadi bagian dari data gambar, dan PNG menyimpannya dengan setia. Hanya model restorasi AI yang bisa menguranginya, dan itu pun rekonstruksi, bukan pemulihan." },
  ],

  security:
    "Gambar Anda tetap privat. Konversi JPG ke PNG berlangsung di browser Anda dengan HTML canvas. Pengecualiannya hanya gambar yang sangat besar atau beresolusi sangat tinggi: gambar itu diproses di server kami melalui koneksi terenkripsi dan langsung dihapus setelahnya. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "503" },

  ui: {
    // Drop hint from app/jpg-to-png/page.tsx, translated inside ConvertTool.
    "or drop JPG images here": "atau letakkan gambar JPG di sini",
  },
};

export default content;
