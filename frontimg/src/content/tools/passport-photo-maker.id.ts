import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/pas-foto (new tool, 2026-10-04). Indonesians search
 * "pas foto" (the generic ID photo) far more than "foto paspor"; sizes 2x3,
 * 3x4 and 4x6 cm on a red or blue background are the everyday need (CPNS,
 * SKCK, ijazah, lamaran kerja). The 3x4 has its own page, /id/foto-3x4; this
 * parent opens on 3 × 4 cm too, because that is what most visitors want.
 * Framing and printing run in the browser; only the optional background
 * change uses the server.
 */
const content: ToolPageContent = {
  toolId: "passport-photo-maker",
  locale: "id",
  name: "Pas Foto Online",
  tagline:
    "Buat pas foto di rumah: wajah otomatis dibingkai sesuai ukuran — 3 × 4, 4 × 6, 2 × 3 cm, 35 × 45 mm untuk paspor dan visa, 2 × 2 inci, dan lainnya — dengan latar merah, biru, atau putih, lalu unduh foto 300 DPI dan lembar cetak berisi beberapa salinan. Gratis dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },
  variantsHeading: "Ukuran pas foto",

  metaTitle: "Pas Foto Online — 3x4, 4x6, 2x3, Latar Merah atau Biru, Gratis | oMyImage",
  metaDescription:
    "Buat pas foto online gratis: wajah dibingkai otomatis ke ukuran 3x4, 4x6, 2x3 atau 35x45 mm, latar merah, biru atau putih, lembar cetak 4R dan batas ukuran KB.",

  intro:
    "Pas foto pada dasarnya soal ukuran dan proporsi: ukuran kertas yang tepat, kepala di ketinggian yang tepat, dan ruang yang pas di atas kepala. Alat ini menghitung semuanya untuk Anda. Unggah foto wajah menghadap depan yang tajam, pilih ukuran dokumen, lalu alat ini menemukan wajah, membingkai kepala dan bahu sesuai proporsi pas foto, dan membuat JPG siap cetak 300 DPI. Anda bisa merapikan bingkai, mengganti latar menjadi merah, biru, putih, atau warna lain, menjaga ukuran file di bawah batas KB untuk formulir online, dan mengunduh lembar 4R (4 × 6 inci) atau A4 berisi salinan sebanyak yang muat.",

  sections: [
    {
      heading: "Ukuran pas foto dan foto paspor di berbagai negara",
      id: "sizes",
      body: [
        "Di Indonesia, pas foto yang paling sering diminta berukuran 3 × 4 cm, 4 × 6 cm, dan 2 × 3 cm — untuk pendaftaran sekolah dan kuliah, lamaran kerja, CPNS, SKCK, ijazah, dan berbagai kartu anggota. Untuk visa ke luar negeri, banyak negara memakai 35 × 45 mm (3,5 × 4,5 cm): kawasan Schengen dan Uni Eropa, Inggris, Australia, dan banyak negara lain. Amerika Serikat meminta 2 × 2 inci (sekitar 5 × 5 cm), Kanada 50 × 70 mm, dan visa Tiongkok 33 × 48 mm.",
        "Aturan bisa berubah dan berbeda antara paspor, visa, dan formulir, jadi anggap daftar ini sebagai titik awal dan selalu cek ketentuan terbaru dokumen Anda. Semua ukuran di atas ada di daftar alat ini; pilih yang diminta formulir Anda.",
      ],
    },
    {
      heading: "Cara kerja pembingkaian otomatis",
      id: "framing",
      body: [
        "Model pendeteksi wajah menemukan wajah di foto Anda — langsung di perangkat, tanpa mengunggah foto. Dari posisi wajah, alat ini memperkirakan seluruh kepala, dari puncak rambut sampai dagu, lalu menyesuaikan bingkai agar kepala mengisi bagian tinggi foto sesuai aturan pas foto, berada di tengah secara horizontal, dengan ruang di atas kepala sedikit lebih lega daripada di samping.",
        "Gaya rambut, peci, kerudung, atau posisi kepala yang miring bisa sedikit menggeser perkiraan, jadi periksa pratinjaunya. Penggeser Ukuran kepala membesarkan atau mengecilkan kepala, penggeser posisi menggeser bingkai, dan Atur ulang bingkai mengembalikan hasil otomatis. Jika foto asli hanya punya sedikit ruang di atas kepala, bingkai digeser agar tidak muncul pita kosong; mengganti latar mengembalikan jarak yang biasa.",
      ],
    },
    {
      heading: "Cara memotret agar pas foto diterima",
      id: "taking",
      body: [
        "Berdirilah sekitar satu meter di depan dinding polos berwarna terang, menghadap lurus ke kamera, dengan cahaya merata di wajah — cahaya siang dari jendela di depan Anda bagus, lampu terang dari atas kepala tidak. Pasang ekspresi netral, mulut tertutup dan kedua mata terbuka, dan lepas kacamata jika aturan dokumen Anda memintanya.",
        "Minta orang lain memotret dari jarak sekitar 1,5 meter, bukan selfie dengan tangan terentang yang membuat wajah terlihat berubah bentuk. Ambil beberapa foto dan pilih yang paling tajam: bingkai bisa diperbaiki di sini, fokus tidak.",
      ],
    },
    {
      heading: "Mencetak dengan ukuran yang tepat",
      id: "printing",
      body: [
        "Foto disimpan dalam 300 DPI, resolusi yang diharapkan tempat cetak foto dan printer foto, sehingga tercetak persis seukuran dokumen — pas foto 3 × 4 cm berukuran 354 × 472 piksel. Lembar cetak menyusun salinan sebanyak yang muat di kertas foto 4R atau A4, dengan garis abu-abu tipis untuk memotong.",
        "Cetak lembar pada skala 100% (\"ukuran sebenarnya\"), bukan \"sesuaikan dengan halaman\", karena foto akan tercetak sedikit lebih kecil. Cetak 4R biasanya pilihan termurah di studio foto, dan satu lembar 4R muat beberapa pas foto 3x4.",
      ],
    },
    {
      heading: "Pas foto untuk pendaftaran online",
      id: "online",
      body: [
        "Formulir online untuk CPNS, PPPK, beasiswa, pendaftaran kuliah, dan lamaran kerja biasanya meminta JPG di bawah batas ukuran tertentu — sering 100 KB, 200 KB, atau 500 KB. Ketik batasnya di Ukuran file maksimal, dan foto yang diunduh akan berada di bawahnya. Ukuran cetaknya tetap benar walaupun jumlah piksel harus dikurangi, karena label DPI di file ikut disesuaikan.",
      ],
    },
    {
      heading: "Latar merah, biru, atau putih",
      id: "background-colour",
      body: [
        "Latar merah sering diminta untuk SKCK dan banyak pendaftaran CPNS, latar biru untuk sebagian ijazah, kartu pelajar, dan berkas kantor, sedangkan putih umum untuk visa dan paspor luar negeri. Tiap instansi bisa punya aturan sendiri, jadi ikuti pengumuman resminya. Di bagian Latar, pilih Ganti warna: orang di foto dipotong sekali di server kami, lalu Anda bisa berpindah antara merah, biru, putih, atau warna apa pun secara instan tanpa memotret ulang.",
      ],
    },
  ],

  howToTitle: "Cara membuat pas foto online",
  steps: [
    { title: "Unggah foto wajah", description: "Pilih foto menghadap depan yang tajam — JPG, PNG, atau WEBP." },
    { title: "Pilih ukuran", description: "Pilih ukuran dokumen; wajah dibingkai otomatis dan bisa Anda rapikan." },
    { title: "Unduh foto atau lembar cetak", description: "Simpan satu foto 300 DPI, atau lembar 4R atau A4 berisi beberapa salinan untuk dicetak." },
  ],

  features: [
    { icon: "badge", title: "Bingkai otomatis", description: "Deteksi wajah mengatur ukuran dan posisi kepala sesuai aturan pas foto, di semua ukuran umum." },
    { icon: "grid_view", title: "Lembar cetak", description: "Salinan sebanyak yang muat di kertas 4R atau A4, dengan garis potong, dalam 300 DPI." },
    { icon: "lock", title: "Privat sejak awal", description: "Pembingkaian dan pencetakan terjadi di browser Anda; hanya penggantian latar yang memakai server kami." },
  ],

  faqs: [
    { q: "Berapa ukuran pas foto yang umum di Indonesia?", a: "3 × 4 cm, 4 × 6 cm, dan 2 × 3 cm. Untuk visa ke luar negeri biasanya 35 × 45 mm, dan untuk visa Amerika Serikat 2 × 2 inci. Pilih ukurannya di daftar dan bingkai menyesuaikan." },
    { q: "Berapa piksel ukuran pas foto pada 300 DPI?", a: "3 × 4 cm = 354 × 472 piksel; 4 × 6 cm = 472 × 709; 2 × 3 cm = 236 × 354; 35 × 45 mm = 413 × 531. Alat ini menyimpan ukuran tersebut dan menuliskan DPI ke dalam file." },
    { q: "Bisakah latar belakang diganti menjadi merah atau biru?", a: "Bisa. Di bagian Latar, pilih Ganti warna; orang di foto dipotong dan ditempatkan di atas merah, biru, putih, atau warna pilihan Anda. Langkah ini memakai satu proses AI di server kami." },
    { q: "Bagaimana mencetak banyak pas foto dalam satu lembar?", a: "Unduh lembar cetak 4R atau A4 lalu cetak pada skala 100%. Satu lembar 4R muat beberapa pas foto 3 × 4 cm, lengkap dengan garis abu-abu untuk memotong." },
    { q: "Bisakah pas foto dibuat di bawah 200 KB untuk formulir online?", a: "Bisa. Ketik 200 di Ukuran file maksimal sebelum mengunduh; foto akan berada di bawah 200 KB dan ukuran cetaknya tetap benar." },
    { q: "Apakah pas foto saya pasti diterima?", a: "Alat ini memastikan ukuran dan bingkai. Pencahayaan, ekspresi, kacamata, posisi kepala, warna latar, dan seberapa baru foto Anda adalah aturan yang harus dipenuhi saat memotret — cek ketentuan dokumen Anda." },
    { q: "Apakah foto saya diunggah?", a: "Tidak — deteksi wajah, pembingkaian, dan pencetakan berjalan di browser Anda. Foto baru dikirim ke server kami jika Anda mengganti latar, dan hasil potongannya dihapus otomatis dalam satu jam." },
    { q: "Bolehkah memakai foto selfie?", a: "Sebaiknya jangan. Ponsel dengan tangan terentang membuat wajah tampak berubah bentuk, dan kebanyakan aturan meminta foto dari jarak sekitar 1,5 m. Minta bantuan orang lain atau pakai timer dan penyangga." },
    { q: "Apakah pas foto boleh memakai kerudung?", a: "Untuk banyak dokumen di Indonesia boleh, selama wajah terlihat jelas dari dahi sampai dagu. Aturan visa luar negeri bisa berbeda, jadi cek ketentuan negara tujuan. Jika bingkai kurang pas, atur dengan penggeser Ukuran kepala." },
  ],

  security:
    "Deteksi wajah, pembingkaian, pengubahan ukuran, dan lembar cetak berjalan sepenuhnya di browser Anda — foto tidak meninggalkan perangkat. Jika Anda memilih mengganti latar, foto dikirim sekali lewat koneksi terenkripsi ke mesin penghapus latar kami (rembg), dan hasilnya dihapus otomatis dalam satu jam.",

  ui: {
    // PassportPhotoTool.tsx — document sizes
    "35 × 45 mm — passport: India, UK, EU, Russia": "35 × 45 mm — paspor dan visa: Schengen, Uni Eropa, Inggris",
    "2 × 2 in (51 × 51 mm) — US passport and visa": "2 × 2 inci (51 × 51 mm) — visa Amerika Serikat",
    "3 × 4 cm — documents: Brazil, Indonesia": "3 × 4 cm — pas foto 3x4",
    "4 × 6 cm — pas foto (Indonesia)": "4 × 6 cm — pas foto 4x6",
    "2 × 3 cm — pas foto (Indonesia)": "2 × 3 cm — pas foto 2x3",
    "5 × 7 cm — document photo (Brazil)": "5 × 7 cm — dokumen (Brasil)",
    "33 × 48 mm — China visa": "33 × 48 mm — visa Tiongkok",
    "50 × 70 mm — Canada passport": "50 × 70 mm — paspor Kanada",
    "2 × 2 in": "2 × 2 inci",
    // PassportPhotoTool.tsx
    "Select a photo": "Pilih foto",
    "or drop a JPG, PNG or WEBP portrait here": "atau letakkan foto wajah JPG, PNG, atau WEBP di sini",
    "No face found — the photo is centred instead. Use the controls to frame it.": "Wajah tidak ditemukan — foto diletakkan di tengah. Atur bingkainya dengan penggeser.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Looking for the face…": "Mencari wajah…",
    "Printed size: {size} at 300 DPI ({px})": "Ukuran cetak: {size} pada 300 DPI ({px})",
    "The photo has little room above the head, so the frame was moved to fit. Changing the background restores the usual spacing.": "Ruang di atas kepala pada foto ini sempit, jadi bingkai digeser agar pas. Mengganti latar mengembalikan jarak yang biasa.",
    "Preview": "Pratinjau",
    "Photo settings": "Pengaturan foto",
    "Document size": "Ukuran dokumen",
    "Head size": "Ukuran kepala",
    "Move left / right": "Geser kiri / kanan",
    "Move up / down": "Geser atas / bawah",
    "Reset framing": "Atur ulang bingkai",
    "Background": "Latar",
    "Keep original": "Biarkan asli",
    "Change colour": "Ganti warna",
    "Removing background…": "Menghapus latar…",
    "Background colour": "Warna latar",
    "Max file size (optional)": "Ukuran file maksimal (opsional)",
    "KB": "KB",
    "For forms with a limit such as 50 KB. Leave empty for the best quality.": "Untuk formulir dengan batas, misalnya 200 KB. Kosongkan untuk kualitas terbaik.",
    "Original: {size}": "Asli: {size}",
    "Changing the background uses one AI run on our server; everything else stays in your browser.": "Mengganti latar memakai satu proses AI di server kami; selebihnya tetap di browser Anda.",
    "Download photo": "Unduh foto",
    "Saving…": "Menyimpan…",
    "Download 4×6 in print sheet ({n} photos)": "Unduh lembar cetak 4R ({n} foto)",
    "Download A4 print sheet ({n} photos)": "Unduh lembar cetak A4 ({n} foto)",
    "Could not get under {size} — the smallest file is used.": "Tidak bisa di bawah {size} — file terkecil yang dipakai.",
  },
};

export default content;
