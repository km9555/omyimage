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
 * French cookie policy (Politique de cookies) — the same structure and the
 * same section ids as /cookies, with only the prose translated. The ids are
 * the TOC anchors and a contract across locales: never rename one on a single
 * side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5). French,
 * "vous". The banner and footer labels are quoted exactly as the French UI
 * renders them (i18n-fr-brief.md glossary).
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths ARE
 * translated, because a reader running Chrome in French sees
 * "Confidentialité et sécurité".
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "fr",
    title: "Politique de cookies | oMyImage",
    description:
      "Ce qu'oMyImage stocke dans votre navigateur, pourquoi et comment le contrôler. Par défaut, le nécessaire : la mesure d'audience reste désactivée sans votre accord.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. Qu'est-ce qu'un cookie" },
  { id: "consent", title: "2. Votre consentement" },
  { id: "types", title: "3. Ce que nous stockons" },
  { id: "third", title: "4. Cookies tiers" },
  { id: "control", title: "5. Comment contrôler les cookies" },
  { id: "changes", title: "6. Modifications de cette politique" },
  { id: "contact", title: "7. Contact" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="fr"
      title="Politique de cookies"
      subtitle="Ce qu'oMyImage stocke dans votre navigateur, pourquoi, et comment changer d'avis."
      updated="09/11/2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. Qu'est-ce qu'un cookie">
        <LegalCallout>
          oMyImage ne dépose aucun cookie propre. Ce qu'il stocke se limite à quelques entrées de{" "}
          <strong>stockage local</strong> qui ne quittent jamais votre appareil, et, uniquement si
          vous l'autorisez, des cookies de mesure d'audience de Google. Vos images ne sont jamais
          concernées.
        </LegalCallout>
        <LegalP>
          Les cookies sont de petits fichiers texte qu'un site web enregistre sur votre appareil
          lorsque vous le visitez. Ils sont largement utilisés pour faire fonctionner les sites,
          mémoriser vos préférences et indiquer aux propriétaires d'un site comment celui-ci est
          utilisé. Un cookie peut être « de session », supprimé à la fermeture du navigateur, ou
          « persistant », conservé pendant une durée déterminée ou jusqu'à ce que vous le
          supprimiez.
        </LegalP>
        <LegalP>
          Parmi les technologies proches figurent le stockage web (<code>localStorage</code> et{" "}
          <code>sessionStorage</code>) et les balises web (pixels). Cette politique emploie le mot
          « cookies » pour toutes ces technologies, car la question pratique (ce qui est conservé
          sur votre appareil et qui peut le lire) est la même.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Votre consentement">
        <LegalP>
          Lors de votre première visite, un bandeau de consentement apparaît en bas de la page.
          Rien de facultatif n'est chargé avant votre réponse. Vous avez trois choix :
        </LegalP>
        <LegalUl>
          <li>
            <strong>« Tout accepter »</strong> : stockage nécessaire et mesure d'audience. Google
            Analytics se charge, notre propre serveur compte les pages vues et les utilisations
            d'outils, et nous pouvons voir, de façon agrégée, quels outils sont utilisés.
          </li>
          <li>
            <strong>« Tout refuser »</strong> : stockage nécessaire uniquement. Google Analytics
            n'est jamais chargé, notre propre comptage reste désactivé et aucune donnée de mesure
            d'audience n'est collectée lors de votre visite.
          </li>
          <li>
            <strong>« Personnaliser »</strong> : vous choisissez catégorie par catégorie. Le
            stockage nécessaire ne peut pas être désactivé, car sans lui le site ne pourrait
            mémoriser ni votre thème ni, d'ailleurs, ce choix lui-même.
          </li>
        </LegalUl>
        <LegalP>
          Votre réponse est enregistrée sur votre appareil sous <code>omyimage_cookie_consent</code>{" "}
          et <code>omyimage_cookie_prefs</code>. Vous pouvez la modifier à tout moment grâce au lien{" "}
          <strong>« Paramètres des cookies »</strong> dans le pied de n'importe quelle page. Comme
          les scripts de mesure d'audience ne peuvent être ajoutés ou retirés qu'au chargement
          d'une nouvelle page, modifier ce réglage précis recharge la page.
        </LegalP>
        <LegalP>
          Nous n'utilisons pas de cookies publicitaires ni de suivi entre sites, et nous ne
          partageons pas vos données avec des régies publicitaires.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Ce que nous stockons">
        <LegalSubsection title="Nécessaires : toujours actifs">
          <LegalP>
            Il s'agit d'entrées <code>localStorage</code>, et non de cookies : elles sont écrites
            par le site, lues uniquement par le site, et ne sont jamais transmises ni à nous ni à
            quiconque. Elles ne peuvent pas être désactivées, car ce sont elles qui permettent à
            l'interface de se souvenir de quoi que ce soit. Effacer les données du site dans votre
            navigateur les supprime toutes.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> : si vous avez choisi le mode clair ou sombre.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> et <code>omyimage_cookie_prefs</code> : votre
              réponse au bandeau de consentement, pour ne pas vous la redemander sur chaque page.
            </li>
            <li>
              <code>omyimage:favorites</code> et les outils récemment utilisés : pour que vos
              raccourcis soient conservés.
            </li>
            <li>
              <code>omyimage:currency</code> : la devise choisie sur la page des tarifs.
            </li>
            <li>
              <code>omyimage:premium-usage</code> : un compteur local des utilisations d'outils
              premium du jour.
            </li>
          </LegalUl>
          <LegalP>
            Cloudflare, qui sert et protège le site, peut aussi déposer ses propres cookies
            strictement nécessaires pour limiter le débit des requêtes et détecter les robots. Ils
            sont décrits à la section 4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Mesure d'audience : uniquement avec votre consentement">
          <LegalP>
            Si vous acceptez la mesure d'audience, nous chargeons Google Analytics 4 pour comprendre
            de façon agrégée comment le site est utilisé : quels outils sont populaires, quelles
            pages produisent des erreurs, d'où viennent approximativement les visiteurs. Cela nous
            aide à décider quoi développer et quoi corriger. Ces données ne servent jamais à vous
            identifier, et nous ne cherchons pas à les relier à ce que vous traitez.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> : distinguent les utilisateurs et les sessions
              uniques. Expirent au bout de 2&nbsp;ans.
            </li>
            <li>
              <code>_gid</code> : distingue les utilisateurs sur une période de 24&nbsp;heures.
              Expire au bout de 24&nbsp;heures.
            </li>
          </LegalUl>
          <LegalP>
            Si vous refusez la mesure d'audience, ou si vous ne répondez simplement jamais au
            bandeau, le script Google Analytics n'est pas demandé du tout : ces cookies ne sont
            jamais créés, plutôt que d'être créés puis ignorés.
          </LegalP>
          <LegalP>
            Uniquement si vous acceptez la mesure d'audience, notre propre serveur compte aussi les
            pages vues et les utilisations d'outils : chemin de la page, nom de l'outil, heure,
            pays, type d'appareil, site d'origine et une empreinte (hash) de visiteur qui change
            chaque jour et est effacée au bout de 48&nbsp;heures. Les utilisations d'outils portent
            en outre une empreinte distincte de votre adresse IP, qui change chaque jour et reste
            attachée à l'enregistrement de cette utilisation. Aucun nom, contenu ni taille de
            fichier n'est collecté, et ce comptage ne dépose aucun cookie. Si vous êtes connecté,
            les utilisations d'outils sont associées à votre compte. La section 4 de notre{" "}
            <Link href={`${localeHref("/privacy", "fr")}#collect`} className="text-secondary hover:underline">
              Politique de confidentialité
            </Link>{" "}
            donne le détail.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Publicité : non utilisée">
          <LegalP>
            Nous n'utilisons <strong>pas</strong> de cookies publicitaires ni de traçage. oMyImage
            n'affiche aucune publicité et ne partage aucune donnée de navigation avec des régies
            publicitaires. L'option publicité existe dans le bandeau de consentement pour que votre
            préférence soit déjà enregistrée si cela devait changer un jour ; aujourd'hui, elle ne
            contrôle rien.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookies tiers">
        <LegalP>
          Voici les seuls tiers qui peuvent déposer quoi que ce soit dans votre navigateur sur
          oMyImage. Chacun est régi par sa propre politique :
        </LegalP>
        <LegalTable
          headers={["Service", "Finalité", "Politique de confidentialité"]}
          rows={[
            [
              "Cloudflare",
              "Cookies de sécurité et de performance strictement nécessaires (limitation du débit, détection des robots)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Cookies de mesure d'audience, déposés uniquement après votre acceptation de la mesure d'audience",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Fournit la police d'icônes. Ne dépose aucun cookie, mais Google reçoit votre adresse IP, comme pour tout site qui utilise cette police",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (facultatif)",
              "Uniquement si vous utilisez l'import depuis Google Drive. Le jeton d'accès est conservé en mémoire pendant cette visite et n'est jamais stocké",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (facultatif)",
              "Uniquement si vous utilisez l'import depuis Dropbox. Son sélecteur s'ouvre dans une fenêtre contextuelle de Dropbox ; aucun compte n'est associé et aucun jeton n'est délivré",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          Les imports depuis le cloud sont décrits en détail aux sections 7 et 8 de notre{" "}
          <Link href={`${localeHref("/privacy", "fr")}#google-drive`} className="text-secondary hover:underline">
            Politique de confidentialité
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Comment contrôler les cookies">
        <LegalSubsection title="Sur oMyImage">
          <LegalP>
            Utilisez le lien <strong>« Paramètres des cookies »</strong> dans le pied de n'importe
            quelle page. Il rouvre le bandeau de consentement avec vos choix actuels, pour que vous
            puissiez modifier une catégorie sans réinitialiser les autres.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Dans votre navigateur">
          <LegalP>
            Tous les principaux navigateurs vous permettent de consulter, bloquer et supprimer les
            cookies et les données de sites. Tout bloquer effacera aussi les entrées nécessaires
            décrites ci-dessus : le site oubliera alors votre thème et vous redemandera votre choix
            sur les cookies :
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies tiers
            </li>
            <li>
              <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données
              de sites
            </li>
            <li>
              <strong>Safari :</strong> Réglages → Confidentialité → Gérer les données de sites web
            </li>
            <li>
              <strong>Edge :</strong> Paramètres → Cookies et autorisations de site → Gérer et
              supprimer les cookies
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Désactiver Google Analytics partout">
          <LegalP>
            Pour désactiver Google Analytics sur tous les sites, et pas seulement sur celui-ci,
            installez le{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              module complémentaire de navigateur pour la désactivation de Google Analytics
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Modifications de cette politique">
        <LegalP>
          Nous pouvons mettre à jour cette politique à mesure que le service évolue. La date de
          « Dernière mise à jour » en haut de cette page correspond toujours à la version en
          vigueur, et les modifications importantes figureront ici avant de prendre effet.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact">
        <LegalP>
          Vos questions sur les cookies ou sur cette politique peuvent nous être adressées via les
          options de notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>
          . Consultez aussi notre{" "}
          <Link href={localeHref("/privacy", "fr")} className="text-secondary hover:underline">
            Politique de confidentialité
          </Link>{" "}
          et nos{" "}
          <Link href={localeHref("/terms", "fr")} className="text-secondary hover:underline">
            Conditions générales d'utilisation
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
