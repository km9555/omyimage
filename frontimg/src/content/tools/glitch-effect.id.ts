import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.id";

/** Indonesian copy for /id/efek-glitch-foto. */
const content: ToolPageContent = {
  toolId: "glitch-effect",
  locale: "id",
  name: "Efek Glitch",
  tagline:
    "Beri foto apa pun tampilan layar rusak yang glitch — pergeseran warna merah dan biru, irisan bergeser, dan garis pindai — dengan penggeser kekuatan dan tombol acak. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Efek Glitch Foto Online Gratis — Edit Foto Glitch | oMyImage",
  metaDescription:
    "Tambahkan efek glitch ke foto online gratis: pergeseran warna RGB, irisan bergeser, dan garis pindai, dengan penggeser kekuatan dan acak. Di browser, tanpa upload.",

  intro:
    "Tampilan glitch berasal dari perangkat yang rusak: sinyal video yang tergelincir, layar yang robek, warna yang saling menjauh. Kini gaya ini berdiri sendiri di sampul album, poster, thumbnail, dan foto profil. Efek Glitch dari oMyImage membangunnya dari tiga bahan yang bisa dinyalakan dan dimatikan — pergeseran warna, irisan bergeser, dan garis pindai — dengan satu penggeser kekuatan dan tombol yang mengacak irisan sampai komposisinya pas. Semuanya tampil di pratinjau sebelum diunduh.",

  sections: [
    {
      heading: "Tiga bahan",
      id: "parts",
      body: [
        "Pergeseran warna menarik kanal merah ke satu arah dan kanal biru ke arah lain, meninggalkan pinggiran berwarna di setiap tepi — bagian paling khas dari efek ini, seperti proyektor yang meleset. Irisan bergeser memotong pita-pita horizontal tipis dari gambar lalu mendorongnya ke samping, seolah sinyalnya melompat. Garis pindai menggelapkan pita secara berselang, tekstur monitor lama atau kaset VHS.",
        "Pakai ketiganya untuk glitch penuh, atau satu saja: pergeseran warna sendiri memberi potret tepi halus seperti kacamata 3D, dan irisan saja terlihat seperti cetakan digital yang robek.",
      ],
    },
    {
      heading: "Kekuatan dan acak",
      id: "strength",
      body: [
        "Kekuatan mengatur semuanya sekaligus: seberapa jauh warna bergeser, berapa banyak irisan yang bergerak dan seberapa jauh, serta seberapa gelap garis pindainya. Sekitar 20 sampai 40 memberi kesan rusak yang tipis; 70 ke atas terasa ramai dan kacau.",
        "Irisan ditempatkan secara acak. Bila sebuah pita jatuh di wajah atau menutupi detail penting, klik Acak irisan untuk susunan baru. Susunan itu tetap sampai Anda mengacak lagi, jadi pratinjau dan hasil unduhan selalu sama.",
      ],
    },
    {
      heading: "Cocok untuk apa",
      id: "uses",
      body: [
        "Gambar glitch cocok untuk artwork musik, thumbnail game dan teknologi, poster acara, desain cyberpunk dan vaporwave, serta foto profil yang perlu menonjol di daftar. Bentuk yang tegas dan kontras yang tinggi paling bagus menerima efek ini; foto yang terlalu ramai bisa berubah jadi derau. Teks tebal di gambar adalah sasaran yang bagus — pergeseran warna membuat huruf seolah bergetar.",
        "Agar glitch-nya bergerak, buat beberapa versi dengan acakan berbeda lalu gabungkan menjadi animasi pendek dengan GIF Maker.",
      ],
    },
    {
      heading: "Banyak gambar, satu gaya",
      id: "batch",
      body: [
        "Tambahkan beberapa gambar dan pengaturan serta susunan yang sama diterapkan ke semuanya, sesuai ukuran masing-masing, sehingga serangkaian postingan atau sampul punya gaya yang sama. JPG, PNG, dan WEBP didukung; hasilnya tetap dalam format asli kecuali Anda memilih yang lain, dan area transparan tetap transparan di PNG dan WEBP. Beberapa gambar terunduh bersama dalam ZIP.",
      ],
    },
    {
      heading: "Tips seni glitch",
      id: "tips",
      body: [
        "Letakkan objek utama sedikit di luar tengah, agar irisan memotong latar, bukan wajah. Gambar gelap dengan aksen terang paling bagus menampilkan pergeseran warna. Foto dengan kontras sedikit berlebih — coba Kecerahan & Kontras dulu — memberi hasil yang lebih tajam dan digital, dan menyimpan sebagai PNG menjaga tepi irisan dan pinggiran warna tetap tajam.",
      ],
    },
    {
      heading: "Glitch untuk thumbnail dan sampul",
      id: "covers",
      body: [
        "Di thumbnail video dan sampul playlist, glitch menarik perhatian bahkan dalam ukuran kecil, terutama di tepi huruf besar. Pakai kekuatan sedang dan periksa pratinjau yang diperkecil: detail yang terlalu halus akan hilang saat gambar tampil kecil di daftar.",
      ],
    },
    {
      heading: "Glitch dalam desain",
      id: "design",
      body: [
        "Dalam desain, glitch paling kuat sebagai aksen, bukan untuk semua gambar. Beri efek pada satu gambar di carousel, sampul lagu, atau pembuka video, dan biarkan sisanya bersih agar efeknya menonjol. Tambahkan teks dan logo setelah glitch bila harus tetap mudah dibaca; bila tulisan memang bagian dari gaya, tambahkan sebelumnya agar pergeseran warna ikut mengenai hurufnya.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Glitch diterapkan ke setiap gambar sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara menambahkan efek glitch ke foto",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Atur glitch-nya", description: "Atur kekuatan, pilih efeknya, dan acak irisan sampai terlihat pas." },
    { title: "Terapkan dan unduh", description: "Klik Terapkan glitch untuk mengunduh gambar, atau ZIP bila ada beberapa." },
  ],

  features: [
    { icon: "gradient", title: "Tiga efek glitch", description: "Pergeseran warna, irisan bergeser, dan garis pindai, masing-masing bisa dinyalakan." },
    { icon: "visibility", title: "Pratinjau langsung", description: "Lihat setiap perubahan seketika dan acak sampai pas." },
    { icon: "lock", title: "Tanpa upload", description: "Glitch diterapkan sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menambahkan efek glitch ke foto?", a: "Tambahkan foto, atur kekuatan, pilih efeknya, lalu klik Terapkan glitch." },
    { q: "Apa itu pergeseran warna?", a: "Bagian merah dan biru gambar yang bergeser ke arah berlawanan, meninggalkan pinggiran berwarna di tepi." },
    { q: "Bisakah mengubah letak irisan?", a: "Bisa. Klik Acak irisan untuk susunan acak yang baru." },
    { q: "Apakah hasil unduhan sama dengan pratinjau?", a: "Ya. Susunannya tetap sampai Anda mengacak, dan diskalakan ke gambar penuh." },
    { q: "Bisakah membuat glitch yang halus?", a: "Bisa. Pakai kekuatan 20 sampai 40, atau nyalakan pergeseran warna saja." },
    { q: "Bisakah membuat glitch bergerak?", a: "Buat beberapa versi dengan acakan berbeda, lalu gabungkan dengan GIF Maker." },
    { q: "Bisakah menerapkan glitch ke banyak gambar sekaligus?", a: "Bisa. Semuanya mendapat pengaturan yang sama dan terunduh dalam ZIP." },
    { q: "Apakah transparansi tetap ada?", a: "Ya, bila disimpan sebagai PNG atau WEBP." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun." },
    { q: "Gambar seperti apa yang paling cocok?", a: "Bentuk tegas, teks tebal, dan kontras tinggi. Foto yang terlalu ramai bisa berubah jadi derau." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Sebaiknya disimpan dalam format apa?", a: "PNG menjaga tepi irisan dan pinggiran warna tetap tajam; JPG sedikit melembutkannya." },
    { q: "Apakah cocok untuk foto profil?", a: "Cocok. Kekuatan sedang dengan pergeseran warna saja tetap terbaca, bahkan di foto profil bulat yang kecil." },
  ],

  security:
    "Glitch diterapkan ke gambar Anda sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
