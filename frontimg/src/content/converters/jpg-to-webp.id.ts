import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/jpg-ke-webp.
 *
 * This pair is about page speed, so the local reader is the owner of a small
 * online shop or blog (UMKM, WordPress, a Shopify or website-builder store)
 * whose product photos are the heaviest thing on the page and whose visitors
 * are mostly on phones and mobile data. The page says what the saving is,
 * what setting to use, and — the part most people skip — not to replace the
 * original JPGs.
 */
const copy: LocalizedPairCopy = {
  name: "JPG ke WEBP",
  seoTitle: "JPG ke WEBP Online Gratis — Perkecil Foto untuk Website | oMyImage",
  seoDescription:
    "Ubah JPG ke WEBP online gratis: foto 25–35% lebih kecil dengan kualitas yang sama, agar website dan toko online lebih cepat. Sekaligus banyak dalam satu ZIP — di browser, tanpa daftar.",
  unique: {
    intro:
      "Mengubah JPG ke WebP adalah cara termurah yang masih tersisa bagi kebanyakan situs untuk mempercepat halaman. Foto yang sama dengan kualitas tampak yang sama biasanya 25–35% lebih kecil, dan semua browser saat ini sudah mendukung formatnya sejak Safari ikut pada 2020. Atur kualitasnya, konversi satu folder sekaligus, dan terima kembali satu ZIP.",
    whyConvert:
      "Konversi ini hampir selalu soal performa. Gambar adalah elemen paling berat di halaman web pada umumnya, jauh di atas yang lain, dan Core Web Vitals — terutama Largest Contentful Paint — sangat ditentukan oleh seberapa cepat gambar utama tiba. Bagi toko online dan blog di Indonesia, yang pengunjungnya kebanyakan membuka lewat ponsel dengan kuota data, setiap ratus kilobyte terasa. WebP memberi pengurangan ukuran yang berarti tanpa artefak yang akan muncul kalau Anda sekadar menaikkan kompresi JPG, karena encoder-nya satu generasi lebih baru dan bekerja dengan blok yang lebih besar dan lebih cerdas. Keberatan soal kecocokan yang dulu menahan orang praktis sudah hilang: Chrome, Firefox, Edge, Opera, dan Safari semuanya bisa membuka WebP, yang berarti mencakup hampir semua pengunjung Anda. Kehati-hatian yang tersisa adalah soal ke mana file itu akan pergi: WebP untuk ditampilkan di web, dan masih pilihan yang buruk untuk arsip atau untuk dikirim ke tempat cetak.",
    notes: [
      {
        heading: "Jangan mengonversi file asli Anda",
        body:
          "Konversikan salinan yang akan dipasang di web, dan biarkan file dari kamera tetap seperti adanya. JPG sudah pernah dikompresi secara lossy, dan menyimpannya ulang ke WebP berarti mengompresnya lagi — hasilnya terlihat baik di halaman web, tetapi kualitasnya turun satu generasi dan tidak bisa dibatalkan kelak. Perlakukan WebP sebagai format keluaran, sama seperti thumbnail yang sudah diperkecil, bukan pengganti koleksi foto Anda.",
      },
      {
        heading: "Pengaturan kualitas yang dipakai",
        body:
          "Sekitar 80–85% adalah titik terbaik untuk foto di situs web, dan di situlah penghematan ukuran paling besar dibandingkan penurunan tampilannya. Naikkan ke 92% ke atas untuk gambar utama, foto produk, atau apa pun yang akan diperbesar oleh pembeli. Di bawah sekitar 70%, encoder mulai menghaluskan tekstur halus — kulit, dedaunan, dan kain adalah tempat yang pertama terlihat. Konversikan satu gambar yang mewakili, lihat hasilnya dengan saksama, lalu jalankan semuanya dengan pengaturan itu.",
      },
      {
        heading: "Sediakan cadangan kalau perlu",
        body:
          "Kalau Anda masih melayani perangkat yang benar-benar lama, cara standarnya adalah elemen HTML picture yang mencantumkan WebP lebih dulu dan JPG asli sebagai sumber cadangan, sehingga setiap browser mengambil yang ia pahami. Kebanyakan pembuat situs, CDN, dan CMS modern — termasuk plugin optimasi gambar di WordPress — sekarang sudah mengatur hal ini otomatis, jadi periksa dulu apakah punya Anda sudah melakukannya sebelum menambahkan kode sendiri.",
      },
    ],
    faqs: [
      { q: "Seberapa kecil gambar saya nantinya?", a: "Untuk foto pada umumnya, harapkan 25–35% lebih kecil pada kualitas tampak yang sama. Grafis polos dan tangkapan layar sering jauh lebih hemat lagi. Hasilnya sangat tergantung gambarnya, jadi konversikan beberapa file yang mewakili sebelum menetapkan satu pengaturan untuk seluruh koleksi." },
      { q: "Apakah WEBP sudah aman dipakai di website?", a: "Ya. Semua browser saat ini bisa membukanya — Chrome dan Firefox sudah lebih dari satu dasawarsa, Safari sejak 2020. WebP adalah format umum, bukan eksperimen." },
      { q: "Apakah mengubah JPG ke WEBP menurunkan kualitas?", a: "Ada penurunan kecil satu generasi, karena JPG sudah dikompresi secara lossy dan WebP mengompresnya lagi. Pada kualitas 80% ke atas, hal ini tidak terlihat pada ukuran tampilan normal. Selalu konversikan dari file asli terbaik yang Anda punya, bukan dari salinan yang sudah diperkecil." },
      { q: "Apakah WEBP bagus untuk dicetak?", a: "Tidak. Alur kerja cetak mengharapkan TIFF, PNG, atau JPG berkualitas tinggi, dan banyak perangkat pracetak sama sekali tidak bisa membuka WebP. Pakai WebP untuk web dan simpan format lain untuk cetak." },
      { q: "Apakah WEBP mendukung transparansi?", a: "Ya, WebP punya kanal alfa penuh. Sumber JPG memang tidak punya transparansi untuk dibawa, tetapi kalau Anda mengubah PNG ke WebP, transparansinya dipertahankan." },
      { q: "Bisakah satu folder penuh diubah sekaligus?", a: "Bisa. Tambahkan sebanyak mungkin JPG dan semuanya dikonversi berurutan lalu dikembalikan dalam satu ZIP — cara yang biasa dipakai untuk memindahkan koleksi foto produk yang sudah ada ke WebP." },
    ],
  },
};

export default copy;
