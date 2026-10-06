import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/png-ke-ico. */
const content: ToolPageContent = {
  toolId: "png-to-ico",
  locale: "id",
  name: "PNG ke ICO",
  tagline:
    "Ubah PNG, JPG, atau SVG menjadi file ICO secara online — favicon.ico dengan 16, 32, dan 48 px, atau ikon Windows dengan semua ukuran hingga 256 px. Gratis, privat, di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "PNG ke ICO Online Gratis — Pembuat Favicon | oMyImage",
  metaDescription:
    "Ubah PNG, JPG, atau SVG ke ICO online gratis — favicon.ico dengan 16, 32, dan 48 px atau ikon Windows hingga 256 px. Dibuat di browser, tanpa upload.",

  intro:
    "File ICO bukan satu gambar, melainkan sekumpulan kecil gambar: ikon yang sama dalam beberapa ukuran, supaya tab browser, taskbar, dan desktop masing-masing bisa memilih yang pas. Konverter PNG ke ICO dari oMyImage membuat kumpulan itu dari satu gambar. Mulai dari PNG, JPG, WEBP, atau SVG, pilih ukurannya — favicon atau ikon Windows lengkap — lalu lihat setiap ukuran di pratinjau dalam piksel sebenarnya sebelum mengunduh satu file .ico.",

  sections: [
    {
      heading: "Apa isi file ICO",
      id: "what-ico",
      body: [
        "ICO adalah format ikon Windows, dan ia berupa wadah: satu file menyimpan beberapa gambar persegi, biasanya dari 16 × 16 hingga 256 × 256 piksel. Windows memilih ukuran terdekat untuk setiap tempat ikon muncul — daftar file, taskbar, desktop — dan browser melakukan hal yang sama untuk tab dan bookmark. Karena itu PNG yang diperkecil lalu diganti namanya menjadi .ico bukanlah ikon sungguhan.",
        "File yang dibuat di sini menyimpan ukuran di bawah 256 sebagai bitmap 32-bit dengan transparansi penuh — bentuk yang dibaca semua versi Windows yang masih dipakai dan semua browser — dan ukuran 256 piksel sebagai PNG terkompresi, seperti ikon bawaan Windows sendiri. Hasilnya bisa dibuka di program apa pun yang mengenali ikon.",
      ],
    },
    {
      heading: "Membuat favicon.ico",
      id: "favicon",
      body: [
        "Untuk website, pilih preset Favicon: 16, 32, dan 48 piksel. 16 adalah ukuran klasik tab browser, 32 dipakai di layar resolusi tinggi dan di taskbar saat situs disematkan, dan 48 untuk shortcut Windows serta tampilan bookmark dan tile situs yang lebih besar. Ketiganya memberi setiap tempat umum ukuran yang tidak perlu ditarik.",
        "Beri nama file favicon.ico dan taruh di folder root situs, supaya bisa dibuka di /favicon.ico. Browser meminta alamat itu secara otomatis, bahkan di halaman yang tidak mencantumkan ikon. Situs modern sering menambahkan ikon PNG dan SVG lewat tag link, tetapi .ico di root tetap yang pertama dicari semua browser dan banyak alat.",
      ],
    },
    {
      heading: "Ikon untuk folder dan shortcut Windows",
      id: "windows",
      body: [
        "Untuk shortcut di desktop, folder, atau aplikasi, pilih preset Ikon Windows yang berisi semua ukuran dari 16 sampai 256 piksel. Windows memakai ukuran besar untuk ikon desktop dan tampilan besar di File Explorer, dan ukuran kecil untuk daftar dan taskbar; bila sebuah ukuran tidak ada, Windows menarik ukuran terdekat dan ikonnya tampak buram.",
        "Untuk memakai ikon, klik kanan shortcut, buka Properties, lalu pilih Change Icon; untuk folder, buka Properties, lalu tab Customize, lalu Change Icon, dan pilih file .ico Anda. Simpan .ico di tempat yang tidak akan dipindah atau dihapus, karena Windows membaca ikon dari lokasi itu.",
      ],
    },
    {
      heading: "Mendesain untuk 16 piksel",
      id: "small",
      body: [
        "Di 16 × 16 piksel hanya muat satu bentuk dan mungkin satu huruf, bukan logo yang detail. Bentuk tebal, kontras kuat, dan siluet sederhana tetap terlihat; garis tipis, teks kecil, dan gradien halus berubah menjadi noda abu-abu. Pratinjau menampilkan setiap ukuran di ukuran piksel sebenarnya, supaya Anda bisa menilai versi 16 piksel dengan jujur sebelum mengunduh.",
        "Agar ukuran kecil sebersih mungkin, gambar diperkecil bertahap — setengahnya setiap kali, dengan penghalusan berkualitas tinggi — bukan sekali lompat, yang cenderung menghilangkan detail tipis secara acak. Kalau ikon 16 piksel masih terlihat ramai, gunakan versi logo yang lebih sederhana — hanya inisial atau simbolnya — sebagai sumber.",
      ],
    },
    {
      heading: "Ikon persegi dari gambar apa pun",
      id: "square",
      body: [
        "Ikon berbentuk persegi. Kalau gambar Anda tidak persegi, pilih Muat seluruh gambar untuk menyimpan semuanya dan mengisi sisinya dengan transparansi, atau Potong jadi persegi untuk memotong sisi yang lebih panjang dari tengah. Latar transparan dipertahankan secara bawaan; centang opsi latar putih bila ikon akan tampil di tempat yang mengubah transparansi menjadi hitam.",
        "Sumber terbaik adalah PNG persegi berlatar transparan berukuran 256 piksel atau lebih. JPG juga bisa, tetapi tidak punya transparansi, jadi latarnya menjadi bagian dari ikon. SVG paling ideal: ia digambar dulu di resolusi tinggi, sehingga setiap ukuran tetap tajam.",
      ],
    },
    {
      heading: "Favicon untuk website usaha",
      id: "business",
      body: [
        "Favicon adalah logo kecil yang muncul di tab browser dan hasil pencarian, dan sering menjadi hal pertama yang dilihat calon pelanggan. Pakai versi logo paling sederhana — biasanya simbol atau huruf awal nama usaha — dengan warna brand yang kontras, karena nama lengkap tidak akan terbaca di 16 piksel.",
        "Di banyak pembuat website dan CMS, favicon diunggah lewat pengaturan tema atau situs, bukan lewat folder root. Bila kolomnya meminta satu file ICO, unggah favicon.ico dari sini — semua ukuran sudah ada di dalamnya. Setelah diganti, browser mungkin masih menampilkan favicon lama beberapa saat karena tersimpan di cache; buka situs di jendela penyamaran untuk melihat yang baru.",
      ],
    },
  ],

  howToTitle: "Cara mengubah PNG ke ICO",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih gambar PNG, JPG, WEBP, atau SVG — paling baik persegi dengan latar transparan." },
    { title: "Pilih ukuran", description: "Pilih Favicon (16, 32, 48) atau Ikon Windows (16 sampai 256), atau centang ukuran yang tepat." },
    { title: "Unduh ICO", description: "Periksa setiap ukuran di pratinjau, lalu unduh satu file .ico." },
  ],

  features: [
    { icon: "apps", title: "Semua ukuran dalam satu file", description: "16, 24, 32, 48, 64, 128, dan 256 piksel dalam satu .ico." },
    { icon: "opacity", title: "Transparansi terjaga", description: "Ikon tetap berlatar transparan penuh dengan tepi yang halus." },
    { icon: "lock", title: "Tanpa upload", description: "Ikon dibuat di browser; gambar Anda tidak keluar dari perangkat." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah PNG ke ICO?", a: "Tambahkan gambar, pilih preset Favicon atau Ikon Windows, periksa pratinjau, lalu klik Unduh ICO." },
    { q: "Ukuran apa yang harus ada di favicon.ico?", a: "16, 32, dan 48 piksel — preset Favicon. Ketiganya mencakup tab browser, layar resolusi tinggi, dan shortcut Windows." },
    { q: "Ukuran apa yang dibutuhkan ikon Windows?", a: "Hingga 256 piksel. Preset Ikon Windows berisi 16, 24, 32, 48, 64, 128, dan 256, jadi Windows tidak perlu menarik ukuran apa pun." },
    { q: "Bisakah JPG atau SVG diubah ke ICO?", a: "Bisa. PNG, JPG, WEBP, GIF, BMP, dan SVG semuanya bisa. JPG tidak punya transparansi, jadi latarnya tetap; SVG memberi hasil paling tajam." },
    { q: "Apakah latar transparan dipertahankan?", a: "Ya. Transparansi dipertahankan di semua ukuran, kecuali Anda memilih latar putih." },
    { q: "Gambar saya tidak persegi — apa yang terjadi?", a: "Pilih Muat seluruh gambar untuk menyimpan semuanya dengan sisi transparan, atau Potong jadi persegi untuk memotong sisi yang lebih panjang." },
    { q: "Di mana menaruh favicon.ico?", a: "Di folder root website, supaya terbuka di situsanda.com/favicon.ico. Browser mencarinya di sana secara otomatis." },
    { q: "Bagaimana mengganti ikon folder di Windows?", a: "Klik kanan folder, buka Properties, lalu tab Customize, lalu Change Icon, dan pilih file .ico Anda." },
    { q: "Kenapa ikon 16 piksel saya buram?", a: "Hanya ada 256 piksel untuk digunakan. Pakai sumber yang lebih sederhana — hanya simbol atau inisial — dengan bentuk tebal dan kontras kuat." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. File ICO dibuat sepenuhnya di browser Anda." },
  ],

  security:
    "Gambar Anda diperkecil dan disusun menjadi file ICO sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // PngToIcoTool.tsx
    "or drop a PNG, JPG, WEBP or SVG image here": "atau lepaskan gambar PNG, JPG, WEBP, atau SVG di sini",
    "Could not read this image.": "Gambar ini tidak bisa dibaca.",
    "Icon settings": "Pengaturan ikon",
    "Download ICO": "Unduh ICO",
    "Saving…": "Menyimpan…",
    "Shown at actual size": "Ditampilkan dalam ukuran sebenarnya",
    "Last download: {size}": "Unduhan terakhir: {size}",
    "Your image is smaller than the largest icon size, so that size is enlarged and will look soft.":
      "Gambar Anda lebih kecil dari ukuran ikon terbesar, jadi ukuran itu diperbesar dan akan tampak kurang tajam.",
    "Your image is converted in your browser and never uploaded.": "Gambar Anda dikonversi di browser dan tidak pernah di-upload.",
    "Icon sizes": "Ukuran ikon",
    "Favicon": "Favicon", // i18n-same
    "Windows icon": "Ikon Windows",
    "Sizes in pixels. A favicon needs 16, 32 and 48; Windows uses up to 256.":
      "Ukuran dalam piksel. Favicon butuh 16, 32, dan 48; Windows memakai hingga 256.",
    "Shape": "Bentuk",
    "Fit whole image": "Muat seluruh gambar",
    "Crop to square": "Potong jadi persegi",
    "Icons are square. Fit keeps everything and fills the sides; crop trims the longer side.":
      "Ikon berbentuk persegi. Muat menyimpan semuanya dan mengisi sisi; potong memangkas sisi yang lebih panjang.",
    "White background instead of transparent": "Latar putih, bukan transparan",
  },
};

export default content;
