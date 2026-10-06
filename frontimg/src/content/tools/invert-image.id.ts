import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/invert-warna-foto. */
const content: ToolPageContent = {
  toolId: "invert-image",
  locale: "id",
  name: "Invert Warna Foto",
  tagline:
    "Balik warna foto apa pun — negatif klasik, atau invert pintar yang menukar terang dan gelap tetapi tetap mempertahankan warnanya. Banyak gambar sekaligus. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Invert Warna Foto Online Gratis — Foto Negatif | oMyImage",
  metaDescription:
    "Balik warna gambar online gratis: jadikan foto negatif, atau tukar terang dan gelap sambil mempertahankan rona warna. JPG, PNG, dan WEBP, banyak sekaligus. Di browser, tanpa upload.",

  intro:
    "Membalik warna gambar mengubah setiap warna menjadi kebalikannya: hitam jadi putih, biru jadi oranye, dan foto terlihat seperti negatif film. Invert Warna Foto dari oMyImage melakukannya dengan satu klik untuk file JPG, PNG, dan WEBP, dan menyediakan mode kedua yang tidak ada di kebanyakan alat — Invert pintar, yang menukar terang dan gelap tetapi mempertahankan rona setiap warna, seperti mode gelap di HP. Tambahkan satu gambar atau sekumpulan, lihat pratinjau langsung, tahan tombol untuk membandingkan dengan aslinya, lalu unduh.",

  sections: [
    {
      heading: "Negatif atau invert pintar",
      id: "modes",
      body: [
        "Negatif membalik setiap kanal warna: setiap nilai menjadi 255 dikurangi nilai itu sendiri. Putih jadi hitam, merah jadi sian, hijau jadi magenta, dan kulit menjadi biru keabu-abuan — tampilan negatif film atau foto rontgen. Membalik hasilnya sekali lagi mengembalikan gambar asli persis sama.",
        "Invert pintar hanya membalik kecerahan. Bagian gelap menjadi terang dan bagian terang menjadi gelap, tetapi merah tetap merah dan biru tetap biru. Inilah pilihan yang tepat untuk mengubah screenshot atau dokumen putih menjadi versi gelap tanpa warnanya jadi aneh, dan untuk memberi suasana malam pada foto.",
      ],
    },
    {
      heading: "Kegunaannya",
      id: "uses",
      body: [
        "Buat versi mode gelap dari screenshot, diagram, atau slide agar serasi di situs atau presentasi yang gelap. Balik gambar berlatar hitam menjadi putih sebelum dicetak untuk menghemat tinta dan toner. Ubah negatif hitam-putih hasil scan kembali menjadi foto positif. Buat karya seni, poster, dan foto profil yang mencolok dengan tampilan terbalik.",
        "Desainer juga membalik gambar untuk memeriksa komposisi: setelah warna yang sudah akrab hilang, masalah keseimbangan dan kontras lebih mudah terlihat.",
      ],
    },
    {
      heading: "Negatif film hasil scan",
      id: "negatives",
      body: [
        "Negatif hitam-putih bisa langsung menjadi positif. Negatif berwarna lebih rumit: filmnya punya dasar oranye, jadi pembalikan langsung menghasilkan rona biru yang kuat. Balik dulu, lalu pakai Kecerahan & Kontras untuk mencerahkan gambar dan menurunkan saturasi, atau ubah dengan Foto Hitam Putih bila warna tidak penting.",
      ],
    },
    {
      heading: "Transparansi dan format",
      id: "formats",
      body: [
        "Hanya warnanya yang dibalik; transparansi tetap persis seperti semula, jadi logo berlatar transparan tetap logo berlatar transparan. PNG dan WEBP mempertahankan transparansi itu; JPG tidak punya transparansi, jadi area transparan diisi warna latar yang Anda pilih.",
        "Hasilnya tetap dalam format asli kecuali Anda memilih format lain. PNG menyimpan piksel yang dibalik secara persis; JPG dan WEBP memakai pengaturan kualitas, yang bisa dinaikkan bila detail halus penting.",
      ],
    },
    {
      heading: "Banyak gambar sekaligus",
      id: "batch",
      body: [
        "Tambahkan gambar sebanyak yang Anda mau. Pratinjau menampilkan gambar pertama, dan mode yang sama diterapkan ke semuanya saat Anda mengeklik Balik warna. Satu gambar langsung terunduh; beberapa gambar datang dalam satu file ZIP. Setiap file di daftar juga mendapat tombol unduhnya sendiri setelah selesai.",
      ],
    },
    {
      heading: "Membalik logo dan ikon",
      id: "logos",
      body: [
        "Logo gelap yang hilang di situs gelap menjadi logo terang setelah dibalik — asalkan logonya satu warna gelap. Logo berwarna-warni juga ikut berubah warna, jadi Invert pintar, yang mempertahankan rona, sering lebih cocok. Periksa pratinjau terhadap latar tempat logo akan dipasang sebelum mengunduh.",
      ],
    },
    {
      heading: "Mencetak screenshot gelap",
      id: "print",
      body: [
        "Screenshot aplikasi dalam mode gelap memakan banyak tinta dan terlihat berat di kertas. Balik dengan Invert pintar sebelum dicetak: latarnya jadi putih, teksnya gelap, dan bagian berwarna tetap mudah dikenali.",
      ],
    },
    {
      heading: "Untuk desain dan pemeriksaan",
      id: "design",
      body: [
        "Membalik warna juga membantu saat mengerjakan desain. Setelah warnanya terbalik, gambar yang sudah akrab terasa asing, sehingga komposisi yang miring, sudut yang terlalu gelap, dan noda yang sebelumnya luput jadi lebih mudah terlihat. Untuk diagram dan bagan berlatar putih, Invert pintar memberi versi gelap yang nyaman dibaca di layar pada malam hari.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Setiap gambar dibalik sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara membalik warna gambar",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Pilih mode", description: "Negatif untuk kebalikan sesungguhnya, Invert pintar untuk mempertahankan rona." },
    { title: "Balik dan unduh", description: "Klik Balik warna untuk mengunduh gambar, atau ZIP bila ada beberapa." },
  ],

  features: [
    { icon: "dark_mode", title: "Dua jenis invert", description: "Negatif penuh, atau terang dan gelap ditukar dengan rona tetap." },
    { icon: "visibility", title: "Pratinjau langsung", description: "Lihat hasilnya seketika dan tahan untuk membandingkan dengan aslinya." },
    { icon: "lock", title: "Tanpa upload", description: "Dibalik sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara membalik warna gambar?", a: "Tambahkan gambar, biarkan Negatif terpilih, lalu klik Balik warna. Gambar yang dibalik langsung terunduh." },
    { q: "Apa bedanya Negatif dan Invert pintar?", a: "Negatif mengubah setiap warna menjadi kebalikannya. Invert pintar hanya menukar terang dan gelap, jadi warna tetap pada ronanya." },
    { q: "Bisakah membuat screenshot mode gelap?", a: "Bisa. Invert pintar membuat screenshot putih menjadi gelap, dan elemen berwarna tetap mudah dikenali." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. Hanya warna yang berubah; simpan sebagai PNG atau WEBP untuk mempertahankan area transparan." },
    { q: "Bisakah membalik banyak gambar sekaligus?", a: "Bisa. Tambahkan semuanya; hasilnya terunduh bersama dalam satu ZIP." },
    { q: "Bisakah mendapatkan gambar asli kembali?", a: "Membalik Negatif sekali lagi mengembalikannya. Untuk hasil yang persis, simpan sebagai PNG." },
    { q: "Bisakah mengubah negatif film menjadi foto?", a: "Bisa untuk negatif hitam-putih. Negatif berwarna perlu sedikit koreksi warna setelahnya." },
    { q: "Format apa saja yang didukung?", a: "JPG, PNG, dan WEBP sebagai masukan; hasilnya format yang sama atau yang Anda pilih." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun." },
    { q: "Apakah kualitasnya turun?", a: "PNG persis sama. JPG dan WEBP disimpan ulang dengan kualitas yang Anda pilih." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah ini bisa menghemat tinta saat mencetak?", a: "Bisa. Balik screenshot dan gambar berlatar gelap sebelum dicetak agar kertasnya tetap putih." },
  ],

  security:
    "Gambar Anda dibalik sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // FxTool.tsx — shared with pixelate-image, image-brightness, glitch-effect
    // and round-corners, whose modules reuse this block.
    "or drop JPG, PNG or WEBP images here": "atau lepaskan gambar JPG, PNG, atau WEBP di sini",
    "Preview": "Pratinjau",
    "Live preview of": "Pratinjau langsung:",
    "— applied to all {n} images.": "— diterapkan ke semua {n} gambar.",
    "Hold to see the original": "Tahan untuk melihat aslinya",
    "done": "selesai",
    "Done — 1 image saved.": "Selesai — 1 gambar disimpan.",
    "Done — {n} images saved.": "Selesai — {n} gambar disimpan.",
    "Output format": "Format hasil",
    "Same as original": "Sama dengan asli",
    "JPG background": "Latar JPG",
    "Your images are processed in your browser and never uploaded.": "Gambar Anda diproses di browser dan tidak pernah di-upload.",
    // invert
    "Invert": "Invert", // i18n-same — the term Indonesian users search for
    "Invert colours": "Balik warna",
    "Negative": "Negatif",
    "Smart invert": "Invert pintar",
    "Every colour becomes its opposite, like a film negative.": "Setiap warna menjadi kebalikannya, seperti negatif film.",
    "Light and dark swap but colours keep their hue — a dark-mode look.": "Terang dan gelap bertukar, tetapi warna tetap pada ronanya — seperti mode gelap.",
    // pixelate
    "Pixelate image": "Pixelate foto",
    "Block size": "Ukuran blok",
    "About {n} blocks along the longer side.": "Sekitar {n} blok di sisi yang lebih panjang.",
    // adjust
    "Brightness": "Kecerahan",
    "Contrast": "Kontras",
    "Saturation": "Saturasi",
    "Apply adjustments": "Terapkan",
    // glitch
    "Strength": "Kekuatan",
    "Colour split": "Pergeseran warna",
    "Shifted slices": "Irisan bergeser",
    "Scan lines": "Garis pindai",
    "Shuffle the slices": "Acak irisan",
    "Apply glitch": "Terapkan glitch",
    // corners
    "Corner radius": "Radius sudut",
    "A share of the shorter side. 50% makes a pill, or a circle for square images.": "Bagian dari sisi yang lebih pendek. 50% membuat bentuk kapsul, atau lingkaran untuk gambar persegi.",
    "Corners": "Sudut",
    "Top left": "Kiri atas",
    "Top right": "Kanan atas",
    "Bottom left": "Kiri bawah",
    "Bottom right": "Kanan bawah",
    "Corner background": "Latar sudut",
    "JPG has no transparency, so the corners are filled with the background colour.": "JPG tidak punya transparansi, jadi sudutnya diisi dengan warna latar.",
    "Round the corners": "Lengkungkan sudut",
  },
};

export default content;
