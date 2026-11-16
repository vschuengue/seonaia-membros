-- Schema do app de membros SEO na IA.
-- Rode uma vez no Supabase (SQL Editor) ou via Management API.
-- Todo acesso é feito pelo servidor com a service role key; anon/authenticated
-- não têm nenhuma permissão e o RLS fica ligado sem policies.

create extension if not exists pgcrypto;

-- Membros ---------------------------------------------------------------
create table if not exists public.membros (
  id                  uuid primary key default gen_random_uuid(),
  email               text not null unique check (email = lower(btrim(email))),
  senha_hash          text not null,
  produtos_liberados  text[] not null default '{}',
  criado_em           timestamptz not null default now()
);

-- Pedidos recebidos da Cakto (um por pedido: principal e cada bump) --------
create table if not exists public.pedidos (
  id             text primary key,          -- data.id da Cakto
  ref_id         text not null,             -- data.refId (o número que o comprador vê)
  email          text not null,
  produto_id     text not null,
  status         text not null,             -- paid, refunded, chargedback...
  ultimo_evento  text not null,
  atualizado_em  timestamptz not null default now()
);
create index if not exists pedidos_email_idx  on public.pedidos (email);
create index if not exists pedidos_ref_id_idx on public.pedidos (ref_id);

-- Log de webhooks (auditoria / prova) ---------------------------------------
create table if not exists public.webhook_eventos (
  id           bigint generated always as identity primary key,
  evento       text not null,
  pedido_id    text,
  email        text,
  produto_id   text,
  resultado    text not null,
  recebido_em  timestamptz not null default now()
);

-- Limite de tentativas (login e primeiro acesso) -----------------------------
create table if not exists public.tentativas (
  id         bigint generated always as identity primary key,
  chave      text not null,
  criado_em  timestamptz not null default now()
);
create index if not exists tentativas_chave_idx on public.tentativas (chave, criado_em);

-- RLS ligado em tudo, sem policies: só a service role (que ignora RLS) acessa.
alter table public.membros         enable row level security;
alter table public.pedidos         enable row level security;
alter table public.webhook_eventos enable row level security;
alter table public.tentativas      enable row level security;
revoke all on public.membros, public.pedidos, public.webhook_eventos, public.tentativas
  from anon, authenticated;

-- Libera um produto de forma atômica. Se o membro não existe, cria com p_hash.
-- Retorna: criado (membro novo) e adicionado (o produto não estava liberado).
create or replace function public.liberar_produto(p_email text, p_produto text, p_hash text)
returns table (criado boolean, adicionado boolean)
language plpgsql
as $$
declare
  v_tinha boolean;
  v_criado boolean;
begin
  select p_produto = any(m.produtos_liberados) into v_tinha
    from public.membros m where m.email = p_email for update;

  insert into public.membros as m (email, senha_hash, produtos_liberados)
  values (p_email, p_hash, array[p_produto])
  on conflict (email) do update
    set produtos_liberados = case
      when p_produto = any(m.produtos_liberados) then m.produtos_liberados
      else array_append(m.produtos_liberados, p_produto)
    end
  returning (xmax = 0) into v_criado;

  criado := v_criado;
  adicionado := v_criado or not coalesce(v_tinha, false);
  return next;
end;
$$;

-- Revoga um produto, a não ser que exista outro pedido pago do mesmo produto.
create or replace function public.revogar_produto(p_email text, p_produto text, p_pedido text)
returns boolean
language plpgsql
as $$
begin
  if exists (
    select 1 from public.pedidos
     where email = p_email and produto_id = p_produto
       and status = 'paid' and id <> p_pedido
  ) then
    return false;
  end if;

  update public.membros
     set produtos_liberados = array_remove(produtos_liberados, p_produto)
   where email = p_email;
  return found;
end;
$$;

revoke all on function public.liberar_produto(text, text, text) from public, anon, authenticated;
revoke all on function public.revogar_produto(text, text, text) from public, anon, authenticated;
grant execute on function public.liberar_produto(text, text, text) to service_role;
grant execute on function public.revogar_produto(text, text, text) to service_role;
