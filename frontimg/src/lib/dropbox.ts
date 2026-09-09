/**
 * Dropbox Chooser integration.
 *
 * Ported from oMyPDF's `lib/dropbox.ts`, the sibling of `lib/google-drive.ts`.
 * Entirely client-side: Dropbox's own popup does the picking and hands back
 * temporary direct-download links (good for ~4 hours), and we fetch the bytes
 * straight into the browser. Nothing passes through our server, so the "your
 * images never leave your device" promise still holds — Dropbox to browser.
 *
 * One env var, a PUBLIC client-side identifier that ships in the bundle:
 *   NEXT_PUBLIC_DROPBOX_APP_KEY — the Dropbox app key
 *
 * The key alone is not enough. The app's "Chooser / Saver / Embedder domains"
 * list in the Dropbox console must contain the origin serving the page, or the
 * popup opens and refuses. `localhost` is registered, which is why the dev
 * server has to run on a localhost origin (see .env.local.example).
 */

const APP_KEY = process.env.NEXT_PUBLIC_DROPBOX_APP_KEY ?? "";

/** Required; without it the UI hides the entry point entirely. */
export const dropboxConfigured = Boolean(APP_KEY);

/**
 * Extension to mime type, for everything the tools can decode.
 *
 * This map is load-bearing, and it is the main reason this file diverges from
 * the oMyPDF original. The Chooser reports a file's name and size but NO mime
 * type, and oMyPDF could get away with hardcoding "application/pdf". Here
 * every tool gates uploads on `f.type.startsWith("image/")`, so a File built
 * without a real type is dropped on arrival with no error at all — the import
 * simply vanishes. It is the same trap google-drive.ts documents for Drive.
 */
const EXT_MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".jfif": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".avif": "image/avif",
  // Only /image-to-base64 accepts SVG, and it asks for it by mime type. Kept
  // out of IMAGE_EXTENSIONS below so it is never offered by default — exactly
  // as IMAGE_MIME_TYPES omits it on the Drive side.
  ".svg": "image/svg+xml",
};

/**
 * Extensions the Chooser offers when a tool names no preference.
 *
 * The counterpart to `IMAGE_MIME_TYPES` in google-drive.ts, and deliberately
 * the same set of formats.
 */
export const IMAGE_EXTENSIONS = [
  ".jpg", ".jpeg", ".jfif", ".png", ".webp",
  ".gif", ".bmp", ".tif", ".tiff",
  ".heic", ".heif", ".avif",
];

/**
 * Turn a tool's `accept` string into Chooser extensions.
 *
 * The counterpart to `mimeOnly()` in Dropzone.tsx, and the mirror image of the
 * problem it solves: tool accept lists mix mime types with bare extensions,
 * the Drive picker understands only the former and the Chooser only the
 * latter. So this keeps the extensions, reverse-maps the mime types, and
 * treats `image/*` as "everything" — which is what /blur-face asks for.
 */
export function extensionsFromAccept(accept?: string): string[] {
  if (!accept) return IMAGE_EXTENSIONS;

  const out = new Set<string>();
  for (const raw of accept.split(",")) {
    const token = raw.trim().toLowerCase();
    if (!token) continue;
    if (token === "image/*" || token === "*/*") return IMAGE_EXTENSIONS;
    if (token.startsWith(".")) {
      if (EXT_MIME[token]) out.add(token);
      continue;
    }
    for (const ext of Object.keys(EXT_MIME)) {
      if (EXT_MIME[ext] === token) out.add(ext);
    }
  }

  // An accept list we understand nothing of should still open a usable picker
  // rather than one showing no files at all.
  return out.size ? [...out] : IMAGE_EXTENSIONS;
}

/** Resolve a mime type from the filename, falling back to what the CDN said. */
function mimeForName(name: string, fallback: string): string {
  const dot = name.lastIndexOf(".");
  const ext = dot === -1 ? "" : name.slice(dot).toLowerCase();
  if (EXT_MIME[ext]) return EXT_MIME[ext];
  // The extension wins over `fallback` on purpose: direct links from
  // dl.dropboxusercontent.com routinely come back as application/octet-stream.
  return fallback && fallback !== "application/octet-stream"
    ? fallback
    : "application/octet-stream";
}

