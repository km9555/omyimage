import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/kompres-foto-15kb (variant of compress-image, 15 KB). */
const content: ToolPageContent = {
  toolId: "compress-image-to-15kb",
  locale: "id",
  name: "Kompres Foto 15 KB",
  tagline:
    "Kompres tanda tangan atau foto kecil ke bawah 15 KB untuk formulir ujian, lamaran kerja, dan pendaftaran. Versi paling jelas yang masih muat, dikerjakan di browser — tidak ada yang diunggah.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Kompres Foto 15 KB Online — Tanda Tangan & Pas Foto, Gratis | oMyImage",
  metaDescription:
    "Kompres tanda tangan atau foto kecil ke bawah 15 KB online gratis — untuk formulir dengan batas 15 KB. Hasil paling jelas yang muat, tanpa unggah.",

  intro:
    "15 KB berada di antara batas tanda tangan yang paling ketat dan batas foto yang paling kecil, dan formulir memakainya untuk keduanya: kolom tanda tangan, kolom pas foto kecil, kadang scan cap jempol. Ukuran ini cukup untuk tanda tangan yang bersih dan terbaca serta foto kepala dan bahu yang masih dikenali — asalkan gambarnya disiapkan dengan baik. Tambahkan gambar Anda dan dapatkan JPG di bawah 15 KB dengan kualitas tertinggi yang muat.",

  sections: [
    {
      heading: "Apa yang muat di 15 KB",
      id: "what-fits",
      body: [
        "Tanda tangan bertinta gelap di kertas putih muat dengan mudah, bahkan selebar beberapa ratus piksel, karena sebagian besar isinya putih polos. Foto lebih sulit: perkirakan sekitar 250 × 310 piksel untuk foto kepala dan bahu, kira-kira seukuran foto di kartu ujian atau formulir.",
        "Alat ini mencari kualitas JPG tertinggi yang masih di bawah 15 KB, dan baru memperkecil ukuran piksel kalau kualitas saja tidak cukup. Daftar hasil menunjukkan ukuran baru setiap file, beserta ukuran pikselnya kalau berubah.",
      ],
    },
    {
      heading: "Bersihkan tanda tangan dulu",
      id: "clean-signature",
      body: [
        "Tanda tangan yang difoto di atas meja membawa kertas kusam, bayangan, dan sepotong meja — semuanya detail yang berusaha disimpan kompresor. Lewatkan dulu ke alat Ubah Ukuran Tanda Tangan: kertasnya dibuat putih bersih, tintanya tegas, dan ruang kosongnya dipotong. Tanda tangan yang bersih muat di 15 KB dengan tepi tajam dan masih menyisakan ruang.",
        "Kalau formulir juga menyebut ukuran piksel tanda tangan, masukkan ukuran itu di Ubah Ukuran Tanda Tangan dan pilih rentang KB di sana; keduanya beres dalam satu langkah.",
      ],
    },
    {
      heading: "Cahaya redup memakan byte",
      id: "low-light",
      body: [
        "Foto yang diambil di dalam ruangan pada malam hari penuh noise — bintik-bintik warna halus yang ditambahkan kamera saat cahaya kurang. Bagi kompresor JPG, noise itu juga detail, dan di 15 KB ia memakan ruang yang dibutuhkan wajah. Pose yang sama di dekat jendela dengan cahaya siang menghasilkan file 15 KB yang jauh lebih tajam.",
        "Kalau Anda hanya punya foto yang ber-noise, kompresi tetap berhasil; alat ini hanya perlu memperkecil ukuran piksel sedikit lebih banyak, yang sekaligus menghaluskan noise-nya.",
      ],
    },
    {
      heading: "Pas foto dan tanda tangan untuk satu formulir",
      id: "one-form",
      body: [
        "Tambahkan pas foto dan tanda tangan bersamaan, dan keduanya kembali di bawah 15 KB sekaligus. Kalau salah satu kolom mengizinkan lebih — misalnya kolom foto 50 KB — kompres ulang file itu dengan batasnya sendiri, dari file asli dan bukan dari salinan 15 KB, supaya detailnya sebanyak yang diizinkan kolom itu.",
      ],
    },
    {
      heading: "Periksa sebelum mengunggah",
      id: "check",
      body: [
        "Buka file hasil kompresi dan lihat di ukuran sebenarnya: huruf tanda tangan tidak boleh pecah menjadi kotak-kotak, dan wajah di foto tidak boleh menjadi noda. Kalau hasilnya kasar, potong lebih rapat atau foto ulang di cahaya yang lebih baik, lalu kompres lagi dari file asli.",
      ],
    },
    {
      heading: "Memotong foto untuk batas 15 KB",
      id: "small-photo",
      body: [
        "Potong dari sedikit di atas rambut sampai sedikit di bawah bahu, dengan wajah di tengah dan mata kira-kira sepertiga dari atas. Wajah sebaiknya mengisi sebagian besar gambar; setiap bagian dinding atau langit-langit yang tersisa adalah detail yang harus dibayar kompresor dari 15 KB yang sama.",
        "Foto yang dipotong rapat juga tidak perlu diperkecil sebanyak itu agar muat, jadi wajah yang tersisa menyimpan lebih banyak piksel. Itulah sebabnya foto yang sama tampak jauh lebih tajam di 15 KB kalau dipotong dulu daripada kalau seluruh gambar dikompres apa adanya.",
      ],
    },
  ],

  howToTitle: "Cara kompres foto ke 15 KB",
  steps: [
    { title: "Tambahkan gambar", description: "Tanda tangan atau foto yang sudah dipotong — JPG, PNG, atau WEBP." },
    { title: "Kompres ke bawah 15 KB", description: "Batas 15 KB sudah diatur; kualitas dan ukuran hanya diturunkan seperlunya." },
    { title: "Unduh", description: "Unduh JPG-nya dan unggah ke formulir Anda." },
  ],

  features: [
    { icon: "draw", title: "Tanda tangan tetap tajam", description: "Tanda tangan yang bersih muat jauh di bawah 15 KB dengan tepi tegas." },
    { icon: "face", title: "Foto tetap dikenali", description: "Foto kepala dan bahu menjaga wajah tetap jelas seukuran kartu ujian." },
    { icon: "lock", title: "Privat", description: "Tanda tangan dan foto dikompres di browser, tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bagaimana cara kompres foto ke 15 KB?", a: "Tambahkan di sini lalu tekan Kompres — batas 15 KB sudah diatur. Anda mendapat JPG di bawah 15 KB dengan kualitas terbaik yang muat." },
    { q: "Foto sebesar apa yang muat di 15 KB?", a: "Sekitar 250 × 310 piksel untuk foto kepala dan bahu; foto yang lebih besar diperkecil otomatis sampai muat." },
    { q: "Perlukah tanda tangan dibersihkan sebelum dikompres ke 15 KB?", a: "Perlu. Ubah Ukuran Tanda Tangan membuat kertas putih dan memotong tepinya, jadi tanda tangan muat dengan lega dan tetap tajam." },
    { q: "Kenapa foto malam hari terlihat lebih buruk di 15 KB?", a: "Cahaya redup menimbulkan noise, dan kompresor menghabiskan byte untuk menyimpannya. Foto wajah yang sama di cahaya siang terlihat lebih tajam di ukuran yang sama." },
    { q: "Bisakah pas foto dan tanda tangan dikompres ke 15 KB bersamaan?", a: "Bisa. Tambahkan keduanya; masing-masing kembali di bawah 15 KB." },
    { q: "Bagaimana kalau gambarnya sudah di bawah 15 KB?", a: "Kalau sudah berupa JPG di bawah batas, gambar dikembalikan tanpa perubahan." },
    { q: "Apakah 15 KB sama dengan 0,015 MB?", a: "Ya, 15 KB adalah 15.000 byte. File juga lolos di formulir yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Bisakah dipakai untuk cap jempol?", a: "Bisa, asalkan cap jempol difoto dari dekat dengan cahaya yang baik. Setelah dikompres, perbesar dan pastikan garis sidik jarinya masih terlihat." },
    { q: "Bagaimana cara terbaik memotong foto untuk batas 15 KB?", a: "Dari sedikit di atas rambut sampai sedikit di bawah bahu, wajah di tengah dan mengisi hampir seluruh bingkai. Makin rapat potongannya, makin tajam wajahnya di 15 KB." },
  ],

  security:
    "Tanda tangan dan foto dikompres di perangkat Anda, di browser. Tidak ada yang diunggah atau disimpan di mana pun.",
};

export default content;
