import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * Indonesian copy for /id/webp-ke-jpg.
 *
 * Measured: «webp ke jpg» 880/mo (Indonesia, KD 0) — the only converter pair
 * with Indonesian data, and the biggest of the ten. The reason people arrive
 * is the one the page leads with: an image saved from the web turns out to be
 * WebP, and the form in front of them — school registration, a job portal, a
 * government site — says "JPG/JPEG".
 *
 * Background fill, stated precisely: the default is Auto, which samples the
 * image's own outer ring and falls back to WHITE when that ring is
 * transparent (lib/image/bg-detect.ts). The English page's "white is the
 * default" is the common case of that, not the rule, so this page says both.
 *
 * Sibling of webp-ke-png and deliberately a different page; verify-build
 * measures prose similarity between converter pairs.
 */
const copy: LocalizedPairCopy = {
  name: "WEBP ke JPG",
  seoTitle: "WEBP ke JPG Online Gratis — Ubah WebP Jadi JPG | oMyImage",
  seoDescription:
    "Ubah WEBP ke JPG online gratis: format yang diterima semua formulir, aplikasi, dan tempat cetak. Atur kualitas dan warna latar, sekaligus banyak — di browser, tanpa daftar.",
  unique: {
    intro:
      "WebP bagus di halaman web, tetapi merepotkan di tempat lain. Mengubahnya ke JPG memberi Anda satu-satunya format gambar yang tidak pernah ditolak — aplikasi email, tempat cetak foto, bingkai foto digital, ponsel lama, dan formulir unggah di situs pemerintah. Anda yang menentukan kualitasnya, dan kalau WebP-nya punya area transparan, Anda yang memilih warna pengisinya, karena JPG tidak bisa menyimpan transparansi.",
    whyConvert:
      "Hampir semua orang yang datang ke sini sedang terbentur tembok, bukan sedang memilih. Anda mengklik kanan sebuah gambar, menyimpannya, lalu tempat yang harus diisi menolak file .webp. Di Indonesia, yang paling sering menolak adalah formulir online: pendaftaran sekolah dan kampus, lamaran kerja, dan portal pemerintah yang mencantumkan \"format JPG/JPEG\" dan memeriksa ekstensinya. Daftar lainnya panjang dan keras kepala: banyak jasa cetak, Office versi lama, pengunggah produk di toko online, bingkai foto digital, dan berbagai perangkat lunak lama. JPG adalah penyebut terkecil dalam dunia gambar digital selama tiga dasawarsa, jadi mengubahnya biasanya lebih cepat daripada melawan apa pun yang menolak filenya. Alasan kedua adalah ukuran: kalau WebP Anda ternyata lossless — tangkapan layar sering begitu — ukurannya bisa lebih besar daripada JPG dari gambar yang sama, dan konversi memperkecilnya cukup banyak.",
    notes: [
      {
        heading: "Bagian transparan harus diisi sesuatu",
        body:
          "JPG sama sekali tidak punya kanal alfa, jadi latar transparan tidak bisa ikut terbawa begitu saja — sesuatu harus dicat di bawahnya. Secara bawaan, alat ini mengambil warna dari tepi gambar itu sendiri, dan kalau tepinya transparan, hasilnya putih. Putih cocok di halaman putih dan mencolok di halaman gelap, itulah sebabnya Anda bisa memilih warna pengisinya sendiri. Kalau transparansinya memang penting, JPG adalah tujuan yang salah — ubah ke PNG dan transparansinya tetap terjaga.",
      },
      {
        heading: "Dua kali kompresi lossy berturut-turut",
        body:
          "WebP yang lossy sudah membuang sebagian detail, dan penyimpanan ke JPG membuang sedikit lagi. Dalam praktiknya hal ini jarang terlihat pada pengaturan kualitas yang wajar, tetapi efeknya nyata dan menumpuk kalau Anda bolak-balik mengonversi. Ubah sekali, dari sumber terbaik yang Anda punya, dan simpan hasilnya. Kalau gambarnya masih akan diedit, PNG yang lossless adalah perantara yang lebih baik.",
      },
      {
        heading: "WebP beranimasi hanya jadi satu frame",
        body:
          "JPG adalah format satu gambar, jadi WebP beranimasi dikonversi menjadi frame pertamanya. Tidak ada cara mengakalinya di dalam JPG. Kalau animasinya yang penting, ubah ke GIF.",
      },
    ],
    faqs: [
      { q: "Kenapa formulir online menolak file WEBP saya?", a: "Karena banyak formulir — pendaftaran sekolah, lamaran kerja, portal pemerintah — hanya menerima ekstensi .jpg atau .jpeg dan memeriksanya sebelum mengunggah. Gambar yang disimpan dari situs web sering kali ternyata WebP. Ubah ke JPG di sini, lalu unggah ulang." },
      { q: "Kenapa komputer saya tidak bisa membuka file WEBP?", a: "Karena WebP hadir pada 2010 dan aplikasi desktop lambat mengikutinya. Windows versi lama memerlukan codec dari Microsoft Store, Photoshop baru mendukungnya langsung di versi 23.2, dan banyak aplikasi kecil masih belum mendukungnya sama sekali. Mengubah ke JPG menghindarkan Anda dari mengurusnya satu per satu." },
      { q: "Apakah JPG-nya akan lebih besar atau lebih kecil dari WEBP?", a: "Biasanya sedikit lebih besar kalau WebP-nya lossy, karena WebP mengompres lebih efisien pada kualitas yang sama. Kalau WebP-nya lossless — umum pada tangkapan layar dan grafis — JPG-nya akan jauh lebih kecil." },
      { q: "Apa yang terjadi pada area transparan?", a: "Area itu diisi warna solid, karena JPG tidak bisa menyimpan transparansi. Secara bawaan warnanya diambil dari tepi gambar, atau putih kalau tepinya transparan, dan Anda bisa menggantinya sebelum mengonversi. Untuk mempertahankan transparansi, ubah ke PNG." },
      { q: "Apakah konversi menurunkan kualitas gambar?", a: "Sedikit, karena JPG bersifat lossy. Pada kualitas bawaan, perbedaannya tidak terlihat pada ukuran tampilan normal. Naikkan penggesernya kalau Anda mengonversi foto penuh detail yang akan dicetak." },
      { q: "Bisakah banyak file WEBP diubah sekaligus?", a: "Bisa. Masukkan semuanya dan file dikonversi satu per satu, lalu dikirim dalam satu ZIP, jadi Anda tidak perlu mengklik unduhan satu per satu." },
    ],
  },
};

export default copy;
