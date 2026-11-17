import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * German refund policy — a written twin of /refunds (conversion.md §6.5), with
 * the same section ids. The route is /de/widerruf (the sister site's word), but
 * the page is the English refund policy translated, NOT a formal
 * Widerrufsbelehrung: it carries no model withdrawal form and no statutory
 * wording beyond what the English §10 states. The consumer-law paragraph keeps
 * the EU/UK 14-day withdrawal right exactly as the English page states it and
 * adds nothing — §10 already says a stronger local right prevails, and
 * inventing a specific claim about a law we have not had reviewed would be a
 * worse error than the omission.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "de",
  title: "Widerruf & Erstattungen | oMyImage",
  description:
    "Widerrufs- und Erstattungsrichtlinie von oMyImage — wie Erstattungen bei kostenpflichtigen Tarifen funktionieren, die Antragsfrist und was erstattungsfähig ist.",
});

const toc = [
  { id: "status", title: "1. Aktueller Stand" },
  { id: "free", title: "2. Der kostenlose Dienst" },
  { id: "window", title: "3. Frist für Erstattungen" },
  { id: "eligible", title: "4. Was erstattet wird" },
  { id: "noteligible", title: "5. Was nicht erstattet wird" },
  { id: "request", title: "6. So beantragen Sie eine Erstattung" },
  { id: "processing", title: "7. Bearbeitung & Dauer" },
  { id: "cancellation", title: "8. Kündigung und Erstattung" },
  { id: "chargebacks", title: "9. Rückbuchungen" },
  { id: "consumer", title: "10. Gesetzliche Rechte" },
  { id: "changes", title: "11. Änderungen" },
  { id: "contact", title: "12. Kontakt" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="de"
      title="Widerrufs- und Erstattungsrichtlinie"
      subtitle={`Wie Erstattungen bei kostenpflichtigen Tarifen von ${SITE.name} funktionieren.`}
      updated="03.08.2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Aktueller Stand">
        <LegalCallout>
          <strong>Es gibt noch keine kostenpflichtigen Tarife.</strong> Alle Tools auf {SITE.name}{" "}
          sind derzeit kostenlos — es gibt also nichts, was berechnet, und nichts, was erstattet
          werden könnte. Diese Richtlinie wird vorab veröffentlicht, damit die Bedingungen feststehen,
          bevor ein kostenpflichtiger Tarif startet.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. Der kostenlose Dienst">
        <LegalP>
          Der kostenlose Tarif ist kostenlos. Er ist mit keiner Gebühr verbunden, mit keinem
          Testzeitraum, der in einen kostenpflichtigen Tarif übergeht, und mit keiner hinterlegten
          Zahlungsmethode. Für die Nutzung der kostenlosen Tools wird Ihnen nie etwas berechnet.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Frist für Erstattungen">
        <LegalP>
          Sobald kostenpflichtige Tarife eingeführt sind, können Sie innerhalb von{" "}
          <strong>7 Tagen</strong> nach der Abbuchung die vollständige Erstattung Ihrer letzten
          Zahlung beantragen, vorbehaltlich der nachstehenden Bedingungen.
        </LegalP>
        <LegalP>
          Da Tarife im Voraus für einen festen Zeitraum abgerechnet werden, bezieht sich eine
          Erstattung auf die beanstandete Zahlung und nicht auf einen Teilzeitraum.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. Was erstattet wird">
        <LegalUl>
          <li>Ihnen wurde derselbe Abrechnungszeitraum doppelt berechnet.</li>
          <li>
            Ihnen wurde nach Ihrer Kündigung etwas berechnet, und zwar für einen Zeitraum, der nach
            der Kündigung beginnt.
          </li>
          <li>
            Eine kostenpflichtige Funktion hat nicht wie beschrieben funktioniert, und wir konnten das
            Problem nach Ihrer Meldung nicht innerhalb einer angemessenen Frist für Sie lösen.
          </li>
          <li>
            Sie haben versehentlich ein Abonnement abgeschlossen und die kostenpflichtigen Funktionen
            innerhalb der 7-Tage-Frist nicht wesentlich genutzt.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. Was nicht erstattet wird">
        <LegalUl>
          <li>Anträge, die mehr als 7 Tage nach der Abbuchung gestellt werden.</li>
          <li>
            Eine wesentliche Nutzung des bezahlten Kontingents im Abrechnungszeitraum —
            kostenpflichtige Tarife sind digitale Dienstleistungen, die unmittelbar nach der Zahlung
            erbracht werden.
          </li>
          <li>
            Unzufriedenheit mit der Qualität des Ergebnisses, wenn das Tool wie beschrieben
            funktioniert hat. Den kostenlosen Tarif gibt es gerade, damit Sie die Qualität vor dem
            Bezahlen prüfen können.
          </li>
          <li>
            Probleme, die durch Ihr Gerät, Ihren Browser, Ihr Netzwerk oder durch beschädigte bzw.
            nicht unterstützte Ausgangsdateien verursacht werden.
          </li>
          <li>
            Ausfälle oder Unterbrechungen außerhalb unseres zumutbaren Einflussbereichs sowie
            geplante Wartungsarbeiten.
          </li>
          <li>
            Konten, die wegen eines Verstoßes gegen unsere{" "}
            <Link href={localeHref("/terms", "de")} className="text-secondary hover:underline">
              Allgemeinen Geschäftsbedingungen
            </Link>{" "}
            gesperrt oder gekündigt wurden.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. So beantragen Sie eine Erstattung">
        <LegalP>
          Wenden Sie sich über unsere{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>{" "}
          an uns und nennen Sie die beim Kauf verwendete E-Mail-Adresse, das ungefähre Datum und den
          Betrag der Abbuchung sowie eine kurze Beschreibung des Problems. Bitte kontaktieren Sie uns,
          bevor Sie bei Ihrer Bank eine Reklamation einleiten — direkt lässt sich das fast immer
          schneller klären.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Bearbeitung & Dauer">
        <LegalP>
          Wir bemühen uns, Erstattungsanträge innerhalb von 3 Werktagen zu prüfen. Genehmigte
          Erstattungen werden über unseren Zahlungsdienstleister auf die ursprüngliche
          Zahlungsmethode ausgezahlt. Nach der Auszahlung erscheint der Betrag in der Regel innerhalb
          von 5–10 Werktagen, je nach Ihrer Bank oder Ihrem Kartenaussteller — diesen letzten Schritt
          haben wir nicht in der Hand.
        </LegalP>
        <LegalP>
          Erstattungen erfolgen in der ursprünglichen Währung der Transaktion. Für
          Wechselkursdifferenzen oder Gebühren Ihrer Bank sind wir nicht verantwortlich.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Kündigung und Erstattung">
        <LegalP>
          Die Kündigung eines Abonnements beendet künftige Verlängerungen; der bereits bezahlte
          Zeitraum wird dadurch nicht automatisch erstattet. Nach der Kündigung behalten Sie den
          Zugang zu den kostenpflichtigen Funktionen bis zum Ende des bereits bezahlten Zeitraums;
          danach wechselt das Konto zurück in den kostenlosen Tarif.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Rückbuchungen">
        <LegalP>
          Bitte kontaktieren Sie uns, bevor Sie eine Rückbuchung (Chargeback) veranlassen.
          Rückbuchungen sind aufwendig zu klären und in der Regel langsamer als eine direkte
          Erstattung. Wir behalten uns vor, den Zugang zu kostenpflichtigen Funktionen zu sperren,
          solange eine Rückbuchung offen ist, und Konten mit betrügerischen Reklamationen künftig
          keine kostenpflichtigen Leistungen mehr anzubieten.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Gesetzliche Rechte">
        <LegalP>
          Nichts in dieser Richtlinie schränkt unabdingbare Rechte ein, die Ihnen nach dem für Sie
          geltenden Verbraucherrecht zustehen. Wo das örtliche Recht ein weitergehendes Widerrufs-
          oder Erstattungsrecht gewährt als diese Richtlinie, hat dieses Recht Vorrang.
        </LegalP>
        <LegalP>
          Wenn Sie Verbraucherin oder Verbraucher in der Europäischen Union oder im Vereinigten
          Königreich sind, haben Sie möglicherweise ein gesetzliches Recht, einen Vertrag über
          digitale Dienstleistungen innerhalb von 14 Tagen zu widerrufen. Wenn Sie verlangen, dass wir
          sofort mit der Erbringung der Leistung beginnen, kann dieses Recht, soweit gesetzlich
          zulässig, erlöschen, sobald die Leistungserbringung begonnen hat.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Änderungen">
        <LegalP>
          Wir können diese Richtlinie anpassen, wenn sich der Dienst weiterentwickelt. Maßgeblich ist
          die zum Zeitpunkt Ihres Kaufs veröffentlichte Fassung, und das Datum &bdquo;Zuletzt
          aktualisiert&ldquo; oben gibt immer die aktuelle Fassung an.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Kontakt">
        <LegalP>
          Bei Fragen zu Abrechnung oder Erstattungen erreichen Sie uns über unsere{" "}
          <Link href={localeHref("/contact", "de")} className="text-secondary hover:underline">
            Kontaktseite
          </Link>
          . Siehe auch unsere{" "}
          <Link href={localeHref("/terms", "de")} className="text-secondary hover:underline">
            Allgemeinen Geschäftsbedingungen
          </Link>{" "}
          und unsere{" "}
          <Link href={localeHref("/pricing", "de")} className="text-secondary hover:underline">
            Preise
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
