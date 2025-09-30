"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"

interface Message {
  role: "user" | "assistant"
  content: string
}

const getSessionId = (): string => {
  if (typeof window === "undefined") return ""

  let sessionId = localStorage.getItem("chat_session_id")
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    localStorage.setItem("chat_session_id", sessionId)
  }
  return sessionId
}

const getKeywordResponse = (message: string, language: string): string => {
  const lowerMessage = message.toLowerCase()

  // Thai responses
  if (language === "th") {
    if (lowerMessage.includes("ราคา") || lowerMessage.includes("เช่า") || lowerMessage.includes("ค่าใช้จ่าย")) {
      return "ราคาเช่าเครื่องถ่ายเอกสารของเราเริ่มต้นที่ 2,500 บาท/เดือน สำหรับรุ่นขาว-ดำ และ 4,500 บาท/เดือน สำหรับรุ่นสี รวมค่าบำรุงรักษาและหมึกพิมพ์แล้ว สามารถติดต่อเพื่อขอใบเสนอราคาที่ 064-797-9944"
    }
    if (lowerMessage.includes("สี") || lowerMessage.includes("รุ่น") || lowerMessage.includes("โมเดล")) {
      return "เรามีเครื่องถ่ายเอกสารสีหลายรุ่น เช่น Canon imageRUNNER ADVANCE, Ricoh MP C Series และ Xerox AltaLink ทุกรุ่นรองรับการพิมพ์ สแกน และถ่ายเอกสารสี คุณภาพสูง สามารถดูรายละเอียดเพิ่มเติมได้ที่หน้าผลิตภัณฑ์"
    }
    if (lowerMessage.includes("บำรุงรักษา") || lowerMessage.includes("ซ่อม") || lowerMessage.includes("บริการ")) {
      return "เรามีบริการบำรุงรักษาครบวงจร รวมถึงการตรวจเช็คเครื่องสม่ำเสมอ เปลี่ยนอะไหล่ และซ่อมแซมฟรี ทีมช่างของเราพร้อมให้บริการภายใน 24 ชั่วโมง หลังแจ้งปัญหา"
    }
    if (
      lowerMessage.includes("ติดต่อ") ||
      lowerMessage.includes("โทร") ||
      lowerMessage.includes("อีเมล") ||
      lowerMessage.includes("ที่อยู่")
    ) {
      return "ติดต่อเราได้ที่:\n📞 โทร: 064-797-9944\n📧 อีเมล: thadacopy@gmail.com\n📍 ที่อยู่: 123 ถนนสุขุมวิท กรุงเทพฯ 10110\n⏰ เปิดทำการ: จันทร์-ศุกร์ 8:00-17:00 น."
    }
    if (lowerMessage.includes("ขาว-ดำ") || lowerMessage.includes("ขาวดำ") || lowerMessage.includes("ธรรมดา")) {
      return "เครื่องถ่ายเอกสารขาว-ดำของเรามีหลายรุ่น เหมาะสำหรับงานเอกสารทั่วไป ราคาเช่าเริ่มต้น 2,500 บาท/เดือน รวมค่าบำรุงรักษาและหมึกพิมพ์ ความเร็วพิมพ์ 30-60 แผ่น/นาที"
    }
    if (lowerMessage.includes("ขอบคุณ") || lowerMessage.includes("ขอบใจ")) {
      return "ยินดีครับ! หากมีคำถามเพิ่มเติม สามารถสอบถามได้ตลอดเวลานะครับ 😊"
    }
    if (lowerMessage.includes("สวัสดี") || lowerMessage.includes("หวัดดี")) {
      return "สวัสดีครับ! ยินดีต้อนรับสู่ธาดาก็อปปี้ แอนด์ ซัพพลาย มีอะไรให้ช่วยเหลือครับ?"
    }
    return "ขอบคุณสำหรับคำถามครับ ทีมงานของเราจะติดต่อกลับโดยเร็วที่สุด หรือสามารถโทรติดต่อได้ที่ 064-797-9944 ครับ"
  }

  // English responses
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("rental") ||
    lowerMessage.includes("rent")
  ) {
    return "Our copier rental prices start at 2,500 THB/month for black & white models and 4,500 THB/month for color models. This includes maintenance and toner. Contact us at 064-797-9944 for a detailed quote."
  }
  if (lowerMessage.includes("color") || lowerMessage.includes("model") || lowerMessage.includes("copier")) {
    return "We offer various color copier models including Canon imageRUNNER ADVANCE, Ricoh MP C Series, and Xerox AltaLink. All models support high-quality color printing, scanning, and copying. Visit our Products page for more details."
  }
  if (lowerMessage.includes("maintenance") || lowerMessage.includes("service") || lowerMessage.includes("repair")) {
    return "We provide comprehensive maintenance services including regular inspections, parts replacement, and free repairs. Our technicians are available within 24 hours of your service request."
  }
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("address")
  ) {
    return "Contact us:\n📞 Phone: 064-797-9944\n📧 Email: thadacopy@gmail.com\n📍 Address: 123 Sukhumvit Road, Bangkok 10110\n⏰ Hours: Mon-Fri 8:00-17:00"
  }
  if (lowerMessage.includes("black") || lowerMessage.includes("white") || lowerMessage.includes("monochrome")) {
    return "Our black & white copiers are perfect for standard document work. Rental starts at 2,500 THB/month including maintenance and toner. Print speeds range from 30-60 pages/minute."
  }
  if (lowerMessage.includes("thank")) {
    return "You're welcome! Feel free to ask if you have any other questions. 😊"
  }
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! Welcome to Thada Copy and Supply. How can I help you today?"
  }

  return "Thank you for your question. Our team will get back to you shortly, or you can call us directly at 064-797-9944."
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const [sessionId, setSessionId] = useState<string>("")

  const suggestedQuestions =
    language === "th"
      ? ["ราคาเช่าเครื่องถ่ายเอกสารเท่าไหร่?", "มีเครื่องถ่ายเอกสารสีรุ่นไหนบ้าง?", "บริการบำรุงรักษาเป็นอย่างไร?", "ติดต่อทีมขายได้อย่างไร?"]
      : [
          "What are your rental prices?",
          "What color copiers do you have?",
          "How does maintenance work?",
          "How can I contact sales?",
        ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setSessionId(getSessionId())
  }, [])

  const saveMessageToDb = async (message: Message) => {
    if (!sessionId) return

    try {
      const supabase = createClient()
      const { error } = await supabase.from("chat_messages").insert({
        session_id: sessionId,
        message: message.content,
        role: message.role,
        sender_type: message.role === "user" ? "user" : "ai",
      })

      if (error) {
        console.log("[v0] Chat messages not saving. Please run the SQL script: scripts/004_fix_chat_rls_policies.sql")
        console.log("[v0] Error details:", error.message)
      } else {
        console.log("[v0] Chat message saved successfully")
      }
    } catch (error) {
      console.log("[v0] Chat database error. Please run: scripts/004_fix_chat_rls_policies.sql")
    }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage = {
        role: "assistant" as const,
        content:
          language === "th"
            ? "สวัสดีครับ! ยินดีต้อนรับสู่ธาดาก็อปปี้ แอนด์ ซัพพลาย มีอะไรให้ช่วยเหลือครับ?"
            : "Hello! Welcome to Thada Copy and Supply. How can I help you today?",
      }
      setMessages([greetingMessage])
      saveMessageToDb(greetingMessage)
    }
  }, [isOpen, language, messages.length])

  useEffect(() => {
    if (!isOpen || !sessionId) return

    const pollForAdminMessages = async () => {
      try {
        const supabase = createClient()
        const { data: dbMessages } = await supabase
          .from("chat_messages")
          .select("*")
          .eq("session_id", sessionId)
          .order("created_at", { ascending: true })

        if (dbMessages && dbMessages.length > messages.length) {
          // Convert DB messages to component message format
          const formattedMessages = dbMessages.map((msg: any) => ({
            role: msg.role as "user" | "assistant",
            content: msg.message,
          }))
          setMessages(formattedMessages)
        }
      } catch (error) {
        // Silently fail if database is not set up
      }
    }

    const interval = setInterval(pollForAdminMessages, 3000)
    return () => clearInterval(interval)
  }, [isOpen, sessionId, messages.length])

  const handleQuickReply = (question: string) => {
    setInput(question)
    handleSubmit(new Event("submit") as any, question)
  }

  const handleSubmit = async (e: React.FormEvent, quickReplyText?: string) => {
    e.preventDefault()
    const messageText = quickReplyText || input.trim()
    if (!messageText) return

    setInput("")

    const userMessage = { role: "user" as const, content: messageText }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    await saveMessageToDb(userMessage)

    setTimeout(async () => {
      const response = getKeywordResponse(messageText, language)
      const assistantMessage = { role: "assistant" as const, content: response }
      setMessages((prev) => [...prev, assistantMessage])
      await saveMessageToDb(assistantMessage)
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110 z-50",
          isOpen && "scale-0",
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">
                  {language === "th" ? "ธาดาก็อปปี้ แอนด์ ซัพพลาย" : "Thada Copy & Supply"}
                </h3>
                <p className="text-xs opacity-90">{language === "th" ? "ทีมงานพร้อมให้บริการ" : "Customer Support"}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm shadow-sm",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleQuickReply(question)}
                  className="px-3 py-1.5 text-xs rounded-full bg-muted hover:bg-muted/80 border border-border transition-colors text-left"
                >
                  {question}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === "th" ? "พิมพ์ข้อความ..." : "Type a message..."}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
