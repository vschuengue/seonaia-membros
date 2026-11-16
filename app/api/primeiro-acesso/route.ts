import type { NextRequest } from "next/server";
import { db, normalizeEmail, rateLimited } from "@/lib/db";
import { gerarSenha, hashSenha } from "@/lib/password";
import { emailNovaSenha } from "@/lib/email";
import { iniciarSessao } from "@/lib/session";
import { ipDe, voltar } from "@/lib/http";
import { cookies } from "next/headers";

export const runtime = "nodejs";

// Plano B: e-mail da compra + número do pedido da Cakto → nova senha.
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = normalizeEmail(String(form.get("email") ?? ""));
  const pedido = String(form.get("pedido") ?? "").trim().replace(/^#/, "");
  if (!email || !pedido) return voltar(req, "/primeiro-acesso?erro=campos");

  if (await rateLimited(`pa:${ipDe(req)}`, 8, 60)) {
    return voltar(req, "/primeiro-acesso?erro=limite");
  }

  const { data: pedidos } = await db()
    .from("pedidos")
    .select("id")
    .eq("email", email)
    .eq("status", "paid")
    .or(`ref_id.eq.${pedido.replace(/[^A-Za-z0-9-]/g, "")},id.eq.${pedido.replace(/[^A-Za-z0-9-]/g, "")}`)
    .limit(1);
  if (!pedidos?.length) return voltar(req, "/primeiro-acesso?erro=nao-encontrado");

  const { data: membro } = await db().from("membros").select("id").eq("email", email).maybeSingle();
  if (!membro) return voltar(req, "/primeiro-acesso?erro=nao-encontrado");

  const senha = gerarSenha(10);
  const senha_hash = await hashSenha(senha);
  const { error } = await db().from("membros").update({ senha_hash }).eq("id", membro.id);
  if (error) return voltar(req, "/primeiro-acesso?erro=interno");

  let enviado = true;
  try {
    await emailNovaSenha(email, senha);
  } catch {
    enviado = false;
  }

  // Mostra a senha uma única vez na tela (cookie curto, httpOnly) e já deixa logado.
  await iniciarSessao({ id: membro.id, senha_hash });
  (await cookies()).set("seonaia_nova_senha", senha, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/primeiro-acesso",
    maxAge: 120,
  });
  return voltar(req, `/primeiro-acesso?ok=1${enviado ? "&email=1" : ""}`);
}
