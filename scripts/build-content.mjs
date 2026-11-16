// Converte content/<produto>/*.md em lib/content.generated.ts (HTML pronto).
// Sintaxe extra no Markdown:
//   ```copiar Título       → bloco com botão "copiar" (templates)
//   ```prompt Título       → bloco de prompt com botão "copiar"
//   - [ ] item             → checklist interativo que salva o progresso
//   > **Dica:** ...        → caixa de destaque
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { Marked } from "marked";

const RAIZ = new URL("..", import.meta.url).pathname;
const PRODUTOS = ["seo-geo", "auditoria", "paginas"];

const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function criarMarked(prefixo) {
  let n = 0;
  const m = new Marked({ gfm: true });
  m.use({
    renderer: {
      code(token) {
        const info = (token.raw.split("\n")[0] || "").replace(/^```+/, "").trim();
        const [tipo, ...resto] = info.split(/\s+/);
        if (tipo === "copiar" || tipo === "prompt") {
          const titulo = resto.join(" ") || (tipo === "prompt" ? "Prompt" : "Modelo");
          const rotulo = tipo === "prompt" ? "Prompt" : "Modelo";
          return `<div class="copy-block copy-${tipo}"><div class="copy-head"><span class="copy-tag">${rotulo}</span><span class="copy-title">${esc(titulo)}</span><button type="button" class="copy-btn" aria-label="Copiar ${esc(titulo)}">Copiar</button></div><pre><code>${esc(token.text)}</code></pre></div>\n`;
        }
        return `<pre class="code"><code>${esc(token.text)}</code></pre>\n`;
      },
      listitem(item) {
        if (!item.task) return false;
        const id = `${prefixo}:${n++}`;
        const corpo = this.parser.parse(item.tokens.filter((t) => t.type !== "checkbox"), !!item.loose);
        return `<li class="task"><label><input type="checkbox" class="chk" data-k="${id}"><span>${corpo}</span></label></li>\n`;
      },
      list(token) {
        const temTarefa = token.items.some((i) => i.task);
        let corpo = "";
        for (const item of token.items) corpo += this.listitem(item);
        const tag = token.ordered ? "ol" : "ul";
        const cls = temTarefa ? ' class="checklist"' : "";
        return `<${tag}${cls}>\n${corpo}</${tag}>\n`;
      },
      blockquote(token) {
        return `<aside class="callout">${this.parser.parse(token.tokens)}</aside>\n`;
      },
      table(token) {
        const cab = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("");
        const linhas = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("\n");
        return `<div class="table-wrap"><table><thead><tr>${cab}</tr></thead><tbody>${linhas}</tbody></table></div>\n`;
      },
    },
  });
  return { m, total: () => n };
}

const guias = {};
for (const produto of PRODUTOS) {
  const dir = join(RAIZ, "content", produto);
  if (!existsSync(dir)) {
    guias[produto] = [];
    continue;
  }
  const arquivos = readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  guias[produto] = arquivos.map((arquivo, i) => {
    const bruto = readFileSync(join(dir, arquivo), "utf8");
    const linhas = bruto.split("\n");
    const titulo = (linhas.find((l) => l.startsWith("# ")) || `# Capítulo ${i + 1}`).slice(2).trim();
    const semTitulo = bruto.replace(/^# .*\n/m, "");
    const resumoLinha = semTitulo.split("\n").find((l) => l.trim() && !l.startsWith("#") && !l.startsWith(">"));
    const resumo = (resumoLinha || "").replace(/[*_`]/g, "").slice(0, 160);
    const slug = arquivo.replace(/^\d+-/, "").replace(/\.md$/, "");
    const { m, total } = criarMarked(`${produto}:${slug}`);
    const html = m.parse(semTitulo);
    const palavras = semTitulo.split(/\s+/).length;
    return { slug, numero: i + 1, titulo, resumo, html, checklist: total(), minutos: Math.max(2, Math.round(palavras / 200)) };
  });
}

const saida =
  "// Gerado por scripts/build-content.mjs. Não edite à mão.\n" +
  "export type Capitulo = { slug: string; numero: number; titulo: string; resumo: string; html: string; checklist: number; minutos: number };\n" +
  `export const GUIAS: Record<string, Capitulo[]> = ${JSON.stringify(guias)};\n`;
writeFileSync(join(RAIZ, "lib", "content.generated.ts"), saida);
console.log(
  "conteúdo gerado:",
  Object.entries(guias).map(([k, v]) => `${k}=${v.length} cap.`).join(", "),
);
