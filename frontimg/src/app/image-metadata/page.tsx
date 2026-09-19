import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-metadata.en";
import { MetadataTool } from "./MetadataTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <MetadataTool />
    </ToolPageShell>
  );
}
