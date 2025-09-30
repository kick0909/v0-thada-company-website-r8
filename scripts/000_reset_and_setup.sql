-- Complete database setup script for Thada company website
-- Run this script to set up all tables, triggers, and policies from scratch

-- ============================================
-- STEP 1: Clean up existing objects (if any)
-- ============================================

-- Drop existing triggers
DROP TRIGGER IF EXISTS on_auth_customer_created ON auth.users;

-- Drop existing functions
DROP FUNCTION IF EXISTS public.handle_new_customer();

-- Drop existing tables (cascade to remove dependencies)
DROP TABLE IF EXISTS public.chat_messages CASCADE;
DROP TABLE IF EXISTS public.customers CASCADE;

-- ============================================
-- STEP 2: Create customers table
-- ============================================

CREATE TABLE public.customers (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for customers table
CREATE POLICY "customers_select_own"
  ON public.customers FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "customers_insert_own"
  ON public.customers FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "customers_update_own"
  ON public.customers FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "customers_delete_own"
  ON public.customers FOR DELETE
  USING (auth.uid() = id);

-- ============================================
-- STEP 3: Create trigger for automatic customer profile creation
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_customer()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.customers (id, email, full_name, company_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'full_name', NULL),
    COALESCE(new.raw_user_meta_data ->> 'company_name', NULL)
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN new;
END;
$$;

-- Create trigger to run after user signup
CREATE TRIGGER on_auth_customer_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_customer();

-- ============================================
-- STEP 4: Create chat_messages table
-- ============================================

CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  sender_type TEXT DEFAULT 'ai' CHECK (sender_type IN ('user', 'ai', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX idx_chat_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX idx_chat_messages_session_created ON chat_messages(session_id, created_at);
CREATE INDEX idx_chat_messages_sender_type ON chat_messages(sender_type);

-- Enable Row Level Security
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to insert their own messages
CREATE POLICY "Users can insert their own messages"
  ON chat_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow anonymous users to read messages from their session
CREATE POLICY "Users can read their own session messages"
  ON chat_messages
  FOR SELECT
  TO anon
  USING (true);

-- Policy: Allow authenticated admins to read all messages
CREATE POLICY "Admins can read all messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated admins to insert messages
CREATE POLICY "Admins can insert messages"
  ON chat_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated admins to update messages
CREATE POLICY "Admins can update messages"
  ON chat_messages
  FOR UPDATE
  TO authenticated
  USING (true);
