import "@/app/guia/seo-geo/lp.css";

export function PaginaLegal({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="lp">
      <header className="lp-hero" style={{ paddingBottom: 40 }}>
        <div className="lp-w lp-estreito">
          <a href="/"><img className="lp-logo" src="/marca/logo-branca.png" alt="SEO na IA" width={705} height={180} style={{ marginBottom: 24 }} /></a>
          <h1 style={{ fontSize: 36 }}>{titulo}</h1>
        </div>
      </header>
      <main className="lp-sec" style={{ paddingTop: 40 }}>
        <div className="lp-w lp-estreito">{children}</div>
      </main>
    </div>
  );
}
