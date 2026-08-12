"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Icon } from "@/components/Icon";
import { TopLoadingBar } from "@/components/TopLoadingBar";
import { Dropzone } from "@/components/image/Dropzone";
import { formatBytes } from "@/lib/image/raster";
import { useHandoff } from "@/lib/tool-handoff";

const ACCENT = "#5388C9";
const ACCEPT = "image/jpeg,image/png,image/webp,image/tiff,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.tif,.tiff,.heic,.heif";

type Row = { label: string; value: string };
type Meta = Record<string, unknown>;

const num = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? v : null);

function fmtExposure(v: unknown): string | null {
  const n = num(v);
  if (n == null) return null;
  return n < 1 ? `1/${Math.round(1 / n)} s` : `${n} s`;
}

function buildSections(m: Meta): { title: string; icon: string; rows: Row[] }[] {
  const push = (rows: Row[], label: string, value: unknown, suffix = "") => {
    if (value === undefined || value === null || value === "") return;
    let s: string;
    if (value instanceof Date) s = value.toLocaleString();
    else if (Array.isArray(value)) s = value.join(", ");
    else s = String(value);
    if (s.trim()) rows.push({ label, value: s + suffix });
  };

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

  const image: Row[] = [];
  if (num(m.ExifImageWidth) != null && num(m.ExifImageHeight) != null) push(image, "Dimensions", `${m.ExifImageWidth} × ${m.ExifImageHeight} px`);
  else if (num(m.ImageWidth) != null && num(m.ImageHeight) != null) push(image, "Dimensions", `${m.ImageWidth} × ${m.ImageHeight} px`);
  push(image, "Orientation", m.Orientation);
  push(image, "Color space", m.ColorSpace);
  push(image, "X resolution", m.XResolution);
  push(image, "Resolution unit", m.ResolutionUnit);

  const when: Row[] = [];
  push(when, "Taken", m.DateTimeOriginal);
  push(when, "Digitized", m.DateTimeDigitized ?? m.CreateDate);
  push(when, "Modified", m.ModifyDate);

  const author: Row[] = [];
  push(author, "Artist", m.Artist);
  push(author, "Copyright", m.Copyright);
  push(author, "Description", m.ImageDescription ?? m.description);

  return [
    { title: "Camera", icon: "photo_camera", rows: camera },
    { title: "Exposure", icon: "shutter_speed", rows: exposure },
    { title: "Image", icon: "image", rows: image },
    { title: "Date & time", icon: "calendar_today", rows: when },
    { title: "Author & rights", icon: "copyright", rows: author },
  ].filter((s) => s.rows.length > 0);
}

export function MetadataTool() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [gps, setGps] = useState<{ latitude: number; longitude: number } | null>(null);
  const [parsed, setParsed] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [showRaw, setShowRaw] = useState(false);

  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  const loadFile = useCallback(async (incoming: FileList | File[]) => {
    const f = Array.from(incoming).find((x) => x.type.startsWith("image/") || /\.(jpe?g|png|webp|tiff?|heic|heif)$/i.test(x.name));
    if (!f) { toast.error("Please select an image file."); return; }
    setIsWorking(true);
    setUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setFile(f);
    try {
      const exifr = (await import("exifr")).default;
      const data = (await exifr.parse(f, true).catch(() => null)) as Meta | null;
      let coords: { latitude: number; longitude: number } | null = null;
      try { coords = await exifr.gps(f); } catch { /* no gps */ }
      setMeta(data ?? {});
      setGps(coords && Number.isFinite(coords.latitude) ? coords : null);
    } catch {
      setMeta({});
      setGps(null);
    } finally {
      setParsed(true);
      setIsWorking(false);
    }
  }, []);

  useHandoff(loadFile);

  const reset = () => { if (url) URL.revokeObjectURL(url); setFile(null); setUrl(null); setMeta(null); setGps(null); setParsed(false); setShowRaw(false); };

  if (!file || !url) {
    return (
      <section>
        <TopLoadingBar active={isWorking} />
        <Dropzone onFiles={loadFile} accept={ACCEPT} accent={ACCENT} icon="info" multiple={false} buttonLabel="Select an image" hint="or drop a JPG, PNG, TIFF or HEIC photo here" />
      </section>
    );
  }

  const sections = meta ? buildSections(meta) : [];
  const hasAny = sections.length > 0 || gps;
  const rawEntries = meta ? Object.entries(meta).filter(([, v]) => v !== undefined && v !== null && typeof v !== "object") : [];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
      <span data-tool-active hidden aria-hidden="true" />
      <TopLoadingBar active={isWorking} />

      <div className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
        <div className="bg-surface-container rounded-xl border border-surface-variant p-3 flex items-center justify-center overflow-hidden" style={{ minHeight: 220 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={file.name} className="max-w-full max-h-[46vh] rounded" />
        </div>
        <p className="text-center text-label-sm font-label-sm text-on-surface-variant truncate">
          <span className="font-semibold text-on-surface">{file.name}</span> · {formatBytes(file.size)} · {file.type || "image"}
        </p>
        <button type="button" onClick={reset} className="self-center inline-flex items-center gap-1.5 text-label-md font-medium text-on-surface-variant hover:text-error"><Icon name="close" className="text-[18px]" /> Change image</button>
      </div>

      <div className="lg:sticky lg:top-24 flex flex-col gap-4">
        {parsed && !hasAny && (
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl ambient-shadow p-5 flex items-start gap-2.5">
            <Icon name="info" className="text-[20px] mt-0.5" style={{ color: ACCENT }} />
            <p className="text-body-md text-on-surface-variant">No EXIF metadata was found in this image. It may have been stripped already, or the format doesn't store EXIF (e.g. most PNGs).</p>
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
                  <dt className="text-on-surface-variant">{r.label}</dt>
                  <dd className="text-primary font-semibold text-right break-words">{r.value}</dd>
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
                    <dt className="text-on-surface-variant font-label-sm">{k}</dt>
                    <dd className="text-primary font-semibold text-right break-words font-label-sm">{v instanceof Date ? v.toLocaleString() : String(v)}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
