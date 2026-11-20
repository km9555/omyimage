import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr WebP-to-JPG converter.
 *
 * Head terms « WebP en JPG » (3.6K FR) and « convertir WebP en JPG » (5.4K),
 * the biggest converter queries in French; « WebP en JPEG » as a secondary.
 * The angle is the English one: a file that something refuses, turned into
 * the one format nothing refuses, with a chosen fill colour for transparency.
 */
const copy: LocalizedPairCopy = {
  name: "WebP en JPG",
  seoTitle: "WebP en JPG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir WebP en JPG gratuitement et sans inscription : choisissez la qualité et la couleur de fond, convertissez des lots en ZIP, dans votre navigateur.",
  unique: {
    intro:
      "Le WebP fait merveille sur une page web et pose problème presque partout ailleurs. En convertissant un WebP en JPG, vous obtenez le seul format d'image que personne ne refuse : logiciels de messagerie, imprimeurs, cadres photo numériques, anciens téléphones, formulaires administratifs en ligne. Vous choisissez la qualité et, si le WebP contient des zones transparentes, la couleur qui les remplira, car le JPG ne peut pas les conserver.",
    whyConvert:
      "Presque tous ceux qui arrivent ici se sont heurtés à un mur, ils n'ont pas fait un choix. Vous avez fait un clic droit sur une image, vous l'avez enregistrée, et l'endroit où vous devez l'utiliser n'accepte pas le .webp. La liste est longue et tenace : de nombreux services d'impression, les anciennes versions d'Office, les outils d'import de fiches produit des boutiques en ligne, les cadres photo numériques et quantité de logiciels industriels ou embarqués. Le JPG est le plus petit dénominateur commun de l'image numérique depuis trente ans : convertir le WebP en JPG va donc souvent plus vite que de se battre avec ce qui rejette le fichier. La deuxième raison, c'est le poids. Si votre WebP est sans perte (c'est souvent le cas des captures d'écran), il peut même peser plus lourd qu'un JPG de la même image, et la conversion le réduit nettement.",
    notes: [
      {
        heading: "La transparence doit devenir quelque chose",
        body:
          "Le JPG n'a aucun canal alpha : un fond transparent ne peut donc pas passer tel quel. Il faut peindre quelque chose dessous, et partout la valeur par défaut est le blanc. C'est parfait sur une page blanche, et très visible sur une page sombre ; c'est pourquoi cet outil vous laisse choisir la couleur de remplissage au lieu de la deviner. Si la transparence compte vraiment pour vous, le JPG n'est pas la bonne destination : convertissez plutôt le WebP en PNG, qui la conserve.",
      },
      {
        heading: "Deux compressions avec perte à la suite",
        body:
          "Un WebP avec perte a déjà éliminé du détail, et l'encodage en JPG en élimine encore un peu. En pratique, cela se voit rarement avec un réglage de qualité raisonnable, mais l'effet est réel et il s'accumule si vous convertissez d'un format à l'autre à répétition. Convertissez une seule fois, à partir de la meilleure source dont vous disposez, et gardez ce résultat. Si l'image doit encore être retouchée, un PNG sans perte fait un meilleur fichier intermédiaire.",
      },
      {
        heading: "Un WebP animé donne une seule image",
        body:
          "Le JPG ne contient qu'une image : un WebP animé est donc converti en sa première image (frame). Le format JPG ne permet aucun contournement. Si c'est l'animation qui vous intéresse, convertissez plutôt en GIF.",
      },
      {
        heading: "WebP en JPG ou en JPEG : le résultat est le même",
        body:
          "Beaucoup de gens cherchent « convertir WebP en JPEG » en se demandant s'il s'agit d'une autre conversion. Ce n'est pas le cas : JPG et JPEG sont deux noms du même format, et l'extension en trois lettres date de l'époque de MS-DOS, qui n'acceptait pas d'extensions plus longues. Le fichier que vous téléchargez ici se termine par .jpg et s'ouvre dans tout logiciel qui accepte le JPEG, de la visionneuse de photos de Windows ou de macOS jusqu'à un formulaire web ou la galerie de votre téléphone.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi mon ordinateur n'ouvre-t-il pas un fichier WebP ?",
        a: "Parce que le WebP est apparu en 2010 et que les logiciels de bureau ont tardé à suivre. Les anciennes versions de Windows ont besoin d'un codec du Microsoft Store, Photoshop n'a ajouté la prise en charge native qu'à la version 23.2, et beaucoup de petites applications ne l'ont toujours pas. Convertir en JPG vous évite de traquer le problème logiciel par logiciel.",
      },
      {
        q: "Le JPG sera-t-il plus lourd ou plus léger que le WebP ?",
        a: "En général un peu plus lourd si le WebP était avec perte, car le WebP compresse plus efficacement à qualité visuelle égale. Si le WebP était sans perte, ce qui est courant pour les captures d'écran et les graphiques, le JPG sera beaucoup plus léger.",
      },
      {
        q: "Que deviennent les zones transparentes ?",
        a: "Elles sont remplies d'une couleur unie, car le JPG ne sait pas enregistrer la transparence. Le blanc est la couleur par défaut, et vous pouvez la changer avant la conversion. Pour garder la transparence, convertissez plutôt en PNG.",
      },
      {
        q: "Convertir un WebP en JPG fait-il perdre de la qualité ?",
        a: "Un peu, car le JPG est un format avec perte. Avec la qualité par défaut, la différence ne se voit pas à une taille d'affichage normale. Montez le curseur si vous convertissez des photos très détaillées que vous comptez imprimer.",
      },
      {
        q: "Puis-je convertir beaucoup de fichiers WebP en même temps ?",
        a: "Oui. Déposez le lot complet : les fichiers sont convertis l'un après l'autre, puis réunis dans un seul ZIP, sans que vous ayez à cliquer sur chaque téléchargement.",
      },
      {
        q: "Mes images WebP sont-elles envoyées sur un serveur ?",
        a: "En règle générale, non. Votre navigateur sait lire le WebP et écrire le JPG tout seul : la conversion se fait donc dans votre onglet. Seule une image de résolution exceptionnellement élevée, qu'un onglet de navigateur ne peut pas dessiner, passe par notre serveur, et elle est supprimée aussitôt après.",
      },
    ],
  },
};

export default copy;
