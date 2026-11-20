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
 * French terms of service (Conditions générales d'utilisation) — a written
 * twin of /terms (conversion.md §6.5), with the same section ids, the same
 * numbering and the same cross-references (section 14 names sections 5, 8, 9,
 * 10, 11, 15 and 16, so the order is a contract, not a preference).
 *
 * French for France, Belgium, Switzerland and Québec, addressed as "vous" like
 * the rest of /fr. The disclaimer and liability sections keep their
 * capitalisation, as in every other oMyImage twin: there the all-caps IS the
 * legal convention being followed, and dropping it on one locale would be a
 * substantive change.
 *
 * §15 is translated faithfully and therefore names no country, no company and
 * no court, exactly as the English page does. No mentions légales (LCEN art. 6)
 * either: the English site publishes no operator identity to put in them.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/terms",
  locale: "fr",
  title: "Conditions générales d'utilisation | oMyImage",
  description:
    "Les conditions qui régissent l'utilisation d'oMyImage : usage acceptable, fichiers, exclusion de garanties, limitation de responsabilité et droit applicable.",
});

const toc = [
  { id: "acceptance", title: "1. Acceptation des Conditions" },
  { id: "service", title: "2. Description du Service" },
  { id: "eligibility", title: "3. Conditions d'accès" },
  { id: "acceptable", title: "4. Usage acceptable" },
  { id: "content", title: "5. Votre Contenu" },
  { id: "files", title: "6. Traitement et suppression des fichiers" },
  { id: "availability", title: "7. Disponibilité et modifications" },
  { id: "warranties", title: "8. Exclusion de garanties" },
  { id: "liability", title: "9. Limitation de responsabilité" },
  { id: "indemnity", title: "10. Garantie contre les recours" },
  { id: "ip", title: "11. Propriété intellectuelle" },
  { id: "thirdparty", title: "12. Logiciels et liens tiers" },
  { id: "billing", title: "13. Formules payantes et facturation" },
  { id: "termination", title: "14. Résiliation" },
  { id: "governing", title: "15. Droit applicable" },
  { id: "misc", title: "16. Dispositions diverses" },
  { id: "contact", title: "17. Contact" },
];

