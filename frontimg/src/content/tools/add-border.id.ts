import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/bingkai-foto.
 *
 * Measured (Indonesia, per month): bingkai foto 33,100 vs border foto 320 —
 * the native phrase wins by a hundred to one, so the slug, H1 and title say
 * «bingkai»; «border» and «frame» live in the title tail and aliases.
 *
 * NOT targeted: «twibbon». In Indonesia a twibbon is a campaign overlay laid
 * ON TOP of the photo — a different job this tool does not do — so the copy
 * describes a frame AROUND the photo and never borrows that word.
 *
 * The tool is richer than the English page lets on: nine one-click presets
 * (lib/image/frame FRAME_PRESETS), seven line styles, an inner mat, a caption
 * band and a transparent-outside option. The `presets` section says so,
 * because «bingkai polaroid» is how people ask for the most popular of them.
 * Preset names that Indonesian already uses as they are — Vintage, Polaroid,
 * Film — stay as they are.
 */
const content: ToolPageContent = {
  toolId: "add-border",
  locale: "id",
  name: "Bingkai Foto",
  tagline:
    "Tambahkan bingkai atau border berwarna pada foto secara online — dengan ketebalan yang bisa diatur, sudut membulat, preset seperti Polaroid dan Film, pratinjau langsung, dan banyak foto sekaligus. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Bingkai Foto Online Gratis — Tambah Border & Frame pada Foto | oMyImage",
  metaDescription:
    "Tambahkan bingkai foto online gratis: warna dan ketebalan bebas, sudut membulat, gaya Polaroid, Film, atau Emas, dan foto persegi tanpa terpotong. Sekaligus banyak, di browser, tanpa daftar.",

  intro:
    "Beri foto Anda bingkai agar terlihat rapi dan selesai. Alat Bingkai Foto ini membungkus foto dengan bingkai berwarna langsung di browser — atur ketebalan, warna, gaya garis, dan sudut membulat sambil melihat pratinjaunya secara langsung, atau mulai dari preset seperti Polaroid, Film, dan Emas. Beri bingkai satu foto atau banyak sekaligus dan langsung unduh — tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Untuk apa sebenarnya bingkai",
      id: "why",
      body: [
        "Alasan paling praktis adalah pemisah. Foto dengan tepi yang terang, diletakkan di halaman putih, tidak punya batas yang terlihat — langit menyatu dengan latar, dan foto berhenti terlihat sebagai satu benda. Bingkai tipis mengembalikan tepinya, sehingga foto terbaca sebagai sesuatu yang disengaja, bukan kesalahan tata letak.",
        "Alasan kedua adalah menyesuaikan bentuk. Media sosial, marketplace, dan jasa cetak foto sering meminta rasio tertentu, dan jalan pintasnya biasanya crop. Menambah bingkai sampai rasionya tercapai memberi bentuk yang diminta tanpa kehilangan bagian foto — penting kalau yang terpotong justru inti fotonya.",
        "Alasan ketiga adalah keseragaman. Sekumpulan foto dari kamera dan ukuran yang berbeda-beda, diberi bingkai yang sama, mulai terlihat seperti satu koleksi, bukan campuran — berguna untuk katalog produk toko online maupun album foto wisuda atau pernikahan.",
      ],
    },
    {
      heading: "Memilih ketebalan",
      id: "thickness",
      body: [
        "Berpikirlah dalam persen, bukan piksel, karena bingkai 20 piksel terlihat mencolok di foto selebar 600 piksel tetapi nyaris hilang di foto 4000 piksel. Karena itu ketebalan di alat ini diukur dalam persen dari sisi terpendek foto. Dua sampai lima persen adalah rentang untuk bingkai halus yang menegaskan tepi tanpa menjadi pusat perhatian.",
        "Sepuluh persen ke atas mulai terlihat seperti passe-partout — tepi lebar yang dipakai pada cetakan foto di galeri, yang memberi foto ruang bernapas dan kesan resmi. Itu tampilan yang disengaja, bukan bawaan, dan lebih cocok untuk foto yang dipilih dengan cermat daripada foto sehari-hari.",
        "Satu hal yang perlu dicek: kalau foto akan ditampilkan jauh lebih kecil dari ukuran aslinya, bingkai yang tipis bisa hilang sama sekali saat diperkecil. Periksa pada ukuran saat foto itu benar-benar akan dilihat.",
      ],
    },
    {
      heading: "Foto persegi tanpa dipotong",
      id: "aspect",
      body: [
        "Bingkai yang tidak rata adalah cara membuat foto pas di bentuk yang bukan bentuk aslinya. Pilih rasio aspek, dan bingkai melebar hanya di sisi yang pendek: foto lanskap 3:2 menjadi persegi 1:1 dengan seluruh isinya tetap utuh. Fotonya sendiri tidak pernah dipotong.",
        "Beginilah kebanyakan orang mengunggah foto mendatar ke feed persegi tanpa kehilangan tepi komposisinya, dan cara foto tegak masuk ke slide presentasi layar lebar. Rasio 9:16 melakukan hal yang sama untuk story dan status WhatsApp. Alternatifnya — crop — selalu mengorbankan sesuatu, dan sering yang dikorbankan justru alasan foto itu diambil.",
        "Memilih warna bingkai dengan cermat membuat hasilnya terlihat dirancang, bukan ditambal. Putih dan hitam selalu aman; warna yang diambil dari foto itu sendiri sering terlihat paling bagus.",
      ],
    },
    {
      heading: "Memilih warna",
      id: "colour",
      body: [
        "Putih jadi pilihan bawaan bukan tanpa alasan — itulah warna yang dipakai passe-partout galeri dan tepi foto cetak, dan warna itu membuat foto terasa lebih bersih. Putih juga menghilang di halaman putih, yang bisa jadi memang Anda inginkan atau justru yang ingin Anda hindari, jadi periksa di mana foto itu akan tampil.",
        "Hitam cocok untuk foto dengan nada gelap, kontras tinggi, atau nuansa sinematik, dan memberi foto kesan berbobot. Warna brand menyatukan serangkaian foto yang dipublikasikan, dan biasanya dipilih untuk konten media sosial yang harus terlihat berasal dari tempat yang sama.",
        "Latar transparan, yang tersedia saat menyimpan sebagai PNG atau WEBP, adalah pilihan yang sering terlupa. Semua bagian di luar bingkai dibiarkan kosong, sehingga foto berbingkai bisa diletakkan di atas latar apa pun. Dengan gaya \"Tidak ada\" dan sebuah rasio aspek, hasilnya adalah ruang kosong tanpa bingkai yang terlihat — cara mengubah rasio untuk tata letak yang punya latarnya sendiri.",
      ],
    },
    {
      heading: "Preset, bingkai dalam, dan keterangan",
      id: "presets",
      body: [
        "Sembilan preset memberi titik awal dengan sekali klik: Klasik, Emas, Ganda, Vintage, Polaroid, Putih, Film, Minimalis, dan Tebal. Setiap preset hanyalah kumpulan pengaturan, jadi ketebalan, warna, dan gayanya tetap bisa diubah sesudahnya.",
        "Bingkai Polaroid menambah tepi bawah yang lebih lebar, persis seperti foto instan aslinya — dan tepi itu tempat yang pas untuk keterangan. Aktifkan Keterangan, dan setiap foto diberi nama filenya sendiri; ketik teks untuk memakai satu keterangan pada semua foto, misalnya tanggal atau nama acara.",
        "Bingkai dalam adalah bingkai kedua yang tipis di antara foto dan bingkai luar, seperti pada cetakan foto yang dipajang. Preset Klasik, Emas, Ganda, Vintage, dan Film sudah memakainya; aktifkan atau matikan sesuai selera.",
      ],
    },
  ],

  howToTitle: "Cara menambahkan bingkai pada foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto JPG, PNG, atau WEBP, atau seret ke area kerja." },
    { title: "Atur bingkainya", description: "Pilih preset atau atur ketebalan, warna, gaya, dan sudut membulat — pratinjaunya langsung terlihat." },
    { title: "Terapkan & unduh", description: "Klik Tambah bingkai — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "crop_din", title: "Ketebalan yang proporsional", description: "Ukuran bingkai adalah persen dari sisi terpendek foto, jadi terlihat seimbang pada foto berukuran apa pun." },
    { icon: "rounded_corner", title: "Warna, gaya, dan sudut membulat", description: "Pilih warna apa pun, garis polos, ganda, putus-putus, atau timbul, dan bulatkan sudutnya untuk tampilan yang modern." },
    { icon: "lock", title: "Sekaligus banyak, tetap privat", description: "Beri bingkai banyak foto sekaligus, sepenuhnya di browser Anda — foto tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Bagaimana ketebalan bingkai diukur?", a: "Dalam persen dari sisi terpendek foto, jadi pengaturan yang sama memberi bingkai yang proporsional pada foto berukuran apa pun." },
    { q: "Bisakah sudutnya dibulatkan?", a: "Bisa. Penggeser Sudut membulat membulatkan sudut foto di dalam bingkai agar terlihat lebih lembut. Dengan latar transparan, tepi luar bingkai juga ikut membulat." },
    { q: "Bisakah banyak foto diberi bingkai sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — satu foto langsung terunduh, dan beberapa foto diunduh bersama dalam satu ZIP." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Bagaimana cara membuat bingkai Polaroid?", a: "Pilih preset Polaroid: bingkai putih dengan tepi bawah yang lebih lebar. Aktifkan Keterangan kalau ingin menulis sesuatu di tepi bawah itu, seperti tanggal atau nama acara." },
    { q: "Untuk apa menambahkan bingkai pada foto?", a: "Ada tiga alasan umum: agar foto terang tidak menyatu dengan halaman terang dan terbaca sebagai satu benda, agar foto yang tidak persegi pas di slot persegi tanpa dipotong, dan agar sekumpulan foto terlihat seragam dan rapi." },
    { q: "Bagaimana cara membuat foto persegi untuk Instagram tanpa dipotong?", a: "Pilih rasio 1:1. Bingkai melebar hanya di sisi yang pendek sampai bentuknya persegi, dan tidak ada bagian foto yang terpotong. Ini cara standar mengunggah foto mendatar atau tegak ke feed persegi dengan seluruh komposisinya tetap utuh." },
    { q: "Warna bingkai apa yang paling bagus?", a: "Putih untuk tampilan galeri yang bersih, hitam untuk foto bernada gelap atau bernuansa sinematik, dan warna brand untuk apa pun yang dipublikasikan sebagai satu seri. Kalau foto akan tampil di halaman berwarna, bingkai dengan warna yang sama membuatnya seolah tanpa bingkai, tetapi tetap memberi foto ruang bernapas." },
    { q: "Seberapa tebal bingkai sebaiknya?", a: "Dua sampai lima persen lebar foto untuk bingkai yang halus — cukup untuk menegaskan tepi tanpa menjadi elemen desain. Sepuluh persen atau lebih terlihat seperti passe-partout yang disengaja, seperti pada cetakan foto dan dinding galeri. Bingkai tipis pada foto yang sangat besar bisa hilang setelah foto diperkecil." },
    { q: "Apakah menambahkan bingkai mengubah dimensi foto?", a: "Ya. Bingkai ditambahkan di sekeliling foto, bukan digambar di atasnya, jadi hasilnya lebih besar dari aslinya sebesar dua kali ketebalan bingkai di setiap arah. Kalau Anda perlu ukuran akhir yang tepat, perkecil fotonya dulu dengan Ubah Ukuran Foto, lalu biarkan bingkai menambah ukurannya kembali." },
    { q: "Bisakah bingkainya transparan?", a: "Bisa, kalau disimpan sebagai PNG atau WEBP. Aktifkan Latar transparan, dan semua bagian di luar bingkai dibiarkan kosong. Pilih gaya \"Tidak ada\" dengan sebuah rasio aspek, dan hasilnya adalah ruang kosong di sekeliling foto — berguna saat rasio harus berubah untuk tata letak tanpa menambah bingkai yang terlihat." },
  ],

  security:
    "Foto Anda tetap privat. Bingkai ditambahkan sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "241" },

  ui: {
    // lib/image/frame FRAME_PRESETS. "White" is common.ts's «Putih».
    "Classic|preset": "Klasik",
    "Golden": "Emas",
    "Double": "Ganda",
    "Vintage": "Vintage", // i18n-same — the word Indonesian uses for the look
    "Polaroid": "Polaroid", // i18n-same — named after the camera
    "Film": "Film", // i18n-same — the Indonesian word is the same
    "Minimal": "Minimalis",
    "Bold": "Tebal",
    // lib/image/frame BORDER_STYLES
    "Solid": "Polos",
    "Double line": "Garis ganda",
    "Dashed": "Putus-putus",
    "Dotted": "Titik-titik",
    "Groove": "Cekung",
    "Ridge": "Timbul",
    "None": "Tidak ada",
    // lib/image/frame ASPECT_PRESETS hints (the ratios pass through). Indonesian
    // has no grammatical gender, so "Classic" and "Classic|preset" agree.
    "Instagram": "Instagram", // i18n-same
    "Portrait": "Potret",
    "Widescreen": "Layar lebar",
    "Story": "Story", // i18n-same — the word Indonesian users of these apps use
    "Classic": "Klasik",
    "DSLR": "DSLR", // i18n-same
    "Print": "Cetak",
    // AddBorderTool.tsx
    "Added a border to 1 image.": "Bingkai ditambahkan ke 1 gambar.",
    "Added a border to {n} images.": "Bingkai ditambahkan ke {n} gambar.",
    "Adding the border failed.": "Gagal menambahkan bingkai.",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "done": "selesai",
    "Border settings": "Pengaturan bingkai",
    "Border Settings": "Pengaturan Bingkai",
    "Add border": "Tambah bingkai",
    "Adding…": "Menambahkan…",
    "Live preview of": "Pratinjau langsung",
    "— applied to all {n} images.": "— diterapkan ke semua {n} gambar.",
    "Add border to {n}": "Tambah bingkai ke {n} gambar",
    "Add border & download": "Tambah bingkai & unduh",
    "Presets": "Preset",
    "Aspect ratio": "Rasio aspek",
    "The frame grows to reach the shape — the photo is never cropped.":
      "Bingkai melebar sampai bentuknya tercapai — fotonya tidak pernah dipotong.",
    "Style": "Gaya",
    "Thickness": "Ketebalan",
    "As a percentage of the image's shortest side, so it scales with any size.":
      "Dalam persen dari sisi terpendek foto, jadi menyesuaikan dengan ukuran apa pun.",
    "Corner radius": "Sudut membulat",
    "Extra depth below": "Tambahan tepi bawah",
    "A deeper bottom edge, the way a Polaroid has one.":
      "Tepi bawah yang lebih lebar, seperti pada foto Polaroid.",
    "Border colour": "Warna bingkai",
    "Inner mat": "Bingkai dalam",
    "The thin second frame between the photo and the border, as in a mounted print.":
      "Bingkai kedua yang tipis di antara foto dan bingkai luar, seperti pada cetakan foto yang dipajang.",
    "Mat width": "Lebar bingkai dalam",
    "Mat colour": "Warna bingkai dalam",
    "Caption": "Keterangan",
    "Caption text": "Teks keterangan",
    "Text size": "Ukuran teks",
    "Each image is captioned with its own filename. Type something to use one caption for all of them.":
      "Setiap foto diberi keterangan berupa nama filenya sendiri. Ketik sesuatu untuk memakai satu keterangan pada semuanya.",
    "Drawn in the band below the photo, which deepens to make room.":
      "Ditulis di tepi bawah foto, yang melebar untuk memberi ruang.",
    "Transparent background": "Latar transparan",
    "Leaves everything outside the frame empty instead of filled, so the framed photo can sit on any background. The corners follow the Corner radius slider, and an aspect ratio leaves empty space around the frame rather than a thicker border.":
      "Membiarkan semua bagian di luar bingkai kosong, bukan diisi warna, sehingga foto berbingkai bisa diletakkan di atas latar apa pun. Sudutnya mengikuti penggeser Sudut membulat, dan rasio aspek menyisakan ruang kosong di sekeliling bingkai, bukan bingkai yang lebih tebal.",
    "{format} cannot store transparency — the empty areas will export as solid black. Choose PNG or WEBP.":
      "{format} tidak bisa menyimpan transparansi — area yang kosong akan tersimpan sebagai hitam pekat. Pilih PNG atau WEBP.",
    "Saved as {format}, which can store transparency. Raise Corner radius to round the frame's outer edge.":
      "Disimpan sebagai {format}, yang bisa menyimpan transparansi. Naikkan Sudut membulat untuk membulatkan tepi luar bingkai.",
    "Save as": "Simpan sebagai",
  },
};

export default content;
