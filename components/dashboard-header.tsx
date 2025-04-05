"use client"

import Link from "next/link"
import { Building, Bell, Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardHeaderProps {
  activePage?: string
}

export default function DashboardHeader({ activePage = "payments" }: DashboardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Payments", href: "/dashboard", id: "payments" },
    { name: "Notices", href: "/dashboard/notices", id: "notices" },
    { name: "Maintenance", href: "/dashboard/maintenance", id: "maintenance" },
    { name: "Documents", href: "/dashboard/documents", id: "documents" },
  ]

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      activePage === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#"
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="font-bold">Strata Portal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium ${
                  activePage === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

