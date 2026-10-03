import type { Dict } from "@/i18n/t";

/**
 * Portuguese strings for /pt/contato (ContactBody).
 *
 * The support address itself is never translated, and neither are the legal
 * page names in the footer — those are links whose labels come from this file
 * so they read as the Portuguese pages they point at.
 */
export const ptContact: Dict = {
  "Contact": "Contato",
  "Get in touch": "Fale com a gente",
  "We read everything that comes in and usually reply within two business days. There's a good chance the answer is already below.":
    "A gente lê tudo o que chega e costuma responder em até dois dias úteis. É bem provável que a resposta já esteja aqui embaixo.",

  // Channels
  "Support & bug reports": "Suporte e relato de erros",
  "Something not working, or a tool giving an odd result? Tell us the tool, your browser, and what you expected — that's usually enough for us to reproduce it.":
    "Algo não está funcionando, ou uma ferramenta deu um resultado estranho? Conte qual ferramenta, qual navegador e o que você esperava — isso costuma bastar para reproduzirmos o problema.",
  "Privacy & legal": "Privacidade e jurídico",
  "Questions about how your data is handled, takedown requests, or anything relating to our terms.":
    "Dúvidas sobre como seus dados são tratados, pedidos de remoção de conteúdo ou qualquer coisa relacionada aos nossos termos.",
  "Business & partnerships": "Negócios e parcerias",
  "Bulk use, integrations, or anything commercial.": "Uso em volume, integrações ou qualquer assunto comercial.",

  // No-form note
  "Why there's no contact form:": "Por que não tem formulário de contato:",
  "a form would mean collecting and storing your details on our servers. Email keeps that between you and us — nothing about you is stored on {site} at all.":
    "um formulário significaria coletar e guardar os seus dados nos nossos servidores. O e-mail mantém isso entre você e a gente — nada sobre você fica armazenado no {site}.",

  // FAQ
  "Before you write": "Antes de escrever",
  "Is oMyImage free?": "O oMyImage é grátis?",
  "Yes. All {n} tools are free to use with no account. Paid plans are planned for larger files and more AI runs, but nothing is chargeable today.":
    "É. Todas as {n} ferramentas são gratuitas e não exigem conta. Planos pagos estão previstos para arquivos maiores e mais usos de IA, mas hoje não há nada cobrado.",
  "Are my images uploaded?": "Minhas imagens são enviadas?",
  "For most tools, no — they run entirely in your browser and the file never leaves your device. Uploads only happen for images too large for a browser tab to handle, the AI tools, and HEIC conversion. Each of those says so on its own page.":
    "Na maioria das ferramentas, não — elas rodam inteiramente no seu navegador e o arquivo nunca sai do seu aparelho. O envio só acontece com imagens grandes demais para uma aba do navegador dar conta, com as ferramentas de IA e com a conversão de HEIC. Cada uma delas avisa isso na própria página.",
  "Why does HEIC conversion upload my photo when other tools don't?":
    "Por que a conversão de HEIC envia a minha foto e as outras ferramentas não?",
  "Decoding HEIC needs a library we can't ship to browsers under its licence, so that one conversion has to run on our server. The file is deleted within about an hour.":
    "Decodificar HEIC exige uma biblioteca que não podemos entregar ao navegador por causa da licença dela, então essa conversão precisa rodar no nosso servidor. O arquivo é excluído em mais ou menos uma hora.",
  "How long do you keep processed files?": "Por quanto tempo vocês guardam os arquivos processados?",
  "Server-processed results are deleted automatically within roughly an hour. We keep no backups and never reuse your images.":
    "Os resultados processados no servidor são excluídos automaticamente em mais ou menos uma hora. Não guardamos backups e nunca reutilizamos suas imagens.",
  "A tool says it isn't enabled on this server.": "Uma ferramenta diz que não está disponível neste servidor.",
  "That's the AI tools or HEIC conversion reporting that their engine isn't installed on the backend. It's a deployment state, not a fault with your file.":
    "São as ferramentas de IA ou a conversão de HEIC avisando que o motor delas não está instalado no servidor. É uma situação de implantação, não um problema com o seu arquivo.",
  "Can I use the output commercially?": "Posso usar o resultado comercialmente?",
  "Yes. Your images stay yours, and you can use anything you produce for any lawful purpose.":
    "Pode. Suas imagens continuam suas, e você pode usar o que produzir para qualquer finalidade lícita.",

  // Footer links
  "Privacy Policy": "Política de Privacidade",
  "Terms of Service": "Termos de Serviço",
  "Refund Policy": "Política de Reembolso",
  "Pricing": "Preços",
};
