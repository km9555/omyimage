import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-banner-linkedin (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "linkedin-banner-resizer",
  locale: "id",
  name: "Ubah Ukuran Banner LinkedIn",
  tagline:
    "Ubah gambar apa pun jadi foto latar LinkedIn — tepat 1584 × 396 piksel, strip 4:1 — diisi penuh atau diberi pinggiran. Gratis, di browser, tanpa daftar.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ukuran Banner LinkedIn 1584×396 — Ubah Online Gratis | oMyImage",
  metaDescription:
    "Ubah gambar apa pun jadi foto latar LinkedIn: tepat 1584 × 396 px (4:1), diisi penuh atau diberi pinggiran, dengan memperhitungkan foto profil di atasnya. Gratis.",

  intro:
    "Banner di belakang foto profil LinkedIn Anda adalah strip panjang dan tipis: 1584 × 396 piksel, empat kali lebih lebar daripada tingginya. Hampir tidak ada foto atau desain yang dibuat dalam bentuk itu, jadi LinkedIn memotongnya sembarangan atau menolaknya. Alat ini terbuka di ukuran latar LinkedIn — tambahkan gambar, tentukan apakah dipotong untuk mengisi strip atau diberi pinggiran warna, lalu unduh banner yang pas.",

  sections: [
    {
      heading: "Ukuran foto latar LinkedIn",
      id: "spec",
      body: [
        "Foto latar profil pribadi LinkedIn berukuran 1584 × 396 piksel, rasio 4:1, dalam JPG atau PNG di bawah 8 MB. Gambar dengan ukuran persis itu langsung terpasang tanpa alat potong LinkedIn harus menebak strip mana dari foto Anda yang dipertahankan.",
        "Halaman perusahaan memakai gambar sampul lain yang lebih sempit (1128 × 191 piksel). Untuk halaman perusahaan, pilih Ukuran kustom dan masukkan angka itu, bukan ukuran banner pribadi.",
      ],
    },
    {
      heading: "Foto profil menutupi sebagian",
      id: "overlap",
      body: [
        "Di komputer, foto profil bulat Anda berada di atas bagian kiri bawah banner, dan di HP banner ditampilkan lebih sempit dengan sisi-sisinya terpotong. Teks, logo, atau wajah di sepertiga kiri atau di ujung-ujungnya bisa tersembunyi.",
        "Taruh bagian terpenting desain di tengah atau di kanan, dan anggap sisi kiri sebagai latar. Area polos di sana juga membuat foto profil Anda menonjol, bukan bersaing dengan banner.",
      ],
    },
    {
      heading: "Mengubah foto biasa jadi strip 4:1",
      id: "fit",
      body: [
        "Isi penuh, pilihan bawaan, menyesuaikan gambar ke lebar penuh lalu memotong bagian atas dan bawah secara rata — cocok untuk pemandangan kota, meja kerja, atau tekstur. Kalau bagian menariknya dekat atas atau bawah, potong gambar lebih dulu dengan tombol potong di kartunya dan pilih strip yang ingin dipertahankan.",
        "Beri pinggiran mempertahankan seluruh gambar dan mengisi sisi-sisinya dengan warna, cocok untuk logo atau grafik persegi: gambar berada di tengah strip 4:1 berwarna solid. Pilih warna dari brand atau dari gambar itu supaya stripnya tampak disengaja.",
      ],
    },
    {
      heading: "Menjaga ketajaman",
      id: "sharp",
      body: [
        "Mulailah dari gambar dengan lebar minimal 1584 piksel. Gambar yang lebih kecil harus diperbesar untuk mengisi banner, dan piksel yang ditarik tampak lembek di layar besar. Kalau Anda hanya punya logo kecil, beri pinggiran alih-alih memperbesarnya sampai selebar banner.",
        "Teks di banner harus besar dan singkat. Di HP seluruh strip hanya setinggi beberapa sentimeter, jadi slogan berhuruf kecil tidak terbaca; nama, jabatan, atau satu baris saja paling efektif.",
      ],
    },
    {
      heading: "Meng-upload ke LinkedIn",
      id: "upload",
      body: [
        "Buka profil Anda, klik ikon pensil di area banner, pilih Upload photo, lalu pilih gambar hasil unduhan. Karena ukurannya sudah 1584 × 396, langkah penempatan seharusnya menampilkan seluruh gambar; atur hanya bila perlu, lalu terapkan dan simpan.",
      ],
    },
    {
      heading: "Banner untuk pencari kerja dan freelancer",
      id: "jobs",
      body: [
        "Bagi pencari kerja, banner yang rapi membuat profil tampak serius saat dilihat perekrut. Pilihan aman: latar warna lembut dengan satu baris di kanan, misalnya bidang keahlian dan kota. Freelancer bisa menaruh contoh hasil kerja atau logo usaha, tetap di tengah atau kanan agar tidak tertutup foto profil.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar jadi banner LinkedIn",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih JPG, PNG, WEBP, GIF, atau BMP — foto, desain, atau logo." },
    { title: "Isi penuh atau beri pinggiran", description: "Ukuran 1584 × 396 sudah terpilih; pilih Isi penuh atau Beri pinggiran dengan warna." },
    { title: "Unduh", description: "Ubah ukuran dan unduh banner yang siap untuk profil LinkedIn Anda." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Tepat 1584 × 396", description: "Ukuran latar 4:1, jadi LinkedIn tidak perlu memotong apa pun." },
    { icon: "palette", title: "Pinggiran berwarna", description: "Muat logo atau grafik persegi ke dalam strip dengan latar solid." },
    { icon: "lock", title: "Di browser Anda", description: "Gambar Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Berapa ukuran banner LinkedIn?", a: "1584 × 396 piksel, rasio 4:1, dalam JPG atau PNG di bawah 8 MB, untuk foto latar profil pribadi." },
    { q: "Bagaimana membuat gambar jadi 1584 × 396?", a: "Tambahkan di sini — ukuran LinkedIn sudah terpilih. Pilih Isi penuh atau Beri pinggiran, lalu ubah ukuran dan unduh." },
    { q: "Kenapa sebagian banner saya tersembunyi?", a: "Foto profil menutupi bagian kiri bawah di komputer, dan HP memotong sisi-sisinya. Taruh konten penting di tengah atau kanan." },
    { q: "Berapa ukuran sampul halaman perusahaan LinkedIn?", a: "1128 × 191 piksel. Pilih Ukuran kustom dan masukkan angka itu." },
    { q: "Banner saya buram — kenapa?", a: "Gambar aslinya mungkin kurang dari 1584 piksel lebarnya dan harus diperbesar. Mulai dari gambar yang lebih lebar, atau beri pinggiran pada logo kecil alih-alih menariknya." },
    { q: "Bisakah menaruh logo di latar polos?", a: "Bisa. Pilih Beri pinggiran dan warna latar; logo berada di tengah strip 4:1 berwarna itu." },
    { q: "Seperti apa banner LinkedIn yang bagus?", a: "Sesuatu yang sederhana dan mendukung profil: kota Anda, ruang kerja, produk Anda, atau warna brand dengan satu baris teks pendek di kanan." },
    { q: "Bisakah membuat banner dari foto HP?", a: "Bisa. Foto HP yang melebar biasanya cukup lebar; pilih Isi penuh lalu potong dulu bagian yang ingin dipertahankan agar tidak ada yang hilang di atas atau bawah." },
    { q: "Apakah banner yang sama bisa untuk profil di HP dan komputer?", a: "Bisa. Satu gambar 1584 × 396 dipakai di keduanya; HP hanya memotong sisinya, jadi cukup jaga isi penting di tengah." },
    { q: "JPG atau PNG untuk banner LinkedIn?", a: "Keduanya bisa. JPG untuk foto; PNG menjaga teks dan grafik polos lebih tajam." },
    { q: "Apakah gambar saya di-upload ke mana pun?", a: "Tidak. Gambar diubah ukurannya di browser Anda; hanya Anda yang meng-upload-nya ke LinkedIn." },
  ],

  security:
    "Gambar Anda diubah ukurannya sepenuhnya di browser. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
