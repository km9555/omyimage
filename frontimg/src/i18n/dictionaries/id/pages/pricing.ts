import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/harga (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names.
 * Everything around them is translated. The currency is decided by the
 * backend from the visitor's region, not by this page, so no price appears
 * here.
 *
 * "Why are prices different in my country?" is translated faithfully, India
 * included — it describes how the price book works, and inventing an
 * Indonesia-specific claim (a rupiah price, a discount) would be a claim this
 * repo cannot verify: the price book lives on the backend.
 *
 * The closing «Everything on» + <Link>oMyImage</Link> + «is free…» seam reads
 * in English order: «Sementara itu, semua di oMyImage bisa dipakai gratis.»
 */
export const idPricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Semua alat gratis hari ini — tanpa perlu akun",
  "Simple, honest pricing.": "Harga yang sederhana dan jujur.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Mulai gratis dan tetap gratis untuk pekerjaan sehari-hari. Paket berbayar sedang disiapkan untuk yang butuh file lebih besar dan lebih banyak pemakaian AI.",

  // Controls
  "Monthly": "Bulanan",
  "Yearly": "Tahunan",
  "Save {n}%": "Hemat {n}%",
  "Prices are shown in the currency of your region.": "Harga ditampilkan dalam mata uang wilayah Anda.",
  "Prices in {currency}": "Harga dalam {currency}",
  "Loading prices…": "Memuat harga…",
  "Yearly prices are shown per month, billed annually.":
    "Harga tahunan ditampilkan per bulan, ditagih sekaligus setahun.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "Paling populer",
  "Coming soon": "Segera hadir",
  "Everything you need for everyday images.": "Semua yang Anda butuhkan untuk gambar sehari-hari.",
  "For regular users who want more headroom.": "Untuk pengguna rutin yang ingin kapasitas lebih.",
  "Unlimited AI, the largest files, priority speed.": "AI tanpa batas, file terbesar, kecepatan prioritas.",
  "Start using the tools": "Mulai pakai alatnya",
  "All {n} tools, no account needed": "Semua {n} alat, tanpa perlu akun",
  "Unlimited in-browser processing, no daily cap": "Pemrosesan di browser tanpa batas, tanpa kuota harian",
  "Server processing for files up to 100 MB": "Pemrosesan di server untuk file hingga 100 MB",
  "10 AI runs / day": "10 pemakaian AI / hari",
  "Batch up to 20 files": "Hingga 20 file sekaligus",
  "Results download straight to your device": "Hasil langsung terunduh ke perangkat Anda",
  "Everything in Free": "Semua yang ada di Free",
  "Server processing for files up to 200 MB": "Pemrosesan di server untuk file hingga 200 MB",
  "100 AI runs / day": "100 pemakaian AI / hari",
  "Batch up to 100 files": "Hingga 100 file sekaligus",
  "Priority server processing": "Pemrosesan server prioritas",
  "24-hour download links": "Tautan unduhan berlaku 24 jam",
  "Everything in Plus": "Semua yang ada di Plus",
  "Server processing for files up to 300 MB": "Pemrosesan di server untuk file hingga 300 MB",
  "Unlimited AI runs": "Pemakaian AI tanpa batas",
  "Unlimited batch size": "Jumlah file sekaligus tanpa batas",
  "Top-priority processing queue": "Antrean pemrosesan prioritas tertinggi",
  "7-day download links": "Tautan unduhan berlaku 7 hari",
  "/ month": "/ bulan",
  "Free forever": "Gratis selamanya",
  "Billed annually — {total} / year": "Ditagih tahunan — {total} / tahun",
  "Billed monthly": "Ditagih bulanan",
  "Paid plans aren't available yet": "Paket berbayar belum tersedia",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Paket berbayar belum bisa dibeli — harga di atas adalah yang kami rencanakan saat paketnya diluncurkan. Sementara itu, semua di",
  "is free to use in the meantime.": "bisa dipakai gratis.",

  // Trust tiles
  "Private by default": "Privat sejak awal",
  "Most tools run entirely in your browser — your images never leave your device.":
    "Sebagian besar alat berjalan sepenuhnya di browser Anda — gambar Anda tidak pernah meninggalkan perangkat.",
  "No account needed": "Tanpa perlu akun",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Buka alatnya dan langsung pakai. Pendaftaran tidak pernah diwajibkan untuk memakai oMyImage.",
  "Deleted automatically": "Dihapus otomatis",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "Di Free tidak ada yang disimpan sama sekali — hasil langsung terunduh ke perangkat Anda. Di paket yang menyediakan tautan unduhan, masa berlaku tautan itulah masa penyimpanannya, dan tidak ada yang pernah dipakai ulang.",

  // FAQ
  "Questions": "Pertanyaan",
  "Do I need an account to use oMyImage?": "Apakah perlu akun untuk memakai oMyImage?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "Tidak. Setiap alat bisa dipakai sekarang juga tanpa akun dan tanpa daftar. Akun hanya relevan untuk paket berbayar, yang belum berjalan.",
  "Is the free tier really free?": "Apakah paket gratis benar-benar gratis?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "Ya. Tidak ada masa uji coba yang berubah menjadi paket berbayar dan tidak ada metode pembayaran yang disimpan. Alat gratis memang gratis.",
  "When can I buy Plus or Pro?": "Kapan Plus atau Pro bisa dibeli?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Belum — penagihan belum berjalan, itulah sebabnya tombol-tombol itu dinonaktifkan, bukan berpura-pura menerima pembayaran. Harga yang ditampilkan adalah yang kami rencanakan saat paketnya diluncurkan.",
  "Why are prices different in my country?": "Kenapa harga di negara saya berbeda?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "Mata uang mengikuti negara tempat Anda membuka situs, jadi tidak ada yang perlu dipilih. India dan beberapa pasar lain sengaja diberi harga lebih rendah, bukan sekadar dikonversi; di tempat lain harganya diturunkan dari harga dolar AS kami dengan kurs yang kami perbarui secara berkala, bukan kurs hari itu.",
  "What counts as an AI run?": "Apa yang dihitung sebagai pemakaian AI?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "Alat AI yang berjalan di server — Hapus Background dan Jadikan Foto HD. Hanya itu yang kami hitung, karena hanya itu yang benar-benar memakan biaya bagi kami setiap kali dipakai. Semua yang berjalan di browser Anda tanpa batas di setiap paket, dan akan selalu begitu.",
  "Why do the paid plans only raise the file size a little?": "Kenapa paket berbayar hanya sedikit menaikkan batas ukuran file?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Karena hampir tidak ada yang membutuhkannya. Sebagian besar gambar diproses sepenuhnya di browser Anda, tempat kami sama sekali tidak memberi batas ukuran — satu-satunya batas adalah kemampuan perangkat Anda sendiri. Server kami untuk file yang terlalu besar atau terlalu tinggi resolusinya untuk itu, dan 100 MB sudah mencakup hampir semuanya. Kami lebih memilih menyebut angka yang benar-benar bisa kami penuhi daripada angka gigabyte yang sekadar mentereng.",
  "What decides whether an image is processed in my browser or on your server?":
    "Apa yang menentukan gambar diproses di browser saya atau di server Anda?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "Kebanyakan resolusinya, bukan ukuran filenya. Browser hanya bisa menggambar canvas sampai jumlah piksel tertentu, dan foto ponsel modern 48 megapiksel bisa melampauinya walaupun ukurannya hanya beberapa megabyte. Kalau itu terjadi, kami memproses gambarnya di server kami dan langsung menghapusnya setelahnya. Setiap alat memberi tahu jalur mana yang dipakainya.",
  "Are my images kept?": "Apakah gambar saya disimpan?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "Sebagian besar alat sama sekali tidak mengunggah. Untuk yang mengunggah, hasilnya dihapus otomatis dalam waktu sekitar satu jam. Lihat Kebijakan Privasi untuk detailnya.",

  // Closing CTA
  "Start now — no card, no account.": "Mulai sekarang — tanpa kartu, tanpa akun.",
  "All {n} tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "Semua {n} alat gratis dipakai hari ini. Paket berbayar akan menambah kapasitas, bukan membatasi akses.",
  "Browse all tools": "Lihat semua alat",
};
