import type { Metadata } from "next";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";

/**
 * Indonesian refund policy — same structure and same section ids as /refunds,
 * with only the prose translated. The ids are TOC anchors and a contract
 * across locales: never rename one on a single side.
 *
 * The consumer-law paragraph keeps the EU/UK withdrawal right exactly as the
 * English page states it and adds NOTHING about Indonesian consumer law
 * (UU Perlindungan Konsumen). §10 already says a stronger local right
 * prevails, and a specific claim no lawyer has reviewed would be a worse
 * error than the omission — the same ruling as the pt, hi and ru twins.
 *
 * Money amounts, business-day counts and the 7-day window are facts, not
 * phrasing: they are carried across unchanged.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "id",
  title: "Kebijakan Pengembalian Dana | oMyImage",
  description:
    "Kebijakan pengembalian dana oMyImage — cara kerja refund untuk paket berbayar, batas waktu pengajuan, dan apa saja yang bisa dan tidak bisa dikembalikan.",
});

const toc = [
  { id: "status", title: "1. Status saat ini" },
  { id: "free", title: "2. Layanan gratis" },
  { id: "window", title: "3. Batas waktu refund" },
  { id: "eligible", title: "4. Yang memenuhi syarat" },
  { id: "noteligible", title: "5. Yang tidak memenuhi syarat" },
  { id: "request", title: "6. Cara mengajukan" },
  { id: "processing", title: "7. Proses & waktu" },
  { id: "cancellation", title: "8. Pembatalan vs refund" },
  { id: "chargebacks", title: "9. Chargeback" },
  { id: "consumer", title: "10. Hak berdasarkan undang-undang" },
  { id: "changes", title: "11. Perubahan" },
  { id: "contact", title: "12. Kontak" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="id"
      title="Kebijakan Pengembalian Dana"
      subtitle={`Cara kerja pengembalian dana untuk paket berbayar ${SITE.name}.`}
      updated="3 Agustus 2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Status saat ini">
        <LegalCallout>
          <strong>Belum ada paket berbayar.</strong> Semua alat di {SITE.name} saat ini gratis, jadi
          tidak ada yang ditagihkan dan tidak ada yang perlu dikembalikan. Kebijakan ini diterbitkan
          lebih awal agar ketentuannya jelas sebelum paket berbayar apa pun diluncurkan.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. Layanan gratis">
        <LegalP>
          Paket gratis memang gratis. Tidak ada biaya, tidak ada masa uji coba yang berubah menjadi
          paket berbayar, dan tidak ada metode pembayaran yang disimpan. Anda tidak akan pernah
          ditagih karena memakai alat-alat gratis.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Batas waktu refund">
        <LegalP>
          Setelah paket berbayar diluncurkan, Anda dapat meminta pengembalian penuh atas pembayaran
          terakhir Anda dalam waktu <strong>7 hari</strong> sejak tagihan tersebut, dengan
          memperhatikan ketentuan di bawah ini.
        </LegalP>
        <LegalP>
          Karena paket ditagih di muka untuk periode tertentu, refund berlaku untuk pembayaran yang
          Anda persoalkan secara utuh, bukan untuk sebagian periode.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. Yang memenuhi syarat refund">
        <LegalUl>
          <li>Anda ditagih dua kali untuk periode penagihan yang sama.</li>
          <li>Anda ditagih setelah membatalkan langganan, untuk periode yang dimulai setelah pembatalan.</li>
          <li>
            Fitur berbayar tidak berfungsi sebagaimana dijelaskan dan kami tidak dapat
            menyelesaikannya dalam waktu yang wajar setelah Anda melaporkannya.
          </li>
          <li>
            Anda berlangganan karena keliru dan belum memakai fitur berbayar secara berarti, dalam
            batas waktu 7 hari.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. Yang tidak memenuhi syarat">
        <LegalUl>
          <li>Permintaan yang diajukan lebih dari 7 hari setelah tagihan.</li>
          <li>
            Pemakaian kuota berbayar secara berarti selama periode penagihan — paket berbayar adalah
            layanan digital yang langsung diberikan begitu pembayaran diterima.
          </li>
          <li>
            Ketidakpuasan atas kualitas hasil padahal alat bekerja sebagaimana dijelaskan. Paket gratis
            ada agar Anda bisa menilai kualitasnya sebelum membayar.
          </li>
          <li>
            Masalah yang disebabkan oleh perangkat, browser, atau jaringan Anda, atau oleh file sumber
            yang rusak atau berformat yang tidak didukung.
          </li>
          <li>
            Gangguan atau layanan terhenti di luar kendali wajar kami, atau pemeliharaan terjadwal.
          </li>
          <li>
            Akun yang ditangguhkan atau diakhiri karena melanggar{" "}
            <Link href={localeHref("/terms", "id")} className="text-secondary hover:underline">
              Syarat dan Ketentuan
            </Link>{" "}
            kami.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. Cara mengajukan refund">
        <LegalP>
          Hubungi kami melalui{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>{" "}
          dengan menyertakan alamat email yang dipakai untuk pembelian, perkiraan tanggal dan jumlah
          tagihan, serta penjelasan singkat tentang masalahnya. Mohon hubungi kami sebelum mengajukan
          sanggahan ke bank Anda — hampir selalu, masalahnya lebih cepat selesai secara langsung.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Proses & waktu">
        <LegalP>
          Kami berupaya meninjau permintaan refund dalam 3 hari kerja. Refund yang disetujui
          dikembalikan ke metode pembayaran semula melalui pemroses pembayaran kami. Setelah
          dikirim, dana biasanya masuk dalam 5–10 hari kerja, tergantung bank atau penerbit kartu
          Anda — langkah terakhir itu berada di luar kendali kami.
        </LegalP>
        <LegalP>
          Refund dilakukan dalam mata uang transaksi semula. Kami tidak bertanggung jawab atas
          selisih kurs atau biaya yang dikenakan oleh bank Anda.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Pembatalan vs refund">
        <LegalP>
          Membatalkan langganan menghentikan perpanjangan berikutnya; pembatalan tidak otomatis
          mengembalikan dana untuk periode yang sudah dibayar. Setelah Anda membatalkan, akses ke
          fitur berbayar tetap ada sampai akhir periode yang sudah Anda bayar, lalu akun kembali ke
          paket gratis.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Chargeback">
        <LegalP>
          Mohon hubungi kami sebelum mengajukan chargeback (sanggahan transaksi melalui bank atau
          penerbit kartu). Chargeback mahal untuk diselesaikan dan biasanya lebih lambat daripada
          refund langsung. Kami berhak menangguhkan akses ke fitur berbayar selama chargeback masih
          berjalan, dan menolak layanan berbayar di kemudian hari bagi akun dengan sanggahan yang
          curang.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Hak berdasarkan undang-undang">
        <LegalP>
          Tidak ada ketentuan dalam kebijakan ini yang membatasi hak-hak Anda yang tidak dapat
          dikesampingkan berdasarkan hukum perlindungan konsumen yang berlaku bagi Anda. Jika hukum
          setempat memberikan hak pembatalan atau pengembalian dana yang lebih kuat daripada
          kebijakan ini, hukum tersebut yang berlaku.
        </LegalP>
        <LegalP>
          Jika Anda konsumen di Uni Eropa atau Britania Raya, Anda mungkin memiliki hak hukum untuk
          menarik diri dari kontrak layanan digital dalam waktu 14 hari. Jika Anda meminta kami
          untuk segera mulai memberikan layanan, hak tersebut dapat berakhir begitu layanan mulai
          diberikan, sejauh diizinkan oleh hukum.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Perubahan">
        <LegalP>
          Kami dapat memperbarui kebijakan ini seiring perkembangan layanan. Versi yang berlaku adalah
          versi yang diterbitkan pada saat pembelian Anda, dan tanggal &quot;terakhir
          diperbarui&quot; di atas selalu menunjukkan versi yang terbaru.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Kontak">
        <LegalP>
          Untuk pertanyaan apa pun tentang tagihan atau refund, hubungi kami melalui{" "}
          <Link href={localeHref("/contact", "id")} className="text-secondary hover:underline">
            halaman kontak
          </Link>
          . Lihat juga{" "}
          <Link href={localeHref("/terms", "id")} className="text-secondary hover:underline">
            Syarat dan Ketentuan
          </Link>{" "}
          dan{" "}
          <Link href={localeHref("/pricing", "id")} className="text-secondary hover:underline">
            harga
          </Link>{" "}
          kami.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
