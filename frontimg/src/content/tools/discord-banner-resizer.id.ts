import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-banner-discord (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "discord-banner-resizer",
  locale: "id",
  name: "Ubah Ukuran Banner Discord",
  tagline:
    "Ubah gambar apa pun ke ukuran Discord — banner profil 600 × 240, banner server 960 × 540, atau ikon server 512 × 512 — diisi penuh atau diberi pinggiran. Gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ukuran Banner Discord — Banner Profil & Server, Gratis | oMyImage",
  metaDescription:
    "Ubah gambar apa pun untuk Discord: banner profil 600 × 240, banner server 960 × 540, atau ikon server 512 × 512. Isi penuh atau beri pinggiran, gratis, di browser.",

  intro:
    "Discord memakai bentuk berbeda untuk setiap tempat gambar: strip lebar 5:2 untuk banner profil, banner 16:9 di atas daftar channel server, dan persegi yang ditampilkan berbentuk lingkaran untuk ikon dan avatar. Alat ini terbuka di ukuran banner profil dan menampilkan ukuran Discord lainnya di menu yang sama. Tambahkan gambar, pilih tempatnya, isi penuh atau beri pinggiran agar pas, lalu upload gambar yang tidak perlu dipotong Discord.",

  sections: [
    {
      heading: "Semua ukuran gambar Discord",
      id: "sizes",
      body: [
        "Banner profil: 600 × 240 piksel, rasio 5:2, tampil di atas kartu profil Anda. Discord menyebut ukuran ini sebagai minimum, dan banner adalah fitur Nitro. Banner server: 960 × 540 piksel, 16:9, tampil di atas daftar channel; server membukanya di Boost level 2. Ikon server: persegi yang ditampilkan berbentuk lingkaran — 512 × 512 ukuran yang baik. Avatar: persegi berbentuk lingkaran, minimal 128 × 128.",
        "Semuanya menerima PNG, JPG, dan GIF di bawah 10 MB. Pilih tempatnya di Jenis preset, dan lebar serta tinggi akan berubah mengikuti.",
      ],
    },
    {
      heading: "Banner lebih tajam di ukuran ganda",
      id: "double",
      body: [
        "Ukuran Discord adalah ukuran minimum, dan layar resolusi tinggi menampilkan banner 600 × 240 sedikit lembek. Untuk hasil yang lebih tajam, pilih Ukuran kustom dan masukkan angka dua kali lipat — 1200 × 480 untuk banner profil, 1920 × 1080 untuk banner server. Discord akan memperkecilnya dengan bentuk yang sama.",
        "Lakukan ini hanya bila gambar aslinya setidaknya sebesar itu. Memperbesar gambar kecil sampai 1200 piksel tidak menambah detail, hanya menghasilkan file buram yang lebih besar.",
      ],
    },
    {
      heading: "Bagian yang tertutup avatar",
      id: "overlap",
      body: [
        "Di kartu profil, avatar bulat Anda berada di atas bagian kiri bawah banner, dan banner ditampilkan cukup kecil. Teks atau wajah di pojok itu tersembunyi, dan detail halus hilang. Taruh objek utama di tengah atau separuh kanan, dan pakai bentuk yang tebal dan sederhana.",
        "Ikon dan avatar dipotong berbentuk lingkaran, jadi sudutnya tidak pernah terlihat. Taruh logo atau wajah jauh di dalam persegi, atau pilih Beri pinggiran agar seluruh gambar berada di tengah dengan warna latar di sekelilingnya.",
      ],
    },
    {
      heading: "Banner animasi",
      id: "animated",
      body: [
        "Discord menampilkan banner dan avatar GIF animasi untuk anggota Nitro dan server yang di-boost. Alat ini bekerja dengan gambar diam: GIF diubah ukurannya dari frame pertamanya, dan hasilnya PNG, JPG, atau WEBP diam. Untuk mempertahankan animasi, ubah ukurannya dengan alat GIF khusus.",
      ],
    },
    {
      heading: "Meng-upload ke Discord",
      id: "upload",
      body: [
        "Untuk banner profil, buka Pengaturan Pengguna, lalu Profil, dan pilih Ubah Banner. Untuk banner atau ikon server, buka Pengaturan Server, lalu Ikhtisar, dan upload di sana. Karena gambar sudah berbentuk tepat, langkah potong Discord mempertahankan seluruh gambar.",
      ],
    },
    {
      heading: "Banner untuk komunitas dan tim game",
      id: "community",
      body: [
        "Server komunitas, tim esports, atau kelompok belajar biasanya memakai banner berisi logo dan nama server. Buat satu desain besar, lalu ubah ukurannya ke banner server dan ikon server dari gambar yang sama, supaya tampilan server tetap seragam di semua tempat.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar jadi banner Discord",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih JPG, PNG, WEBP, GIF, atau BMP." },
    { title: "Pilih tempat di Discord", description: "Banner profil sudah terpilih; ganti ke Banner server, Ikon server, atau Foto profil, lalu isi penuh atau beri pinggiran." },
    { title: "Unduh", description: "Ubah ukuran dan unduh gambar yang pas di tempatnya." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Semua ukuran Discord", description: "Banner profil, banner server, ikon server, dan avatar dalam satu menu." },
    { icon: "crop", title: "Isi penuh atau pinggiran", description: "Penuhi bingkai, atau pertahankan seluruh gambar di atas warna latar." },
    { icon: "lock", title: "Di browser Anda", description: "Gambar Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Berapa ukuran banner profil Discord?", a: "600 × 240 piksel, rasio 5:2 — minimum Discord. Untuk banner yang lebih tajam, pakai 1200 × 480. Banner profil butuh Nitro." },
    { q: "Berapa ukuran banner server Discord?", a: "960 × 540 piksel, 16:9. Gambar 1920 × 1080 juga diterima dan diperkecil. Banner server butuh Boost level 2." },
    { q: "Berapa ukuran ikon server Discord?", a: "Persegi yang ditampilkan berbentuk lingkaran; 512 × 512 piksel cocok. Jauhkan logo dari sudut." },
    { q: "Berapa batas ukuran file banner Discord?", a: "Di bawah 10 MB, dalam PNG, JPG, atau GIF." },
    { q: "Bisakah membuat banner animasi di sini?", a: "Tidak. GIF diubah ukurannya dari frame pertama dan disimpan sebagai gambar diam. Gunakan alat GIF untuk mengubah ukuran animasi." },
    { q: "Kenapa sebagian banner saya tersembunyi?", a: "Avatar menutupi bagian kiri bawah banner profil. Taruh teks dan wajah di tengah atau separuh kanan." },
    { q: "Kenapa ikon server terpotong di sudut?", a: "Discord menampilkan ikon berbentuk lingkaran. Taruh logo di tengah persegi, atau pilih Beri pinggiran agar ada ruang di sekelilingnya." },
    { q: "Bisakah memakai gambar yang sama untuk banner dan ikon server?", a: "Bisa. Ubah ukurannya ke Banner server dan unduh, lalu pilih Ikon server dan ubah ukuran gambar yang sama sekali lagi. Potong dulu bila perlu agar bagian pentingnya tetap terlihat." },
    { q: "Apakah banner tetap tajam di HP?", a: "Di HP banner tampil lebih kecil, jadi detail halus tetap hilang. Pakai teks besar dan bentuk sederhana, dan buat banner di ukuran ganda bila gambar aslinya cukup besar." },
    { q: "Bisakah mengubah beberapa gambar sekaligus?", a: "Bisa. Tambahkan semuanya; masing-masing diubah ke ukuran Discord yang dipilih dan diunduh bersama dalam ZIP." },
    { q: "Apakah gambar saya di-upload ke mana pun?", a: "Tidak. Gambar diubah ukurannya di browser Anda; hanya Anda yang meng-upload-nya ke Discord." },
  ],

  security:
    "Gambar Anda diubah ukurannya sepenuhnya di browser. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
