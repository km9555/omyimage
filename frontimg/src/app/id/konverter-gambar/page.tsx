import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { idImageConverter } from "@/i18n/dictionaries/id/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Konverter Gambar Online — JPG, PNG, WEBP, AVIF, dan Lainnya";
const DESCRIPTION =
  "Konverter format gambar online gratis. Ubah file antara JPG, PNG, WEBP, AVIF, GIF, BMP, dan JFIF langsung di browser — sekaligus banyak, tanpa daftar, tanpa watermark.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "id",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="id"
      dict={idImageConverter}
      heading="Konverter Gambar"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}
