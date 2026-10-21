import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-foto-ke-9-16 (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "9-16-aspect-ratio-image",
  locale: "id",
  name: "Ubah Foto ke Rasio 9:16 (1080×1920)",
  tagline:
    "Jadikan foto, screenshot, atau gambar AI apa pun berasio 9:16 dengan ukuran tepat 1080 × 1920 piksel — dipotong, diberi pinggiran, atau diberi latar blur, tanpa ditarik. Gratis, langsung di browser.",
  category: { id: "optimize", label: "Optimasi" },
  crossLink: { lead: "Lebar foto kurang dari 1080 piksel?", label: "Perbesar resolusinya dulu", toolId: "upscale-image" },

  metaTitle: "Ubah Foto ke Rasio 9:16 (1080x1920) Online Gratis | oMyImage",
  metaDescription:
    "Ubah foto ke rasio 9:16, tepat 1080x1920 px, untuk Story, Reels, TikTok, YouTube Shorts, dan Web Stories. Potong, beri pinggiran, atau latar blur. Gratis.",

  intro:
    "Story dan Reels Instagram, TikTok, YouTube Shorts, status WhatsApp, dan Web Stories Google sama-sama memenuhi layar HP yang dipegang tegak, dan semuanya meminta bentuk yang sama: rasio 9:16, idealnya 1080 × 1920 piksel. Kebanyakan foto tidak berbentuk begitu. Foto landscape, gambar AI yang persegi, atau foto 4:3 dari HP akan dipotong aplikasi sesukanya, atau dijepit di antara garis hitam. Alat ini langsung terbuka di ukuran 1080 × 1920. Tambahkan gambar, pilih cara tiap gambar menjadi 9:16 — dipotong, diberi pinggiran berwarna, atau sisa ruangnya diisi salinan buram dari foto itu sendiri — lalu unduh file yang memenuhi layar dari ujung ke ujung.",

  sections: [
    {
      heading: "Apa itu rasio 9:16",
      id: "ratio",
      body: [
        "Rasio aspek (aspect ratio) adalah bentuk gambar, ditulis lebar : tinggi. 9:16 berarti sembilan bagian lebar untuk setiap enam belas bagian tinggi — persegi panjang yang tinggi, persis bentuk layar HP saat dipegang tegak. Ini sama dengan format layar lebar 16:9 milik TV dan video YouTube, hanya diputar berdiri. Bagi 9 dengan 16 dan hasilnya 0,5625; gambar apa pun yang lebarnya dibagi tingginya menghasilkan 0,5625 berarti 9:16, berapa pun ukurannya.",
        "Rasio saja tidak menentukan ketajaman. 720 × 1280, 1080 × 1920, dan 2160 × 3840 semuanya 9:16; bedanya hanya jumlah piksel yang membawa gambar. Karena itu gambar 9:16 tetap bisa terlihat buram: bentuknya benar, tetapi pikselnya terlalu sedikit untuk layar besar.",
      ],
    },
    {
      heading: "Kenapa 1080 × 1920 piksel jadi standar",
      id: "pixels",
      body: [
        "1080 × 1920 (sering ditulis 1080x1920) adalah Full HD yang diberdirikan: lebar 1080 piksel, tinggi 1920 piksel, sekitar 2,1 megapiksel. Ukuran inilah yang disarankan aplikasi video vertikal besar untuk postingan layar penuh, dan ukuran yang dipakai HP saat merekam video Full HD dalam posisi tegak. Unggah yang lebih besar, aplikasi akan mengecilkannya; unggah yang lebih kecil, aplikasi akan memperbesarnya — dan di situlah gambar mulai buram.",
        "Disimpan sebagai JPG dengan kualitas bawaan 92%, foto 1080 × 1920 biasanya hanya beberapa ratus kilobyte: cukup ringan untuk formulir unggah mana pun, dengan detail yang lebih dari cukup untuk layar.",
      ],
    },
    {
      heading: "Di mana gambar 9:16 dipakai",
      id: "uses",
      body: [
        "Story dan Reels Instagram: Story memenuhi layar di 1080 × 1920. Reels diputar di ukuran yang sama, tetapi grid profil Anda menampilkan pratinjau yang terpotong, jadi letakkan objek utama di tengah. Meta menyarankan menyisakan sekitar 14% di atas dan bawah — kira-kira 250 piksel — tanpa teks, karena nama profil dan kolom balasan muncul di sana.",
        "TikTok, YouTube Shorts, dan Snack Video lahir sebagai format vertikal, dan semuanya menaruh tombol di sisi kanan serta keterangan di bagian bawah. Taruh semua yang penting di bagian tengah agak atas dari slide atau sampul 1080 × 1920. Status WhatsApp, Snapchat, dan Story Facebook juga memenuhi layar dengan cara yang sama.",
        "Web Stories Google: setiap halaman Web Story adalah layar vertikal penuh tanpa tepi, dan 9:16 di 1080 × 1920 adalah bentuk yang mengisinya tanpa garis hitam. Kalau semua halaman berukuran sama, cerita juga tidak \"melompat\" saat pembaca mengetuk untuk lanjut. Gambar poster cerita punya bentuk lain — 3:4, minimal 640 × 853 piksel — jadi buat terpisah.",
      ],
      link: {
        label: "Baca panduannya (dalam bahasa Inggris): Google Web Stories dengan gambar AI — ukuran, kecepatan, dan aturan Google",
        href: "/blog/google-web-stories-ai-images",
      },
    },
    {
      heading: "Wallpaper HP 1080 × 1920",
      id: "wallpaper",
      body: [
        "Banyak orang mencari 1080x1920 untuk dijadikan wallpaper HP. Bisa, dengan satu catatan: kebanyakan HP keluaran sejak 2018 punya layar yang lebih tinggi dari 9:16, sekitar 9:19,5 atau 9:20. Di HP seperti itu, gambar 9:16 diperbesar agar menutup seluruh layar dan sedikit terpotong di kiri-kanan. Selama objek utamanya di tengah, wallpaper tetap terlihat bagus di HP mana pun.",
      ],
    },
    {
      heading: "Cara mengubah foto jadi 9:16 tanpa ditarik",
      id: "convert",
      body: [
        "Menarik gambar sampai 1080 × 1920 membuat wajah jadi lonjong dan lingkaran jadi oval, jadi alat ini tidak pernah melakukannya. Gambar berbentuk lain menjadi 9:16 lewat salah satu dari tiga cara yang jujur, dan Anda memilih yang cocok dengan gambarnya.",
        "Isi penuh (bawaan) memperbesar gambar sampai menutup seluruh bingkai 9:16 lalu memotong sisanya. Cocok untuk foto potret: foto 3:4 dari HP hanya kehilangan seperempat lebarnya. Untuk foto landscape terasa berat — foto 4:3 hanya menyisakan 42% lebarnya — jadi tekan dulu tombol potong di kartu gambar. Jendela potong terbuka dengan rasio terkunci di 9:16, dan Anda menggeser bingkai ke bagian yang penting, bukan sekadar mendapat bagian tengah.",
        "Beri pinggiran mempertahankan gambar utuh dan mengisi bidang di atas dan bawah dengan warna pilihan Anda — hitam, putih, atau warna brand. Latar blur juga mempertahankan gambar utuh, tetapi mengisi bidang itu dengan salinan foto yang sama, diperbesar dan dibuat buram — tampilan yang dipakai Reels dan TikTok untuk video landscape. Biasanya ini pilihan terbaik untuk foto lebar, screenshot, dan slide: tidak ada yang hilang dan layar tetap terasa penuh.",
      ],
    },
    {
      heading: "Agar hasilnya tetap tajam",
      id: "sharp",
      body: [
        "Memotong gambar landscape ke 9:16 menyisakan potongan sempit yang lebarnya sering kurang dari 1080 piksel. Screenshot 1920 × 1080 yang dipotong ke 9:16 hanya tinggal 608 × 1080, dan harus diperbesar hampir dua kali untuk mencapai 1080 × 1920. Latar blur menghindari itu: gambar tampil selebar 1080 piksel penuh, dan screenshot selebar 1920 piksel mengisinya tanpa diperbesar sama sekali. Untuk gambar yang memang kecil, perbesar dulu dengan AI sebelum diubah.",
        "Generator gambar AI jarang menghasilkan 9:16 di ukuran penuh. Banyak yang bawaannya persegi, opsi tegak ChatGPT berukuran 1024 × 1536 (rasio 2:3), dan 9:16 dari Midjourney sekitar 816 × 1456. Potong atau beri latar blur di sini; agar lebih tajam, perbesar dulu gambar yang 816 × 1456.",
      ],
    },
  ],

  howToTitle: "Cara mengubah foto ke 9:16 (1080 × 1920)",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa file JPG, PNG, WEBP, GIF, atau BMP — foto, screenshot, atau gambar AI." },
    { title: "Pilih cara menyesuaikan", description: "1080 × 1920 sudah terpasang. Pilih Isi penuh, Beri pinggiran, atau Latar blur; untuk memotong sendiri, pakai tombol potong di kartu gambar." },
    { title: "Unduh", description: "Tekan Ubah ukuran & unduh untuk mendapat gambar 9:16, atau satu ZIP jika gambarnya banyak." },
  ],

  features: [
    { icon: "crop_portrait", title: "Tepat 1080 × 1920", description: "Setiap gambar keluar di ukuran 9:16 Full HD yang diharapkan Story, Reels, Shorts, dan Web Stories." },
    { icon: "blur_on", title: "Potong, pinggiran, atau blur", description: "Tiga cara mengubah bentuk tanpa menarik gambar, termasuk latar blur dari foto Anda sendiri." },
    { icon: "lock", title: "Berjalan di browser", description: "Gambar Anda diubah di perangkat Anda sendiri dan tidak diunggah." },
  ],

  faqs: [
    { q: "Apa itu rasio 9:16?", a: "Persegi panjang yang tinggi: sembilan bagian lebar untuk setiap enam belas bagian tinggi — bentuk layar HP saat dipegang tegak. Ini format 16:9 yang diputar 90 derajat." },
    { q: "Berapa ukuran foto 9:16 dalam piksel?", a: "1080 × 1920 adalah standarnya. 720 × 1280 dan 2160 × 3840 juga 9:16, dengan piksel lebih sedikit atau lebih banyak; kebanyakan aplikasi menyarankan 1080 × 1920." },
    { q: "Apakah 1080x1920 sama dengan 9:16?", a: "Ya. 1080 dibagi 1920 hasilnya 0,5625, persis 9 dibagi 16. Setiap gambar 1080 × 1920 berasio 9:16." },
    { q: "Bagaimana cara mengubah foto ke 9:16 tanpa ditarik?", a: "Tambahkan di sini lalu pilih Isi penuh, Beri pinggiran, atau Latar blur. Ketiganya menghasilkan tepat 1080 × 1920 dengan proporsi gambar tetap terjaga; tidak ada yang menarik gambar." },
    { q: "Bisakah saya memilih bagian foto yang dipertahankan?", a: "Bisa. Saat Isi penuh dipilih, tekan tombol potong di kartu gambar. Jendelanya terbuka terkunci di 9:16; geser bingkai ke objek utama lalu terapkan." },
    { q: "Apa bedanya 9:16 dan 16:9?", a: "Arahnya. 16:9 melebar (TV, video YouTube, layar laptop); 9:16 adalah bentuk yang sama dalam posisi berdiri (Story, Reels, Shorts, layar HP)." },
    { q: "Kenapa gambar 9:16 saya jadi buram?", a: "Biasanya gambar aslinya kekurangan piksel: potongan sempit dari foto landscape diperbesar sampai 1080 × 1920. Pakai Latar blur, atau perbesar resolusi gambarnya dulu." },
    { q: "Ukuran berapa untuk status WhatsApp?", a: "WhatsApp tidak menyebut ukuran resmi, tetapi status tampil layar penuh dalam 9:16, jadi 1080 × 1920 adalah pilihan paling aman." },
    { q: "Apakah Instagram akan memotong foto 9:16 saya?", a: "Di Story tidak, karena Story menampilkan 9:16 secara utuh. Reels juga diputar layar penuh, tetapi pratinjaunya di grid profil terpotong, jadi letakkan objek di tengah." },
    { q: "Bisakah dipakai untuk wallpaper HP?", a: "Bisa. Di HP yang layarnya lebih tinggi dari 9:16, sistem sedikit memperbesar gambar dan memotong tepi kiri-kanannya; letakkan objek utama di tengah." },
    { q: "Bisakah mengubah banyak foto ke 9:16 sekaligus?", a: "Bisa. Tambahkan semuanya bersamaan; tiap gambar menjadi 1080 × 1920 dengan cara yang Anda pilih, lalu diunduh dalam satu ZIP." },
    { q: "Apakah foto saya diunggah untuk diubah?", a: "Tidak. Prosesnya berjalan di browser Anda. Hanya gambar yang terlalu besar untuk dibuka browser yang dikecilkan dulu di server kami, lalu langsung dihapus." },
  ],

  security:
    "Gambar Anda diubah di browser dan tidak diunggah. Hanya gambar yang terlalu besar untuk browser — foto dengan megapiksel sangat tinggi — yang dikirim ke server kami untuk dikecilkan, lalu dihapus begitu dikembalikan; tidak ada yang disimpan.",
};

export default content;
