import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/html-ke-gambar. 64 ui keys, the second-heaviest
 * block in the locale.
 *
 * Audience: the one developer-facing tool where the reader is building
 * something rather than fixing a file. CSS, HTML, Chromium, Puppeteer,
 * prefers-color-scheme and the selector examples stay as they are — they are
 * code. «gambar», not «foto»: the output is a rendered page, never a photo
 * (conversion.md §11.2).
 *
 * Local angle in `og-images`: the card WhatsApp draws when a link is shared
 * is the page's og:image, and most Indonesian readers first meet the idea
 * there, not on Facebook or X.
 *
 * Like heic-ke-jpg and gambar-ke-teks, this tool runs on the server, and the
 * page says so plainly.
 */
const content: ToolPageContent = {
  toolId: "html-to-image",
  locale: "id",
  name: "HTML ke Gambar",
  tagline:
    "Ubah URL halaman web atau HTML mentah menjadi gambar secara online — pilih viewport, format, dan tangkapan seluruh halaman. Dijalankan dengan headless Chromium yang open-source.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "HTML ke Gambar Online Gratis — Screenshot Halaman Web dari URL | oMyImage",
  metaDescription:
    "Ubah halaman web atau HTML Anda sendiri menjadi gambar online gratis: ukuran layar bebas, PNG, JPG, atau WEBP, dan tangkapan seluruh halaman. Dirender dengan headless Chromium.",

  intro:
    "Ubah halaman web atau potongan HTML menjadi gambar yang tajam. Alat HTML ke Gambar ini merender URL atau markup Anda sendiri dengan headless Chromium dan memberikan PNG atau JPG tepat pada ukuran yang Anda pilih — praktis untuk thumbnail, pratinjau, dan kartu media sosial. Rendering berjalan di server kami dengan Puppeteer yang open-source.",

  sections: [
    {
      heading: "Mengubah markup menjadi gambar",
      id: "what",
      body: [
        "Sebuah browser tanpa jendela (headless) memuat HTML atau URL Anda, menyusun tata letaknya persis seperti browser biasa — menerapkan CSS, menjalankan skrip, memuat font web — lalu menangkap hasil render-nya sebagai gambar. Ini adalah tangkapan layar yang diambil oleh browser tanpa jendela.",
        "Perbedaan itu penting. Ini bukan perkiraan tampilan halaman; ini mesin render yang sama yang menghasilkan tata letak yang sama, itulah sebabnya CSS yang rumit, flexbox, grid, dan font web tampil dengan benar, sementara konverter HTML-ke-gambar yang lebih sederhana merusaknya.",
        "Hasilnya adalah PNG atau JPG biasa, jadi bisa dipakai di mana pun gambar bisa dipakai — di kartu media sosial, dokumen, slide presentasi, atau email.",
      ],
    },
    {
      heading: "Kartu pratinjau tautan",
      id: "og-images",
      body: [
        "Pemakaian produksi yang paling umum adalah membuat gambar Open Graph — gambar yang muncul saat sebuah tautan dibagikan di media sosial atau aplikasi chat. Kartu yang muncul saat Anda mengirim tautan artikel di WhatsApp adalah gambar ini. Mendesainnya satu per satu untuk setiap artikel tidak berkelanjutan; membuat templatnya dalam HTML lalu merender-nya menjadi gambar, bisa.",
        "1200×630 piksel adalah ukuran standar dan ditangani dengan baik oleh hampir semua platform. Buat kartunya sebagai templat HTML dengan judul, penulis, dan karya grafis yang diatur posisinya dengan CSS, lalu render satu gambar per artikel.",
        "Dua hal praktis: letakkan konten penting jauh dari tepi, karena sebagian platform meng-crop ke rasionya sendiri, dan pakai huruf yang besar. Kartu seperti ini sering dilihat hanya selebar dua ratusan piksel di feed atau chat, jadi apa pun di bawah sekitar 32 piksel di sumbernya tidak akan terbaca.",
      ],
    },
    {
      heading: "Kenapa tangkapan bisa berbeda dari layar Anda",
      id: "differences",
      body: [
        "Renderer-nya adalah browser yang bersih. Tidak ada ekstensi, tidak ada pemblokir iklan, tidak ada sesi login, dan tidak ada akses ke font yang terpasang di komputer Anda. Halaman yang terlihat satu cara bagi Anda bisa dengan wajar tampil berbeda di sini, dan biasanya perbedaan itu justru informatif — Anda melihat apa yang dilihat pengunjung baru yang anonim.",
        "Lazy loading adalah penyebab paling sering konten yang hilang. Gambar dan bagian yang diatur untuk dimuat saat di-scroll ke tampilan mungkin belum terpicu sebelum tangkapan diambil, dan data dari panggilan API yang lambat bisa terlewat sama sekali. Pengaturan jeda sebelum tangkapan ada untuk itu.",
        "Animasi dan transisi membeku di mana pun posisinya saat itu. Kalau sebuah elemen muncul perlahan, tangkapan bisa mengambilnya di tengah jalan — alasan yang baik untuk mematikan animasi di CSS yang Anda render, atau merancang templatnya sebagai tata letak statis sejak awal.",
      ],
    },
    {
      heading: "Yang satu ini berjalan di server kami",
      id: "server",
      body: [
        "Hampir semua alat di situs ini bekerja di dalam tab browser Anda. Merender halaman web tidak bisa, karena membutuhkan mesin browser lengkap — sesuatu yang memang sudah dimiliki browser Anda, tetapi tidak bisa dikendalikan sebuah halaman untuk konten pihak ketiga sembarang dari dalam tab.",
        "Karena itu URL atau HTML yang Anda berikan dikirim ke server kami melalui koneksi terenkripsi, dirender di browser headless di sana, dan gambarnya dikembalikan kepada Anda. Tidak ada yang disimpan sesudahnya.",
        "Satu catatan untuk konten pribadi: karena URL diambil oleh server kami, bukan oleh Anda, apa pun yang berada di balik login atau di jaringan pribadi tidak bisa dijangkau. Itu keterbatasan, sekaligus alasan alat ini tidak mungkin tanpa sengaja menangkap sesuatu yang tidak semestinya.",
      ],
    },
  ],

  howToTitle: "Cara mengubah HTML ke gambar",
  steps: [
    { title: "Masukkan URL atau HTML", description: "Tempel URL halaman web, atau beralih ke mode HTML dan tempel markup Anda sendiri." },
    { title: "Atur ukuran & format", description: "Pilih lebar dan tinggi viewport, format hasil, dan apakah seluruh halaman ikut ditangkap." },
    { title: "Render & unduh", description: "Klik Render ke gambar dan unduh tangkapannya sebagai PNG, JPG, atau WEBP." },
  ],

  features: [
    { icon: "link", title: "URL atau HTML mentah", description: "Ambil tangkapan halaman web publik mana pun, atau render potongan HTML dan CSS Anda sendiri menjadi gambar." },
    { icon: "aspect_ratio", title: "Viewport bebas", description: "Atur lebar dan tinggi yang tepat, dan bila perlu tangkap seluruh halaman yang bisa di-scroll." },
    { icon: "verified_user", title: "Mesin open-source", description: "Dirender dengan headless Chromium lewat Puppeteer — gratis, open-source, dan boleh dipakai untuk keperluan komersial." },
  ],

  faqs: [
    { q: "Bisakah mengambil tangkapan situs web mana pun?", a: "URL mana pun yang bisa diakses publik. Halaman yang memblokir bot atau memerlukan login mungkin tidak ter-render sepenuhnya." },
    { q: "Bisakah merender HTML saya sendiri?", a: "Bisa. Beralih ke mode HTML dan tempel markup dengan CSS inline untuk merendernya dengan persis." },
    { q: "Format apa saja yang bisa diekspor?", a: "PNG (lossless), JPG, atau WEBP. Anda juga bisa menangkap seluruh tinggi halaman yang bisa di-scroll." },
    { q: "Mesin apa yang dipakai?", a: "Headless Chromium lewat pustaka open-source Puppeteer, berjalan di server kami." },
    { q: "Apakah gratis?", a: "Ya — gratis, tanpa watermark dan tanpa daftar." },
    { q: "Sebenarnya untuk apa alat ini?", a: "Membuat kartu pratinjau tautan untuk media sosial dan WhatsApp, menangkap halaman untuk dokumentasi atau arsip, membuat tangkapan layar yang konsisten untuk catatan rilis, melihat templat email sebagai gambar, dan mengubah HTML buatan Anda menjadi gambar yang bisa dibagikan di tempat yang tidak bisa merender HTML." },
    { q: "Kenapa hasilnya tidak sama persis dengan browser saya?", a: "Karena dirender di browser headless yang bersih, tanpa ekstensi, tanpa sesi login, dan tanpa font lokal selain kumpulan standar. Konten di balik login akan menampilkan tampilan saat belum login, dan halaman yang bergantung pada font yang hanya terpasang di komputer Anda akan memakai font pengganti." },
    { q: "Bisakah menangkap halaman yang memerlukan login?", a: "Tidak. Renderer tidak punya akses ke cookie atau sesi Anda, jadi yang terlihat adalah apa yang dilihat pengunjung anonim. Untuk halaman yang memerlukan login, tangkapan layar dari browser Anda sendiri adalah jalan yang praktis." },
    { q: "Kenapa sebagian konten tidak ada di tangkapan?", a: "Biasanya karena lazy loading. Gambar dan bagian yang baru dimuat saat di-scroll ke tampilan mungkin belum muncul saat tangkapan diambil. Konten dari panggilan API yang lambat bisa terlewat karena alasan yang sama, dan animasi membeku di frame mana pun yang sudah dicapainya. Naikkan jeda sebelum tangkapan di pengaturan lanjutan." },
    { q: "Ukuran berapa yang sebaiknya dipakai?", a: "1200×630 adalah standar untuk kartu pratinjau media sosial dan bekerja di kebanyakan platform. Lebar 1280 atau 1440 cocok untuk tangkapan dokumentasi. Tangkapan seluruh halaman adalah pilihan yang tepat untuk arsip, walaupun halaman yang sangat panjang menghasilkan gambar yang sangat tinggi." },
    { q: "Apakah berjalan di browser saya seperti alat lainnya?", a: "Tidak — yang satu ini butuh mesin browser sungguhan untuk merender halaman, yang tidak bisa dikirim ke perangkat Anda. HTML atau URL dikirim ke server kami, dirender, dan gambar hasilnya dikembalikan. Tidak ada yang disimpan sesudahnya." },
  ],

  security:
    "Rendering berjalan di server kami dengan headless Chromium yang open-source. Hasilnya hanya disimpan sebentar di balik tautan unduhan pribadi dan dihapus otomatis dalam satu jam. Kami tidak pernah membagikan atau memakai ulang konten Anda.",

  rating: { value: "4.7", count: "356" },

  ui: {
    // HtmlToImageTool.tsx — module-scope VIEWPORTS and FORMATS
    "Desktop — 1920 × 1080": "Desktop — 1920 × 1080", // i18n-same — the word Indonesian uses
    "Laptop — 1440 × 900": "Laptop — 1440 × 900", // i18n-same
    "Standard — 1280 × 720": "Standar — 1280 × 720",
    "Tablet — 768 × 1024": "Tablet — 768 × 1024", // i18n-same
    "Mobile — 390 × 844": "Ponsel — 390 × 844",
    "Custom size…": "Ukuran kustom…",
    "PNG — lossless, supports transparency": "PNG — lossless, mendukung transparansi",
    "JPG — smallest for photos": "JPG — paling kecil untuk foto",
    "WEBP — small + transparency": "WEBP — kecil + transparansi",
    // HtmlToImageTool.tsx
    "Page {n}": "Halaman {n}",
    "Please choose .html files.": "Pilih file .html.",
    "Added 1 page.": "1 halaman ditambahkan.",
    "Added {n} pages.": "{n} halaman ditambahkan.",
    "Enter a valid URL (https://…).": "Masukkan URL yang valid (https://…).",
    "Add some HTML to at least one page.": "Isi HTML di minimal satu halaman.",
    "Width and height must be at least 100px.": "Lebar dan tinggi minimal 100px.",
    "Rendered 1 image.": "1 gambar berhasil dirender.",
    "Rendered {n} images.": "{n} gambar berhasil dirender.",
    "Rendering failed.": "Render gagal.",
    "Web page URL": "URL halaman web",
    "Any public http(s) address. Private and local addresses are rejected by the server.":
      "Alamat http(s) publik apa pun. Alamat privat dan lokal ditolak oleh server.",
    "1 page": "1 halaman",
    "{n} pages": "{n} halaman",
    "Import .html": "Impor .html",
    "Add page": "Tambah halaman",
    "Remove {name}": "Hapus {name}",
    "Page name": "Nama halaman",
    "Used as the downloaded file name for this page's image.":
      "Dipakai sebagai nama file unduhan untuk gambar halaman ini.",
    "<!doctype html> …": "<!doctype html> …", // i18n-same
    "{n} characters · a full document or a fragment both work.":
      "{n} karakter · dokumen lengkap maupun potongan sama-sama bisa.",
    "Rendering {done} of {total}…": "Merender {done} dari {total}…",
    "Your rendered image will appear here.": "Gambar hasil render akan muncul di sini.",
    // `{Capturing at} {width} × {height}`
    "Capturing at": "Diambil pada",
    "Clear": "Kosongkan",
    "Download {name}": "Unduh {name}",
    "Capture Settings": "Pengaturan Tangkapan",
    "Rendering uses headless Chromium on our servers.":
      "Rendering memakai headless Chromium di server kami.",
    "Rendering…": "Merender…",
    "Render {n} pages": "Render {n} halaman",
    "Render to image": "Render ke gambar",
    "Viewport": "Viewport", // i18n-same — the web-development term
    "Screen size": "Ukuran layar",
    "The browser window the page is laid out in. Responsive sites render their tablet or mobile layout at those widths.":
      "Jendela browser tempat halaman disusun. Situs responsif akan menampilkan tata letak tablet atau ponselnya pada lebar tersebut.",
    "Width (px)": "Lebar (px)",
    "Height (px)": "Tinggi (px)",
    "Orientation": "Orientasi",
    "Swaps the width and height of the chosen screen size.":
      "Menukar lebar dan tinggi ukuran layar yang dipilih.",
    "Portrait": "Potret",
    "Landscape": "Lanskap",
    "Resolution": "Resolusi",
    "2× renders twice the pixels for a retina-sharp result — the same layout, a bigger file.":
      "2× merender dua kali lebih banyak piksel untuk hasil setajam layar retina — tata letak sama, file lebih besar.",
    "Capture full page": "Tangkap seluruh halaman",
    "Scrolls to the bottom and stitches the whole document instead of just the visible window.":
      "Menggulir sampai bawah dan menyatukan seluruh dokumen, bukan hanya jendela yang terlihat.",
    "Capture one element (optional)": "Tangkap satu elemen (opsional)",
    "A CSS selector, e.g. #pricing or .hero. Only that element is captured, which overrides full page.":
      "Selektor CSS, misalnya #pricing atau .hero. Hanya elemen itu yang ditangkap, dan ini mengesampingkan tangkapan seluruh halaman.",
    "Output": "Hasil",
    "Format": "Format", // i18n-same — the Indonesian word is the same
    "Higher keeps more detail and makes a bigger file. 80–90 is the sweet spot for screenshots.":
      "Lebih tinggi menyimpan lebih banyak detail dan membuat file lebih besar. 80–90 adalah titik terbaik untuk tangkapan layar.",
    "Lower quality": "Turunkan kualitas",
    "Higher quality": "Naikkan kualitas",
    "Smaller file": "File lebih kecil",
    "Skips the page background so the image keeps an alpha channel.":
      "Melewati latar halaman sehingga gambar mempertahankan kanal alfa.",
    "JPG has no alpha channel — switch to PNG or WEBP for transparency.":
      "JPG tidak punya kanal alfa — beralih ke PNG atau WEBP untuk transparansi.",
    "Transparent background": "Latar transparan",
    "Padding (px)": "Padding (px)", // i18n-same — the CSS term
    "Breathing room added around the page content before the shot is taken.":
      "Ruang lega yang ditambahkan di sekitar konten halaman sebelum tangkapan diambil.",
    "Advanced": "Lanjutan",
    "Wait before capture (ms)": "Jeda sebelum tangkapan (ms)",
    "Extra settle time after the page loads — useful for animations, fonts or lazy-loaded images. Max 10000.":
      "Waktu tunggu tambahan setelah halaman dimuat — berguna untuk animasi, font, atau gambar yang dimuat belakangan. Maksimal 10000.",
    "Emulate dark mode": "Tiru mode gelap",
    "Reports prefers-color-scheme: dark, so sites with a dark theme render it.":
      "Melaporkan prefers-color-scheme: dark, sehingga situs yang punya tema gelap merender tema itu.",
    "Hide cookie banners": "Sembunyikan banner cookie",
    "Hides the common consent overlays that would otherwise cover the shot.":
      "Menyembunyikan jendela persetujuan umum yang kalau tidak akan menutupi tangkapan.",
    "Only applies when capturing a URL.": "Hanya berlaku saat menangkap URL.",
    "Custom CSS (optional)": "CSS kustom (opsional)",
    "Injected last, so it overrides the page's own styles. Applies to every page in the batch.":
      "Disisipkan paling akhir, jadi mengesampingkan gaya bawaan halaman. Berlaku untuk setiap halaman dalam kumpulan.",
    /* Backend sentences this tool can surface (routes/image/html-to-image).
       UNVERIFIED, exactly as in the pt, hi and ru modules: the backend is not
       in this repo and was not reachable from the dev server, so these follow
       the wordings the other server-backed tools use. A sentence that does not
       match falls back to English rather than breaking. */
    "Provide a url or html.": "Berikan URL atau HTML.",
    "Only http and https URLs are allowed.": "Hanya URL http dan https yang diizinkan.",
    "That host is not allowed.": "Host itu tidak diizinkan.",
    "HTML rendering isn't enabled on this server (Chromium not installed).":
      "Rendering HTML belum aktif di server ini (Chromium belum terpasang).",
  },
};

export default content;
