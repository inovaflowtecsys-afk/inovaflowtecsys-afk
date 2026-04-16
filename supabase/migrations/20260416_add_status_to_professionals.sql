alter table if exists public.professionals
  add column if not exists status text not null default 'Ativo';

comment on column public.professionals.status is
  'Status de acesso do profissional: Ativo ou Inativo.';
