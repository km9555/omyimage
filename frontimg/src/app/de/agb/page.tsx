import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * German terms of service (AGB) — a written twin of /terms (conversion.md
 * §6.5), with the same section ids, the same numbering and the same
 * cross-references (section 14 names sections 5, 8, 9, 10, 11, 15 and 16, so
 * the order is a contract, not a preference).
 *
 * The disclaimer and liability sections keep their capitalisation, as in every
 * other oMyImage twin: there the all-caps IS the legal convention being
 * followed, and dropping it on one locale would be a substantive change rather
 * than a stylistic one. (The sister site's German AGB chose sentence case;
 * this repo's playbook says otherwise.) Capitalised German writes ß as SS.
 *
 * §15 is translated faithfully and therefore names no country, no company and
 * no court, exactly as the English page does.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/terms",
  locale: "de",
  title: "Allgemeine Geschäftsbedingungen (AGB) | oMyImage",
  description:
    "Die AGB von oMyImage — zulässige Nutzung, Umgang mit Ihren Dateien, Gewährleistungsausschluss, Haftungsbeschränkung und anwendbares Recht.",
});

const toc = [
  { id: "acceptance", title: "1. Annahme der Bedingungen" },
  { id: "service", title: "2. Beschreibung des Dienstes" },
  { id: "eligibility", title: "3. Nutzungsberechtigung" },
  { id: "acceptable", title: "4. Zulässige Nutzung" },
  { id: "content", title: "5. Ihre Inhalte" },
  { id: "files", title: "6. Umgang mit Dateien & Löschung" },
  { id: "availability", title: "7. Verfügbarkeit & Änderungen" },
  { id: "warranties", title: "8. Gewährleistungsausschluss" },
  { id: "liability", title: "9. Haftungsbeschränkung" },
  { id: "indemnity", title: "10. Freistellung" },
  { id: "ip", title: "11. Geistiges Eigentum" },
  { id: "thirdparty", title: "12. Software & Links von Drittanbietern" },
  { id: "billing", title: "13. Kostenpflichtige Tarife & Abrechnung" },
  { id: "termination", title: "14. Beendigung" },
  { id: "governing", title: "15. Anwendbares Recht" },
  { id: "misc", title: "16. Sonstiges" },
  { id: "contact", title: "17. Kontakt" },
];

