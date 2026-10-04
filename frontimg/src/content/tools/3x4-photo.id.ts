import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/foto-3x4 (variant of passport-photo-maker, 3 × 4
 * cm). Indonesia: "pas foto 3x4" 33.1K/mo; red and blue backgrounds are part
 * of the query ("pas foto 3x4 background merah"). The parent /id/pas-foto
 * covers all sizes; this page is about the 3 × 4 itself — where it is used,
 * what to wear, and printing it on 4R paper.
 */
const content: ToolPageContent = {
  toolId: "3x4-photo",
  locale: "id",
  name: "Pas Foto 3x4",
  tagline:
    "Buat pas foto 3x4 di rumah: wajah otomatis dibingkai ke 3 × 4 cm, latar bisa merah, biru, atau putih, lalu unduh foto 300 DPI dan lembar 4R berisi delapan salinan. Gratis, langsung di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Pas Foto 3x4 Online — Latar Merah, Biru, Putih, Gratis | oMyImage",
  metaDescription:
    "Buat pas foto 3x4 online gratis: wajah dibingkai otomatis ke 3 × 4 cm, latar merah, biru atau putih, dan lembar 4R berisi 8 foto siap cetak. Tanpa daftar akun.",

  intro:
    "Pas foto 3x4 hampir selalu dibutuhkan mendadak: berkas lamaran kerja minta dua lembar, pendaftaran kuliah minta empat, kartu anggota minta satu lagi. Halaman ini membuka pembuat pas foto langsung di ukuran 3 × 4 cm. Unggah foto wajah menghadap depan, lalu wajah dideteksi dan dibingkai dengan ruang yang pas di atas kepala. Rapikan jika perlu, ganti latar ke merah atau biru, dan unduh satu foto atau lembar berisi beberapa salinan untuk dicetak.",

  sections: [
    {
      heading: "Kapan pas foto 3x4 dipakai",
      id: "where",
      body: [
        "Pas foto 3x4 diminta untuk lamaran kerja dan berkas karyawan, pendaftaran sekolah dan kuliah, kartu pelajar dan kartu mahasiswa, ijazah dan rapor di banyak sekolah, kartu anggota organisasi, serta berbagai formulir instansi. Untuk SKCK dan sebagian dokumen lain yang lebih sering diminta adalah 4x6, yang juga ada di daftar ukuran.",
        "Cek dulu ketentuan dari pihak yang meminta: ukurannya hampir selalu 3 × 4 cm, tetapi warna latar, pakaian, dan apakah foto harus baru bisa berbeda.",
      ],
    },
    {
      heading: "Ukuran pas foto 3x4 dalam piksel",
      id: "pixels",
      body: [
        "Pada 300 DPI — resolusi yang dipakai tempat cetak foto dan printer foto — 3 × 4 cm sama dengan 354 × 472 piksel. Itulah ukuran yang disimpan alat ini, lengkap dengan DPI di dalam file agar tercetak tepat 3 × 4 cm. Untuk formulir online, Anda juga bisa mengisi batas ukuran file dalam KB; ukuran cetaknya tetap benar walaupun file harus diperkecil.",
      ],
    },
    {
      heading: "Latar merah atau biru",
      id: "background",
      body: [
        "Merah dan biru adalah warna latar pas foto 3x4 yang paling sering diminta di Indonesia, sedangkan putih lebih umum untuk visa luar negeri. Tidak perlu foto ulang di studio: di bagian Latar, pilih Ganti warna. Orang di foto dipotong sekali di server kami, lalu Anda bisa mencoba merah, biru, putih, atau warna lain dan langsung melihat hasilnya.",
      ],
    },
    {
      heading: "Mencetak pas foto 3x4 di kertas 4R",
      id: "printing",
      body: [
        "Unduh lembar 4R (4 × 6 inci): isinya delapan pas foto 3x4 dengan garis tipis untuk memotong. Bawa file ke tempat cetak foto atau cetak di printer foto sendiri dengan skala 100%. Cetak 4R adalah yang paling murah, dan delapan lembar biasanya cukup untuk beberapa berkas sekaligus.",
        "Lembar A4 memuat 36 pas foto 3x4 — praktis jika Anda mencetak di rumah dengan kertas foto. Jangan pilih \"sesuaikan dengan halaman\", karena foto akan tercetak lebih kecil dari 3 × 4 cm.",
      ],
    },
    {
      heading: "Pakaian dan penampilan untuk pas foto",
      id: "attire",
      body: [
        "Kemeja berkerah atau pakaian formal hampir selalu aman; untuk pendaftaran kampus dan CPNS sering diminta kemeja putih. Pilih warna baju yang kontras dengan latar: jangan memakai baju merah untuk latar merah atau biru untuk latar biru, karena tepi baju akan menyatu dengan latar setelah diganti.",
        "Rapikan rambut agar dahi, alis, dan kedua telinga terlihat jika diminta, dan pastikan kerudung tidak menutupi wajah dari dahi sampai dagu. Hindari aksesori mencolok dan kacamata dengan pantulan cahaya.",
      ],
    },
  ],

  howToTitle: "Cara membuat pas foto 3x4 online",
  steps: [
    { title: "Unggah foto wajah", description: "Foto menghadap depan yang tajam, dengan dinding polos di belakang." },
    { title: "Periksa bingkai", description: "Wajah dibingkai otomatis ke 3 × 4 cm; ukuran dan posisinya bisa dirapikan." },
    { title: "Unduh atau cetak", description: "Simpan satu foto, atau lembar 4R berisi delapan pas foto 3x4, atau A4 berisi 36." },
  ],

  features: [
    { icon: "badge", title: "Dibingkai ke 3 × 4 cm", description: "Kepala otomatis diatur ukurannya dan diletakkan di tengah, dengan ruang di atasnya sesuai aturan pas foto." },
    { icon: "grid_view", title: "Lembar berisi salinan", description: "Delapan foto di lembar 4R atau 36 di A4, dengan garis potong, siap untuk printer foto mana pun." },
    { icon: "lock", title: "Tetap di browser Anda", description: "Pembingkaian dan pencetakan tidak pernah mengunggah foto; hanya penggantian latar yang memakai server kami." },
  ],

  faqs: [
    { q: "Bagaimana cara membuat pas foto 3x4 online?", a: "Unggah foto wajah menghadap depan — ukuran 3 × 4 cm sudah terpilih —, periksa bingkai otomatisnya, lalu unduh foto atau lembar cetaknya." },
    { q: "Berapa piksel ukuran foto 3x4?", a: "354 × 472 piksel pada 300 DPI, yang tercetak tepat 3 × 4 cm. Alat ini juga menuliskan DPI ke dalam file." },
    { q: "Bisakah membuat pas foto 3x4 latar merah?", a: "Bisa. Di bagian Latar, pilih Ganti warna lalu pilih merah, biru, atau warna lain. Pemotongan dilakukan sekali di server kami; berganti warna setelahnya langsung tanpa menunggu." },
    { q: "Berapa pas foto 3x4 dalam satu lembar 4R?", a: "Delapan, dengan jarak untuk memotong. Dalam satu lembar A4 muat 36. Jumlahnya tertera di tombol sebelum Anda mengunduh." },
    { q: "Bisakah memotret pakai HP?", a: "Bisa, asalkan orang lain yang memotret dari jarak sekitar 1,5 m, di cahaya siang, dengan dinding polos di belakang. Selfie dengan tangan terentang membuat wajah tampak berubah bentuk." },
    { q: "Apakah 3x4 sama dengan 4x6?", a: "Tidak. 4 × 6 cm lebih besar dan sering diminta untuk SKCK dan sebagian berkas lain; 3 × 4 cm untuk kebanyakan pendaftaran dan lamaran. Keduanya ada di daftar ukuran." },
    { q: "Apakah foto saya dikirim ke internet?", a: "Tidak untuk pembingkaian, pengubahan ukuran, atau pencetakan — semuanya terjadi di browser Anda. Foto hanya dikirim ke server kami jika Anda mengganti latar, dan hasilnya dihapus dalam satu jam." },
    { q: "Berapa lembar pas foto 3x4 yang biasanya diminta?", a: "Tergantung instansinya — sering dua sampai empat lembar per berkas. Karena satu lembar 4R berisi delapan foto, satu kali cetak biasanya cukup untuk beberapa pendaftaran sekaligus. Simpan juga filenya untuk formulir online berikutnya." },
    { q: "Baju apa yang cocok untuk pas foto 3x4?", a: "Kemeja berkerah atau pakaian formal dengan warna yang kontras dengan latar — misalnya kemeja putih untuk latar merah atau biru. Hindari warna baju yang sama dengan latar." },
  ],

  security:
    "Pembingkaian, pengubahan ukuran, dan lembar cetak berjalan sepenuhnya di browser Anda. Hanya penggantian latar, jika Anda memilihnya, yang mengirim foto sekali lewat koneksi terenkripsi ke mesin penghapus latar kami, dan hasilnya dihapus otomatis dalam satu jam.",
};

export default content;
