import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/blur-face.hi";
import { BlurTool } from "@/app/blur-face/BlurTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <BlurTool />
    </ToolPageShell>
  );
}
