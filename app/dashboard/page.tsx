import type React from "react"
import { Building, DollarSign, FileText, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StrataPaymentForm from "@/components/strata-payment-form"
import DashboardHeader from "@/components/dashboard-header"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container py-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Strata Payments</h1>
            <p className="text-muted-foreground">Make payments for your quarterly strata levies</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            View Payment History
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PaymentSummaryCard
            title="Administration Fund"
            amount={850.0}
            dueDate="March 31, 2025"
            description="Covers day-to-day expenses like cleaning, gardening, and insurance."
            icon={<DollarSign className="h-5 w-5" />}
          />

          <PaymentSummaryCard
            title="Capital Works Fund"
            amount={650.0}
            dueDate="March 31, 2025"
            description="Funds major repairs and improvements to common property."
            icon={<Building className="h-5 w-5" />}
          />

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Total Due</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$1,500.00</div>
              <p className="text-sm text-muted-foreground mt-1">Due by March 31, 2025</p>
              <div className="mt-4 flex items-center text-sm text-amber-600 gap-1">
                <HelpCircle className="h-4 w-4" />
                <span>Late payments incur a 10% surcharge</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="payment">Make Payment</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>
          <TabsContent value="payment" className="mt-6">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Select which funds you want to pay and your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <StrataPaymentForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View your recent payment history and receipts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p>Your payment history will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface PaymentSummaryCardProps {
  title: string
  amount: number
  dueDate: string
  description: string
  icon: React.ReactNode
}

function PaymentSummaryCard({ title, amount, dueDate, description, icon }: PaymentSummaryCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${amount.toFixed(2)}</div>
        <p className="text-sm text-muted-foreground mt-1">Due by {dueDate}</p>
        <p className="text-sm mt-4">{description}</p>
      </CardContent>
    </Card>
  )
}


