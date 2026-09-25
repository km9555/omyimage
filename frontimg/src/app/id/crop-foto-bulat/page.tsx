import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/circle-crop.id";
import { CircleCropTool } from "@/app/circle-crop/CircleCropTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <CircleCropTool />
    </ToolPageShell>
  );
}
