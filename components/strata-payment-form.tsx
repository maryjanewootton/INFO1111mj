"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function StrataPaymentForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [selectedFunds, setSelectedFunds] = useState({
    administration: true,
    capitalWorks: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsComplete(true)
  }

  const handleFundSelection = (fund: "administration" | "capitalWorks", checked: boolean) => {
    setSelectedFunds((prev) => ({
      ...prev,
      [fund]: checked,
    }))
  }

  // Calculate total based on selected funds
  const getTotal = () => {
    let total = 0
    if (selectedFunds.administration) total += 850
    if (selectedFunds.capitalWorks) total += 650
    return total
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Payment Successful</h3>
        <p className="text-muted-foreground mb-6">
          Your payment of ${getTotal().toFixed(2)} has been processed successfully.
        </p>
        <p className="text-sm mb-4">Transaction ID: STR-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        <p className="text-sm mb-6">A receipt has been sent to your email address.</p>
        <Button asChild>
          <a href="/dashboard">Return to Dashboard</a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Select Funds to Pay</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="administration"
              checked={selectedFunds.administration}
              onCheckedChange={(checked) => handleFundSelection("administration", checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="administration" className="text-base font-medium">
                Administration Fund
              </Label>
              <p className="text-sm text-muted-foreground">$850.00 - Covers day-to-day expenses</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="capitalWorks"
              checked={selectedFunds.capitalWorks}
              onCheckedChange={(checked) => handleFundSelection("capitalWorks", checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="capitalWorks" className="text-base font-medium">
                Capital Works Fund
              </Label>
              <p className="text-sm text-muted-foreground">$650.00 - Funds major repairs and improvements</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-4">Payment Method</h3>
        <RadioGroup
          defaultValue="credit-card"
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Credit or Debit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="direct-debit" id="direct-debit" />
            <Label htmlFor="direct-debit">Direct Debit</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank-transfer" id="bank-transfer" />
            <Label htmlFor="bank-transfer">Bank Transfer</Label>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === "credit-card" && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Smith" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {paymentMethod === "direct-debit" && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input id="accountName" placeholder="John Smith" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bsb">BSB</Label>
              <Input id="bsb" placeholder="123-456" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input id="accountNumber" placeholder="12345678" required />
            </div>
          </CardContent>
        </Card>
      )}

      {paymentMethod === "bank-transfer" && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-sm">Please use the following details to make your bank transfer:</p>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="font-medium">Account Name:</div>
                <div>Strata Plan SP12345</div>
                <div className="font-medium">BSB:</div>
                <div>062-000</div>
                <div className="font-medium">Account Number:</div>
                <div>12345678</div>
                <div className="font-medium">Reference:</div>
                <div>LOT 42</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Note: Bank transfers may take 1-2 business days to process.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="bg-muted p-4 rounded-lg">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Processing Fee</span>
          <span>$0.00</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading || getTotal() === 0}>
        {isLoading ? "Processing..." : `Pay $${getTotal().toFixed(2)}`}
      </Button>
    </form>
  )
}
