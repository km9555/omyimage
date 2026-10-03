import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/ubah-foto-ke-jpg.
 *
 * Measured (Indonesia, per month): ubah foto ke jpg 22,200 vs konversi ke jpg
 * 880. The native phrase is the slug, H1 and title; iLoveIMG's /id page is
 * «konversi-ke-jpg», the minority phrasing by twenty-five to one. The button
 * stays «Konversi» (common.ts) — on a button it is the ordinary word.
 *
 * The inputs are exactly the route's `accept`: PNG, WEBP, GIF, BMP. HEIC and
 * AVIF have their own pages and are named as such, never as inputs here —
 * the Russian page listed AVIF as an input and was corrected in the same
 * commit as this file, along with its "white by default" background claim
 * (the default is Auto, matching the image's own edges).
 *
 * Local reason named in `why`: online forms — school registration, job
 * applications, government portals — that accept "JPG/JPEG" only, and images
 * saved from the web or WhatsApp that turn out to be WEBP.
 */
const content: ToolPageContent = {
  toolId: "convert-to-jpg",
  locale: "id",
  name: "Ubah Foto ke JPG",
  tagline:
    "Ubah gambar PNG, WEBP, GIF, dan BMP ke JPG secara online — sekaligus banyak, dengan kualitas yang bisa diatur. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Ubah Foto ke JPG Online Gratis — PNG, WEBP, GIF & BMP ke JPG | oMyImage",
  metaDescription:
    "Ubah foto ke JPG online gratis: PNG, WEBP, GIF, dan BMP jadi JPG yang bisa dibuka di mana saja. Atur kualitas dan warna latar, sekaligus banyak — tanpa daftar, tanpa watermark.",

  intro:
    "Butuh gambar yang ringan dan bisa dibuka di mana saja? Alat Ubah Foto ke JPG ini mengubah file PNG, WEBP, GIF, dan BMP menjadi JPG berkualitas tinggi langsung di browser Anda. Ubah satu gambar atau banyak sekaligus, atur kualitasnya, dan pilih warna latar yang menggantikan bagian transparan. Konversi berlangsung di perangkat Anda — hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami — jadi prosesnya instan dan privat.",

  sections: [
    {
      heading: "Kenapa perlu mengubah ke JPG",
      id: "why",
      body: [
        "Hampir semua orang yang mengubah foto ke JPG sedang menyelesaikan masalah kecocokan, bukan memilih soal tampilan. Formulir online menolak filenya — pendaftaran sekolah, lamaran kerja, dan portal pemerintah sering hanya menerima \"JPG/JPEG\" — jasa cetak tidak mau menerimanya, aplikasi lama tidak bisa membukanya, atau lampiran email harus di bawah ukuran tertentu. JPG adalah format yang mengakhiri semua itu: berumur tiga dasawarsa, bebas paten, dan bisa dibaca oleh apa saja.",
        "Penyebab yang paling sering justru tidak terlihat: gambar yang disimpan dari situs web atau dari WhatsApp ternyata berformat WEBP, walaupun tampilannya biasa saja. Formulir yang meminta JPG akan menolaknya. Mengubahnya ke JPG di sini menyelesaikan masalah itu dalam hitungan detik.",
        "Alasan kedua adalah ukuran file. PNG dan terutama BMP menyimpan data jauh lebih banyak daripada yang dibutuhkan sebuah foto, dan mengubahnya ke JPG sering memangkas ukuran file 80% atau lebih tanpa perubahan yang terlihat pada kualitas yang wajar. Untuk apa pun yang dikirim lewat email, diunggah, atau ditampilkan di halaman web, itulah bedanya file yang bisa dipakai dan yang tidak.",
      ],
    },
    {
      heading: "Yang tidak bisa dilakukan JPG",
      id: "limits",
      body: [
        "JPG tidak punya transparansi. Format ini sama sekali tidak memiliki kanal alfa, jadi apa pun yang tembus pandang harus ditutup dengan warna solid sebelum disimpan. Itu tidak masalah untuk foto, tetapi keliru untuk logo yang akan diletakkan di atas latar berwarna.",
        "JPG juga hanya menampung satu gambar, jadi animasi hilang — GIF animasi berubah menjadi frame pertamanya. Dan karena kompresinya lossy, setiap kali disimpan ulang, sedikit detail terbuang lagi. Ubah sekali dari sumber terbaik yang Anda punya, dan simpan file aslinya kalau mungkin masih perlu diedit.",
        "Terakhir, JPG kurang cocok untuk gambar bertepi tajam. Tangkapan layar, diagram, gambar garis, dan apa pun yang bertulisan kecil akan mendapat bayangan samar di sekitar setiap tepinya, dan sering bahkan tidak jadi lebih kecil. PNG atau WEBP adalah tujuan yang lebih baik untuk gambar seperti itu.",
      ],
    },
    {
      heading: "Memilih kualitas",
      id: "quality",
      body: [
        "Penggeser kualitas menentukan seberapa banyak detail yang dibuang. 85–92% adalah rentang saat kompresinya praktis tidak terlihat dan filenya tetap jauh lebih kecil daripada sumbernya — mulailah dari situ kecuali ada alasan lain.",
        "Naikkan ke 95% ke atas untuk gambar yang akan dicetak, diperbesar, atau diperhatikan dengan saksama; filenya membesar cepat demi perbedaan yang tidak terlihat oleh kebanyakan orang di layar, tetapi hasil cetak tidak kenal ampun. Turunkan ke 70–80% kalau Anda harus masuk di bawah batas ukuran yang ketat dan gambarnya foto biasa. Di bawah itu, kotak-kotak mulai terlihat, pertama di langit, warna kulit, dan gradasi yang halus.",
      ],
    },
    {
      heading: "Memilih pengisi bagian transparan",
      id: "background",
      body: [
        "Karena bagian transparan harus menjadi sesuatu, alat ini secara bawaan mencocokkan warna yang ditemukan di tepi gambar itu sendiri — tanpa perlu memilih, dan tanpa kotak putih di sekitar objek yang memang tidak dirancang untuk berada di atas putih. Putih, hitam, atau warna kustom apa pun tinggal sekali klik kalau Anda ingin yang lain, misalnya untuk menyamakan dengan tampilan gelap atau kartu berwarna.",
        "Satu hal yang perlu diperhatikan: transparansi PNG dan WEBP biasanya dihaluskan, jadi piksel di tepinya setengah transparan dan akan berbaur dengan warna apa pun yang Anda pilih. Gambar yang disiapkan di atas latar putih lalu diisi hitam bisa menampakkan pinggiran pucat. Kalau itu terjadi, mengekspor ulang sumbernya dengan latar yang benar lebih bersih daripada memperbaikinya belakangan.",
      ],
    },
  ],

  howToTitle: "Cara mengubah foto ke JPG",
  steps: [
    { title: "Unggah gambar", description: "Pilih satu atau banyak gambar PNG, WEBP, GIF, atau BMP, atau seret ke sini." },
    { title: "Atur pilihannya", description: "Pilih kualitas JPG dan warna latar yang dipakai untuk menutup bagian transparan." },
    { title: "Konversi & unduh", description: "Klik Konversi — satu JPG langsung terunduh, atau beberapa diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Banyak file sekaligus", description: "Ubah puluhan gambar PNG, WEBP, GIF, atau BMP ke JPG sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "tune", title: "Kualitas bisa diatur", description: "Pilih kualitas JPG dari 50% sampai 100% untuk menyeimbangkan ukuran file dan ketajaman gambar." },
    { icon: "lock", title: "Privat di browser", description: "Konversi berjalan di browser Anda dengan HTML canvas. Hanya gambar yang sangat besar atau beresolusi sangat tinggi yang diproses di server kami." },
  ],

  faqs: [
    { q: "Format apa saja yang bisa diubah ke JPG?", a: "PNG, WEBP, GIF, dan BMP. GIF diubah menggunakan frame pertamanya." },
    { q: "Apa yang terjadi pada bagian transparan?", a: "JPG tidak mendukung transparansi, jadi area transparan diisi warna latar. Secara bawaan kami otomatis mencocokkan warna di tepi gambar itu sendiri; pilih putih, hitam, atau warna kustom apa pun kalau Anda ingin yang lain." },
    { q: "Bisakah banyak gambar diubah sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — satu gambar diunduh sebagai JPG, dan beberapa gambar diunduh bersama dalam satu ZIP." },
    { q: "Apakah benar-benar gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan gambar diproses secara lokal di browser Anda — kecuali yang sangat besar atau beresolusi sangat tinggi, yang diproses di server kami melalui koneksi terenkripsi lalu langsung dihapus." },
    { q: "Apa bedanya JPG dan JPEG?", a: "Tidak ada. Keduanya format yang sama dengan dua ekstensi — .jpg yang tiga huruf adalah peninggalan batas nama file di sistem lama. Formulir yang meminta JPEG akan menerima file .jpg, dan sebaliknya." },
    { q: "Apakah JPG menyimpan data EXIF dan kamera saya?", a: "Secara bawaan ya — EXIF atau XMP apa pun yang ada di sumbernya disalin ke JPG, termasuk tanggal pengambilan, model kamera, dan koordinat GPS kalau ada. Centang \"Hapus metadata\" untuk membuang semuanya, beserta profil warnanya. Perlu diketahui, file PNG, GIF, dan BMP jarang membawa EXIF, jadi untuk kebanyakan sumber memang tidak ada yang disimpan." },
    { q: "Apakah profil warnanya dipertahankan?", a: "Tidak, dan itu disengaja. Konversi mendekode gambar ke sRGB, jadi membawa profil aslinya justru akan salah menggambarkan piksel yang baru dan menggeser warnanya. JPG disimpan sebagai sRGB — yang memang diasumsikan oleh penampil gambar — dan profil sRGB yang tertanam dibuang sepenuhnya kalau Anda mencentang \"Hapus metadata\"." },
    { q: "Bagaimana dengan HEIC dan AVIF?", a: "Keduanya punya halaman sendiri, karena perlu penanganan yang berbeda. Halaman ini menerima PNG, WEBP, GIF, dan BMP — format yang bisa dibuka browser secara langsung, dan itulah yang memungkinkan konversi terjadi di perangkat Anda." },
    { q: "Kenapa JPG masih jadi format paling aman?", a: "Karena umurnya tiga puluh tahun, bebas paten, dan didukung hampir semua perangkat lunak yang pernah menampilkan gambar. Format yang lebih baru memang kompresinya lebih baik, tetapi \"lebih baik\" tidak ada artinya kalau sistem tempat Anda mengunggah menolak filenya." },
    { q: "Kualitas berapa yang sebaiknya dipakai?", a: "85–92% cocok untuk hampir semua keperluan. Naikkan untuk foto yang akan dicetak atau yang akan diperbesar pelanggan. Di bawah 70% kotak-kotak mulai terlihat di langit dan gradasi halus — titik saat orang lebih memperhatikan kompresinya daripada gambarnya." },
    { q: "Bisakah GIF animasi diubah?", a: "Anda mendapatkan frame pertamanya sebagai JPG diam. JPG hanya menampung satu gambar, jadi animasi tidak bisa ikut. Kalau Anda perlu frame tertentu, pecah semua frame-nya dulu dengan alat GIF ke Gambar, lalu ubah frame yang Anda inginkan." },
    { q: "Apakah ada batas jumlah file?", a: "Tidak ada batas tetap. Satu gambar langsung terunduh; beberapa gambar dikemas dalam satu ZIP. Kumpulan yang besar hanya butuh waktu sedikit lebih lama, dan tab tetap bisa dipakai selama prosesnya berjalan." },
  ],

  security:
    "Gambar Anda tetap privat. Konversi ke JPG berlangsung di browser Anda dengan HTML canvas. Pengecualiannya hanya gambar yang sangat besar atau beresolusi sangat tinggi: gambar itu diproses di server kami melalui koneksi terenkripsi dan langsung dihapus setelahnya. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "734" },

  ui: {
    "or drop PNG, WEBP, GIF or BMP images here": "atau letakkan gambar PNG, WEBP, GIF, atau BMP di sini",
  },
};

export default content;
