import type { Dict } from "@/i18n/t";

/** Spanish strings for the /es forgot-password page (ForgotPasswordForm). */
export const esForgotPassword: Dict = {
  "Reset your password": "Restablecer tu contraseña",
  "Enter your email and we'll send you a reset link.":
    "Escribe tu correo electrónico y te enviaremos un enlace para restablecerla.",
  "Remembered it?": "¿Ya la recordaste?",
  "Log in": "Iniciar sesión",
  "Email": "Correo electrónico",
  "Send reset link": "Enviar enlace",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  "Check your inbox": "Revisa tu bandeja de entrada",
  "If an account exists for {email}, we sent a password reset link.":
    "Si existe una cuenta para {email}, te hemos enviado un enlace para restablecer la contraseña.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "El enlace caduca en 1 hora. ¿No te llegó? Revisa la carpeta de spam o inténtalo de nuevo.",
  "Back to login": "Volver a iniciar sesión",
};
