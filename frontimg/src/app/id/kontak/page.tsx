import { ContactBody } from "@/app/contact/ContactBody";
import { idContact } from "@/i18n/dictionaries/id/pages/contact";
import { pageMetadata } from "@/lib/i18n/tool-meta";

export const metadata = pageMetadata({
  englishPath: "/contact",
  locale: "id",
  title: "Kontak — Hubungi Tim oMyImage",
  description:
    "Hubungi tim oMyImage: bantuan, laporan bug, pertanyaan privasi, dan kerja sama. Kami biasanya membalas dalam dua hari kerja.",
});

export default function Page() {
  return <ContactBody locale="id" dict={idContact} />;
}
