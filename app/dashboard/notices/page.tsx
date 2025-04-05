import { Bell, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardHeader from "@/components/dashboard-header"

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader activePage="notices" />

      <main className="container py-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Building Notices</h1>
            <p className="text-muted-foreground">Stay updated with important announcements and events</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search notices..." className="w-full md:w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="important">Important</TabsTrigger>
            <TabsTrigger value="meetings">Meetings</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-4">
            <NoticeCard
              title="Annual General Meeting"
              date="March 15, 2025"
              category="Meeting"
              important={true}
              content="The Annual General Meeting will be held on March 15, 2025 at 7:00 PM in the building's common room. All owners are encouraged to attend as we will be discussing the budget for the upcoming financial year, electing new committee members, and addressing any concerns raised by owners."
            />

            <NoticeCard
              title="Water Shutdown for Maintenance"
              date="March 10, 2025"
              category="Maintenance"
              important={true}
              content="Please be advised that the water supply will be shut off on March 10, 2025 from 9:00 AM to 2:00 PM for essential maintenance work on the building's plumbing system. We apologize for any inconvenience this may cause."
            />

            <NoticeCard
              title="New Recycling Guidelines"
              date="March 5, 2025"
              category="General"
              important={false}
              content="Please note the updated recycling guidelines for our building. Effective immediately, soft plastics should be placed in the dedicated bin in the basement. Glass, paper, and hard plastics continue to go in the yellow-topped bins."
            />

            <NoticeCard
              title="Visitor Parking Reminder"
              date="March 1, 2025"
              category="General"
              important={false}
              content="This is a friendly reminder that visitor parking spaces are limited to 24 hours per visit. Please register all visitors' vehicles with building management to avoid penalties."
            />

            <NoticeCard
              title="Fire Alarm Testing"
              date="February 25, 2025"
              category="Maintenance"
              important={true}
              content="Mandatory fire alarm testing will be conducted on February 25, 2025 between 10:00 AM and 12:00 PM. The alarms will sound intermittently during this period. No evacuation is required during the test."
            />
          </TabsContent>

          <TabsContent value="important" className="mt-6 space-y-4">
            <NoticeCard
              title="Annual General Meeting"
              date="March 15, 2025"
              category="Meeting"
              important={true}
              content="The Annual General Meeting will be held on March 15, 2025 at 7:00 PM in the building's common room. All owners are encouraged to attend as we will be discussing the budget for the upcoming financial year, electing new committee members, and addressing any concerns raised by owners."
            />

            <NoticeCard
              title="Water Shutdown for Maintenance"
              date="March 10, 2025"
              category="Maintenance"
              important={true}
              content="Please be advised that the water supply will be shut off on March 10, 2025 from 9:00 AM to 2:00 PM for essential maintenance work on the building's plumbing system. We apologize for any inconvenience this may cause."
            />

            <NoticeCard
              title="Fire Alarm Testing"
              date="February 25, 2025"
              category="Maintenance"
              important={true}
              content="Mandatory fire alarm testing will be conducted on February 25, 2025 between 10:00 AM and 12:00 PM. The alarms will sound intermittently during this period. No evacuation is required during the test."
            />
          </TabsContent>

          <TabsContent value="meetings" className="mt-6 space-y-4">
            <NoticeCard
              title="Annual General Meeting"
              date="March 15, 2025"
              category="Meeting"
              important={true}
              content="The Annual General Meeting will be held on March 15, 2025 at 7:00 PM in the building's common room. All owners are encouraged to attend as we will be discussing the budget for the upcoming financial year, electing new committee members, and addressing any concerns raised by owners."
            />
          </TabsContent>

          <TabsContent value="maintenance" className="mt-6 space-y-4">
            <NoticeCard
              title="Water Shutdown for Maintenance"
              date="March 10, 2025"
              category="Maintenance"
              important={true}
              content="Please be advised that the water supply will be shut off on March 10, 2025 from 9:00 AM to 2:00 PM for essential maintenance work on the building's plumbing system. We apologize for any inconvenience this may cause."
            />

            <NoticeCard
              title="Fire Alarm Testing"
              date="February 25, 2025"
              category="Maintenance"
              important={true}
              content="Mandatory fire alarm testing will be conducted on February 25, 2025 between 10:00 AM and 12:00 PM. The alarms will sound intermittently during this period. No evacuation is required during the test."
            />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface NoticeCardProps {
  title: string
  date: string
  category: string
  important: boolean
  content: string
}

function NoticeCard({ title, date, category, important, content }: NoticeCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">{category}</Badge>
            {important && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <Bell className="h-3 w-3" />
                Important
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{content}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}

