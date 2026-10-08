import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/tambah-teks-ke-gif. */
const content: ToolPageContent = {
  toolId: "add-text-to-gif",
  locale: "id",
  name: "Tambah Teks ke GIF",
  tagline:
    "Beri tulisan pada GIF animasi — teks meme, subtitle, atau label — di semua frame atau sebagian saja, dan lihat langsung saat diputar sebelum disimpan. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "Tambah Teks ke GIF Online Gratis — Tulisan di GIF | oMyImage",
  metaDescription:
    "Tambahkan teks ke GIF animasi online gratis: tulisan meme, subtitle, atau label di semua frame atau sebagian, dengan garis tepi, kotak, dan pratinjau langsung. Di browser, tanpa upload.",

  intro:
    "GIF lebih bermakna dengan kata-kata yang tepat: punchline di bawah reaksi, subtitle di klip tanpa suara, label di setiap langkah tutorial. Tambah Teks ke GIF dari oMyImage menuliskan teks Anda langsung di animasinya. Ketik teksnya, pilih salah satu dari sembilan posisi, font, ukuran, dan warna, lalu pratinjau langsung memutar GIF dengan tulisan Anda. Bila sudah pas, tambahkan ke GIF; teks menjadi bagian dari setiap frame yang dipilih, jadi tetap terlihat ke mana pun GIF dikirim.",

  sections: [
    {
      heading: "Menempatkan teks",
      id: "position",
      body: [
        "Pilih salah satu dari sembilan titik — sudut, tengah setiap sisi, atau tepat di tengah. Tulisan yang panjang pindah ke baris baru dengan sendirinya, dan Enter memulai baris baru di mana pun Anda mau. Teks selalu diberi sedikit jarak dari tepi, agar garis tepinya tidak terpotong.",
        "Ukuran diatur sebagai bagian dari sisi terpendek GIF, jadi pengaturan yang sama tetap pas di klip HP yang tegak maupun di banner yang lebar. Pratinjau menampilkan hasilnya seketika, di animasi yang sedang bergerak, bukan di satu frame diam.",
      ],
    },
    {
      heading: "Gaya meme atau gaya subtitle",
      id: "style",
      body: [
        "Tampilan meme klasik adalah huruf kapital Impact putih dengan garis tepi hitam yang tebal — terbaca di latar apa pun, terang maupun gelap. Pilih Impact, centang Huruf kapital, dan biarkan garis tepinya seperti bawaan. Untuk subtitle, font sans-serif biasa dengan kotak di belakang teks lebih mudah dibaca dan terlihat lebih tenang.",
        "Warna teks dan garis tepi bisa apa saja. Atur ketebalan garis tepi ke nol untuk teks bersih tanpa bingkai, atau naikkan untuk latar yang ramai dan cerah. Kotaknya memakai warna garis tepi yang sedikit transparan, jadi frame di belakangnya tetap terlihat.",
      ],
    },
    {
      heading: "Teks di sebagian frame saja",
      id: "timing",
      body: [
        "Pilih Sebagian frame untuk menampilkan teks di sebagian animasi saja. Dua penggeser menentukan frame pertama dan terakhir, lengkap dengan waktu mulai masing-masing, jadi punchline muncul tepat saat reaksinya terjadi, atau label bisa mengikuti setiap langkah rekaman layar.",
        "Untuk menampilkan beberapa tulisan berbeda, tambahkan satu, unduh GIF-nya, buka lagi, lalu tambahkan tulisan berikutnya di rentang frame lain. Setiap putaran mempertahankan teks sebelumnya.",
      ],
    },
    {
      heading: "Font",
      id: "fonts",
      body: [
        "Keempat font — Impact, sans-serif, serif, dan mesin ketik — berasal dari perangkat Anda, jadi tidak ada yang perlu diunduh. Impact tersedia di Windows dan macOS; di HP yang tidak memilikinya, font sans-serif tebal menggantikannya. Bahasa apa pun yang bisa ditampilkan perangkat Anda bisa dipakai, termasuk emoji.",
      ],
    },
    {
      heading: "Kualitas dan ukuran file",
      id: "quality",
      body: [
        "Setiap frame mempertahankan durasinya, dan GIF berulang seperti sebelumnya. Tepi huruf dihaluskan dengan gambar di belakangnya, dan 256 warna GIF dipilih ulang untuk seluruh animasi, jadi warna teks menyatu tanpa garis-garis. Menambahkan teks hanya sedikit mengubah ukuran file; bila GIF harus lebih kecil, proses setelahnya dengan Kompres GIF.",
      ],
    },
    {
      heading: "Tulisan yang mudah dibaca",
      id: "tips",
      body: [
        "Tulisan pendek paling mudah dibaca: GIF berulang dalam beberapa detik, jadi cukup satu atau dua baris. Taruh di bagian yang tidak ada aksinya — di bawah untuk kebanyakan klip, di atas bila wajah atau tangan ada di bagian bawah frame. Teks terang dengan garis tepi gelap cocok di hampir semua latar; di latar yang sangat ramai, nyalakan kotaknya.",
      ],
    },
    {
      heading: "GIF bertulisan untuk WhatsApp",
      id: "messengers",
      body: [
        "Tulisan menjadi bagian dari gambar, jadi tetap terlihat di WhatsApp, Telegram, Instagram, dan aplikasi apa pun yang menampilkan GIF — tanpa perlu keterangan di pesan. Cocok untuk ucapan selamat, meme, dan petunjuk singkat yang akan diteruskan ke orang lain.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF dibaca, diberi tulisan, dan ditulis ulang sepenuhnya di browser Anda. File tidak pernah di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara menambahkan teks ke GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Tulis dan atur gaya", description: "Ketik teks, pilih posisi, font, ukuran, dan warna; pratinjau diputar langsung." },
    { title: "Tambahkan dan unduh", description: "Klik Tambahkan teks, periksa hasilnya, lalu unduh." },
  ],

  features: [
    { icon: "text_fields", title: "Pratinjau langsung", description: "Lihat tulisan di GIF yang sedang diputar sambil mengetik." },
    { icon: "palette", title: "Meme atau subtitle", description: "Garis tepi, kotak, warna, huruf kapital, dan sembilan posisi." },
    { icon: "lock", title: "Tanpa upload", description: "Tulisan ditambahkan sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menambahkan teks ke GIF animasi?", a: "Tambahkan GIF, ketik teksnya, pilih posisi dan tampilannya, lalu klik Tambahkan teks dan unduh." },
    { q: "Apakah GIF tetap beranimasi?", a: "Ya. Setiap frame mempertahankan durasinya; teks digambar di setiap frame." },
    { q: "Bisakah membuat tulisan meme klasik?", a: "Bisa. Pilih Impact, centang Huruf kapital, dan pertahankan garis tepi hitam." },
    { q: "Bisakah teks muncul di sebagian GIF saja?", a: "Bisa. Pilih Sebagian frame dan atur frame pertama dan terakhir dengan penggeser." },
    { q: "Bisakah menambahkan lebih dari satu tulisan?", a: "Tambahkan satu, unduh GIF-nya, buka lagi, lalu tambahkan tulisan berikutnya." },
    { q: "Bisakah menaruh teks di sudut?", a: "Bisa. Pilih salah satu dari sembilan posisi, termasuk sudut." },
    { q: "Bisakah menulis beberapa baris?", a: "Bisa. Tekan Enter untuk baris baru; baris panjang juga pindah sendiri." },
    { q: "Apakah emoji bisa dipakai?", a: "Bisa, begitu juga huruf apa pun yang bisa ditampilkan perangkat Anda." },
    { q: "Apakah file jadi jauh lebih besar?", a: "Biasanya hanya sedikit. Kompres GIF bisa mengecilkannya setelahnya." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah tulisannya terlihat di WhatsApp?", a: "Ya. Teks menjadi bagian dari gambar, jadi terlihat di aplikasi apa pun yang menampilkan GIF." },
  ],

  security:
    "Tulisan ditambahkan ke GIF Anda sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifTextTool.tsx
    "Select a GIF": "Pilih GIF",
    "or drop a GIF here": "atau lepaskan GIF di sini",
    "Please select a GIF.": "Silakan pilih GIF.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Your text here": "Teks Anda di sini",
    "Preview": "Pratinjau",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "The preview plays your text live. Add it to the GIF when it looks right.": "Pratinjau memutar teks Anda secara langsung. Tambahkan ke GIF bila sudah pas.",
    "Working… {p}%": "Memproses… {p}%",
    "Text settings": "Pengaturan teks",
    "Text": "Teks",
    "Position": "Posisi",
    "Top left": "Kiri atas",
    "Top": "Atas",
    "Top right": "Kanan atas",
    "Left": "Kiri",
    "Middle": "Tengah",
    "Right": "Kanan",
    "Bottom left": "Kiri bawah",
    "Bottom": "Bawah",
    "Bottom right": "Kanan bawah",
    "Font": "Font", // i18n-same
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Sans-serif": "Sans-serif", // i18n-same
    "Serif": "Serif", // i18n-same
    "Typewriter": "Mesin ketik",
    "Size": "Ukuran",
    "Text colour": "Warna teks",
    "Outline colour": "Warna garis tepi",
    "Outline thickness": "Tebal garis tepi",
    "Box behind the text": "Kotak di belakang teks",
    "CAPITAL LETTERS": "HURUF KAPITAL",
    "Show the text": "Tampilkan teks",
    "Whole GIF": "Seluruh GIF",
    "Some frames": "Sebagian frame",
    "From": "Dari",
    "To": "Sampai",
    "Frame {i} · {s} s": "Frame {i} · {s} dtk",
    "Long text wraps onto new lines by itself. Press Enter to start a new line.": "Teks panjang pindah ke baris baru dengan sendirinya. Tekan Enter untuk memulai baris baru.",
    "Your file is processed in your browser and never uploaded.": "File Anda diproses di browser dan tidak pernah di-upload.",
    "Add text to GIF": "Tambahkan teks",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
  },
};

export default content;
