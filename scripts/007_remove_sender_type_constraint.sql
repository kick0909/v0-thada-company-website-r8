-- Remove the sender_type check constraint that's blocking chat messages
-- This allows the chat widget to insert messages without constraint violations

ALTER TABLE chat_messages 
DROP CONSTRAINT IF EXISTS chat_messages_sender_type_check;

-- Verify the constraint is removed
SELECT 
    conname AS constraint_name,
    contype AS constraint_type
FROM pg_constraint
WHERE conrelid = 'chat_messages'::regclass;
