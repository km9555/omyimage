import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/hd-foto.
 *
 * The biggest discovery of the Indonesian research lives here. Measured
 * (Indonesia, per month):
 *   hd foto                   823,000  KD 3   transactional
 *   foto hd                   110,000  KD 6
 *   memperjelas foto           27,100
 *   tingkatkan kualitas foto   12,100          ← close to iLoveIMG's wording
 *   jadikan foto hd             1,900
 * The Indonesian upscale query is "make my photo HD" — the Remini-style job —
 * at a volume that puts this page third in the locale, not seventh. So the
 * slug is `hd-foto`, the title leads with "HD Foto", and the H1 is the verb
 * phrase «Jadikan Foto HD», which reads as a tool name and still carries
 * "foto HD".
 *
 * Two local notes the English page does not need:
 *   • «foto pecah» (a photo that has "broken" into blocks) and «foto buram»
 *     are how the problem is described, so the copy uses both.
 *   • Photos that went through WhatsApp are already heavily compressed, and
 *     that is where most Indonesian readers' low-quality photos come from. The
 *     honest-limitation section says what that means for the result.
 */
const content: ToolPageContent = {
  toolId: "upscale-image",
  locale: "id",
  name: "Jadikan Foto HD",
  tagline:
    "Perbesar dan perjelas foto hingga 4× dengan AI yang menambahkan detail sungguhan, bukan sekadar meregangkan piksel — foto yang buram, pecah, atau terkompres jadi lebih tajam. Ditenagai Real-ESRGAN sumber terbuka.",
  category: { id: "ai", label: "AI Foto" },

  metaTitle: "HD Foto Online Gratis — Jadikan Foto HD & Lebih Jelas dengan AI | oMyImage",
  metaDescription:
    "Jadikan foto HD online gratis: perbesar hingga 4× dan perjelas foto yang pecah atau buram dengan AI Real-ESRGAN. Tanpa daftar, tanpa watermark.",

  intro:
    "Jadikan foto kecil atau beresolusi rendah lebih besar tanpa jadi buram. Alat ini memakai model sumber terbuka Real-ESRGAN untuk memperbesar foto hingga 4×, sambil membangun ulang tepi dan tekstur sehingga hasilnya tetap tajam. Foto yang pecah, buram, atau kualitasnya turun karena kompresi ikut diperjelas dalam prosesnya. Alat ini berjalan di server kami karena AI-nya butuh komputasi berat, lalu hasilnya diunduh sebagai foto beresolusi tinggi.",

  sections: [
    {
      heading: "Interpolasi dan rekonstruksi",
      id: "how",
      body: [
        "Mengubah ukuran biasa punya batas yang tidak bisa dilewati. Saat dimensi gambar diperbesar dua kali, tiga dari setiap empat piksel hasil tidak punya piksel sumber di belakangnya, sehingga resampler merata-ratakan piksel di sekitarnya. Merata-ratakan menghasilkan transisi yang halus — dengan kata lain, menghasilkan blur. Tepi melunak, tekstur halus hilang, dan hasil pembesarannya terlihat persis seperti apa adanya: diregangkan.",
        "Model super-resolution menyelesaikan masalah itu dengan cara lain. Model ini dilatih dengan sangat banyak pasangan gambar — pemandangan yang sama dalam resolusi rendah dan tinggi — dan dari situ belajar detail seperti apa yang biasanya ada di balik tepi yang buram. Diberi gambar beresolusi rendah yang baru, model memprediksi versi resolusi tingginya, bukan merata-ratakannya.",
        "Perbedaannya paling terlihat pada tepi dan tekstur. Di tempat interpolasi memberi gradasi yang lembek, model memberi batas yang tajam; di tempat interpolasi memberi bidang datar yang kabur, model memberi butiran, pori-pori, serat kain, atau dedaunan yang masuk akal.",
      ],
    },
    {
      heading: "Batasan yang perlu Anda tahu",
      id: "limits",
      body: [
        "Detail yang ditambahkan itu hasil rekaan. Itu bukan kelemahan tekniknya — memang begitulah cara kerjanya, dan untuk kebanyakan keperluan justru itulah yang Anda inginkan. Tetapi artinya hasilnya adalah rekonstruksi yang masuk akal, bukan foto yang lebih akurat, dan perbedaan itu penting dalam situasi tertentu.",
        "Jangan memakainya kalau piksel adalah bukti. Keperluan forensik, citra medis, pengukuran ilmiah, membaca pelat nomor atau dokumen dari kamera CCTV — dalam semua itu, model akan dengan senang hati menghasilkan detail meyakinkan yang sebenarnya tidak pernah ada, dan itu lebih buruk daripada gambar yang buram karena terlihat seolah-olah benar.",
        "Satu hal lagi yang sering terjadi di Indonesia: foto yang pernah dikirim lewat WhatsApp sudah dikompres berat. Model akan tetap membuatnya lebih besar dan lebih tajam, tetapi kotak-kotak bekas kompresi ikut diperbesar. Kalau foto aslinya masih ada di ponsel pengirim, minta dikirim sebagai dokumen — hasilnya jauh lebih bagus.",
        "Untuk fotografi, jualan online, cetak, dan desain, semua itu tidak jadi masalah. Anda ingin fotonya terlihat bagus, dan memang begitu hasilnya.",
      ],
    },
    {
      heading: "Mulai dari sumber terbaik yang Anda punya",
      id: "source",
      body: [
        "Model membangun ulang dari apa yang diberikan kepadanya, jadi masukan yang lebih bersih menghasilkan hasil yang lebih baik. Foto asli yang kecil tidak masalah — justru itu tujuannya — tetapi foto kecil yang sudah beberapa kali melewati kompresi JPG adalah masalah, karena kotak-kotak dan halo di tepinya ikut diperbesar dan dipertajam bersama detail yang asli.",
        "Kalau Anda punya pilihan antara PNG 600 piksel dan JPG 600 piksel dari gambar yang sama, pakai yang PNG. Kalau Anda punya file asli yang lebih besar yang pernah Anda kecilkan, kembali ke file itu. Dan kalau gambarnya adalah tangkapan layar dari tangkapan layar, artefaknya akan direproduksi dengan setia dan meyakinkan.",
      ],
    },
    {
      heading: "Kapan menjadikan foto HD paling berguna",
      id: "uses",
      body: [
        "Kasus paling umum adalah foto yang cukup bagus di layar tetapi tidak cukup untuk dicetak. Foto produk 800 piksel terlihat baik di halaman toko, tetapi pecah saat dicetak di brosur atau spanduk, dan menjadikannya HD sering menjadi pembeda antara harus memotret ulang atau tidak.",
        "Pemakaian umum lainnya: foto keluarga lama yang di-scan dengan resolusi rendah, gambar yang diambil dari situs lama tanpa file asli, thumbnail yang perlu dijadikan gambar utama, dan logo beresolusi rendah yang harus dipasang di papan nama. Dalam semua kasus itu, alternatifnya bukan gambar yang lebih bagus — melainkan tidak ada gambar sama sekali.",
      ],
    },
  ],

  howToTitle: "Cara menjadikan foto HD",
  steps: [
    { title: "Unggah", description: "Pilih foto, atau seret dan lepas ke area kerja." },
    { title: "Pilih skala", description: "Pilih 2×, 3×, atau 4× lalu klik Jadikan HD — AI menambahkan detail sambil memperbesar." },
    { title: "Unduh", description: "Unduh foto Anda yang lebih besar dan lebih tajam." },
  ],

  features: [
    { icon: "hd", title: "Hingga 4× lebih besar", description: "Perbesar foto kecil atau beresolusi rendah sementara AI membangun ulang detailnya, bukan membuatnya buram." },
    { icon: "auto_awesome", title: "Detail dipulihkan", description: "Real-ESRGAN memulihkan tepi dan tekstur agar hasilnya tajam, bahkan pada foto yang terkompres berat." },
    { icon: "verified_user", title: "Mesin sumber terbuka", description: "Ditenagai Real-ESRGAN — gratis, sumber terbuka, dan boleh dipakai untuk keperluan komersial." },
  ],

  faqs: [
    { q: "Seberapa besar foto bisa diperbesar?", a: "Hingga 4×. Gambar 500×500 menjadi 2000×2000, dengan detail yang dibangun ulang oleh AI, bukan blur yang lembek." },
    { q: "Bisakah dipakai untuk memperjelas foto, bukan memperbesarnya?", a: "Bisa — prosesnya sama. Pilih 2× untuk proses ringan yang mempertajam tepi, membersihkan noise, dan memulihkan detail pada foto yang buram atau terkompres. Perlu diingat hasilnya tetap dua kali ukuran aslinya; kecilkan lagi setelahnya kalau Anda butuh ukuran semula." },
    { q: "Mesin apa yang dipakai?", a: "Real-ESRGAN, model super-resolution sumber terbuka yang boleh dipakai untuk keperluan komersial." },
    { q: "Mengapa butuh beberapa detik?", a: "Menjadikan foto HD butuh komputasi berat dan berjalan di server kami. Foto yang lebih besar dan skala yang lebih tinggi butuh waktu lebih lama." },
    { q: "Apakah foto yang sangat buram bisa jadi jelas?", a: "Ketajaman dan detailnya meningkat nyata, tetapi pada kasus ekstrem model tidak bisa menciptakan informasi yang memang tidak ada." },
    { q: "Apakah foto saya disimpan?", a: "Tidak. Hasilnya hanya disimpan sebentar untuk tautan unduhan Anda dan terhapus otomatis dalam satu jam." },
    { q: "Apa bedanya dengan sekadar mengubah ukuran?", a: "Mengubah ukuran melakukan interpolasi di antara piksel yang sudah ada, itulah sebabnya gambar yang diperbesar jadi lembek — tidak ada detail baru untuk dipakai. Model ini dilatih dengan jutaan pasangan gambar dan memprediksi seperti apa kira-kira detail yang hilang, sehingga tepi tetap tajam dan tekstur dibangun ulang, bukan dioles." },
    { q: "Apakah detail yang ditambahkan itu asli?", a: "Tidak, dan ini penting. Model merekayasa detail yang masuk akal, bukan memulihkan sesuatu yang pernah terekam. Untuk fotografi, desain, dan cetak, itulah yang Anda inginkan. Untuk apa pun yang bersifat bukti, forensik, medis, atau ilmiah, ini alat yang salah, karena hasilnya berisi informasi yang tidak pernah ada di foto aslinya." },
    { q: "Foto seperti apa yang hasilnya paling bagus?", a: "Foto dengan tekstur sungguhan — wajah, pemandangan, kain, dedaunan. Grafik resolusi rendah yang bersih juga hasilnya baik. Model kesulitan dengan gambar yang sudah terkompres berat, seperti foto yang berkali-kali dikirim ulang lewat WhatsApp, karena artefak JPG-nya ikut diperbesar dengan setia." },
    { q: "Apakah ada batas ukuran?", a: "Ada. Jumlah piksel masukan dibatasi karena proses ini memang mahal secara komputasi — bebannya bertambah sesuai ukuran hasil, bukan ukuran masukan. Gambar yang sangat besar langsung ditolak di awal, bukan gagal di tengah jalan. Kalau terkena batas ini, crop bagian yang benar-benar Anda perlukan." },
    { q: "Hasilnya dalam format apa?", a: "Sama dengan yang Anda unggah — JPG kembali sebagai JPG, PNG sebagai PNG, WEBP sebagai WEBP. JPG di-encode ulang dengan kualitas tinggi dan resolusi warna penuh, sehingga ukuran filenya tetap wajar dan tidak membengkak menjadi PNG lossless yang berkali-kali lebih besar. Transparansi dipertahankan untuk PNG dan WEBP." },
    { q: "Bisakah foto dijadikan HD lebih dari sekali?", a: "Bisa, tetapi jarang membantu. Proses kedua bekerja dari detail rekaan proses pertama, bukan dari informasi sungguhan, sehingga kesalahannya menumpuk dan hasilnya mulai terlihat artifisial. Satu kali proses dari foto asli terbaik yang Anda punya hampir selalu lebih baik." },
  ],

  security:
    "Proses menjadikan foto HD berjalan di server kami menggunakan mesin sumber terbuka Real-ESRGAN. Hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan terhapus otomatis dalam satu jam. Kami tidak pernah membagikan atau memakai ulang foto Anda.",

  rating: { value: "4.8", count: "612" },

  ui: {
    "or drop a JPG, PNG or WEBP here": "atau lepas JPG, PNG, atau WEBP di sini",
    "Upscale": "Jadikan HD",
    "Upscaling…": "Memproses…",
    "Scale factor": "Perbesar",
    "AI upscaling isn't enabled on this server (Real-ESRGAN not installed).":
      "Fitur HD dengan AI belum aktif di server ini (Real-ESRGAN belum terpasang).",
  },
};

export default content;
