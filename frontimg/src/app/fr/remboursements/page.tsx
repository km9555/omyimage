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
 * French refund policy (Politique de remboursement) — a written twin of
 * /refunds (conversion.md §6.5), with the same section ids. French, "vous".
 *
 * The consumer-law paragraph keeps the EU/UK 14-day withdrawal right exactly
 * as the English page states it and adds nothing — no Code de la consommation
 * article numbers, no médiateur de la consommation. §10 already says a
 * stronger local right prevails, and inventing a specific claim about a law we
 * have not had reviewed would be a worse error than the omission.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "fr",
  title: "Politique de remboursement | oMyImage",
  description:
    "Politique de remboursement d'oMyImage : comment fonctionnent les remboursements des formules payantes, le délai pour les demander et ce qui est remboursable ou non.",
});

const toc = [
  { id: "status", title: "1. Situation actuelle" },
  { id: "free", title: "2. Le service gratuit" },
  { id: "window", title: "3. Délai de remboursement" },
  { id: "eligible", title: "4. Ce qui est remboursable" },
  { id: "noteligible", title: "5. Ce qui ne l'est pas" },
  { id: "request", title: "6. Comment faire une demande" },
  { id: "processing", title: "7. Traitement et délais" },
  { id: "cancellation", title: "8. Résiliation ou remboursement" },
  { id: "chargebacks", title: "9. Rétrofacturations" },
  { id: "consumer", title: "10. Droits légaux" },
  { id: "changes", title: "11. Modifications" },
  { id: "contact", title: "12. Contact" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="fr"
      title="Politique de remboursement"
      subtitle={`Comment fonctionnent les remboursements des formules payantes de ${SITE.name}.`}
      updated="03/08/2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Situation actuelle">
        <LegalCallout>
          <strong>Il n'existe pas encore de formule payante.</strong> Tous les outils de{" "}
          {SITE.name} sont actuellement gratuits : il n'y a donc rien à facturer et rien à
          rembourser. Cette politique est publiée à l'avance pour que les conditions soient claires
          avant le lancement de toute formule payante.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. Le service gratuit">
        <LegalP>
          La formule gratuite est gratuite. Elle n'entraîne aucun frais, aucun essai qui se
          transforme en formule payante et aucun moyen de paiement enregistré. Vous ne serez
          jamais facturé pour l'utilisation des outils gratuits.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Délai de remboursement">
        <LegalP>
          Une fois les formules payantes lancées, vous pourrez demander le remboursement intégral
          de votre paiement le plus récent dans un délai de <strong>7&nbsp;jours</strong> à compter
          de ce prélèvement, sous réserve des conditions ci-dessous.
        </LegalP>
        <LegalP>
          Comme les formules sont facturées à l'avance pour une période fixe, les remboursements
          portent sur le paiement contesté et non sur une partie de période.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. Ce qui donne droit à un remboursement">
        <LegalUl>
          <li>Vous avez été facturé deux fois pour la même période de facturation.</li>
          <li>
            Vous avez été facturé après votre résiliation, pour une période commençant après
            celle-ci.
          </li>
          <li>
            Une fonctionnalité payante n'a pas fonctionné comme décrit et nous n'avons pas pu
            résoudre le problème dans un délai raisonnable après votre signalement.
          </li>
          <li>
            Vous vous êtes abonné par erreur et n'avez pas fait un usage substantiel des
            fonctionnalités payantes, dans le délai de 7&nbsp;jours.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. Ce qui ne donne pas droit à un remboursement">
        <LegalUl>
          <li>Les demandes faites plus de 7&nbsp;jours après le prélèvement.</li>
          <li>
            Un usage substantiel du quota payant pendant la période de facturation : les formules
            payantes sont des services numériques fournis immédiatement après le paiement.
          </li>
          <li>
            Une insatisfaction quant à la qualité du résultat lorsque l'outil a fonctionné comme
            décrit. La formule gratuite existe précisément pour que vous puissiez évaluer la qualité
            avant de payer.
          </li>
          <li>
            Les problèmes causés par votre appareil, votre navigateur, votre réseau ou par des
            fichiers source corrompus ou dans un format non pris en charge.
          </li>
          <li>
            Les interruptions ou indisponibilités indépendantes de notre volonté raisonnable, ou la
            maintenance programmée.
          </li>
          <li>
            Les comptes suspendus ou résiliés pour manquement à nos{" "}
            <Link href={localeHref("/terms", "fr")} className="text-secondary hover:underline">
              Conditions générales d'utilisation
            </Link>
            .
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. Comment demander un remboursement">
        <LegalP>
          Contactez-nous via notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>{" "}
          en indiquant l'adresse e-mail utilisée pour l'achat, la date et le montant approximatifs
          du prélèvement, ainsi qu'une brève description du problème. Merci de nous contacter avant
          d'ouvrir une contestation auprès de votre banque : nous pouvons presque toujours régler
          la situation plus rapidement en direct.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Traitement et délais">
        <LegalP>
          Nous nous efforçons d'examiner les demandes de remboursement sous 3&nbsp;jours ouvrés.
          Les remboursements acceptés sont effectués sur le moyen de paiement d'origine par
          l'intermédiaire de notre prestataire de paiement. Une fois le remboursement émis, les
          fonds apparaissent généralement sous 5 à 10&nbsp;jours ouvrés, selon votre banque ou
          l'émetteur de votre carte ; cette dernière étape échappe à notre contrôle.
        </LegalP>
        <LegalP>
          Les remboursements sont effectués dans la devise d'origine de la transaction. Nous ne
          sommes pas responsables des écarts de taux de change ni des frais appliqués par votre
          banque.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Résiliation ou remboursement">
        <LegalP>
          Résilier un abonnement met fin aux renouvellements futurs ; cela ne rembourse pas
          automatiquement la période déjà payée. Après la résiliation, vous conservez l'accès aux
          fonctionnalités payantes jusqu'à la fin de la période déjà réglée, puis le compte repasse
          à la formule gratuite.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Rétrofacturations">
        <LegalP>
          Merci de nous contacter avant d'engager une rétrofacturation (chargeback). Les
          rétrofacturations sont coûteuses à traiter et généralement plus lentes qu'un
          remboursement direct. Nous nous réservons le droit de suspendre l'accès aux
          fonctionnalités payantes tant qu'une rétrofacturation est en cours, et de refuser tout
          service payant futur aux comptes ayant fait l'objet de contestations frauduleuses.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Droits légaux">
        <LegalP>
          Rien dans cette politique ne limite les droits auxquels vous ne pouvez pas renoncer en
          vertu du droit de la consommation qui vous est applicable. Lorsque la loi locale vous
          accorde un droit de rétractation ou de remboursement plus étendu que cette politique,
          c'est cette loi qui prévaut.
        </LegalP>
        <LegalP>
          Si vous êtes un consommateur dans l'Union européenne ou au Royaume-Uni, vous pouvez
          disposer d'un droit légal de rétractation de 14&nbsp;jours pour un contrat de services
          numériques. Si vous nous demandez de commencer à fournir le service immédiatement, ce
          droit peut prendre fin une fois l'exécution commencée, dans la mesure permise par la loi.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Modifications">
        <LegalP>
          Nous pouvons mettre à jour cette politique au fil de l'évolution du service. La version
          applicable est celle publiée au moment de votre achat, et la date de « Dernière mise à
          jour » ci-dessus correspond toujours à la version en vigueur.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <LegalP>
          Pour toute question de facturation ou de remboursement, contactez-nous via notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>
          . Consultez aussi nos{" "}
          <Link href={localeHref("/terms", "fr")} className="text-secondary hover:underline">
            Conditions générales d'utilisation
          </Link>{" "}
          et nos{" "}
          <Link href={localeHref("/pricing", "fr")} className="text-secondary hover:underline">
            tarifs
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
