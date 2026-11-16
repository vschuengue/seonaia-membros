import Link from "next/link";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const ERROS: Record<string, string> = {
  campos: "Preencha o e-mail e o número do pedido.",
  "nao-encontrado": "Não encontramos uma compra aprovada com esse e-mail e esse número de pedido. Confira os dois no e-mail de confirmação da Cakto.",
  limite: "Muitas tentativas. Espere 1 hora e tente de novo.",
  interno: "Algo deu errado do nosso lado. Tente de novo em alguns minutos.",
};

export default async function PrimeiroAcesso({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string; ok?: string; email?: string }>;
}) {
  const q = await searchParams;
  const senha = q.ok ? (await cookies()).get("seonaia_nova_senha")?.value : undefined;

  if (q.ok && senha) {
    return (
      <main className="auth">
        <div className="auth-box">
          <img className="logo" src="/marca/logo-branca.png" alt="SEO na IA" width={705} height={180} />
          <h1>Pronto! Seu acesso foi gerado.</h1>
          <p className="muted">Anote a senha abaixo. Ela aparece só agora{q.email ? " e também foi enviada para o seu e-mail" : ""}.</p>
          <p className="senha">{senha}</p>
          <Link className="btn" href="/">Abrir meus guias</Link>
        </div>
      </main>
    );
  }

  const erro = ERROS[q.erro ?? ""];
  return (
    <main className="auth">
      <div className="auth-box">
        <img className="logo" src="/marca/logo-branca.png" alt="SEO na IA" width={705} height={180} />
        <h1>Primeiro acesso</h1>
        <p className="muted">
          Comprou e não recebeu a senha, ou perdeu? Digite o e-mail usado na compra e o número do pedido que está no
          e-mail de confirmação da Cakto.
        </p>
        {erro && <p className="alert" role="alert">{erro}</p>}
        <form action="/api/primeiro-acesso" method="post" className="form">
          <label>E-mail da compra<input name="email" type="email" autoComplete="email" required /></label>
          <label>Número do pedido<input name="pedido" placeholder="Ex.: 4852F91" autoComplete="off" required /></label>
          <button className="btn" type="submit">Gerar meu acesso</button>
        </form>
        <p className="muted small">
          Já tem senha? <Link href="/login">Entrar</Link>
        </p>
      </div>
    </main>
  );
}
