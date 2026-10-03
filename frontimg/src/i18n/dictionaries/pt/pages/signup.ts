import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/criar-conta (SignupForm).
 *
 * "and|between links" is the fragment between the Terms and Privacy links in
 * the consent checkbox — a context key, because "and" on its own would
 * collide with any other use of the word.
 */
export const ptSignup: Dict = {
  "Create your account": "Crie sua conta",
  "Create a free account — upgrade anytime.": "Crie uma conta grátis — dá para mudar de plano quando quiser.",
  "Already have an account?": "Já tem conta?",
  "Log in": "Entrar",
  "Name (optional)": "Nome (opcional)",
  "How should we address you?": "Como devemos chamar você?",
  "Email": "E-mail",
  "Password": "Senha",
  "At least 6 characters": "Pelo menos 6 caracteres",
  "Confirm password": "Confirme a senha",
  "Re-enter your password": "Digite a senha de novo",
  "I agree to the": "Eu concordo com os",
  "Terms": "Termos",
  "and|between links": "e a",
  "Privacy Policy": "Política de Privacidade",
  // Closes the consent sentence, which ends on a link. Portuguese ends a
  // sentence the same way English does, so this is deliberately identical to
  // the key — stated rather than left to the fallback, so `i18n:keys pt` stops
  // reporting it as missing. Hindi maps it to "।" (hi/common.ts).  (i18n-charset-ok: quotes another locale on purpose)
  ".|sentence-end": ".", // i18n-same
  "Create account": "Criar conta",
  "Sign up with Google": "Criar conta com o Google",
  "The free tools stay free and will never require an account.":
    "As ferramentas gratuitas continuam gratuitas e nunca vão exigir uma conta.",

  // Confirmation state
  "Check your inbox": "Confira sua caixa de entrada",
  "We sent a confirmation link to {email}. Click it to activate your account.":
    "Enviamos um link de confirmação para {email}. Clique nele para ativar a sua conta.",
  "Wrong email?": "Errou o e-mail?",
  "Go back": "Voltar",
  "Didn't get it? Check spam, or request a new link below.":
    "Não chegou? Veja o spam, ou peça um novo link abaixo.",
  "Back to login": "Voltar para o login",
  "Resend confirmation email": "Reenviar e-mail de confirmação",
  "Sending…": "Enviando…",
  "Confirmation email sent — check your inbox.": "E-mail de confirmação enviado — confira a sua caixa de entrada.",
  "Could not resend. Please try again.": "Não foi possível reenviar. Tente de novo.",

  // Confirmation state when the email could not be sent
  "Account created": "Conta criada",
  "Your account is ready, but we couldn't send the confirmation link to {email}.":
    "Sua conta está pronta, mas não conseguimos enviar o link de confirmação para {email}.",
  "This can happen if the address has a typo, or if our mail server is briefly unavailable. Request a new link below, or go back and correct the address.":
    "Isso pode acontecer se o endereço tiver um erro de digitação ou se o nosso servidor de e-mail estiver fora do ar por um momento. Peça um novo link abaixo, ou volte e corrija o endereço.",

  // Validation
  "Password must be at least 6 characters.": "A senha precisa ter pelo menos 6 caracteres.",
  "Passwords don't match.": "As senhas não são iguais.",
  "Please accept the Terms and Privacy Policy.": "Aceite os Termos e a Política de Privacidade.",
};
