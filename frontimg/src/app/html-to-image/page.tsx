import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/html-to-image.en";
import { HtmlToImageTool } from "./HtmlToImageTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <HtmlToImageTool />
    </ToolPageShell>
  );
}
