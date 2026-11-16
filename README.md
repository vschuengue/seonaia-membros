# SEO na IA · Área de membros

App Next.js (App Router) que entrega os 3 guias vendidos na Cakto.

- `/login`, `/primeiro-acesso` (e-mail + número do pedido), `/p/[produto]/[capitulo]`
- `POST /api/webhook/cakto?token=...` — `purchase_approved` libera; `refund` e `chargeback` revogam
- `GET /api/saude` — cron diário (mantém o Supabase acordado)

## Conteúdo
Os guias ficam em `content/<produto>/NN-slug.md` e são convertidos em HTML por
`scripts/build-content.mjs` (roda automaticamente no `dev` e no `build`).
Sintaxe extra: ```` ```copiar Título ```` e ```` ```prompt Título ```` (botão copiar), `- [ ] item` (checklist).

## Configuração
1. Rode `supabase/schema.sql` no projeto Supabase.
2. Cadastre as variáveis de `.env.example` na Vercel. Nunca versione segredos.
