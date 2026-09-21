import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/rotate-image.hi";
import { RotateTool } from "@/app/rotate-image/RotateTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <RotateTool />
    </ToolPageShell>
  );
}
