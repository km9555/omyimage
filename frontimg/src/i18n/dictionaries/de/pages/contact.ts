import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de contact page (ContactBody).
 *
 * The support address itself is never translated. The legal page names in
 * the footer are links whose labels come from this file, so they read as the
 * German pages they point at.
 */
export const deContact: Dict = {
  "Contact": "Kontakt",
  "Get in touch": "Schreiben Sie uns",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "Wir lesen jede Nachricht und antworten in der Regel innerhalb von zwei Werktagen. Gut möglich, dass die Antwort schon weiter unten steht.",

  // Channels
  "Support & bug reports": "Support & Fehlermeldungen",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "Funktioniert etwas nicht, oder liefert ein Tool ein seltsames Ergebnis? Nennen Sie uns das Tool, Ihren Browser und was Sie erwartet haben – das reicht meist, um das Problem nachzustellen.",
  "Privacy & legal": "Datenschutz & Rechtliches",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Fragen zum Umgang mit Ihren Daten, Löschanfragen oder alles, was unsere Nutzungsbedingungen betrifft.",
  "Business & partnerships": "Geschäftliches & Partnerschaften",
  "Bulk use, integrations, or anything commercial.": "Nutzung in großem Umfang, Integrationen oder andere geschäftliche Anliegen.",

  // No-form note
  "Why there's no contact form:": "Warum es kein Kontaktformular gibt:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "Ein Formular würde bedeuten, dass wir Ihre Angaben auf unseren Servern erfassen und speichern. Per E-Mail bleibt das zwischen Ihnen und uns – auf {site} wird nichts über Sie gespeichert.",

  // FAQ
  "Before you write": "Bevor Sie schreiben",
  "Is oMyImage free?": "Ist oMyImage kostenlos?",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "Ja. Alle {n} Tools sind kostenlos und ohne Konto nutzbar. Bezahltarife für größere Dateien und mehr KI-Durchläufe sind geplant, aktuell kostet aber nichts etwas.",
  "Are my images uploaded?": "Werden meine Bilder hochgeladen?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "Bei den meisten Tools nicht – sie laufen vollständig in Ihrem Browser, und die Datei verlässt Ihr Gerät nie. Hochgeladen wird nur bei Bildern, die für einen Browser-Tab zu groß sind, bei den KI-Tools und bei der HEIC-Umwandlung. Jedes dieser Tools weist auf seiner eigenen Seite darauf hin.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "Warum lädt die HEIC-Umwandlung mein Foto hoch, die anderen Tools aber nicht?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Zum Dekodieren von HEIC braucht es eine Bibliothek, die wir aus Lizenzgründen nicht an Browser ausliefern dürfen. Diese eine Umwandlung muss daher auf unserem Server laufen. Die Datei wird nach etwa einer Stunde gelöscht.",
  "How long do you keep processed files?": "Wie lange bewahren Sie verarbeitete Dateien auf?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Auf dem Server verarbeitete Ergebnisse werden nach etwa einer Stunde automatisch gelöscht. Wir erstellen keine Backups und verwenden Ihre Bilder nie weiter.",
  "A tool says it isn't enabled on this server.": "Ein Tool meldet, dass es auf diesem Server nicht aktiviert ist.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "Das melden die KI-Tools oder die HEIC-Umwandlung, wenn ihre Engine im Backend nicht installiert ist. Das ist ein Zustand der Serverinstallation, kein Fehler Ihrer Datei.",
  "Can I use the output commercially?": "Darf ich das Ergebnis kommerziell nutzen?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Ja. Ihre Bilder bleiben Ihre Bilder, und Sie dürfen alles, was Sie erstellen, für jeden rechtmäßigen Zweck verwenden.",

  // Footer links
  "Privacy Policy": "Datenschutzerklärung",
  "Terms of Service": "Nutzungsbedingungen",
  "Refund Policy": "Rückerstattungsrichtlinie",
  "Pricing": "Preise",
};
