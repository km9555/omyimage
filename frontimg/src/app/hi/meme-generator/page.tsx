import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/meme-generator.hi";
import { MemeTool } from "@/app/meme-generator/MemeTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <MemeTool />
    </ToolPageShell>
  );
}
