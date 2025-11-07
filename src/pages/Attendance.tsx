import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, CheckCircle, XCircle, AlertCircle, LogIn, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Attendance = () => {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-muted-foreground">{currentDate}</p>
        </div>

        {/* Punch In/Out Section */}
        <Card className="border-2 border-primary">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Current Time</p>
                <p className="text-4xl font-bold">{currentTime}</p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <LogIn className="h-5 w-5" />
                  Punch In
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <LogOut className="h-5 w-5" />
                  Punch Out
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Last punch: Today at 9:00 AM
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          <StatCard
            title="Present Today"
            value="231"
            icon={CheckCircle}
            description="Out of 248 employees"
          />
          <StatCard
            title="Absent"
            value="5"
            icon={XCircle}
            description="2% of workforce"
          />
          <StatCard
            title="On Leave"
            value="12"
            icon={AlertCircle}
            description="Approved leaves"
          />
          <StatCard
            title="Late Check-ins"
            value="8"
            icon={Clock}
            description="After 9:30 AM"
          />
        </div>

        {/* Attendance Calendar & List */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Sarah Johnson", time: "9:00 AM", status: "on-time" },
                  { name: "Mike Chen", time: "9:05 AM", status: "on-time" },
                  { name: "Emily Davis", time: "9:45 AM", status: "late" },
                  { name: "Robert Wilson", time: "Absent", status: "absent" },
                  { name: "Lisa Anderson", time: "8:55 AM", status: "early" },
                ].map((record, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {record.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{record.name}</p>
                        <p className="text-xs text-muted-foreground">{record.time}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        record.status === 'on-time' || record.status === 'early' 
                          ? 'default' 
                          : record.status === 'late' 
                          ? 'secondary' 
                          : 'destructive'
                      }
                    >
                      {record.status === 'on-time' && 'On Time'}
                      {record.status === 'early' && 'Early'}
                      {record.status === 'late' && 'Late'}
                      {record.status === 'absent' && 'Absent'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Summary */}
          <Card>
            <CardHeader>
              <CardTitle>This Month Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium">Total Working Days</span>
                  <span className="text-2xl font-bold">22</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium">Days Present</span>
                  <span className="text-2xl font-bold text-accent">20</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium">Days Absent</span>
                  <span className="text-2xl font-bold text-destructive">1</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-sm font-medium">On Leave</span>
                  <span className="text-2xl font-bold text-warning">1</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium">Attendance Rate</span>
                  <span className="text-2xl font-bold text-primary">91%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Date</th>
                    <th className="text-left py-3 px-4 font-medium">Check In</th>
                    <th className="text-left py-3 px-4 font-medium">Check Out</th>
                    <th className="text-left py-3 px-4 font-medium">Hours</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "Dec 15, 2024", checkIn: "9:00 AM", checkOut: "6:00 PM", hours: "9h", status: "on-time" },
                    { date: "Dec 14, 2024", checkIn: "9:05 AM", checkOut: "6:15 PM", hours: "9h 10m", status: "on-time" },
                    { date: "Dec 13, 2024", checkIn: "9:45 AM", checkOut: "6:30 PM", hours: "8h 45m", status: "late" },
                    { date: "Dec 12, 2024", checkIn: "8:55 AM", checkOut: "6:00 PM", hours: "9h 5m", status: "early" },
                    { date: "Dec 11, 2024", checkIn: "-", checkOut: "-", hours: "-", status: "leave" },
                  ].map((record, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-3 px-4">{record.date}</td>
                      <td className="py-3 px-4">{record.checkIn}</td>
                      <td className="py-3 px-4">{record.checkOut}</td>
                      <td className="py-3 px-4">{record.hours}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant={
                            record.status === 'on-time' || record.status === 'early' 
                              ? 'default' 
                              : record.status === 'late' 
                              ? 'secondary' 
                              : 'outline'
                          }
                        >
                          {record.status === 'on-time' && 'On Time'}
                          {record.status === 'early' && 'Early'}
                          {record.status === 'late' && 'Late'}
                          {record.status === 'leave' && 'On Leave'}
                        </Badge>
                      </td>
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

export default Attendance;
