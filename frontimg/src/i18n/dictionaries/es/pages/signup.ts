import type { Dict } from "@/i18n/t";

/**
 * Spanish strings for the /es signup page (SignupForm).
 *
 * The consent checkbox renders
 *   t("I agree to the") <Terms> t("and|between links") <Privacy>{t(".|sentence-end")}
 * Spanish follows the English order ("Acepto los Términos y la Política de
 * privacidad."), so the sentence-end key is a plain full stop.
 */
export const esSignup: Dict = {
  "Create your account": "Crea tu cuenta",
  "Create a free account — upgrade anytime.": "Crea una cuenta gratis y mejora tu plan cuando quieras.",
  "Already have an account?": "¿Ya tienes una cuenta?",
  "Log in": "Iniciar sesión",
  "Name (optional)": "Nombre (opcional)",
  "How should we address you?": "¿Cómo quieres que te llamemos?",
  "Email": "Correo electrónico",
  "Password": "Contraseña",
  "At least 6 characters": "Al menos 6 caracteres",
  "Confirm password": "Confirmar contraseña",
  "Re-enter your password": "Vuelve a escribir tu contraseña",
  "I agree to the": "Acepto los",
  "Terms": "Términos",
  "and|between links": "y la",
  "Privacy Policy": "Política de privacidad",
  ".|sentence-end": ".", // i18n-same — Spanish ends on a plain full stop
  "Create account": "Crear cuenta",
  "Sign up with Google": "Registrarse con Google",
  "The free tools stay free and will never require an account.":
    "Las herramientas gratuitas seguirán siendo gratis y nunca exigirán una cuenta.",

  // Confirmation state
  "Check your inbox": "Revisa tu bandeja de entrada",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Hemos enviado un enlace de confirmación a {email}. Haz clic en él para activar tu cuenta.",
  "Wrong email?": "¿Correo equivocado?",
  "Go back": "Volver",
  "Didn't get it? Check spam, or request a new link below.":
    "¿No te llegó? Revisa la carpeta de spam o solicita un enlace nuevo abajo.",
  "Back to login": "Volver a iniciar sesión",
  "Resend confirmation email": "Reenviar correo de confirmación",
  "Sending…": "Enviando…",
  "Confirmation email sent — check your inbox.": "Correo de confirmación enviado: revisa tu bandeja de entrada.",
  "Could not resend. Please try again.": "No se pudo reenviar. Inténtalo de nuevo.",

  // Confirmation state when the email could not be sent
  "Account created": "Cuenta creada",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Tu cuenta está lista, pero no pudimos enviar el enlace de confirmación a {email}.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Puede pasar si la dirección tiene un error de escritura o si nuestro servidor de correo no está disponible por un momento. Solicita un enlace nuevo abajo o vuelve atrás y corrige la dirección.",

  // Validation
  "Password must be at least 6 characters.": "La contraseña debe tener al menos 6 caracteres.",
  "Passwords don't match.": "Las contraseñas no coinciden.",
  "Please accept the Terms and Privacy Policy.": "Acepta los Términos y la Política de privacidad.",
};
