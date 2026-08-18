/**
 * Google Drive Picker integration.
 *
 * Ported from oMyPDF's `lib/google-drive.ts`. Entirely client-side: the browser
 * gets a token, shows Google's own picker, and downloads the chosen file
 * straight from Drive. Nothing passes through our server, so the "your images
 * never leave your device" promise still holds — the bytes go Google → browser.
 *
 * Two env vars, both public client-side identifiers that ship in the bundle:
 *   NEXT_PUBLIC_GOOGLE_CLIENT_ID       — OAuth 2.0 Web Client ID
 *   NEXT_PUBLIC_GOOGLE_PICKER_API_KEY  — Picker API key (browser-restricted)
 */

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PICKER_API_KEY ?? "";
// Cloud project number = the numeric prefix of the OAuth client ID
// ("<projectNumber>-<random>.apps.googleusercontent.com"). The Picker needs it
// so files chosen under the drive.file scope become downloadable by this app.
const APP_ID = CLIENT_ID.split("-")[0];

/** Both values are required; without them the UI hides the entry point entirely. */
export const driveConfigured = Boolean(CLIENT_ID && API_KEY);

/** Image types the Picker should offer. Anything the tools can actually decode. */
export const IMAGE_MIME_TYPES =
  "image/jpeg,image/png,image/webp,image/gif,image/bmp,image/tiff,image/heic,image/heif,image/avif";

// ── Minimal type shims for Google APIs ──────────────────────────────────────

interface GPickerDoc {
  id: string;
  name: string;
  mimeType: string;
}

interface GPickerData {
  action: string;
  docs?: GPickerDoc[];
}

interface GPickerInstance {
  setVisible(v: boolean): void;
}

interface GPickerBuilder {
  addView(view: unknown): GPickerBuilder;
  setOAuthToken(token: string): GPickerBuilder;
  setDeveloperKey(key: string): GPickerBuilder;
  setAppId(appId: string): GPickerBuilder;
  enableFeature(feature: unknown): GPickerBuilder;
  setCallback(cb: (data: GPickerData) => void): GPickerBuilder;
  build(): GPickerInstance;
}

declare global {
  interface Window {
    gapi: { load(lib: string, cb: () => void): void };
    google: {
      accounts: {
        oauth2: {
          initTokenClient(cfg: {
            client_id: string;
            scope: string;
            callback: (r: { access_token?: string; error?: string }) => void;
            error_callback?: (e: { type?: string; message?: string }) => void;
          }): { requestAccessToken(): void };
        };
      };
      picker: {
        PickerBuilder: new () => GPickerBuilder;
        View: new (viewId: unknown) => { setMimeTypes(t: string): unknown };
        ViewId: { DOCS: unknown };
        Feature: { MULTISELECT_ENABLED: unknown };
        Action: { PICKED: string; CANCEL: string };
      };
    };
  }
}

// ── Script loader (idempotent) ───────────────────────────────────────────────

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(s);
  });
}

let gapiPickerReady = false;
let gisReady = false;

async function ensureGapiPicker(): Promise<void> {
  if (gapiPickerReady) return;
  await loadScript("https://apis.google.com/js/api.js");
  await new Promise<void>((resolve) => window.gapi.load("picker", resolve));
  gapiPickerReady = true;
}

async function ensureGis(): Promise<void> {
  if (gisReady) return;
  await loadScript("https://accounts.google.com/gsi/client");
  gisReady = true;
}

// ── OAuth token ─────────────────────────────────────────────────────────────

async function getAccessToken(): Promise<string> {
  if (!CLIENT_ID) throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set.");
  await ensureGis();
  return new Promise((resolve, reject) => {
    const tc = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      // drive.file grants access only to files the user explicitly picks, and
      // is a non-sensitive scope — so it needs no Google verification review.
      scope: "https://www.googleapis.com/auth/drive.file",
      callback: (r) => {
        if (r.error || !r.access_token) reject(new Error(r.error ?? "No access token received."));
        else resolve(r.access_token);
      },
      // Fires when the user closes the sign-in popup (or it fails to open).
      // Treat a closed popup as a silent cancel so the button stops loading.
      error_callback: (e) =>
        reject(new Error(e.type === "popup_closed" ? "cancelled" : (e.message ?? "Sign-in failed."))),
    });
    tc.requestAccessToken();
  });
}

// ── Picker ──────────────────────────────────────────────────────────────────

async function showPicker(accessToken: string, mimeTypes: string): Promise<GPickerDoc[]> {
  if (!API_KEY) throw new Error("NEXT_PUBLIC_GOOGLE_PICKER_API_KEY is not set.");
  await ensureGapiPicker();
  return new Promise((resolve) => {
    const view = new window.google.picker.View(window.google.picker.ViewId.DOCS)
      .setMimeTypes(mimeTypes);
    const picker = new window.google.picker.PickerBuilder()
      .addView(view)
      .setOAuthToken(accessToken)
      .setDeveloperKey(API_KEY)
      .setAppId(APP_ID)
      .enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED)
      .setCallback((data) => {
        if (data.action === window.google.picker.Action.PICKED) resolve(data.docs ?? []);
        else if (data.action === window.google.picker.Action.CANCEL) resolve([]);
      })
      .build();

    // The Picker appends its dialog to the end of <body> and focuses it, which
    // makes the browser scroll the page (often to the bottom) and back. Pin the
    // current scroll position for a short window while the dialog mounts.
    const { scrollX, scrollY } = window;
    const restore = () => window.scrollTo(scrollX, scrollY);
    window.addEventListener("scroll", restore, true);
    setTimeout(() => window.removeEventListener("scroll", restore, true), 700);

    picker.setVisible(true);
  });
}

// ── Download ────────────────────────────────────────────────────────────────

async function downloadDriveFile(doc: GPickerDoc, accessToken: string): Promise<File> {
  const resp = await fetch(
    `https://www.googleapis.com/drive/v3/files/${doc.id}?alt=media`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  if (!resp.ok) throw new Error(`Could not download "${doc.name}" from Google Drive.`);
  const blob = await resp.blob();
  // Use the type Drive reports, NOT a hardcoded one. oMyPDF could hardcode
  // application/pdf; here every tool gates uploads on
  // `f.type.startsWith("image/")`, so a wrong type silently rejects the import.
  // Fall back to the blob's own type if Drive omits it.
  return new File([blob], doc.name, { type: doc.mimeType || blob.type || "application/octet-stream" });
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Open the Drive picker and return the chosen files.
 *
 * `mimeTypes` narrows the picker to what the calling tool actually accepts, so
 * a user is never offered a file the tool would reject.
 */
export async function openGoogleDrivePicker(mimeTypes: string = IMAGE_MIME_TYPES): Promise<File[]> {
  const accessToken = await getAccessToken();
  const docs = await showPicker(accessToken, mimeTypes);
  if (docs.length === 0) return [];
  return Promise.all(docs.map((d) => downloadDriveFile(d, accessToken)));
}
