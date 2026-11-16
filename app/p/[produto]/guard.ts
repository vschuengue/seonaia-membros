import "server-only";
import { notFound, redirect } from "next/navigation";
import { exigirMembro } from "@/lib/session";
import { productBySlug } from "@/lib/products";
import { GUIAS } from "@/lib/content.generated";

// Valida no servidor: sessão + produto liberado pra este membro.
export async function exigirGuia(slug: string) {
  const produto = productBySlug(slug);
  if (!produto) notFound();
  const membro = await exigirMembro();
  if (!membro.produtos_liberados.includes(produto.caktoId)) redirect("/?sem-acesso=1");
  return { membro, produto, capitulos: GUIAS[produto.slug] ?? [] };
}
