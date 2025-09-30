-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Users can insert their own messages" ON chat_messages;
DROP POLICY IF EXISTS "Users can read their own session messages" ON chat_messages;
DROP POLICY IF EXISTS "Admins can read all messages" ON chat_messages;
DROP POLICY IF EXISTS "Admins can insert messages" ON chat_messages;
DROP POLICY IF EXISTS "Admins can update messages" ON chat_messages;
DROP POLICY IF EXISTS "Anyone can insert chat messages" ON chat_messages;
DROP POLICY IF EXISTS "Anyone can read chat messages" ON chat_messages;

-- Enable RLS (in case it's not enabled)
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Allow ANYONE (including anonymous users) to insert messages
CREATE POLICY "Allow anonymous insert"
  ON chat_messages
  FOR INSERT
  WITH CHECK (true);

-- Allow ANYONE (including anonymous users) to read all messages
CREATE POLICY "Allow anonymous select"
  ON chat_messages
  FOR SELECT
  USING (true);

-- Allow authenticated users (admins) to update messages
CREATE POLICY "Allow authenticated update"
  ON chat_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users (admins) to delete messages
CREATE POLICY "Allow authenticated delete"
  ON chat_messages
  FOR DELETE
  TO authenticated
  USING (true);
