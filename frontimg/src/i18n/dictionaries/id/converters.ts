import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for the DATA-DRIVEN converter pages (conversion.md §6.4).
 *
 * These are the sentences `lib/converters/copy.ts` builds from — steps,
 * features, boilerplate FAQs, the security note — plus ConverterPage's own
 * chrome. The per-pair prose lives in `src/content/converters/<slug>.id.ts`.
 *
 * A CONDITIONAL TAIL IS A WHOLE KEY, never a fragment. copy.ts picks between
 * two complete sentences depending on whether a pair offloads big files to the
 * server, so both variants appear here in full.
 *
 * Placeholders `{from} {to} {offload} {mb} {name}` travel unchanged; `{from}`
 * and `{to}` are format names (JPG, WEBP, AVIF).
 *
 * The {offload} fragment is interpolated into three sentences — after
 * «kecuali», after «adalah», and as the subject before «diproses». Indonesian
 * does not inflect, so one noun phrase fits all three; it is worded to match
 * ConvertTool's own privacy note in common.ts, which a visitor sees on the
 * same page.
 *
 * Verbs: «ubah … ke …» in headings (the phrase Indonesians search — «ubah foto
 * ke jpg» 22,200 vs «konversi ke jpg» 880), «Konversi» on the button, because
 * that is what the button already says.
 */
