import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Clock, Wrench, User, LogOut, Building2 } from "lucide-react"
import Link from "next/link"

async function signOut() {
  "use server"
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/customer/login")
}

export default async function CustomerDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/customer/login")
  }

  const companyName = user.user_metadata?.company_name || "Your Company"

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            <div>
              <h1 className="text-lg font-bold">THADA Customer Portal</h1>
              <p className="text-xs text-muted-foreground">{companyName}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{user.email}</span>
            </div>
            <form action={signOut}>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Welcome back!</h2>
          <p className="text-muted-foreground">Manage your equipment rentals and maintenance requests</p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Rentals</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground mt-1">2 due for return this month</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">1</div>
              <p className="text-xs text-muted-foreground mt-1">Maintenance request in progress</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">$2,450</div>
              <p className="text-xs text-muted-foreground mt-1">This quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Rentals */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Current Rentals</h3>
            <Button asChild>
              <Link href="/products">Browse Equipment</Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">HP LaserJet Pro</CardTitle>
                    <CardDescription>Printer</CardDescription>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental period:</span>
                  <span className="font-medium">6 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Return date:</span>
                  <span className="font-medium">Apr 15, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monthly rate:</span>
                  <span className="font-medium">$89/mo</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                  <Wrench className="h-4 w-4 mr-2" />
                  Request Maintenance
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Dell OptiPlex 7090</CardTitle>
                    <CardDescription>Desktop Computer</CardDescription>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental period:</span>
                  <span className="font-medium">12 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Return date:</span>
                  <span className="font-medium">Aug 30, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monthly rate:</span>
                  <span className="font-medium">$125/mo</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                  <Wrench className="h-4 w-4 mr-2" />
                  Request Maintenance
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Canon ImageRunner</CardTitle>
                    <CardDescription>Multifunction Copier</CardDescription>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rental period:</span>
                  <span className="font-medium">24 months</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Return date:</span>
                  <span className="font-medium">Dec 1, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monthly rate:</span>
                  <span className="font-medium">$199/mo</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                  <Wrench className="h-4 w-4 mr-2" />
                  Request Maintenance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Quick Actions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Request Maintenance</CardTitle>
                    <CardDescription>Get support for your equipment</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Rental History</CardTitle>
                    <CardDescription>View past and current rentals</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
