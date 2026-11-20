import type { Dict } from "@/i18n/t";

/** French strings for the /fr forgot-password page (ForgotPasswordForm). */
export const frForgotPassword: Dict = {
  "Reset your password": "Réinitialiser votre mot de passe",
  "Enter your email and we'll send you a reset link.":
    "Saisissez votre adresse e-mail et nous vous enverrons un lien de réinitialisation.",
  "Remembered it?": "Vous vous en souvenez ?",
  "Log in": "Se connecter",
  "Email": "E-mail",
  "Send reset link": "Envoyer le lien",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  "Check your inbox": "Consultez votre boîte de réception",
  "If an account exists for {email}, we sent a password reset link.":
    "Si un compte existe pour {email}, nous vous avons envoyé un lien de réinitialisation du mot de passe.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "Le lien expire dans 1 heure. Vous ne l'avez pas reçu ? Vérifiez vos courriers indésirables ou réessayez.",
  "Back to login": "Retour à la connexion",
};
