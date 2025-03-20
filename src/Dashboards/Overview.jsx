import React from 'react'
import {
    BarChart,
    Bell,
    ChevronDown,
    Headphones,
    LayoutDashboard,
    Mail,
    MessageSquare,
    Package,
    Search,
    ShoppingCart,
  } from "lucide-react"

const Overview = () => {
  return (
    <div>
         {/* Main Content */}
         <main className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back,</h1>
            <h2 className="text-3xl font-bold">Fade African Clothings !</h2>
            <p className="text-muted-foreground mt-1">Here's Your Current Store Overview</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <Select defaultValue="today">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Today" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">1000</div>
                  <span className="ml-2 rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-600">10% ↓</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">1000</div>
                  <span className="ml-2 rounded-md bg-green-100 px-2 py-0.5 text-xs text-green-600">10% ↑</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">1000</div>
                  <span className="ml-2 rounded-md bg-red-100 px-2 py-0.5 text-xs text-red-600">10% ↓</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Chart */}
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Statistics</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#F5B14C]"></div>
                    <span className="text-sm">Orders</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-[#F5D7A8]"></div>
                    <span className="text-sm">Completed</span>
                  </div>
                  <Select defaultValue="3months">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Past 3 Months" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">Past 3 Months</SelectItem>
                      <SelectItem value="6months">Past 6 Months</SelectItem>
                      <SelectItem value="year">Past Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ChartContainer className="h-[300px]">
                  <ChartGrid x={true} y={true} />
                  <ChartBar data={[40, 45, 50, 35, 40, 30, 45, 35, 40, 35, 30, 45]} className="fill-[#F5B14C]" />
                  <ChartBar data={[25, 30, 25, 30, 25, 35, 20, 30, 25, 30, 20, 25]} className="fill-[#F5D7A8]" />
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Section */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Audience by Region */}
            <Card>
              <CardHeader>
                <CardTitle>Audience by Region</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=300&width=500" alt="World Map" fill className="object-contain" />
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#F5B14C] text-white p-2 rounded-md text-xs">
                      <div>Impressions: 2000</div>
                      <div>Clicks: 1000</div>
                      <div>Orders: 100</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Upcoming Orders</CardTitle>
                <Button variant="link" size="sm" className="text-sm">
                  View More
                </Button>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="urgent">
                  <TabsList className="mb-4">
                    <TabsTrigger value="urgent" className="bg-[#F5B14C] text-white data-[state=active]:bg-[#F5B14C]">
                      Urgent
                    </TabsTrigger>
                    <TabsTrigger value="normal">Normal</TabsTrigger>
                    <TabsTrigger value="dispatched">Dispatched</TabsTrigger>
                    <TabsTrigger value="returns">Returns</TabsTrigger>
                  </TabsList>
                  <TabsContent value="urgent" className="space-y-4">
                    {[
                      { date: "15-08-2023", order: "#01355" },
                      { date: "16-08-2023", order: "#01355" },
                      { date: "16-08-2023", order: "#01355" },
                    ].map((order, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2">
                        <div>
                          <div className="font-medium">{order.date}</div>
                          <div className="text-sm text-muted-foreground">Order {order.order}</div>
                          <div className="text-sm text-muted-foreground">• Item 1</div>
                          <div className="text-sm text-muted-foreground">• Item 1</div>
                          <div className="text-sm text-muted-foreground">• Item 1</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">13:55 PM</div>
                          <div className="text-sm">3x</div>
                          <div className="text-sm">3x</div>
                          <div className="text-sm">3x</div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="normal">
                    <div className="text-center py-8 text-muted-foreground">No normal orders at the moment</div>
                  </TabsContent>
                  <TabsContent value="dispatched">
                    <div className="text-center py-8 text-muted-foreground">No dispatched orders at the moment</div>
                  </TabsContent>
                  <TabsContent value="returns">
                    <div className="text-center py-8 text-muted-foreground">No returns at the moment</div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
    </div>
  )
}

export default Overview