import { ConverterPage } from "@/components/ConverterPage";
import { buildConverterMetadata } from "@/lib/converters/metadata";

const SLUG = "avif-to-png";
export const metadata = buildConverterMetadata(SLUG, "hi");
export default function Page() {
  return <ConverterPage slug={SLUG} locale="hi" />;
}
