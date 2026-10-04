import { ToolPageShell } from "@/components/ToolPageShell";
import { toolMetadata } from "@/lib/i18n/tool-meta";
import content from "@/content/tools/passport-photo-maker.ru";
import { PassportPhotoTool } from "@/app/passport-photo-maker/PassportPhotoTool";

export const metadata = toolMetadata(content);

export default function Page() {
  return (
    <ToolPageShell content={content}>
      <PassportPhotoTool />
    </ToolPageShell>
  );
}
