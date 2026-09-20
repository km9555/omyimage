import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalSubsection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Portuguese terms of service — a written twin of /terms (conversion.md §6.5),
 * with the same section ids, the same numbering and the same cross-references
 * (section 14 names sections 5, 8, 9, 10, 11, 15 and 16, so the order is a
 * contract, not a preference).
 *
 * The disclaimer and liability sections keep their capitalisation: in those
 * two the all-caps IS the legal convention being followed, and dropping it on
 * one locale would be a substantive change rather than a stylistic one.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/terms",
  locale: "pt",
  title: "Termos de Serviço | oMyImage",
  description:
    "Os termos que regem o uso do oMyImage — uso aceitável, tratamento de arquivos, isenções de garantia, limitação de responsabilidade e lei aplicável.",
});

const toc = [
  { id: "acceptance", title: "1. Aceitação dos Termos" },
  { id: "service", title: "2. Descrição do Serviço" },
  { id: "eligibility", title: "3. Quem pode usar" },
  { id: "acceptable", title: "4. Uso aceitável" },
  { id: "content", title: "5. Seu conteúdo" },
  { id: "files", title: "6. Tratamento e exclusão de arquivos" },
  { id: "availability", title: "7. Disponibilidade e mudanças" },
  { id: "warranties", title: "8. Isenção de garantias" },
  { id: "liability", title: "9. Limitação de responsabilidade" },
  { id: "indemnity", title: "10. Indenização" },
  { id: "ip", title: "11. Propriedade intelectual" },
  { id: "thirdparty", title: "12. Software de terceiros e links" },
  { id: "billing", title: "13. Planos pagos e cobrança" },
  { id: "termination", title: "14. Encerramento" },
  { id: "governing", title: "15. Lei aplicável" },
  { id: "misc", title: "16. Disposições gerais" },
  { id: "contact", title: "17. Contato" },
];

