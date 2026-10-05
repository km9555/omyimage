import type { ToolPageContent } from "@/content/tools/types";

/** Indonesian copy for /id/ubah-dpi-foto. */
const content: ToolPageContent = {
  toolId: "dpi-converter",
  locale: "id",
  name: "Ubah DPI Foto",
  tagline:
    "Ubah DPI gambar JPG dan PNG ke 300, 200, 72, atau nilai apa pun — hanya label DPI yang berubah, jadi gambarnya tetap persis sama. Banyak file sekaligus, gratis, di browser.",
  category: { id: "optimize", label: "Optimasi" },

  metaTitle: "Ubah DPI Foto ke 300 Online Gratis — DPI Converter | oMyImage",
  metaDescription:
    "Ubah DPI gambar JPG dan PNG ke 300, 200, 72, atau nilai apa pun secara online dan gratis. Hanya DPI yang berubah, kualitas tetap sama. Banyak file, tanpa upload.",

  intro:
    "Percetakan, penerbit, dan sebagian formulir meminta gambar \"300 DPI\", sementara foto dari HP atau screenshot biasanya bertuliskan 72 atau 96 — atau tidak ada sama sekali. Alat Ubah DPI dari oMyImage menulis ulang satu nilai itu di dalam file. Tambahkan gambar JPG atau PNG, pilih DPI-nya, lalu unduh salinan yang piksel, kualitas, dan warnanya persis sama byte demi byte dengan aslinya, hanya kini berlabel resolusi yang Anda butuhkan.",

  sections: [
    {
      heading: "Apa yang sebenarnya diubah DPI",
      id: "what",
      body: [
        "DPI — dots per inch, tepatnya PPI untuk gambar digital — adalah angka yang disimpan di header file. Angka ini tidak menggambarkan isi gambar; ia memberi tahu printer atau program tata letak berapa piksel yang dimuat di setiap inci kertas. Layar mengabaikannya sama sekali, itulah sebabnya foto yang sama tampak identik di website, baik bertuliskan 72 maupun 300.",
        "Karena DPI hanya label, mengubahnya cukup dengan edit kecil di header: kepadatan JFIF pada JPG (dan resolusi EXIF bila ada), atau chunk pHYs pada PNG. Tidak ada yang dikompres ulang, jadi kualitas tidak turun dan ukuran file tetap sama, hanya selisih beberapa byte.",
      ],
    },
    {
      heading: "Bagaimana ukuran cetak ditentukan DPI",
      id: "print-size",
      body: [
        "Ukuran cetak hanyalah jumlah piksel dibagi DPI. Foto 1200 × 1800 piksel berlabel 300 DPI tercetak 10,2 × 15,2 cm (4 × 6 inci). Dengan label 72 DPI, piksel yang sama meminta cetakan 42,3 × 63,5 cm. Saat Anda memilih nilai, alat ini menampilkan ukuran cetak gambar pertama, jadi efeknya terlihat sebelum diunduh.",
        "Karena itu mengubah DPI berguna di program tata letak dan pengolah kata: gambar berlabel 300 DPI masuk ke dokumen dalam ukuran fisik yang dimaksud, bukan tampil sangat besar.",
      ],
    },
    {
      heading: "Kapan Anda butuh 300 DPI",
      id: "when",
      body: [
        "300 DPI adalah standar untuk cetak foto, buku, majalah, dan apa pun yang dilihat dari dekat. 150–200 DPI cukup untuk poster dan cetakan besar yang dilihat dari jauh, dan sebagian formulir meminta tepat 200 atau 300 karena sistemnya memeriksa nilai tersebut. 72 dan 96 DPI adalah kebiasaan lama untuk layar dan hanya penting bila template memintanya.",
        "Kalau percetakan menolak file karena DPI rendah, periksa juga ukuran pikselnya: biasanya maksudnya gambar akan tercetak terlalu besar atau kurang tajam di ukuran yang dipesan, dan itu tidak bisa diperbaiki hanya dengan label baru.",
      ],
    },
    {
      heading: "Mengubah DPI bukan menambah piksel",
      id: "resample",
      body: [
        "Memasang 300 DPI pada gambar kecil tidak membuatnya lebih tajam; gambar itu justru tercetak lebih kecil. Foto 600 × 400 pada 300 DPI hanya tercetak 5,1 × 3,4 cm. Untuk mencetak lebih besar dengan kualitas yang sama, Anda butuh lebih banyak piksel dari sumbernya — file asli atau ekspor beresolusi lebih tinggi — bukan angka lebih besar di header.",
        "Bila Anda butuh ukuran fisik yang tepat, pakai Ubah Ukuran Foto dalam cm: alat itu menghitung piksel untuk ukuran dalam sentimeter, milimeter, atau inci pada DPI Anda dan sekaligus menyimpan DPI di file.",
      ],
    },
    {
      heading: "File apa yang bisa menyimpan DPI",
      id: "formats",
      body: [
        "JPG dan PNG punya tempat baku untuk DPI, dan file tersebut diubah langsung. File WEBP, GIF, dan BMP diubah dulu menjadi PNG — tanpa kehilangan kualitas, setiap piksel tetap utuh — karena PNG bisa menyimpan nilainya dan diterima di mana pun DPI diperlukan. Nama file hasil unduhan diakhiri nilai barunya, misalnya foto_300dpi.jpg.",
      ],
    },
    {
      heading: "DPI untuk pas foto dan berkas lamaran",
      id: "documents",
      body: [
        "Studio foto dan layanan cetak biasanya meminta pas foto dalam 300 DPI: pada nilai itu pas foto 3 × 4 cm berukuran 354 × 472 piksel dan tercetak tepat di ukurannya. Kalau ukuran pikselnya sudah benar, cukup ganti labelnya di sini; kalau belum, atur dulu ukurannya dalam cm.",
      ],
    },
  ],

  howToTitle: "Cara mengubah DPI foto",
  steps: [
    { title: "Tambahkan gambar", description: "Pilih satu atau banyak gambar JPG atau PNG; WEBP, GIF, dan BMP juga diterima." },
    { title: "Pilih DPI", description: "Pilih 300, 200, 150, 96, atau 72, atau ketik nilai apa pun, lalu cek ukuran cetaknya." },
    { title: "Unduh", description: "Satu gambar langsung terunduh; beberapa gambar terunduh bersama dalam ZIP." },
  ],

  features: [
    { icon: "high_quality", title: "Tanpa turun kualitas", description: "Hanya nilai DPI di header yang berubah; pikselnya tidak disentuh." },
    { icon: "burst_mode", title: "Banyak file sekaligus", description: "Atur DPI satu folder gambar dalam sekali proses." },
    { icon: "lock", title: "Di browser Anda", description: "Gambar Anda diubah di perangkat sendiri dan tidak pernah di-upload." },
  ],

  faqs: [
    { q: "Bagaimana mengubah gambar jadi 300 DPI?", a: "Tambahkan gambar, pilih 300, lalu klik Ubah DPI. Salinan yang terunduh berlabel 300 DPI dengan piksel yang persis sama." },
    { q: "Apakah mengubah DPI menurunkan kualitas?", a: "Tidak. Hanya satu angka di header file yang berubah. Tidak ada yang dikompres ulang, jadi kualitas dan ukuran file tetap sama." },
    { q: "Apakah 300 DPI membuat foto lebih tajam?", a: "Tidak. DPI menentukan seberapa besar gambar tercetak, bukan seberapa banyak detailnya. DPI lebih tinggi pada piksel yang sama menghasilkan cetakan lebih kecil, bukan lebih tajam." },
    { q: "DPI berapa untuk mencetak?", a: "300 DPI untuk foto dan dokumen yang dilihat dari dekat; 150–200 untuk poster dan cetakan besar yang dilihat dari jauh." },
    { q: "Kenapa gambar saya 72 atau 96 DPI?", a: "HP, screenshot, dan banyak aplikasi menyimpan 72 atau 96, atau tanpa nilai, lalu program menganggapnya salah satu dari itu. Ini hanya penting saat mencetak." },
    { q: "Apakah DPI penting untuk website atau media sosial?", a: "Tidak. Layar menampilkan piksel dan mengabaikan nilai DPI sepenuhnya." },
    { q: "Bisakah mengubah DPI WEBP atau GIF?", a: "Bisa. File itu diubah ke PNG tanpa kehilangan piksel, lalu PNG-nya diberi DPI pilihan Anda." },
    { q: "Bagaimana mengecek DPI setelah diubah?", a: "Pakai Cek DPI Foto, atau buka properti file: di Windows, tab Details menampilkan resolusi horizontal dan vertikal." },
    { q: "Bisakah mengubah DPI banyak gambar sekaligus?", a: "Bisa. Tambahkan semuanya; masing-masing diberi DPI yang sama dan diunduh bersama dalam ZIP." },
    { q: "Apakah gambar saya di-upload?", a: "Tidak. DPI diubah sepenuhnya di browser Anda." },
  ],

  security:
    "Gambar Anda diubah sepenuhnya di browser — hanya bagian DPI di setiap file yang ditulis ulang. Tidak ada yang di-upload, disimpan, atau dilacak.",

  ui: {
    // DpiTool.tsx — shared with dpi-checker, whose module reuses this block.
    "or drop JPG, PNG, WEBP, GIF or BMP images here": "atau lepaskan gambar JPG, PNG, WEBP, GIF, atau BMP di sini",
    "Change DPI": "Ubah DPI",
    "Change DPI of {n} images": "Ubah DPI {n} gambar",
    "Changed the DPI of 1 image.": "DPI 1 gambar sudah diubah.",
    "Changed the DPI of {n} images.": "DPI {n} gambar sudah diubah.",
    "DPI": "DPI", // i18n-same
    "DPI check": "Cek DPI",
    "DPI settings": "Pengaturan DPI",
    "DPI only tells a printer how large to print the pixels. It never changes the pixels themselves.":
      "DPI hanya memberi tahu printer seberapa besar piksel dicetak. DPI tidak pernah mengubah pikselnya.",
    "For a sharp print, divide the pixels by 300: that is the largest size in inches that prints at photo quality.":
      "Untuk cetakan tajam, bagi jumlah piksel dengan 300: hasilnya ukuran terbesar dalam inci dengan kualitas foto.",
    "Enter a DPI of at least 1.": "Masukkan DPI minimal 1.",
    "First image prints at {size}": "Gambar pertama tercetak berukuran {size}",
    "Most programs then assume 72 or 96 DPI.": "Dalam hal itu, kebanyakan program menganggapnya 72 atau 96 DPI.",
    "New DPI": "DPI baru",
    "No DPI": "Tanpa DPI",
    "Not set": "Tidak diatur",
    "Only the DPI label changes — the pixels and quality stay exactly the same.":
      "Hanya label DPI yang berubah — piksel dan kualitas tetap persis sama.",
    "Print size": "Ukuran cetak",
    "Saving…": "Menyimpan…",
    "Sharp at 300 DPI": "Tajam pada 300 DPI",
    "This format can't be read for DPI": "DPI format ini tidak bisa dibaca",
    "WEBP, GIF and BMP files are saved as PNG, because only JPG and PNG can store a DPI.":
      "File WEBP, GIF, dan BMP disimpan sebagai PNG, karena hanya JPG dan PNG yang bisa menyimpan DPI.",
    "Where": "Lokasi",
    "Your images are changed in your browser and never uploaded.": "Gambar Anda diubah di browser dan tidak pernah di-upload.",
    "Your images are read in your browser and never uploaded.": "Gambar Anda dibaca di browser dan tidak pernah di-upload.",
    "{dpi} DPI": "{dpi} DPI", // i18n-same
    "{x} × {y} DPI": "{x} × {y} DPI", // i18n-same
    "{w} × {h} cm ({wi} × {hi} in)": "{w} × {h} cm ({wi} × {hi} inci)",
    // SOURCE_LABEL (module scope)
    "Stored in the JFIF header": "Tersimpan di header JFIF",
    "Stored in the EXIF data": "Tersimpan di data EXIF",
    "Stored in the PNG pHYs chunk": "Tersimpan di chunk pHYs PNG",
    "Stored in the BMP header": "Tersimpan di header BMP",
    "Only an aspect ratio is stored, not a DPI": "Hanya rasio aspek yang tersimpan, bukan DPI",
    "No DPI stored": "Tidak ada DPI tersimpan",
  },
};

export default content;
