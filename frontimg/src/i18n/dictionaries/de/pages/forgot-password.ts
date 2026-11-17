import type { Dict } from "@/i18n/t";

/** German strings for the /de forgot-password page (ForgotPasswordForm). */
export const deForgotPassword: Dict = {
  "Reset your password": "Passwort zurücksetzen",
  "Enter your email and we'll send you a reset link.":
    "Geben Sie Ihre E-Mail-Adresse ein, und wir senden Ihnen einen Link zum Zurücksetzen.",
  "Remembered it?": "Doch wieder eingefallen?",
  "Log in": "Anmelden",
  "Email": "E-Mail",
  "Send reset link": "Link senden",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  "Check your inbox": "Prüfen Sie Ihren Posteingang",
  "If an account exists for {email}, we sent a password reset link.":
    "Falls ein Konto für {email} existiert, haben wir einen Link zum Zurücksetzen des Passworts gesendet.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "Der Link ist 1 Stunde gültig. Nichts angekommen? Sehen Sie im Spam-Ordner nach oder versuchen Sie es erneut.",
  "Back to login": "Zurück zur Anmeldung",
};
