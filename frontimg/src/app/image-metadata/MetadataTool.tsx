"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { ToolWorkspace } from "@/components/tool/ToolWorkspace";
import { SettingsRail } from "@/components/tool/SettingsRail";
import { Dropzone } from "@/components/image/Dropzone";
import { downloadBlob, formatBytes, baseName } from "@/lib/image/raster";
import { md5Hex, sha256Hex, hexHeader } from "@/lib/image/file-hash";
import { readFormatInfo } from "@/lib/image/format-info";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#5388C9";
const ACCEPT = "image/jpeg,image/png,image/webp,image/tiff,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.tif,.tiff,.heic,.heif";

type Row = { label: string; value: string };
type Section = { title: string; icon: string; rows: Row[] };
type Meta = Record<string, unknown>;

const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);

function fmtExposure(v: unknown): string | null {
  const n = num(v);
  if (n == null) return null;
  return n < 1 ? `1/${Math.round(1 / n)} s` : `${n} s`;
}

const push = (rows: Row[], label: string, value: unknown, suffix = "") => {
  if (value === undefined || value === null || value === "") return;
  let s: string;
  if (value instanceof Date) s = value.toLocaleString();
  else if (Array.isArray(value)) s = value.join(", ");
  else s = String(value);
  if (s.trim()) rows.push({ label, value: s + suffix });
};

/**
 * Everything we know, grouped and ordered so the rows that exist for *every*
 * file come first.
 *
 * That ordering is the point: a photo off a messaging app has had its EXIF
 * stripped, so Camera/Exposure/Date are all empty and the only real content is
 * File + Image. Leading with EXIF made the tool look broken on exactly the
 * files people most often paste into it.
 */
function buildSections(
  file: File,
  m: Meta,
  hashes: { md5?: string; sha256?: string },
  fmtRows: Row[],
  decoded: { w: number; h: number } | null
): Section[] {
  const fileRows: Row[] = [];
  push(fileRows, "File name", file.name);
  push(fileRows, "File size", `${formatBytes(file.size)} (${file.size.toLocaleString()} bytes)`);
  push(fileRows, "File type", (file.type || "").split("/")[1]?.toUpperCase() || "Unknown");
  push(fileRows, "Extension", file.name.includes(".") ? file.name.split(".").pop()!.toLowerCase() : "");
  push(fileRows, "MIME type", file.type || "unknown");
  push(fileRows, "Last modified", file.lastModified ? new Date(file.lastModified) : null);
  push(fileRows, "MD5", hashes.md5);
  push(fileRows, "SHA-256", hashes.sha256);

  const image: Row[] = [];
  const w = num(m.ExifImageWidth) ?? num(m.ImageWidth) ?? decoded?.w ?? null;
  const h = num(m.ExifImageHeight) ?? num(m.ImageHeight) ?? decoded?.h ?? null;
  if (w != null && h != null) {
    push(image, "Dimensions", `${w} × ${h} px`);
    push(image, "Megapixels", ((w * h) / 1_000_000).toFixed(1));
    push(image, "Aspect ratio", aspectRatio(w, h));
  }
  // Container-declared facts (encoding process, subsampling, bit depth …).
  fmtRows.forEach((r) => push(image, r.label, r.value));
  push(image, "Orientation", m.Orientation);
  push(image, "Color space", m.ColorSpace);
  if (!fmtRows.some((r) => r.label === "X resolution")) {
    push(image, "X resolution", m.XResolution);
    push(image, "Resolution unit", m.ResolutionUnit);
  }

  const camera: Row[] = [];
  push(camera, "Camera make", m.Make);
  push(camera, "Camera model", m.Model);
  push(camera, "Lens", m.LensModel ?? m.LensMake);
  push(camera, "Software", m.Software);

  const exposure: Row[] = [];
  if (num(m.FNumber) != null) push(exposure, "Aperture", `f/${m.FNumber}`);
  const exp = fmtExposure(m.ExposureTime);
  if (exp) push(exposure, "Shutter speed", exp);
  push(exposure, "ISO", m.ISO);
  if (num(m.FocalLength) != null) push(exposure, "Focal length", `${m.FocalLength} mm`);
  if (num(m.FocalLengthIn35mmFormat) != null) push(exposure, "Focal length (35mm)", `${m.FocalLengthIn35mmFormat} mm`);
  push(exposure, "Flash", m.Flash);
  push(exposure, "Exposure program", m.ExposureProgram);
  push(exposure, "Metering mode", m.MeteringMode);
  push(exposure, "White balance", m.WhiteBalance);

  const when: Row[] = [];
  push(when, "Taken", m.DateTimeOriginal);
  push(when, "Digitized", m.DateTimeDigitized ?? m.CreateDate);
  push(when, "Modified", m.ModifyDate);

  const author: Row[] = [];
  push(author, "Artist", m.Artist);
  push(author, "Copyright", m.Copyright);
  push(author, "Description", m.ImageDescription ?? m.description);

  return [
    { title: "File", icon: "description", rows: fileRows },
    { title: "Image", icon: "image", rows: image },
    { title: "Camera", icon: "photo_camera", rows: camera },
    { title: "Exposure", icon: "shutter_speed", rows: exposure },
    { title: "Date & time", icon: "calendar_today", rows: when },
    { title: "Author & rights", icon: "copyright", rows: author },
  ].filter((s) => s.rows.length > 0);
}

