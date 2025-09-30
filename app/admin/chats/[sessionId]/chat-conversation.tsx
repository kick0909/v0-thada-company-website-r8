"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, UserCog } from "lucide-react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"

interface Message {
  id: string
  session_id: string
  message: string
  role: string
  sender_type?: string
  created_at: string
}

interface ChatConversationProps {
  sessionId: string
  initialMessages: Message[]
  adminEmail: string
}

export function ChatConversation({ sessionId, initialMessages, adminEmail }: ChatConversationProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Poll for new messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      const { data: newMessages } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("session_id", sessionId)
        .order("created_at", { ascending: true })

      if (newMessages && newMessages.length > messages.length) {
        setMessages(newMessages)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [sessionId, messages.length, supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isSending) return

    setIsSending(true)

    try {
      const { data, error } = await supabase
        .from("chat_messages")
        .insert({
          session_id: sessionId,
          message: input.trim(),
          role: "assistant",
          sender_type: "admin",
        })
        .select()
        .single()

      if (error) throw error

      if (data) {
        setMessages((prev) => [...prev, data])
      }

      setInput("")
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const getMessageIcon = (msg: Message) => {
    if (msg.role === "user") {
      return <User className="h-4 w-4" />
    }
    if (msg.sender_type === "admin") {
      return <UserCog className="h-4 w-4" />
    }
    return <Bot className="h-4 w-4" />
  }

  const getMessageLabel = (msg: Message) => {
    if (msg.role === "user") {
      return "Customer"
    }
    if (msg.sender_type === "admin") {
      return "You (Admin)"
    }
    return "AI Bot"
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
              >
                {message.role !== "user" && (
                  <div
                    className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.sender_type === "admin" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700",
                    )}
                  >
                    {getMessageIcon(message)}
                  </div>
                )}

                <div className={cn("flex flex-col", message.role === "user" ? "items-end" : "items-start")}>
                  <p className="text-xs text-muted-foreground mb-1">{getMessageLabel(message)}</p>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : message.sender_type === "admin"
                          ? "bg-green-50 border border-green-200 rounded-bl-sm dark:bg-green-950 dark:border-green-800"
                          : "bg-muted border border-border rounded-bl-sm",
                    )}
                  >
                    {message.message}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(message.created_at).toLocaleTimeString()}
                  </p>
                </div>

                {message.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {getMessageIcon(message)}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response to the customer..."
              className="flex-1"
              disabled={isSending}
            />
            <Button type="submit" disabled={!input.trim() || isSending}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">
            Your response will be sent to the customer and appear in their chat widget
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
