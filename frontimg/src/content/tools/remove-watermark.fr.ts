import type { ToolPageContent } from "@/content/tools/types";
import object from "@/content/tools/remove-object.fr";

/**
 * French copy for /fr/supprimer-filigrane. Target query « Supprimer un
 * filigrane » (KD 3–6, iLoveIMG absent, Nov 2026), secondaries « enlever
 * filigrane » and « retirer filigrane ». Vous. Same engine as
 * /fr/supprimer-objet-photo (MI-GAN in the browser), opening with the box
 * tool. The copy asks people to use it only on images they own or may edit
 * (droit d'auteur).
 */
const content: ToolPageContent = {
  toolId: "remove-watermark",
  locale: "fr",
  name: "Supprimer un filigrane",
  tagline:
    "Supprimez filigranes, logos, textes et dates incrustées de vos photos : marquez-les et l'IA remplit la zone pour qu'elle se fonde dans le reste de l'image. Gratuit et sans envoi : tout se passe dans votre navigateur.",
  category: { id: "ai", label: "IA pour images" },

  metaTitle: "Supprimer un filigrane – gratuit et en ligne | oMyImage",
  metaDescription:
    "Supprimez un filigrane en ligne gratuitement : marquez un logo, un texte ou une date et l'IA reconstruit la zone. Enlever un filigrane sans rien envoyer.",

  intro:
    "Un filigrane est un texte ou un logo posé sur une image, et le supprimer revient à reconstruire les pixels qu'il recouvrait. « Supprimer un filigrane » le fait avec un modèle d'IA, MI-GAN de Picsart AI Research, qui fonctionne directement dans votre navigateur : tracez un cadre autour du filigrane ou peignez dessus, cliquez sur « Supprimer le filigrane », et la zone est remplie à partir de ce qui l'entoure en une seconde environ. L'outil est pensé pour vos propres images : le logo d'une ancienne photo de produit, la date incrustée sur un tirage numérisé, la légende d'une capture d'écran que vous avez faite vous-même. Vous pouvez enlever un filigrane en ligne et gratuitement, et rien de ce que vous ouvrez n'est jamais envoyé sur un serveur. Utilisez-le uniquement sur des images qui vous appartiennent ou que vous avez le droit de modifier.",

  sections: [
    {
      heading: "Marquer le filigrane",
      id: "marking",
      body: [
        "L'outil s'ouvre avec le Cadre sélectionné, car la plupart des filigranes tiennent dans un rectangle : faites glisser d'un coin du filigrane au coin opposé. Pour un texte qui suit une courbe ou qui est éparpillé, passez au Pinceau et peignez sur chaque lettre. Couvrez aussi le contour, l'ombre portée et tout halo lumineux, sinon une trace légère des lettres subsistera.",
        "Vous pouvez marquer plusieurs filigranes avant de les supprimer (par exemple un logo dans un coin et une adresse web dans un autre) : chacun est rempli séparément.",
      ],
    },
    {
      heading: "Ce qui s'efface proprement, et ce qui résiste",
      id: "expectations",
      body: [
        "L'IA ne découvre pas ce qui se trouvait sous le filigrane ; elle peint ce que suggère l'image autour. Cela fonctionne très bien pour les petites marques sur un ciel, de l'eau, un mur, de l'herbe, un fond de studio uni ou un arrière-plan flou : logos dans un coin, dates incrustées, signatures et courtes légendes disparaissent en général sans laisser de trace.",
        "Les grands filigranes semi-transparents qui traversent toute la photo en diagonale sont plus difficiles : le modèle doit inventer de vastes zones de détail, si bien que le résultat est plus doux et peut brouiller les visages, les textes et les motifs fins. Supprimez-les par petites sections et vérifiez le résultat avec « Maintenir pour voir l'original ».",
      ],
    },
    {
      heading: "À utiliser sur des images que vous pouvez modifier",
      id: "responsible",
      body: [
        "Les filigranes des banques d'images et des aperçus de photographes protègent le travail et les revenus de quelqu'un. Les retirer pour utiliser l'image sans payer porte atteinte au droit d'auteur dans la plupart des pays, en France comme dans le reste de l'Union européenne, en Belgique, en Suisse ou au Canada : dans ce cas, achetez plutôt une licence. Cet outil est destiné à vos propres photos et aux images que vous avez l'autorisation de modifier : l'ancien logo de votre entreprise, une date ajoutée par votre appareil photo, un filigrane que vous aviez posé sur votre propre portfolio avant de perdre l'original.",
      ],
    },
    {
      heading: "Dates incrustées sur les vieilles photos",
      id: "date-stamps",
      body: [
        "Les appareils argentiques et les premiers appareils numériques imprimaient la date en chiffres orange dans un coin. Numérisez le tirage, tracez un cadre autour de la date et supprimez-la. Les vieux tirages portent souvent aussi des poussières et des rayures : marquez-les avec un petit pinceau et supprimez-les dans la même passe.",
      ],
    },
    {
      heading: "Textes et logos sur les captures d'écran et les photos de produit",
      id: "text",
      body: [
        "Les photos de produit de vos anciennes annonces portent souvent le nom d'une ancienne boutique ou un autocollant promotionnel ; les captures d'écran affichent des noms d'utilisateur, des notifications et des heures. Marquez-les avec le Cadre et supprimez-les. Sur les aplats de couleur, comme le fond blanc d'une photo de produit ou le panneau uni d'une application, le remplissage est pratiquement invisible.",
      ],
    },
    {
      heading: "Enlever ou retirer un filigrane sans rien installer",
      id: "no-install",
      body: [
        "Inutile de télécharger un logiciel ou de créer un compte. Ouvrez la page dans le navigateur de votre ordinateur ou de votre téléphone (Windows, macOS, Android ou iPhone), ajoutez l'image, retirez le filigrane et téléchargez le résultat. Si une première passe laisse une ombre visible, annulez, agrandissez un peu la marque pour couvrir le contour et réessayez : chaque tentative prend environ une seconde.",
      ],
    },
    {
      heading: "Une IA qui fonctionne dans votre navigateur",
      id: "on-device",
      body: [
        "Les outils en ligne pour supprimer un filigrane envoient généralement votre image et limitent le nombre de traitements gratuits. Celui-ci télécharge au contraire le modèle d'IA dans votre navigateur (environ 27 Mo depuis notre propre site, une seule fois ; votre navigateur le conserve) et effectue chaque suppression sur votre appareil. C'est pourquoi il n'y a ni limite ni envoi, et pourquoi l'outil continue de fonctionner sans connexion une fois le modèle chargé.",
      ],
    },
    {
      heading: "Qualité, annulation et formats",
      id: "quality",
      body: [
        "Seules les zones marquées changent ; tous les autres pixels sont enregistrés exactement comme ils étaient, à la taille complète de l'image, jusqu'à 16,7 mégapixels. Chaque suppression peut être annulée et rétablie, avec les boutons ou avec Ctrl+Z et Ctrl+Maj+Z, et « Recommencer » revient à l'original. Téléchargez dans le format d'origine, ou en JPG, PNG ou WEBP.",
        "Pour ajouter au contraire votre propre filigrane à vos photos, utilisez « Ajouter un filigrane ».",
      ],
    },
    {
      heading: "Confidentialité",
      id: "privacy",
      body: [
        "Votre image est retouchée entièrement dans votre navigateur, par un modèle qui tourne sur votre appareil. Rien n'est envoyé, et rien n'est conservé après la fermeture de la page.",
      ],
    },
  ],

  howToTitle: "Comment supprimer un filigrane d'une photo",
  steps: [
    { title: "Ajoutez votre photo", description: "Choisissez une image JPG, PNG ou WEBP." },
    { title: "Marquez le filigrane", description: "Tracez un cadre autour, ou peignez sur chaque lettre au pinceau." },
    { title: "Supprimez et téléchargez", description: "Cliquez sur « Supprimer le filigrane », comparez avec l'original, puis sur « Télécharger l'image »." },
  ],

  features: [
    { icon: "auto_fix_high", title: "Cadre ou pinceau", description: "Marquez un logo d'un seul glissé, ou peignez sur un texte éparpillé." },
    { icon: "smart_toy", title: "Remplissage IA en une seconde", description: "La zone est reconstruite à partir de l'image qui l'entoure." },
    { icon: "lock", title: "Sans envoi, sans limite", description: "L'IA fonctionne sur votre appareil." },
  ],

  faqs: [
    { q: "Comment supprimer un filigrane d'une photo ?", a: "Ajoutez la photo, tracez un cadre autour du filigrane et cliquez sur « Supprimer le filigrane ». Téléchargez ensuite l'image nettoyée." },
    { q: "Puis-je enlever un filigrane gratuitement ?", a: "Oui. Pas de compte, aucun filigrane de notre part et pas de limite quotidienne : l'IA fonctionne sur votre appareil." },
    { q: "Mon image est-elle envoyée sur un serveur ?", a: "Non. Le modèle se télécharge dans votre navigateur et votre image ne quitte jamais votre appareil." },
    { q: "Peut-il supprimer un logo ?", a: "Oui. Encadrez le logo, ombre et contour compris, et supprimez-le." },
    { q: "Peut-il retirer la date d'une photo ?", a: "Oui. Tracez un cadre autour de la date et supprimez-la ; cela fonctionne particulièrement bien sur les tirages numérisés." },
    { q: "Peut-il effacer du texte sur une image ?", a: "Oui. Peignez sur le texte au pinceau, ou encadrez-le s'il tient sur une ligne." },
    { q: "Pourquoi un grand filigrane reste-t-il visible ?", a: "Les grands filigranes transparents posés sur des zones détaillées sont difficiles à reconstruire. Supprimez-les par petites sections et marquez aussi leur contour." },
    { q: "Récupère-t-il les pixels d'origine ?", a: "Non. Il peint ce que suggère l'environnement, ce qui, sur un fond uni, ne se distingue généralement pas de l'original." },
    { q: "Est-il légal de supprimer un filigrane ?", a: "Sur vos propres images, ou sur celles que vous avez l'autorisation de modifier, oui. En retirer un pour utiliser la photo de quelqu'un d'autre sans licence porte généralement atteinte au droit d'auteur." },
    { q: "Puis-je annuler une suppression ?", a: "Oui : « Annuler », « Rétablir » et « Recommencer », ou Ctrl+Z et Ctrl+Maj+Z." },
    { q: "La qualité de l'image baisse-t-elle ?", a: "Non. Seules les zones marquées changent, et l'image garde sa taille jusqu'à 16,7 mégapixels." },
    { q: "Fonctionne-t-il sur un téléphone ?", a: "Oui. Tracez le cadre ou peignez avec le doigt ; chaque suppression prend quelques secondes." },
    { q: "Peut-il supprimer le filigrane d'une vidéo ?", a: "Non : il fonctionne sur les photos, en JPG, PNG et WEBP." },
    { q: "Dois-je installer un logiciel ?", a: "Non. Vous retirez le filigrane en ligne, dans le navigateur, sous Windows, macOS, Android ou iPhone. Seul le modèle d'IA se télécharge une fois, lors de la première visite." },
  ],

  security:
    "Votre image est retouchée entièrement dans votre navigateur, par un modèle qui tourne sur votre appareil. Rien n'est envoyé, stocké ni suivi.",

  // InpaintTool.tsx is shared with remove-object; each route only has its own
  // tool's ui in scope, so this page reuses the remove-object translations.
  ui: object.ui,
};

export default content;
