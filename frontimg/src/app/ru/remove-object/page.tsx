import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/remove-object.ru";
import { InpaintTool } from "@/app/remove-object/InpaintTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <InpaintTool mode="object" />
    </ToolPageShell>
  );
}
