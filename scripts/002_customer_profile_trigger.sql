-- Create function to automatically create customer profile on signup
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
    coalesce(new.raw_user_meta_data ->> 'full_name', null),
    coalesce(new.raw_user_meta_data ->> 'company_name', null)
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

-- Drop existing trigger if it exists
drop trigger if exists on_auth_customer_created on auth.users;

-- Create trigger to run after user signup
create trigger on_auth_customer_created
  after insert on auth.users
  for each row
  execute function public.handle_new_customer();
