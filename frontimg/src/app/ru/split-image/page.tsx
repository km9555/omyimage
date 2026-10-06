import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/split-image.ru";
import { SplitTool } from "@/app/split-image/SplitTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <SplitTool />
    </ToolPageShell>
  );
}
