import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/video-ke-gif. */
const content: ToolPageContent = {
  toolId: "video-to-gif",
  locale: "id",
  name: "Video ke GIF",
  tagline:
    "Ubah potongan video MP4, WEBM, atau MOV menjadi GIF yang berulang — potong, pilih frame rate dan ukuran, lalu lihat hasilnya sebelum mengunduh. Gratis, dan videonya tidak keluar dari browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Video ke GIF Online Gratis — MP4 ke GIF | oMyImage",
  metaDescription:
    "Ubah video ke GIF online gratis: potong bagian dari MP4, WEBM, atau MOV, pilih frame rate dan ukuran, lalu dapatkan GIF yang berulang. Di browser, tanpa upload.",

  intro:
    "GIF bisa diputar di mana pun gambar bisa ditaruh: chat, forum, email, slide, dan kolom komentar yang tidak pernah memutar video sendiri. Konverter Video ke GIF dari oMyImage memotong momen yang Anda inginkan dari file video dan mengubahnya menjadi GIF yang berulang. Tambahkan MP4, WEBM, atau MOV, tandai awal dan akhir sambil menonton, pilih seberapa halus dan seberapa besar hasilnya, lalu unduh GIF-nya. Video didekode oleh browser Anda sendiri, jadi tidak pernah di-upload ke mana pun.",

  sections: [
    {
      heading: "Memilih momennya",
      id: "trim",
      body: [
        "GIF paling bagus sebagai putaran pendek: reaksi, produk yang berputar, satu langkah tutorial, atau bagian lucu dari sebuah klip. Putar videonya lalu tekan Mulai di sini dan Selesai di sini pada saat yang tepat, atau ketik waktunya dalam detik. Alat ini memulai dengan lima detik pertama terpilih, karena kebanyakan GIF yang bagus lebih pendek dari itu.",
        "Setiap detik berpengaruh pada ukuran file. GIF menyimpan setiap frame sebagai gambar, jadi klip 10 detik punya dua kali frame klip 5 detik — dan kira-kira dua kali ukurannya. Memotong hanya bagian yang perlu dilihat adalah penghematan terbesar.",
      ],
    },
    {
      heading: "Frame rate dan lebar",
      id: "settings",
      body: [
        "Frame per detik menentukan seberapa halus gerakannya. 10 fps memberi nuansa GIF klasik dan file tetap kecil; 15 fps terasa jauh lebih halus untuk gerakan cepat; 20–25 fps mendekati video tetapi menggandakan jumlah frame atau lebih. Untuk rekaman layar dan adegan lambat, 5–10 fps sering sudah cukup.",
        "Lebar adalah pengungkit besar lainnya. 480 piksel cocok untuk kebanyakan chat dan halaman; 320 bagus untuk reaksi dan sisipan kecil; 640 atau lebar asli untuk tutorial yang tulisannya kecil dan harus tetap terbaca. Tinggi mengikuti bentuk video itu sendiri, jadi tidak ada yang tertarik.",
      ],
    },
    {
      heading: "Kualitas dan ukuran file",
      id: "quality",
      body: [
        "GIF hanya bisa menampilkan 256 warna, yang di sini dipilih sekali untuk seluruh klip agar warna tetap stabil antar-frame. Tinggi mempertahankan 256 warna dan hanya mengabaikan kedipan paling samar; Sedang memakai 128 warna dan membekukan perubahan kecil antar-frame; File kecil melangkah lebih jauh, cocok untuk adegan sederhana dan rekaman layar.",
        "Di balik layar, setiap frame setelah yang pertama hanya menyimpan piksel yang berubah, dan sisanya tampil dari frame sebelumnya. Noise video mengganggu hal ini — itulah sebabnya pengaturan yang lebih rendah menganggap perubahan kecil sebagai tidak berubah, dan karena itu ukurannya bisa turun jauh pada rekaman nyata.",
      ],
    },
    {
      heading: "Video yang didukung",
      id: "formats",
      body: [
        "Video apa pun yang bisa diputar browser Anda bisa dipakai: MP4 (H.264), WEBM (VP8, VP9, atau AV1), dan kebanyakan MOV. Video iPhone yang direkam dalam HEVC hanya bisa diputar di sistem yang mendukung HEVC, seperti Safari di Mac atau iPhone; di tempat lain bisa muncul error. Mengatur kamera iPhone ke Paling Kompatibel (Pengaturan, Kamera, Format) merekam dalam H.264, yang bisa diputar di mana saja.",
        "Suara dihilangkan, karena GIF tidak punya audio. Rasio aspek, warna, dan durasi klip dipertahankan, dan GIF berulang terus kecuali Anda mematikan Ulangi terus.",
      ],
    },
    {
      heading: "Klip panjang dan memori",
      id: "limits",
      body: [
        "Frame disimpan di memori sampai GIF selesai ditulis, jadi klip yang sangat panjang atau sangat besar dibatasi. Bila alat ini menyebut klipnya terlalu panjang untuk ukuran itu, persingkat klip, turunkan frame rate, atau pilih lebar yang lebih kecil; panel menunjukkan berapa frame yang akan dibuat. Untuk apa pun yang lebih dari setengah menit, GIF jarang jadi format yang tepat — MP4 pendek akan lebih kecil dan lebih bagus.",
      ],
    },
    {
      heading: "GIF untuk stiker dan meme",
      id: "memes",
      body: [
        "Potongan video lucu dari HP bisa jadi GIF reaksi atau bahan stiker dalam hitungan detik. Pilih bagian terpendek yang masih lucu, lebar 320–480 piksel dan 10 fps — hasilnya cukup ringan untuk dikirim di grup chat tanpa menghabiskan kuota.",
      ],
    },
  ],

  howToTitle: "Cara mengubah video ke GIF",
  steps: [
    { title: "Tambahkan video", description: "Pilih file MP4, WEBM, atau MOV dari komputer atau HP." },
    { title: "Potong dan atur", description: "Tandai awal dan akhir, lalu pilih frame rate, lebar, dan kualitas." },
    { title: "Buat GIF", description: "Klik Buat GIF, cek pratinjaunya, lalu unduh." },
  ],

  features: [
    { icon: "gif_box", title: "Potong tepat di momennya", description: "Tandai awal dan akhir sambil video diputar, hingga sepersepuluh detik." },
    { icon: "tune", title: "Ukuran terkendali", description: "Frame rate, lebar, dan kualitas menjaga GIF sekecil mungkin." },
    { icon: "lock", title: "Tanpa upload", description: "Video Anda didekode dan dikonversi oleh browser Anda sendiri." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah video ke GIF?", a: "Tambahkan video, tandai awal dan akhir, pilih frame rate dan lebar, lalu klik Buat GIF. Cek pratinjaunya dan unduh." },
    { q: "Bisakah mengubah MP4 ke GIF?", a: "Bisa. MP4 dengan H.264 berjalan di semua browser; WEBM dan MOV juga bisa." },
    { q: "Kenapa video iPhone saya tidak bisa dibuka?", a: "Kemungkinan videonya HEVC, yang tidak bisa diputar sebagian browser. Pakai Safari, atau atur kamera iPhone ke Paling Kompatibel agar merekam dalam H.264." },
    { q: "Berapa panjang GIF yang bisa dibuat?", a: "Pendek lebih baik — beberapa detik. Klip yang lebih panjang bisa dengan frame rate dan lebar yang lebih kecil; alat ini memberi tahu bila klip terlalu panjang." },
    { q: "Bagaimana membuat GIF lebih kecil?", a: "Potong, pakai 10 fps, pilih lebar lebih kecil seperti 320 atau 480, dan pilih Sedang atau File kecil." },
    { q: "Apakah GIF-nya ada suara?", a: "Tidak. GIF tidak punya audio, jadi suaranya dihilangkan." },
    { q: "Apakah GIF akan berulang?", a: "Ya, terus-menerus secara bawaan. Matikan Ulangi terus agar hanya diputar sekali." },
    { q: "Frame rate berapa yang sebaiknya dipakai?", a: "10 fps untuk kebanyakan klip, 15 fps untuk gerakan cepat, 5–10 fps untuk rekaman layar." },
    { q: "Apakah video saya di-upload?", a: "Tidak. Video didekode dan diubah menjadi GIF sepenuhnya di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP, untuk video yang bisa diputar browser tersebut. Klip pendek lebih cepat diproses di HP." },
  ],

  security:
    "Video Anda didekode oleh browser Anda sendiri dan GIF dibuat di perangkat Anda. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // VideoToGifTool.tsx
    "Select a video": "Pilih video",
    "or drop an MP4, WEBM or MOV video here": "atau lepaskan video MP4, WEBM, atau MOV di sini",
    "Please select a video file.": "Silakan pilih file video.",
    "This video can't be played in your browser.": "Video ini tidak bisa diputar di browser Anda.",
    "Clear video": "Hapus video",
    "Change video": "Ganti video",
    "GIF settings": "Pengaturan GIF",
    "Make GIF": "Buat GIF",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Your GIF will appear here.": "GIF Anda akan muncul di sini.",
    "Video": "Video", // i18n-same
    "GIF": "GIF", // i18n-same
    "Start here": "Mulai di sini",
    "End here": "Selesai di sini",
    "Start": "Awal",
    "End": "Akhir",
    "Clip (seconds)": "Klip (detik)",
    "{len} s of {total} s. Use Start here and End here while the video plays.":
      "{len} dtk dari {total} dtk. Pakai Mulai di sini dan Selesai di sini saat video diputar.",
    "Frames per second": "Frame per detik",
    "Width (px)": "Lebar (px)",
    "Original ({w})": "Asli ({w})",
    "Loop forever": "Ulangi terus",
    "{n} frames": "{n} frame",
    "{n} frames at {w} × {h} px": "{n} frame, {w} × {h} px",
    "Too long for this size — shorten the clip, lower the frame rate or the width.":
      "Terlalu panjang untuk ukuran ini — persingkat klip, turunkan frame rate atau lebarnya.",
    "Your video is converted in your browser and never uploaded.": "Video Anda dikonversi di browser dan tidak pernah di-upload.",
    // QUALITY_LABEL (module scope)
    "High": "Tinggi",
    "Medium": "Sedang",
    "Small file": "File kecil",
  },
};

export default content;
