"use client";
import { useEffect, useRef, useState } from "react";

function ler(k: string): string | null {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function gravar(k: string, v: string | null) {
  try {
    if (v === null) localStorage.removeItem(k);
    else localStorage.setItem(k, v);
  } catch {}
}

// Liga os botões "Copiar", os checklists (progresso salvo) e marca o capítulo como lido.
export function Interativo({ html, chave, total }: { html: string; chave: string; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [feitos, setFeitos] = useState(0);

  useEffect(() => {
    const raiz = ref.current;
    if (!raiz) return;

    const caixas = Array.from(raiz.querySelectorAll<HTMLInputElement>("input.chk"));
    const contar = () => setFeitos(caixas.filter((c) => c.checked).length);
    caixas.forEach((c) => {
      c.checked = ler("chk:" + c.dataset.k) === "1";
      c.closest("li")?.classList.toggle("done", c.checked);
    });
    contar();

    const aoMudar = (e: Event) => {
      const c = e.target as HTMLInputElement;
      if (!c.matches("input.chk")) return;
      gravar("chk:" + c.dataset.k, c.checked ? "1" : null);
      c.closest("li")?.classList.toggle("done", c.checked);
      contar();
    };
    const aoClicar = async (e: Event) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".copy-btn");
      if (!btn) return;
      const texto = btn.closest(".copy-block")?.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(texto);
      } catch {
        const t = document.createElement("textarea");
        t.value = texto;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        t.remove();
      }
      btn.textContent = "Copiado ✓";
      btn.classList.add("ok");
      setTimeout(() => {
        btn.textContent = "Copiar";
        btn.classList.remove("ok");
      }, 1800);
    };
    raiz.addEventListener("change", aoMudar);
    raiz.addEventListener("click", aoClicar);

    // Capítulo lido = chegou ao fim do texto.
    const fim = raiz.querySelector(".fim-capitulo");
    const obs = fim
      ? new IntersectionObserver((ents) => {
          if (ents.some((x) => x.isIntersecting)) gravar("lido:" + chave, "1");
        })
      : null;
    if (fim && obs) obs.observe(fim);

    return () => {
      raiz.removeEventListener("change", aoMudar);
      raiz.removeEventListener("click", aoClicar);
      obs?.disconnect();
    };
  }, [html, chave]);

  return (
    <>
      {total > 0 && (
        <div className="checklist-status" aria-live="polite">
          Checklist deste capítulo: <strong>{feitos}</strong> de {total}
          <span className="mini-bar">
            <span style={{ width: `${total ? (feitos / total) * 100 : 0}%` }} />
          </span>
        </div>
      )}
      <div ref={ref} className="prose" dangerouslySetInnerHTML={{ __html: html + '<div class="fim-capitulo"></div>' }} />
    </>
  );
}

// Barra fina no topo mostrando quanto do capítulo já foi lido.
export function BarraLeitura() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 100);
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
    };
  }, []);
  return (
    <div className="reading-bar" aria-hidden>
      <span style={{ width: `${p}%` }} />
    </div>
  );
}

// Marca ✓ nos capítulos já lidos (lê o localStorage depois de montar).
export function MarcasLidas({ chaves }: { chaves: string[] }) {
  useEffect(() => {
    chaves.forEach((k) => {
      if (ler("lido:" + k) === "1") document.querySelector(`[data-lido="${CSS.escape(k)}"]`)?.classList.add("lido");
    });
  }, [chaves]);
  return null;
}
