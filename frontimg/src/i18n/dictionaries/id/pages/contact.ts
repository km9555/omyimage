import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/kontak (ContactBody).
 *
 * The support address itself is never translated, and neither are the legal
 * page names in the footer — those are links whose labels come from this file
 * so they read as the Indonesian pages they point at.
 *
 * {n} is the live tool count (LIVE_TOOL_COUNT); Indonesian does not inflect
 * for number, so one form covers every count.
 *
 * ONE DELIBERATE DIFFERENCE from the English: the "Are my images uploaded?"
 * answer lists every server path the site actually has. English names large
 * images, the AI tools and HEIC; image-to-text (server-first OCR) and
 * html-to-image also upload, and their own Indonesian pages say so — a
 * contact page that contradicted them would be the wrong one to trust.
 */
export const idContact: Dict = {
  "Contact": "Kontak",
  "Get in touch": "Hubungi kami",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "Kami membaca semua pesan yang masuk dan biasanya membalas dalam dua hari kerja. Besar kemungkinan jawabannya sudah ada di bawah.",

  // Channels
  "Support & bug reports": "Bantuan & laporan bug",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "Ada yang tidak berfungsi, atau sebuah alat memberi hasil yang aneh? Beri tahu kami alatnya, browser Anda, dan hasil yang Anda harapkan — biasanya itu sudah cukup bagi kami untuk mereproduksinya.",
  "Privacy & legal": "Privasi & hukum",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Pertanyaan tentang cara data Anda ditangani, permintaan penghapusan konten, atau apa pun yang berkaitan dengan ketentuan kami.",
  "Business & partnerships": "Bisnis & kerja sama",
  "Bulk use, integrations, or anything commercial.": "Pemakaian dalam jumlah besar, integrasi, atau apa pun yang bersifat komersial.",

  // No-form note
  "Why there's no contact form:": "Kenapa tidak ada formulir kontak:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "formulir berarti mengumpulkan dan menyimpan data Anda di server kami. Email menjaganya tetap di antara Anda dan kami — tidak ada apa pun tentang Anda yang disimpan di {site}.",

  // FAQ
  "Before you write": "Sebelum menulis",
  "Is oMyImage free?": "Apakah oMyImage gratis?",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "Ya. Semua {n} alat gratis dipakai tanpa akun. Paket berbayar direncanakan untuk file yang lebih besar dan lebih banyak pemakaian AI, tetapi saat ini tidak ada yang berbayar.",
  "Are my images uploaded?": "Apakah gambar saya diunggah?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "Untuk sebagian besar alat, tidak — alat berjalan sepenuhnya di browser Anda dan file tidak pernah meninggalkan perangkat. Unggahan hanya terjadi untuk gambar yang terlalu besar untuk tab browser, alat AI, konversi HEIC, pengenalan teks (Gambar ke Teks), dan HTML ke Gambar. Masing-masing menyatakannya di halamannya sendiri.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "Kenapa konversi HEIC mengunggah foto saya, padahal alat lain tidak?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Membuka HEIC memerlukan pustaka yang tidak boleh kami kirim ke browser berdasarkan lisensinya, jadi konversi yang satu itu harus berjalan di server kami. Filenya dihapus dalam waktu sekitar satu jam.",
  "How long do you keep processed files?": "Berapa lama file yang diproses disimpan?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Hasil yang diproses di server dihapus otomatis dalam waktu sekitar satu jam. Kami tidak menyimpan cadangan dan tidak pernah memakai ulang gambar Anda.",
  "A tool says it isn't enabled on this server.": "Sebuah alat menyatakan belum aktif di server ini.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "Itu adalah alat AI atau konversi HEIC yang memberi tahu bahwa mesinnya belum terpasang di backend. Itu kondisi pemasangan server, bukan kesalahan pada file Anda.",
  "Can I use the output commercially?": "Bolehkah hasilnya dipakai untuk keperluan komersial?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Boleh. Gambar Anda tetap milik Anda, dan apa pun yang Anda hasilkan boleh dipakai untuk tujuan apa pun yang sah.",

  // Footer links
  "Privacy Policy": "Kebijakan Privasi",
  "Terms of Service": "Syarat dan Ketentuan",
  "Refund Policy": "Kebijakan Pengembalian Dana",
  "Pricing": "Harga",
};
