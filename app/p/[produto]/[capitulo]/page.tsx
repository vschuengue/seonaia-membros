import Link from "next/link";
import { notFound } from "next/navigation";
import { exigirGuia } from "../guard";
import { BarraLeitura, Interativo } from "@/components/Interativo";

export const dynamic = "force-dynamic";

export default async function Capitulo({ params }: { params: Promise<{ produto: string; capitulo: string }> }) {
  const p = await params;
  const { produto, capitulos } = await exigirGuia(p.produto);
  const i = capitulos.findIndex((c) => c.slug === p.capitulo);
  if (i < 0) notFound();
  const cap = capitulos[i];
  const ant = capitulos[i - 1];
  const prox = capitulos[i + 1];

  return (
    <main className="reader" style={{ ["--c" as string]: produto.cor }}>
      <BarraLeitura />
      <header className="topbar sticky">
        <Link href={`/p/${produto.slug}`} className="brand">← {produto.nomeCurto}</Link>
        <details className="chapters-menu">
          <summary>Capítulos</summary>
          <ol>
            {capitulos.map((c) => (
              <li key={c.slug} className={c.slug === cap.slug ? "atual" : ""}>
                <Link href={`/p/${produto.slug}/${c.slug}`}>
                  {c.numero}. {c.titulo}
                </Link>
              </li>
            ))}
          </ol>
        </details>
      </header>

      <article>
        <p className="eyebrow">Capítulo {cap.numero} de {capitulos.length} · {cap.minutos} min</p>
        <h1>{cap.titulo}</h1>
        <Interativo html={cap.html} chave={`${produto.slug}:${cap.slug}`} total={cap.checklist} />
      </article>

      <nav className="pager">
        {ant ? (
          <Link href={`/p/${produto.slug}/${ant.slug}`} className="pager-link">
            <small>Anterior</small>
            <span>{ant.titulo}</span>
          </Link>
        ) : <span />}
        {prox ? (
          <Link href={`/p/${produto.slug}/${prox.slug}`} className="pager-link next">
            <small>Próximo</small>
            <span>{prox.titulo}</span>
          </Link>
        ) : (
          <Link href={`/p/${produto.slug}`} className="pager-link next">
            <small>Fim do guia</small>
            <span>Voltar ao sumário</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
