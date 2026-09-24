import type { Metadata } from "next";
import { ConverterHub } from "@/app/image-converter/ConverterHub";
import { ruImageConverter } from "@/i18n/dictionaries/ru/pages/image-converter";
import { pageMetadata } from "@/lib/i18n/tool-meta";

const TITLE = "Конвертер изображений — JPG, PNG, WEBP, AVIF и другие";
const DESCRIPTION =
  "Бесплатный онлайн-конвертер форматов изображений. Переводите файлы между JPG, PNG, WEBP, AVIF, GIF, BMP и JFIF прямо в браузере — пачкой, без регистрации и водяных знаков.";

export const metadata: Metadata = pageMetadata({
  englishPath: "/image-converter",
  locale: "ru",
  title: `${TITLE} | oMyImage`,
  description: DESCRIPTION,
});

export default function Page() {
  return (
    <ConverterHub
      locale="ru"
      dict={ruImageConverter}
      heading="Конвертер изображений"
      schemaName={TITLE}
      description={DESCRIPTION}
    />
  );
}
