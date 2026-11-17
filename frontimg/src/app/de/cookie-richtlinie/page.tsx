import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

/**
 * German cookie policy (Cookie-Richtlinie) — the same structure and the same
 * section ids as /cookies, with only the prose translated. The ids are the TOC
 * anchors and a contract across locales: never rename one on a single side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5).
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths ARE
 * translated, because a German running Chrome in German sees
 * „Datenschutz und Sicherheit“.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "de",
    title: "Cookie-Richtlinie | oMyImage",
    description:
      "Was oMyImage in Ihrem Browser speichert, warum und wie Sie es steuern. Standardmäßig nur das Nötigste — die Analyse bleibt aus, bis Sie sie erlauben.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. Was sind Cookies?" },
  { id: "consent", title: "2. Ihre Einwilligung" },
  { id: "types", title: "3. Was wir speichern" },
  { id: "third", title: "4. Cookies von Drittanbietern" },
  { id: "control", title: "5. Cookies verwalten" },
  { id: "changes", title: "6. Änderungen dieser Richtlinie" },
  { id: "contact", title: "7. Kontakt" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="de"
      title="Cookie-Richtlinie"
      subtitle="Was oMyImage in Ihrem Browser speichert, warum, und wie Sie Ihre Entscheidung ändern."
      updated="09.11.2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. Was sind Cookies?">
        <LegalCallout>
          oMyImage setzt keine eigenen Cookies. Gespeichert wird nur eine Handvoll Einträge im{" "}
          <strong>lokalen Speicher</strong>, die Ihr Gerät nie verlassen, sowie — nur wenn Sie es
          erlauben — Analyse-Cookies von Google. Ihre Bilder sind daran in keiner Weise beteiligt.
        </LegalCallout>
        <LegalP>
          Cookies sind kleine Textdateien, die eine Website beim Besuch auf Ihrem Gerät ablegt. Sie
          werden häufig verwendet, damit Websites funktionieren, um Ihre Einstellungen zu speichern
          und um Website-Betreibern zu zeigen, wie ihre Website genutzt wird. Ein Cookie kann ein
          &bdquo;Sitzungs-Cookie&ldquo; sein, das beim Schließen des Browsers gelöscht wird, oder ein
          &bdquo;dauerhaftes&ldquo; Cookie, das für einen festgelegten Zeitraum oder bis zu Ihrer
          Löschung bestehen bleibt.
        </LegalP>
        <LegalP>
          Eng verwandte Technologien sind der Webspeicher (<code>localStorage</code> und{" "}
          <code>sessionStorage</code>) und Zählpixel. Diese Richtlinie verwendet
          &bdquo;Cookies&ldquo; als Oberbegriff für alle, weil die praktische Frage — was auf Ihrem
          Gerät gespeichert wird und wer es lesen kann — dieselbe ist.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Ihre Einwilligung">
        <LegalP>
          Bei Ihrem ersten Besuch erscheint am unteren Rand der Seite ein Einwilligungsbanner. Bevor
          Sie es beantworten, wird nichts Optionales geladen. Sie haben drei Möglichkeiten:
        </LegalP>
        <LegalUl>
          <li>
            <strong>Alle akzeptieren</strong> — notwendiger Speicher plus Analyse. Google Analytics
            wird geladen, unser eigener Server zählt Seitenaufrufe und Tool-Ausführungen, und wir
            sehen in aggregierter Form, welche Tools genutzt werden.
          </li>
          <li>
            <strong>Alle ablehnen</strong> — nur notwendiger Speicher. Google Analytics wird nie
            geladen, unsere eigene Zählung bleibt ausgeschaltet, und aus Ihrem Besuch werden keine
            Analysedaten erhoben.
          </li>
          <li>
            <strong>Anpassen</strong> — Sie entscheiden Kategorie für Kategorie. Notwendiger
            Speicher lässt sich nicht abschalten, denn ohne ihn kann sich die Website weder Ihr
            Farbschema noch eben diese Entscheidung merken.
          </li>
        </LegalUl>
        <LegalP>
          Ihre Antwort wird auf Ihrem Gerät unter <code>omyimage_cookie_consent</code> und{" "}
          <code>omyimage_cookie_prefs</code> gespeichert. Sie können sie jederzeit über den Link{" "}
          <strong>Cookie-Einstellungen</strong> in der Fußzeile jeder Seite ändern. Da
          Analyse-Skripte nur beim Neuladen einer Seite hinzugefügt oder entfernt werden können,
          lädt eine Änderung genau dieser Einstellung die Seite neu.
        </LegalP>
        <LegalP>
          Wir verwenden keine Werbe- oder websiteübergreifenden Tracking-Cookies und geben Ihre Daten
          nicht an Werbenetzwerke weiter.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Was wir speichern">
        <LegalSubsection title="Notwendig — immer aktiv">
          <LegalP>
            Dies sind Einträge im <code>localStorage</code>, keine Cookies: Sie werden von der
            Website geschrieben, nur von der Website gelesen und nie an uns oder andere übertragen.
            Sie lassen sich nicht abschalten, weil sie es überhaupt erst ermöglichen, dass sich die
            Oberfläche etwas merkt. Wenn Sie die Websitedaten in Ihrem Browser löschen, werden sie
            alle entfernt.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — ob Sie den hellen oder den dunklen Modus gewählt haben.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> und <code>omyimage_cookie_prefs</code> — Ihre
              Antwort auf das Einwilligungsbanner, damit Sie nicht auf jeder Seite gefragt werden.
            </li>
            <li>
              <code>omyimage:favorites</code> und zuletzt genutzte Tools — damit Ihre Verknüpfungen
              erhalten bleiben.
            </li>
            <li>
              <code>omyimage:currency</code> — die Währung, die Sie auf der Preisseite ausgewählt
              haben.
            </li>
            <li>
              <code>omyimage:premium-usage</code> — ein lokaler Zähler der heute genutzten
              Premium-Tool-Ausführungen.
            </li>
          </LegalUl>
          <LegalP>
            Cloudflare, das die Website ausliefert und schützt, kann zusätzlich eigene, unbedingt
            erforderliche Cookies für Ratenbegrenzung und Bot-Erkennung setzen. Diese sind in
            Abschnitt 4 beschrieben.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Analyse — nur mit Ihrer Einwilligung">
          <LegalP>
            Wenn Sie der Analyse zustimmen, laden wir Google Analytics 4, um in aggregierter Form zu
            verstehen, wie die Website genutzt wird: welche Tools beliebt sind, auf welchen Seiten
            Fehler auftreten und ungefähr, woher die Besucher kommen. Damit entscheiden wir, was wir
            entwickeln und beheben. Die Daten werden nie verwendet, um Sie zu identifizieren, und wir
            versuchen nicht, sie mit etwas zu verknüpfen, das Sie verarbeiten.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — unterscheiden einzelne Nutzer und Sitzungen.
              Laufen nach 2 Jahren ab.
            </li>
            <li>
              <code>_gid</code> — unterscheidet Nutzer innerhalb eines Zeitfensters von 24 Stunden.
              Läuft nach 24 Stunden ab.
            </li>
          </LegalUl>
          <LegalP>
            Wenn Sie die Analyse ablehnen oder das Banner einfach nie beantworten, wird das Skript
            von Google Analytics gar nicht erst angefordert — diese Cookies entstehen also von
            vornherein nicht, statt erst gesetzt und dann ignoriert zu werden.
          </LegalP>
          <LegalP>
            Nur wenn Sie der Analyse zustimmen, zählt unser eigener Server zusätzlich Seitenaufrufe
            und Tool-Ausführungen: Seitenpfad, Tool-Name, Zeitpunkt, Land, Gerätetyp, verweisende
            Website und einen Besucher-Hash, der sich täglich ändert und nach 48 Stunden gelöscht
            wird. Tool-Ausführungen tragen außerdem einen separaten Hash Ihrer IP-Adresse, der sich
            täglich ändert und beim Eintrag der Ausführung gespeichert bleibt. Dateinamen, -inhalte
            oder -größen werden nicht erfasst, und diese Zählung setzt kein Cookie. Wenn Sie
            angemeldet sind, werden Tool-Ausführungen Ihrem Konto zugeordnet. Einzelheiten finden
            Sie in Abschnitt 4 unserer{" "}
            <Link href={`${localeHref("/privacy", "de")}#collect`} className="text-secondary hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Werbung — nicht verwendet">
          <LegalP>
            Wir verwenden <strong>keine</strong> Werbe- oder Tracking-Cookies. oMyImage zeigt keine
            Werbung und gibt kein Surfverhalten an Werbenetzwerke weiter. Den Schalter für Werbung
            gibt es im Einwilligungsbanner nur, damit Ihre Präferenz bereits erfasst ist, falls sich
            das je ändert; derzeit steuert er nichts.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookies von Drittanbietern">
        <LegalP>
          Nur die folgenden Drittanbieter können auf oMyImage etwas in Ihrem Browser ablegen. Für
          jeden gilt seine eigene Datenschutzerklärung:
        </LegalP>
        <LegalTable
          headers={["Dienst", "Zweck", "Datenschutzerklärung"]}
          rows={[
            [
              "Cloudflare",
              "Unbedingt erforderliche Sicherheits- und Leistungs-Cookies (Ratenbegrenzung, Bot-Erkennung)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Analyse-Cookies, nur gesetzt, nachdem Sie der Analyse zugestimmt haben",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Liefert die Icon-Schriftart aus. Setzt keine Cookies, aber Google erhält Ihre IP-Adresse, wie bei jeder Website, die diese Schriftart verwendet",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (optional)",
              "Nur wenn Sie den Import aus Google Drive nutzen. Das Zugriffstoken liegt für diesen Besuch im Arbeitsspeicher und wird nie gespeichert",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (optional)",
              "Nur wenn Sie den Import aus Dropbox nutzen. Die Dateiauswahl läuft in einem Pop-up-Fenster von Dropbox; es wird kein Konto verknüpft und kein Token ausgestellt",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          Die Cloud-Importe sind in den Abschnitten 7 und 8 unserer{" "}
          <Link href={`${localeHref("/privacy", "de")}#google-drive`} className="text-secondary hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          ausführlich beschrieben.
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Cookies verwalten">
        <LegalSubsection title="Auf oMyImage">
          <LegalP>
            Nutzen Sie den Link <strong>Cookie-Einstellungen</strong> in der Fußzeile jeder Seite. Er
            öffnet das Einwilligungsbanner erneut mit Ihren aktuellen Einstellungen, sodass Sie eine
            Kategorie ändern können, ohne die übrigen zurückzusetzen.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="In Ihrem Browser">
          <LegalP>
            In jedem gängigen Browser können Sie Cookies und Websitedaten anzeigen, blockieren und
            löschen. Wenn Sie alles blockieren, werden auch die oben genannten notwendigen Einträge
            gelöscht — die Website vergisst dann Ihr Farbschema und fragt erneut nach Cookies:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit →
              Drittanbieter-Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Einstellungen → Datenschutz &amp; Sicherheit → Cookies und
              Website-Daten
            </li>
            <li>
              <strong>Safari:</strong> Einstellungen → Datenschutz → Websitedaten verwalten
            </li>
            <li>
              <strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen → Cookies
              verwalten und löschen
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Google Analytics überall deaktivieren">
          <LegalP>
            Um Google Analytics nicht nur hier, sondern auf allen Websites zu deaktivieren,
            installieren Sie das{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Browser-Add-on zur Deaktivierung von Google Analytics
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Änderungen dieser Richtlinie">
        <LegalP>
          Wir können diese Richtlinie anpassen, wenn sich der Dienst ändert. Das Datum
          &bdquo;Zuletzt aktualisiert&ldquo; oben auf dieser Seite gibt immer die aktuelle Fassung
          an, und wesentliche Änderungen werden hier veröffentlicht, bevor sie wirksam werden.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Kontakt">
        <LegalP>
          Fragen zu Cookies oder zu dieser Richtlinie können Sie uns über die Möglichkeiten auf
          unserer{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>{" "}
          senden. Bitte beachten Sie auch unsere{" "}
          <Link href={localeHref("/privacy", "de")} className="text-secondary hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          und unsere{" "}
          <Link href={localeHref("/terms", "de")} className="text-secondary hover:underline">
            Allgemeinen Geschäftsbedingungen
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
