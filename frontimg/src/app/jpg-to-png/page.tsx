import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/jpg-to-png.en";
import { getTool, toolColor } from "@/lib/tools";
import { ConvertTool } from "@/components/ConvertTool";

const tool = getTool("jpg-to-png")!;

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      {/* i18n-raw: dropHint is an English source string that ConvertTool translates. */}
      <ConvertTool config={{ accent: toolColor(tool), accept: "image/jpeg", targetMime: "image/png", targetLabel: "PNG", flatten: false, quality: false, metadata: true, dropHint: "or drop JPG images here" }} />
    </ToolPageShell>
  );
}
