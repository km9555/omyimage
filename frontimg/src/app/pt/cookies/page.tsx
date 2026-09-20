import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";

/**
 * Portuguese cookie policy — the same structure and the same section ids as
 * /cookies, with only the prose translated. The ids are the TOC anchors and a
 * contract across locales: never rename one on a single side.
 *
 * A legal page is written, not key-translated (conversion.md §6.5): the prose
 * is dense with inline <code> and <strong>, and a dictionary of sentence
 * fragments would either lose that markup or force Portuguese into English
 * word order. oMyPDF reached the same conclusion for its four locales.
 *
 * Storage keys, cookie names and domains stay in Latin — the reader has to
 * match them against what their own browser shows. Browser MENU paths ARE
 * translated, because a Brazilian running Chrome in Portuguese sees
 * "Privacidade e segurança".
 */
export const metadata: Metadata = {
  ...pageMetadata({
    englishPath: "/cookies",
    locale: "pt",
    title: "Política de Cookies | oMyImage",
    description:
      "O que o oMyImage guarda no seu navegador, por quê e como controlar. Só o necessário por padrão — a análise de uso fica desligada até você permitir.",
  }),
  robots: { index: true, follow: true },
};

const toc = [
  { id: "what", title: "1. O que são cookies" },
  { id: "consent", title: "2. Seu consentimento" },
  { id: "types", title: "3. O que guardamos" },
  { id: "third", title: "4. Cookies de terceiros" },
  { id: "control", title: "5. Como controlar os cookies" },
  { id: "changes", title: "6. Alterações nesta política" },
  { id: "contact", title: "7. Contato" },
];

