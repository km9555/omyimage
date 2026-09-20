import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { ptImageConverter } from "@/i18n/dictionaries/pt/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Conversor de imagens — JPG, PNG, WEBP, AVIF e mais";
const DESCRIPTION =
  "Conversores de formato de imagem online e grátis. Converta entre JPG, PNG, WEBP, AVIF, GIF, BMP e JFIF no seu navegador — em lote, sem cadastro e sem marca d'água.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "pt",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="pt"
      dict={ptImageConverter}
      heading="Conversor de imagens"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}
