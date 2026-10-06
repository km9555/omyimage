import type { ToolPageContent } from "@/content/tools/types";
import invert from "@/content/tools/invert-image.id";

/** Indonesian copy for /id/pixelate-foto. */
const content: ToolPageContent = {
  toolId: "pixelate-image",
  locale: "id",
  name: "Pixelate Foto",
  tagline:
    "Ubah foto apa pun menjadi blok-blok piksel — dari mozaik halus sampai pixel art retro yang tegas. Pilih ukuran blok, lihat langsung, dan pixelate banyak gambar sekaligus. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Pixelate Foto Online Gratis — Efek Pixel Art | oMyImage",
  metaDescription:
    "Pixelate gambar online gratis: pilih ukuran blok dan ubah foto apa pun menjadi piksel besar atau tampilan pixel art retro. Banyak sekaligus. Di browser, tanpa upload.",

  intro:
    "Pixelate mengganti detail gambar dengan blok-blok warna persegi, masing-masing mengambil warna area yang ditutupinya. Inilah tampilan video game lama, ubin mozaik, dan gambar yang sengaja dibuat tidak terbaca. Pixelate Foto dari oMyImage memungkinkan Anda memilih ukuran blok dengan tepat: geser penggeser dan pratinjau langsung berubah, sekaligus menunjukkan kira-kira berapa blok yang muat di gambar. Tambahkan satu foto atau sekumpulan, lalu unduh hasilnya dalam format yang sama atau format lain.",

  sections: [
    {
      heading: "Memilih ukuran blok",
      id: "size",
      body: [
        "Ukuran blok diukur dalam piksel gambar asli, dari 2 sampai 120. Blok kecil 4 sampai 8 piksel memberi mozaik halus yang masih memperlihatkan isi gambar; 16 sampai 32 piksel mengubah foto menjadi adegan pixel art yang jelas; di atas itu, gambar tinggal segelintir kotak berwarna.",
        "Karena pengaturannya dalam piksel, nilai yang sama terlihat lebih halus di foto besar daripada di foto kecil. Catatan di bawah penggeser menunjukkan berapa blok yang muat di sisi yang lebih panjang, yang lebih bisa diandalkan daripada angkanya sendiri.",
      ],
    },
    {
      heading: "Pixel art dan tampilan retro",
      id: "art",
      body: [
        "Untuk tampilan game 8-bit atau 16-bit, targetkan 40 sampai 80 blok di sisi yang lebih panjang. Objek sederhana dengan bentuk tegas — logo, hewan peliharaan di depan dinding polos, siluet kota — paling bagus dipixelate. Bila hasilnya tampak kusam, naikkan kontras dulu dengan Kecerahan & Kontras; pixel art paling bagus dengan warna yang jernih dan pekat.",
        "Simpan pixel art sebagai PNG. Kompresi JPG mengaburkan tepi blok yang tajam dan menambah bercak di dalam kotak yang rata, sehingga efeknya rusak.",
      ],
    },
    {
      heading: "Pixelate untuk menyembunyikan sesuatu",
      id: "privacy-note",
      body: [
        "Pixelate sering dipakai untuk menyembunyikan wajah, pelat nomor, dan tulisan, tetapi blok kecil tidak aman: wajah atau kata yang dipixelate kadang masih bisa dikenali atau direkonstruksi. Bila Anda memakai pixelate untuk melindungi seseorang, gunakan blok besar agar tidak ada struktur yang tersisa. Untuk menyembunyikan sebagian gambar saja — wajah, pelat, nama — pakai Blur Wajah, yang mendeteksi wajah dan memungkinkan Anda mempixelate atau mengaburkan area yang dipilih saja.",
      ],
    },
    {
      heading: "Kegunaan lain",
      id: "uses",
      body: [
        "Foto yang dipixelate cocok sebagai latar teks, karena bentuknya tetap ada tetapi detailnya tidak lagi bersaing dengan kata-kata. Foto seperti ini juga cocok untuk pratinjau tanpa spoiler, gambar kuis tempat pemain menebak fotonya, dan titik awal pola sulam silang, manik-manik, serta mozaik, di mana setiap blok menjadi satu jahitan atau satu ubin.",
      ],
    },
    {
      heading: "Banyak gambar, format apa pun",
      id: "batch",
      body: [
        "Tambahkan gambar sebanyak yang Anda perlukan; ukuran blok yang sama diterapkan ke semuanya. JPG, PNG, dan WEBP didukung, dan hasilnya tetap dalam format asli kecuali Anda memilih yang lain. Area transparan tetap transparan di PNG dan WEBP. Satu gambar langsung terunduh; beberapa gambar datang dalam satu file ZIP.",
      ],
    },
    {
      heading: "Pixelate dan ukuran file",
      id: "size-note",
      body: [
        "Gambar yang dipixelate jauh lebih sedikit detailnya, jadi mudah dikompres: PNG yang dipixelate kuat bisa jauh lebih kecil dari aslinya, yang berguna untuk latar dan placeholder yang ringan. Untuk mengecilkannya lagi tanpa kehilangan blok yang tajam, tetap pakai PNG dan proses dengan Kompres Foto.",
      ],
    },
    {
      heading: "Pixelate untuk konten media sosial",
      id: "social",
      body: [
        "Foto profil dan sampul bergaya piksel menonjol di linimasa dan tetap terbaca dalam ukuran kecil. Untuk gaya yang seragam, proses beberapa foto dengan ukuran blok yang sama — misalnya serangkaian postingan atau foto profil untuk satu tim game.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Setiap gambar dipixelate sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara mempixelate gambar",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau beberapa gambar JPG, PNG, atau WEBP." },
    { title: "Atur ukuran blok", description: "Geser penggeser sampai pratinjau terlihat seperti yang Anda mau." },
    { title: "Pixelate dan unduh", description: "Klik Pixelate foto untuk mengunduh gambar, atau ZIP bila ada beberapa." },
  ],

  features: [
    { icon: "apps", title: "Ukuran blok bebas", description: "Dari mozaik halus sampai segelintir kotak, 2 sampai 120 piksel." },
    { icon: "visibility", title: "Pratinjau langsung", description: "Lihat efeknya sambil menggeser, dan tahan untuk membandingkan." },
    { icon: "lock", title: "Tanpa upload", description: "Dipixelate sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara mempixelate gambar?", a: "Tambahkan gambar, atur ukuran blok dengan penggeser, lalu klik Pixelate foto. Hasilnya langsung terunduh." },
    { q: "Ukuran blok berapa yang sebaiknya dipakai?", a: "4–8 px untuk mozaik halus, 16–32 px untuk pixel art, lebih besar untuk membuat gambar abstrak." },
    { q: "Apakah pixelate aman untuk menyembunyikan wajah atau tulisan?", a: "Hanya dengan blok besar. Blok kecil kadang masih bisa dikenali; Blur Wajah punya pilihan yang lebih kuat untuk sebagian gambar." },
    { q: "Bisakah mempixelate sebagian gambar saja?", a: "Tidak di sini — alat ini mempixelate seluruh gambar. Blur Wajah bisa mempixelate area yang dipilih." },
    { q: "Format apa yang terbaik untuk pixel art?", a: "PNG. Format ini menjaga tepi blok tetap tajam; JPG mengaburkannya." },
    { q: "Bisakah mempixelate banyak gambar sekaligus?", a: "Bisa. Semuanya mendapat ukuran blok yang sama dan terunduh dalam ZIP." },
    { q: "Apakah transparansi tetap ada?", a: "Ya, bila disimpan sebagai PNG atau WEBP." },
    { q: "Bisakah pixelate dibatalkan?", a: "Tidak — detailnya hilang. Simpan file asli Anda." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP mana pun." },
    { q: "Bisakah dipakai untuk pola sulam silang?", a: "Bisa. Pixelate fotonya, lalu setiap blok menjadi satu jahitan." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah gambar yang dipixelate jadi lebih ringan?", a: "Biasanya ya, terutama dalam PNG, karena detail yang tersisa jauh lebih sedikit." },
  ],

  security:
    "Gambar Anda dipixelate sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // FxTool.tsx is shared with invert-image; each route only has its own
  // tool's ui in scope, so this page reuses the invert page's translations.
  ui: invert.ui,
};

export default content;
