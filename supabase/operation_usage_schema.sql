create table public.operation_usage (
  user_id      text        not null,
  operation_id text        not null,
  used_count   integer     not null default 0,
  period_start date        not null,

  primary key (user_id, operation_id, period_start),

  constraint chk_used_count_non_negative check (used_count >= 0)
);

create index idx_operation_usage_user_id
  on public.operation_usage (user_id);
