"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Building2, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { createBrowserClient } from "@supabase/ssr"

export default function CustomerSignUpPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      console.log("[v0] Starting signup process for:", formData.email)
      console.log("[v0] Company name:", formData.companyName)

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/products`,
          data: {
            full_name: formData.email.split("@")[0],
            company_name: formData.companyName || null,
            user_type: "customer",
          },
        },
      })

      if (authError) {
        console.error("[v0] Signup error:", authError)
        console.error("[v0] Error code:", authError.code)
        console.error("[v0] Error message:", authError.message)
        console.error("[v0] Error details:", authError)
        throw new Error(authError.message)
      }

      console.log("[v0] Auth signup successful:", authData.user?.id)

      if (authData.user) {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const { data: customerData, error: customerError } = await supabase
          .from("customers")
          .select("*")
          .eq("id", authData.user.id)
          .single()

        if (customerError) {
          console.error("[v0] Customer record check error:", customerError)
        } else {
          console.log("[v0] Customer record created:", customerData)
        }

        router.push("/customer/signup-success")
      }
    } catch (error: unknown) {
      console.error("[v0] Caught error:", error)
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>

      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">{t("backToHome")}</span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-10 w-10" />
            <span className="text-3xl font-bold">THADA</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight">{t("startRenting")}</h1>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{t("easyOrdering")}</p>
                <p className="text-sm text-primary-foreground/80">{t("easyOrderingDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{t("trackRentals")}</p>
                <p className="text-sm text-primary-foreground/80">{t("trackRentalsDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{t("support247")}</p>
                <p className="text-sm text-primary-foreground/80">{t("support247Desc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-primary-foreground/70">{t("copyrightText")}</div>
      </div>

      {/* Right side - Signup form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 md:p-10 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">{t("backToHome")}</span>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight">{t("customerSignupTitle")}</h2>
              <p className="text-muted-foreground">{t("customerSignupDescription")}</p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">{t("companyName")}</Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Your Company Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("workEmail")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">{t("password")}</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t("passwordPlaceholder")}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">{t("confirmPassword")}</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder={t("confirmPasswordPlaceholder")}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      {t("agreeToTerms")}{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        {t("termsOfService")}
                      </Link>{" "}
                      {t("and")}{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        {t("privacyPolicy")}
                      </Link>
                    </label>
                  </div>

                  {error && (
                    <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
                      {error}
                    </div>
                  )}

                  <Button type="submit" className="w-full h-11" disabled={isLoading}>
                    {isLoading ? t("creatingAccount") : t("createAccountButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">{t("alreadyHaveAccount")} </span>
              <Link href="/customer/login" className="text-primary hover:underline font-medium">
                {t("signInLink")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
