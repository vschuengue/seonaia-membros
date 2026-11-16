import "server-only";

function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Variável de ambiente ausente: ${name}`);
  return v;
}

export const env = {
  get appUrl() {
    return (process.env.APP_URL || "http://localhost:3000").replace(/\/$/, "");
  },
  get supabaseUrl() {
    return required("SUPABASE_URL");
  },
  get supabaseServiceKey() {
    return required("SUPABASE_SERVICE_ROLE_KEY");
  },
  get resendKey() {
    return process.env.RESEND_API_KEY || "";
  },
  get emailFrom() {
    return process.env.EMAIL_FROM || "SEO na IA <acesso@seonaia.com.br>";
  },
  get sessionSecret() {
    const s = required("SESSION_SECRET");
    if (s.length < 32) throw new Error("SESSION_SECRET curto demais (mínimo 32 caracteres)");
    return s;
  },
  get webhookUrlToken() {
    return required("WEBHOOK_URL_TOKEN");
  },
  get caktoWebhookSecret() {
    return process.env.CAKTO_WEBHOOK_SECRET || "";
  },
};
