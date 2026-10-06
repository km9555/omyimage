import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/kompres-foto.
 *
 * Head term measured (Indonesia, per month):
 *   kompres foto          673,000  KD 0   transactional
 *   kompres jpg           246,000  KD 8
 *   compress foto          90,500  KD 52  (code-mixed)
 *   perkecil ukuran foto   49,500
 *   kompres foto 200kb     22,200  KD 0
 *   kecilkan ukuran foto   18,100
 *   kompres gambar         18,100          ← iLoveIMG's /id slug and H1
 * «foto» beats «gambar» thirty-seven to one, so the name, slug and title say
 * foto; the others live in the body and in aliases.ts.
 *
 * The Indonesia-specific section is `upload-limit`. «kompres foto 200kb» is a
 * query on its own because government recruitment (CPNS), school and campus
 * registration and job portals cap uploads at 100–500 KB. Since the tool
 * expansion (2026-10) the tool HAS a target-size mode ("Berdasarkan ukuran
 * file"), so the section points at it; the per-size pages (/id/kompres-foto-200kb
 * …) carry the size-specific advice.
 */
const content: ToolPageContent = {
  toolId: "compress-image",
  locale: "id",
  name: "Kompres Foto",
  tagline:
    "Kompres foto JPG, PNG, dan WEBP secara online — perkecil ukuran file dengan kualitas yang Anda atur, sekaligus banyak, dan lihat berapa banyak yang dihemat. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto Online Gratis — Kecilkan Ukuran JPG & PNG | oMyImage",
  metaDescription:
    "Kompres foto online gratis: perkecil ukuran JPG, PNG, dan WEBP tanpa penurunan kualitas yang terlihat, cocok untuk batas upload 100–200 KB. Sekaligus banyak, di browser, tanpa daftar.",

  variantsHeading: "Kompres ke ukuran tertentu",

  intro:
    "File foto yang besar memperlambat situs, memenuhi penyimpanan, dan membuat lampiran email tertolak. Alat Kompres Foto ini memperkecil file JPG, PNG, dan WEBP langsung di browser Anda — ubah ke WEBP untuk ukuran terkecil, atur kualitasnya, dan bila perlu perkecil dimensi foto yang sangat besar. PNG dikompres dengan cara yang benar, yaitu dengan mengurangi jumlah warna disertai dithering, bukan sekadar disimpan ulang. Kompres satu foto atau banyak sekaligus, dan lihat dengan tepat berapa banyak yang dihemat.",

  sections: [
    {
      heading: "Mengapa kompresi gambar paling berpengaruh di sebuah halaman",
      id: "why",
      body: [
        "Gambar hampir selalu menjadi bagian terberat yang dimuat sebuah halaman web — sering kali lebih berat dari gabungan HTML, CSS, dan JavaScript-nya. Karena itu gambar menjadi faktor utama Largest Contentful Paint, metrik Core Web Vitals yang mengukur berapa lama pengunjung menunggu sampai konten utama muncul. Memangkas berat gambar hingga setengahnya biasanya lebih terasa daripada optimasi kode sebanyak apa pun.",
        "Kerugiannya bukan cuma soal kecepatan. Sebagian besar orang di Indonesia membuka internet lewat kuota seluler, dan foto hero yang tidak dikompres menghabiskan kuota pengunjung untuk detail yang tidak bisa ditampilkan layarnya. Foto 4 MB yang ditampilkan di kolom selebar 800 piksel mengirim kira-kira sepuluh kali lebih banyak informasi daripada yang bisa dipakai layar.",
        "Kompresi adalah perbaikan termurah karena tidak mengubah tata letak, kode, atau alur kerja Anda. Fotonya terlihat sama, tetapi beratnya hanya sebagian kecil.",
      ],
    },
    {
      heading: "Kompres foto sampai di bawah batas upload",
      id: "upload-limit",
      body: [
        "Banyak formulir di Indonesia membatasi ukuran foto: pendaftaran CPNS, pendaftaran sekolah dan kampus, portal lowongan kerja, dan berbagai layanan pemerintah sering meminta pas foto atau scan di bawah 100 KB, 200 KB, atau 500 KB. Foto dari kamera ponsel biasanya 2–5 MB, jadi langsung ditolak.",
        "Anda tidak perlu menebak-nebak kualitas: ubah pengaturan ke Berdasarkan ukuran file, ketik batasnya — misalnya 200 KB — atau ketuk salah satu ukuran yang tersedia. Setiap foto dikembalikan di bawah batas itu dengan kualitas tertinggi yang masih muat; dimensinya baru ikut dikecilkan kalau kualitas saja tidak cukup.",
        "Untuk pas foto, dimensi 400–600 piksel sudah lebih dari cukup, jadi foto yang dipotong rapi dulu hampir selalu tetap tajam di bawah 100 KB. Selalu kompres dari foto aslinya — bukan dari hasil kompresi sebelumnya — karena kompresi berulang merusak kualitas lebih cepat.",
      ],
    },
    {
      heading: "Lossy dan lossless: dua mekanisme yang berbeda",
      id: "how",
      body: [
        "JPG dan WebP bersifat lossy. Keduanya menganalisis gambar, membuang informasi yang paling tidak dirasakan mata manusia — kebanyakan variasi warna yang halus — lalu menyimpan sisanya. Itulah sebabnya pengurangan ukurannya sangat besar pada foto, dan mengapa kualitas yang terlalu rendah memunculkan kotak-kotak dan halo di sekitar tepi yang kontras.",
        "PNG tidak bisa bekerja seperti itu; ia lossless menurut definisinya, jadi PNG mengecil dengan mengurangi jumlah warna berbeda yang dipakai. Jalur PNG kami melakukan kuantisasi palet lalu menerapkan dithering, yang hampir tidak terlihat pada logo, tangkapan layar, dan ilustrasi datar, tetapi cukup terlihat pada foto dengan langit yang halus. Kualitas 95% ke atas menjaga PNG benar-benar lossless dan hanya mengoptimalkan encoding-nya.",
        "Karena itu format sama pentingnya dengan slider. Tangkapan layar yang dikompres sebagai JPG akan terlihat lebih buruk dan lebih berat daripada tangkapan layar yang sama sebagai PNG yang dioptimalkan, dan foto yang disimpan sebagai PNG bisa beberapa kali lebih besar dari yang diperlukan.",
      ],
    },
    {
      heading: "Memilih format hasil",
      id: "format",
      body: [
        "WebP menghasilkan file terkecil pada kualitas yang sama dan mendukung transparansi, dan semua browser saat ini bisa membukanya. Ini pilihan utama untuk apa pun yang akan dipasang di halaman web.",
        "JPG sedikit lebih besar tetapi diterima di mana saja, termasuk oleh aplikasi yang belum mengenal WebP. Pilih JPG untuk lampiran email, formulir upload, layanan cetak, dan apa pun yang keluar dari web — termasuk formulir pendaftaran yang sering hanya menerima .jpg.",
        "PNG adalah pilihan yang tepat untuk konten bertepi tajam — logo, gambar garis, tangkapan layar, diagram — dan untuk apa pun yang transparansinya harus terjaga tanpa kehilangan kualitas. Jangan pakai PNG untuk foto kecuali ada alasan khusus.",
      ],
    },
    {
      heading: "Kompres sampai batas ukuran, bukan menebak kualitas",
      id: "target-size",
      body: [
        "Penggeser kualitas menjawab pertanyaan yang salah ketika formulir menulis \"maksimal 100 KB\": Anda harus menebak angka, mengompres, mengecek ukurannya, lalu mencoba lagi. Mode Berdasarkan ukuran file mengambil alih tebakan itu — alat mencari kualitas tertinggi yang hasilnya masih muat, dan hanya kalau kualitas rendah pun masih terlalu besar, dimensi pikselnya ikut dikurangi.",
        "Hasilnya selalu di bawah angka yang Anda ketik, bukan \"kira-kira\". Alat ini menghitung 1 KB sebagai 1.000 byte, jadi file untuk batas 50 KB juga lolos di formulir yang menghitung KB sebagai 1.024 byte. Kalau foto sudah di bawah batas dalam format yang dipilih, Anda mendapat file aslinya utuh, bukan salinan yang dikompres ulang tanpa perlu.",
        "Batas yang paling sering dipakai punya halaman sendiri dengan saran khusus: 20 KB untuk tanda tangan, 50 KB untuk foto ujian, 100 KB dan 200 KB untuk pas foto dan scan dokumen, serta 1 MB untuk foto dari ponsel.",
      ],
    },
    {
      heading: "Ketika foto tidak bisa dikompres lagi",
      id: "already-optimised",
      body: [
        "Kadang alat ini mengembalikan file asli Anda dan menyebutkannya. Itu disengaja: kalau tidak ada hasil yang bisa mengalahkan file yang Anda berikan, mengembalikan versi \"terkompres\" yang justru lebih besar sama saja dengan kegagalan yang dibungkus sebagai hasil.",
        "Biasanya itu berarti gambarnya sudah pernah dioptimalkan, atau gambarnya kecil sehingga overhead tetap dari formatnya mendominasi. PNG yang sangat kecil khususnya punya batas bawah, di mana header dan paletnya adalah bagian terbesar file. Dalam kasus seperti itu, penghematan yang tersisa ada di tempat lain — mengubah ukuran ke dimensi yang benar-benar ditampilkan, atau mengganti formatnya sama sekali.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto",
  steps: [
    { title: "Unggah", description: "Pilih satu atau banyak foto JPG, PNG, atau WEBP, atau seret dan lepas ke sini." },
    { title: "Pilih pengaturan", description: "Pilih format hasil dan kualitas — atau pilih Berdasarkan ukuran file dan ketik batas seperti 200 KB." },
    { title: "Kompres & unduh", description: "Klik Kompres — satu foto langsung terunduh, beberapa foto diunduh bersama sebagai ZIP." },
  ],

  features: [
    { icon: "burst_mode", title: "Kompres sekaligus banyak", description: "Kompres puluhan foto sekaligus dan unduh semuanya dalam satu ZIP, masing-masing dengan keterangan berapa banyak yang dihemat." },
    { icon: "tune", title: "Kualitas, format, atau ukuran pasti", description: "Ubah ke WEBP untuk file terkecil, atur kualitas persis seperti yang Anda mau, atau ketik batas ukuran dan dapatkan file paling tajam yang muat." },
    { icon: "lock", title: "100% privat", description: "Kompresi berjalan di browser untuk hampir semua foto, dan foto-foto itu tidak pernah diunggah ke mana pun." },
  ],

  faqs: [
    { q: "Seberapa kecil foto saya nanti?", a: "Tergantung foto dan pengaturannya. Mengubah foto ke WEBP pada kualitas 70–80% sering memangkas ukuran 50–80% dengan perubahan yang hampir tidak terlihat, dan grafik PNG biasanya turun 60–80% pada kualitas bawaan." },
    { q: "Bagaimana cara kompres foto di bawah 200 KB?", a: "Ubah pengaturan ke Berdasarkan ukuran file, ketik 200 KB (atau ketuk tombol 200 KB) lalu klik Kompres. Setiap foto keluar di bawah 200 KB dengan kualitas tertinggi yang masih muat; dimensinya hanya dikecilkan kalau kualitas saja tidak cukup. Pilih JPG kalau formulirnya hanya menerima JPG." },
    { q: "Bagaimana PNG dikompres?", a: "PNG tidak bisa membuang detail seperti JPG, jadi ia mengecil dengan cara lain: mengurangi jumlah warna yang dipakai gambar. Pada kualitas bawaan 70%, kami mengkuantisasi ke 128 warna dengan dithering, yang biasanya tidak terlihat pada ilustrasi, logo, dan tangkapan layar. Atur kualitas ke 95% atau lebih untuk menjaga PNG tetap lossless." },
    { q: "Format mana yang menghasilkan file terkecil?", a: "WEBP biasanya menghasilkan file terkecil pada kualitas yang sama, disusul JPG. PNG tetap pilihan terbaik untuk grafik bertepi tajam, warna datar, dan transparansi." },
    { q: "Apakah kompresi menurunkan kualitas?", a: "JPG dan WEBP bersifat lossy, jadi kualitas yang sangat rendah memunculkan artefak; PNG kehilangan warna, bukan detail. Kualitas bawaan 70% adalah keseimbangan yang baik; naikkan untuk foto yang penting." },
    { q: "Mengapa salah satu foto saya tidak mengecil?", a: "Karena foto itu sudah dioptimalkan. Kalau tidak ada hasil yang lebih kecil dari file Anda, kami mengembalikan file asli tanpa diubah dan memberinya keterangan — kompresor yang mengembalikan file lebih besar berarti gagal menjalankan tugasnya." },
    { q: "Bisakah mengompres banyak foto sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — beberapa file diunduh bersama sebagai ZIP, masing-masing diberi keterangan persentase penghematannya." },
    { q: "Apakah gratis dan privat?", a: "Sepenuhnya. Tanpa daftar dan tanpa watermark, dan hampir semua foto dikompres langsung di browser Anda. Hanya file yang terlalu besar untuk digambar di tab browser yang dikirim ke server kami, dan alat ini memberi tahu Anda saat itu terjadi." },
    { q: "Pengaturan kualitas berapa yang sebaiknya dipakai?", a: "70–80% adalah titik awal yang tepat untuk foto di situs web, dan di situlah sebagian besar penghematan terjadi. Naikkan ke 90% atau lebih untuk foto produk, gambar utama, dan apa pun yang akan diperbesar pelanggan. Di bawah sekitar 60%, kotak-kotak mulai terlihat di langit dan gradasi yang halus." },
    { q: "Apakah kompresi mengubah dimensi foto?", a: "Tidak. Kompresi mengubah cara piksel disimpan, bukan jumlahnya — foto 4000×3000 tetap 4000×3000. Kalau Anda juga ingin mengurangi jumlah piksel, pakai alat Ubah Ukuran Foto, yang biasanya memberi penghematan lebih besar untuk gambar web." },
    { q: "Apakah kompresi menghapus data EXIF saya?", a: "Encoding ulang ikut menghapus sebagian besar metadata, termasuk pengaturan kamera dan koordinat GPS. Kalau tujuan utamanya memang menghapus data itu, alat Hapus EXIF dibuat khusus untuk itu dan jelas soal apa saja yang dihapus." },
    { q: "Bolehkah mengompres foto yang sama dua kali?", a: "Bisa, tetapi sebaiknya jangan. Setiap proses lossy membuang detail secara permanen dan kerusakannya menumpuk, jadi JPG yang dikompres dua kali terlihat jelas lebih buruk daripada yang dikompres sekali dengan pengaturan setara. Selalu mulai dari foto asli terbaik yang Anda punya." },
  ],

  security:
    "Foto Anda tetap privat. Hampir semua foto dikompres sepenuhnya di browser dan tidak pernah meninggalkan perangkat Anda; hanya gambar yang sangat besar atau beresolusi sangat tinggi yang dikirim ke server kami, lalu langsung dihapus setelahnya. Tanpa penyimpanan, tanpa pelacakan file Anda.",


  ui: {
    "By quality": "Berdasarkan kualitas",
    "By file size": "Berdasarkan ukuran file",
    "Compression mode": "Mode kompresi",
    "Target size": "Ukuran maksimal",
    "Unit": "Satuan",
    "KB": "KB",
    "MB": "MB",
    "A KB here is 1,000 bytes, so the file passes forms that count a KB as 1,000 or as 1,024 bytes.": "Di sini 1 KB = 1.000 byte, jadi file lolos di formulir yang menghitung KB sebagai 1.000 maupun 1.024 byte.",
    "JPG (best for forms)": "JPG (terbaik untuk formulir)",
    "Each image gets the highest quality that fits under the limit. If that is still too big, its dimensions are reduced as well.": "Setiap foto mendapat kualitas tertinggi yang masih muat di bawah batas. Kalau masih terlalu besar, dimensinya ikut dikecilkan.",
    "Enter a target size greater than zero.": "Masukkan ukuran lebih dari nol.",
    "Every image is now under {size}.": "Semua foto sekarang di bawah {size}.",
    "Some images could not get under {size}.": "Beberapa foto tidak bisa dikecilkan sampai di bawah {size}.",
    "Every image will be compressed to under {size}.": "Setiap foto akan dikompres sampai di bawah {size}.",
    "Set any target size in KB or MB after adding your images.": "Setelah menambahkan foto, atur ukuran berapa pun dalam KB atau MB.",
    "already under {size} — kept original": "sudah di bawah {size} — file asli dipertahankan",
    "could not get under {size}": "tidak bisa di bawah {size}",
    "resized to {dims}": "diubah ke {dims}",
    "Compress": "Kompres",
    "Compressing…": "Mengompres…",
    "Compress & download": "Kompres & unduh",
    "Compress {n} images": "Kompres {n} gambar",
    "Compress more images": "Kompres gambar lain",
    "Compressed": "Terkompres",
    "Compression complete!": "Kompresi selesai!",
    "Compression settings": "Pengaturan kompresi",
    "Compression Settings": "Pengaturan Kompresi",
    "File size reduced by {pct}%": "Ukuran file berkurang {pct}%",
    "Already optimised — kept your original file.":
      "Sudah optimal — file asli Anda dipertahankan.",
    "Already optimised — kept your original files.":
      "Sudah optimal — file asli Anda dipertahankan.",
    "Already optimised. Try a lower quality, or WEBP, for a smaller file.":
      "Sudah optimal. Coba kualitas yang lebih rendah, atau WEBP, untuk file yang lebih kecil.",
    "already optimised — kept original": "sudah optimal — file asli dipertahankan",
    "no smaller output": "tidak ada hasil yang lebih kecil",
    "{n} colors": "{n} warna",
    "Processed 1 image.": "1 gambar diproses.",
    "Processed {n} images.": "{n} gambar diproses.",
    "Compression failed.": "Gagal mengompres.",
    "or drop JPG, PNG or WEBP images here": "atau lepas gambar JPG, PNG, atau WEBP di sini",
    "WEBP usually gives the smallest files. Everything runs in your browser.":
      "WEBP biasanya menghasilkan file terkecil. Semuanya berjalan di browser Anda.",
    "Output format": "Format hasil",
    "Same as original": "Sama dengan asli",
    "WEBP (smallest)": "WEBP (terkecil)",
    "PNG shrinks by reducing colors. 95%+ keeps it perfectly lossless.":
      "PNG mengecil dengan mengurangi jumlah warna. 95% ke atas menjaganya tetap lossless.",
    "Lower quality = smaller file. PNGs shrink by reducing colors; 95%+ stays lossless.":
      "Kualitas lebih rendah = file lebih kecil. PNG mengecil dengan mengurangi warna; 95% ke atas tetap lossless.",
    "Lower quality = smaller file. 60–80% is a great balance.":
      "Kualitas lebih rendah = file lebih kecil. 60–80% adalah keseimbangan yang pas.",
    "Shrink large images": "Perkecil gambar besar",
    "Also reduce the dimensions, not just the quality. A phone photo is around 4000px wide, while a web page or an email attachment rarely needs more than 2000 — and halving the width quarters the pixel count, which saves far more than quality alone.":
      "Kecilkan juga dimensinya, bukan hanya kualitasnya. Foto ponsel lebarnya sekitar 4000 px, sementara halaman web atau lampiran email jarang butuh lebih dari 2000 — dan memangkas lebar menjadi setengahnya membuat jumlah piksel tinggal seperempat, jauh lebih hemat daripada menurunkan kualitas saja.",
    "Max width/height": "Lebar/tinggi maksimum",
    "JPG background": "Latar JPG",
    // CompressTool.tsx — increase mode (increase-image-size-in-kb)
    "Enter a minimum size greater than zero.": "Masukkan ukuran minimum lebih dari nol.",
    "Every image is now at least {size}.": "Semua gambar sekarang minimal {size}.",
    "For forms with a range such as 20–50 KB. The result is always a JPG.": "Untuk formulir dengan rentang, misalnya 20–50 KB. Hasilnya selalu JPG.",
    "Increase": "Perbesar",
    "Increase & download": "Perbesar & unduh",
    "Increase more images": "Perbesar gambar lain",
    "Increase {n} images": "Perbesar {n} gambar",
    "Increasing…": "Memperbesar…",
    "Maximum size (optional)": "Ukuran maksimum (opsional)",
    "Minimum size": "Ukuran minimum",
    "New size": "Ukuran baru",
    "Quality is raised first, then the dimensions. If an image is still short, the file is padded with empty data — the picture itself does not change.": "Kualitas dinaikkan dulu, lalu ukuran piksel. Kalau masih kurang, file ditambah data kosong — gambarnya sendiri tidak berubah.",
    "Set the minimum size in KB after adding your images.": "Atur ukuran minimum dalam KB setelah menambahkan gambar.",
    "Size increase complete!": "Ukuran berhasil diperbesar!",
    "Size settings": "Pengaturan ukuran",
    "Some images could not reach {size}.": "Sebagian gambar tidak mencapai {size}.",
    "The maximum must be larger than the minimum.": "Maksimum harus lebih besar dari minimum.",
    "already at least {size} — kept original": "sudah minimal {size} — file asli dipakai",
    "could not reach {size}": "tidak mencapai {size}",
    "enlarged to {dims}": "diperbesar ke {dims}",
    "padded to reach the minimum": "ditambah data kosong agar mencapai minimum",
  },
};

export default content;
