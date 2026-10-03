import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

/**
 * Indonesian privacy policy — a written twin of /privacy carrying exactly the
 * same section ids. `#google-drive` in particular is linked from the cookie
 * policy in every language.
 *
 * Section 7 exists to satisfy Google's OAuth verification, which audits the
 * privacy policy against the scope requested in lib/google-drive.ts. Three
 * things there are deliberately NOT translated:
 *   • the scope URI, which is an identifier;
 *   • the name of the Google API Services User Data Policy, kept in English;
 *     and
 *   • the words "Limited Use", kept beside the Indonesian rendering — that
 *     sentence is prescribed by Google, and a loose paraphrase in any language
 *     is what fails a review.
 * Keep this section in sync with the English one whenever the scope changes.
 *
 * The summary says "no ads, no cross-site tracking, analytics only with your
 * consent" rather than the English summary's "we do not run analytics", which
 * §4 of the English page itself contradicts (GA4 loads once you accept). The
 * pt and ru twins resolved the same sentence the same way.
 *
 * §10 names Indonesia's personal-data law (UU No. 27 Tahun 2022, UU PDP) and
 * the supervisory body it establishes BY ROLE — as the place a reader
 * complains — the way the pt, hi and ru twins name ANPD, the DPB and
 * Roskomnadzor, and without any claim about which body currently operates it
 * or about our own compliance posture.
 *
 * §6 names Contabo as the server host WITHOUT naming a country, exactly as the
 * English page does: stating a location nobody verified would be worse than
 * carrying the English page's level of detail across unchanged.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/privacy",
  locale: "id",
  title: "Kebijakan Privasi | oMyImage",
  description:
    "Bagaimana oMyImage menangani gambar dan data Anda. Sebagian besar alat berjalan di browser; file yang diproses di server dihapus dalam satu jam. Tanpa iklan, tanpa akun.",
});

const toc = [
  { id: "summary", title: "Ringkasan" },
  { id: "images", title: "1. Gambar Anda" },
  { id: "browser", title: "2. Pemrosesan di browser vs di server" },
  { id: "retention", title: "3. Penyimpanan & penghapusan" },
  { id: "collect", title: "4. Apa yang kami kumpulkan" },
  { id: "storage", title: "5. Penyimpanan browser" },
  { id: "subprocessors", title: "6. Layanan pihak ketiga" },
  { id: "google-drive", title: "7. Impor dari Google Drive" },
  { id: "dropbox", title: "8. Impor dari Dropbox" },
  { id: "future", title: "9. Fitur yang direncanakan" },
  { id: "rights", title: "10. Hak Anda" },
  { id: "children", title: "11. Anak-anak" },
  { id: "security", title: "12. Keamanan" },
  { id: "changes", title: "13. Perubahan" },
  { id: "contact", title: "14. Kontak" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="id"
      title="Kebijakan Privasi"
      subtitle="Apa yang terjadi pada gambar dan data Anda saat Anda memakai oMyImage."
      updated="9 September 2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Ringkasan">
        <LegalCallout>
          Sebagian besar alat oMyImage berjalan <strong>sepenuhnya di dalam browser Anda</strong> —
          gambar Anda tidak pernah diunggah. Beberapa alat memerlukan server kami; file tersebut
          diproses, dikembalikan, lalu dihapus dalam waktu sekitar satu jam. Kami tidak mewajibkan
          akun, tidak menampilkan iklan, dan tidak melakukan pelacakan lintas situs; analitik hanya
          dimuat jika Anda mengizinkannya.
        </LegalCallout>
        <LegalP>
          Kebijakan ini menjelaskan semua itu secara rinci. Kebijakan ini menggambarkan apa yang
          dilakukan layanan saat ini, dan menandai dengan jelas apa yang masih direncanakan dan belum
          berjalan.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Gambar Anda">
        <LegalP>
          Gambar Anda adalah milik Anda. Kami tidak mengklaim kepemilikan atas apa pun yang Anda
          proses, kami tidak memakai gambar Anda untuk melatih model, dan kami tidak menjual,
          membagikan, menerbitkan, atau memakainya kembali untuk tujuan apa pun.
        </LegalP>
        <LegalP>
          Apakah sebuah gambar meninggalkan perangkat Anda atau tidak bergantung pada alat yang Anda
          pakai — lihat bagian berikutnya.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Pemrosesan di browser vs di server">
        <LegalSubsection title="Diproses di browser Anda (tanpa unggahan)">
          <LegalP>
            Sebagian besar alat memakai mesin canvas bawaan browser Anda. Gambar dibaca dari
            perangkat Anda ke memori, diproses secara lokal, lalu Anda simpan kembali. Tidak ada yang
            dikirim kepada kami, dan alat-alat ini tetap berfungsi walaupun server kami sedang mati.
          </LegalP>
          <LegalP>
            Ini mencakup crop, ubah ukuran, putar, kompres, konversi, watermark, meme, editor foto
            serba ada, blur, bingkai, crop bulat, gabungkan foto, alat GIF, alat warna, melihat
            metadata, dan foto ke PDF, untuk file hingga 15&nbsp;MB.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Diproses di server kami (diunggah)">
          <LegalP>Gambar Anda diunggah ke server kami dalam tiga situasi:</LegalP>
          <LegalUl>
            <li>
              <strong>File yang lebih besar dari 15&nbsp;MB</strong> — pemrosesan di browser menjadi
              tidak andal pada ukuran itu, jadi pekerjaannya otomatis diserahkan ke server kami.
            </li>
            <li>
              <strong>Alat AI</strong> — Hapus Background dan Jadikan Foto HD menjalankan model yang
              terlalu berat untuk browser.
            </li>
            <li>
              <strong>HEIC ke JPG, berapa pun ukurannya.</strong> Yang satu ini adalah batasan
              lisensi, bukan batasan teknis: satu-satunya dekoder HEIC open-source tidak boleh
              didistribusikan ke browser berdasarkan lisensinya, sehingga konversinya harus dilakukan
              di server kami.
            </li>
          </LegalUl>
          <LegalP>
            Setiap alat tersebut menyatakan di halamannya sendiri bahwa ia mengunggah. Jika sebuah
            alat tidak menyatakannya, alat itu tidak mengunggah.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Penyimpanan & penghapusan">
        <LegalP>
          Gambar yang diproses di browser Anda tidak pernah kami terima, jadi tidak ada yang perlu kami
          simpan.
        </LegalP>
        <LegalP>
          Untuk gambar yang diproses di server, file yang diunggah hanya disimpan selama konversi
          berlangsung, lalu dibuang. Hasilnya disimpan sebentar di balik tautan unduhan pribadi dan
          dihapus otomatis dalam waktu sekitar satu jam. Kami tidak menyimpan cadangan file Anda dan
          tidak mengarsipkannya.
        </LegalP>
        <LegalCallout>
          Tautan unduhan tidak bisa ditebak, tetapi tidak memerlukan autentikasi. Perlakukan tautan
          sebagai rahasia — siapa pun yang memegangnya dapat mengambil file tersebut sampai
          kedaluwarsa.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. Apa yang kami kumpulkan">
        <LegalP>
          Kami tidak meminta nama, alamat email, atau data pribadi lainnya untuk memakai alat-alat
          ini. Tidak ada akun, tidak ada buletin, dan tidak ada formulir kontak di situs ini.
        </LegalP>
        <LegalP>
          Seperti layanan web mana pun, server kami dan penyedia hosting kami secara otomatis
          memproses data teknis dasar sebagai bagian dari penyajian situs — alamat IP, user-agent
          browser, URL yang diminta, dan waktu permintaan. Data ini dipakai untuk melayani permintaan,
          menerapkan pembatasan laju, dan mendeteksi penyalahgunaan. Kami tidak membuat profil dari
          data ini dan tidak menggabungkannya dengan data lain.
        </LegalP>
        <LegalP>
          Kami memakai <strong>Google Analytics 4</strong>, dan hanya dengan persetujuan Anda. Sampai
          Anda menerima cookie analitik, skripnya tidak pernah diminta — bukan dimuat lalu
          dimatikan, melainkan memang tidak ada — sehingga tidak ada cookie analitik yang dibuat untuk
          pengunjung yang menolak atau yang tidak pernah menjawab banner. Yang dikumpulkannya bersifat
          agregat: alat mana yang dipakai, halaman mana yang mengalami error, dan kira-kira dari mana
          pengunjung datang. Kami tidak memakainya untuk mengidentifikasi Anda dan tidak
          mengaitkannya dengan apa pun yang Anda proses.
        </LegalP>
        <LegalP>
          <strong>Kami tidak menampilkan iklan dan tidak melakukan pelacakan lintas situs.</strong>{" "}
          Tidak ada perekaman sesi, tidak ada piksel iklan, dan tidak ada jaringan iklan di oMyImage.
          Anda dapat mengubah atau menarik persetujuan analitik kapan saja melalui{" "}
          <strong>Pengaturan Cookie</strong> di footer — lihat{" "}
          <Link href={localeHref("/cookies", "id")} className="text-secondary hover:underline">
            Kebijakan Cookie
          </Link>{" "}
          kami untuk detailnya.
        </LegalP>
      </LegalSection>

      <LegalSection id="storage" title="5. Penyimpanan browser">
        <LegalP>
          oMyImage tidak memasang cookie miliknya sendiri. Kami memakai local storage di browser Anda
          untuk beberapa preferensi fungsional, yang tetap berada di perangkat Anda dan tidak pernah
          dikirim kepada kami:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — apakah Anda memilih mode terang atau gelap.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> dan <code>omyimage_cookie_prefs</code> — jawaban Anda
            atas banner cookie.
          </li>
          <li>
            <code>omyimage:favorites</code> dan alat yang baru dipakai — agar pintasan Anda tetap
            tersimpan.
          </li>
          <li>
            <code>omyimage:currency</code> — mata uang yang Anda pilih di halaman harga.
          </li>
          <li>
            <code>omyimage:premium-usage</code> — hitungan lokal pemakaian alat premium hari ini.
          </li>
        </LegalUl>
        <LegalP>
          Menghapus data situs di browser Anda akan menghapus semuanya. Tidak ada di sini yang
          mengidentifikasi Anda. Cookie yang dipasang pihak ketiga — Cloudflare, dan Google Analytics
          setelah Anda mengizinkannya — tercantum dalam{" "}
          <Link href={localeHref("/cookies", "id")} className="text-secondary hover:underline">
            Kebijakan Cookie
          </Link>{" "}
          kami.
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Layanan pihak ketiga">
        <LegalP>
          Kami menjaga agar pihak ketiga seminimal mungkin. Hanya pihak-pihak berikut yang terlibat
          dalam menjalankan oMyImage:
        </LegalP>
        <LegalTable
          headers={["Layanan", "Tujuan", "Kebijakan Privasi"]}
          rows={[
            ["Cloudflare", "Hosting situs web, CDN, dan perlindungan DDoS", "cloudflare.com/privacypolicy"],
            ["Contabo", "Hosting server untuk alat yang memproses di server kami", "contabo.com/en/legal/privacy-policy"],
            ["Google Fonts", "Menyajikan font ikon yang dipakai di seluruh antarmuka", "policies.google.com/privacy"],
            ["Google Analytics", "Pengukuran penggunaan secara agregat, dimuat hanya jika Anda menerima cookie analitik", "policies.google.com/privacy"],
            ["Google Drive (opsional)", "Hanya mengimpor file yang Anda pilih, dan hanya saat Anda memakainya — lihat bagian 7", "policies.google.com/privacy"],
            ["Dropbox (opsional)", "Hanya mengimpor file yang Anda pilih, dan hanya saat Anda memakainya — lihat bagian 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Karena font ikon diminta dari CDN Google, Google menerima alamat IP dan user-agent Anda saat
          sebuah halaman dimuat, seperti pada situs mana pun yang memakai font tersebut. Dua jenis
          huruf teks kami disajikan dari domain kami sendiri dan tidak melibatkan pihak ketiga.
        </LegalP>
      </LegalSection>

      {/*
        Google Drive / OAuth disclosure. Required by Google's OAuth app
        verification, which checks the privacy policy for a description of what
        Google user data is accessed, why, and how it is handled — plus the
        Limited Use sentence, which is prescribed wording and must not be
        paraphrased. Keep the scope named here in sync with lib/google-drive.ts.
      */}
      <LegalSection id="google-drive" title="7. Impor dari Google Drive">
        <LegalP>
          Menghubungkan Google bersifat opsional. Setiap alat di oMyImage berfungsi tanpanya, dan tidak
          ada bagian situs yang meminta Anda masuk. Koneksi ini ada untuk satu fitur saja: mengimpor
          gambar yang sudah Anda simpan di Google Drive, alih-alih mengunggahnya dari perangkat Anda.
        </LegalP>

        <LegalSubsection title="Apa yang kami minta, dan apa yang diizinkannya">
          <LegalP>
            Saat Anda memilih &quot;Impor dari Google Drive&quot;, kami meminta satu izin yang sempit:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Cakupan
            izin itu hanya memberi akses ke file tertentu yang Anda pilih di pemilih file milik Google
            sendiri. Izin ini tidak memungkinkan kami mendaftar, menjelajah, mencari, atau membuka hal
            lain apa pun di Drive Anda, dan tidak memberi kami gambaran tentang folder, nama file, atau
            penyimpanan Anda secara keseluruhan.
          </LegalP>
          <LegalP>
            Dalam praktiknya, izin ini juga hanya satu arah: kami membaca file yang Anda pilih. Kami
            tidak membuat, mengganti nama, mengubah, memindahkan, atau menghapus apa pun di Drive
            Anda.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Apa yang terjadi pada file dan token">
          <LegalUl>
            <li>
              Token akses yang diterbitkan Google disimpan di memori browser Anda hanya selama
              kunjungan itu. Token tersebut tidak pernah dikirim ke server kami, tidak pernah ditulis
              ke disk, dan hilang saat Anda menutup tab.
            </li>
            <li>
              File yang Anda pilih diunduh dari Google langsung ke browser Anda. File itu tidak
              melewati server kami saat masuk.
            </li>
            <li>
              Sejak saat itu file diperlakukan persis seperti file yang Anda seret dari desktop —
              diproses di browser Anda, atau diunggah ke server kami hanya jika Anda memilih alat
              yang menyatakan bahwa ia mengunggah, dengan aturan penyimpanan yang sama seperti di
              bagian 2 dan 3.
            </li>
            <li>
              Kami tidak menyimpan salinan file Google Anda, tidak mengindeksnya, dan tidak menyimpan
              catatan apa pun tentang apa yang Anda impor.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          Penggunaan dan pengalihan informasi yang diterima oMyImage dari Google API ke aplikasi lain
          akan mematuhi{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , termasuk persyaratan penggunaan terbatas (Limited Use). Secara khusus, kami tidak memakai
          data pengguna Google untuk iklan, kami tidak menjual atau mengalihkannya, dan kami tidak
          memakainya untuk melatih model umum atau model kecerdasan buatan.
        </LegalCallout>

        <LegalP>
          Anda dapat mencabut akses ini kapan saja, tanpa memengaruhi bagian lain situs, dari{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            halaman izin Akun Google
          </a>{" "}
          Anda.
        </LegalP>
      </LegalSection>

      {/*
        Dropbox disclosure. Deliberately shorter than section 7: the Chooser
        links no account and issues no token, so there is nothing to say about
        scopes or revoking access. Keep in sync with lib/dropbox.ts.
      */}
      <LegalSection id="dropbox" title="8. Impor dari Dropbox">
        <LegalP>
          Menghubungkan Dropbox bersifat opsional, dan cara kerjanya sama seperti Google Drive: fitur
          ini ada hanya agar Anda bisa memilih gambar yang sudah Anda simpan di Dropbox alih-alih
          mengunggahnya dari perangkat Anda. Setiap alat di oMyImage berfungsi tanpanya, dan tidak ada
          bagian situs yang meminta Anda masuk.
        </LegalP>

        <LegalP>
          Memilih &quot;Dropbox&quot; membuka pemilih file milik Dropbox sendiri di jendela pop-up.
          Penjelajahan dan pemilihan terjadi sepenuhnya di dalam jendela itu, yang milik Dropbox — kami
          tidak pernah melihat folder Anda, nama file Anda, atau apa pun yang tidak Anda pilih.
        </LegalP>

        <LegalUl>
          <li>
            Tidak ada akun yang ditautkan dan tidak ada token akses yang diterbitkan. Tidak seperti
            impor dari Google Drive, tidak ada izin yang perlu diberikan dan tidak ada yang perlu
            dicabut sesudahnya.
          </li>
          <li>
            Dropbox memberikan tautan unduhan sementara untuk setiap file yang Anda pilih, yang
            berlaku beberapa jam. Browser Anda langsung memakainya lalu melupakannya; tautan itu tidak
            pernah dikirim ke server kami atau ditulis ke disk.
          </li>
          <li>
            File diunduh dari Dropbox langsung ke browser Anda. File itu tidak melewati server kami
            saat masuk.
          </li>
          <li>
            Sejak saat itu file diperlakukan persis seperti file yang Anda seret dari desktop —
            diproses di browser Anda, atau diunggah ke server kami hanya jika Anda memilih alat yang
            menyatakan bahwa ia mengunggah, dengan aturan penyimpanan yang sama seperti di bagian 2
            dan 3.
          </li>
          <li>
            Kami tidak menyimpan salinan file Dropbox Anda, tidak mengindeksnya, dan tidak menyimpan
            catatan apa pun tentang apa yang Anda impor.
          </li>
        </LegalUl>

        <LegalP>
          Bagi Dropbox, hal ini adalah kunjungan ke Dropbox, dan kebijakan privasinya sendiri berlaku
          untuk apa yang terjadi di dalam jendela itu. Kode Dropbox hanya dimuat saat Anda menekan
          tombolnya, jadi pengunjung yang tidak pernah memakai fitur ini tidak pernah berhubungan
          dengan Dropbox sama sekali.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Fitur yang direncanakan">
        <LegalP>
          Beberapa fitur sudah direncanakan tetapi belum berjalan. Kami menjelaskannya di sini lebih
          awal agar kebijakan ini tetap jujur saat fitur-fitur itu hadir, dan agar Anda tahu apa yang
          bisa diharapkan. <strong>Tidak satu pun dari yang berikut ini aktif saat ini.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Akun.</strong> Jika kami memperkenalkan fitur masuk, kami akan mengumpulkan alamat
            email dan kata sandi yang di-hash secara aman, semata-mata untuk mengautentikasi Anda dan
            mengaitkan paket yang Anda miliki. Anda akan dapat menghapus akun beserta datanya.
          </li>
          <li>
            <strong>Paket berbayar.</strong> Jika kami memperkenalkan paket berbayar, pembayaran akan
            ditangani oleh pemroses pembayaran pihak ketiga. Detail kartu akan dikirim langsung ke
            pemroses tersebut dan tidak akan pernah sampai atau tersimpan di server kami. Kami hanya
            akan menerima referensi transaksi dan statusnya.
          </li>
        </LegalUl>
        <LegalP>
          Saat salah satu fitur ini mulai berjalan, kebijakan ini akan diperbarui dan tanggal
          &quot;terakhir diperbarui&quot; di bagian atas akan berubah sebelum fitur itu diaktifkan.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Hak Anda">
        <LegalP>
          Tergantung tempat tinggal Anda, Anda mungkin memiliki hak untuk mengakses, memperbaiki,
          mengekspor, atau menghapus data pribadi tentang Anda, serta untuk berkeberatan atas
          pemrosesan tertentu. Karena kami tidak mengelola akun dan tidak menyimpan gambar Anda, dalam
          praktiknya kami biasanya tidak menyimpan apa pun tentang Anda yang bisa diambil.
        </LegalP>
        <LegalP>
          Jika Anda yakin kami menyimpan data yang berkaitan dengan Anda, hubungi kami melalui detail
          di{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>{" "}
          kami dan kami akan menanggapi dalam jangka waktu yang wajar. Anda juga dapat mengajukan
          pengaduan kepada otoritas pelindungan data pribadi di negara Anda — di Indonesia, lembaga
          yang dibentuk berdasarkan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data
          Pribadi (UU PDP).
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Anak-anak">
        <LegalP>
          oMyImage adalah alat serbaguna dan tidak ditujukan untuk anak-anak. Kami tidak dengan
          sengaja mengumpulkan data pribadi dari anak-anak. Karena memakai alat-alat ini tidak
          memerlukan akun maupun informasi pribadi, biasanya memang tidak ada yang dikumpulkan.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Keamanan">
        <LegalP>
          Situs ini disajikan melalui HTTPS. Unggahan ke server kami dienkripsi selama pengiriman,
          diproses secara terisolasi, dan dihapus sesuai jadwal yang dijelaskan di atas. Kami
          menerapkan pembatasan laju dan batas ukuran unggahan untuk melindungi layanan.
        </LegalP>
        <LegalP>
          Tidak ada layanan online yang bisa menjanjikan keamanan yang sempurna. Mohon jangan
          mengunggah materi yang tidak boleh sampai terbuka seandainya terjadi kebocoran, walaupun
          kemungkinannya kecil — dan ingat bahwa untuk sebagian besar alat, pilihan paling aman sudah
          menjadi bawaannya, karena file tidak pernah meninggalkan perangkat Anda.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Perubahan">
        <LegalP>
          Kami dapat memperbarui kebijakan ini seiring perkembangan layanan. Tanggal &quot;terakhir
          diperbarui&quot; di bagian atas halaman ini selalu menunjukkan versi yang terbaru. Perubahan
          yang material akan dicantumkan di sini sebelum mulai berlaku.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Kontak">
        <LegalP>
          Pertanyaan tentang kebijakan ini, atau tentang cara data Anda ditangani, dapat dikirim
          melalui pilihan di{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>{" "}
          kami. Lihat juga{" "}
          <Link href={localeHref("/terms", "id")} className="text-secondary hover:underline">
            Syarat dan Ketentuan
          </Link>
          , yang mengatur penggunaan {SITE.name} oleh Anda.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
