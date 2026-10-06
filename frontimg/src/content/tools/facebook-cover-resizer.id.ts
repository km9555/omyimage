import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-sampul-facebook (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "facebook-cover-resizer",
  locale: "id",
  name: "Ubah Ukuran Sampul Facebook",
  tagline:
    "Ubah gambar apa pun jadi foto sampul Facebook — 851 × 315 piksel sebagai JPG sRGB yang ringan — diisi penuh atau diberi pinggiran, dengan memperhitungkan potongan di HP. Gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ukuran Sampul Facebook 851×315 — Ubah Online Gratis | oMyImage",
  metaDescription:
    "Ubah gambar apa pun jadi foto sampul Facebook: 851 × 315 px sebagai JPG sRGB ringan, diisi penuh atau diberi pinggiran, memperhitungkan potongan di HP. Gratis.",

  intro:
    "Sampul Facebook berbentuk lebar dan pendek, dan ditampilkan dalam dua bentuk berbeda: strip lebar di komputer dan potongan yang lebih tinggi dan sempit di HP. Meng-upload foto sembarangan membuat Facebook yang menentukan bagian mana yang terpotong. Alat ini terbuka di ukuran sampul Facebook, 851 × 315 piksel, dan menyimpan JPG — tambahkan gambar, pilih isi penuh atau beri pinggiran, lalu unduh sampul yang cepat dimuat dan menampilkan apa yang Anda inginkan.",

  sections: [
    {
      heading: "Ukuran yang disarankan Facebook",
      id: "spec",
      body: [
        "Panduan Facebook adalah meng-upload sampul sebagai file JPG sRGB selebar 851 piksel dan setinggi 315 piksel, sebaiknya di bawah 100 KB agar cepat dimuat. Ukuran minimum yang diterima adalah 400 × 150 piksel. Sampul yang sejak awal berukuran 851 × 315 tidak perlu diatur ulang posisinya di komputer.",
        "Alat ini menyimpan JPG sRGB secara bawaan. Untuk foto yang ramai detail, filenya masih bisa di atas 100 KB pada kualitas tinggi; turunkan sedikit slider kualitas, atau proses hasilnya dengan mode 100 KB di alat kompres setelahnya, bila kecepatan lebih penting daripada detail terakhir.",
      ],
    },
    {
      heading: "Komputer dan HP menampilkan bagian berbeda",
      id: "crop",
      body: [
        "Di komputer, sampul ditampilkan sekitar 820 × 312 piksel — hampir seluruh gambar. Di HP sampul ditampilkan sekitar 640 × 360, bentuk yang lebih tinggi, sehingga tepi kiri dan kanan terpotong. Apa pun yang dekat sisi, seperti nama atau logo di pojok, bisa hilang bagi pengunjung lewat HP.",
        "Taruh teks dan wajah di tengah gambar, dan pakai tepi luar untuk latar yang boleh hilang. Di profil pribadi, foto profil juga menutupi bagian kiri bawah sampul, jadi biarkan area itu tetap polos.",
      ],
    },
    {
      heading: "Isi penuh atau beri pinggiran",
      id: "fit",
      body: [
        "Isi penuh, pilihan bawaan, memperbesar gambar sampai menutupi seluruh bingkai 851 × 315 dan memotong kelebihannya secara rata. Cocok untuk pemandangan, foto grup yang diambil dari jauh, dan foto produk yang lebar. Kalau objeknya berada di atas atau bawah foto, potong lebih dulu dengan tombol potong di kartu gambar.",
        "Beri pinggiran memuat seluruh gambar ke dalam bingkai dan mengisi sisi-sisinya dengan warna. Cocok untuk logo persegi, poster, atau brosur acara yang tidak boleh kehilangan tepi mana pun — pilih warna latar yang serasi dengan desainnya.",
      ],
    },
    {
      heading: "Teks, logo, dan PNG",
      id: "text",
      body: [
        "Facebook mengompres ulang sampul, dan kompresi JPG paling keras terhadap teks tajam dan logo. Kalau sampul Anda sebagian besar berisi tulisan atau grafik polos, pilih PNG sebagai format hasil: Facebook sendiri menyebut PNG sering memberi hasil lebih baik untuk gambar berisi teks atau logo.",
      ],
    },
    {
      heading: "Mengganti sampul",
      id: "upload",
      body: [
        "Di profil atau halaman Anda, klik Edit foto sampul atau ikon kamera di sampul, pilih Unggah foto, lalu pilih gambar hasil unduhan. Karena ukurannya sudah tepat, langkah geser untuk mengatur posisi seharusnya menampilkan seluruh gambar; simpan bila sudah pas. Halaman Facebook memakai sampul lebar yang sama, jadi gambar yang sama juga bisa untuk halaman usaha.",
      ],
    },
    {
      heading: "Sampul untuk toko online",
      id: "shop",
      body: [
        "Untuk halaman toko, sampul sering berisi promo, nama toko, dan nomor WhatsApp. Taruh semuanya di tengah agar tetap terlihat di HP, tempat sebagian besar pembeli membuka halaman, dan pakai huruf besar dengan kontras kuat supaya tetap terbaca setelah dikompres Facebook.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar jadi sampul Facebook",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih JPG, PNG, WEBP, GIF, atau BMP — foto, poster, atau desain." },
    { title: "Isi penuh atau beri pinggiran", description: "Ukuran sampul 851 × 315 sudah terpilih; pilih Isi penuh atau Beri pinggiran dengan warna." },
    { title: "Unduh", description: "Ubah ukuran dan unduh JPG yang siap dipasang sebagai sampul." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Tepat 851 × 315", description: "Ukuran sampul yang disarankan Facebook, tanpa perlu atur posisi di komputer." },
    { icon: "speed", title: "JPG sRGB ringan", description: "Disimpan sebagai JPG sRGB, format yang disarankan Facebook agar cepat dimuat." },
    { icon: "lock", title: "Di browser Anda", description: "Gambar Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Berapa ukuran foto sampul Facebook?", a: "Upload di 851 × 315 piksel. Facebook menampilkannya sekitar 820 × 312 di komputer dan 640 × 360 di HP; minimumnya 400 × 150." },
    { q: "Kenapa sampul saya terpotong di HP?", a: "HP menampilkan potongan sampul yang lebih tinggi dan memotong tepi kiri dan kanan. Taruh teks dan wajah di tengah." },
    { q: "Bagaimana membuat gambar jadi 851 × 315?", a: "Tambahkan di sini — ukuran sampul sudah terpilih. Pilih Isi penuh atau Beri pinggiran, lalu ubah ukuran dan unduh." },
    { q: "JPG atau PNG untuk sampul Facebook?", a: "JPG untuk foto — Facebook menyarankan JPG sRGB di bawah 100 KB. PNG untuk sampul yang sebagian besar teks atau logo." },
    { q: "Bagaimana membuat sampul di bawah 100 KB?", a: "Turunkan slider kualitas sebelum mengubah ukuran, atau kompres hasilnya ke 100 KB dengan alat kompres setelahnya." },
    { q: "Bisakah gambar yang sama dipakai untuk Halaman Facebook?", a: "Bisa. Halaman memakai sampul lebar yang sama; 851 × 315 bisa dipakai, dengan saran yang sama untuk menjaga bagian tengah." },
    { q: "Sampul saya buram — kenapa?", a: "Gambar aslinya mungkin lebih kecil dari 851 × 315 dan diperbesar, atau Facebook mengompres detail yang ramai. Mulai dari gambar yang lebih besar dan pakai teks besar." },
    { q: "Apakah gambar saya di-upload ke mana pun?", a: "Tidak. Gambar diubah ukurannya di browser Anda; hanya Anda yang meng-upload-nya ke Facebook." },
  ],

  security:
    "Gambar Anda diubah ukurannya sepenuhnya di browser. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
