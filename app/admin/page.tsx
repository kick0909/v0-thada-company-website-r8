import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LayoutDashboard, Package, Wrench, Users, LogOut, LogIn, MessageCircle } from "lucide-react"
import Link from "next/link"

async function signOut() {
  "use server"
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/admin")
}

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAuthorizedEmail = user?.email === "thadacopy@gmail.com"

  if (!user || !isAuthorizedEmail) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-2">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
            <CardDescription>
              {!user
                ? "Please sign in to access the admin dashboard and manage your business"
                : "Access denied. Only thadacopy@gmail.com can access this dashboard."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full" size="lg">
              <Link href="/auth/login">
                <LogIn className="mr-2 h-4 w-4" />
                {!user ? "Sign In" : "Sign In with Authorized Account"}
              </Link>
            </Button>
            {user && !isAuthorizedEmail && (
              <div className="text-center text-sm text-muted-foreground">
                <Link href="/auth/login" className="text-primary hover:underline font-medium">
                  Sign in with authorized account
                </Link>
              </div>
            )}
            {!user && (
              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/auth/sign-up" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">THADA Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <form action={signOut}>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Manage your office equipment rental business from here.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Chat Management</CardTitle>
              </div>
              <CardDescription>View and respond to customer chats</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/admin/chats">View Chats</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Rental Management</CardTitle>
              </div>
              <CardDescription>View and manage equipment rentals</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/admin/rentals">Manage Rentals</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Maintenance Requests</CardTitle>
              </div>
              <CardDescription>Handle maintenance and support tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/admin/maintenance">View Requests</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Customer Management</CardTitle>
              </div>
              <CardDescription>Manage customer accounts and data</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/admin/customers">View Customers</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Rentals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground mt-1">+3 from last month</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">7</div>
              <p className="text-xs text-muted-foreground mt-1">2 urgent requests</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">156</div>
              <p className="text-xs text-muted-foreground mt-1">+12 this month</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