export default function TermsPage() {
  return (
    <LegalShell
      locale="pt"
      title="Termos de Serviço"
      subtitle={`O acordo entre você e o ${SITE.name} quando você usa este site e as ferramentas dele.`}
      updated="3 de agosto de 2026"
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Aceitação dos Termos">
        <LegalP>
          Ao acessar ou usar o {SITE.name} (o &quot;Serviço&quot;), você concorda em se vincular a
          estes Termos de Serviço (os &quot;Termos&quot;). Se você não concorda com estes Termos, não
          deve usar o Serviço.
        </LegalP>
        <LegalP>
          Estes Termos valem para todo visitante, tendo conta ou não, pagando por algo ou não.
        </LegalP>
      </LegalSection>

      <LegalSection id="service" title="2. Descrição do Serviço">
        <LegalP>
          O Serviço oferece utilitários de imagem online — comprimir, redimensionar, recortar,
          converter, editar e operações relacionadas. A maioria das ferramentas roda inteiramente
          dentro do seu navegador. Algumas exigem processamento nos nossos servidores, como descrito
          na seção 6 e na nossa{" "}
          <Link href={localeHref("/privacy", "pt")} className="text-secondary hover:underline">
            Política de Privacidade
          </Link>
          .
        </LegalP>
        <LegalP>
          O Serviço é oferecido &quot;no estado em que se encontra&quot; e &quot;conforme
          disponível&quot;. Podemos adicionar, alterar, suspender ou remover qualquer ferramenta ou
          recurso a qualquer momento.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligibility" title="3. Quem pode usar">
        <LegalP>
          Você precisa ter capacidade legal para celebrar um acordo vinculante na sua jurisdição para
          usar o Serviço. Se você usa o Serviço em nome de uma organização, declara que está
          autorizado a vincular essa organização a estes Termos.
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable" title="4. Uso aceitável">
        <LegalP>Você concorda em não usar o Serviço para:</LegalP>
        <LegalUl>
          <li>
            enviar, processar ou distribuir qualquer material ilícito, ou que você não tenha o
            direito de usar — incluindo material que viole direitos autorais, marcas, privacidade ou
            direito de imagem;
          </li>
          <li>
            processar material de abuso sexual infantil, imagens íntimas não consentidas ou qualquer
            conteúdo que retrate ou promova violência, terrorismo ou atividade ilícita;
          </li>
          <li>
            criar ou manipular imagens com a intenção de enganar, fraudar, se passar por uma pessoa
            real ou forjar identidade ou documentos oficiais;
          </li>
          <li>
            tentar obter acesso não autorizado ao Serviço, aos seus servidores ou a sistemas
            relacionados, ou sondar, varrer ou testar a vulnerabilidade deles;
          </li>
          <li>
            interferir no Serviço ou interrompê-lo, inclusive por coleta automatizada, tentativas de
            negação de serviço ou contorno de limites de requisição, de tamanho de arquivo ou de
            cota de uso;
          </li>
          <li>
            revender, sublicenciar ou redistribuir comercialmente o próprio Serviço, ou usá-lo para
            construir um serviço concorrente; ou
          </li>
          <li>usar o Serviço de qualquer forma que viole lei ou regulamento aplicável.</li>
        </LegalUl>
        <LegalCallout>
          Você é o único responsável pelo conteúdo que processa e por garantir que tem o direito
          legal de fazê-lo. Podemos bloquear, limitar ou recusar acesso a qualquer pessoa que
          acreditemos, de forma razoável, estar violando estes Termos, sem aviso e sem
          responsabilidade.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="content" title="5. Seu conteúdo">
        <LegalP>
          Você mantém toda a titularidade das imagens e arquivos que processa (&quot;Seu
          Conteúdo&quot;). Não reivindicamos propriedade sobre eles.
        </LegalP>
        <LegalP>
          Para as ferramentas que processam nos nossos servidores, você nos concede uma licença
          limitada, temporária, mundial e isenta de royalties para armazenar, transmitir e processar
          o Seu Conteúdo <strong>exclusivamente</strong> para executar a operação que você pediu e
          devolver o resultado. Essa licença termina quando o arquivo é excluído. Não usamos o Seu
          Conteúdo para treinar modelos, e não vendemos, compartilhamos nem publicamos esse
          conteúdo.
        </LegalP>
        <LegalP>
          Você declara e garante que é titular do Seu Conteúdo ou que tem todos os direitos e
          permissões necessários para processá-lo no Serviço.
        </LegalP>
      </LegalSection>

      <LegalSection id="files" title="6. Tratamento e exclusão de arquivos">
        <LegalP>
          A maioria das ferramentas processa os arquivos inteiramente no seu navegador; esses
          arquivos nunca são transmitidos para nós. Os arquivos só são enviados aos nossos servidores
          quando passam do limite de processamento do navegador, quando você usa uma ferramenta de IA
          ou quando você usa a conversão de HEIC, que precisa rodar no servidor por questões de
          licença.
        </LegalP>
        <LegalP>
          Os arquivos enviados e os resultados deles ficam armazenados de forma transitória e são
          excluídos automaticamente em aproximadamente uma hora. Os links de download são impossíveis
          de adivinhar, mas não exigem autenticação — qualquer pessoa com o link consegue baixar
          aquele arquivo até ele expirar, então trate os links como confidenciais.
        </LegalP>
        <LegalP>
          Você é responsável por guardar as suas próprias cópias. Não somos um serviço de
          armazenamento nem de backup, e não garantimos que um arquivo processado continue
          recuperável.
        </LegalP>
      </LegalSection>

      <LegalSection id="availability" title="7. Disponibilidade e mudanças">
        <LegalP>
          Não garantimos que o Serviço será ininterrupto, pontual, seguro ou livre de erros. O
          Serviço pode ficar indisponível por manutenção, atualizações ou motivos fora do nosso
          controle.
        </LegalP>
        <LegalP>
          As ferramentas que dependem do servidor exigem que o software delas esteja instalado e em
          funcionamento; quando não está, a ferramenta informa que está indisponível em vez de
          produzir um resultado. Podemos modificar ou descontinuar qualquer parte do Serviço a
          qualquer momento, sem aviso.
        </LegalP>
      </LegalSection>

      <LegalSection id="warranties" title="8. Isenção de garantias">
        <LegalP>
          O SERVIÇO É FORNECIDO &quot;NO ESTADO EM QUE SE ENCONTRA&quot; E &quot;CONFORME
          DISPONÍVEL&quot;, SEM GARANTIAS DE QUALQUER NATUREZA, EXPRESSAS, IMPLÍCITAS OU LEGAIS. NA
          MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, ISENTAMO-NOS DE TODAS AS GARANTIAS, INCLUINDO
          AS GARANTIAS IMPLÍCITAS DE COMERCIABILIDADE, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA,
          TITULARIDADE E NÃO VIOLAÇÃO.
        </LegalP>
        <LegalP>
          NÃO GARANTIMOS QUE O SERVIÇO ATENDERÁ AOS SEUS REQUISITOS, QUE O RESULTADO SERÁ EXATO OU DE
          QUALQUER QUALIDADE ESPECÍFICA, NEM QUE QUALQUER DEFEITO SERÁ CORRIGIDO. VOCÊ USA O SERVIÇO
          POR SUA CONTA E RISCO E É RESPONSÁVEL POR CONFERIR OS RESULTADOS E GUARDAR OS ORIGINAIS
          ANTES DE CONFIAR EM QUALQUER ARQUIVO PROCESSADO.
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitação de responsabilidade">
        <LegalP>
          NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, EM NENHUMA HIPÓTESE O {SITE.name}, SEU
          OPERADOR, PROPRIETÁRIOS, COLABORADORES OU FORNECEDORES SERÃO RESPONSÁVEIS POR DANOS
          INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS, EXEMPLARES OU PUNITIVOS, NEM POR
          QUALQUER PERDA DE LUCROS, RECEITA, REPUTAÇÃO, DADOS, IMAGENS OU OPORTUNIDADE DE NEGÓCIO,
          DECORRENTES DO USO OU DA IMPOSSIBILIDADE DE USO DO SERVIÇO — SEJA COM BASE EM CONTRATO,
          ATO ILÍCITO, NEGLIGÊNCIA, RESPONSABILIDADE OBJETIVA OU QUALQUER OUTRA TEORIA, E MESMO QUE
          AVISADOS DA POSSIBILIDADE DE TAIS DANOS.
        </LegalP>
        <LegalP>
          NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, NOSSA RESPONSABILIDADE TOTAL AGREGADA POR
          TODAS AS RECLAMAÇÕES RELATIVAS AO SERVIÇO NÃO EXCEDERÁ O MAIOR ENTRE (A) O VALOR QUE VOCÊ
          EFETIVAMENTE NOS PAGOU PELO SERVIÇO NOS TRÊS MESES ANTERIORES AO FATO QUE DEU ORIGEM À
          RECLAMAÇÃO OU (B) USD 50.
        </LegalP>
        <LegalP>
          Algumas jurisdições não permitem a exclusão ou a limitação de certas garantias ou
          responsabilidades. Nesses casos, as exclusões e limitações acima se aplicam apenas na
          extensão máxima permitida, e nada nestes Termos limita a responsabilidade por fraude, nem
          por morte ou dano pessoal causados por negligência, quando tal limitação for proibida por
          lei.
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" title="10. Indenização">
        <LegalP>
          Você concorda em indenizar, defender e isentar o {SITE.name}, seu operador, proprietários e
          colaboradores de quaisquer reclamações, exigências, danos, perdas, responsabilidades,
          custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes de: (a) Seu
          Conteúdo; (b) seu uso ou uso indevido do Serviço; (c) sua violação destes Termos; ou (d)
          sua violação de qualquer lei ou de direitos de terceiros.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="11. Propriedade intelectual">
        <LegalP>
          O Serviço — incluindo nome, marca, design, interface e código original — pertence ao seu
          operador e é protegido por leis de propriedade intelectual. Estes Termos concedem a você
          uma licença limitada, pessoal, não exclusiva, intransferível e revogável para usar o
          Serviço para a finalidade a que ele se destina. Nenhum outro direito é concedido.
        </LegalP>
        <LegalP>
          Você pode usar o resultado que gerar a partir das suas próprias imagens para qualquer
          finalidade lícita, inclusive comercial.
        </LegalP>
      </LegalSection>

      <LegalSection id="thirdparty" title="12. Software de terceiros e links">
        <LegalP>
          O Serviço é construído sobre componentes de código aberto, cada um licenciado pelos
          respectivos autores. As atribuições e os textos completos das licenças estão nos nossos{" "}
          <a href="/THIRD-PARTY-NOTICES.txt" className="text-secondary hover:underline">
            avisos de terceiros
          </a>
          . Esses componentes são fornecidos pelos autores sem garantia.
        </LegalP>
        <LegalP>
          O Serviço pode conter links para sites de terceiros. Não controlamos esses sites, não os
          endossamos e não assumimos responsabilidade pelo conteúdo, pelas práticas ou pela
          disponibilidade deles.
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" title="13. Planos pagos e cobrança">
        <LegalP>
          O Serviço é gratuito no momento e não há planos pagos ativos. O que segue vale se e quando
          os planos pagos forem lançados.
        </LegalP>
        <LegalUl>
          <li>
            Os preços são exibidos antes da compra e podem mudar, com aviso, para períodos de
            cobrança futuros.
          </li>
          <li>
            As assinaturas se renovam automaticamente pelo mesmo período até serem canceladas. Você
            pode cancelar a qualquer momento, com efeito no fim do período atual.
          </li>
          <li>
            Os pagamentos seriam processados por um processador de pagamentos terceiro; não
            receberíamos nem guardaríamos os dados completos do seu cartão.
          </li>
          <li>
            Você é responsável por quaisquer tributos e por manter os seus dados de cobrança
            corretos.
          </li>
          <li>
            Podemos suspender o acesso aos recursos pagos se o pagamento falhar ou for estornado.
          </li>
        </LegalUl>
        <LegalP>
          Os reembolsos são regidos pela nossa{" "}
          <Link href={localeHref("/refunds", "pt")} className="text-secondary hover:underline">
            Política de Reembolso
          </Link>
          , que faz parte destes Termos.
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" title="14. Encerramento">
        <LegalP>
          Podemos suspender ou encerrar o seu acesso ao Serviço a qualquer momento, com ou sem aviso,
          se acreditarmos, de forma razoável, que você violou estes Termos ou que o seu uso representa
          risco ao Serviço ou a terceiros. Você pode parar de usar o Serviço quando quiser.
        </LegalP>
        <LegalP>
          As seções que, por natureza, devem sobreviver ao encerramento — incluindo as seções 5, 8,
          9, 10, 11, 15 e 16 — permanecem em vigor.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing" title="15. Lei aplicável e resolução de conflitos">
        <LegalP>
          Estes Termos são regidos e interpretados de acordo com a lei aplicável, sem considerar
          regras de conflito de leis. Qualquer controvérsia decorrente destes Termos ou do Serviço
          será resolvida no foro competente.
        </LegalP>
        <LegalP>
          Se você é consumidor residente na União Europeia ou no Reino Unido, também pode contar com
          as disposições imperativas da lei do país onde reside. Nada nestes Termos afeta os seus
          direitos de consumidor de invocar essas disposições imperativas.
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="16. Disposições gerais">
        <LegalSubsection title="Acordo integral">
          <LegalP>
            Estes Termos, junto com a Política de Privacidade e a Política de Reembolso, são o acordo
            integral entre você e nós a respeito do Serviço.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Independência das cláusulas">
          <LegalP>
            Se alguma disposição for considerada inexequível, ela será ajustada na medida mínima
            necessária, e as demais permanecem em pleno vigor.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Não renúncia">
          <LegalP>
            O fato de não exigirmos o cumprimento de alguma disposição não é renúncia ao direito de
            fazê-lo depois.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Cessão">
          <LegalP>
            Você não pode ceder estes Termos sem o nosso consentimento. Nós podemos cedê-los em razão
            de fusão, aquisição ou venda de ativos.
          </LegalP>
        </LegalSubsection>
        <LegalSubsection title="Alterações nestes Termos">
          <LegalP>
            Podemos atualizar estes Termos de tempos em tempos. A data de &quot;última
            atualização&quot; acima reflete a versão atual, e continuar usando o Serviço depois de
            uma mudança significa aceitá-la.
          </LegalP>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="contact" title="17. Contato">
        <LegalP>
          Dúvidas sobre estes Termos podem ser enviadas pelos canais da nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
