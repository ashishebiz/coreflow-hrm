import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Users, Clock, Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Employees"
            value="248"
            icon={Users}
            description="Active employees"
            trend={{ value: "12% from last month", positive: true }}
          />
          <StatCard
            title="Present Today"
            value="231"
            icon={CheckCircle}
            description="93% attendance rate"
            trend={{ value: "2% from yesterday", positive: true }}
          />
          <StatCard
            title="On Leave"
            value="12"
            icon={Calendar}
            description="8 pending approvals"
          />
          <StatCard
            title="Late Check-ins"
            value="5"
            icon={Clock}
            description="Today's late arrivals"
            trend={{ value: "3 less than yesterday", positive: true }}
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Sarah Johnson", action: "submitted leave request", time: "2 min ago", type: "leave" },
                  { name: "Mike Chen", action: "checked in", time: "15 min ago", type: "attendance" },
                  { name: "Emily Davis", action: "completed onboarding", time: "1 hour ago", type: "employee" },
                  { name: "Robert Wilson", action: "submitted expense claim", time: "2 hours ago", type: "expense" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      {activity.type === 'leave' && <Calendar className="h-4 w-4 text-primary" />}
                      {activity.type === 'attendance' && <Clock className="h-4 w-4 text-accent" />}
                      {activity.type === 'employee' && <Users className="h-4 w-4 text-primary" />}
                      {activity.type === 'expense' && <TrendingUp className="h-4 w-4 text-warning" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.name}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Approvals */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Approvals</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Leave Request - Sarah Johnson", type: "leave", urgent: true },
                  { title: "Expense Claim - Robert Wilson", type: "expense", urgent: false },
                  { title: "Timesheet - Team Alpha", type: "timesheet", urgent: true },
                  { title: "Leave Request - Mike Chen", type: "leave", urgent: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      item.urgent ? 'bg-destructive/10' : 'bg-muted'
                    }`}>
                      <AlertCircle className={`h-4 w-4 ${item.urgent ? 'text-destructive' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Reject</Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <Button className="h-20 flex-col gap-2">
                <Users className="h-5 w-5" />
                Add Employee
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Calendar className="h-5 w-5" />
                Mark Attendance
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Clock className="h-5 w-5" />
                View Timesheets
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <TrendingUp className="h-5 w-5" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
