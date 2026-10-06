/**
 * Frames out of a video file, using the browser's own <video> decoder.
 *
 * No ffmpeg.wasm: its default build carries GPL x264 (LICENSE-AUDIT.md), and
 * the browser already decodes MP4, WebM and MOV (H.264, VP8/VP9, AV1 — HEVC
 * only where the system supports it). Each frame is reached with an exact
 * seek and drawn to a canvas, which is slower than playing but frame-accurate
 * and independent of the device's speed.
 */

export interface LoadedVideo {
  video: HTMLVideoElement;
  url: string;
  width: number;
  height: number;
  /** Seconds. */
  duration: number;
}

export async function loadVideo(file: File): Promise<LoadedVideo> {
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.src = url;
  try {
    await new Promise<void>((resolve, reject) => {
      video.onloadeddata = () => resolve();
      video.onerror = () => reject(new Error("This video can't be played in your browser."));
    });
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
  if (!video.videoWidth || !video.videoHeight || !Number.isFinite(video.duration)) {
    URL.revokeObjectURL(url);
    throw new Error("This video can't be played in your browser.");
  }
  return { video, url, width: video.videoWidth, height: video.videoHeight, duration: video.duration };
}

function seekTo(video: HTMLVideoElement, t: number): Promise<void> {
  return new Promise((resolve) => {
    if (Math.abs(video.currentTime - t) < 0.0005 && !video.seeking) { resolve(); return; }
    const done = () => { clearTimeout(timer); video.removeEventListener("seeked", done); resolve(); };
    // A seek that never reports (a stalled decoder) must not hang the export.
    const timer = setTimeout(done, 4000);
    video.addEventListener("seeked", done);
    video.currentTime = t;
  });
}

/**
 * Per-frame delays for `count` frames at `fps`, in whole centiseconds (GIF's
 * unit) chosen so the running total stays on the true timeline — 15 fps
 * becomes 70, 60, 70, 70, 60 … ms rather than 70 ms every frame, which would
 * stretch a 10-second clip by a second.
 */
export function fpsDelays(count: number, fps: number): number[] {
  const at = (i: number) => Math.round((i * 100) / fps) * 10;
  return Array.from({ length: count }, (_, i) => Math.max(20, at(i + 1) - at(i)));
}

export interface GrabOptions {
  start: number;
  end: number;
  fps: number;
  width: number;
  height: number;
  onProgress?: (fraction: number) => void;
}

/** RGBA frames from `start` to `end` seconds at `fps`, scaled to width × height. */
export async function grabFrames(v: LoadedVideo, o: GrabOptions): Promise<Uint8ClampedArray[]> {
  const start = Math.max(0, Math.min(o.start, v.duration));
  const end = Math.max(start, Math.min(o.end, v.duration));
  const count = Math.max(1, Math.round((end - start) * o.fps));
  const canvas = document.createElement("canvas");
  canvas.width = o.width;
  canvas.height = o.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("Canvas is not supported in this browser.");
  ctx.imageSmoothingQuality = "high";

  const frames: Uint8ClampedArray[] = [];
  for (let i = 0; i < count; i++) {
    // Sample the middle of each frame's slot, clear of the boundary, and
    // never past the last decodable instant.
    const t = Math.min(start + (i + 0.5) / o.fps, Math.max(0, v.duration - 0.001));
    await seekTo(v.video, t);
    ctx.drawImage(v.video, 0, 0, o.width, o.height);
    frames.push(ctx.getImageData(0, 0, o.width, o.height).data);
    o.onProgress?.((i + 1) / count);
  }
  return frames;
}
