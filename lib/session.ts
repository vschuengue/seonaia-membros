import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { env } from "./env";
import { db, type Membro } from "./db";

export const COOKIE = "seonaia_sessao";
const DURACAO_S = 60 * 60 * 24 * 30; // 30 dias

function assinar(payload: string): string {
  return createHmac("sha256", env.sessionSecret).update(payload).digest("base64url");
}

// O token amarra a sessão ao hash da senha: trocar a senha derruba sessões antigas.
function marcaDaSenha(hash: string): string {
  return createHmac("sha256", env.sessionSecret).update("pw:" + hash).digest("base64url").slice(0, 16);
}

export function criarToken(m: Pick<Membro, "id" | "senha_hash">): string {
  const exp = Math.floor(Date.now() / 1000) + DURACAO_S;
  const payload = `${m.id}.${exp}.${marcaDaSenha(m.senha_hash)}`;
  return `${payload}.${assinar(payload)}`;
}

export async function iniciarSessao(m: Pick<Membro, "id" | "senha_hash">) {
  (await cookies()).set(COOKIE, criarToken(m), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: DURACAO_S,
  });
}

export async function encerrarSessao() {
  (await cookies()).delete(COOKIE);
}

// Valida a sessão NO SERVIDOR e devolve o membro, ou null.
export async function membroAtual(): Promise<Membro | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const partes = token.split(".");
  if (partes.length !== 4) return null;
  const [id, exp, marca, sig] = partes;
  const esperado = Buffer.from(assinar(`${id}.${exp}.${marca}`));
  const recebido = Buffer.from(sig);
  if (esperado.length !== recebido.length || !timingSafeEqual(esperado, recebido)) return null;
  if (Number(exp) < Date.now() / 1000) return null;

  const { data } = await db().from("membros").select("*").eq("id", id).maybeSingle<Membro>();
  if (!data) return null;
  if (marcaDaSenha(data.senha_hash) !== marca) return null;
  return data;
}

export async function exigirMembro(): Promise<Membro> {
  const m = await membroAtual();
  if (!m) redirect("/login");
  return m;
}
