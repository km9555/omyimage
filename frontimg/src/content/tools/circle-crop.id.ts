import type { ToolPageContent } from "@/content/tools/types";

/**
 * Indonesian copy for /id/crop-foto-bulat.
 *
 * Measured (Indonesia, per month): crop foto bulat 720 · foto bulat 390, both
 * KD 0. The slug and H1 take the longer, clearer phrase; «foto profil bulat»
 * and «potong foto bulat» are in aliases.ts.
 *
 * Local uses named: team and «tentang kami» pages, digital invitations
 * (undangan pernikahan and khitanan put round portraits of the couple or
 * child front and centre), presentation slides and email signatures — the
 * places nothing masks the photo for you.
 */
const content: ToolPageContent = {
  toolId: "circle-crop",
  locale: "id",
  name: "Crop Foto Bulat",
  tagline:
    "Crop foto menjadi lingkaran sempurna secara online — pas untuk foto profil, dengan latar transparan, cincin opsional, dan banyak foto sekaligus. Gratis, cepat, dan 100% privat di browser Anda.",
  category: { id: "edit", label: "Edit" },

  metaTitle: "Crop Foto Bulat Online Gratis — Foto Profil Lingkaran Transparan | oMyImage",
  metaDescription:
    "Crop foto bulat online gratis: geser lingkaran ke wajah, atur ukurannya, dan unduh PNG transparan tanpa kotak putih — untuk foto profil, undangan, dan slide. Sekaligus banyak, di browser.",

  intro:
    "Buat foto profil bulat yang rapi dalam hitungan detik. Alat Crop Foto Bulat ini memotong gambar Anda menjadi lingkaran yang halus langsung di browser — geser lingkarannya untuk membingkai bagian yang Anda mau, ubah ukurannya, perbesar untuk menempatkannya dengan tepat, lalu pilih ukuran hasilnya. Transparan secara bawaan, dengan pilihan isi warna dan cincin. Crop satu foto atau banyak sekaligus — tidak ada yang diunggah, jadi foto Anda tetap privat.",

  sections: [
    {
      heading: "Transparansi adalah intinya",
      id: "transparency",
      body: [
        "Crop bulat hanya benar-benar bulat kalau sudut-sudutnya transparan. Kalau tidak, yang Anda punya adalah gambar persegi dengan lingkaran di dalamnya, dan begitu diletakkan di atas latar dengan warna lain, perseginya langsung kelihatan.",
        "Karena itu format ekspor adalah keputusan terpenting di sini, dan yang paling sering keliru. PNG dan WEBP sama-sama punya kanal alfa dan membiarkan sudutnya kosong. JPG sama sekali tidak punya kanal alfa, jadi area di luar lingkaran harus diisi sesuatu — itulah sebabnya crop bulat dalam JPG datang dengan kotak putih di sekelilingnya.",
        "Kalau Anda tahu gambarnya akan selalu diletakkan di atas satu warna solid, mengisi dengan warna itu tidak masalah. Kalau bisa ke mana saja, pakai PNG.",
      ],
    },
    {
      heading: "Di mana foto bulat benar-benar dibutuhkan",
      id: "uses",
      body: [
        "Kebanyakan media sosial dan WhatsApp sudah membulatkan foto profil sendiri, jadi mengunggah foto persegi sudah cukup. Crop bulat yang sungguhan dibutuhkan justru di tempat yang tidak membulatkannya untuk Anda.",
        "Itu mencakup halaman tim atau \"tentang kami\" di situs web, nama penulis di artikel, foto di slide presentasi, foto kontributor di PDF atau laporan, logo dan lencana, tanda tangan email, dan undangan digital — undangan pernikahan atau khitanan sering menampilkan foto bulat mempelai atau sang anak. Di semua tempat itu Anda menaruh file gambar secara langsung, dan kalau sudutnya tidak transparan, sudut itu akan terlihat.",
        "Crop bulat juga pas untuk foto produk dan ikon, yang tampak lebih rapi dalam lingkaran daripada persegi yang mengambang di dalam tata letak.",
      ],
    },
    {
      heading: "Menyusun komposisi di dalam lingkaran",
      id: "composition",
      body: [
        "Lingkaran memotong lebih banyak daripada kelihatannya — sudut-sudut foto asli hilang sepenuhnya, jadi apa pun di dekat tepi ikut lenyap. Sisakan ruang di sekitar objek lebih lega daripada saat crop persegi.",
        "Untuk potret, penempatan yang andal adalah mata sedikit di atas titik tengah dengan sedikit ruang di atas kepala. Memusatkan seluruh kepala secara matematis cenderung menyisakan celah canggung di atas dan memotong dagu. Kalau wajah memenuhi lingkaran, hasilnya terasa sesak; sisakan sedikit ruang dan hasilnya terbaca sebagai potret yang disengaja.",
        "Kalau bisa, mulailah dari foto yang mendekati persegi. Meng-crop foto lanskap yang lebar menjadi lingkaran membuang sebagian besar bingkainya, jadi foto asli yang lebih rapat memberi resolusi yang jauh lebih banyak di hasilnya.",
      ],
    },
    {
      heading: "Ukuran dan cincin",
      id: "sizing",
      body: [
        "Antara 400 dan 800 piksel persegi mencakup semua keperluan yang realistis. Platform mengecilkan gambar ke ukurannya sendiri, jadi resolusi lebih dari itu hanya membuang byte; jauh lebih kecil dari itu, gambarnya terlihat lembek di layar beresolusi tinggi.",
        "Cincin tipis di tepi menyelesaikan satu masalah khusus: potret terang di halaman terang tidak punya batas yang terlihat, dan kepalanya tampak melayang. Cincin satu atau dua piksel dengan warna nada tengah menegaskan bentuknya tanpa menarik perhatian. Cincin yang lebih tebal mulai terlihat seperti bingkai — itu pilihan desain, bukan perbaikan.",
      ],
    },
  ],

  howToTitle: "Cara crop foto menjadi bulat",
  steps: [
    { title: "Unggah foto", description: "Pilih satu atau banyak foto, atau seret ke area kerja." },
    { title: "Atur lingkarannya", description: "Geser lingkaran ke posisi yang Anda mau, seret pegangannya untuk mengubah ukuran, perbesar untuk detail, lalu atur ukuran hasil, latar, dan cincin opsional." },
    { title: "Crop & unduh", description: "Klik Crop bulat — satu foto langsung terunduh, beberapa foto diunduh bersama dalam satu ZIP." },
  ],

  features: [
    { icon: "panorama_fish_eye", title: "Crop tepat di tempat yang Anda mau", description: "Geser lingkaran ke bagian foto yang benar-benar Anda inginkan, ubah ukurannya dengan pegangan, dan perbesar untuk menempatkannya dengan tepat." },
    { icon: "blur_circular", title: "Transparan atau berbingkai", description: "Ekspor PNG/WEBP transparan, atau tambahkan latar berwarna dan cincin di sekeliling lingkaran." },
    { icon: "lock", title: "Sekaligus banyak, tetap privat", description: "Crop bulat banyak foto sekaligus, sepenuhnya di browser Anda — foto tidak pernah diunggah." },
  ],

  faqs: [
    { q: "Apakah latarnya transparan?", a: "Ya, secara bawaan — ekspor sebagai PNG atau WEBP agar sudut di luar lingkaran tetap transparan. Pilih JPG untuk meratakannya ke satu warna." },
    { q: "Bagaimana kalau foto saya tidak persegi?", a: "Tidak harus persegi. Lingkarannya dimulai di tengah foto, hampir selebar sisi terpendeknya, dan Anda bisa menggesernya ke mana saja dan mengubah ukurannya — jadi wajah di sudut foto lebar sama mudahnya di-crop seperti yang di tengah." },
    { q: "Bisakah saya memilih posisi lingkarannya?", a: "Bisa. Seret lingkaran untuk memindahkannya, seret pegangan di tepinya untuk mengubah ukuran, dan scroll untuk memperbesar saat perlu presisi. Tombol panah menggesernya satu piksel (tahan Shift untuk sepuluh), dan tombol + dan − mengubah ukurannya." },
    { q: "Berapa ukuran gambar hasilnya?", a: "Secara bawaan, \"Asli\" mengekspor lingkaran pada resolusinya sendiri di foto sumber, jadi tidak pernah diperbesar. Anda juga bisa memaksakan 256, 512, atau 1024 piksel persegi, praktis untuk foto profil yang punya slot berukuran tetap." },
    { q: "Bisakah menambahkan cincin di sekeliling lingkaran?", a: "Bisa. Atur ketebalan dan warna cincin untuk menambahkan tepi yang rapi di sekeliling crop bulat." },
    { q: "Apakah gratis dan privat?", a: "Ya. Tanpa daftar dan tanpa watermark, dan setiap foto diproses secara lokal di browser Anda." },
    { q: "Kenapa crop bulat saya punya kotak putih di belakangnya?", a: "Karena Anda mengekspornya sebagai JPG. JPG tidak punya transparansi, jadi semua di luar lingkaran harus diisi warna solid. Ekspor sebagai PNG atau WEBP, dan sudutnya tetap benar-benar transparan." },
    { q: "Berapa ukuran foto profil yang pas?", a: "Sekitar 400×400 sampai 800×800 mencakup hampir semua platform. Semuanya mengecilkan ke ukuran tampilannya sendiri, jadi lebih dari sekitar 800 piksel tidak memberi apa-apa, sedangkan kurang dari sekitar 200 terlihat lembek di layar beresolusi tinggi." },
    { q: "Apakah foto profil perlu di-crop bulat?", a: "Biasanya tidak — kebanyakan platform, termasuk WhatsApp dan Instagram, membulatkan sendiri foto persegi yang Anda unggah. Crop sendiri penting saat foto bulatnya dipakai di tempat yang tidak membulatkannya: situs web, slide, PDF, tanda tangan email, undangan, atau dokumen cetak." },
    { q: "Bagaimana agar crop-nya pas di tengah wajah?", a: "Tempatkan lingkaran sehingga mata sedikit di atas titik tengah, bukan tepat di tengah. Memusatkan seluruh kepala cenderung menyisakan terlalu banyak ruang di atas dan memotong dagu. Sisakan sedikit ruang di sekitar kepala, jangan memenuhi lingkaran dari tepi ke tepi." },
    { q: "Kapan cincin layak ditambahkan?", a: "Saat gambarnya akan diletakkan di atas latar dengan nada yang mirip — tanpa cincin, tepi potret yang pucat bisa hilang di halaman yang pucat dan kepalanya tampak melayang. Buat tipis saja; cincin yang tebal bersaing dengan objeknya." },
    { q: "Apakah kualitasnya turun?", a: "Tidak. Crop mempertahankan piksel yang tersisa persis seperti aslinya. Satu-satunya biaya kualitas ada di tahap ekspor, dan memilih PNG menghindarinya juga." },
  ],

  security:
    "Foto Anda tetap privat. Crop bulat terjadi sepenuhnya di browser Anda dengan HTML canvas — tidak ada yang diunggah ke server. Tidak ada penyimpanan, tidak ada pelacakan file Anda.",

  rating: { value: "4.9", count: "352" },

  ui: {
    // CircleCropTool.tsx — module-scope FORMATS and OUTPUT_TARGETS
    "PNG (transparent)": "PNG (transparan)",
    "WEBP (transparent)": "WEBP (transparan)",
    // CircleCropTool.tsx
    "Couldn't read {name}.": "{name} tidak bisa dibaca.",
    "Circle-cropped 1 image.": "1 gambar berhasil di-crop bulat.",
    "Circle-cropped {n} images.": "{n} gambar berhasil di-crop bulat.",
    "Circle crop failed.": "Crop bulat gagal.",
    "or drop JPG, PNG or WEBP images here": "atau letakkan gambar JPG, PNG, atau WEBP di sini",
    "Preview {name}": "Pratinjau {name}",
    "done": "selesai",
    "Drag the circle to move it, or a corner handle to resize":
      "Seret lingkaran untuk memindahkannya, atau pegangan di sudut untuk mengubah ukuran",
    // `… · {exports at} {w} × {h} px` — matches crop-image's «hasil {w} × {h} px».
    "exports at": "hasil",
    "— applied to all {n} images": "— diterapkan ke semua {n} gambar",
    "Clear images": "Hapus gambar",
    "Files": "File",
    "Circle crop settings": "Pengaturan crop bulat",
    "Circle Crop Settings": "Pengaturan Crop Bulat",
    "Crop": "Crop", // i18n-same — «crop foto» is what Indonesians type
    "Cropping…": "Memproses…",
    "Circle crop {n}": "Crop bulat {n} gambar",
    "Circle crop & download": "Crop bulat & unduh",
    "Zoom": "Perbesar",
    "Output size": "Ukuran hasil",
    "Original exports the circle at its own resolution in the source image — it never upscales. The fixed sizes suit avatars with a set slot to fill.":
      "Asli mengekspor lingkaran pada resolusinya sendiri di foto sumber — tidak pernah diperbesar. Ukuran tetap cocok untuk foto profil dengan slot berukuran pasti.",
    "Recentre & reset zoom": "Ke tengah & atur ulang zoom",
    "Output format": "Format hasil",
    "Ring thickness": "Ketebalan cincin",
    "Ring color": "Warna cincin",
  },
};

export default content;
