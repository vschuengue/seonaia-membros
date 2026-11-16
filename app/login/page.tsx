import Link from "next/link";
import { redirect } from "next/navigation";
import { membroAtual } from "@/lib/session";

export const dynamic = "force-dynamic";

const ERROS: Record<string, string> = {
  campos: "Preencha e-mail e senha.",
  invalido: "E-mail ou senha incorretos.",
  limite: "Muitas tentativas. Espere 15 minutos e tente de novo.",
};

export default async function Login({ searchParams }: { searchParams: Promise<{ erro?: string }> }) {
  if (await membroAtual()) redirect("/");
  const erro = ERROS[(await searchParams).erro ?? ""];
  return (
    <main className="auth">
      <div className="auth-box">
        <span className="brand">SEO na IA</span>
        <h1>Entrar nos seus guias</h1>
        <p className="muted">Use o e-mail da compra e a senha que chegou no seu e-mail.</p>
        {erro && <p className="alert" role="alert">{erro}</p>}
        <form action="/api/login" method="post" className="form">
          <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
          <label>Senha<input name="senha" type="password" autoComplete="current-password" required /></label>
          <button className="btn" type="submit">Entrar</button>
        </form>
        <p className="muted small">
          Não recebeu a senha ou perdeu? <Link href="/primeiro-acesso">Gerar um novo acesso</Link>
        </p>
      </div>
    </main>
  );
}
