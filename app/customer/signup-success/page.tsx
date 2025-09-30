import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, CheckCircle } from "lucide-react"

export default function CustomerSignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-muted/30">
      <div className="w-full max-w-lg">
        <Card className="border-2">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl">Check your email</CardTitle>
              <CardDescription className="text-base">
                We've sent you a confirmation link to verify your account
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-muted p-4 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Check your inbox</p>
                  <p className="text-sm text-muted-foreground">
                    Look for an email from THADA with your confirmation link
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Click the confirmation link</p>
                  <p className="text-sm text-muted-foreground">This verifies your email and activates your account</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Start renting</p>
                  <p className="text-sm text-muted-foreground">Once confirmed, sign in to browse and rent equipment</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full h-11">
                <Link href="/customer/login">Go to sign in</Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Didn't receive the email?{" "}
                <Link href="#" className="text-primary hover:underline font-medium">
                  Resend confirmation
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
