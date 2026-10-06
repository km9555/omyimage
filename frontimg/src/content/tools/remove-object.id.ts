import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/hapus-objek-foto. ID "hapus objek foto" family 74K/mo. */
const content: ToolPageContent = {
  toolId: "remove-object",
  locale: "id",
  name: "Hapus Objek Foto",
  tagline:
    "Warnai apa pun yang tidak Anda inginkan di foto — orang asing di belakang, tempat sampah, kabel listrik, noda — dan AI mengisi tempatnya agar serasi dengan sekitarnya. Gratis, dan berjalan sepenuhnya di browser Anda.",
  category: { id: "ai", label: "AI Gambar" },

  metaTitle: "Hapus Objek di Foto Online Gratis — Penghapus Ajaib AI | oMyImage",
  metaDescription:
    "Hapus objek, orang, tulisan, dan noda dari foto secara gratis: warnai bagian itu dan AI mengisi latarnya. Berjalan di browser Anda — tanpa upload, tanpa daftar.",

  intro:
    "Hapus Objek Foto menghapus benda dari foto seperti yang dilakukan seorang retoucher: Anda menandai apa yang harus hilang, lalu model AI melukis apa yang kira-kira ada di baliknya, menyesuaikan warna, cahaya, dan tekstur di sekitar lubang. oMyImage menjalankan model itu — MI-GAN dari Picsart AI Research — di dalam browser Anda, jadi foto Anda tidak pernah di-upload dan tidak ada batas harian. Warnai seorang turis, tarik kotak di sekeliling papan nama, hapus satu benda atau beberapa sekaligus, batalkan langkah apa pun, lalu unduh foto yang sudah bersih dalam ukuran aslinya.",

  sections: [
    {
      heading: "Cara menandai yang akan dihapus",
      id: "marking",
      body: [
        "Kuas melukis tanda merah muda di atas gambar; pastikan tanda itu menutupi seluruh benda, dengan sedikit kelebihan. Sertakan bayangan dan pantulan benda itu, kalau tidak keduanya akan tertinggal seperti hantu. Alat Kotak menandai persegi panjang dengan sekali tarik — cepat untuk papan nama, mobil, dan apa pun yang berbentuk kotak. Penghapus mengambil kembali tanda yang terlalu jauh.",
        "Tandanya tidak perlu rapi. Sebelum mengisi, alat ini menebalkan tanda beberapa piksel agar tepi lembut di sekeliling benda ikut tertutup. Yang penting, tidak ada bagian benda yang menonjol keluar dari tanda.",
      ],
    },
    {
      heading: "Yang bisa dihapus dengan baik",
      id: "good-at",
      body: [
        "Benda di depan latar yang cukup rata paling bagus hasilnya: orang dan mobil di depan gedung, sampah di rumput atau pasir, kabel dan tiang dengan latar langit, noda di dinding, jerawat di kulit, remah di taplak. Model ini dilatih dengan foto tempat, jadi langit, air, dedaunan, dinding, lantai, dan jalan adalah yang paling meyakinkan dibangunnya kembali.",
        "Lebih sulit bila bagian yang tertutup berisi sesuatu yang tidak bisa ditebak model — separuh wajah, sebaris tulisan, motif karpet yang berlanjut di belakang benda. Model akan mengisi celahnya dengan sesuatu yang halus dan masuk akal, bukan dengan apa yang sebenarnya ada di sana.",
      ],
    },
    {
      heading: "Benda besar: hapus bertahap",
      id: "passes",
      body: [
        "Model mengisi setiap area dengan lebar sampai 512 piksel lalu menyesuaikan hasilnya, jadi lubang yang sangat besar kembali sedikit lebih lembut daripada bagian foto lainnya. Untuk benda besar, hapus dalam dua atau tiga bagian, mulai dari tepinya: setiap tahap memberi tahap berikutnya sekeliling asli untuk ditiru. Beberapa benda kecil yang ditandai sekaligus diisi masing-masing secara terpisah, jadi detailnya tetap penuh.",
        "Bila hasil isian terlihat salah, tekan Batalkan, ubah tandanya — lebih besar, atau tanpa bagian latar yang membingungkan model — lalu coba lagi. Setiap percobaan sekitar satu detik.",
      ],
    },
    {
      heading: "Batalkan, ulangi, dan bandingkan",
      id: "history",
      body: [
        "Setiap penghapusan bisa dibatalkan dan diulang, lewat tombol atau dengan Ctrl+Z dan Ctrl+Shift+Z. Mulai lagi mengembalikan foto aslinya. Tahan tombol \"Tahan untuk melihat aslinya\" untuk berganti antara sebelum dan sesudah — cara termudah menemukan isian yang kurang pas.",
      ],
    },
    {
      heading: "AI yang berjalan di perangkat Anda",
      id: "on-device",
      body: [
        "Kebanyakan penghapus objek meng-upload foto Anda ke server. Di sini justru modelnya yang datang ke Anda: saat pertama kali alat dibuka, alat ini mengunduh sekitar 27 MB data model dari situs kami sendiri — bilah kemajuan menunjukkan prosesnya — dan browser menyimpannya, jadi kunjungan berikutnya langsung mulai. Setelah itu, menghapus benda terjadi di komputer atau HP Anda, sekitar satu detik di laptop dan beberapa detik di HP, bahkan tanpa koneksi.",
        "Karena tidak ada yang dikirim ke mana pun, alat ini aman untuk foto pribadi, dokumen identitas, dan pekerjaan klien.",
      ],
    },
    {
      heading: "Kualitas dan format",
      id: "quality",
      body: [
        "Foto diedit dalam ukuran penuh — sampai 16,7 megapiksel; yang lebih besar, seperti foto HP 48 MP, diperkecil dulu ke ukuran itu, dan halaman akan memberi tahu. Hanya area yang ditandai yang berubah: setiap piksel lain disimpan persis seperti semula. Pilih format asli atau JPG, PNG, atau WEBP. PNG mempertahankan transparansi; JPG mengisi area transparan dengan putih.",
      ],
    },
    {
      heading: "Ide",
      id: "ideas",
      body: [
        "Hilangkan kerumunan turis dari foto liburan. Hapus kabel menjuntai, mobil parkir, atau tempat sampah dari foto iklan rumah. Hapus stiker harga dari foto produk, tanggal dari foto lama hasil scan, atau titik debu dari hasil scan. Hapus mantan dari foto bersama, orang yang lewat dari foto pernikahan, atau benda dari latar sebelum dijadikan wallpaper.",
        "Untuk memotong seluruh objek dan membuang latarnya, pakai Hapus Background. Untuk tulisan dan logo di atas gambar, Hapus Watermark langsung terbuka dengan alat Kotak.",
      ],
    },
    {
      heading: "Foto produk untuk marketplace",
      id: "listings",
      body: [
        "Di marketplace dan iklan baris, latar yang bersih lebih menjual: hapus kabel, kemasan, dan barang yang tertinggal di sekitar produk sebelum diunggah. Agar kualitas tetap terjaga, tandai setiap benda secara terpisah dan periksa hasilnya dengan tombol perbandingan.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Foto Anda diedit sepenuhnya di browser oleh model yang berjalan di perangkat Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara menghapus objek di foto",
  steps: [
    { title: "Tambahkan foto", description: "Pilih gambar JPG, PNG, atau WEBP." },
    { title: "Tandai objeknya", description: "Warnai dengan kuas, atau tarik kotak di sekelilingnya — termasuk bayangannya." },
    { title: "Hapus dan unduh", description: "Klik Hapus objek, periksa hasilnya, lalu Unduh gambar." },
  ],

  features: [
    { icon: "ink_eraser", title: "Kuas, kotak, dan penghapus", description: "Tandai benda dengan tepat, lalu batalkan atau ulangi setiap penghapusan." },
    { icon: "smart_toy", title: "Isian AI dalam sedetik", description: "MI-GAN membangun ulang latar agar serasi dengan sekitarnya." },
    { icon: "lock", title: "Tidak pernah di-upload", description: "AI berjalan di browser, di perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menghapus objek dari foto?", a: "Tambahkan foto, warnai objeknya dengan kuas, lalu klik Hapus objek. Setelah itu unduh hasilnya." },
    { q: "Apakah benar-benar gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas harian, karena AI berjalan di perangkat Anda sendiri." },
    { q: "Apakah foto saya di-upload?", a: "Tidak. Model AI diunduh ke browser dan foto tidak pernah keluar dari perangkat Anda." },
    { q: "Kenapa penghapusan pertama lebih lama?", a: "Pertama kali, browser mengunduh model AI 27 MB. Browser menyimpannya, jadi kunjungan berikutnya langsung mulai." },
    { q: "Bisakah menghapus orang dari foto?", a: "Bisa. Warnai orangnya beserta bayangannya; paling bagus bila ia berdiri di depan latar yang cukup polos." },
    { q: "Bisakah menghapus beberapa benda sekaligus?", a: "Bisa. Tandai semuanya lalu klik Hapus objek sekali — masing-masing diisi terpisah." },
    { q: "Hasilnya buram — apa yang harus dilakukan?", a: "Batalkan dan hapus benda besar dalam bagian-bagian kecil, mulai dari tepinya. Area kecil detailnya tetap penuh." },
    { q: "Bisakah membatalkan penghapusan?", a: "Bisa — Batalkan, Ulangi, dan Mulai lagi, atau Ctrl+Z dan Ctrl+Shift+Z." },
    { q: "Apakah kualitas foto turun?", a: "Tidak. Hanya area yang ditandai yang berubah, dan foto tetap berukuran sama sampai 16,7 megapiksel." },
    { q: "Apakah bisa tanpa internet?", a: "Setelah model dimuat, ya: menghapus objek tidak butuh koneksi." },
    { q: "Apakah bisa di HP?", a: "Bisa. Warnai dengan jari; setiap penghapusan butuh beberapa detik di HP." },
    { q: "Format apa saja yang didukung?", a: "JPG, PNG, dan WEBP sebagai masukan, dan format yang sama atau salah satu dari ketiganya sebagai hasil." },
    { q: "Bisakah menghapus seluruh latar?", a: "Untuk itu pakai Hapus Background — alat itu memotong objek dan membuat latarnya transparan." },
  ],

  security:
    "Foto Anda diedit sepenuhnya di browser oleh model yang berjalan di perangkat Anda. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // InpaintTool.tsx — shared with remove-watermark, whose module reuses this block.
    "or drop a JPG, PNG or WEBP image here": "atau lepaskan satu gambar JPG, PNG, atau WEBP di sini",
    "Marking tool": "Alat penanda",
    "Brush": "Kuas",
    "Box": "Kotak",
    "Eraser": "Penghapus",
    "Drag a box over the area to remove.": "Tarik kotak di atas area yang akan dihapus.",
    "Paint over a mark to take it back.": "Sapukan di atas tanda untuk menghapusnya.",
    "Paint over every letter of the watermark, including its outline or shadow.": "Warnai setiap huruf watermark, termasuk garis tepi atau bayangannya.",
    "Paint over the whole object, including its shadow and reflection.": "Warnai seluruh objek, termasuk bayangan dan pantulannya.",
    "Brush size": "Ukuran kuas",
    "Clear marks": "Hapus tanda",
    "Undo": "Batalkan",
    "Redo": "Ulangi",
    "Start over": "Mulai lagi",
    "AI model ready — it runs on your device.": "Model AI siap — berjalan di perangkat Anda.",
    "The AI model could not be loaded.": "Model AI tidak bisa dimuat.",
    "Try again": "Coba lagi",
    "Loading the AI model…": "Memuat model AI…",
    "Only on the first visit — after that your browser keeps it.": "Hanya pada kunjungan pertama — setelah itu browser menyimpannya.",
    "Output format": "Format hasil",
    "Same as original": "Sama dengan asli",
    "Your image never leaves your device: the AI runs in your browser.": "Gambar Anda tidak pernah keluar dari perangkat: AI berjalan di browser.",
    "Remove watermark": "Hapus watermark",
    "Remove object": "Hapus objek",
    "Removing…": "Menghapus…",
    "Download image": "Unduh gambar",
    "Mark the watermark first — draw a box around it or paint over it.": "Tandai watermark-nya dulu — tarik kotak di sekelilingnya atau warnai.",
    "Paint over what you want to remove first.": "Warnai dulu bagian yang ingin dihapus.",
    "Picture — mark the watermark here": "Gambar — tandai watermark di sini",
    "Picture — mark what to remove here": "Gambar — tandai yang akan dihapus di sini",
    "Mark the watermark, then click Remove watermark.": "Tandai watermark, lalu klik Hapus watermark.",
    "Mark what you want gone, then click Remove object.": "Tandai yang ingin dihapus, lalu klik Hapus objek.",
    "Hold to see the original": "Tahan untuk melihat aslinya",
    "This photo is very large, so it is edited and saved at {w} × {h} px.": "Foto ini sangat besar, jadi diedit dan disimpan pada {w} × {h} px.",
  },
};

export default content;
