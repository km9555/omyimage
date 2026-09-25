import type { Dict } from "@/i18n/t";

/**
 * Indonesian strings for /id/konverter-gambar (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own chrome
 * and its FAQ. The hub ships after the converter batches (5 and 6), so every
 * card on it links to a live /id pair.
 *
 * «Ubah dari {format}» / «ke {format}»: {format} is always a format name,
 * which Indonesian never inflects. {n} is the live converter count; one form
 * covers every number.
 */
export const idImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} konverter format, masing-masing dibuat untuk satu pasangan tertentu, bukan satu menu tarik-turun untuk semuanya. Pilih format file Anda di bawah. Semuanya gratis, bisa sekaligus banyak, dan berjalan di browser Anda — kecuali formatnya memang tidak memungkinkan.",
  "Convert from {format}": "Ubah dari {format}",
  "to {format}": "ke {format}",
  "Frequently asked questions": "Pertanyaan yang sering diajukan",

  "Which image format should I convert to?": "Sebaiknya diubah ke format apa?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "JPG untuk foto yang harus bisa dibuka di mana saja — termasuk formulir online yang hanya menerima JPG/JPEG. PNG saat Anda butuh transparansi atau file lossless untuk terus diedit. WebP saat tujuannya halaman web dan Anda ingin file terkecil yang tetap mendukung transparansi. AVIF lebih kecil lagi, tetapi jauh lebih sedikit aplikasi yang bisa membukanya.",
  "Do these converters upload my images?": "Apakah konverter ini mengunggah gambar saya?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Hampir semuanya berjalan sepenuhnya di dalam browser Anda, jadi gambar tidak pernah meninggalkan perangkat. Pengecualiannya adalah format yang tidak bisa dibuka atau dibuat browser sendiri — HEIC yang utama — dan halaman-halaman itu menyatakannya secara langsung.",
  "Can I convert several files at once?": "Bisakah beberapa file dikonversi sekaligus?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Bisa. Setiap konverter di sini menerima banyak file sekaligus: tambahkan sebanyak yang Anda mau dan semuanya kembali dalam satu ZIP, bukan diunduh satu per satu.",
  "Is there a file size limit?": "Apakah ada batas ukuran file?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "Tidak ada batas pasti. Gambar yang sangat besar atau beresolusi sangat tinggi diserahkan ke server kami di kebanyakan konverter, karena tab browser tidak bisa menggambar canvas melebihi ukuran tertentu — foto ponsel 48 megapiksel mencapai batas itu walaupun ukurannya hanya beberapa megabyte. BMP adalah pengecualian dan selalu dikonversi secara lokal.",
  "Do I lose quality when converting?": "Apakah kualitasnya turun saat dikonversi?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Tergantung tujuannya. PNG bersifat lossless, jadi tidak ada yang hilang di langkah itu. JPG, WebP, dan AVIF bersifat lossy dan menyimpan ulang gambarnya, walaupun pada pengaturan kualitas yang wajar perubahannya tidak terlihat. Mengonversi berulang kali di antara format lossy memang menumpuk kerusakan, jadi konversikan sekali dari file asli terbaik yang Anda punya.",
};
