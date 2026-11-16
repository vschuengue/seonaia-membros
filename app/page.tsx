import Link from "next/link";
import { exigirMembro } from "@/lib/session";
import { PRODUCTS } from "@/lib/products";
import { GUIAS } from "@/lib/content.generated";

export const dynamic = "force-dynamic";

export default async function Inicio() {
  const membro = await exigirMembro();
  const meus = PRODUCTS.filter((p) => membro.produtos_liberados.includes(p.caktoId));

  return (
    <main className="shell">
      <header className="topbar">
        <span className="brand">SEO na IA</span>
        <form action="/api/logout" method="post">
          <button className="link-btn" type="submit">Sair</button>
        </form>
      </header>

      <section className="hero">
        <p className="eyebrow">Sua biblioteca</p>
        <h1>Olá! Seus guias estão aqui.</h1>
        <p className="muted">Entrou como {membro.email}</p>
      </section>

      {meus.length === 0 ? (
        <div className="empty">
          <p>Nenhum guia liberado nesta conta no momento.</p>
          <p className="muted">Se você acabou de comprar, aguarde alguns minutos e atualize a página.</p>
        </div>
      ) : (
        <div className="cards">
          {meus.map((p) => {
            const caps = GUIAS[p.slug] ?? [];
            return (
              <Link key={p.slug} href={`/p/${p.slug}`} className="card" style={{ ["--c" as string]: p.cor }}>
                <span className="card-tag">{caps.length} capítulos</span>
                <h2>{p.nome}</h2>
                <p>{p.subtitulo}</p>
                <span className="card-cta">Abrir guia →</span>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
