import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default async function ErrorPage({ searchParams }: { searchParams: Promise<{ error: string }> }) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-2 border-red-200">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Authentication Error</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {params?.error ? (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border-2 border-red-200">
                  Error: {params.error}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  An unspecified error occurred during authentication.
                </p>
              )}
              <Button asChild className="w-full">
                <Link href="/auth/login">Back to Login</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
