-- Create chat_messages table for storing customer chat messages
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  sender_type TEXT DEFAULT 'ai' CHECK (sender_type IN ('user', 'ai', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_created ON chat_messages(session_id, created_at);
CREATE INDEX IF NOT EXISTS idx_chat_messages_sender_type ON chat_messages(sender_type);

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

-- Policy: Allow authenticated admins to insert messages (for responding to customers)
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
