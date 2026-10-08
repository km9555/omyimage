/**
 * Indonesian home page — HomeShell, HomeLauncher and ToolDirectory, which
 * render only on `/id`. Loaded with that route through HomeShell's
 * <I18nScope>, so this prose is not bundled on every page (common.ts is).
 *
 * The H1 keeps "oMyImage" verbatim (Google's OAuth review matches it against
 * the consent screen) and pairs it with the Indonesian head term rather than a
 * translation of the English brand line — see dictionaries/id/site.ts.
 * "drive.file" is an OAuth scope identifier and is never translated. The
 * Google section is translated faithfully rather than adapted: it is the
 * statement the OAuth review reads.
 *
 * The "Yang bisa Anda lakukan" list names the jobs in Indonesian demand order
 * where the English list has room for it — the AI line opens on hapus
 * background and jadikan foto HD, the two biggest AI queries in this market.
 *
 * The tool count is no longer written out: since 2026-10-08 the About
 * paragraph and the trust strip take it as {n} from liveToolCount(), so it
 * cannot go stale the way «lebih dari tujuh puluh alat» had to be hand-edited.
 */
export const idHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser":
    "Alat gratis — sebagian besar berjalan langsung di browser Anda",
  "Effortless Power for Image Workflows.": "Alat foto online gratis.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "oMyImage adalah kumpulan alat foto online gratis — kompres, ubah ukuran, crop, ubah format, beri watermark, dan edit foto.",
  "Step 1 · Upload your images": "Langkah 1 · Unggah foto Anda",
  "Add images": "Tambah foto",
  "Drag & drop images or click to browse": "Seret dan lepas foto ke sini, atau klik untuk memilih",
  "+ More": "+ Lainnya",
  "Remove {name}": "Hapus {name}",
  "Step 2 · Choose an action": "Langkah 2 · Pilih tindakan",
  "Upload an image first": "Unggah foto terlebih dahulu",
  "Search an action, e.g. compress or resize": "Cari tindakan, misalnya kompres atau ubah ukuran",
  "We can't process this file type yet.": "Kami belum bisa memproses jenis file ini.",
  "No matching action.": "Tidak ada tindakan yang cocok.",
  "Continue": "Lanjutkan",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "Private by default": "Privat sejak awal",
  "Most tools run in your browser, so your images never leave your device.":
    "Sebagian besar alat berjalan di browser, jadi gambar Anda tidak pernah meninggalkan perangkat.",
  "{n} free image tools": "{n} alat gambar gratis",
  "Compress, resize, convert, edit and make GIFs. No account needed.":
    "Kompres, ubah ukuran, ubah format, edit, dan buat GIF. Tanpa akun.",
  "Google Drive import is optional": "Impor dari Google Drive bersifat opsional",
  "oMyImage reads only the files you pick and stores nothing on our servers.":
    "oMyImage hanya membaca file yang Anda pilih dan tidak menyimpan apa pun di server kami.",
  "How we use Google data": "Cara kami menggunakan data Google",
  "Favorites": "Favorit",
  "No tools in {category} yet.": "Belum ada alat di kategori {category}.",
  "Browse all image format converters": "Lihat semua konverter format gambar",
  "All tools": "Semua alat",
  "Tool categories": "Kategori alat",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Cara kerjanya",
  "Upload": "Unggah",
  "Drop in your images or pick them from your device.":
    "Seret foto Anda ke sini atau pilih dari perangkat.",
  "Transform": "Proses",
  "Pick a tool and adjust the settings. The work happens in your browser, or on our servers for the heavier jobs.":
    "Pilih alat dan atur pengaturannya. Prosesnya berjalan di browser Anda, atau di server kami untuk tugas yang lebih berat.",
  "Download|step": "Unduh",
  "Save the result to your device, ready to use.": "Simpan hasilnya ke perangkat, siap dipakai.",
  "About oMyImage": "Tentang oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark, edit and animate images: {n} tools, each one a dedicated page that does one job well.":
    "adalah kumpulan alat gambar online gratis untuk urusan gambar sehari-hari. Satu tempat untuk kompres, ubah ukuran, crop, putar, ubah format, beri watermark, edit, dan animasikan gambar: {n} alat, masing-masing di halamannya sendiri yang mengerjakan satu tugas dengan baik.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files and the heavier AI tools are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "Sebagian besar alat berjalan sepenuhnya di dalam browser: gambar Anda diproses di perangkat Anda sendiri dan tidak pernah diunggah ke mana pun. File yang lebih besar dan alat AI yang lebih berat diproses di server kami lalu dihapus tak lama setelah prosesnya selesai. oMyImage gratis dipakai dan tidak memerlukan akun.",
  "What you can do with oMyImage": "Yang bisa Anda lakukan di oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Kompres gambar JPG, PNG, dan WEBP tanpa penurunan kualitas yang terlihat",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Ubah ukuran, crop, putar, dan beri bingkai — satu file atau sekaligus banyak",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Ubah format antara JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC, dan PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Edit foto: watermark, hitam putih, blur, meme, dan editor lengkap",
  "Make and edit GIFs: build them from images or video, compress, resize, trim, caption and convert to MP4 or WebP":
    "Buat dan edit GIF: dari gambar atau video, kompres, ubah ukuran, potong, beri teks, dan ubah ke MP4 atau WebP",
  "Extract text with OCR, read or strip EXIF metadata, pick colors":
    "Ambil teks dengan OCR, baca atau hapus metadata EXIF, ambil warna",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Alat AI: hapus background, jadikan foto HD, blur wajah demi privasi",
  "How oMyImage uses your Google account": "Cara oMyImage menggunakan akun Google Anda",
  "Connecting Google is optional — every tool on oMyImage works without it. Google is used for two things: signing in, if you choose to create an account, and":
    "Menghubungkan Google bersifat opsional — semua alat di oMyImage berfungsi tanpanya. Google dipakai untuk dua hal: masuk dengan Google, jika Anda memilih membuat akun, dan fitur",
  "Import from Google Drive": "Impor dari Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", yang memungkinkan Anda memilih gambar yang sudah tersimpan di Drive alih-alih mengunggahnya dari perangkat.",
  // HomeShell renders `A{" "}<code>drive.file</code>{" "}B`, so B must not open
  // on punctuation — ". Cakupan…" would print "drive.file . Cakupan". B is a
  // relative clause instead, which is how Indonesian would say it anyway:
  // "…meminta cakupan drive.file yang hanya memberi…".
  "When you use Drive import, oMyImage requests the":
    "Saat Anda mengimpor dari Google Drive, oMyImage meminta cakupan",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "yang hanya memberi aplikasi akses ke file tertentu yang Anda pilih di jendela pemilih file milik Google sendiri — aplikasi tidak bisa melihat, menelusuri, atau mencari isi Drive Anda yang lain. File yang Anda pilih diunduh ke browser Anda untuk alat yang sedang dipakai, dan hanya itu: oMyImage tidak mengubah atau menghapus apa pun di Drive Anda, tidak menyimpan file Google Anda di server kami, tidak memakai data pengguna Google untuk melatih model AI, dan tidak pernah menjual atau membagikannya kepada pihak ketiga.",
  "You can revoke access at any time from your": "Anda bisa mencabut akses kapan saja dari",
  "Google Account permissions page": "halaman izin Akun Google Anda",
  "Contact us": "Hubungi kami",
  // ToolDirectory — the "Sizes and presets" block under the grid (expansion.md Phase 8).
  "Sizes and presets": "Ukuran & Preset",
  "Shortcuts to the tools above, each set up for one job: a photo at exactly 50 KB, a YouTube thumbnail, a passport photo.":
    "Pintasan ke alat di atas, masing-masing diatur untuk satu tugas: foto tepat 50 KB, thumbnail YouTube, pas foto.",
  "Exact file size": "Ukuran file yang pas",
  "Hit the exact size a form or upload asks for":
    "Tepat seukuran yang diminta formulir atau situs",
  "PDF under a size limit": "PDF di bawah batas ukuran",
  "Scans and photos as a PDF that fits an upload cap":
    "Scan dan foto jadi PDF yang muat di batas unggah",
  "Country-standard photo sizes, ready to print":
    "Ukuran pas foto standar berbagai negara, siap cetak",
  "Social and print sizes": "Ukuran media sosial & cetak",
  "Thumbnails, covers and print dimensions, ready to go":
    "Thumbnail, sampul, dan ukuran cetak, siap pakai",
  "AI presets": "Preset AI",
  "Sharpen photos or swap the background in one click":
    "Pertajam foto atau ganti background dalam satu klik",
  "Quick edits": "Edit cepat",
  "Flip, split and other one-step jobs": "Balik, bagi, dan tugas satu langkah lainnya",
  "KB": "KB", // i18n-same
  "MB": "MB", // i18n-same
};
