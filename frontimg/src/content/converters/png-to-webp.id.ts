import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/png-ke-webp.
 *
 * The case for this pair is transparency at a web-friendly weight: logos,
 * icons, product cut-outs (the output of /id/hapus-background is exactly
 * that), and UI screenshots. The page is careful about the two places WebP is
 * the wrong answer — email, and text-heavy screenshots at a low setting.
 */
const copy: LocalizedPairCopy = {
  name: "PNG ke WEBP",
  seoTitle: "PNG ke WEBP Online Gratis — Transparansi Tetap, File Jauh Lebih Kecil | oMyImage",
  seoDescription:
    "Ubah PNG ke WEBP online gratis: transparansi tetap utuh, ukuran file tinggal sebagian kecil — untuk logo, ikon, dan foto produk di website. Sekaligus banyak, di browser, tanpa daftar.",
  unique: {
    intro:
      "PNG itu jujur tetapi berat. Mengubahnya ke WebP mempertahankan transparansi — alasan Anda memakai PNG sejak awal — sambil memangkas ukuran filenya menjadi sebagian kecil saja. Untuk logo, ikon, tangkapan layar aplikasi, dan apa pun yang punya kanal alfa dan harus dimuat cepat, biasanya inilah penghematan terbesar yang bisa didapat dalam satu langkah.",
    whyConvert:
      "Masalah PNG adalah ia menolak membuang apa pun — tepat untuk file kerja, boros untuk aset web. Tangkapan layar atau foto produk tanpa latar yang disimpan sebagai PNG sering berukuran beberapa megabyte, dan di halaman dengan belasan gambar seperti itu, bebannya berat. Foto produk yang latarnya baru saja dihapus adalah contoh yang paling umum: hasilnya PNG transparan yang besar, padahal toko online Anda hanya perlu menampilkannya dengan cepat. WebP menyelesaikan hal ini tanpa memaksa Anda melepas kanal alfa, dan itulah yang membuatnya jelas lebih baik daripada cara lama: mengubah ke JPG lalu mengecat latar palsu di belakang bagian transparan. Tepi yang halus, bayangan, dan teks yang dihaluskan tetap utuh, dengan ukuran sekitar seperempat sampai setengah PNG. Satu hal yang perlu dipahami: mode lossy WebP memang lossy, jadi tangkapan layar bertulisan kecil bisa tampak sedikit luntur kalau penggeser kualitas diturunkan terlalu jauh.",
    notes: [
      {
        heading: "Tangkapan layar dan teks perlu kualitas lebih tinggi",
        body:
          "Konten foto tahan terhadap kompresi yang agresif karena mata tidak mengikuti piksel satu per satu di dalam tekstur. Konten bertepi tajam — tangkapan layar aplikasi, teks, diagram, gambar garis — justru sebaliknya: artefak kompresi berkumpul di sekitar tepi yang kontras dan tampak sebagai bayangan atau kabur tipis. Kalau PNG Anda berisi tulisan yang harus terbaca, tetaplah di 90% ke atas dan periksa hasilnya pada zoom 100% sebelum mengonversi banyak file.",
      },
      {
        heading: "Transparansi terbawa persis",
        body:
          "Kedua format menyimpan kanal alfa 8-bit penuh, jadi konversi ini tidak meratakan apa pun dan tidak meminta warna latar. Piksel semi-transparan tetap semi-transparan, artinya bayangan lembut dan tepi yang dihaluskan tetap utuh. Inilah alasan utama memilih WebP ketimbang JPG saat sumbernya PNG.",
      },
      {
        heading: "Kapan sebaiknya tetap PNG",
        body:
          "Pertahankan PNG kalau filenya adalah master yang akan diedit lagi, kalau akan dipakai di tempat yang tidak bisa membuka WebP — template email adalah yang paling terkenal, karena beberapa aplikasi email desktop masih belum menampilkannya — atau kalau itu ikon kecil yang penghematannya hanya beberapa ratus byte dan tidak sebanding dengan tambahan format di alur kerja Anda. PNG juga tetap jawaban yang tepat untuk apa pun yang harus persis sampai ke piksel, seperti kode QR atau diagram teknis.",
      },
    ],
    faqs: [
      { q: "Apakah PNG ke WEBP mempertahankan transparansi?", a: "Ya, sepenuhnya. WebP punya kanal alfa penuh, jadi area transparan dan semi-transparan terbawa tanpa berubah. Tidak ada yang diratakan dan tidak ada warna latar yang perlu dipilih." },
      { q: "Seberapa kecil WEBP dibandingkan PNG?", a: "Biasanya 50–75% lebih kecil untuk gambar foto atau yang kompleks. Grafis polos yang sederhana lebih bervariasi — kadang penghematannya sangat besar, kadang PNG yang sangat kecil memang sudah hampir optimal." },
      { q: "Apakah konversinya lossless?", a: "Tidak secara bawaan. Alat ini memakai mode lossy WebP dengan penggeser kualitas, dan dari situlah penghematan besar itu datang. Naikkan kualitasnya kalau Anda butuh hasil yang nyaris sama dengan aslinya, atau tetap pakai PNG kalau harus persis." },
      { q: "Apakah tulisan di tangkapan layar tetap tajam?", a: "Pada kualitas 90% ke atas, umumnya ya. Pengaturan yang lebih rendah bisa melunakkan tulisan kecil, karena artefak kompresi berkumpul di tepi yang kontras. Periksa satu file pada zoom penuh sebelum mengonversi semuanya." },
      { q: "Bisakah WEBP dipakai di email?", a: "Tidak bisa diandalkan. Beberapa aplikasi email desktop masih belum menampilkan WebP, jadi PNG atau JPG tetap pilihan yang lebih aman untuk email. WebP ditujukan untuk halaman web, tempat dukungannya sudah menyeluruh." },
    ],
  },
};

export default copy;