export default function TermsPage() {
  return (
    <LegalShell
      locale="de"
      title="Allgemeine Geschäftsbedingungen"
      subtitle={`Die Vereinbarung zwischen Ihnen und ${SITE.name}, wenn Sie diese Website und ihre Tools nutzen.`}
      updated="03.08.2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Annahme der Bedingungen">
        <LegalP>
          Mit dem Zugriff auf {SITE.name} (der &bdquo;Dienst&ldquo;) oder dessen Nutzung erklären Sie
          sich mit diesen Allgemeinen Geschäftsbedingungen (die &bdquo;AGB&ldquo;) einverstanden und
          an sie gebunden. Wenn Sie diesen AGB nicht zustimmen, dürfen Sie den Dienst nicht nutzen.
        </LegalP>
        <LegalP>
          Diese AGB gelten für alle Besucher — unabhängig davon, ob Sie ein Konto haben und ob Sie für
          etwas bezahlen.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Beschreibung des Dienstes">
        <LegalP>
          Der Dienst stellt Online-Bildwerkzeuge bereit — Komprimieren, Größe ändern, Zuschneiden,
          Umwandeln, Bearbeiten und verwandte Vorgänge. Die meisten Tools laufen vollständig in Ihrem
          Browser. Einige Tools erfordern eine Verarbeitung auf unseren Servern, wie in Abschnitt 6
          und in unserer{" "}
          <Link href={localeHref("/privacy", "de")} className="text-secondary hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          beschrieben.
        </LegalP>
        <LegalP>
          Der Dienst wird &bdquo;wie besehen&ldquo; und &bdquo;wie verfügbar&ldquo; angeboten. Wir
          können jederzeit Tools oder Funktionen hinzufügen, ändern, aussetzen oder entfernen.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Nutzungsberechtigung">
        <LegalP>
          Um den Dienst zu nutzen, müssen Sie nach dem Recht Ihres Landes in der Lage sein, eine
          rechtlich bindende Vereinbarung einzugehen. Wenn Sie den Dienst im Namen einer Organisation
          nutzen, sichern Sie zu, dass Sie befugt sind, diese Organisation an diese AGB zu binden.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Zulässige Nutzung">
        <LegalP>Sie verpflichten sich, den Dienst nicht zu nutzen, um:</LegalP>
        <LegalUl>
          <li>
            Material hochzuladen, zu verarbeiten oder zu verbreiten, das rechtswidrig ist oder zu
            dessen Nutzung Sie nicht berechtigt sind — einschließlich Material, das Urheberrechte,
            Markenrechte, Persönlichkeitsrechte oder das Recht am eigenen Bild verletzt;
          </li>
          <li>
            Darstellungen sexuellen Missbrauchs von Kindern, ohne Einwilligung verbreitete intime
            Aufnahmen oder Inhalte zu verarbeiten, die Gewalt, Terrorismus oder rechtswidrige
            Handlungen darstellen oder fördern;
          </li>
          <li>
            Bilder zu erstellen oder zu manipulieren, die dazu bestimmt sind, zu täuschen, zu
            betrügen, sich als reale Person auszugeben oder Identitäts- bzw. amtliche Dokumente zu
            fälschen;
          </li>
          <li>
            sich unbefugten Zugang zum Dienst, seinen Servern oder verbundenen Systemen zu
            verschaffen oder diese auf Schwachstellen zu untersuchen, zu scannen oder zu testen;
          </li>
          <li>
            den Dienst zu stören oder zu beeinträchtigen, etwa durch automatisiertes Scraping,
            Denial-of-Service-Versuche oder das Umgehen von Ratenbegrenzungen, Dateigrößenlimits oder
            Nutzungskontingenten;
          </li>
          <li>
            den Dienst selbst weiterzuverkaufen, unterzulizenzieren oder kommerziell
            weiterzuverbreiten oder ihn zum Aufbau eines Konkurrenzdienstes zu nutzen; oder
          </li>
          <li>den Dienst in einer Weise zu nutzen, die gegen geltende Gesetze oder Vorschriften verstößt.</li>
        </LegalUl>
        <LegalCallout>
          Sie allein sind für die Inhalte verantwortlich, die Sie verarbeiten, und dafür, dass Sie
          rechtlich dazu befugt sind. Wir können jede Person, bei der wir begründet annehmen, dass
          sie gegen diese AGB verstößt, ohne Vorankündigung und ohne Haftung sperren, in der Nutzung
          begrenzen oder vom Zugang ausschließen.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Ihre Inhalte">
        <LegalP>
          Sämtliche Rechte an den Bildern und Dateien, die Sie verarbeiten (&bdquo;Ihre
          Inhalte&ldquo;), verbleiben bei Ihnen. Wir beanspruchen kein Eigentum daran.
        </LegalP>
        <LegalP>
          Für die Tools, die auf unseren Servern verarbeiten, räumen Sie uns eine beschränkte,
          vorübergehende, weltweite und unentgeltliche Lizenz ein, Ihre Inhalte{" "}
          <strong>ausschließlich</strong> zu dem Zweck zu speichern, zu übertragen und zu
          verarbeiten, den von Ihnen angeforderten Vorgang auszuführen und Ihnen das Ergebnis
          zurückzugeben. Diese Lizenz endet, wenn die Datei gelöscht wird. Wir verwenden Ihre Inhalte
          nicht zum Trainieren von Modellen und verkaufen, teilen oder veröffentlichen sie nicht.
        </LegalP>
        <LegalP>
          Sie sichern zu und gewährleisten, dass Sie Inhaber Ihrer Inhalte sind oder über alle
          Rechte und Erlaubnisse verfügen, die für ihre Verarbeitung über den Dienst erforderlich
          sind.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. Umgang mit Dateien & Löschung">
        <LegalP>
          Die meisten Tools verarbeiten Dateien vollständig in Ihrem Browser; diese Dateien werden
          nie an uns übertragen. Dateien werden nur dann auf unsere Server hochgeladen, wenn sie die
          Schwelle für die Verarbeitung im Browser überschreiten, wenn Sie ein KI-Tool nutzen oder
          wenn Sie die HEIC-Umwandlung nutzen, die aus Lizenzgründen serverseitig laufen muss.
        </LegalP>
        <LegalP>
          Hochgeladene Dateien und ihre Ergebnisse werden nur vorübergehend gespeichert und nach
          ungefähr einer Stunde automatisch gelöscht. Download-Links sind nicht zu erraten, aber
          nicht durch eine Anmeldung geschützt — wer den Link hat, kann die Datei abrufen, bis er
          abläuft. Behandeln Sie Links daher vertraulich.
        </LegalP>
        <LegalP>
          Für eigene Kopien sind Sie selbst verantwortlich. Wir sind kein Speicher- oder
          Sicherungsdienst und garantieren nicht, dass eine verarbeitete Datei abrufbar bleibt.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Verfügbarkeit & Änderungen">
        <LegalP>
          Wir garantieren nicht, dass der Dienst unterbrechungsfrei, rechtzeitig, sicher oder
          fehlerfrei ist. Der Dienst kann wegen Wartung, Aktualisierungen oder aus Gründen, die
          außerhalb unserer Kontrolle liegen, nicht verfügbar sein.
        </LegalP>
        <LegalP>
          Serverabhängige Tools setzen voraus, dass die zugrunde liegende Software installiert und
          betriebsbereit ist; ist sie das nicht, meldet das Tool, dass es nicht verfügbar ist, statt
          ein Ergebnis zu liefern. Wir können jeden Teil des Dienstes jederzeit ohne Vorankündigung
          ändern oder einstellen.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Gewährleistungsausschluss">
        <LegalP>
          DER DIENST WIRD &bdquo;WIE BESEHEN&ldquo; UND &bdquo;WIE VERFÜGBAR&ldquo; BEREITGESTELLT,
          OHNE GEWÄHRLEISTUNG JEGLICHER ART, OB AUSDRÜCKLICH, STILLSCHWEIGEND ODER GESETZLICH. SOWEIT
          NACH GELTENDEM RECHT ZULÄSSIG, SCHLIESSEN WIR ALLE GEWÄHRLEISTUNGEN AUS, EINSCHLIESSLICH
          DER STILLSCHWEIGENDEN GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN
          ZWECK, DER RECHTSMÄNGELFREIHEIT UND DER NICHTVERLETZUNG VON RECHTEN DRITTER.
        </LegalP>
        <LegalP>
          WIR GEWÄHRLEISTEN NICHT, DASS DER DIENST IHREN ANFORDERUNGEN ENTSPRICHT, DASS DIE
          ERGEBNISSE GENAU SIND ODER EINE BESTIMMTE QUALITÄT HABEN ODER DASS MÄNGEL BEHOBEN WERDEN.
          DIE NUTZUNG DES DIENSTES ERFOLGT AUF IHR EIGENES RISIKO, UND SIE SIND DAFÜR VERANTWORTLICH,
          ERGEBNISSE ZU ÜBERPRÜFEN UND ORIGINALE AUFZUBEWAHREN, BEVOR SIE SICH AUF EINE VERARBEITETE
          DATEI VERLASSEN.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Haftungsbeschränkung">
        <LegalP>
          SOWEIT NACH GELTENDEM RECHT ZULÄSSIG, HAFTEN {SITE.name}, SEIN BETREIBER, SEINE INHABER,
          MITWIRKENDEN ODER LIEFERANTEN IN KEINEM FALL FÜR MITTELBARE SCHÄDEN, BEGLEITSCHÄDEN,
          BESONDERE SCHÄDEN, FOLGESCHÄDEN, SCHADENSERSATZ MIT ABSCHRECKUNGS- ODER STRAFCHARAKTER
          ODER FÜR ENTGANGENEN GEWINN, ENTGANGENE EINNAHMEN, VERLUST VON GOODWILL, DATEN, BILDERN
          ODER GESCHÄFTSCHANCEN, DIE AUS ODER IM ZUSAMMENHANG MIT IHRER NUTZUNG DES DIENSTES ODER
          DER UNMÖGLICHKEIT SEINER NUTZUNG ENTSTEHEN — GLEICH OB AUF GRUNDLAGE VON VERTRAG,
          UNERLAUBTER HANDLUNG, FAHRLÄSSIGKEIT, GEFÄHRDUNGSHAFTUNG ODER EINER ANDEREN
          RECHTSGRUNDLAGE, UND AUCH DANN, WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN
          WURDE.
        </LegalP>
        <LegalP>
          SOWEIT NACH GELTENDEM RECHT ZULÄSSIG, IST UNSERE GESAMTHAFTUNG FÜR ALLE ANSPRÜCHE IM
          ZUSAMMENHANG MIT DEM DIENST AUF DEN HÖHEREN DER FOLGENDEN BETRÄGE BEGRENZT: (A) DEN
          BETRAG, DEN SIE UNS FÜR DEN DIENST IN DEN DREI MONATEN VOR DEM DEN ANSPRUCH AUSLÖSENDEN
          EREIGNIS TATSÄCHLICH GEZAHLT HABEN, ODER (B) 50 USD.
        </LegalP>
        <LegalP>
          In manchen Rechtsordnungen ist der Ausschluss oder die Beschränkung bestimmter
          Gewährleistungen oder Haftungen nicht zulässig. In diesem Fall gelten die vorstehenden
          Ausschlüsse und Beschränkungen nur im größtmöglichen zulässigen Umfang, und nichts in
          diesen AGB beschränkt die Haftung für Betrug oder für fahrlässig verursachte Todesfälle
          oder Körperverletzungen, soweit eine solche Beschränkung gesetzlich verboten ist.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Freistellung">
        <LegalP>
          Sie verpflichten sich, {SITE.name}, seinen Betreiber, seine Inhaber und Mitwirkenden von
          allen Ansprüchen, Forderungen, Schäden, Verlusten, Verbindlichkeiten, Kosten und
          Aufwendungen (einschließlich angemessener Anwaltskosten) freizustellen, sie dagegen zu
          verteidigen und schadlos zu halten, die entstehen aus oder im Zusammenhang stehen mit:
          (a) Ihren Inhalten; (b) Ihrer Nutzung oder missbräuchlichen Nutzung des Dienstes; (c) Ihrem
          Verstoß gegen diese AGB; oder (d) Ihrer Verletzung von Gesetzen oder Rechten Dritter.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Geistiges Eigentum">
        <LegalP>
          Der Dienst — einschließlich Name, Markenauftritt, Design, Benutzeroberfläche und
          Originalcode — steht im Eigentum seines Betreibers und ist durch Gesetze zum Schutz des
          geistigen Eigentums geschützt. Diese AGB räumen Ihnen eine beschränkte, persönliche, nicht
          ausschließliche, nicht übertragbare und widerrufliche Lizenz ein, den Dienst für seinen
          vorgesehenen Zweck zu nutzen. Weitere Rechte werden nicht eingeräumt.
        </LegalP>
        <LegalP>
          Die Ergebnisse, die Sie aus Ihren eigenen Bildern erzeugen, dürfen Sie für jeden
          rechtmäßigen Zweck nutzen, auch kommerziell.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Software & Links von Drittanbietern">
        <LegalP>
          Der Dienst baut auf Open-Source-Komponenten auf, die jeweils von ihren Urhebern lizenziert
          werden. Namensnennungen und die vollständigen Lizenztexte finden Sie in unseren{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            Hinweisen zu Drittanbieter-Software
          </a>
          . Diese Komponenten werden von ihren Urhebern ohne Gewährleistung bereitgestellt.
        </LegalP>
        <LegalP>
          Der Dienst kann auf Websites Dritter verlinken. Wir haben keinen Einfluss auf diese
          Websites, machen uns sie nicht zu eigen und übernehmen keine Verantwortung für ihre
          Inhalte, Praktiken oder Verfügbarkeit.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Kostenpflichtige Tarife & Abrechnung">
        <LegalP>
          Der Dienst ist derzeit kostenlos, und es gibt keine aktiven kostenpflichtigen Tarife.
          Folgendes gilt, falls und sobald kostenpflichtige Tarife eingeführt werden.
        </LegalP>
        <LegalUl>
          <li>
            Preise werden vor dem Kauf angezeigt und können sich für künftige Abrechnungszeiträume
            nach vorheriger Ankündigung ändern.
          </li>
          <li>
            Abonnements verlängern sich automatisch um denselben Zeitraum, bis sie gekündigt werden.
            Sie können jederzeit kündigen, wirksam zum Ende des laufenden Zeitraums.
          </li>
          <li>
            Zahlungen würden über einen externen Zahlungsdienstleister abgewickelt; Ihre
            vollständigen Kartendaten würden wir weder erhalten noch speichern.
          </li>
          <li>
            Sie sind für etwaige Steuern verantwortlich und dafür, dass Ihre Rechnungsdaten korrekt
            sind.
          </li>
          <li>
            Wir können den Zugang zu kostenpflichtigen Funktionen sperren, wenn eine Zahlung
            fehlschlägt oder rückgängig gemacht wird.
          </li>
        </LegalUl>
        <LegalP>
          Erstattungen richten sich nach unserer{" "}
          <Link href={localeHref("/refunds", "de")} className="text-secondary hover:underline">
            Widerrufs- und Erstattungsrichtlinie
          </Link>
          , die Bestandteil dieser AGB ist.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Beendigung">
        <LegalP>
          Wir können Ihren Zugang zum Dienst jederzeit mit oder ohne Vorankündigung aussetzen oder
          beenden, wenn wir begründet annehmen, dass Sie gegen diese AGB verstoßen haben oder Ihre
          Nutzung ein Risiko für den Dienst oder für andere darstellt. Sie können die Nutzung des
          Dienstes jederzeit beenden.
        </LegalP>
        <LegalP>
          Abschnitte, die ihrer Natur nach über die Beendigung hinaus fortgelten sollen —
          insbesondere die Abschnitte 5, 8, 9, 10, 11, 15 und 16 —, bleiben in Kraft.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Anwendbares Recht und Streitbeilegung">
        <LegalP>
          Diese AGB unterliegen dem anwendbaren Recht und sind nach diesem auszulegen, ohne
          Rücksicht auf kollisionsrechtliche Grundsätze. Streitigkeiten aus oder im Zusammenhang mit
          diesen AGB oder dem Dienst werden vor den zuständigen Gerichten beigelegt.
        </LegalP>
        <LegalP>
          Wenn Sie Verbraucherin oder Verbraucher mit Wohnsitz in der Europäischen Union oder im
          Vereinigten Königreich sind, kommen Ihnen gegebenenfalls zusätzlich die zwingenden
          Vorschriften des Rechts Ihres Wohnsitzlandes zugute. Nichts in diesen AGB berührt Ihr Recht
          als Verbraucher, sich auf diese zwingenden Vorschriften zu berufen.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Sonstiges">
        <LegalSubsection title="Gesamte Vereinbarung">
          <LegalP>
            Diese AGB bilden zusammen mit der Datenschutzerklärung und der Widerrufs- und
            Erstattungsrichtlinie die gesamte Vereinbarung zwischen Ihnen und uns über den Dienst.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Salvatorische Klausel">
          <LegalP>
            Sollte eine Bestimmung für undurchsetzbar erklärt werden, wird sie im geringstmöglichen
            erforderlichen Umfang angepasst; die übrigen Bestimmungen bleiben in vollem Umfang
            wirksam.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Kein Verzicht">
          <LegalP>
            Setzen wir eine Bestimmung nicht durch, liegt darin kein Verzicht auf unser Recht, dies
            später zu tun.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Abtretung">
          <LegalP>
            Sie dürfen diese AGB nicht ohne unsere Zustimmung übertragen. Wir dürfen sie im
            Zusammenhang mit einer Fusion, einer Übernahme oder einem Verkauf von
            Vermögenswerten übertragen.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Änderungen dieser AGB">
          <LegalP>
            Wir können diese AGB von Zeit zu Zeit aktualisieren. Das Datum &bdquo;Zuletzt
            aktualisiert&ldquo; oben gibt die aktuelle Fassung an, und die weitere Nutzung nach einer
            Änderung gilt als Zustimmung zu dieser Änderung.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Kontakt">
        <LegalP>
          Fragen zu diesen AGB können Sie uns über die Möglichkeiten auf unserer{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>{" "}
          senden.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
