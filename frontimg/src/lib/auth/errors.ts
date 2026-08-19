/** Map backend auth error messages to friendly, user-facing copy. */
export function authErrorMessage(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err ?? "");
  const m = raw.toLowerCase();

  if (m.includes("wrong email or password")) return "Wrong email or password.";
  if (m.includes("email not confirmed") || m.includes("email_not_confirmed"))
    return "Please confirm your email first — check your inbox.";
  if (m.includes("already exists")) return "An account with this email already exists. Try logging in.";
  if (m.includes("at least 6")) return "Password must be at least 6 characters.";
  if (m.includes("weak password") || m.includes("too weak")) return "Please choose a stronger password.";
  if (m.includes("invalid email")) return "Please enter a valid email address.";
  if (m.includes("rate limit") || m.includes("too many")) return "Too many attempts. Please wait a minute and try again.";
  if (m.includes("expired") || m.includes("invalid link")) return "This link has expired. Please request a new one.";
  if (m.includes("backend unreachable") || m.includes("network") || m.includes("failed to fetch"))
    return "Network error. Check your connection and try again.";

  return raw || "Something went wrong. Please try again.";
}
