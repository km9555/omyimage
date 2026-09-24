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

/**
 * Indonesian cookie policy — the same structure and the same section ids as
 * /cookies, with only the prose translated. The ids are the TOC anchors and a
 * contract across locales: never rename one on a single side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5): the prose
 * is dense with inline <code> and <strong>, and a dictionary of sentence
 * fragments would either lose that markup or force Indonesian into English
 * word order.
 *
 * Storage keys, cookie names and domains stay as they are — the reader has to
 * match them against what their own browser shows. The consent-banner labels
 * are quoted exactly as the Indonesian banner prints them (Terima Semua, Tolak
 * Semua, Sesuaikan, Pengaturan Cookie). Browser MENU paths are given in
 * Indonesian, with a note that the names vary by browser version and language
 * — many Indonesian phones run the browser in Indonesian, many desktops in
 * English, and the menus are re-worded between releases.
 *
 * The URL slug stays "cookies": the loanword is what Indonesian sites use.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "id",
    title: "Kebijakan Cookie | oMyImage",
    description:
      "Apa yang disimpan oMyImage di browser Anda, untuk apa, dan cara mengaturnya. Secara bawaan hanya penyimpanan yang diperlukan — analitik tetap mati sampai Anda mengizinkannya.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. Apa itu cookie" },
  { id: "consent", title: "2. Persetujuan Anda" },
  { id: "types", title: "3. Apa yang kami simpan" },
  { id: "third", title: "4. Cookie pihak ketiga" },
  { id: "control", title: "5. Cara mengatur cookie" },
  { id: "changes", title: "6. Perubahan kebijakan ini" },
  { id: "contact", title: "7. Kontak" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="id"
      title="Kebijakan Cookie"
      subtitle="Apa yang disimpan oMyImage di browser Anda, mengapa disimpan, dan cara mengubah pilihan Anda."
      updated="19 Agustus 2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. Apa itu cookie">
        <LegalCallout>
          oMyImage tidak memasang cookie miliknya sendiri. Yang disimpannya hanyalah beberapa entri{" "}
          <strong>local storage</strong> yang tidak pernah meninggalkan perangkat Anda, ditambah —
          hanya jika Anda mengizinkan — cookie analitik dari Google. Gambar Anda sama sekali tidak
          terlibat dalam hal ini.
        </LegalCallout>
        <LegalP>
          Cookie adalah file teks kecil yang disimpan sebuah situs web di perangkat Anda saat Anda
          mengunjunginya. Cookie banyak dipakai agar situs berfungsi, untuk mengingat preferensi
          Anda, dan untuk memberi tahu pemilik situs bagaimana situsnya digunakan. Cookie bisa
          berupa cookie &ldquo;sesi&rdquo;, yang dihapus saat Anda menutup browser, atau cookie
          &ldquo;persisten&rdquo;, yang tetap ada selama jangka waktu tertentu atau sampai Anda
          menghapusnya.
        </LegalP>
        <LegalP>
          Teknologi yang sangat mirip antara lain penyimpanan web (<code>localStorage</code> dan{" "}
          <code>sessionStorage</code>) serta piksel pelacak. Kebijakan ini memakai istilah
          &ldquo;cookie&rdquo; untuk semuanya, karena pertanyaan praktisnya — apa yang disimpan di
          perangkat Anda dan siapa yang bisa membacanya — sama saja.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Persetujuan Anda">
        <LegalP>
          Pada kunjungan pertama, banner persetujuan muncul di bagian bawah halaman. Tidak ada yang
          bersifat opsional yang dimuat sebelum Anda menjawabnya. Anda punya tiga pilihan:
        </LegalP>
        <LegalUl>
          <li>
            <strong>Terima Semua</strong> — penyimpanan yang diperlukan ditambah analitik. Google
            Analytics dimuat dan kami bisa melihat, secara agregat, alat mana yang dipakai orang.
          </li>
          <li>
            <strong>Tolak Semua</strong> — hanya penyimpanan yang diperlukan. Google Analytics tidak
            pernah dimuat dan tidak ada data analitik yang dikumpulkan dari kunjungan Anda.
          </li>
          <li>
            <strong>Sesuaikan</strong> — pilih per kategori. Penyimpanan yang diperlukan tidak bisa
            dimatikan, karena tanpanya situs tidak bisa mengingat tema Anda — atau bahkan pilihan
            ini sendiri.
          </li>
        </LegalUl>
        <LegalP>
          Jawaban Anda disimpan di perangkat Anda dalam <code>omyimage_cookie_consent</code> dan{" "}
          <code>omyimage_cookie_prefs</code>. Anda bisa mengubahnya kapan saja lewat tautan{" "}
          <strong>Pengaturan Cookie</strong> di footer setiap halaman. Karena skrip analitik hanya
          bisa ditambahkan atau dihapus saat halaman dimuat ulang, mengubah pengaturan yang satu itu
          akan memuat ulang halaman.
        </LegalP>
        <LegalP>
          Kami tidak memakai cookie iklan atau cookie pelacak lintas situs, dan kami tidak
          membagikan data Anda kepada jaringan iklan.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Apa yang kami simpan">
        <LegalSubsection title="Diperlukan — selalu aktif">
          <LegalP>
            Ini adalah entri <code>localStorage</code>, bukan cookie: ditulis oleh situs, hanya dibaca
            oleh situs, dan tidak pernah dikirim ke kami atau siapa pun. Entri ini tidak bisa
            dimatikan, karena justru inilah yang membuat tampilan situs bisa mengingat apa pun.
            Menghapus data situs di browser Anda akan menghapus semuanya.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — apakah Anda memilih mode terang atau gelap.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> dan <code>omyimage_cookie_prefs</code> — jawaban
              Anda atas banner persetujuan, agar Anda tidak ditanya di setiap halaman.
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
            Cloudflare, yang menyajikan dan melindungi situs ini, juga dapat memasang cookie miliknya
            sendiri yang benar-benar diperlukan untuk pembatasan laju dan deteksi bot. Cookie tersebut
            dijelaskan di bagian 4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Analitik — hanya dengan persetujuan Anda">
          <LegalP>
            Jika Anda menerima analitik, kami memuat Google Analytics 4 untuk memahami penggunaan
            situs secara agregat: alat mana yang populer, halaman mana yang mengalami error, dan
            kira-kira dari mana pengunjung datang. Kami memakai informasi ini untuk memutuskan apa
            yang perlu dibuat dan diperbaiki. Informasi ini tidak pernah dipakai untuk
            mengidentifikasi Anda, dan kami tidak berusaha mengaitkannya dengan apa pun yang Anda
            proses.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — membedakan pengguna dan sesi yang unik.
              Kedaluwarsa setelah 2 tahun.
            </li>
            <li>
              <code>_gid</code> — membedakan pengguna dalam rentang 24 jam. Kedaluwarsa setelah 24
              jam.
            </li>
          </LegalUl>
          <LegalP>
            Jika Anda menolak analitik, atau tidak pernah menjawab banner sama sekali, skrip Google
            Analytics tidak pernah diminta — cookie ini memang tidak pernah dibuat, bukan dibuat lalu
            diabaikan.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Iklan — tidak dipakai">
          <LegalP>
            Kami <strong>tidak</strong> memakai cookie iklan atau pelacak. oMyImage tidak menampilkan
            iklan dan tidak membagikan perilaku penjelajahan kepada jaringan iklan. Tombol iklan ada
            di banner persetujuan agar preferensi Anda sudah tercatat seandainya hal itu berubah
            kelak; saat ini tombol itu tidak mengatur apa pun.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookie pihak ketiga">
        <LegalP>
          Hanya pihak ketiga berikut yang bisa menyimpan sesuatu di browser Anda di oMyImage.
          Masing-masing diatur oleh kebijakannya sendiri:
        </LegalP>
        <LegalTable
          headers={["Layanan", "Tujuan", "Kebijakan Privasi"]}
          rows={[
            [
              "Cloudflare",
              "Cookie keamanan dan performa yang benar-benar diperlukan (pembatasan laju, deteksi bot)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Cookie analitik, dipasang hanya setelah Anda menerima analitik",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Menyajikan font ikon. Tidak memasang cookie, tetapi Google menerima alamat IP Anda, seperti pada situs mana pun yang memakai font tersebut",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (opsional)",
              "Hanya jika Anda memakai impor dari Drive. Token akses disimpan di memori selama kunjungan itu dan tidak pernah disimpan permanen",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (opsional)",
              "Hanya jika Anda memakai impor dari Dropbox. Pemilih filenya berjalan di jendela pop-up Dropbox; tidak ada akun yang ditautkan dan tidak ada token yang diterbitkan",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          Impor dari cloud dijelaskan lengkap di bagian 7 dan 8{" "}
          <Link href={localeHref("/privacy#google-drive", "id")} className="text-secondary hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          kami.
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Cara mengatur cookie">
        <LegalSubsection title="Di oMyImage">
          <LegalP>
            Gunakan tautan <strong>Pengaturan Cookie</strong> di footer setiap halaman. Tautan itu
            membuka kembali banner persetujuan dengan pilihan Anda saat ini, jadi Anda bisa mengubah
            satu kategori tanpa mengatur ulang yang lain.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Di browser Anda">
          <LegalP>
            Setiap browser utama memungkinkan Anda melihat, memblokir, dan menghapus cookie serta
            data situs. Memblokir semuanya juga akan menghapus entri yang diperlukan di atas, yang
            berarti situs akan lupa tema Anda dan kembali menanyakan soal cookie. Nama menunya bisa
            sedikit berbeda tergantung versi dan bahasa browser:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Setelan → Privasi dan keamanan → Cookie pihak ketiga
            </li>
            <li>
              <strong>Firefox:</strong> Pengaturan → Privasi &amp; Keamanan → Kuki dan Data Situs
            </li>
            <li>
              <strong>Safari:</strong> Pengaturan → Privasi → Kelola Data Situs Web
            </li>
            <li>
              <strong>Edge:</strong> Pengaturan → Cookie dan izin situs → Kelola dan hapus cookie
              serta data situs
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Menolak Google Analytics di semua situs">
          <LegalP>
            Untuk menolak Google Analytics di semua situs, bukan hanya di sini, pasang{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Perubahan kebijakan ini">
        <LegalP>
          Kami dapat memperbarui kebijakan ini seiring perubahan layanan. Tanggal &ldquo;terakhir
          diperbarui&rdquo; di bagian atas halaman ini selalu menunjukkan versi yang terbaru, dan
          perubahan yang material akan dicantumkan di sini sebelum mulai berlaku.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Kontak">
        <LegalP>
          Pertanyaan tentang cookie atau kebijakan ini dapat dikirim melalui pilihan di{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>{" "}
          kami. Lihat juga{" "}
          <Link href={localeHref("/privacy", "id")} className="text-secondary hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          dan{" "}
          <Link href={localeHref("/terms", "id")} className="text-secondary hover:underline">
            Syarat dan Ketentuan
          </Link>{" "}
          kami.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
