import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/typing-text-gif.en";
import { TypingGifTool } from "./TypingGifTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <TypingGifTool />
    </ToolPageShell>
  );
}
