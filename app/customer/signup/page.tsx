"use client"

import type React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Building2, ArrowLeft, CheckCircle2 } from "lucide-react"

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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
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
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/customer/dashboard`,
          data: {
            company_name: formData.companyName,
            user_type: "customer",
          },
        },
      })
      if (error) throw error
      router.push("/customer/signup-success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to home</span>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-10 w-10" />
            <span className="text-3xl font-bold">THADA</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight">Start renting professional office equipment today</h1>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Easy online ordering</p>
                <p className="text-sm text-primary-foreground/80">Browse and rent equipment in minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Track your rentals</p>
                <p className="text-sm text-primary-foreground/80">Manage all your equipment from one dashboard</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">24/7 support</p>
                <p className="text-sm text-primary-foreground/80">Request maintenance anytime you need it</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-primary-foreground/70">© 2025 THADA. Professional office equipment solutions.</div>
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
              <span className="text-sm font-medium">Back to home</span>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight">Create your account</h2>
              <p className="text-muted-foreground">Get started with THADA equipment rentals</p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company name</Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Your Company Inc."
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
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
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="At least 8 characters"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter your password"
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
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {error && (
                    <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20">
                      {error}
                    </div>
                  )}

                  <Button type="submit" className="w-full h-11" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/customer/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
