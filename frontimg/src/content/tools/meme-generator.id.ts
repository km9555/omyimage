import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/meme-generator.
 *
 * Measured (Indonesia, per month): meme generator 9,900 (KD 63) vs buat meme
 * 170. The loanword is the name, slug and H1; «buat meme» and «bikin meme»
 * live in the title tail and aliases.ts.
 *
 * The default captions are drawn INTO the image, so they are translated and
 * kept upper case («TEKS ATAS», «TEKS BAWAH») — Indonesian has case, and the
 * all-caps Impact look is the convention here as everywhere. The note the page
 * adds for this language: Indonesian sentences run longer than English ones
 * («yang», «dengan», affixed verbs), so keeping each line short matters more,
 * and the tool's automatic wrapping is what keeps a long caption inside the
 * frame.
 */
const content: ToolPageContent = {
  toolId: "meme-generator",
  locale: "id",
  // The loanword leads (9,900/mo); «bikin meme» makes the H1 Indonesian rather
  // than a copy of the English one. Breadcrumb and schema keep the short name.
  name: "Meme Generator: Bikin Meme",
  seoName: "Meme Generator",
  crumbLabel: "Meme Generator",
  tagline:
    "Buat meme online — tambahkan teks atas dan bawah khas meme ke gambar apa pun dengan pratinjau langsung, lalu ekspor sebagai PNG, JPG, atau WEBP. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Meme Generator Online Gratis — Bikin Meme dari Foto Sendiri | oMyImage",
  metaDescription:
    "Bikin meme online gratis: teks atas dan bawah bergaya Impact dengan garis tepi, font, ukuran, dan warna yang bisa diatur, dari foto Anda sendiri. Tanpa watermark, tanpa daftar, di browser.",

  intro:
    "Ubah gambar apa pun menjadi meme dalam hitungan detik. Meme Generator ini menambahkan teks atas dan bawah yang tebal dan bergaris tepi — gaya meme klasik — ke foto atau template Anda sendiri, dengan kendali penuh atas font, ukuran, dan warna, serta pratinjau langsung selagi Anda mengetik. Teks yang panjang otomatis turun baris. Ekspor sebagai PNG, JPG, atau WEBP — semuanya di browser Anda, tidak ada yang diunggah.",

  sections: [
    {
      heading: "Kenapa tampilan meme seperti itu",
      id: "convention",
      body: [
        "Huruf kapital putih yang tebal dengan garis tepi hitam bukan sekadar pilihan gaya, melainkan jawaban atas masalah teknis. Teks di atas foto harus tetap terbaca apa pun yang ada di bawahnya, dan tidak ada satu warna pun yang sanggup — putih hilang di langit, hitam hilang di bayangan.",
        "Garis tepi menyelesaikannya dengan menjamin selalu ada pinggiran bernada kebalikan di mana pun huruf itu jatuh. Impact, atau huruf sans-serif tebal yang ramping, melengkapi separuh lainnya: bentuk hurufnya cukup sempit agar satu kalimat penuh muat melintang, dan cukup tebal untuk bertahan dari kompresi yang agresif.",
        "Hasilnya langsung dikenali, dan itu sendiri berguna. Formatnya memberi tahu apa gambar ini sebelum ada yang membaca satu kata pun.",
      ],
    },
    {
      heading: "Teks atas, teks bawah, dan alasannya",
      id: "structure",
      body: [
        "Struktur dua baris adalah pembuka dan punchline, dan bekerja karena mata membaca gambar di antara keduanya. Teks atas memasang premisnya, gambar memberi konteks, dan baris bawah menuntaskan leluconnya — jeda itulah yang membuatnya lucu.",
        "Karena itu, menjejalkan semuanya ke satu baris biasanya garing, dan teks yang sangat panjang gagal: saat pembaca sampai di ujung, mereka sudah berhenti melihat gambarnya. Kalimat bahasa Indonesia cenderung lebih panjang daripada bahasa Inggris, jadi usahakan setiap baris singkat — idealnya di bawah sekitar delapan kata. Teks yang tetap panjang akan otomatis turun baris agar tidak keluar dari bingkai.",
        "Tata letak alternatifnya — pita putih di atas atau di bawah gambar — cocok untuk keterangan yang lebih panjang dan komentar, dan membiarkan fotonya tidak tertutup. Hasilnya terbaca sebagai keterangan, bukan meme, yang kadang justru nada yang lebih tepat.",
      ],
    },
    {
      heading: "Pengaturan ekspor yang tahan dibagikan",
      id: "export",
      body: [
        "Sekitar 800 piksel lebarnya adalah titik yang paling praktis. Meme dinikmati di ponsel, dan setiap platform mengompres ulang apa yang Anda unggah, jadi ekspor 4000 piksel tidak memberi apa-apa dan langsung dibuang oleh layanan pertama yang disentuhnya.",
        "Kompresi ulang itu perlu dipahami, karena menjelaskan kenapa meme yang banyak dibagikan makin lama makin rusak. Setiap platform — dan setiap grup WhatsApp yang meneruskannya — mengompres gambarnya lagi, artefak menumpuk di atas artefak, dan setelah cukup banyak lompatan gambarnya jelas menurun. Anda tidak bisa mencegahnya, tetapi mulai dari sumber yang bersih dengan ukuran yang wajar sangat memperlambatnya.",
        "Ekspor sebagai JPG berkualitas tinggi untuk meme dari foto, atau PNG kalau gambarnya grafis datar atau tangkapan layar — tepi hurufnya tetap lebih tajam.",
      ],
    },
    {
      heading: "Semuanya tetap di perangkat Anda",
      id: "privacy",
      body: [
        "Gambar disusun di canvas di dalam browser Anda, jadi tidak ada yang diunggah. Ini penting diketahui karena banyak sekali meme dibuat dari bahan pribadi — tangkapan layar grup chat, foto teman kantor, sesuatu dari album keluarga — yang tidak ingin diserahkan ke server hanya untuk menambahkan dua baris teks.",
        "Artinya juga, alat ini tetap bekerja tanpa koneksi setelah halamannya termuat, dan tidak ada antrean, batas pemakaian, atau akun.",
      ],
    },
  ],

  howToTitle: "Cara membuat meme",
  steps: [
    { title: "Unggah gambar", description: "Pilih gambar atau template meme, atau seret ke area kerja." },
    { title: "Tambahkan teks", description: "Ketik teks atas dan bawah, lalu atur font, ukuran, warna, dan garis tepinya dengan pratinjau langsung." },
    { title: "Ekspor", description: "Klik Ekspor untuk mengunduh meme Anda sebagai PNG, JPG, atau WEBP." },
  ],

  features: [
    { icon: "text_fields", title: "Teks meme klasik", description: "Teks tebal bergaya Impact dengan garis tepi hitam, huruf kapital otomatis, dan turun baris otomatis untuk teks yang panjang." },
    { icon: "palette", title: "Gaya bebas diatur", description: "Ganti font, ukuran, warna teks, serta warna dan ketebalan garis tepi agar cocok dengan gaya meme apa pun." },
    { icon: "lock", title: "Privat dan instan", description: "Meme Anda disusun sepenuhnya di browser — gambarnya tidak pernah diunggah ke mana pun." },
  ],

  faqs: [
    { q: "Bisakah memakai gambar sendiri?", a: "Bisa. Unggah JPG, PNG, WEBP, atau GIF apa pun dan tambahkan teks — tidak ada kumpulan template yang membatasi." },
    { q: "Apakah teks yang panjang otomatis turun baris?", a: "Ya. Teks otomatis dipecah menjadi beberapa baris sehingga selalu muat selebar gambar." },
    { q: "Format apa saja yang bisa diekspor?", a: "PNG (lossless), JPG (lebih kecil), atau WEBP." },
    { q: "Apakah gratis?", a: "Sepenuhnya gratis, tanpa watermark dan tanpa daftar." },
    { q: "Apakah gambar saya privat?", a: "Ya. Semuanya disusun secara lokal di browser Anda; tidak ada yang diunggah." },
    { q: "Kenapa teks meme selalu putih dengan garis tepi hitam?", a: "Karena hanya kombinasi itu yang tetap terbaca di gambar apa pun. Putih saja hilang di langit yang terang; hitam saja lenyap di bayangan. Garis tepi menjamin kontras dengan apa pun di belakangnya, itulah sebabnya konvensi ini bertahan tanpa berubah selama dua puluh tahun." },
    { q: "Font apa yang sebaiknya dipakai?", a: "Impact adalah yang klasik, dan klasik karena alasan yang jelas — ramping, tebal, dan terbaca di ukuran kecil, sehingga satu baris panjang tetap muat melintang. Huruf sans-serif tebal dan ramping lainnya bekerja sama baiknya kalau Impact tidak tersedia." },
    { q: "Teksnya sebaiknya di dalam gambar atau di atasnya?", a: "Di dalam adalah format standar dan lebih awet saat dibagikan, karena meme menjadi satu gambar tanpa bagian yang bisa terlepas. Teks di pita atas dan bawah cocok untuk keterangan yang lebih panjang dan membiarkan gambarnya tidak tertutup, penting kalau gambarnya sendiri yang membawa leluconnya." },
    { q: "Ukuran berapa yang sebaiknya diekspor?", a: "Sekitar 800 piksel lebarnya sudah cukup. Meme dilihat di ponsel dan dikompres ulang oleh setiap platform yang dilewatinya, jadi file yang sangat besar tidak memberi apa-apa dan hanya lebih lama diunggah." },
    { q: "Kenapa meme saya terlihat lebih jelek setelah diposting?", a: "Karena platform mengompres ulang setiap unggahan, dan setiap kali dibagikan ulang, gambarnya dikompres lagi. Kerusakan yang menumpuk itulah yang membuat meme yang banyak dibagikan tampak pudar dan kotak-kotak. Mulai dari gambar yang bersih dengan ukuran wajar memperlambat penurunannya." },
    { q: "Bisakah memakai gambar apa saja?", a: "Secara teknis bisa. Namun ingat bahwa foto ada pemiliknya, dan meme yang memakai foto atau wajah seseorang bisa menimbulkan masalah hak cipta dan hak atas citra diri kalau dipakai untuk keperluan komersial. Untuk pemakaian pribadi dan media sosial, hal ini jarang menjadi masalah nyata." },
  ],

  security:
    "Gambar Anda tetap privat. Meme disusun sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "421" },

  ui: {
    // MemeTool.tsx — default captions, drawn INTO the image. Upper case is
    // correct for Indonesian, which has case.
    "TOP TEXT": "TEKS ATAS",
    "BOTTOM TEXT": "TEKS BAWAH",
    // module-scope FONTS
    "Impact (classic)": "Impact (klasik)",
    "Anton / Sans": "Anton / Sans", // i18n-same — font family names
    "Serif": "Serif", // i18n-same — the Indonesian design term
    // MemeTool.tsx
    "Couldn't read that image.": "Gambar itu tidak bisa dibaca.",
    "Please select an image file.": "Pilih file gambar.",
    "Meme exported — download started.": "Meme berhasil diekspor — unduhan dimulai.",
    "Export failed.": "Ekspor gagal.",
    "or drop a JPG, PNG, WEBP or GIF here": "atau letakkan JPG, PNG, WEBP, atau GIF di sini",
    "Meme settings": "Pengaturan meme",
    "Meme Settings": "Pengaturan Meme",
    "Export": "Ekspor",
    "Exporting…": "Mengekspor…",
    "Long captions wrap automatically. Everything runs in your browser.":
      "Teks yang panjang otomatis turun baris. Semuanya berjalan di browser Anda.",
    "Export meme": "Ekspor meme",
    "Caption": "Teks",
    "Top text": "Teks atas",
    "Bottom text": "Teks bawah",
    "Font": "Font", // i18n-same — the word Indonesian apps use
    "Size": "Ukuran",
    "UPPERCASE": "HURUF KAPITAL",
    "Style": "Gaya",
    "Text color": "Warna teks",
    "Outline color": "Warna garis tepi",
    "Outline thickness": "Ketebalan garis tepi",
    "PNG (lossless)": "PNG (lossless)", // i18n-same — «lossless» is the term Indonesian uses
    "JPG (smaller)": "JPG (lebih kecil)",
  },
};

export default content;
