import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-metadata.pt";
import { MetadataTool } from "@/app/image-metadata/MetadataTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <MetadataTool />
    </ToolPageShell>
  );
}
