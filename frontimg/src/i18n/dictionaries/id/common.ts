/**
 * Indonesian SHARED chrome — strings rendered by components that appear on
 * every route (header, menus, footer, cookie banner, the tool workspace, result
 * screen, SEO block headings…).
 *
 * Bundled on every page, so keep it to genuinely shared strings. A tool's own
 * micro-copy belongs in the `ui` block of its content module
 * (`src/content/tools/<id>.id.ts`), which is code-split with that route.
 * The rule for where a key lives is WHO RENDERS IT, not where it first
 * appeared: anything under `components/` or `lib/` can render on any route, so
 * its keys live here even if only one tool uses the component today
 * (oMyPDF conversion.md §4.11).
 *
 * Keys are the English source string, byte for byte — copy them from the
 * `npm run i18n:keys id` report rather than retyping (typographic apostrophes
 * and dashes are the classic way a key silently never matches).
 *
 * Register and vocabulary (conversion.md §11, Indonesian):
 *   • Formal **Anda**, as iLoveIMG and imagetotext.info both use. Imperatives
 *     are the bare verb: Pilih, Unduh, Unggah, Tutup.
 *   • The web's standard Indonesian UI words, not dictionary coinages: unggah
 *     (upload), unduh (download), masuk / keluar (sign in / out), akun, file
 *     (not «berkas» — every Indonesian app and portal says file), tautan
 *     (link), bagikan (share), pengaturan (settings).
 *   • **gambar** is the UI word for the technical object ("1 gambar", "Pilih
 *     gambar"); **foto** is the head noun in tool names, where it is the word
 *     searchers type (dictionaries/id/tools.ts).
 *   • Format and product names stay LATIN — JPG, PNG, WEBP, HEIC, SVG, GIF,
 *     PDF, ZIP, EXIF, Google Drive, Dropbox.
 *
 * NO PLURALS. Indonesian does not inflect a noun for number — "1 gambar",
 * "2 gambar", "21 gambar" — and Intl.PluralRules("id") only ever returns
 * `other`. So none of Russian's `|one` / `|few` siblings exist here, and the
 * "1 image" / "{n} images" pairs are both just the noun with its numeral.
 */
