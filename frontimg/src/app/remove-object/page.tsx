import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/remove-object.en";
import { InpaintTool } from "./InpaintTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <InpaintTool mode="object" />
    </ToolPageShell>
  );
}
