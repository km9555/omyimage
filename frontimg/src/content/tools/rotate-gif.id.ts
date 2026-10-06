import type { ToolPageContent } from "@/content/tools/types";
import cropper from "@/content/tools/gif-cropper.id";

/** Indonesian copy for /id/putar-gif. */
const content: ToolPageContent = {
  toolId: "rotate-gif",
  locale: "id",
  name: "Putar GIF",
  tagline:
    "Putar GIF animasi 90° ke kiri atau ke kanan atau 180°, atau balik seperti cermin — setiap frame diputar dengan cara yang sama dan animasinya tetap bergerak. Gratis, di browser.",
  category: { id: "optimize", label: "Optimalkan" },

  metaTitle: "Putar GIF Online Gratis — Rotate dan Mirror GIF | oMyImage",
  metaDescription:
    "Putar GIF animasi 90° atau 180°, atau balik horizontal dan vertikal, online gratis. Semua frame dan durasinya tetap. Di browser, tanpa upload.",

  intro:
    "GIF yang direkam dengan HP dalam posisi salah, atau potongan yang perlu dibalik agar menghadap ke arah lain, tidak bisa diperbaiki di kebanyakan editor tanpa kehilangan animasinya. Putar GIF dari oMyImage memutar seluruh animasi sekaligus: pilih 90° ke kiri, 90° ke kanan, atau 180°, tambahkan balik horizontal atau vertikal bila perlu, dan lihat pratinjaunya berubah saat Anda memilih. Setiap frame diputar dengan cara yang sama, durasi dan warna aslinya tetap, jadi hasilnya terlihat persis seperti aslinya — hanya posisinya yang benar.",

  sections: [
    {
      heading: "Kapan GIF perlu diputar",
      id: "when",
      body: [
        "HP merekam sesuai arah ia dipegang, dan tidak semua konverter GIF membaca informasi orientasi yang menyuruh pemutar memutar videonya. Akibatnya video yang direkam tegak bisa berubah jadi GIF yang miring. Rekaman layar dari monitor yang diputar, gambar animasi hasil scan, dan GIF yang disimpan dari aplikasi dengan crop aneh juga sering mengalami hal yang sama.",
        "Memutar memperbaiki filenya sendiri, bukan hanya cara satu aplikasi menampilkannya, jadi GIF tampil dengan posisi benar di mana pun Anda mengirim atau mengunggahnya.",
      ],
    },
    {
      heading: "Putar atau balik",
      id: "modes",
      body: [
        "Memutar memutar gambar di sekitar titik tengahnya: 90° ke kanan (searah jarum jam), 90° ke kiri (berlawanan arah jarum jam), atau 180° (terbalik). Putaran seperempat menukar lebar dan tinggi, jadi GIF 480 × 270 menjadi 270 × 480; putaran setengah tidak mengubah ukuran.",
        "Membalik mencerminkan gambar. Balik horizontal menukar kiri dan kanan — berguna bila seseorang harus menghadap ke dalam halaman atau ke arah keterangan — dan balik vertikal menukar atas dan bawah. Tulisan di GIF yang dibalik akan terbaca terbalik, jadi balik hanya bila itu tidak masalah.",
        "Putaran dan balik bisa digabung: misalnya 90° ditambah balik horizontal menghasilkan versi potret yang tercermin. Pratinjau menunjukkan gabungannya sebelum ada yang diproses.",
      ],
    },
    {
      heading: "Apa yang tetap sama",
      id: "kept",
      body: [
        "Setiap frame mempertahankan durasinya, jadi animasi diputar dengan kecepatan yang sama dan berulang persis seperti sebelumnya. Bagian transparan tetap transparan.",
        "Putaran kelipatan 90° memindahkan piksel tanpa mencampurnya, jadi tidak ada yang diambil ulang atau menjadi buram. Selama warna GIF muat dalam satu palet — begitulah kebanyakan GIF — warna yang sama ditulis kembali. GIF dari video kadang memakai palet per frame; GIF seperti itu mendapat satu palet bersama berisi 256 warna yang dipilih dari semua frame, dan bedanya hampir tidak terlihat.",
      ],
    },
    {
      heading: "Potret dan lanskap",
      id: "orientation",
      body: [
        "Klip HP yang miring, setelah diputar menjadi GIF tegak, lebih cocok untuk story, layar HP, dan obrolan, tempat animasi yang tinggi memenuhi lebih banyak ruang. Sebaliknya, klip potret yang diputar menjadi lanskap lebih pas di slide, situs web, dan banner berformat video.",
        "Bila hasilnya juga perlu bentuk tertentu — persegi untuk foto profil, misalnya — crop setelahnya dengan Crop GIF; bila perlu ukuran piksel yang pasti, pakai Ubah Ukuran GIF.",
      ],
    },
    {
      heading: "Ukuran file",
      id: "size",
      body: [
        "Memutar tidak menambah atau membuang piksel, jadi ukuran file biasanya tetap dekat dengan aslinya. Hasilnya bisa sedikit lebih besar atau lebih kecil, karena kompresi GIF bekerja baris demi baris dan gambar yang diputar punya baris yang berbeda. Untuk sengaja mengecilkannya, proses hasilnya dengan Kompres GIF.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF didekode, diputar, dan dienkode sepenuhnya di browser Anda. File tidak pernah di-upload dan tidak ada yang disimpan setelah halaman ditutup — video pribadi dan rekaman layar tetap di perangkat Anda.",
      ],
    },
    {
      heading: "Memutar gambar diam",
      id: "stills",
      body: [
        "Untuk foto JPG, PNG, dan WEBP, pakai Putar Foto: alat itu menangani banyak file sekaligus dan bisa memutar ke sudut berapa pun, bukan hanya kelipatan 90°. Putar GIF ada karena alat putar biasa hanya menyimpan frame pertama dari sebuah animasi.",
      ],
    },
    {
      heading: "GIF dari HP",
      id: "phone",
      body: [
        "GIF miring paling sering muncul ketika layar atau video direkam dengan HP dalam posisi mendatar lalu diubah jadi GIF. Sebelum mengirimnya lewat WhatsApp atau mengunggahnya, buka halaman ini langsung di browser HP, pilih putarannya, lalu unduh — file yang sudah diperbaiki tersimpan langsung di HP.",
      ],
    },
  ],

  howToTitle: "Cara memutar GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih putaran", description: "Pilih 90° ke kiri, 90° ke kanan, atau 180°, dan balik bila perlu; pratinjau langsung berubah." },
    { title: "Putar dan unduh", description: "Klik Putar GIF, bandingkan hasilnya dengan aslinya, lalu unduh." },
  ],

  features: [
    { icon: "rotate_90_degrees_cw", title: "Putar atau balik", description: "90° ke kiri atau kanan, 180°, serta balik horizontal atau vertikal." },
    { icon: "visibility", title: "Pratinjau langsung", description: "Lihat animasi yang sudah diputar sebelum diproses." },
    { icon: "lock", title: "Tanpa upload", description: "Diputar sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara memutar GIF animasi?", a: "Tambahkan GIF, pilih 90° ke kiri, 90° ke kanan, atau 180°, lalu klik Putar GIF. Setiap frame diputar dan animasinya tetap bergerak." },
    { q: "Bisakah membalik GIF secara horizontal?", a: "Bisa. Pilih Horizontal di bagian Balik untuk mencerminkannya kiri-kanan, dengan atau tanpa putaran." },
    { q: "Apakah GIF tetap beranimasi?", a: "Ya. Semua frame tetap ada dengan durasi aslinya, dan GIF berulang seperti sebelumnya." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Putaran 90° memindahkan piksel tanpa mencampurnya, dan warna asli dipakai lagi bila muat dalam satu palet." },
    { q: "Kenapa lebar dan tingginya tertukar?", a: "Putaran 90° membuat gambar berbaring, jadi GIF 480 × 270 menjadi 270 × 480. Putaran 180° tidak mengubah ukuran." },
    { q: "Bisakah memutar ke sudut bebas?", a: "Tidak di sini. Alat ini memutar per 90° agar setiap piksel tetap tajam; sudut lain akan membuat frame buram dan menambah sudut kosong." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan." },
    { q: "Apakah ukuran file berubah?", a: "Hanya sedikit. Tidak ada piksel yang ditambah atau dibuang, tetapi kompresinya bisa sedikit berbeda dengan arah yang baru." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. GIF diputar sepenuhnya di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP. GIF besar butuh waktu sedikit lebih lama di HP." },
    { q: "Bisakah memutar GIF yang berasal dari video?", a: "Bisa, seperti GIF lainnya. Untuk memutar videonya sendiri, ubah dulu jadi GIF dengan Video ke GIF." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Bisakah memutar dan membalik sekaligus?", a: "Bisa. Pilih putaran dan balik bersamaan; pratinjau menunjukkan hasil gabungannya." },
  ],

  security:
    "GIF Anda diputar sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifEditTool.tsx is shared with gif-cropper; each route only has its own
  // tool's ui in scope, so this page reuses the cropper's translations.
  ui: cropper.ui,
};

export default content;
