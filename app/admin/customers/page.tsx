import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Users, Search } from "lucide-react"
import Link from "next/link"

export default async function CustomersPage() {
  const supabase = await createClient()

  // Check if admin is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user || user.email !== "thadacopy@gmail.com") {
    redirect("/auth/login")
  }

  // Fetch all users using admin client
  const adminClient = createAdminClient()
  const {
    data: { users },
    error,
  } = await adminClient.auth.admin.listUsers()

  if (error) {
    console.error("Error fetching users:", error)
  }

  // Separate users by type
  const customerUsers = users?.filter((u) => u.user_metadata?.user_type === "customer") || []
  const adminUsers =
    users?.filter((u) => !u.user_metadata?.user_type || u.user_metadata?.user_type !== "customer") || []
  const totalUsers = users?.length || 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Customer Management</h1>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{user.email}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalUsers}</div>
              <p className="text-xs text-muted-foreground mt-1">All registered accounts</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Customer Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{customerUsers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Business customers</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Admin Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{adminUsers.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Staff members</p>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Users</CardTitle>
                <CardDescription>View and manage all registered users</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>User Type</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Signed Up</TableHead>
                  <TableHead>Last Sign In</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users && users.length > 0 ? (
                  users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.email}</TableCell>
                      <TableCell>
                        {u.user_metadata?.user_type === "customer" ? (
                          <Badge variant="default">Customer</Badge>
                        ) : (
                          <Badge variant="secondary">Admin</Badge>
                        )}
                      </TableCell>
                      <TableCell>{u.user_metadata?.company_name || "-"}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(u.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleDateString() : "Never"}
                      </TableCell>
                      <TableCell>
                        {u.email_confirmed_at ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Verified
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Pending
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                      No users found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
