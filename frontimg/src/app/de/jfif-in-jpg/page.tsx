import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "jfif-to-jpg";
export const metadata = buildConverterMetadata(SLUG, "de");
export default function Page() {
  return <ConverterPage slug={SLUG} locale="de" />;
}
