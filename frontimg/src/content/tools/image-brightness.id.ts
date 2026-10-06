import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.id";

/** Indonesian copy for /id/atur-kecerahan-foto. */
const content: ToolPageContent = {
  toolId: "image-brightness",
  locale: "id",
  name: "Kecerahan & Kontras",
  tagline:
    "Cerahkan foto yang gelap, beri kedalaman dengan kontras, dan buat warna lebih hidup atau lebih kalem dengan saturasi — dengan pratinjau langsung dan perbandingan sebelum-sesudah yang cepat. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Atur Kecerahan & Kontras Foto Online Gratis | oMyImage",
  metaDescription:
    "Atur kecerahan, kontras, dan saturasi gambar online gratis dengan pratinjau langsung. Perbaiki foto yang gelap atau pucat, banyak sekaligus. Di browser, tanpa upload.",

  intro:
    "Kebanyakan foto yang mengecewakan bukan karena tidak fokus — tetapi sedikit terlalu gelap, datar, atau keabu-abuan. Tiga penggeser memperbaiki sebagian besar masalah itu. Kecerahan & Kontras dari oMyImage mengatur kecerahan, kontras, dan saturasi gambar JPG, PNG, dan WEBP, menampilkan perubahannya langsung saat Anda menggeser, dan memungkinkan Anda menahan tombol untuk melihat gambar asli lagi. Terapkan pengaturan yang sama ke sekumpulan gambar, agar serangkaian foto produk atau liburan terlihat seragam.",

  sections: [
    {
      heading: "Tiga penggeser",
      id: "sliders",
      body: [
        "Kecerahan menaikkan atau menurunkan semua nada dengan besaran yang sama: geser ke kanan untuk menyelamatkan foto yang kurang cahaya, ke kiri untuk menenangkan foto yang terlalu terang. Kontras menjauhkan nada dari abu-abu tengah — bagian gelap makin gelap, bagian terang makin terang — sehingga gambar yang datar dan berkabut jadi lebih dalam; ke kiri, kontras melembutkan foto yang terlalu keras.",
        "Saturasi mengatur seberapa hidup warnanya. Naikkan untuk makanan, bunga, dan pemandangan; turunkan untuk tampilan kalem ala film. Di −100 gambar menjadi hitam-putih sepenuhnya. Tombol Atur ulang mengembalikan ketiganya ke nol.",
      ],
    },
    {
      heading: "Memperbaiki masalah umum",
      id: "fixes",
      body: [
        "Foto dalam ruangan yang gelap: kecerahan +20 sampai +40 dan kontras +10 agar tidak tampak pucat. Pemandangan abu-abu berkabut: kontras +20 sampai +30 dan saturasi +15. Foto dokumen dari HP untuk formulir: kecerahan +15 dan kontras +40 membuat kertas putih dan tulisan gelap serta mudah dibaca. Foto siang hari yang keras: kontras −15 dan saturasi −10.",
        "Langkah kecil paling baik. Nilai kecerahan yang terlalu tinggi membuat bagian terang menjadi putih total, dan detail itu tidak bisa kembali — perhatikan langit dan pakaian putih di pratinjau.",
      ],
    },
    {
      heading: "Sebelum dan sesudah",
      id: "compare",
      body: [
        "Tekan dan tahan Tahan untuk melihat aslinya di bawah pratinjau untuk menampilkan gambar tanpa perubahan; lepaskan untuk melihat pengaturan Anda lagi. Sering membandingkan adalah cara termudah agar tidak berlebihan, karena mata cepat terbiasa dengan gambar yang lebih terang atau lebih berwarna.",
      ],
    },
    {
      heading: "Kumpulan foto yang seragam",
      id: "batch",
      body: [
        "Tambahkan sekumpulan gambar dan pengaturan yang sama diterapkan ke setiap gambar, sehingga foto yang diambil dalam cahaya yang sama hasilnya serasi — berguna untuk listing produk, foto properti, dan album. Pratinjau memakai gambar pertama; setiap file di daftar mendapat tombol unduhnya sendiri, dan beberapa file terunduh bersama dalam satu ZIP.",
      ],
    },
    {
      heading: "Format dan kualitas",
      id: "formats",
      body: [
        "Hasilnya tetap dalam format asli kecuali Anda memilih yang lain. PNG menyimpan piksel yang diatur secara persis; JPG dan WEBP memakai penggeser kualitas. Area transparan tetap transparan di PNG dan WEBP. Untuk hitam-putih dengan kendali campuran yang lebih halus, pakai Foto Hitam Putih; untuk negatif, pakai Invert Warna Foto.",
      ],
    },
    {
      heading: "Kecerahan untuk cetak dan layar",
      id: "print",
      body: [
        "Foto terlihat lebih gelap di kertas daripada di layar yang menyala, jadi gambar untuk dicetak sering perlu sedikit tambahan kecerahan — biasanya +10 sampai +20 — dan sedikit kontras. Untuk layar, periksa hasilnya di perangkat tempat gambar akan dilihat: layar HP biasanya lebih terang dari layar laptop, dan foto yang pas di satu perangkat bisa tampak kusam di perangkat lain.",
      ],
    },
    {
      heading: "Foto produk untuk marketplace",
      id: "marketplaces",
      body: [
        "Listing produk dengan foto yang sama terang dan jelasnya terlihat lebih profesional dan lebih dipercaya pembeli. Temukan pengaturan yang pas di satu foto, tambahkan foto lain dari sesi yang sama, lalu proses semuanya sekaligus — semua foto mendapat kecerahan dan kontras yang sama.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Setiap gambar diatur sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara mengubah kecerahan gambar",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Atur", description: "Geser penggeser kecerahan, kontras, dan saturasi; tahan untuk membandingkan." },
    { title: "Terapkan dan unduh", description: "Klik Terapkan untuk mengunduh gambar, atau ZIP bila ada beberapa." },
  ],

  features: [
    { icon: "light_mode", title: "Tiga penggeser utama", description: "Kecerahan, kontras, dan saturasi, dari −100 sampai +100." },
    { icon: "visibility", title: "Sebelum dan sesudah", description: "Pratinjau langsung, dan tahan untuk melihat aslinya." },
    { icon: "lock", title: "Tanpa upload", description: "Diatur sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara membuat foto lebih terang?", a: "Tambahkan foto, geser penggeser Kecerahan ke kanan, lalu klik Terapkan." },
    { q: "Apa fungsi kontras?", a: "Menjauhkan nada gelap dan terang, sehingga foto yang datar terlihat lebih dalam." },
    { q: "Apa fungsi saturasi?", a: "Membuat warna lebih hidup atau lebih kalem; di −100 foto menjadi hitam-putih." },
    { q: "Bagaimana memperbaiki foto yang gelap?", a: "Naikkan kecerahan 20 sampai 40 dan tambahkan sekitar 10 kontras agar tidak tampak pucat." },
    { q: "Bisakah membuat foto dokumen lebih jelas?", a: "Bisa. Sedikit tambahan kecerahan dan kontras yang jauh lebih tinggi membuat kertas putih dan tulisan gelap." },
    { q: "Bisakah membandingkan dengan aslinya?", a: "Bisa. Tekan dan tahan tombol di bawah pratinjau untuk melihat aslinya." },
    { q: "Bisakah mengatur banyak foto sekaligus?", a: "Bisa. Pengaturan yang sama diterapkan ke semuanya, dan hasilnya terunduh dalam ZIP." },
    { q: "Apakah kualitasnya turun?", a: "PNG menyimpan setiap piksel. JPG dan WEBP disimpan ulang dengan kualitas yang Anda pilih." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun." },
    { q: "Bisakah membatalkan perubahan?", a: "Klik Atur ulang sebelum mengunduh; setelah itu, simpan file asli Anda." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah warna berubah saat kecerahan dinaikkan?", a: "Warna menjadi lebih terang tetapi tetap pada ronanya. Hanya saturasi yang membuat warna lebih atau kurang hidup." },
  ],

  security:
    "Gambar Anda diatur sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
