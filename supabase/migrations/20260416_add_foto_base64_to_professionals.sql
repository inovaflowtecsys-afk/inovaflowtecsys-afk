alter table if exists public.professionals
  add column if not exists foto_base64 text;

comment on column public.professionals.foto_base64 is
  'Foto do profissional em Base64 (data URL).';
