import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-ukuran-foto-cm (variant of resize-image, Print size mode). */
const content: ToolPageContent = {
  toolId: "resize-image-in-cm",
  locale: "id",
  name: "Ubah Ukuran Foto dalam cm",
  tagline:
    "Ubah ukuran gambar ke ukuran tepat dalam sentimeter, milimeter, atau inci pada 300 DPI atau DPI lain — DPI tersimpan di file, jadi tercetak tepat di ukuran itu. Gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ubah Ukuran Foto dalam cm Online — Ukuran Cetak Tepat, Gratis | oMyImage",
  metaDescription:
    "Ubah ukuran gambar ke ukuran tepat dalam sentimeter, milimeter, atau inci pada 300 DPI atau lainnya, dengan DPI tersimpan di file. Gratis, di browser, tanpa upload.",

  intro:
    "Formulir, studio foto, dan template dokumen menyebut ukuran gambar dalam sentimeter — pas foto 3 × 4, cetak 4R, gambar selebar 8 cm di laporan. Padahal gambar tersusun dari piksel, jadi ukurannya perlu diterjemahkan. Alat ini melakukannya: masukkan ukuran dalam cm, mm, atau inci, pilih DPI, lalu gambar diubah ke jumlah piksel yang tepat dan DPI-nya disimpan di file, sehingga printer atau pengolah kata mana pun menempatkannya di ukuran yang Anda minta.",

  sections: [
    {
      heading: "Dari sentimeter ke piksel",
      id: "formula",
      body: [
        "Piksel = ukuran dalam inci × DPI, dan satu inci sama dengan 2,54 cm. Pada 300 DPI, setiap sentimeter butuh sekitar 118 piksel. Jadi pas foto 3 × 4 cm menjadi 354 × 472 piksel, dan satu halaman A4 berukuran 21 × 29,7 cm menjadi 2480 × 3508 piksel.",
        "Anda tidak perlu menghitungnya sendiri. Ketik ukurannya, dan panel menampilkan ukuran piksel gambar pertama pada DPI yang dipilih. Ganti antara cm, mm, dan inci kapan saja; nilainya dikonversi sehingga ukuran fisiknya tetap sama.",
      ],
    },
    {
      heading: "Ukuran umum pada 300 DPI",
      id: "common",
      body: [
        "Pas foto 2 × 3 cm: 236 × 354 px. Pas foto 3 × 4 cm: 354 × 472 px. Pas foto 4 × 6 cm: 472 × 709 px. Cetak 4R (4 × 6 inci, 10,2 × 15,2 cm): 1200 × 1800 px. Halaman A4: 2480 × 3508 px.",
        "Untuk pas foto dengan aturan ukuran wajah dan latar merah atau biru, Pas Foto Online mengurus potongan dan latarnya untuk Anda; alat ini untuk ukuran lain apa pun yang Anda butuhkan di atas kertas.",
      ],
    },
    {
      heading: "Menjaga proporsi",
      id: "aspect",
      body: [
        "Dengan Pertahankan rasio aspek aktif, Anda mengetik satu sisi dan sisi lainnya mengikuti bentuk gambar itu sendiri, jadi tidak ada yang gepeng. Untuk mendapatkan kedua sisi persis — misalnya 3 × 4 cm dari foto mendatar — crop dulu gambar ke bentuk itu dengan tombol potong di kartunya, lalu masukkan ukurannya. Mematikan kunci dan mengetik kedua sisi akan menarik gambar agar pas, yang jarang Anda inginkan.",
        "Saat ukuran diisi dari gambar pertama, nilainya menunjukkan ukuran cetak gambar itu saat ini pada DPI yang dipilih — cara cepat melihat sebesar apa foto akan tercetak apa adanya.",
      ],
    },
    {
      heading: "DPI mana yang dipilih",
      id: "dpi",
      body: [
        "300 DPI adalah standar untuk foto dan dokumen cetak, sekaligus nilai bawaan di sini. 200 DPI sering diminta formulir dan tetap tercetak baik; 150 DPI cocok untuk poster besar yang dilihat dari jauh; 600 DPI untuk gambar garis dan detail halus. DPI lebih tinggi berarti lebih banyak piksel untuk sentimeter yang sama, jadi file lebih besar.",
        "Bila gambar punya piksel lebih sedikit dari yang dibutuhkan ukurannya, gambar akan diperbesar dan cetakannya tampak lembut. Panel menampilkan piksel target, jadi bandingkan dengan ukuran gambar sebelum mengubahnya; untuk hasil tajam, cetak lebih kecil atau mulai dari file asli yang lebih besar.",
      ],
    },
    {
      heading: "DPI tersimpan di file",
      id: "saved",
      body: [
        "File JPG dan PNG hasil ubah ukuran diberi label DPI pilihan Anda, sehingga Word, Google Docs, program tata letak, dan jendela cetak langsung menampilkannya di ukuran fisik yang dimaksud. WEBP tidak punya bagian DPI yang bisa ditulis browser, jadi pilih JPG atau PNG sebagai format hasil bila ukuran cetak penting.",
        "Nama file menunjukkan apa yang Anda buat, misalnya foto_3x4cm.jpg, sehingga sekumpulan ukuran berbeda tetap mudah dibedakan.",
      ],
    },
    {
      heading: "Mencetak beberapa pas foto di satu kertas",
      id: "sheet",
      body: [
        "Bila Anda butuh beberapa pas foto berukuran sama, siapkan semuanya di sini sekaligus dengan sentimeter dan DPI yang sama, lalu masukkan ke dokumen A4: berkat DPI yang tersimpan, setiap foto tampil tepat di ukurannya, dan setelah dicetak tinggal digunting.",
      ],
    },
  ],

  howToTitle: "Cara mengubah ukuran foto dalam cm",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau banyak gambar JPG, PNG, WEBP, GIF, atau BMP." },
    { title: "Masukkan ukuran dan DPI", description: "Ketik lebar atau tinggi dalam cm, mm, atau inci lalu pilih DPI — 300 sudah terpilih." },
    { title: "Ubah ukuran & unduh", description: "Unduh gambar dengan ukuran piksel yang tepat dan DPI tersimpan di file." },
  ],

  features: [
    { icon: "straighten", title: "cm, mm, atau inci", description: "Masukkan ukuran dalam satuan formulir atau studio foto Anda; pikselnya dihitung otomatis." },
    { icon: "high_quality", title: "DPI tersimpan di file", description: "JPG dan PNG membawa DPI, jadi tercetak di ukuran yang Anda masukkan." },
    { icon: "lock", title: "Di browser Anda", description: "Gambar Anda diubah ukurannya di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Bagaimana mengubah ukuran foto dalam cm?", a: "Tambahkan gambar, ketik lebar atau tinggi dalam sentimeter, pilih DPI, lalu klik Ubah ukuran & unduh. Gambar mendapat ukuran piksel yang tepat dan DPI tersimpan di file." },
    { q: "1 cm berapa piksel?", a: "Tergantung DPI: sekitar 118 piksel pada 300 DPI, 79 pada 200 DPI, dan 28 pada 72 DPI." },
    { q: "Pas foto 3 × 4 cm berapa piksel?", a: "354 × 472 piksel pada 300 DPI, atau 236 × 315 piksel pada 200 DPI." },
    { q: "Bisakah memakai inci atau milimeter?", a: "Bisa. Ganti satuan ke inci atau mm; nilainya dikonversi sehingga ukuran fisiknya tetap sama." },
    { q: "DPI berapa yang sebaiknya dipakai?", a: "300 DPI untuk foto dan dokumen, 200 DPI untuk kebanyakan formulir, 150 DPI untuk poster besar." },
    { q: "Apakah gambar tercetak di ukuran yang saya masukkan?", a: "Ya, dalam JPG atau PNG: DPI tersimpan di file, jadi printer dan pengolah kata memakai ukuran yang benar." },
    { q: "Kenapa foto buram setelah diubah ke cm?", a: "Pikselnya lebih sedikit dari yang dibutuhkan ukuran itu, jadi gambar diperbesar. Cetak lebih kecil, pakai DPI lebih rendah, atau mulai dari file asli yang lebih besar." },
    { q: "Bagaimana mendapat lebar dan tinggi tepat tanpa tertarik?", a: "Crop dulu gambar ke bentuk yang benar dengan tombol potong di kartunya, lalu masukkan kedua sisi." },
    { q: "Bisakah mengubah banyak foto ke ukuran yang sama?", a: "Bisa. Tambahkan semuanya; masing-masing diubah ke ukuran fisik yang sama dan diunduh bersama dalam ZIP." },
    { q: "Apakah foto saya di-upload?", a: "Tidak. Ukuran diubah di browser; hanya gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus." },
  ],

  security:
    "Gambar Anda diubah ukurannya di browser, dan DPI ditulis ke setiap file di sana juga. Gambar yang sangat besar mungkin diproses di server kami lalu langsung dihapus; tidak ada yang disimpan.",
};

export default content;
