// Ambient declarations for image libraries that don't ship TypeScript types.

declare module "gifenc" {
  export interface WriteFrameOpts {
    palette?: number[][];
    /** Frame delay in milliseconds. */
    delay?: number;
    /** 0 = loop forever, -1 = no repeat (set on the first frame). */
    repeat?: number;
    transparent?: boolean;
    transparentIndex?: number;
    dispose?: number;
    first?: boolean;
  }
  export interface Encoder {
    writeFrame(index: Uint8Array | number[], width: number, height: number, opts?: WriteFrameOpts): void;
    finish(): void;
    bytes(): Uint8Array;
    bytesView(): Uint8Array;
    reset(): void;
  }
  export function GIFEncoder(opts?: Record<string, unknown>): Encoder;
  export function quantize(rgba: Uint8Array | Uint8ClampedArray, maxColors: number, opts?: Record<string, unknown>): number[][];
  export function applyPalette(rgba: Uint8Array | Uint8ClampedArray, palette: number[][], format?: string): Uint8Array;
}

declare module "gifuct-js" {
  export interface ParsedFrame {
    dims: { width: number; height: number; top: number; left: number };
    patch: Uint8ClampedArray;
    delay: number;
    disposalType: number;
  }
  export interface ParsedGif {
    lsd: { width: number; height: number };
  }
  export function parseGIF(buffer: ArrayBuffer | Uint8Array): ParsedGif;
  export function decompressFrames(gif: ParsedGif, buildImagePatch: boolean): ParsedFrame[];
}
