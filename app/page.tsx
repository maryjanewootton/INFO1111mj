import Link from "next/link"
import { Building } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import StrataLoginForm from "@/components/strata-login-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Building className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold">Strata Management Portal</h1>
        </div>

        <Card className="w-full max-w-md shadow-lg border-t-4 border-t-primary">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Strata Login</CardTitle>
            <CardDescription className="text-center">Access your building management account</CardDescription>
          </CardHeader>
          <CardContent>
            <StrataLoginForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground">
            <div className="w-full text-center">
              <Link href="#" className="text-primary hover:underline">
                Need help accessing your account?
              </Link>
            </div>
            <div className="w-full px-8">
              <p>This portal is for building owners, residents, and strata committee members.</p>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          <InfoCard title="Owners" description="Access financial reports, meeting minutes, and building notices." />
          <InfoCard
            title="Residents"
            description="Submit maintenance requests, book facilities, and view announcements."
          />
          <InfoCard
            title="Committee"
            description="Manage building operations, approve expenses, and schedule meetings."
          />
        </div>
      </div>
    </main>
  )
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

