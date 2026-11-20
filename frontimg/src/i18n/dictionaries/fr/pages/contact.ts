import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr contact page (ContactBody).
 *
 * The support address itself is never translated. The legal page names in
 * the footer are links whose labels come from this file, so they read as the
 * French pages they point at.
 */
export const frContact: Dict = {
  "Contact": "Contact",
  "Get in touch": "Nous écrire",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "Nous lisons tous les messages et répondons en général sous deux jours ouvrés. Il y a de bonnes chances que la réponse se trouve déjà ci-dessous.",

  // Channels
  "Support & bug reports": "Assistance et signalement de bugs",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "Quelque chose ne fonctionne pas, ou un outil donne un résultat bizarre ? Indiquez-nous l'outil, votre navigateur et ce que vous attendiez : cela suffit généralement pour reproduire le problème.",
  "Privacy & legal": "Confidentialité et questions juridiques",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Questions sur le traitement de vos données, demandes de retrait de contenu ou tout ce qui concerne nos conditions d'utilisation.",
  "Business & partnerships": "Entreprises et partenariats",
  "Bulk use, integrations, or anything commercial.": "Utilisation à grande échelle, intégrations ou toute demande commerciale.",

  // No-form note
  "Why there's no contact form:": "Pourquoi il n'y a pas de formulaire de contact :",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "un formulaire nous obligerait à collecter et à conserver vos coordonnées sur nos serveurs. Par e-mail, l'échange reste entre vous et nous : rien vous concernant n'est stocké sur {site}.",

  // FAQ
  "Before you write": "Avant de nous écrire",
  "Is oMyImage free?": "oMyImage est-il gratuit ?",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "Oui. Les {n} outils sont gratuits et s'utilisent sans compte. Des forfaits payants sont prévus pour les fichiers plus volumineux et davantage d'utilisations de l'IA, mais rien n'est facturé aujourd'hui.",
  "Are my images uploaded?": "Mes images sont-elles envoyées sur un serveur ?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "Pour la plupart des outils, non : ils fonctionnent entièrement dans votre navigateur et le fichier ne quitte jamais votre appareil. Un envoi n'a lieu que pour les images trop grandes pour un onglet de navigateur, pour les outils d'IA et pour la conversion HEIC. Chacun de ces cas est signalé sur la page de l'outil.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "Pourquoi la conversion HEIC envoie-t-elle ma photo sur le serveur, alors que les autres outils ne le font pas ?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Le décodage HEIC exige une bibliothèque que sa licence ne nous permet pas de distribuer dans les navigateurs : cette conversion-là doit donc s'effectuer sur notre serveur. Le fichier est supprimé en une heure environ.",
  "How long do you keep processed files?": "Combien de temps conservez-vous les fichiers traités ?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Les résultats traités sur le serveur sont supprimés automatiquement en une heure environ. Nous ne faisons aucune sauvegarde et ne réutilisons jamais vos images.",
  "A tool says it isn't enabled on this server.": "Un outil indique qu'il n'est pas activé sur ce serveur.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "Ce sont les outils d'IA ou la conversion HEIC qui signalent que leur moteur n'est pas installé sur le serveur. Il s'agit de l'état du déploiement, pas d'un problème lié à votre fichier.",
  "Can I use the output commercially?": "Puis-je utiliser le résultat à des fins commerciales ?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Oui. Vos images restent les vôtres, et vous pouvez utiliser tout ce que vous créez pour n'importe quel usage légal.",

  // Footer links
  "Privacy Policy": "Politique de confidentialité",
  "Terms of Service": "Conditions d'utilisation",
  "Refund Policy": "Politique de remboursement",
  "Pricing": "Tarifs",
};
