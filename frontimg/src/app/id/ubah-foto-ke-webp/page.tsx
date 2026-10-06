import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/convert-to-webp.id";
import { getTool, toolColor } from "@/lib/tools";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("convert-to-webp")!;

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      {/* i18n-raw: dropHint is an English source string that ConvertTool translates. */}
      <ConvertTool config={{ accent: toolColor(tool), accept: "image/jpeg,image/png,image/gif,image/bmp", targetMime: "image/webp", targetLabel: "WEBP", flatten: false, quality: true, metadata: false, dropHint: "or drop JPG, PNG, GIF or BMP images here" }} />
    </ToolPageShell>
  );
}
