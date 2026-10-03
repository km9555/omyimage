import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/gif-ke-gambar.
 *
 * «gambar», not «foto»: a GIF's frames are rarely photographs, and this is one
 * of the places conversion.md §11.2 keeps the non-photo noun. «frame» is the
 * word Indonesian video and GIF apps use, so it stays.
 *
 * The other half of the gif-maker round trip: pull frames apart here, fix
 * them, reassemble at /id/gif-maker. The two pages are written to be read in
 * that order.
 *
 * The bare "frame"/"frames" keys are rendered after a number in its own span;
 * Indonesian does not inflect for number, so both are «frame».
 */
const content: ToolPageContent = {
  toolId: "gif-to-images",
  locale: "id",
  name: "GIF ke Gambar",
  tagline:
    "Pecah setiap frame dari GIF animasi secara online — unduh semuanya dalam ZIP sebagai PNG, JPG, atau WEBP, atau ambil satu frame saja. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "convert", label: "Konversi" },

  metaTitle: "GIF ke Gambar Online Gratis — Pecah GIF Jadi Frame PNG/JPG | oMyImage",
  metaDescription:
    "Ubah GIF ke gambar online gratis: pecah GIF animasi menjadi frame utuh, lalu unduh semuanya dalam ZIP sebagai PNG, JPG, atau WEBP, atau satu frame saja. Di browser, tanpa unggahan.",

  intro:
    "Pecah GIF animasi kembali menjadi gambar-gambar terpisah. Alat GIF ke Gambar ini mengeluarkan setiap frame dari sebuah GIF langsung di browser Anda — disusun utuh sehingga setiap frame adalah gambar lengkap — dan memungkinkan Anda mengunduh semuanya dalam ZIP atau satu per satu, sebagai PNG, JPG, atau WEBP. Tidak ada yang diunggah, jadi GIF Anda tetap privat.",

  sections: [
    {
      heading: "Apa yang Anda dapatkan dari memecah frame",
      id: "why",
      body: [
        "GIF animasi adalah tumpukan gambar diam beserta informasi waktunya. Memisahkannya memberi Anda setiap gambar diam itu sebagai file gambar biasa — yang Anda butuhkan setiap kali animasinya sendiri bukan hal yang Anda inginkan.",
        "Kasus yang paling umum adalah mencari satu frame yang bagus. GIF reaksi berisi satu momen yang ingin Anda jadikan gambar diam, rekaman layar berisi satu tampilan aplikasi yang Anda butuhkan untuk dokumentasi, dan rangkaian stop-motion berisi satu frame yang hasilnya paling baik.",
        "Yang kedua adalah perbaikan. Ada yang salah dengan sebuah GIF — satu frame nyasar, watermark, warna yang keliru — dan Anda tidak bisa memperbaikinya selama masih berbentuk animasi. Pecah, perbaiki frame yang bermasalah, lalu susun ulang.",
      ],
    },
    {
      heading: "Bagaimana frame GIF sebenarnya disimpan",
      id: "decoding",
      body: [
        "GIF lebih hemat daripada kelihatannya. Alih-alih menyimpan setiap frame secara utuh, GIF hanya mencatat bagian yang berubah sejak frame sebelumnya, beserta instruksi tentang apa yang harus dilakukan pada area di bawahnya — dibiarkan, dikembalikan ke latar, atau dikembalikan ke kondisi sebelumnya.",
        "Itulah sebabnya pemecahan frame yang asal-asalan menghasilkan potongan: alat yang sekadar membaca setiap blok yang tersimpan mendapat gambar sebagian dengan celah transparan, bukan gambar yang Anda lihat saat GIF diputar. Decoding yang benar berarti menyusun setiap frame di atas kondisi gabungan frame-frame sebelumnya.",
        "Itulah yang terjadi di sini, jadi gambar yang Anda terima adalah frame lengkap persis seperti saat animasinya diputar, berurutan dan bernomor dengan benar.",
      ],
    },
    {
      heading: "Kenapa PNG adalah format hasil yang tepat",
      id: "format",
      body: [
        "Frame GIF sudah dipangkas menjadi palet paling banyak 256 warna. Pemangkasan itu sudah melekat dan tidak bisa dibatalkan, jadi tujuan saat memecah frame hanyalah agar tidak ada yang makin buruk.",
        "PNG bersifat lossless, artinya frame tiba persis seperti yang dihasilkan decoder. PNG juga menangani transparansi GIF dengan benar, jadi frame yang punya area tembus pandang tetap mempertahankannya, bukan mendapat latar putih.",
        "JPG adalah pilihan yang salah dari dua sisi — menambahkan artefak kompresinya sendiri di atas batasan palet, dan sama sekali tidak bisa menyimpan transparansi. Kalau Anda butuh file yang lebih kecil sesudahnya, konversikan PNG hasil pemecahan dengan sengaja, bukan kehilangan kualitas secara bawaan.",
      ],
    },
    {
      heading: "Pecah, edit, susun ulang",
      id: "workflow",
      body: [
        "Memecah lalu menyusun ulang adalah cara praktis mengubah animasi yang bukan buatan Anda. Keluarkan frame-nya di sini, lakukan perubahan yang Anda perlukan — crop, atur warna, buang frame yang tidak diinginkan, blur sesuatu yang sensitif — lalu masukkan hasilnya ke GIF Maker.",
        "Satu hal yang perlu dijaga saat menyusun kembali: waktunya. Catat jeda frame aslinya sebelum mulai, karena menyusun ulang dengan kecepatan berbeda mengubah karakter animasinya, kadang drastis. Dan pertahankan urutan nomornya, karena urutan saat frame ditambahkan adalah urutan saat diputar.",
        "Semuanya berjalan di browser Anda di kedua ujungnya, jadi GIF yang berisi sesuatu yang tidak ingin Anda unggah bisa dibongkar dan disusun lagi tanpa meninggalkan perangkat Anda.",
      ],
    },
  ],

  howToTitle: "Cara memecah frame dari GIF",
  steps: [
    { title: "Unggah GIF", description: "Pilih GIF animasi, atau seret ke area kerja." },
    { title: "Lihat frame-nya", description: "Setiap frame dikeluarkan dan disusun utuh — lihat pratinjaunya dalam grid." },
    { title: "Unduh", description: "Simpan semua frame dalam ZIP sebagai PNG, JPG, atau WEBP, atau klik satu frame untuk mengunduhnya." },
  ],

  features: [
    { icon: "burst_mode", title: "Setiap frame", description: "Memecah GIF animasi menjadi semua frame-nya, disusun utuh sehingga masing-masing adalah gambar lengkap." },
    { icon: "folder_zip", title: "Unduh sekaligus dalam ZIP", description: "Ekspor semua frame sekaligus dalam ZIP bernomor sebagai PNG, JPG, atau WEBP." },
    { icon: "lock", title: "100% privat", description: "Frame dikeluarkan sepenuhnya di browser Anda — GIF Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Apakah frame-nya berupa gambar lengkap?", a: "Ya. Setiap frame disusun dengan penanganan disposal yang benar, jadi frame sebagian digabungkan menjadi gambar utuh." },
    { q: "Format apa saja yang bisa diekspor?", a: "PNG (dengan transparansi), JPG (dengan warna latar), atau WEBP." },
    { q: "Bisakah mengunduh satu frame saja?", a: "Bisa. Klik frame mana pun di grid untuk mengunduhnya sendiri, atau pakai tombol untuk mengunduh semua frame dalam ZIP." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar, dan GIF diproses secara lokal di browser Anda — tidak ada yang diunggah." },
    { q: "Untuk apa frame yang terpisah?", a: "Untuk memilih satu gambar diam yang bagus dari sebuah animasi, mengedit frame tertentu lalu menyusun ulang putarannya, mempelajari gerakan frame demi frame, membuang frame yang tidak diinginkan, atau sekadar karena Anda butuh gambar diam dan hanya punya GIF-nya." },
    { q: "Apakah semua frame saya dapatkan?", a: "Ya — GIF didekode dengan benar, bukan diambil sampelnya, jadi Anda mendapat setiap frame yang tersimpan secara berurutan. Putaran tiga detik dengan 10 frame per detik memberi tiga puluh gambar, bernomor agar urutannya terjaga." },
    { q: "Format hasil mana yang sebaiknya dipilih?", a: "Hampir selalu PNG. Frame GIF sudah terbatas pada 256 warna, dan PNG menyimpannya tanpa kehilangan apa pun sehingga tidak ada yang makin menurun — PNG juga mempertahankan transparansi GIF. JPG menambah artefak kompresi di atas batasan palet dan sama sekali tidak bisa menyimpan transparansi." },
    { q: "Kenapa sebagian frame tampak terpotong atau transparan di alat lain?", a: "Karena GIF menyimpan frame sebagai selisih dari frame sebelumnya — hanya piksel yang berubah. Decoder di sini menyusunnya kembali menjadi gambar lengkap, dan itulah yang Anda terima. Kalau Anda pernah melihat frame GIF mentah di alat lain yang hanya menampilkan potongan, itulah sebabnya." },
    { q: "Bisakah GIF disusun ulang setelah frame-nya diedit?", a: "Bisa. Pecah di sini, edit frame yang Anda inginkan, lalu masukkan kembali ke GIF Maker untuk menyusun putarannya. Bolak-balik itulah cara biasa memperbaiki atau merapikan animasi yang sudah ada." },
    { q: "Apakah GIF yang sangat panjang bisa?", a: "Umumnya bisa, walaupun GIF dengan ratusan frame menghasilkan ratusan file dan butuh waktu lebih lama untuk didekode dan dikemas dalam ZIP. Semuanya terjadi di browser Anda, jadi batas praktisnya adalah memori perangkat Anda, bukan batas unggahan." },
  ],

  security:
    "GIF Anda tetap privat. Pemecahan frame terjadi sepenuhnya di browser Anda dengan pustaka open-source gifuct-js — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "228" },

  ui: {
    // GifToImagesTool.tsx
    "Please select a GIF file.": "Pilih file GIF.",
    "No frames found in this GIF.": "Tidak ada frame yang ditemukan di GIF ini.",
    "Extracted 1 frame.": "1 frame berhasil dikeluarkan.",
    "Extracted {n} frames.": "{n} frame berhasil dikeluarkan.",
    "Couldn't read that GIF.": "GIF itu tidak bisa dibaca.",
    "Downloaded 1 frame as a ZIP.": "1 frame diunduh dalam ZIP.",
    "Downloaded {n} frames as a ZIP.": "{n} frame diunduh dalam ZIP.",
    "Couldn't build the ZIP.": "ZIP tidak bisa dibuat.",
    "Select a GIF": "Pilih GIF",
    "or drop an animated .gif here": "atau letakkan .gif animasi di sini",
    "1 frame": "1 frame", // i18n-same — «frame» is the Indonesian word in video and GIF apps
    "{n} frames": "{n} frame",
    // The bare noun, rendered after a number in its own <span>.
    "frame": "frame", // i18n-same
    "frames": "frame",
    "Clear GIF": "Hapus GIF",
    "Frame settings": "Pengaturan frame",
    "Frame Settings": "Pengaturan Frame",
    "Download frame {n}": "Unduh frame {n}",
    "Frame {n}": "Frame {n}", // i18n-same
    "showing first {n}, all included in the ZIP": "menampilkan {n} pertama, semuanya ikut di ZIP",
    "Change GIF": "Ganti GIF",
    "Click any frame to download it on its own.": "Klik frame mana pun untuk mengunduhnya sendiri.",
    "Download 1 frame (ZIP)": "Unduh 1 frame (ZIP)",
    "Download all {n} frames (ZIP)": "Unduh semua {n} frame (ZIP)",
    "Output": "Hasil",
    "Format": "Format", // i18n-same — the Indonesian word is the same
    "JPG background": "Latar untuk JPG",
  },
};

export default content;
