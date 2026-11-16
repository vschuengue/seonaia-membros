import type { Metadata } from "next";
import { PaginaLegal } from "@/components/lp/Legal";

export const metadata: Metadata = { title: "Política de privacidade · SEO na IA", robots: { index: true, follow: true } };

export default function Privacidade() {
  return (
    <PaginaLegal titulo="Política de privacidade">
      <p><em>Última atualização: novembro de 2026.</em></p>
      <h3>1. Quais dados coletamos</h3>
      <p>Na compra, o pagamento é processado pela Cakto, que nos envia seu nome, e-mail, número do pedido e o produto comprado. Não recebemos nem armazenamos dados de cartão. Na área de membros, guardamos seu e-mail, uma senha criptografada e os guias liberados para você. O progresso dos checklists fica salvo apenas no seu navegador.</p>
      <h3>2. Para que usamos</h3>
      <p>Para liberar o acesso aos guias comprados, enviar seus dados de acesso por e-mail, permitir a recuperação de acesso e cumprir obrigações legais. Nesta página de vendas, podemos usar o Pixel do Meta para medir o resultado dos anúncios.</p>
      <h3>3. Com quem compartilhamos</h3>
      <p>Com prestadores necessários para o funcionamento do serviço: Cakto (pagamentos), Vercel (hospedagem), Supabase (banco de dados), Resend (envio de e-mails) e Meta (medição de anúncios). Não vendemos seus dados.</p>
      <h3>4. Seus direitos (LGPD)</h3>
      <p>Você pode pedir acesso, correção ou exclusão dos seus dados, ou revogar consentimentos, entrando em contato pelo e-mail de suporte informado no comprovante de compra da Cakto.</p>
      <h3>5. Cookies</h3>
      <p>Usamos um cookie essencial para manter você conectado na área de membros e, nesta página, cookies de medição do Meta.</p>
    </PaginaLegal>
  );
}
