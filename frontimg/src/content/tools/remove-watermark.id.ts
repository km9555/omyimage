import type { ToolPageContent } from "@/content/tools/types";
import object from "@/content/tools/remove-object.id";

/** Indonesian copy for /id/hapus-watermark. ID "hapus watermark" 40.5K/mo, KD 0. */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "id",
  name: "Hapus Watermark",
  tagline:
    "Hapus watermark, logo, tulisan, dan tanggal dari foto: tandai, lalu AI mengisi area itu agar serasi dengan gambar di sekitarnya. Gratis, tanpa upload — berjalan di browser Anda.",
  category: { id: "ai", label: "AI Gambar" },

  metaTitle: "Hapus Watermark Foto Online Gratis — Dengan AI, Tanpa Upload | oMyImage",
  metaDescription:
    "Hapus watermark, logo, tulisan, dan tanggal dari foto secara gratis: tandai lalu AI mengisi areanya. Berjalan di browser — tanpa upload dan tanpa daftar.",

  intro:
    "Watermark adalah tulisan atau logo yang ditaruh di atas gambar, dan menghapusnya berarti membangun ulang piksel yang tertutup. Hapus Watermark melakukannya dengan model AI, MI-GAN dari Picsart AI Research, yang berjalan di dalam browser Anda: tarik kotak di sekeliling watermark atau warnai, klik Hapus watermark, dan area itu terisi dari sekitarnya dalam sekitar satu detik. Alat ini untuk gambar milik Anda sendiri — logo di foto produk lama, tanggal yang tercetak di foto hasil scan, keterangan di screenshot buatan Anda — dan tidak ada yang Anda muat yang di-upload.",

  sections: [
    {
      heading: "Menandai watermark",
      id: "marking",
      body: [
        "Alat ini langsung terbuka dengan Kotak terpilih, karena kebanyakan watermark berada dalam persegi panjang: tarik dari satu sudut watermark ke sudut lainnya. Untuk tulisan yang melengkung atau tersebar, ganti ke Kuas dan warnai setiap hurufnya. Tutupi juga garis tepi, bayangan, dan pendarnya, kalau tidak bekas samar hurufnya akan tersisa.",
        "Anda bisa menandai beberapa watermark sebelum menghapusnya — logo di satu sudut dan alamat situs di sudut lain — dan masing-masing diisi terpisah.",
      ],
    },
    {
      heading: "Yang hilang bersih, dan yang tidak",
      id: "expectations",
      body: [
        "AI tidak membuka apa yang ada di bawah watermark; AI melukis apa yang diisyaratkan gambar di sekitarnya. Itu bekerja sangat baik untuk tanda kecil di atas langit, air, dinding, rumput, latar studio polos, dan latar buram — logo di sudut, tanggal, tanda tangan, dan keterangan pendek biasanya hilang tanpa bekas.",
        "Watermark besar yang semi-transparan dan melintang diagonal di seluruh foto lebih sulit: model harus mengarang area detail yang luas, jadi hasilnya lebih lembut dan bisa mengaburkan wajah, tulisan, dan motif halus. Hapus dalam bagian-bagian kecil, dan periksa hasilnya dengan \"Tahan untuk melihat aslinya\".",
      ],
    },
    {
      heading: "Pakai untuk gambar yang boleh Anda edit",
      id: "responsible",
      body: [
        "Watermark di foto stok dan pratinjau fotografer melindungi karya dan penghasilan seseorang. Menghapusnya untuk memakai gambar tanpa membayar melanggar hak cipta di kebanyakan negara — beli lisensinya. Alat ini untuk foto Anda sendiri dan gambar yang Anda punya izin untuk diubah: logo lama perusahaan Anda, tanggal yang ditambahkan kamera, atau watermark yang Anda pasang di portofolio sendiri sebelum file aslinya hilang.",
      ],
    },
    {
      heading: "Tanggal di foto lama",
      id: "date-stamps",
      body: [
        "Kamera film dan kamera digital generasi awal mencetak tanggal dengan angka oranye di sudut. Scan fotonya, tarik kotak di sekeliling tanggal, lalu hapus. Cetakan lama sering juga punya debu dan goresan; tandai dengan kuas kecil dan hapus sekaligus.",
      ],
    },
    {
      heading: "Tulisan dan logo di screenshot dan foto produk",
      id: "text",
      body: [
        "Foto produk dari iklan lama Anda sering membawa nama toko lama atau stiker promo; screenshot membawa nama pengguna, notifikasi, dan jam. Tandai dengan Kotak lalu hapus. Di area berwarna polos, seperti latar putih produk atau panel polos sebuah aplikasi, isiannya nyaris tidak terlihat.",
      ],
    },
    {
      heading: "AI yang berjalan di browser Anda",
      id: "on-device",
      body: [
        "Penghapus watermark online biasanya meng-upload gambar Anda dan membatasi berapa kali boleh dipakai gratis. Alat ini justru mengunduh model AI ke browser Anda — sekitar 27 MB dari situs kami sendiri, sekali saja; browser menyimpannya — dan melakukan setiap penghapusan di perangkat Anda. Karena itu tidak ada batas dan tidak ada upload, dan alat tetap berjalan tanpa koneksi setelah modelnya dimuat.",
      ],
    },
    {
      heading: "Kualitas, batalkan, dan format",
      id: "quality",
      body: [
        "Hanya area yang ditandai yang berubah; setiap piksel lain disimpan persis seperti semula, dalam ukuran penuh gambar sampai 16,7 megapiksel. Setiap penghapusan bisa dibatalkan dan diulang, lewat tombol atau Ctrl+Z dan Ctrl+Shift+Z, dan Mulai lagi kembali ke aslinya. Unduh dalam format asli, atau sebagai JPG, PNG, atau WEBP.",
        "Untuk memasang watermark Anda sendiri di foto, pakai Watermark Foto.",
      ],
    },
    {
      heading: "Stempel dan coretan di dokumen",
      id: "documents",
      body: [
        "Di foto dokumen milik Anda sendiri, stempel, coretan pulpen, dan nomor halaman kadang mengganggu. Tandai masing-masing dengan Kotak lalu hapus; di atas kertas polos, isiannya menyatu dengan latar.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Gambar Anda diedit sepenuhnya di browser oleh model yang berjalan di perangkat Anda. Tidak ada yang di-upload, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara menghapus watermark dari foto",
  steps: [
    { title: "Tambahkan foto", description: "Pilih gambar JPG, PNG, atau WEBP." },
    { title: "Tandai watermark", description: "Tarik kotak di sekelilingnya, atau warnai setiap huruf dengan kuas." },
    { title: "Hapus dan unduh", description: "Klik Hapus watermark, bandingkan dengan aslinya, lalu Unduh gambar." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Kotak atau kuas", description: "Tandai logo dengan sekali tarik, atau warnai tulisan yang tersebar." },
    { icon: "smart_toy", title: "Isian AI dalam sedetik", description: "Area dibangun ulang dari gambar di sekitarnya." },
    { icon: "lock", title: "Tanpa upload, tanpa batas", description: "AI berjalan di perangkat Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menghapus watermark dari foto?", a: "Tambahkan foto, tarik kotak di sekeliling watermark, lalu klik Hapus watermark. Setelah itu unduh gambar yang bersih." },
    { q: "Apakah penghapus watermark ini gratis?", a: "Ya. Tanpa akun, tanpa watermark dari kami, dan tanpa batas harian — AI berjalan di perangkat Anda." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Model diunduh ke browser dan gambar Anda tidak pernah keluar dari perangkat." },
    { q: "Bisakah menghapus logo?", a: "Bisa. Kotakkan logonya, termasuk bayangan atau garis tepinya, lalu hapus." },
    { q: "Bisakah menghapus tanggal di foto?", a: "Bisa. Tarik kotak di sekeliling tanggal lalu hapus — terutama bagus untuk foto cetak hasil scan." },
    { q: "Bisakah menghapus tulisan di gambar?", a: "Bisa. Warnai tulisannya dengan kuas, atau pakai kotak bila tulisannya satu baris." },
    { q: "Kenapa watermark besar masih terlihat?", a: "Watermark besar dan transparan di area yang detail sulit dibangun ulang. Hapus dalam bagian kecil dan tandai juga garis tepinya." },
    { q: "Apakah piksel aslinya kembali?", a: "Tidak. AI melukis apa yang diisyaratkan sekitarnya, yang biasanya tidak kentara di latar polos." },
    { q: "Apakah menghapus watermark itu legal?", a: "Di gambar Anda sendiri, atau yang boleh Anda edit, ya. Menghapusnya untuk memakai foto orang lain tanpa lisensi biasanya melanggar hak cipta." },
    { q: "Bisakah membatalkan penghapusan?", a: "Bisa — Batalkan, Ulangi, dan Mulai lagi, atau Ctrl+Z dan Ctrl+Shift+Z." },
    { q: "Apakah kualitas gambar turun?", a: "Tidak. Hanya area yang ditandai yang berubah, dan gambar tetap berukuran sama sampai 16,7 megapiksel." },
    { q: "Apakah bisa di HP?", a: "Bisa. Tarik kotak atau warnai dengan jari; setiap penghapusan butuh beberapa detik." },
    { q: "Bisakah menghapus watermark dari video?", a: "Tidak — alat ini untuk foto: JPG, PNG, dan WEBP." },
  ],

  security:
    "Gambar Anda diedit sepenuhnya di browser oleh model yang berjalan di perangkat Anda. Tidak ada yang di-upload, disimpan, atau dilacak.",

  // InpaintTool.tsx is shared with remove-object; each route only has its own
  // tool's ui in scope, so this page reuses the remove-object translations.
  ui: object.ui,
};

export default content;
