import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-color-picker.hi";
import { ColorPickerTool } from "@/app/image-color-picker/ColorPickerTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ColorPickerTool />
    </ToolPageShell>
  );
}
