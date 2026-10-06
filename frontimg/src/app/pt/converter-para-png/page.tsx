import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/convert-to-png.pt";
import { getTool, toolColor } from "@/lib/tools";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("convert-to-png")!;

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      {/* i18n-raw: dropHint is an English source string that ConvertTool translates. */}
      <ConvertTool config={{ accent: toolColor(tool), accept: "image/jpeg,image/webp,image/gif,image/bmp", targetMime: "image/png", targetLabel: "PNG", flatten: false, quality: false, metadata: true, dropHint: "or drop JPG, WEBP, GIF or BMP images here" }} />
    </ToolPageShell>
  );
}
