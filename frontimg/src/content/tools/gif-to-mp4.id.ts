import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/gif-ke-mp4. */
const content: ToolPageContent = {
  toolId: "gif-to-mp4",
  locale: "id",
  name: "GIF ke MP4",
  tagline:
    "Ubah GIF menjadi video MP4 — biasanya jauh lebih kecil, warnanya lebih halus, dan diterima di semua platform yang menerima video. Ulangi GIF pendek, pilih latar, unduh. Gratis, di browser.",
  category: { id: "gif", label: "GIF" },

  metaTitle: "GIF ke MP4 Online Gratis — Video Kecil dari GIF | oMyImage",
  metaDescription:
    "Ubah GIF ke MP4 online gratis. MP4 biasanya jauh lebih kecil dan bisa diputar di mana saja; ulangi GIF pendek dan pilih warna latar. Di browser, tanpa upload.",

  intro:
    "GIF adalah format lama: 256 warna per frame dan kompresi yang tidak pernah dirancang untuk gerakan. Video MP4 melakukan hal yang sama dengan ukuran jauh lebih kecil, dan itulah yang sebenarnya diminta Instagram, TikTok, dan kebanyakan aplikasi. Konverter GIF ke MP4 dari oMyImage mengubah GIF Anda menjadi MP4 H.264 memakai encoder video bawaan browser, mempertahankan durasi setiap frame, dan memungkinkan Anda mengulang animasi pendek agar videonya cukup panjang untuk diunggah.",

  sections: [
    {
      heading: "Kenapa mengubah GIF ke MP4",
      id: "why",
      body: [
        "Alasan utamanya ukuran. Kompresi video memperkirakan gerakan antar-frame dan menyimpan warna jauh lebih efisien, jadi animasi yang sama dalam MP4 biasanya beberapa kali lebih kecil daripada GIF — kadang sepuluh kali atau lebih untuk GIF yang detail atau berupa foto. Alat ini menampilkan kedua ukuran agar Anda bisa melihat bedanya untuk file Anda.",
        "Alasan kedua adalah tempat tujuannya. Instagram dan TikTok menerima unggahan video, bukan GIF; banyak aplikasi chat dan presentasi juga lebih baik menangani MP4. Bahkan situs yang menampilkan \"GIF\" sering diam-diam mengubahnya menjadi video.",
      ],
    },
    {
      heading: "Membuatnya berulang",
      id: "loop",
      body: [
        "GIF berulang dengan sendirinya; MP4 hanya berulang bila pemutarnya diatur begitu. Kebanyakan platform memutar video pendek sekali atau mengulang dengan caranya sendiri, dan klip yang terlalu pendek bisa ditolak atau terasa terpotong. Pilih 2×, 3×, atau 5× untuk mengulang animasi di dalam video, sehingga GIF satu detik menjadi beberapa detik putaran yang mulus.",
        "Panel menunjukkan berapa lama videonya dengan pilihan Anda, jadi Anda bisa menyesuaikan dengan durasi yang disukai platform.",
      ],
    },
    {
      heading: "Transparansi dan latar",
      id: "background",
      body: [
        "Video MP4 standar tidak punya transparansi, jadi area transparan GIF diisi warna latar — putih secara bawaan. Pilih warna halaman atau chat tempat video akan tampil, dan stiker atau logo transparan akan menyatu seolah-olah latarnya tidak ada.",
      ],
    },
    {
      heading: "Kualitas dan durasi",
      id: "quality",
      body: [
        "Setiap frame dikodekan dengan durasinya sendiri, jadi GIF dengan durasi tidak rata — misalnya jeda di frame terakhir — diputar persis seperti sebelumnya. Video dikodekan dengan bitrate yang longgar untuk ukurannya, sehingga warna polos dan teks tetap bersih.",
        "MP4 memiliki ukuran yang sama dengan GIF; bila lebar atau tingginya ganjil, satu baris atau kolom latar ditambahkan, karena video H.264 membutuhkan ukuran genap.",
      ],
    },
    {
      heading: "Dukungan browser",
      id: "browsers",
      body: [
        "Konversi memakai encoder video WebCodecs yang ada di browser modern. Chrome, Edge, dan Safari bisa membuat MP4 (H.264); bila browser Anda tidak bisa, alat ini memberi tahu alih-alih menghasilkan file rusak. MP4 yang dihasilkan bisa diputar di hampir semua HP, komputer, dan aplikasi.",
        "Tidak ada yang di-upload: GIF didekode dan video dikodekan di perangkat Anda, jadi GIF besar butuh waktu sedikit lebih lama di HP yang lambat.",
      ],
    },
    {
      heading: "MP4 untuk Reels, Story, dan status",
      id: "stories",
      body: [
        "Animasi pendek dalam MP4 mudah dipakai untuk Reels, Story, dan status WhatsApp, serta tidak seburam GIF saat diteruskan berkali-kali. Untuk Story, ulangi animasi pendek beberapa kali agar tidak lewat dalam sekejap.",
      ],
    },
    {
      heading: "MP4 di slide dan chat",
      id: "uses",
      body: [
        "PowerPoint, Keynote, dan Google Slides bisa menyisipkan video MP4, dan MP4 pendek membuat presentasi jauh lebih ringan daripada animasi yang sama dalam GIF. Atur video agar diputar otomatis dan berulang di aplikasi slide, dan hasilnya sama seperti GIF.",
        "Di chat, MP4 terkirim lebih cepat, lebih hemat kuota, dan lebih tahan saat diteruskan, karena aplikasi mengompres ulang GIF besar jauh lebih keras daripada video pendek.",
      ],
    },
    {
      heading: "Ukuran dan durasi",
      id: "length",
      body: [
        "Mengulang animasi di dalam video hampir tidak menambah ukuran, karena frame yang berulang dikompres sangat efisien oleh codec. Jadi 3× atau 5× untuk GIF pendek adalah pilihan yang wajar bila platform kurang suka video yang lebih pendek dari beberapa detik.",
      ],
    },
  ],

  howToTitle: "Cara mengubah GIF ke MP4",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih pengulangan dan latar", description: "Ulangi GIF pendek agar video berdurasi beberapa detik, lalu pilih latar untuk area transparan." },
    { title: "Ubah dan unduh", description: "Klik Ubah ke MP4, tonton pratinjaunya, lalu unduh videonya." },
  ],

  features: [
    { icon: "compress", title: "File jauh lebih kecil", description: "MP4 menyimpan animasi yang sama dengan sebagian kecil ukuran GIF." },
    { icon: "speed", title: "Durasi setiap frame tetap", description: "Jeda yang tidak rata diputar persis seperti di GIF." },
    { icon: "lock", title: "Tanpa upload", description: "Dikodekan oleh browser Anda sendiri; GIF tidak pernah keluar dari perangkat." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah GIF ke MP4?", a: "Tambahkan GIF, pilih berapa kali diputar dan warna latarnya, lalu klik Ubah ke MP4." },
    { q: "Apakah MP4 lebih kecil daripada GIF?", a: "Biasanya jauh lebih kecil — beberapa kali, sering lebih untuk GIF yang detail. Kedua ukuran ditampilkan setelah konversi." },
    { q: "Bisakah MP4-nya diunggah ke Instagram atau TikTok?", a: "Bisa. Aplikasi itu menerima video, bukan GIF. Ulangi GIF pendek agar videonya berdurasi beberapa detik." },
    { q: "Apakah MP4 akan berulang?", a: "Hanya bila pemutarnya mengulang. Pakai opsi pengulangan untuk mengulang animasi di dalam video." },
    { q: "Apa yang terjadi pada transparansi?", a: "MP4 tidak punya transparansi, jadi area transparan diisi warna latar pilihan Anda." },
    { q: "Kenapa tidak bisa di browser saya?", a: "Browser Anda tidak punya encoder video MP4. Gunakan Chrome, Edge, atau Safari." },
    { q: "Apakah MP4-nya ada suara?", a: "Tidak. GIF tidak punya suara, jadi videonya tanpa suara." },
    { q: "Apakah durasinya tetap?", a: "Ya. Setiap frame mempertahankan durasinya sendiri, termasuk jeda." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Konversi berlangsung sepenuhnya di browser Anda." },
    { q: "Bisakah mengubah beberapa GIF sekaligus?", a: "Satu per satu, agar setiap GIF punya pratinjau, jumlah pengulangan, dan latarnya sendiri." },
    { q: "Berapa lama konversinya?", a: "Biasanya beberapa detik. GIF panjang atau besar butuh waktu lebih lama, dan progresnya ditampilkan." },
  ],

  security:
    "GIF Anda didekode dan dikodekan menjadi video oleh browser Anda sendiri. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // GifToMp4Tool.tsx
    "Select a GIF": "Pilih GIF",
    "or drop a GIF here": "atau lepaskan GIF di sini",
    "Please select a GIF.": "Silakan pilih GIF.",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "MP4 settings": "Pengaturan MP4",
    "Convert to MP4": "Ubah ke MP4",
    "Download MP4": "Unduh MP4",
    "Saving…": "Menyimpan…",
    "Working… {p}%": "Memproses… {p}%",
    "Your MP4 will appear here.": "MP4 Anda akan muncul di sini.",
    "GIF": "GIF", // i18n-same
    "MP4": "MP4", // i18n-same
    "{n} frames": "{n} frame",
    "{s} s": "{s} dtk",
    "{p}% smaller": "{p}% lebih kecil",
    "{n}×": "{n}×", // i18n-same
    "Encoded by your browser as H.264 — plays everywhere.": "Dikodekan browser Anda sebagai H.264 — bisa diputar di mana saja.",
    "Play the animation": "Putar animasi",
    "Video doesn't loop by itself on most sites. Repeat a short GIF so the MP4 lasts a few seconds — {s} s now.":
      "Di kebanyakan situs video tidak berulang sendiri. Ulangi GIF pendek agar MP4 berdurasi beberapa detik — sekarang {s} dtk.",
    "Background for transparent areas": "Latar untuk area transparan",
    "Your GIF is converted in your browser and never uploaded.": "GIF Anda diubah di browser dan tidak pernah di-upload.",
  },
};

export default content;
