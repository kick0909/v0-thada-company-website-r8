import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChatConversation } from "./chat-conversation"

interface PageProps {
  params: Promise<{
    sessionId: string
  }>
}

export default async function ChatSessionPage({ params }: PageProps) {
  const { sessionId } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "thadacopy@gmail.com") {
    redirect("/auth/login")
  }

  const adminSupabase = createAdminClient()

  // Fetch all messages for this session
  const { data: messages, error } = await adminSupabase
    .from("chat_messages")
    .select("*")
    .eq("session_id", sessionId)
    .order("created_at", { ascending: true })

  if (error || !messages || messages.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Link href="/admin/chats">
          <Button variant="outline" className="mb-4 bg-transparent">
            ← Back to All Chats
          </Button>
        </Link>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Chat session not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Link href="/admin/chats">
        <Button variant="outline" className="mb-4 bg-transparent">
          ← Back to All Chats
        </Button>
      </Link>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Chat Session: {sessionId.slice(0, 8)}...</CardTitle>
          <p className="text-sm text-muted-foreground">{messages.length} messages</p>
        </CardHeader>
      </Card>

      <ChatConversation sessionId={sessionId} initialMessages={messages} adminEmail={user.email || ""} />
    </div>
  )
}
