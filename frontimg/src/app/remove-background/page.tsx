import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/remove-background.en";
import { RemoveBgTool } from "./RemoveBgTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <RemoveBgTool />
    </ToolPageShell>
  );
}
