import type { ToolPageContent } from "@/content/tools/types";
import compressor from "@/content/tools/gif-compressor.id";

/** Indonesian copy for /id/ubah-ukuran-gif. */
const content: ToolPageContent = {
  toolId: "gif-resizer",
  locale: "id",
  name: "Ubah Ukuran GIF",
  tagline:
    "Ubah ukuran GIF animasi dengan persen atau piksel yang tepat — setiap frame diubah dan animasinya berjalan persis seperti sebelumnya. Gratis, tanpa watermark, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ubah Ukuran GIF Online Gratis — GIF Animasi Tetap Bergerak | oMyImage",
  metaDescription:
    "Ubah ukuran GIF animasi online gratis dengan persen atau piksel yang tepat. Semua frame dan durasinya tetap ada. Di browser, tanpa upload, tanpa watermark.",

  intro:
    "Mengubah ukuran GIF animasi di aplikasi edit foto biasa sering hanya menyisakan frame pertama. Ubah Ukuran GIF dari oMyImage mengubah ukuran setiap frame animasi dan mempertahankan durasi serta pengulangannya, sehingga hasilnya bergerak persis seperti aslinya, hanya dalam ukuran yang Anda butuhkan. Ubah dengan persen atau ketik lebar dan tinggi dalam piksel, bandingkan aslinya dengan hasilnya, lalu unduh.",

  sections: [
    {
      heading: "Persen atau piksel yang tepat",
      id: "modes",
      body: [
        "Dengan persen adalah cara cepat: 50% memperkecil lebar dan tinggi menjadi setengah, 25% menjadi seperempat, dan nilai apa pun hingga 400% bisa dipakai. Dengan piksel Anda bisa mengetik lebar atau tinggi yang tepat; bila Pertahankan rasio aspek aktif, sisi lainnya mengikuti bentuk GIF itu sendiri sehingga tidak ada yang gepeng.",
        "Matikan Pertahankan rasio aspek hanya bila tujuan Anda meminta kotak yang pasti, seperti avatar persegi, dan GIF-nya sudah mendekati bentuk itu — kalau tidak, animasinya akan terlihat tertarik.",
      ],
    },
    {
      heading: "Ukuran yang umum",
      id: "sizes",
      body: [
        "Emoji kustom dan reaksi berbentuk persegi kecil: Discord, misalnya, menampilkan emoji berukuran 128 × 128 dan membatasi file hingga 256 KB, jadi GIF reaksi biasanya perlu diperkecil ukuran sekaligus bobotnya. Foto profil dan stiker biasanya 256–512 piksel persegi; GIF di artikel dan dokumentasi biasanya selebar 480–800 piksel.",
        "Kalau tujuan Anda juga punya batas ukuran file, ubah ukuran dulu lalu proses hasilnya dengan Kompres GIF; piksel yang lebih sedikit adalah penghematan tunggal terbesar.",
      ],
    },
    {
      heading: "Apa yang terjadi pada kualitas",
      id: "quality",
      body: [
        "Memperkecil GIF membuatnya tetap tajam, karena setiap piksel baru adalah rata-rata dari beberapa piksel lama. Rata-rata itu memunculkan warna-warna antara, dan karena GIF hanya mengizinkan 256 warna, hasilnya diberi palet baru yang dipilih untuk seluruh animasi sehingga warna tetap stabil antar-frame.",
        "Memperbesar bisa dilakukan tetapi tidak menambah detail: tepi menjadi lembut dan pixel art menjadi buram. Untuk pixel art, perbesar dengan kelipatan bulat seperti 200% dan siap dengan sedikit penghalusan; untuk detail sungguhan, kembali ke sumber aslinya.",
      ],
    },
    {
      heading: "Ukuran file setelah diubah",
      id: "filesize",
      body: [
        "Ukuran file turun kurang lebih sebanding dengan jumlah piksel, jadi 50% lebar dan tinggi biasanya berarti sekitar seperempat ukuran. Karena GIF dibangun ulang sehingga setiap frame hanya menyimpan perubahan, GIF hasil ubah ukuran bisa lebih kecil dari yang diperkirakan dari pikselnya saja.",
        "Memperbesar berlaku sebaliknya: dua kali ukuran berarti sekitar empat kali file. Cek ukuran hasil di bawah pratinjau sebelum mengunduh.",
      ],
    },
    {
      heading: "Frame, durasi, dan transparansi",
      id: "frames",
      body: [
        "Setiap frame dipertahankan dengan jedanya sendiri, termasuk pada GIF yang sebagian framenya berhenti lebih lama, dan animasinya berulang seperti aslinya. GIF transparan tetap transparan; transparansi GIF tidak punya tepi halus, jadi tepi transparan yang diperkecil banyak bisa tampak sedikit bergerigi di latar gelap.",
      ],
    },
    {
      heading: "GIF untuk stiker dan status",
      id: "stickers",
      body: [
        "Untuk stiker atau status, GIF yang terlalu besar sering dikecilkan sendiri oleh aplikasi dan hasilnya buram. Ubah dulu ke ukuran yang pas — sekitar 512 piksel untuk stiker atau 480 piksel untuk pesan biasa — agar terkirim lebih cepat dan tetap tampil rapi.",
      ],
    },
    {
      heading: "GIF di slide dan dokumen",
      id: "slides",
      body: [
        "GIF yang dimasukkan ke PowerPoint, Keynote, Google Slides, atau dokumen Word tetap menyimpan ukuran piksel penuhnya di dalam file, walaupun ditampilkan kecil. GIF selebar 1200 piksel yang tampil sebagai thumbnail membuat seluruh presentasi berat serta lambat dibuka atau dikirim lewat email.",
        "Ubah ukuran GIF kira-kira ke lebar tampilannya nanti — sekitar 800 piksel untuk slide penuh, 400–600 untuk GIF di samping teks — sebelum dimasukkan. Slide-nya tetap terlihat sama dan filenya tetap ringan.",
      ],
    },
  ],

  howToTitle: "Cara mengubah ukuran GIF",
  steps: [
    { title: "Tambahkan GIF", description: "Pilih GIF animasi dari komputer atau HP." },
    { title: "Pilih ukuran", description: "Pilih persen atau ketik lebar dan tinggi dalam piksel." },
    { title: "Ubah ukuran dan unduh", description: "Klik Ubah Ukuran GIF, bandingkan hasilnya, lalu unduh." },
  ],

  features: [
    { icon: "photo_size_select_large", title: "Semua frame diubah", description: "Seluruh animasi diubah ukurannya, bukan hanya frame pertama." },
    { icon: "aspect_ratio", title: "Persen atau piksel", description: "Ubah dengan persen atau atur lebar dan tinggi yang tepat." },
    { icon: "lock", title: "Tanpa upload", description: "GIF Anda diubah ukurannya sepenuhnya di browser." },
  ],

  faqs: [
    { q: "Bagaimana cara mengubah ukuran GIF animasi?", a: "Tambahkan GIF, pilih persen atau piksel yang tepat, lalu klik Ubah Ukuran GIF. Setiap frame diubah dan animasinya tetap bergerak." },
    { q: "Apakah GIF tetap beranimasi?", a: "Ya. Semua frame dipertahankan dengan durasi dan pengulangan aslinya." },
    { q: "Bagaimana membuat GIF 128 × 128?", a: "Pilih Dengan piksel, ketik 128 untuk lebar, dan bila GIF tidak persegi, matikan Pertahankan rasio aspek atau crop jadi persegi lebih dulu." },
    { q: "Apakah ukuran file ikut mengecil?", a: "Kalau diperkecil, ya — setengah lebar dan tinggi biasanya sekitar seperempat ukuran." },
    { q: "Bisakah GIF diperbesar?", a: "Bisa, hingga 400%, tetapi memperbesar tidak menambah detail dan tepinya menjadi lembut." },
    { q: "Apakah transparansi tetap ada?", a: "Ya. GIF transparan tetap transparan setelah diubah ukurannya." },
    { q: "Apakah ada watermark?", a: "Tidak. GIF hasil ubah ukuran tidak memiliki watermark." },
    { q: "Bisakah mengubah ukuran sekaligus kompres?", a: "Ubah ukuran di sini, lalu proses hasilnya dengan Kompres GIF untuk mengurangi warna atau frame." },
    { q: "Apakah GIF saya di-upload?", a: "Tidak. Pengubahan ukuran berlangsung sepenuhnya di browser Anda." },
    { q: "Bisakah mengubah ukuran GIF di HP?", a: "Bisa, di browser HP. GIF besar butuh waktu sedikit lebih lama di HP, dan progresnya ditampilkan selama proses." },
    { q: "Bisakah mengubah ukuran beberapa GIF sekaligus?", a: "Satu per satu, agar setiap GIF punya pratinjau dan ukurannya sendiri. Pengaturannya tetap tersimpan untuk GIF berikutnya." },
    { q: "Berapa lama prosesnya?", a: "Biasanya beberapa detik; GIF panjang atau besar butuh lebih lama. Tidak ada yang di-upload, jadi kecepatannya tergantung perangkat Anda." },
  ],

  security:
    "GIF Anda diubah ukurannya frame demi frame di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // GifTool.tsx is shared with gif-compressor; each route only has its own
  // tool's ui in scope, so this page reuses the compressor's translations.
  ui: compressor.ui,
};

export default content;
