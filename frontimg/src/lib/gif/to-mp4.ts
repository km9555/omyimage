/**
 * Animation → H.264 MP4, encoded by the browser (WebCodecs VideoEncoder) and
 * packaged with mp4-muxer (MIT, pure TypeScript, no codec inside).
 *
 * No encoder ships with the site: the H.264 implementation — and its patent
 * licence — is the browser's or the operating system's (LICENSE-AUDIT.md,
 * rule 4). Where the browser has none, this says so instead of falling back to
 * a bundled one.
 */
import type { FrameSource } from "@/lib/gif/frames";

/** H.264 profiles to try, best first: High, Main, Baseline at a level that fits. */
function candidates(w: number, h: number): string[] {
  const big = w * h > 1280 * 720;
  return big
    ? ["avc1.640033", "avc1.4d0033", "avc1.420033"]
    : ["avc1.640028", "avc1.4d0028", "avc1.42001f", "avc1.42e01f"];
}

export class NoMp4EncoderError extends Error {
  constructor() {
    super("Your browser can't create MP4 video. Try Chrome, Edge or Safari.");
  }
}

async function pickCodec(w: number, h: number, bitrate: number): Promise<string> {
  if (typeof VideoEncoder === "undefined") throw new NoMp4EncoderError();
  for (const codec of candidates(w, h)) {
    try {
      const r = await VideoEncoder.isConfigSupported({ codec, width: w, height: h, bitrate });
      if (r.supported) return codec;
    } catch { /* try the next one */ }
  }
  throw new NoMp4EncoderError();
}

export interface Mp4Options {
  /** Fill behind transparent pixels — video has no transparency. */
  background: string;
  /** Play the animation this many times in a row (MP4s rarely loop). */
  repeat: number;
  onProgress?: (fraction: number) => void;
}

export async function framesToMp4(src: FrameSource, o: Mp4Options): Promise<Blob> {
  // 4:2:0 video needs even dimensions; the extra row/column is background.
  const w = src.width + (src.width & 1);
  const h = src.height + (src.height & 1);
  const avgDelay = src.delays.reduce((a, b) => a + b, 0) / src.delays.length;
  const fps = Math.max(1, Math.min(60, 1000 / avgDelay));
  // GIF-style content is flat and compresses well; this is generous for it.
  const bitrate = Math.round(Math.min(8_000_000, Math.max(400_000, w * h * fps * 0.2)));
  const codec = await pickCodec(w, h, bitrate);

  const { Muxer, ArrayBufferTarget } = await import("mp4-muxer");
  const muxer = new Muxer({ target: new ArrayBufferTarget(), video: { codec: "avc", width: w, height: h }, fastStart: "in-memory" });
  let failure: unknown = null;
  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
    error: (e) => { failure = e; },
  });
  encoder.configure({ codec, width: w, height: h, bitrate, framerate: fps, avc: { format: "avc" } });

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser.");

  const repeat = Math.max(1, Math.round(o.repeat));
  const total = src.delays.length * repeat;
  let t = 0; // microseconds
  let n = 0;
  for (let r = 0; r < repeat; r++) {
    for (let i = 0; i < src.delays.length; i++) {
      if (failure) throw failure;
      const frame = await src.frame(i);
      ctx.fillStyle = o.background;
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(frame, 0, 0);
      const duration = src.delays[i] * 1000;
      const vf = new VideoFrame(canvas, { timestamp: t, duration });
      // A keyframe every ~2 s keeps seeking cheap without bloating the file.
      encoder.encode(vf, { keyFrame: n === 0 || n % Math.max(1, Math.round(fps * 2)) === 0 });
      vf.close();
      t += duration;
      n++;
      o.onProgress?.(n / total);
      // Back-pressure: don't queue the whole animation in the encoder.
      while (encoder.encodeQueueSize > 8) await new Promise((res) => setTimeout(res, 0));
    }
  }
  await encoder.flush();
  encoder.close();
  if (failure) throw failure;
  muxer.finalize();
  return new Blob([muxer.target.buffer], { type: "video/mp4" });
}
