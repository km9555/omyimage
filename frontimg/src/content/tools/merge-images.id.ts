import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/gabungkan-foto.
 *
 * Measured (Indonesia, per month): gabung foto 60,500 · gabungkan foto 60,500
 * (KD 0 both) — ~121,000 together, the fifth-biggest job in the locale and far
 * above where merge sits for any other language. The slug takes the proper
 * imperative «gabungkan»; «gabung foto» is carried in the title and aliases.
 * «kolase foto» (collage) is how the result is described, so the copy uses it.
 *
 * Local uses named in the body: a single image for a WhatsApp or Instagram
 * story, and before-and-after shots — a staple of Indonesian online selling,
 * above all for skincare and beauty products.
 */
const content: ToolPageContent = {
  toolId: "merge-images",
  locale: "id",
  name: "Gabungkan Foto",
  tagline:
    "Gabung beberapa foto jadi satu secara online — berdampingan, bertumpuk, atau dalam grid, dengan jarak, latar, dan urutan yang bisa diatur. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Gabungkan Foto Online Gratis — Gabung Foto Jadi Satu | oMyImage",
  metaDescription:
    "Gabung foto jadi satu online gratis: berdampingan, atas-bawah, grid, atau kolase bebas, dengan jarak dan latar yang bisa diatur. Langsung di browser, tanpa daftar, tanpa watermark.",

  intro:
    "Gabungkan beberapa foto menjadi satu gambar dalam hitungan detik. Alat Gabungkan Foto ini menyatukan foto-foto Anda secara berdampingan, bertumpuk, atau dalam grid langsung di browser, dengan pengaturan urutan, jarak, dan latar. Buat kolase, foto before-after, atau lembar perbandingan dan langsung unduh — tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Satu gambar, bukan beberapa",
      id: "why",
      body: [
        "Banyak tempat hanya menerima tepat satu gambar. Foto utama di marketplace, postingan forum, formulir ulasan, laporan bug, pesan chat, dan kebanyakan media sosial punya satu slot, bukan galeri — dan cara biasa untuk mengakalinya, mengirim beberapa gambar berturut-turut, membuat orang harus mengingat gambar pertama sambil melihat gambar ketiga.",
        "Menggabungkan foto menyelesaikan itu dengan menaruh perbandingannya di dalam satu bingkai. Foto before-after berdampingan sehingga perbedaannya langsung terlihat — itulah sebabnya format ini begitu umum untuk jualan produk kecantikan dan skincare. Tiga sudut produk tampil bersamaan; rangkaian tangkapan layar terbaca sebagai satu cerita; satu gambar pas untuk story WhatsApp atau Instagram. Tidak ada yang perlu diklik satu per satu.",
        "Ini juga cara paling sederhana untuk membuat perbandingan yang jujur. Dua foto yang ditampilkan bersama dengan skala yang sama jauh lebih sulit disalahartikan daripada dua foto yang ditampilkan bergantian.",
      ],
    },
    {
      heading: "Memilih arah",
      id: "direction",
      body: [
        "Penggabungan horizontal menaruh foto berdampingan, pilihan alami untuk perbandingan. Mata bergerak ke samping dengan mudah dan kedua bagian terbaca sebagai pasangan. Ini tata letak standar untuk hasil edit before-after, varian produk, dan perbandingan A lawan B apa pun.",
        "Penggabungan vertikal menumpuk foto dari atas ke bawah. Cocok untuk urutan dan petunjuk langkah demi langkah, saat urutan penting dan arah atas-ke-bawah menandakan kelanjutan. Ini juga pilihan yang lebih baik untuk apa pun yang akan dilihat di ponsel: gambar yang tinggi memenuhi layar tegak, sedangkan gambar yang lebar diperkecil sampai detailnya hilang.",
        "Kalau ragu, tanyakan apa yang harus dilakukan orang yang melihatnya. Membandingkan? Pilih horizontal. Mengikuti langkah? Pilih vertikal.",
      ],
    },
    {
      heading: "Ukuran, jarak, dan perataan",
      id: "layout",
      body: [
        "Foto dengan dimensi berbeda diratakan pada sisi sambungnya, dan sisa ruangnya diisi warna latar pilihan Anda. Itu bawaan yang masuk akal, tetapi hasilnya terlihat jauh lebih rapi kalau foto-fotonya punya satu dimensi yang sama — lebar yang sama untuk tumpukan vertikal, tinggi yang sama untuk deretan horizontal. Menyamakan ukurannya dulu dengan alat Ubah Ukuran Foto hanya butuh sebentar dan hasilnya jauh lebih baik.",
        "Jarak di antara foto hampir selalu layak ditambahkan. Tanpa jarak, dua foto dengan tepi yang mirip bisa terlihat seperti satu pemandangan yang bersambung — membingungkan, dan pada foto before-after bahkan menyesatkan. Sepuluh sampai dua puluh piksel biasanya cukup untuk menandai batasnya tanpa terlihat seperti kolase yang ramai.",
        "Warna latar mengisi jarak maupun sisa ruang. Putih cocok untuk kebanyakan keperluan; abu-abu sedang sering terlihat lebih bagus di belakang foto, dan warna brand Anda cocok untuk apa pun yang akan dipublikasikan.",
      ],
    },
    {
      heading: "Menggabungkan tidak menurunkan kualitas",
      id: "quality",
      body: [
        "Pada tata letak otomatis, dengan Ukuran gambar dibiarkan di Asli, foto digambar pada dimensi piksel aslinya. Tidak ada resampling dan tidak ada yang melunak, jadi hasil gabungannya persis setajam foto-foto masukannya. Mode inilah yang dipakai untuk menyambung tangkapan layar, karena pelunakan setengah piksel saja langsung terlihat pada teks.",
        "Yang mengorbankan kualitas adalah penskalaan. Mengubah ukuran foto di kanvas Kustom, atau memilih Samakan atau Penuhi agar semua foto berukuran sama, melakukan resampling pada foto itu — tidak terhindarkan, dan tidak lebih buruk dari mengubah ukuran di tempat lain, tetapi perlu diketahui ketika alternatifnya gratis.",
        "Satu-satunya pertimbangan kualitas lainnya adalah format simpan. Pilih PNG atau WEBP untuk menjaga semuanya persis, atau JPG kalau hasilnya berupa foto dan Anda ingin file yang lebih kecil. Kalau gabungannya berisi tangkapan layar atau teks, PNG jelas lebih baik — artefak JPG berkumpul tepat di tepi-tepi tajam yang membentuk huruf.",
      ],
    },
  ],

  howToTitle: "Cara menggabungkan foto jadi satu",
  steps: [
    { title: "Unggah", description: "Pilih dua foto atau lebih, atau seret dan lepas ke area kerja." },
    { title: "Atur & tata", description: "Pilih berdampingan, bertumpuk, atau grid, seret thumbnail untuk mengubah urutan, lalu atur jarak dan latar. Mode Kustom memungkinkan Anda memindahkan, memutar, dan mengubah ukuran setiap foto secara manual." },
    { title: "Gabungkan & unduh", description: "Klik Gabungkan — gambar gabungannya langsung terunduh sebagai PNG, JPG, atau WEBP." },
  ],

  features: [
    { icon: "grid_view", title: "Empat tata letak", description: "Gabungkan foto berdampingan, bertumpuk vertikal, dalam grid, atau susun bebas di kanvas kustom." },
    { icon: "open_with", title: "Pratinjau yang bisa diedit", description: "Di mode Kustom, pratinjaunya adalah editornya — seret foto untuk memindahkannya, tarik sudutnya untuk mengubah ukuran, dan pakai pegangan atas untuk memutar, dengan tepi yang otomatis menempel sejajar." },
    { icon: "lock", title: "100% privat", description: "Penggabungan berjalan sepenuhnya di browser Anda dengan kanvas HTML — foto Anda tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Berapa banyak foto yang bisa digabungkan?", a: "Sebanyak yang Anda mau — tambahkan dua foto atau lebih dan susun berdampingan, bertumpuk, atau dalam grid." },
    { q: "Bisakah mengubah urutan foto?", a: "Bisa. Seret thumbnail ke posisi baru di daftar, atau pakai tombol panah naik dan turun kalau lebih nyaman — keduanya menentukan urutan foto digabungkan. Di mode Kustom, urutan juga menentukan foto mana yang berada di atas saat bertumpukan, dan tombol Ke depan dan Ke belakang mengubahnya." },
    { q: "Bisakah latarnya dibuat transparan?", a: "Bisa. Pilih latar transparan dan simpan sebagai PNG atau WEBP agar jaraknya tetap tembus pandang." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Bagaimana kalau ukuran fotonya berbeda-beda?", a: "Secara bawaan setiap foto mempertahankan dimensinya sendiri, diratakan pada sisi sambungnya, dan sisa ruangnya diisi warna latar pilihan Anda. Kalau Anda ingin ukurannya seragam, ubah Ukuran gambar ke Samakan — setiap foto mendapat tinggi yang sama dalam satu baris atau lebar yang sama dalam satu kolom. Penuhi lebih jauh lagi: semua foto dipotong menjadi kotak yang identik." },
    { q: "Sebaiknya digabung horizontal atau vertikal?", a: "Horizontal untuk pasangan before-after dan perbandingan berdampingan, karena mata lebih mudah membandingkan ke samping daripada ke bawah. Vertikal untuk urutan, petunjuk langkah demi langkah, dan apa pun yang akan dibaca di ponsel, karena gambar yang tinggi lebih memanfaatkan layar daripada yang lebar." },
    { q: "Bisakah menambahkan jarak di antara foto?", a: "Bisa — jarak dengan warna latar pilihan Anda. Jarak kecil sepuluh atau dua puluh piksel membuat jelas bahwa ini foto-foto terpisah, bukan satu pemandangan yang bersambung, dan itu penting untuk perbandingan, karena sambungan yang mulus bisa menyesatkan." },
    { q: "Untuk apa saja alat ini berguna?", a: "Hasil edit before-after, foto produk dari beberapa sudut dalam satu gambar utama, tutorial langkah demi langkah, rangkaian tangkapan layar untuk laporan bug atau dokumentasi, lembar kontak, kolase untuk story, dan postingan media sosial saat platformnya hanya mengizinkan satu gambar padahal ada tiga hal yang ingin ditunjukkan." },
    { q: "Apakah menggabungkan menurunkan kualitas?", a: "Tidak pada tata letak otomatis dengan Ukuran gambar dibiarkan di Asli — di sana foto digambar pada dimensi piksel aslinya dan tidak ada yang di-resample. Mengubah ukuran foto di mode Kustom, atau memakai Samakan atau Penuhi, memang menskalakan ulang, yang merupakan biaya kecil biasa dari mengubah ukuran. Menyimpan sebagai JPG mengorbankan sedikit lagi; PNG dan WEBP menjaga semuanya persis." },
    { q: "Apakah ada batas praktis berapa banyak yang sebaiknya digabung?", a: "Tidak ada batas pasti, tetapi deretan yang sangat panjang jadi sulit dilihat — kebanyakan platform memperkecil gambar yang lebar agar muat, sehingga gabungan sepuluh foto berjajar bisa jadi terlalu kecil untuk dilihat. Dua sampai empat foto adalah jumlah yang paling pas." },
  ],

  security:
    "Foto Anda tetap privat. Penggabungan terjadi sepenuhnya di browser Anda dengan kanvas HTML — tidak ada yang diunggah ke server. Tanpa penyimpanan, tanpa pelacakan file Anda.",

  rating: { value: "4.8", count: "289" },

  ui: {
    "Side by side": "Berdampingan",
    "Stacked": "Bertumpuk",
    "Grid": "Grid", // i18n-same — the Indonesian design term is the loanword
    "One row, left to right": "Satu baris, kiri ke kanan",
    "One column, top to bottom": "Satu kolom, atas ke bawah",
    "Rows and columns": "Baris dan kolom",
    "Move, rotate and resize by hand": "Pindah, putar, dan ubah ukuran secara manual",
    "Match": "Samakan",
    "Fill": "Penuhi",
    "Native size, nothing resampled": "Ukuran asli, tanpa resampling",
    "Equal heights in a row, equal widths in a column":
      "Tinggi sama dalam satu baris, lebar sama dalam satu kolom",
    "Identical tiles, overflow cropped": "Kotak identik, kelebihannya dipotong",
    "Instagram": "Instagram", // i18n-same — platform name
    "Portrait": "Potret",
    "Widescreen": "Layar lebar",
    "Story": "Story", // i18n-same — what Indonesians call a WhatsApp/Instagram story
    "Classic": "Klasik",
    "DSLR": "DSLR", // i18n-same — camera term
    "Print": "Cetak",
    "Please select image files.": "Pilih file gambar.",
    "Images are still loading — try again in a moment.":
      "Gambar masih dimuat — coba lagi sebentar lagi.",
    "Merged 1 image.": "1 gambar digabungkan.",
    "Merged {n} images.": "{n} gambar digabungkan.",
    "Merge failed.": "Gagal menggabungkan.",
    "or drop two or more JPG, PNG or WEBP images here":
      "atau lepas dua gambar JPG, PNG, atau WEBP atau lebih di sini",
    "Drag to move, corners to resize, the top handle to rotate. Shift snaps the angle, Alt turns off snapping.":
      "Seret untuk memindahkan, sudut untuk mengubah ukuran, pegangan atas untuk memutar. Shift mengunci sudut, Alt mematikan penempelan.",
    "Live preview of the merged image.": "Pratinjau langsung gambar gabungan.",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Merge settings": "Pengaturan penggabungan",
    "Merge Settings": "Pengaturan Penggabungan",
    "Merge": "Gabungkan",
    "Merging…": "Menggabungkan…",
    "Images keep their stacking order — use the layer arrows to change which sits on top.":
      "Gambar mempertahankan urutan tumpukannya — pakai panah lapisan untuk mengubah mana yang berada di atas.",
    "Drag a thumbnail to reorder. A transparent PNG background keeps the gaps see-through.":
      "Seret thumbnail untuk mengubah urutan. Latar PNG transparan membuat jaraknya tetap tembus pandang.",
    "Merge & download": "Gabungkan & unduh",
    "Layout": "Tata letak",
    "Canvas": "Kanvas",
    "Fit to content": "Sesuai isi",
    "Re-arrange": "Susun ulang",
    "Selected image": "Gambar terpilih",
    "Click an image on the canvas to select it. Drag to move, use the corner handles to resize, and the handle above the top edge to rotate. Arrow keys nudge, Shift makes them move further.":
      "Klik gambar di kanvas untuk memilihnya. Seret untuk memindahkan, pakai pegangan sudut untuk mengubah ukuran, dan pegangan di atas tepi atas untuk memutar. Tombol panah menggeser sedikit, dengan Shift lebih jauh.",
    "Bring forward": "Ke depan",
    "Send back": "Ke belakang",
    "Nothing selected — click an image on the canvas.":
      "Belum ada yang dipilih — klik gambar di kanvas.",
    "Columns": "Kolom",
    "Auto squares the grid off for you.": "Otomatis menyusun grid mendekati persegi.",
    "Image sizes": "Ukuran gambar",
    "Spacing": "Jarak",
    "Output format": "Format hasil",
  },
};

export default content;
