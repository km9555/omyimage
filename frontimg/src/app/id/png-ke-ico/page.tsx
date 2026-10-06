import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/png-to-ico.id";
import { PngToIcoTool } from "@/app/png-to-ico/PngToIcoTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <PngToIcoTool />
    </ToolPageShell>
  );
}
