import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/add-text-to-gif.id";
import { GifTextTool } from "@/app/add-text-to-gif/GifTextTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifTextTool />
    </ToolPageShell>
  );
}
