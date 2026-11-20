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
 * French privacy policy (Politique de confidentialité) — a written twin of
 * /privacy (conversion.md §6.5), with the same section ids. `#google-drive` and
 * `#collect` in particular are linked from the cookie policy in every language.
 *
 * French for France, Belgium, Switzerland and Québec, addressed as "vous" like
 * the rest of /fr. Faithful to the English facts: the English page names no
 * controller, no legal bases under the GDPR (RGPD) and no supervisory authority
 * (CNIL), so neither does this one. Adding them is a substantive legal change
 * and belongs in /privacy first, then in every twin.
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
  locale: "fr",
  title: "Politique de confidentialité | oMyImage",
  description:
    "Comment oMyImage traite vos images et vos données : la plupart des outils tournent dans le navigateur, les fichiers serveur sont effacés sous une heure.",
});

const toc = [
  { id: "summary", title: "Résumé" },
  { id: "images", title: "1. Vos images" },
  { id: "browser", title: "2. Traitement dans le navigateur ou sur le serveur" },
  { id: "retention", title: "3. Conservation et suppression" },
  { id: "collect", title: "4. Ce que nous collectons" },
  { id: "storage", title: "5. Stockage dans le navigateur" },
  { id: "subprocessors", title: "6. Services tiers" },
  { id: "google-drive", title: "7. Connexion avec Google et import depuis Google Drive" },
  { id: "dropbox", title: "8. Import depuis Dropbox" },
  { id: "future", title: "9. Fonctionnalités prévues" },
  { id: "rights", title: "10. Vos droits" },
  { id: "children", title: "11. Mineurs" },
  { id: "security", title: "12. Sécurité" },
  { id: "changes", title: "13. Modifications" },
  { id: "contact", title: "14. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="fr"
      title="Politique de confidentialité"
      subtitle="Ce que deviennent vos images et vos données lorsque vous utilisez oMyImage."
      updated="09/11/2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Résumé">
        <LegalCallout>
          La plupart des outils d'oMyImage fonctionnent <strong>entièrement dans votre
          navigateur</strong> : vos images ne sont jamais envoyées. Quelques outils ont besoin de
          notre serveur ; ces fichiers sont traités, vous sont renvoyés, puis supprimés au bout
          d'environ une heure. Le compte est facultatif, nous n'affichons aucune publicité et nous
          ne pratiquons aucun suivi entre sites ; la mesure d'audience ne se charge que si vous
          l'autorisez.
        </LegalCallout>
        <LegalP>
          Cette politique l'explique en détail. Elle décrit ce que fait le service aujourd'hui et
          signale clairement ce qui est prévu mais pas encore en service.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Vos images">
        <LegalP>
          Vos images vous appartiennent. Nous ne revendiquons la propriété de rien de ce que vous
          traitez, nous n'utilisons pas vos images pour entraîner des modèles, et nous ne les
          vendons, partageons, publions ni réutilisons à aucune fin.
        </LegalP>
        <LegalP>
          Qu'une image quitte ou non votre appareil dépend de l'outil que vous utilisez : voir la
          section suivante.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Traitement dans le navigateur ou sur le serveur">
        <LegalSubsection title="Traitement dans votre navigateur (aucun envoi)">
          <LegalP>
            La majorité des outils utilisent le moteur canvas de votre propre navigateur. L'image
            est lue depuis votre appareil en mémoire, traitée localement, puis c'est vous qui
            l'enregistrez. Rien ne nous est transmis, et ces outils continuent de fonctionner même
            si notre serveur est hors ligne.
          </LegalP>
          <LegalP>
            Cela concerne le recadrage, le redimensionnement, la rotation, la compression, la
            conversion, le filigrane, les mèmes, l'éditeur tout-en-un, le flou, les bordures, le
            recadrage en cercle, la fusion d'images, les outils GIF, les outils de couleur,
            l'affichage des métadonnées et la conversion d'image en PDF, pour les fichiers
            jusqu'à 15&nbsp;Mo.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Traitement sur notre serveur (avec envoi)">
          <LegalP>Votre image est envoyée sur notre serveur dans trois cas :</LegalP>
          <LegalUl>
            <li>
              <strong>Les fichiers de plus de 15&nbsp;Mo</strong> : au-delà de cette taille, le
              traitement dans le navigateur n'est plus fiable, le travail est donc confié
              automatiquement à notre serveur.
            </li>
            <li>
              <strong>Les outils d'IA</strong> : « Supprimer l'arrière-plan » et « Améliorer la
              qualité d'une image » exécutent des modèles bien trop lourds pour un navigateur.
            </li>
            <li>
              <strong>HEIC en JPG, quelle que soit la taille.</strong> Ici, la contrainte est liée
              à la licence et non à la technique : les seuls décodeurs HEIC open source ne peuvent
              pas être distribués aux navigateurs selon les termes de leur licence, la conversion
              doit donc se faire sur notre serveur.
            </li>
          </LegalUl>
          <LegalP>
            Chacun de ces outils indique sur sa propre page qu'il envoie le fichier. Si un outil ne
            le dit pas, il n'envoie rien.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Conservation et suppression">
        <LegalP>
          Les images traitées dans votre navigateur ne nous parviennent jamais : nous n'avons donc
          rien à conserver.
        </LegalP>
        <LegalP>
          Pour les images traitées sur le serveur, le fichier envoyé n'est conservé que le temps de
          la conversion, puis il est supprimé. Le résultat est stocké brièvement derrière un lien
          de téléchargement privé et supprimé automatiquement au bout d'environ une heure. Nous ne
          faisons pas de sauvegarde de vos fichiers et nous ne les archivons pas.
        </LegalP>
        <LegalCallout>
          Les liens de téléchargement sont impossibles à deviner, mais ils ne sont pas protégés par
          une authentification. Traitez chaque lien comme un secret : toute personne qui le détient
          peut récupérer ce fichier jusqu'à son expiration.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. Ce que nous collectons">
        <LegalP>
          Pour utiliser les outils, vous n'avez pas à nous donner votre nom, votre adresse e-mail
          ni aucune autre donnée personnelle. Ce site n'a ni newsletter ni formulaire de contact.
          La création d'un compte est facultative ; ce que nous conservons si vous en créez un est
          décrit à la fin de cette section.
        </LegalP>
        <LegalP>
          Comme tout service web, notre serveur et nos hébergeurs traitent automatiquement des
          données techniques de base pour fournir le site : adresse IP, agent utilisateur
          (user-agent) du navigateur, URL demandée et horodatage. Elles servent à répondre à la
          requête, à appliquer des limites d'utilisation et à détecter les abus. Nous n'en tirons
          aucun profil et, en dehors du comptage soumis à votre consentement décrit ci-dessous, nous
          ne les combinons avec rien d'autre.
        </LegalP>
        <LegalP>
          Nous utilisons <strong>Google Analytics 4</strong>, et uniquement avec votre
          consentement. Tant que vous n'avez pas accepté les cookies de mesure d'audience, le script
          n'est jamais demandé : il n'est pas chargé puis désactivé, il est tout simplement absent,
          si bien qu'aucun cookie de mesure d'audience n'est créé pour un visiteur qui a refusé ou
          qui n'a jamais répondu au bandeau. Ce qu'il collecte est agrégé : quels outils sont
          utilisés, quelles pages produisent des erreurs, d'où viennent approximativement les
          visiteurs. Nous ne l'utilisons pas pour vous identifier et nous ne le relions à rien de ce
          que vous traitez.
        </LegalP>
        <LegalP>
          Si vous acceptez les cookies de mesure d'audience, nous comptons aussi les pages vues et
          les utilisations d'outils sur notre propre serveur, pour nos rapports d'utilisation
          internes. Pour chacune, nous enregistrons :
        </LegalP>
        <LegalUl>
          <li>
            le chemin de la page, ou le nom de l'outil et s'il a fonctionné dans votre navigateur ou
            sur notre serveur ;
          </li>
          <li>
            le moment où cela s'est produit ;
          </li>
          <li>
            votre pays et votre type d'appareil, que notre serveur déduit de votre adresse IP et de
            l'agent utilisateur de votre navigateur ;
          </li>
          <li>
            le site qui vous a envoyé vers nous, par son nom uniquement, sur la première page que
            vous ouvrez ;
          </li>
          <li>
            pour les pages vues, une empreinte (hash) de visiteur calculée à partir de votre adresse
            IP et de votre agent utilisateur, afin qu'une même personne ne soit pas comptée
            plusieurs fois. Elle change chaque jour et est effacée au bout de 48&nbsp;heures.
          </li>
        </LegalUl>
        <LegalP>
          Chaque utilisation d'outil porte en outre une empreinte distincte de votre adresse IP.
          Elle change aussi chaque jour, mais reste attachée à l'enregistrement de cette
          utilisation. Nous ne collectons jamais, pour cela, le nom, le contenu ou la taille des
          fichiers, et aucun cookie n'est déposé. Si vous refusez la mesure d'audience ou ne
          répondez jamais au bandeau, rien de tout cela n'est envoyé. Si vous êtes connecté, nous
          associons vos utilisations d'outils à votre compte.
        </LegalP>
        <LegalP>
          <strong>Aucune publicité, aucun suivi entre sites.</strong> oMyImage n'utilise ni
          enregistrement de session, ni pixel publicitaire, ni régie publicitaire. Vous pouvez
          modifier ou retirer votre consentement à la mesure d'audience à tout moment via{" "}
          <strong>« Paramètres des cookies »</strong> dans le pied de page ; consultez notre{" "}
          <Link href={localeHref("/cookies", "fr")} className="text-secondary hover:underline">
            Politique de cookies
          </Link>{" "}
          pour le détail.
        </LegalP>

        <LegalSubsection title="Si vous créez un compte">
          <LegalP>
            Le compte est facultatif : tous les outils fonctionnent sans. Vous pouvez en créer un
            avec une adresse e-mail et un mot de passe, ou avec la connexion Google (section 7).
            Pour un compte, nous conservons :
          </LegalP>
          <LegalUl>
            <li>votre adresse e-mail, et si vous l'avez vérifiée ;</li>
            <li>votre nom, si vous en saisissez un ou s'il provient de la connexion Google ;</li>
            <li>
              un mot de passe haché de manière sécurisée, si vous vous êtes inscrit par e-mail ;
              nous ne conservons jamais le mot de passe lui-même ;
            </li>
            <li>l'identifiant de votre compte Google, si vous vous connectez avec Google ;</li>
            <li>
              le pays d'où proviennent votre inscription et votre visite la plus récente, déduit de
              votre adresse IP, ainsi que l'heure de cette visite.
            </li>
          </LegalUl>
          <LegalP>
            Nous utilisons ces informations pour vous connecter, pour vous envoyer les e-mails liés
            au compte, comme la vérification de votre adresse et la réinitialisation du mot de
            passe, et pour savoir, de façon agrégée, de quels pays viennent nos utilisateurs. Nous
            ne les utilisons pas à des fins publicitaires et nous ne les vendons jamais. Vous pouvez
            modifier votre nom et votre mot de passe sur la page de votre compte ; pour supprimer
            votre compte, voir la section 10.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="storage" title="5. Stockage dans le navigateur">
        <LegalP>
          oMyImage ne dépose aucun cookie propre. Nous utilisons le stockage local de votre
          navigateur pour quelques préférences fonctionnelles, qui restent sur votre appareil et ne
          nous sont jamais envoyées :
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> : si vous avez choisi le mode clair ou sombre.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> et <code>omyimage_cookie_prefs</code> : votre
            réponse au bandeau cookies.
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
          Effacer les données du site dans votre navigateur les supprime toutes. Aucune ne vous
          identifie. Les cookies déposés par des tiers (Cloudflare et, si vous l'autorisez, Google
          Analytics) sont listés dans notre{" "}
          <Link href={localeHref("/cookies", "fr")} className="text-secondary hover:underline">
            Politique de cookies
          </Link>
          .
        </LegalP>
        <LegalP>
          Si vous vous connectez, nous conservons aussi votre jeton de session dans le stockage
          local sous le nom <code>omyimage_token</code>. Contrairement aux éléments ci-dessus, il
          est envoyé à notre serveur avec vos requêtes, afin que nous sachions à quel compte elles
          appartiennent. La déconnexion le supprime.
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Services tiers">
        <LegalP>
          Nous limitons les tiers au strict minimum. Voici les seuls qui interviennent dans le
          fonctionnement d'oMyImage :
        </LegalP>
        <LegalTable
          headers={["Service", "Finalité", "Politique de confidentialité"]}
          rows={[
            ["Cloudflare", "Hébergement du site web, CDN et protection contre les attaques DDoS", "cloudflare.com/privacypolicy"],
            ["Contabo", "Hébergement du serveur pour les outils qui traitent sur notre serveur, pour les données des comptes et pour nos propres comptages d'utilisation", "contabo.com/en/legal/privacy-policy"],
            ["Hostinger", "Hébergement des e-mails : envoie les e-mails liés au compte, comme la vérification de l'adresse et la réinitialisation du mot de passe, et reçoit le courrier adressé à nos adresses", "hostinger.com/legal/privacy-policy"],
            ["Google Fonts", "Fournit la police d'icônes utilisée dans toute l'interface", "policies.google.com/privacy"],
            ["Google Analytics", "Mesure d'audience agrégée, chargée uniquement si vous acceptez les cookies de mesure d'audience", "policies.google.com/privacy"],
            ["Connexion Google (facultatif)", "Vous connecte, uniquement si vous choisissez « Continuer avec Google » ; voir la section 7", "policies.google.com/privacy"],
            ["Google Drive (facultatif)", "Importe uniquement les fichiers que vous choisissez, et seulement quand vous l'utilisez ; voir la section 7", "policies.google.com/privacy"],
            ["Dropbox (facultatif)", "Importe uniquement les fichiers que vous choisissez, et seulement quand vous l'utilisez ; voir la section 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Comme la police d'icônes est demandée au CDN de Google, Google reçoit votre adresse IP et
          votre agent utilisateur au chargement d'une page, comme pour tout site qui utilise cette
          police. Nos deux polices de texte sont servies depuis notre propre domaine et
          n'impliquent aucun tiers.
        </LegalP>
      </LegalSection>

      <LegalSection id="google-drive" title="7. Connexion avec Google et import depuis Google Drive">
        <LegalP>
          Connecter Google est facultatif, et tous les outils d'oMyImage fonctionnent sans. Nous
          utilisons Google pour deux choses distinctes, chacune avec sa propre autorisation :{" "}
          <strong>la connexion</strong>, si vous choisissez de créer votre compte avec Google, et{" "}
          <strong>l'import d'une image</strong> que vous conservez déjà dans Google Drive, au lieu
          de l'envoyer depuis votre appareil. Accorder l'une n'accorde pas l'autre.
        </LegalP>

        <LegalSubsection title="Se connecter avec Google">
          <LegalP>
            Lorsque vous choisissez « Continuer avec Google », Google vous demande de partager
            votre profil de base avec oMyImage : les autorisations (scopes) <code>email</code> et{" "}
            <code>profile</code>. Nous les utilisons une seule fois, à la connexion, pour lire votre
            adresse e-mail, votre nom et l'identifiant de votre compte Google, et nous conservons
            ces trois informations avec votre compte comme décrit à la section 4. Le jeton d'accès
            issu de cet échange sert à cette seule requête et n'est pas conservé.
          </LegalP>
          <LegalP>
            Se connecter avec Google ne donne à oMyImage aucun accès à votre Google Drive, à Gmail,
            à vos contacts ni à aucune autre donnée Google.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Import depuis Google Drive : ce que nous demandons et ce que cela permet">
          <LegalP>
            Lorsque vous choisissez « Importer depuis Google Drive », nous demandons une seule
            autorisation, limitée :{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Cette
            autorisation donne accès uniquement aux fichiers précis que vous sélectionnez dans le
            sélecteur de fichiers de Google. Elle ne nous permet pas de lister, parcourir,
            rechercher ni ouvrir quoi que ce soit d'autre dans votre Drive, et ne nous donne aucune
            vue sur vos dossiers, les noms de vos fichiers ou votre espace de stockage dans son
            ensemble.
          </LegalP>
          <LegalP>
            En pratique, l'autorisation fonctionne aussi dans un seul sens : nous lisons le fichier
            que vous avez choisi. Nous ne créons, ne renommons, ne modifions, ne déplaçons et ne
            supprimons rien dans votre Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Import depuis Google Drive : ce que deviennent le fichier et le jeton">
          <LegalUl>
            <li>
              Le jeton d'accès délivré par Google est conservé dans la mémoire de votre navigateur
              pour cette visite uniquement. Il n'est jamais transmis à nos serveurs, jamais écrit
              sur disque, et disparaît lorsque vous fermez l'onglet.
            </li>
            <li>
              Le fichier que vous choisissez est téléchargé depuis Google directement dans votre
              navigateur. À l'arrivée, il ne passe pas par nos serveurs.
            </li>
            <li>
              À partir de là, le fichier est traité exactement comme un fichier glissé depuis votre
              bureau : traité dans votre navigateur, ou envoyé sur notre serveur uniquement si vous
              avez choisi un outil qui indique qu'il envoie le fichier, selon les mêmes règles de
              conservation que celles décrites aux sections 2 et 3.
            </li>
            <li>
              Nous ne gardons aucune copie de vos fichiers Google, nous ne les indexons pas et nous
              ne conservons aucune trace de ce que vous avez importé.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          L'utilisation et le transfert vers toute autre application, par oMyImage, des
          informations reçues des API Google respecteront la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , y compris les exigences d'utilisation limitée (Limited Use). En particulier, nous
          n'utilisons pas les données des utilisateurs Google à des fins publicitaires, nous ne les
          vendons ni ne les transférons, et nous ne les utilisons pas pour entraîner des modèles
          généralistes ou d'intelligence artificielle.
        </LegalCallout>

        <LegalP>
          Vous pouvez retirer cet accès quand vous le souhaitez, sans incidence sur le reste du
          site, depuis la{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            page des autorisations de votre compte Google
          </a>
          .
        </LegalP>
        <LegalP>
          Le retirer ne supprime pas votre compte oMyImage ; la section 10 explique comment le
          faire.
        </LegalP>
      </LegalSection>

      <LegalSection id="dropbox" title="8. Import depuis Dropbox">
        <LegalP>
          Connecter Dropbox est facultatif et fonctionne comme Google Drive : cela sert uniquement à
          choisir une image que vous conservez déjà dans Dropbox au lieu de l'envoyer depuis votre
          appareil. Tous les outils d'oMyImage fonctionnent sans, et son utilisation ne nécessite
          pas de compte oMyImage.
        </LegalP>

        <LegalP>
          Choisir « Dropbox » ouvre le sélecteur de fichiers de Dropbox dans une fenêtre
          contextuelle. La navigation et la sélection se déroulent entièrement dans cette fenêtre,
          qui appartient à Dropbox : nous ne voyons jamais vos dossiers, les noms de vos fichiers,
          ni rien de ce que vous ne choisissez pas.
        </LegalP>

        <LegalUl>
          <li>
            Aucun compte n'est associé et aucun jeton d'accès n'est délivré. Contrairement à
            l'import depuis Google Drive, il n'y a aucune autorisation à accorder ni rien à révoquer
            ensuite.
          </li>
          <li>
            Dropbox renvoie un lien de téléchargement temporaire pour chaque fichier choisi, valable
            quelques heures. Votre navigateur l'utilise immédiatement puis l'oublie ; le lien n'est
            jamais envoyé à nos serveurs ni écrit sur disque.
          </li>
          <li>
            Le fichier est téléchargé depuis Dropbox directement dans votre navigateur. À
            l'arrivée, il ne passe pas par nos serveurs.
          </li>
          <li>
            À partir de là, le fichier est traité exactement comme un fichier glissé depuis votre
            bureau : traité dans votre navigateur, ou envoyé sur notre serveur uniquement si vous
            avez choisi un outil qui indique qu'il envoie le fichier, selon les mêmes règles de
            conservation que celles décrites aux sections 2 et 3.
          </li>
          <li>
            Nous ne gardons aucune copie de vos fichiers Dropbox, nous ne les indexons pas et nous
            ne conservons aucune trace de ce que vous avez importé.
          </li>
        </LegalUl>

        <LegalP>
          Pour Dropbox, il s'agit d'une visite sur Dropbox, et sa propre politique de
          confidentialité s'applique à ce qui se passe dans cette fenêtre. Le code de Dropbox n'est
          chargé que lorsque vous utilisez le bouton : les visiteurs qui n'utilisent jamais cette
          fonction n'ont donc aucun contact avec Dropbox.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Fonctionnalités prévues">
        <LegalP>
          Certaines fonctionnalités sont prévues mais pas encore disponibles. Nous les décrivons ici
          à l'avance pour que cette politique reste exacte lorsqu'elles arriveront, et pour que vous
          sachiez à quoi vous attendre. <strong>Rien de ce qui suit n'est actif aujourd'hui.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Formules payantes.</strong> Si nous lançons des formules payantes, les paiements
            seraient gérés par un prestataire de paiement tiers. Les données de carte seraient
            transmises directement à ce prestataire et n'atteindraient jamais nos serveurs, ni n'y
            seraient stockées. Nous ne recevrions qu'une référence de transaction et son statut.
          </li>
        </LegalUl>
        <LegalP>
          Lorsque l'une de ces fonctionnalités sera mise en service, cette politique sera mise à
          jour et la date de « Dernière mise à jour » en haut de page changera avant son
          activation.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Vos droits">
        <LegalP>
          Selon l'endroit où vous résidez, vous pouvez disposer de droits d'accès, de rectification,
          de portabilité ou d'effacement des données personnelles vous concernant, ainsi que du
          droit de vous opposer à certains traitements. Nous ne conservons pas vos images. Si vous
          avez un compte, nous détenons les informations de compte énumérées à la section 4 ; sans
          compte, nous ne détenons en général rien sur vous qui puisse être retrouvé.
        </LegalP>
        <LegalP>
          Pour consulter, exporter ou supprimer vos données, y compris votre compte et tout ce qui y
          est associé, contactez-nous via les coordonnées de notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>{" "}
          et nous vous répondrons dans un délai raisonnable. Vous pouvez aussi introduire une
          réclamation auprès de l'autorité de protection des données de votre pays.
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Mineurs">
        <LegalP>
          oMyImage est un utilitaire généraliste qui ne s'adresse pas aux enfants. Nous ne
          collectons pas sciemment de données personnelles concernant des enfants. Comme
          l'utilisation des outils ne demande ni compte ni information personnelle, il n'y a
          normalement rien à collecter.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Sécurité">
        <LegalP>
          Le site est servi en HTTPS. Les envois vers notre serveur sont chiffrés pendant le
          transfert, traités de manière isolée et supprimés selon le calendrier décrit ci-dessus.
          Nous appliquons des limites d'utilisation et de taille d'envoi pour protéger le service.
        </LegalP>
        <LegalP>
          Aucun service en ligne ne peut promettre une sécurité parfaite. N'envoyez pas de contenu
          dont l'exposition vous serait préjudiciable dans le cas peu probable d'une faille, et
          rappelez-vous que, pour la plupart des outils, l'option la plus sûre est déjà celle par
          défaut, puisque le fichier ne quitte jamais votre appareil.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Modifications">
        <LegalP>
          Nous pouvons mettre à jour cette politique au fil de l'évolution du service. La date de
          « Dernière mise à jour » en haut de cette page correspond toujours à la version en
          vigueur. Les modifications importantes figureront ici avant de prendre effet.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
        <LegalP>
          Vos questions sur cette politique, ou sur la manière dont vos données sont traitées,
          peuvent nous être adressées via les options de notre{" "}
          <Link href={localeHref("/contact", "fr")} className="text-secondary hover:underline">
            page de contact
          </Link>
          . Consultez aussi nos{" "}
          <Link href={localeHref("/terms", "fr")} className="text-secondary hover:underline">
            Conditions générales d'utilisation
          </Link>
          , qui régissent votre utilisation de {SITE.name}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
