import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/gif-cropper.en";
import { GifEditTool } from "./GifEditTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <GifEditTool mode="crop" />
    </ToolPageShell>
  );
}
