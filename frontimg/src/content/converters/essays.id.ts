import type { FormatId } from "@/lib/converters/types";

/**
 * Indonesian "what is this format" essays.
 *
 * Each converter page composes the essays for BOTH of its formats, so these
 * carry real weight: they are what keeps two pages sharing a source format
 * from reading as the same page twice (see formats.ts). Only the formats a
 * shipped id pair actually uses are here — the same seven the pt, hi and ru
 * sets cover; `heic`, `tiff` and `ico` fall back to the English essay through
 * `formatEssay()`.
 *
 * Decimal commas and «ribuan» points follow Indonesian convention (1.000,
 * 3,5); format names stay as they are.
 */
export const ID_ESSAYS: Partial<Record<FormatId, string>> = {
  jpg:
    "JPG (juga ditulis JPEG) sudah menjadi format bawaan untuk foto sejak 1992. Kompresinya lossy dan disesuaikan dengan cara kerja penglihatan manusia — membuang detail warna halus yang nyaris tidak ditangkap mata — itulah sebabnya foto yang disimpan sebagai JPG bisa berukuran sepersepuluh dari gambar yang sama dalam PNG. Gantinya, JPG tidak punya kanal transparansi dan setiap kali disimpan ulang kualitasnya sedikit menurun, jadi JPG cocok untuk foto yang sudah jadi, bukan file kerja.",
  png:
    "PNG adalah format lossless yang dibuat pada 1996 sebagai pengganti GIF yang bebas paten. Tidak ada yang dibuang saat PNG mengompres, jadi gambar bisa dibuka dan disimpan ulang berapa kali pun tanpa menurun kualitasnya, dan PNG membawa kanal alfa penuh untuk transparansi bertepi halus. Ketelitian itu memakan tempat: foto yang disimpan sebagai PNG biasanya beberapa kali lebih besar daripada foto yang sama dalam JPG, itulah sebabnya PNG adalah pilihan yang tepat untuk tangkapan layar, logo, dan gambar garis, bukan untuk hasil kamera.",
  webp:
    "WebP adalah format gambar buatan Google tahun 2010, dan istimewanya ia menawarkan mode lossy dan lossless sekaligus, ditambah transparansi, dalam satu wadah. Dalam praktiknya WebP sekitar 25–35% lebih kecil daripada JPG dengan kualitas setara, itulah sebabnya format ini cepat menyebar di web setelah Safari mendukungnya pada 2020. Kelemahannya ada di luar browser: banyak aplikasi desktop, ponsel lama, dan alur kerja cetak yang masih belum bisa membuka file .webp.",
  gif:
    "GIF lahir pada 1987 dan dibatasi palet 256 warna per frame, itulah sebabnya foto yang disimpan sebagai GIF menampakkan pita warna dan dithering yang jelas. GIF bertahan karena dua hal: bisa beranimasi, dan dipahami oleh hampir semua perangkat lunak yang pernah dibuat. Transparansinya biner — sebuah piksel terlihat penuh atau tidak terlihat sama sekali — jadi GIF tidak bisa membuat tepi halus seperti PNG.",
  bmp:
    "BMP adalah format bitmap asli Windows dari Microsoft, dan biasanya disimpan tanpa kompresi sama sekali — setiap piksel ditulis utuh. Foto 12 megapiksel sebagai BMP 24-bit memakan sekitar 36 MB, dibandingkan kira-kira 3 MB sebagai JPG. Format ini masih muncul di utilitas Windows, driver scanner lama, peralatan medis dan industri, serta sebagian sistem tertanam, itulah sebabnya mengubahnya ke format lain adalah kebutuhan umum walaupun hampir tidak ada yang memilihnya dengan sengaja.",
  avif:
    "AVIF membungkus codec video AV1 yang bebas royalti menjadi format gambar diam, dan kompresinya lebih kuat daripada format umum mana pun saat ini — sering kali setengah ukuran JPG dengan kualitas setara, ditambah transparansi dan rentang dinamis tinggi. Browser membukanya dengan baik (Chrome sejak versi 85, Firefox sejak 93, Safari sejak 16.4), tetapi dukungannya cepat menipis di luar browser: banyak aplikasi edit gambar, sistem operasi lama, dan sebagian besar alur kerja cetak masih belum bisa membukanya.",
  jfif:
    "JFIF sebenarnya bukan format tersendiri — singkatan dari JPEG File Interchange Format, dan itulah wadah yang dipakai oleh sebagian besar file yang selama ini Anda sebut JPG. Kebingungannya murni soal ekstensi file. Kombinasi Windows dan Chrome tertentu menyimpan gambar yang diunduh sebagai .jfif, bukan .jpg, dan walaupun isinya JPEG biasa, cukup banyak perangkat lunak yang menolak membukanya hanya karena tidak mengenali ekstensinya.",
};
