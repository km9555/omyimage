import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr AVIF-to-PNG converter.
 *
 * Head term « AVIF en PNG » (1K FR), « convertir AVIF en PNG » as a
 * secondary. The angle is transparency and a lossless master file — the
 * opposite decision from AVIF en JPG, which keeps the two AVIF pages apart.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF en PNG",
  seoTitle: "AVIF en PNG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir AVIF en PNG gratuitement et sans inscription : gardez le fond transparent et obtenez un fichier sans perte à retoucher. Lots en ZIP, en local.",
  unique: {
    intro:
      "Quand un AVIF a un fond transparent, c'est le PNG qu'il faut viser, pas le JPG. En convertissant un AVIF en PNG, le canal alpha reste intact et le résultat est enregistré sans perte : vous obtenez exactement ce que le navigateur a décodé, un fichier de travail propre à glisser dans un outil de design ou à retoucher autant de fois que nécessaire, sans dégradation supplémentaire.",
    whyConvert:
      "Entre cette conversion et celle en JPG, le critère décisif est presque toujours la transparence. L'AVIF contient un canal alpha complet, et une conversion en JPG obligerait à détruire cette transparence pour la remplacer par un remplissage uni. Le PNG la conserve, ce qui compte pour les logos, les détourages de produits, les icônes et tout ce qui doit se poser sur un fond que vous ne maîtrisez pas. Le second critère, c'est la retouche. Le PNG est sans perte : une fois l'image convertie, vous pouvez la recadrer, la retoucher et la réenregistrer autant de fois que vous le voulez sans accumuler de dégâts de compression, ce que ni l'AVIF ni le JPG ne permettent. Le prix à payer, c'est le poids : le PNG enregistre tout, et un AVIF de quelques centaines de kilo-octets peut facilement devenir plusieurs mégaoctets en PNG. Un prix raisonnable pour un fichier maître, et mauvais pour une ressource web.",
    notes: [
      {
        heading: "Attendez-vous à une hausse spectaculaire du poids",
        body:
          "L'AVIF est l'un des formats les plus efficaces qui existent, et le PNG l'un des moins efficaces : passer de l'un à l'autre peut multiplier le poids du fichier par cinq ou par dix. Rien n'a dysfonctionné quand cela arrive. Voyez le PNG comme une copie de travail plutôt que comme un fichier à publier : si vous en avez besoin ensuite sur une page web, convertissez-le en WebP, qui conservera la transparence pour une fraction du poids du PNG.",
      },
      {
        heading: "La transparence passe à l'identique",
        body:
          "Les deux formats enregistrent un alpha sur 8 bits : les pixels semi-transparents restent semi-transparents. Ombres douces, bords progressifs et texte lissé survivent sans halo ni liseré. Il n'y a aucune couleur de fond à choisir ici, puisque rien ne doit être rempli : c'est précisément l'avantage sur une conversion en JPG.",
      },
      {
        heading: "Le HDR est aplati au décodage",
        body:
          "L'AVIF peut enregistrer une haute plage dynamique et une gamme de couleurs étendue. Le PNG d'usage courant ne le peut pas, et le navigateur ramène l'image à la plage standard pendant le décodage. Pour la plupart des images, c'est invisible ; pour une photo volontairement HDR aux hautes lumières très vives, le résultat peut paraître plus terne que l'original. Cela se produit à l'étape du décodage, et s'applique donc quel que soit le format de destination.",
      },
    ],
    faqs: [
      {
        q: "La conversion AVIF en PNG conserve-t-elle la transparence ?",
        a: "Oui, entièrement. Les deux formats gèrent un canal alpha sur 8 bits : les zones transparentes et semi-transparentes passent sans changement, sans aucun remplissage de fond.",
      },
      {
        q: "La conversion est-elle sans perte ?",
        a: "L'encodage PNG est sans perte : rien n'est perdu à cette étape. L'AVIF lui-même a probablement été enregistré avec perte, et la conversion conserve l'image telle qu'elle est, sans restaurer le détail déjà supprimé.",
      },
      {
        q: "Pourquoi le PNG est-il tellement plus lourd ?",
        a: "Parce que le PNG ne supprime jamais de données, alors que l'AVIF est extrêmement doué pour cela. Un poids multiplié par cinq à dix est normal. Convertissez ensuite en WebP si vous avez besoin d'un fichier léger qui garde la transparence.",
      },
      {
        q: "PNG ou JPG : que choisir pour mon AVIF ?",
        a: "Le PNG si l'image comporte de la transparence ou si vous comptez la retoucher. Le JPG s'il s'agit d'une photo opaque et que vous voulez le fichier le plus léger et le plus universellement accepté.",
      },
      {
        q: "Puis-je convertir plusieurs fichiers AVIF à la fois ?",
        a: "Oui. Ajoutez-en autant que vous voulez : ils sont convertis à la suite dans votre navigateur et vous sont rendus ensemble dans un seul ZIP.",
      },
      {
        q: "Mon AVIF est-il envoyé sur un serveur pour la conversion ?",
        a: "Normalement non. Votre navigateur décode l'AVIF et écrit le PNG tout seul : l'image est traitée dans votre onglet. Seule une image de résolution exceptionnellement élevée, qu'un onglet ne peut pas dessiner, passe par notre serveur, et elle est supprimée aussitôt après.",
      },
    ],
  },
};

export default copy;
