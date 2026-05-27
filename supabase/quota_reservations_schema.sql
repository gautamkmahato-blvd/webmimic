-- Quota reservations — TTL-based in-flight deduction tracker.
-- A reservation is created when credits are deducted and closed when the outcome
-- is known: confirmed (AI succeeded), rolled_back (AI failed or client signalled
-- failure), or expired (TTL fired — neither signal arrived within 5 minutes).
--
-- Run in Supabase SQL Editor after operation_usage_schema.sql.

create table if not exists public.quota_reservations (
  id               uuid        primary key default gen_random_uuid(),
  user_id          text        not null,
  operation_id     text        not null,
  period_start     date        not null,
  status           text        not null default 'pending',
  idempotency_key  text        unique,
  created_at       timestamptz not null default now(),
  expires_at       timestamptz not null default (now() + interval '5 minutes'),

  constraint chk_reservation_status
    check (status in ('pending', 'confirmed', 'rolled_back', 'expired'))
);

-- Expiry sweep: find stale pending reservations for a given user + operation + period.
create index if not exists idx_quota_reservations_sweep
  on public.quota_reservations (user_id, operation_id, period_start, status, expires_at);

-- Active pending count: count in-flight reservations contributing to quota usage.
create index if not exists idx_quota_reservations_pending
  on public.quota_reservations (user_id, operation_id, period_start)
  where status = 'pending';

comment on table public.quota_reservations is
  'Tracks in-flight quota deductions. Pending rows older than expires_at are auto-expired '
  'by the expiry sweep in reservationService, which also calls decrementQuota to refund the credit.';

comment on column public.quota_reservations.idempotency_key is
  'Client-generated UUID sent with each request. Prevents double-charge on retry — '
  'if a reservation with this key already exists it is returned as-is.';

comment on column public.quota_reservations.expires_at is
  'now() + 5 minutes at insert time. Pending rows past this deadline are treated as '
  'failed and refunded by the next expiry sweep for this user + operation.';