function aspectRatio(w: number, h: number): string {
  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  const g = gcd(w, h) || 1;
  const rw = w / g;
  const rh = h / g;
  // Past ~32 the "exact" ratio stops being recognisable (1129:2048), so fall
  // back to a decimal that still tells you the shape.
  return rw <= 32 && rh <= 32 ? `${rw}:${rh}` : `${(w / h).toFixed(2)}:1`;
}

export function MetadataTool() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [gps, setGps] = useState<{ latitude: number; longitude: number } | null>(null);
  const [hashes, setHashes] = useState<{ md5?: string; sha256?: string }>({});
  const [fmtRows, setFmtRows] = useState<Row[]>([]);
  const [decoded, setDecoded] = useState<{ w: number; h: number } | null>(null);
  const [header, setHeader] = useState<string>("");
  const [parsed, setParsed] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [showRaw, setShowRaw] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/") || /\.(jpe?g|png|webp|tiff?|heic|heif|gif|bmp)$/i.test(x.name));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setFile(f);
    setHashes({});
    setFmtRows([]);
    setDecoded(null);
    setHeader("");
    try {
      const bytes = new Uint8Array(await f.arrayBuffer());

      // Container-level facts first — these survive an EXIF strip.
      const info = readFormatInfo(bytes);
      setFmtRows(info?.rows ?? []);
      setHeader(hexHeader(bytes, 128));

      // Dimensions for any format the browser can decode, so this row is
      // present even when neither EXIF nor the container parser supplies it.
      if (!info?.width || !info?.height) {
        try {
          const bmp = await createImageBitmap(f);
          setDecoded({ w: bmp.width, h: bmp.height });
          bmp.close();
        } catch { /* undecodable — dimensions stay unknown */ }
      } else {
        setDecoded({ w: info.width, h: info.height });
      }

      const exifr = (await import("exifr")).default;
      const data = (await exifr.parse(f, true).catch(() => null)) as Meta | null;
      let coords: { latitude: number; longitude: number } | null = null;
      try { coords = await exifr.gps(f); } catch { /* no gps */ }
      setMeta(data ?? {});
      setGps(coords && Number.isFinite(coords.latitude) ? coords : null);

      // Hashing is pure CPU and the only slow step on a big file, so it lands
      // last — everything above is already on screen by now.
      setHashes({ md5: md5Hex(bytes), sha256: await sha256Hex(bytes) });
    } catch {
      setMeta({});
      setGps(null);
    } finally {
      setParsed(true);
      setIsWorking(false);
    }
  }, []);

  useHandoff(loadFile);

  const reset = () => {
    if (url) URL.revokeObjectURL(url);
    setFile(null); setUrl(null); setMeta(null); setGps(null);
    setHashes({}); setFmtRows([]); setDecoded(null); setHeader("");
    setParsed(false); setShowRaw(false); setShowHeader(false);
  };

  const sections = useMemo(
    () => (file && meta ? buildSections(file, meta, hashes, fmtRows, decoded) : []),
    [file, meta, hashes, fmtRows, decoded]
  );

  const rawEntries = useMemo(
    () => (meta ? Object.entries(meta).filter(([, v]) => v !== undefined && v !== null && typeof v !== "object") : []),
    [meta]
  );

  const exportTxt = () => {
    if (!file) return;
    const lines: string[] = [
      `Metadata of ${file.name}`,
      "",
      "Extracted automatically in your browser. It may be neither complete nor",
      "accurate — metadata can be edited or removed at any point in a file's life.",
      "",
    ];
    for (const s of sections) {
      lines.push(`── ${s.title} ──`);
      const pad = Math.max(...s.rows.map((r) => r.label.length));
      for (const r of s.rows) lines.push(`  ${r.label.padEnd(pad)}  ${r.value}`);
      lines.push("");
    }
    if (gps) {
      lines.push("── Location ──", `  Latitude   ${gps.latitude}`, `  Longitude  ${gps.longitude}`, "");
    }
    if (rawEntries.length) {
      lines.push(`── All metadata (${rawEntries.length}) ──`);
      const pad = Math.max(...rawEntries.map(([k]) => k.length));
      for (const [k, v] of rawEntries) {
        lines.push(`  ${k.padEnd(pad)}  ${v instanceof Date ? v.toISOString() : String(v)}`);
      }
      lines.push("");
    }
    if (header) lines.push("── Raw header (first 128 bytes) ──", `  ${header}`, "");
    lines.push(`Generated by oMyImage — ${new Date().toLocaleString()}`);
    downloadBlob(new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" }), `${baseName(file.name)}-metadata.txt`);
    toast.success("Downloaded metadata as TXT.");
  };

  const exportJson = () => {
    if (!file) return;
    const payload = {
      file: {
        name: file.name,
        size: file.size,
        type: file.type || null,
        lastModified: file.lastModified ? new Date(file.lastModified).toISOString() : null,
        md5: hashes.md5 ?? null,
        sha256: hashes.sha256 ?? null,
      },
      // Grouped exactly as shown on screen, so the JSON matches what was read.
      sections: Object.fromEntries(
        sections.map((s) => [s.title, Object.fromEntries(s.rows.map((r) => [r.label, r.value]))])
      ),
      gps: gps ? { latitude: gps.latitude, longitude: gps.longitude } : null,
      raw: Object.fromEntries(
        rawEntries.map(([k, v]) => [k, v instanceof Date ? v.toISOString() : v])
      ),
      rawHeader: header || null,
      generatedBy: "oMyImage",
      generatedAt: new Date().toISOString(),
    };
    downloadBlob(
      new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }),
      `${baseName(file.name)}-metadata.json`
    );
    toast.success("Downloaded metadata as JSON.");
  };

  const copyAll = async () => {
    const text = sections
      .map((s) => `${s.title}\n${s.rows.map((r) => `  ${r.label}: ${r.value}`).join("\n")}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard.");
    } catch {
      toast.error("Couldn't copy to the clipboard.");
    }
  };

  if (!file || !url) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="info" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, TIFF or HEIC photo here" />
      </section>
    );
  }

  const onlyFileFacts = sections.every((s) => s.title === "File" || s.title === "Image");

  return (
    <>
      <TopLoadingBar active={isWorking} />
      <ToolWorkspace
        main={
          <>
            <div className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={file.name} className="max-w-full max-h-[46vh] rounded" />
            </div>
            <p className="text-center text-label-sm font-label-sm text-on-surface-variant truncate">
              <span className="font-semibold text-on-surface">{file.name}</span> · {formatBytes(file.size)} · {file.type || "image"}
            </p>
            <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
          </>
        }
        rail={
          <SettingsRail
            title="Metadata"
            icon="info"
            accent={ACCENT}
            footer={
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <button type="button" onClick={exportTxt} className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary py-2.5 text-label-md font-semibold text-on-secondary transition-colors hover:bg-secondary-container">
                    <Icon name="description" className="text-[18px]" /> TXT
                  </button>
                  <button type="button" onClick={exportJson} className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary py-2.5 text-label-md font-semibold text-on-secondary transition-colors hover:bg-secondary-container">
                    <Icon name="data_object" className="text-[18px]" /> JSON
                  </button>
                </div>
                <button type="button" onClick={copyAll} className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-secondary py-2 text-label-md font-semibold text-secondary transition-colors hover:bg-secondary/10">
                  <Icon name="content_copy" className="text-[18px]" /> Copy all
                </button>
              </div>
            }
          >
            {parsed && onlyFileFacts && (
              <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex items-start gap-2.5">
                <Icon name="info" className="text-[20px] mt-0.5 shrink-0" style={{ color: ACCENT }} />
                <p className="text-body-md text-on-surface-variant">
                  No EXIF block in this file — messaging apps and social networks usually strip it. The file and image
                  details below are read from the image itself, so they are still accurate.
                </p>
              </div>
            )}

            {gps && (
              <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
                <h2 className="flex items-center gap-2 text-headline-md font-bold text-primary"><Icon name="location_on" style={{ color: ACCENT }} /> Location</h2>
                <p className="text-body-md text-on-surface font-label-sm">{gps.latitude.toFixed(6)}, {gps.longitude.toFixed(6)}</p>
                <a href={`https://www.openstreetmap.org/?mlat=${gps.latitude}&mlon=${gps.longitude}#map=15/${gps.latitude}/${gps.longitude}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-label-md font-semibold text-secondary hover:underline"><Icon name="map" className="text-[18px]" /> View on map</a>
              </div>
            )}

            {sections.map((s) => (
              <div key={s.title} className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
                <h2 className="flex items-center gap-2 text-headline-md font-bold text-primary"><Icon name={s.icon} style={{ color: ACCENT }} /> {s.title}</h2>
                <dl className="flex flex-col gap-1.5">
                  {s.rows.map((r) => (
                    <div key={r.label} className="flex items-start justify-between gap-3 text-body-md">
                      <dt className="shrink-0 text-on-surface-variant">{r.label}</dt>
                      <dd className="text-primary font-semibold text-right break-all">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            {rawEntries.length > 0 && (
              <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
                <button type="button" onClick={() => setShowRaw((v) => !v)} className="flex items-center justify-between text-headline-md font-bold text-primary">
                  <span className="flex items-center gap-2"><Icon name="data_object" style={{ color: ACCENT }} /> All metadata ({rawEntries.length})</span>
                  <Icon name={showRaw ? "expand_less" : "expand_more"} />
                </button>
                {showRaw && (
                  <dl className="flex flex-col gap-1.5 max-h-[40vh] overflow-y-auto pr-1">
                    {rawEntries.map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-3 text-label-md">
                        <dt className="shrink-0 text-on-surface-variant font-label-sm">{k}</dt>
                        <dd className="text-primary font-semibold text-right break-all font-label-sm">{v instanceof Date ? v.toLocaleString() : String(v)}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            )}

            {header && (
              <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex flex-col gap-3">
                <button type="button" onClick={() => setShowHeader((v) => !v)} className="flex items-center justify-between text-headline-md font-bold text-primary">
                  <span className="flex items-center gap-2"><Icon name="terminal" style={{ color: ACCENT }} /> Raw header</span>
                  <Icon name={showHeader ? "expand_less" : "expand_more"} />
                </button>
                {showHeader && (
                  <p className="font-mono text-label-sm leading-relaxed break-all text-on-surface-variant">{header}</p>
                )}
              </div>
            )}
          </SettingsRail>
        }
      />
    </>
  );
}
