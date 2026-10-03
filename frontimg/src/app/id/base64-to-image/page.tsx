import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/base64-to-image.id";
import { Base64ToImageTool } from "@/app/base64-to-image/Base64ToImageTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <Base64ToImageTool />
    </ToolPageShell>
  );
}
