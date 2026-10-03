import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/base64-to-image.
 *
 * The other half of /id/image-to-base64. Same reader — a developer who types
 * the English term — so the slug stays English and the H1 is the Indonesian
 * name from the tools dictionary, «Base64 ke Gambar». Code identifiers
 * (data URI, the `data:image/png;base64,` prefix, `=` padding) are quoted as
 * they are.
 *
 * Local angle in `privacy`: the strings people paste here come out of API
 * responses and logs — including the e-KYC payloads that carry KTP photos —
 * which is exactly why decoding locally matters.
 */
const content: ToolPageContent = {
  toolId: "base64-to-image",
  locale: "id",
  name: "Base64 ke Gambar",
  tagline:
    "Ubah string Base64 atau data URI kembali menjadi gambar secara online — lihat pratinjaunya langsung dan unduh sebagai PNG, JPG, atau WEBP. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "Base64 to Image Online Gratis — Ubah Base64 ke Gambar | oMyImage",
  metaDescription:
    "Ubah Base64 ke gambar online gratis: tempel data URI atau string Base64 mentah, lihat pratinjaunya, lalu unduh asli atau sebagai PNG, JPG, atau WEBP. Didekode di browser, tanpa unggahan.",

  intro:
    "Ubah string Base64 kembali menjadi file gambar sungguhan. Alat Base64 ke Gambar ini mendekode data URI atau Base64 mentah langsung di browser Anda, menampilkan pratinjaunya seketika, dan memungkinkan Anda mengunduhnya apa adanya atau mengubahnya ke PNG, JPG, atau WEBP. Tidak ada yang diunggah, jadi data Anda tetap privat.",

  sections: [
    {
      heading: "Mengubah teks kembali menjadi gambar",
      id: "what",
      body: [
        "Base64 ada agar data biner bisa melewati saluran yang dibuat untuk teks. Itulah sebabnya gambar muncul sebagai deretan karakter panjang di dalam respons API, payload JSON, sumber HTML, file CSS, kolom database, dan isi email — pada suatu saat gambar itu harus muat di tempat yang hanya menerima teks.",
        "Decoding membalik prosesnya dengan persis. Base64 bersifat lossless: empat karakter kembali menjadi tiga byte, dan yang keluar sama persis byte demi byte dengan file aslinya. Tidak ada yang diperkirakan dan tidak ada kualitas yang hilang, jadi gambar hasil decoding identik dengan yang dikodekan.",
        "Saat yang biasa membutuhkan ini adalah debugging — Anda punya respons atau baris log berisi sesuatu yang seharusnya gambar, dan ingin melihat apakah gambarnya benar, atau bahkan apakah itu gambar yang valid.",
      ],
    },
    {
      heading: "Kenapa sebuah string gagal didekode",
      id: "troubleshooting",
      body: [
        "Sebagian besar kegagalan disebabkan kerusakan saat salin-tempel, bukan data yang benar-benar rusak. Penampil log, aplikasi email, dan terminal menyisipkan jeda baris ke string yang panjang; editor teks memotong baris; escape JSON ikut terbawa. Satu karakter nyasar saja sudah merusak decoding.",
        "Penyebab umum lainnya adalah string yang terpotong. Console dan sistem log sering memotong nilai yang panjang, kadang dengan elipsis dan kadang diam-diam, sehingga Anda memegang potongan yang terlihat lengkap. String Base64 yang valid selalu punya panjang yang habis dibagi empat, ditambah satu atau dua karakter '=' di akhir bila perlu — kalau punya Anda tidak begitu, string-nya belum lengkap.",
        "Waspadai juga Base64 versi aman-URL. Sebagian sistem mengganti '+' dan '/' dengan '-' dan '_' agar string bisa masuk ke URL, dan varian itu perlu dikembalikan dulu sebelum decoder standar mau menerimanya.",
      ],
    },
    {
      heading: "Dengan atau tanpa awalan",
      id: "prefix",
      body: [
        "Data URI lengkap terlihat seperti 'data:image/png;base64,' diikuti isinya. Awalan itu bukan bagian dari encoding — melainkan pernyataan yang memberi tahu browser apa arti byte hasil decoding, itulah cara tag img tahu harus memperlakukannya sebagai PNG, bukan JPG.",
        "Kedua bentuk bisa dipakai di sini. Kalau awalannya ada, awalan itu dipakai untuk menentukan format hasil, dan itulah hasil yang paling andal. Tanpa awalan, formatnya ditentukan dari byte hasil decoding itu sendiri, karena setiap format gambar diawali tanda tangan yang bisa dikenali.",
      ],
    },
    {
      heading: "Didekode secara lokal, dengan sengaja",
      id: "privacy",
      body: [
        "Semuanya terjadi di dalam tab browser Anda. Untuk alat ini, hal itu bukan detail sampingan, karena melihat dari mana string seperti ini biasanya berasal: respons API internal, log produksi, ekspor database, dan file konfigurasi — termasuk payload verifikasi e-KYC yang membawa foto KTP.",
        "Menempelkan bahan seperti itu ke situs web yang memprosesnya di server berarti menyerahkan apa pun isi payload-nya, beserta konteks di sekitarnya. Di sini string didekode di dalam halaman dan gambar hasilnya ditawarkan sebagai unduhan — tidak ada yang dikirim, dan tidak ada salinan di server yang perlu dikhawatirkan sesudahnya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah Base64 ke gambar",
  steps: [
    { title: "Tempel", description: "Tempel data URI atau string Base64 mentah ke kotak masukan." },
    { title: "Lihat pratinjau", description: "Gambar hasil decoding langsung muncul, lengkap dengan dimensinya dan pemeriksaan keabsahan." },
    { title: "Unduh", description: "Unduh gambar aslinya, atau ubah dulu ke PNG, JPG, atau WEBP." },
  ],

  features: [
    { icon: "image", title: "Decoding instan", description: "Mengenali PNG, JPG, GIF, WEBP, BMP, dan SVG secara otomatis dari string-nya dan menampilkan pratinjau selagi Anda mengetik." },
    { icon: "sync_alt", title: "Konversi saat mengunduh", description: "Simpan gambar hasil decoding apa adanya, atau kodekan ulang ke PNG, JPG, atau WEBP dengan pengaturan kualitas." },
    { icon: "lock", title: "100% privat", description: "Decoding terjadi sepenuhnya di browser Anda — tidak ada yang diunggah ke server." },
  ],

  faqs: [
    { q: "Masukan apa saja yang diterima?", a: "Data URI lengkap (data:image/png;base64,…) maupun string Base64 mentah. Untuk masukan mentah, jenis gambarnya dikenali otomatis." },
    { q: "Bisakah formatnya diubah?", a: "Bisa. Unduh yang asli, atau pilih PNG, JPG, atau WEBP untuk mengodekan ulang sebelum mengunduh." },
    { q: "Bagaimana kalau string saya tidak valid?", a: "Anda akan melihat pesan yang jelas — periksa lagi bahwa seluruh string Base64 sudah tersalin." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar, dan decoding terjadi secara lokal di browser Anda — tidak ada yang diunggah." },
    { q: "Apakah awalan data URI harus disertakan?", a: "Tidak. Tempel string Base64 polos atau data URI lengkap yang diawali 'data:image/…;base64,' — awalannya dikenali dan ditangani. Menyertakannya memang membantu, karena formatnya dinyatakan secara eksplisit, bukan ditebak." },
    { q: "Kenapa string saya gagal didekode?", a: "Biasanya karena spasi atau jeda baris yang ikut saat disalin dari log, email, atau file JSON. Penyebab lain yang umum adalah string terpotong — string panjang sering dipotong editor dan terminal. Panjang string Base64 yang valid selalu kelipatan empat, dengan padding '=' di akhir bila perlu." },
    { q: "Dari mana biasanya string ini berasal?", a: "Respons API yang mengembalikan gambar secara inline, payload JSON, kolom database yang menyimpan gambar sebagai teks, sumber HTML dan CSS yang sedang di-debug, sumber email, file konfigurasi, dan output log. Di mana pun data biner harus melewati saluran khusus teks." },
    { q: "Format apa yang akan saya dapatkan?", a: "Sama dengan aslinya — data URI membawa tipe MIME, jadi PNG kembali menjadi PNG dan JPG menjadi JPG. Kalau string-nya tanpa awalan, formatnya ditentukan dari magic number byte hasil decoding." },
    { q: "Apakah ada batas ukuran?", a: "Hanya memori browser Anda. String yang sangat panjang bisa lambat saat ditempel dan didekode, karena semuanya harus dimuat di halaman. Gambar berukuran beberapa megabyte yang dikodekan sebagai teks memang merepotkan dari sananya, bukan karena batas di sini." },
    { q: "Apakah data saya dikirim ke mana pun?", a: "Tidak. Decoding terjadi di browser Anda — penting, karena string seperti ini sering berasal dari respons API, sistem internal, dan log, jenis bahan yang tidak semestinya ditempel ke layanan jarak jauh." },
  ],

  security:
    "Data Anda tetap privat. Decoding Base64 terjadi sepenuhnya di browser Anda — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "254" },

  ui: {
    // Base64ToImageTool.tsx
    "That doesn't look like a valid Base64 image string.":
      "Itu tidak terlihat seperti string Base64 gambar yang valid.",
    "Image downloaded.": "Gambar sudah diunduh.",
    "Couldn't decode that string.": "String itu tidak bisa didekode.",
    "Canvas not supported.": "Canvas tidak didukung.",
    "Downloaded as {format}.": "Diunduh sebagai {format}.",
    "Conversion failed.": "Konversi gagal.",
    "Decoded image": "Gambar hasil decoding",
    "Clear input": "Kosongkan masukan",
    "Output settings": "Pengaturan hasil",
    "Decoded": "Hasil decoding",
    "Paste a Base64 string to preview the image here.":
      "Tempel string Base64 untuk melihat pratinjau gambarnya di sini.",
    "decoded preview": "pratinjau hasil decoding",
    "Base64 Input": "Masukan Base64",
    "Download image": "Unduh gambar",
    "Download as {format}": "Unduh sebagai {format}",
    "Paste a data URI (data:image/png;base64,…) or raw Base64":
      "Tempel data URI (data:image/png;base64,…) atau Base64 mentah",
    "Valid image detected.": "Gambar valid terdeteksi.",
    "Convert & download": "Konversi & unduh",
  },
};

export default content;
