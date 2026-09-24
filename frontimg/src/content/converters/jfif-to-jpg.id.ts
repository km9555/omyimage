import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/jfif-ke-jpg.
 *
 * The Windows-and-Chrome .jfif quirk hits exactly the systems Indonesians
 * upload photos to most often — job applications, school and campus
 * registration, government portals — which check the extension and reject
 * .jfif outright. The page says it is a naming problem, not a broken file,
 * and why a converter beats renaming when there are many files or hidden
 * extensions.
 *
 * Background fill (JPG target): Auto by default, white when the edge ring is
 * transparent. A .jfif is a JPEG, so it has no transparency — the note does
 * not dwell on it.
 */
const copy: LocalizedPairCopy = {
  name: "JFIF ke JPG",
  seoTitle: "JFIF ke JPG Online Gratis — Ubah File .jfif Jadi .jpg | oMyImage",
  seoDescription:
    "Ubah JFIF ke JPG online gratis: file .jfif dari Chrome di Windows jadi .jpg biasa yang diterima formulir lamaran kerja, pendaftaran sekolah, dan situs lainnya. Sekaligus banyak, tanpa daftar.",
  unique: {
    intro:
      "Anda menyimpan sebuah gambar dan Windows memberi Anda file .jfif yang tidak mau dibuka oleh separuh aplikasi Anda. Sebenarnya tidak ada yang salah dengan file itu — JFIF adalah JPEG biasa dengan ekstensi yang tidak lazim — tetapi itu tidak banyak menolong saat formulir unggah menolaknya. Konverter ini membaca file tersebut dan menulis .jpg yang bersih, yang berperilaku seperti yang Anda harapkan sejak awal.",
    whyConvert:
      "Ini masalah nama yang menyamar sebagai masalah format. JFIF adalah singkatan dari JPEG File Interchange Format, dan itulah wadah yang dipakai di dalam hampir semua file yang selama ini Anda sebut JPG. Alasan Anda tiba-tiba punya file berakhiran .jfif adalah keanehan di registry Windows: kombinasi Windows dan Chrome tertentu mendaftarkan .jfif sebagai ekstensi pilihan untuk tipe MIME image/jpeg, dan sejak itu gambar yang disimpan mendapat ekstensi itu, bukan .jpg. Isi filenya sama persis dengan yang akan Anda dapatkan sebelumnya. Sayangnya banyak sistem memeriksa ekstensi, bukan isi file — portal lamaran kerja, pendaftaran sekolah dan kampus, situs pemerintah, pengunggah produk toko online — lalu langsung menolak. Mengganti nama file secara manual sering berhasil, tetapi gagal kalau ekstensinya disembunyikan, kalau filenya puluhan, atau kalau sistem penerimanya juga memeriksa isi file.",
    notes: [
      {
        heading: "Kenapa tidak sekadar ganti nama?",
        body:
          "Sering kali bisa, dan kalau hanya satu file dengan ekstensi yang terlihat, itulah cara tercepat. Cara itu gagal untuk banyak file dan saat Windows menyembunyikan ekstensi, sehingga yang Anda dapatkan malah foto.jpg.jfif yang sama sekali tidak menolong. Konversi juga menormalkan file: gambar didekode lalu dikodekan ulang sebagai JPEG baseline standar, yang menyelesaikan kasus sesekali ketika aplikasi penerima sebenarnya keberatan dengan sesuatu di dalam file, bukan dengan namanya.",
      },
      {
        heading: "Menghentikan Windows agar tidak mengulanginya",
        body:
          "Penyebabnya adalah asosiasi tipe file di registry Windows, pada entri untuk tipe konten image/jpeg, yang mencantumkan .jfif sebagai ekstensi bawaan. Mengedit registry memperbaikinya secara permanen untuk unduhan berikutnya, tetapi tidak berpengaruh pada file yang sudah Anda punya, dan bukan hal yang sebaiknya dicoba sembarangan. Konversi menangani file yang sudah ada di disk Anda, yang biasanya justru masalah yang mendesak.",
      },
      {
        heading: "Satu kali simpan ulang, kehilangan minimal",
        body:
          "Karena JFIF dan JPG pada dasarnya format yang sama, konversi ini hampir sekadar meneruskan. Gambar didekode dan dikodekan ulang satu kali, jadi pada kualitas tinggi perbedaannya tidak terasa. Biarkan penggeser kualitas tetap tinggi — tidak ada masalah ukuran yang perlu diselesaikan di sini, dan ini bukan saatnya untuk mengompres.",
      },
    ],
    faqs: [
      { q: "Sebenarnya apa itu file JFIF?", a: "File JPEG. JFIF adalah singkatan dari JPEG File Interchange Format, wadah standar yang sudah dipakai hampir semua file JPG. Satu-satunya perbedaan adalah huruf setelah titik." },
      { q: "Kenapa Chrome menyimpan gambar sebagai .jfif, bukan .jpg?", a: "Asosiasi di registry Windows mencantumkan .jfif sebagai ekstensi bawaan untuk tipe konten image/jpeg. Chrome menanyakan ekstensi yang dipakai kepada Windows dan diberi jawaban .jfif. Ini keanehan konfigurasi Windows, bukan bug Chrome." },
      { q: "Kenapa formulir lamaran kerja atau pendaftaran menolak file .jfif?", a: "Karena sistemnya memeriksa ekstensi dan hanya menerima .jpg, .jpeg, atau .png, walaupun isi file .jfif sebenarnya JPEG yang sah. Ubah ke JPG di sini, lalu unggah ulang — isinya tetap gambar yang sama." },
      { q: "Bisakah saya sekadar mengganti .jfif jadi .jpg?", a: "Sering kali bisa, karena isinya sudah JPEG yang sah. Cara itu merepotkan saat Windows menyembunyikan ekstensi file, tidak praktis untuk banyak file, dan tidak menolong kalau aplikasi penerima keberatan dengan hal lain selain namanya." },
      { q: "Apakah konversi menurunkan kualitas?", a: "Praktis tidak, pada pengaturan kualitas tinggi. Gambar didekode dan dikodekan ulang satu kali, penurunan satu generasi yang sangat kecil. Biarkan penggeser tetap tinggi dan Anda tidak akan melihat perbedaannya." },
      { q: "Bisakah banyak file JFIF diubah sekaligus?", a: "Bisa, dan inilah alasan utama memakai konverter alih-alih mengganti nama. Masukkan satu folder penuh dan Anda menerima kembali satu ZIP berisi file .jpg." },
      { q: "Apakah file JFIF berbahaya atau rusak?", a: "Tidak. Itu file gambar biasa dengan ekstensi yang asing. Tidak ada yang rusak di dalamnya, dan justru itulah sebabnya situasinya membingungkan." },
    ],
  },
};

export default copy;
