import "server-only";
import { Resend } from "resend";
import { env } from "./env";
import type { Product } from "./products";

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function layout(titulo: string, corpo: string): string {
  return `<!doctype html><html lang="pt-BR"><body style="margin:0;background:#0b0d12;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#e8eaf0">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center">
<table role="presentation" width="100%" style="max-width:560px;background:#141821;border-radius:16px;padding:32px" cellspacing="0" cellpadding="0"><tr><td>
<p style="margin:0 0 8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#7c9cff">SEO na IA</p>
<h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#ffffff">${titulo}</h1>
${corpo}
<p style="margin:28px 0 0;font-size:13px;color:#8a90a2">Guarde este e-mail. Se perder a senha, gere uma nova em ${esc(env.appUrl)}/primeiro-acesso usando o e-mail da compra e o número do pedido.</p>
</td></tr></table></td></tr></table></body></html>`;
}

function botao(url: string, texto: string): string {
  return `<p style="margin:24px 0"><a href="${esc(url)}" style="display:inline-block;background:#7c9cff;color:#0b0d12;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:10px">${esc(texto)}</a></p>`;
}

function credenciais(email: string, senha: string): string {
  return `<table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;background:#0b0d12;border-radius:12px;padding:16px;margin:8px 0">
<tr><td style="padding:6px 16px;color:#8a90a2;font-size:14px">Login</td><td style="padding:6px 16px;font-size:16px;color:#fff"><strong>${esc(email)}</strong></td></tr>
<tr><td style="padding:6px 16px;color:#8a90a2;font-size:14px">Senha</td><td style="padding:6px 16px;font-size:18px;color:#fff;font-family:Menlo,Consolas,monospace"><strong>${esc(senha)}</strong></td></tr></table>`;
}

async function enviar(para: string, assunto: string, html: string): Promise<void> {
  if (!env.resendKey) throw new Error("RESEND_API_KEY não configurada");
  const resend = new Resend(env.resendKey);
  const { error } = await resend.emails.send({ from: env.emailFrom, to: para, subject: assunto, html });
  if (error) throw new Error(`Resend: ${error.name}: ${error.message}`);
}

export function emailBoasVindas(para: string, senha: string, produto: Product) {
  const corpo = `<p style="font-size:16px;line-height:1.6">Sua compra foi aprovada e o guia <strong>${esc(produto.nome)}</strong> já está liberado no seu app.</p>
${credenciais(para, senha)}
${botao(env.appUrl + "/login", "Acessar meu guia")}
<p style="font-size:14px;line-height:1.6;color:#b4b9c7">Se você levou algum bônus junto no checkout, ele aparece no mesmo app em alguns instantes, com o mesmo login.</p>`;
  return enviar(para, "Seu acesso ao guia chegou", layout("Seu guia está liberado", corpo));
}

export function emailNovoGuia(para: string, produto: Product) {
  const corpo = `<p style="font-size:16px;line-height:1.6">O guia <strong>${esc(produto.nome)}</strong> foi liberado na sua conta. Entre com o mesmo e-mail e senha que você já recebeu.</p>
${botao(env.appUrl + "/login", "Abrir o app")}`;
  return enviar(para, `Liberado: ${produto.nomeCurto}`, layout("Mais um guia liberado", corpo));
}

export function emailNovaSenha(para: string, senha: string) {
  const corpo = `<p style="font-size:16px;line-height:1.6">Você pediu um novo acesso. Sua senha anterior deixou de funcionar.</p>
${credenciais(para, senha)}
${botao(env.appUrl + "/login", "Entrar agora")}`;
  return enviar(para, "Seu novo acesso", layout("Novo acesso gerado", corpo));
}
