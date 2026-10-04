import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/ganti-background-foto (variant of remove-background
 * + browser composite). Indonesia 2026-10-04: "ganti background foto"
 * 135,000/mo at KD 0, "ganti background foto merah" 4,400, "pas foto
 * background merah" 1,600, "ganti background foto biru" 880. SERP: remove.bg,
 * Canva, Fotor, Photoroom. The pas foto merah/biru is the Indonesian job.
 */
const content: ToolPageContent = {
  toolId: "change-background-color",
  locale: "id",
  name: "Ganti Background Foto",
  tagline:
    "Ganti background foto jadi merah, biru, putih, atau warna apa pun. AI memotong orangnya atau bendanya, lalu Anda mencoba warna seketika — dibuat untuk pas foto, KTP, kartu pelajar, dan foto profil.",
  category: { id: "ai", label: "AI Foto" },

  metaTitle: "Ganti Background Foto Online — Merah, Biru, Putih, Gratis | oMyImage",
  metaDescription:
    "Ganti background foto jadi merah, biru, putih, atau warna apa pun secara online dengan AI — pas untuk pas foto CPNS, sekolah, dan kerja. Sekali unggah, coba semua warna gratis.",

  intro:
    "Pendaftaran CPNS, sekolah, kampus, dan lamaran kerja sangat ketat soal satu hal: warna background pas foto. Ada yang meminta merah, ada yang biru, ada yang putih, dan foto yang diambil di depan dinding rumah langsung ditolak. Alat ini memotong orangnya (atau produk) dengan model AI lalu meletakkannya di atas warna polos pilihan Anda, sehingga foto yang diambil di rumah bisa dipakai sebagai pas foto atau foto profil. Pemotongan dilakukan sekali; setelah itu mengganti warna ke merah, biru, putih, atau warna lain langsung terlihat dan gratis.",

  sections: [
    {
      heading: "Warna background apa yang diminta?",
      id: "colours",
      body: [
        "Pas foto berlatar merah dan biru adalah standar di Indonesia untuk ijazah, pendaftaran sekolah dan kampus, CPNS, lamaran kerja, sampai berbagai kartu; warna mana yang dipakai ditentukan oleh instansinya, jadi selalu ikuti pengumumannya. Background putih biasanya diminta untuk paspor dan visa, dan juga untuk foto produk di marketplace.",
        "Alat ini memberi warnanya; alat ini tidak tahu warna mana yang diminta instansi Anda. Empat warna pas foto di bagian atas pengaturan adalah titik awal — putih, biru, merah, dan abu-abu muda — dan warna lain bisa dipilih tepat di bawahnya.",
      ],
    },
    {
      heading: "Bagaimana background diganti",
      id: "how",
      body: [
        "Pertama, model AI segmentasi di server kami menemukan objek utamanya — orang lengkap dengan rambut dan bahu, atau produknya — lalu mengembalikannya sebagai potongan dengan sekeliling transparan. Kemudian browser Anda meletakkan potongan itu di atas warna yang dipilih dan menyimpannya sebagai JPG.",
        "Karena langkah kedua terjadi di perangkat Anda, mengganti warna tidak menjalankan AI lagi: Anda bisa membandingkan merah, biru, dan putih dalam beberapa detik, dan hanya langkah pertama yang dihitung sebagai satu proses AI.",
      ],
    },
    {
      heading: "Cara mendapatkan tepi rambut yang rapi",
      id: "edges",
      body: [
        "Rambut adalah bagian tersulit dari setiap pemotongan. Foto orangnya di depan latar yang kontras dengan rambut — dinding terang di belakang rambut hitam — dan hindari cahaya jendela dari belakang, yang membuat tepi rambut berpendar. Untuk yang berhijab, pastikan tepi hijab terlihat jelas dan tidak menyatu dengan warna dinding.",
        "Pastikan bahu dan puncak kepala masuk utuh ke dalam foto, dengan sedikit ruang di sekelilingnya. Pemotongan tidak bisa membuat ulang bagian kepala yang terpotong di foto asli, dan aturan pas foto memang biasanya meminta ruang di atas kepala.",
      ],
    },
    {
      heading: "Setelah background diganti",
      id: "next",
      body: [
        "Pas foto juga punya aturan ukuran. Setelah background benar, potong ke rasio 3x4 atau 4x6 dengan Crop Foto, dan kalau formulir membatasi ukuran file, kecilkan di salah satu halaman kompres — portal pendaftaran biasanya meminta di bawah 100 KB atau 200 KB.",
      ],
    },
    {
      heading: "Background seragam untuk foto profil dan tim",
      id: "profile",
      body: [
        "Tim atau kantor yang memasang foto karyawan di situs, kartu nama digital, atau grup kerja paling mudah terlihat seragam dengan warna background yang sama. Unggah setiap foto, pilih warna yang sama — misalnya warna perusahaan — dan semua potret akan tampak seperti satu seri walaupun diambil di tempat berbeda.",
      ],
    },
  ],

  howToTitle: "Cara ganti background foto",
  steps: [
    { title: "Unggah foto", description: "Pilih JPG, PNG, atau WEBP yang orang atau bendanya terlihat jelas." },
    { title: "Hapus background", description: "Klik Ganti background — AI memotong objeknya dalam beberapa detik." },
    { title: "Pilih warna & unduh", description: "Coba merah, biru, putih, atau warna apa pun seketika, lalu unduh JPG-nya." },
  ],

  features: [
    { icon: "format_color_fill", title: "Warna apa pun, seketika", description: "Merah, biru, dan putih sekali ketuk, plus pemilih untuk warna lain — tanpa proses AI tambahan per warna." },
    { icon: "badge", title: "Dibuat untuk pas foto", description: "Potongan rapi di sekitar rambut dan bahu, di atas warna polos yang diminta formulir." },
    { icon: "verified_user", title: "Tanpa watermark", description: "Gratis, tanpa ada yang tercetak di hasilnya." },
  ],

  faqs: [
    { q: "Bagaimana cara ganti background foto jadi merah?", a: "Unggah foto dan klik Ganti background. Setelah potongannya muncul, ketuk warna merah di bagian atas pengaturan — warnanya langsung berubah — lalu unduh JPG-nya." },
    { q: "Bisakah membuat pas foto background biru atau putih?", a: "Bisa. Setelah dipotong, ketuk warna biru atau putih, atau pilih warna apa pun dengan pemilih warna. Perubahannya langsung terlihat." },
    { q: "Apakah ganti warna memakai proses AI lagi?", a: "Tidak. Hanya langkah pertama — menemukan objek — yang berjalan di server kami. Mencoba warna lain setelahnya terjadi di browser Anda." },
    { q: "Apakah fotonya pasti lolos syarat pendaftaran?", a: "Background-nya akan polos dan rata, dan itu bagian yang dikendalikan alat ini. Ukuran, posisi kepala, pakaian, pencahayaan, dan ekspresi adalah aturan terpisah yang perlu Anda cek di pengumuman." },
    { q: "Bisakah dipakai untuk foto produk?", a: "Bisa. Marketplace sering meminta background putih bersih; alat ini memotong produknya dan meletakkannya di atas putih sama seperti foto orang." },
    { q: "Kenapa hasilnya JPG, bukan PNG?", a: "Background warna polos tidak punya transparansi yang perlu disimpan, dan hampir semua formulir meminta JPG. Untuk potongan transparan, gunakan Hapus Background." },
    { q: "Bagaimana kalau tepi rambut atau hijab kurang rapi?", a: "Foto ulang di depan latar yang kontras, tanpa cahaya jendela dari belakang, dengan ruang di sekitar kepala, lalu ulangi. Semakin jelas batas rambut atau hijab di foto asli, semakin rapi potongannya." },
    { q: "Apakah foto saya disimpan?", a: "Hanya sebentar. Potongan dibuat di server kami, disimpan di balik tautan pribadi, dan dihapus otomatis dalam satu jam; warnanya diterapkan di perangkat Anda." },
    { q: "Bisakah mengganti background foto grup?", a: "Bisa, selama orang-orangnya berdiri berdekatan dan terlihat utuh; model memotong semuanya sebagai satu objek. Untuk pas foto, tetap gunakan foto satu orang." },
  ],

  security:
    "Penghapusan background berjalan di server kami dengan mesin open-source rembg; hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan dihapus otomatis dalam satu jam. Warna baru diterapkan di browser Anda, dan tidak ada yang dibagikan atau dipakai ulang.",
};

export default content;
