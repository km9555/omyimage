import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/merge-images.hi";
import { MergeTool } from "@/app/merge-images/MergeTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <MergeTool />
    </ToolPageShell>
  );
}
