import { mkdir, writeFile, readFile, readdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { randomUUID } from "node:crypto";

// Ephemeral store for processed files so guests can re-download via a shareable
// link for a limited window. Files auto-expire after TTL_MS and are swept.
export const TTL_MS = 60 * 60 * 1000; // 1 hour

const BASE = process.env.TMP_DIR || join(tmpdir(), "omyimage");
const DIR = join(BASE, "files");

const ID_RE = /^[0-9a-f-]{36}$/i;

export interface FileMeta {
  id: string;
  filename: string;
  contentType: string;
  size: number;
  createdAt: number;
  expiresAt: number;
  userId?: string | null;
}

async function ensureDir() {
  await mkdir(DIR, { recursive: true });
}

export async function saveFile(
  bytes: Uint8Array,
  filename: string,
  contentType: string,
  userId?: string | null
): Promise<FileMeta> {
  await ensureDir();
  const id = randomUUID();
  const now = Date.now();
  const meta: FileMeta = {
    id,
    filename,
    contentType,
    size: bytes.length,
    createdAt: now,
    expiresAt: now + TTL_MS,
    userId: userId ?? null,
  };
  await writeFile(join(DIR, id), Buffer.from(bytes));
  await writeFile(join(DIR, `${id}.json`), JSON.stringify(meta));
  return meta;
}

export async function getFile(id: string): Promise<{ meta: FileMeta; path: string } | null> {
  if (!ID_RE.test(id)) return null;
  try {
    const meta = JSON.parse(await readFile(join(DIR, `${id}.json`), "utf8")) as FileMeta;
    if (Date.now() > meta.expiresAt) {
      await removeFile(id);
      return null;
    }
    const path = join(DIR, id);
    await stat(path);
    return { meta, path };
  } catch {
    return null;
  }
}

export async function removeFile(id: string): Promise<void> {
  if (!ID_RE.test(id)) return;
  await rm(join(DIR, id), { force: true }).catch(() => {});
  await rm(join(DIR, `${id}.json`), { force: true }).catch(() => {});
}

/** Delete all expired files. Safe to call on an interval. */
export async function sweep(): Promise<void> {
  try {
    const entries = await readdir(DIR);
    const now = Date.now();
    for (const name of entries) {
      if (!name.endsWith(".json")) continue;
      try {
        const meta = JSON.parse(await readFile(join(DIR, name), "utf8")) as FileMeta;
        if (now > meta.expiresAt) await removeFile(meta.id);
      } catch {
        /* ignore malformed */
      }
    }
  } catch {
    /* dir not created yet */
  }
}
