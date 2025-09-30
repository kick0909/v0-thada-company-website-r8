import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, User, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ChatSession {
  session_id: string
  last_message: string
  last_message_time: string
  message_count: number
  has_user_message: boolean
}

export default async function AdminChatsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const adminSupabase = createAdminClient()

  // Fetch all chat messages and group by session
  const { data: messages, error } = await adminSupabase
    .from("chat_messages")
    .select("session_id, message, created_at, role")
    .order("created_at", { ascending: false })

  // If table doesn't exist, show setup instructions
  if (error && error.code === "PGRST205") {
    return (
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/admin">
            <Button variant="outline" className="mb-4 bg-transparent">
              ← Back to Admin Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Customer Chat Sessions</h1>
        </div>

        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Database Not Set Up</AlertTitle>
          <AlertDescription>
            The chat_messages table hasn't been created yet. Please set up the database first.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Setup Required</CardTitle>
            <CardDescription>Follow these steps to enable chat management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Step 1: Create the Database Table</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Go to the setup page and follow the instructions to create the chat_messages table:
              </p>
              <Link href="/setup-chat-db">
                <Button>Go to Database Setup</Button>
              </Link>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Step 2: Return Here</h3>
              <p className="text-sm text-muted-foreground">
                Once you've created the table, refresh this page to start managing customer chats.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  let chatSessions: ChatSession[] = []

  if (messages) {
    // Group by session_id
    const sessionMap = new Map<string, ChatSession>()

    messages.forEach((msg) => {
      if (!sessionMap.has(msg.session_id)) {
        sessionMap.set(msg.session_id, {
          session_id: msg.session_id,
          last_message: msg.message,
          last_message_time: msg.created_at,
          message_count: 1,
          has_user_message: msg.role === "user",
        })
      } else {
        const session = sessionMap.get(msg.session_id)!
        session.message_count++
        if (msg.role === "user") {
          session.has_user_message = true
        }
      }
    })

    chatSessions = Array.from(sessionMap.values()).sort(
      (a, b) => new Date(b.last_message_time).getTime() - new Date(a.last_message_time).getTime(),
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8">
        <Link href="/admin">
          <Button variant="outline" className="mb-4 bg-transparent">
            ← Back to Admin Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mb-2">Customer Chat Sessions</h1>
        <p className="text-muted-foreground">View and respond to customer inquiries</p>
      </div>

      <div className="grid gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Chat Statistics</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Sessions</p>
              <p className="text-2xl font-bold">{chatSessions.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Today</p>
              <p className="text-2xl font-bold">
                {
                  chatSessions.filter((s) => {
                    const today = new Date()
                    const msgDate = new Date(s.last_message_time)
                    return msgDate.toDateString() === today.toDateString()
                  }).length
                }
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Messages</p>
              <p className="text-2xl font-bold">{chatSessions.reduce((sum, s) => sum + s.message_count, 0)}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {chatSessions.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No chat sessions yet</p>
            <p className="text-sm text-muted-foreground mt-2">Customer conversations will appear here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {chatSessions.map((session) => (
            <Link key={session.session_id} href={`/admin/chats/${session.session_id}`}>
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Session {session.session_id.slice(0, 8)}...</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3" />
                          {new Date(session.last_message_time).toLocaleString()}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{session.message_count} messages</p>
                      {session.has_user_message && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          Has questions
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{session.last_message}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
