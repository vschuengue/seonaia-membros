import Link from "next/link";
import { exigirGuia } from "./guard";
import { MarcasLidas } from "@/components/Interativo";

export const dynamic = "force-dynamic";

export default async function Guia({ params }: { params: Promise<{ produto: string }> }) {
  const { produto, capitulos } = await exigirGuia((await params).produto);
  const chaves = capitulos.map((c) => `${produto.slug}:${c.slug}`);

  return (
    <main className="shell" style={{ ["--c" as string]: produto.cor }}>
      <header className="topbar">
        <Link href="/" className="brand">← Biblioteca</Link>
      </header>
      <section className="hero">
        <img className="card-capa" style={{ maxWidth: 220 }} src={produto.capa} alt="" width={1080} height={1080} />
        <p className="eyebrow">Guia</p>
        <h1>{produto.nome}</h1>
        <p className="muted">{produto.subtitulo}</p>
        {capitulos[0] && (
          <Link className="btn" href={`/p/${produto.slug}/${capitulos[0].slug}`}>Começar pelo capítulo 1</Link>
        )}
      </section>
      <ol className="toc">
        {capitulos.map((c) => (
          <li key={c.slug} data-lido={`${produto.slug}:${c.slug}`}>
            <Link href={`/p/${produto.slug}/${c.slug}`}>
              <span className="toc-num">{String(c.numero).padStart(2, "0")}</span>
              <span className="toc-body">
                <strong>{c.titulo}</strong>
                <small>{c.minutos} min de leitura{c.checklist ? ` · checklist de ${c.checklist} itens` : ""}</small>
              </span>
              <span className="toc-check" aria-label="lido">✓</span>
            </Link>
          </li>
        ))}
      </ol>
      <MarcasLidas chaves={chaves} />
    </main>
  );
}