export const idCommon: Record<string, string> = {
  // ── SEO block (SeoContent / Breadcrumbs / RelatedTools) ─────────────────
  "Home": "Beranda",
  "Breadcrumb": "Navigasi jejak",
  "More tools": "Alat lainnya",
  "{tool} features": "Fitur {tool}",
  "Security & privacy": "Keamanan & privasi",
  "Frequently asked questions": "Pertanyaan yang sering diajukan",

  // ── Header, menus, search ───────────────────────────────────────────────
  "Tools": "Alat",
  "Soon": "Segera",
  "Coming soon": "Segera hadir",
  "40 free tools — no sign-up required": "40 alat gratis — tanpa perlu daftar",
  "Browse all tools": "Lihat semua alat",
  "Browse tools": "Lihat alat",
  "All tools": "Semua alat",
  "Blog": "Blog",
  "Pricing": "Harga",
  "Language": "Bahasa",
  "Select language": "Pilih bahasa",
  "More": "Lainnya",
  "Open menu": "Buka menu",
  "Close menu": "Tutup menu",
  "Site menu": "Menu situs",
  "Credits": "Kredit",
  "credits": "kredit",
  "Unlimited credits": "Kredit tanpa batas",
  "{used} of {limit} premium runs used today": "{used} dari {limit} pemakaian premium terpakai hari ini",
  "Search tools…": "Cari alat…",
  "Search tools": "Cari alat",
  "Clear search": "Hapus pencarian",
  "No tools match “{query}”.": "Tidak ada alat yang cocok dengan “{query}”.",
  "Switch to light mode": "Beralih ke mode terang",
  "Switch to dark mode": "Beralih ke mode gelap",
  "Light mode": "Mode terang",
  "Dark mode": "Mode gelap",
  "Help": "Bantuan",
  "Optimize Image": "Optimasi Gambar",
  "Edit Image": "Edit Gambar",
  "Create": "Buat",
  "Image AI": "AI Gambar",
  "Privacy & Info": "Privasi & Info",
  "Convert Format": "Ubah Format",
  "Convert To & From": "Konversi Dari & Ke",
  "Camera & Modern Formats": "Kamera & Format Modern",
  "Compress Image": "Kompres Foto",
  "Resize Image": "Ubah Ukuran Foto",
  "Crop Image": "Crop Foto",
  "Rotate Image": "Putar Foto",
  "Convert to JPG": "Ubah Foto ke JPG",
  "PNG to JPG": "PNG ke JPG",
  "WEBP to PNG": "WEBP ke PNG",
  "HEIC to JPG": "HEIC ke JPG",
  "Image to PDF": "Foto ke PDF",
  "Watermark Image": "Watermark Foto",
  "Image Editor": "Editor Foto",
  "Meme Generator": "Meme Generator",
  "Remove Background": "Hapus Background",
  "Upscale Image": "Jadikan Foto HD",
  "Optimize": "Optimasi",
  "Convert": "Konversi",
  "Edit & AI": "Edit & AI",
  "Contact": "Kontak",
  "Privacy Policy": "Kebijakan Privasi",
  "Terms of Service": "Syarat & Ketentuan",
  "Refund Policy": "Kebijakan Pengembalian Dana",
  "Cookie Policy": "Kebijakan Cookie",
  "Open-Source Licenses": "Lisensi Sumber Terbuka",
  "Free online image tools — fast, private, and no sign-up required.":
    "Alat gambar online gratis — cepat, privat, dan tanpa perlu daftar.",
  "View Pricing →": "Lihat Harga →",
  "Need PDF tools? oMyPDF →": "Butuh alat PDF? oMyPDF →",
  "© {year} {brand}. All rights reserved.": "© {year} {brand}. Hak cipta dilindungi.",

  // ── Account menu ────────────────────────────────────────────────────────
  "Login": "Masuk",
  "Account": "Akun",
  "Account menu": "Menu akun",
  "Signed in as": "Masuk sebagai",
  "Dashboard": "Dasbor",
  "My Account": "Akun Saya",
  "Sign out": "Keluar",
  "Show password": "Tampilkan kata sandi",
  "Hide password": "Sembunyikan kata sandi",
  "Unlimited AI runs": "Pemakaian AI tanpa batas",
  "{n} AI runs per day": "{n} pemakaian AI per hari",

  // ── Cookie banner ───────────────────────────────────────────────────────
  "Cookie consent": "Persetujuan cookie",
  "We value your privacy": "Kami menghargai privasi Anda",
  "oMyImage uses necessary cookies to run the site and optional analytics only with your consent. Your images are never involved.":
    "oMyImage memakai cookie yang diperlukan untuk menjalankan situs, dan cookie analitik opsional hanya dengan persetujuan Anda. Gambar Anda sama sekali tidak terlibat.",
  "Accept All": "Terima Semua",
  "Reject All": "Tolak Semua",
  "Customize": "Sesuaikan",
  "Save preferences": "Simpan pilihan",
  "Back": "Kembali",
  "Always on": "Selalu aktif",
  "Cookie Settings": "Pengaturan Cookie",
  "Necessary cookies": "Cookie yang diperlukan",
  "Required for core site features such as security, remembering your theme, and storing your cookie choice.":
    "Dibutuhkan untuk fitur inti situs seperti keamanan, mengingat tema Anda, dan menyimpan pilihan cookie Anda.",
  "Analytics cookies": "Cookie analitik",
  "Help us understand how visitors use oMyImage so we can improve performance and decide which tools to build next.":
    "Membantu kami memahami cara pengunjung memakai oMyImage, agar kami bisa meningkatkan kecepatan dan memutuskan alat apa yang dibuat berikutnya.",
  "Advertising cookies": "Cookie iklan",
  "Used to deliver relevant ads and measure advertising performance. oMyImage runs no ads today — this is stored for if that ever changes.":
    "Dipakai untuk menampilkan iklan yang relevan dan mengukur kinerja iklan. oMyImage saat ini tidak menampilkan iklan — pilihan ini disimpan untuk berjaga-jaga jika hal itu berubah.",
  "Functional cookies": "Cookie fungsional",
  "Enable enhanced features such as saved preferences and a more personalised experience.":
    "Mengaktifkan fitur tambahan seperti pengaturan yang tersimpan dan pengalaman yang lebih personal.",

  // ── Drop zone, cloud import ─────────────────────────────────────────────
  "Select images": "Pilih gambar",
  "Select an image": "Pilih gambar",
  "Take photo": "Ambil foto",
  "Processed in your browser — your images never leave your device.":
    "Diproses di browser Anda — gambar tidak pernah meninggalkan perangkat Anda.",
  "Processed on our server over an encrypted connection — files are deleted right after.":
    "Diproses di server kami melalui koneksi terenkripsi — file langsung dihapus setelahnya.",
  "or import from": "atau impor dari",
  "Connecting…": "Menghubungkan…",
  "Add from {service}": "Tambah dari {service}",
  "Import from {service}": "Impor dari {service}",
  "Imported 1 file from Google Drive.": "1 file diimpor dari Google Drive.",
  "Imported {n} files from Google Drive.": "{n} file diimpor dari Google Drive.",
  "Imported 1 file from Dropbox.": "1 file diimpor dari Dropbox.",
  "Imported {n} files from Dropbox.": "{n} file diimpor dari Dropbox.",
  "Google Drive import failed.": "Gagal mengimpor dari Google Drive.",
  "Dropbox import failed.": "Gagal mengimpor dari Dropbox.",

  // ── Tool workspace, file tray, mobile shell ─────────────────────────────
  "Selected files ({n})": "File terpilih ({n})",
  "Clear": "Bersihkan",
  "Add more files": "Tambah file",
  "Move earlier": "Pindah ke depan",
  "Move later": "Pindah ke belakang",
  "File view": "Tampilan file",
  "Grid view": "Tampilan kotak",
  "List view": "Tampilan daftar",
  "1 image": "1 gambar",
  "{n} images": "{n} gambar",
  "1 file": "1 file",
  "{n} files": "{n} file",
  "Settings": "Pengaturan",
  "Close": "Tutup",
  "Working…": "Memproses…",
  "{label} value": "Nilai {label}",
  "Options": "Opsi",
  "Clear image": "Hapus gambar",
  "Clear files": "Hapus file",
  "Change image": "Ganti gambar",
  "Remove": "Hapus",
  "Download": "Unduh",
  "Download {name}": "Unduh {name}",
  "Download ({size})": "Unduh ({size})",
  "Download all (ZIP)": "Unduh semua (ZIP)",
  "Result": "Hasil",
  "Original": "Asli",
  "Process": "Proses",
  "Processing…": "Memproses…",
  "This is a server-powered tool, so large images may take a few seconds.":
    "Alat ini berjalan di server, jadi gambar besar mungkin butuh beberapa detik.",
  "Please select an image.": "Pilih gambar terlebih dahulu.",
  "Done — your image is ready.": "Selesai — gambar Anda sudah siap.",
  "Processing failed.": "Gagal memproses.",

  // ── Background picker (swatch names are module scope, §4.2) ────────────
  "Background": "Latar belakang",
  "Background (replaces transparency)": "Latar belakang (pengganti transparansi)",
  "Auto — match the image's own edges": "Otomatis — ikuti warna tepi gambar",
  "Auto": "Otomatis",
  "Transparent": "Transparan",
  "Custom": "Kustom",
  "Custom color": "Warna kustom",
  "Custom background color": "Warna latar belakang kustom",
  "White": "Putih",
  "Black": "Hitam",
  "Gray": "Abu-abu",
  "Charcoal": "Arang",
  "Clay": "Terakota",
  "Red": "Merah",
  "Green": "Hijau",
  "Blue": "Biru",

  // ── Converter (ConvertTool) ─────────────────────────────────────────────
  "Converted in your browser — files stay on your device (very large or very high-resolution images are processed on our server).":
    "Dikonversi di browser Anda — file tetap di perangkat Anda (gambar yang sangat besar atau beresolusi sangat tinggi diproses di server kami).",
  "Please select {format} files.": "Pilih file {format}.",
  "Please select image files.": "Pilih file gambar.",
  "Converted 1 image to {format}.": "1 gambar dikonversi ke {format}.",
  "Converted {n} images to {format}.": "{n} gambar dikonversi ke {format}.",
  "Conversion failed.": "Gagal mengonversi.",
  "Conversion settings": "Pengaturan konversi",
  "Conversion Settings": "Pengaturan Konversi",
  "Converting…": "Mengonversi…",
  "Total: {before} → {after}": "Total: {before} → {after}",
  "1 file ready": "1 file siap",
  "{n} files ready — downloads as a ZIP": "{n} file siap — diunduh sebagai ZIP",
  "Convert to {format}": "Konversi ke {format}",
  "Convert {n} to {format}": "Konversi {n} file ke {format}",
  "Output:": "Hasil:",
  "Quality": "Kualitas",
  "Auto-rotate by EXIF orientation": "Putar otomatis sesuai orientasi EXIF",
  "Strip metadata": "Hapus metadata",
  "Remove EXIF, colour profile, camera and location data from the converted image to reduce size.":
    "Hapus EXIF, profil warna, data kamera, dan lokasi dari gambar hasil konversi agar ukurannya lebih kecil.",

  // ── Crop dialog, canvases, effects ──────────────────────────────────────
  "Crop and rotate image": "Crop dan putar gambar",
  "Crop & rotate": "Crop & putar",
  "Cancel": "Batal",
  "Apply": "Terapkan",
  "Free": "Bebas",
  "Rotate left": "Putar ke kiri",
  "Rotate right": "Putar ke kanan",
  "Select whole image": "Pilih seluruh gambar",
  "Reset": "Atur ulang",
  "Output": "Hasil",
  "Couldn't read this image.": "Gambar ini tidak bisa dibaca.",
  "Compare original with result": "Bandingkan asli dengan hasil",
  "Crop area. Drag inside to move, drag a handle to resize, arrow keys to nudge.":
    "Area crop. Seret di dalam untuk memindahkan, seret pegangan untuk mengubah ukuran, tombol panah untuk menggeser sedikit.",
  "Merged image — drag to move, corners to resize, the top handle to rotate":
    "Gambar gabungan — seret untuk memindahkan, sudut untuk mengubah ukuran, pegangan atas untuk memutar",
  "Redaction area. Drag to paint over what you want hidden.":
    "Area sensor. Seret untuk menutupi bagian yang ingin disembunyikan.",
  "Redaction area. Drag to draw a region, click one to select it, drag its handles to resize, Delete to remove, arrow keys to nudge.":
    "Area sensor. Seret untuk menggambar area, klik untuk memilihnya, seret pegangannya untuk mengubah ukuran, Delete untuk menghapus, tombol panah untuk menggeser.",
  "Select your effect": "Pilih efek",
  "Previous effects": "Efek sebelumnya",
  "More effects": "Efek lainnya",
  "No blur": "Tanpa blur",
  "Gaussian": "Gaussian",
  "Colour": "Warna solid",
  "Motion": "Gerak",
  "Radial": "Radial",
  "Pixelate": "Piksel",
  "Glass": "Kaca",
  "Bloom": "Pendar",
  "Trippy waves": "Gelombang",
  "Halftone": "Halftone",
  "Particle": "Partikel",

  // ── Result screen ───────────────────────────────────────────────────────
  "Processing completed!": "Pemrosesan selesai!",
  "Your image is ready for download": "Gambar Anda siap diunduh",
  "Process more images": "Proses gambar lain",
  "Your image": "Gambar Anda",
  "Your images ({n})": "Gambar Anda ({n})",
  "Preparing ZIP…": "Menyiapkan ZIP…",
  "Download all (.zip)": "Unduh semua (.zip)",
  "Download all ({n})": "Unduh semua ({n})",
  "Continue with this file": "Lanjutkan dengan file ini",
  "Share or save this tool": "Bagikan atau simpan alat ini",
  "Copy the link, share on social media, or bookmark the page to find it later.":
    "Salin tautannya, bagikan di media sosial, atau simpan halaman ini sebagai bookmark agar mudah ditemukan lagi.",
  "Copied": "Tersalin",
  "Copy link": "Salin tautan",
  "Couldn't copy the link.": "Tautan tidak bisa disalin.",
  "Share": "Bagikan",
  "Share:": "Bagikan:",
  "(Ctrl + D to bookmark)": "(Ctrl + D untuk bookmark)",
  "Share on X": "Bagikan di X",
  "Share on Facebook": "Bagikan di Facebook",
  "Share on LinkedIn": "Bagikan di LinkedIn",
  "Share on WhatsApp": "Bagikan di WhatsApp",
  "Share on Telegram": "Bagikan di Telegram",
  "I just used {tool} on oMyImage — free, fast, no sign-up.":
    "Saya baru saja memakai {tool} di oMyImage — gratis, cepat, tanpa daftar.",
  "Free image tools on oMyImage.": "Alat gambar gratis di oMyImage.",
  "Enjoyed the result?": "Suka dengan hasilnya?",
  "Share your experience on Trustpilot — it helps a lot.":
    "Ceritakan pengalaman Anda di Trustpilot — itu sangat membantu.",
  "Leave a review": "Tulis ulasan",

  // ── Toasts (sonner's own accessible names — ThemedToaster) ──────────────
  "Notifications": "Notifikasi",
  "Close toast": "Tutup notifikasi",

  // ── Tool cards, favourites ──────────────────────────────────────────────
  "Premium tool": "Alat premium",
  "Premium tool — Free plan includes a limited number per day":
    "Alat premium — paket Free menyertakan jumlah pemakaian terbatas per hari",
  "Runs on our server — {allowance}": "Berjalan di server kami — {allowance}",
  "Added to Favorites": "Ditambahkan ke Favorit",
  "Removed from Favorites": "Dihapus dari Favorit",
  "Add {tool} to favorites": "Tambahkan {tool} ke favorit",
  "Remove {tool} from favorites": "Hapus {tool} dari favorit",

  // ── Legal shell ─────────────────────────────────────────────────────────
  "Continue with Google": "Lanjutkan dengan Google",
  "or|divider": "atau",
  "Legal|section": "Legal",
  "Last updated:": "Terakhir diperbarui:",
  "Contents": "Daftar isi",
  "On this page": "Di halaman ini",
  "Back to top": "Kembali ke atas",

  // ── Errors thrown in lib/ and shown in toasts (src/i18n/errors.ts) ──────
  "Could not download “{name}” from Dropbox.": "Tidak bisa mengunduh “{name}” dari Dropbox.",
  "Could not download “{name}” from Google Drive.": "Tidak bisa mengunduh “{name}” dari Google Drive.",
  "The Dropbox chooser failed to start.": "Pemilih file Dropbox gagal dibuka.",
  "Unsupported image format: {name}": "Format gambar tidak didukung: {name}",
  "No frames found in this GIF.": "Tidak ada frame di GIF ini.",
  "Canvas is not supported in this browser.": "Browser ini tidak mendukung canvas.",
  "Canvas not supported.": "Canvas tidak didukung.",
  "Could not export the image.": "Gambar tidak bisa disimpan.",
  "Add at least one frame.": "Tambahkan minimal satu frame.",
  "Add at least one image.": "Tambahkan minimal satu gambar.",
  "Server error ({status}).": "Kesalahan server ({status}).",
  "Couldn't reach the processing server for this large file.":
    "Tidak bisa terhubung ke server pemrosesan untuk file sebesar ini.",
  "Couldn't reach the processing server.": "Tidak bisa terhubung ke server pemrosesan.",
  "No image selected.": "Belum ada gambar yang dipilih.",
  "The server did not start the job. Please try again.":
    "Server tidak memulai proses. Silakan coba lagi.",
  "Timed out waiting for the server to finish.": "Waktu habis menunggu server selesai.",
  "Upload an image.": "Unggah gambar.",
  "This file is too large.": "File ini terlalu besar.",
  "Too many processing requests. Please wait a moment.":
    "Terlalu banyak permintaan pemrosesan. Mohon tunggu sebentar.",
  "Too many requests. Please slow down and try again shortly.":
    "Terlalu banyak permintaan. Mohon pelan-pelan dan coba lagi sebentar lagi.",
  "Too many requests. Please slow down.": "Terlalu banyak permintaan. Mohon pelan-pelan.",
  "You've hit the hourly processing limit for your network. Please try again later or sign in for higher limits.":
    "Batas pemrosesan per jam untuk jaringan Anda sudah tercapai. Coba lagi nanti, atau masuk untuk batas yang lebih tinggi.",
  "File not found or expired.": "File tidak ditemukan atau sudah kedaluwarsa.",
  "This OCR job was not found or has expired.":
    "Proses OCR ini tidak ditemukan atau sudah kedaluwarsa.",
  "That URL can't be reached — use a public http(s) address.":
    "URL itu tidak bisa dijangkau — gunakan alamat http(s) publik.",
  "Provide a width and/or height.": "Isi lebar dan/atau tinggi.",

  // ── Punctuation ─────────────────────────────────────────────────────────
  // Indonesian ends a sentence the same way English does, so both terminators
  // are deliberately identical to the key — stated rather than left to the
  // fallback, so `i18n:keys id` stays at zero. Hindi maps these to the danda.
  ". |sentence-end": ". ", // i18n-same
  ".|sentence-end": ".", // i18n-same
};
