import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalShell,
  LegalSection,
  LegalP,
  LegalUl,
  LegalCallout,
} from "@/components/LegalShell";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/i18n/tool-meta";
import { localeHref } from "@/lib/i18n/links";

/**
 * Portuguese refund policy — a written twin of /refunds (conversion.md §6.5),
 * with the same section ids. The consumer-law paragraph keeps the EU/UK
 * withdrawal right as the English page states it and adds nothing about the
 * Brazilian CDC: §10 already says that a stronger local right prevails, and
 * inventing a specific claim about a law we have not had reviewed would be a
 * worse error than the omission.
 */
export const metadata: Metadata = pageMetadata({
  englishPath: "/refunds",
  locale: "pt",
  title: "Política de Reembolso | oMyImage",
  description:
    "Política de reembolso do oMyImage — como funcionam os reembolsos nos planos pagos, o prazo para pedir e o que é ou não reembolsável.",
});

const toc = [
  { id: "status", title: "1. Situação atual" },
  { id: "free", title: "2. O serviço gratuito" },
  { id: "window", title: "3. Prazo para reembolso" },
  { id: "eligible", title: "4. O que dá direito" },
  { id: "noteligible", title: "5. O que não dá" },
  { id: "request", title: "6. Como pedir" },
  { id: "processing", title: "7. Processamento e prazos" },
  { id: "cancellation", title: "8. Cancelamento e reembolso" },
  { id: "chargebacks", title: "9. Contestação no cartão" },
  { id: "consumer", title: "10. Direitos do consumidor" },
  { id: "changes", title: "11. Alterações" },
  { id: "contact", title: "12. Contato" },
];

