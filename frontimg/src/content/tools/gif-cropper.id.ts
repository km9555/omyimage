import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/crop-gif. */
const content: ToolPageContent = {
  toolId: "gif-cropper",
  locale: "id",
  name: "Crop GIF",
  tagline:
    "Crop GIF animasi secara online — tarik kotak atau ketik ukuran piksel yang pas, kunci rasio, dan setiap frame dipotong dengan cara yang sama. Animasinya tetap bergerak. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Crop GIF Online Gratis — Potong Tepi GIF Animasi | oMyImage",
  metaDescription:
    "Crop GIF animasi online gratis: tarik kotak atau ketik pikselnya, pilih rasio seperti 1:1 atau 16:9, dan semua frame dipotong sama. Di browser, tanpa upload.",

  intro:
    "Kebanyakan alat crop gambar mengubah GIF menjadi frame pertamanya saja, jadi animasinya hilang begitu dipotong. Crop GIF dari oMyImage bekerja pada seluruh animasi: tarik kotak di atas bagian yang ingin disimpan, atau ketik posisi dan ukurannya dalam piksel, lalu setiap frame dipotong tepat di area itu dengan durasi yang tidak berubah. Penggeser frame memungkinkan Anda memeriksa kotak terhadap bagian yang bergerak sebelum memotong, dan hasilnya diputar di samping aslinya agar bisa dibandingkan sebelum diunduh.",

  sections: [
    {
      heading: "Kenapa perlu crop GIF",
      id: "why",
      body: [
        "Rekaman layar dan GIF dari video hampir selalu memuat lebih dari bagian yang penting: toolbar browser, garis hitam dari video layar lebar, watermark di sudut, atau ruang kosong di sekitar objek. Crop membuang semuanya, sehingga aksinya memenuhi frame dan reaksi atau demonya tetap jelas di ukuran kecil tempat GIF biasa ditampilkan.",
        "Crop juga membuat file lebih kecil. GIF menyimpan setiap piksel di setiap frame, jadi menyisakan setengah lebar dan setengah tinggi berarti tinggal kira-kira seperempat datanya. Sering kali itu cukup agar GIF lolos batas upload tanpa menurunkan kualitas sama sekali.",
      ],
    },
    {
      heading: "Memilih area",
      id: "area",
      body: [
        "Tarik bagian dalam kotak untuk memindahkannya, dan tarik sudut atau sisinya untuk mengubah ukuran; tombol panah di keyboard menggeser satu piksel. Kolom Kiri, Atas, Lebar, dan Tinggi menunjukkan kotak dalam piksel dan bisa diisi langsung — cara tercepat untuk mencapai ukuran yang diminta.",
        "Karena objek dalam animasi bergerak, kotak digambar di atas satu frame saja. Pakai penggeser frame di bawah gambar untuk menelusuri animasi dan memastikan tidak ada bagian penting yang keluar dari kotak di tengah jalan — tangan yang keluar dari layar atau teks yang muncul di akhir.",
      ],
    },
    {
      heading: "Rasio",
      id: "ratios",
      body: [
        "Bebas membiarkan kotak berbentuk apa saja. Rasio tetap mengunci kotak saat ditarik: 1:1 untuk foto profil, stiker, dan Instagram, 4:5 untuk postingan potret, 16:9 untuk banner dan slide berformat video, 9:16 untuk story dan layar HP, serta 4:3 atau 3:2 untuk bentuk foto klasik. Saat rasio dipilih, kotak yang ada berubah bentuk di sekitar titik tengahnya dan tetap berada di atas bagian gambar yang sama.",
        "Bila GIF juga harus berukuran piksel tertentu, crop dulu ke rasionya, lalu atur ukuran akhirnya dengan Ubah Ukuran GIF.",
      ],
    },
    {
      heading: "Apa yang tetap sama",
      id: "kept",
      body: [
        "Setiap frame mempertahankan durasinya, jadi animasi diputar dengan kecepatan yang sama dan berulang seperti sebelumnya. GIF transparan tetap transparan. Karena crop hanya membuang piksel, warnanya ditulis kembali persis sama selama warna GIF muat dalam satu palet — begitulah kebanyakan GIF. Tidak ada yang dikuantisasi ulang, jadi tidak muncul garis atau bintik baru.",
        "GIF dari video kadang memakai palet berbeda di setiap frame. GIF seperti itu mendapat satu palet bersama berisi 256 warna yang dipilih dari semua frame, dan perbedaannya hampir tidak pernah terlihat.",
      ],
    },
    {
      heading: "Contoh pemakaian",
      id: "uses",
      body: [
        "Membuang garis hitam dari potongan film atau video YouTube. Memangkas rekaman layar sampai tinggal jendela atau tombol yang dibahas. Membuat foto profil atau stiker persegi dari GIF reaksi yang lebar. Memotong tepi tempat watermark atau logo situs berada, bila Anda berhak memakai animasinya.",
        "Untuk crop yang mengubah bentuk — GIF lebar jadi persegi atau potret — kunci rasionya dulu, baru geser kotaknya, supaya objek berada di tengah.",
      ],
    },
    {
      heading: "GIF untuk WhatsApp dan media sosial",
      id: "social",
      body: [
        "Setiap aplikasi menampilkan GIF dengan caranya sendiri. Di WhatsApp dan Telegram, GIF yang sangat lebar tampak kecil di obrolan; setelah di-crop ke 1:1 atau 4:5, GIF memakai lebih banyak ruang di layar. Di story, format 9:16 memenuhi seluruh layar HP, sedangkan di situs web dan presentasi, 16:9 cocok dengan tata letak lainnya.",
        "Crop sendiri sebelum mengirim juga mencegah aplikasi memotong animasi dengan caranya sendiri — yang sering justru mengenai bagian terpenting.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF didekode, dipotong, dan dienkode sepenuhnya di browser Anda. File tidak pernah di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup, jadi rekaman layar pribadi dan video keluarga tetap di perangkat Anda.",
      ],
    },
    {
      heading: "Setelah di-crop",
      id: "next",
      body: [
        "GIF yang sudah di-crop sering sudah cukup kecil. Bila belum, Kompres GIF bisa mengecilkannya lagi dengan lebih sedikit warna, dan Potong GIF bisa membuang frame sebelum atau sesudah momen yang Anda mau. Untuk memutar GIF, pakai Putar GIF; untuk membagikannya sebagai video, ubah dengan GIF ke MP4.",
      ],
    },
  ],

  howToTitle: "Cara crop GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Atur kotaknya", description: "Tarik kotak crop atau ketik ukurannya; kunci rasio bila perlu." },
    { title: "Crop dan unduh", description: "Klik Crop GIF, bandingkan hasilnya dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "crop", title: "Seluruh animasi", description: "Setiap frame dipotong di area yang sama dan durasinya tetap." },
    { icon: "aspect_ratio", title: "Ukuran tepat", description: "Tarik kotak, ketik piksel, atau kunci rasio seperti 1:1 atau 16:9." },
    { icon: "lock", title: "Tanpa upload", description: "Di-crop sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara crop GIF animasi?", a: "Tambahkan GIF, tarik kotak di atas area yang ingin disimpan, lalu klik Crop GIF. Semua frame dipotong sama dan animasinya tetap bergerak." },
    { q: "Apakah GIF tetap beranimasi?", a: "Ya. Semua frame tetap ada dengan durasi aslinya, dan GIF berulang seperti sebelumnya." },
    { q: "Bisakah crop GIF jadi persegi?", a: "Bisa. Pilih 1:1, dan kotak tetap persegi saat dipindah atau diubah ukurannya." },
    { q: "Bisakah mengetik ukuran yang pas?", a: "Bisa. Ketik posisi kiri dan atas serta lebar dan tinggi dalam piksel di pengaturan." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Piksel di dalam kotak tidak berubah, dan warna aslinya dipakai lagi selama muat dalam satu palet." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan setelah di-crop." },
    { q: "Apakah file jadi lebih kecil?", a: "Biasanya ya. Lebih sedikit piksel per frame berarti lebih sedikit data, kira-kira sebanding dengan area yang dibuang." },
    { q: "Kenapa kotaknya hanya menampilkan satu frame?", a: "Kotak crop hanya bisa digambar di atas satu gambar sekaligus. Pakai penggeser frame untuk memeriksa sisa animasi." },
    { q: "Bisakah crop beberapa GIF sekaligus?", a: "Satu per satu. Setiap animasi biasanya butuh kotaknya sendiri." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. GIF di-crop sepenuhnya di browser dan tidak keluar dari perangkat Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP. Tarik kotak dengan jari; GIF besar butuh waktu sedikit lebih lama di HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Rasio apa untuk stiker WhatsApp?", a: "1:1. Stiker berbentuk persegi; setelah di-crop, perkecil ke 512 piksel atau kurang dengan Ubah Ukuran GIF." },
  ],

  security:
    "GIF Anda di-crop sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifEditTool.tsx — shared with rotate-gif, reverse-gif, gif-speed-changer
    // and gif-cutter, whose modules reuse this block.
    "Select a GIF": "Pilih GIF",
    "or drop a GIF here": "atau lepaskan GIF di sini",
    "Please select a GIF.": "Silakan pilih GIF.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "GIF settings": "Pengaturan GIF",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Your GIF will appear here.": "GIF Anda akan muncul di sini.",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "Width (px)": "Lebar (px)",
    "Height (px)": "Tinggi (px)",
    "Left (px)": "Kiri (px)",
    "Top (px)": "Atas (px)",
    "Your file is processed in your browser and never uploaded.": "File Anda diproses di browser dan tidak pernah di-upload.",
    "Preview": "Pratinjau",
    "Crop GIF": "Crop GIF", // i18n-same — the Indonesian page and searches say "crop"
    "Rotate GIF": "Putar GIF",
    "Reverse GIF": "Putar Balik GIF",
    "Change speed": "Ubah kecepatan",
    "Cut GIF": "Potong GIF",
    "This GIF has only one frame, so it isn't animated.": "GIF ini hanya punya satu frame, jadi tidak beranimasi.",
    // crop
    "Aspect ratio": "Rasio",
    "Free": "Bebas",
    "Select the whole frame": "Pilih seluruh frame",
    "Every frame is cropped to the same area and keeps its timing.": "Setiap frame dipotong di area yang sama dan durasinya tetap.",
    "Drag the box to choose the area to keep · output {w} × {h} px": "Tarik kotak untuk memilih area yang disimpan · hasil {w} × {h} px",
    "Frame {i} of {n}": "Frame {i} dari {n}",
    "Frame shown under the crop box": "Frame yang tampil di bawah kotak crop",
    // rotate
    "Rotate": "Putar",
    "90° left": "90° ke kiri",
    "90° right": "90° ke kanan",
    "Flip": "Balik",
    "Horizontal": "Horizontal", // i18n-same
    "Vertical": "Vertikal",
    "Every frame is turned the same way and keeps its timing.": "Setiap frame diputar dengan cara yang sama dan durasinya tetap.",
    // reverse
    "Direction": "Arah",
    "Reverse": "Mundur",
    "Boomerang": "Boomerang", // i18n-same
    "Plays forwards, then backwards, as one seamless loop.": "Diputar maju lalu mundur, dalam satu loop yang mulus.",
    "Plays the frames in reverse order, each with its own timing.": "Frame diputar dengan urutan terbalik, masing-masing dengan durasinya sendiri.",
    // speed
    "Change": "Ubah",
    "By speed": "Kecepatan",
    "Frame delay": "Jeda frame",
    "Speed": "Kecepatan",
    "Above 1× is faster, below 1× is slower.": "Di atas 1× lebih cepat, di bawah 1× lebih lambat.",
    "Every frame (ms)": "Setiap frame (ms)",
    "{fps} frames per second": "{fps} frame per detik",
    "Length: {a} → {b}": "Durasi: {a} → {b}",
    "Only the timing changes — every frame and pixel stays as it was.": "Hanya waktunya yang berubah — setiap frame dan piksel tetap seperti semula.",
    "To play this fast, {n} frames are merged: browsers slow down frames shorter than 0.02 s.":
      "Agar bisa secepat ini, {n} frame digabung: browser memperlambat frame yang lebih pendek dari 0,02 dtk.",
    // cut
    "Start": "Awal",
    "End": "Akhir",
    "Frame {i} · {s} s": "Frame {i} · {s} dtk",
    "First frame": "Frame pertama",
    "Last frame": "Frame terakhir",
    "Selected part": "Bagian terpilih",
    "Keep it": "Simpan",
    "Remove it": "Hapus",
    "Result: {n} frames · {s}": "Hasil: {n} frame · {s}",
    "Keep at least one frame.": "Sisakan setidaknya satu frame.",
  },
};

export default content;
