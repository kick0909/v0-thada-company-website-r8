"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Copy } from "lucide-react"

export default function SetupChatDatabase() {
  const [copied, setCopied] = useState(false)

  const sqlScript = `-- Create chat_messages table to store customer conversations
create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null,
  message text not null,
  role text not null check (role in ('user', 'assistant')),
  created_at timestamp with time zone default now()
);

-- Create indexes for faster queries
create index if not exists chat_messages_session_id_idx on public.chat_messages(session_id);
create index if not exists chat_messages_created_at_idx on public.chat_messages(created_at desc);

-- Enable Row Level Security
alter table public.chat_messages enable row level security;

-- Allow anyone to insert messages (for customer support chatbot)
create policy "Anyone can insert chat messages"
  on public.chat_messages
  for insert
  with check (true);

-- Allow anyone to read messages (for customer support chatbot)
create policy "Anyone can read chat messages"
  on public.chat_messages
  for select
  using (true);`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sqlScript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Setup Chat Database</h1>
          <p className="text-muted-foreground mt-2">Enable chat message storage in Supabase</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>Copy the SQL script and run it in your Supabase Dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{sqlScript}</code>
              </pre>
              <Button size="sm" variant="secondary" className="absolute top-2 right-2" onClick={copyToClipboard}>
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium">Steps to complete setup:</p>
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>Click the "Copy" button above to copy the SQL script</li>
                <li>
                  Go to your{" "}
                  <a
                    href="https://supabase.com/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Supabase Dashboard
                  </a>
                </li>
                <li>Select your project</li>
                <li>Click on "SQL Editor" in the left sidebar</li>
                <li>Click "New query"</li>
                <li>Paste the copied SQL script</li>
                <li>Click "Run" to execute the script</li>
                <li>You're done! The chat widget will now save all conversations</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>View Chat Messages</CardTitle>
            <CardDescription>Access your stored conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              After setup, you can view all chat messages in the Supabase Dashboard:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Go to "Table Editor" in your Supabase Dashboard</li>
              <li>Select the "chat_messages" table</li>
              <li>View all customer conversations grouped by session_id</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="text-blue-900">Note</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-800">
              The chat widget will continue to work even if the database isn't set up yet. Messages will just be stored
              in memory (and lost on page refresh). Once you complete the setup above, all future conversations will be
              automatically saved to your database.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
