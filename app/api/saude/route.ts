import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Chamado 1x por dia pelo cron da Vercel: mantém o banco do Supabase (plano grátis) acordado
// e confirma que a conexão funciona. Protegido pelo CRON_SECRET que a Vercel envia.
export async function GET(req: NextRequest) {
  const segredo = process.env.CRON_SECRET;
  if (!segredo || req.headers.get("authorization") !== `Bearer ${segredo}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const { count, error } = await db().from("membros").select("id", { count: "exact", head: true });
  if (error) return NextResponse.json({ ok: false, erro: error.message }, { status: 500 });
  // Limpa tentativas antigas de login (mais de 2 dias).
  await db().from("tentativas").delete().lt("criado_em", new Date(Date.now() - 2 * 86400_000).toISOString());
  return NextResponse.json({ ok: true, membros: count });
}
