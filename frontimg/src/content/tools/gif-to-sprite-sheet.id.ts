import type { ToolPageContent } from "@/content/tools/types";
import webp from "@/content/tools/gif-to-webp.id";

/** Indonesian copy for /id/gif-ke-sprite-sheet. */
const content: ToolPageContent = {
  toolId: "gif-to-sprite-sheet",
  locale: "id",
  name: "GIF ke Sprite Sheet",
  tagline:
    "Susun setiap frame GIF animasi di satu sprite sheet PNG — dalam grid, satu baris, atau satu kolom — dengan jarak antar-frame dan animasi CSS yang siap pakai. Gratis, di browser.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "GIF ke Sprite Sheet Online Gratis — Frame GIF jadi PNG | oMyImage",
  metaDescription:
    "Ubah GIF animasi jadi sprite sheet PNG online gratis: grid, baris, atau kolom, dengan jarak antar-frame dan animasi CSS siap pakai. Di browser, tanpa upload.",

  intro:
    "Sprite sheet menaruh semua frame sebuah animasi berdampingan dalam satu gambar. Game dan halaman web lalu menampilkan satu frame setiap kali dengan menggeser jendela di atas sheet, yang lebih cepat dimuat dan lebih mudah dikendalikan daripada GIF. GIF ke Sprite Sheet dari oMyImage mengubah GIF animasi apa pun menjadi sheet PNG transparan dalam beberapa klik: pilih grid, satu baris, atau satu kolom, tentukan berapa frame yang disimpan dan seberapa besar, tambahkan jarak bila engine Anda membutuhkannya, lalu salin CSS yang memutarnya.",

  sections: [
    {
      heading: "Grid, baris, atau kolom",
      id: "layout",
      body: [
        "Grid menyusun frame dalam baris dan kolom, sehingga sheet kira-kira berbentuk persegi — bentuk yang disukai kebanyakan game engine dan alat tekstur. Anda memilih jumlah kolom; jumlah baris mengikuti banyaknya frame.",
        "Satu baris atau satu kolom menaruh semua frame dalam satu garis. Itulah tata letak yang paling mudah dianimasikan dengan CSS, dan alat ini menuliskan stylesheet-nya untuk Anda: ukuran frame, latar, dan animasi steps() yang menyusuri strip dengan tempo GIF.",
      ],
    },
    {
      heading: "Frame, ukuran, dan jarak",
      id: "options",
      body: [
        "Menyimpan setiap frame ke-2 atau ke-3 membuat sheet jadi setengah atau sepertiganya sementara gerakannya tetap dikenali, yang penting untuk GIF panjang. Ukuran frame mengecilkan setiap frame ke 75, 50, atau 25 persen untuk ikon dan karakter kecil.",
        "Jarak menambahkan celah 2, 4, atau 8 piksel di antara frame. Engine yang menghaluskan atau menskalakan tekstur bisa ikut mengambil satu baris piksel dari frame tetangga bila frame saling menempel; celah kecil mencegah kebocoran itu. Latar tetap transparan kecuali Anda memilih warna.",
      ],
    },
    {
      heading: "Memakai sheet di game engine",
      id: "engines",
      body: [
        "Panel pengaturan menampilkan ukuran frame serta jumlah kolom dan baris — angka yang dibutuhkan engine untuk memotong sheet. Di Phaser, Godot, Unity, GameMaker, dan alat sejenis, impor PNG-nya, atur lebar dan tinggi frame, lalu tambahkan jaraknya bila Anda memakainya. Urutan frame GIF tetap: dari kiri ke kanan dan dari atas ke bawah.",
        "GIF bisa punya jeda berbeda di setiap frame; kebanyakan engine memutar sheet dengan satu frame rate, jadi atur sesuai kecepatan yang Anda inginkan.",
      ],
    },
    {
      heading: "Memakai sheet dengan CSS",
      id: "css",
      body: [
        "Dengan satu baris atau satu kolom, hasilnya dilengkapi blok CSS singkat: elemen seukuran satu frame, sheet sebagai latar, dan animasi keyframe dengan steps() sehingga latar melompat dari frame ke frame alih-alih bergeser. Tempel di stylesheet Anda, beri elemen class sprite, dan animasinya berjalan tanpa skrip apa pun.",
        "CSS memakai total durasi GIF yang dibagi rata ke semua frame, jadi GIF dengan jeda tidak rata diputar dengan tempo tetap.",
      ],
    },
    {
      heading: "Batas ukuran",
      id: "limits",
      body: [
        "Browser tidak bisa membuat gambar yang lebar atau tingginya lebih dari 16.384 piksel, dan Safari berhenti di sekitar 16,7 juta piksel secara total. GIF panjang dalam satu baris cepat mencapai batas itu. Bila sheet akan terlalu besar, alat ini memberi tahu; pakai grid, simpan lebih sedikit frame, atau pilih ukuran frame yang lebih kecil.",
      ],
    },
    {
      heading: "Sheet untuk dipelajari dan dicetak",
      id: "review",
      body: [
        "Sprite sheet berbentuk grid juga cara praktis melihat seluruh animasi sekaligus: untuk memeriksa gerakan frame demi frame, menampilkan urutannya di presentasi, atau mencetak frame-frame untuk kelas animasi. Dengan jarak dan latar putih, setiap frame terpisah dengan jelas.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "GIF dibaca dan sheet digambar sepenuhnya di browser Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup. Untuk mendapatkan frame sebagai file terpisah, bukan satu sheet, pakai GIF ke Gambar.",
      ],
    },
  ],

  howToTitle: "Cara membuat sprite sheet dari GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih tata letak", description: "Grid, satu baris, atau satu kolom; atur frame, ukuran, jarak, dan latar." },
    { title: "Buat dan unduh", description: "Klik Buat sprite sheet, salin CSS-nya bila perlu, lalu unduh PNG-nya." },
  ],

  features: [
    { icon: "grid_view", title: "Tata letak bebas", description: "Grid dengan jumlah kolom pilihan Anda, satu baris, atau satu kolom." },
    { icon: "code", title: "Termasuk CSS", description: "Animasi steps() siap pakai untuk sheet baris dan kolom." },
    { icon: "lock", title: "Tanpa upload", description: "Dibuat sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana mengubah GIF jadi sprite sheet?", a: "Tambahkan GIF, pilih grid, baris, atau kolom, lalu klik Buat sprite sheet. Unduh PNG-nya." },
    { q: "Apa itu sprite sheet?", a: "Satu gambar yang memuat semua frame sebuah animasi, berdampingan." },
    { q: "Apakah latarnya transparan?", a: "Ya, secara bawaan. Anda juga bisa memilih warna solid." },
    { q: "Bisakah memilih jumlah kolom?", a: "Bisa. Di tata letak grid, ketik jumlah kolomnya; jumlah baris mengikuti banyaknya frame." },
    { q: "Kenapa perlu jarak antar-frame?", a: "Sebagian engine mencampur piksel tetangga saat menskalakan tekstur; celah kecil mencegah frame saling bocor." },
    { q: "Bagaimana menganimasikan sheet dengan CSS?", a: "Pilih satu baris atau satu kolom dan salin CSS yang tampil bersama hasilnya." },
    { q: "Kenapa sheet saya terlalu besar?", a: "Browser tidak bisa membuat gambar lebih dari 16.384 piksel per sisi. Pakai grid, simpan lebih sedikit frame, atau perkecil frame-nya." },
    { q: "Apakah semua frame disimpan?", a: "Ya, kecuali Anda memilih menyimpan setiap frame ke-2 atau ke-3." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Pada 100%, frame disalin piksel demi piksel ke PNG." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Bisakah mendapatkan frame sebagai gambar terpisah?", a: "Bisa, dengan GIF ke Gambar." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
    { q: "Apakah bisa di HP?", a: "Bisa, di browser HP. Sheet yang sangat besar bisa melewati batas memori HP." },
    { q: "Dalam urutan apa frame disusun?", a: "Dari kiri ke kanan dan dari atas ke bawah — sama dengan urutan di GIF aslinya." },
  ],

  security:
    "Sprite sheet dibuat sepenuhnya di browser Anda. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifExportTool.tsx is shared with gif-to-webp; each route only has its own
  // tool's ui in scope, so this page reuses the WEBP page's translations.
  ui: webp.ui,
};

export default content;
