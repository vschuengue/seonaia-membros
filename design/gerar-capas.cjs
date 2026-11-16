// Gera as capas 1080x1080 dos 3 produtos a partir de design/capa.html.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const raiz = path.resolve(__dirname, "..");
const logo = "data:image/png;base64," + fs.readFileSync(path.join(raiz, "public/marca/logo-branca.png")).toString("base64");
const capas = [
  { slug: "seo-geo", tag: "Guia principal", pill: "Guia + app", t: "94px",
    titulo: "SEO+GEO para <em>Profissionais Liberais</em>",
    sub: "Seu site pronto pro Google e pras IAs em 7 dias de trabalho.",
    chips: ["<b>8</b> capítulos", "Checklist de <b>30</b> itens", "Schema pronto", "Plano de <b>90</b> dias"] },
  { slug: "auditoria", tag: "Complemento", pill: "Guia + app", t: "100px",
    titulo: "Auditoria de Site <em>em 1 Dia</em>",
    sub: "Os 20 erros que escondem seu site do Google, e como corrigir cada um.",
    chips: ["<b>20</b> erros", "<b>5</b> ferramentas grátis", "Relatório pronto"] },
  { slug: "paginas", tag: "Complemento", pill: "Textos prontos + app", t: "90px",
    titulo: "Páginas Prontas pra <em>Dentista, Psicólogo e Advogado</em>",
    sub: "Copie, adapte e cole hoje os textos do seu site.",
    chips: ["<b>24</b> páginas", "<b>60</b> perguntas frequentes", "<b>6</b> prompts"] },
];
(async () => {
  const base = fs.readFileSync(path.join(__dirname, "capa.html"), "utf8");
  const br = await chromium.launch();
  const p = await br.newPage({ viewport: { width: 1080, height: 1080 } });
  for (const c of capas) {
    const html = base.replace("LOGO", logo).replace("TAG", c.tag).replace("PILL", c.pill)
      .replace("TITULO", c.titulo).replace("SUB", c.sub).replace("var(--t,92px)", c.t)
      .replace("CHIPS", c.chips.map((x) => `<span class="chip">${x}</span>`).join(""));
    await p.setContent(html, { waitUntil: "networkidle" });
    await p.evaluate(() => document.fonts.ready);
    const out = path.join(raiz, "public/capas", c.slug + ".png");
    await p.screenshot({ path: out });
    console.log("ok", out);
  }
  await br.close();
})();
