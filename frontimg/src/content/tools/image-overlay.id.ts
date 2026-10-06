import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/overlay-foto. */
const content: ToolPageContent = {
  toolId: "image-overlay",
  locale: "id",
  name: "Overlay Foto",
  tagline:
    "Tumpuk satu gambar di atas gambar lain — geser ke tempatnya, ubah ukuran dan putar, buat lebih transparan dengan opasitas, dan padukan dengan mode blend seperti multiply dan screen. Gratis, di browser.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Overlay Foto Online Gratis — Tumpuk Gambar di Atas Gambar | oMyImage",
  metaDescription:
    "Overlay satu gambar di atas gambar lain online gratis: geser, ubah ukuran dan putar, atur opasitas, dan pilih mode blend seperti multiply atau screen. Di browser, tanpa upload.",

  intro:
    "Overlay foto berarti menumpuk satu gambar di atas gambar lain untuk membuat sesuatu yang tidak bisa dibuat salah satunya sendirian: logo di foto produk, tekstur di atas potret, light leak di atas pemandangan, atau foto kedua yang dipudarkan ke foto pertama untuk efek double exposure. Overlay Foto dari oMyImage memberi Anda dua lapisan dan kontrol yang penting — posisi, ukuran, rotasi, opasitas, dan delapan mode blend — dengan pratinjau langsung tempat gambar atas bisa Anda geser ke mana saja. Hasilnya disimpan dalam ukuran penuh gambar latar.",

  sections: [
    {
      heading: "Tempatkan, atau tutupi semuanya",
      id: "fit",
      body: [
        "Tempatkan bebas meletakkan gambar atas di mana pun Anda menggesernya, dengan ukuran dan sudut yang Anda atur. Ukuran diukur sebagai bagian dari lebar gambar latar, jadi 50 % berarti setengah lebar latar berapa pun resolusinya; sembilan tombol posisi menempelkannya ke tepi atau sudut, dan tombol panah di keyboard menggesernya sedikit demi sedikit.",
        "Tutupi semua merentangkan gambar atas ke seluruh latar, dengan proporsi tetap dan bagian yang menonjol dipotong. Inilah pengaturan untuk tekstur, efek cahaya, dan double exposure, yang harus mencapai setiap tepi.",
      ],
    },
    {
      heading: "Penjelasan mode blend",
      id: "blend",
      body: [
        "Normal hanya menggambar gambar atas, dipudarkan sesuai opasitas. Multiply hanya menggelapkan: putih menghilang dan hitam tetap hitam, cocok sekali untuk tanda tangan, stempel, dan gambar garis yang di-scan di kertas putih. Screen kebalikannya — hanya mencerahkan, jadi hitam menghilang; begitulah light leak, lens flare, api, dan langit berbintang berlatar hitam ditambahkan.",
        "Overlay dan soft light meneruskan kontras lewat gambar atas, membuat bagian terang latar lebih terang dan bagian gelap lebih gelap; soft light yang lebih lembut di antara keduanya dan cocok untuk tekstur kertas, grain, dan semburat warna. Darken dan lighten mempertahankan piksel yang lebih gelap atau lebih terang. Difference mengurangkan satu gambar dari yang lain untuk tampilan aneh dan terbalik — sekaligus menunjukkan tepat di mana dua foto yang hampir sama berbeda.",
      ],
    },
    {
      heading: "Membuat double exposure",
      id: "double-exposure",
      body: [
        "Pakai potret sebagai latar dan pemandangan, hutan, atau siluet kota di atasnya. Pilih Tutupi semua, atur mode blend ke Screen atau Lighten, dan turunkan opasitas ke antara 50 dan 80 % sampai wajah terlihat menembus pemandangan. Potret berlatar polos dan terang paling bagus, karena pemandangan mengisi ruang kosong di sekeliling siluet. Tukar gambar untuk melihat urutan mana yang lebih bagus.",
      ],
    },
    {
      heading: "Logo, stiker, dan tanda tangan",
      id: "logos",
      body: [
        "Logo atau stiker yang disimpan sebagai PNG berlatar transparan menempel di foto tanpa kotak di sekelilingnya — geser ke sudut, atur ukurannya, dan turunkan opasitas bila harus samar. Foto tanda tangan di kertas putih tidak punya transparansi, tetapi Multiply membuat putihnya hilang dan hanya tintanya yang tersisa.",
        "Untuk memasang logo yang sama di banyak foto sekaligus, Watermark Foto lebih cepat: alat itu memasang satu logo atau teks ke seluruh kumpulan foto.",
      ],
    },
    {
      heading: "Tekstur dan efek cahaya",
      id: "textures",
      body: [
        "Tekstur kertas, kanvas, grain film, dan debu memberi gambar digital yang datar nuansa analog: taruh tekstur di atas dengan Tutupi semua, pilih Soft light atau Overlay, dan biarkan opasitasnya rendah. Gambar hujan, salju, bokeh, dan light leak biasanya berlatar hitam; dengan Screen, hitamnya hilang dan hanya cahayanya yang tersisa.",
      ],
    },
    {
      heading: "Gambar di dalam gambar",
      id: "inset",
      body: [
        "Gambar kedua yang kecil di dalam gambar besar memperlihatkan detail dan konteks sekaligus: close-up label di sudut foto produk utuh, peta kecil di foto perjalanan, atau foto sebelum di dalam foto sesudah. Biarkan Normal dan opasitas penuh, atur ukuran sekitar 25–35 %, lalu tempelkan ke sudut. Rotasi beberapa derajat membuatnya tampak seperti foto yang disematkan dengan santai.",
      ],
    },
    {
      heading: "Ukuran, format, dan transparansi",
      id: "output",
      body: [
        "Hasilnya selalu seukuran gambar latar, jadi gambar atas yang lebih besar dari latar akan terpotong di tepinya. Hasil disimpan dalam format gambar latar kecuali Anda memilih yang lain. PNG dan WEBP mempertahankan transparansi latar; JPG tidak punya transparansi, jadi area transparan diisi warna pilihan Anda.",
      ],
    },
    {
      heading: "Konten media sosial dan thumbnail",
      id: "social",
      body: [
        "Foto latar, PNG potongan di atasnya, dan sedikit tekstur sudah cukup untuk membuat thumbnail atau postingan yang terlihat seperti dibuat di aplikasi desain. Agar satu seri tampak seragam, ulangi ukuran, posisi, dan opasitas yang sama — angkanya terlihat di samping setiap kontrol, jadi mudah dicatat dan dipakai lagi.",
      ],
    },
    {
      heading: "Privasi",
      id: "privacy",
      body: [
        "Kedua gambar digabung sepenuhnya di browser Anda. Tidak ada yang di-upload ke server, dan tidak ada yang disimpan setelah halaman ditutup.",
      ],
    },
  ],

  howToTitle: "Cara overlay foto",
  steps: [
    { title: "Tambahkan latar", description: "Pilih gambar bawah — atau lepaskan kedua gambar sekaligus." },
    { title: "Tambahkan gambar atas", description: "Geser ke tempatnya, lalu atur ukuran, rotasi, opasitas, dan mode blend." },
    { title: "Simpan", description: "Klik Simpan gambar untuk mengunduh hasilnya dalam ukuran penuh." },
  ],

  features: [
    { icon: "layers", title: "Delapan mode blend", description: "Normal, multiply, screen, overlay, soft light, darken, lighten, dan difference." },
    { icon: "opacity", title: "Opasitas dan posisi", description: "Geser, ubah ukuran, putar, dan pudarkan gambar atas dengan pratinjau langsung." },
    { icon: "lock", title: "Tanpa upload", description: "Digabung sepenuhnya di browser Anda." },
  ],

  faqs: [
    { q: "Bagaimana cara menumpuk satu gambar di atas gambar lain?", a: "Tambahkan latar, tambahkan gambar atas, geser ke tempatnya, lalu klik Simpan gambar." },
    { q: "Bagaimana membuat gambar atas transparan?", a: "Turunkan penggeser Opasitas. Di 50 % kedua gambar terlihat sama kuat." },
    { q: "Bagaimana menghapus latar putih tanda tangan atau logo?", a: "Atur mode blend ke Multiply — putihnya hilang dan garis gelapnya tetap." },
    { q: "Bagaimana menghapus latar hitam efek cahaya?", a: "Atur mode blend ke Screen — hitamnya hilang dan cahayanya tetap." },
    { q: "Bagaimana membuat double exposure?", a: "Potret sebagai latar, pemandangan di atas, Tutupi semua, Screen atau Lighten, dan opasitas 50–80 %." },
    { q: "Bisakah memutar gambar atas?", a: "Bisa, sampai 180 derajat ke kedua arah." },
    { q: "Berapa ukuran hasilnya?", a: "Selalu seukuran gambar latar." },
    { q: "Bisakah menukar kedua gambar?", a: "Bisa. Tukar gambar memindahkan gambar atas ke bawah dan latar ke atas." },
    { q: "Apakah PNG transparan tetap transparan?", a: "Ya. Bagian transparan gambar atas memperlihatkan latar di bawahnya." },
    { q: "Bisakah memasang logo di banyak foto sekaligus?", a: "Untuk itu pakai Watermark Foto — alat itu memasang logo yang sama ke seluruh kumpulan foto." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. Semuanya terjadi di browser Anda." },
    { q: "Apakah bisa di HP?", a: "Bisa. Geser gambar atas dengan jari Anda." },
    { q: "Apakah gratis?", a: "Ya. Tanpa akun, tanpa watermark, dan tanpa batas." },
  ],

  security:
    "Gambar Anda digabung sepenuhnya di browser. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // OverlayTool.tsx
    "or drop the background image here — or both images at once": "atau lepaskan gambar latar di sini — atau kedua gambar sekaligus",
    "Preview": "Pratinjau",
    "Preview — drag, or use the arrow keys, to move the overlay": "Pratinjau — geser, atau pakai tombol panah, untuk memindahkan gambar atas",
    "Drag the overlay to move it.": "Geser gambar atas untuk memindahkannya.",
    "Hold to see the original": "Tahan untuk melihat aslinya",
    "Add the image to put on top": "Tambahkan gambar untuk ditaruh di atas",
    "A photo, logo, texture or PNG with transparency — click or drop it here.": "Foto, logo, tekstur, atau PNG transparan — klik atau lepaskan di sini.",
    "Background image": "Gambar latar",
    "Overlay image": "Gambar atas",
    "Not added yet": "Belum ditambahkan",
    "Replace": "Ganti",
    "Add": "Tambah",
    "Swap images": "Tukar gambar",
    "Fit": "Penempatan",
    "Place freely": "Tempatkan bebas",
    "Cover everything": "Tutupi semua",
    "Drag it on the preview, then set its size and angle.": "Geser di pratinjau, lalu atur ukuran dan sudutnya.",
    "Covers the whole picture and trims what sticks out — for textures, light leaks and double exposures.": "Menutupi seluruh gambar dan memotong bagian yang menonjol — untuk tekstur, light leak, dan double exposure.",
    "Size": "Ukuran",
    "Its width as a share of the background's width.": "Lebarnya sebagai bagian dari lebar gambar latar.",
    "Rotation": "Rotasi",
    "Position": "Posisi",
    "Top left": "Kiri atas",
    "Top center": "Tengah atas",
    "Top right": "Kanan atas",
    "Middle left": "Kiri tengah",
    "Center": "Tengah",
    "Middle right": "Kanan tengah",
    "Bottom left": "Kiri bawah",
    "Bottom center": "Tengah bawah",
    "Bottom right": "Kanan bawah",
    "Opacity": "Opasitas",
    "Blend mode": "Mode blend",
    "Normal": "Normal", // i18n-same — the blend mode's name in Indonesian editors
    "Multiply": "Multiply", // i18n-same — editors keep the English mode names
    "Screen": "Screen", // i18n-same
    "Overlay": "Overlay", // i18n-same
    "Soft light": "Soft light", // i18n-same
    "Darken": "Darken", // i18n-same
    "Lighten": "Lighten", // i18n-same
    "Difference": "Difference", // i18n-same
    "Draws the image as it is.": "Menggambar gambar apa adanya.",
    "Only darkens — white disappears. Good for signatures, stamps and line art.": "Hanya menggelapkan — putih menghilang. Cocok untuk tanda tangan, stempel, dan gambar garis.",
    "Only lightens — black disappears. Good for light leaks, flares, fire and stars.": "Hanya mencerahkan — hitam menghilang. Cocok untuk light leak, flare, api, dan bintang.",
    "Boosts contrast: lights get lighter and darks darker.": "Menambah kontras: yang terang makin terang, yang gelap makin gelap.",
    "A gentler overlay — for textures and colour tints.": "Overlay yang lebih lembut — untuk tekstur dan semburat warna.",
    "Keeps whichever pixel is darker.": "Mempertahankan piksel yang lebih gelap.",
    "Keeps whichever pixel is lighter.": "Mempertahankan piksel yang lebih terang.",
    "Subtracts the colours — an inverted, artistic look.": "Mengurangkan warna — tampilan terbalik yang artistik.",
    "Output format": "Format hasil",
    "Same as original": "Sama dengan asli",
    "The result is the size of the background image.": "Hasilnya seukuran gambar latar.",
    "JPG background": "Latar JPG",
    "Your images are processed in your browser and never uploaded.": "Gambar Anda diproses di browser dan tidak pernah di-upload.",
    "Save image": "Simpan gambar",
    "Done — 1 image saved.": "Selesai — 1 gambar disimpan.",
  },
};

export default content;