export const idConverters: Dict = {
  // ── copy.ts: the offload fragment, interpolated into several sentences ──
  "very large or very high-resolution images":
    "gambar yang sangat besar atau beresolusi sangat tinggi",

  // ── copy.ts: buildSteps ─────────────────────────────────────────────────
  "Add your {from} files": "Tambahkan file {from} Anda",
  "Drag {from} images onto the drop zone or click to browse. Add as many as you like — they queue up together.":
    "Seret gambar {from} ke area unggah atau klik untuk memilih. Tambahkan sebanyak yang Anda mau — semuanya masuk antrean bersama.",
  "Choose your quality": "Pilih kualitasnya",
  "Drag the quality slider to trade file size against detail.":
    "Geser penggeser kualitas untuk menyeimbangkan ukuran file dan detail.",
  "Because {to} has no transparency, you can also pick the colour that fills transparent areas.":
    "Karena {to} tidak punya transparansi, Anda juga bisa memilih warna yang mengisi area transparan.",
  "The default suits most images — raise it for detailed photographs.":
    "Nilai bawaannya cocok untuk kebanyakan gambar — naikkan untuk foto yang penuh detail.",
  "Check the settings": "Periksa pengaturannya",
  "{to} output is lossless and keeps transparency, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Hasil {to} bersifat lossless dan mempertahankan transparansi, jadi tidak ada yang perlu diatur. Putar otomatis membaca orientasi EXIF agar foto tegak tidak jadi miring.",
  "{to} output is lossless, so there is nothing to configure. Auto-rotate reads EXIF orientation so portrait photos stay upright.":
    "Hasil {to} bersifat lossless, jadi tidak ada yang perlu diatur. Putar otomatis membaca orientasi EXIF agar foto tegak tidak jadi miring.",
  "Convert and download": "Konversi dan unduh",
  "Press Convert. A single file downloads as {to} straight away; several arrive together in one ZIP.":
    "Tekan tombol Konversi. Satu file langsung terunduh sebagai {to}; beberapa file datang bersama dalam satu ZIP.",

  // ── copy.ts: buildFeatures ──────────────────────────────────────────────
  "Batch {from} → {to}": "{from} → {to} sekaligus banyak",
  "Convert a whole folder in one pass. Multiple files come back as a single ZIP, so there is no download-one-at-a-time slog.":
    "Konversi satu folder penuh dalam sekali jalan. Banyak file kembali sebagai satu ZIP, jadi tidak perlu mengunduh satu per satu.",
  "Transparency survives": "Transparansi tetap terjaga",
  "Transparent areas in your {from} stay transparent in the {to} — no white box behind the image.":
    "Area transparan di {from} Anda tetap transparan di {to} — tanpa kotak putih di belakang gambar.",
  "You pick the background": "Anda yang memilih latarnya",
  "{to} cannot store transparency, so anything see-through has to be filled. Choose the colour instead of being handed white.":
    "{to} tidak bisa menyimpan transparansi, jadi apa pun yang tembus pandang harus diisi. Pilih sendiri warnanya, alih-alih langsung diberi putih.",
  "Quality you control": "Kualitas di tangan Anda",
  "Lossless output": "Hasil lossless",
  "A quality slider rather than a fixed preset, so you decide where the size-versus-detail line sits.":
    "Penggeser kualitas, bukan preset yang kaku, jadi Anda yang menentukan titik tengah antara ukuran dan detail.",
  "{to} is lossless — the converted image is pixel-for-pixel what went in.":
    "{to} bersifat lossless — gambar hasil konversi sama persis, piksel demi piksel, dengan yang masuk.",
  "No software to install": "Tanpa memasang aplikasi",
  "Nothing to download and no account to create. Files are sent over HTTPS, converted, and deleted from the server afterwards.":
    "Tidak ada yang perlu diunduh dan tidak perlu membuat akun. File dikirim melalui HTTPS, dikonversi, lalu dihapus dari server.",
  "Private by default": "Privat sejak awal",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded unless one is among the {offload}.":
    "Konversi berjalan di dalam tab browser Anda. File {from} Anda tidak pernah diunggah, kecuali {offload}.",
  "The conversion runs inside your browser tab. Your {from} files are never uploaded.":
    "Konversi berjalan di dalam tab browser Anda. File {from} Anda tidak pernah diunggah.",

  // ── copy.ts: buildBoilerplateFaqs ───────────────────────────────────────
  "What happens to my files?": "Apa yang terjadi pada file saya?",
  "This conversion needs a server, because browsers cannot handle {from} decoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Konversi ini memerlukan server, karena browser tidak bisa membuka (mendekode) {from} sendiri. File dikirim melalui koneksi HTTPS yang terenkripsi, dikonversi, lalu dihapus — tidak pernah dipakai untuk hal lain.",
  "This conversion needs a server, because browsers cannot handle {to} encoding on their own. Files travel over an encrypted HTTPS connection, are converted, and are deleted afterwards — they are never used for anything else.":
    "Konversi ini memerlukan server, karena browser tidak bisa membuat (mengodekan) {to} sendiri. File dikirim melalui koneksi HTTPS yang terenkripsi, dikonversi, lalu dihapus — tidak pernah dipakai untuk hal lain.",
  "Are my images uploaded anywhere?": "Apakah gambar saya diunggah ke suatu tempat?",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer. The one exception is images too big for a browser tab to paint — either over {mb} MB, or too many megapixels for its canvas, which a modern phone photo can reach at just a few MB. Those are sent over HTTPS to our server and deleted after conversion, and the tool tells you when it happens.":
    "Tidak. Konversi {from} ke {to} berjalan sepenuhnya di dalam tab browser Anda, jadi data gambar tidak pernah meninggalkan komputer Anda. Satu-satunya pengecualian adalah gambar yang terlalu besar untuk digambar oleh tab browser — entah lebih dari {mb} MB, atau megapikselnya terlalu banyak untuk canvas, yang bisa dicapai foto ponsel modern walau ukurannya hanya beberapa MB. Gambar seperti itu dikirim melalui HTTPS ke server kami dan dihapus setelah dikonversi, dan alat ini memberi tahu Anda saat hal itu terjadi.",
  "No. {from} to {to} runs entirely inside your browser tab, so the image data never leaves your computer.":
    "Tidak. Konversi {from} ke {to} berjalan sepenuhnya di dalam tab browser Anda, jadi data gambar tidak pernah meninggalkan komputer Anda.",
  "How many {from} files can I convert at once?":
    "Berapa banyak file {from} yang bisa dikonversi sekaligus?",
  "There is no fixed limit. Add a large batch and they are processed one after another, then delivered as a single ZIP. Very large batches simply take longer — the tab stays responsive throughout.":
    "Tidak ada batas tetap. Tambahkan banyak file sekaligus dan semuanya diproses satu per satu, lalu dikirim sebagai satu ZIP. Kumpulan yang sangat besar hanya butuh waktu lebih lama — tab tetap responsif selama prosesnya.",
  "Is there a watermark, sign-up or payment?": "Apakah ada watermark, pendaftaran, atau biaya?",
  "None of the three. There is no account, no watermark on the output and no charge. The converted file is exactly the image you converted.":
    "Tidak ada satu pun. Tanpa akun, tanpa watermark pada hasilnya, dan tanpa biaya. File hasil konversi adalah persis gambar yang Anda konversi.",
  "Does this work on a phone?": "Apakah ini bisa dipakai di ponsel?",
  "Yes. The converter works in mobile browsers on both iOS and Android — you can pick images straight from your camera roll and the download lands in your usual downloads folder.":
    "Bisa. Konverter ini berjalan di browser ponsel, baik iOS maupun Android — Anda bisa memilih gambar langsung dari galeri, dan hasilnya masuk ke folder unduhan seperti biasa.",

  // ── copy.ts: buildSecurity / buildPrivacyNote ───────────────────────────
  "{from} to {to} is one of the few conversions that cannot run in a browser, so your file is sent to our server to be processed. The transfer is encrypted with HTTPS, the file is converted immediately, and it is deleted afterwards. Nothing is kept, indexed or used for training.":
    "{from} ke {to} adalah salah satu dari sedikit konversi yang tidak bisa berjalan di browser, jadi file Anda dikirim ke server kami untuk diproses. Pengirimannya dienkripsi dengan HTTPS, file langsung dikonversi, lalu dihapus. Tidak ada yang disimpan, diindeks, atau dipakai untuk melatih model.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted. The sole exception is {offload}: they exceed what a browser tab can process, so they are sent over HTTPS, converted and deleted.":
    "Gambar Anda tetap di perangkat Anda. Konversi {from} ke {to} terjadi sepenuhnya di dalam browser — tidak ada tahap unggah, tidak ada salinan di server, dan tidak ada catatan tentang apa yang Anda konversi. Satu-satunya pengecualian adalah {offload}: gambar seperti itu melebihi kemampuan tab browser, jadi dikirim melalui HTTPS, dikonversi, lalu dihapus.",
  "Your images stay on your device. {from} to {to} conversion happens entirely inside your browser — there is no upload step, no copy on a server and no record of what you converted.":
    "Gambar Anda tetap di perangkat Anda. Konversi {from} ke {to} terjadi sepenuhnya di dalam browser — tidak ada tahap unggah, tidak ada salinan di server, dan tidak ada catatan tentang apa yang Anda konversi.",
  "Converted on our server over an encrypted connection — files are deleted right after.":
    "Dikonversi di server kami melalui koneksi terenkripsi — file langsung dihapus setelahnya.",
  "Converted in your browser — files stay on your device ({offload} are processed on our server).":
    "Dikonversi di browser Anda — file tetap di perangkat Anda ({offload} diproses di server kami).",
  "Converted in your browser — your images never leave your device.":
    "Dikonversi di browser Anda — gambar Anda tidak pernah meninggalkan perangkat.",

  // ── ConverterPage chrome ────────────────────────────────────────────────
  "Why convert {from} to {to}?": "Kenapa mengubah {from} ke {to}?",
  "{from} and {to}, briefly": "Sekilas tentang {from} dan {to}",
  "How to convert {from} to {to}": "Cara mengubah {from} ke {to}",
  "Going the other way?": "Perlu ke arah sebaliknya?",
  "Convert {name}": "Konversi {name}",
  "or drop {from} images here": "atau letakkan gambar {from} di sini",
};
