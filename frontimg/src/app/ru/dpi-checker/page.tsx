import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/dpi-checker.ru";
import { DpiTool } from "@/app/dpi-converter/DpiTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <DpiTool mode="check" />
    </ToolPageShell>
  );
}
