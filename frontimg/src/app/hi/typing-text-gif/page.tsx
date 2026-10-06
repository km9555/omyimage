import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/typing-text-gif.hi";
import { TypingGifTool } from "@/app/typing-text-gif/TypingGifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <TypingGifTool />
    </ToolPageShell>
  );
}
