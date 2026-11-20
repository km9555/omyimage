import type { Dict } from "@/i18n/t";

/**
 * French strings for the /fr signup page (SignupForm).
 *
 * The consent checkbox renders
 *   t("I agree to the") <Terms> t("and|between links") <Privacy>{t(".|sentence-end")}
 * French follows the English order (« J'accepte les Conditions d'utilisation
 * et la Politique de confidentialité. »), so the sentence-end key is a plain
 * full stop.
 */
export const frSignup: Dict = {
  "Create your account": "Créez votre compte",
  "Create a free account — upgrade anytime.": "Créez un compte gratuit et changez de forfait quand vous le souhaitez.",
  "Already have an account?": "Vous avez déjà un compte ?",
  "Log in": "Se connecter",
  "Name (optional)": "Nom (facultatif)",
  "How should we address you?": "Comment souhaitez-vous que nous vous appelions ?",
  "Email": "E-mail",
  "Password": "Mot de passe",
  "At least 6 characters": "6 caractères minimum",
  "Confirm password": "Confirmer le mot de passe",
  "Re-enter your password": "Saisissez à nouveau votre mot de passe",
  "I agree to the": "J'accepte les",
  "Terms": "Conditions d'utilisation",
  "and|between links": "et la",
  "Privacy Policy": "Politique de confidentialité",
  ".|sentence-end": ".", // i18n-same — French ends on a plain full stop
  "Create account": "Créer un compte",
  "Sign up with Google": "S'inscrire avec Google",
  "The free tools stay free and will never require an account.":
    "Les outils gratuits restent gratuits et n'exigeront jamais de compte.",

  // Confirmation state
  "Check your inbox": "Consultez votre boîte de réception",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Nous avons envoyé un lien de confirmation à {email}. Cliquez dessus pour activer votre compte.",
  "Wrong email?": "Mauvaise adresse ?",
  "Go back": "Retour",
  "Didn't get it? Check spam, or request a new link below.":
    "Vous ne l'avez pas reçu ? Vérifiez vos courriers indésirables ou demandez un nouveau lien ci-dessous.",
  "Back to login": "Retour à la connexion",
  "Resend confirmation email": "Renvoyer l'e-mail de confirmation",
  "Sending…": "Envoi en cours…",
  "Confirmation email sent — check your inbox.": "E-mail de confirmation envoyé : consultez votre boîte de réception.",
  "Could not resend. Please try again.": "Échec du renvoi. Veuillez réessayer.",

  // Confirmation state when the email could not be sent
  "Account created": "Compte créé",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Votre compte est prêt, mais nous n'avons pas pu envoyer le lien de confirmation à {email}.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Cela peut arriver si l'adresse contient une faute de frappe ou si notre serveur de messagerie est momentanément indisponible. Demandez un nouveau lien ci-dessous, ou revenez en arrière pour corriger l'adresse.",

  // Validation
  "Password must be at least 6 characters.": "Le mot de passe doit contenir au moins 6 caractères.",
  "Passwords don't match.": "Les mots de passe ne correspondent pas.",
  "Please accept the Terms and Privacy Policy.": "Veuillez accepter les Conditions d'utilisation et la Politique de confidentialité.",
};
