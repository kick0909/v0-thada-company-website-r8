"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, CheckCircle, AlertCircle, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Building2 } from "lucide-react"

export default function CustomerSignUpSuccessPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen w-full">
      <div className="absolute top-6 right-6 z-10">
        <LanguageSwitcher />
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between text-primary-foreground">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-10 w-10" />
            <span className="text-3xl font-bold">THADA</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight">{t("verifyEmailTitle")}</h1>
            <p className="text-lg text-primary-foreground/90">{t("verifyEmailDescription")}</p>
          </div>

          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 flex-shrink-0">
                <span className="text-sm font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold">{t("checkInboxTitle")}</p>
                <p className="text-sm text-primary-foreground/80">{t("checkInboxDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 flex-shrink-0">
                <span className="text-sm font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold">{t("clickConfirmTitle")}</p>
                <p className="text-sm text-primary-foreground/80">{t("clickConfirmDesc")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/20 flex-shrink-0">
                <span className="text-sm font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold">{t("startRentingTitle")}</p>
                <p className="text-sm text-primary-foreground/80">{t("startRentingDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-primary-foreground/70">{t("copyrightText")}</div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 md:p-10 bg-background">
        <div className="w-full max-w-lg">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-3xl">{t("verifyEmailTitle")}</CardTitle>
                <CardDescription className="text-base">{t("verifyEmailDescription")}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-muted/50 p-5 space-y-4 border">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{t("checkInboxTitle")}</p>
                    <p className="text-sm text-muted-foreground">{t("checkInboxDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{t("clickConfirmTitle")}</p>
                    <p className="text-sm text-muted-foreground">{t("clickConfirmDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{t("startRentingTitle")}</p>
                    <p className="text-sm text-muted-foreground">{t("startRentingDesc")}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 space-y-3 border border-blue-200 dark:border-blue-900">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">{t("checkSpamFolder")}</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{t("checkSpamFolderDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">{t("waitFewMinutes")}</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{t("waitFewMinutesDesc")}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full h-11 bg-primary hover:bg-primary/90">
                  <Link href="/customer/login">{t("goToSignIn")}</Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  {t("didntReceiveEmail")}{" "}
                  <Link href="#" className="text-primary hover:underline font-medium">
                    {t("resendConfirmation")}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
