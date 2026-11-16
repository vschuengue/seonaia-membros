import Link from "next/link";
export default function NaoEncontrado() {
  return (
    <main className="auth">
      <div className="auth-box">
        <h1>Página não encontrada</h1>
        <Link className="btn" href="/">Voltar aos guias</Link>
      </div>
    </main>
  );
}
