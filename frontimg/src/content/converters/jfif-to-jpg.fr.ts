import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr JFIF-to-JPG converter.
 *
 * Head term « JFIF en JPG » (720 FR); « convertir JFIF en JPG », « fichier
 * JFIF » and « JFIF en JPEG » as secondaries. The angle is "a naming problem
 * dressed up as a format problem" — the Windows registry quirk.
 */
const copy: LocalizedPairCopy = {
  name: "JFIF en JPG",
  seoTitle: "JFIF en JPG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir JFIF en JPG gratuitement et sans inscription : des fichiers .jpg propres, acceptés par tous les formulaires et logiciels, par lots dans un ZIP.",
  unique: {
    intro:
      "Vous avez enregistré une image et Windows vous a remis un fichier .jfif que la moitié de vos logiciels refusent d'ouvrir. Il n'a pourtant rien d'anormal : un JFIF est un JPEG tout à fait ordinaire avec une extension inhabituelle. Maigre consolation quand le formulaire d'envoi le rejette. Ce convertisseur lit le fichier et écrit un .jpg propre, qui se comporte comme vous l'attendiez dès le départ.",
    whyConvert:
      "C'est un problème de nom déguisé en problème de format. JFIF signifie JPEG File Interchange Format : c'est le conteneur qu'utilisent en interne pratiquement tous les fichiers que vous appelez déjà JPG. Si vous vous retrouvez soudain avec des fichiers en .jfif, c'est à cause d'une bizarrerie du registre Windows : certaines combinaisons de Windows et de Chrome déclarent .jfif comme extension préférée du type MIME image/jpeg, et dès lors les images enregistrées reçoivent cette extension au lieu de .jpg. Les octets sont identiques à ceux que vous auriez obtenus avant. Malheureusement, beaucoup de logiciels vérifient l'extension plutôt que le contenu du fichier (portails de candidature, anciens gestionnaires de photos, outils d'import des boutiques en ligne, plateformes de dépôt de devoirs) et refusent tout simplement. Renommer le fichier à la main fonctionne souvent, mais échoue quand l'extension est masquée, quand il y a des dizaines de fichiers, ou quand le système de destination contrôle aussi le contenu.",
    notes: [
      {
        heading: "Pourquoi ne pas simplement renommer le fichier ?",
        body:
          "Vous le pouvez souvent, et si vous n'avez qu'un fichier et que les extensions sont visibles, c'est la solution la plus rapide. Elle ne tient plus à grande échelle, ni lorsque Windows vous cache les extensions : vous vous retrouvez alors avec un fichier nommé photo.jpg.jfif, qui n'a rien gagné. La conversion normalise en plus le fichier : il est décodé puis réencodé en JPEG baseline standard, ce qui règle les rares cas où le logiciel de destination reprochait quelque chose au contenu du fichier plutôt qu'à son nom.",
      },
      {
        heading: "Empêcher Windows de recommencer",
        body:
          "La cause profonde est une association de type de fichier dans le registre Windows, à l'entrée du type de contenu image/jpeg, où .jfif est déclaré comme extension par défaut. Modifier le registre corrige le problème de façon permanente pour les prochains téléchargements, mais ne change rien aux fichiers que vous avez déjà, et ce n'est pas une manipulation à faire à la légère. La conversion traite ce qui se trouve déjà sur votre disque, et c'est généralement le problème immédiat.",
      },
      {
        heading: "Un seul réencodage, une perte minime",
        body:
          "Comme JFIF et JPG sont au fond le même format, cette conversion est presque un simple passage. L'image est décodée et réencodée une seule fois : avec un réglage de qualité élevé, la différence est imperceptible. Laissez le curseur de qualité en haut : il n'y a ici aucun problème de poids à résoudre, et ce n'est pas le moment de compresser.",
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un fichier JFIF, exactement ?",
        a: "C'est un JPEG. JFIF signifie JPEG File Interchange Format, le conteneur standard que presque tous les fichiers JPG utilisent déjà. La seule différence tient aux lettres après le point.",
      },
      {
        q: "Pourquoi Chrome enregistre-t-il les images en .jfif au lieu de .jpg ?",
        a: "Une association du registre Windows déclare .jfif comme extension par défaut du type de contenu image/jpeg. Chrome demande à Windows quelle extension utiliser, et Windows répond .jfif. C'est une bizarrerie de configuration de Windows, pas un bug de Chrome.",
      },
      {
        q: "Puis-je simplement renommer .jfif en .jpg ?",
        a: "Souvent oui, puisque le contenu est déjà un JPEG valide. C'est peu pratique quand Windows masque les extensions, inutile pour un gros lot, et sans effet si le logiciel de destination reproche autre chose que le nom.",
      },
      {
        q: "La conversion JFIF en JPG fait-elle perdre de la qualité ?",
        a: "Pratiquement aucune avec un réglage de qualité élevé. L'image est décodée et réencodée une seule fois, ce qui représente une toute petite perte de génération. Gardez le curseur en haut et vous ne verrez aucune différence.",
      },
      {
        q: "Puis-je convertir beaucoup de fichiers JFIF à la fois ?",
        a: "Oui, et c'est la principale raison de passer par un convertisseur plutôt que de renommer. Déposez le dossier entier et vous récupérez un seul ZIP de fichiers .jpg.",
      },
      {
        q: "Un fichier JFIF est-il dangereux ou corrompu ?",
        a: "Non. C'est un fichier image normal avec une extension peu familière. Rien n'y est cassé, et c'est justement pour cela que la situation est si déroutante.",
      },
      {
        q: "Cet outil convertit-il aussi le JFIF en JPEG ?",
        a: "Oui. JPG et JPEG sont le même format sous deux noms : le fichier que vous téléchargez se termine par .jpg et il est accepté partout où l'on demande une image JPEG.",
      },
    ],
  },
};

export default copy;
