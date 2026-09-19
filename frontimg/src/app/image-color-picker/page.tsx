import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/image-color-picker.en";
import { ColorPickerTool } from "./ColorPickerTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <ColorPickerTool />
    </ToolPageShell>
  );
}
