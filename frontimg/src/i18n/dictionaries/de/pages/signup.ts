import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de signup page (SignupForm).
 *
 * The consent checkbox renders
 *   t("I agree to the") <Terms> t("and|between links") <Privacy>{t(".|sentence-end")}
 * German puts the separable verb particle at the end ("Ich stimme den
 * Nutzungsbedingungen und der Datenschutzerklärung zu."), so the
 * sentence-end key carries " zu." — with its leading space, because it is
 * rendered directly after the link with no separator.
 */
export const deSignup: Dict = {
  "Create your account": "Konto erstellen",
  "Create a free account — upgrade anytime.": "Erstellen Sie ein kostenloses Konto – upgraden können Sie jederzeit.",
  "Already have an account?": "Sie haben schon ein Konto?",
  "Log in": "Anmelden",
  "Name (optional)": "Name (optional)",
  "How should we address you?": "Wie dürfen wir Sie ansprechen?",
  "Email": "E-Mail",
  "Password": "Passwort",
  "At least 6 characters": "Mindestens 6 Zeichen",
  "Confirm password": "Passwort bestätigen",
  "Re-enter your password": "Passwort erneut eingeben",
  "I agree to the": "Ich stimme den",
  "Terms": "Nutzungsbedingungen",
  "and|between links": "und der",
  "Privacy Policy": "Datenschutzerklärung",
  ".|sentence-end": " zu.",
  "Create account": "Konto erstellen",
  "Sign up with Google": "Mit Google registrieren",
  "The free tools stay free and will never require an account.":
    "Die kostenlosen Tools bleiben kostenlos und werden nie ein Konto voraussetzen.",

  // Confirmation state
  "Check your inbox": "Prüfen Sie Ihren Posteingang",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Wir haben einen Bestätigungslink an {email} gesendet. Klicken Sie darauf, um Ihr Konto zu aktivieren.",
  "Wrong email?": "Falsche E-Mail-Adresse?",
  "Go back": "Zurück",
  "Didn't get it? Check spam, or request a new link below.":
    "Nichts angekommen? Sehen Sie im Spam-Ordner nach oder fordern Sie unten einen neuen Link an.",
  "Back to login": "Zurück zur Anmeldung",
  "Resend confirmation email": "Bestätigungs-E-Mail erneut senden",
  "Sending…": "Wird gesendet…",
  "Confirmation email sent — check your inbox.": "Bestätigungs-E-Mail gesendet – prüfen Sie Ihren Posteingang.",
  "Could not resend. Please try again.": "Erneutes Senden fehlgeschlagen. Bitte versuchen Sie es noch einmal.",

  // Confirmation state when the email could not be sent
  "Account created": "Konto erstellt",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Ihr Konto ist eingerichtet, aber wir konnten den Bestätigungslink nicht an {email} senden.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Das kann passieren, wenn die Adresse einen Tippfehler enthält oder unser Mailserver kurz nicht erreichbar ist. Fordern Sie unten einen neuen Link an oder gehen Sie zurück und korrigieren Sie die Adresse.",

  // Validation
  "Password must be at least 6 characters.": "Das Passwort muss mindestens 6 Zeichen lang sein.",
  "Passwords don't match.": "Die Passwörter stimmen nicht überein.",
  "Please accept the Terms and Privacy Policy.": "Bitte akzeptieren Sie die Nutzungsbedingungen und die Datenschutzerklärung.",
};
