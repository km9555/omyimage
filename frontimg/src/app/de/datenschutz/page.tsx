import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * German privacy policy (Datenschutzerklärung) — a written twin of /privacy
 * (conversion.md §6.5), with the same section ids. `#google-drive` and
 * `#collect` in particular are linked from the cookie policy in every language.
 *
 * Faithful to the English facts: the English page names no controller, no
 * legal bases under Art. 6 GDPR and no supervisory authority, so neither does
 * this one. Adding them is a substantive legal change and belongs in /privacy
 * first, then in every twin.
 *
 * Section 7 exists to satisfy Google's OAuth verification, which audits the
 * privacy policy against the scope requested in lib/google-drive.ts. Two
 * things there are deliberately NOT translated:
 *   • the scope URI, which is an identifier; and
 *   • the name of the Google API Services User Data Policy, kept in English
 *     with the Limited Use sentence rendered close to Google's own wording —
 *     that sentence is prescribed, and a loose paraphrase in any language is
 *     what fails a review.
 * Keep this section in sync with the English one whenever the scope changes.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/privacy",
  locale: "de",
  title: "Datenschutzerklärung | oMyImage",
  description:
    "Wie oMyImage mit Ihren Bildern und Daten umgeht: Die meisten Tools laufen in Ihrem Browser, Serverdateien werden innerhalb einer Stunde gelöscht, ohne Werbung.",
});

