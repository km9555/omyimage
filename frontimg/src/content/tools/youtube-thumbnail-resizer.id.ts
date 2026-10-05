import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-thumbnail-youtube (variant of resize-image). */
const content: ToolPageContent = {
  toolId: "youtube-thumbnail-resizer",
  locale: "id",
  name: "Ubah Ukuran Thumbnail YouTube",
  tagline:
    "Ubah gambar apa pun jadi thumbnail YouTube — tepat 1280 × 720 piksel, 16:9, disimpan sebagai JPG jauh di bawah batas 2 MB. Isi penuh atau beri pinggiran, gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ukuran Thumbnail YouTube 1280×720 — Ubah Online Gratis | oMyImage",
  metaDescription:
    "Ubah gambar apa pun jadi thumbnail YouTube: tepat 1280 × 720 px (16:9), JPG di bawah batas 2 MB. Isi penuh atau beri pinggiran, gratis dan langsung di browser.",

  intro:
    "YouTube meminta thumbnail khusus berukuran 1280 × 720 piksel, dalam bingkai 16:9, dan di bawah 2 MB. Screenshot dari editan, foto dari HP, atau desain yang diekspor di ukuran yang salah jarang memenuhi ketiganya. Alat ini langsung terbuka di ukuran thumbnail YouTube: tambahkan gambar, pilih apakah gambar dipotong untuk mengisi bingkai atau diberi pinggiran berwarna, lalu unduh JPG yang langsung diterima YouTube Studio.",

  sections: [
    {
      heading: "Ukuran yang diminta YouTube",
      id: "spec",
      body: [
        "Panduan YouTube sendiri untuk thumbnail khusus adalah resolusi 1280 × 720 piksel dengan lebar minimum 640, dalam format JPG, GIF, atau PNG, dan file di bawah 2 MB. Bentuk 16:9 cocok dengan pemutar dan hampir semua tempat thumbnail muncul, dari hasil pencarian sampai kolom video yang disarankan, jadi gambar dengan bentuk lain akan diberi strip atau dipotong oleh YouTube, bukan oleh Anda.",
        "Alat ini menyimpan JPG secara bawaan, karena PNG 1280 × 720 dari thumbnail yang ramai detail bisa melewati 2 MB sendirian. Pada kualitas bawaan 92%, thumbnail biasa hanya beberapa ratus kilobyte, jauh di bawah batas, dengan teks dan wajah tetap tajam.",
      ],
    },
    {
      heading: "Isi penuh atau beri pinggiran",
      id: "fit",
      body: [
        "Isi penuh adalah pilihan bawaan: gambar diperbesar sampai menutupi seluruh bingkai 16:9, dan bagian yang berlebih dipotong rata di tepinya. Itu cocok untuk sebagian besar foto dan screenshot. Kalau objek utamanya dekat tepi, potong gambar lebih dulu dengan tombol potong di kartunya, supaya bagian pentingnya masuk bingkai.",
        "Beri pinggiran mempertahankan seluruh gambar dan mengisi sisa ruang dengan warna pilihan Anda. Pakai untuk foto HP yang tegak, logo persegi, atau slide 4:3 yang akan kehilangan terlalu banyak bila dipotong. Warna brand yang solid di belakang gambar biasanya tampak lebih rapi daripada strip hitam.",
      ],
    },
    {
      heading: "Desain untuk layar kecil",
      id: "small",
      body: [
        "Kebanyakan orang melihat thumbnail Anda jauh lebih kecil dari ukuran aslinya — hanya beberapa sentimeter di feed HP atau kolom samping. Bentuk besar, wajah yang jelas, dan tiga atau empat kata berhuruf besar tetap terbaca; tulisan kecil, font tipis, dan latar yang ramai hilang. Lihat pratinjau dalam ukuran kecil sebelum memutuskan.",
        "Kosongkan pojok kanan bawah. YouTube menampilkan durasi video di sana, dan apa pun yang penting di pojok itu, seperti kata terakhir judul, akan tertutup di setiap thumbnail.",
      ],
    },
    {
      heading: "Upload di YouTube Studio",
      id: "upload",
      body: [
        "Buka video di YouTube Studio, masuk ke Detail, lalu pilih Upload file di bagian Thumbnail. Thumbnail khusus hanya untuk channel yang sudah diverifikasi; kalau pilihannya abu-abu, verifikasi akun dengan nomor telepon dulu. Perubahan bisa butuh waktu untuk muncul di semua tempat karena thumbnail disimpan di cache.",
        "Simpan desain aslinya. Kalau nanti ingin mencoba judul atau potongan lain, ubah ukuran lagi dari file asli, bukan dari JPG yang sudah diunduh, supaya kualitas thumbnail tidak turun karena disimpan berulang kali.",
      ],
    },
    {
      heading: "Dari cuplikan video",
      id: "frame",
      body: [
        "Cuplikan yang kuat dari video itu sendiri adalah titik awal yang bagus. Jeda di pemutar atau editor lalu ambil screenshot layar penuh; di layar 1080p hasilnya sudah 1920 × 1080, bentuk 16:9 yang sama, jadi mengubahnya ke 1280 × 720 hanya mengubah jumlah piksel. Screenshot dari HP yang dipegang tegak berbentuk tinggi, bukan lebar — beri pinggiran, atau potong bagian yang penting.",
      ],
    },
  ],

  howToTitle: "Cara mengubah gambar jadi thumbnail YouTube",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih JPG, PNG, WEBP, GIF, atau BMP — screenshot, foto, atau desain." },
    { title: "Isi penuh atau beri pinggiran", description: "Ukuran thumbnail YouTube sudah terpilih; pilih Isi penuh atau Beri pinggiran dengan warna." },
    { title: "Unduh", description: "Ubah ukuran dan unduh JPG 1280 × 720 yang siap untuk YouTube Studio." },
  ],

  features: [
    { icon: "aspect_ratio", title: "Tepat 1280 × 720", description: "Ukuran 16:9 yang disarankan YouTube, tanpa potongan atau strip setelah di-upload." },
    { icon: "compress", title: "Di bawah 2 MB", description: "Disimpan sebagai JPG secara bawaan, jauh di bawah batas ukuran thumbnail." },
    { icon: "lock", title: "Di browser Anda", description: "Desain Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Berapa ukuran thumbnail YouTube?", a: "1280 × 720 piksel, rasio 16:9, dengan lebar minimum 640 piksel. File harus JPG, GIF, atau PNG dan di bawah 2 MB." },
    { q: "Bagaimana membuat gambar jadi 1280 × 720?", a: "Tambahkan di sini — ukuran thumbnail YouTube sudah terpilih. Pilih Isi penuh atau Beri pinggiran, lalu ubah ukuran dan unduh." },
    { q: "Kenapa YouTube bilang thumbnail terlalu besar?", a: "Filenya mungkin lebih dari 2 MB, yang mudah terjadi pada PNG. Alat ini menyimpan JPG secara bawaan, biasanya hanya beberapa ratus kilobyte." },
    { q: "Lebih baik dipotong atau diberi pinggiran?", a: "Isi penuh untuk foto dan screenshot agar bingkai penuh. Beri pinggiran untuk foto tegak, logo, atau slide yang akan kehilangan terlalu banyak bila dipotong." },
    { q: "Kenapa saya tidak bisa upload thumbnail khusus?", a: "Thumbnail khusus butuh akun YouTube yang terverifikasi. Verifikasi dengan nomor telepon di pengaturan YouTube, lalu pilihan upload muncul di Studio." },
    { q: "Bisakah memakai thumbnail PNG?", a: "Bisa, YouTube menerima PNG. Pilih PNG sebagai format hasil, tetapi pastikan file tetap di bawah 2 MB; JPG pilihan yang lebih aman." },
    { q: "Pojok mana yang sebaiknya dikosongkan?", a: "Pojok kanan bawah, tempat YouTube menampilkan durasi video. Jauhkan teks dan wajah dari situ." },
    { q: "Bisakah mengubah beberapa thumbnail sekaligus?", a: "Bisa. Tambahkan semuanya; masing-masing jadi 1280 × 720 dan diunduh bersama dalam ZIP." },
    { q: "Apakah gambar saya di-upload ke mana pun?", a: "Tidak. Gambar diubah ukurannya di browser Anda; hanya Anda yang meng-upload-nya ke YouTube." },
  ],

  security:
    "Thumbnail Anda diubah ukurannya sepenuhnya di browser. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