export default function RefundsPage() {
  return (
    <LegalShell
      locale="pt"
      title="Política de Reembolso"
      subtitle={`Como funcionam os reembolsos nos planos pagos do ${SITE.name}.`}
      updated="3 de agosto de 2026"
      toc={toc}
    >
      <LegalSection id="status" title="1. Situação atual">
        <LegalCallout>
          <strong>Ainda não existem planos pagos.</strong> Todas as ferramentas do {SITE.name} são
          gratuitas hoje, então não há o que cobrar nem o que reembolsar. Esta política é publicada
          com antecedência para que as regras estejam claras antes de qualquer plano pago entrar no
          ar.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="free" title="2. O serviço gratuito">
        <LegalP>
          O plano gratuito é gratuito. Ele não tem cobrança, não tem teste que vira plano pago e não
          guarda forma de pagamento. Você nunca vai ser cobrado por usar as ferramentas gratuitas.
        </LegalP>
      </LegalSection>

      <LegalSection id="window" title="3. Prazo para reembolso">
        <LegalP>
          Quando os planos pagos entrarem no ar, você poderá pedir o reembolso integral do seu
          pagamento mais recente em até <strong>7 dias</strong> da cobrança, sujeito às condições
          abaixo.
        </LegalP>
        <LegalP>
          Como os planos são cobrados antecipadamente por um período fixo, o reembolso vale para o
          pagamento que você está contestando, e não para uma parte do período.
        </LegalP>
      </LegalSection>

      <LegalSection id="eligible" title="4. O que dá direito a reembolso">
        <LegalUl>
          <li>Você foi cobrado duas vezes pelo mesmo período de cobrança.</li>
          <li>
            Você foi cobrado depois de cancelar, por um período que começa após o cancelamento.
          </li>
          <li>
            Um recurso pago não funcionou como descrito e não conseguimos resolver em um prazo
            razoável depois de você relatar o problema.
          </li>
          <li>
            Você assinou por engano e não fez uso substancial dos recursos pagos, dentro do prazo de
            7 dias.
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="noteligible" title="5. O que não dá direito">
        <LegalUl>
          <li>Pedidos feitos mais de 7 dias depois da cobrança.</li>
          <li>
            Uso substancial da cota paga durante o período de cobrança — os planos pagos são
            serviços digitais entregues imediatamente após o pagamento.
          </li>
          <li>
            Insatisfação com a qualidade do resultado quando a ferramenta funcionou como descrito. O
            plano gratuito existe justamente para você avaliar a qualidade antes de pagar.
          </li>
          <li>
            Problemas causados pelo seu aparelho, navegador ou rede, ou por arquivos de origem
            corrompidos ou em formato não aceito.
          </li>
          <li>
            Indisponibilidade ou interrupção fora do nosso controle razoável, ou manutenção
            programada.
          </li>
          <li>
            Contas suspensas ou encerradas por violação dos nossos{" "}
            <Link href={localeHref("/terms", "pt")} className="text-secondary hover:underline">
              Termos de Serviço
            </Link>
            .
          </li>
        </LegalUl>
      </LegalSection>

      <LegalSection id="request" title="6. Como pedir um reembolso">
        <LegalP>
          Fale com a gente pela nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>{" "}
          informando o e-mail usado na compra, a data aproximada e o valor da cobrança e uma
          descrição curta do problema. Procure a gente antes de abrir uma contestação no banco — quase
          sempre resolvemos mais rápido direto com você.
        </LegalP>
      </LegalSection>

      <LegalSection id="processing" title="7. Processamento e prazos">
        <LegalP>
          Nosso objetivo é analisar os pedidos de reembolso em até 3 dias úteis. Os reembolsos
          aprovados são feitos na forma de pagamento original, pelo nosso processador de pagamentos.
          Depois de emitido, o valor costuma aparecer em 5 a 10 dias úteis, conforme o seu banco ou a
          administradora do cartão — essa última etapa está fora do nosso controle.
        </LegalP>
        <LegalP>
          Os reembolsos são feitos na moeda original da transação. Não somos responsáveis por
          diferenças de câmbio ou tarifas aplicadas pelo seu banco.
        </LegalP>
      </LegalSection>

      <LegalSection id="cancellation" title="8. Cancelamento e reembolso">
        <LegalP>
          Cancelar uma assinatura interrompe as renovações futuras; isso não devolve automaticamente
          o período já pago. Ao cancelar, você mantém o acesso aos recursos pagos até o fim do período
          que já pagou, e depois disso a conta volta para o plano gratuito.
        </LegalP>
      </LegalSection>

      <LegalSection id="chargebacks" title="9. Contestação no cartão">
        <LegalP>
          Por favor, fale com a gente antes de abrir uma contestação (chargeback). Contestações são
          caras de resolver e normalmente mais lentas que um reembolso direto. Reservamo-nos o direito
          de suspender o acesso aos recursos pagos enquanto uma contestação estiver aberta e de
          recusar serviço pago futuro a contas com disputas fraudulentas.
        </LegalP>
      </LegalSection>

      <LegalSection id="consumer" title="10. Direitos do consumidor">
        <LegalP>
          Nada nesta política limita direitos irrenunciáveis que você tenha pela legislação de
          consumo aplicável a você. Quando a lei local garantir um direito de arrependimento ou de
          reembolso mais forte do que esta política, prevalece a lei.
        </LegalP>
        <LegalP>
          Se você é consumidor na União Europeia ou no Reino Unido, pode ter direito legal de
          desistir de um contrato de serviços digitais em até 14 dias. Quando você pede que a
          prestação comece imediatamente, esse direito pode terminar assim que a prestação começa, na
          medida permitida pela lei.
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" title="11. Alterações">
        <LegalP>
          Podemos atualizar esta política conforme o serviço evolui. A versão em vigor é a publicada
          no momento da sua compra, e a data de &quot;última atualização&quot; acima sempre reflete a
          versão atual.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="12. Contato">
        <LegalP>
          Para qualquer dúvida de cobrança ou reembolso, fale com a gente pela nossa{" "}
          <Link href={localeHref("/contact", "pt")} className="text-secondary hover:underline">
            página de contato
          </Link>
          . Veja também os nossos{" "}
          <Link href={localeHref("/terms", "pt")} className="text-secondary hover:underline">
            Termos de Serviço
          </Link>{" "}
          e os{" "}
          <Link href={localeHref("/pricing", "pt")} className="text-secondary hover:underline">
            preços
          </Link>
          .
        </LegalP>
      </LegalSection>
    </LegalShell>
  );
}
