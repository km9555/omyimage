import type { Dict } from "@/i18n/t";

/** Portuguese strings for /pt/esqueci-a-senha (ForgotPasswordForm). */
export const ptForgotPassword: Dict = {
  "Reset your password": "Redefinir sua senha",
  "Enter your email and we'll send you a reset link.":
    "Informe o seu e-mail e enviaremos um link para redefinir a senha.",
  "Remembered it?": "Lembrou a senha?",
  "Log in": "Entrar",
  "Email": "E-mail",
  "Send reset link": "Enviar link de redefinição",

  // Sent state — the wording stays hedged on purpose: confirming whether the
  // address exists would turn this form into an account-enumeration oracle.
  "Check your inbox": "Confira sua caixa de entrada",
  "If an account exists for {email}, we sent a password reset link.":
    "Se existir uma conta para {email}, enviamos um link para redefinir a senha.",
  "The link expires in 1 hour. Didn't get it? Check spam or try again.":
    "O link expira em 1 hora. Não chegou? Veja o spam ou tente de novo.",
  "Back to login": "Voltar para o login",
};
