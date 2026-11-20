import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr GIF-to-JPG converter.
 *
 * Head term « GIF en JPG » (590 FR); « convertir GIF en JPG » and « GIF en
 * JPEG » as secondaries. The angle is a light, universally accepted still
 * image for a form or a print service — distinct from GIF en PNG, which is
 * about keeping a lossless working file.
 */
const copy: LocalizedPairCopy = {
  name: "GIF en JPG",
  seoTitle: "GIF en JPG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir GIF en JPG gratuitement et sans inscription : une photo légère acceptée par tous les formulaires, avec le fond de votre choix sous la transparence.",
  unique: {
    intro:
      "Transformer un GIF en JPG vous donne un fichier photo léger, accepté partout. C'est la bonne solution quand vous devez joindre, envoyer ou imprimer une image fixe et que le GIF est trop lourd ou tout simplement refusé. Les zones transparentes sont remplies avec la couleur de votre choix, et les GIF animés sont convertis en leur première image.",
    whyConvert:
      "Deux situations amènent les gens ici. La première : un envoi qui n'accepte pas le GIF. Beaucoup de formulaires n'acceptent que le JPG et le PNG, en particulier tous ceux qui attendent une photo, comme l'envoi d'une pièce d'identité, une annonce sur une place de marché ou un service d'impression. La seconde, c'est le poids : un long GIF animé peut atteindre plusieurs mégaoctets, et si vous n'avez besoin que d'une image représentative, un JPG de cette image ne pèse qu'une fraction du fichier. Le JPG est aussi la bonne destination quand le contenu est photographique, car sa compression est conçue pour les images en tons continus, ce que la palette du GIF n'a jamais été. Ce que le JPG ne sait pas faire, c'est la transparence et l'animation : c'est donc le mauvais choix si l'une ou l'autre compte pour vous.",
    notes: [
      {
        heading: "Les pixels transparents ont besoin d'un fond",
        body:
          "Le JPG n'a pas de canal alpha : toute zone transparente du GIF doit être remplie par une couleur pleine. Le blanc est la valeur par défaut et c'est généralement le bon choix, mais si l'image doit s'afficher sur une page colorée, vous pouvez choisir ici cette couleur et éviter un rectangle blanc bien visible. Comme la transparence du GIF a des bords nets, la limite peut sembler légèrement crénelée après le remplissage : ce bord vient du GIF, pas de la conversion.",
      },
      {
        heading: "Les défauts de palette restent visibles",
        body:
          "Un GIF a déjà été réduit à 256 couleurs, souvent avec un tramage, ce motif de petits points qui simule les teintes intermédiaires. La compression JPG ne supprime pas ce motif et peut même le rendre un peu plus visible, car l'encodeur traite les points du tramage comme un vrai détail à préserver. Garder le curseur de qualité assez haut évite d'aggraver le problème.",
      },
      {
        heading: "Seulement la première image",
        body:
          "Le JPG ne contient qu'une seule image : un GIF animé est converti en son image (frame) d'ouverture. Aucun réglage ne change cela. Si vous avez besoin d'une image précise plutôt que de la première, extrayez d'abord les images avec l'outil « GIF en images », puis convertissez celle qui vous intéresse.",
      },
    ],
    faqs: [
      {
        q: "Quelle image d'un GIF animé vais-je obtenir ?",
        a: "La première. Le JPG ne peut pas enregistrer d'animation : seule l'image d'ouverture est convertie. Utilisez « GIF en images » si vous avez besoin d'une autre image ou de toutes.",
      },
      {
        q: "Que devient la transparence ?",
        a: "Elle est remplie par une couleur unie, car le JPG ne gère pas la transparence. Le blanc est la valeur par défaut, et vous pouvez choisir une autre couleur avant la conversion.",
      },
      {
        q: "Le JPG sera-t-il plus léger que le GIF ?",
        a: "Presque toujours, et de beaucoup pour un GIF animé, puisque vous ne gardez qu'une image au lieu de centaines. Pour un GIF simple à une seule image et peu de couleurs, l'écart est plus faible et peut parfois s'inverser.",
      },
      {
        q: "Faut-il convertir en JPG ou en PNG ?",
        a: "En JPG si vous voulez un fichier léger et que le contenu est photographique. En PNG si la transparence doit être conservée ou si vous avez besoin d'une qualité sans perte pour continuer à retoucher l'image.",
      },
      {
        q: "L'image sera-t-elle moins belle ?",
        a: "Légèrement, car le JPG est avec perte, mais avec la qualité par défaut le changement se voit à peine. Le motif de tramage du GIF d'origine est le défaut le plus visible, et il était là avant la conversion.",
      },
      {
        q: "Puis-je convertir un GIF en JPEG avec cet outil ?",
        a: "Oui. JPG et JPEG sont le même format sous deux noms ; le fichier que vous téléchargez se termine par .jpg et il est accepté par tout site qui demande une image JPEG.",
      },
    ],
  },
};

export default copy;
