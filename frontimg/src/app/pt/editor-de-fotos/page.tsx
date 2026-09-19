import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-editor.pt";
import { AllInOneEditor } from "@/app/image-editor/AllInOneEditor";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <AllInOneEditor />
    </ToolPageShell>
  );
}
