import type { NextRequest } from "next/server";
import { encerrarSessao } from "@/lib/session";
import { voltar } from "@/lib/http";

export async function POST(req: NextRequest) {
  await encerrarSessao();
  return voltar(req, "/login");
}
