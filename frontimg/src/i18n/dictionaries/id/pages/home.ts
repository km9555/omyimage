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
 * "over thirty tools" stays «lebih dari tiga puluh alat»: it is still true at
 * forty, and the English source kept it deliberately rather than orphan six
 * locale entries for a claim that is not wrong.
 */
export const idHome: Record<string, string> = {
  // ── HomeLauncher (hero) ─────────────────────────────────────────────────
  "Free tools — most run right in your browser":
    "Alat gratis — sebagian besar berjalan langsung di browser Anda",
  "Effortless Power for Image Workflows.": "Alat foto online gratis.",
  "oMyImage is a free online image toolkit — compress, resize, crop, convert, watermark and edit photos.":
    "oMyImage adalah kumpulan alat foto online gratis — kompres, ubah ukuran, crop, ubah format, beri watermark, dan edit foto.",
  "Most tools run right in your browser, so files never leave your device. No signup.":
    "Sebagian besar alat berjalan langsung di browser, jadi file tidak pernah meninggalkan perangkat Anda. Tanpa daftar.",
  "Step 1 · Upload your images": "Langkah 1 · Unggah foto Anda",
  "Add images": "Tambah foto",
  "Drag & drop images or click to browse": "Seret dan lepas foto ke sini, atau klik untuk memilih",
  "+ More": "+ Lainnya",
  "Remove {name}": "Hapus {name}",
  "Step 2 · Choose an action": "Langkah 2 · Pilih tindakan",
  "Upload an image first": "Unggah foto terlebih dahulu",
  "What do you want to do? — e.g. compress, resize":
    "Apa yang ingin Anda lakukan? — misalnya kompres, ubah ukuran",
  "We can't process this file type yet.": "Kami belum bisa memproses jenis file ini.",
  "No matching action.": "Tidak ada tindakan yang cocok.",
  "Continue": "Lanjutkan",

  // ── ToolDirectory ───────────────────────────────────────────────────────
  "is a free online image toolkit — over thirty tools to compress, resize, crop, convert, watermark and edit images, most running entirely in your browser so your files never leave your device. Importing from Google Drive is optional, reads only the files you pick, and never stores them on our servers.":
    "adalah kumpulan alat gambar online gratis — lebih dari tiga puluh alat untuk kompres, ubah ukuran, crop, ubah format, beri watermark, dan edit gambar. Sebagian besar berjalan sepenuhnya di browser, jadi file Anda tidak pernah meninggalkan perangkat. Impor dari Google Drive bersifat opsional, hanya membaca file yang Anda pilih, dan tidak pernah menyimpannya di server kami.",
  "What is oMyImage?": "Apa itu oMyImage?",
  "How we use Google data": "Cara kami menggunakan data Google",
  "Favorites": "Favorit",
  "No tools in {category} yet.": "Belum ada alat di kategori {category}.",
  "Browse all image format converters": "Lihat semua konverter format gambar",
  // CATEGORY_PILLS (lib/tool-categories.ts — module scope, §4.2). "Optimize",
  // "Convert" and "Image AI" are already in common.ts.
  "All": "Semua",
  "Edit & Create": "Edit & Buat",

  // ── HomeShell ───────────────────────────────────────────────────────────
  "How it works": "Cara kerjanya",
  "Upload": "Unggah",
  "Drag & drop your images securely into our processing engine.":
    "Seret dan lepas foto Anda — foto masuk ke pemrosesan melalui koneksi yang aman.",
  "Transform": "Proses",
  "Pick a tool and let your browser — or our servers — do the heavy lifting.":
    "Pilih alat, dan biarkan browser Anda — atau server kami — mengerjakan bagian beratnya.",
  "Download|step": "Unduh",
  "Get your optimized images back, ready for your workflow.":
    "Ambil kembali foto yang sudah diproses, siap dipakai.",
  "About oMyImage": "Tentang oMyImage",
  "is a free online image toolkit for everyday image work. It gives you a single place to compress, resize, crop, rotate, convert, watermark and edit images — over thirty tools, each one a dedicated page that does one job well.":
    "adalah kumpulan alat gambar online gratis untuk urusan gambar sehari-hari. Satu tempat untuk kompres, ubah ukuran, crop, putar, ubah format, beri watermark, dan edit gambar — lebih dari tiga puluh alat, masing-masing di halamannya sendiri yang mengerjakan satu tugas dengan baik.",
  "Most tools run entirely inside your web browser: your image is processed on your own device and is never uploaded anywhere. Larger files, and the AI tools that need real hardware, are processed on our servers and deleted shortly after the job finishes. oMyImage is free to use and needs no account.":
    "Sebagian besar alat berjalan sepenuhnya di dalam browser: gambar Anda diproses di perangkat Anda sendiri dan tidak pernah diunggah ke mana pun. File yang lebih besar, dan alat AI yang membutuhkan perangkat keras sungguhan, diproses di server kami lalu dihapus tak lama setelah prosesnya selesai. oMyImage gratis dipakai dan tidak memerlukan akun.",
  "What you can do with oMyImage": "Yang bisa Anda lakukan di oMyImage",
  "Compress JPG, PNG and WEBP images without visible quality loss":
    "Kompres gambar JPG, PNG, dan WEBP tanpa penurunan kualitas yang terlihat",
  "Resize, crop, rotate and add borders, in single files or in bulk":
    "Ubah ukuran, crop, putar, dan beri bingkai — satu file atau sekaligus banyak",
  "Convert between JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC and PDF":
    "Ubah format antara JPG, PNG, WEBP, GIF, BMP, AVIF, HEIC, dan PDF",
  "Edit photos: watermark, grayscale, blur, memes and a full editor":
    "Edit foto: watermark, hitam putih, blur, meme, dan editor lengkap",
  "Extract text with OCR, read or strip EXIF metadata, pick colours":
    "Ambil teks dengan OCR, baca atau hapus metadata EXIF, ambil warna",
  "AI tools: remove backgrounds, upscale images, blur faces for privacy":
    "Alat AI: hapus background, jadikan foto HD, blur wajah demi privasi",
  "How oMyImage uses your Google account": "Cara oMyImage menggunakan akun Google Anda",
  "Connecting Google is optional — every tool on oMyImage works without it. It exists for one feature:":
    "Menghubungkan Google bersifat opsional — semua alat di oMyImage berfungsi tanpanya. Fitur ini hanya ada untuk satu hal:",
  "Import from Google Drive": "Impor dari Google Drive",
  ", which lets you pick an image already stored in your Drive instead of uploading it from your device.":
    ", yang memungkinkan Anda memilih gambar yang sudah tersimpan di Drive alih-alih mengunggahnya dari perangkat.",
  // HomeShell renders `A{" "}<code>drive.file</code>{" "}B`, so B must not open
  // on punctuation — ". Cakupan…" would print "drive.file . Cakupan". B is a
  // relative clause instead, which is how Indonesian would say it anyway:
  // "…meminta cakupan drive.file yang hanya memberi…".
  "When you use it, oMyImage requests the": "Saat Anda memakainya, oMyImage meminta cakupan",
  "scope. That scope gives the app access only to the specific files you choose in Google's own file picker — it cannot see, browse or search the rest of your Drive. The file you pick is downloaded into your browser for the tool you are using, and that is all: oMyImage does not modify or delete anything in your Drive, does not store your Google files on our servers, does not use Google user data to train AI models, and never sells or shares it with third parties.":
    "yang hanya memberi aplikasi akses ke file tertentu yang Anda pilih di jendela pemilih file milik Google sendiri — aplikasi tidak bisa melihat, menelusuri, atau mencari isi Drive Anda yang lain. File yang Anda pilih diunduh ke browser Anda untuk alat yang sedang dipakai, dan hanya itu: oMyImage tidak mengubah atau menghapus apa pun di Drive Anda, tidak menyimpan file Google Anda di server kami, tidak memakai data pengguna Google untuk melatih model AI, dan tidak pernah menjual atau membagikannya kepada pihak ketiga.",
  "You can revoke access at any time from your": "Anda bisa mencabut akses kapan saja dari",
  "Google Account permissions page": "halaman izin Akun Google Anda",
  "Contact us": "Hubungi kami",
};
