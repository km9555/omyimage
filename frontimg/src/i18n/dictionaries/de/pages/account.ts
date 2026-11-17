import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de account page (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page; "Tarif" is the German word for plan.
 */
export const deAccount: Dict = {
  "My Account": "Mein Konto",
  "Email": "E-Mail",
  "Plan": "Tarif",
  "Free plan": "Kostenloser Tarif",
  "Allowance": "Kontingent",
  "Member since": "Mitglied seit",

  // Display name
  "Display name": "Anzeigename",
  "Optional — we'll greet you by this name.": "Optional – mit diesem Namen begrüßen wir Sie.",
  "Your name": "Ihr Name",
  "Save": "Speichern",
  "Name updated.": "Name aktualisiert.",
  "Could not save name.": "Der Name konnte nicht gespeichert werden.",

  // Password
  "Change password": "Passwort ändern",
  "Set a password": "Passwort festlegen",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Ihr Konto nutzt die Anmeldung mit Google. Legen Sie ein Passwort fest, um sich auch per E-Mail anzumelden.",
  "Current password": "Aktuelles Passwort",
  "New password (at least 6 characters)": "Neues Passwort (mindestens 6 Zeichen)",
  "Confirm new password": "Neues Passwort bestätigen",
  "Update password": "Passwort aktualisieren",
  "Set password": "Passwort festlegen",
  "New password must be at least 6 characters.": "Das neue Passwort muss mindestens 6 Zeichen lang sein.",
  "New passwords don't match.": "Die neuen Passwörter stimmen nicht überein.",
  "Password changed.": "Passwort geändert.",
  "Password set.": "Passwort festgelegt.",
  "Could not change password.": "Das Passwort konnte nicht geändert werden.",

  // Plan card
  // AccountClient renders `A <strong>{plan}</strong>{" "}B`, so B must not open
  // on punctuation (a space before a colon). A spaced en dash reads naturally.
  "You're on the": "Sie nutzen den Tarif",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "– {allowance} und Serververarbeitung für Dateien bis {mb} MB. Alles, was in Ihrem Browser läuft, ist in jedem Tarif unbegrenzt.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Bezahltarife können noch nicht gebucht werden. Es gibt also nichts zu kündigen, und keine Zahlungsmethode ist hinterlegt.",
  "See plans": "Tarife ansehen",
  "Owner": "Inhaber",
  "Unlimited use": "Unbegrenzte Nutzung",

  "Sign out": "Abmelden",
  "Signed out.": "Sie wurden abgemeldet.",
  "Sign out of all devices": "Auf allen Geräten abmelden",
  "Sign out of every device and browser where you're signed in, including this one?":
    "Auf allen Geräten und in allen Browsern abmelden, in denen Sie angemeldet sind – auch auf diesem?",
  "Signed out of all devices.": "Sie wurden auf allen Geräten abgemeldet.",
  "Could not sign out of all devices.": "Die Abmeldung auf allen Geräten ist fehlgeschlagen.",
};
