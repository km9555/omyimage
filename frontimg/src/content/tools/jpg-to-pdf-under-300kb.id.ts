import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/jpg-ke-pdf-300kb (variant of image-to-pdf, 300 KB). */
const content: ToolPageContent = {
  toolId: "jpg-to-pdf-under-300kb",
  locale: "id",
  name: "JPG ke PDF di Bawah 300 KB",
  tagline:
    "Ubah foto atau scan beberapa halaman menjadi satu PDF di bawah 300 KB, dengan stempel, cap berwarna, dan pas foto tetap jelas. Untuk pendaftaran dan portal verifikasi dokumen. Di browser, tanpa upload.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "JPG ke PDF di Bawah 300 KB Online Gratis — Dokumen Banyak Halaman | oMyImage",
  metaDescription:
    "Gabungkan beberapa halaman JPG menjadi satu PDF di bawah 300 KB secara online dan gratis — dokumen berwarna, stempel, dan foto tetap jelas. Di browser, tanpa upload.",

  intro:
    "Batas PDF 300 KB biasanya berarti dokumen yang lebih lengkap: tiga sampai lima halaman, sering berwarna — surat keterangan dengan stempel, formulir isian dengan pas foto tertempel, setumpuk kuitansi. Halaman ini menggabungkan gambar Anda menjadi satu PDF dan, kalau hasilnya lebih dari 300 KB, mengompres ulang gambar hanya sampai seluruh file muat. Dengan 300 KB untuk dibagi, warna tetap akurat dan stempel tetap terbaca.",

  sections: [
    {
      heading: "Warna yang tetap terbaca",
      id: "colour",
      body: [
        "Stempel dan cap berwarna sering kali yang membuat dokumen sah, dan justru itulah yang pertama kabur saat dikompres terlalu keras. Di 300 KB, dokumen berwarna tiga halaman tetap sekitar 800 × 1100 piksel per halaman, jadi stempel biru, cap merah, dan pas foto yang tertempel tetap jelas.",
        "Kalau sebagian dokumen hanya teks ketik dan sebagian berwarna, biarkan semuanya berwarna — mengubah satu halaman menjadi hitam putih menghemat lebih sedikit dari yang dibayangkan, karena batasnya tetap dibagi ke semua halaman.",
      ],
    },
    {
      heading: "Berapa halaman yang muat",
      id: "pages",
      body: [
        "Dalam 300 KB, tiga halaman A4 terbaca dengan nyaman, dan dokumen berhuruf besar atau banyak ruang kosong bisa sampai empat atau lima halaman. Ukuran dibagi sesuai luas setiap gambar, jadi scan besar mendapat bagian lebih banyak daripada kuitansi kecil, dan setiap halaman keluar dengan ketajaman yang hampir sama.",
        "Untuk enam halaman atau lebih, gunakan halaman 500 KB kalau portalnya mengizinkan, atau bagi dokumen menjadi dua PDF.",
      ],
    },
    {
      heading: "Beberapa dokumen kecil dalam satu halaman",
      id: "multi-up",
      body: [
        "Kuitansi, kartu identitas, dan sertifikat kecil membuang tempat kalau masing-masing memakai satu halaman A4 penuh. Pilih 2 atau 4 di Gambar per halaman dan semuanya diletakkan berdampingan. PDF jadi lebih ringkas dan lebih mudah diperiksa, dan setiap dokumen tetap dengan resolusinya sendiri.",
      ],
    },
    {
      heading: "Pemeriksaan terakhir sebelum upload",
      id: "check",
      body: [
        "Buka PDF dan perbesar setiap halaman. Pastikan urutan halaman benar, tidak ada yang terpotong, dan setiap stempel serta tanda tangan terbaca. Kalau satu halaman jelas lebih buruk dari yang lain, foto ulang halaman itu di bawah cahaya siang dan buat PDF lagi.",
      ],
    },
    {
      heading: "Formulir dengan pas foto tertempel",
      id: "pasted-photo",
      body: [
        "Formulir pendaftaran yang sudah diisi sering memiliki pas foto yang ditempel di kotak yang disediakan, dan petugas memeriksa apakah wajahnya bisa dikenali. Di 300 KB, formulir tiga halaman menjaga pas foto tertempel cukup jelas untuk itu — asalkan halamannya difoto dengan baik.",
        "Foto formulir dalam keadaan rata, di bawah cahaya siang dan tanpa flash, supaya pas foto yang mengilap tidak memantulkan cahaya. Kalau kotak foto masih silau, miringkan kertas sedikit menjauhi jendela lalu foto ulang.",
      ],
    },
    {
      heading: "Nama file dan upload",
      id: "upload",
      body: [
        "Portal sering menolak nama file yang mengandung spasi atau karakter khusus. Sebelum upload, beri PDF nama pendek seperti formulir_pendaftaran.pdf, dan simpan foto aslinya supaya Anda bisa membuat ulang PDF untuk batas yang berbeda.",
      ],
    },
    {
      heading: "Kalau portal tetap menolak file",
      id: "rejected",
      body: [
        "Kalau file sudah di bawah batas tetapi formulir tetap menolaknya, periksa tiga hal. Pertama, jenis file: harus benar-benar PDF, bukan JPG yang diganti namanya menjadi .pdf. Kedua, nama file: hapus spasi, tanda kutip, garis miring, dan simbol lain. Ketiga, satuan yang dipakai portal.",
        "Beberapa sistem memeriksa ukuran sedikit lebih ketat daripada yang tertulis di petunjuk. Dalam hal itu, ketik 290 sebagai batas, bukan 300 — perbedaan kualitasnya tidak terlihat, dan selisih itu menghilangkan masalahnya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah JPG ke PDF di bawah 300 KB",
  steps: [
    { title: "Tambahkan halaman", description: "Tambahkan foto atau scan setiap halaman — JPG, PNG, WEBP, atau GIF." },
    { title: "Atur susunannya", description: "Tentukan urutan, ukuran kertas, dan gambar per halaman; batas 300 KB sudah terpasang." },
    { title: "Buat PDF", description: "Unduh satu PDF di bawah 300 KB dengan warna dan stempel yang tetap jelas." },
  ],

  features: [
    { icon: "palette", title: "Warna tetap terjaga", description: "Di 300 KB, stempel, cap, dan foto tetap berwarna dan jelas." },
    { icon: "grid_view", title: "Beberapa per halaman", description: "Dua atau empat kuitansi atau kartu per halaman, masing-masing dengan resolusinya sendiri." },
    { icon: "lock", title: "Tanpa upload", description: "Dokumen Anda dikompres dan digabung di browser." },
  ],

  faqs: [
    { q: "Bagaimana membuat PDF di bawah 300 KB dari gambar JPG?", a: "Tambahkan gambar, atur susunannya, lalu klik Buat PDF. Batas 300 KB sudah terpasang; gambar hanya dikompres secukupnya." },
    { q: "Berapa halaman yang bisa masuk PDF 300 KB?", a: "Tiga halaman A4 berwarna tetap terbaca; dengan huruf besar, empat sampai lima. Dokumen lebih panjang juga muat, dengan detail lebih sedikit per halaman." },
    { q: "Apakah stempel berwarna tetap terlihat?", a: "Ya. Di 300 KB, dokumen berwarna menyimpan cukup detail untuk stempel, cap, dan pas foto yang tertempel." },
    { q: "Bisakah dua kuitansi ditaruh dalam satu halaman?", a: "Bisa. Pilih 2 atau 4 di Gambar per halaman." },
    { q: "Kenapa satu halaman lebih buram dari yang lain?", a: "Biasanya foto itu diambil di cahaya yang kurang. Foto ulang di bawah cahaya siang dan buat PDF lagi." },
    { q: "Apakah 300 KB sama dengan 0,3 MB?", a: "Ya, 300 KB adalah 300.000 byte. PDF juga lolos di portal yang menghitung 1 KB sebagai 1.024 byte." },
    { q: "Apakah file saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah pas foto di formulir saya tetap bisa dikenali?", a: "Ya, untuk formulir sampai tiga atau empat halaman di 300 KB — asalkan pas foto tidak silau saat formulir difoto." },
    { q: "File sudah di bawah 300 KB tapi portal menolaknya — apa yang harus dilakukan?", a: "Pastikan file benar-benar PDF, hapus spasi dan simbol dari nama file, lalu coba batas 290 KB agar ada selisih." },
  ],

  security:
    "Gambar dokumen Anda dikompres dan disusun menjadi PDF di perangkat Anda, di browser. Tidak ada yang di-upload atau disimpan di mana pun.",
};

export default content;
