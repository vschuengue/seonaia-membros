import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";

let client: SupabaseClient | null = null;

// Cliente com service role: só existe no servidor e ignora o RLS.
export function db(): SupabaseClient {
  if (!client) {
    client = createClient(env.supabaseUrl, env.supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

export type Membro = {
  id: string;
  email: string;
  senha_hash: string;
  produtos_liberados: string[];
  criado_em: string;
};

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

// Limite simples de tentativas por chave numa janela de tempo.
export async function rateLimited(chave: string, max: number, janelaMin: number): Promise<boolean> {
  const desde = new Date(Date.now() - janelaMin * 60_000).toISOString();
  const { count } = await db()
    .from("tentativas")
    .select("id", { count: "exact", head: true })
    .eq("chave", chave)
    .gte("criado_em", desde);
  if ((count ?? 0) >= max) return true;
  await db().from("tentativas").insert({ chave });
  return false;
}
