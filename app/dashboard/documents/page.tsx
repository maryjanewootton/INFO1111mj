import type React from "react"
import { FileText, Download, Search, Filter, FolderOpen, FileIcon, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import DashboardHeader from "@/components/dashboard-header"

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader activePage="documents" />

      <main className="container py-6 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Strata Documents</h1>
            <p className="text-muted-foreground">Access important building documents and records</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search documents..." className="w-full md:w-[200px] pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="meetings">Meeting Minutes</TabsTrigger>
            <TabsTrigger value="bylaws">Bylaws & Rules</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Access the most recently added or updated documents</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <DocumentRow
                      name="Annual Budget 2025-2026"
                      category="Financial"
                      date="March 5, 2025"
                      size="1.2 MB"
                    />
                    <DocumentRow
                      name="AGM Minutes - February 2025"
                      category="Meeting Minutes"
                      date="March 3, 2025"
                      size="450 KB"
                    />
                    <DocumentRow
                      name="Building Insurance Certificate"
                      category="Insurance"
                      date="March 1, 2025"
                      size="2.1 MB"
                    />
                    <DocumentRow
                      name="Updated Strata Bylaws"
                      category="Bylaws & Rules"
                      date="February 28, 2025"
                      size="3.5 MB"
                    />
                    <DocumentRow
                      name="Quarterly Financial Statement"
                      category="Financial"
                      date="February 15, 2025"
                      size="1.8 MB"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <DocumentCategoryCard
                title="Financial Documents"
                count={12}
                icon={<FileText className="h-5 w-5" />}
                description="Budgets, financial statements, and audit reports"
              />
              <DocumentCategoryCard
                title="Meeting Minutes"
                count={24}
                icon={<Calendar className="h-5 w-5" />}
                description="Records of AGMs, committee meetings, and special meetings"
              />
              <DocumentCategoryCard
                title="Bylaws & Rules"
                count={5}
                icon={<FileIcon className="h-5 w-5" />}
                description="Strata bylaws, rules, and regulations"
              />
              <DocumentCategoryCard
                title="Insurance Documents"
                count={3}
                icon={<FolderOpen className="h-5 w-5" />}
                description="Building insurance policies and certificates"
              />
            </div>
          </TabsContent>

          <TabsContent value="financial" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Financial Documents</CardTitle>
                <CardDescription>Access budgets, financial statements, and audit reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <DocumentRow
                      name="Annual Budget 2025-2026"
                      category="Financial"
                      date="March 5, 2025"
                      size="1.2 MB"
                    />
                    <DocumentRow
                      name="Quarterly Financial Statement"
                      category="Financial"
                      date="February 15, 2025"
                      size="1.8 MB"
                    />
                    <DocumentRow name="Audit Report 2024" category="Financial" date="January 20, 2025" size="2.5 MB" />
                    <DocumentRow
                      name="Special Levy Assessment"
                      category="Financial"
                      date="December 10, 2024"
                      size="1.1 MB"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meetings" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Meeting Minutes</CardTitle>
                <CardDescription>Records of AGMs, committee meetings, and special meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <DocumentRow
                      name="AGM Minutes - February 2025"
                      category="Meeting Minutes"
                      date="March 3, 2025"
                      size="450 KB"
                    />
                    <DocumentRow
                      name="Committee Meeting - January 2025"
                      category="Meeting Minutes"
                      date="January 25, 2025"
                      size="320 KB"
                    />
                    <DocumentRow
                      name="Special General Meeting - December 2024"
                      category="Meeting Minutes"
                      date="December 22, 2024"
                      size="480 KB"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bylaws" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Bylaws & Rules</CardTitle>
                <CardDescription>Strata bylaws, rules, and regulations</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <DocumentRow
                      name="Updated Strata Bylaws"
                      category="Bylaws & Rules"
                      date="February 28, 2025"
                      size="3.5 MB"
                    />
                    <DocumentRow
                      name="Pet Policy Guidelines"
                      category="Bylaws & Rules"
                      date="January 15, 2025"
                      size="1.2 MB"
                    />
                    <DocumentRow
                      name="Noise Regulations"
                      category="Bylaws & Rules"
                      date="December 5, 2024"
                      size="850 KB"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance" className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Insurance Documents</CardTitle>
                <CardDescription>Building insurance policies and certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Date Added</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <DocumentRow
                      name="Building Insurance Certificate"
                      category="Insurance"
                      date="March 1, 2025"
                      size="2.1 MB"
                    />
                    <DocumentRow
                      name="Public Liability Insurance"
                      category="Insurance"
                      date="January 10, 2025"
                      size="1.8 MB"
                    />
                    <DocumentRow
                      name="Workers Compensation Certificate"
                      category="Insurance"
                      date="December 15, 2024"
                      size="1.5 MB"
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface DocumentRowProps {
  name: string
  category: string
  date: string
  size: string
}

function DocumentRow({ name, category, date, size }: DocumentRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          {name}
        </div>
      </TableCell>
      <TableCell>{category && <Badge variant="outline">{category}</Badge>}</TableCell>
      <TableCell>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="h-3 w-3" />
          {date}
        </div>
      </TableCell>
      <TableCell>{size}</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </TableCell>
    </TableRow>
  )
}

interface DocumentCategoryCardProps {
  title: string
  count: number
  icon: React.ReactNode
  description: string
}

function DocumentCategoryCard({ title, count, icon, description }: DocumentCategoryCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="bg-primary/10 p-2 rounded-full text-primary">{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="gap-1">
          <FolderOpen className="h-4 w-4" />
          View All
        </Button>
      </CardFooter>
    </Card>
  )
}

