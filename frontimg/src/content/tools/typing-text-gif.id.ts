import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/gif-teks-mengetik. */
const content: ToolPageContent = {
  toolId: "typing-text-gif",
  locale: "id",
  name: "GIF Teks Mengetik",
  tagline:
    "Buat GIF berisi teks yang mengetik sendiri, huruf demi huruf, dengan kursor berkedip. Pilih kecepatan, font, dan warnanya. Gratis, di browser — tidak ada yang perlu di-upload.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF Teks Mengetik Online Gratis — Efek Mesin Ketik | oMyImage",
  metaDescription:
    "Buat GIF teks mengetik online gratis: kata-kata Anda muncul huruf demi huruf dengan kursor berkedip. Pilih kecepatan, font, dan warna. Di browser, tanpa upload.",

  intro:
    "Teks yang mengetik sendiri menarik perhatian dengan cara yang tidak bisa dilakukan teks diam. GIF Teks Mengetik dari oMyImage mengubah pesan apa pun menjadi efek itu: tulis pesannya, pilih seberapa cepat diketik, font, ukuran, dan warna, serta apakah kursor berkedip di akhir. Pratinjau memutar animasinya selama Anda mengatur. Karena hasilnya GIF biasa, ia bisa dipakai di tempat yang tidak bisa menjalankan kode — chat, slide, email, README GitHub, dan situs web apa pun — tanpa JavaScript dan tanpa pemutar video.",

  sections: [
    {
      heading: "Cara pengetikannya bekerja",
      id: "how",
      body: [
        "Teks Anda disusun sekali dalam ukuran akhirnya, jadi baris tidak melompat saat huruf-hurufnya muncul. Lalu setiap frame menampilkan huruf berikutnya dengan kecepatan pilihan Anda. Seperti orang yang mengetik, animasi berhenti sebentar setelah koma, dan sedikit lebih lama setelah titik dan di akhir setiap baris, sehingga iramanya terasa alami, bukan seperti mesin.",
        "Di akhir, teks yang sudah lengkap bertahan selama waktu yang Anda pilih — satu sampai lima detik — sementara kursor berkedip setiap setengah detik. Lalu GIF mulai lagi, atau, bila Anda menghapus centang Ulangi terus, berhenti di teks yang sudah lengkap.",
      ],
    },
    {
      heading: "Kecepatan dan durasi",
      id: "speed",
      body: [
        "Pilih 6, 10, 15, atau 25 huruf per detik. Enam terasa seperti mengetik dengan hati-hati dan cocok untuk kalimat pendek yang dramatis; sepuluh adalah tempo yang wajar; lima belas dan dua puluh lima menyelesaikan pesan panjang dengan cepat. Pratinjau dan jumlah frame langsung berubah, dan durasi seluruh GIF tampil di bawah pratinjau.",
        "Setiap huruf adalah satu frame, jadi teks yang lebih panjang punya lebih banyak frame — tetapi setiap frame hanya menambahkan huruf baru, sehingga pesan panjang pun tetap jadi file kecil.",
      ],
    },
    {
      heading: "Font, ukuran, dan warna",
      id: "look",
      body: [
        "Mesin ketik, font monospace, memberi tampilan terminal klasik; sans-serif dan serif cocok untuk kutipan dan pengumuman, dan Impact membuat judul yang tegas. Ukuran berkisar 14 sampai 96 piksel dan lebar 320 sampai 800 piksel; tingginya bertambah sesuai jumlah baris.",
        "Warna teks dan latar apa pun bisa dipakai. Latar transparan membuat GIF bisa ditaruh di halaman mana saja, tetapi karena transparansi GIF tidak punya tepi halus, huruf terlihat paling rapi di atas warna solid yang sama dengan tempat GIF akan ditampilkan.",
        "Garis tepi, dari tepi tipis sampai bingkai tebal, membuat huruf tetap terbaca di latar yang ramai atau transparan. Lima preset warna — Gelap Klasik, Terang Bersih, Neon Tengah Malam, Biru Samudra, dan Senja Ceria — mengatur warna teks, latar, dan garis tepi sekaligus dengan satu klik, dan Anda bisa mengubah masing-masing setelahnya.",
      ],
    },
    {
      heading: "Di mana memakainya",
      id: "uses",
      body: [
        "Kirim ucapan yang mengetik sendiri di WhatsApp atau Telegram. Buka presentasi dengan kalimat yang menulis sendiri di slide pertama. Pasang tagline animasi di bagian atas README GitHub, yang tidak mengizinkan skrip tetapi mengizinkan GIF. Tambahkan baris tanda tangan atau judul yang bergerak di email, artikel blog, atau halaman produk tanpa menyentuh kode.",
      ],
    },
    {
      heading: "Bahasa apa pun",
      id: "languages",
      body: [
        "Huruf dihitung seperti cara Anda membacanya, jadi huruf beraksen, suku kata Hindi, atau emoji muncul utuh, bukan terpotong-potong. Teks memakai font di perangkat Anda, sehingga apa pun yang bisa ditampilkan perangkat — huruf Latin, Sirilik, Dewanagari, dan lainnya — bisa diketik.",
      ],
    },
    {
      heading: "Tips GIF mengetik yang bagus",
      id: "tips",
      body: [
        "Buat pesannya pendek: satu atau dua kalimat selesai diketik dalam beberapa detik dan berulang sebelum perhatian teralih. Sisakan jeda dua atau tiga detik di akhir agar orang sempat membaca seluruh kalimat. Samakan latar dengan halaman atau chat tempat GIF akan muncul, dan pilih lebar yang mendekati ukuran tampilnya, agar hurufnya tetap tajam.",
      ],
    },
    {
      heading: "Teks mengetik di presentasi",
      id: "slides",
      body: [
        "PowerPoint, Keynote, dan Google Slides memutar GIF langsung di slide, tanpa perlu mengatur animasi. Buat GIF dengan latar sewarna slide dan lebar yang sesuai tempatnya, matikan pengulangan bila kalimatnya cukup diketik sekali, lalu sisipkan seperti gambar biasa.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Tidak ada yang perlu di-upload: GIF dibuat dari teks Anda sepenuhnya di browser, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara membuat GIF teks mengetik",
  steps: [
    { title: "Tulis teksnya", description: "Ketik pesan yang harus diketik GIF, lalu klik Mulai." },
    { title: "Atur gayanya", description: "Pilih kecepatan, font, ukuran, warna, kursor, dan jeda; pratinjau diputar langsung." },
    { title: "Buat dan unduh", description: "Klik Buat GIF dan unduh animasinya." },
  ],

  features: [
    { icon: "terminal", title: "Irama mengetik asli", description: "Huruf demi huruf, dengan jeda di koma, titik, dan akhir baris." },
    { icon: "palette", title: "Gaya Anda", description: "Kecepatan, font, ukuran, warna, garis tepi, kursor, dan jeda di akhir." },
    { icon: "lock", title: "Tanpa upload", description: "Dibuat sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara membuat GIF teks mengetik?", a: "Ketik pesan Anda, klik Mulai, pilih kecepatan dan gayanya, lalu klik Buat GIF dan unduh." },
    { q: "Bisakah mengubah kecepatan mengetik?", a: "Bisa. Pilih 6, 10, 15, atau 25 huruf per detik." },
    { q: "Bisakah menghilangkan kursor berkedip?", a: "Bisa. Hapus centang Kursor berkedip." },
    { q: "Bisakah GIF berhenti setelah mengetik sekali?", a: "Bisa. Hapus centang Ulangi terus, dan GIF berhenti di teks yang sudah lengkap." },
    { q: "Bisakah memakai beberapa baris?", a: "Bisa. Tekan Enter untuk baris baru; baris panjang juga pindah sendiri." },
    { q: "Bisakah latarnya transparan?", a: "Bisa, tetapi huruf terlihat lebih halus di latar solid, karena transparansi GIF tidak punya tepi halus." },
    { q: "Bisakah teks diberi garis tepi?", a: "Bisa. Pilih warna garis tepi lalu geser Tebal garis tepi. Preset warna mengatur warna teks, latar, dan garis tepi sekaligus." },
    { q: "Apakah emoji bisa diketik?", a: "Bisa. Bahasa apa pun yang ditampilkan perangkat Anda bisa diketik, termasuk emoji." },
    { q: "Bisakah dipakai di README GitHub?", a: "Bisa. GIF tampil di README, tempat skrip dan animasi CSS tidak bisa berjalan." },
    { q: "Seberapa besar filenya?", a: "Biasanya kecil: setiap frame hanya menambahkan satu huruf. Teks panjang dengan ukuran besar memakan lebih banyak." },
    { q: "Apakah perlu meng-upload sesuatu?", a: "Tidak. GIF dibuat dari teks Anda di browser." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Bisakah dikirim lewat WhatsApp?", a: "Bisa. Unduh GIF-nya dan kirim seperti GIF lain; GIF diputar di chat." },
  ],

  security:
    "Teks Anda diubah menjadi GIF sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // TypingGifTool.tsx
    "Hello! This GIF types your text, letter by letter.": "Halo! GIF ini mengetik teks Anda, huruf demi huruf.",
    "What should the GIF type?": "Apa yang harus diketik GIF?",
    "Start": "Mulai",
    "Next you can change the speed, font, colours and cursor.": "Setelah ini Anda bisa mengubah kecepatan, font, warna, dan kursor.",
    "Preview": "Pratinjau",
    "Type some text to see the preview.": "Ketik teks untuk melihat pratinjau.",
    "Your GIF will appear here.": "GIF Anda akan muncul di sini.",
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "Working… {p}%": "Memproses… {p}%",
    "Text": "Teks",
    "Typing speed": "Kecepatan mengetik",
    "{n} letters/s": "{n} huruf/dtk",
    "Font": "Font", // i18n-same
    "Typewriter": "Mesin ketik",
    "Sans-serif": "Sans-serif", // i18n-same
    "Serif": "Serif", // i18n-same
    "Impact (meme)": "Impact (meme)", // i18n-same
    "Size": "Ukuran",
    "Width": "Lebar",
    "Alignment": "Perataan",
    "Left": "Kiri",
    "Centre": "Tengah",
    "Text colour": "Warna teks",
    "Background colour": "Warna latar",
    "Transparent background": "Latar transparan",
    "GIF transparency has no soft edges, so text looks smoothest on a solid background.": "Transparansi GIF tidak punya tepi halus, jadi teks paling rapi di latar solid.",
    "Outline colour": "Warna garis tepi",
    "Outline thickness": "Tebal garis tepi",
    "Colour presets": "Preset warna",
    "Classic Dark": "Gelap Klasik",
    "Clean Light": "Terang Bersih",
    "Midnight Neon": "Neon Tengah Malam",
    "Ocean Blue": "Biru Samudra",
    "Sunset Pop": "Senja Ceria",
    "Blinking cursor": "Kursor berkedip",
    "Pause at the end": "Jeda di akhir",
    "Repeat forever": "Ulangi terus",
    "Everything happens in your browser; nothing is uploaded.": "Semuanya terjadi di browser Anda; tidak ada yang di-upload.",
    "Typing Text GIF": "GIF Teks Mengetik",
    "Text settings": "Pengaturan teks",
    "Make GIF": "Buat GIF",
    "Output: {w} × {h} px": "Hasil: {w} × {h} px",
    "Download GIF": "Unduh GIF",
    "Saving…": "Menyimpan…",
  },
};

export default content;
