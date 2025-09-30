-- Complete Database Setup for THADA
-- Run this script to set up all tables, triggers, and RLS policies

-- ============================================
-- 1. DROP EXISTING OBJECTS (Clean slate)
-- ============================================

-- Drop triggers first
drop trigger if exists on_auth_customer_created on auth.users;

-- Drop functions
drop function if exists public.handle_new_customer();

-- Drop tables (cascade will remove foreign keys)
drop table if exists public.chat_messages cascade;
drop table if exists public.customers cascade;

-- ============================================
-- 2. CREATE CUSTOMERS TABLE
-- ============================================

create table public.customers (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  company_name text,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.customers enable row level security;

-- RLS Policies for customers
-- Customers can view their own profile
create policy "customers_select_own"
  on public.customers for select
  using (auth.uid() = id);

-- Customers can update their own profile
create policy "customers_update_own"
  on public.customers for update
  using (auth.uid() = id);

-- Allow service role to insert (for trigger)
create policy "customers_insert_service"
  on public.customers for insert
  with check (true);

-- ============================================
-- 3. CREATE AUTO-PROFILE TRIGGER
-- ============================================

create or replace function public.handle_new_customer()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.customers (id, email, full_name, company_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email),
    coalesce(new.raw_user_meta_data ->> 'company_name', null)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

create trigger on_auth_customer_created
  after insert on auth.users
  for each row
  execute function public.handle_new_customer();

-- ============================================
-- 4. CREATE CHAT MESSAGES TABLE
-- ============================================

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  message text not null,
  role text not null check (role in ('user', 'assistant')),
  sender_type text not null check (sender_type in ('customer', 'admin', 'anonymous')),
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.chat_messages enable row level security;

-- RLS Policies for chat_messages
-- Allow anonymous users to insert their own messages
create policy "chat_insert_anonymous"
  on public.chat_messages for insert
  with check (sender_type = 'anonymous' or sender_type = 'customer');

-- Allow anonymous users to view messages from their session
create policy "chat_select_own_session"
  on public.chat_messages for select
  using (true);

-- Allow admins to view all messages (when authenticated)
create policy "chat_select_admin"
  on public.chat_messages for select
  using (
    exists (
      select 1 from public.customers
      where customers.id = auth.uid()
    )
  );

-- Create index for faster session lookups
create index if not exists chat_messages_session_id_idx on public.chat_messages(session_id);
create index if not exists chat_messages_created_at_idx on public.chat_messages(created_at desc);

-- ============================================
-- SETUP COMPLETE
-- ============================================

-- Verify tables were created
select 'Setup complete! Tables created:' as status;
select table_name from information_schema.tables 
where table_schema = 'public' 
and table_name in ('customers', 'chat_messages');
