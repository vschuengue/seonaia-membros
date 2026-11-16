import { NextResponse, type NextRequest } from "next/server";

// No domínio principal (seonaia.com.br), a raiz mostra a página de vendas.
// Em acesso.seonaia.com.br (e no endereço da Vercel), a raiz continua sendo a biblioteca de membros.
const DOMINIOS_DE_VENDAS = new Set(["seonaia.com.br", "www.seonaia.com.br"]);

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase().split(":")[0];
  if (DOMINIOS_DE_VENDAS.has(host) && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/guia/seo-geo";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/"] };
