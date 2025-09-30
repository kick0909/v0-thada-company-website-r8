-- Fix RLS policies to allow trigger to insert customer records
-- The trigger needs to be able to insert without auth.uid() being set

-- Drop existing policies
drop policy if exists "customers_insert_own" on public.customers;

-- Recreate insert policy that allows both user inserts and trigger inserts
create policy "customers_insert_own"
  on public.customers for insert
  with check (
    auth.uid() = id OR  -- Allow users to insert their own record
    auth.uid() IS NULL  -- Allow trigger (which runs without auth context) to insert
  );

-- Also add a policy for service role to manage all customers (for admin access)
create policy "customers_admin_all"
  on public.customers for all
  using (
    auth.jwt() ->> 'role' = 'service_role'
  );
