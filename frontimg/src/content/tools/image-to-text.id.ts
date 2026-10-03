import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/gambar-ke-teks.
 *
 * Measured (Indonesia, per month): gambar ke teks 5,400; «foto ke teks»
 * returned nothing, so this is the one tool page whose head noun is «gambar»
 * (conversion.md §11.2). imagetotext.info's /id page uses the same slug.
 *
 * INDONESIAN IS NOT ONE OF THE 13 OCR LANGUAGES, and the id locale keeps the
 * English model as its default (OCR_DEFAULT has no id row → "eng"). Tested
 * before writing this page (conversion.md §11.4): a rendered Indonesian
 * letter — six lines, 38 words, name, date, street address — was read on the
 * English model with one error: «Jl.» (jalan) came back as «JI.», the classic
 * lowercase-l / capital-I confusion in sans-serif type. That run used the
 * on-device fallback (the server was not reachable from the dev machine), so
 * the page claims only what was observed and names the «Jl.» slip as the
 * thing to check.
 *
 * Privacy copy follows the tool's real behaviour — server-first PaddleOCR,
 * Tesseract in the browser only as a fallback — which is also what the
 * corrected English page and the ru/hi twins say.
 */
const content: ToolPageContent = {
  toolId: "image-to-text",
  locale: "id",
  name: "Gambar ke Teks",
  tagline:
    "Ambil teks dari foto, hasil scan, atau tangkapan layar, lalu salin atau unduh sebagai teks yang bisa diedit. Gratis, tanpa daftar, tanpa batas jumlah gambar.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Gambar ke Teks Online Gratis — Ambil Teks dari Foto (OCR) | oMyImage",
  metaDescription:
    "Ubah gambar ke teks online gratis: ambil tulisan dari foto dokumen, hasil scan, atau tangkapan layar, lalu edit, salin, atau unduh sebagai .txt. Bisa untuk teks bahasa Indonesia, tanpa daftar.",

  intro:
    "Tulisan di dalam gambar tidak bisa dipilih, disalin, atau dicari — isinya hanya kumpulan piksel. Alat Gambar ke Teks ini mengembalikannya menjadi teks: foto halaman buku, hasil scan dokumen, tangkapan layar percakapan, atau pengumuman di papan. Pengenalannya berjalan di server kami dengan model OCR yang akurat: gambar dikirim melalui koneksi terenkripsi dan dihapus begitu selesai dibaca. Kalau server tidak bisa dihubungi, halaman ini membaca gambarnya di perangkat Anda sendiri, jadi alatnya tetap bekerja — dan memberi tahu Anda saat itu terjadi.",

  sections: [
    {
      heading: "Apa yang bisa dan tidak bisa dilakukan",
      id: "accuracy",
      body: [
        "Optical character recognition (OCR) bekerja dengan menemukan bentuk-bentuk di halaman lalu mencocokkannya dengan model terlatih tentang rupa huruf. Pada bahan yang bersih, kontras, dan lurus — tangkapan layar, halaman PDF yang diekspor sebagai gambar, hasil scan dokumen cetak — hasilnya sangat akurat, dan biasanya yang perlu Anda perbaiki hanya tanda baca, bukan kata.",
        "Ketepatannya turun justru pada hal-hal yang membuat sebuah foto menarik. Foto yang miring, cahaya yang tidak rata, bayangan di atas halaman, resolusi rendah, latar yang ramai di belakang tulisan, dan kompresi JPG yang berat semuanya menurunkan akurasi, kadang drastis. Tulisan tangan adalah masalah lain sama sekali, dan pengenalnya dilatih dengan huruf cetak; jangan berharap banyak dari tulisan sambung.",
        "Kesimpulan praktisnya: kualitas gambar jauh lebih menentukan daripada pengaturan apa pun. Kalau Anda bisa memotret ulang dari atas dengan cahaya yang rata dan halaman memenuhi bingkai, satu perubahan itu lebih berpengaruh daripada semua hal lain di sini.",
      ],
    },
    {
      heading: "Teks bahasa Indonesia: pilih Inggris",
      id: "bahasa",
      body: [
        "Bahasa Indonesia tidak ada di daftar 13 bahasa, dan itu tidak jadi masalah. Bahasa Indonesia ditulis dengan huruf Latin tanpa tanda diakritik — tidak ada é, ñ, atau ü — jadi model bahasa Inggris membacanya dengan baik. Karena itu pilihan bawaannya di halaman ini adalah Inggris, dan sebaiknya dibiarkan begitu untuk teks berbahasa Indonesia.",
        "Kami mengujinya sebelum menulis halaman ini: surat keterangan enam baris berisi nama, tanggal lahir, dan alamat terbaca utuh dengan satu kesalahan saja — singkatan \"Jl.\" (jalan) terbaca \"JI.\", karena huruf l kecil dan I besar nyaris sama pada huruf tanpa kait. Itulah yang perlu dicek pada alamat, bersama angka 0 dan huruf O, serta angka 1 dan huruf l.",
        "Pilih bahasa lain hanya kalau tulisannya memang dalam bahasa itu. Model yang salah, misalnya Rusia untuk teks Latin, tidak memberi pesan error — ia menghasilkan teks yang terlihat meyakinkan tetapi keliru.",
      ],
    },
    {
      heading: "Tips agar hasilnya maksimal",
      id: "tips",
      body: [
        "Foto atau scan tegak lurus, bukan miring, agar baris tulisan berjalan mendatar di gambar. Kemiringan adalah penyebab paling umum hasil yang berantakan.",
        "Usahakan tinggi huruf minimal sekitar 20 piksel. Kalau tulisannya kecil di dalam foto, crop rapat ke bagian teks sebelum mengekstrak — crop yang lebih rapat dari foto yang sama sering terbaca jauh lebih baik daripada foto utuhnya. Halaman A4 yang difoto separuh-separuh dari dekat lebih baik daripada satu foto dari jauh.",
        "Hindari bayangan tangan atau ponsel sendiri di atas halaman, dan jangan pakai lampu kilat — pantulannya bisa menghapus satu baris penuh. Untuk dokumen yang difoto di bawah lampu meja, mengubahnya ke hitam putih dulu dan menaikkan kontras bisa membantu memisahkan tinta dari kertas.",
        "Kalau ada scanner, pakai scanner: 300 dpi sudah cukup, 600 dpi lebih baik untuk huruf kecil. Hasil scan hampir selalu lebih bersih daripada foto.",
      ],
    },
    {
      heading: "Di mana teks dibaca, dan kenapa kadang lebih lama",
      id: "model",
      body: [
        "Pembacaan utama berjalan di server kami, yang memakai model pengenalan yang lebih besar dan lebih akurat daripada yang nyaman dijalankan di tab browser. Gambar Anda dikirim melalui koneksi HTTPS terenkripsi, dibaca, lalu filenya langsung dihapus. File tidak disimpan, tidak diindeks, dan tidak dipakai untuk melatih model. Permintaan pertama untuk bahasa yang lama tidak dipakai server bisa sedikit lebih lama selagi modelnya dimuat; setelah itu hasilnya kembali dengan cepat.",
        "Kalau server tidak bisa dihubungi atau sedang tidak tersedia, halaman ini beralih ke mesin Tesseract yang berjalan sebagai WebAssembly di browser Anda, dan dalam hal itu gambar tidak pernah meninggalkan perangkat Anda. Mesin dan model bahasanya berukuran beberapa megabyte dan diunduh saat cadangan ini pertama kali dibutuhkan; browser menyimpannya, jadi pemakaian berikutnya langsung mulai. Hasilnya diberi tanda \"dibaca di perangkat Anda\" setiap kali ini terjadi, dan biasanya sedikit kurang akurat untuk tulisan kecil atau padat.",
      ],
    },
    {
      heading: "Kegunaan sehari-hari",
      id: "uses",
      body: [
        "Mengetik ulang dokumen yang dikirim sebagai foto — surat, formulir, atau pengumuman dari grup WhatsApp — tanpa harus mengetik dari nol. Inilah kasus yang paling sering dan penghematan waktunya paling jelas.",
        "Mengambil teks dari tangkapan layar: percakapan, pesan error, slide presentasi, atau poster.",
        "Membuat arsip kertas bisa dicari: surat hasil scan, kliping, dan dokumen lama. Setelah dikenali, pencarian kata biasa bisa dipakai di dalamnya.",
        "Dan mengutip kalimat dari buku atau artikel tanpa mengetiknya dengan tangan.",
      ],
    },
  ],

  howToTitle: "Cara mengambil teks dari gambar",
  steps: [
    { title: "Tambahkan gambar", description: "Masukkan foto, tangkapan layar, atau hasil scan — JPG, PNG, WEBP, dan BMP semuanya bisa." },
    { title: "Periksa bahasanya", description: "Untuk teks bahasa Indonesia, biarkan Inggris yang terpilih. Untuk bahasa lain, pilih bahasa tulisannya — pengaturan inilah yang paling memengaruhi akurasi." },
    { title: "Ekstrak & salin", description: "Tekan Ambil teks. Perbaiki bagian yang salah dibaca, lalu salin atau simpan sebagai file .txt." },
  ],

  features: [
    {
      icon: "lock",
      title: "Dihapus setelah dibaca",
      description:
        "Gambar dikirim melalui koneksi terenkripsi, dibaca di server kami, lalu langsung dihapus. Tidak ada yang disimpan atau dipakai untuk melatih model.",
    },
    {
      icon: "translate",
      title: "13 bahasa",
      description:
        "Inggris, Spanyol, Prancis, Jerman, Italia, Portugis, Belanda, Rusia, Arab, Hindi, Mandarin, Jepang, dan Korea — dan teks bahasa Indonesia terbaca dengan model Inggris.",
    },
    {
      icon: "edit_note",
      title: "Bisa diedit sebelum disimpan",
      description:
        "Hasilnya masuk ke kotak teks yang bisa Anda perbaiki. Tidak ada OCR yang sempurna, jadi membetulkan satu-dua huruf adalah bagian dari pekerjaannya.",
    },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah gambar ke teks secara gratis?", a: "Unggah gambarnya di halaman ini, periksa bahasanya, lalu tekan Ambil teks. Gratis, tanpa daftar, dan tanpa batas jumlah gambar." },
    { q: "Apakah bisa membaca teks bahasa Indonesia?", a: "Bisa. Bahasa Indonesia memakai huruf Latin tanpa tanda diakritik, jadi model bahasa Inggris — pilihan bawaan di halaman ini — membacanya dengan baik. Dalam uji kami, satu-satunya kesalahan pada surat enam baris adalah \"Jl.\" yang terbaca \"JI.\"." },
    { q: "Kenapa bahasa Indonesia tidak ada di daftar bahasa?", a: "Karena memang tidak diperlukan model terpisah: bentuk hurufnya sama dengan bahasa Inggris. Model khusus bermanfaat untuk bahasa dengan huruf atau tanda baca sendiri, seperti Rusia, Arab, atau Hindi." },
    { q: "Apakah gambar saya diunggah ke server?", a: "Ya, untuk pembacaan utama. Gambar dikirim melalui koneksi HTTPS terenkripsi ke server kami, teksnya dikenali, dan filenya langsung dihapus — tidak disimpan, dibagikan, atau dipakai untuk pelatihan. Kalau server tidak tersedia, pengenalan berjalan di browser Anda dan gambar tidak meninggalkan perangkat; hasilnya diberi tanda \"dibaca di perangkat Anda\"." },
    { q: "Seberapa akurat hasilnya?", a: "Pada bahan cetak yang bersih — tangkapan layar, hasil scan, halaman dokumen yang diekspor — akurasinya biasanya sangat tinggi. Akurasi turun pada foto yang miring, cahaya yang buruk, resolusi rendah, dan tulisan kecil. Hasilnya bisa diedit justru karena tidak ada OCR yang sempurna." },
    { q: "Apakah bisa membaca tulisan tangan?", a: "Tidak bisa diandalkan. Pengenalnya dilatih dengan huruf cetak, dan tulisan sambung khususnya memberi hasil yang buruk. Huruf kapital yang rapi kadang berhasil; tulisan yang bersambung umumnya tidak." },
    { q: "Kenapa sebagian teks tidak terbaca?", a: "Paling sering karena hurufnya terlalu kecil: di bawah sekitar 20 piksel tingginya, huruf sulit dibaca setajam apa pun fotonya. Foto halaman yang sama dari lebih dekat, atau per bagian." },
    { q: "Kenapa ekstraksi kadang lambat?", a: "Di server, permintaan pertama untuk bahasa yang lama tidak dipakai menunggu modelnya dimuat; permintaan berikutnya jauh lebih cepat. Kalau alat beralih ke perangkat Anda, mesin dan model bahasanya diunduh saat pertama dipakai; browser menyimpannya, jadi pemakaian berikutnya langsung mulai." },
    { q: "Apakah tata letaknya dipertahankan?", a: "Hanya secara longgar. Anda mendapatkan teks dengan jeda barisnya, bukan susunan kolom, tabel, atau gaya tulisan. Untuk tabel, biasanya hasilnya perlu dirapikan sendiri." },
    { q: "Bisakah mengambil teks dari PDF?", a: "Tidak langsung — alat ini menerima gambar. Ekspor atau ambil tangkapan layar halaman PDF sebagai PNG atau JPG dulu, lalu masukkan ke sini." },
    { q: "Apa arti persentase keyakinan?", a: "Itu perkiraan pengenal sendiri tentang seberapa yakin ia dengan hasilnya, bukan jaminan. Nilai rendah biasanya berarti tulisan sumber yang kecil atau buram, dan menjadi tanda untuk memeriksa teksnya lebih teliti." },
    { q: "Apakah gratis?", a: "Ya, tanpa akun, tanpa watermark, dan tanpa batas jumlah gambar yang diproses." },
  ],

  security:
    "Pembacaan utama terjadi di server kami: gambar Anda diunggah melalui koneksi HTTPS terenkripsi, teksnya dikenali, lalu filenya langsung dihapus setelah dibaca. File tidak disimpan, tidak diindeks, dan tidak dipakai untuk melatih model. Kalau server tidak bisa dihubungi, pengenalan berjalan sebagai WebAssembly di dalam halaman dan gambar sama sekali tidak diunggah; satu-satunya permintaan jaringan dalam hal itu adalah untuk model pengenalan yang umum, yang tidak membawa informasi apa pun tentang gambar Anda.",

  rating: { value: "4.8", count: "726" },

  ui: {
    "Please select a JPG, PNG, WEBP or BMP image.": "Pilih gambar JPG, PNG, WEBP, atau BMP.",
    "or drop a JPG, PNG, WEBP or BMP here": "atau letakkan JPG, PNG, WEBP, atau BMP di sini",
    "Read on our server for the best accuracy (falls back to your device if the server is unreachable) — files are deleted right after.":
      "Dibaca di server kami agar paling akurat (beralih ke perangkat Anda kalau server tidak bisa dihubungi) — file langsung dihapus setelahnya.",
    "OCR settings": "Pengaturan OCR",
    "OCR Settings": "Pengaturan OCR",
    "Read": "Baca",
    "Reading…": "Membaca…",
    "Read again": "Baca ulang",
    "Extract text": "Ambil teks",
    "Remove image": "Hapus gambar",
    "Extracted text": "Teks hasil ekstraksi",
    "1 word": "1 kata",
    "{n} words": "{n} kata",
    "{pct}% confidence": "keyakinan {pct}%",
    "The recognizer's own estimate of how confident it is in this reading — not a guarantee. Low scores usually mean small or blurry source text; worth a proofread.":
      "Perkiraan pengenal sendiri tentang seberapa yakin ia dengan hasil ini — bukan jaminan. Nilai rendah biasanya berarti tulisan sumber yang kecil atau buram; sebaiknya diperiksa.",
    "editable before you copy or download": "bisa diedit sebelum disalin atau diunduh",
    "read on your device": "dibaca di perangkat Anda",
    "Our server-side reader was unreachable or unavailable, so this ran on your device instead — usually a bit less accurate on small or dense text.":
      "Pembaca di server kami tidak bisa dihubungi atau sedang tidak tersedia, jadi teks ini dibaca di perangkat Anda — biasanya sedikit kurang akurat untuk tulisan kecil atau padat.",
    "Choose a language, then press Extract text.": "Pilih bahasa, lalu tekan Ambil teks.",
    "Language of the text": "Bahasa tulisan",
    "Picking the right language matters more than anything else for accuracy.":
      "Memilih bahasa yang tepat paling berpengaruh pada akurasi. Untuk teks bahasa Indonesia, pilih Inggris.",
    "Copy text": "Salin teks",
    "Download .txt": "Unduh .txt",
    "Read on our server for the best accuracy, over an encrypted connection — the image is deleted right after. If our server can't be reached, this reads the image on your own device instead, so the tool still works either way.":
      "Dibaca di server kami agar paling akurat, melalui koneksi terenkripsi — gambar langsung dihapus setelahnya. Kalau server kami tidak bisa dihubungi, gambar dibaca di perangkat Anda sendiri, jadi alat ini tetap bekerja.",
    "Text copied to clipboard": "Teks disalin ke clipboard",
    "Couldn't access the clipboard.": "Tidak bisa mengakses clipboard.",
    "No text found in this image": "Tidak ada teks di gambar ini",
    "Try a sharper or higher-contrast scan.": "Coba scan yang lebih tajam atau lebih kontras.",
    "Extracted 1 word": "1 kata berhasil diambil",
    "Extracted {n} words": "{n} kata berhasil diambil",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Loading the recognition engine…": "Memuat mesin pengenal…",
    "Uploading your image…": "Mengunggah gambar Anda…",
    "Queued on the server…": "Mengantre di server…",
    "Reading the text on our server…": "Membaca teks di server kami…",
    "Server OCR unavailable — reading on your device instead…":
      "OCR server tidak tersedia — membaca di perangkat Anda…",
    "Downloading the recognition model (first run only)…":
      "Mengunduh model pengenal (hanya saat pertama kali)…",
    "Starting the engine…": "Menyalakan mesin…",
    "Reading the text…": "Membaca teks…",
    "English": "Inggris",
    "Spanish": "Spanyol",
    "French": "Prancis",
    "German": "Jerman",
    "Italian": "Italia",
    "Portuguese": "Portugis",
    "Dutch": "Belanda",
    "Russian": "Rusia",
    "Arabic": "Arab",
    "Hindi": "Hindi", // i18n-same — the language's name in Indonesian
    "Chinese (Simplified)": "Mandarin (Sederhana)",
    "Japanese": "Jepang",
    "Korean": "Korea",
    "Upload an image to run OCR on.": "Unggah gambar untuk menjalankan OCR.",
    "Server OCR is unavailable (PaddleOCR is not installed on the server).":
      "OCR server tidak tersedia (PaddleOCR belum terpasang di server).",
  },
};

export default content;