export default function CookiesPage() {
  return (
    <LegalShell
      locale="pt"
      title="Política de Cookies"
      subtitle="O que o oMyImage guarda no seu navegador, por que guarda e como mudar de ideia."
      updated="19 de agosto de 2026"
      toc={toc}
    >
      <LegalSection id="what" title="1. O que são cookies">
        <LegalCallout>
          O oMyImage não usa cookies próprios. O que ele guarda é um punhado de entradas no{" "}
          <strong>armazenamento local</strong>, que nunca saem do seu aparelho, e — só se você
          permitir — cookies de análise do Google. Suas imagens nunca entram nessa história.
        </LegalCallout>
        <LegalP>
          Cookies são pequenos arquivos de texto que um site guarda no seu aparelho quando você o
          visita. Eles são muito usados para fazer o site funcionar, lembrar suas preferências e
          mostrar a quem mantém o site como ele está sendo usado. Um cookie pode ser de
          &ldquo;sessão&rdquo;, apagado quando você fecha o navegador, ou &ldquo;persistente&rdquo;,
          que fica por um período determinado ou até você apagá-lo.
        </LegalP>
        <LegalP>
          Tecnologias próximas incluem o armazenamento web (<code>localStorage</code> e{" "}
          <code>sessionStorage</code>) e os pixels de rastreamento. Esta política usa a palavra
          &ldquo;cookies&rdquo; para cobrir todas elas, porque a pergunta prática — o que fica no seu
          aparelho e quem consegue ler — é a mesma.
        </LegalP>
      </LegalSection>

      <LegalSection id="consent" title="2. Seu consentimento">
        <LegalP>
          Na sua primeira visita, um aviso de consentimento aparece no rodapé da página. Nada
          opcional é carregado antes de você responder. Você tem três opções:
        </LegalP>
        <LegalUl>
          <li>
            <strong>Aceitar todos</strong> — o armazenamento necessário mais a análise de uso. O
            Google Analytics carrega e conseguimos ver, de forma agregada, quais ferramentas as
            pessoas usam.
          </li>
          <li>
            <strong>Recusar todos</strong> — só o armazenamento necessário. O Google Analytics nunca
            é carregado e nenhum dado de análise é coletado da sua visita.
          </li>
          <li>
            <strong>Personalizar</strong> — escolha categoria por categoria. O armazenamento
            necessário não pode ser desligado, porque sem ele o site não consegue lembrar do seu tema
            nem, aliás, desta sua escolha.
          </li>
        </LegalUl>
        <LegalP>
          Sua resposta fica guardada no seu aparelho em{" "}
          <code>omyimage_cookie_consent</code> e <code>omyimage_cookie_prefs</code>. Você pode mudar
          a qualquer momento pelo link <strong>Configurações de cookies</strong> no rodapé de
          qualquer página. Como scripts de análise só podem ser adicionados ou removidos num
          carregamento novo da página, mudar essa configuração específica recarrega a página.
        </LegalP>
        <LegalP>
          Não usamos cookies de publicidade nem de rastreamento entre sites, e não compartilhamos os
          seus dados com redes de anúncios.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. O que guardamos">
        <LegalSubsection title="Necessários — sempre ativos">
          <LegalP>
            Estas são entradas de <code>localStorage</code>, e não cookies: elas são escritas pelo
            site, lidas apenas pelo site e nunca transmitidas para nós nem para ninguém. Não podem
            ser desligadas, porque são o que faz a interface lembrar de qualquer coisa. Limpar os
            dados do site no seu navegador remove todas elas.
          </LegalP>
          <LegalUl>
            <li>
              <code>theme</code> — se você escolheu o modo claro ou escuro.
            </li>
            <li>
              <code>omyimage_cookie_consent</code> e <code>omyimage_cookie_prefs</code> — a sua
              resposta ao aviso de consentimento, para você não ser perguntado em toda página.
            </li>
            <li>
              <code>omyimage:favorites</code> e as ferramentas usadas recentemente — para os seus
              atalhos continuarem ali.
            </li>
            <li>
              <code>omyimage:currency</code> — a moeda que você selecionou na página de preços.
            </li>
            <li>
              <code>omyimage:premium-usage</code> — uma contagem local de usos de ferramentas premium
              feitos hoje.
            </li>
          </LegalUl>
          <LegalP>
            A Cloudflare, que serve e protege o site, também pode definir cookies estritamente
            necessários para limitar a taxa de requisições e detectar robôs. Eles estão cobertos na
            seção 4.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Análise de uso — só com o seu consentimento">
          <LegalP>
            Se você aceitar a análise de uso, carregamos o Google Analytics 4 para entender de forma
            agregada como o site é usado: quais ferramentas são populares, quais páginas dão erro, de
            onde as visitas vêm mais ou menos. Usamos isso para decidir o que construir e o que
            corrigir. Nunca é usado para identificar você, e não tentamos ligar esses dados a nada do
            que você processa.
          </LegalP>
          <LegalUl>
            <li>
              <code>_ga</code>, <code>_ga_*</code> — distinguem usuários e sessões únicas. Expiram em
              2 anos.
            </li>
            <li>
              <code>_gid</code> — distingue usuários dentro de uma janela de 24 horas. Expira em 24
              horas.
            </li>
          </LegalUl>
          <LegalP>
            Se você recusar a análise de uso, ou simplesmente nunca responder ao aviso, o script do
            Google Analytics nem chega a ser solicitado — esses cookies nunca são criados, em vez de
            serem criados e depois ignorados.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Publicidade — não usamos">
          <LegalP>
            Nós <strong>não</strong> usamos cookies de publicidade nem de rastreamento. O oMyImage
            não exibe anúncios e não compartilha comportamento de navegação com redes de anúncios. A
            opção de publicidade existe no aviso de consentimento para que a sua preferência já
            esteja registrada caso isso mude algum dia; hoje ela não controla nada.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="third" title="4. Cookies de terceiros">
        <LegalP>
          Estes são os únicos terceiros que podem guardar algo no seu navegador dentro do oMyImage.
          Cada um é regido pela própria política:
        </LegalP>
        <LegalTable
          rows={[
            [
              "Cloudflare",
              "Cookies estritamente necessários de segurança e desempenho (limite de requisições, detecção de robôs)",
              "cloudflare.com/privacypolicy",
            ],
            [
              "Google Analytics",
              "Cookies de análise de uso, definidos só depois de você aceitar a análise",
              "policies.google.com/privacy",
            ],
            [
              "Google Fonts",
              "Serve a fonte de ícones. Não define cookies, mas o Google recebe o seu endereço IP, como aconteceria em qualquer site que use a fonte",
              "policies.google.com/privacy",
            ],
            [
              "Google Drive (opcional)",
              "Só se você usar a importação do Drive. O token de acesso fica na memória durante a visita e nunca é armazenado",
              "policies.google.com/privacy",
            ],
            [
              "Dropbox (opcional)",
              "Só se você usar a importação do Dropbox. O seletor dele roda numa janela do próprio Dropbox; nenhuma conta é vinculada e nenhum token é emitido",
              "dropbox.com/privacy",
            ],
          ]}
        />
        <LegalP>
          As importações da nuvem estão descritas por completo nas seções 7 e 8 da nossa{" "}
          <Link href={`${localeHref("/privacy", "pt")}#google-drive`} className="text-secondary hover:underline">
            Política de Privacidade
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="control" title="5. Como controlar os cookies">
        <LegalSubsection title="No oMyImage">
          <LegalP>
            Use o link <strong>Configurações de cookies</strong> no rodapé de qualquer página. Ele
            reabre o aviso de consentimento com as suas escolhas atuais carregadas, então dá para
            mudar uma categoria sem zerar as outras.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="No seu navegador">
          <LegalP>
            Todo navegador conhecido deixa você ver, bloquear e apagar cookies e dados de sites.
            Bloquear tudo também apaga as entradas necessárias listadas acima, o que significa que o
            site vai esquecer o seu tema e perguntar sobre cookies de novo:
          </LegalP>
          <LegalUl>
            <li>
              <strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies de terceiros
            </li>
            <li>
              <strong>Firefox:</strong> Configurações → Privacidade e Segurança → Cookies e dados de
              sites
            </li>
            <li>
              <strong>Safari:</strong> Ajustes → Privacidade → Gerenciar dados de sites
            </li>
            <li>
              <strong>Edge:</strong> Configurações → Cookies e permissões de site → Gerenciar e
              excluir cookies
            </li>
          </LegalUl>
        </LegalSubsection>
        <LegalSubsection title="Recusar o Google Analytics em todos os sites">
          <LegalP>
            Para recusar o Google Analytics em todos os sites, e não só neste, instale o{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              complemento do navegador de desativação do Google Analytics
            </a>
            .
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="changes" title="6. Alterações nesta política">
        <LegalP>
          Podemos atualizar esta política conforme o serviço muda. A data de
          &ldquo;última atualização&rdquo; no topo desta página sempre reflete a versão atual, e
          mudanças relevantes aparecem aqui antes de entrar em vigor.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Contato">
        <LegalP>
          Dúvidas sobre cookies ou sobre esta política podem ser enviadas pelos canais da nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>
          . Veja também a nossa{" "}
          <Link href={localeHref("/privacy", "pt")} className="text-secondary hover:underline">
            Política de Privacidade
          </Link>{" "}
          e os{" "}
          <Link href={localeHref("/terms", "pt")} className="text-secondary hover:underline">
            Termos de Serviço
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
