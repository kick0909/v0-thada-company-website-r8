-- Fix chat_messages RLS policies to allow anonymous users to insert and read messages
-- This version uses DROP POLICY IF EXISTS to avoid conflicts

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous insert" ON chat_messages;
DROP POLICY IF EXISTS "Allow anonymous read" ON chat_messages;
DROP POLICY IF EXISTS "Allow authenticated insert" ON chat_messages;
DROP POLICY IF EXISTS "Allow authenticated read" ON chat_messages;
DROP POLICY IF EXISTS "Allow all to insert messages" ON chat_messages;
DROP POLICY IF EXISTS "Allow all to read messages" ON chat_messages;

-- Enable RLS on chat_messages table
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Create permissive policies that allow anyone (including anonymous users) to insert and read
CREATE POLICY "Allow all to insert messages" ON chat_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow all to read messages" ON chat_messages
  FOR SELECT
  TO public
  USING (true);

-- Grant necessary permissions to anonymous role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT, SELECT ON chat_messages TO anon;
GRANT USAGE, SELECT ON SEQUENCE chat_messages_id_seq TO anon;
