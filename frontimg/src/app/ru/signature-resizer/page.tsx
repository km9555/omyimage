import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/signature-resizer.ru";
import { SignatureResizerTool } from "@/app/signature-resizer/SignatureResizerTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <SignatureResizerTool />
    </ToolPageShell>
  );
}
