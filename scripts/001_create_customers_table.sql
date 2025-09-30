-- Create customers table that references auth.users
create table if not exists public.customers (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  company_name text,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table public.customers enable row level security;

-- RLS Policies for customers table
create policy "customers_select_own"
  on public.customers for select
  using (auth.uid() = id);

create policy "customers_insert_own"
  on public.customers for insert
  with check (auth.uid() = id);

create policy "customers_update_own"
  on public.customers for update
  using (auth.uid() = id);

create policy "customers_delete_own"
  on public.customers for delete
  using (auth.uid() = id);
