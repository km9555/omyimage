import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/blur-foto.
 *
 * Measured (Indonesia, per month): blur foto 14,800, KD 0. The loanword is the
 * head term, so «blur» is the name, the button and the noun; where prose needs
 * a conjugated verb it uses the native «memburamkan», and toasts use the
 * everyday «di-blur». «buramkan foto» and «blur background» are in aliases.ts.
 *
 * Redaction examples are the Indonesian ones: NIK on a KTP, a bank account
 * number, a number plate, a home address — the things people blur before
 * sharing a photo of a document or a street.
 *
 * WORD ORDER. The invert control composes as `A <em>B</em> C`. Indonesian is
 * SVO like English, so it maps straight through: «Blur semua kecuali area ini».
 * "Draw" avoids «gambar» (it is also the word for image), as in image-editor.
 */
const content: ToolPageContent = {
  toolId: "blur-image",
  locale: "id",
  name: "Blur Foto",
  tagline:
    "Blur foto secara online dengan blur Gaussian yang bisa diatur, pratinjau langsung, dan banyak foto sekaligus — seluruh foto atau hanya bagian tertentu. Gratis, cepat, dan privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Blur Foto Online Gratis — Blur Background & Sensor Bagian Foto | oMyImage",
  metaDescription:
    "Blur foto online gratis: blur seluruh foto atau hanya area yang Anda pilih, blur background agar objek menonjol, atau sensor NIK dan plat nomor. Di browser, tanpa daftar, tanpa watermark.",

  intro:
    "Lembutkan latar belakang, samarkan informasi pribadi, atau buat efek kaca buram. Alat Blur Foto ini menerapkan blur Gaussian yang halus pada foto Anda langsung di browser, dengan penggeser untuk mengatur kekuatannya dan pratinjau yang langsung terlihat. Blur seluruh foto, hanya area yang Anda buat, atau justru semua kecuali area itu — untuk satu foto atau banyak sekaligus, lalu langsung unduh. Tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Cara kerja blur Gaussian",
      id: "how",
      body: [
        "Setiap piksel hasil diganti dengan rata-rata berbobot dari piksel di sekitarnya, dengan tetangga yang dekat dihitung lebih berat daripada yang jauh. Bobotnya mengikuti kurva lonceng — dari situlah namanya — dan itulah yang membuat hasilnya terlihat lembut secara alami, bukan tercoreng ke satu arah.",
        "Radius menentukan seberapa jauh perataan itu menjangkau. Radius kecil hanya mencampur tetangga terdekat dan sekadar menghaluskan tepi; radius besar menarik piksel dari seluruh bingkai dan meleburkan gambar menjadi bidang-bidang warna. Hubungannya tidak linear — menggandakan radius memberi efek yang jauh lebih dari dua kali lipat.",
        "Karena operasi ini mengganti nilai piksel alih-alih menutupinya, sifatnya merusak. Itu kekurangan saat Anda melembutkan foto demi efek, dan justru itulah intinya saat Anda menyembunyikan sesuatu.",
      ],
    },
    {
      heading: "Blur untuk menyensor informasi",
      id: "redaction",
      body: [
        "Sebelum membagikan foto KTP, buku tabungan, atau jalan di depan rumah, ada hal yang sebaiknya tidak ikut terlihat: NIK, nomor rekening, plat nomor kendaraan, alamat. Kotak hitam yang digambar di aplikasi edit terasa seperti sensor, tetapi kalau filenya menyimpan layer, kotak itu bisa digeser — dan bahkan setelah diratakan, kotak itu mengumumkan bahwa ada yang disembunyikan. Blur menghapus informasinya, bukan menutupinya: setelah diekspor, angka dan hurufnya tidak bisa dipulihkan karena memang tidak lagi terekam di pikselnya.",
        "Aturan praktisnya: nilai hasilnya dengan zoom penuh, bukan di pratinjau kecil. Blur yang tampak meyakinkan di ukuran thumbnail bisa menyisakan teks yang masih jelas terbaca saat fotonya dibuka dengan benar. Kalau Anda masih bisa membacanya, orang lain juga bisa.",
        "Untuk menyensor satu bagian saja, pilih Sebagian dan seret kotak atau elips di atas area itu — sisanya tetap tajam. Untuk menyamarkan wajah, alat Blur Wajah menambahkan deteksi wajah otomatis.",
      ],
    },
    {
      heading: "Latar untuk teks",
      id: "backgrounds",
      body: [
        "Teks di atas foto sering sulit dibaca, karena gambar di bawahnya punya tepi dan kontras yang bersaing dengan bentuk hurufnya. Memburamkan latar adalah solusi standar — foto tetap memberi warna, suasana, dan konteks, tetapi tidak ada yang melawan tulisannya.",
        "Itulah sebabnya gambar buram ada di mana-mana di belakang judul, layar login, bagian hero situs web, dan slide judul presentasi. Blurnya perlu lebih kuat daripada dugaan kita: kalau masih ada tepi yang bisa dikenali, tepi itu akan muncul di belakang sebuah huruf dan membuatnya lebih sulit dibaca.",
        "Blur juga mengecilkan ukuran file, efek samping yang berguna untuk gambar latar selebar layar yang biasanya jadi salah satu elemen terberat di halaman.",
      ],
    },
    {
      heading: "Meniru ruang tajam yang sempit (bokeh)",
      id: "depth",
      body: [
        "Kamera dengan bukaan lebar membuat latar belakang tidak fokus sehingga objek menonjol. Kamera ponsel menirunya dengan mode potret, dan efek serupa bisa dibuat belakangan: pilih Sebagian, buat area di atas objek, lalu centang \"Blur semua kecuali area ini\" — latar menjadi buram dan objeknya tetap tajam. Cara ini banyak dipakai untuk foto produk jualan online yang latarnya ramai.",
        "Catatan jujurnya: blur yang seragam bukanlah yang dilakukan lensa. Ketidakfokusan optik yang asli bertambah seiring jarak, jadi foto dengan ruang tajam sempit makin lembut ke arah belakang, sedangkan blur yang seragam sama lembutnya di mana-mana. Gunakan efek ringan dan hasilnya meyakinkan; kalau terlalu kuat, akan terlihat apa adanya.",
      ],
    },
  ],

  howToTitle: "Cara blur foto",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Atur kekuatannya", description: "Geser penggeser blur dan lihat pratinjaunya langsung berubah. Pilih Sebagian kalau hanya ingin memburamkan area tertentu." },
    { title: "Terapkan & unduh", description: "Klik Blur — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "lens_blur", title: "Seluruh foto atau sebagian", description: "Lembutkan seluruh foto, atau buat area yang ingin diburamkan — atau balik, dan buramkan semua kecuali area itu agar objek tetap tajam." },
    { icon: "gradient", title: "Blur, pikselasi, atau blok warna", description: "Blur halus dari kabut tipis 1px sampai blur Gaussian 50px yang tebal, beralih ke pikselasi kotak-kotak, atau tutup area sepenuhnya dengan warna." },
    { icon: "burst_mode", title: "Banyak foto sekaligus", description: "Terapkan blur yang sama ke banyak foto JPG, PNG, atau WEBP sekaligus dan unduh semuanya dalam satu ZIP." },
    { icon: "lock", title: "100% privat", description: "Semuanya berjalan di browser Anda dengan HTML canvas — foto Anda tidak pernah diunggah ke server." },
  ],

  faqs: [
    { q: "Apakah ini blur Gaussian?", a: "Ya — alat ini memakai filter blur Gaussian bawaan browser untuk hasil yang halus dan berkualitas pada kekuatan berapa pun." },
    { q: "Bisakah hanya sebagian foto yang di-blur?", a: "Bisa. Pilih Sebagian lalu seret di atas area yang ingin diburamkan. Centang \"Blur semua kecuali area ini\" untuk kebalikannya — semua diburamkan kecuali area itu, cara melembutkan latar sambil menjaga objek tetap tajam." },
    { q: "Bagaimana cara blur background foto?", a: "Pilih Sebagian, buat area di atas objek utama — kotak atau elips — lalu centang \"Blur semua kecuali area ini\". Latar belakang menjadi buram dan objeknya tetap tajam, mirip efek mode potret." },
    { q: "Bagaimana cara menyensor NIK di foto KTP?", a: "Pilih Sebagian, seret kotak di atas nomornya, dan naikkan kekuatan blur sampai angkanya tidak terbaca pada zoom penuh — atau pilih efek Blok warna untuk menutupnya sepenuhnya. Periksa hasilnya dengan zoom penuh sebelum membagikan." },
    { q: "Bisakah banyak foto di-blur sekaligus?", a: "Bisa. Tambahkan sebanyak yang Anda mau — satu foto langsung terunduh dan beberapa foto diunduh bersama dalam satu ZIP." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Untuk apa blur sebenarnya berguna?", a: "Terutama tiga hal: menyembunyikan detail sensitif seperti alamat atau nomor rekening, membuat latar yang lembut agar teks di atas gambar tetap terbaca, dan meniru ruang tajam yang sempit agar objek menonjol dari latar yang ramai." },
    { q: "Seberapa kuat blurnya sebaiknya?", a: "Untuk latar di belakang teks, cukup kuat sampai tidak ada tepi di gambar yang bersaing dengan tulisan — biasanya pengaturan yang cukup tinggi. Untuk efek bokeh, jauh lebih ringan, atau hasilnya terlihat buatan. Untuk menyembunyikan informasi, cukup kuat sampai Anda tidak bisa membacanya pada zoom penuh." },
    { q: "Bisakah detail yang sudah di-blur dipulihkan?", a: "Secara praktis tidak, setelah gambarnya diekspor. Blur merata-ratakan piksel dan membuang yang sebelumnya ada, berbeda dengan kotak berwarna yang hanya menutupinya. Itulah sebabnya blur adalah alat yang tepat untuk sensor, sedangkan kotak yang digambar di aplikasi edit tidak." },
    { q: "Apa bedanya dengan alat Blur Wajah?", a: "Alat ini untuk seluruh foto atau area yang Anda buat sendiri. Blur Wajah menambahkan deteksi wajah otomatis dan sensor banyak foto sekaligus, jadi lebih cocok kalau tujuannya menyamarkan orang, bukan membuat efek visual." },
    { q: "Apakah blur mengubah ukuran file?", a: "Biasanya mengecilkannya, kadang cukup banyak. Kompresi bekerja dengan menyimpan perbedaan antara piksel yang bersebelahan, dan blur menghapus persis perbedaan itu, sehingga detail yang perlu disimpan jauh lebih sedikit." },
    { q: "Apakah blur bisa memperbaiki foto yang penuh noise?", a: "Blur menyembunyikan noise dengan menghaluskan semuanya, tetapi detail aslinya ikut hilang bersama bintik-bintiknya, jadi hasilnya terlihat lembek, bukan bersih. Blur ringan bisa membantu foto yang sangat berbintik; lebih dari itu, Anda hanya menukar satu masalah dengan masalah lain." },
  ],

  security:
    "Foto Anda tetap privat. Blur diterapkan sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.8", count: "276" },

  ui: {
    "Same as original": "Sama seperti aslinya",
    "Blur|effect": "Blur",
    "Blur": "Blur", // i18n-same — «blur foto» is what Indonesians type
    "Pixelate": "Pikselasi",
    "Solid": "Blok warna",
    "Couldn't read that image.": "Gambar itu tidak bisa dibaca.",
    "Draw at least one area, or switch to Whole image.":
      "Buat minimal satu area, atau beralih ke Seluruh foto.",
    "Blurred 1 image.": "1 gambar berhasil di-blur.",
    "Blurred {n} images.": "{n} gambar berhasil di-blur.",
    "Blur failed.": "Blur gagal.",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "done": "selesai",
    "Live preview of": "Pratinjau langsung",
    "— applied to all {n} images.": "— diterapkan ke semua {n} gambar.",
    "Drag to draw an area, click one to select, drag its handles to resize, Delete to remove.":
      "Seret untuk membuat area, klik untuk memilihnya, seret pegangannya untuk mengubah ukuran, tekan Delete untuk menghapus.",
    "1 area.": "1 area.", // i18n-same — «area» is the Indonesian word too
    "{n} areas.": "{n} area.",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Blur settings": "Pengaturan blur",
    "Blur Settings": "Pengaturan Blur",
    "Blurring…": "Memproses…",
    "Blur {n} images": "Blur {n} gambar",
    "Blur & download": "Blur & unduh",
    "What to blur": "Bagian yang di-blur",
    "Whole image softens everything. Selective blurs only the areas you draw — or everything except them, with Invert on.":
      "Seluruh foto melembutkan semuanya. Sebagian hanya memburamkan area yang Anda buat — atau justru semua kecuali area itu, kalau \"Blur semua kecuali area ini\" dicentang.",
    "Whole image": "Seluruh foto",
    "Selective": "Sebagian",
    // `A <em>B</em> C` — SVO like English, so the three slots map straight
    // through as «Blur semua kecuali area ini».
    "Blur everything": "Blur semua",
    "except": "kecuali",
    "these areas": "area ini",
    "New area shape": "Bentuk area baru",
    "Ellipse": "Elips",
    "Rectangle": "Persegi panjang",
    "Clear areas": "Hapus area",
    "Effect": "Efek",
    "Blur strength": "Kekuatan blur",
    "Pixel size": "Ukuran kotak",
    "Output format": "Format hasil",
    "Fill colour": "Warna isian",
    "JPG background": "Latar untuk JPG",
  },
};

export default content;
