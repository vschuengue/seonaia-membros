# Troca as formas coloquiais pra/pro/pras/pros pela norma culta, respeitando o contexto.
import re, sys, pathlib
FEM_COM_ARTIGO = r"(IA|página|versão|rotina|hospedagem|sua|própria|primeira|minha)"
def cap(orig, novo): return novo[0].upper() + novo[1:] if orig[0].isupper() else novo
def corrigir(t):
    t = re.sub(r"\b([Pp])ros\b", lambda m: cap(m.group(0), "para os"), t)
    t = re.sub(r"\b([Pp])ras\b", lambda m: cap(m.group(0), "para as"), t)
    t = re.sub(r"\b([Pp])ro\b(?=\s)", lambda m: cap(m.group(0), "para o"), t)
    t = re.sub(r"\b([Pp])ra (o)\b", lambda m: cap(m.group(0), "para o"), t)
    t = re.sub(r"\b([Pp])ra (?=" + FEM_COM_ARTIGO + r"\b)", lambda m: cap(m.group(0), "para a "), t)
    t = re.sub(r"\b([Pp])ra\b", lambda m: cap(m.group(0), "para"), t)
    return t
total = 0
for f in sys.argv[1:]:
    p = pathlib.Path(f); s = p.read_text()
    n = corrigir(s)
    if n != s:
        antes = len(re.findall(r"\b[Pp]r[ao]s?\b", s)); total += antes
        p.write_text(n); print(f"{antes:4d}  {f}")
print("total trocado:", total)
