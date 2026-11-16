import "server-only";
import { NextResponse, type NextRequest } from "next/server";

export function ipDe(req: NextRequest): string {
  return (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "local";
}

// Redireciona relativo à própria requisição (303 = depois de POST vira GET).
export function voltar(req: NextRequest, caminho: string): NextResponse {
  return NextResponse.redirect(new URL(caminho, req.url), 303);
}
