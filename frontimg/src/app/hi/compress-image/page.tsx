import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/compress-image.hi";
import { CompressTool } from "@/app/compress-image/CompressTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <CompressTool />
    </ToolPageShell>
  );
}
