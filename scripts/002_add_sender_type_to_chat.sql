-- Add sender_type column to distinguish between AI and manual admin responses
ALTER TABLE chat_messages
ADD COLUMN sender_type TEXT DEFAULT 'ai' CHECK (sender_type IN ('user', 'ai', 'admin'));

-- Update existing assistant messages to be 'ai' type
UPDATE chat_messages
SET sender_type = CASE
  WHEN role = 'user' THEN 'user'
  WHEN role = 'assistant' THEN 'ai'
  ELSE 'ai'
END;

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_chat_messages_sender_type ON chat_messages(sender_type);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_created ON chat_messages(session_id, created_at);
