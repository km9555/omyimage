import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.id";

/** Indonesian copy for /id/sudut-melengkung-foto. */
const content: ToolPageContent = {
  toolId: "round-corners",
  locale: "id",
  name: "Sudut Melengkung",
  tagline:
    "Buat sudut gambar melengkung — radius berapa pun, sudut mana pun — dengan tepi transparan di PNG atau warna latar pilihan Anda. Banyak gambar sekaligus. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Sudut Melengkung Foto Online Gratis — Rounded Corner PNG | oMyImage",
  metaDescription:
    "Lengkungkan sudut gambar online gratis: pilih radius dan sudut mana saja, biarkan tepinya transparan sebagai PNG atau isi dengan warna. Di browser, tanpa upload.",

  intro:
    "Sudut melengkung membuat gambar terlihat rapi dan selesai: ikon aplikasi, kartu situs web, slide, dan postingan media sosial selalu memakainya. Sudut Melengkung dari oMyImage memotong sudut gambar JPG, PNG, dan WEBP sesuai radius pilihan Anda, di keempat sudut atau hanya sebagian, dan membiarkan bagian yang terpotong transparan sehingga gambar tampil bersih di latar apa pun. Lihat pratinjau berubah saat Anda menggeser, lalu unduh satu gambar atau sekumpulan.",

  sections: [
    {
      heading: "Memilih radius",
      id: "radius",
      body: [
        "Radius diatur sebagai bagian dari sisi gambar yang lebih pendek, jadi pengaturan yang sama memberi tampilan yang sama pada ikon kecil maupun banner besar. Sekitar 5 sampai 10 persen adalah lengkungan halus kartu situs web; 15 sampai 25 persen terlihat seperti ikon aplikasi; 50 persen mengubah persegi panjang menjadi bentuk kapsul dan gambar persegi menjadi lingkaran sempurna.",
        "Hapus centang sudut untuk melengkungkan sebagian saja — dua sudut atas untuk tab atau kepala kartu, atau satu sudut untuk bentuk balon percakapan atau label.",
      ],
    },
    {
      heading: "Sudut transparan atau berwarna",
      id: "background",
      body: [
        "Sudut transparan butuh format yang mendukung transparansi, jadi hasilnya PNG secara bawaan; WEBP juga bisa dan lebih kecil. Bila gambar akan dipasang di halaman, slide, atau dokumen dengan latar yang sudah diketahui, Anda bisa mengisi sudutnya dengan warna itu, sehingga bisa juga disimpan sebagai JPG.",
        "JPG sama sekali tidak menyimpan transparansi. Saat JPG dipilih, sudutnya diisi warna latar, putih kecuali Anda memilih warna lain.",
      ],
    },
    {
      heading: "Di mana sudut melengkung membantu",
      id: "uses",
      body: [
        "Screenshot bersudut melengkung tampak rapi di dokumentasi, postingan, dan slide. Foto produk dan potret tim terlihat lebih ramah di situs web. Ikon aplikasi dan game butuh persegi melengkung; foto profil sering paling bagus dalam bentuk lingkaran. Thumbnail di grid terlihat lebih rapi dengan radius yang sama — tambahkan seluruh set sekaligus dan semuanya akan seragam.",
      ],
    },
    {
      heading: "Lingkaran dan bentuk lain",
      id: "shapes",
      body: [
        "Radius 50 persen pada gambar persegi menghasilkan lingkaran yang pas. Untuk lingkaran dari foto persegi panjang, sambil memilih bagian mana yang masuk, pakai Crop Foto Bulat, yang memungkinkan Anda menggeser dan mengubah ukuran lingkarannya. Untuk menambahkan bingkai atau tepi berwarna di sekeliling gambar yang sudah melengkung, pakai Bingkai Foto setelahnya.",
      ],
    },
    {
      heading: "Banyak gambar sekaligus",
      id: "batch",
      body: [
        "Tambahkan gambar sebanyak yang Anda perlukan; radius dan sudut yang sama diterapkan ke setiap gambar sesuai ukurannya. Pratinjau menampilkan gambar pertama, setiap file mendapat tombol unduhnya sendiri setelah selesai, dan beberapa gambar terunduh bersama dalam satu file ZIP.",
      ],
    },
    {
      heading: "Sudut seragam di seluruh desain",
      id: "consistency",
      body: [
        "Pakai radius yang sama di seluruh desain: kartu, tombol, dan gambar dengan lengkungan yang sama terlihat menyatu. Karena radius di sini adalah bagian dari sisi yang lebih pendek, satu pengaturan membuat seluruh kumpulan serasi secara proporsional. Untuk radius yang sama dalam piksel pada gambar berbeda ukuran, samakan dulu ukurannya dengan Ubah Ukuran Foto.",
      ],
    },
    {
      heading: "Foto profil dan ikon",
      id: "avatars",
      body: [
        "Untuk foto profil, pakai foto persegi dan radius 50 persen — hasilnya lingkaran dengan sudut transparan yang cocok di latar aplikasi chat atau situs mana pun. Untuk ikon aplikasi, mulai dari 20 sampai 25 persen lalu bandingkan dengan ikon lain di layar.",
      ],
    },
    {
      heading: "Slide dan dokumen",
      id: "slides",
      body: [
        "Di presentasi dan dokumen, gambar bersudut melengkung terlihat lebih rapi di samping kartu, tombol, dan bingkai yang juga bersudut lembut. Bila slide-nya putih atau satu warna, isi sudut dengan warna latar itu dan simpan sebagai JPG — filenya lebih kecil dan di slide tidak terlihat bedanya. Untuk situs web dan tema gelap, PNG atau WEBP transparan lebih aman karena cocok di latar apa pun.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Sudut setiap gambar dilengkungkan sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara melengkungkan sudut gambar",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Atur radius", description: "Geser penggeser radius, pilih sudut dan latarnya." },
    { title: "Lengkungkan dan unduh", description: "Klik Lengkungkan sudut untuk mengunduh PNG, atau ZIP bila ada beberapa." },
  ],

  features: [
    { icon: "rounded_corner", title: "Radius bebas", description: "Dari tepi halus sampai kapsul atau lingkaran, di sudut yang Anda pilih." },
    { icon: "visibility", title: "Tepi transparan", description: "PNG dan WEBP menjaga sudutnya tetap tembus pandang." },
    { icon: "lock", title: "Tanpa upload", description: "Dilengkungkan sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara melengkungkan sudut gambar?", a: "Tambahkan gambar, atur radius, lalu klik Lengkungkan sudut. PNG dengan sudut transparan langsung terunduh." },
    { q: "Kenapa hasilnya PNG?", a: "Sudut transparan butuh PNG atau WEBP. Pilih JPG untuk mengisi sudut dengan warna." },
    { q: "Bisakah melengkungkan sebagian sudut saja?", a: "Bisa. Hapus centang sudut yang ingin tetap lurus." },
    { q: "Bagaimana membuat lingkaran?", a: "Pakai radius 50% pada gambar persegi. Untuk foto lain, Crop Foto Bulat memungkinkan Anda mengatur posisi lingkaran." },
    { q: "Bisakah sudutnya berwarna, bukan transparan?", a: "Bisa. Pilih warna latar, atau simpan sebagai JPG." },
    { q: "Bisakah memproses banyak gambar sekaligus?", a: "Bisa. Radius yang sama diterapkan ke setiap gambar, dan hasilnya terunduh dalam ZIP." },
    { q: "Berapa radius ikon aplikasi?", a: "Sekitar 20 sampai 25 persen dari sisinya untuk tampilan persegi melengkung yang modern." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. PNG menyimpan setiap piksel; hanya sudutnya yang dipotong." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun." },
    { q: "Bisakah menambahkan bingkai juga?", a: "Bisa. Pakai Bingkai Foto pada gambar yang sudah melengkung." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Bisakah dipakai untuk foto profil?", a: "Bisa. Foto persegi dengan 50% menjadi lingkaran, dan sudut transparannya cocok di latar apa pun." },
    { q: "Radius berapa untuk foto di dalam artikel?", a: "Sekitar 5 sampai 8 persen — sudutnya lembut, tetapi foto tetap terlihat seperti foto, bukan ikon." },
  ],

  security:
    "Sudut gambar Anda dilengkungkan sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
