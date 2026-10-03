import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/bmp-ke-jpg.
 *
 * Where Indonesians still meet BMP: office and school scanners, old Windows
 * utilities (Paint used to save BMP by default), and equipment specified
 * decades ago. The practical problem is an upload limit of a few MB against
 * a 36 MB bitmap.
 *
 * This pair has serverFallback:false (Sharp has no BMP decoder), so the copy
 * says the conversion ALWAYS runs locally — which, unlike most pairs, is
 * literally true at any size.
 */
const copy: LocalizedPairCopy = {
  name: "BMP ke JPG",
  seoTitle: "BMP ke JPG Online Gratis — Perkecil File Bitmap hingga 90% | oMyImage",
  seoDescription:
    "Ubah BMP ke JPG online gratis: file bitmap 36 MB jadi JPG beberapa MB yang bisa dikirim dan diunggah. Selalu diproses di browser Anda, sekaligus banyak — tanpa daftar.",
  unique: {
    intro:
      "File BMP berukuran raksasa karena nyaris tidak dikompresi sama sekali — bitmap 12 megapiksel memakan sekitar 36 MB, sementara foto yang sama sebagai JPG mendekati 3 MB. Konversi adalah cara tercepat membuat file seperti itu bisa dipakai: bisa dilampirkan, diunggah, dan dibuka di perangkat selain Windows. Anda yang mengatur kualitasnya, dan banyak file kembali sebagai satu ZIP.",
    whyConvert:
      "BMP menyimpan setiap piksel secara utuh, tanpa kompresi yang berarti, itulah sebabnya ukurannya begitu mengejutkan. Itu rancangan yang disengaja dari masa ketika kecepatan membuka file lebih penting daripada ruang disk, dan kini bertahan terutama di utilitas Windows, driver scanner dan kamera lama, alat tangkapan layar, serta peralatan industri atau medis yang dirancang puluhan tahun lalu. Di sekitar kita, sumber yang paling sering adalah scanner lama di kantor atau sekolah dan Paint versi lama yang dulu menyimpan BMP secara bawaan. Begitu Anda perlu mengirimnya lewat email, memasangnya di situs web, atau mengunggahnya ke formulir yang membatasi ukuran file beberapa MB saja, ukurannya menjadi masalah. Mengubah ke JPG biasanya memangkasnya 90% atau lebih tanpa perbedaan yang terlihat pada kualitas yang wajar. Konversi juga menyelesaikan soal kecocokan yang sering mengejutkan: walaupun BMP mudah dibuka di Windows, dukungannya di macOS, iOS, dan Android tidak sebaik yang Anda kira untuk format setua itu.",
    notes: [
      {
        heading: "Harapkan penyusutan ukuran yang sangat besar",
        body:
          "Penyusutan 90–97% itu wajar, dan bukan tanda ada yang salah. Anda berpindah dari format yang menyimpan setiap piksel apa adanya ke format yang memodelkan apa yang benar-benar diperhatikan mata manusia. Kalau Anda ingin penyusutan tanpa kehilangan apa pun, ubah ke PNG saja — tetap hemat besar dibanding BMP, biasanya 40–70%, dan lossless.",
      },
      {
        heading: "Konversi ini selalu berjalan di perangkat Anda",
        body:
          "Kebanyakan alat di sini menyerahkan file yang sangat besar ke server untuk diproses, tetapi BMP sengaja dikecualikan: pustaka gambar di server tidak punya dekoder BMP, jadi bitmap yang dikirim ke sana akan gagal, bukan terkonversi. Browser Anda menangani BMP dengan sangat baik, jadi konversi BMP tetap di komputer Anda seberapa pun besar filenya. Mengingat betapa besarnya bitmap, ini juga jalan yang lebih cepat — tidak ada unggahan yang perlu ditunggu.",
      },
      {
        heading: "Transparansi dan kedalaman warna",
        body:
          "Sebagian besar file BMP yang beredar adalah 24-bit tanpa transparansi, jadi biasanya tidak ada yang perlu diratakan. Sebagian BMP 32-bit memang membawa kanal alfa; karena JPG tidak bisa menyimpannya, area transparan diisi warna latar yang Anda pilih. Bitmap 8-bit atau 1-bit yang sangat tua juga terkonversi dengan baik, walaupun hasil scan hitam-putih 1-bit sering lebih cocok diubah ke PNG, yang menangani monokrom bertepi keras lebih efisien daripada JPG.",
      },
    ],
    faqs: [
      { q: "Kenapa file BMP begitu besar?", a: "Karena pada dasarnya disimpan tanpa kompresi — setiap piksel ditulis utuh. BMP 24-bit 12 megapiksel berukuran sekitar 36 MB. JPG mengompres gambar yang sama menjadi kira-kira sepersepuluhnya atau kurang." },
      { q: "Seberapa kecil JPG-nya nanti?", a: "Biasanya 90–97% lebih kecil. Bitmap 36 MB umumnya menjadi 1 sampai 4 MB, tergantung pengaturan kualitas dan seberapa detail gambarnya." },
      { q: "Apakah kualitasnya turun saat BMP diubah ke JPG?", a: "Sedikit, karena JPG bersifat lossy. Pada pengaturan bawaan, penurunannya tidak terlihat pada ukuran tampilan normal. Kalau tidak boleh ada kehilangan sama sekali, ubah ke PNG — tetap jauh lebih kecil daripada BMP." },
      { q: "Bisakah file BMP yang sangat besar dikonversi?", a: "Bisa. Konversi BMP selalu berjalan di browser Anda, bukan di server, karena pustaka di server tidak bisa membaca BMP. File yang sangat besar hanya butuh waktu sedikit lebih lama." },
      { q: "Apakah file BMP mendukung transparansi?", a: "BMP 24-bit, yang paling umum, tidak. Sebagian BMP 32-bit membawa kanal alfa; karena JPG tidak bisa menyimpan transparansi, area itu diisi warna latar yang Anda pilih." },
      { q: "Sebaiknya BMP diubah ke JPG atau PNG?", a: "JPG untuk foto dan untuk file sekecil mungkin. PNG kalau Anda butuh kualitas lossless, kalau gambarnya tangkapan layar atau gambar garis, atau kalau kanal alfanya ingin dipertahankan." },
    ],
  },
};

export default copy;
