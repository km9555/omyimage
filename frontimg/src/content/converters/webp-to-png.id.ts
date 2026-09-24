import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/webp-ke-png.
 *
 * The local angle is the WhatsApp sticker: every WA sticker is a 512×512 WebP
 * with a transparent background, and turning one into a PNG — for Canva, a
 * slide or a print — is exactly the job this pair does without losing the
 * transparency. Animated stickers are animated WebP, which is why the frame
 * note says what happens to them.
 *
 * Sibling of webp-ke-jpg and deliberately a different page: this one is about
 * keeping transparency and a lossless working file; that one is about forms
 * that only take JPG. verify-build measures prose similarity between converter
 * pairs, so the overlap is kept genuinely low rather than reworded.
 */
const copy: LocalizedPairCopy = {
  name: "WEBP ke PNG",
  seoTitle: "WEBP ke PNG Online Gratis — Ubah WebP Jadi PNG Transparan | oMyImage",
  seoDescription:
    "Ubah WEBP ke PNG online gratis: transparansi tetap utuh dan tanpa kehilangan kualitas — cocok untuk stiker WhatsApp dan gambar dari web. Sekaligus banyak, di browser, tanpa daftar.",
  unique: {
    intro:
      "WebP membuat halaman web cepat, tetapi sering kali tidak mau terbuka saat diklik dua kali. Mengubahnya ke PNG memberi Anda file yang dipahami semua aplikasi, dengan transparansi yang tetap utuh dan tanpa kualitas yang hilang di jalan — karena PNG bersifat lossless, piksel yang keluar sama persis dengan yang masuk. Masukkan satu WebP atau seratus; semuanya dikonversi di dalam browser Anda.",
    whyConvert:
      "Alasan yang paling umum adalah soal kecocokan. Anda menyimpan gambar dari sebuah situs, lalu Photoshop, PowerPoint, formulir unggah percetakan, atau ponsel Android lama menolak membukanya. PNG adalah jawaban paling aman untuk masalah itu: didukung di mana-mana sejak akhir 1990-an dan, tidak seperti JPG, mempertahankan transparansi, jadi logo berlatar tembus pandang sampai dengan selamat. Kasus yang sangat sering di Indonesia adalah stiker WhatsApp — setiap stiker WA sebenarnya file WebP 512×512 berlatar transparan, dan mengubahnya ke PNG membuatnya bisa dipakai di Canva, slide presentasi, atau desain cetak tanpa kotak putih di belakangnya. Alasan lainnya adalah untuk diedit: WebP biasanya lossy, dan setiap kali disimpan ulang kualitasnya turun sedikit. Satu kali konversi ke PNG memberi Anda file kerja lossless yang bisa di-crop, diretus, dan disimpan berkali-kali tanpa menurun diam-diam.",
    notes: [
      {
        heading: "PNG-nya akan lebih besar — itu wajar",
        body:
          "WebP 180 KB bisa dengan mudah menjadi PNG 900 KB, dan itu bukan tanda ada yang salah. WebP mencapai ukurannya dengan membuang data gambar; PNG tidak boleh membuang apa pun. Anda menukar byte dengan kecocokan dan dengan file yang tidak akan menurun lagi. Kalau ukurannya jadi masalah dan Anda tidak butuh transparansi, mengubah ke JPG akan jauh lebih kecil; kalau yang Anda inginkan sebenarnya hanya memperkecil file tanpa ganti format, alat kompres adalah pilihan yang lebih tepat.",
      },
      {
        heading: "Stiker bergerak menjadi satu frame",
        body:
          "WebP bisa menyimpan animasi, mirip GIF — termasuk stiker WhatsApp yang bergerak. Format diam seperti PNG tidak bisa menampungnya, jadi WebP beranimasi dikonversi menjadi frame pertamanya saja. Kalau gerakannya ingin dipertahankan, ubah ke GIF, bukan PNG.",
      },
      {
        heading: "Transparansi terbawa persis",
        body:
          "WebP dan PNG sama-sama menyimpan kanal alfa 8-bit penuh, jadi tepi yang halus, bayangan, dan teks yang dihaluskan terkonversi dengan bersih. Tidak ada tahap meratakan dan tidak ada warna latar yang perlu dipilih, karena memang tidak ada yang perlu diisi. Inilah keuntungan praktis utama mengubah WebP ke PNG dibandingkan ke JPG, yang harus mengecat sesuatu yang solid di belakang setiap piksel transparan.",
      },
    ],
    faqs: [
      {
        q: "Apakah mengubah WEBP ke PNG menurunkan kualitas?",
        a: "Tidak. PNG adalah format lossless, jadi konversi menyalin setiap piksel dengan persis. Namun perlu dipahami batasnya: kalau WebP aslinya disimpan secara lossy, detailnya sudah terbuang saat itu, dan PNG mempertahankan gambar seperti kondisinya sekarang, bukan memulihkan apa pun.",
      },
      {
        q: "Bagaimana cara mengubah stiker WhatsApp jadi PNG?",
        a: "Stiker WhatsApp adalah file .webp. Setelah Anda mendapatkan filenya — misalnya dengan menyimpan stiker dari WhatsApp Web lewat klik kanan — masukkan ke halaman ini. Hasilnya PNG dengan latar transparan yang tetap utuh. Stiker bergerak hanya menghasilkan frame pertamanya.",
      },
      {
        q: "Kenapa PNG saya jauh lebih besar daripada WEBP-nya?",
        a: "Karena PNG tidak pernah membuang data. Ukuran WebP yang kecil berasal dari kompresi lossy, dan PNG tidak bisa memakai trik itu. Kenaikan 3–6 kali lipat sepenuhnya wajar untuk gambar foto, dan itulah harga file lossless yang bisa dibaca di mana saja.",
      },
      {
        q: "Apakah transparansinya tetap ada?",
        a: "Ya, sepenuhnya. Kedua format mendukung kanal alfa, jadi area transparan dan semi-transparan terbawa tanpa berubah. Tidak ada kotak putih yang muncul di belakang gambar.",
      },
      {
        q: "Bisakah satu folder WEBP diubah sekaligus?",
        a: "Bisa. Pilih atau seret sebanyak yang Anda mau; semuanya dikonversi berurutan lalu dikemas dalam satu ZIP, jadi Anda cukup sekali mengunduh.",
      },
      {
        q: "Kenapa Windows Photos atau Photoshop tidak mau membuka file WEBP saya?",
        a: "WebP hadir pada 2010, tetapi aplikasi desktop lambat mengikutinya. Photoshop memerlukan plugin sampai versi 23.2, dan Windows versi lama memerlukan codec dari Microsoft Store. Mengubah ke PNG menghindari seluruh masalah itu alih-alih memperbaikinya satu per satu.",
      },
    ],
  },
};

export default copy;
