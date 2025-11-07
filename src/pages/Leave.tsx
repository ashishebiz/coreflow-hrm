import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Plus, Clock, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Leave = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Leave Management</h1>
            <p className="text-muted-foreground">Manage your leaves and time off</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Apply Leave
          </Button>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            title="Annual Leave"
            value="12"
            icon={Calendar}
            description="Days remaining"
          />
          <StatCard
            title="Sick Leave"
            value="5"
            icon={Clock}
            description="Days remaining"
          />
          <StatCard
            title="Casual Leave"
            value="3"
            icon={Calendar}
            description="Days remaining"
          />
          <StatCard
            title="Used This Year"
            value="8"
            icon={CheckCircle}
            description="Out of 28 days"
          />
        </div>

        {/* Leave Requests & Upcoming Leaves */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* My Leave Requests */}
          <Card>
            <CardHeader>
              <CardTitle>My Leave Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    type: "Annual Leave", 
                    dates: "Dec 20-24, 2024", 
                    days: 5, 
                    status: "pending",
                    reason: "Family vacation"
                  },
                  { 
                    type: "Sick Leave", 
                    dates: "Dec 10, 2024", 
                    days: 1, 
                    status: "approved",
                    reason: "Medical appointment"
                  },
                  { 
                    type: "Casual Leave", 
                    dates: "Nov 28, 2024", 
                    days: 1, 
                    status: "approved",
                    reason: "Personal work"
                  },
                ].map((leave, i) => (
                  <div key={i} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{leave.type}</span>
                      </div>
                      <Badge 
                        variant={
                          leave.status === 'approved' 
                            ? 'default' 
                            : leave.status === 'pending' 
                            ? 'secondary' 
                            : 'destructive'
                        }
                      >
                        {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{leave.dates}</p>
                      <p>{leave.days} {leave.days === 1 ? 'day' : 'days'}</p>
                      <p className="mt-1 text-xs">{leave.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Team Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground mb-4">
                  Upcoming leaves in your team
                </div>
                {[
                  { name: "Sarah Johnson", dates: "Dec 18-20", type: "Annual" },
                  { name: "Mike Chen", dates: "Dec 22-26", type: "Annual" },
                  { name: "Emily Davis", dates: "Dec 24-25", type: "Casual" },
                  { name: "Robert Wilson", dates: "Dec 27-31", type: "Annual" },
                ].map((leave, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {leave.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{leave.name}</p>
                        <p className="text-xs text-muted-foreground">{leave.dates}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{leave.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Holidays Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Company Holidays 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "Christmas Day", date: "Dec 25, 2024", day: "Wednesday" },
                { name: "New Year's Day", date: "Jan 1, 2025", day: "Monday" },
                { name: "Independence Day", date: "Jul 4, 2024", day: "Thursday" },
                { name: "Thanksgiving", date: "Nov 28, 2024", day: "Thursday" },
                { name: "Labor Day", date: "Sep 2, 2024", day: "Monday" },
                { name: "Memorial Day", date: "May 27, 2024", day: "Monday" },
              ].map((holiday, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{holiday.name}</h3>
                      <p className="text-sm text-muted-foreground">{holiday.date}</p>
                      <p className="text-xs text-muted-foreground">{holiday.day}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leave History */}
        <Card>
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Type</th>
                    <th className="text-left py-3 px-4 font-medium">From</th>
                    <th className="text-left py-3 px-4 font-medium">To</th>
                    <th className="text-left py-3 px-4 font-medium">Days</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Approved By</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Annual", from: "Dec 20", to: "Dec 24", days: 5, status: "pending", approver: "-" },
                    { type: "Sick", from: "Dec 10", to: "Dec 10", days: 1, status: "approved", approver: "John Smith" },
                    { type: "Casual", from: "Nov 28", to: "Nov 28", days: 1, status: "approved", approver: "John Smith" },
                    { type: "Annual", from: "Oct 15", to: "Oct 19", days: 5, status: "approved", approver: "John Smith" },
                  ].map((record, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 px-4">{record.type}</td>
                      <td className="py-3 px-4">{record.from}</td>
                      <td className="py-3 px-4">{record.to}</td>
                      <td className="py-3 px-4">{record.days}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant={
                            record.status === 'approved' 
                              ? 'default' 
                              : 'secondary'
                          }
                        >
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{record.approver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Leave;
