import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/conta (AccountClient).
 *
 * The plan names (Free, Plus, Pro) are product names and stay in English, the
 * same decision as on the pricing page.
 */
export const ptAccount: Dict = {
  "My Account": "Minha conta",
  "Email": "E-mail",
  "Plan": "Plano",
  "Free plan": "Plano gratuito",
  "Allowance": "Cota",
  "Member since": "Membro desde",

  // Display name
  "Display name": "Nome de exibição",
  "Optional — we'll greet you by this name.": "Opcional — é assim que vamos chamar você.",
  "Your name": "Seu nome",
  "Save": "Salvar",
  "Name updated.": "Nome atualizado.",
  "Could not save name.": "Não foi possível salvar o nome.",

  // Password
  "Change password": "Alterar senha",
  "Set a password": "Definir uma senha",
  "Your account uses Google sign-in. Set a password to also log in with email.":
    "Sua conta usa login do Google. Defina uma senha para também entrar com e-mail.",
  "Current password": "Senha atual",
  "New password (at least 6 characters)": "Nova senha (pelo menos 6 caracteres)",
  "Confirm new password": "Confirme a nova senha",
  "Update password": "Atualizar senha",
  "Set password": "Definir senha",
  "New password must be at least 6 characters.": "A nova senha precisa ter pelo menos 6 caracteres.",
  "New passwords don't match.": "As novas senhas não são iguais.",
  "Password changed.": "Senha alterada.",
  "Password set.": "Senha definida.",
  "Could not change password.": "Não foi possível alterar a senha.",

  // Plan card
  "You're on the": "Você está no plano",
  "plan: {allowance}, and server processing for files up to {mb} MB. Everything that runs in your browser is unlimited on every plan.":
    ": {allowance} e processamento no servidor para arquivos de até {mb} MB. Tudo o que roda no seu navegador é ilimitado em todos os planos.",
  "Paid plans aren't available to buy yet, so there is nothing to cancel and no payment method stored.":
    "Os planos pagos ainda não estão à venda, então não há nada para cancelar e nenhuma forma de pagamento guardada.",
  "See plans": "Ver planos",

  "Signed out.": "Você saiu da conta.",
};
