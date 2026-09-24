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
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

/**
 * Indonesian terms of service — a written twin of /terms carrying exactly the
 * same section ids. §14 refers to sections by NUMBER ("bagian 5, 8, 9…"), so
 * the numbering is a contract too, not just the ids.
 *
 * The all-caps disclaimers in §8 and §9 stay all-caps: Indonesian is written in
 * the Latin alphabet and has case, so the convention carries across as it did
 * for pt and ru. Caps in a warranty disclaimer are a legal formality about
 * conspicuousness, not shouting.
 *
 * §15 is left jurisdiction-neutral exactly as the English page writes it
 * ("hukum yang berlaku", "pengadilan yang berwenang"). The EU/UK consumer
 * paragraph is carried across unchanged and NOTHING is added about Indonesian
 * law — naming a forum or a statute no lawyer has reviewed would be a worse
 * error than the omission. Same ruling as every other twin.
 *
 * USD 50 in §9 stays USD 50: it is a contractual figure, not a price to
 * localise.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/terms",
  locale: "id",
  title: "Syarat dan Ketentuan | oMyImage",
  description:
    "Syarat dan ketentuan penggunaan oMyImage — penggunaan yang diperbolehkan, penanganan file, penafian, batasan tanggung jawab, dan hukum yang berlaku.",
});

const toc = [
  { id: "acceptance", title: "1. Penerimaan Ketentuan" },
  { id: "service", title: "2. Deskripsi Layanan" },
  { id: "eligibility", title: "3. Kelayakan" },
  { id: "acceptable", title: "4. Penggunaan yang Diperbolehkan" },
  { id: "content", title: "5. Konten Anda" },
  { id: "files", title: "6. Penanganan & Penghapusan File" },
  { id: "availability", title: "7. Ketersediaan & Perubahan" },
  { id: "warranties", title: "8. Penafian Jaminan" },
  { id: "liability", title: "9. Batasan Tanggung Jawab" },
  { id: "indemnity", title: "10. Ganti Rugi" },
  { id: "ip", title: "11. Kekayaan Intelektual" },
  { id: "thirdparty", title: "12. Perangkat Lunak & Tautan Pihak Ketiga" },
  { id: "billing", title: "13. Paket Berbayar & Penagihan" },
  { id: "termination", title: "14. Pengakhiran" },
  { id: "governing", title: "15. Hukum yang Berlaku" },
  { id: "misc", title: "16. Lain-lain" },
  { id: "contact", title: "17. Kontak" },
];

export default function TermsPage() {
  return (
    <LegalShell
      locale="id"
      title="Syarat dan Ketentuan"
      subtitle={`Perjanjian antara Anda dan ${SITE.name} saat Anda memakai situs web ini beserta alat-alatnya.`}
      updated="3 Agustus 2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Penerimaan Ketentuan">
        <LegalP>
          Dengan mengakses atau memakai {SITE.name} (&quot;Layanan&quot;), Anda setuju untuk terikat
          oleh Syarat dan Ketentuan ini (&quot;Ketentuan&quot;). Jika Anda tidak menyetujui
          Ketentuan ini, Anda tidak boleh memakai Layanan.
        </LegalP>
        <LegalP>
          Ketentuan ini berlaku bagi setiap pengunjung, baik Anda memiliki akun maupun tidak, dan baik
          Anda membayar sesuatu maupun tidak.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Deskripsi Layanan">
        <LegalP>
          Layanan menyediakan alat gambar online — kompres, ubah ukuran, crop, konversi, edit, dan
          operasi terkait lainnya. Sebagian besar alat berjalan sepenuhnya di browser Anda. Beberapa
          alat memerlukan pemrosesan di server kami, sebagaimana dijelaskan di bagian 6 dan dalam{" "}
          <Link href={localeHref("/privacy", "id")} className="text-secondary hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          kami.
        </LegalP>
        <LegalP>
          Layanan disediakan &quot;sebagaimana adanya&quot; dan &quot;sebagaimana tersedia&quot;.
          Kami dapat menambah, mengubah, menangguhkan, atau menghapus alat atau fitur apa pun kapan
          saja.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Kelayakan">
        <LegalP>
          Untuk memakai Layanan, Anda harus cakap secara hukum untuk membuat perjanjian yang mengikat
          di yurisdiksi Anda. Jika Anda memakai Layanan atas nama sebuah organisasi, Anda menyatakan
          bahwa Anda berwenang mengikatkan organisasi tersebut pada Ketentuan ini.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Penggunaan yang Diperbolehkan">
        <LegalP>Anda setuju untuk tidak memakai Layanan untuk:</LegalP>
        <LegalUl>
          <li>
            mengunggah, memproses, atau menyebarkan materi apa pun yang melanggar hukum, atau yang
            tidak berhak Anda gunakan — termasuk materi yang melanggar hak cipta, merek dagang, hak
            privasi, atau hak publisitas;
          </li>
          <li>
            memproses materi pelecehan seksual anak, gambar intim tanpa persetujuan, atau konten apa
            pun yang menggambarkan atau mempromosikan kekerasan, terorisme, atau kegiatan yang
            melanggar hukum;
          </li>
          <li>
            membuat atau memanipulasi gambar yang dimaksudkan untuk menipu, melakukan kecurangan,
            menyamar sebagai orang sungguhan, atau memalsukan identitas atau dokumen resmi;
          </li>
          <li>
            mencoba memperoleh akses tanpa izin ke Layanan, servernya, atau sistem terkait, atau
            menyelidiki, memindai, atau menguji kerentanannya;
          </li>
          <li>
            mengganggu atau merusak Layanan, termasuk dengan scraping otomatis, upaya denial-of-service,
            atau mengakali batas laju, batas ukuran file, atau kuota penggunaan;
          </li>
          <li>
            menjual kembali, mensublisensikan, atau mendistribusikan ulang Layanan itu sendiri secara
            komersial, atau memakainya untuk membangun layanan pesaing; atau
          </li>
          <li>memakai Layanan dengan cara apa pun yang melanggar hukum atau peraturan yang berlaku.</li>
        </LegalUl>
        <LegalCallout>
          Anda sepenuhnya bertanggung jawab atas konten yang Anda proses dan untuk memastikan bahwa
          Anda berhak secara hukum untuk memprosesnya. Kami dapat memblokir, membatasi laju, atau
          menolak akses siapa pun yang secara wajar kami yakini melanggar Ketentuan ini, tanpa
          pemberitahuan dan tanpa tanggung jawab.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Konten Anda">
        <LegalP>
          Anda tetap memiliki sepenuhnya gambar dan file yang Anda proses (&quot;Konten Anda&quot;).
          Kami tidak mengklaim kepemilikan apa pun atasnya.
        </LegalP>
        <LegalP>
          Untuk alat yang memproses di server kami, Anda memberi kami lisensi terbatas, sementara,
          berlaku di seluruh dunia, dan bebas royalti untuk menyimpan, mengirimkan, dan memproses
          Konten Anda <strong>semata-mata</strong> untuk menjalankan operasi yang Anda minta dan
          mengembalikan hasilnya kepada Anda. Lisensi itu berakhir saat file dihapus. Kami tidak
          memakai Konten Anda untuk melatih model, dan kami tidak menjual, membagikan, atau
          menerbitkannya.
        </LegalP>
        <LegalP>
          Anda menyatakan dan menjamin bahwa Anda memiliki Konten Anda atau memiliki semua hak dan
          izin yang diperlukan untuk memprosesnya melalui Layanan.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. Penanganan & Penghapusan File">
        <LegalP>
          Sebagian besar alat memproses file sepenuhnya di browser Anda; file tersebut tidak pernah
          dikirim kepada kami. File diunggah ke server kami hanya jika file melebihi batas pemrosesan
          browser, jika Anda memakai alat AI, atau jika Anda memakai konversi HEIC, yang harus
          berjalan di server karena alasan lisensi.
        </LegalP>
        <LegalP>
          File yang diunggah beserta hasilnya disimpan sementara dan dihapus otomatis dalam waktu
          sekitar satu jam. Tautan unduhan tidak bisa ditebak tetapi tidak memerlukan autentikasi —
          siapa pun yang memiliki tautannya dapat mengambil file tersebut sampai kedaluwarsa, jadi
          perlakukan tautan sebagai sesuatu yang rahasia.
        </LegalP>
        <LegalP>
          Anda bertanggung jawab menyimpan salinan Anda sendiri. Kami bukan layanan penyimpanan atau
          cadangan, dan kami tidak menjamin bahwa file yang sudah diproses akan tetap bisa diambil.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Ketersediaan & Perubahan">
        <LegalP>
          Kami tidak menjamin bahwa Layanan akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas
          dari kesalahan. Layanan dapat tidak tersedia karena pemeliharaan, pembaruan, atau alasan di
          luar kendali kami.
        </LegalP>
        <LegalP>
          Alat yang bergantung pada server memerlukan perangkat lunak pendukungnya terpasang dan
          berfungsi; jika tidak, alat tersebut akan memberi tahu bahwa ia tidak tersedia alih-alih
          menghasilkan sesuatu. Kami dapat mengubah atau menghentikan bagian mana pun dari Layanan
          kapan saja tanpa pemberitahuan.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Penafian Jaminan">
        <LegalP>
          LAYANAN DISEDIAKAN &quot;SEBAGAIMANA ADANYA&quot; DAN &quot;SEBAGAIMANA TERSEDIA&quot;,
          TANPA JAMINAN DALAM BENTUK APA PUN, BAIK TERSURAT, TERSIRAT, MAUPUN BERDASARKAN
          UNDANG-UNDANG. SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, KAMI MENOLAK SEMUA JAMINAN,
          TERMASUK JAMINAN TERSIRAT ATAS KELAYAKAN UNTUK DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN
          TERTENTU, KEPEMILIKAN, DAN TIDAK ADANYA PELANGGARAN.
        </LegalP>
        <LegalP>
          KAMI TIDAK MENJAMIN BAHWA LAYANAN AKAN MEMENUHI KEBUTUHAN ANDA, BAHWA HASILNYA AKAN AKURAT
          ATAU MEMILIKI KUALITAS TERTENTU, ATAU BAHWA SETIAP CACAT AKAN DIPERBAIKI. ANDA MEMAKAI
          LAYANAN ATAS RISIKO ANDA SENDIRI, DAN ANDA BERTANGGUNG JAWAB MEMERIKSA HASILNYA SERTA
          MENYIMPAN FILE ASLI SEBELUM MENGANDALKAN FILE APA PUN YANG TELAH DIPROSES.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Batasan Tanggung Jawab">
        <LegalP>
          SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APA PUN {SITE.name}, OPERATOR,
          PEMILIK, KONTRIBUTOR, ATAU PEMASOKNYA TIDAK BERTANGGUNG JAWAB ATAS KERUGIAN TIDAK LANGSUNG,
          INSIDENTAL, KHUSUS, ATAU KONSEKUENSIAL, ATAS GANTI RUGI YANG BERSIFAT MENGHUKUM, ATAU ATAS
          HILANGNYA KEUNTUNGAN, PENDAPATAN, NAMA BAIK, DATA, GAMBAR, ATAU PELUANG USAHA, YANG
          TIMBUL DARI ATAU BERKAITAN DENGAN PEMAKAIAN ATAU KETIDAKMAMPUAN ANDA MEMAKAI LAYANAN — BAIK
          BERDASARKAN KONTRAK, PERBUATAN MELAWAN HUKUM, KELALAIAN, TANGGUNG JAWAB MUTLAK, MAUPUN
          DASAR LAINNYA, DAN BAHKAN JIKA TELAH DIBERI TAHU TENTANG KEMUNGKINAN KERUGIAN TERSEBUT.
        </LegalP>
        <LegalP>
          SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, TOTAL TANGGUNG JAWAB KAMI UNTUK SEMUA KLAIM YANG
          BERKAITAN DENGAN LAYANAN TIDAK AKAN MELEBIHI JUMLAH YANG LEBIH BESAR DI ANTARA (A) JUMLAH
          YANG BENAR-BENAR ANDA BAYARKAN KEPADA KAMI UNTUK LAYANAN DALAM TIGA BULAN SEBELUM PERISTIWA
          YANG MENIMBULKAN KLAIM, ATAU (B) USD 50.
        </LegalP>
        <LegalP>
          Beberapa yurisdiksi tidak mengizinkan pengecualian atau pembatasan jaminan atau tanggung
          jawab tertentu. Dalam hal demikian, pengecualian dan pembatasan di atas hanya berlaku
          sejauh yang diizinkan, dan tidak ada ketentuan dalam Ketentuan ini yang membatasi tanggung
          jawab atas penipuan, atau atas kematian atau cedera pribadi yang disebabkan oleh kelalaian,
          apabila pembatasan tersebut dilarang oleh hukum.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Ganti Rugi">
        <LegalP>
          Anda setuju untuk mengganti rugi, membela, dan membebaskan {SITE.name}, operator, pemilik,
          dan kontributornya dari dan terhadap segala klaim, tuntutan, kerugian, kehilangan,
          kewajiban, biaya, dan pengeluaran (termasuk biaya hukum yang wajar) yang timbul dari atau
          berkaitan dengan: (a) Konten Anda; (b) pemakaian atau penyalahgunaan Layanan oleh Anda;
          (c) pelanggaran Anda terhadap Ketentuan ini; atau (d) pelanggaran Anda terhadap hukum apa
          pun atau hak pihak ketiga mana pun.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Kekayaan Intelektual">
        <LegalP>
          Layanan — termasuk nama, merek, desain, antarmuka, dan kode aslinya — dimiliki oleh
          operatornya dan dilindungi oleh hukum kekayaan intelektual. Ketentuan ini memberi Anda
          lisensi yang terbatas, pribadi, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut
          untuk memakai Layanan sesuai tujuannya. Tidak ada hak lain yang diberikan.
        </LegalP>
        <LegalP>
          Anda boleh memakai hasil yang Anda buat dari gambar milik Anda sendiri untuk tujuan apa pun
          yang sah, termasuk untuk keperluan komersial.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Perangkat Lunak & Tautan Pihak Ketiga">
        <LegalP>
          Layanan dibangun di atas komponen open-source, yang masing-masing dilisensikan oleh
          pembuatnya. Atribusi dan teks lisensi lengkapnya tersedia di{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            pemberitahuan pihak ketiga
          </a>{" "}
          kami. Komponen tersebut disediakan oleh pembuatnya tanpa jaminan.
        </LegalP>
        <LegalP>
          Layanan dapat menautkan ke situs web pihak ketiga. Kami tidak mengendalikan situs-situs
          tersebut, tidak mendukungnya, dan tidak bertanggung jawab atas konten, praktik, atau
          ketersediaannya.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Paket Berbayar & Penagihan">
        <LegalP>
          Layanan saat ini gratis untuk dipakai dan tidak ada paket berbayar yang aktif. Ketentuan
          berikut berlaku jika dan ketika paket berbayar diluncurkan.
        </LegalP>
        <LegalUl>
          <li>Harga ditampilkan sebelum pembelian dan dapat berubah dengan pemberitahuan untuk periode penagihan berikutnya.</li>
          <li>
            Langganan diperpanjang otomatis untuk periode yang sama sampai dibatalkan. Anda dapat
            membatalkan kapan saja, berlaku pada akhir periode yang sedang berjalan.
          </li>
          <li>
            Pembayaran akan ditangani oleh pemroses pembayaran pihak ketiga; kami tidak akan
            menerima atau menyimpan detail kartu Anda secara lengkap.
          </li>
          <li>
            Anda bertanggung jawab atas pajak apa pun, dan untuk menjaga data penagihan Anda tetap
            akurat.
          </li>
          <li>
            Kami dapat menangguhkan akses ke fitur berbayar jika pembayaran gagal atau dibatalkan.
          </li>
        </LegalUl>
        <LegalP>
          Pengembalian dana diatur oleh{" "}
          <Link href={localeHref("/refunds", "id")} className="text-secondary hover:underline">
            Kebijakan Pengembalian Dana
          </Link>{" "}
          kami, yang merupakan bagian dari Ketentuan ini.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Pengakhiran">
        <LegalP>
          Kami dapat menangguhkan atau mengakhiri akses Anda ke Layanan kapan saja, dengan atau tanpa
          pemberitahuan, jika kami secara wajar meyakini bahwa Anda telah melanggar Ketentuan ini atau
          bahwa pemakaian Anda menimbulkan risiko bagi Layanan atau bagi pihak lain. Anda dapat
          berhenti memakai Layanan kapan saja.
        </LegalP>
        <LegalP>
          Bagian-bagian yang menurut sifatnya harus tetap berlaku setelah pengakhiran — termasuk
          bagian 5, 8, 9, 10, 11, 15, dan 16 — tetap berlaku.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Hukum yang Berlaku dan Penyelesaian Sengketa">
        <LegalP>
          Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku, tanpa
          memperhatikan prinsip-prinsip pertentangan hukum. Setiap sengketa yang timbul dari atau
          berkaitan dengan Ketentuan ini atau Layanan akan diselesaikan di pengadilan yang
          berwenang.
        </LegalP>
        <LegalP>
          Jika Anda konsumen yang berdomisili di Uni Eropa atau Britania Raya, Anda juga dapat
          memperoleh manfaat dari ketentuan wajib hukum negara tempat Anda tinggal. Tidak ada
          ketentuan dalam Ketentuan ini yang memengaruhi hak Anda sebagai konsumen untuk mengandalkan
          ketentuan wajib tersebut.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Lain-lain">
        <LegalSubsection title="Keseluruhan perjanjian">
          <LegalP>
            Ketentuan ini, bersama dengan Kebijakan Privasi dan Kebijakan Pengembalian Dana, merupakan
            keseluruhan perjanjian antara Anda dan kami mengenai Layanan.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Keterpisahan">
          <LegalP>
            Jika suatu ketentuan dinyatakan tidak dapat diberlakukan, ketentuan tersebut akan diubah
            seminimal mungkin sesuai kebutuhan, dan ketentuan lainnya tetap berlaku sepenuhnya.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Tidak ada pengesampingan">
          <LegalP>
            Kelalaian kami menegakkan suatu ketentuan tidak berarti kami melepaskan hak untuk
            menegakkannya di kemudian hari.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Pengalihan">
          <LegalP>
            Anda tidak boleh mengalihkan Ketentuan ini tanpa persetujuan kami. Kami dapat
            mengalihkannya sehubungan dengan penggabungan, akuisisi, atau penjualan aset.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Perubahan Ketentuan ini">
          <LegalP>
            Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Tanggal &quot;terakhir
            diperbarui&quot; di atas menunjukkan versi yang berlaku, dan pemakaian yang berlanjut
            setelah suatu perubahan berarti Anda menerimanya.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Kontak">
        <LegalP>
          Pertanyaan tentang Ketentuan ini dapat dikirim melalui pilihan di{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>{" "}
          kami.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
