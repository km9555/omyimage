import type { Dict } from "@/i18n/t";

/**
 * German strings for the /de pricing page (PricingClient).
 *
 * The plan names (Free, Plus, Pro) stay in English: they are product names.
 * Everything around them is translated, with "Tarif" for plan. The currency
 * itself is decided by the server from the visitor's region, not by this
 * page, so no price appears here.
 */
export const dePricing: Dict = {
  // Hero
  "Every tool is free today — no account needed": "Alle Tools sind derzeit kostenlos – ohne Anmeldung",
  "Simple, honest pricing.": "Einfache, ehrliche Preise.",
  "Start free and stay free for everyday work. Paid plans are on the way for people who need bigger files and more AI runs.":
    "Starten Sie kostenlos und bleiben Sie für die tägliche Arbeit kostenlos. Bezahltarife für größere Dateien und mehr KI-Durchläufe sind in Vorbereitung.",

  // Controls
  "Monthly": "Monatlich",
  "Yearly": "Jährlich",
  "Save {n}%": "{n} % sparen",
  "Prices are shown in the currency of your region.": "Die Preise werden in der Währung Ihrer Region angezeigt.",
  "Prices in {currency}": "Preise in {currency}",
  "Loading prices…": "Preise werden geladen…",
  "Yearly prices are shown per month, billed annually.":
    "Jahrespreise werden pro Monat angezeigt und jährlich abgerechnet.",

  // Plans
  "Free": "Free", // i18n-same — the plan name
  "Plus": "Plus", // i18n-same
  "Pro": "Pro", // i18n-same
  "Most popular": "Am beliebtesten",
  "Coming soon": "Demnächst",
  "Everything you need for everyday images.": "Alles, was Sie für alltägliche Bilder brauchen.",
  "For regular users who want more headroom.": "Für regelmäßige Nutzer, die mehr Spielraum möchten.",
  "Unlimited AI, the largest files, priority speed.": "Unbegrenzte KI, die größten Dateien, bevorzugte Verarbeitung.",
  "Start using the tools": "Tools jetzt nutzen",
  "All {n} tools, no account needed": "Alle {n} Tools, ohne Anmeldung",
  "Unlimited in-browser processing, no daily cap": "Unbegrenzte Verarbeitung im Browser, kein Tageslimit",
  "Server processing for files up to 100 MB": "Serververarbeitung für Dateien bis 100 MB",
  "10 AI runs / day": "10 KI-Durchläufe pro Tag",
  "Batch up to 20 files": "Stapel mit bis zu 20 Dateien",
  "Results download straight to your device": "Ergebnisse werden direkt auf Ihr Gerät heruntergeladen",
  "Everything in Free": "Alles aus Free",
  "Server processing for files up to 200 MB": "Serververarbeitung für Dateien bis 200 MB",
  "100 AI runs / day": "100 KI-Durchläufe pro Tag",
  "Batch up to 100 files": "Stapel mit bis zu 100 Dateien",
  "Priority server processing": "Bevorzugte Serververarbeitung",
  "24-hour download links": "Download-Links für 24 Stunden",
  "Everything in Plus": "Alles aus Plus",
  "Server processing for files up to 300 MB": "Serververarbeitung für Dateien bis 300 MB",
  "Unlimited AI runs": "Unbegrenzte KI-Durchläufe",
  "Unlimited batch size": "Unbegrenzte Stapelgröße",
  "Top-priority processing queue": "Höchste Priorität in der Warteschlange",
  "7-day download links": "Download-Links für 7 Tage",
  "/ month": "/ Monat",
  "Free forever": "Für immer kostenlos",
  "Billed annually — {total} / year": "Jährliche Abrechnung – {total} pro Jahr",
  "Billed monthly": "Monatliche Abrechnung",
  "Paid plans aren't available yet": "Bezahltarife sind noch nicht verfügbar",
  "Paid plans aren't available to purchase yet — the prices above are what we intend to charge when they launch. Everything on":
    "Bezahltarife können noch nicht gebucht werden – die Preise oben sind das, was wir zum Start verlangen wollen. Alles im Tarif",
  "is free to use in the meantime.": "ist bis dahin kostenlos nutzbar.",

  // Trust tiles
  "Private by default": "Standardmäßig privat",
  "Most tools run entirely in your browser — your images never leave your device.":
    "Die meisten Tools laufen vollständig in Ihrem Browser – Ihre Bilder verlassen Ihr Gerät nicht.",
  "No account needed": "Ohne Anmeldung",
  "Open a tool and go. Sign-up has never been required to use oMyImage.":
    "Tool öffnen und loslegen. Für oMyImage war noch nie eine Registrierung nötig.",
  "Deleted automatically": "Automatisch gelöscht",
  "On Free nothing is stored at all — results download straight to you. Where a plan offers download links, that window is the retention, and nothing is ever reused.":
    "Im Tarif Free wird überhaupt nichts gespeichert – die Ergebnisse werden direkt zu Ihnen heruntergeladen. Wo ein Tarif Download-Links bietet, ist deren Laufzeit die Speicherdauer, und nichts wird jemals weiterverwendet.",

  // FAQ
  "Questions": "Fragen",
  "Do I need an account to use oMyImage?": "Brauche ich ein Konto, um oMyImage zu nutzen?",
  "No. Every tool works right now with no account and no sign-up. Accounts are only relevant to paid plans, which aren't live yet.":
    "Nein. Jedes Tool funktioniert sofort, ohne Konto und ohne Registrierung. Ein Konto ist nur für Bezahltarife relevant, und die gibt es noch nicht.",
  "Is the free tier really free?": "Ist der kostenlose Tarif wirklich kostenlos?",
  "Yes. There's no trial that converts into a paid plan and no stored payment method. The free tools are simply free.":
    "Ja. Es gibt keine Testphase, die in ein Abo übergeht, und keine hinterlegte Zahlungsmethode. Die kostenlosen Tools sind einfach kostenlos.",
  "When can I buy Plus or Pro?": "Wann kann ich Plus oder Pro buchen?",
  "Not yet — billing isn't live, which is why those buttons are disabled rather than pretending to take payment. The prices shown are what we intend to charge when they launch.":
    "Noch nicht – die Abrechnung ist noch nicht aktiv. Deshalb sind diese Schaltflächen deaktiviert, statt eine Zahlung nur vorzutäuschen. Die angezeigten Preise sind das, was wir zum Start verlangen wollen.",
  "Why are prices different in my country?": "Warum sind die Preise in meinem Land anders?",
  "Your currency follows the country you're browsing from, so there's nothing to pick. India and a few other markets are priced deliberately lower rather than converted; everywhere else is derived from our US prices at a rate we refresh periodically, not the day's exchange rate.":
    "Die Währung richtet sich nach dem Land, aus dem Sie die Seite aufrufen – Sie müssen nichts auswählen. Indien und einige andere Märkte haben bewusst niedrigere Preise statt umgerechneter; überall sonst leiten sich die Preise von unseren US-Preisen ab, zu einem Kurs, den wir regelmäßig aktualisieren, nicht zum Tageskurs.",
  "What counts as an AI run?": "Was zählt als KI-Durchlauf?",
  "The server-side AI tools — Remove Background and Upscale Image. Those are the only things we meter, because they are the only ones that cost us real money per use. Everything that runs in your browser is unlimited on every plan and always will be.":
    "Die KI-Tools auf dem Server – Hintergrund entfernen und Bild hochskalieren. Nur diese zählen wir, weil nur sie uns pro Nutzung echtes Geld kosten. Alles, was in Ihrem Browser läuft, ist in jedem Tarif unbegrenzt und bleibt es auch.",
  "Why do the paid plans only raise the file size a little?": "Warum erhöhen die Bezahltarife die Dateigröße nur wenig?",
  "Because almost nothing needs it. Most images are processed entirely in your browser, where there is no size limit we impose at all — the only ceiling is what your own device can paint. Our server is for the files too large or too high-resolution for that, and 100 MB already covers the overwhelming majority. We would rather quote a number we can actually deliver than a headline gigabyte.":
    "Weil fast nichts das braucht. Die meisten Bilder werden vollständig in Ihrem Browser verarbeitet, und dort setzen wir überhaupt kein Größenlimit – die einzige Grenze ist das, was Ihr eigenes Gerät darstellen kann. Unser Server ist für Dateien, die dafür zu groß oder zu hochauflösend sind, und 100 MB decken schon die allermeisten ab. Wir nennen lieber eine Zahl, die wir wirklich einhalten, als ein Gigabyte für die Schlagzeile.",
  "What decides whether an image is processed in my browser or on your server?":
    "Wovon hängt ab, ob ein Bild in meinem Browser oder auf Ihrem Server verarbeitet wird?",
  "Resolution, mostly — not file size. A browser can only paint a canvas up to a certain number of pixels, and a modern 48-megapixel phone photo can exceed it while still being only a few megabytes. When that happens we process the image on our server instead and delete it straight after. Each tool tells you which path it took.":
    "Vor allem von der Auflösung – nicht von der Dateigröße. Ein Browser kann ein Canvas nur bis zu einer bestimmten Pixelzahl darstellen, und ein modernes Handyfoto mit 48 Megapixeln kann darüber liegen, obwohl es nur wenige Megabyte groß ist. Dann verarbeiten wir das Bild auf unserem Server und löschen es direkt danach. Jedes Tool zeigt an, welcher Weg genommen wurde.",
  "Are my images kept?": "Werden meine Bilder gespeichert?",
  "Most tools never upload at all. For the ones that do, results are deleted automatically within about an hour. See the Privacy Policy for the detail.":
    "Die meisten Tools laden überhaupt nichts hoch. Bei denen, die es tun, werden die Ergebnisse nach etwa einer Stunde automatisch gelöscht. Details finden Sie in der Datenschutzerklärung.",

  // Closing CTA
  "Start now — no card, no account.": "Jetzt starten – ohne Karte, ohne Konto.",
  "All {n} tools are free to use today. Paid plans will add headroom, not gatekeeping.":
    "Alle {n} Tools sind heute kostenlos. Bezahltarife bringen mehr Spielraum, keine Schranken.",
  "Browse all tools": "Alle Tools ansehen",
};
