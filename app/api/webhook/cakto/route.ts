import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/lib/env";
import { db, normalizeEmail } from "@/lib/db";
import { productByCaktoId } from "@/lib/products";
import { gerarSenha, hashSenha } from "@/lib/password";
import { emailBoasVindas, emailNovoGuia } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EVENTOS_LIBERAM = new Set(["purchase_approved"]);
const EVENTOS_REVOGAM = new Set(["refund", "chargeback"]);

function iguais(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

// Prova de origem: assinatura X-Cakto-Signature (preferida) ou o "secret" do corpo.
function origemValida(req: NextRequest, raw: string, secretNoCorpo: unknown): boolean {
  const secret = env.caktoWebhookSecret;
  if (!secret) return true; // ainda não configurado: vale só o token da URL
  const ts = req.headers.get("x-cakto-timestamp");
  const sig = req.headers.get("x-cakto-signature");
  if (ts && sig) {
    if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false;
    const esperado = "v1=" + createHmac("sha256", secret).update(`${ts}.`).update(raw).digest("hex");
    return sig.split(",").some((s) => iguais(s.trim(), esperado));
  }
  return typeof secretNoCorpo === "string" && iguais(secretNoCorpo, secret);
}

type Pedido = {
  id?: string;
  refId?: string;
  status?: string;
  customer?: { email?: string };
  product?: { id?: string };
};

async function log(evento: string, resultado: string, p?: { id?: string; email?: string; produto?: string }) {
  await db().from("webhook_eventos").insert({
    evento,
    resultado,
    pedido_id: p?.id ?? null,
    email: p?.email ?? null,
    produto_id: p?.produto ?? null,
  });
}

async function processar(evento: string, pedido: Pedido): Promise<string> {
  const produto = productByCaktoId(pedido.product?.id);
  const email = pedido.customer?.email ? normalizeEmail(pedido.customer.email) : "";
  const id = pedido.id ?? "";
  const ctx = { id, email, produto: pedido.product?.id };

  if (!produto) {
    await log(evento, "ignorado: produto fora do app", ctx);
    return "ignorado";
  }
  if (!email || !id) {
    await log(evento, "ignorado: pedido sem e-mail ou id", ctx);
    return "ignorado";
  }

  const { data: anterior } = await db().from("pedidos").select("status").eq("id", id).maybeSingle();

  await db().from("pedidos").upsert({
    id,
    ref_id: pedido.refId ?? id,
    email,
    produto_id: produto.caktoId,
    status: EVENTOS_LIBERAM.has(evento) ? "paid" : pedido.status || evento,
    ultimo_evento: evento,
    atualizado_em: new Date().toISOString(),
  });

  if (EVENTOS_LIBERAM.has(evento)) {
    if (anterior?.status === "paid") {
      await log(evento, "duplicado: já processado", ctx);
      return "duplicado";
    }
    const senha = gerarSenha(10);
    const { data, error } = await db().rpc("liberar_produto", {
      p_email: email,
      p_produto: produto.caktoId,
      p_hash: await hashSenha(senha),
    });
    if (error) throw new Error("liberar_produto: " + error.message);
    const r = (Array.isArray(data) ? data[0] : data) as { criado: boolean; adicionado: boolean };

    let resultado = r.criado ? "membro criado" : r.adicionado ? "produto adicionado" : "já liberado";
    try {
      if (r.criado) await emailBoasVindas(email, senha, produto);
      else if (r.adicionado) await emailNovoGuia(email, produto);
      if (r.criado || r.adicionado) resultado += " + e-mail enviado";
    } catch (e) {
      resultado += " + E-MAIL FALHOU: " + (e as Error).message.slice(0, 200);
    }
    await log(evento, resultado, ctx);
    return resultado;
  }

  if (EVENTOS_REVOGAM.has(evento)) {
    const { data: revogou, error } = await db().rpc("revogar_produto", {
      p_email: email,
      p_produto: produto.caktoId,
      p_pedido: id,
    });
    if (error) throw new Error("revogar_produto: " + error.message);
    const resultado = revogou ? "acesso revogado" : "mantido: existe outro pedido pago ou membro inexistente";
    await log(evento, resultado, ctx);
    return resultado;
  }

  await log(evento, "ignorado: evento não tratado", ctx);
  return "ignorado";
}

export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  if (!iguais(token, env.webhookUrlToken)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const raw = await req.text();
  let body: { secret?: unknown; event?: string; data?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, erro: "json inválido" }, { status: 400 });
  }

  if (!origemValida(req, raw, body.secret)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const evento = String(body.event ?? "");
  // Webhook V1 manda um pedido; V2 manda uma lista (principal + bumps).
  const pedidos = (Array.isArray(body.data) ? body.data : [body.data]).filter(Boolean) as Pedido[];

  const resultados: string[] = [];
  try {
    for (const p of pedidos) resultados.push(await processar(evento, p));
  } catch (e) {
    await log(evento, "ERRO: " + (e as Error).message.slice(0, 300)).catch(() => {});
    return NextResponse.json({ ok: false, erro: "falha ao processar" }, { status: 500 });
  }
  return NextResponse.json({ ok: true, evento, resultados });
}
