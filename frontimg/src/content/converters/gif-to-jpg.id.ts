import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/gif-ke-jpg.
 *
 * Two reasons bring people here and the page names both: a form or
 * marketplace listing that takes JPG/PNG only, and a heavy animated GIF when
 * one still frame is all that is needed. Background fill is stated as Auto
 * with a white fallback for a transparent edge (lib/image/bg-detect.ts).
 */
const copy: LocalizedPairCopy = {
  name: "GIF ke JPG",
  seoTitle: "GIF ke JPG Online Gratis — Ubah GIF Jadi Foto JPG | oMyImage",
  seoDescription:
    "Ubah GIF ke JPG online gratis: file foto yang kecil dan diterima di mana saja, dari frame pertama GIF animasi. Pilih warna latar dan kualitas, sekaligus banyak — di browser, tanpa daftar.",
  unique: {
    intro:
      "Mengubah GIF menjadi JPG memberi Anda file foto yang kecil dan diterima di mana saja. Inilah langkah yang tepat saat Anda perlu melampirkan, mengunggah, atau mencetak gambar diam, sementara GIF-nya terlalu besar atau memang tidak diterima. Area transparan diisi warna yang Anda pilih, dan GIF animasi dikonversi menjadi frame pertamanya.",
    whyConvert:
      "Ada dua situasi yang membawa orang ke sini. Yang pertama adalah unggahan yang tidak mau menerima GIF — banyak formulir hanya menerima JPG dan PNG, terutama yang mengharapkan foto, seperti unggahan identitas, daftar produk di marketplace, atau jasa cetak. Yang kedua adalah ukuran: GIF animasi yang panjang bisa berukuran belasan megabyte, dan kalau yang sebenarnya Anda perlukan hanya satu frame yang mewakili, JPG dari frame itu hanya sebagian kecil beratnya. JPG juga tujuan yang tepat untuk konten berupa foto, karena kompresinya dirancang untuk gambar bernada kontinu, sesuatu yang tidak pernah bisa dilakukan palet GIF. Yang tidak bisa dilakukan JPG adalah transparansi dan animasi, jadi JPG pilihan yang salah kalau salah satunya penting bagi Anda.",
    notes: [
      {
        heading: "Piksel transparan butuh latar",
        body:
          "JPG tidak punya kanal alfa, jadi area transparan di GIF harus diisi sesuatu yang solid. Secara bawaan warnanya diambil dari tepi gambar, dan kalau tepinya transparan, hasilnya putih — biasanya jawaban yang tepat. Kalau gambarnya akan diletakkan di halaman berwarna, pilih warna itu di sini agar tidak muncul kotak putih yang mencolok. Karena transparansi GIF bertepi keras, batasnya bisa tampak sedikit bergerigi setelah diisi — tepi itu berasal dari GIF, bukan dari konversi.",
      },
      {
        heading: "Artefak palet tetap terlihat",
        body:
          "GIF sudah dipangkas menjadi 256 warna, sering dengan dithering — pola bintik-bintik untuk memalsukan warna perantara. Kompresi JPG tidak menghapus pola itu, bahkan bisa membuatnya sedikit lebih kentara, karena encoder menganggap bintik-bintik dithering sebagai detail yang layak dipertahankan. Menjaga penggeser kualitas cukup tinggi mencegah masalahnya bertambah.",
      },
      {
        heading: "Hanya frame pertama",
        body:
          "JPG hanya menampung tepat satu gambar, jadi GIF animasi dikonversi menjadi frame pembukanya. Tidak ada pengaturan yang mengubah hal ini. Kalau Anda perlu frame tertentu, bukan yang pertama, pecah dulu semua frame-nya dengan alat GIF ke Gambar, lalu konversikan frame yang Anda inginkan.",
      },
    ],
    faqs: [
      { q: "Frame mana dari GIF animasi yang saya dapatkan?", a: "Frame pertama. JPG tidak bisa menyimpan animasi, jadi hanya frame pembukanya yang dikonversi. Gunakan GIF ke Gambar kalau Anda perlu frame lain atau semuanya." },
      { q: "Apa yang terjadi pada transparansi?", a: "Diisi warna solid, karena JPG tidak mendukung transparansi. Secara bawaan warnanya diambil dari tepi gambar, atau putih kalau tepinya transparan, dan Anda bisa memilih warna lain sebelum mengonversi." },
      { q: "Apakah JPG-nya akan lebih kecil daripada GIF?", a: "Hampir selalu, dan jauh lebih kecil untuk GIF animasi, karena Anda hanya menyimpan satu frame, bukan ratusan. Untuk GIF satu frame yang sederhana dengan sedikit warna, perbedaannya lebih kecil dan sesekali justru terbalik." },
      { q: "Sebaiknya ubah ke JPG atau PNG?", a: "JPG kalau Anda ingin file kecil dan kontennya berupa foto. PNG kalau transparansi harus tetap ada atau Anda butuh kualitas lossless untuk diedit lagi." },
      { q: "Apakah gambarnya akan terlihat lebih buruk?", a: "Sedikit, karena JPG bersifat lossy — tetapi pada kualitas bawaan perubahannya sulit terlihat. Pola dithering dari GIF asli adalah artefak yang lebih kentara, dan pola itu sudah ada sebelum konversi." },
    ],
  },
};

export default copy;
