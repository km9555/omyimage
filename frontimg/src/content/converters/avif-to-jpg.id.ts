import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/avif-ke-jpg.
 *
 * The English unique FAQ says the image is "never sent anywhere", but this
 * pair has serverFallback:true — a very large or very high-resolution AVIF IS
 * offloaded (Sharp decodes AVIF). The Indonesian page states the exception,
 * matching ConvertTool's privacy note and the generated boilerplate FAQ.
 *
 * Background fill: Auto, white when the edge is transparent.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF ke JPG",
  seoTitle: "AVIF ke JPG Online Gratis — Buka File AVIF di Mana Saja | oMyImage",
  seoDescription:
    "Ubah AVIF ke JPG online gratis: format paling efisien jadi format yang bisa dibuka semua aplikasi, ponsel, dan tempat cetak. Diproses di browser, sekaligus banyak — tanpa daftar.",
  unique: {
    intro:
      "AVIF adalah format gambar paling efisien yang umum dipakai saat ini, sekaligus yang paling kecil kemungkinannya bisa dibuka oleh aplikasi Anda. Mengubahnya ke JPG menukar efisiensi itu dengan kemampuan untuk benar-benar memakai filenya — di aplikasi edit, di ponsel lama, di tempat cetak, di apa pun yang dibuat sebelum sekitar 2021. Browser Anda yang membuka (mendekode) AVIF-nya, jadi gambar diproses di perangkat Anda.",
    whyConvert:
      "AVIF menyebar di situs web jauh lebih cepat daripada di aplikasi desktop, dan kesenjangan itulah yang membawa kebanyakan orang ke sini. Anda menyimpan gambar dari sebuah situs modern, lalu Photoshop, Windows Photo Viewer, aplikasi galeri ponsel, atau formulir unggah menolak menyentuhnya. Browser justru pengecualian, bukan aturannya: Chrome sudah membuka AVIF sejak versi 85, Firefox sejak 93, dan Safari sejak 16.4 — itulah yang membuat konversi ini bisa dilakukan langsung di browser Anda. JPG berada di ujung sebaliknya: dipahami oleh hampir segalanya, dengan harga file yang lebih besar untuk kualitas tampak yang sama. Kalau filenya hanya untuk Anda pakai sendiri dan aplikasi Anda tidak bisa membaca AVIF, mengonversinya jauh lebih mudah daripada mencari codec.",
    notes: [
      {
        heading: "Filenya akan membesar",
        body:
          "Inilah pertukaran yang memang diharapkan, dan perlu dijelaskan terang-terangan. AVIF sering mencapai setengah ukuran JPG pada kualitas setara, jadi arah sebaliknya kira-kira menggandakannya. Anda membeli kecocokan dengan byte. Kalau ukuran benar-benar penting bagi tujuannya, biarkan penggeser kualitas di sekitar 85%, jangan dinaikkan ke maksimum — perbedaannya sulit terlihat dan penghematannya berarti.",
      },
      {
        heading: "Transparansi dan HDR tidak ikut",
        body:
          "AVIF mendukung kanal alfa dan rentang dinamis tinggi; JPG tidak mendukung keduanya. Area transparan diisi warna latar — secara bawaan diambil dari tepi gambar, atau putih kalau tepinya transparan. Gambar HDR dipetakan ke rentang standar oleh browser saat dibuka, yang pada foto terang dan kontras tinggi bisa membuat bagian terangnya tampak lebih datar. Kalau salah satunya penting, ubah ke PNG — transparansinya tetap, walaupun HDR juga tidak bisa dipertahankan.",
      },
      {
        heading: "Kenapa browser bisa membukanya, tetapi aplikasi tidak",
        body:
          "AVIF membungkus codec video AV1, yang diadopsi pembuat browser lebih awal dan lebih agresif karena bebas royalti dan bagus untuk streaming video. Aplikasi gambar desktop butuh waktu lebih lama, karena harus memasang seluruh codec video hanya untuk menampilkan gambar diam. Itulah seluruh penjelasan situasi aneh ketika halaman web menampilkan gambarnya dengan baik, tetapi file yang disimpan tidak bisa dibuka saat diklik dua kali.",
      },
    ],
    faqs: [
      { q: "Kenapa komputer saya tidak bisa membuka file AVIF?", a: "Dukungan AVIF tiba di browser bertahun-tahun sebelum sampai ke aplikasi desktop. Windows memerlukan AV1 Video Extension dari Microsoft Store, dan banyak aplikasi edit gambar masih belum mendukungnya sama sekali. Konversi menghindari masalah itu." },
      { q: "Apakah JPG-nya akan lebih besar daripada AVIF?", a: "Ya, biasanya sekitar dua kali lipat pada kualitas yang sebanding. AVIF jauh lebih efisien; JPG jauh lebih kompatibel. Itulah pertukaran yang Anda buat." },
      { q: "Apakah konversi menurunkan kualitas?", a: "Sedikit, karena kedua format bersifat lossy dan gambarnya dikodekan ulang. Pada kualitas 85% ke atas, penurunannya sangat sulit terlihat. Konversikan dari AVIF aslinya, bukan dari salinan yang sudah pernah dikonversi." },
      { q: "Apa yang terjadi pada transparansi di AVIF?", a: "Diisi warna solid, karena JPG tidak punya kanal alfa. Pilih warna pengisinya sebelum mengonversi, atau ubah ke PNG untuk mempertahankan transparansinya." },
      { q: "Apakah gambar saya diunggah untuk dikonversi?", a: "Biasanya tidak. Browser Anda sudah bisa membuka AVIF, dan itulah yang memungkinkan konversi di perangkat Anda. Pengecualiannya hanya gambar yang sangat besar atau beresolusi sangat tinggi: gambar itu diproses di server kami melalui koneksi terenkripsi lalu dihapus, dan alat ini memberi tahu Anda saat itu terjadi." },
    ],
  },
};

export default copy;
