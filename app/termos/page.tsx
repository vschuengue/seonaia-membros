import type { Metadata } from "next";
import { PaginaLegal } from "@/components/lp/Legal";

export const metadata: Metadata = { title: "Termos de uso · SEO na IA", robots: { index: true, follow: true } };

export default function Termos() {
  return (
    <PaginaLegal titulo="Termos de uso">
      <p><em>Última atualização: novembro de 2026.</em></p>
      <h3>1. O produto</h3>
      <p>Os guias SEO na IA são conteúdos digitais em texto, entregues numa área de membros online, com acesso individual e sem prazo de expiração enquanto o serviço estiver ativo.</p>
      <h3>2. Acesso</h3>
      <p>O acesso é pessoal e intransferível. Compartilhar login, revender ou redistribuir o conteúdo não é permitido e pode levar ao bloqueio do acesso.</p>
      <h3>3. Garantia e reembolso</h3>
      <p>Você tem 7 dias corridos a partir da compra para pedir o reembolso integral pela Cakto, sem precisar justificar. Após o reembolso, o acesso ao guia correspondente é encerrado.</p>
      <h3>4. Resultados</h3>
      <p>O conteúdo é educativo. Resultados de posicionamento no Google e de citação por inteligências artificiais dependem da aplicação do método, da concorrência e de fatores que não controlamos, e não são garantidos. O guia não substitui orientação jurídica nem a consulta às normas do seu conselho profissional.</p>
      <h3>5. Contato</h3>
      <p>Pelo e-mail de suporte informado no comprovante de compra da Cakto.</p>
    </PaginaLegal>
  );
}
