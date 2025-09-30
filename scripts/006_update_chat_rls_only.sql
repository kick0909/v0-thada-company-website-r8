-- Fix RLS policies for chat_messages table to allow anonymous users to save messages
-- This script only updates the policies without touching the table structure

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous insert" ON chat_messages;
DROP POLICY IF EXISTS "Allow anonymous select" ON chat_messages;
DROP POLICY IF EXISTS "Allow admin full access" ON chat_messages;
DROP POLICY IF EXISTS "Allow customer read own messages" ON chat_messages;

-- Create new permissive policies
-- Allow anyone (including anonymous users) to insert chat messages
CREATE POLICY "Allow anonymous insert" ON chat_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read all chat messages
CREATE POLICY "Allow anonymous select" ON chat_messages
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow authenticated users (admin) full access
CREATE POLICY "Allow admin full access" ON chat_messages
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
