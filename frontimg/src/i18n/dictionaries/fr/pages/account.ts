import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr account page (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page. "Plan" is « forfait » in French.
 * Confirmation messages avoid « connecté(e) » so nothing forces a gender.
 */
export const frAccount: Dict = {
  "My Account": "Mon compte",
  "Email": "E-mail",
  "Plan": "Forfait",
  "Free plan": "Forfait gratuit",
  "Allowance": "Quota",
  "Member since": "Membre depuis",

  // Display name
  "Display name": "Nom affiché",
  "Optional — we'll greet you by this name.": "Facultatif : nous vous saluerons par ce nom.",
  "Your name": "Votre nom",
  "Save": "Enregistrer",
  "Name updated.": "Nom mis à jour.",
  "Could not save name.": "Impossible d'enregistrer le nom.",

  // Password
  "Change password": "Changer le mot de passe",
  "Set a password": "Définir un mot de passe",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Votre compte utilise la connexion avec Google. Définissez un mot de passe pour pouvoir aussi vous connecter avec votre adresse e-mail.",
  "Current password": "Mot de passe actuel",
  "New password (at least 6 characters)": "Nouveau mot de passe (6 caractères minimum)",
  "Confirm new password": "Confirmer le nouveau mot de passe",
  "Update password": "Mettre à jour le mot de passe",
  "Set password": "Définir le mot de passe",
  "New password must be at least 6 characters.": "Le nouveau mot de passe doit contenir au moins 6 caractères.",
  "New passwords don't match.": "Les nouveaux mots de passe ne correspondent pas.",
  "Password changed.": "Mot de passe modifié.",
  "Password set.": "Mot de passe défini.",
  "Could not change password.": "Impossible de modifier le mot de passe.",

  // Plan card
  // AccountClient renders `A <strong>{plan}</strong>{" "}B`, so B must not open
  // on a colon (French would need a no-break space before it). A spaced dash
  // reads naturally: « Vous avez le forfait Free – … ».
  "You're on the": "Vous avez le forfait",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    "– {allowance} et traitement sur le serveur pour les fichiers jusqu'à {mb} Mo. Tout ce qui s'exécute dans votre navigateur est illimité, quel que soit le forfait.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Les forfaits payants ne sont pas encore proposés à l'achat : il n'y a donc rien à résilier et aucun moyen de paiement enregistré.",
  "See plans": "Voir les forfaits",
  "Owner": "Propriétaire",
  "Unlimited use": "Utilisation illimitée",

  "Sign out": "Se déconnecter",
  "Signed out.": "Déconnexion effectuée.",
  "Sign out of all devices": "Se déconnecter de tous les appareils",
  "Sign out of every device and browser where you're signed in, including this one?":
    "Fermer la session sur tous les appareils et navigateurs où elle est ouverte, y compris celui-ci ?",
  "Signed out of all devices.": "Déconnexion effectuée sur tous les appareils.",
  "Could not sign out of all devices.": "Impossible de fermer la session sur tous les appareils.",
};
