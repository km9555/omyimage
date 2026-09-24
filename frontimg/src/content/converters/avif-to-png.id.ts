import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/avif-ke-png.
 *
 * Sibling of avif-ke-jpg; the deciding difference is transparency (product
 * cut-outs, logos, icons) and a lossless working file. The page recommends
 * converting onward to WEBP (/id/png-ke-webp) when the PNG is headed for a
 * web page, because a PNG from an AVIF can be five to ten times heavier.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF ke PNG",
  seoTitle: "AVIF ke PNG Online Gratis — Transparansi Tetap Utuh | oMyImage",
  seoDescription:
    "Ubah AVIF ke PNG online gratis: latar transparan tetap utuh dan hasilnya lossless, siap diedit di aplikasi desain. Diproses di browser, sekaligus banyak — tanpa daftar.",
  unique: {
    intro:
      "Kalau sebuah AVIF punya latar transparan, PNG adalah tujuan yang tepat, bukan JPG. PNG mempertahankan kanal alfanya dan menyimpan hasilnya secara lossless, jadi yang Anda dapatkan sama persis dengan yang dibuka browser — file kerja yang bersih untuk dimasukkan ke aplikasi desain atau diedit berulang kali tanpa menurun lagi.",
    whyConvert:
      "Pembeda antara konversi ini dan konversi ke JPG hampir selalu soal transparansi. AVIF membawa kanal alfa penuh, dan kalau diubah ke JPG, transparansi itu harus dihancurkan dan diganti dengan warna solid. PNG mempertahankannya — penting untuk logo, foto produk tanpa latar, ikon, dan apa pun yang akan diletakkan di atas latar yang tidak Anda kendalikan. Faktor kedua adalah pengeditan. PNG bersifat lossless, jadi setelah dikonversi Anda bisa meng-crop, meretus, dan menyimpan ulang berapa kali pun tanpa kerusakan kompresi yang menumpuk — sesuatu yang tidak bisa diberikan AVIF maupun JPG. Harganya adalah ukuran: PNG menyimpan segalanya, dan AVIF yang tadinya beberapa ratus kilobyte bisa dengan mudah menjadi beberapa megabyte sebagai PNG. Itu harga yang pantas untuk file master, dan harga yang buruk untuk aset web.",
    notes: [
      {
        heading: "Harapkan ukuran yang melonjak",
        body:
          "AVIF adalah salah satu format paling efisien yang ada, dan PNG salah satu yang paling tidak efisien; konversi di antara keduanya bisa melipatgandakan ukuran file lima sampai sepuluh kali. Tidak ada yang rusak saat itu terjadi. Anggap PNG-nya sebagai salinan kerja, bukan sesuatu untuk dipublikasikan — kalau nanti perlu dipasang di halaman web, ubah lagi ke WebP, yang mempertahankan transparansi dengan ukuran sebagian kecil PNG.",
      },
      {
        heading: "Transparansi terbawa persis",
        body:
          "Kedua format menyimpan alfa 8-bit, jadi piksel semi-transparan tetap semi-transparan. Bayangan lembut, tepi yang dihaluskan, dan teks yang dihaluskan semuanya selamat tanpa bayangan pinggiran atau garis matte. Tidak ada warna latar yang perlu dipilih di sini, karena memang tidak ada yang perlu diisi — persis itulah keunggulannya dibanding konversi ke JPG.",
      },
      {
        heading: "HDR diratakan saat dibuka",
        body:
          "AVIF bisa menyimpan rentang dinamis tinggi dan gamut warna yang lebar. PNG yang umum dipakai tidak bisa, dan browser memetakan gambarnya ke rentang standar saat membukanya. Untuk kebanyakan gambar hal ini tidak terlihat; untuk foto HDR yang memang sengaja dibuat dengan bagian terang yang sangat terang, hasilnya bisa tampak lebih datar daripada aslinya. Ini terjadi di tahap membuka file, jadi berlaku ke format apa pun Anda mengonversinya.",
      },
    ],
    faqs: [
      { q: "Apakah AVIF ke PNG mempertahankan transparansi?", a: "Ya, sepenuhnya. Kedua format mendukung kanal alfa 8-bit, jadi area transparan dan semi-transparan terbawa tanpa berubah, tanpa pengisian latar." },
      { q: "Apakah konversinya lossless?", a: "Penyimpanan ke PNG bersifat lossless, jadi tidak ada yang hilang di langkah itu. AVIF-nya sendiri kemungkinan disimpan secara lossy, dan konversi mempertahankan gambar seperti kondisinya sekarang, bukan memulihkan detail yang sudah terbuang." },
      { q: "Kenapa PNG-nya jauh lebih besar?", a: "Karena PNG tidak pernah membuang data, sedangkan AVIF sangat efisien dalam membuangnya. Kenaikan lima sampai sepuluh kali lipat itu wajar. Ubah lagi ke WebP kalau Anda butuh file kecil yang tetap transparan." },
      { q: "Sebaiknya AVIF saya diubah ke PNG atau JPG?", a: "PNG kalau gambarnya punya transparansi atau akan Anda edit. JPG kalau berupa foto tanpa transparansi dan Anda ingin file terkecil yang diterima di mana saja." },
      { q: "Bisakah beberapa file AVIF dikonversi sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — semuanya dikonversi berurutan di browser Anda dan dikembalikan bersama dalam satu ZIP." },
    ],
  },
};

export default copy;
