"use client"

import type React from "react"

import { useState } from "react"
import { Wrench, Plus, Clock, CheckCircle, AlertCircle, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardHeader from "@/components/dashboard-header"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader activePage="maintenance" />

      <main className="container py-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Maintenance Requests</h1>
            <p className="text-muted-foreground">Submit and track maintenance issues in your building</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search requests..." className="w-full md:w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <NewRequestDialog />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            <MaintenanceRequestCard
              id="MR-2025-0103"
              title="Leaking Kitchen Faucet"
              date="March 3, 2025"
              status="open"
              priority="medium"
              description="The kitchen faucet has been leaking steadily for the past two days. Water is pooling around the base and dripping into the cabinet below."
              updates={[{ date: "March 3, 2025", content: "Request received and logged." }]}
            />

            <MaintenanceRequestCard
              id="MR-2025-0102"
              title="Hallway Light Fixture Not Working"
              date="March 2, 2025"
              status="in-progress"
              priority="low"
              description="The light fixture in the common hallway on the 3rd floor is not working. I've checked and it's not just a burnt-out bulb."
              updates={[
                { date: "March 2, 2025", content: "Request received and logged." },
                { date: "March 3, 2025", content: "Maintenance team scheduled to inspect on March 5." },
              ]}
            />

            <MaintenanceRequestCard
              id="MR-2025-0101"
              title="Broken Intercom System"
              date="March 1, 2025"
              status="completed"
              priority="high"
              description="The intercom in unit 42 is not working. Cannot hear visitors or buzz them in."
              updates={[
                { date: "March 1, 2025", content: "Request received and logged." },
                { date: "March 2, 2025", content: "Technician dispatched to inspect the issue." },
                { date: "March 3, 2025", content: "Intercom system repaired. Faulty wiring was replaced." },
              ]}
            />
          </TabsContent>

          <TabsContent value="open" className="mt-6 space-y-4">
            <MaintenanceRequestCard
              id="MR-2025-0103"
              title="Leaking Kitchen Faucet"
              date="March 3, 2025"
              status="open"
              priority="medium"
              description="The kitchen faucet has been leaking steadily for the past two days. Water is pooling around the base and dripping into the cabinet below."
              updates={[{ date: "March 3, 2025", content: "Request received and logged." }]}
            />
          </TabsContent>

          <TabsContent value="in-progress" className="mt-6 space-y-4">
            <MaintenanceRequestCard
              id="MR-2025-0102"
              title="Hallway Light Fixture Not Working"
              date="March 2, 2025"
              status="in-progress"
              priority="low"
              description="The light fixture in the common hallway on the 3rd floor is not working. I've checked and it's not just a burnt-out bulb."
              updates={[
                { date: "March 2, 2025", content: "Request received and logged." },
                { date: "March 3, 2025", content: "Maintenance team scheduled to inspect on March 5." },
              ]}
            />
          </TabsContent>

          <TabsContent value="completed" className="mt-6 space-y-4">
            <MaintenanceRequestCard
              id="MR-2025-0101"
              title="Broken Intercom System"
              date="March 1, 2025"
              status="completed"
              priority="high"
              description="The intercom in unit 42 is not working. Cannot hear visitors or buzz them in."
              updates={[
                { date: "March 1, 2025", content: "Request received and logged." },
                { date: "March 2, 2025", content: "Technician dispatched to inspect the issue." },
                { date: "March 3, 2025", content: "Intercom system repaired. Faulty wiring was replaced." },
              ]}
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function NewRequestDialog() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    // Would normally close dialog and refresh list
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>New Maintenance Request</DialogTitle>
            <DialogDescription>Submit a new maintenance request for your unit or common areas.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Issue Title</Label>
              <Input id="title" placeholder="Brief description of the issue" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Select defaultValue="unit">
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unit">My Unit</SelectItem>
                  <SelectItem value="common">Common Area</SelectItem>
                  <SelectItem value="exterior">Building Exterior</SelectItem>
                  <SelectItem value="parking">Parking Area</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Not Urgent</SelectItem>
                  <SelectItem value="medium">Medium - Needs Attention</SelectItem>
                  <SelectItem value="high">High - Urgent Issue</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea
                id="description"
                placeholder="Please provide details about the issue, including when it started and any relevant information"
                rows={4}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="access">Access Instructions (Optional)</Label>
              <Input id="access" placeholder="Any special instructions for accessing the area" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Request"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

interface MaintenanceRequestCardProps {
  id: string
  title: string
  date: string
  status: "open" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  description: string
  updates: { date: string; content: string }[]
}

function MaintenanceRequestCard({
  id,
  title,
  date,
  status,
  priority,
  description,
  updates,
}: MaintenanceRequestCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Open
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Wrench className="h-3 w-3" />
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="default" className="bg-green-600 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        )
    }
  }

  const getPriorityBadge = () => {
    switch (priority) {
      case "low":
        return <Badge variant="outline">Low Priority</Badge>
      case "medium":
        return <Badge variant="secondary">Medium Priority</Badge>
      case "high":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            High Priority
          </Badge>
        )
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              {id} • Submitted on {date}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {getStatusBadge()}
            {getPriorityBadge()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-1">Description</h4>
          <p className="text-sm">{description}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-1">Updates</h4>
          <div className="space-y-2">
            {updates.map((update, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{update.date}:</span> {update.content}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          View Details
        </Button>
        {status !== "completed" && (
          <Button variant="outline" size="sm">
            Add Comment
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
