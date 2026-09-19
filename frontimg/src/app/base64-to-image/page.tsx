import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/base64-to-image.en";
import { Base64ToImageTool } from "./Base64ToImageTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <Base64ToImageTool />
    </ToolPageShell>
  );
}