export default function TermsPage() {
  return (
    <LegalShell
      locale="fr"
      title="Conditions générales d'utilisation"
      subtitle={`L'accord entre vous et ${SITE.name} lorsque vous utilisez ce site web et ses outils.`}
      updated="03/08/2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Acceptation des Conditions">
        <LegalP>
          En accédant à {SITE.name} (le « Service ») ou en l'utilisant, vous acceptez d'être lié par
          les présentes Conditions générales d'utilisation (les « Conditions »). Si vous n'acceptez
          pas ces Conditions, vous ne devez pas utiliser le Service.
        </LegalP>
        <LegalP>
          Ces Conditions s'appliquent à chaque visiteur, que vous ayez un compte ou non, et que vous
          payiez quelque chose ou non.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Description du Service">
        <LegalP>
          Le Service propose des outils d'image en ligne : compression, redimensionnement,
          recadrage, conversion, retouche et opérations associées. La plupart des outils
          fonctionnent entièrement dans votre navigateur. Certains nécessitent un traitement sur nos
          serveurs, comme décrit à la section 6 et dans notre{" "}
          <Link href={localeHref("/privacy", "fr")} className="text-secondary hover:underline">
            Politique de confidentialité
          </Link>
          .
        </LegalP>
        <LegalP>
          Le Service est fourni « en l'état » et « selon disponibilité ». Nous pouvons ajouter,
          modifier, suspendre ou retirer tout outil ou toute fonctionnalité à tout moment.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Conditions d'accès">
        <LegalP>
          Pour utiliser le Service, vous devez avoir la capacité juridique de conclure un accord
          contraignant dans votre juridiction. Si vous utilisez le Service pour le compte d'une
          organisation, vous déclarez être habilité à engager cette organisation au titre des
          présentes Conditions.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Usage acceptable">
        <LegalP>Vous vous engagez à ne pas utiliser le Service pour :</LegalP>
        <LegalUl>
          <li>
            envoyer, traiter ou diffuser tout contenu illicite, ou que vous n'avez pas le droit
            d'utiliser, notamment un contenu qui porte atteinte au droit d'auteur, aux marques, à la
            vie privée ou au droit à l'image ;
          </li>
          <li>
            traiter des contenus pédocriminels, des images intimes diffusées sans consentement, ou
            tout contenu représentant ou promouvant la violence, le terrorisme ou une activité
            illicite ;
          </li>
          <li>
            créer ou manipuler des images destinées à tromper, à frauder, à usurper l'identité d'une
            personne réelle, ou à fabriquer de faux documents d'identité ou officiels ;
          </li>
          <li>
            tenter d'accéder sans autorisation au Service, à ses serveurs ou aux systèmes associés,
            ou d'en sonder, analyser ou tester la vulnérabilité ;
          </li>
          <li>
            perturber le Service ou en gêner le fonctionnement, notamment par l'extraction
            automatisée de données (scraping), des tentatives de déni de service ou le contournement
            des limites d'utilisation, des limites de taille de fichier ou des quotas d'utilisation ;
          </li>
          <li>
            revendre, sous-licencier ou redistribuer commercialement le Service lui-même, ou
            l'utiliser pour créer un service concurrent ; ou
          </li>
          <li>utiliser le Service d'une manière contraire à toute loi ou réglementation applicable.</li>
        </LegalUl>
        <LegalCallout>
          Vous êtes seul responsable des contenus que vous traitez et de la vérification de votre
          droit légal à le faire. Nous pouvons bloquer, limiter ou refuser l'accès à toute personne
          dont nous estimons raisonnablement qu'elle enfreint ces Conditions, sans préavis et sans
          engager notre responsabilité.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Votre Contenu">
        <LegalP>
          Vous conservez l'entière propriété des images et des fichiers que vous traitez
          (« Votre Contenu »). Nous ne revendiquons aucun droit de propriété sur eux.
        </LegalP>
        <LegalP>
          Pour les outils qui traitent sur nos serveurs, vous nous accordez une licence limitée,
          temporaire, mondiale et gratuite pour stocker, transmettre et traiter Votre Contenu{" "}
          <strong>uniquement</strong> afin d'effectuer l'opération que vous avez demandée et de vous
          renvoyer le résultat. Cette licence prend fin lorsque le fichier est supprimé. Nous
          n'utilisons pas Votre Contenu pour entraîner des modèles, et nous ne le vendons, ne le
          partageons ni ne le publions.
        </LegalP>
        <LegalP>
          Vous déclarez et garantissez être titulaire de Votre Contenu ou disposer de tous les
          droits et autorisations nécessaires pour le traiter au moyen du Service.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. Traitement et suppression des fichiers">
        <LegalP>
          La plupart des outils traitent les fichiers entièrement dans votre navigateur ; ces
          fichiers ne nous sont jamais transmis. Les fichiers ne sont envoyés sur nos serveurs que
          lorsqu'ils dépassent le seuil de traitement du navigateur, lorsque vous utilisez un outil
          d'IA, ou lorsque vous utilisez la conversion HEIC, qui doit s'exécuter côté serveur pour
          des raisons de licence.
        </LegalP>
        <LegalP>
          Les fichiers envoyés et leurs résultats sont stockés de façon transitoire et supprimés
          automatiquement au bout d'environ une heure. Les liens de téléchargement sont impossibles
          à deviner mais ne sont pas protégés par une authentification : toute personne disposant du
          lien peut récupérer ce fichier jusqu'à son expiration, traitez donc les liens comme
          confidentiels.
        </LegalP>
        <LegalP>
          Il vous appartient de conserver vos propres copies. Nous ne sommes pas un service de
          stockage ou de sauvegarde, et nous ne garantissons pas qu'un fichier traité restera
          récupérable.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Disponibilité et modifications">
        <LegalP>
          Nous ne garantissons pas que le Service sera ininterrompu, ponctuel, sécurisé ou exempt
          d'erreurs. Le Service peut être indisponible pour cause de maintenance, de mises à jour ou
          pour des raisons indépendantes de notre volonté.
        </LegalP>
        <LegalP>
          Les outils qui dépendent du serveur nécessitent que leur logiciel sous-jacent soit
          installé et opérationnel ; à défaut, l'outil indiquera qu'il est indisponible au lieu de
          produire un résultat. Nous pouvons modifier ou interrompre toute partie du Service à tout
          moment et sans préavis.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Exclusion de garanties">
        <LegalP>
          LE SERVICE EST FOURNI « EN L'ÉTAT » ET « SELON DISPONIBILITÉ », SANS GARANTIE D'AUCUNE
          SORTE, EXPRESSE, IMPLICITE OU LÉGALE. DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE,
          NOUS EXCLUONS TOUTE GARANTIE, Y COMPRIS LES GARANTIES IMPLICITES DE QUALITÉ MARCHANDE,
          D'ADÉQUATION À UN USAGE PARTICULIER, DE TITRE ET D'ABSENCE DE CONTREFAÇON.
        </LegalP>
        <LegalP>
          NOUS NE GARANTISSONS PAS QUE LE SERVICE RÉPONDRA À VOS BESOINS, QUE LES RÉSULTATS SERONT
          EXACTS OU D'UNE QUALITÉ PARTICULIÈRE, NI QU'UN DÉFAUT SERA CORRIGÉ. VOUS UTILISEZ LE
          SERVICE À VOS PROPRES RISQUES, ET IL VOUS APPARTIENT DE VÉRIFIER LES RÉSULTATS ET DE
          CONSERVER LES ORIGINAUX AVANT DE VOUS FIER À UN FICHIER TRAITÉ.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation de responsabilité">
        <LegalP>
          DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, {SITE.name}, SON EXPLOITANT, SES
          PROPRIÉTAIRES, SES CONTRIBUTEURS OU SES FOURNISSEURS NE POURRONT EN AUCUN CAS ÊTRE TENUS
          RESPONSABLES DE DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX, CONSÉCUTIFS, EXEMPLAIRES OU
          PUNITIFS, NI DE TOUTE PERTE DE BÉNÉFICES, DE CHIFFRE D'AFFAIRES, DE CLIENTÈLE, DE DONNÉES,
          D'IMAGES OU D'OPPORTUNITÉS COMMERCIALES, RÉSULTANT DE VOTRE UTILISATION DU SERVICE OU DE
          L'IMPOSSIBILITÉ DE L'UTILISER, OU S'Y RAPPORTANT — QUE CE SOIT SUR LE FONDEMENT D'UN
          CONTRAT, DE LA RESPONSABILITÉ DÉLICTUELLE, DE LA NÉGLIGENCE, DE LA RESPONSABILITÉ SANS
          FAUTE OU DE TOUT AUTRE FONDEMENT, ET MÊME SI NOUS AVONS ÉTÉ AVERTIS DE LA POSSIBILITÉ DE
          TELS DOMMAGES.
        </LegalP>
        <LegalP>
          DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, NOTRE RESPONSABILITÉ TOTALE CUMULÉE
          POUR L'ENSEMBLE DES RÉCLAMATIONS LIÉES AU SERVICE NE POURRA EXCÉDER LE PLUS ÉLEVÉ DES
          MONTANTS SUIVANTS : (A) LA SOMME QUE VOUS NOUS AVEZ EFFECTIVEMENT VERSÉE POUR LE SERVICE
          AU COURS DES TROIS MOIS PRÉCÉDANT LE FAIT À L'ORIGINE DE LA RÉCLAMATION, OU (B) 50&nbsp;USD.
        </LegalP>
        <LegalP>
          Certaines juridictions n'autorisent pas l'exclusion ou la limitation de certaines
          garanties ou responsabilités. Dans ce cas, les exclusions et limitations ci-dessus ne
          s'appliquent que dans toute la mesure permise, et aucune disposition des présentes
          Conditions ne limite la responsabilité en cas de fraude, ou de décès ou de dommage
          corporel causé par une négligence, lorsque la loi interdit une telle limitation.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Garantie contre les recours">
        <LegalP>
          Vous acceptez d'indemniser, de défendre et de garantir {SITE.name}, son exploitant, ses
          propriétaires et ses contributeurs contre toute réclamation, demande, tout dommage, toute
          perte, responsabilité, tout coût et toute dépense (y compris des honoraires d'avocat
          raisonnables) résultant de ou liés à : (a) Votre Contenu ; (b) votre utilisation ou
          votre mauvaise utilisation du Service ; (c) votre violation des présentes Conditions ; ou
          (d) votre violation de toute loi ou des droits d'un tiers.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Propriété intellectuelle">
        <LegalP>
          Le Service, y compris son nom, son identité visuelle, son design, son interface et son
          code original, appartient à son exploitant et est protégé par le droit de la propriété
          intellectuelle. Les présentes Conditions vous accordent une licence limitée, personnelle,
          non exclusive, non transférable et révocable pour utiliser le Service conformément à sa
          destination. Aucun autre droit n'est accordé.
        </LegalP>
        <LegalP>
          Vous pouvez utiliser les résultats que vous générez à partir de vos propres images à
          toute fin licite, y compris commerciale.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Logiciels et liens tiers">
        <LegalP>
          Le Service repose sur des composants open source, chacun placé sous la licence de ses
          auteurs respectifs. Les mentions d'attribution et les textes complets des licences sont
          disponibles dans nos{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            mentions relatives aux logiciels tiers
          </a>
          . Ces composants sont fournis par leurs auteurs sans garantie.
        </LegalP>
        <LegalP>
          Le Service peut contenir des liens vers des sites web tiers. Nous ne les contrôlons pas,
          ne les cautionnons pas et déclinons toute responsabilité quant à leur contenu, leurs
          pratiques ou leur disponibilité.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Formules payantes et facturation">
        <LegalP>
          Le Service est actuellement gratuit et aucune formule payante n'est active. Ce qui suit
          s'appliquera si et lorsque des formules payantes seront lancées.
        </LegalP>
        <LegalUl>
          <li>
            Les prix sont affichés avant l'achat et peuvent changer, avec préavis, pour les
            périodes de facturation futures.
          </li>
          <li>
            Les abonnements se renouvellent automatiquement pour la même durée jusqu'à leur
            résiliation. Vous pouvez résilier à tout moment, avec effet à la fin de la période en
            cours.
          </li>
          <li>
            Les paiements seraient gérés par un prestataire de paiement tiers ; nous ne recevrions
            ni ne conserverions l'intégralité de vos données de carte.
          </li>
          <li>
            Vous êtes responsable des taxes éventuelles et de l'exactitude de vos informations de
            facturation.
          </li>
          <li>
            Nous pouvons suspendre l'accès aux fonctionnalités payantes si un paiement échoue ou
            fait l'objet d'une annulation.
          </li>
        </LegalUl>
        <LegalP>
          Les remboursements sont régis par notre{" "}
          <Link href={localeHref("/refunds", "fr")} className="text-secondary hover:underline">
            Politique de remboursement
          </Link>
          , qui fait partie intégrante des présentes Conditions.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Résiliation">
        <LegalP>
          Nous pouvons suspendre ou résilier votre accès au Service à tout moment, avec ou sans
          préavis, si nous estimons raisonnablement que vous avez enfreint ces Conditions ou que
          votre utilisation présente un risque pour le Service ou pour autrui. Vous pouvez cesser
          d'utiliser le Service à tout moment.
        </LegalP>
        <LegalP>
          Les sections qui, par leur nature, doivent survivre à la résiliation, notamment les
          sections 5, 8, 9, 10, 11, 15 et 16, restent en vigueur.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Droit applicable et règlement des litiges">
        <LegalP>
          Les présentes Conditions sont régies et interprétées conformément au droit applicable,
          sans égard aux règles de conflit de lois. Tout litige né des présentes Conditions ou du
          Service, ou s'y rapportant, sera porté devant les juridictions compétentes.
        </LegalP>
        <LegalP>
          Si vous êtes un consommateur résidant dans l'Union européenne ou au Royaume-Uni, vous
          pouvez également bénéficier des dispositions impératives du droit du pays dans lequel vous
          résidez. Aucune disposition des présentes Conditions ne porte atteinte à votre droit, en
          tant que consommateur, de vous prévaloir de ces dispositions impératives.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Dispositions diverses">
        <LegalSubsection title="Intégralité de l'accord">
          <LegalP>
            Les présentes Conditions, avec la Politique de confidentialité et la Politique de
            remboursement, constituent l'intégralité de l'accord entre vous et nous concernant le
            Service.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Divisibilité">
          <LegalP>
            Si une disposition est jugée inapplicable, elle sera modifiée dans la mesure minimale
            nécessaire, et les autres dispositions resteront pleinement en vigueur.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Absence de renonciation">
          <LegalP>
            Le fait que nous ne fassions pas valoir une disposition ne vaut pas renonciation à notre
            droit de le faire ultérieurement.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Cession">
          <LegalP>
            Vous ne pouvez pas céder les présentes Conditions sans notre accord. Nous pouvons les
            céder dans le cadre d'une fusion, d'une acquisition ou d'une cession d'actifs.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Modification des présentes Conditions">
          <LegalP>
            Nous pouvons mettre à jour ces Conditions de temps à autre. La date de « Dernière mise
            à jour » ci-dessus correspond à la version en vigueur, et la poursuite de l'utilisation
            après une modification vaut acceptation.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Contact">
        <LegalP>
          Vos questions sur ces Conditions peuvent nous être adressées via les options de notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