// ── Minimal type shims for the Dropbox drop-in ──────────────────────────────

interface DropboxChooseOptions {
  success: (files: DropboxFile[]) => void;
  cancel?: () => void;
  /** `preview` hands back a shareable page; we always want the file itself. */
  linkType: "preview" | "direct";
  multiselect: boolean;
  extensions?: string[];
  folderselect?: boolean;
}

interface DropboxFile {
  name: string;
  /** Temporary direct-download URL. Expires after roughly four hours. */
  link: string;
  bytes: number;
  icon: string;
  thumbnailLink?: string;
  isDir: boolean;
}

declare global {
  interface Window {
    Dropbox?: {
      choose: (options: DropboxChooseOptions) => void;
      appKey: string;
    };
  }
}

// ── Script loader (idempotent) ──────────────────────────────────────────────

let scriptLoading: Promise<void> | null = null;

function loadDropboxScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("The Dropbox chooser is browser-only."));
  }
  if (window.Dropbox) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise<void>((resolve, reject) => {
    if (!APP_KEY) {
      reject(new Error("NEXT_PUBLIC_DROPBOX_APP_KEY is not set."));
      return;
    }
    // dropins.js reads its key off its own tag's attributes, so this cannot
    // reuse the generic loader google-drive.ts has.
    const script = document.createElement("script");
    script.src = "https://www.dropbox.com/static/api/2/dropins.js";
    script.id = "dropboxjs";
    script.setAttribute("data-app-key", APP_KEY);
    script.onload = () => resolve();
    script.onerror = () => {
      // Clear the cached promise so a later click retries, rather than failing
      // forever because of one dropped request.
      scriptLoading = null;
      script.remove();
      reject(new Error("Could not reach Dropbox."));
    };
    document.head.appendChild(script);
  });

  return scriptLoading;
}

/**
 * Warm the drop-in ahead of the click.
 *
 * `choose()` opens a popup, and browsers only allow that from a user gesture.
 * Loading the script inside the click handler pushes the call past an `await`,
 * which a popup blocker can decide is no longer that gesture. Calling this on
 * hover and focus means the script is already there when the click lands.
 *
 * It is deliberately NOT called on mount: that would ping Dropbox on every
 * page view of a site whose privacy policy enumerates its third parties, for
 * the large majority of visitors who never touch the button.
 */
export function preloadDropbox(): void {
  if (!dropboxConfigured) return;
  void loadDropboxScript().catch(() => {});
}

// ── Public API ──────────────────────────────────────────────────────────────

/**
 * Open the Dropbox Chooser and return the chosen files.
 *
 * `extensions` narrows the Chooser to what the calling tool actually accepts,
 * so a visitor is never offered a file the tool would reject.
 */
export async function openDropboxPicker(
  extensions: string[] = IMAGE_EXTENSIONS
): Promise<File[]> {
  await loadDropboxScript();
  const dropbox = window.Dropbox;
  if (!dropbox) throw new Error("The Dropbox chooser failed to start.");

  const chosen = await new Promise<DropboxFile[]>((resolve, reject) => {
    dropbox.choose({
      success: resolve,
      // A closed popup is a deliberate cancel, not a failure worth a toast.
      // The button treats this exact message as a silent no-op.
      cancel: () => reject(new Error("cancelled")),
      linkType: "direct",
      multiselect: true,
      extensions: extensions.length ? extensions : IMAGE_EXTENSIONS,
      folderselect: false,
    });
  });

  return Promise.all(
    chosen.map(async ({ link, name }) => {
      const resp = await fetch(link);
      if (!resp.ok) throw new Error(`Could not download "${name}" from Dropbox.`);
      const blob = await resp.blob();
      return new File([blob], name, {
        type: mimeForName(name, blob.type),
        lastModified: Date.now(),
      });
    })
  );
}
