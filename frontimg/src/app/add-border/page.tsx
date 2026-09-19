import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/add-border.en";
import { AddBorderTool } from "./AddBorderTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <AddBorderTool />
    </ToolPageShell>
  );
}
