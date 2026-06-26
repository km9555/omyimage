/**
 * Build a safe `Content-Disposition: attachment` header value.
 *
 * Untrusted/derived filenames can contain quotes, backslashes, or control
 * characters that would break or smuggle extra header directives. We emit an
 * ASCII-sanitised `filename="..."` plus an RFC 5987 `filename*` for modern
 * browsers carrying the full UTF-8 name.
 */
export function attachmentDisposition(filename: string): string {
  const fallback =
    filename
      .replace(/[\r\n"\\]/g, "_")
      // eslint-disable-next-line no-control-regex
      .replace(/[\x00-\x1f\x7f]/g, "_")
      .replace(/[^\x20-\x7e]/g, "_")
      .slice(0, 200) || "download";
  const encoded = encodeURIComponent(filename).replace(/['()*]/g, (c) => "%" + c.charCodeAt(0).toString(16));
  return `attachment; filename="${fallback}"; filename*=UTF-8''${encoded}`;
}
