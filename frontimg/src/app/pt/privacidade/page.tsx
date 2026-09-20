import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
  LegalTable,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Portuguese privacy policy — a written twin of /privacy (conversion.md §6.5),
 * with the same section ids. `#google-drive` in particular is linked from the
 * cookie policy in both languages.
 *
 * Section 7 exists to satisfy Google's OAuth verification, which audits the
 * privacy policy against the scope requested in lib/google-drive.ts. Two
 * things there are deliberately NOT translated:
 *   • the scope URI, which is an identifier; and
 *   • the name of the Google API Services User Data Policy, kept in English
 *     with the Limited Use sentence rendered close to Google's own wording —
 *     that sentence is prescribed, and a loose paraphrase in any language is
 *     what fails a review.
 * Keep this section in sync with the English one whenever the scope changes.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/privacy",
  locale: "pt",
  title: "Política de Privacidade | oMyImage",
  description:
    "Como o oMyImage trata suas imagens e seus dados. A maioria das ferramentas roda no seu navegador; os arquivos processados no servidor são excluídos em até uma hora.",
});

const toc = [
  { id: "summary", title: "Resumo" },
  { id: "images", title: "1. Suas imagens" },
  { id: "browser", title: "2. Processamento no navegador ou no servidor" },
  { id: "retention", title: "3. Retenção e exclusão" },
  { id: "collect", title: "4. O que coletamos" },
  { id: "storage", title: "5. Armazenamento no navegador" },
  { id: "subprocessors", title: "6. Serviços de terceiros" },
  { id: "google-drive", title: "7. Importação do Google Drive" },
  { id: "dropbox", title: "8. Importação do Dropbox" },
  { id: "future", title: "9. Recursos planejados" },
  { id: "rights", title: "10. Seus direitos" },
  { id: "children", title: "11. Crianças" },
  { id: "security", title: "12. Segurança" },
  { id: "changes", title: "13. Alterações" },
  { id: "contact", title: "14. Contato" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      locale="pt"
      title="Política de Privacidade"
      subtitle="O que acontece com as suas imagens e os seus dados quando você usa o oMyImage."
      updated="9 de setembro de 2026"
      toc={toc}
    >
      <LegalSection id="summary" title="Resumo">
        <LegalCallout>
          A maioria das ferramentas do oMyImage roda <strong>inteiramente dentro do seu
          navegador</strong> — suas imagens nunca são enviadas. Algumas poucas precisam do nosso
          servidor; esses arquivos são processados, devolvidos e excluídos em mais ou menos uma hora.
          Não exigimos conta, não exibimos anúncios e não fazemos rastreamento de nenhum tipo.
        </LegalCallout>
        <LegalP>
          Esta política explica isso em detalhe. Ela descreve o que o serviço faz hoje e deixa claro
          onde algo é planejado em vez de estar no ar.
        </LegalP>
      </LegalSection>

      <LegalSection id="images" title="1. Suas imagens">
        <LegalP>
          Suas imagens são suas. Não reivindicamos a propriedade de nada que você processa, não
          usamos suas imagens para treinar modelos e não vendemos, compartilhamos, publicamos nem
          reutilizamos essas imagens para nenhuma finalidade.
        </LegalP>
        <LegalP>
          Se a imagem chega a sair do seu aparelho depende da ferramenta que você usa — veja a seção
          seguinte.
        </LegalP>
      </LegalSection>

      <LegalSection id="browser" title="2. Processamento no navegador ou no servidor">
        <LegalSubsection title="Processado no seu navegador (sem envio)">
          <LegalP>
            A maioria das ferramentas usa o próprio motor de canvas do seu navegador. A imagem é lida
            do seu aparelho para a memória, processada localmente e salva por você. Nada é
            transmitido para nós, e essas ferramentas continuam funcionando mesmo se o nosso servidor
            estiver fora do ar.
          </LegalP>
          <LegalP>
            Isso cobre recortar, redimensionar, girar, comprimir, converter, marca d&apos;água, meme,
            o editor completo, desfoque, bordas, recorte em círculo, juntar imagens, ferramentas de
            GIF, ferramentas de cor, leitura de metadados e imagem para PDF, em arquivos de até
            15&nbsp;MB.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="Processado no nosso servidor (enviado)">
          <LegalP>Sua imagem é enviada ao nosso servidor em três situações:</LegalP>
          <LegalUl>
            <li>
              <strong>Arquivos maiores que 15&nbsp;MB</strong> — o processamento no navegador fica
              instável nesse tamanho, então o trabalho passa automaticamente para o nosso servidor.
            </li>
            <li>
              <strong>As ferramentas de IA</strong> — Remover fundo e Melhorar qualidade da imagem
              rodam modelos pesados demais para um navegador.
            </li>
            <li>
              <strong>HEIC para JPG, em qualquer tamanho.</strong> Esta é uma restrição de licença, e
              não técnica: os únicos decodificadores de HEIC de código aberto não podem ser
              distribuídos para navegadores pela licença deles, então a conversão precisa acontecer
              no nosso servidor.
            </li>
          </LegalUl>
          <LegalP>
            Cada uma dessas ferramentas informa na própria página que faz envio. Se uma ferramenta
            não diz isso, ela não envia nada.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="retention" title="3. Retenção e exclusão">
        <LegalP>
          Imagens processadas no seu navegador nunca chegam até nós, então não há nada para reter.
        </LegalP>
        <LegalP>
          Nas imagens processadas no servidor, o arquivo enviado fica guardado apenas pelo tempo da
          conversão e depois é descartado. O resultado fica armazenado por pouco tempo, atrás de um
          link de download privado, e é excluído automaticamente em aproximadamente uma hora. Não
          guardamos backups dos seus arquivos e não os arquivamos.
        </LegalP>
        <LegalCallout>
          Os links de download são impossíveis de adivinhar, mas não exigem autenticação. Trate o
          link como um segredo — qualquer pessoa com ele consegue baixar aquele arquivo até ele
          expirar.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="collect" title="4. O que coletamos">
        <LegalP>
          Não pedimos seu nome, e-mail nem qualquer outro dado pessoal para usar as ferramentas. Não
          há conta, newsletter nem formulário de contato neste site.
        </LegalP>
        <LegalP>
          Como qualquer serviço na web, o nosso servidor e os nossos provedores de hospedagem
          processam automaticamente dados técnicos básicos para entregar o site — endereço IP,
          identificação do navegador, URL solicitada e data e hora. Isso é usado para atender à
          solicitação, aplicar limites de requisição e detectar abuso. Não montamos perfis a partir
          disso e não combinamos esses dados com mais nada.
        </LegalP>
        <LegalP>
          Usamos o <strong>Google Analytics 4</strong>, e somente com o seu consentimento. Enquanto
          você não aceitar os cookies de análise, o script nem é solicitado — ele não é carregado e
          depois desligado, ele simplesmente não existe, então nenhum cookie de análise é criado para
          quem recusou ou nunca respondeu ao aviso. O que ele coleta é agregado: quais ferramentas são
          usadas, quais páginas dão erro, de onde as visitas vêm mais ou menos. Não usamos isso para
          identificar você e não ligamos esses dados a nada do que você processa.
        </LegalP>
        <LegalP>
          <strong>Não exibimos publicidade e não fazemos rastreamento entre sites.</strong> Não há
          gravação de sessão, pixel de anúncio nem rede de publicidade no oMyImage. Você pode mudar
          ou retirar o seu consentimento de análise a qualquer momento em{" "}
          <strong>Configurações de cookies</strong>, no rodapé — veja a nossa{" "}
          <Link href={localeHref("/cookies", "pt")} className="text-secondary hover:underline">
            Política de Cookies
          </Link>{" "}
          para os detalhes.
        </LegalP>
      </LegalSection>

      <LegalSection id="storage" title="5. Armazenamento no navegador">
        <LegalP>
          O oMyImage não usa cookies próprios. Usamos o armazenamento local do seu navegador para
          algumas preferências funcionais, que ficam no seu aparelho e nunca são enviadas para nós:
        </LegalP>
        <LegalUl>
          <li>
            <code>theme</code> — se você escolheu o modo claro ou escuro.
          </li>
          <li>
            <code>omyimage_cookie_consent</code> e <code>omyimage_cookie_prefs</code> — a sua
            resposta ao aviso de cookies.
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
          Limpar os dados do site no seu navegador remove todos eles. Nada aqui identifica você. Os
          cookies definidos por terceiros — a Cloudflare e, depois que você permitir, o Google
          Analytics — estão listados na nossa{" "}
          <Link href={localeHref("/cookies", "pt")} className="text-secondary hover:underline">
            Política de Cookies
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="subprocessors" title="6. Serviços de terceiros">
        <LegalP>
          Mantemos os terceiros no mínimo. Estes são os únicos envolvidos no funcionamento do
          oMyImage:
        </LegalP>
        <LegalTable
          rows={[
            ["Cloudflare", "Hospedagem do site, CDN e proteção contra DDoS", "cloudflare.com/privacypolicy"],
            ["Contabo", "Hospedagem do servidor das ferramentas que processam no nosso servidor", "contabo.com/en/legal/privacy-policy"],
            ["Google Fonts", "Serve a fonte de ícones usada na interface", "policies.google.com/privacy"],
            ["Google Analytics", "Medição agregada de uso, carregada só se você aceitar os cookies de análise", "policies.google.com/privacy"],
            ["Google Drive (opcional)", "Importa só os arquivos que você escolher, e só quando você usar — veja a seção 7", "policies.google.com/privacy"],
            ["Dropbox (opcional)", "Importa só os arquivos que você escolher, e só quando você usar — veja a seção 8", "dropbox.com/privacy"],
          ]}
        />
        <LegalP>
          Como a fonte de ícones é solicitada à CDN do Google, o Google recebe o seu endereço IP e a
          identificação do seu navegador quando uma página carrega, como aconteceria em qualquer site
          que use essa fonte. As nossas duas fontes de texto são servidas pelo nosso próprio domínio e
          não envolvem terceiros.
        </LegalP>
      </LegalSection>

      <LegalSection id="google-drive" title="7. Importação do Google Drive">
        <LegalP>
          Conectar o Google é opcional. Todas as ferramentas do oMyImage funcionam sem isso, e nada
          no site pede que você faça login. A conexão existe para um único recurso: importar uma
          imagem que você já guarda no Google Drive, em vez de enviá-la do seu aparelho.
        </LegalP>

        <LegalSubsection title="O que pedimos e o que isso permite">
          <LegalP>
            Quando você escolhe &quot;Importar do Google Drive&quot;, pedimos uma permissão bem
            restrita:{" "}
            {/* break-all: the full scope URI is one 42-character unbreakable
                token, wider than the prose column on a phone. */}
            <code className="break-all">https://www.googleapis.com/auth/drive.file</code>. Esse
            escopo dá acesso apenas aos arquivos específicos que você selecionar no seletor de
            arquivos do próprio Google. Ele não nos deixa listar, navegar, pesquisar nem abrir mais
            nada no seu Drive, e não nos dá nenhuma visão das suas pastas, dos nomes dos seus
            arquivos ou do seu armazenamento como um todo.
          </LegalP>
          <LegalP>
            Na prática, a permissão também é de mão única: nós lemos o arquivo que você escolheu. Não
            criamos, renomeamos, modificamos, movemos nem excluímos nada no seu Drive.
          </LegalP>
        </LegalSubsection>

        <LegalSubsection title="O que acontece com o arquivo e com o token">
          <LegalUl>
            <li>
              O token de acesso que o Google emite fica na memória do seu navegador apenas durante
              aquela visita. Ele nunca é transmitido aos nossos servidores, nunca é gravado em disco
              e some quando você fecha a aba.
            </li>
            <li>
              O arquivo que você escolhe é baixado do Google direto para o seu navegador. Ele não
              passa pelos nossos servidores no caminho.
            </li>
            <li>
              A partir daí o arquivo é tratado exatamente como um que você arrastou do seu
              computador — processado no seu navegador, ou enviado ao nosso servidor apenas se você
              escolheu uma ferramenta que avisa que faz envio, sob as mesmas regras de retenção
              descritas nas seções 2 e 3.
            </li>
            <li>
              Não guardamos cópia dos seus arquivos do Google, não os indexamos e não mantemos
              registro do que você importou.
            </li>
          </LegalUl>
        </LegalSubsection>

        <LegalCallout>
          O uso e a transferência, pelo oMyImage, de informações recebidas das APIs do Google para
          qualquer outro aplicativo seguirão a{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            Google API Services User Data Policy
          </a>
          , incluindo os requisitos de Uso Limitado (Limited Use). Em particular, não usamos dados de
          usuário do Google para publicidade, não vendemos nem transferimos esses dados e não os
          usamos para treinar modelos generalizados ou de inteligência artificial.
        </LegalCallout>

        <LegalP>
          Você pode retirar esse acesso quando quiser, sem afetar o resto do site, na sua{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            página de permissões da Conta do Google
          </a>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="dropbox" title="8. Importação do Dropbox">
        <LegalP>
          Conectar o Dropbox é opcional e funciona igual ao Google Drive: existe só para você
          escolher uma imagem que já guarda no Dropbox em vez de enviá-la do seu aparelho. Todas as
          ferramentas do oMyImage funcionam sem isso, e nada no site pede que você faça login.
        </LegalP>

        <LegalP>
          Escolher &quot;Dropbox&quot; abre o seletor de arquivos do próprio Dropbox numa janela
          pop-up. A navegação e a escolha acontecem inteiramente dentro dessa janela, que é do
          Dropbox — nunca vemos as suas pastas, os nomes dos seus arquivos nem nada que você não
          escolher.
        </LegalP>

        <LegalUl>
          <li>
            Nenhuma conta é vinculada e nenhum token de acesso é emitido. Diferente da importação do
            Google Drive, não há permissão para conceder nem nada para revogar depois.
          </li>
          <li>
            O Dropbox devolve um link de download temporário para cada arquivo que você escolheu,
            válido por algumas horas. Seu navegador usa o link na hora e depois o esquece; ele nunca
            é enviado aos nossos servidores nem gravado em disco.
          </li>
          <li>
            O arquivo é baixado do Dropbox direto para o seu navegador. Ele não passa pelos nossos
            servidores no caminho.
          </li>
          <li>
            A partir daí o arquivo é tratado exatamente como um que você arrastou do seu computador —
            processado no seu navegador, ou enviado ao nosso servidor apenas se você escolheu uma
            ferramenta que avisa que faz envio, sob as mesmas regras de retenção descritas nas seções
            2 e 3.
          </li>
          <li>
            Não guardamos cópia dos seus arquivos do Dropbox, não os indexamos e não mantemos
            registro do que você importou.
          </li>
        </LegalUl>

        <LegalP>
          Para o Dropbox, isso é uma visita ao Dropbox, e a política de privacidade dele vale para o
          que acontece dentro daquela janela. O código do Dropbox só é carregado quando você toca no
          botão, então quem nunca usa o recurso nunca tem contato com o Dropbox.
        </LegalP>
      </LegalSection>

      <LegalSection id="future" title="9. Recursos planejados">
        <LegalP>
          Alguns recursos estão planejados, mas ainda não estão no ar. Descrevemos aqui com
          antecedência para esta política continuar honesta quando eles chegarem, e para você saber o
          que esperar. <strong>Nada do que segue está ativo hoje.</strong>
        </LegalP>
        <LegalUl>
          <li>
            <strong>Contas.</strong> Se lançarmos login, coletaríamos um endereço de e-mail e uma
            senha guardada com hash seguro, apenas para autenticar você e associar o plano que você
            tiver. Você poderia excluir a sua conta e os dados dela.
          </li>
          <li>
            <strong>Planos pagos.</strong> Se lançarmos planos pagos, o pagamento seria processado
            por um processador de pagamentos terceiro. Os dados do cartão iriam direto para esse
            processador e nunca chegariam nem ficariam guardados nos nossos servidores. Receberíamos
            apenas uma referência da transação e o status dela.
          </li>
        </LegalUl>
        <LegalP>
          Quando algum desses recursos entrar no ar, esta política será atualizada e a data de
          &quot;última atualização&quot; no topo vai mudar antes de o recurso ser ligado.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="10. Seus direitos">
        <LegalP>
          Dependendo de onde você mora, você pode ter direito de acessar, corrigir, exportar ou
          excluir dados pessoais mantidos sobre você, e de se opor a certos tratamentos. Como não
          operamos contas e não retemos as suas imagens, na prática normalmente não temos nada sobre
          você que pudesse ser recuperado.
        </LegalP>
        <LegalP>
          Se você acredita que mantemos dados relativos a você, fale com a gente pelos canais da
          nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>{" "}
          e responderemos em prazo razoável. Você também pode apresentar reclamação à autoridade de
          proteção de dados do seu país — no Brasil, a ANPD.
        </LegalP>
      </LegalSection>

      <LegalSection id="children" title="11. Crianças">
        <LegalP>
          O oMyImage é um utilitário de uso geral e não é direcionado a crianças. Não coletamos
          conscientemente dados pessoais de crianças. Como usar as ferramentas não exige conta nem
          informação pessoal, normalmente não há nada a coletar.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="12. Segurança">
        <LegalP>
          O site é servido por HTTPS. Os envios ao nosso servidor são criptografados em trânsito,
          processados de forma isolada e excluídos no prazo descrito acima. Aplicamos limites de
          requisição e de tamanho de arquivo para proteger o serviço.
        </LegalP>
        <LegalP>
          Nenhum serviço online pode prometer segurança perfeita. Por favor, não envie material que
          você não possa correr o risco de ver exposto na hipótese improvável de uma violação — e
          lembre que, na maioria das ferramentas, a opção mais segura já é o padrão, porque o arquivo
          nunca sai do seu aparelho.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="13. Alterações">
        <LegalP>
          Podemos atualizar esta política conforme o serviço evolui. A data de &quot;última
          atualização&quot; no topo desta página sempre reflete a versão atual. Mudanças relevantes
          aparecem aqui antes de entrar em vigor.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="14. Contato">
        <LegalP>
          Dúvidas sobre esta política, ou sobre como os seus dados são tratados, podem ser enviadas
          pelos canais da nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>
          . Veja também os nossos{" "}
          <Link href={localeHref("/terms", "pt")} className="text-secondary hover:underline">
            Termos de Serviço
          </Link>
          , que regem o seu uso do {SITE.name}.
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