const toc = [
  { id: "summary", title: "Zusammenfassung" },
  { id: "images", title: "1. Ihre Bilder" },
  { id: "browser", title: "2. Verarbeitung im Browser oder auf dem Server" },
  { id: "retention", title: "3. Speicherdauer und Löschung" },
  { id: "collect", title: "4. Welche Daten wir erheben" },
  { id: "storage", title: "5. Speicher im Browser" },
  { id: "subprocessors", title: "6. Dienste von Drittanbietern" },
  { id: "google-drive", title: "7. Anmeldung mit Google und Import aus Google Drive" },
  { id: "dropbox", title: "8. Import aus Dropbox" },
  { id: "future", title: "9. Geplante Funktionen" },
  { id: "rights", title: "10. Ihre Rechte" },
  { id: "children", title: "11. Kinder" },
  { id: "security", title: "12. Sicherheit" },
  { id: "changes", title: "13. Änderungen" },
  { id: "contact", title: "14. Kontakt" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="de"
      title="Datenschutzerklärung"
      subtitle="Was mit Ihren Bildern und Ihren Daten geschieht, wenn Sie oMyImage nutzen."
      updated="09.11.2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Zusammenfassung">
        <LegalCallout>
          Die meisten Tools von oMyImage laufen <strong>vollständig in Ihrem Browser</strong> — Ihre
          Bilder werden nie hochgeladen. Einige wenige Tools benötigen unseren Server; diese Dateien
          werden verarbeitet, an Sie zurückgegeben und nach etwa einer Stunde gelöscht. Ein Konto ist
          optional, wir zeigen keine Werbung und betreiben kein websiteübergreifendes Tracking; die
          Webanalyse wird nur geladen, wenn Sie es erlauben.
        </LegalCallout>
        <LegalP>
          Diese Datenschutzerklärung erläutert das im Einzelnen. Sie beschreibt, was der Dienst heute
          tut, und kennzeichnet deutlich, wo etwas erst geplant und noch nicht in Betrieb ist.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Ihre Bilder">
        <LegalP>
          Ihre Bilder gehören Ihnen. Wir beanspruchen kein Eigentum an dem, was Sie verarbeiten, wir
          verwenden Ihre Bilder nicht zum Trainieren von Modellen, und wir verkaufen, teilen,
          veröffentlichen oder verwenden sie zu keinem Zweck weiter.
        </LegalP>
        <LegalP>
          Ob ein Bild Ihr Gerät überhaupt verlässt, hängt davon ab, welches Tool Sie verwenden — siehe
          den nächsten Abschnitt.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Verarbeitung im Browser oder auf dem Server">
        <LegalSubsection title="Verarbeitung in Ihrem Browser (kein Upload)">
          <LegalP>
            Die meisten Tools nutzen die Canvas-Engine Ihres eigenen Browsers. Das Bild wird von
            Ihrem Gerät in den Arbeitsspeicher gelesen, lokal verarbeitet und von Ihnen wieder
            gespeichert. Nichts davon wird an uns übertragen, und diese Tools funktionieren auch
            dann weiter, wenn unser Server nicht erreichbar ist.
          </LegalP>
          <LegalP>
            Das gilt für Zuschneiden, Größe ändern, Drehen, Komprimieren, Umwandeln, Wasserzeichen,
            Meme, den All-in-one-Editor, Weichzeichnen, Rahmen, runden Zuschnitt, Zusammenfügen,
            GIF-Tools, Farb-Tools, das Anzeigen von Metadaten und Bild in PDF — bei Dateien bis
            15&nbsp;MB.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Verarbeitung auf unserem Server (Upload)">
          <LegalP>Ihr Bild wird in drei Fällen auf unseren Server hochgeladen:</LegalP>
          <LegalUl>
            <li>
              <strong>Dateien über 15&nbsp;MB</strong> — ab dieser Größe wird die Verarbeitung im
              Browser unzuverlässig, deshalb übernimmt automatisch unser Server.
            </li>
            <li>
              <strong>Die KI-Tools</strong> — „Hintergrund entfernen“ und „Bildqualität verbessern“
              nutzen Modelle, die für einen Browser viel zu rechenintensiv sind.
            </li>
            <li>
              <strong>HEIC in JPG, bei jeder Dateigröße.</strong> Hier liegt der Grund in der Lizenz,
              nicht in der Technik: Die einzigen quelloffenen HEIC-Decoder dürfen nach ihrer Lizenz
              nicht an Browser verteilt werden, daher muss die Umwandlung auf unserem Server
              stattfinden.
            </li>
          </LegalUl>
          <LegalP>
            Jedes dieser Tools weist auf seiner eigenen Seite darauf hin, dass es Dateien hochlädt.
            Ein Tool, das keinen solchen Hinweis enthält, lädt nichts hoch.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Speicherdauer und Löschung">
        <LegalP>
          Bilder, die in Ihrem Browser verarbeitet werden, erhalten wir nie — es gibt also nichts,
          was wir speichern könnten.
        </LegalP>
        <LegalP>
          Bei Bildern, die auf dem Server verarbeitet werden, wird die hochgeladene Datei nur so lange
          vorgehalten, wie die Umwandlung dauert, und danach verworfen. Das Ergebnis wird kurzzeitig
          hinter einem privaten Download-Link gespeichert und nach ungefähr einer Stunde automatisch
          gelöscht. Wir erstellen keine Sicherungskopien Ihrer Dateien und archivieren sie nicht.
        </LegalP>
        <LegalCallout>
          Download-Links sind nicht zu erraten, aber nicht durch eine Anmeldung geschützt. Behandeln
          Sie einen Link wie ein Geheimnis — wer ihn kennt, kann die Datei abrufen, bis er abläuft.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. Welche Daten wir erheben">
        <LegalP>
          Um die Tools zu nutzen, müssen Sie uns weder Ihren Namen noch Ihre E-Mail-Adresse noch
          andere personenbezogene Daten mitteilen. Auf dieser Website gibt es keinen Newsletter und
          kein Kontaktformular. Ein Konto anzulegen ist optional; was wir in diesem Fall speichern,
          ist am Ende dieses Abschnitts beschrieben.
        </LegalP>
        <LegalP>
          Wie bei jedem Webdienst verarbeiten unser Server und unsere Hosting-Anbieter beim
          Ausliefern der Website automatisch grundlegende technische Daten — IP-Adresse,
          User-Agent des Browsers, aufgerufene URL und Zeitstempel. Diese Daten dienen dazu, die
          Anfrage zu beantworten, Ratenbegrenzungen anzuwenden und Missbrauch zu erkennen. Wir
          erstellen daraus keine Profile und führen sie, abgesehen von der unten beschriebenen
          einwilligungsbasierten Zählung, mit keinen anderen Daten zusammen.
        </LegalP>
        <LegalP>
          Wir verwenden <strong>Google Analytics 4</strong>, und zwar nur mit Ihrer Einwilligung.
          Solange Sie Analyse-Cookies nicht akzeptiert haben, wird das Skript gar nicht erst
          angefordert — es wird nicht geladen und dann abgeschaltet, es ist schlicht nicht vorhanden.
          Für Besucher, die abgelehnt oder auf das Banner nie reagiert haben, entsteht also kein
          Analyse-Cookie. Die erfassten Daten sind aggregiert: welche Tools genutzt werden, auf
          welchen Seiten Fehler auftreten und ungefähr, woher die Besucher kommen. Wir nutzen sie
          nicht, um Sie zu identifizieren, und verknüpfen sie mit nichts, was Sie verarbeiten.
        </LegalP>
        <LegalP>
          Wenn Sie Analyse-Cookies akzeptieren, zählen wir für unsere internen Nutzungsberichte
          außerdem Seitenaufrufe und Tool-Ausführungen auf unserem eigenen Server. Zu jedem Eintrag
          speichern wir:
        </LegalP>
        <LegalUl>
          <li>
            den Pfad der Seite bzw. den Namen des Tools und ob es in Ihrem Browser oder auf unserem
            Server lief;
          </li>
          <li>
            den Zeitpunkt;
          </li>
          <li>
            Ihr Land und Ihren Gerätetyp, die unser Server aus Ihrer IP-Adresse und dem User-Agent
            Ihres Browsers ableitet;
          </li>
          <li>
            die verweisende Website, nur mit ihrem Namen, auf der ersten Seite, die Sie aufrufen;
          </li>
          <li>
            bei Seitenaufrufen einen Besucher-Hash aus Ihrer IP-Adresse und Ihrem User-Agent, damit
            eine Person nicht mehrfach gezählt wird. Er ändert sich täglich und wird nach 48 Stunden
            gelöscht.
          </li>
        </LegalUl>
        <LegalP>
          Jede Tool-Ausführung trägt zusätzlich einen separaten Hash Ihrer IP-Adresse. Auch er ändert
          sich täglich, bleibt aber beim Eintrag dieser Ausführung gespeichert. Dateinamen, -inhalte
          oder -größen erfassen wir dabei nie, und diese Zählung setzt kein Cookie. Wenn Sie die
          Analyse ablehnen oder auf das Banner nie reagieren, wird nichts davon gesendet. Wenn Sie
          angemeldet sind, ordnen wir Ihre Tool-Ausführungen Ihrem Konto zu.
        </LegalP>
        <LegalP>
          <strong>Wir schalten keine Werbung und betreiben kein websiteübergreifendes Tracking.</strong>{" "}
          Auf oMyImage gibt es keine Sitzungsaufzeichnung, kein Werbepixel und kein Werbenetzwerk.
          Sie können Ihre Einwilligung zur Analyse jederzeit über die{" "}
          <strong>Cookie-Einstellungen</strong> in der Fußzeile ändern oder widerrufen — Einzelheiten
          finden Sie in unserer{" "}
          <Link href={localeHref("/cookies", "de")} className="text-secondary hover:underline">
            Cookie-Richtlinie
          </Link>
          .
        </LegalP>

        <LegalSubsection title="Wenn Sie ein Konto anlegen">
          <LegalP>
            Ein Konto ist optional: Jedes Tool funktioniert auch ohne. Sie können ein Konto mit
            E-Mail-Adresse und Passwort oder über die Anmeldung mit Google (Abschnitt 7) anlegen. Zu
            einem Konto speichern wir:
          </LegalP>
          <LegalUl>
            <li>Ihre E-Mail-Adresse und ob Sie sie bestätigt haben;</li>
            <li>Ihren Namen, wenn Sie einen eingeben oder er aus der Anmeldung mit Google stammt;</li>
            <li>
              ein sicher gehashtes Passwort, wenn Sie sich mit E-Mail registriert haben — das
              Passwort selbst speichern wir nie;
            </li>
            <li>Ihre Google-Konto-ID, wenn Sie sich mit Google anmelden;</li>
            <li>
              das Land, aus dem Ihre Registrierung und Ihr letzter Besuch kamen, abgeleitet aus Ihrer
              IP-Adresse, sowie den Zeitpunkt dieses Besuchs.
            </li>
          </LegalUl>
          <LegalP>
            Diese Angaben verwenden wir, um Sie anzumelden, um Konto-E-Mails wie die Bestätigung
            Ihrer Adresse und das Zurücksetzen des Passworts zu versenden und um in aggregierter Form
            zu sehen, aus welchen Ländern unsere Nutzer kommen. Wir verwenden sie nicht für Werbung
            und verkaufen sie nie. Name und Passwort können Sie auf Ihrer Kontoseite ändern; wie Sie
            Ihr Konto löschen, steht in Abschnitt 10.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="storage" title="5. Speicher im Browser">
        <LegalP>
          oMyImage setzt keine eigenen Cookies. Für einige funktionale Einstellungen nutzen wir den
          lokalen Speicher (Local Storage) Ihres Browsers; diese Einträge bleiben auf Ihrem Gerät und
          werden nie an uns gesendet:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — ob Sie den hellen oder den dunklen Modus gewählt haben.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> und <code>omyimage_cookie_prefs</code> — Ihre
            Antwort auf das Cookie-Banner.
          </li>
          <li>
            <code>omyimage:favorites</code> und zuletzt genutzte Tools — damit Ihre Verknüpfungen
            erhalten bleiben.
          </li>
          <li>
            <code>omyimage:currency</code> — die Währung, die Sie auf der Preisseite ausgewählt haben.
          </li>
          <li>
            <code>omyimage:premium-usage</code> — ein lokaler Zähler der heute genutzten
            Premium-Tool-Ausführungen.
          </li>
        </LegalUl>
        <LegalP>
          Wenn Sie die Websitedaten in Ihrem Browser löschen, werden alle diese Einträge entfernt.
          Keiner davon identifiziert Sie. Cookies von Drittanbietern — Cloudflare und, sobald Sie es
          erlauben, Google Analytics — sind in unserer{" "}
          <Link href={localeHref("/cookies", "de")} className="text-secondary hover:underline">
            Cookie-Richtlinie
          </Link>{" "}
          aufgeführt.
        </LegalP>
        <LegalP>
          Wenn Sie sich anmelden, speichern wir zusätzlich Ihr Sitzungstoken im lokalen Speicher
          unter <code>omyimage_token</code>. Anders als die Einträge oben wird es mit Ihren Anfragen
          an unseren Server gesendet, damit wir wissen, zu welchem Konto sie gehören. Beim Abmelden
          wird es entfernt.
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Dienste von Drittanbietern">
        <LegalP>
          Wir beschränken Drittanbieter auf das Nötigste. Nur die folgenden sind am Betrieb von
          oMyImage beteiligt:
        </LegalP>
        <LegalTable
          headers={["Dienst", "Zweck", "Datenschutzerklärung"]}
          rows={[
            ["Cloudflare", "Website-Hosting, CDN und DDoS-Schutz", "cloudflare.com/privacypolicy"],
            ["Contabo", "Server-Hosting für die Tools, die auf unserem Server verarbeiten, für Kontodaten und für unsere eigenen Nutzungszählungen", "contabo.com/en/legal/privacy-policy"],
            ["Hostinger", "E-Mail-Hosting: versendet Konto-E-Mails wie die Bestätigung der Adresse und das Zurücksetzen des Passworts und empfängt E-Mails an unsere Adressen", "hostinger.com/legal/privacy-policy"],
            ["Google Fonts", "Liefert die Icon-Schriftart der Benutzeroberfläche aus", "policies.google.com/privacy"],
            ["Google Analytics", "Aggregierte Nutzungsmessung, nur geladen, wenn Sie Analyse-Cookies akzeptieren", "policies.google.com/privacy"],
            ["Anmeldung mit Google (optional)", "Meldet Sie an, nur wenn Sie „Weiter mit Google“ wählen — siehe Abschnitt 7", "policies.google.com/privacy"],
            ["Google Drive (optional)", "Importiert nur die Dateien, die Sie auswählen, und nur, wenn Sie die Funktion nutzen — siehe Abschnitt 7", "policies.google.com/privacy"],
            ["Dropbox (optional)", "Importiert nur die Dateien, die Sie auswählen, und nur, wenn Sie die Funktion nutzen — siehe Abschnitt 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Da die Icon-Schriftart vom CDN von Google abgerufen wird, erhält Google beim Laden einer
          Seite Ihre IP-Adresse und Ihren User-Agent, wie bei jeder Website, die diese Schriftart
          verwendet. Unsere beiden Textschriftarten werden von unserer eigenen Domain ausgeliefert
          und beziehen keinen Dritten ein.
        </LegalP>
      </LegalSection>

      <LegalSection id="google-drive" title="7. Anmeldung mit Google und Import aus Google Drive">
        <LegalP>
          Die Verbindung mit Google ist optional, und jedes Tool auf oMyImage funktioniert ohne sie.
          Wir nutzen Google für zwei getrennte Zwecke, jeweils mit einer eigenen Berechtigung: für die{" "}
          <strong>Anmeldung</strong>, wenn Sie Ihr Konto mit Google anlegen möchten, und für den{" "}
          <strong>Import eines Bildes</strong>, das Sie bereits in Google Drive aufbewahren, statt es
          von Ihrem Gerät hochzuladen. Die eine Berechtigung umfasst nicht die andere.
        </LegalP>

        <LegalSubsection title="Anmeldung mit Google">
          <LegalP>
            Wenn Sie &bdquo;Weiter mit Google&ldquo; wählen, bittet Google Sie, Ihr Basisprofil mit
            oMyImage zu teilen: die Bereiche (Scopes) <code>email</code> und <code>profile</code>.
            Wir nutzen sie einmal, bei der Anmeldung, um Ihre E-Mail-Adresse, Ihren Namen und Ihre
            Google-Konto-ID auszulesen, und speichern diese drei Angaben wie in Abschnitt 4
            beschrieben zu Ihrem Konto. Das Zugriffstoken aus diesem Vorgang wird nur für diese eine
            Anfrage verwendet und nicht gespeichert.
          </LegalP>
          <LegalP>
            Die Anmeldung mit Google gibt oMyImage keinen Zugriff auf Ihr Google Drive, Gmail, Ihre
            Kontakte oder andere Google-Daten.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Import aus Google Drive: was wir anfordern und was es erlaubt">
          <LegalP>
            Wenn Sie &bdquo;Aus Google Drive importieren&ldquo; wählen, fordern wir eine einzige,
            eng begrenzte Berechtigung an:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Dieser
            Bereich gewährt nur Zugriff auf die einzelnen Dateien, die Sie in der Dateiauswahl von
            Google selbst auswählen. Er erlaubt uns nicht, irgendetwas anderes in Ihrem Drive
            aufzulisten, zu durchsuchen oder zu öffnen, und gibt uns keinen Einblick in Ihre Ordner,
            Ihre Dateinamen oder Ihren Speicher insgesamt.
          </LegalP>
          <LegalP>
            Praktisch wirkt die Berechtigung zudem nur in eine Richtung: Wir lesen die Datei, die Sie
            ausgewählt haben. Wir erstellen, benennen, ändern, verschieben oder löschen nichts in
            Ihrem Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Import aus Google Drive: was mit der Datei und dem Token geschieht">
          <LegalUl>
            <li>
              Das von Google ausgestellte Zugriffstoken liegt nur für diesen Besuch im
              Arbeitsspeicher Ihres Browsers. Es wird nie an unsere Server übertragen, nie auf einen
              Datenträger geschrieben und verschwindet, wenn Sie den Tab schließen.
            </li>
            <li>
              Die ausgewählte Datei wird direkt von Google in Ihren Browser heruntergeladen. Auf dem
              Weg dorthin passiert sie unsere Server nicht.
            </li>
            <li>
              Ab diesem Moment wird die Datei genau so behandelt wie eine, die Sie von Ihrem Desktop
              hineingezogen haben — sie wird in Ihrem Browser verarbeitet oder nur dann auf unseren
              Server hochgeladen, wenn Sie ein Tool gewählt haben, das auf den Upload hinweist, und
              zwar nach denselben Speicherregeln wie in den Abschnitten 2 und 3 beschrieben.
            </li>
            <li>
              Wir behalten keine Kopie Ihrer Google-Dateien, indexieren sie nicht und speichern keine
              Aufzeichnung darüber, was Sie importiert haben.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          Die Nutzung und Übertragung von Informationen, die oMyImage über Google APIs erhält, an
          andere Apps erfolgt im Einklang mit der{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , einschließlich der Anforderungen zur eingeschränkten Nutzung (Limited Use). Insbesondere
          verwenden wir Google-Nutzerdaten nicht für Werbung, verkaufen oder übertragen sie nicht und
          verwenden sie nicht zum Trainieren allgemeiner oder KI-Modelle.
        </LegalCallout>

        <LegalP>
          Sie können diesen Zugriff jederzeit widerrufen, ohne dass der Rest der Website davon
          betroffen ist, und zwar auf der{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Berechtigungsseite Ihres Google-Kontos
          </a>
          .
        </LegalP>
        <LegalP>
          Der Widerruf löscht Ihr oMyImage-Konto nicht; wie Sie das tun, erklärt Abschnitt 10.
        </LegalP>
      </LegalSection>

      <LegalSection id="dropbox" title="8. Import aus Dropbox">
        <LegalP>
          Die Verbindung mit Dropbox ist optional und funktioniert wie bei Google Drive: Sie dient
          nur dazu, dass Sie ein Bild auswählen können, das Sie bereits in Dropbox aufbewahren, statt
          es von Ihrem Gerät hochzuladen. Jedes Tool auf oMyImage funktioniert ohne sie, und für die
          Nutzung ist kein oMyImage-Konto erforderlich.
        </LegalP>

        <LegalP>
          Wenn Sie &bdquo;Dropbox&ldquo; wählen, öffnet sich die Dateiauswahl von Dropbox in einem
          Pop-up-Fenster. Das Durchsuchen und Auswählen geschieht vollständig in diesem Fenster, das
          zu Dropbox gehört — wir sehen nie Ihre Ordner, Ihre Dateinamen oder irgendetwas, das Sie
          nicht auswählen.
        </LegalP>

        <LegalUl>
          <li>
            Es wird kein Konto verknüpft und kein Zugriffstoken ausgestellt. Anders als beim Import
            aus Google Drive gibt es keine Berechtigung, die Sie erteilen, und nichts, was Sie
            danach widerrufen müssten.
          </li>
          <li>
            Dropbox gibt für jede ausgewählte Datei einen temporären Download-Link zurück, der einige
            Stunden gültig ist. Ihr Browser nutzt ihn sofort und vergisst ihn dann; der Link wird
            nie an unsere Server gesendet oder auf einen Datenträger geschrieben.
          </li>
          <li>
            Die Datei wird direkt von Dropbox in Ihren Browser heruntergeladen. Auf dem Weg dorthin
            passiert sie unsere Server nicht.
          </li>
          <li>
            Ab diesem Moment wird die Datei genau so behandelt wie eine, die Sie von Ihrem Desktop
            hineingezogen haben — sie wird in Ihrem Browser verarbeitet oder nur dann auf unseren
            Server hochgeladen, wenn Sie ein Tool gewählt haben, das auf den Upload hinweist, und
            zwar nach denselben Speicherregeln wie in den Abschnitten 2 und 3 beschrieben.
          </li>
          <li>
            Wir behalten keine Kopie Ihrer Dropbox-Dateien, indexieren sie nicht und speichern keine
            Aufzeichnung darüber, was Sie importiert haben.
          </li>
        </LegalUl>

        <LegalP>
          Für Dropbox ist das ein Besuch bei Dropbox, und für das, was in diesem Fenster geschieht,
          gilt die Datenschutzerklärung von Dropbox. Der Dropbox-Code wird erst geladen, wenn Sie die
          Schaltfläche verwenden; wer die Funktion nie nutzt, kommt mit Dropbox überhaupt nicht in
          Berührung.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Geplante Funktionen">
        <LegalP>
          Einige Funktionen sind geplant, aber noch nicht in Betrieb. Wir beschreiben sie hier im
          Voraus, damit diese Erklärung auch dann zutreffend bleibt, wenn sie kommen, und damit Sie
          wissen, was Sie erwartet. <strong>Nichts davon ist derzeit aktiv.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Kostenpflichtige Tarife.</strong> Falls wir kostenpflichtige Tarife einführen,
            würde die Zahlung über einen externen Zahlungsdienstleister abgewickelt. Kartendaten
            gingen direkt an diesen Dienstleister und würden unsere Server nie erreichen oder dort
            gespeichert. Wir erhielten nur eine Transaktionsreferenz und deren Status.
          </li>
        </LegalUl>
        <LegalP>
          Sobald eine dieser Funktionen in Betrieb geht, wird diese Erklärung aktualisiert, und das
          Datum &bdquo;Zuletzt aktualisiert&ldquo; oben ändert sich, bevor die Funktion
          freigeschaltet wird.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Ihre Rechte">
        <LegalP>
          Je nach Ihrem Wohnort haben Sie möglicherweise das Recht auf Auskunft, Berichtigung,
          Datenübertragbarkeit und Löschung der über Sie gespeicherten personenbezogenen Daten sowie
          das Recht, bestimmten Verarbeitungen zu widersprechen. Ihre Bilder bewahren wir nicht auf.
          Wenn Sie ein Konto haben, speichern wir die in Abschnitt 4 aufgeführten Kontodaten; ohne
          Konto haben wir in der Regel nichts über Sie gespeichert, was sich abrufen ließe.
        </LegalP>
        <LegalP>
          Um Ihre Daten einzusehen, zu exportieren oder zu löschen — einschließlich Ihres Kontos und
          allem, was dazu gespeichert ist —, wenden Sie sich bitte über die Angaben auf unserer{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>{" "}
          an uns; wir antworten innerhalb einer angemessenen Frist. Sie können sich außerdem bei der
          für Sie zuständigen Datenschutzaufsichtsbehörde beschweren.
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Kinder">
        <LegalP>
          oMyImage ist ein allgemeines Hilfsprogramm und richtet sich nicht an Kinder. Wir erheben
          wissentlich keine personenbezogenen Daten von Kindern. Da für die Nutzung der Tools weder
          ein Konto noch persönliche Angaben nötig sind, gibt es normalerweise nichts zu erheben.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Sicherheit">
        <LegalP>
          Die Website wird über HTTPS ausgeliefert. Uploads auf unseren Server werden bei der
          Übertragung verschlüsselt, isoliert verarbeitet und nach dem oben beschriebenen Zeitplan
          gelöscht. Zum Schutz des Dienstes wenden wir Ratenbegrenzungen und Größenlimits für Uploads
          an.
        </LegalP>
        <LegalP>
          Kein Onlinedienst kann vollkommene Sicherheit versprechen. Bitte laden Sie kein Material
          hoch, dessen Offenlegung Sie sich im unwahrscheinlichen Fall einer Sicherheitsverletzung
          nicht leisten können — und denken Sie daran, dass bei den meisten Tools die sicherste
          Option bereits die Standardeinstellung ist, weil die Datei Ihr Gerät nie verlässt.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Änderungen">
        <LegalP>
          Wir können diese Erklärung anpassen, wenn sich der Dienst weiterentwickelt. Das Datum
          &bdquo;Zuletzt aktualisiert&ldquo; oben auf dieser Seite gibt immer die aktuelle Fassung
          an. Wesentliche Änderungen werden hier veröffentlicht, bevor sie wirksam werden.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Kontakt">
        <LegalP>
          Fragen zu dieser Erklärung oder zum Umgang mit Ihren Daten können Sie uns über die
          Möglichkeiten auf unserer{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>{" "}
          senden. Bitte beachten Sie auch unsere{" "}
          <Link href={localeHref("/terms", "de")} className="text-secondary hover:underline">
            Allgemeinen Geschäftsbedingungen
          </Link>
          , die Ihre Nutzung von {SITE.name} regeln.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
