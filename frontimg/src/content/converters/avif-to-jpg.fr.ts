import type { LocalizedPairCopy } from "@/lib/converters/types";

/**
 * French copy for the /fr AVIF-to-JPG converter.
 *
 * Head term « AVIF en JPG » (1.9K FR); « convertir AVIF en JPG », « ouvrir
 * un fichier AVIF » and « AVIF en JPEG » as secondaries. The angle is the
 * gap between browsers (which decode AVIF) and desktop software (which often
 * cannot) — the reason the conversion can run locally at all.
 */
const copy: LocalizedPairCopy = {
  name: "AVIF en JPG",
  seoTitle: "AVIF en JPG – convertir gratuitement en ligne | oMyImage",
  seoDescription:
    "Convertir AVIF en JPG gratuitement et sans inscription : ouvrez enfin ces images dans n'importe quel logiciel. Qualité réglable, lots en ZIP, aucun envoi.",
  unique: {
    intro:
      "L'AVIF est le format d'image le plus efficace d'usage courant, et aussi celui que vos logiciels ont le moins de chances d'ouvrir. En convertissant un AVIF en JPG, vous échangez cette efficacité contre la possibilité d'utiliser réellement le fichier : dans un logiciel de retouche, sur un ancien téléphone, chez un imprimeur, dans tout ce qui a été conçu avant 2021 environ. C'est votre navigateur qui décode l'image : rien n'est envoyé.",
    whyConvert:
      "L'AVIF s'est répandu sur les sites web bien plus vite que dans les logiciels de bureau, et c'est cet écart qui amène la plupart des gens ici. Vous avez enregistré une image depuis un site moderne, et maintenant Photoshop, la visionneuse de photos de Windows, la galerie de votre téléphone ou un formulaire d'envoi refusent d'y toucher. Les navigateurs sont l'exception plutôt que la règle : Chrome décode l'AVIF depuis la version 85, Firefox depuis la 93 et Safari depuis la 16.4, et c'est précisément ce qui permet à cette conversion de se faire en local, dans votre navigateur. Le JPG va dans l'autre sens : il est compris par pratiquement tout, au prix de fichiers plus lourds à qualité visuelle égale. Si le fichier est destiné à votre propre usage et que votre logiciel ne lit pas l'AVIF, convertir est bien plus simple que de partir à la chasse au codec.",
    notes: [
      {
        heading: "Le fichier va s'alourdir",
        body:
          "C'est l'échange attendu, et autant le dire clairement. L'AVIF atteint souvent la moitié du poids d'un JPG à qualité égale : dans l'autre sens, le poids double donc à peu près. Vous achetez la compatibilité avec des octets. Si le poids compte vraiment pour la destination, gardez le curseur de qualité autour de 0,85 plutôt qu'au maximum : la différence se voit à peine, et le gain est important.",
      },
      {
        heading: "La transparence et le HDR ne survivent pas",
        body:
          "L'AVIF gère un canal alpha et la haute plage dynamique ; le JPG ne gère ni l'un ni l'autre. Les zones transparentes sont remplies avec la couleur de fond que vous choisissez. Les images HDR sont ramenées à la plage standard par le navigateur au moment du décodage, ce qui, sur une photo lumineuse et très contrastée, peut visiblement écraser les hautes lumières. Si l'un ou l'autre compte, convertissez plutôt en PNG : il conserve la transparence, mais pas le HDR non plus.",
      },
      {
        heading: "Pourquoi votre navigateur l'ouvre et pas vos applications",
        body:
          "L'AVIF repose sur le codec vidéo AV1, que les éditeurs de navigateurs ont adopté tôt et massivement parce qu'il est libre de droits et performant pour le streaming vidéo. Les logiciels d'image de bureau ont mis plus de temps, car il leur faut intégrer tout un codec vidéo pour afficher une simple image fixe. Voilà toute l'explication de cette situation étrange où une page web affiche l'image sans problème alors qu'un double-clic sur le fichier enregistré ne donne rien.",
      },
    ],
    faqs: [
      {
        q: "Pourquoi mon ordinateur n'ouvre-t-il pas les fichiers AVIF ?",
        a: "La prise en charge de l'AVIF est arrivée dans les navigateurs des années avant d'atteindre les logiciels de bureau. Windows a besoin de l'extension AV1 Video Extension du Microsoft Store, et beaucoup de logiciels de retouche ne le gèrent toujours pas. La conversion contourne le problème.",
      },
      {
        q: "Le JPG sera-t-il plus lourd que l'AVIF ?",
        a: "Oui, en général environ deux fois plus lourd à qualité comparable. L'AVIF est nettement plus efficace ; le JPG est nettement plus compatible. C'est l'échange que vous faites.",
      },
      {
        q: "Convertir un AVIF en JPG fait-il perdre de la qualité ?",
        a: "Un peu, puisque les deux formats sont avec perte et que l'image est réencodée. À partir d'une qualité de 0,85, c'est très difficile à voir. Partez de l'AVIF d'origine plutôt que d'une copie qui a déjà subi une autre conversion.",
      },
      {
        q: "Que devient la transparence d'un AVIF ?",
        a: "Elle est remplie par une couleur unie, car le JPG n'a pas de canal alpha. Choisissez la couleur de remplissage avant la conversion, ou convertissez plutôt en PNG pour garder la transparence.",
      },
      {
        q: "Mon image est-elle envoyée sur un serveur pour la conversion ?",
        a: "Non. Votre navigateur sait déjà décoder l'AVIF, et c'est ce qui rend la conversion locale possible. L'image est traitée dans votre onglet et n'est envoyée nulle part.",
      },
      {
        q: "Puis-je convertir plusieurs fichiers AVIF en JPG à la fois ?",
        a: "Oui. Glissez-en autant qu'il vous faut : ils sont convertis l'un après l'autre avec le même réglage de qualité, et vous les téléchargez ensemble dans un seul ZIP.",
      },
    ],
  },
};

export default copy;
