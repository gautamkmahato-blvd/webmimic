-- Audit + idempotency ledger for credit grants and deductions.
-- Run in Supabase SQL Editor alongside payment_schema.sql.

create table if not exists public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  feature_id text not null,
  amount integer not null,
  balance_after integer not null check (balance_after >= 0),
  idempotency_key text,
  status text not null default 'completed' check (status in ('completed', 'refunded')),
  reference_type text not null default 'feature_use',
  reference_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists credit_transactions_user_id_created_at_idx
  on public.credit_transactions (user_id, created_at desc);

create unique index if not exists credit_transactions_idempotency_unique
  on public.credit_transactions (user_id, idempotency_key)
  where idempotency_key is not null and status = 'completed';

comment on table public.credit_transactions is 'Immutable ledger; negative amount = deduction, positive = grant.';
comment on column public.credit_transactions.idempotency_key is 'Client-supplied key to prevent double-charging on retries.';
