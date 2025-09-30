"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  useState(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("error") === "unauthorized_email") {
      setError("Access denied. Only thadacopy@gmail.com can access the admin dashboard.")
    }
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      if (email !== "thadacopy@gmail.com") {
        throw new Error("Access denied. Only thadacopy@gmail.com can access the admin dashboard.")
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error

      window.location.href = "/admin"
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">{t("adminLoginTitle")}</CardTitle>
              <CardDescription>{t("adminLoginDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@thada.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">{t("password")}</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-2"
                    />
                  </div>
                  {error && (
                    <div className="rounded-lg bg-[#C94444]/10 p-3 text-sm text-[#C94444] border-2 border-[#C94444]/30">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? t("loggingIn") : t("loginButton")}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
