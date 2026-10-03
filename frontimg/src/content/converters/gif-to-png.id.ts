import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/gif-ke-png.
 *
 * The case for this pair is editing: GIF's 256-colour palette and on/off
 * transparency versus PNG's full colour and soft alpha. The page is candid
 * that converting cannot bring back colour the GIF already threw away, and
 * points animated GIFs at /id/gif-ke-gambar when every frame is wanted.
 */
const copy: LocalizedPairCopy = {
  name: "GIF ke PNG",
  seoTitle: "GIF ke PNG Online Gratis — Ubah GIF Jadi PNG Lossless | oMyImage",
  seoDescription:
    "Ubah GIF ke PNG online gratis: warna penuh, transparansi yang bisa dihaluskan, dan file lossless untuk diedit. GIF animasi menjadi frame pertamanya — di browser, tanpa daftar.",
  unique: {
    intro:
      "Mengubah GIF ke PNG mengangkatnya dari palet 256 warna ke warna penuh, dan memberi transparansi bertepi halus sebagai ganti transparansi GIF yang hanya hidup-atau-mati. Hasilnya lossless, jadi GIF itu menjadi file kerja yang layak — bisa diedit dan disimpan ulang tanpa menurun. GIF animasi dikonversi menjadi frame pertamanya, karena PNG hanya menampung satu gambar.",
    whyConvert:
      "Alasan yang paling umum adalah untuk diedit. Batas palet GIF berarti setiap gambar dipangkas menjadi paling banyak 256 warna, dan transparansinya hanya satu bit — sebuah piksel terlihat penuh atau tidak terlihat sama sekali, tanpa apa pun di antaranya. Itulah yang menghasilkan pinggiran bergerigi khas saat logo GIF diletakkan di atas latar yang tidak disiapkan untuknya. PNG tidak punya kedua batasan itu: warna 24-bit penuh ditambah kanal alfa 8-bit, sehingga tepinya bisa benar-benar halus. Konversi tidak akan menciptakan kembali warna yang sudah dibuang GIF, tetapi menghentikan kehilangan lebih lanjut dan memberi Anda file yang bisa ditumpuk dengan benar di aplikasi desain. Alasan lainnya sekadar pembaruan — mengganti aset GIF lama di situs web atau sistem desain dengan format yang perilakunya bisa ditebak.",
    notes: [
      {
        heading: "Konversi tidak mengembalikan warna yang hilang",
        body:
          "Inilah satu harapan yang perlu diluruskan sejak awal. Kalau sebuah foto pernah disimpan sebagai GIF, warnanya dipangkas menjadi 256 saat itu juga, dan pita warna serta dithering-nya menjadi bagian dari gambar. Mengubahnya ke PNG mempertahankan tampilan itu dengan setia dalam wadah yang lebih baik; PNG tidak bisa menyusun ulang gradasi yang sudah dibuang. Kalau Anda masih punya gambar aslinya sebelum menjadi GIF, konversikan yang itu.",
      },
      {
        heading: "Transparansinya bisa jadi lebih baik, bukan sekadar terjaga",
        body:
          "Transparansi GIF bersifat biner, jadi tepi yang dihaluskan sudah dicampur lebih dulu dengan warna latar yang diperkirakan desainernya. Piksel itu terbawa ke PNG apa adanya — bayangan pinggirannya tidak hilang dengan sendirinya. Yang Anda dapatkan adalah ruang gerak: PNG bisa menyimpan transparansi sebagian, jadi begitu sudah menjadi PNG, tepinya bisa dirapikan di aplikasi edit, sesuatu yang tidak pernah mungkin selama filenya masih GIF.",
      },
      {
        heading: "Animasinya tidak ikut",
        body:
          "PNG adalah format satu gambar, jadi GIF animasi hanya dikonversi menjadi frame pertamanya. Kalau Anda ingin setiap frame menjadi file gambar tersendiri, gunakan alat GIF ke Gambar — alat itu mengeluarkan seluruh urutannya. Kalau animasinya ingin tetap ada, simpan saja GIF-nya.",
      },
    ],
    faqs: [
      { q: "Apa yang terjadi pada GIF animasi?", a: "Anda mendapatkan frame pertamanya sebagai PNG diam. PNG tidak bisa menyimpan animasi. Untuk mengeluarkan setiap frame sebagai file sendiri, gunakan alat GIF ke Gambar; untuk mempertahankan animasinya, tetap pakai GIF." },
      { q: "Apakah PNG-nya akan terlihat lebih bagus daripada GIF?", a: "Akan terlihat sama. PNG menghapus batasan yang merusak gambar, tetapi tidak bisa membatalkan kerusakan yang sudah terjadi — pemangkasan ke 256 warna terjadi saat GIF dibuat dan sudah melekat." },
      { q: "Apakah GIF ke PNG lossless?", a: "Ya. PNG menyimpan setiap piksel persis seperti di GIF, jadi tidak ada lagi yang hilang di langkah ini." },
      { q: "Apakah transparansinya ikut?", a: "Ya. Satu warna transparan milik GIF menjadi piksel yang sepenuhnya transparan di PNG. Anda juga mendapat kemampuan mengedit transparansi yang lembut sesudahnya, yang tidak pernah didukung GIF." },
      { q: "Apakah file PNG-nya akan lebih besar?", a: "Sering kali ya, kadang cukup jauh. Palet GIF adalah salah satu bentuk kompresi, sedangkan PNG menyimpan informasi warna penuh. Untuk grafis polos yang sederhana, ukurannya bisa berdekatan; untuk gambar foto yang di-dithering, PNG biasanya lebih besar." },
    ],
  },
};

export default copy;
