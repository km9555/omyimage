import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/foto-profil-wa-full (variant of resize-image). "PP WA full" is the local phrasing. */
const content: ToolPageContent = {
  toolId: "whatsapp-dp-resizer",
  locale: "id",
  name: "Foto Profil WA Full",
  tagline:
    "Pasang foto utuh sebagai foto profil WA tanpa terpotong — dimuat ke dalam persegi dengan pinggiran berwarna — atau potong agar penuh. 500 × 500 px, gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "PP WA Full Tanpa Crop — Foto Profil WhatsApp Utuh, Gratis | oMyImage",
  metaDescription:
    "Buat foto profil WA full dari foto apa pun: muat seluruh foto ke dalam persegi tanpa terpotong, atau isi penuh. 500 × 500 px, gratis, di browser, tanpa upload.",

  intro:
    "WhatsApp hanya menerima foto profil persegi, jadi saat Anda memasang foto grup yang lebar atau foto seluruh badan sebagai PP, WhatsApp memaksa memotong sebagian besarnya. Alat ini menyelesaikannya dari arah sebaliknya: seluruh foto dimuat ke dalam persegi, dan ruang kosongnya diisi warna, sehingga WhatsApp tidak punya apa-apa lagi untuk dipotong. Tambahkan foto, pilih warna pinggiran, lalu unduh gambar 500 × 500 yang terpasang utuh.",

  sections: [
    {
      heading: "PP WA full tanpa crop",
      id: "no-crop",
      body: [
        "Alat ini terbuka dengan Beri pinggiran terpilih. Foto diperkecil sampai seluruhnya muat di dalam persegi, lalu strip di atas dan bawah — atau di kiri dan kanan — diisi warna pinggiran, putih secara bawaan. Saat kotak potong WhatsApp muncul, kotaknya sudah mencakup seluruh gambar, jadi tinggal ketuk Selesai tanpa kehilangan siapa pun di tepi foto.",
        "Pilih warna yang cocok dengan foto: putih atau hitam netral, dan warna yang diambil dari foto itu sendiri sering tampak lebih alami daripada keduanya. Ganti ke Isi penuh bila Anda lebih suka close-up yang memenuhi seluruh lingkaran.",
      ],
    },
    {
      heading: "Lingkaran menyembunyikan sudut",
      id: "circle",
      body: [
        "WhatsApp menampilkan foto profil berbentuk lingkaran, baik di daftar chat maupun di profil, jadi sudut persegi tidak pernah terlihat. Wajah dan tulisan di dekat sudut akan terpotong; taruh bagian penting di tengah.",
        "Pada foto berpinggiran, lingkaran sebagian besar hanya memotong pinggirannya, itulah sebabnya cara ini sangat efektif. Namun foto grup yang sangat lebar akan tampak kecil di dalam lingkaran — kalau wajah jadi terlalu kecil, potong foto sedikit dulu supaya orang-orangnya mengisi lebih banyak ruang.",
      ],
    },
    {
      heading: "Ukuran yang dipakai",
      id: "size",
      body: [
        "WhatsApp tidak mengumumkan ukuran resmi foto profil; semua yang di-upload akan dikompres ulang. 500 × 500 piksel adalah ukuran yang umum dipakai, tetap tajam di HP tanpa berat yang tidak perlu; 192 × 192 biasanya disebut sebagai ukuran terkecil yang masih layak. Untuk persegi yang lebih besar, ubah lebar dan tinggi di bawah preset, misalnya 1080 × 1080; kedua angka harus sama agar tetap persegi.",
        "Ukuran yang sama berlaku untuk foto profil WhatsApp Business, di mana logo biasanya paling bagus diberi ruang putih di sekelilingnya supaya lingkaran tidak memotong hurufnya.",
      ],
    },
    {
      heading: "Memasangnya sebagai foto profil",
      id: "set",
      body: [
        "Simpan gambar hasil unduhan di HP, buka WhatsApp, masuk ke Setelan dan ketuk foto profil Anda, lalu pilih Edit atau ikon kamera dan ambil gambar dari galeri. Karena sudah persegi, langkah potong tidak mengubah apa pun. Di komputer, unduh di sana lalu pilih lewat WhatsApp Web atau aplikasi desktop dengan cara yang sama.",
      ],
    },
    {
      heading: "Foto untuk grup dan status",
      id: "groups",
      body: [
        "Ikon grup juga berbentuk lingkaran, jadi trik yang sama menjaga foto satu tim atau logo tetap utuh sebagai foto grup. Untuk status, yang berupa gambar tinggi layar penuh, pilih preset Status WhatsApp (1080 × 1920) dari daftar preset.",
      ],
    },
    {
      heading: "Foto keluarga dan wisuda",
      id: "family",
      body: [
        "Foto keluarga, foto wisuda bersama orang tua, atau foto liburan biasanya diambil melebar, dan dengan crop biasa pasti ada yang terpotong. Dengan pinggiran, semua orang tetap ada di PP; bila latar fotonya terang, pinggiran putih nyaris menyatu dan foto profil terlihat utuh.",
      ],
    },
  ],

  howToTitle: "Cara memasang foto utuh sebagai foto profil WA",
  steps: [
    { title: "Tambahkan foto", description: "Pilih JPG, PNG, WEBP, GIF, atau BMP — bentuk apa pun." },
    { title: "Pilih warna pinggiran", description: "Beri pinggiran sudah aktif; pilih putih, hitam, atau warna apa pun untuk ruang kosong." },
    { title: "Unduh dan pasang", description: "Unduh gambar persegi dan pasang sebagai foto profil — tanpa perlu dipotong." },
  ],

  features: [
    { icon: "crop_square", title: "Tanpa terpotong", description: "Seluruh foto muat di persegi, jadi WhatsApp tidak punya apa-apa untuk dipotong." },
    { icon: "palette", title: "Warna pinggiran bebas", description: "Isi ruang kosong dengan putih, hitam, atau warna yang cocok dengan foto." },
    { icon: "lock", title: "Privat", description: "Foto Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Bagaimana membuat PP WA full tanpa crop?", a: "Tambahkan foto di sini dengan Beri pinggiran terpilih. Seluruh foto dimuat ke dalam persegi berpinggiran warna, jadi langkah potong WhatsApp mempertahankan semuanya." },
    { q: "Berapa ukuran foto profil WA yang tepat?", a: "WhatsApp tidak punya ukuran resmi. 500 × 500 piksel pilihan umum yang tajam; 192 × 192 biasanya disebut sebagai minimum." },
    { q: "Kenapa WhatsApp memotong foto saya?", a: "WhatsApp hanya menerima gambar persegi dan menampilkannya berbentuk lingkaran. Foto lebar atau tinggi harus dipotong, kecuali diberi pinggiran dulu sampai persegi." },
    { q: "Bisakah memilih warna latar?", a: "Bisa. Putih adalah bawaan; pilih hitam atau warna apa pun di Warna pinggiran." },
    { q: "Apakah bisa untuk WhatsApp Business?", a: "Bisa. Foto profil Business juga berbentuk lingkaran; logo paling bagus diberi ruang putih di sekelilingnya." },
    { q: "Bisakah membuat ikon grup?", a: "Bisa. Ikon grup berbentuk lingkaran, jadi pinggiran membuat seluruh foto grup atau logo tetap terlihat." },
    { q: "Apakah WhatsApp menurunkan kualitas?", a: "WhatsApp mengompres foto profil sendiri. Memulai dari persegi tajam 500 × 500 atau lebih besar memberi hasil terbaik setelahnya." },
    { q: "Apakah foto saya di-upload?", a: "Tidak. Foto diubah ukurannya di browser Anda; hanya Anda yang memasangnya di WhatsApp." },
    { q: "Kenapa PP WA saya terlihat buram?", a: "WhatsApp mengompres foto profil. Pakai foto asli yang tajam, bukan foto yang sudah diteruskan lewat chat, dan buat persegi lebih besar seperti 1080 × 1080." },
    { q: "Bisakah menyiapkan beberapa foto sekaligus?", a: "Bisa. Tambahkan semua foto — masing-masing jadi persegi 500 × 500 berpinggiran, dan semuanya diunduh dalam satu ZIP." },
  ],

  security:
    "Foto Anda diubah ukurannya sepenuhnya di browser. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
