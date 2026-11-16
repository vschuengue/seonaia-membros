import type { NextRequest } from "next/server";
import { db, normalizeEmail, rateLimited, type Membro } from "@/lib/db";
import { conferirSenha } from "@/lib/password";
import { iniciarSessao } from "@/lib/session";
import { ipDe, voltar } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const email = normalizeEmail(String(form.get("email") ?? ""));
  const senha = String(form.get("senha") ?? "").trim();
  if (!email || !senha) return voltar(req, "/login?erro=campos");

  if (await rateLimited(`login:${ipDe(req)}:${email}`, 10, 15)) {
    return voltar(req, "/login?erro=limite");
  }

  const { data } = await db().from("membros").select("*").eq("email", email).maybeSingle<Membro>();
  if (!data || !(await conferirSenha(senha, data.senha_hash))) {
    return voltar(req, "/login?erro=invalido");
  }
  await iniciarSessao(data);
  return voltar(req, "/");
}
