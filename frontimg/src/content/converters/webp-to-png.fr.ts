import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr WebP-to-PNG converter.
 *
 * Head term « WebP en PNG » (1.9K FR), « convertir WebP en PNG » as a
 * secondary. The angle stays the English one: a lossless, universally
 * readable file with the transparency intact — the opposite trade from the
 * JPG page, which is what keeps the two WebP pages apart.
 */
const copy: LocalizedPairCopy = {
  name: "WebP en PNG",
  seoTitle: "WebP en PNG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir WebP en PNG gratuitement et sans inscription : aucune perte de qualité, transparence intacte et lots entiers dans un ZIP. Tout se fait en local.",
  unique: {
    intro:
      "Le WebP accélère les pages web, mais c'est encore le format qui refuse de s'ouvrir quand on double-clique dessus. En convertissant un WebP en PNG, vous obtenez un fichier que toutes les applications comprennent, avec la transparence intacte et sans aucune perte de qualité : le PNG étant sans perte, les pixels qui sortent sont exactement ceux qui sont entrés. Déposez un WebP ou cent ; tout est converti dans votre navigateur.",
    whyConvert:
      "La raison habituelle est une simple incompatibilité. Vous avez enregistré une image depuis un site, et maintenant Photoshop, PowerPoint, le formulaire d'envoi de votre imprimeur ou un ancien téléphone Android refusent d'y toucher. Le PNG est la réponse la plus sûre à ce problème : il est pris en charge partout depuis la fin des années 1990 et, contrairement au JPG, il conserve la transparence, si bien qu'un logo sur fond transparent arrive intact. L'autre raison fréquente, c'est la retouche. Le WebP est avec perte par défaut, et chaque enregistrement le dégrade un peu plus. Une conversion unique en PNG vous donne un fichier de travail sans perte, que vous pouvez recadrer, retoucher et réenregistrer autant de fois que nécessaire sans que l'image se détériore en silence.",
    notes: [
      {
        heading: "Le PNG sera plus lourd, et c'est normal",
        body:
          "Un WebP de 180 Ko peut facilement atteindre 900 Ko en PNG, sans que rien ne se soit mal passé. Le WebP obtient sa légèreté en supprimant des données d'image ; le PNG, lui, n'a le droit de rien supprimer. Vous échangez des octets contre la compatibilité et contre un fichier qui ne se dégradera plus. Si le poids obtenu pose problème et que vous n'avez pas besoin de transparence, une conversion en JPG donnera un fichier bien plus léger ; et si vous vouliez seulement réduire le fichier sans changer de format, l'outil « Compresser une image » est plus adapté.",
      },
      {
        heading: "Un WebP animé devient une image fixe",
        body:
          "Un WebP peut contenir une animation, comme un GIF. Un format d'image fixe comme le PNG ne peut pas la représenter : seule la première image (frame) d'un WebP animé est donc convertie. Si le mouvement doit être conservé, convertissez en GIF plutôt qu'en PNG. Et si vous voulez récupérer chaque image séparément, c'est un autre travail que celui de cet outil.",
      },
      {
        heading: "La transparence est conservée à l'identique",
        body:
          "Le WebP et le PNG disposent tous deux d'un canal alpha complet sur 8 bits : bords adoucis, ombres portées et texte lissé se convertissent proprement. Il n'y a aucune étape d'aplatissement ni aucune couleur de fond à choisir, puisque rien ne doit être rempli. C'est le principal avantage pratique d'une conversion WebP en PNG plutôt qu'en JPG, qui devrait peindre une couleur pleine derrière chaque pixel transparent.",
      },
    ],
    faqs: [
      {
        q: "Convertir un WebP en PNG réduit-il la qualité ?",
        a: "Non. Le PNG est un format sans perte : la conversion recopie chaque pixel à l'identique. Sachez toutefois ce qu'elle ne peut pas faire : si le WebP d'origine a été enregistré avec perte, du détail a déjà été supprimé à ce moment-là, et le PNG conserve l'image telle qu'elle est, sans rien restaurer.",
      },
      {
        q: "Pourquoi mon PNG est-il tellement plus lourd que le WebP ?",
        a: "Parce que le PNG ne jette jamais de données. La légèreté du WebP vient de sa compression avec perte, un procédé que le PNG ne peut pas utiliser. Un fichier trois à six fois plus lourd est tout à fait normal pour une photo : c'est le prix d'un fichier sans perte, lisible partout.",
      },
      {
        q: "La transparence est-elle conservée ?",
        a: "Oui, entièrement. Les deux formats gèrent un canal alpha : les zones transparentes et semi-transparentes passent sans changement. Aucun rectangle blanc n'apparaît derrière votre image.",
      },
      {
        q: "Que devient un WebP animé ?",
        a: "Vous obtenez sa première image sous forme de PNG fixe. Le PNG ne gère pas l'animation : les autres images ne peuvent pas être représentées. Convertissez plutôt en GIF si l'animation doit être conservée.",
      },
      {
        q: "Puis-je convertir un dossier entier de fichiers WebP en une fois ?",
        a: "Oui. Sélectionnez ou glissez autant de fichiers que vous voulez : ils sont tous convertis à la suite, puis regroupés dans un seul ZIP, pour un seul téléchargement au lieu de plusieurs dizaines.",
      },
      {
        q: "Pourquoi Photos de Windows ou Photoshop n'ouvrent-ils pas mon fichier WebP ?",
        a: "Le WebP est apparu en 2010, mais les logiciels de bureau l'ont adopté lentement. Photoshop a eu besoin d'un module externe jusqu'à la version 23.2, et les anciennes versions de Windows exigent un codec du Microsoft Store. Convertir en PNG règle la question une fois pour toutes, au lieu de la corriger version par version.",
      },
      {
        q: "Mes images WebP sont-elles envoyées sur un serveur pour la conversion ?",
        a: "En règle générale, non. Votre navigateur sait lire le WebP et écrire le PNG tout seul : la conversion se fait dans votre onglet. Seule une image de résolution exceptionnellement élevée, qu'un onglet de navigateur ne peut plus dessiner, passe par notre serveur, et elle est supprimée aussitôt après.",
      },
    ],
  },
};

export default copy;
