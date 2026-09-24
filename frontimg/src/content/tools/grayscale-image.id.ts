import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/foto-hitam-putih.
 *
 * Measured (Indonesia, per month): foto hitam putih 12,100, KD 0. «Hitam
 * putih» is the everyday phrase; «grayscale» is the technical word and is
 * used only where the page explains the difference (the FAQ on 1-bit black
 * and white). «foto jadul» and «monokrom» are in aliases.ts.
 *
 * Local angles: phone photos of KTP, KK and ijazah that go on into
 * /id/foto-ke-pdf (grayscale first makes the PDF far smaller), and the
 * photocopy shop, where a colour print costs more per page than a
 * black-and-white one — the Indonesian form of the English "print" section.
 */
const content: ToolPageContent = {
  toolId: "grayscale-image",
  locale: "id",
  name: "Foto Hitam Putih",
  tagline:
    "Ubah foto jadi hitam putih secara online — dengan intensitas yang bisa diatur, pratinjau langsung, dan banyak foto sekaligus. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Foto Hitam Putih Online Gratis — Ubah Foto Jadi Hitam Putih | oMyImage",
  metaDescription:
    "Ubah foto jadi hitam putih online gratis: penuh atau sebagian dengan penggeser intensitas, pratinjau langsung, sekaligus banyak. Cocok untuk dokumen dan cetak — di browser, tanpa daftar.",

  intro:
    "Beri foto Anda tampilan hitam putih yang tak lekang waktu. Alat Foto Hitam Putih ini menghilangkan warna dari gambar apa pun langsung di browser Anda, dengan penggeser intensitas untuk segala tingkat, dari warna yang sekadar memudar sampai monokrom penuh. Proses satu foto atau banyak sekaligus dan langsung unduh — tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Apa yang sebenarnya terjadi saat diubah",
      id: "how",
      body: [
        "Gambar berwarna menyimpan tiga angka per piksel — merah, hijau, dan biru. Gambar hitam putih (grayscale) menyimpan satu: kecerahan. Konversinya harus menentukan seberapa besar setiap kanal warna menyumbang pada satu nilai itu, dan jawabannya bukan dibagi rata, karena penglihatan manusia tidak sama pekanya terhadap ketiganya.",
        "Kita melihat hijau jauh lebih terang daripada biru pada intensitas yang sama, jadi pembobotan standarnya sangat condong ke hijau, cukup ke merah, dan hanya sedikit ke biru. Merata-ratakan ketiga kanal sama besar adalah cara yang naif, dan hasilnya jelas keruh — langit terlalu terang, dedaunan terlalu gelap.",
        "Akibat yang perlu diketahui: dua warna yang sangat berbeda bisa menghasilkan abu-abu yang sama. Kecerahan hanya satu dimensi, padahal warna punya tiga, jadi informasinya benar-benar hilang, bukan sekadar disisihkan.",
      ],
    },
    {
      heading: "Kenapa hitam putih bisa jadi foto yang lebih baik",
      id: "aesthetics",
      body: [
        "Menghilangkan warna berarti menghilangkan gangguan. Yang tersisa adalah komposisi, kontras, tekstur, dan cahaya — itulah sebabnya fotografi potret dan dokumenter tidak pernah meninggalkan monokrom. Latar yang berantakan dan penuh warna yang saling bersaing sering jadi tenang dalam hitam putih, dan wajah jadi lebih berkarakter saat warna kulit tidak lagi mendominasi.",
        "Hitam putih juga menyelamatkan foto dengan warna yang buruk. Cahaya campuran — sinar matahari dari jendela dan lampu kuning di atas — menghasilkan rona warna yang sulit dikoreksi dan langsung terlihat. Dalam hitam putih, masalah itu tidak ada sama sekali.",
        "Yang dirugikan adalah foto yang maknanya dibawa oleh warna: matahari terbenam, produk yang dijual justru karena warnanya, atau grafik yang dibedakan dengan warna. Kalau warna adalah pokoknya, mengubahnya berarti membuang pokok itu.",
      ],
    },
    {
      heading: "Dokumen, hasil foto, dan ukuran file",
      id: "documents",
      body: [
        "Memotret KTP, KK, atau ijazah dengan ponsel menghasilkan gambar berwarna penuh dari sesuatu yang pada dasarnya tulisan hitam di atas kertas putih — tiga kanal dipakai untuk merekam hal yang cukup dengan satu. Mengubahnya jadi hitam putih biasanya memangkas ukuran file sampai setengahnya, kadang lebih, tanpa mengurangi keterbacaan sama sekali.",
        "Hasilnya juga lebih rapi. Foto kertas dari ponsel menangkap rona warna dari lampu di ruangan, sehingga halamannya tampak kekuningan, kebiruan, atau kehijauan tergantung lampunya. Hitam putih menghilangkan semua itu dan membuat halaman-halaman yang difoto pada hari berbeda terlihat seragam.",
        "Ini pasangan yang pas untuk membuat PDF: ubah jadi hitam putih dulu, lalu gabungkan menjadi dokumen dengan Foto ke PDF, dan hasilnya hanya sebagian kecil dari ukuran versi berwarna — sering kali itulah bedanya lolos batas unggah atau tidak.",
      ],
    },
    {
      heading: "Cetak dan aksesibilitas",
      id: "print",
      body: [
        "Mengubah sendiri, alih-alih menyerahkannya ke driver printer, membuat Anda yang menentukan bagaimana nada-nadanya dipetakan. Ini juga menghindari kerepotan praktis: di tempat fotokopi, cetak berwarna dihitung lebih mahal per halaman, dan satu logo berwarna saja bisa membuat halaman itu dihitung sebagai cetak warna. Kirim versi hitam putih, dan tidak ada yang perlu ditawar.",
        "Ada juga sisi aksesibilitas. Melihat karya Anda dalam hitam putih adalah cara tercepat menguji apakah maknanya hanya bergantung pada warna. Kalau grafiknya jadi tidak terbaca, atau kolom formulir yang wajib diisi tidak lagi bisa dibedakan, itulah persis yang dialami pembaca buta warna — dan solusinya adalah menambahkan label, pola, atau bentuk, bukan mengganti paletnya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah foto jadi hitam putih",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Atur intensitasnya", description: "Gunakan penggeser untuk hitam putih penuh atau warna yang hanya memudar sebagian, dengan pratinjau langsung." },
    { title: "Ubah & unduh", description: "Klik Jadikan hitam putih — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "filter_b_and_w", title: "Intensitas bisa diatur", description: "Hitam putih penuh atau warna yang hanya memudar sebagian, dengan penggeser 0–100% yang halus dan pratinjau instan." },
    { icon: "burst_mode", title: "Banyak foto sekaligus", description: "Terapkan hitam putih yang sama ke banyak foto JPG, PNG, atau WEBP sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "lock", title: "100% privat", description: "Semuanya berjalan di browser Anda dengan HTML canvas — foto Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Apa fungsi penggeser intensitas?", a: "Pada 100% foto menjadi hitam putih sepenuhnya; nilai yang lebih rendah mencampur warna asli dengan abu-abu untuk tampilan yang memudar sebagian." },
    { q: "Bisakah banyak foto dijadikan hitam putih sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — satu foto langsung terunduh dan beberapa foto diunduh bersama dalam satu ZIP. Ini yang biasa dibutuhkan untuk sekumpulan halaman dokumen atau galeri yang seragam." },
    { q: "Format apa saja yang didukung?", a: "JPG, PNG, dan WEBP, dan format hasilnya bisa dipilih terpisah dari format masukan." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Apakah foto hitam putih ukurannya lebih kecil?", a: "Biasanya ya, dan kadang sangat banyak. Membuang informasi warna menyisakan lebih sedikit yang perlu disimpan — PNG khususnya bisa turun setengahnya atau lebih. Untuk foto dokumen dan hasil scan, ini salah satu cara paling mudah memperkecil file." },
    { q: "Apakah hitam putih sama dengan grayscale?", a: "Tidak persis, walaupun kedua istilah sering dipakai bergantian. Grayscale menyimpan 256 tingkat abu-abu dari hitam sampai putih — itulah yang dihasilkan alat ini. Hitam putih dalam arti teknisnya hanya satu bit per piksel — hitam pekat atau putih bersih tanpa apa pun di antaranya — seperti hasil mesin faks dan sebagian scanner, dan tampilannya sangat berbeda." },
    { q: "Bisakah warnanya dikembalikan?", a: "Tidak. Mengubah jadi hitam putih membuang kanal warna secara permanen, jadi simpan file aslinya kalau mungkin masih diperlukan. Alat ini bekerja pada salinan dan tidak pernah mengubah file di perangkat Anda, tetapi gambar hitam putih yang diekspor adalah hasil satu arah." },
    { q: "Kenapa beberapa warna berakhir dengan abu-abu yang sama?", a: "Karena hitam putih mengukur kecerahan, bukan rona. Merah pekat dan hijau pekat bisa punya kecerahan yang hampir sama di mata kita, sehingga keduanya menjadi abu-abu yang nyaris sama. Itulah sebabnya grafik yang berwarna-warni bisa jadi tidak terbaca dalam hitam putih — kategorinya hanya dibedakan dengan warna." },
    { q: "Apakah ini membantu saat mencetak?", a: "Sering kali. Mengubah sendiri berarti Anda yang menentukan bagaimana nada-nadanya dipetakan, bukan driver printer. Di tempat fotokopi, file hitam putih juga memastikan halaman Anda dihitung sebagai cetak hitam putih, bukan cetak warna yang lebih mahal." },
    { q: "Bagaimana cara membuat efek foto jadul?", a: "Mulailah dengan intensitas sekitar 70–85%: sisa warna yang tipis memberi kesan pudar seperti foto lama. Untuk nuansa cokelat ala sepia, gunakan filter Sepia di Editor Foto." },
  ],

  security:
    "Foto Anda tetap privat. Konversi ke hitam putih berlangsung sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "318" },

  ui: {
    "Same as original": "Sama seperti aslinya",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "Converted 1 image to grayscale.": "1 gambar berhasil dijadikan hitam putih.",
    "Converted {n} images to grayscale.": "{n} gambar berhasil dijadikan hitam putih.",
    "Grayscale failed.": "Gagal menjadikan hitam putih.",
    "done": "selesai",
    "Grayscale settings": "Pengaturan hitam putih",
    "Grayscale Settings": "Pengaturan Hitam Putih",
    "Grayscale & download": "Jadikan hitam putih & unduh",
    "Grayscale {n} images": "Jadikan {n} gambar hitam putih",
    "Live preview of": "Pratinjau langsung",
    "— applied to all {n} images.": "— diterapkan ke semua {n} gambar.",
    "Intensity": "Intensitas",
    "100% = fully black & white. Lower values desaturate partially.":
      "100% = hitam putih sepenuhnya. Nilai yang lebih rendah hanya memudarkan sebagian warna.",
    "Output format": "Format hasil",
    "JPG background": "Latar untuk JPG",
  },
};

export default content;
