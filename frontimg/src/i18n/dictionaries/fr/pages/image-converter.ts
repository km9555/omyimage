import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr image converter hub (ConverterHub).
 *
 * The format essays and the card names come from the converter layer
 * (conversion.md §6.4), not from here — this file is only the hub's own
 * chrome and its FAQ. French converter names read "X en Y", the way the
 * queries are typed (WebP en JPG, PNG en WebP).
 */
export const frImageConverter: Dict = {
  "{n} format converters, each one built for a specific pair rather than a generic drop-down. Pick your source format below. Everything is free, batch-capable, and runs in your browser unless the format makes that impossible.":
    "{n} convertisseurs de format, chacun conçu pour une paire précise plutôt qu'un menu déroulant générique. Choisissez ci-dessous votre format de départ. Tout est gratuit, accepte le traitement par lots et fonctionne dans votre navigateur, sauf quand le format le rend impossible.",
  "Convert from {format}": "Convertir un fichier {format}",
  "to {format}": "en {format}",
  "Frequently asked questions": "Questions fréquentes",
  "Home": "Accueil",

  "Which image format should I convert to?": "Dans quel format convertir mon image ?",
  "JPG for photographs that need to work everywhere. PNG when you need transparency or a lossless file to keep editing. WebP when the destination is a web page and you want the smallest file that still supports transparency. AVIF is smaller again but far fewer applications can open it.":
    "En JPG pour les photos qui doivent s'ouvrir partout. En PNG si vous avez besoin de transparence ou d'un fichier sans perte pour continuer à le retoucher. En WebP si l'image est destinée à une page web et que vous voulez le fichier le plus léger qui gère encore la transparence. L'AVIF est encore plus léger, mais beaucoup moins d'applications savent l'ouvrir.",
  "Do these converters upload my images?": "Ces convertisseurs envoient-ils mes images sur un serveur ?",
  "Almost all of them run entirely inside your browser, so the image never leaves your device. The exceptions are formats a browser cannot decode or encode on its own — HEIC is the main one — and those pages say so directly.":
    "Presque tous fonctionnent entièrement dans votre navigateur : l'image ne quitte donc jamais votre appareil. Les exceptions sont les formats qu'un navigateur ne sait pas lire ou écrire seul (le HEIC en tête), et leurs pages l'indiquent clairement.",
  "Can I convert several files at once?": "Puis-je convertir plusieurs fichiers à la fois ?",
  "Yes. Every converter here accepts a batch: add as many files as you like and they come back as a single ZIP rather than as individual downloads.":
    "Oui. Chaque convertisseur accepte les lots : ajoutez autant de fichiers que vous voulez, vous les récupérez dans un seul ZIP au lieu de les télécharger un par un.",
  "Is there a file size limit?": "Y a-t-il une limite de taille de fichier ?",
  "There is no hard limit. Very large or very high-resolution images are handed to our server on most converters, since a browser tab cannot paint a canvas beyond a certain size — a 48-megapixel phone photo hits that ceiling even though it is only a few megabytes. BMP is the exception and always converts locally.":
    "Il n'y a pas de limite stricte. Sur la plupart des convertisseurs, les images très lourdes ou de très haute résolution sont confiées à notre serveur, car un onglet de navigateur ne peut pas dessiner un canvas au-delà d'une certaine taille : une photo de téléphone de 48 mégapixels atteint ce plafond alors qu'elle ne pèse que quelques mégaoctets. Le BMP fait exception et se convertit toujours en local.",
  "Do I lose quality when converting?": "Est-ce que je perds en qualité lors de la conversion ?",
  "It depends on the target. PNG is lossless, so nothing is lost in that step. JPG, WebP and AVIF are lossy and re-encode the image, though at sensible quality settings the change is not visible. Converting repeatedly between lossy formats does accumulate damage, so convert once from the best original you have.":
    "Cela dépend du format d'arrivée. Le PNG est sans perte : rien n'est perdu à cette étape. JPG, WebP et AVIF sont avec perte et réencodent l'image, mais avec un réglage de qualité raisonnable la différence ne se voit pas. Convertir encore et encore entre formats avec perte finit en revanche par dégrader l'image : convertissez une seule fois, à partir du meilleur original dont vous disposez.",
};
